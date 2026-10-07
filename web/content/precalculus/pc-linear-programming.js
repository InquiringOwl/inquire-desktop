window.ARITH = window.ARITH || {};
ARITH["pc-linear-programming"] = {
  title: "Systems of Inequalities & Linear Programming",
  short: "Shade the feasible region, then test its corners",
  grade: "Grade 12 · college Precalculus",
  hours: 5,
  voice: "plain",
  eyebrow: "Systems of equations and inequalities · linear programming",
  hero: `<span class="m">max <span class="c3"><i>P</i> = 30<span class="c1"><i>x</i></span> + 50<span class="c2"><i>y</i></span></span> &nbsp;on&nbsp; <span class="c4">3<i>x</i> + 2<i>y</i> ≤ 24, <i>x</i> + 2<i>y</i> ≤ 16</span> &nbsp;⇒&nbsp; <span class="c5">(4, 6)</span></span>`,
  lede: `A system of linear inequalities describes a region of the plane. Linear programming finds the point of that region where a linear quantity, such as profit or cost, is largest or smallest, and the answer is always at a corner.`,
  plain: `<p>A workshop makes chairs and tables. Each needs hours of carpentry and finishing, and only so many hours are available each day. Every limit is a linear inequality in the numbers of chairs <span class="c1"><i>x</i></span> and tables <span class="c2"><i>y</i></span>. Each one cuts the plane along a line and keeps one side. The points that satisfy all of them form the <b>feasible region</b>: every plan the workshop can actually carry out.</p>
<p>Profit is <span class="c3">30<i>x</i> + 50<i>y</i></span>. The plans with a profit of $300 lie on one line, the plans with $400 on a parallel line further out. Sliding that line outward raises the profit, and the last point of the region it touches is the best plan. A straight line sliding over a region with straight edges always leaves it at a corner (or along a whole edge), so only the corners need checking.</p>
<p>That is the whole method: draw the region, find its <span class="c5">corner points</span> by solving pairs of boundary equations, and evaluate the objective at each.</p>`,
  formal: `<p>The graph of a linear inequality <span class="m"><i>ax</i> + <i>by</i> ≤ <i>c</i></span> is a half-plane bounded by the line <span class="m"><i>ax</i> + <i>by</i> = <i>c</i></span>, drawn solid for ≤ or ≥ and dashed for &lt; or &gt;. A test point not on the line, often (0, 0), shows which side to shade. The solution set of a system is the intersection of the half-planes. Its <b>corner points</b> (vertices) are intersections of two boundary lines that satisfy every inequality. The region is <b>bounded</b> if a circle can enclose it, otherwise <b>unbounded</b>.</p>
<p>A <b>linear programming</b> problem maximises or minimises an <b>objective function</b> <span class="m"><i>z</i> = <i>px</i> + <i>qy</i></span> over the feasible region of a system of linear constraints.</p>
<div class="display"><b>Corner-point theorem.</b> If the feasible region is bounded and not empty, <i>z</i> has a maximum and a minimum, each at a corner point.<br>If it is unbounded, an optimum that exists is still at a corner point.</div>
<p>When two adjacent corners give the same optimal value, every point of the edge between them is optimal too.</p>`,
  legend: [
    { c: "c1", sym: `<i>x</i>`, name: "First decision variable", desc: "For example, the number of chairs made." },
    { c: "c2", sym: `<i>y</i>`, name: "Second decision variable", desc: "For example, the number of tables made." },
    { c: "c3", sym: `<i>z</i> = <i>px</i> + <i>qy</i>`, name: "Objective line", desc: "All points with the same objective value; it slides parallel as the value changes." },
    { c: "c4", sym: `<i>ax</i> + <i>by</i> ≤ <i>c</i>`, name: "Constraints", desc: "The boundary lines and half-planes of the system." },
    { c: "c5", sym: `(<i>x</i>, <i>y</i>)*`, name: "Optimum", desc: "The corner point where the objective is largest or smallest." }
  ],
  steps: {
    title: "How to solve a linear programming problem",
    items: [
      `Name the variables and write the <span class="c3">objective function</span> to maximise or minimise.`,
      `Write every <span class="c4">constraint</span> as an inequality, including <span class="m"><i>x</i> ≥ 0</span> and <span class="m"><i>y</i> ≥ 0</span> when amounts cannot be negative.`,
      `Graph each boundary line and shade the side a test point picks; the overlap is the feasible region.`,
      `Find each <span class="c5">corner point</span> by solving the two boundary equations that meet there, and check it satisfies the rest.`,
      `Evaluate the objective at every corner. The largest value is the maximum, the smallest the minimum.`,
      `For an unbounded region, check the direction the objective improves: the optimum may not exist.`
    ]
  },
  example: {
    prompt: `A workshop makes chairs <span class="m"><i>x</i></span> and tables <span class="m"><i>y</i></span>. A chair takes 3 h of carpentry and 1 h of finishing; a table takes 2 h of each. There are 24 h of carpentry and 16 h of finishing a day. Profit is $30 a chair and $50 a table. How many of each maximise profit?`,
    lines: [
      { math: `<span class="m">max <i>P</i> = 30<i>x</i> + 50<i>y</i></span>`, note: "The objective function." },
      { math: `<span class="m">3<i>x</i> + 2<i>y</i> ≤ 24, &nbsp; <i>x</i> + 2<i>y</i> ≤ 16, &nbsp; <i>x</i> ≥ 0, &nbsp; <i>y</i> ≥ 0</span>`, note: "Carpentry hours, finishing hours, no negative production." },
      { math: `<span class="m">(0, 0), &nbsp; (8, 0), &nbsp; (0, 8)</span>`, note: "Corners on the axes: the intercepts that satisfy both hour limits." },
      { math: `<span class="m">(3<i>x</i> + 2<i>y</i>) − (<i>x</i> + 2<i>y</i>) = 24 − 16 ⇒ <i>x</i> = 4, <i>y</i> = 6</span>`, note: "The corner where both hour limits are used up." },
      { math: `<span class="m"><i>P</i>: 0, &nbsp; 240, &nbsp; 400, &nbsp; 30·4 + 50·6 = 420</span>`, note: "Evaluate the profit at each corner." },
      { math: `<span class="m">max <i>P</i> = 420 at (4, 6)</span>`, note: "The largest corner value." }
    ],
    answer: `Make 4 chairs and 6 tables a day for the maximum profit of $420.`
  },
  why: `<p>Linear programming is one of the most used pieces of applied mathematics. Airlines schedule crews with it, refineries blend fuels, farms choose crops, hospitals plan staff rotas and shipping companies route containers. Real problems have thousands of variables, but the idea is the same as in two dimensions: the constraints form a region with flat sides, and the best plan is at a corner.</p>`,
  careers: [
    { role: "Operations research analyst", use: "Builds linear programs to schedule production, staff and deliveries at minimum cost." },
    { role: "Supply chain manager", use: "Decides how much to ship from each warehouse to each store under capacity limits." },
    { role: "Airline crew scheduler", use: "Assigns crews to flights with linear and integer programming under work-hour rules." },
    { role: "Dietitian", use: "Plans menus that meet nutrient minimums at lowest cost, the classic diet problem." },
    { role: "Agricultural economist", use: "Chooses how much land to give each crop under limits on water, labour and money." },
    { role: "Energy systems engineer", use: "Dispatches power plants to meet demand at minimum cost within transmission limits." }
  ],
  life: [
    "Planning meals that meet protein needs on a budget",
    "Splitting study hours between two subjects with a deadline",
    "Deciding how many of two products to bake for a market stall",
    "Choosing a phone plan mix under data and call limits",
    "Fitting work shifts around class hours"
  ],
  fields: [
    { name: "Operations research", use: "Linear programming and the simplex method are its core tools." },
    { name: "Economics", use: "Allocating scarce resources; shadow prices come from the dual program." },
    { name: "Computer science", use: "Network flow, matching and approximation algorithms are built on linear programs." },
    { name: "Engineering", use: "Optimal design and control under linear limits." }
  ],
  prereqWhy: {
    "a1-sys-ineq": "Graphing a system of linear inequalities and its shaded solution region is the first half of every linear program.",
    "a1-sys-elim": "Each corner point is the solution of a pair of boundary equations, found by elimination."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Linear Algebra", why: "The simplex method moves from corner to corner of a region in many dimensions with row operations." },
    { field: "Economics/Operations research", why: "Duality, sensitivity analysis and integer programming extend the corner-point idea." },
    { field: "Discrete Mathematics", why: "Network flows and matchings are linear programs with whole-number corners." }
  ],
  mistakes: [
    { wrong: `Testing points inside the region, or guessing a "middle" plan.`, fix: `A linear objective is optimised at a corner. Find all corners and evaluate the objective at each one.` },
    { wrong: `Leaving out <span class="m"><i>x</i> ≥ 0</span> and <span class="m"><i>y</i> ≥ 0</span>.`, fix: `Without them the region can include negative production, and its corners change.` },
    { wrong: `Counting an intersection of two boundary lines as a corner when it breaks another constraint.`, fix: `Check every intersection in all the inequalities before using it.` },
    { wrong: `Reporting a maximum on an unbounded region.`, fix: `If the objective keeps growing in a direction the region extends, there is no maximum.` }
  ],
  practice: [
    { q: `Is (2, 3) a solution of the system <span class="m"><i>x</i> + <i>y</i> ≤ 6</span>, <span class="m">2<i>x</i> − <i>y</i> ≥ 0</span>?`, a: `Yes: <span class="m">2 + 3 = 5 ≤ 6</span> and <span class="m">4 − 3 = 1 ≥ 0</span>.` },
    { q: `Find the corner points of <span class="m"><i>x</i> ≥ 0, <i>y</i> ≥ 0, <i>x</i> + <i>y</i> ≤ 5, <i>x</i> + 3<i>y</i> ≤ 9</span>.`, a: `(0, 0), (5, 0), (0, 3), and from subtracting the two lines <span class="m">2<i>y</i> = 4</span>: (3, 2).` },
    { q: `Maximise <span class="m"><i>z</i> = 4<i>x</i> + 5<i>y</i></span> on that region.`, a: `<span class="m"><i>z</i></span> = 0, 20, 15, 22 at the corners, so the maximum is 22 at (3, 2).` },
    { q: `Minimise <span class="m"><i>C</i> = 3<i>x</i> + 2<i>y</i></span> subject to <span class="m"><i>x</i> + <i>y</i> ≥ 4, <i>x</i> + 3<i>y</i> ≥ 6, <i>x</i> ≥ 0, <i>y</i> ≥ 0</span>. Is there a maximum?`, a: `The region is unbounded with corners (0, 4), (3, 1), (6, 0), where <span class="m"><i>C</i></span> = 8, 11, 18. The minimum is 8 at (0, 4). There is no maximum: <span class="m"><i>C</i></span> grows without bound as <span class="m"><i>x</i></span> or <span class="m"><i>y</i></span> grows.` }
  ],
  origin: `<p>Leonid Kantorovich formulated linear programming in 1939 to plan production in Soviet plywood factories. George Dantzig developed it independently for U.S. Air Force planning and invented the simplex method in 1947. Kantorovich shared the 1975 Nobel Memorial Prize in Economics with Tjalling Koopmans for their work on the optimal allocation of resources.</p>`
};
