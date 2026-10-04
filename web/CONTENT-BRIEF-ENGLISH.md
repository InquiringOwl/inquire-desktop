# Content brief: English

English topic pages use the same dossier schema as `CONTENT-BRIEF.md` (read it first), with these differences. Model page: `web/content/grammar/eng-parts-of-speech.js`.

## Level and standard
- College English. Grammar & Usage follows the traditional eight parts of speech used in college handbooks, and notes the modern analysis (Huddleston & Pullum, *Cambridge Grammar of the English Language*, 2002) where it differs. Later fields follow standard ENGL 101/102, 2xx survey and 3xx–4xx course content.
- `voice: "plain"`; `grade` like `"College ENGL 1xx · grammar"`; `eyebrow` like `"Grammar & Usage · word classes"`.
- `formal` gives the college-level definitions; `example` is a worked analysis (a sentence tagged or parsed step by step, ending with a substitution or transformation check); `practice` has 4 questions with full answers.
- Colour keys for word classes (`DB.posTags` in `web/src/data.js`): c1 nouns & pronouns, c2 verbs, c3 adjectives & articles, c4 adverbs, c5 prepositions, conjunctions, interjections.

## Stories (required on English pages)
`stories: [{ title, book, author, year, kind, where, scene, focus, tokens, notes, note }]`, 3–6 per page, rendered as framed panels (art above, passage below).
- **Public domain only**: published before 1931 (US public domain in 2026) and quoted from a Project Gutenberg edition. Never quote copyrighted books (e.g. *The Hobbit*, *To Kill a Mockingbird*, *The Diary of a Young Girl*); `validate.js` warns on recent years. Prefer famous passages; mix fiction and non-fiction.
- `tokens`: the passage, word by word, `word_tag` with tags from `DB.posTags` (n pr v aj ar av p cj ij), or from the story's own `tags`; bare punctuation (punctuation can be tagged too: `,_ser`); `*` after the tag for italics in the source; `#key` to give a repeated word its own note; `¶` for a paragraph break. Curly quotes and apostrophes.
- `tags` (optional): a story's own tag set when the topic is not parts of speech, e.g. `tags: { s: { name: "Subject", c: "c1" }, p: { name: "Predicate", c: "c2" } }` (keys lower-case letters, colours c1–c5 matching the page legend, optional plain-text `test`). With own tags, untagged words are allowed and show plain. Tag every word of a span (a subject, a clause) so the whole span is coloured.
- `focus`: the tags this story illustrates (coloured in the panel). `notes`: per-word explanations keyed by lower-case word (or `#key`), plain text. `note`: HTML paragraph on what the passage shows.
- `scene`: a key in `DB.scenes` (`web/art/*.js`): an original inline SVG, 480 × 180, drawn for Inquire. No book covers, film stills or other illustrators' designs.

## Saved checks (`checks/grammar/<id>.py`)
Every story needs `story[i]` coverage: `quote("story[i]", page['stories'][i]['tokens'], SOURCE)` with the source text verified against Gutenberg (ebook number in a comment), an independent tag list compared word by word, and checks of any counts the note claims. Example and practice answers are checked against an independent analysis (`page` holds the topic's text). Stamp with `python3 tools/mathcheck.py --stamp <id>`.

## Writing a Grammar & Usage node (checklist)
1. Read `web/TREE-SPEC-ENGLISH.md` (your node: scope, lab, colour keys, stories, scene keys), `web/CONTENT-BRIEF.md` (schema and markup), this brief, `web/LAB-BRIEF.md`, and the model page `web/content/grammar/eng-parts-of-speech.js` with its lab `web/labs/eng-1.js` and check `checks/grammar/eng-parts-of-speech.py`.
2. Files you own (write only these): `web/content/grammar/<id>.js`, `checks/grammar/<id>.py`, the lab file named in the spec, and `web/art/<lab-file-stem>.js` for any scene marked **draw** (same pattern as `web/art/scenes-1.js`: `DB.scenes["key"] = svg(...)`, 480 × 180, original, gradient ids prefixed with the scene key). Never edit shared files (`data.js`, `app.js`, `style.css`, tools); report anything you need changed.
3. Content: all dossier fields (`careers` 5–7, `life` ≥3, `fields` ≥2, `beyond` 2–4 using Inquire English field names, `mistakes` ≥3, `practice` 4 easy → hard with full answers, `origin` only if the history is certain). `prereqWhy` for every prerequisite and `unlocksWhy` for every unlock in the spec, raw HTML, one or two sentences each. `stories`: 3–4 per page.
4. Lab CSS: reuse existing classes (`.pos-*`, `.ro-*`, `.landmark`, `.dom-expr`, `.tok`). If you need more, inject one `<style id="css-<lab-stem>">` from your lab file (only if not already present), with every selector prefixed by a class unique to your lab.
5. Quotes: fetch the Gutenberg plain text (`https://www.gutenberg.org/cache/epub/<n>/pg<n>.txt`) with WebFetch, confirm the ebook's title, and copy the passage exactly (normalise to curly quotes/apostrophes only). Fetch twice with different prompts if the first answer looks paraphrased. Note the ebook number in the check file.
6. Check: `node tools/build-web.js && node tools/validate.js | grep -E "<id>|error"`, `python3 tools/mathcheck.py <id>` then `--stamp <id>`, and `CLICK=1 NODE_PATH=$(npm root -g) node tools/snap.js <id>` (also `W=400 H=860`); look at every screenshot and fix problems. Other writers are working in the same folder: errors for other topics are not yours.
