# Three-layer lessons (Concept · Intermediate · Formal): the writer brief

Arithmetic first (Oct 2026, Devon). A lesson page shows three tabs above its header: **Concept**, **Intermediate**, **Formal**. A tab changes the header's lede and the text below the lab; the lab itself never changes.

**Reference page: `web/content/arithmetic/counting.js`.** Read it whole before writing. Copy the skeleton from `docs/subjects/LESSON-TEMPLATE.js` (every field, in page order, with the rule for each). Read your own lesson's current file; keep its good material (legend, steps, example, mistakes, practice, careers, history) and rebuild it into the blocks below. Do not read CLAUDE.md, app.js or other lessons.

## Who it is for (pedagogy + andragogy)
Adults who never saw why a topic matters, and returning learners who found it hard. Relevance is personal, so give varied, concrete situations (money, work, home, health, travel, building, cooking, games) and let readers find their own.
- **Respect**: plain adult language. Never childish, never condescending ("simply", "just", "easy", "obviously").
- **Concept and Intermediate voice: 5th-grade reading level, adult tone.** Short common words, sentences under about 15 words, "you" plus a verb, contractions allowed. No exclamation marks, praise, "Let's", mascots or emoji. Give the real word (successor, regrouping) as a tool to pick up. Test: could the sentence hang on a pharmacy wall and in a classroom?
- **Formal voice**: college-level precision, standard terms and order (OpenStax *Prealgebra 2e*), plain colour (no cues).
- **Problem first**: every idea arrives as the answer to a real problem someone had or has.
- **Introduce every idea from something the learner can see or do**: the everyday version first, then the real term (the term chip on idea cards, "You met it as" on vocabulary cards). Every block points at something in the lab (a Try chip, a Your move goal, the live figure); nothing stands alone.
- **One situation carried through all three tabs** (Counting: seats 14–22 for 9 friends): the Concept walk, the Intermediate method and the Formal write-up all use it.
- **Show the work line by line** and ask the learner to **predict** the next line before revealing it, with a hint, a kind "Not yet" nudge and a way to just see it. **Name the classic trap** and prove why it is wrong (22 − 14 = 8 counts the gaps; add one for both ends).
- Voice rules of `docs/universal/WRITER-CORE.md` still hold: short sentences, no em-dash asides, no "not X but Y", no stock phrases, every number right.

## Page order (every tab): what → why → where it goes wrong → the rest
- **Concept**: the question → 2 to 4 idea cards → **the walk** ("___ it together") → history timeline → [why it matters │ where it goes wrong] side by side in one panel → "Where you will meet it" tiles.
- **Intermediate**: the task → "What the model shows" key cards (the legend) → the method rail (step │ why, Your move goals) → why a method matters → everyday tasks you solve (with pictures and worked lines). With a Concept walk there is **no** Intermediate worked example.
- **Formal**: the definition (boxed `.display` from `formal`) → vocabulary cards → [why exact words matter over where formal answers go wrong] stacked in one panel → "Writing a … problem" rail (the walk's situation in textbook form) → Your turn: 5 practice cards with typed answers.

## Lesson-level fields
| Field | Rule |
|---|---|
| `voice: "plain"` | always |
| `layers.nudge` | The first "Not yet." for every checker on the page, naming this lesson's usual slip ("Not yet. Check each column for a carry."). Optional; the default is "Not yet. Check your work and try again." A question's own `nudge` wins. |
| `layers.concept.objects`, `layers.build.objects` | Every word form for the things counted or measured in that tab ("seat", "seats", "dollar", "dollars"). They show violet; numbers show amber automatically (colour cues, Concept + Intermediate only). Never add colour markup by hand for this. |

## Concept blocks (`layers.concept`, opt in with `ideas`; renderer `conceptHTML`)
| Block | Field | Rule |
|---|---|---|
| Header lede | `lede` | 1–2 plain sentences: the question this topic answers. |
| Heading | `heading` | "What is …?" / "What are …?" |
| The question | `question {text, sub, figure {sym, value, cap, echo}}` | `text` is 1–4 words ("How many?", "Which is bigger?"). `figure` shows a lab value live: `echo` = a key the lab publishes (see "Your lab"), `value` = its starting value. |
| Idea cards | `ideasTitle`, `ideas [{c, title, term, text, demo, try}]` (2–4) | Title ≤ 6 words; `text` ≤ about 25 words; `c` = the lab's colour key for that idea; `term` = the real word (same as the legend's); `demo` = a storyboard; `try` = a chip that drives the lab. |
| The walk | `walk {title, lead, prompt, demo, lines [{math, note, frame}], predict, answer}` | The worked example simplified for the Concept voice. **Title = "<Verb> it together: <the situation>"** with this lesson's own verb ("Add it together: two paychecks", "Place it together", "Line it up together"; "Work it together" when no verb fits). ONE continuous situation, 4–7 lines. `demo` is a still storyboard the page steps: each line's `frame` = the frame index it shows (validate refuses frames that do not exist). `predict[0]` is null when line 1 should show at once; later lines carry questions that walk through different tactics: a typed number (`parts`), a pick (`choices`, each wrong one with a `why`), the classic shortcut and why it fails, the fix. `answer` = one sentence. |
| History | `timelineTitle`, `timelineLead`, `timeline [{when, what}]` (3–5) + `history` (3 `<p>`: **The problem.** / **The solution.** / **What it changed.**) + `sources` (2–4 https pages you opened) | Beats tie back to the lab or an idea card ("the dashed dot in the model"). See "History: verify everything". |
| Why it matters | `matters {title, text}` | Serif lead sentence, then 1–2 short paragraphs; 1–3 `<b>` key phrases per paragraph; parallel facts as `<ul class="why-chips">` (2–3 chips). No hard numbers. |
| Where it goes wrong | `stakes {title, lead, items [{role, text}], try}` | 3–4 real slips, each in one line (the role in bold, what goes wrong). Include the classic trap. `try` sets the lab to show the slip. |
| Where you will meet it | `examplesTitle`, `examples [{role, figure, scene, takeaway, try}]` (5–6) | Built from `careers`. `figure` = the tile's headline number ("90 tablets"). `scene` = a real situation with real numbers worked in one or two lines (`<span class="m">` for math). `takeaway` = why the math mattered there. `try` only when the number fits the lab's range. |

