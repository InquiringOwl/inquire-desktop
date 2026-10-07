window.ARITH = window.ARITH || {};

ARITH["a1-sys-ineq"] = {
  title: "Systems of Linear Inequalities",
  short: "Shade each half-plane; the overlap is the answer",
  grade: "Grade 9 · college Elementary Algebra",
  hours: 4,
  voice: "plain",
  eyebrow: "Systems · regions in the plane",
  hero: `<span class="m"><span class="c2"><i>y</i> ≤ <i>m</i><sub>1</sub><i>x</i> + <i>b</i><sub>1</sub></span> &nbsp;and&nbsp; <span class="c3"><i>y</i> &gt; <i>m</i><sub>2</sub><i>x</i> + <i>b</i><sub>2</sub></span> &nbsp;→&nbsp; <span class="c1">overlap</span></span>`,
  lede: `A linear inequality in two variables is true on a whole half-plane. A system of them is true where all the half-planes overlap, a region called the feasible region.`,
  plain: `<p>An equation like <span class="m"><i>y</i> = 2<i>x</i> + 1</span> is a line. The inequality <span class="m"><i>y</i> &gt; 2<i>x</i> + 1</span> is everything on one side of that line, a <b>half-plane</b>. You draw the <b>boundary line</b> first, solid if points on it count (≤ or ≥) and dashed if they do not (&lt; or &gt;). Then you pick a <b>test point</b> not on the line, often <span class="m">(0, 0)</span>. If it makes the inequality true, shade its side; if false, shade the other side.</p>
<p>With two or more inequalities, do this for each one on the same axes. The solutions of the system are the points that satisfy every inequality, so they lie in the region where all the shadings overlap. Any point there works, and a point outside fails at least one condition.</p>
<p>In real problems the region often describes every choice that fits your limits: hours you can work, items you can afford, mixes that meet two requirements. Quantities like hours or items cannot be negative, so <span class="m"><i>x</i> ≥ 0</span> and <span class="m"><i>y</i> ≥ 0</span> are usually part of the system. If two boundaries are parallel and the shadings point away from each other, the region is empty and the system has no solution.</p>`,
  formal: `<p>A <b>linear inequality in two variables</b> has the form <span class="m"><i>Ax</i> + <i>By</i> &lt; <i>C</i></span> (or with ≤, &gt;, ≥), with <span class="m"><i>A</i></span> and <span class="m"><i>B</i></span> not both 0. Its solution set is a <b>half-plane</b> bounded by the line <span class="m"><i>Ax</i> + <i>By</i> = <i>C</i></span>. The half-plane is <b>open</b> (boundary excluded, drawn dashed) for &lt; and &gt;, and <b>closed</b> (boundary included, drawn solid) for ≤ and ≥.</p>
<div class="display">Solution set of the system = <i>H</i><sub>1</sub> ∩ <i>H</i><sub>2</sub> ∩ ⋯ ∩ <i>H</i><sub><i>k</i></sub><br><span class="dim">each <i>H</i><sub><i>i</i></sub> the half-plane of one inequality</span></div>
<p>The intersection, called the <b>feasible region</b> in applications, may be bounded (a polygon), unbounded, or empty (∅). Points where two boundary lines meet and that satisfy every inequality are the <b>vertices</b> or corner points of the region. For a strict inequality, solving for <span class="m"><i>y</i></span> gives <span class="m"><i>y</i> &gt; <i>mx</i> + <i>b</i></span> (above the line) or <span class="m"><i>y</i> &lt; <i>mx</i> + <i>b</i></span> (below); remember that dividing by a negative <span class="m"><i>B</i></span> reverses the inequality.</p>`,
  legend: [
    { c: "c2", sym: `<i>y</i> ≤ <i>m</i><sub>1</sub><i>x</i> + <i>b</i><sub>1</sub>`, name: "Inequality 1", desc: "Its half-plane. A solid boundary means points on the line are included." },
    { c: "c3", sym: `<i>y</i> &gt; <i>m</i><sub>2</sub><i>x</i> + <i>b</i><sub>2</sub>`, name: "Inequality 2", desc: "Its half-plane. A dashed boundary means points on the line are excluded." },
    { c: "c1", sym: `<i>H</i><sub>1</sub> ∩ <i>H</i><sub>2</sub>`, name: "Overlap region", desc: "Points that satisfy both inequalities: the solution set of the system." }
  ],
  steps: { title: "How to graph a system of linear inequalities", items: [
    `For each inequality, graph its boundary line by replacing the inequality sign with =. Use a solid line for ≤ or ≥ and a dashed line for &lt; or &gt;.`,
    `Choose a test point not on the line, such as <span class="m">(0, 0)</span>. Substitute it: if the inequality is true, shade the side containing the test point; if false, shade the other side.`,
    `Repeat for every inequality on the same axes, including <span class="m"><i>x</i> ≥ 0</span> and <span class="m"><i>y</i> ≥ 0</span> if the context requires them.`,
    `The solution set is the region where all shadings overlap. If there is no overlap, the system has no solution.`,
    `Find corner points by solving pairs of boundary equations, and check a point inside the region in every inequality.`
  ] },
  example: {
    prompt: `A student works <span class="m"><i>x</i></span> hours a week at a café for $12/hour and <span class="m"><i>y</i></span> hours tutoring for $20/hour. They want to earn at least $240 a week but can work at most 15 hours in total. Describe every possible schedule and check whether 5 café hours and 10 tutoring hours works.`,
    lines: [
      { math: `<span class="m"><span class="c2">12<i>x</i> + 20<i>y</i> ≥ 240</span>, &nbsp; <span class="c3"><i>x</i> + <i>y</i> ≤ 15</span>, &nbsp; <i>x</i> ≥ 0, &nbsp; <i>y</i> ≥ 0</span>`, note: "Earnings goal, time limit, and no negative hours." },
      { math: `<span class="m c2">12<i>x</i> + 20<i>y</i> = 240: &nbsp; (20, 0), (0, 12)</span>`, note: "Solid boundary through its intercepts. Test (0, 0): 0 ≥ 240 is false, so shade away from the origin." },
      { math: `<span class="m c3"><i>x</i> + <i>y</i> = 15: &nbsp; (15, 0), (0, 15)</span>`, note: "Solid boundary. Test (0, 0): 0 ≤ 15 is true, so shade toward the origin." },
      { math: `<span class="m">12<i>x</i> + 20(15 − <i>x</i>) = 240 → −8<i>x</i> = −60 → <i>x</i> = 7.5</span>`, note: "The boundaries cross at (7.5, 7.5)." },
      { math: `<span class="m c1">vertices (0, 12), (0, 15), (7.5, 7.5)</span>`, note: "The feasible region is the triangle with these corners, edges included." },
      { math: `<span class="m">12(5) + 20(10) = 260 ≥ 240 ✓, &nbsp; 5 + 10 = 15 ≤ 15 ✓</span>`, note: "The schedule (5, 10) meets both conditions." }
    ],
    answer: `Every schedule in the triangle with corners <span class="m">(0, 12)</span>, <span class="m">(0, 15)</span> and <span class="m">(7.5, 7.5)</span> works, including its edges. The schedule of 5 café hours and 10 tutoring hours works; 10 and 5 does not, since it earns only $220.`
  },
  why: `<p>Most real decisions have several limits at once: a budget, a time cap, minimum amounts of nutrients, a weight limit. A system of inequalities turns those limits into one picture of every option that satisfies all of them. You can then choose the best point in that region, for example the cheapest diet or the most profitable production mix.</p>
<p>Choosing the best point of such a region is <b>linear programming</b>, used across logistics, manufacturing and finance. The key fact that a best choice, when one exists, can always be found at a corner point starts with the graphs you draw here.</p>`,
  careers: [
    { role: "Operations research analyst", use: "Models production limits as a system of linear inequalities and finds the most profitable feasible plan." },
    { role: "Dietitian", use: "Plans meals whose protein, calorie and sodium amounts must each stay above or below set limits." },
    { role: "Supply chain manager", use: "Sets warehouse capacity and demand constraints as inequalities to decide how much to ship from each site." },
    { role: "Farm manager", use: "Chooses acres of two crops subject to limits on land, water and labour hours." },
    { role: "Financial planner", use: "Allocates money between two investments with a minimum return and a maximum risk exposure." }
  ],
  life: [
    "Planning weekly hours at two jobs to earn enough without working too much",
    "Buying two kinds of snacks for a party within a budget and a minimum count",
    "Packing a suitcase under a weight limit with at least a certain number of outfits",
    "Balancing study and exercise time with minimums for each and a daily total",
    "Choosing a phone plan's minutes and data so the bill stays under a cap"
  ],
  fields: [
    { name: "Operations research", use: "Linear programming optimises an objective over the feasible region of a system of inequalities." },
    { name: "Economics", use: "Budget sets and production possibility regions are described by systems of inequalities." },
    { name: "Nutrition science", use: "Diet problems require several nutrient inequalities to hold at once." },
    { name: "Computer graphics", use: "A pixel is inside a triangle exactly when it satisfies three edge inequalities." }
  ],
  prereqWhy: {
    "a1-sys-graph": "You graph two boundary lines on the same axes and find where they cross, exactly as for a system of equations.",
    "a1-compound": "An AND compound inequality is an intersection of solution sets, and a system of inequalities is the same idea in two dimensions."
  },
  unlocksWhy: {
    "pc-linear-programming": "Linear programming starts from a graphed system of inequalities: the shaded feasible region, with solid or dashed boundaries, is the set of allowed choices whose corner points get tested."
  },
  beyond: [
    { field: "Linear Algebra", why: "Feasible regions in many variables are convex polytopes described by Ax ≤ b." },
    { field: "Operations Research", why: "The simplex method searches the corner points of the feasible region for the optimal solution." },
    { field: "Economics", why: "Consumer choice and production planning are constrained optimisation over regions defined by inequalities." },
    { field: "Calculus III", why: "Regions of integration in the plane are described by systems of inequalities in x and y." }
  ],
  mistakes: [
    { wrong: `Drawing <span class="m"><i>y</i> &gt; 2<i>x</i> − 1</span> with a solid boundary.`, fix: `Strict inequalities (&lt;, &gt;) exclude the boundary, so draw it dashed. Use solid lines only for ≤ and ≥.` },
    { wrong: `For <span class="m">−2<i>y</i> &gt; 4<i>x</i> − 6</span>, shading above <span class="m"><i>y</i> = −2<i>x</i> + 3</span>.`, fix: `Dividing by <span class="m">−2</span> reverses the sign: <span class="m"><i>y</i> &lt; −2<i>x</i> + 3</span>, so shade below. A test point catches this: <span class="m">(0, 0)</span> gives <span class="m">0 &gt; −6</span>, true, and the origin is below the line.` },
    { wrong: `Using a test point that lies on the boundary, such as <span class="m">(0, 0)</span> for <span class="m"><i>y</i> ≤ 3<i>x</i></span>.`, fix: `A point on the line cannot tell you which side to shade. Choose one clearly off it, such as <span class="m">(1, 0)</span>: <span class="m">0 ≤ 3</span> is true, so shade the side containing <span class="m">(1, 0)</span>.` },
    { wrong: `Leaving out <span class="m"><i>x</i> ≥ 0</span> and <span class="m"><i>y</i> ≥ 0</span> in a word problem about hours or items.`, fix: `Negative hours make no sense. Include the non-negativity constraints so the region stays in the first quadrant.` }
  ],
  practice: [
    { q: `Is <span class="m">(1, 3)</span> a solution of the system <span class="m"><i>y</i> &gt; 2<i>x</i></span>, <span class="m"><i>x</i> + <i>y</i> ≤ 5</span>?`, a: `<span class="m">3 &gt; 2</span> ✓ and <span class="m">1 + 3 = 4 ≤ 5</span> ✓. Yes.` },
    { q: `Graph <span class="m"><i>y</i> ≤ −<i>x</i> + 4</span> and <span class="m"><i>y</i> &gt; <i>x</i> − 2</span>. Where do the boundaries meet, and is the origin in the solution set?`, a: `Solid line <span class="m"><i>y</i> = −<i>x</i> + 4</span>, shade below; dashed line <span class="m"><i>y</i> = <i>x</i> − 2</span>, shade above. They meet where <span class="m">−<i>x</i> + 4 = <i>x</i> − 2</span>, at <span class="m">(3, 1)</span>. Origin: <span class="m">0 ≤ 4</span> ✓, <span class="m">0 &gt; −2</span> ✓, so yes. The region is the wedge to the left of <span class="m">(3, 1)</span>.` },
    { q: `Solve the system <span class="m"><i>y</i> &gt; 2<i>x</i> + 3</span>, <span class="m"><i>y</i> &lt; 2<i>x</i> − 1</span>.`, a: `Both boundaries have slope 2, so they are parallel. The first region lies above the upper line, the second below the lower line; they never overlap. No solution: ∅.` },
    { q: `A bakery makes <span class="m"><i>x</i></span> muffins and <span class="m"><i>y</i></span> loaves a day. The oven holds at most 60 items, at least 10 must be loaves, and profit ($1.50 per muffin, $4 per loaf) must be at least $120. Write the system and test <span class="m">(30, 20)</span> and <span class="m">(40, 15)</span>.`, a: `<span class="m"><i>x</i> + <i>y</i> ≤ 60</span>, <span class="m"><i>y</i> ≥ 10</span>, <span class="m">1.5<i>x</i> + 4<i>y</i> ≥ 120</span>, <span class="m"><i>x</i> ≥ 0</span>. <span class="m">(30, 20)</span>: 50 ≤ 60, 20 ≥ 10, 45 + 80 = 125 ≥ 120, all true. <span class="m">(40, 15)</span>: 55 ≤ 60, 15 ≥ 10, 60 + 60 = 120 ≥ 120, true, on the profit boundary. Both are feasible.` }
  ],
  origin: `Leonid Kantorovich developed linear programming in 1939 to plan production in Soviet industry, and George Dantzig invented the simplex method for solving such problems in 1947. Both rest on finding the best point of a region cut out by linear inequalities.`
};
