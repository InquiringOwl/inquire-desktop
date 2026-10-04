# Content brief, round 4: Geometry

You write topic dossiers, their saved math checks and their labs for the **Geometry** field of the Inquire math dictionary. The schema, markup and style rules are **exactly** those in `web/CONTENT-BRIEF.md` plus round 2's additions in `web/CONTENT-BRIEF-2.md` (read both fully). Tree, prerequisites, unlocks, lab idea and colour keys per topic are in the GEOMETRY section of `web/TREE-SPEC.md`. Labs follow `web/LAB-BRIEF.md`. For tone and depth, read two finished Algebra I topics (`web/content/algebra-1/a1-par-perp.js`, `web/content/algebra-1/a1-quad-apps.js`) and match their quality and length.

## Level and standard
- The **college-prep Euclidean geometry course** (US Grade 10; what college placement and every later course assume). Build in the standard axiomatic order: undefined terms, postulates (Ruler, Segment Addition, Protractor, Angle Addition, Parallel), then theorems proved from them. Terminology as in Jurgensen *Geometry* and the Common Core HS-G standards: *postulate*, *theorem*, *corollary*, *converse*, *congruent* (≅, for figures) vs *equal* (=, for measures), *included angle*, *corresponding parts*, *CPCTC*, *transversal*, *intercepted arc*, *apothem*, *slant height*, *lateral area*.
- Everything must be correct at that level. State theorems exactly (hypotheses included: "in a plane", "convex", "non-collinear", "the legs of a *right* triangle"). Name the theorem used in each proof or computation step.
- `voice: "plain"` (adult, direct). `plain` still explains the idea with no jargon first.
- `grade`: `"Grade 10 · college-prep Geometry"`. `eyebrow` like `"Geometry · congruence"`.
- Degrees are the angle unit (° on every angle measure). Exact answers first: simplified radicals and π kept symbolic, then a decimal with `≈` and a stated precision (nearest tenth unless the problem says otherwise).

## Geometry markup (in addition to the math markup rules)
- Points are italic capitals: `<i>A</i>`. Length of a segment is italic: `<i>AB</i>`.
- Segment with an overline, ray and line with arrows above are hard in HTML, so use: segment `<span class="ov"><i>AB</i></span>` (renders an overline), ray `ray <i>AB</i>`, line `line <i>AB</i>` or `<i>ℓ</i>`. Angle `∠<i>ABC</i>`, measure `m∠<i>ABC</i> = 40°`, triangle `△<i>ABC</i>`, arc `⌢<i>AB</i>` and its measure `m⌢<i>AB</i>`. Symbols: ≅ ∼ ∥ ⊥ ° △ ∠ π √.
- In plain-text fields (`careers`, `fields`, `beyond`, `life`, example `note`s) use Unicode only: △ABC, ∠A, 30°, √2, π, ².
- A proof inside `formal`, `example` or `practice` is a two-column table:
  `<table class="proof"><tr><th>Statement</th><th>Reason</th></tr><tr><td>…</td><td>Given</td></tr>…</table>`. Keep proofs short (3–8 rows).

## Worked example and practice
- **Worked example**: a realistic problem (construction, surveying, design, navigation, manufacturing, sport), solved step by step in 4–8 lines, naming the theorem or formula on each line, ending with a check (substitute back, units, or a reasonableness test). For proof-centred topics the example may be a short two-column proof plus one numerical consequence.
- **Practice**: 4 problems, easy → hard, answers with brief working. Include at least one "not enough information" / "not a triangle" / converse-is-false case where natural. At most one practice item may be a pure proof; the others have something checkable.

## Saved checks (required, `checks/geometry/<id>.py`)
See the docstring of `tools/mathcheck.py`. Recompute every number independently from the problem data with sympy (angle sums, exact radicals, π expressions, coordinates, ratios); type the page's numbers in and compare with `same` (exact) or `near` (for rounded decimals). Use `check` for facts (a triangle inequality holds, slopes are negative reciprocals, two lines meet). For a pure-proof item, `check` whatever the proof's figure implies numerically, or `skip(label, reason)` with a real reason. Every label `example`, `practice[0]`…`practice[3]` must be covered. Then `python3 tools/mathcheck.py --stamp <id>`. Never bend a check to match a page: fix the page.

## Labs
One lab file per writer, `web/labs/g-<letter>.js`, holding `L["g-…"]` for each of your topics. Geometry labs are dynamic figures: draggable points (`c.xy(e)` on pointer events, hit radius ≥ 14 px, pointer capture, touch-friendly), live measures, and steppers for constructions and proofs. Show angle measures to 1 decimal place, lengths as exact radicals where the coordinates are integers, otherwise 2 decimals. Draw angle arcs and congruence tick marks in the colour keys. Handle every degenerate state the controls allow (collinear points, zero-length sides, a point dragged off the stage, parallel lines that never meet, an SSA case with 0, 1 or 2 triangles) with a clear message. Keep the figure inside the canvas at phone size (~340 px).

## Screenshots (the device shell has no browser)
Write files only in the Mac folder with device_bash. To look at a lab, mirror the repo into the cloud and snap there:
1. device_bash: `cd $HOME/mnt/codex-desktop && tar czf .sync/<you>.tgz --exclude=node_modules --exclude=.git --exclude=.sync --exclude=.snap --exclude=dist-web --exclude=build .`
2. device_stage_files `["/Users/ashleyhoffmann/Documents/codex-desktop/.sync/<you>.tgz"]` (lands at `/mnt/user-data/uploads/codex-desktop/.sync/<you>.tgz` after a second).
3. Cloud Bash: `rm -rf /home/claude/<you> && mkdir -p /home/claude/<you> && cd /home/claude/<you> && tar xzf /mnt/user-data/uploads/codex-desktop/.sync/<you>.tgz && CLICK=1 NODE_PATH=$(npm root -g) node tools/snap.js <ids>` then Read `/tmp/codex-snap/<id>.png`. Phone width: prefix `W=400 H=860`.
Never edit the cloud copy; fix the Mac file and repeat.
