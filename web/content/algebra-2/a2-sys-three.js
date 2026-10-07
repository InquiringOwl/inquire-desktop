window.ARITH = window.ARITH || {};
ARITH["a2-sys-three"] = {
  title: "Linear Systems in Three Variables",
  short: "Three planes, elimination to 2 × 2, and an ordered triple",
  grade: "Grade 11 · college Intermediate Algebra",
  hours: 5,
  voice: "plain",
  eyebrow: "Systems of equations · three variables",
  hero: `<span class="m"><span class="c1"><i>x</i> + <i>y</i> + <i>z</i> = 6</span>, &nbsp;<span class="c2">2<i>x</i> − <i>y</i> + <i>z</i> = 3</span>, &nbsp;<span class="c3"><i>x</i> + 2<i>y</i> − <i>z</i> = 2</span> &nbsp;⇒&nbsp; <span class="c5">(1, 2, 3)</span></span>`,
  lede: `A linear equation in <span class="m"><i>x</i>, <i>y</i></span> and <span class="m"><i>z</i></span> describes a plane in space. A solution of a system of three such equations is an <b>ordered triple</b> that lies on all three planes. <b>Elimination</b> removes one variable to leave a 2 × 2 system, and back-substitution finishes the job.`,
  plain: `<p>With two unknowns, each linear equation is a line and the solution is where the lines cross. With three unknowns, each equation <span class="m"><i>ax</i> + <i>by</i> + <i>cz</i> = <i>d</i></span> is a flat plane in three-dimensional space. Two planes usually meet in a line, and a third plane usually cuts that line at one point. That point, written <span class="m">(<i>x</i>, <i>y</i>, <i>z</i>)</span>, is the solution.</p>
<p>To find it, use the same elimination you know from two variables, twice. Pick one variable, say <span class="m"><i>x</i></span>. Combine equations (1) and (2) so that <span class="m"><i>x</i></span> cancels, then combine (1) and (3) the same way. Now you have two equations in <span class="m"><i>y</i></span> and <span class="m"><i>z</i></span> only. Solve that pair, then substitute back to get <span class="m"><i>x</i></span>.</p>
<p>Planes do not always meet in one point. Parallel planes never meet, and three planes can also cross in pairs along three parallel lines, like the faces of a tent. Then there is no solution. Or all three can share one line, and every point of that line is a solution. Elimination tells you which case you have: a false statement such as <span class="m">0 = 3</span> means no solution, and <span class="m">0 = 0</span> means infinitely many.</p>`,
  formal: `<p>A <b>linear equation in three variables</b> has the form <span class="m"><i>ax</i> + <i>by</i> + <i>cz</i> = <i>d</i></span> with <span class="m"><i>a</i>, <i>b</i>, <i>c</i></span> not all zero; its graph is a plane. A <b>solution</b> of a system is an ordered triple <span class="m">(<i>x</i>, <i>y</i>, <i>z</i>)</span> that satisfies every equation. Adding a multiple of one equation to another, multiplying an equation by a nonzero constant and swapping equations do not change the solution set, so elimination produces an equivalent, simpler system.</p>
<p>A system of three linear equations in three variables has exactly one solution (the system is <b>independent</b>), no solution (<b>inconsistent</b>), or infinitely many (<b>dependent</b>). In the dependent case the solutions are written with a parameter <span class="m"><i>t</i></span>:</p>
<div class="display"><span class="c1"><i>x</i> + <i>y</i> + <i>z</i> = 2</span>, &nbsp;<span class="c2"><i>x</i> + 2<i>y</i> + 3<i>z</i> = 4</span>, &nbsp;<span class="c3">2<i>x</i> + 3<i>y</i> + 4<i>z</i> = 6</span>: &nbsp;(1) + (2) − (3) gives 0 = 0, &nbsp;solutions <span class="c5">(<i>t</i>, 2 − 2<i>t</i>, <i>t</i>)</span><br>the same with <span class="c3">2<i>x</i> + 3<i>y</i> + 4<i>z</i> = 9</span>: &nbsp;(1) + (2) − (3) gives 0 = −3, &nbsp;no solution: <span class="dim">∅</span></div>`,
  legend: [
    { c: "c1", sym: `(1)`, name: "First equation", desc: "Usually the one used to eliminate a variable from the other two." },
    { c: "c2", sym: `(2)`, name: "Second equation", desc: "Combined with (1) to give an equation (4) without the chosen variable." },
    { c: "c3", sym: `(3)`, name: "Third equation", desc: "Combined with (1) to give a second equation (5) without that variable." },
    { c: "c5", sym: `(<i>x</i>, <i>y</i>, <i>z</i>)`, name: "Solution", desc: "The ordered triple on all three planes, or a parametric line when the system is dependent." }
  ],
  steps: {
    title: "How to solve a system of three linear equations",
    items: [
      `Write each equation in standard form <span class="m"><i>ax</i> + <i>by</i> + <i>cz</i> = <i>d</i></span> and number them (1), (2), (3).`,
      `Choose a variable. Eliminate it from two different pairs, for example (1) with (2) and (1) with (3), to get equations (4) and (5).`,
      `Solve the 2 × 2 system (4), (5) by elimination.`,
      `Back-substitute both values into one original equation to find the third variable.`,
      `Check the triple in all three equations. If a step gives a false statement like <span class="m">0 = 3</span>, there is no solution; if it gives <span class="m">0 = 0</span>, the system is dependent: write the solutions with a parameter.`
    ]
  },
  example: {
    prompt: `Solve <span class="m"><span class="c1"><i>x</i> + <i>y</i> + <i>z</i> = 6</span></span> (1), <span class="m"><span class="c2">2<i>x</i> − <i>y</i> + <i>z</i> = 3</span></span> (2), <span class="m"><span class="c3"><i>x</i> + 2<i>y</i> − <i>z</i> = 2</span></span> (3).`,
    lines: [
      { math: `<span class="m">2·<span class="c1">(1)</span> − <span class="c2">(2)</span>: &nbsp; 3<i>y</i> + <i>z</i> = 9</span>`, note: "2x + 2y + 2z = 12 minus 2x − y + z = 3. x cancels. Call this (4)." },
      { math: `<span class="m"><span class="c3">(3)</span> − <span class="c1">(1)</span>: &nbsp; <i>y</i> − 2<i>z</i> = −4</span>`, note: "x cancels again, from a different pair. Call this (5)." },
      { math: `<span class="m">(4) − 3·(5): &nbsp; 7<i>z</i> = 21 &nbsp;⇒&nbsp; <i>z</i> = 3</span>`, note: "Now a 2 × 2 system in y and z: eliminate y." },
      { math: `<span class="m">3<i>y</i> + 3 = 9 &nbsp;⇒&nbsp; <i>y</i> = 2</span>`, note: "Back-substitute z = 3 into (4)." },
      { math: `<span class="m"><i>x</i> + 2 + 3 = 6 &nbsp;⇒&nbsp; <i>x</i> = 1</span>`, note: "Back-substitute y and z into (1)." },
      { math: `<span class="m"><span class="c2">2 − 2 + 3 = 3</span> ✓, &nbsp; <span class="c3">1 + 4 − 3 = 2</span> ✓</span>`, note: "Check in (2) and (3); (1) holds by construction." }
    ],
    answer: `The system is independent with the single solution <span class="m c5">(1, 2, 3)</span>: the three planes meet in one point.`
  },
  why: `<p>Many real problems have three unknowns tied by three conditions: three foods meeting three nutrient targets, three ticket prices giving a total count and revenue, three currents in a circuit obeying Kirchhoff's laws, three alloys mixed to a given composition. Each condition is linear, so the problem is a 3 × 3 system.</p>
<p>The three-variable case also shows the general pattern. Elimination reduces the number of variables one at a time, and the same three outcomes, one solution, none or infinitely many, appear for any number of unknowns. Organised with matrices, this procedure becomes Gaussian elimination, the workhorse of linear algebra and of scientific computing.</p>`,
  careers: [
    { role: "Dietitian", use: "Chooses amounts of three foods so that a meal meets targets for calories, protein and fat at once." },
    { role: "Electrical engineer", use: "Solves for three loop currents from Kirchhoff's voltage law, one linear equation per loop." },
    { role: "Chemical engineer", use: "Mixes three stock solutions to hit a required volume and two required concentrations." },
    { role: "Operations analyst", use: "Plans how many of three products to make so that three machines are used for exactly their available hours." },
    { role: "Data analyst", use: "Fits a parabola y = ax² + bx + c through three data points by solving for a, b and c." },
    { role: "Chemist", use: "Balances reactions with several unknown coefficients by setting up one linear equation per element." }
  ],
  life: [
    "Working out the price of each of three items from three different receipts",
    "Mixing three kinds of nuts or coffee beans to a target weight and cost",
    "Splitting money among three accounts with given totals and interest",
    "Finding how many adult, student and child tickets were sold from the totals"
  ],
  fields: [
    { name: "Linear algebra", use: "Systems of n equations in n unknowns, solved by Gaussian elimination on matrices." },
    { name: "Physics", use: "Kirchhoff's laws, force balance in three dimensions and statics problems." },
    { name: "Economics", use: "Input–output models and equilibrium in several markets at once." },
    { name: "Computer graphics", use: "Intersections of planes and solving for barycentric coordinates in triangles." }
  ],
  prereqWhy: {
    "a1-sys-elim": "Each step here is the two-variable elimination you already know: scale two equations so one variable cancels, add, and solve."
  },
  unlocksWhy: {
    "pc-matrices": "A three-variable system has coefficients arranged in a rectangular array, which is a matrix, and matrix operations are developed to work with that array directly."
  },
  beyond: [
    { field: "Linear Algebra", why: "The same row operations on an augmented matrix give Gaussian elimination; rank explains the one, none and infinitely many cases." },
    { field: "Physics", why: "Circuit analysis and equilibrium of forces in space lead directly to 3 × 3 linear systems." },
    { field: "Economics", why: "Leontief input–output models describe an economy by a linear system with one equation per sector." }
  ],
  mistakes: [
    { wrong: `Eliminating <span class="m"><i>x</i></span> from (1) and (2) but <span class="m"><i>y</i></span> from (1) and (3).`, fix: `Remove the same variable from both pairs. Otherwise the two new equations still contain all three unknowns and you have made no progress.` },
    { wrong: `Using the pair (1), (2) twice to make (4) and (5).`, fix: `The second combination must bring in equation (3). Two combinations of the same pair carry no information about (3).` },
    { wrong: `Reading <span class="m">0 = 0</span> as "no solution".`, fix: `<span class="m">0 = 0</span> is always true: the system is dependent with infinitely many solutions. Only a false statement such as <span class="m">0 = −3</span> means no solution.` }
  ],
  practice: [
    { q: `Solve <span class="m"><i>x</i> + <i>y</i> + <i>z</i> = 4</span>, <span class="m"><i>x</i> − <i>y</i> + <i>z</i> = 2</span>, <span class="m"><i>x</i> + <i>y</i> − <i>z</i> = 0</span>.`,
      a: `(1) − (2): <span class="m">2<i>y</i> = 2</span>, <span class="m"><i>y</i> = 1</span>. (1) − (3): <span class="m">2<i>z</i> = 4</span>, <span class="m"><i>z</i> = 2</span>. Then <span class="m"><i>x</i> = 4 − 1 − 2 = 1</span>. Solution <span class="m">(1, 1, 2)</span>.` },
    { q: `Solve <span class="m"><i>x</i> + <i>y</i> − <i>z</i> = 1</span>, <span class="m">2<i>x</i> + <i>y</i> + <i>z</i> = 4</span>, <span class="m">3<i>x</i> + 2<i>y</i> = 5</span>.`,
      a: `(1) + (2) gives <span class="m">3<i>x</i> + 2<i>y</i> = 5</span>, which is (3) again: dependent. (2) − (1): <span class="m"><i>x</i> + 2<i>z</i> = 3</span>. With <span class="m"><i>z</i> = <i>t</i></span>: <span class="m"><i>x</i> = 3 − 2<i>t</i></span>, <span class="m"><i>y</i> = 3<i>t</i> − 2</span>. Solutions <span class="m">(3 − 2<i>t</i>, 3<i>t</i> − 2, <i>t</i>)</span> for every real <span class="m"><i>t</i></span>.` },
    { q: `A theatre sold 500 tickets: adult \$12, student \$8, child \$5, for \$4500 in all. There were twice as many adult tickets as child tickets. How many of each were sold?`,
      a: `<span class="m"><i>a</i> + <i>s</i> + <i>c</i> = 500</span>, <span class="m">12<i>a</i> + 8<i>s</i> + 5<i>c</i> = 4500</span>, <span class="m"><i>a</i> = 2<i>c</i></span>. Then <span class="m"><i>s</i> = 500 − 3<i>c</i></span> and <span class="m">24<i>c</i> + 4000 − 24<i>c</i> + 5<i>c</i> = 4500</span>, so <span class="m"><i>c</i> = 100</span>, <span class="m"><i>a</i> = 200</span>, <span class="m"><i>s</i> = 200</span>.` },
    { q: `Find the parabola <span class="m"><i>y</i> = <i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i></span> through <span class="m">(−1, 6)</span>, <span class="m">(1, 2)</span> and <span class="m">(2, 3)</span>.`,
      a: `<span class="m"><i>a</i> − <i>b</i> + <i>c</i> = 6</span>, <span class="m"><i>a</i> + <i>b</i> + <i>c</i> = 2</span>, <span class="m">4<i>a</i> + 2<i>b</i> + <i>c</i> = 3</span>. (2) − (1): <span class="m"><i>b</i> = −2</span>. (3) − (2): <span class="m">3<i>a</i> + <i>b</i> = 1</span>, <span class="m"><i>a</i> = 1</span>. Then <span class="m"><i>c</i> = 3</span>: <span class="m"><i>y</i> = <i>x</i><sup>2</sup> − 2<i>x</i> + 3</span>.` }
  ],
  origin: `<p>The Chinese classic <i>The Nine Chapters on the Mathematical Art</i>, compiled over the last centuries BC and the first century AD, solves linear systems in its eighth chapter, <i>Fangcheng</i>. Its first problem asks for the yield of three grades of grain from <span class="m">3<i>x</i> + 2<i>y</i> + <i>z</i> = 39</span>, <span class="m">2<i>x</i> + 3<i>y</i> + <i>z</i> = 34</span>, <span class="m"><i>x</i> + 2<i>y</i> + 3<i>z</i> = 26</span>, and the answer <span class="m">(<span class="fr"><span>37</span><span>4</span></span>, <span class="fr"><span>17</span><span>4</span></span>, <span class="fr"><span>11</span><span>4</span></span>)</span> is found by eliminating with counting rods arranged in columns, the same method used today. In Europe, Carl Friedrich Gauss used systematic elimination in the early 1800s to compute the orbit of the asteroid Pallas, and the method now carries his name.</p>`
};
