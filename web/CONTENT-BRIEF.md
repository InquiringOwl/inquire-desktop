# Content brief: "Inquire" math database — Arithmetic skill tree

You are writing the content for topic pages of an educational database app. Each topic is one node of the Arithmetic skill tree. The page layout mirrors an existing "Euler's formula" explainer: a hero formula, an interactive lab (built separately by someone else — you do NOT write lab code), then notes sections. You write ONLY the content objects described below.

Audience: a self-directed learner working from zero toward college-level mastery. Accuracy must be at the standard of a college developmental-math / foundations course. Use correct terminology (e.g. "addend", "minuend", "dividend", "quotient", "Fundamental Theorem of Arithmetic", "division algorithm a = bq + r with 0 ≤ r < b").

Voice: every page has TWO registers.
- `plain`: talk as if to a bright 10-year-old for early topics (voice "young"); conversational but adult for later topics (voice "plain"). Short sentences, concrete objects.
- `formal`: the precise, college-level statement (definitions, properties, notation). Always rigorous.
Pick `voice` per topic: "young" for counting…division basics, "mixed" for middle topics, "plain" for later ones.

## Output format

Write ONE JavaScript file (path given in your task). It must be valid JS that runs in a browser:

```js
window.ARITH = window.ARITH || {};
ARITH["topic-id"] = {
  title: "…",
  short: "…",            // ≤ 60 chars, tagline shown on the tree card tooltip
  grade: "Grades K–1",   // when this is typically first learned (US), or "Adult ed / college prep" etc.
  hours: 4,              // honest estimate of self-study hours to reach mastery
  voice: "young",        // "young" | "mixed" | "plain"
  eyebrow: "Number sense · the natural numbers",   // small uppercase label above the hero
  hero: `…`,             // HTML: the headline formula/statement. SHORT (fits one or two lines at 48px). e.g. <span class="m"><i>a</i> + <i>b</i> = <i>b</i> + <i>a</i></span>
  lede: `…`,             // 1–2 sentences under the hero
  plain: `…`,            // HTML: 2–4 <p> paragraphs, "In plain words"
  formal: `…`,           // HTML: 1–3 <p> and/or a <div class="display">…</div> block with the formal definition/theorem
  legend: [              // 3–5 entries: the symbols/variables on this page, using the colour keys given for your topic
    { c: "c1", sym: `<i>n</i>`, name: "The count", desc: "…one or two sentences…" }
  ],
  steps: { title: "How to …", items: [ `…`, `…` ] },   // 3–7 ordered procedure steps, HTML
  example: {
    prompt: `…`,                                  // HTML: a realistic practical word problem
    lines: [ { math: `…`, note: "…" } ],          // 3–8 worked lines; math is HTML, note is plain text explanation
    answer: `…`                                   // HTML final answer sentence
  },
  why: `…`,              // HTML: 1–2 paragraphs, why this matters in real life and later math
  careers: [ { role: "Pharmacist", use: "…one sentence, specific and true…" } ],   // 5–7
  life: [ "…", "…" ],    // 4–6 everyday tasks that use it (plain strings)
  fields: [ { name: "Chemistry", use: "…" } ],   // 3–5 academic/professional subjects that rely on it
  prereqWhy: { "other-id": "why that prerequisite is needed, one sentence" },   // one entry per prerequisite id listed for your topic
  unlocksWhy: { "other-id": "how this topic is used there, one sentence" },     // one entry per unlock id listed for your topic
  beyond: [ { field: "Algebra I", why: "…" } ],  // 2–4 more advanced math FIELDS beyond arithmetic it is vital for
  mistakes: [ { wrong: `…`, fix: `…` } ],        // 2–4 common errors and the correction, HTML
  practice: [ { q: `…`, a: `…` } ],              // 4 practice problems, easy → harder, with fully correct answers (brief working in a)
  origin: `…`            // HTML: 1–3 sentences of accurate history (who/when), no invented facts. Omit if unsure.
};
```

Use template literals (backticks) for every HTML field. Escape any backtick inside. Do not use `${` inside strings.

## Markup conventions (must follow)
- Wrap every piece of math in `<span class="m">…</span>`. Inside, italicise variables with `<i>`: `<span class="m"><i>a</i> × <i>b</i></span>`. Use real symbols: × ÷ − (U+2212 minus) · ≤ ≥ ≠ ≈ √ π ∈ ℕ ℤ ℚ ℝ. Superscripts with `<sup>`, subscripts `<sub>`.
- Fractions inline: `<span class="m"><span class="fr"><span>3</span><span>4</span></span></span>` renders a stacked fraction (numerator then denominator). Use slash `3/4` only in plain prose if simpler.
- Colour a symbol with a class: `c1` amber, `c2` cyan, `c3` pink, `c4` violet, `c5` green. e.g. `<span class="m c2"><i>a</i></span>`. Use the colour keys assigned to your topic consistently in hero, legend, and formal/example where helpful. The lab uses the same colours.
- Multi-line displayed math: `<div class="display">line one<br>line two</div>`. Use `<span class="dim">…</span>` for de-emphasised parts.
- A key term being defined: `<b>term</b>`.
- No emoji. No markdown inside strings. No `<script>`. No external links.
- Writing style: plain, direct, short sentences. Avoid em-dash asides, "not X but Y" framing, and stock phrases.

