window.ARITH = window.ARITH || {};
ARITH["pc-limits-graph"] = {
  title: "Limits from Graphs & Tables",
  short: "What f(x) approaches as x gets close to a",
  grade: "Grade 12 · college Precalculus",
  hours: 5,
  voice: "plain",
  eyebrow: "Introduction to calculus · limits",
  hero: `<span class="m"><span class="c5">lim<sub><i>x</i>→<span class="c1"><i>a</i></span></sub> <i>f</i>(<i>x</i>) = <i>L</i></span> &nbsp;⇔&nbsp; <span class="c2">lim<sub><i>x</i>→<i>a</i><sup>−</sup></sub> <i>f</i>(<i>x</i>)</span> = <span class="c3">lim<sub><i>x</i>→<i>a</i><sup>+</sup></sub> <i>f</i>(<i>x</i>)</span> = <i>L</i></span>`,
  lede: `A <b>limit</b> describes the value a function's outputs approach as the input gets close to a number <span class="m"><span class="c1"><i>a</i></span></span>, without ever using the input <span class="m"><span class="c1"><i>a</i></span></span> itself. You can read limits from a graph or estimate them from a table, one side at a time.`,
  plain: `<p>The function <span class="m"><i>f</i>(<i>x</i>) = (<i>x</i><sup>2</sup> − 4)/(<i>x</i> − 2)</span> has no value at <span class="m"><i>x</i> = 2</span>: the formula gives 0/0. But at 1.99 it gives 3.99, and at 2.01 it gives 4.01. The closer <span class="m"><i>x</i></span> gets to 2, from either side, the closer the output gets to 4. We say the limit of <span class="m"><i>f</i>(<i>x</i>)</span> as <span class="m"><i>x</i></span> approaches 2 is 4. On the graph there is a hole at <span class="m">(2, 4)</span>.</p>
<p>A limit only cares about inputs near <span class="m"><span class="c1"><i>a</i></span></span>, never at it. The value <span class="m"><i>f</i>(<span class="c1"><i>a</i></span>)</span> may equal the limit, may be something else, or may not exist at all.</p>
<p>Sometimes the two sides disagree. A step graph that jumps at <span class="m"><span class="c1"><i>a</i></span></span> has one height approached from the left and another from the right, so there is no single limit. Outputs can also grow without bound near a vertical asymptote, or swing back and forth forever, as <span class="m">sin(1/<i>x</i>)</span> does near 0. In those cases the limit does not exist.</p>`,
  formal: `<p>We write <span class="m"><span class="c5">lim<sub><i>x</i>→<i>a</i></sub> <i>f</i>(<i>x</i>) = <i>L</i></span></span> if <span class="m"><i>f</i>(<i>x</i>)</span> can be made as close to <span class="m"><i>L</i></span> as we like by taking <span class="m"><i>x</i></span> close enough to <span class="m"><span class="c1"><i>a</i></span></span>, with <span class="m"><i>x</i> ≠ <i>a</i></span>. The <b>left-hand limit</b> <span class="m"><span class="c2">lim<sub><i>x</i>→<i>a</i><sup>−</sup></sub> <i>f</i>(<i>x</i>)</span></span> uses only <span class="m"><i>x</i> &lt; <i>a</i></span>; the <b>right-hand limit</b> <span class="m"><span class="c3">lim<sub><i>x</i>→<i>a</i><sup>+</sup></sub> <i>f</i>(<i>x</i>)</span></span> uses only <span class="m"><i>x</i> &gt; <i>a</i></span>.</p>
<div class="display">lim<sub><i>x</i>→<i>a</i></sub> <i>f</i>(<i>x</i>) = <i>L</i> &nbsp; if and only if &nbsp; lim<sub><i>x</i>→<i>a</i><sup>−</sup></sub> <i>f</i>(<i>x</i>) = lim<sub><i>x</i>→<i>a</i><sup>+</sup></sub> <i>f</i>(<i>x</i>) = <i>L</i></div>
<p>A limit fails to exist when the one-sided limits differ (a jump: <span class="m">⌊<i>x</i>⌋</span> at <span class="m"><i>x</i> = 2</span> has left limit 1 and right limit 2), when the outputs are unbounded (<span class="m">1/<i>x</i><sup>2</sup></span> at 0; we write <span class="m">lim = ∞</span> to say how it fails), or when they oscillate (<span class="m">sin(1/<i>x</i>)</span> equals 1 at <span class="m"><i>x</i> = 2/((4<i>k</i> + 1)π)</span> and −1 at <span class="m"><i>x</i> = 2/((4<i>k</i> + 3)π)</span> for every whole number <span class="m"><i>k</i></span>, inputs that crowd in on 0). A table of values suggests a limit but cannot prove one.</p>`,
  legend: [
    { c: "c1", sym: `<i>a</i>`, name: "Approach point", desc: "The input x approaches; drag it along the x-axis or type it." },
    { c: "c2", sym: `<i>x</i> → <i>a</i><sup>−</sup>`, name: "From the left", desc: "Inputs below a and the left-hand limit they approach." },
    { c: "c3", sym: `<i>x</i> → <i>a</i><sup>+</sup>`, name: "From the right", desc: "Inputs above a and the right-hand limit they approach." },
    { c: "c4", sym: `○, &nbsp;- - -`, name: "Holes and asymptotes", desc: "Missing points, jumps and vertical asymptotes where something breaks." },
    { c: "c5", sym: `<i>L</i>`, name: "The limit", desc: "The value both sides approach, when there is one." },
  ],
  steps: {
    title: "How to find a limit from a graph or a table",
    items: [
      `Cover the point at <span class="m"><i>x</i> = <span class="c1"><i>a</i></span></span> with your finger: its value does not matter for the limit.`,
      `Trace the graph toward <span class="m"><span class="c1"><i>a</i></span></span> from the left and read the height it approaches: the left-hand limit.`,
      `Do the same from the right for the right-hand limit.`,
      `If the two heights are the same number <span class="m"><i>L</i></span>, the limit is <span class="m"><i>L</i></span>. If they differ, or the graph runs off to <span class="m">±∞</span> or keeps oscillating, the limit does not exist.`,
      `With a table, use inputs such as <span class="m"><i>a</i> ± 0.1, <i>a</i> ± 0.01, <i>a</i> ± 0.001</span> on both sides and look for the value the outputs settle toward.`,
      `Separately, state <span class="m"><i>f</i>(<span class="c1"><i>a</i></span>)</span> from the filled dot or the formula, and compare it with the limit.`,
    ],
  },
  example: {
    prompt: `Estimate <span class="m">lim<sub><i>x</i>→2</sub> <span class="fr"><span><i>x</i><sup>2</sup> − 4</span><span><i>x</i> − 2</span></span></span> from a table, and say what happens at <span class="m"><i>x</i> = 2</span>.`,
    lines: [
      { math: `<span class="m"><span class="c2"><i>f</i>(1.9) = 3.9, &nbsp; <i>f</i>(1.99) = 3.99, &nbsp; <i>f</i>(1.999) = 3.999</span></span>`, note: "Inputs below 2: the outputs climb toward 4." },
      { math: `<span class="m"><span class="c3"><i>f</i>(2.1) = 4.1, &nbsp; <i>f</i>(2.01) = 4.01, &nbsp; <i>f</i>(2.001) = 4.001</span></span>`, note: "Inputs above 2: the outputs fall toward 4." },
      { math: `<span class="m"><span class="c2">lim<sub><i>x</i>→2<sup>−</sup></sub> <i>f</i>(<i>x</i>) = 4</span>, &nbsp; <span class="c3">lim<sub><i>x</i>→2<sup>+</sup></sub> <i>f</i>(<i>x</i>) = 4</span></span>`, note: "The two one-sided limits agree." },
      { math: `<span class="m"><i>f</i>(2) = 0/0 &nbsp; (undefined)</span>`, note: "The function has no value at 2, which the limit never uses." },
      { math: `<span class="m"><i>f</i>(<i>x</i>) = <i>x</i> + 2 &nbsp; for <i>x</i> ≠ 2</span>`, note: "Factoring confirms it: the graph is a line with a hole." },
    ],
    answer: `<span class="m"><span class="c5">lim<sub><i>x</i>→2</sub> <i>f</i>(<i>x</i>) = 4</span></span>, while <span class="m"><i>f</i>(2)</span> is undefined: the graph has a <span class="c4">hole</span> at <span class="m">(2, 4)</span>.`,
  },
  why: `<p>Limits are the foundation of calculus. The slope of a curve at a point, the speed of a car at an instant, and the area under a curve are all defined as limits of quantities you can compute: slopes of secants, average speeds, sums of rectangles.</p>
<p>Limits also describe what a model does where a formula breaks down: at a hole left by cancelling a factor, at the edge of a step in a tax or postage rate, or near an asymptote where a quantity blows up. Reading them from graphs and tables comes first; the limit laws then turn the reading into algebra.</p>`,
  careers: [
    { role: "Physicist", use: "Defines instantaneous velocity and field strength at a point as limits, and checks models where a formula gives 0/0." },
    { role: "Data scientist", use: "Reads how a model's error or a learning curve levels off as the step size shrinks or the data set grows." },
    { role: "Electrical engineer", use: "Analyzes a circuit's voltage just before and just after a switch closes, which are one-sided limits." },
    { role: "Actuary", use: "Studies how a premium or probability behaves as an age or time input approaches a cutoff in a tiered table." },
    { role: "Numerical analyst", use: "Estimates limits from tables of computed values and judges when rounding error makes the table misleading." },
    { role: "Economist", use: "Describes the cost of one more unit as the limit of average cost changes as the change in quantity shrinks." },
  ],
  life: [
    "A speedometer shows speed at an instant, a limit of average speeds over shorter and shorter times",
    "Parking fees jump at each full hour, so the fee just before and just after differ",
    "Zooming in on a map until the road looks straight",
    "A shipping price chart has different values approaching a weight limit from below and above",
    "Halving the distance to a wall again and again gets you as close as you like",
  ],
  fields: [
    { name: "Calculus", use: "Derivatives, integrals and continuity are all defined with limits." },
    { name: "Physics", use: "Instantaneous velocity, acceleration and point charges are limits of averages over smaller and smaller regions." },
    { name: "Engineering", use: "Switching circuits and impact problems are analyzed with values just before and just after an instant." },
    { name: "Computer science", use: "Numerical methods approximate limits with tables of values and must control rounding error as steps shrink." },
  ],
  prereqWhy: {
    "pc-function-behavior": "Limits extend the idea of a secant through two close points; reading where a graph is heading is the skill a limit formalizes.",
    "pc-piecewise-abs": "Piecewise and step functions are the main examples of one-sided limits that disagree, giving a jump.",
    "a2-rational-asym": "Holes and vertical asymptotes of rational functions are where limits exist without a value, or fail by growing without bound.",
  },
  unlocksWhy: {
    "pc-limit-laws": "Once a limit can be read from a graph, the limit laws compute it exactly with algebra, including the 0/0 cases like the hole here.",
    "pc-limits-infinity": "Unbounded outputs near a vertical asymptote become infinite limits, and letting x itself grow gives limits at infinity.",
  },
  beyond: [
    { field: "Calculus I", why: "The ε–δ definition makes the informal limit precise, and every derivative is a limit of difference quotients." },
    { field: "Calculus II", why: "Integrals and infinite series are limits of sums, and their convergence is decided with limit tests." },
    { field: "Physics (Mechanics)", why: "Velocity and acceleration at an instant are limits of average rates over shrinking time intervals." },
  ],
  mistakes: [
    { wrong: `"<span class="m"><i>f</i>(2)</span> is undefined, so the limit at 2 does not exist."`, fix: `The limit ignores <span class="m"><i>x</i> = 2</span> itself. <span class="m">(<i>x</i><sup>2</sup> − 4)/(<i>x</i> − 2)</span> is undefined at 2 and its limit there is 4.` },
    { wrong: `Reading the limit as the filled dot: a graph with a hole at <span class="m">(2, 3)</span> and a dot at <span class="m">(2, 1)</span> "has limit 1".`, fix: `The limit is the height the curve approaches, 3. The dot is <span class="m"><i>f</i>(2) = 1</span>, a separate fact.` },
    { wrong: `Checking only one side: "<span class="m">⌊<i>x</i>⌋</span> approaches 2 as <span class="m"><i>x</i></span> approaches 2."`, fix: `From the right it approaches 2, from the left 1. The one-sided limits differ, so <span class="m">lim<sub><i>x</i>→2</sub> ⌊<i>x</i>⌋</span> does not exist.` },
  ],
  practice: [
    { q: `Use a table to estimate <span class="m">lim<sub><i>x</i>→3</sub> (<i>x</i><sup>2</sup> − 9)/(<i>x</i> − 3)</span>.`, a: `<span class="m"><i>f</i>(2.99) = 5.99</span>, <span class="m"><i>f</i>(2.999) = 5.999</span>, <span class="m"><i>f</i>(3.01) = 6.01</span>, <span class="m"><i>f</i>(3.001) = 6.001</span>: the limit is <span class="m">6</span>, though <span class="m"><i>f</i>(3)</span> is undefined.` },
    { q: `For <span class="m"><i>f</i>(<i>x</i>) = ⌊<i>x</i>⌋</span>, find the one-sided limits and the limit at <span class="m"><i>x</i> = 2</span> and at <span class="m"><i>x</i> = 2.5</span>.`, a: `At 2: left limit 1, right limit 2, so the limit does not exist (a jump). At 2.5: both sides give 2, so the limit is 2.` },
    { q: `<span class="m"><i>f</i>(<i>x</i>) = <i>x</i> + 1</span> for <span class="m"><i>x</i> &lt; 2</span>, <span class="m"><i>f</i>(2) = 1</span>, and <span class="m"><i>f</i>(<i>x</i>) = −<i>x</i> + 5</span> for <span class="m"><i>x</i> &gt; 2</span>. Find both one-sided limits, the limit and <span class="m"><i>f</i>(2)</span> at <span class="m"><i>x</i> = 2</span>.`, a: `Left: <span class="m">2 + 1 = 3</span>. Right: <span class="m">−2 + 5 = 3</span>. They agree, so the limit is 3, but <span class="m"><i>f</i>(2) = 1</span>: the graph has a hole at <span class="m">(2, 3)</span> and a separate dot at <span class="m">(2, 1)</span>.` },
    { q: `Explain why <span class="m">lim<sub><i>x</i>→0</sub> sin(1/<i>x</i>)</span> does not exist, and compare <span class="m">1/<i>x</i></span> and <span class="m">1/<i>x</i><sup>2</sup></span> at 0.`, a: `<span class="m">sin(1/<i>x</i>) = 1</span> at <span class="m"><i>x</i> = 2/((4<i>k</i> + 1)π)</span> and <span class="m">−1</span> at <span class="m"><i>x</i> = 2/((4<i>k</i> + 3)π)</span>, inputs as close to 0 as you like, so the outputs never settle. <span class="m">1/<i>x</i></span> goes to <span class="m">−∞</span> from the left and <span class="m">∞</span> from the right; <span class="m">1/<i>x</i><sup>2</sup></span> goes to <span class="m">∞</span> from both sides. Neither has a finite limit.` },
  ],
  origin: `<p>Newton spoke of "ultimate ratios" of vanishing quantities in the <i>Principia</i> (1687), and Bishop Berkeley mocked them in 1734 as "ghosts of departed quantities". Jean d'Alembert proposed in the 1750s that the limit should be the foundation of calculus, and Augustin-Louis Cauchy built analysis on limits in his <i>Cours d'analyse</i> (1821). Karl Weierstrass gave the precise ε–δ form used today in the 1860s.</p>`,
};
