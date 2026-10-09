#!/usr/bin/env python3
"""Saved math checks for Inquire topic pages.

Every topic has a file checks/<field>/<topic-id>.py that re-computes, with sympy, each
number the page states: the worked example and all practice answers (plus any formal
claims worth pinning down). Block lessons (layers.concept.ideas) also need the Concept walk,
the Intermediate tasks and exact-value goals, the Concept example tiles and the Formal setup
(see block_labels). This runner executes them all and also enforces coverage:
every topic needs a file, and every labelled item ("example", "practice[0]" …) must be
checked or explicitly skipped with a reason.

Run:   python3 tools/mathcheck.py              all topics
       python3 tools/mathcheck.py a1-slope     just these topics
       python3 tools/mathcheck.py --stamp a1-slope   record that a1-slope's checks match its page

Drift guard: each check file's first line is "# content: <hash>" of the page's formal statement,
worked example and practice. If the page is edited, the hash no longer matches and the run fails
until someone updates the checks to the new text and re-stamps (a stamp is refused unless every
check for that topic passes).
Needs: pip install sympy

Writing a check file (helpers below are available without importing):
    same("example", Rational(9, 6), Rational(3, 2))          # values are equal (exact)
    same("practice[1]", expand((x+3)*(x-2)), x**2 + x - 6)   # expressions are identical
    solves("practice[2]", Eq(3*x - 4, 11), x, {5})            # real solution set is exactly {5}
    check("practice[3]", 29 % 4 == 1, "remainder 1")          # any True/False fact
    near("practice[2]", sqrt(2*9.80*12), 15.3)                  # physics: rounded page value within 0.5 %
    skip("practice[0]", "vocabulary question, nothing to compute")
`page` is the topic's dumped content (formal, example, practice, stories) for checks on text.
English pages also need "story[0]" … : the passage, tags stripped, equals the verified source text (see web/CONTENT-BRIEF-ENGLISH.md).
A label is covered if at least one call uses it (use "example" for the worked example).
Extra labels ("formal", "steps") are fine. Symbols a–z are predefined as real symbols.
Check what the PAGE says: type the page's numbers in, and compute the truth independently.
"""
import hashlib, json, os, re, subprocess, sys, traceback
try:
    import sympy as sp
except ImportError:
    sys.exit('Math checks need sympy. One-time setup:  python3 -m pip install --user sympy')

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CHECKS = os.path.join(ROOT, 'checks')
sys.path.insert(0, os.path.join(CHECKS, '_lib'))   # shared helpers for check files, e.g. `from music import *`


def load_content():
    path = os.environ.get('CODEX_CONTENT_JSON')
    if path:
        with open(path, encoding='utf8') as f:
            return json.load(f)
    out = subprocess.run(['node', os.path.join(ROOT, 'tools', 'dump-content.js')], capture_output=True, text=True, check=True)
    return json.loads(out.stdout)


def content_hash(info):
    keys = ('formal', 'example', 'practice') + (('stories',) if info.get('stories') else ()) + (('layers',) if info.get('layers') else ())   # English pages: quoted passages too; layered lessons: concept examples + formal setup
    blob = json.dumps({k: info.get(k) for k in keys}, sort_keys=True, ensure_ascii=False)
    return hashlib.sha256(blob.encode('utf8')).hexdigest()[:12]


def detok(tokens):
    """Rebuild plain text from an English story token string ("word_tag", punctuation, ¶ paragraph breaks).
    Mirrors DB.storyText in web/src/data.js."""
    out = ''
    for t in tokens.split():
        if t == '¶':
            out += '\n'; continue
        w = re.sub(r'_[a-z]+\*?(#[a-z0-9]+)?$', '', t).replace('~', ' ')
        glue = out == '' or out.endswith('\n') or out.endswith(('“', '—', '‘', '(')) or re.match(r'^([,.;:!?’”—)]|’[a-z]|n’t)', w)
        out += ('' if glue else ' ') + w
    return out


STAMP = re.compile(r'^# content: ([0-9a-f]{12})\n')


class Run:
    def __init__(self, tid):
        self.tid, self.ok, self.fail, self.covered, self.skipped = tid, 0, [], set(), {}

    def _pass(self, label, good, why):
        self.covered.add(label)
        if good:
            self.ok += 1
        else:
            self.fail.append(f'{label}: {why}')

    def helpers(self):
        def check(label, cond, detail=''):
            self._pass(label, bool(cond), detail or 'condition is false')

        def text(label, got, expected):
            # exact text comparison (program output, error messages); shows both sides when they differ
            self._pass(label, got == expected, f'got {got!r}, page says {expected!r}')

        def same(label, got, expected):
            try:
                if isinstance(got, (set, frozenset, list, tuple)) or isinstance(expected, (set, frozenset, list, tuple)):
                    g = type(got)(sp.nsimplify(v) if isinstance(v, float) else sp.sympify(v) for v in got)
                    e = type(expected)(sp.nsimplify(v) if isinstance(v, float) else sp.sympify(v) for v in expected)
                    good = g == e
                elif isinstance(got, sp.Set) or isinstance(expected, sp.Set):
                    good = sp.sympify(got) == sp.sympify(expected)
                elif isinstance(got, (sp.Eq, sp.Rel)) or isinstance(expected, (sp.Eq, sp.Rel)):
                    good = sp.simplify(got) == sp.simplify(expected)
                else:
                    a = sp.nsimplify(got) if isinstance(got, float) else sp.sympify(got)
                    b = sp.nsimplify(expected) if isinstance(expected, float) else sp.sympify(expected)
                    good = sp.simplify(a - b) == 0
            except Exception as ex:
                self._pass(label, False, f'could not compare {got!r} and {expected!r}: {ex}')
                return
            self._pass(label, good, f'{got} ≠ {expected}')

        def solves(label, equation, var, expected, domain=sp.S.Reals):
            sol = sp.solveset(equation, var, domain=domain)
            exp = expected if isinstance(expected, sp.Set) else sp.FiniteSet(*[sp.sympify(v) for v in expected])
            self._pass(label, sp.simplify(sol.symmetric_difference(exp)) == sp.S.EmptySet or sol == exp,
                       f'solution set is {sol}, page says {exp}')

        def near(label, got, page, rel=0.005):
            """Physics numbers: the page's rounded value matches the computed one to within rel (default 0.5 %)."""
            try:
                g, e = float(sp.N(got)), float(sp.N(page))
                good = abs(g - e) <= rel * max(abs(g), abs(e), 1e-300)
            except Exception as ex:
                self._pass(label, False, f'could not compare {got!r} and {page!r}: {ex}')
                return
            self._pass(label, good, f'computed {g:.6g}, page says {e:.6g}')

        def skip(label, reason):
            if not reason or len(reason) < 8:
                self.fail.append(f'{label}: skip() needs a real reason')
            self.covered.add(label)
            self.skipped[label] = reason

        def quote(label, tokens, source):
            """English: a story's token string, rebuilt as plain text, equals the verbatim source passage."""
            got = detok(tokens)
            self._pass(label, got == source, f'passage differs from source:\n   page:   {got}\n   source: {source}')

        return dict(check=check, same=same, text=text, solves=solves, near=near, skip=skip, quote=quote, detok=detok)


