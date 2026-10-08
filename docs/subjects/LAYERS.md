# Three-layer lessons (Concept · Intermediate · Formal)

Arithmetic first (Oct 2026, Devon). A lesson page shows three tabs above its header: **Concept**, **Intermediate**, **Formal**. The tabs change the text below the lab (and the header's lede); the lab never changes. The reference page is `web/content/arithmetic/addition.js`: read it whole before writing (it is the only page you read besides your own).

## Who it is for (pedagogy + andragogy)
Adults who never saw why a topic matters, and returning learners who found it hard. Relevance is personal, so give varied, concrete situations (money, work, home, health, travel, building, cooking, games) and let readers find their own.
- **Respect**: plain adult language. Never childish ("For a ten-year-old" is gone), never condescending ("simply", "just", "easy", "obviously").
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
