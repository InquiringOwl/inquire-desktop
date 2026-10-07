# Writer pack: Music Theory

The one brief a Music Theory writer reads. It condenses `CONTENT-BRIEF.md` and `LAB-BRIEF.md` (read those only if something here is unclear). Your topics, prereqs, unlocks, math/physics refs, lab idea and colour keys are in `web/TREE-SPEC-MUSIC.md` and `web/src/data-music.js`.
For the shape and voice of a finished page, run `node tools/excerpt.js mus-pitch` (or any written topic) instead of reading whole files.

## Standard
College music theory: correct terms (pitch class, enharmonic, half step / semitone, generic size vs quality, simple vs compound meter, beat unit, scientific pitch notation with C4 = middle C, A4 = 440 Hz). Match Clendinning & Marvin and Kostka/Payne/Almén usage; note real disagreements (e.g. "half step" US vs "semitone" UK; "quarter note" vs "crotchet") once. No story panels, no narrative. Musical examples are notated on the page or in the lab.

## Page file: `web/content/music-fundamentals/<id>.js`
```js
window.ARITH = window.ARITH || {};
ARITH["mus-pitch"] = {
  title, short (≤ 60 chars), grade: "College MUS 1xx · fundamentals", hours, voice: "plain",
  eyebrow: "Music Fundamentals · pitch",
  hero: `…`,      // one short line, e.g. <span class="m"><span class="c1">C♯<sub>4</sub></span> = <span class="c2">D♭<sub>4</sub></span></span>
  lede, plain (2–4 <p>), formal (definitions; may use <div class="display">),
  legend: [{ c: "c1", sym: `…`, name, desc }],   // 3–5, colours = the lab's colour keys
  steps: { title, items: [3–7 HTML steps] },
  example: { prompt, lines: [{ math, note }], answer },   // a worked analysis, 3–8 lines
  why, careers: [{ role, use }] (5–7, real and specific), life: [4–6 strings], fields: [{ name, use }] (3–5),
  prereqWhy: { id: "…" }, unlocksWhy: { id: "…" },   // one per prereq / WRITTEN unlock (validate rejects planned ones; when you write a node, add the unlocksWhy of the pages that point to it)
  mathWhy: { "ratios": "…", "waves:Simple harmonic motion": "…" },   // one per math AND physics ref of the node
  beyond: [{ field, why }] (2–4 later Music Theory fields), mistakes: [{ wrong, fix }] (2–4),
  practice: [{ q, a }] (exactly 4, easy → hard, full answers), origin (accurate history, or omit)
};
```
Escaped text (no tags): `careers`, `fields`, `beyond`, `life`, `example.lines[].note`. Everything else is HTML. Backtick strings; never write `${` inside them.

Markup: math and notation in `<span class="m">…</span>`; colour with `c1`–`c5` (amber, cyan, pink, violet, green) exactly as the lab's keys. Pitch names `C♯<sub>4</sub>` (real ♯ ♭ ♮ 𝄪 𝄫, octave as subscript). Intervals `M3`, `P5`. Time signatures `<span class="ts"><span>3</span><span>4</span></span>` (stacked, no fraction bar: a time signature is not a fraction). Durations as fractions of a whole note with `<span class="fr"><span>3</span><span>8</span></span>`. Frequencies "440 Hz", ratios "2 : 1". Defined term `<b>term</b>`. U+2212 minus. No emoji, no links, no markdown. Plain, short sentences; no em-dash asides, no "not X but Y", no stock phrases.

## Saved check: `checks/music-fundamentals/<id>.py`
Cover `example` and every `practice[i]` (plus any numbers in `formal`). Use the independent helpers: `from music import *` (`checks/_lib/music.py`: `midi`, `freq`, `pc`, `interval`, `transpose`, `major_scale`, `key_sig`, `staff_pos`, `ledger_count`, `value`, `meter`, `measure_len`, `cents`, `nearest`, `period`, `wavelength`, `uni`) and the runner's `check`, `same`, `near`, `skip(label, reason)`. `page` holds the topic's text (strip tags with `re.sub(r'<[^>]+>', '', s)`). Type the page's numbers in; compute the truth independently. Then `python3 tools/mathcheck.py --stamp <id>`.