def block_labels(L):
    """Block lessons (layers.concept.ideas; the whole `layers` is dumped and hashed): every number a learner is asked
    for or shown worked out needs a check. Labels: concept.walk, layers.examples, layers.setup, build.tasks[i],
    build.exampleTask, build.stepGoal[i] (goals with eq). A longer label covers its prefix ("build.tasks[2].lines")."""
    if 'concept' not in L or not (L.get('concept') or {}).get('ideas'):
        return []
    C, B, F = L.get('concept') or {}, L.get('build') or {}, L.get('formal') or {}
    out = []
    if C.get('walk'): out.append('concept.walk')
    if C.get('examples'): out.append('layers.examples')
    if F.get('setup'): out.append('layers.setup')
    if B.get('exampleTask'): out.append('build.exampleTask')
    out += [f'build.tasks[{i}]' for i, x in enumerate(B.get('tasks') or []) if x.get('check') or x.get('lines')]
    out += [f'build.stepGoal[{i}]' for i, g in enumerate(B.get('stepGoal') or []) if g and 'eq' in g]
    return out


def covers(covered, label):
    return any(c == label or c.startswith((label + '.', label + ' ', label + '[')) for c in covered)


def main(argv):
    content = load_content()
    stamp = '--stamp' in argv
    want = [a for a in argv[1:] if a != '--stamp']
    if stamp and not want:
        print('--stamp needs topic ids (stamp only topics whose checks you have reviewed)')
        return 1
    ids = [t for t in content if not want or t in want]
    unknown = [t for t in want if t not in content]
    problems, total_ok, total_skip = [], 0, 0
    letters = {c: sp.Symbol(c, real=True) for c in 'abcdefghijklmnopqrstuvwxyz'}
    for tid in unknown:
        problems.append(f'{tid}: no such topic')
    for tid in sorted(ids, key=lambda t: (content[t]['field'], t)):
        info = content[tid]
        path = os.path.join(CHECKS, info['field'], tid + '.py')
        if not os.path.exists(path):
            problems.append(f'{tid}: no check file (checks/{info["field"]}/{tid}.py)')
            continue
        with open(path, encoding='utf8') as f:
            src = f.read()
        m = STAMP.match(src)
        h = content_hash(info)
        run = Run(tid)
        env = {'__name__': 'check', **{k: getattr(sp, k) for k in dir(sp) if not k.startswith('_')}, **letters, **run.helpers(), 'page': info}
        try:
            with open(path, encoding='utf8') as f:
                exec(compile(f.read(), path, 'exec'), env)
        except Exception:
            problems.append(f'{tid}: check file crashed\n' + traceback.format_exc(limit=3))
            continue
        need = ['example'] + [f'practice[{i}]' for i in range(len(info.get('practice') or []))]
        need += [f'story[{i}]' for i in range(len(info.get('stories') or []))]   # each quoted passage checked against its source
        need += block_labels(info.get('layers') or {})
        missing = [lbl for lbl in need if not covers(run.covered, lbl)]
        if missing:
            problems.append(f'{tid}: not checked: {", ".join(missing)}')
        problems += [f'{tid}: {m}' for m in run.fail]
        if stamp:
            if missing or run.fail:
                problems.append(f'{tid}: not stamped, because its checks do not all pass')
            else:
                with open(path, 'w', encoding='utf8') as f:
                    f.write(f'# content: {h}\n' + (src[m.end():] if m else src))
                print(f'stamped {tid} ({h})')
        elif not m:
            problems.append(f'{tid}: check file has no "# content:" stamp (run --stamp {tid} after review)')
        elif m.group(1) != h:
            problems.append(f'{tid}: page text changed since its checks were written. Update checks/{info["field"]}/{tid}.py to match, then: python3 tools/mathcheck.py --stamp {tid}')
        total_ok += run.ok
        total_skip += len(run.skipped)
    for p in problems:
        print('FAIL ' + p)
    print(f'\n{len(ids)} topics: {total_ok} checks passed, {total_skip} skipped with reasons, {len(problems)} problem(s)')
    return 1 if problems else 0


if __name__ == '__main__':
    sys.exit(main(sys.argv))
