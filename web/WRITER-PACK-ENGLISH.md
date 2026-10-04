# Writer pack: English · Grammar & Usage

Everything a writer needs for an English node, in one file. Read this, your nodes' sections of `web/TREE-SPEC-ENGLISH.md`, your passages in `web/SOURCES-ENGLISH.md`, and the header comment of `web/labs/_englab.js`. Don't read whole finished pages or other briefs unless something here is unclear (to see a field in use: `grep -n "fieldname" web/content/grammar/eng-verbs.js | head`).

Repo `/home/claude/codex`. Other writers work in the same folder: write only your own files.

## Files you own (per node)
- `web/content/grammar/<id>.js` — the page: `window.ARITH = window.ARITH || {};` then `ARITH["<id>"] = { … };` (only this one id).
- `web/labs/<lab-file>.js` (name in the spec) — the lab, built on the English lab kit.
- `checks/labs/<id>.test.js` — logic tests for the lab's rules.
- `web/art/<lab-file-stem>.js` — only for scenes marked **draw** in the spec.
- The text check `checks/grammar/<id>.py` is written afterwards by a separate checker. You don't write it.

## Page schema (all required unless marked)
HTML = raw HTML string; TEXT = plain text, no tags (shown escaped).
- `title`, `short` (one line), `grade: "College ENGL 1xx · grammar"`, `hours` (number, 3–6), `voice: "plain"`, `eyebrow` (HTML, e.g. `"Grammar & Usage · clauses"`).
- `hero` (HTML): a short example sentence with its key parts coloured (`<span class="c1">…</span>`, c1–c5 matching the legend). Keep under ~45 characters so it fits a phone.
- `lede` (HTML, 1–2 sentences).
- `plain` (HTML, 2–4 `<p>`): the idea in plain words, no jargon first; examples in `<i>`.
- `formal` (HTML): college-level definitions and rules (traditional terms; one paragraph noting where a modern grammar, e.g. Huddleston & Pullum's *Cambridge Grammar*, analyses it differently). `<div class="display">…<br>…</div>` for rule tables; keep each display line short (≤ ~45 chars), since the box scrolls on phones.
- `legend`: 3–5 items `{ c: "c1", sym: HTML, name: TEXT, desc: HTML }`. Colours exactly as the spec's colour keys; the lab uses the same colours.
- `steps: { title, items: [HTML, …] }`: 4–7 steps of the procedure.
- `example: { prompt: HTML, lines: [{ math: HTML, note: TEXT }, …], answer: HTML }`: 4–8 lines, ending with a check (substitution, transformation or reading aloud). `math` cells don't wrap on desktop: keep each under ~40 characters (split long lines into two).
- `why` (HTML, 2 `<p>`), `careers` [{ role, use }] 5–7 (TEXT, real and specific), `life` [TEXT] ≥3, `fields` [{ name, use }] ≥2 (TEXT).
- `prereqWhy: { "<pre-id>": HTML }` for every prerequisite and `unlocksWhy: { "<unlock-id>": HTML }` for every unlock in the spec (`{}` if none). One or two sentences on the exact link.
- `beyond` [{ field, why }] 2–4 (TEXT), using Inquire English field names (listed at the top of the spec).
- `mistakes` [{ wrong: HTML, fix: HTML }] ≥3: real errors students make.
- `practice` [{ q: HTML, a: HTML }] exactly 4, easy → hard, full answers with the reason.
- `origin` (HTML, optional): only history you are sure of.
- `stories`: 3–4 story panels (below).

Markup: examples in `<i>`; colour classes only `c1`…`c5`; curly quotes and apostrophes in prose; no `${`, TODO or placeholder text.

## Stories
`{ title, book, author, year, kind, where, scene, focus: [tags], tags: { key: { name, c, test? } }, tokens, notes: { word: TEXT }, note: HTML }`
- Passages come verbatim from `web/SOURCES-ENGLISH.md` (verified against Project Gutenberg; public domain). Don't change a word or a mark; you choose only what to tag. If you need a passage that isn't in the sources file, use WebFetch on `https://www.gutenberg.org/cache/epub/<n>/pg<n>.txt` and add it to the sources file in the same format.
- `tokens`: the passage split into words: `word_tag` for tagged words, bare words and punctuation otherwise, `¶` for a paragraph break, `*` after a tag for source italics, `#key` after the tag to give a repeated word its own note. Punctuation may be tagged (`,_ser`). Tag every word of a span (a subject, a clause) so the whole span colours. Glue: punctuation attaches to the word before; a word after `“ — ‘ (` attaches to it; `’ve`/`n’t` attach.
- `tags`: the story's own tag set (`{ ic: { name: "Independent clause", c: "c1" }, … }`, lower-case keys, colours from your legend). `focus`: the tags the panel colours. Untagged words show plain.
- `notes`: keyed by the lower-case word (or `#key`), plain text, shown as tooltips on focus words. `note`: an HTML paragraph on what the passage shows, with accurate counts.
- `scene`: an existing key (spec lists them) or one you draw: `DB.scenes["key"] = svg(…)`, 480 × 180, original, same pattern as `web/art/scenes-1.js` (gradient ids prefixed with the key). Keep each scene under ~6 KB.

## Lab (built on the kit)
```js
/* ============ Labs: English · <topic> ============ */
(function(){
const L = window.LABS, E = window.EngLab;
// 1. Pure rules, no DOM: tested by checks/labs/<id>.test.js with node tools/labtest.js
const logic = E.logic["<id>"] = {
  passive(sentence){ … return { text, parts }; },
  items: [ … ]   // the data the lab offers, so tests can cover every item
};
// 2. The lab
L["<id>"] = k => {
  const dom = k.dom(); dom.classList.add("pos-wrap");          // .pos-wrap leaves room for the mode buttons
  let mode = "a", sel = 0;
  function draw(){
    dom.innerHTML = `<div class="pos-text">${E.words(…, { color: …, click: true })}</div>`;
    k.setRO(E.ro({ title: "…", big: "…", rows: [ … ], landmark: { big: "…", note: "…", hit: true }, narr: "…" }));
  }
  E.on(dom, ".pos-w", el => { sel = +el.dataset.i; draw(); });
  k.modes([["a", "First mode"], ["b", "Second mode"]], mode, m => { mode = m; controls(); draw(); });
  function controls(){ k.ctl.innerHTML = ""; k.select("Sentence", logic.items.map((s, i) => [i, s.label]), sel, v => { sel = +v; draw(); }); }
  controls(); draw();
};
})();
```
- Kit pieces: `E.words` (coloured, clickable words with optional labels under them), `E.spans`, `E.gaps` (clickable gaps between words, for splitting or punctuating), `E.nest` (nested brackets), `E.chips`, `E.ro` (readout), `E.on` (click delegation), `E.quiz` (scored quiz state), `E.css` (only if you truly need extra CSS: one `<style id="css-<lab-stem>">`, every selector prefixed by your lab's class). Existing classes: `.pos-text`, `.pos-src`, `.pos-quiz` (answer buttons, `.right/.wrong`), `.pos-jobs`/`.pos-job`, `.ro-*`, `.landmark`, `.narr`.
- Each lab: 2–3 modes that teach the idea by doing (transform, split, place, choose, fix), plus a short quiz mode if it fits. Keep select labels under ~36 characters. Every item the lab offers must be grammatically right; put the rules in `logic` and test them all.
- Size target: ~10–18 KB per lab. The kit does the plumbing; spend the code on the topic's own behaviour.

## Logic tests (`checks/labs/<id>.test.js`)
```js
module.exports = ({ logic, test, eq }) => {
  eq("passive, simple past", logic.passive("The dog bit the man").text, "The man was bitten by the dog.");
  logic.items.forEach((it, i) => test(`item ${i} has an answer`, !!it.answer));
};
```
Cover every item and every combination the lab lets a reader pick. Run `node tools/labtest.js <id>`.

## Test, in this order
1. `node tools/build-web.js && node tools/validate.js --warnings | grep -E "<id>"` → nothing listed for your ids.
2. `node tools/labtest.js <id>` → 0 problems.
3. `NODE_PATH=$(npm root -g) node tools/layoutcheck.js <id>` → fix every issue it lists (page too wide, clipped text, overlaps, console errors). Re-run until 0 issues.
4. Only then: `NODE_PATH=$(npm root -g) node tools/sheet.js <id>` and look ONCE at `/tmp/codex-sheet/<id>.png` (every mode at desktop and phone width). Fix what looks wrong; re-check with step 3; re-shoot only changed modes (`MODES=`).

## Quality bar
College-level and accurate: traditional handbook terms, rules a writing instructor would accept, the descriptive facts where handbooks oversimplify, US usage with British differences noted. Same depth as the finished pages. Be economical: don't re-read big files, don't take screenshots before layoutcheck passes.