## Lab: `web/labs/mus-<n>.js`
```js
(function(){ const L = window.LABS;
L["mus-pitch"] = k => {
  const { C, F } = k, MT = MusicTheory, mk = MusicKit.attach(k), c = k.canvas(), d = c.d;
  let mode = "kb"; k.modes([["kb","Keyboard"],["steps","Steps"]], mode, m => { mode = m; });
  const K = mk.keyboard({ lo: 48, hi: 72 });
  c.cv.addEventListener("pointerdown", e => { const p = c.xy(e), m = K.hit(p.x, p.y); if (m !== null) { sel = m; mk.play(m); } });
  k.button("Play", () => mk.play(sel));
  k.loop(() => { c.begin(); K.draw(c, 20, c.h - 120, c.w - 40, 100, { marks: { [sel]: C.amber } }); k.setRO(`…`); });
  return mk.cleanup;   // stops sound when the page changes
};
})();
```
Lab kit (`k`, from `web/kits/universal/core.js` + `web/kits/categorical/*.js`): `k.canvas()` → `c` (`c.w`, `c.h`, `c.begin()`, `c.xy(e)`, `c.d.text/line/rect/rr/circle/arrow`), `k.dom()`, `k.loop`, `k.every`, `k.slider`, `k.number` (integers), `k.select`, `k.button(label, fn, "btn"|"btn ghost"|"btn-s")`, `k.check`, `k.modes` (top-left of the stage: keep ~44 px clear), `k.stepper`, `k.hint`, `k.setRO(html)` (call every frame), `k.fmt`, `k.frac`, `k.alpha(hex, a)`, `k.reduce`.
Music rules (`MusicTheory`, DOM-free, tested): `parse("F#4")`, `name(p, {ascii, octave})`, `midi`, `pc`, `freq(p|midi)`, `fromMidi(m, prefer)`, `spellings(m)`, `interval(lo, hi)` → `{size, semis, quality, short:"M3", long:"major third"}`, `up(p,"M3")`, `down`, `invert("M3")`, `scale(tonic, "major"|"harmonic minor"|"dorian"…)`, `DEGREE`, `keySig(tonic, mode)` (+sharps/−flats), `sigLetters(n)`, `sigAcc(n, letter)`, `staffPos(p, clef)` (0 = bottom line), `fromStaffPos`, `ledgers(pos)`, `R(n,d)` exact rationals (`add sub mul div eq lt val toString`), `dur("quarter", dots)`, `meter("6/8")` → `{beats, beat, kind, group, division, measure}`, `bar(sig, durs)`, `harmonics(f0, n)`, `cents(ratio)`, `nearest(f)` → `{midi, cents}`.
Music drawing and sound (`mk = MusicKit.attach(k)`): `S = mk.staff(c, {x, y: top line, w, gap, clef})` then `S.lines()`, `S.clef()` → width, `S.key(x, n)` → width, `S.time(x, 3, 4)` → width, `S.note(x, pitch, {dur, dots, color, stem, acc: true|a, label, beamed})` → `{x, y, pos, stemX, stemEnd, dir}`, `S.beam(notes, levels)`, `S.rest(x, kind)`, `S.acc(x, y, a)`, `S.bar(x, "single"|"final")`, `S.y(pos)`, `S.pos(y)`; `K = mk.keyboard({lo, hi})`, `K.draw(c, x, y, w, h, {marks: {midi: colour}, labels})`, `K.hit(px, py)`, `K.center(m)`; `mk.play(notes, {dur, at, type: "piano"|"organ"|"sine", gain})` (notes: MIDI, names or `{f, amp}`), `mk.seq([[midi|null, seconds]…])`, `mk.click(at, accent)`, `mk.silence()`, `mk.nameH(p, cls)` (HTML name for readouts).
If a lab needs a new rule (spelling, scoring, which answer is right), add it to `MusicTheory` with a test in `tests/music.test.js`, not inside the lab.

Readout: `<div><h2>Label</h2><div class="ro-big">… <span class="num c1">C♯4</span></div></div><div class="ro-rows"><div class="row">… <span class="v c2">…</span><span class="lbl">…</span></div></div><div class="landmark hit"><div class="big">…</div><div class="note">…</div></div><p class="narr">What to try next.</p>`. Keep it short enough not to scroll on desktop. Lay out from `c.w`/`c.h` (stage can be 340 px wide on a phone). Exact values only. No alert/confirm, no localStorage, no autoplay.

## Finish each topic (in this order; text reports first, one image last)
1. `node tools/build-web.js && node tools/validate.js` → 0 errors for your ids.
2. `python3 tools/mathcheck.py <ids>` and `node tools/labtest.js music` → all pass.
3. `node tools/layoutcheck.js <ids>` → fix until "0 issue(s)" (overflow, clipped text, canvas labels outside the canvas or overlapping, readout scrolling, console errors).
4. `node tools/sheet.js <ids>` and Read `/tmp/codex-sheet/<id>.png`: ONE image per topic with every mode at desktop and phone width. Fix what looks wrong, re-run 3–4 only if you changed the lab.
