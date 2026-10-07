window.ARITH = window.ARITH || {};

ARITH["a1-sys-elim"] = {
  title: "Solving Systems by Elimination",
  short: "Scale and add equations so one variable cancels",
  grade: "Grade 9 · college Elementary Algebra",
  hours: 5,
  voice: "plain",
  eyebrow: "Systems of equations · the addition method",
  hero: `<span class="m"><span class="c2">2<i>x</i> + 3<i>y</i> = 12</span> &nbsp;+&nbsp; <span class="c3">4<i>x</i> − 3<i>y</i> = 6</span> &nbsp;⇒&nbsp; 6<i>x</i> = 18 &nbsp;⇒&nbsp; <span class="c5">(3, 2)</span></span>`,
  lede: `If both sides of two true equations are added, the result is still true. Elimination chooses multipliers so that one variable's coefficients become opposites, and adding the equations makes that variable disappear.`,
  plain: `<p>Substitution works well when one equation already says <span class="m"><i>y</i> = …</span>. When both equations are in standard form, such as <span class="m">3<i>x</i> + 2<i>y</i> = 19</span>, solving for a variable brings in fractions. Elimination avoids that.</p>
<p>The idea is simple. Two equal things added to two equal things give equal totals. So you can add the left sides together and the right sides together. If one equation has <span class="m">+3<i>y</i></span> and the other has <span class="m">−3<i>y</i></span>, the <span class="m"><i>y</i></span> terms cancel and you are left with one equation in <span class="m"><i>x</i></span>.</p>
<p>Usually the coefficients do not match at first. You fix that by multiplying one or both equations by a number, which does not change their solutions. Once you know one variable, substitute it back into either original equation to find the other. If both variables cancel, you have a special case: a true statement like <span class="m">0 = 0</span> means infinitely many solutions, and a false one like <span class="m">0 = 7</span> means none.</p>`,
  formal: `<p>For a system of two linear equations in standard form</p>
<div class="display"><span class="c2"><i>a</i><sub>1</sub><i>x</i> + <i>b</i><sub>1</sub><i>y</i> = <i>c</i><sub>1</sub></span><br><span class="c3"><i>a</i><sub>2</sub><i>x</i> + <i>b</i><sub>2</sub><i>y</i> = <i>c</i><sub>2</sub></span></div>
<p>replacing an equation by a nonzero multiple of itself, or by its sum with a multiple of the other equation, produces an <b>equivalent system</b> with the same solution set. Choosing multipliers <span class="m"><i>m</i>, <i>n</i></span> with <span class="m"><i>mb</i><sub>1</sub> + <i>nb</i><sub>2</sub> = 0</span> eliminates <span class="m"><i>y</i></span>. The result is one of three cases:</p>
<div class="display">one equation <i>kx</i> = <i>d</i>, <i>k</i> ≠ 0: &nbsp;one solution <span class="dim">(consistent, independent)</span><br>0 = 0: &nbsp;infinitely many solutions <span class="dim">(consistent, dependent; same line)</span><br>0 = <i>d</i>, <i>d</i> ≠ 0: &nbsp;no solution, ∅ <span class="dim">(inconsistent; parallel lines)</span></div>`,
  legend: [
    { c: "c2", sym: `Eq. 1`, name: "First equation", desc: "The first equation of the system, possibly multiplied by a constant." },
    { c: "c3", sym: `Eq. 2`, name: "Second equation", desc: "The second equation, possibly multiplied by a constant so its coefficients line up with the first." },
    { c: "c1", sym: `±<i>ky</i>`, name: "Eliminated variable", desc: "The variable whose coefficients are made opposites, so it cancels when the equations are added." },
    { c: "c5", sym: `(<i>x</i>, <i>y</i>)`, name: "Solution", desc: "The ordered pair that satisfies both equations, found by solving and then back-substituting." }
  ],
  steps: { title: "How to solve a system by elimination", items: [
    `Write both equations in standard form <span class="m"><i>Ax</i> + <i>By</i> = <i>C</i></span>, with like terms lined up. Clear any fractions or decimals.`,
    `Pick a variable to <span class="c1">eliminate</span>. Multiply one or both equations so its coefficients are opposites, such as <span class="m">6<i>x</i></span> and <span class="m">−6<i>x</i></span>. The least common multiple of the coefficients gives the smallest multipliers.`,
    `Add the equations. The chosen variable cancels.`,
    `Solve the resulting one-variable equation.`,
    `Substitute that value into either original equation to find the other variable.`,
    `Check the <span class="c5">ordered pair</span> in <b>both</b> original equations. If both variables cancelled, state "infinitely many solutions" or "no solution".`
  ] },
  example: {
    prompt: `At a café, 3 lattes and 2 muffins cost $19.00, and 2 lattes and 5 muffins cost $22.75. What does each item cost?`,
    lines: [
      { math: `<span class="m"><span class="c2">3<i>L</i> + 2<i>M</i> = 19</span>, &nbsp; <span class="c3">2<i>L</i> + 5<i>M</i> = 22.75</span></span>`, note: "Let L be the price of a latte and M the price of a muffin, in dollars." },
      { math: `<span class="m"><span class="c2">6<i>L</i> + 4<i>M</i> = 38</span>, &nbsp; <span class="c3">−6<i>L</i> − 15<i>M</i> = −68.25</span></span>`, note: "Multiply the first equation by 2 and the second by −3 so the L terms are opposites." },
      { math: `<span class="m">−11<i>M</i> = −30.25</span>`, note: "Add the equations. The L terms cancel." },
      { math: `<span class="m"><i>M</i> = 2.75</span>`, note: "Divide both sides by −11." },
      { math: `<span class="m">3<i>L</i> + 2(2.75) = 19 &nbsp;⇒&nbsp; 3<i>L</i> = 13.5 &nbsp;⇒&nbsp; <i>L</i> = 4.50</span>`, note: "Back-substitute into the first equation." },
      { math: `<span class="m">2(4.50) + 5(2.75) = 9 + 13.75 = 22.75 ✓</span>`, note: "Check in the second equation." }
    ],
    answer: `A latte costs <span class="m c5">$4.50</span> and a muffin costs <span class="m c5">$2.75</span>.`
  },
  why: `<p>Elimination is the most efficient hand method for systems written in standard form, which is how many real constraints arrive: two purchases with known totals, two mixtures with known amounts, two measurements taken under different conditions. It avoids fractions until the very end and it scales to larger systems.</p>
<p>It is also the seed of Gaussian elimination, the method computers use to solve systems with thousands of unknowns in engineering, economics and data science. The operations you use here, scaling an equation and adding a multiple of one equation to another, are exactly the row operations of linear algebra.</p>`,
  careers: [
    { role: "Structural engineer", use: "Solves force-balance equations at a joint, one for horizontal and one for vertical components, to find the tension in two members." },
    { role: "Electrician", use: "Applies Kirchhoff's laws to a two-loop circuit and eliminates one current to find the other." },
    { role: "Chemist", use: "Balances chemical equations by writing one linear equation per element and eliminating unknown coefficients." },
    { role: "Operations analyst", use: "Solves two production constraints, such as machine hours and labour hours, to find how many of each product use both fully." },
    { role: "Nutritionist", use: "Finds servings of two foods that together meet exact targets for protein and calories." },
    { role: "Data scientist", use: "Relies on elimination-based solvers to fit least-squares regression coefficients from the normal equations." }
  ],
  life: [
    "Working out individual prices from two receipts with the same items in different amounts",
    "Figuring out the entry fee and per-ride price at a fair from two ticket totals",
    "Finding how many coins of each type are in a jar from the count and the total value",
    "Comparing two plans that each combine a monthly fee and a per-use charge",
    "Splitting a shared bill when two people ordered different quantities of the same things"
  ],
  fields: [
    { name: "Linear Algebra", use: "Gaussian elimination on matrices is this method applied systematically to any number of equations." },
    { name: "Physics", use: "Statics and circuit problems produce simultaneous linear equations that are solved by elimination." },
    { name: "Chemistry", use: "Balancing reactions and finding concentrations in mixtures lead to linear systems." },
    { name: "Economics", use: "Market equilibrium from supply and demand equations is found by solving a system." }
  ],
  prereqWhy: {
    "a1-sys-sub": "You need to know what a solution to a system means and how to back-substitute a found value, both learned with substitution."
  },
  unlocksWhy: {
    "a2-sys-three": "Each step of a three-variable system is the two-variable elimination you already know: scale equations so a variable cancels, add, and solve.",
    "a1-sys-apps": "Word problems about mixtures, tickets, interest and motion usually give two equations in standard form, which elimination solves quickly.",
    "pc-linear-programming": "The corner points of a feasible region are found by solving pairs of boundary lines, and elimination is the fastest way to solve each pair."
  },
  beyond: [
    { field: "Linear Algebra", why: "Row reduction of a matrix is elimination written in compact form, and it answers existence and uniqueness questions for any linear system." },
    { field: "Algebra II", why: "Systems of three equations in three variables are solved by eliminating the same variable from two pairs of equations." },
    { field: "Numerical analysis", why: "Computer algorithms such as LU decomposition are organised versions of elimination." }
  ],
  mistakes: [
    { wrong: `Multiplying only the left side of an equation: turning <span class="m">3<i>L</i> + 2<i>M</i> = 19</span> into <span class="m">6<i>L</i> + 4<i>M</i> = 19</span>.`, fix: `Multiply every term, including the constant: <span class="m">6<i>L</i> + 4<i>M</i> = 38</span>.` },
    { wrong: `Adding when the coefficients are equal, not opposite: <span class="m">6<i>x</i> + 4<i>y</i> = 32</span> plus <span class="m">6<i>x</i> − 15<i>y</i> = 66</span> gives <span class="m">12<i>x</i> − 11<i>y</i> = 98</span>, and nothing cancels.`, fix: `Subtract the equations instead, or multiply one by a negative first so the coefficients are opposites.` },
    { wrong: `Reaching <span class="m">0 = 0</span> and reporting the solution as <span class="m">(0, 0)</span>.`, fix: `<span class="m">0 = 0</span> means the equations describe the same line, so there are infinitely many solutions. <span class="m">0 = 5</span> would mean no solution.` }
  ],
  practice: [
    { q: `Solve <span class="m"><i>x</i> + <i>y</i> = 10</span>, <span class="m"><i>x</i> − <i>y</i> = 4</span>.`, a: `Add: <span class="m">2<i>x</i> = 14</span>, so <span class="m"><i>x</i> = 7</span>. Then <span class="m">7 + <i>y</i> = 10</span>, <span class="m"><i>y</i> = 3</span>. Solution <span class="m">(7, 3)</span>.` },
    { q: `Solve <span class="m">3<i>x</i> + 2<i>y</i> = 16</span>, <span class="m">5<i>x</i> − 4<i>y</i> = −10</span>.`, a: `Multiply the first by 2: <span class="m">6<i>x</i> + 4<i>y</i> = 32</span>. Add: <span class="m">11<i>x</i> = 22</span>, <span class="m"><i>x</i> = 2</span>. Then <span class="m">6 + 2<i>y</i> = 16</span>, <span class="m"><i>y</i> = 5</span>. Solution <span class="m">(2, 5)</span>. Check: <span class="m">10 − 20 = −10</span>.` },
    { q: `Solve <span class="m">2<i>x</i> − 3<i>y</i> = 5</span>, <span class="m">−4<i>x</i> + 6<i>y</i> = −10</span>.`, a: `Multiply the first by 2: <span class="m">4<i>x</i> − 6<i>y</i> = 10</span>. Add: <span class="m">0 = 0</span>. The equations are the same line, so there are infinitely many solutions: <span class="m">{(<i>x</i>, <i>y</i>) | 2<i>x</i> − 3<i>y</i> = 5}</span>.` },
    { q: `Solve <span class="m">3<i>x</i> + 4<i>y</i> = 10</span>, <span class="m">2<i>x</i> − 5<i>y</i> = 22</span>.`, a: `Multiply by 2 and by −3: <span class="m">6<i>x</i> + 8<i>y</i> = 20</span> and <span class="m">−6<i>x</i> + 15<i>y</i> = −66</span>. Add: <span class="m">23<i>y</i> = −46</span>, <span class="m"><i>y</i> = −2</span>. Then <span class="m">3<i>x</i> − 8 = 10</span>, <span class="m"><i>x</i> = 6</span>. Solution <span class="m">(6, −2)</span>. Check: <span class="m">12 + 10 = 22</span>.` }
  ],
  origin: `Chapter 8 of the Chinese <i>Nine Chapters on the Mathematical Art</i>, compiled by about the 1st century CE, solves systems of linear equations with counting rods laid out in columns, eliminating unknowns by repeatedly subtracting multiples of one column from another. Carl Friedrich Gauss used the same method in the early 1800s, which is why its general form is now called Gaussian elimination.`
};
