window.ARITH = window.ARITH || {};
ARITH["pc-continuity"] = {
  title: "Continuity",
  short: "f(a) defined, the limit exists, and they are equal",
  grade: "Grade 12 · college Precalculus",
  hours: 4,
  voice: "plain",
  eyebrow: "Introduction to calculus · continuity",
  hero: `<span class="m"><i>f</i> continuous at <span class="c1"><i>a</i></span> &nbsp;⇔&nbsp; <span class="c2">lim<sub><i>x</i>→<span class="c1"><i>a</i></span><sup>−</sup></sub> <i>f</i>(<i>x</i>)</span> = <span class="c3">lim<sub><i>x</i>→<span class="c1"><i>a</i></span><sup>+</sup></sub> <i>f</i>(<i>x</i>)</span> = <span class="c5"><i>f</i>(<span class="c1"><i>a</i></span>)</span></span>`,
  lede: `A function is <b>continuous</b> at a point when its graph passes through that point without a break: the value is there, the nearby values approach it, and the two agree. Where one of these fails, the graph has a <b>discontinuity</b>, and its kind tells you what went wrong.`,
  plain: `<p>Informally, a function is continuous on an interval if you can draw its graph there without lifting your pencil. Calculus needs a test that works at a single point, so we ask three questions at <span class="m"><i>x</i> = <span class="c1"><i>a</i></span></span>.</p>
<p>Is there a value <span class="m"><i>f</i>(<span class="c1"><i>a</i></span>)</span>? Do the outputs approach one number from both sides, so the limit exists? Is that number the value? Three yeses mean continuous.</p>
<p>A no tells you the kind of break. If the limit exists but the value is missing or in the wrong place, the graph has a <span class="c4">hole</span>: a <b>removable discontinuity</b>, fixed by redefining one value. If the two sides head to different numbers, the graph steps: a <b>jump discontinuity</b>. If the outputs grow without bound, there is a vertical asymptote: an <b>infinite discontinuity</b>.</p>
<p>A piecewise function is continuous at a break point when the <span class="c2">left piece</span> and the <span class="c3">right piece</span> end at the same height and the value sits there. When a piece contains an unknown constant <span class="m"><span class="c5"><i>k</i></span></span>, setting the two ends equal gives an equation for <span class="m"><span class="c5"><i>k</i></span></span>.</p>`,
  formal: `<p>A function <span class="m"><i>f</i></span> is <b>continuous at</b> <span class="m"><span class="c1"><i>a</i></span></span> if all three conditions hold:</p>
<div class="display">1. &nbsp;<i>f</i>(<i>a</i>) is defined;<br>2. &nbsp;lim<sub><i>x</i>→<i>a</i></sub> <i>f</i>(<i>x</i>) exists;<br>3. &nbsp;lim<sub><i>x</i>→<i>a</i></sub> <i>f</i>(<i>x</i>) = <i>f</i>(<i>a</i>).</div>
<p>If <span class="m"><i>f</i></span> is not continuous at <span class="m"><i>a</i></span>, the discontinuity is <b>removable</b> when the limit exists (and <span class="m"><i>f</i>(<i>a</i>)</span> is undefined or different), a <b>jump</b> when both one-sided limits are finite but unequal, and <b>infinite</b> when a one-sided limit is <span class="m">∞</span> or <span class="m">−∞</span>. For example <span class="m">(<i>x</i><sup>2</sup> − 1)/(<i>x</i> − 1)</span> has a removable discontinuity at 1 (limit 2), and <span class="m">1/(<i>x</i> − 2)<sup>2</sup></span> an infinite one at 2.</p>
<p><span class="m"><i>f</i></span> is continuous on an open interval if it is continuous at every point of it; at a closed endpoint only the one-sided limit from inside is required. By the limit laws, polynomials are continuous on <span class="m">(−∞, ∞)</span>, rational functions on their domains, <span class="m">√<span class="ov"><i>x</i></span></span> on <span class="m">[0, ∞)</span>, <span class="m">sin <i>x</i></span> and <span class="m">cos <i>x</i></span> everywhere, and sums, products, quotients (where defined) and compositions of continuous functions are continuous. <b>Intermediate Value Theorem</b>: if <span class="m"><i>f</i></span> is continuous on <span class="m">[<i>a</i>, <i>b</i>]</span> and <span class="m"><i>N</i></span> is between <span class="m"><i>f</i>(<i>a</i>)</span> and <span class="m"><i>f</i>(<i>b</i>)</span>, then <span class="m"><i>f</i>(<i>c</i>) = <i>N</i></span> for some <span class="m"><i>c</i></span> in <span class="m">(<i>a</i>, <i>b</i>)</span>.</p>`,
  legend: [
    { c: "c1", sym: `<i>a</i>`, name: "Test point", desc: "The input where the three conditions are checked; drag it along the x-axis." },
    { c: "c2", sym: `<i>x</i> &lt; <i>a</i>`, name: "Left piece", desc: "Its end gives the left-hand limit." },
    { c: "c3", sym: `<i>x</i> &gt; <i>a</i>`, name: "Right piece", desc: "Its end gives the right-hand limit." },
    { c: "c4", sym: `○`, name: "Gap / asymptote", desc: "A hole, a jump between the ends, or a vertical asymptote." },
    { c: "c5", sym: `<i>k</i>`, name: "Continuous / constant", desc: "A condition that holds, and the constant that closes the gap." }
  ],
  steps: {
    title: "How to test continuity at a point",
    items: [
      `Find <span class="m"><i>f</i>(<span class="c1"><i>a</i></span>)</span> from the piece or formula that includes <span class="m"><span class="c1"><i>a</i></span></span>. If it is undefined, condition 1 fails.`,
      `Find the <span class="c2">left-hand</span> and <span class="c3">right-hand</span> limits, each from the piece on that side.`,
      `If they are finite and equal, the limit exists. If they differ, it is a jump; if one is infinite, it is an infinite discontinuity.`,
      `Compare the limit with <span class="m"><i>f</i>(<span class="c1"><i>a</i></span>)</span>. Equal means continuous; otherwise the discontinuity is removable.`,
      `To make a piecewise function continuous, set the two one-sided limits equal at each break and solve for the <span class="c5">constant</span>.`
    ]
  },
  example: {
    prompt: `Find <span class="m"><span class="c5"><i>k</i></span></span> so that <span class="m"><i>f</i>(<i>x</i>) = <span class="c2"><span class="c5"><i>k</i></span><i>x</i> − 1</span></span> for <span class="m"><i>x</i> &lt; 3</span> and <span class="m"><i>f</i>(<i>x</i>) = <span class="c3"><i>x</i><sup>2</sup> − <span class="c5"><i>k</i></span></span></span> for <span class="m"><i>x</i> ≥ 3</span> is continuous everywhere.`,
    lines: [
      { math: `<span class="m">only <i>x</i> = <span class="c1">3</span> can fail</span>`, note: "Each piece is a polynomial, continuous on its own open interval." },
      { math: `<span class="m"><i>f</i>(3) = 3<sup>2</sup> − <i>k</i> = 9 − <i>k</i></span>`, note: "The right piece includes x = 3, so it gives the value." },
      { math: `<span class="m"><span class="c2">lim<sub><i>x</i>→3<sup>−</sup></sub> <i>f</i>(<i>x</i>) = 3<i>k</i> − 1</span>, &nbsp; <span class="c3">lim<sub><i>x</i>→3<sup>+</sup></sub> <i>f</i>(<i>x</i>) = 9 − <i>k</i></span></span>`, note: "Substitute 3 into the piece on each side." },
      { math: `<span class="m">3<i>k</i> − 1 = 9 − <i>k</i> &nbsp;⇒&nbsp; 4<i>k</i> = 10 &nbsp;⇒&nbsp; <span class="c5"><i>k</i> = <span class="fr"><span>5</span><span>2</span></span></span></span>`, note: "The two ends must meet; the right side already equals f(3)." },
      { math: `<span class="m">3 · <span class="fr"><span>5</span><span>2</span></span> − 1 = <span class="fr"><span>13</span><span>2</span></span> = 9 − <span class="fr"><span>5</span><span>2</span></span></span>`, note: "Check: both one-sided limits and f(3) equal 13/2." }
    ],
    answer: `<span class="m"><span class="c5"><i>k</i> = <span class="fr"><span>5</span><span>2</span></span></span></span>, and then <span class="m"><i>f</i>(3) = lim<sub><i>x</i>→3</sub> <i>f</i>(<i>x</i>) = <span class="fr"><span>13</span><span>2</span></span></span>.`
  },
  why: `<p>Continuity is what lets you trust a graph between the points you plotted. The Intermediate Value Theorem, root-finding by bisection, and the theorem that a continuous function on a closed interval has a largest and a smallest value all need it.</p>
<p>It also tells you when "plug in" is a correct way to find a limit: exactly at points of continuity. Calculus then builds on it: a function with a derivative at a point is continuous there, so the breaks you learn to spot here are also places where slopes fail to exist.</p>`,
  careers: [
    { role: "Civil engineer", use: "Joins road and rail curves so position and slope match at each join, a continuity condition solved for the unknown coefficients." },
    { role: "Tax policy analyst", use: "Checks whether tax or benefit schedules jump at bracket edges, creating cliffs where earning one more dollar lowers income." },
    { role: "Computer graphics developer", use: "Builds splines whose pieces meet without gaps, setting constants so neighbouring pieces agree at the knots." },
    { role: "Control systems engineer", use: "Detects jump discontinuities from switching inputs and designs controllers that respond to them smoothly." },
    { role: "Numerical analyst", use: "Uses the Intermediate Value Theorem to guarantee that bisection and similar root-finders converge on continuous functions." },
    { role: "Data scientist", use: "Spots breaks in time series, such as a change in how a quantity is measured, that show up as jump discontinuities." }
  ],
  life: [
    "Postage and parking prices jump at whole ounces or hours: step functions with jump discontinuities",
    "Your height grew continuously, so at some moment it equalled every value between birth and now",
    "A thermostat switching a heater on and off makes the power drawn jump while the room temperature changes continuously",
    "Tax brackets are designed so the tax owed is continuous even though the rate jumps",
    "A hiker going from 200 m to 900 m passes through every elevation in between"
  ],
  fields: [
    { name: "Calculus", use: "Continuity is required for the Intermediate and Extreme Value Theorems and follows from differentiability." },
    { name: "Engineering", use: "Pieces of curves, beams and signals are joined with matching values at the joins." },
    { name: "Numerical analysis", use: "Root-finding methods rely on continuity to guarantee a zero between a sign change." },
    { name: "Economics", use: "Piecewise prices, taxes and subsidies are checked for jumps at their thresholds." }
  ],
  prereqWhy: {
    "pc-limit-laws": "Continuity compares a limit with a value, and the limit laws are how both one-sided limits are computed exactly.",
    "pc-ivt-bounds": "The Intermediate Value Theorem used there for polynomials holds for every continuous function, which is why continuity matters."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Calculus I", why: "Differentiable functions are continuous, and the Extreme Value Theorem needs continuity on a closed interval." },
    { field: "Calculus II", why: "Integrals of piecewise continuous functions are computed piece by piece across their jumps." },
    { field: "Differential Equations", why: "Existence of solutions needs continuous coefficients; jump inputs are handled with step functions." }
  ],
  mistakes: [
    { wrong: `"<span class="m"><i>f</i>(<i>a</i>)</span> is defined, so <span class="m"><i>f</i></span> is continuous at <span class="m"><i>a</i></span>."`, fix: `All three conditions are needed. A jump function can have a value at the jump and still have no limit there.` },
    { wrong: `Testing only one side when solving for a constant, or using the value from the wrong piece.`, fix: `Compute both one-sided limits from the pieces on each side, and <span class="m"><i>f</i>(<i>a</i>)</span> from the piece whose condition includes <span class="m"><i>a</i></span>.` },
    { wrong: `"<span class="m">1/<i>x</i></span> is not a continuous function."`, fix: `It is continuous at every point of its domain. At <span class="m"><i>x</i> = 0</span>, which is not in the domain, its graph has an infinite discontinuity.` },
    { wrong: `Calling a hole a jump because the point is "missing".`, fix: `If both one-sided limits are the same number, it is removable: redefining <span class="m"><i>f</i>(<i>a</i>)</span> as that number makes <span class="m"><i>f</i></span> continuous.` }
  ],
  practice: [
    { q: `Where is <span class="m"><i>f</i>(<i>x</i>) = <span class="fr"><span><i>x</i> + 1</span><span><i>x</i><sup>2</sup> − 4</span></span></span> continuous?`, a: `A rational function is continuous on its domain. <span class="m"><i>x</i><sup>2</sup> − 4 = 0</span> at <span class="m">±2</span>, so <span class="m"><span class="c5">(−∞, −2) ∪ (−2, 2) ∪ (2, ∞)</span></span>.` },
    { q: `Classify the discontinuity of <span class="m"><i>g</i>(<i>x</i>) = <span class="fr"><span><i>x</i><sup>2</sup> − <i>x</i> − 6</span><span><i>x</i> − 3</span></span></span> at <span class="m"><i>x</i> = 3</span>, and say how to remove it if possible.`, a: `<span class="m"><i>g</i>(3)</span> is undefined, but <span class="m">(<i>x</i> − 3)(<i>x</i> + 2)/(<i>x</i> − 3) = <i>x</i> + 2</span> for <span class="m"><i>x</i> ≠ 3</span>, so the limit is 5. <span class="c5">Removable</span>: define <span class="m"><i>g</i>(3) = 5</span>.` },
    { q: `<span class="m"><i>f</i>(<i>x</i>) = 2<i>x</i> + 1</span> for <span class="m"><i>x</i> &lt; 1</span> and <span class="m"><i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> + 4</span> for <span class="m"><i>x</i> ≥ 1</span>. Test continuity at <span class="m"><i>x</i> = 1</span>.`, a: `<span class="m"><i>f</i>(1) = 5</span>; left limit <span class="m">2 + 1 = 3</span>, right limit <span class="m">1 + 4 = 5</span>. The one-sided limits differ, so the limit does not exist: a <span class="c5">jump discontinuity</span> (continuous from the right only).` },
    { q: `Find <span class="m"><i>a</i></span> and <span class="m"><i>b</i></span> so that <span class="m"><i>f</i>(<i>x</i>) = <i>x</i> + 1</span> for <span class="m"><i>x</i> &lt; 1</span>, <span class="m"><i>a</i><i>x</i> + <i>b</i></span> for <span class="m">1 ≤ <i>x</i> &lt; 3</span>, <span class="m"><i>x</i><sup>2</sup> − 5</span> for <span class="m"><i>x</i> ≥ 3</span> is continuous everywhere.`, a: `At 1: <span class="m"><i>a</i> + <i>b</i> = 2</span>. At 3: <span class="m">3<i>a</i> + <i>b</i> = 9 − 5 = 4</span>. Subtract: <span class="m">2<i>a</i> = 2</span>, so <span class="m"><span class="c5"><i>a</i> = 1, <i>b</i> = 1</span></span>.` }
  ],
  origin: `<p>Bernard Bolzano gave a definition of continuity close to the modern one in 1817, in a paper proving the Intermediate Value Theorem from it rather than from pictures. Augustin-Louis Cauchy, independently, defined a continuous function in his <i>Cours d'analyse</i> (1821) as one where an infinitely small change in <span class="m"><i>x</i></span> produces an infinitely small change in <span class="m"><i>f</i>(<i>x</i>)</span>. Karl Weierstrass restated it with ε and δ later in the century, the form used today.</p>`
};