## Accuracy
Every number in examples, practice answers and formulas must be correct. You have a shell with python — CHECK every computation. Career uses must be real and specific (e.g. "Nurses convert mg/kg dosing orders to millilitres of liquid medication").

## The whole tree (id — title — prerequisites) so your prereqWhy/unlocksWhy keys are right
counting — Counting & the Natural Numbers — (none)
place-value — Place Value & Base Ten — counting
number-line — Comparing & the Number Line — counting
rounding — Rounding & Estimation — place-value, number-line
addition — Addition — place-value
subtraction — Subtraction — addition
multiplication — Multiplication — addition
division — Division — multiplication, subtraction
properties — Laws of Arithmetic (commutative, associative, distributive, identity, inverse) — multiplication
order-ops — Order of Operations — division, properties
integers — Integers & Negative Numbers — subtraction, number-line
factors — Factors, Multiples & Divisibility — division
exponents — Exponents & Powers — multiplication, properties
modular — Remainders & Clock Arithmetic (intro modular arithmetic) — division, integers
primes — Prime Numbers & Prime Factorization — factors
fractions — Fractions & Equivalence — division, factors
roots — Square Roots & Perfect Squares — exponents
gcf-lcm — GCF, LCM & the Euclidean Algorithm — primes
decimals — Decimals — place-value, fractions
mixed-numbers — Mixed Numbers & Improper Fractions — fractions
ratios — Ratios & Rates — fractions
fraction-ops — Operations with Fractions — fractions, gcf-lcm
decimal-ops — Operations with Decimals — decimals, multiplication
percents — Percents — decimals
sci-notation — Scientific Notation — exponents, decimals
proportions — Proportions — ratios, fraction-ops
averages — Mean, Median & Mode — division, decimal-ops
percent-apps — Percent Change, Tax & Interest (simple & compound interest) — percents, exponents
real-numbers — The Real Number System — integers, fraction-ops, roots, decimals
units — Units & Dimensional Analysis — proportions, decimal-ops

The "unlocks" of a topic are all topics that list it as a prerequisite.

## Lab + colour keys per topic (what the interactive lab on that page shows)
counting: ten-frames of dots, slider n; n amber (c1), successor n+1 cyan (c2).
place-value: base-ten blocks for a number up to 9,999; thousands violet c4, hundreds pink c3, tens cyan c2, ones amber c1.
number-line: two points a cyan c2, b pink c3; comparison symbol amber c1; distance |a − b| violet c4.
rounding: point x amber c1; lower anchor cyan c2; upper anchor pink c3; halfway mark violet c4.
addition: column-addition stepper; addend a cyan c2, addend b pink c3, carry amber c1, sum green c5.
subtraction: column stepper; minuend a cyan c2, subtrahend b pink c3, borrow/regroup amber c1, difference green c5.
multiplication: area model with partial products; factor a cyan c2, factor b pink c3, partial products amber c1, product green c5.
division: long-division stepper; dividend a cyan c2, divisor b pink c3, quotient q amber c1, remainder r violet c4.
properties: three modes (commutative array rotation, associative regrouping, distributive area split); a cyan c2, b pink c3, c violet c4.
order-ops: expression evaluation stepper; the operation being done next is amber c1; result green c5.
integers: number line with hops; a cyan c2, b pink c3, result amber c1.
factors: every rectangle array with area n; n amber c1, factor pair a cyan c2 × b pink c3.
exponents: repeated-multiplication growth; base b cyan c2, exponent n pink c3, power amber c1.
modular: clock with m positions; a cyan c2, b pink c3, result amber c1, modulus m violet c4.
primes: Sieve of Eratosthenes + factor tree; primes amber c1, current prime's multiples pink c3.
fractions: fraction bar; numerator n amber c1, denominator d cyan c2, scale factor k violet c4.
roots: square of unit tiles; area A amber c1, side √A cyan c2, Babylonian guesses pink c3.
gcf-lcm: rectangle a × b tiled by squares (geometric Euclidean algorithm); a cyan c2, b pink c3, gcd amber c1, lcm violet c4.
decimals: 10×10 hundredths grid + place-value chart; tenths cyan c2, hundredths pink c3, value amber c1.
mixed-numbers: pies; whole part w amber c1, leftover numerator r pink c3, denominator d cyan c2.
ratios: tape diagram; a cyan c2, b pink c3, scale k violet c4.
fraction-ops: two fraction bars rebuilt on a common denominator; first fraction cyan c2, second pink c3, result amber c1, common denominator violet c4.
decimal-ops: grid model; x cyan c2, y pink c3, product (overlap) amber c1.
percents: 10×10 grid; percent p amber c1, part cyan c2, whole pink c3.
sci-notation: powers-of-ten ruler (atom → galaxy); coefficient c cyan c2, exponent n pink c3.
proportions: double number line; known pair cyan c2, unknown x amber c1.
averages: draggable dot plot; mean amber c1 (balance point), median cyan c2, mode pink c3.
percent-apps: simple vs compound interest chart; principal P amber c1, simple interest line cyan c2, compound curve pink c3, rate r violet c4.
real-numbers: nested sets ℕ ⊂ 𝕎 ⊂ ℤ ⊂ ℚ ⊂ ℝ, irrationals separate; ℕ amber c1, ℤ cyan c2, ℚ pink c3, irrationals violet c4.
units: dimensional-analysis chain where units cancel; conversion factors cyan c2, result amber c1.
