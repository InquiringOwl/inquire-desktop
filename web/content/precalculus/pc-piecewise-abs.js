window.ARITH = window.ARITH || {};
ARITH["pc-piecewise-abs"] = {
  title: "Piecewise & Absolute-Value Functions",
  short: "Different rules on different intervals, |x| and step functions",
  grade: "Grade 12 · college Precalculus",
  hours: 5,
  voice: "plain",
  eyebrow: "Functions · piecewise definitions",
  hero: `<span class="m">|<i>x</i>| = <span class="c2"><i>x</i></span> if <i>x</i> ≥ <span class="c4">0</span>, &nbsp; <span class="c3">−<i>x</i></span> if <i>x</i> &lt; <span class="c4">0</span></span>`,
  lede: `A <b>piecewise function</b> uses different formulas on different parts of its domain. The absolute value, tax brackets, shipping rates and parking fees are all piecewise, and the graph is drawn one piece at a time, with open and closed dots showing which piece owns each <span class="c4">break point</span>.`,
  plain: `<p>A parking garage charges one price for the first hour and another for each hour after that. A tax table uses one rate up to some income and a higher rate above it. In each case the rule you apply depends on where the input falls. That is all a piecewise function is: a list of formulas, each with the interval where it is used.</p>
<p>To evaluate one, first find which interval contains <span class="m"><span class="c1"><i>x</i></span></span>, then use only that formula. At a <span class="c4">break point</span> the inequality signs decide: <span class="m">≤</span> or <span class="m">≥</span> includes the point (a closed dot), <span class="m">&lt;</span> or <span class="m">&gt;</span> leaves it out (an open dot). Each input must belong to exactly one piece, or the rule would not be a function.</p>
<p>The absolute value <span class="m">|<i>x</i>|</span> is the most familiar piecewise function: keep <span class="m"><i>x</i></span> when it is not negative, flip its sign when it is. Two related moves build new graphs. For <span class="m">|<i>f</i>(<i>x</i>)|</span>, any part of the graph below the <i>x</i>-axis is reflected up above it. For <span class="m"><i>f</i>(|<i>x</i>|)</span>, the right half of the graph is kept and mirrored onto the left.</p>
<p>A <b>step function</b> is piecewise constant: its graph is a staircase of flat segments. The <b>greatest integer function</b> <span class="m">⌊<i>x</i>⌋</span> rounds down to an integer, so <span class="m">⌊2.7⌋ = 2</span> and <span class="m">⌊−2.3⌋ = −3</span>.</p>`,
  formal: `<p>A piecewise-defined function has the form</p>
<div class="display"><i>f</i>(<i>x</i>) = <span class="c2"><i>f</i><sub>1</sub>(<i>x</i>)</span> if <i>x</i> ∈ <i>D</i><sub>1</sub>, &nbsp; <span class="c3"><i>f</i><sub>2</sub>(<i>x</i>)</span> if <i>x</i> ∈ <i>D</i><sub>2</sub>, &nbsp; …</div>
<p>where the intervals <span class="m"><i>D</i><sub>1</sub>, <i>D</i><sub>2</sub>, …</span> do not overlap and their union is the domain. The absolute value is <span class="m">|<i>x</i>| = <i>x</i></span> for <span class="m"><i>x</i> ≥ 0</span> and <span class="m">−<i>x</i></span> for <span class="m"><i>x</i> &lt; 0</span>; its transformations <span class="m"><i>y</i> = <i>a</i>|<i>x</i> − <i>h</i>| + <i>k</i></span> are V shapes with vertex <span class="m">(<i>h</i>, <i>k</i>)</span> and slopes <span class="m">±<i>a</i></span>.</p>
<p>The <b>greatest integer function</b> (floor) <span class="m">⌊<i>x</i>⌋</span> is the largest integer <span class="m">≤ <i>x</i></span>; the <b>ceiling</b> <span class="m">⌈<i>x</i>⌉</span> is the smallest integer <span class="m">≥ <i>x</i></span>. On each interval <span class="m">[<i>n</i>, <i>n</i> + 1)</span> the floor equals <span class="m"><i>n</i></span>, so its graph has a closed dot on the left end of each step and an open dot on the right.</p>
<div class="display">|<i>f</i>(<i>x</i>)| = <i>f</i>(<i>x</i>) where <i>f</i>(<i>x</i>) ≥ 0, &nbsp; −<i>f</i>(<i>x</i>) where <i>f</i>(<i>x</i>) &lt; 0<br><i>f</i>(|<i>x</i>|) = <i>f</i>(<i>x</i>) for <i>x</i> ≥ 0, &nbsp; <i>f</i>(−<i>x</i>) for <i>x</i> &lt; 0 &nbsp; (always an even function)</div>`,
  legend: [
    { c: "c1", sym: `<i>x</i>`, name: "Input", desc: "The point you move along the graph to evaluate the function." },
    { c: "c2", sym: `<i>f</i><sub>1</sub>, <i>f</i><sub>3</sub>`, name: "Odd-numbered pieces", desc: "The first and third formulas, drawn on their own intervals." },
    { c: "c3", sym: `<i>f</i><sub>2</sub>`, name: "Even-numbered pieces", desc: "The second formula; the colours alternate so neighbouring pieces stand apart." },
    { c: "c4", sym: `<i>x</i> = <i>b</i>`, name: "Break points", desc: "Where one formula hands over to the next; the dot there is closed on the piece that owns it." },
    { c: "c5", sym: `<i>f</i>(<i>x</i>)`, name: "Value", desc: "The output at the input you chose, read from the piece that contains it." }
  ],
  steps: {
    title: "How to graph a piecewise function",
    items: [
      `Mark the <span class="c4">break points</span> on the <i>x</i>-axis and note, from the inequalities, which piece owns each one.`,
      `Graph each formula only over its own interval. For a linear piece, two points are enough: one at each end of the interval.`,
      `At each end, evaluate the piece's formula even if the point is excluded. Draw a closed dot if the piece includes the point, an open dot if not.`,
      `Check that no vertical line meets two closed dots or two pieces: each input has exactly one output.`,
      `To evaluate <span class="m"><i>f</i>(<span class="c1"><i>a</i></span>)</span>, find the interval containing <span class="m"><span class="c1"><i>a</i></span></span> first, then use only that formula.`
    ]
  },
  example: {
    prompt: `Let <span class="m"><i>f</i>(<i>x</i>) = <span class="c2"><i>x</i> + 3</span></span> if <span class="m"><i>x</i> &lt; −1</span>, <span class="m"><span class="c3"><i>x</i><sup>2</sup></span></span> if <span class="m">−1 ≤ <i>x</i> ≤ 2</span>, and <span class="m"><span class="c2">6 − <i>x</i></span></span> if <span class="m"><i>x</i> &gt; 2</span>. Evaluate <span class="m"><i>f</i>(−3), <i>f</i>(−1), <i>f</i>(2), <i>f</i>(5)</span> and describe the graph at the break points.`,
    lines: [
      { math: `<span class="m"><i>f</i>(−3) = −3 + 3 = 0</span>`, note: "−3 < −1, so use the first piece." },
      { math: `<span class="m"><i>f</i>(−1) = (−1)<sup>2</sup> = 1</span>`, note: "−1 belongs to the middle piece because of the ≤ sign." },
      { math: `<span class="m"><i>f</i>(2) = 2<sup>2</sup> = 4</span>`, note: "2 also belongs to the middle piece." },
      { math: `<span class="m"><i>f</i>(5) = 6 − 5 = 1</span>`, note: "5 > 2, so use the last piece." },
      { math: `<span class="m">at <i>x</i> = −1: &nbsp; <i>x</i> + 3 → 2, &nbsp; <i>x</i><sup>2</sup> = 1</span>`, note: "The first piece ends at height 2 with an open dot; the parabola starts at height 1 with a closed dot. The graph jumps." },
      { math: `<span class="m">at <i>x</i> = 2: &nbsp; <i>x</i><sup>2</sup> = 4, &nbsp; 6 − <i>x</i> → 4</span>`, note: "Both pieces meet at (2, 4), so the graph joins without a break." }
    ],
    answer: `<span class="m"><i>f</i>(−3) = 0, <i>f</i>(−1) = 1, <i>f</i>(2) = 4, <i>f</i>(5) = 1</span>. The graph jumps at <span class="m"><i>x</i> = −1</span> (open dot at <span class="m">(−1, 2)</span>, closed dot at <span class="m">(−1, 1)</span>) and is unbroken at <span class="m">(2, 4)</span>.`
  },
  why: `<p>Real rules change at thresholds. Income tax, electricity tariffs, shipping weights, overtime pay and insurance deductibles all switch formulas at fixed values, and a piecewise function is the exact way to write them down. Reading the open and closed dots tells you which rate applies at the threshold itself, which is where disputes and programming bugs tend to happen.</p><p>Piecewise functions are also the first place a graph can break. The jump at a break point is the picture behind one-sided limits and continuity, which come next in this course.</p>`,
  careers: [
    { role: "Tax accountant", use: "Applies marginal tax brackets, a piecewise-linear function of taxable income with a different slope in each bracket." },
    { role: "Utility rate analyst", use: "Designs tiered electricity and water tariffs where the price per unit changes at usage thresholds." },
    { role: "Logistics analyst", use: "Prices shipments with step functions of weight and distance, rounding up to the next pound or zone." },
    { role: "Software engineer", use: "Uses floor and ceiling for integer division, pagination and rounding time to billing periods." },
    { role: "Control systems engineer", use: "Models actuator saturation as a piecewise function that is linear in the middle and flat beyond its limits." },
    { role: "Actuary", use: "Writes insurance payouts as piecewise functions of the loss, with a deductible and a policy limit." }
  ],
  life: [
    "A phone plan charges a flat fee up to a data limit and extra per gigabyte above it",
    "Overtime pay switches to time and a half after 40 hours a week",
    "Postage jumps to the next price at each ounce or part of an ounce",
    "A parking garage charges for every hour or part of an hour, up to a daily maximum",
    "Distance from home on a straight road is an absolute value of your position"
  ],
  fields: [
    { name: "Economics", use: "Tax schedules, tariffs and price discounts are piecewise functions of income or quantity." },
    { name: "Computer science", use: "Floor and ceiling functions appear in array indexing, hashing and the analysis of algorithms." },
    { name: "Electrical engineering", use: "Rectifiers produce |f(t)| from an alternating signal, and clipping circuits are piecewise linear." },
    { name: "Statistics", use: "The absolute deviation |x − m| measures spread and defines the median as a best estimate." }
  ],
  prereqWhy: {
    "pc-parent-functions": "The pieces are parent functions on restricted intervals, and f(|x|) is a way to make any function even.",
    "a1-piecewise": "Evaluating and graphing simple piecewise and step functions starts in Algebra I; this topic adds transformations and |f| and f(|x|).",
    "a1-abs-eq": "Splitting |expression| into two cases by its sign is the same piecewise reasoning used to solve absolute-value equations."
  },
  unlocksWhy: {
    "pc-limits-graph": "A jump at a break point is the first example of a limit that does not exist: the left and right pieces approach different heights."
  },
  beyond: [
    { field: "Calculus I", why: "Continuity and differentiability are tested at the break points of piecewise functions, and |x| is the standard example of a corner with no derivative." },
    { field: "Discrete Mathematics", why: "Floor and ceiling functions count objects, as in the number of multiples of k up to n, which is ⌊n/k⌋." },
    { field: "Economics/Operations research", why: "Piecewise-linear costs and tax schedules are modelled with breakpoints in linear programs." },
    { field: "Data science", why: "Regression trees and ReLU neural networks build piecewise-linear and piecewise-constant models." }
  ],
  mistakes: [
    { wrong: `Using every formula at a break point, or the formula of the wrong side.`, fix: `Read the inequalities. Only the piece whose interval includes the point (≤ or ≥) gives the value there; the other piece only decides where its open dot is drawn.` },
    { wrong: `Taking <span class="m">⌊−2.3⌋ = −2</span> because it "drops the decimals".`, fix: `The floor rounds down on the number line: <span class="m">⌊−2.3⌋ = −3</span>, the largest integer that is <span class="m">≤ −2.3</span>.` },
    { wrong: `Confusing <span class="m">|<i>f</i>(<i>x</i>)|</span> with <span class="m"><i>f</i>(|<i>x</i>|)</span>.`, fix: `<span class="m">|<i>f</i>(<i>x</i>)|</span> changes outputs: negative heights are reflected up. <span class="m"><i>f</i>(|<i>x</i>|)</span> changes inputs: the right half of the graph is mirrored onto the left, so the left half of the original is lost.` }
  ],
  practice: [
    { q: `Let <span class="m"><i>g</i>(<i>x</i>) = 2<i>x</i> − 1</span> if <span class="m"><i>x</i> ≤ 1</span> and <span class="m">5 − <i>x</i></span> if <span class="m"><i>x</i> &gt; 1</span>. Find <span class="m"><i>g</i>(1)</span> and <span class="m"><i>g</i>(3)</span>.`, a: `1 belongs to the first piece: <span class="m"><i>g</i>(1) = 2 − 1 = 1</span>. <span class="m"><i>g</i>(3) = 5 − 3 = 2</span>.` },
    { q: `Write <span class="m"><i>f</i>(<i>x</i>) = |<i>x</i> − 3|</span> as a piecewise function.`, a: `<span class="m"><i>f</i>(<i>x</i>) = <i>x</i> − 3</span> if <span class="m"><i>x</i> ≥ 3</span>, and <span class="m">3 − <i>x</i></span> if <span class="m"><i>x</i> &lt; 3</span>.` },
    { q: `A garage charges $4 for the first hour or part of an hour, $2 for each additional hour or part, with a daily maximum of $15. What do 3 h 20 min and 7.5 h cost?`, a: `3 h 20 min starts 4 hours: <span class="m">4 + 2 · 3 = 10</span>, so $10. 7.5 h starts 8 hours: <span class="m">4 + 2 · 7 = 18 &gt; 15</span>, so $15. In general <span class="m"><i>C</i>(<i>t</i>) = min(4 + 2(⌈<i>t</i>⌉ − 1), 15)</span>.` },
    { q: `For <span class="m"><i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> − 4<i>x</i></span>, find where <span class="m">|<i>f</i>(<i>x</i>)| ≠ <i>f</i>(<i>x</i>)</span> and the minimum points of <span class="m"><i>f</i>(|<i>x</i>|)</span>.`, a: `<span class="m"><i>f</i>(<i>x</i>) = <i>x</i>(<i>x</i> − 4) &lt; 0</span> on <span class="m">(0, 4)</span>; there <span class="m">|<i>f</i>(<i>x</i>)| = −<i>x</i><sup>2</sup> + 4<i>x</i></span>, peaking at <span class="m">(2, 4)</span>. <span class="m"><i>f</i>(|<i>x</i>|) = <i>x</i><sup>2</sup> − 4|<i>x</i>|</span> has minima at <span class="m">(−2, −4)</span> and <span class="m">(2, −4)</span>.` }
  ],
  origin: `<p>Carl Friedrich Gauss used square brackets [<i>x</i>] for the greatest integer not exceeding <i>x</i> in his third proof of quadratic reciprocity (1808), and the function was long written that way. The floor and ceiling symbols ⌊<i>x</i>⌋ and ⌈<i>x</i>⌉ were introduced by Kenneth Iverson in <i>A Programming Language</i> (1962). The bar notation |<i>x</i>| for absolute value first appears in an 1841 essay of Karl Weierstrass.</p>`
};
