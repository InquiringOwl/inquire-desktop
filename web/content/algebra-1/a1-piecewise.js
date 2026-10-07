window.ARITH = window.ARITH || {};

ARITH["a1-piecewise"] = {
  title: "Piecewise & Absolute Value Functions",
  short: "Different rules on different parts of the domain",
  grade: "Grade 9 · college Elementary Algebra",
  hours: 5,
  voice: "plain",
  eyebrow: "Functions · defined in pieces",
  hero: `<span class="m">|<i>x</i>| = <span class="c2"><i>x</i></span> &nbsp;if <i>x</i> ≥ 0, &nbsp;&nbsp; <span class="c3">−<i>x</i></span> &nbsp;if <i>x</i> &lt; 0</span>`,
  lede: `A piecewise function uses a different formula on each part of its domain. The absolute value function is the simplest example: it leaves nonnegative inputs alone and flips negative ones.`,
  plain: `<p>Many real rules change partway through. Electricity might cost 12 cents per kilowatt-hour for the first 500 and 15 cents after that. Shipping might be a flat price up to 1 kg and more above it. A single formula cannot describe these, so we use a <b>piecewise function</b>: a list of formulas, each with the inputs it applies to.</p>
<p>To evaluate one, first find which piece the input belongs to, then use only that piece's formula. On a graph, each piece is drawn only over its own interval. A closed dot marks an endpoint that is included; an open dot marks one that is not. Each input must belong to exactly one piece, or the rule would not be a function.</p>
<p>The <b>absolute value function</b> <span class="m"><i>f</i>(<i>x</i>) = |<i>x</i>|</span> is piecewise: <span class="m"><i>x</i></span> for <span class="m"><i>x</i> ≥ 0</span> and <span class="m">−<i>x</i></span> for <span class="m"><i>x</i> &lt; 0</span>. Its graph is a V with its corner, the <b>vertex</b>, at the origin. Shifting it gives <span class="m"><i>y</i> = |<i>x</i> − <i>h</i>| + <i>k</i></span>, a V with its vertex at <span class="m">(<i>h</i>, <i>k</i>)</span>.</p>`,
  formal: `<p>A <b>piecewise-defined function</b> is given by formulas <span class="m"><i>f</i><sub>1</sub>, <i>f</i><sub>2</sub>, …</span> on pairwise disjoint sets <span class="m"><i>D</i><sub>1</sub>, <i>D</i><sub>2</sub>, …</span> whose union is the domain:</p>
<div class="display"><i>f</i>(<i>x</i>) = <span class="c2"><i>f</i><sub>1</sub>(<i>x</i>)</span> &nbsp;if <i>x</i> ∈ <i>D</i><sub>1</sub><br><span style="visibility:hidden"><i>f</i>(<i>x</i>) = </span><span class="c3"><i>f</i><sub>2</sub>(<i>x</i>)</span> &nbsp;if <i>x</i> ∈ <i>D</i><sub>2</sub><br><span style="visibility:hidden"><i>f</i>(<i>x</i>) = </span><span class="c4"><i>f</i><sub>3</sub>(<i>x</i>)</span> &nbsp;if <i>x</i> ∈ <i>D</i><sub>3</sub></div>
<p>The <b>absolute value function</b> <span class="m"><i>f</i>(<i>x</i>) = |<i>x</i>|</span> has domain <span class="m">ℝ</span>, range <span class="m">[0, ∞)</span> and vertex <span class="m">(0, 0)</span>. The function <span class="m"><i>g</i>(<i>x</i>) = <i>a</i>|<i>x</i> − <i>h</i>| + <i>k</i></span> has vertex <span class="m">(<i>h</i>, <i>k</i>)</span>, axis of symmetry <span class="m"><i>x</i> = <i>h</i></span>, opens up if <span class="m"><i>a</i> &gt; 0</span> and down if <span class="m"><i>a</i> &lt; 0</span>. A <b>step function</b> is piecewise constant, such as the ceiling function <span class="m">⌈<i>x</i>⌉</span>, the least integer greater than or equal to <span class="m"><i>x</i></span>.</p>`,
  legend: [
    { c: "c2", sym: `<i>f</i><sub>1</sub>`, name: "First piece", desc: "The formula used on the first part of the domain, drawn only over that interval." },
    { c: "c3", sym: `<i>f</i><sub>2</sub>`, name: "Second piece", desc: "The formula used on the next part of the domain." },
    { c: "c4", sym: `<i>f</i><sub>3</sub>`, name: "Third piece", desc: "A further formula, if the function has more than two pieces." },
    { c: "c1", sym: `<i>f</i>(<i>a</i>)`, name: "Evaluation", desc: "The output at x = a, computed with the one piece whose interval contains a." }
  ],
  steps: { title: "How to evaluate and graph a piecewise function", items: [
    `Read each piece's condition and note which endpoints are included (≤, ≥) and which are not (&lt;, &gt;).`,
    `To evaluate <span class="m"><i>f</i>(<i>a</i>)</span>, find the one condition that <span class="m"><i>a</i></span> satisfies and substitute into that piece only.`,
    `To graph, draw each piece as if it were a whole function, then keep only the part over its own interval.`,
    `Mark endpoints: closed dot if included, open dot if excluded. Check that no vertical line meets the graph twice.`,
    `For <span class="m"><i>y</i> = <i>a</i>|<i>x</i> − <i>h</i>| + <i>k</i></span>, plot the vertex <span class="m">(<i>h</i>, <i>k</i>)</span>, then draw the two sides with slopes <span class="m"><i>a</i></span> and <span class="m">−<i>a</i></span>.`,
    `Read the domain and range from the finished graph.`
  ] },
  example: {
    prompt: `A utility charges $0.12 per kWh for the first 500 kWh used in a month and $0.15 per kWh for every kWh above 500. Write the monthly cost <span class="m"><i>C</i>(<i>k</i>)</span> as a piecewise function and find the cost of using 740 kWh.`,
    lines: [
      { math: `<span class="m"><span class="c2"><i>C</i>(<i>k</i>) = 0.12<i>k</i></span> &nbsp; for 0 ≤ <i>k</i> ≤ 500</span>`, note: "Up to 500 kWh, every unit is charged at the lower rate." },
      { math: `<span class="m">0.12(500) = 60</span>`, note: "The first 500 kWh cost $60 in total." },
      { math: `<span class="m"><span class="c3"><i>C</i>(<i>k</i>) = 60 + 0.15(<i>k</i> − 500)</span> &nbsp; for <i>k</i> &gt; 500</span>`, note: "Above 500, pay $60 plus $0.15 for each kWh past 500." },
      { math: `<span class="m">740 &gt; 500</span>`, note: "740 kWh falls in the second piece." },
      { math: `<span class="m c1"><i>C</i>(740) = 60 + 0.15(240) = 60 + 36 = 96</span>`, note: "Substitute into the second piece only." },
      { math: `<span class="m">0.12(500) = 60 = 60 + 0.15(0)</span>`, note: "Check: both pieces agree at k = 500, so the graph has no jump." }
    ],
    answer: `The cost is <span class="m">$96</span> for 740 kWh.`
  },
  why: `<p>Real pricing and policy rules are often piecewise: tiered utility rates, tax brackets, shipping by weight, overtime pay after 40 hours, parking charged per started hour. Writing them as piecewise functions makes the rules exact and lets you compute any case, graph the whole rule and spot jumps.</p>
<p>The absolute value function is the standard example of a graph with a sharp corner, and step functions are the standard example of jumps. Both are important in calculus when studying continuity and derivatives, and piecewise definitions appear throughout programming as if/else rules.</p>`,
  careers: [
    { role: "Tax preparer", use: "Applies progressive tax brackets, where each slice of taxable income is taxed at its own rate, a piecewise linear function." },
    { role: "Payroll specialist", use: "Computes weekly pay with time-and-a-half for hours above 40, which is a two-piece function of hours worked." },
    { role: "Logistics analyst", use: "Uses carrier rate tables that are step functions of package weight and distance zone." },
    { role: "Software developer", use: "Implements business rules as if/else branches, each branch one piece of a piecewise function." },
    { role: "Utility rate analyst", use: "Designs tiered electricity and water pricing with different rates for successive blocks of usage." },
    { role: "Actuary", use: "Models insurance payouts with deductibles and caps, which pay nothing below one level and a fixed maximum above another." }
  ],
  life: [
    "Working out an electricity or water bill with tiered rates",
    "Calculating pay when overtime kicks in after 40 hours",
    "Figuring out the parking fee when every started hour is charged",
    "Understanding how moving into a higher tax bracket affects only the extra income",
    "Comparing shipping prices by weight class"
  ],
  fields: [
    { name: "Economics", use: "Tax schedules, tariffs and tiered pricing are piecewise functions of income or quantity." },
    { name: "Computer science", use: "Conditional logic defines functions in cases, and activation functions such as ReLU, max(0, x), are piecewise." },
    { name: "Physics", use: "Motion with different phases, such as acceleration then constant speed, is described piecewise." },
    { name: "Engineering", use: "Signals and control inputs that switch on at a certain time are step or piecewise functions." }
  ],
  prereqWhy: {
    "a1-functions": "You need function notation and domains, because a piecewise function assigns a formula to each part of the domain.",
    "a1-abs-eq": "The absolute value function's two pieces come from the definition of |x| used to solve absolute value equations."
  },
  unlocksWhy: {
    "a2-transformations": "The V-shaped graph of <span class=\"m\">|<i>x</i>|</span> is one of the parent functions that Algebra II shifts, stretches and reflects.",
    "pc-piecewise-abs": "Evaluating a function that changes rule at a boundary, and graphing each piece with its own open or closed endpoint, is the starting skill for step functions and for rewriting absolute-value graphs as pieces."
  },
  beyond: [
    { field: "Precalculus", why: "Transformations of |x|, step functions and piecewise definitions of functions are studied in detail." },
    { field: "Calculus I", why: "Piecewise functions are the main examples for one-sided limits, continuity and points where a derivative does not exist." },
    { field: "Economics", why: "Progressive taxes and tiered prices are analysed as piecewise linear functions with changing marginal rates." },
    { field: "Computer Science", why: "Piecewise linear functions such as ReLU are the building blocks of neural networks." }
  ],
  mistakes: [
    { wrong: `Using every piece at once: evaluating <span class="m"><i>C</i>(740)</span> as <span class="m">0.12(740) + 0.15(740)</span>.`, fix: `Use only the piece whose condition contains the input. Since <span class="m">740 &gt; 500</span>, <span class="m"><i>C</i>(740) = 60 + 0.15(240) = 96</span>.` },
    { wrong: `Including a boundary point in two pieces, such as <span class="m"><i>x</i> ≤ 2</span> and <span class="m"><i>x</i> ≥ 2</span> with different values at 2.`, fix: `A function has one output per input. Each boundary point belongs to exactly one piece, shown by one closed dot and one open dot, unless both pieces give the same value there.` },
    { wrong: `Graphing <span class="m"><i>y</i> = |<i>x</i> + 1| − 3</span> with its vertex at <span class="m">(1, −3)</span>.`, fix: `<span class="m">|<i>x</i> + 1| = |<i>x</i> − (−1)|</span>, so <span class="m"><i>h</i> = −1</span> and the vertex is <span class="m">(−1, −3)</span>.` }
  ],
  practice: [
    { q: `For <span class="m"><i>f</i>(<i>x</i>) = 2<i>x</i> + 1</span> if <span class="m"><i>x</i> &lt; 0</span> and <span class="m"><i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup></span> if <span class="m"><i>x</i> ≥ 0</span>, find <span class="m"><i>f</i>(−3)</span>, <span class="m"><i>f</i>(0)</span> and <span class="m"><i>f</i>(4)</span>.`, a: `<span class="m"><i>f</i>(−3) = 2(−3) + 1 = −5</span>; <span class="m"><i>f</i>(0) = 0<sup>2</sup> = 0</span>; <span class="m"><i>f</i>(4) = 16</span>.` },
    { q: `Write <span class="m"><i>g</i>(<i>x</i>) = |<i>x</i> − 2|</span> as a piecewise function.`, a: `<span class="m"><i>g</i>(<i>x</i>) = <i>x</i> − 2</span> if <span class="m"><i>x</i> ≥ 2</span>, and <span class="m"><i>g</i>(<i>x</i>) = −(<i>x</i> − 2) = 2 − <i>x</i></span> if <span class="m"><i>x</i> &lt; 2</span>.` },
    { q: `For <span class="m"><i>h</i>(<i>x</i>) = |<i>x</i> + 1| − 3</span>, give the vertex, the intercepts and the range.`, a: `Vertex <span class="m">(−1, −3)</span>. y-intercept: <span class="m"><i>h</i>(0) = 1 − 3 = −2</span>. x-intercepts: <span class="m">|<i>x</i> + 1| = 3</span>, so <span class="m"><i>x</i> = 2</span> or <span class="m"><i>x</i> = −4</span>. Range <span class="m">[−3, ∞)</span>.` },
    { q: `A garage charges $4 for the first hour or part of an hour and $2 for each additional hour or part of an hour. What do 3.5 hours cost, and what do exactly 3 hours cost?`, a: `3.5 hours counts as 4 started hours: <span class="m">4 + 2(3) = $10</span>. Exactly 3 hours counts as 3: <span class="m">4 + 2(2) = $8</span>. This is a step function, <span class="m"><i>C</i>(<i>t</i>) = 4 + 2(⌈<i>t</i>⌉ − 1)</span> for <span class="m"><i>t</i> &gt; 0</span>.` }
  ]
};
