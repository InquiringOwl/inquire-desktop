# Three-layer lessons (Concept · Intermediate · Formal)

Arithmetic first (Oct 2026, Devon). A lesson page shows three tabs above its header: **Concept**, **Intermediate**, **Formal**. The tabs change the text below the lab (and the header's lede); the lab never changes. The reference page is `web/content/arithmetic/addition.js`: read it whole before writing (it is the only page you read besides your own).

## Who it is for (pedagogy + andragogy)
Adults who never saw why a topic matters, and returning learners who found it hard. Relevance is personal, so give varied, concrete situations (money, work, home, health, travel, building, cooking, games) and let readers find their own.
- **Respect**: plain adult language. Never childish ("For a ten-year-old" is gone), never condescending ("simply", "just", "easy", "obviously"). **Concept voice (Oct 2026): 5th-grade reading level, adult tone.** Short common words, sentences under about 15 words, "you" plus a verb, contractions allowed. No exclamation marks, praise, "Let's", mascots or emoji. Give the real word (successor, one-to-one matching) as a tool to pick up. Test: could the sentence hang on a pharmacy wall and in a classroom?
- **Problem first**: every idea arrives as the answer to a real problem someone had or has.
- **Why before how**: Concept explains purpose; Intermediate gives each step its reason; Formal gives precise language to explain it to others.
- **Use what they know**: connect to everyday experience and to earlier lessons.
- Voice rules of `docs/universal/WRITER-CORE.md` still hold: short sentences, no em-dash asides, no "not X but Y", no stock phrases, every number right.

## What each tab shows and where it comes from
| Tab | Section | Field |
|---|---|---|
| **Concept** (new or returning: what and why) | header lede | `layers.concept.lede` (1–2 plain sentences: the question this topic answers) |
| | What is [topic]? | `plain` (rewrite: 2–3 `<p>`, adult, one concrete everyday example with numbers, the key terms in `<b>`). Optional `layers.concept.heading` if "What is <title lower-case>?" reads badly (e.g. "What are ratios?") |
| | Why it matters + Subjects that rely on it | `why` (rewrite and expand: 2–3 `<p>`; what goes wrong without it, what it lets you do, how later math builds on it) + `fields` (keep or improve, 3–5) |
| | A short history | `layers.concept.history`: 3 `<p>`, each starting `<b>The problem.</b>`, `<b>The solution.</b>`, `<b>What it changed.</b>` (practical: who needed it, for what, and how that reaches the reader today). `layers.concept.sources`: 2–4 `{title, url}` (https) you actually opened |
| | Where you will meet it | `layers.concept.examples`: 5–6 `{role, scene, takeaway}` built from `careers`. `scene` (HTML) = a small, real situation with real numbers, worked in one or two lines; `takeaway` (text) = why the math mattered there |
| **Intermediate** (how to do it) | header lede | `layers.build.lede` (the routine in one sentence) |
| | Reading the model | `layers.build.intro` (one `<p>`: what the lab shows, how to read it) + `legend` (unchanged unless wrong) |
| | How to … | `steps` (keep or tighten the items) + `layers.build.stepWhy`: one HTML string **per step, same count**: the reason the step works or why it is done in that order |
| | Worked example | `example` (unchanged unless wrong) |
| | Everyday tasks | `layers.build.bridge` (one `<p>` linking the worked example's pattern to daily life) + `layers.build.tasks`: 4–5 `{task (text), link (HTML)}`; each `link` points back to a step or number of the worked example or practice |
| **Formal** (state it, reproduce it, explain it) | header lede | the existing `lede` (keep it precise) |
| | Formal statement | `formal` (unchanged unless wrong) |
| | Writing [the topic] | `layers.formal.setup = {title, items}`: 4–6 `{say, math}`: how to turn a situation into variables and an equation/expression, name the parts, justify the method (laws, place value…), compute, answer in a sentence with units. Use the worked example's numbers. `math` is one line of math markup |
| | Common mistakes | `mistakes` (keep; add 1 if a common one is missing, e.g. units or wording traps) |
| | Practice | `practice`: **5** items. Items 1–4 reworded as real situations (keep the numbers if possible so the checks barely change), each with `ctx` (text, 1–2 words: "Shopping", "Travel"…). Item 5: "Write an equation (or expression) with a letter for the unknown, then solve: …" |

Also set `voice: "plain"`. Leave `careers`, `life`, `origin`, `prereqWhy`, `unlocksWhy`, `beyond`, `hero`, `title`, labs untouched (they are still used elsewhere). Put `layers: {…}` right before `prereqWhy`.

## History: verify everything
Use WebSearch/WebFetch. Prefer MacTutor (mathshistory.st-andrews.ac.uk), Britannica, Wikipedia with its citations, museum or university pages. Every date, name and place must be in a source you opened; list those in `sources`. If sources disagree or are vague, say "about", "by the …th century", or leave the claim out. No legends presented as fact (e.g. Gauss's school sum is told as a story "according to his biographer"). Keep it practical: merchants, builders, astronomers, tax collectors, sailors, cooks, engineers.

## Checks
Add to `checks/arithmetic/<id>.py`: every number in `layers.concept.examples` scenes and `layers.formal.setup`, plus the new/reworded `practice` items (`same("layers.examples", …)`, `same("layers.setup", …)`, `same("practice[4]", …)`). The page hash now covers examples + setup, so stamp after: `python3 tools/mathcheck.py --stamp <id>`. Never weaken a check.

## Finish
`node tools/build-web.js && node tools/validate.js` (0 errors; `layers` is validated) and `python3 tools/mathcheck.py <ids>`. Do not run the full mathcheck (too slow) or smoke; the reviewer runs browser checks.

## Concept blocks (Oct 2026; Counting first)
A lesson opts in by adding `layers.concept.ideas`; without it the Concept tab keeps the older layout (What is it · Why it matters · History · Where you will meet it). The rule: **every block must point at something you can see or do in the lab**, or be marked as outside the model (history, careers). Renderer `conceptHTML` in `web/src/app.js`; spec check in `tools/validate.js`; reference page `web/content/arithmetic/counting.js`.
| Block | Field | Notes |
|---|---|---|
| The question | `concept.question {text, sub, figure {sym, value, cap, echo}}` | `figure` echoes the lab's big amber number in the same style. With `echo: "n"` it follows the lab live: the lab calls `k.publish("n", n)` (core.js) and `value` is only the fallback before the lab runs. |
| Idea cards (2 to 4) | `concept.ideas [{c, title, term, text, demo, try}]` | Title ≤ 6 words, `text` ≤ about 25 words. `c` is the lab's colour key (c1 count, c2 successor). `term` is the real word, shown small, using the same words as the Intermediate legend. `demo` is a storyboard, `try` a chip. |
| Why it comes first | `concept.matters {title, text}` | Sits between the idea cards and What goes wrong, in large easy text: 2 short paragraphs on why getting this topic right matters, before the hard examples. No numbers, no lists. |
| What goes wrong | `concept.stakes {title, lead, items [{role, text}], try}` | One strong callout; say plainly what the lab's dashed dot does and does not mean. |
| Where you will meet it | `concept.examples [{role, figure, scene, takeaway, try}]` | The tile shows `figure` (the number) first; `scene` opens on tap. Add `try` only when the number fits the lab's range. Numbers stay in `checks/<field>/<id>.py`. |
| A short history | `concept.timeline [{when, what}]` (3 to 5) + `history` + `sources`, optional `timelineTitle`, `timelineLead` | Comes right **after the idea cards** (before Why it comes first), so the story backs up what the learner just did: each beat should point back at an idea card or the lab. Beats in the open; the 3-paragraph story and sources fold under "Read the full story". |
Order on the page: question → ideas → history → matters → stakes → examples.
Subjects-that-rely-on-it is not repeated here; Learning path below already lists it.

**Storyboards** (`web/kits/categorical/demo.js`, `InquireDemo`): plain data, e.g. `{kind: "dots", slots: 5, lit: 5, sweep: true, big: true, alt}` or `{kind: "dots", slots: 8, grow: [4, 5, 6], alt}`. They play once when scrolled into view, replay on tap or ↻, and show the final frame under reduced motion (OS or Settings). Colours are CSS variables, so every theme works. Not GIFs: GIFs bake in the background, ignore Reduce motion and do not scale with Text size. A new lesson that needs another picture adds a `kind` to demo.js (with a test in `tests/universal.test.js`), not a new code path.

**Try-it chips** drive the lab: the lab calls `k.expose({set, plus, play, …})` (`web/kits/universal/core.js`), a chip carries `lab: "set:12,play"` (commands in order, `name[:argument]`), and the page scrolls the lab into view. A chip whose lab does not expose the command does nothing, so expose before writing the chip. `tools/interact.js` has the Counting checks.


## Intermediate blocks (Oct 2026; Counting first)
The Intermediate tab in the same look as the Concept blocks, aimed at applying the idea. Its three hands-on parts (Your move goals, predict the next line, solvable tasks) share the answer checker with Formal practice (`pzHTML`/`pzWire` in app.js: typed numbers or a pick, hint, show answer, `inquire:quiz`). A lesson opts in with `layers.build.task`; without it the tab keeps the older layout. The text is the lesson's own (legend, steps, `stepWhy`, example, `bridge`, `tasks`); the new fields only frame it. Renderer `buildHTML` in `web/src/app.js`, check in `tools/validate.js`, tests in `tools/interact.js`.
| Block | Field | Notes |
|---|---|---|
| The task | `build.task {text, sub, figure {sym, value, cap, echo}, jump [{label, to}]}` | Eyebrow "The task". A short instruction as the headline ("Count it so the total can be trusted."). `figure` like the Concept question (live with `echo`). `jump` links let returning learners skip ahead; `to` is `b-method`, `b-example` or `b-tasks`. |
| Reading the model | `legend` + `build.intro`, `build.keysTitle`, `build.keyTry [chip or null]` | The legend drawn as cards (symbol large, in its colour key), one optional chip per key. |
| The method | `steps` + `build.stepWhy`, `build.stepTry [chip or null]`, `build.stepGoal [goal or null]`, `goalsIntro` | A numbered rail: the step, then "Why" in small text, then a chip or a **Your move** goal. A goal `{key, eq | min, text, after}` ticks itself off when the lab publishes `key` with that value (`k.publish`; Counting sends `n`, `aloud` = times Count aloud finished, `counted` = n at the end of a count). A goal step has no chip (a chip would do the move for the learner; validate refuses both). "Moves done n of 3" bar; done goals stay done while the app is open. |
| Why a method matters | `build.matters {title, text}` | Large easy text, 2 short paragraphs, like `concept.matters`. |
| Worked example | `example` + `build.exampleTip`, `build.exampleTry`, `build.predict [question or null]` | Starts with the problem and the first line. A line with a `predict` question `{ask, parts [{label, ans}] | choices [{t, ok, why}], hint}` waits until the learner answers it (or presses Just show the line); other lines use Show the next line. `predict[0]` is null. Wrong choices need a `why`. Put every number in the check file. |
| Everyday tasks | `build.bridge` + `build.tasks [{task, figure, link, try, check}]` | Tiles like the Concept examples. With `check {q, parts, hint}` a tile is a problem: it opens full width with the question and answer boxes, and `figure`, `link` and `try` appear once it is solved or shown. "Solved n of 5" bar. Numbers go in the check file. |

## Formal blocks (Oct 2026; Counting first)
Topic header: the tab's lede sits right below the hero equation, in larger, brighter text (`.topic .intro .lede`). The Formal tab in the same look, for learners who want the academic vocabulary and the full written method. A lesson opts in with `layers.formal.question`; without it the tab keeps the older layout. The lesson's own `formal`, `formal.setup`, `mistakes` and `practice` stay as they are; the new fields frame them. Renderer `formalHTML` in `web/src/app.js`.
| Block | Field | Notes |
|---|---|---|
| The definition | `formal.question {text, sub, figure, jump}` | Eyebrow "The definition" (`formal.eyebrow` to change). Figure like Concept (Counting shows the lab's n as \|A\|). Jump targets `f-vocab`, `f-setup`, `f-mist`, `f-prac`. |
| Vocabulary | `formal.vocab [{c, sym, term, def, was}]` (3 to 8) + `vocabTitle`, `vocabIntro` | Everyday word → textbook term. `was` names the idea as the Concept/Intermediate tabs said it, so every card points back to something the learner already did. `def` must be college-accurate. |
| Formal statement | `formal` (+ `statementTitle`) | Not a block of its own: its `<div class="display">` (the boxed definition) is shown inside The definition, and the full text folds under the vocabulary ("Read the formal statement in full"). Keep one `.display` box in `formal` for this. |
| Why exact words matter | `formal.matters {title, text}` | Large easy text, like the other tabs; one concrete case where a word changes an answer. Numbers here are checked by hand (not hashed). |
| Writing it out | `formal.setup` + `setupIntro` | The numbered rail with the math under each step; reuse the Intermediate worked example. |
| Where formal answers go wrong | `mistakes` + `mistakesTitle`, `mistakesLead` | Pink callout like Concept's What goes wrong. |
| Practice ("Your turn") | `practice` + `formal.checks [{hint, parts [{label, ans}]}]`, `practiceTip`, `practiceTitle`, `practiceDone` | Each card takes a typed answer (commas and units ignored), Check marks each part, a wrong try offers the worked answer, a second shows the hint; Need a hint? is always there. Progress bar: solved green, shown amber (not counted). Every `ans` must appear in that item's `a` (validate). Fires `inquire:quiz` for Achievements. A practice item without a check keeps Show answer. |
