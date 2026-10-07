window.ARITH = window.ARITH || {};

ARITH["a1-abs-eq"] = {
  title: "Absolute Value Equations",
  short: "Distance from a centre gives two answers, one, or none",
  grade: "Grade 9 · college Elementary Algebra",
  hours: 4,
  voice: "plain",
  eyebrow: "Solving equations · absolute value as distance",
  hero: `<span class="m">|<i>x</i> − <span class="c4"><i>h</i></span>| = <span class="c3"><i>k</i></span> &nbsp;⇒&nbsp; <span class="c1"><i>x</i> = <i>h</i> ± <i>k</i></span></span>`,
  lede: `The absolute value <span class="m">|<i>x</i> − <span class="c4"><i>h</i></span>|</span> is the distance between <span class="m"><i>x</i></span> and <span class="m c4"><i>h</i></span>. Asking for that distance to equal <span class="m c3"><i>k</i></span> gives the two points <span class="m c3"><i>k</i></span> units either side of the centre.`,
  plain: `<p>The absolute value of a number is its distance from zero, so it is never negative. Both 5 and −5 are 5 units from zero, which is why <span class="m">|<i>x</i>| = 5</span> has two solutions: <span class="m"><i>x</i> = 5</span> and <span class="m"><i>x</i> = −5</span>.</p>
<p>More generally, <span class="m">|<i>x</i> − 3| = 5</span> asks which numbers are 5 units away from 3. Walk 5 to the right and you reach 8. Walk 5 to the left and you reach −2. So the equation splits into two ordinary equations, <span class="m"><i>x</i> − 3 = 5</span> and <span class="m"><i>x</i> − 3 = −5</span>.</p>
<p>Before you split, get the absolute value alone on one side. Then look at the other side. If it is positive, you get two solutions. If it is zero, there is just one. If it is negative, there are none, because a distance cannot be negative.</p>`,
  formal: `<p>The <b>absolute value</b> of a real number is <span class="m">|<i>a</i>| = <i>a</i></span> if <span class="m"><i>a</i> ≥ 0</span> and <span class="m">|<i>a</i>| = −<i>a</i></span> if <span class="m"><i>a</i> &lt; 0</span>. Geometrically, <span class="m">|<i>a</i> − <i>b</i>|</span> is the distance between <span class="m"><i>a</i></span> and <span class="m"><i>b</i></span> on the number line. For an expression <span class="m"><i>u</i></span> and a real number <span class="m"><i>k</i></span>:</p>
<div class="display"><i>k</i> &gt; 0: &nbsp;|<i>u</i>| = <i>k</i> &nbsp;⇔&nbsp; <i>u</i> = <i>k</i> or <i>u</i> = −<i>k</i><br><i>k</i> = 0: &nbsp;|<i>u</i>| = 0 &nbsp;⇔&nbsp; <i>u</i> = 0<br><i>k</i> &lt; 0: &nbsp;|<i>u</i>| = <i>k</i> has no solution, solution set ∅</div>
<p>An equation with an absolute value on each side satisfies <span class="m">|<i>u</i>| = |<i>v</i>| ⇔ <i>u</i> = <i>v</i> or <i>u</i> = −<i>v</i></span>.</p>`,
  legend: [
    { c: "c4", sym: `<i>h</i>`, name: "Centre", desc: "The point the distance is measured from. For |ax + b| = c it is x = −b/a." },
    { c: "c3", sym: `<i>k</i>`, name: "Distance", desc: "The required distance from the centre. It must be zero or positive for a solution to exist." },
    { c: "c1", sym: `<i>h</i> ± <i>k</i>`, name: "Solutions", desc: "The points exactly k units to the left and right of the centre, one point if k = 0, none if k &lt; 0." }
  ],
  steps: { title: "How to solve an absolute value equation", items: [
    `Isolate the absolute value: get <span class="m">|<i>u</i>|</span> alone on one side by adding, subtracting, multiplying or dividing.`,
    `Look at the other side <span class="m c3"><i>k</i></span>. If <span class="m"><i>k</i> &lt; 0</span>, stop: there is no solution.`,
    `If <span class="m"><i>k</i> = 0</span>, solve the single equation <span class="m"><i>u</i> = 0</span>.`,
    `If <span class="m"><i>k</i> &gt; 0</span>, write two equations, <span class="m"><i>u</i> = <i>k</i></span> and <span class="m"><i>u</i> = −<i>k</i></span>, and solve each.`,
    `Check each solution in the original equation, and write the solution set.`
  ] },
  example: {
    prompt: `A bolt is specified at 25.00 mm long with a tolerance of 0.04 mm either way. Find the shortest and longest acceptable lengths by solving <span class="m">|<i>L</i> − 25.00| = 0.04</span>.`,
    lines: [
      { math: `<span class="m">|<i>L</i> − <span class="c4">25.00</span>| = <span class="c3">0.04</span></span>`, note: "The distance between L and the target 25.00 equals the tolerance." },
      { math: `<span class="m"><i>L</i> − 25.00 = 0.04 &nbsp; or &nbsp; <i>L</i> − 25.00 = −0.04</span>`, note: "The right side is positive, so split into two equations." },
      { math: `<span class="m"><span class="c1"><i>L</i> = 25.04</span> &nbsp; or &nbsp; <span class="c1"><i>L</i> = 24.96</span></span>`, note: "Add 25.00 to both sides of each." },
      { math: `<span class="m">|25.04 − 25.00| = 0.04 ✓, &nbsp; |24.96 − 25.00| = |−0.04| = 0.04 ✓</span>`, note: "Check both in the original equation." }
    ],
    answer: `The acceptable lengths run from <span class="m">24.96</span> mm to <span class="m">25.04</span> mm, the two solutions of the equation.`
  },
  why: `<p>Absolute value measures size without direction: how far off, how much error, how big a change. Equations like <span class="m">|<i>L</i> − 25| = 0.04</span> find the boundary values of a tolerance, and the same idea gives the edges of a margin of error or the times when a quantity is a given distance from a target.</p>
<p>Solving them trains you to split one condition into cases, a habit used constantly in later math. Absolute value inequalities, piecewise functions, distance formulas and the formal definition of a limit all build on it.</p>`,
  careers: [
    { role: "Machinist", use: "Uses |measured − nominal| = tolerance to find the upper and lower limits a part can be cut to." },
    { role: "Pollster", use: "Finds the ends of a reported range by solving |p − 52| = 3 for a result of 52% with a 3-point margin of error." },
    { role: "Surveyor", use: "Locates both points on a line that lie a given distance from a known marker." },
    { role: "Pharmacist", use: "Determines the extreme acceptable weights of a compounded capsule from its target weight and allowed deviation." },
    { role: "Control engineer", use: "Finds when a system's output is exactly a set error band away from its setpoint." },
    { role: "Air traffic controller", use: "Identifies the two altitudes a set vertical separation above and below another aircraft." }
  ],
  life: [
    "Working out the two temperatures a thermostat allows around its setting",
    "Finding which exits are exactly 10 miles from your current mile marker",
    "Understanding the range behind a poll result with a margin of error",
    "Checking the heaviest and lightest a package can be to meet a stated weight",
    "Finding the two dates that are a week from a deadline"
  ],
  fields: [
    { name: "Engineering", use: "Tolerance limits are found by solving absolute value equations around a nominal dimension." },
    { name: "Statistics", use: "The ends of a margin-of-error interval solve |x − estimate| = margin." },
    { name: "Physics", use: "Absolute value gives the magnitude of a displacement or velocity regardless of direction." }
  ],
  prereqWhy: {
    "a1-multi-step": "Isolating the absolute value and then solving each of the two resulting linear equations uses multi-step equation skills."
  },
  unlocksWhy: {
    "a1-abs-ineq": "The solutions of |u| = k are the boundary points that separate the solutions of |u| &lt; k from those of |u| &gt; k.",
    "a1-piecewise": "The absolute value function is defined piecewise, and solving |u| = k is the same as solving on each piece.",
    "pc-piecewise-abs": "Solving |<i>u</i>| = <i>k</i> by cases is the same split into <i>u</i> ≥ 0 and <i>u</i> &lt; 0 that writes |<i>x</i>| as a piecewise function, which Precalculus then uses to reflect and mirror graphs of |<i>f</i>(<i>x</i>)| and <i>f</i>(|<i>x</i>|)."
  },
  beyond: [
    { field: "Precalculus", why: "Transformations of y = |x| and equations mixing absolute value with other functions use the same case split." },
    { field: "Calculus I", why: "The epsilon-delta definition of a limit is stated with absolute values measuring distance." },
    { field: "Statistics", why: "Absolute deviations from the mean or median measure spread and define error bands." }
  ],
  mistakes: [
    { wrong: `Splitting before isolating: from <span class="m">2|3<i>x</i> − 1| + 4 = 18</span> writing <span class="m">2(3<i>x</i> − 1) + 4 = ±18</span>.`, fix: `Isolate first: <span class="m">2|3<i>x</i> − 1| = 14</span>, so <span class="m">|3<i>x</i> − 1| = 7</span>. Then split: <span class="m">3<i>x</i> − 1 = 7</span> or <span class="m">3<i>x</i> − 1 = −7</span>.` },
    { wrong: `Solving <span class="m">|<i>x</i> − 4| = −7</span> as <span class="m"><i>x</i> − 4 = 7</span> or <span class="m"><i>x</i> − 4 = −7</span>.`, fix: `An absolute value is never negative, so <span class="m">|<i>x</i> − 4| = −7</span> has no solution. Its solution set is <span class="m">∅</span>.` },
    { wrong: `Writing only one equation, <span class="m"><i>u</i> = <i>k</i></span>, and losing the second solution.`, fix: `For <span class="m"><i>k</i> &gt; 0</span> there are two points at distance <span class="m"><i>k</i></span>, so always write both <span class="m"><i>u</i> = <i>k</i></span> and <span class="m"><i>u</i> = −<i>k</i></span>.` }
  ],
  practice: [
    { q: `Solve <span class="m">|<i>x</i> + 3| = 5</span>.`, a: `<span class="m"><i>x</i> + 3 = 5</span> or <span class="m"><i>x</i> + 3 = −5</span>, so <span class="m"><i>x</i> = 2</span> or <span class="m"><i>x</i> = −8</span>. Solution set <span class="m">{−8, 2}</span>.` },
    { q: `Solve <span class="m">2|3<i>x</i> − 1| + 4 = 18</span>.`, a: `<span class="m">|3<i>x</i> − 1| = 7</span>. Then <span class="m">3<i>x</i> − 1 = 7</span> gives <span class="m"><i>x</i> = <span class="fr"><span>8</span><span>3</span></span></span>, and <span class="m">3<i>x</i> − 1 = −7</span> gives <span class="m"><i>x</i> = −2</span>. Solution set <span class="m">{−2, <span class="fr"><span>8</span><span>3</span></span>}</span>.` },
    { q: `Solve <span class="m">|<i>x</i> − 4| + 9 = 2</span>.`, a: `Isolating gives <span class="m">|<i>x</i> − 4| = −7</span>. An absolute value cannot be negative, so there is no solution: <span class="m">∅</span>.` },
    { q: `Solve <span class="m">|2<i>x</i> − 1| = |<i>x</i> + 5|</span>.`, a: `Either <span class="m">2<i>x</i> − 1 = <i>x</i> + 5</span>, giving <span class="m"><i>x</i> = 6</span>, or <span class="m">2<i>x</i> − 1 = −(<i>x</i> + 5)</span>, giving <span class="m">3<i>x</i> = −4</span> and <span class="m"><i>x</i> = −<span class="fr"><span>4</span><span>3</span></span></span>. Check: <span class="m">|11| = |11|</span> and <span class="m">|−<span class="fr"><span>11</span><span>3</span></span>| = |<span class="fr"><span>11</span><span>3</span></span>|</span>.` }
  ],
  origin: `The vertical-bar notation <span class="m">|<i>x</i>|</span> was introduced by the German mathematician Karl Weierstrass in 1841.`
};
