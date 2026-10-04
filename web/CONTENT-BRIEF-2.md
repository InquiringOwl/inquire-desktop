# Content brief, round 2: Pre-Algebra and Algebra I

You write topic dossiers for the Inquire math dictionary. The schema, markup conventions and style rules are **exactly** those in `web/CONTENT-BRIEF.md` (read it fully first). The tree, prerequisites, unlocks and the lab + colour keys for each topic are in `web/TREE-SPEC.md`. For tone and depth, read two finished Arithmetic topics in `web/content/part3.js` (for example `proportions` and `real-numbers`) and match their quality.

## What changes from round 1
- **Level.** These are the college developmental sequence: Pre-Algebra ≈ OpenStax *Prealgebra 2e* / community-college MATH 0xx; Algebra I ≈ OpenStax *Elementary Algebra 2e* / college Elementary Algebra. Use their standard terminology, definitions and conventions (e.g. "solution set", "interval notation", "extraneous solution", "zero-product property", "standard form Ax + By = C with A ≥ 0 and integer coefficients", "principal square root", "excluded values"). Everything must be correct at college level.
- **Voice.** Pre-Algebra: `voice: "mixed"` (plain explanation a 13-year-old follows; formal statement at college level). Algebra I: `voice: "plain"` (adult, direct). The `plain` field still explains the idea without jargon first.
- **`grade`** like `"Grade 7 · college Prealgebra (MATH 0xx)"` or `"Grade 9 · college Elementary Algebra"`.
- **`prereqWhy`** needs one entry for **every** prerequisite id listed in TREE-SPEC.md, including Arithmetic or Pre-Algebra ids from another field.
- **`unlocksWhy`**: one entry per listed unlock id. If the spec says "(none in charted trees)", use `{}`.
- **`beyond`**: 2–4 later fields (e.g. Algebra II, Precalculus, Calculus I, Statistics, Linear Algebra, Physics, Chemistry, Economics) and why this topic is vital there.
- **Legend colours** must follow the colour keys in TREE-SPEC.md for your topic, because the interactive model uses the same colours. Use the same colours in the hero where it helps.
- **Worked example** must be a realistic practical problem (money, measurement, science, work, travel), solved step by step, 4–8 lines, with a check line where natural (substitute back).
- **Practice**: 4 problems, easy → hard, answers with brief working. For equations, include at least one special case where relevant (no solution, all reals, extraneous root, negative discriminant).
- **Math markup** as in round 1. Use `<span class="m">` for all math, `<i>` for variables, U+2212 minus, `<sup>`/`<sub>`, `<span class="fr"><span>num</span><span>den</span></span>` for stacked fractions, and `√` with an overline span if you need a radical over several characters: `√<span style="text-decoration:overline">x + 5</span>`. Intervals like `[2, 7)`, `(−∞, 3]`. Set-builder `{<i>x</i> | <i>x</i> &gt; 3}` (escape `<` and `>` as `&lt;` `&gt;` inside HTML).
- The global object is still `window.ARITH` (it holds every field's topics): start your file with `window.ARITH = window.ARITH || {};` and write `ARITH["pa-two-step"] = {...}`.

## Accuracy
Check every number, root, factorisation and solution in python (`pip install sympy --break-system-packages` is allowed; use sympy to verify algebra). Career uses must be real and specific. History (`origin`) must be accurate; omit the field if unsure.

## Deliverable
Write only your own file (path given in your task). Then confirm it parses and every topic has every field:
```
node -e "global.window=global; require('./web/content/<yourfile>.js'); const need=['title','short','grade','hours','voice','eyebrow','hero','lede','plain','formal','legend','steps','example','why','careers','life','fields','prereqWhy','unlocksWhy','beyond','mistakes','practice']; for (const [k,v] of Object.entries(ARITH)) { const miss=need.filter(f=>!(f in v)); if (miss.length) console.log(k,'missing',miss); } console.log(Object.keys(ARITH))"
```
Also check that HTML tags balance in each HTML field (python html.parser), that no string contains `${` or a stray backtick, and that `careers[].use`, `fields[].use`, `beyond[].why`, `life[]` and example `note`s are plain text (the app escapes them, so no tags there; use Unicode superscripts like ² if needed).