## Intermediate blocks (`layers.build`, opt in with `task`; renderer `buildHTML`)
| Block | Field | Rule |
|---|---|---|
| Header lede | `lede` | The routine in one sentence. |
| The task | `task {text, sub, figure, jump}` | `text` = a short instruction ("Add so every column is right."). `jump` = `[{label: "The method", to: "b-method"}, {label: "Everyday tasks", to: "b-tasks"}]`. |
| What the model shows | `keysTitle`, `intro` (one `<p>`), `keyTry [chip or null]` (one per legend key) | The cards come from `legend` (fix it if wrong; colours = the lab's keys). |
| The method | `steps` (the lesson's own, 3–6 items) + `stepWhy` (same count: why the step works or why in that order) + `stepTry [chip or null]` + `stepGoal [goal or null]` + `goalsIntro` | 2–3 **Your move** goals `{key, eq | min, text, after, notYet}`: the learner does it in the lab and the goal ticks itself when the lab publishes `key` with that value. A goal step has no chip (validate refuses both). `eq` values must be reachable in the lab. **A goal ticks as soon as the lab shows its value, even from a chip**, so pick goal numbers that no chip on the page (Concept or Intermediate, including Play/finish chips) and not the walk's own numbers leave in the lab; a goal must be the learner's own move (`interact.js` clicks every Intermediate chip and fails if a goal ticks). Use a value that pins the whole move (number-line `pair`, place-value `n`), not one any setting can hit (`k ≥ 1`). |
| Why a method matters | `matters {title, text}` | Title Case title; like `concept.matters`. |
| Everyday tasks (pictures wait without the answer until the task is solved or shown: InquireDemo `hold`) | `tasksTitle` ("Everyday tasks: solve them"), `bridge` (one `<p>`), `tasks [{task, check {q, parts [{label, ans}], hint}, figure, demo, lines [{math, note}], predict, link, try}]` (4–5) | Each is a real problem from `life` with its own storyboard and a worked solution line by line; `predict[0]` null, 1 question on a middle line. `link` ties it back to a step or the walk. |

## Formal blocks (`layers.formal`, opt in with `question`; renderer `formalHTML`)
| Block | Field | Rule |
|---|---|---|
| The definition | `question {text, sub, figure, jump}` | Jumps `f-vocab`, `f-mist`, `f-setup`, `f-prac`. The boxed statement is the one `<div class="display">` in `formal` (keep exactly one). |
| Vocabulary | `vocabTitle`, `vocabIntro`, `vocab [{c, sym, term, def, was}]` (4–8) | `def` college-accurate; `was` = the everyday name from the Concept/Intermediate tabs. |
| Why exact words matter | `matters {title, text}` | One concrete case where a word or symbol changes an answer. |
| Where formal answers go wrong | `mistakesTitle`, `mistakesLead` + the lesson's `mistakes [{wrong, fix}]` (3–5) | Mistake → correction; add the classic trap if missing. |
| Writing it out | `setupIntro`, `setup {title, items [{say, math}]}` (4–6) | The walk's situation rewritten textbook-style: name the quantities, the law or rule that justifies the method, compute, answer in a sentence with units. |
| Your turn | `practiceTip`, `practiceDone`, `checks [{hint, parts [{label, ans}]}]` (one per practice item) + the lesson's `practice` (5 items, each with `ctx`) | Items 1–4 real situations, easy → hard; item 5: "Write an expression (or equation) with a letter for the unknown, then solve: …". Every `ans` must appear in that item's `a` (validate). `practiceDone` = "All 5 solved. You can <do this lesson's thing> the formal way." |

## Your lab: chips, live figures and goals
A chip `{label, lab: "a:7,b:12,play"}` runs commands in order (`name[:number]`, numbers only). A figure's `echo` and a goal's `key` must be values the lab publishes. **Use only what your lab provides** (below); `tools/interact.js` checks every chip, figure and goal on every block lesson and fails on a wrong name.

**Every control drives itself** (core.js, 1.18.5): a slider, number box, select or checkbox answers to the first word of its label and publishes its value under that name; a button answers to its label's letters ("Next pair" → `nextpair`); a select takes the option **index** (`op:2`); a checkbox takes `1`/`0` (no number = toggle); mode buttons are `mode:i`. A slider publishes its **raw** value (decimals' 47 means 0.47). Steppers have `play`, `step`, `reset`. Labs add their own commands (`k.expose`) and result values (`k.publish`).

| Lab | Commands (chips) | Published values (figures, goals) |
|---|---|---|
| counting | `set:n`, `plus`, `play` | `n`, `aloud` (Count aloud finished, times), `counted` (n at the end of a count) |
| place-value | `set:n` (0–9999), `add:d` (d may be negative) | `n`, `thousands`, `hundreds`, `tens`, `ones` |
| number-line | `a:v`, `b:v` (0–20), `swap` | `a`, `b`, `dist` (= \|a − b\|), `pair` (= 100·a + b, for a goal that needs both points: a = 19, b = 20 → 1920) |
| addition, subtraction | `a:v`, `b:v` (0–999999; setting one resets the steps), `step`, `play`, `finish`, `reset`, `newnumbers` (random) | `a`, `b`, `k` (columns worked), `result` (a ± b once every column is worked, else null), `regroups` (carries or borrows in the problem). Subtraction puts the larger number on top. |
| rounding | `x:v` (0–999), `round:0` nearest ten / `round:1` nearest hundred | `x`, `round`, `rounded` |
| multiplication | `a:v`, `b:v` (1–99), `unit:0/1` (unit squares) | `a`, `b`, `product`, `pair` (= 100·a + b) |
| properties | `mode:0` commutative / `1` associative / `2` distributive, `a`, `b`, `c` (1–9), `rearrange` | `mode`, `a`, `b`, `c`, `value` (a×b / a+b+c / a×(b+c) by mode) |
| division | `dividend:v` (1–99999), `divisor:v` (1–99), `play`, `step`, `reset` | `dividend`, `divisor`, `quotient`, `remainder`, `k` (steps), `result` (the quotient once every step is shown, else null) |
| integers | `a:v`, `b:v` (−10–10), `op:0` + / `1` − / `2` ×, `replay` | `a`, `b`, `op`, `result` |
| exponents | `b:v` (0–10), `n:v` (−3–8), `log` (toggle log scale) | `b`, `n`, `power` (bⁿ) |
| order-ops | `expression:i` (0 "3 + 4 × 2", 1 "(3 + 4) × 2", 2 "20 − 12 ÷ 4 × 2", 3 "8 ÷ 2 × (2 + 2)", 4 "48 ÷ (6 − 2) + 3 × 5", 5 "2 × (3 + 5)² − 10", 6 "7 − 2 − 1", 7 "5 + 2 × (9 − 3²) + 6 ÷ 3"), `play`, `step`, `reset` | `expression`, `k`, `result` (once fully evaluated, else null) |
| factors | `n:v` (1–100), `nextpair` | `n`, `count` (how many factors) |
| modular | `m:v` (2–24), `a:v`, `b:v` (0–40), `op:0` + / `1` ×, `replay` | `m`, `a`, `b`, `op`, `result` ((a op b) mod m), `total` (a op b), `laps` (whole times round the clock) |
| roots | `a:v` (the area A, 1–150), `nextguess`, `resetguesses` | `a`, `floor` (⌊√A⌋), `guesses` |
| fractions | `n:v` (0–12), `d:v` (1–12), `k:v` (1–6, the scale) | `n`, `d`, `k`, `value` (n/d), `top` (n·k), `bottom` (d·k), `pair` (= 100·n + d) |
| primes | `mode:0` sieve / `1` factor tree, `play`, `nextprime`, `reset`, `n:v` (tree, 2–999999) | `mode`, `n` |
| decimals | `value:v` (0–100 hundredths: 47 = 0.47) | `value`, `decimal` |
| mixed-numbers | `numerator:v` (1–40), `denominator:v` (2–8) | `numerator`, `denominator`, `whole`, `rem`, `pair` (= 100·numerator + denominator) |
| ratios | `a:v`, `b:v` (1–8), `k:v` (1–6, the scale) | `a`, `b`, `k`, `first` (a·k), `second` (b·k), `total`, `pair` (= 100·a + b) |
| gcf-lcm | `a:v`, `b:v` (1–60), `replay` | `a`, `b`, `gcf`, `lcm`, `pair` (= 100·a + b) |
| sci-notation | `size:v` (log₁₀ of metres, −15–27, 0.01 steps), `jump:i` (0 proton, 1 hydrogen atom, 2 DNA helix width, 3 flu virus, 4 red blood cell, 5 human hair width, 6 grain of sand, 7 ant, 8 person, 9 blue whale, 10 Eiffel Tower, 11 Mount Everest, 12 Earth (diameter), 13 Earth to Moon, 14 Sun (diameter), 15 Earth to Sun, 16 one light-year, 17 Milky Way (diameter), 18 observable universe) | `size`, `jump`, `exp` (the power of ten) |
| percents | `p:v` (0–100), `whole:v` (1–1000000) | `p`, `whole`, `part` |
| decimal-ops | `mode:0` multiply / `1` add; multiply: `x`, `y` (1–10 tenths: 3 = 0.3); add: `x`, `y` (0–100 hundredths) | `mode`, `x`, `y`, `result`, `pair` (multiply: 100·x + y in tenths, 0.8 × 0.7 → 807; add: 1000·x + y in hundredths, 0.68 + 0.57 → 68057) |
| fraction-ops | `a:v` / `b:v` (first fraction a/b), `c:v` / `d:v` (second c/d), 1–9, numerator ≤ denominator; `op:0` + / `1` − / `2` × / `3` ÷ | `a`, `b`, `c`, `d`, `op`, `num`, `den` (the result in lowest terms), `pair` (= digits a b c d: 2/3 and 1/4 → 2314). Set `b` before `a` and `d` before `c` |
| percent-apps | `p:v` (principal, 100–10000 by 100), `r:v` (rate %, 0–15 by 0.25), `t:v` (years, 0–40), `compounded:0` yearly / `1` quarterly / `2` monthly / `3` daily | `p`, `r`, `t`, `compounded`, `amount`, `interest`, `simple` (simple interest P·r·t) |
| averages | `addpoint` (random value), `remove` (last), `addoutlier` (adds 20), `reset` (back to 3, 5, 5, 6, 8, 9, 12, 5, 7) | `count`, `mean` (2 decimals), `median` |
| proportions | `scenario:0` recipe (3 cups → 36 cookies, c = 5) / `1` map (2 cm → 15 km, c = 7) / `2` fuel (4 gal → 118 mi, c = 11) / `3` wage (8 h → $148, c = 30), `a:v`, `b:v`, `c:v` (1–40) | `a`, `b`, `c`, `scenario`, `d` (= b·c/a, 2 decimals) |
| real-numbers | `pick:i` (0 7, 1 1, 2 42, 3 √9, 4 0, 5 −3, 6 −12, 7 3/4, 8 −2.5, 9 0.333…, 10 0.125, 11 √2, 12 π, 13 e, 14 −√5, 15 0.101001…) | `pick`, `set` (the smallest set that holds it: 0 ℕ, 1 𝕎, 2 ℤ, 3 ℚ, 4 irrational) |
| units | `conversion:i` (0 mi/h → m/s, 1 km/h → m/s, 2 dose by weight lb → mg, 3 gal/min → L/h, 4 in → cm, 5 seconds in a year), `value:v`, `play`, `step`, `reset` | `conversion`, `value`, `k`, `result` (once every unit has cancelled, else null) |

## Storyboards (`InquireDemo`, `web/kits/categorical/demo.js`)
Plain data; they play once in view, replay on tap, show the final frame under reduced motion, and step frame by frame in a walk. Colours are CSS variables (every theme works). Never GIFs. `alt` is a full sentence. validate runs `InquireDemo.check(spec)` on every one.
| Kind | Spec | Frames |
|---|---|---|
| `dots` | `{slots, lit, sweep, big}` or `{slots, grow: [4, 5, 6]}` | sweep: rest + one per dot + big |
| `range` | `{from, to, step, gaps, unit}` | numbered row (seats, days, pages); `gaps` marks the b − a slip |
| `tens` | `{n (1–99), unit}` | full tens, then ones, then the total |
| `line` | `{from, to, tick, points: [{v, c, label, below}], show: "dist"}` (`tick` = label spacing; `below: true` puts a point's label under the line, for two close points) or `{from, to, start, jumps: [5, -3], unit}` | points one by one (then the distance bracket), or the start then one hop per jump, then the end value |
| `columns` | `{n}` (place value) · `{add: [a, b]}` · `{sub: [a, b]}` | n: one place per frame from the left, then the total; add/sub: empty, one column per frame (carries/regrouping shown), then the result |
| `bar` | `{parts: [340, 125], labels, unit}` or `{parts: [340, null], total: 465, labels}` | parts one by one, brace + total, (reveal the unknown part) |
| `array` | `{rows, cols, unit}` | one row per frame with running totals, then the product |
| `fraction` | `{n, d, split, mixed}` | a bar cut into d parts (more bars when n > d, up to 4 wholes), one part shaded per frame, then n/d (or the mixed number "2 3/4" with `mixed`); `split: k` adds a frame re-cutting every part into k (n·k/d·k, "same amount") |
Every kind takes `cap` (the small caption under the big number). Frame counts for a walk: `InquireDemo.seqFrames(spec).length` (`frames` for dots). A lesson that needs a new picture asks the reviewer for a new kind (demo.js + a test in `tests/universal.test.js`); never a new code path in a lesson.

## History: verify everything
Use WebSearch/WebFetch. Prefer MacTutor (mathshistory.st-andrews.ac.uk), Britannica, Wikipedia with its citations, museum or university pages. Every date, name and place must be in a source you opened; list those in `sources`. If sources disagree or are vague, say "about", "by the …th century", or leave the claim out. No legends presented as fact. Keep it practical: merchants, builders, astronomers, tax collectors, sailors, cooks, engineers, and tie it to what the learner just did in the lab.

## Checks (`checks/arithmetic/<id>.py`)
Block lessons hash the whole `layers` object, so any text change needs a re-stamp, and the runner requires these labels (a longer label covers its prefix, e.g. `build.tasks[2].lines`): `example`, `practice[0..4]`, `concept.walk` (every number in its lines, predict answers and demo), `layers.examples` (every tile's numbers), `layers.setup`, `build.tasks[i]` for every task with a check or lines (answers, lines, predict answers, demo numbers), `build.exampleTask` if used, `build.stepGoal[i]` for every goal with `eq` (the target and that the lab can reach it). Put idea-card and stakes numbers under `layers.concept`. Compute independently with sympy/Python; never bend a check to match a page. Stamp after: `python3 tools/mathcheck.py --stamp <id>`.

## Finish (on the device)
`node tools/finish.js <id>` (build + validate + mathcheck <id> + labtest) must end `FINISH ok`. Do not run the full mathcheck or smoke; the reviewer runs the browser checks (`finish.js --browser`, `interact.js`, one sheet per lesson).

## Look (already built; for reference)
- Headers are `.win` console windows (`--frame` colours; never `--cyan` for UI). Section headings carry a lit diamond. The why and where share one `.win.why` panel ("Why it matters" in `--frame`, "Where it goes wrong" in red): side by side in Concept, stacked in Formal, the why alone in Intermediate.
- Paired boxes share top and bottom edges; rails fill the width in two columns (`ol.method.m2`: step left, why/goal/math right); an incomplete last row of cards is centred. Gold is reserved for the Next lesson button; green = solved, red = mistakes, amber numbers + violet objects = colour cues.
- Lab buttons and chips call `labIntoView(pg)` so the lab clears the sticky topic bar.

## Lessons not yet converted
Every Arithmetic lesson is a block lesson. Older-layout pages (Pre-Algebra onward) keep their tabs until converted with this brief; don't patch the old layout.
