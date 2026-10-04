# Content brief, round 3: Physics · Mechanics

You write topic dossiers (and their labs and saved checks) for the **Physics** subject of Inquire. The schema, markup and style rules are **exactly** those in `web/CONTENT-BRIEF.md` plus round 2's additions in `web/CONTENT-BRIEF-2.md` (read both fully). Tree, prerequisites, **math prerequisites**, unlocks, lab idea and colour keys per topic are in `web/TREE-SPEC-PHYSICS.md`. For tone and depth, read two finished Algebra I topics (`web/content/algebra-1/a1-literal.js`, `web/content/algebra-1/a1-quad-apps.js`) and match their quality.

## Level and standard
- **Calculus-based college physics** (physics and engineering majors). Reference text: OpenStax *University Physics Volume 1* (Ling, Sanny, Moebs). Use its terminology, notation, sign conventions and section order. Everything must be correct at that level; where the calculus form is the real definition (v = dx/dt, W = ∫F·dr), state it in `formal`, and give the algebra form as the special case.
- SI units throughout (show US customary only as a conversion aside). **g = 9.80 m/s²** (OpenStax). G = 6.67 × 10⁻¹¹ N·m²/kg². Earth: M = 5.97 × 10²⁴ kg, R = 6.37 × 10⁶ m (OpenStax values).
- Final numerical answers to **3 significant figures** unless the data justify otherwise; carry units in every worked line.
- `voice: "plain"` (adult, direct). `plain` still explains the idea with no jargon first.
- `grade`: `"College PHYS 1xx · University Physics I"` (use `"High school physics · college PHYS 1xx"` only for mech-units, mech-vectors, mech-displacement if you think it fits better; either is fine).
- `eyebrow` like `"Mechanics · kinematics"`.

## New field: `mathWhy` (required)
Each node has a `math` list in `web/src/data.js` (same as the "math:" line in the spec). Add
```js
mathWhy: { "a1-literal": `…`, "trigonometry:Right-triangle ratios (SOH-CAH-TOA)": `…` },
```
with **one entry per math entry, key copied exactly**. HTML allowed (math spans). One or two sentences each: the exact skill needed and where it appears in this topic (e.g. "Resolving <span class=\"m\"><i>F</i></span> at 30° into <span class=\"m\"><i>F</i> cos θ</span> and <span class=\"m\"><i>F</i> sin θ</span>…"). For calculus entries, say whether it is a co-requisite (the topic can be done with algebra first and calculus sharpens it) or needed outright. These render under **Learning path → Mathematics you need**.

## Other fields, physics-specific
- `prereqWhy` / `unlocksWhy`: one entry per physics prerequisite / unlock id listed in the spec (unlocks "(none in charted trees)" → `{}`).
- `beyond` (**Vital in later fields**, 2–4 entries): later **physics fields** by their Inquire names (Waves & Fluids; Thermodynamics; Electricity & Magnetism; Optics; Modern Physics; Classical Mechanics; Electrodynamics; Quantum Mechanics; Thermal & Statistical Physics; Computational Physics; General Relativity; Astrophysics & Cosmology; Nuclear & Particle Physics; Condensed Matter Physics; Quantum Field Theory) and/or engineering fields (Statics, Dynamics, Mechanical/Civil/Aerospace Engineering…), each with the specific reason the topic is vital there. Plain text.
- `fields`: academic/professional subjects that rely on it (plain text).
- `careers`: 5–7 real, specific uses.
- **Worked example**: a realistic problem (vehicles, sports, engineering, space, medicine), solved step by step in 4–8 lines, units carried, ending with a sanity check (units, sign, order of magnitude or limiting case).
- **Practice**: 4 problems easy → hard, answers with brief working and units. Include at least one conceptual or limiting-case question where natural.
- `mistakes`: sign errors, degrees vs radians, mass vs weight, forgetting components, etc., specific to the topic.
- `origin`: accurate history (Galileo, Newton's *Principia* 1687, Kepler 1609/1619, Coriolis on work 1829…). Omit if unsure.

## Physics markup (in addition to the math markup rules)
- Vectors: bold upright letter inside a math span, `<span class="m"><b>F</b></span>`; magnitude is the italic letter `<i>F</i>`; unit vectors `î`, `ĵ`, `k̂`. Components `<i>F</i><sub>x</sub>`.
- Units upright with a thin separation: `9.80 m/s²`, `kg·m/s`, `N·m`. Multiplication in units with `·`. Scientific notation `6.67 × 10<sup>−11</sup>`.
- Derivatives/integrals: `<span class="m">d<i>x</i>/d<i>t</i></span>`, `<span class="m">∫ <i>F</i> d<i>x</i></span>`, limits with `<sub>`/`<sup>`.
- Plain-text fields (`careers`, `fields`, `beyond`, `life`, example `note`s) take Unicode only: m/s², ½, θ, Δ, ω.

## Saved checks (required, `checks/mechanics/<id>.py`)
See the docstring of `tools/mathcheck.py`. Physics answers are rounded, so use `near(label, computed, page_value)` (0.5 % default tolerance; pass `rel=` if the page rounds more coarsely) with the computed value worked out independently from the problem data. Use `same` for exact relations and `check` for facts (signs, which is larger, units reasoning). Every label `example`, `practice[0]`…`practice[3]` must be covered. Then `python3 tools/mathcheck.py --stamp <id>`. Never bend a check to match a page: fix the page.

## Labs
Follow `web/LAB-BRIEF.md` exactly (toolkit, readout structure, quality bar, snap test). Physics labs are simulations: animate with `k.loop(dt)` using real formulas and SI values, show vectors as arrows (`d.arrow`) in the colour keys, keep numeric readouts to 3 s.f. with units, and handle every edge the sliders allow (zero mass, θ = 90°, no real root for landing time, escape vs bound orbit…).
