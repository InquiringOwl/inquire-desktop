window.ARITH = window.ARITH || {};

ARITH["a2-radical-func"] = {
  title: "Radical Functions & Their Graphs",
  short: "Graph √x and ∛x, find their domains, solve by graphing",
  grade: "Grade 11 · college Intermediate Algebra",
  hours: 5,
  voice: "plain",
  eyebrow: "Functions · square-root and cube-root functions",
  hero: `<span class="m"><i>f</i>(<i>x</i>) = <span class="c3">2</span>√<span class="ov"><i>x</i> − <span class="c1">3</span></span> + <span class="c2">1</span>, &nbsp; domain <span class="c4">[3, ∞)</span></span>`,
  lede: `A <b>radical function</b> has the variable under a root, such as <span class="m"><span class="c5">√<span class="ov"><i>x</i></span></span></span> or <span class="m">∛<span class="ov"><i>x</i></span></span>. Square roots need a radicand that is not negative, so their graphs start at an endpoint and run one way; cube roots accept every real number. Both graphs are reflections of power functions in <span class="m"><i>y</i> = <i>x</i></span>.`,
  plain: `<p>The square-root function <span class="m"><span class="c5"><i>f</i>(<i>x</i>) = √<span class="ov"><i>x</i></span></span></span> takes 0, 1, 4, 9 to 0, 1, 2, 3. It cannot take a negative input, because no real number squares to a negative, so the graph starts at the origin and runs to the right, rising more and more slowly. Its <span class="c4">domain</span> and its range are both <span class="m">[0, ∞)</span>.</p>
<p>The cube root is different: <span class="m">∛<span class="ov">−8</span> = −2</span> because <span class="m">(−2)<sup>3</sup> = −8</span>. Every real number has exactly one real cube root, so <span class="m"><i>y</i> = ∛<span class="ov"><i>x</i></span></span> is defined everywhere and its graph is an S-shape through the origin. The same rule holds for any index: even roots need a radicand of at least 0, odd roots take anything.</p>
<p>These graphs are not new shapes. Undoing <span class="m"><i>x</i><sup>2</sup></span> on <span class="m"><i>x</i> ≥ 0</span> gives <span class="m">√<span class="ov"><i>x</i></span></span>, so its graph is the right half of the parabola reflected in <span class="m"><i>y</i> = <i>x</i></span>. And they move like any parent: in <span class="m"><span class="c3"><i>a</i></span>√<span class="ov"><i>x</i> − <span class="c1"><i>h</i></span></span> + <span class="c2"><i>k</i></span></span> the starting point moves to <span class="m">(<span class="c1"><i>h</i></span>, <span class="c2"><i>k</i></span>)</span> and <span class="c3"><i>a</i></span> stretches or flips the curve.</p>`,
  formal: `<p>For an integer <span class="m"><i>n</i> ≥ 2</span>, the <b>principal <i>n</i>th root</b> function is <span class="m"><i>f</i>(<i>x</i>) = <sup><i>n</i></sup>√<span class="ov"><i>x</i></span> = <i>x</i><sup>1/<i>n</i></sup></span>. If <span class="m"><i>n</i></span> is even, its domain and range are <span class="m">[0, ∞)</span> and it is the inverse of <span class="m"><i>x</i><sup><i>n</i></sup></span> restricted to <span class="m"><i>x</i> ≥ 0</span>. If <span class="m"><i>n</i></span> is odd, its domain and range are <span class="m">(−∞, ∞)</span> and it is the inverse of <span class="m"><i>x</i><sup><i>n</i></sup></span>. The domain of a radical function with an even index is the solution set of <span class="m">radicand ≥ 0</span>. For the transformed square root</p>
<div class="display"><i>g</i>(<i>x</i>) = <span class="c3"><i>a</i></span>√<span class="ov"><i>x</i> − <span class="c1"><i>h</i></span></span> + <span class="c2"><i>k</i></span>: &nbsp; domain <span class="c4">[<i>h</i>, ∞)</span>, &nbsp; endpoint (<span class="c1"><i>h</i></span>, <span class="c2"><i>k</i></span>)<br><span class="dim">range</span> [<i>k</i>, ∞) <span class="dim">if</span> <i>a</i> > 0, &nbsp; (−∞, <i>k</i>] <span class="dim">if</span> <i>a</i> < 0</div>
<p>while <span class="m"><span class="c3"><i>a</i></span> ∛<span class="ov"><i>x</i> − <span class="c1"><i>h</i></span></span> + <span class="c2"><i>k</i></span></span> has domain and range <span class="m">(−∞, ∞)</span> and centre <span class="m">(<i>h</i>, <i>k</i>)</span>. A radical equation <span class="m">√<span class="ov"><i>p</i>(<i>x</i>)</span> = <i>q</i>(<i>x</i>)</span> has as solutions the x-coordinates where the two graphs meet. Squaring both sides gives <span class="m"><i>p</i>(<i>x</i>) = <i>q</i>(<i>x</i>)<sup>2</sup></span>, whose graph also contains <span class="m">−√<span class="ov"><i>p</i>(<i>x</i>)</span></span>, so it can add <b>extraneous solutions</b> where <span class="m"><i>q</i>(<i>x</i>) < 0</span>.</p>`,
  legend: [
    { c: "c5", sym: `√<span class="ov"><i>x</i></span>`, name: "Parent function", desc: "√x or ∛x before any change; √x starts at the origin, ∛x passes through it." },
    { c: "c1", sym: `<i>h</i>`, name: "Horizontal shift", desc: "x − h moves the graph right by h; for √ the endpoint moves to x = h." },
    { c: "c2", sym: `<i>k</i>`, name: "Vertical shift", desc: "Adding k moves the graph up by k; for √ the range starts at k." },
    { c: "c3", sym: `<i>a</i>`, name: "Vertical stretch", desc: "Multiplies every output; a < 0 reflects the graph in the x-axis." },
    { c: "c4", sym: `[<i>h</i>, ∞)`, name: "Domain", desc: "Inputs that keep an even-index radicand at 0 or more." }
  ],
  steps: {
    title: "How to graph a radical function",
    items: [
      `Find the <span class="c4">domain</span>: for an even index solve <span class="m">radicand ≥ 0</span>; for an odd index it is <span class="m">(−∞, ∞)</span>.`,
      `Read <span class="m"><span class="c3"><i>a</i></span></span>, <span class="m"><span class="c1"><i>h</i></span></span> and <span class="m"><span class="c2"><i>k</i></span></span> from <span class="m"><i>a</i>√<span class="ov"><i>x</i> − <i>h</i></span> + <i>k</i></span>, after factoring any coefficient of <span class="m"><i>x</i></span> out of the radicand.`,
      `Take easy points of the parent: <span class="m">(0, 0), (1, 1), (4, 2), (9, 3)</span> for <span class="m">√<span class="ov"><i>x</i></span></span>, or <span class="m">(−8, −2), (−1, −1), (0, 0), (1, 1), (8, 2)</span> for <span class="m">∛<span class="ov"><i>x</i></span></span>.`,
      `Map each point <span class="m">(<i>x</i>, <i>y</i>) → (<i>x</i> + <i>h</i>, <i>a</i><i>y</i> + <i>k</i>)</span> and join them, starting at the endpoint for a square root.`,
      `State the range from the endpoint and the sign of <span class="m"><i>a</i></span>, and find any intercepts.`
    ]
  },
  example: {
    prompt: `Graph <span class="m"><i>f</i>(<i>x</i>) = −√<span class="ov"><i>x</i> + 4</span> + 2</span>. Give the domain, range and intercepts.`,
    lines: [
      { math: `<span class="m"><span class="c3"><i>a</i> = −1</span>, &nbsp;<span class="c1"><i>h</i> = −4</span>, &nbsp;<span class="c2"><i>k</i> = 2</span></span>`, note: "x + 4 = x − (−4). Reflect in the x-axis, shift left 4 and up 2." },
      { math: `<span class="m"><i>x</i> + 4 ≥ 0 &nbsp;⇒&nbsp; domain <span class="c4">[−4, ∞)</span></span>`, note: "The graph starts at the endpoint (−4, 2)." },
      { math: `<span class="m">(0, 0), (1, 1), (4, 2), (9, 3) &nbsp;→&nbsp; (−4, 2), (−3, 1), (0, 0), (5, −1)</span>`, note: "Map each point of √x by (x, y) → (x − 4, −y + 2)." },
      { math: `<span class="m">range (−∞, 2]</span>`, note: "a < 0, so the curve falls from its endpoint and 2 is the largest output." },
      { math: `<span class="m"><i>f</i>(0) = −√<span class="ov">4</span> + 2 = 0</span>`, note: "The y-intercept is the origin." },
      { math: `<span class="m">√<span class="ov"><i>x</i> + 4</span> = 2 &nbsp;⇒&nbsp; <i>x</i> + 4 = 4 &nbsp;⇒&nbsp; <i>x</i> = 0</span>`, note: "Set f(x) = 0. The only x-intercept is also the origin." }
    ],
    answer: `Domain <span class="m">[−4, ∞)</span>, range <span class="m">(−∞, 2]</span>; the graph starts at <span class="m">(−4, 2)</span>, falls through <span class="m">(−3, 1)</span>, the origin (both intercepts) and <span class="m">(5, −1)</span>.`
  },
  why: `<p>Square roots appear whenever a formula has a square in it and you solve for the other quantity. Distance to the horizon, the side of a square of given area, the speed of a falling object after a given drop, the period of a pendulum <span class="m"><i>T</i> = 2π√<span class="ov"><i>L</i>/32</span></span> (L in feet), and the speed a car was going from the length of its skid marks, <span class="m"><i>s</i> = √<span class="ov">24<i>d</i></span></span>, are all radical functions.</p>
<p>Their graphs show a fact the formulas hide: the output grows more and more slowly. A pendulum four times as long swings only twice as slowly, and doubling the speed of a car quadruples its skid. The domain matters too, because a length or an area cannot be negative.</p>`,
  careers: [
    { role: "Accident reconstruction analyst", use: "Estimates a vehicle's speed from skid-mark length with a square-root formula." },
    { role: "Civil engineer", use: "Uses the square-root relation between flow speed and head height when sizing drains and spillways." },
    { role: "Clockmaker", use: "Sets a pendulum's length so that its period, proportional to √L, keeps accurate time." },
    { role: "Naval architect", use: "Estimates a hull's maximum displacement speed, proportional to the square root of its waterline length." },
    { role: "Statistician", use: "Reports standard deviations and standard errors, which shrink like 1/√n as samples grow." },
    { role: "Lighting designer", use: "Finds the distance for a target brightness with the inverse-square law, which solves to a square root." }
  ],
  life: [
    "Working out the side length of a square garden from its area",
    "Estimating how far you can see from the top of a hill",
    "Choosing a playground swing length for a slower swing",
    "Reading a report that estimates a car's speed from its skid marks",
    "Timing how long a dropped stone takes to hit the water"
  ],
  fields: [
    { name: "Physics", use: "Pendulum periods, falling-body times and wave speeds involve square roots." },
    { name: "Statistics", use: "Standard deviation is the square root of the variance." },
    { name: "Engineering", use: "Flow through an opening grows with the square root of the pressure head." },
    { name: "Geometry", use: "Distances from the Pythagorean theorem and side lengths from areas are square roots." }
  ],
  prereqWhy: {
    "a2-inverses": "√x is the inverse of x² restricted to x ≥ 0 and ∛x is the inverse of x³, so their graphs are reflections in y = x.",
    "a2-transformations": "a√(x − h) + k is the parent √x stretched and shifted, so its graph and endpoint follow the transformation rules.",
    "a1-rational-exp": "ⁿ√x is the same as x^(1/n), and the index decides which inputs give real outputs."
  },
  unlocksWhy: {
    "pc-parent-functions": "The graphs, domains and ranges of √<i>x</i> and ∛<i>x</i> go into the library of parent functions, and the cube root also supplies an odd function."
  },
  beyond: [
    { field: "Precalculus", why: "Radical functions join rational and power functions in the study of domains, inverses and composition." },
    { field: "Calculus I", why: "The derivative of √x is 1/(2√x), which explains why the graph flattens and why it has a vertical tangent at its endpoint." },
    { field: "Physics", why: "Escape speed, pendulum periods and wave speeds are square-root functions of the physical quantities." },
    { field: "Statistics", why: "Standard errors scale like 1/√n, the reason a sample must quadruple to halve the error." }
  ],
  mistakes: [
    { wrong: `Giving the domain of <span class="m">√<span class="ov"><i>x</i> + 4</span></span> as <span class="m"><i>x</i> ≥ 4</span>.`, fix: `Solve the radicand: <span class="m"><i>x</i> + 4 ≥ 0</span> gives <span class="m"><i>x</i> ≥ −4</span>, so the domain is <span class="m">[−4, ∞)</span>.` },
    { wrong: `Restricting <span class="m">∛<span class="ov"><i>x</i></span></span> to <span class="m"><i>x</i> ≥ 0</span>.`, fix: `Odd roots of negatives are real: <span class="m">∛<span class="ov">−8</span> = −2</span>. The domain of <span class="m">∛<span class="ov"><i>x</i></span></span> is <span class="m">(−∞, ∞)</span>.` },
    { wrong: `Keeping both solutions of <span class="m"><i>x</i> + 3 = (<i>x</i> − 3)<sup>2</sup></span> as answers to <span class="m">√<span class="ov"><i>x</i> + 3</span> = <i>x</i> − 3</span>.`, fix: `At <span class="m"><i>x</i> = 1</span> the left side is 2 and the right side is −2. The graphs meet only at <span class="m"><i>x</i> = 6</span>; <span class="m"><i>x</i> = 1</span> is extraneous.` },
    { wrong: `Simplifying <span class="m">√<span class="ov"><i>x</i><sup>2</sup></span></span> to <span class="m"><i>x</i></span> for every <span class="m"><i>x</i></span>.`, fix: `The principal root is never negative: <span class="m">√<span class="ov">(−5)<sup>2</sup></span> = 5</span>. In general <span class="m">√<span class="ov"><i>x</i><sup>2</sup></span> = |<i>x</i>|</span>.` }
  ],
  practice: [
    { q: `Give the domain and range of <span class="m"><i>f</i>(<i>x</i>) = √<span class="ov"><i>x</i> − 5</span></span> and of <span class="m"><i>g</i>(<i>x</i>) = ∛<span class="ov"><i>x</i> − 5</span></span>, and find <span class="m"><i>g</i>(−3)</span>.`, a: `<span class="m"><i>f</i></span>: domain <span class="m">[5, ∞)</span>, range <span class="m">[0, ∞)</span>. <span class="m"><i>g</i></span>: domain and range <span class="m">(−∞, ∞)</span>. <span class="m"><i>g</i>(−3) = ∛<span class="ov">−8</span> = −2</span>.` },
    { q: `Find the domain and range of <span class="m"><i>f</i>(<i>x</i>) = √<span class="ov">6 − 2<i>x</i></span></span>, and evaluate <span class="m"><i>f</i>(1)</span> and <span class="m"><i>f</i>(−5)</span>.`, a: `<span class="m">6 − 2<i>x</i> ≥ 0</span> gives <span class="m"><i>x</i> ≤ 3</span>: domain <span class="m">(−∞, 3]</span>, range <span class="m">[0, ∞)</span>. <span class="m"><i>f</i>(1) = √<span class="ov">4</span> = 2</span>, <span class="m"><i>f</i>(−5) = √<span class="ov">16</span> = 4</span>. The graph is √x reflected in the y-axis and moved so its endpoint is <span class="m">(3, 0)</span>.` },
    { q: `Skid marks of length <span class="m"><i>d</i></span> feet mean a speed of about <span class="m"><i>s</i> = √<span class="ov">24<i>d</i></span></span> mph. Find <span class="m"><i>s</i></span> for 150 ft of skid, and the skid length for 72 mph.`, a: `<span class="m"><i>s</i> = √<span class="ov">3600</span> = 60</span> mph. For 72 mph: <span class="m">24<i>d</i> = 72<sup>2</sup> = 5184</span>, so <span class="m"><i>d</i> = 216</span> ft.` },
    { q: `Solve <span class="m">√<span class="ov"><i>x</i> + 3</span> = <i>x</i> − 3</span> and explain the result with the graphs.`, a: `Square: <span class="m"><i>x</i> + 3 = <i>x</i><sup>2</sup> − 6<i>x</i> + 9</span>, so <span class="m"><i>x</i><sup>2</sup> − 7<i>x</i> + 6 = 0</span> and <span class="m"><i>x</i> = 1</span> or <span class="m"><i>x</i> = 6</span>. Check: <span class="m">√<span class="ov">9</span> = 3 = 6 − 3</span> ✓, but <span class="m">√<span class="ov">4</span> = 2 ≠ −2</span>. Solution set <span class="m">{6}</span>; the line meets <span class="m">−√<span class="ov"><i>x</i> + 3</span></span> at <span class="m"><i>x</i> = 1</span>, not the square-root curve.` }
  ],
  origin: `<p>The radical sign √ first appeared in print in Christoph Rudolff's algebra book Coss in 1525, probably from a written letter r for radix, the Latin for root. René Descartes added the bar over the radicand in La Géométrie in 1637. Treating √x and ∛x as functions with their own graphs came later, with the function concept of the eighteenth century.</p>`
};
