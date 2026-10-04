# Glossary spec (shared, all subjects)

One glossary for every subject. A **headword** (e.g. *root*) can have **senses from several subjects**; the page shows them
together, each marked with its subject. Opened from Menu → Glossary (all subjects) and from the **Glossary** item in every
subject's navigator (opens filtered to that subject; one tap clears the filter). Story-panel words that have an entry are
dotted-underlined; clicking one shows a short card with a link to the full entry.

## Files
- `web/src/data-glossary.js`: `DB.glossary = []`, `DB.addGlossary(subject, entries)`, `DB.ipaKey`, `DB.glossaryRegister`.
- `web/glossary/<subject>.js`: one file per subject, `DB.addGlossary("<subject>", [ … ])`. Writers edit only their subject's
  file, so parallel sessions don't collide. Built after the data files, before art and content.
- Checked by `tools/validate.js` (section "glossary").

## Entry (one subject's sense block for one headword)
```js
{ w: "root",                 // headword as it appears in a dictionary (lowercase unless a proper noun)
  field: "vocabulary",       // optional: a DB.fields id of this subject
  node: "voc-morphemes",     // optional: written or planned node of that field (linked from the entry)
  pos: "n",                  // DB.posTags key: n v aj av p cj pr ij
  ipa: "/rut/",              // General American, broad (see below)
  syl: "root",               // syllables split with · (optional for one syllable)
  senses: ["…", "…"],        // 1–4 definitions, college-level, own words. Raw HTML limited to <i> <b> <sub> <sup>
  ex: "…",                   // optional original example sentence (<i> allowed)
  quote: { topic: "eng-style", text: "The mass of men lead lives of quiet desperation." },
                             // optional: must be an exact substring of a story on that topic page (already verified)
  parts: [["bene","well"],["dict","say"],["ion","act, result"]],   // optional morpheme breakdown [morpheme, gloss]
  origin: "Latin <i>benedictio</i>, from <i>bene</i> ‘well’ + <i>dicere</i> ‘to say’",   // optional etymology line
  register: "formal",        // optional: formal | neutral | informal | technical
  conno: "negative",         // optional: positive | neutral | negative
  syn: [["frugal","careful with money; approving"]],             // optional [word, nuance]
  ant: ["wasteful"],         // optional
  confused: [["effect","noun: a result"]],                       // optional [word, how it differs]
  forms: ["roots","rooted"], // optional inflected forms, so story words find the entry
  see: ["predict"] }         // optional other headwords in the glossary
```
`subject` is set by `addGlossary`. The same `w` may appear once per subject (different `pos` allowed: *present* n vs v gives two
blocks in English). Keep definitions original (no copying from a dictionary) and accurate at college level.

## Colour and categorisation (fixed)
- **Group colour** = the stripe on a sense block's left edge and the border of its subject chip, the same colour as the
  group's heading on the Subjects screen: STEM cyan `#5CC8E0`, Arts & Humanities magenta `#D97AE6`, Social Sciences lime
  `#B5D65A` (`--g-stem`, `--g-hum`, `--g-soc` in `style.css`).
- **Subject glyph** (from `DB.subjects`: ∑ ⚛ λ ¶ ♪ …) in the chip and on the block, so subjects in the same group differ.
- **Subject · field text** on every block, linked to the node when `node` is set.
- Inside an entry the content colours keep their usual jobs only: the part-of-speech pill is neutral with a small square in
  its `DB.posTags` colour. Apart from the group colours, never use c1–c5 to mean a subject.
- Story panels: a word links to the glossary only if an entry has the same part of speech as the word's tag (verb *work*
  does not open the noun *work*); stories with their own `tags` link by spelling alone.

## Browsing
Search box (headwords, forms, morphemes in `parts`, then definitions), subject chips (All + each subject with entries), field
chips once a subject is chosen, A–Z index, "Mastered topics only" (entries whose `node` the student has mastered).
Routes: `#glossary`, `#glossary-<subject>`, `#glossary-<subject>~<word>` (subject `all` for no filter).

## IPA convention
General American, broad transcription between slashes: /r/ for the r sound, no length marks, /ɝ/ stressed and /ɚ/ unstressed
r-coloured vowels, /ə/ schwa, /ɑ/ in *lot*, /oʊ/ /eɪ/ /aɪ/ /aʊ/ /ɔɪ/ diphthongs, /ˈ/ primary and /ˌ/ secondary stress before
the syllable. Symbols allowed by validate: `DB.ipaKey`.
