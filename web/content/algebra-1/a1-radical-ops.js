window.ARITH = window.ARITH || {};

ARITH["a1-radical-ops"] = {
  title: "Operations with Radicals",
  short: "Add like radicals, multiply, and rationalize",
  grade: "Grade 9–10 · college Elementary Algebra",
  hours: 5,
  voice: "plain",
  eyebrow: "Radicals · adding, multiplying, rationalizing",
  hero: `<span class="m"><span class="c2">3</span>√<span class="c4">2</span> + <span class="c2">4</span>√<span class="c4">2</span> = <span class="c1">7√2</span> &nbsp;&nbsp;&nbsp; √<span class="c4"><i>a</i></span> · √<span class="c4"><i>b</i></span> = <span class="c1">√<span style="text-decoration:overline"><i>ab</i></span></span></span>`,
  lede: `Radicals with the same index and radicand combine like like terms. Radicals multiply by multiplying radicands. A radical in a denominator is removed by multiplying by a well-chosen form of 1.`,
  plain: `<p>Think of <span class="m">√2</span> as a unit, like <span class="m"><i>x</i></span>. Then <span class="m">3√2 + 4√2 = 7√2</span>, just as <span class="m">3<i>x</i> + 4<i>x</i> = 7<i>x</i></span>. These are <b>like radicals</b>: same index, same radicand. Unlike radicals such as <span class="m">√2 + √3</span> cannot be combined, and <span class="m">√2 + √3</span> is not <span class="m">√5</span>. Always simplify first: <span class="m">√12 + √27 = 2√3 + 3√3 = 5√3</span> only becomes addable after simplifying.</p>
<p>Multiplication is more forgiving. <span class="m">√6 · √15 = √90</span>, and <span class="m">√90 = 3√10</span>. With more than one term, multiply radicals the way you multiply polynomials, using FOIL or the special products. A radical times itself loses the root: <span class="m">√5 · √5 = 5</span>.</p>
<p>By convention, a simplified answer has no radical in the denominator. To <b>rationalize</b> <span class="m">3/√2</span>, multiply top and bottom by <span class="m">√2</span> to get <span class="m">3√2/2</span>. If the denominator is a sum like <span class="m">3 − √5</span>, multiply by its <b>conjugate</b> <span class="m">3 + √5</span>. The product <span class="m">(3 − √5)(3 + √5) = 9 − 5 = 4</span> has no radical, because the middle terms cancel.</p>`,
  formal: `<p>For real numbers <span class="m"><i>a</i>, <i>b</i> ≥ 0</span>:</p>
<div class="display"><b>Product rule:</b> √<i>a</i> · √<i>b</i> = √<span style="text-decoration:overline"><i>ab</i></span> &nbsp;&nbsp; <b>Quotient rule:</b> √<i>a</i> / √<i>b</i> = √<span style="text-decoration:overline"><i>a</i>/<i>b</i></span> &nbsp;<span class="dim">(<i>b</i> &gt; 0)</span><br><b>Like radicals:</b> <i>p</i>√<i>a</i> + <i>q</i>√<i>a</i> = (<i>p</i> + <i>q</i>)√<i>a</i><br><b>Conjugates:</b> (<i>p</i> + √<i>a</i>)(<i>p</i> − √<i>a</i>) = <i>p</i><sup>2</sup> − <i>a</i></div>
<p>The same rules hold for <span class="m"><i>n</i></span>th roots with a common index, <span class="m"><sup><i>n</i></sup>√<i>a</i> · <sup><i>n</i></sup>√<i>b</i> = <sup><i>n</i></sup>√<span style="text-decoration:overline"><i>ab</i></span></span>. A radical expression is in <b>simplified form</b> when no radicand has a perfect-square factor other than 1 (for square roots), no radicand contains a fraction, and no denominator contains a radical. There is no sum rule: <span class="m">√<span style="text-decoration:overline"><i>a</i> + <i>b</i></span> ≠ √<i>a</i> + √<i>b</i></span> in general.</p>`,
  legend: [
    { c: "c4", sym: `√<i>a</i>`, name: "Radicand", desc: "The number under the root sign. Only radicals with the same radicand (and index) can be added." },
    { c: "c2", sym: `<i>p</i>`, name: "Coefficient", desc: "The number in front of the radical. Like radicals are added by adding coefficients." },
    { c: "c1", sym: `(<i>p</i> + <i>q</i>)√<i>a</i>`, name: "Result", desc: "The simplified sum, product or rationalized quotient." }
  ],
  steps: { title: "How to add, multiply and rationalize radicals", items: [
    `Simplify every radical first by removing perfect-square factors: <span class="m">√50 = 5√2</span>.`,
    `To add or subtract, combine coefficients of like radicals only. Leave unlike radicals as separate terms.`,
    `To multiply, multiply coefficients with coefficients and radicands with radicands, then simplify. For sums, distribute every term (FOIL).`,
    `To rationalize a single-term denominator <span class="m">√<i>b</i></span>, multiply numerator and denominator by <span class="m">√<i>b</i></span>.`,
    `To rationalize a two-term denominator <span class="m"><i>p</i> + √<i>b</i></span>, multiply numerator and denominator by the conjugate <span class="m"><i>p</i> − √<i>b</i></span>.`,
    `Simplify the result and reduce any common factor of all numerator terms and the denominator.`
  ] },
  example: {
    prompt: `A right-triangle garden bed has sides <span class="m">√18</span> m, <span class="m">√32</span> m and <span class="m">√50</span> m. How much edging is needed to go around it, and what is its area?`,
    lines: [
      { math: `<span class="m">(√18)<sup>2</sup> + (√32)<sup>2</sup> = 18 + 32 = 50 = (√50)<sup>2</sup></span>`, note: "The Pythagorean theorem confirms the right angle, with √50 the hypotenuse." },
      { math: `<span class="m">√18 = <span class="c2">3</span>√<span class="c4">2</span>, &nbsp; √32 = <span class="c2">4</span>√<span class="c4">2</span>, &nbsp; √50 = <span class="c2">5</span>√<span class="c4">2</span></span>`, note: "Simplify each: 18 = 9·2, 32 = 16·2, 50 = 25·2." },
      { math: `<span class="m"><i>P</i> = 3√2 + 4√2 + 5√2 = <span class="c1">12√2</span></span>`, note: "All three are like radicals, so add the coefficients." },
      { math: `<span class="m">12√2 ≈ 12 × 1.4142 ≈ 16.97</span>`, note: "Convert to a decimal only at the end, for buying." },
      { math: `<span class="m"><i>A</i> = <span class="fr"><span>1</span><span>2</span></span> · 3√2 · 4√2 = <span class="fr"><span>1</span><span>2</span></span> · 12 · 2 = <span class="c1">12</span></span>`, note: "The legs are base and height; √2 · √2 = 2." }
    ],
    answer: `The edging is <span class="m">12√2 ≈ 16.97</span> m, so buy 17 m. The area is exactly <span class="m">12</span> m².`
  },
  why: `<p>Exact radical answers appear whenever the Pythagorean theorem or a square root enters a problem: diagonals, distances, the sides of special triangles, electrical quantities like RMS voltage. Keeping them exact until the end avoids rounding errors that pile up across several steps.</p>
<p>The conjugate trick you learn here reappears many times: rationalizing in precalculus, dividing complex numbers <span class="m">(<i>a</i> + <i>bi</i>)/(<i>c</i> + <i>di</i>)</span> in Algebra II, and evaluating limits in calculus.</p>`,
  careers: [
    { role: "Electrician", use: "Works with RMS voltage, the peak voltage divided by √2, and the √3 factor in three-phase power calculations." },
    { role: "Carpenter", use: "Computes rafter and brace lengths exactly, such as a 45° brace on an 8 ft side being 8√2 ≈ 11.31 ft." },
    { role: "Structural engineer", use: "Keeps member lengths and forces in exact radical form in truss calculations before rounding at the end." },
    { role: "Machinist", use: "Uses √2 and √3 to find diagonal distances across square and hexagonal stock when setting up cuts." },
    { role: "Physicist", use: "Rationalizes and simplifies radical expressions when normalising quantum states, such as 1/√2 coefficients." }
  ],
  life: [
    "Finding the diagonal of a square tile or a TV screen exactly",
    "Estimating how much trim goes around a triangular garden bed",
    "Understanding why an A4 sheet folded in half keeps the same shape (the ratio √2)",
    "Checking that a picture frame corner is square with a diagonal measurement",
    "Comparing distances on a grid map that involve square roots"
  ],
  fields: [
    { name: "Geometry", use: "Special right triangles give side ratios 1 : 1 : √2 and 1 : √3 : 2, combined with radical arithmetic." },
    { name: "Electrical engineering", use: "RMS values and three-phase power involve √2 and √3 multiplied and divided through formulas." },
    { name: "Physics", use: "Quantum mechanics normalises states with factors like 1/√2 and simplifies radical expressions constantly." },
    { name: "Trigonometry", use: "Exact values such as sin 45° = √2/2 are rationalized forms of 1/√2." }
  ],
  prereqWhy: {
    "a1-radicals": "Radicals must be simplified before you can tell whether they are like radicals and before a final answer is in simplest form.",
    "a1-poly-mult": "Products of radical sums use FOIL and the special products, especially the conjugate pattern (a + b)(a − b) = a² − b²."
  },
  unlocksWhy: {
    "a2-complex": "Writing <span class=\"m\">√(−<i>b</i>) = <i>i</i>√<i>b</i></span> ends with simplifying <span class=\"m\">√<i>b</i></span>, using the product rule for radicals.",
    "a1-radical-eq": "Solving radical equations requires isolating a radical, squaring binomials that contain radicals, and checking answers by radical arithmetic.",
    "pc-limit-laws": "Limits that start as 0/0, such as <span class=\"m\">(√(<i>x</i> + 4) − 2)/<i>x</i></span>, are evaluated by multiplying by the conjugate and simplifying the radicals, which is exactly the rationalizing practised here."
  },
  beyond: [
    { field: "Algebra II", why: "Dividing complex numbers uses the same conjugate idea as rationalizing denominators." },
    { field: "Precalculus", why: "Exact trigonometric values and the quadratic formula give answers such as (1 + √5)/2 that must be simplified." },
    { field: "Calculus I", why: "Limits like (√(x + 4) − 2)/x are evaluated by multiplying by the conjugate." },
    { field: "Physics", why: "Vector magnitudes and wave amplitudes are exact radicals combined and simplified in derivations." }
  ],
  mistakes: [
    { wrong: `<span class="m">√2 + √3 = √5</span>`, fix: `There is no sum rule for roots. <span class="m">√2 + √3 ≈ 3.15</span> while <span class="m">√5 ≈ 2.24</span>. Unlike radicals stay as separate terms.` },
    { wrong: `<span class="m">(√3 + √5)<sup>2</sup> = 3 + 5 = 8</span>`, fix: `Square the binomial: <span class="m">3 + 2√15 + 5 = 8 + 2√15</span>.` },
    { wrong: `Rationalizing <span class="m"><span class="fr"><span>6</span><span>3 − √5</span></span></span> by multiplying by <span class="m">√5/√5</span>.`, fix: `That leaves a radical in the denominator. Multiply by the conjugate <span class="m">(3 + √5)/(3 + √5)</span> so the denominator becomes <span class="m">9 − 5 = 4</span>.` },
    { wrong: `Adding <span class="m">√12 + √27</span> as "unlike, cannot combine".`, fix: `Simplify first: <span class="m">2√3 + 3√3 = 5√3</span>.` }
  ],
  practice: [
    { q: `Simplify <span class="m">5√3 + 2√3 − √3</span>.`, a: `Like radicals: <span class="m">(5 + 2 − 1)√3 = 6√3</span>.` },
    { q: `Simplify <span class="m">√12 + √75 − √27</span>.`, a: `<span class="m">2√3 + 5√3 − 3√3 = 4√3</span>.` },
    { q: `Multiply <span class="m">(2 + √5)(3 − √5)</span>, and <span class="m">√6 · √15</span>.`, a: `FOIL: <span class="m">6 − 2√5 + 3√5 − 5 = 1 + √5</span>. And <span class="m">√90 = √(9 · 10) = 3√10</span>.` },
    { q: `Rationalize the denominator: <span class="m"><span class="fr"><span>6</span><span>3 − √5</span></span></span>.`, a: `Multiply by <span class="m"><span class="fr"><span>3 + √5</span><span>3 + √5</span></span></span>: <span class="m"><span class="fr"><span>6(3 + √5)</span><span>9 − 5</span></span> = <span class="fr"><span>18 + 6√5</span><span>4</span></span> = <span class="fr"><span>9 + 3√5</span><span>2</span></span></span>.` }
  ]
};
