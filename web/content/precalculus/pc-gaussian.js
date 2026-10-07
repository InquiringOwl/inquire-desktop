window.ARITH = window.ARITH || {};
ARITH["pc-gaussian"] = {
  title: `Gaussian & Gauss–Jordan Elimination`,
  short: `Row operations on the augmented matrix, REF and RREF`,
  grade: `Grade 12 · college Precalculus`,
  hours: 6,
  voice: `plain`,
  eyebrow: `Systems and matrices · row reduction`,
  hero: `<span class="m"><span class="mat"><table><tr><td class="c1">1</td><td class="bar">2</td><td>5</td></tr><tr><td>3</td><td class="bar">−1</td><td>1</td></tr></table></span> → <span class="mat"><table><tr><td>1</td><td class="bar">0</td><td>1</td></tr><tr><td>0</td><td class="bar">1</td><td>2</td></tr></table></span> &nbsp;⇒&nbsp; <span class="c5">(1, 2)</span></span>`,
  lede: `A linear system can be written as one <b>augmented matrix</b>: the coefficients, a bar, then the constants. Three <b>row operations</b> that never change the solution set turn it into a staircase form you can read the solution from.`,
  plain: `<p>Elimination on equations wastes ink: the letters <span class="m"><i>x</i>, <i>y</i>, <i>z</i></span> and the equals signs are copied at every step. Keep only the numbers. Each equation becomes a row, each variable a column, and the constants sit to the right of a bar. That table is the augmented matrix.</p>
<p>The moves you already make on equations become moves on rows. You may swap two rows, multiply a row by a number that is not zero, or add a multiple of one row to another. None of them changes which <span class="m">(<i>x</i>, <i>y</i>, <i>z</i>)</span> satisfy the system.</p>
<p>Use them to make a staircase. In the first column, get a 1 at the top (the <b>pivot</b>) and zeros below it. Move one row down and one column right and repeat. That is <b>Gaussian elimination</b>, and the last row now names one variable. Back-substitute upward. If you keep going and also clear the entries above each pivot, every row names one variable directly: that is <b>Gauss–Jordan elimination</b>.</p>
<p>The staircase also tells you how many solutions there are. A row that reads <span class="m">0 = 1</span> means no solution. A column with no pivot means a free variable and infinitely many solutions.</p>`,
  formal: `<p>The system <span class="m"><i>A</i><b>x</b> = <b>b</b></span> has augmented matrix <span class="m">[<i>A</i> | <b>b</b>]</span>. The <b>elementary row operations</b> are: interchange two rows <span class="m"><i>R</i><sub>i</sub> ↔ <i>R</i><sub>j</sub></span>; multiply a row by a nonzero constant <span class="m"><i>R</i><sub>i</sub> → <i>c</i><i>R</i><sub>i</sub></span>; add a multiple of one row to another <span class="m"><i>R</i><sub>i</sub> → <i>R</i><sub>i</sub> + <i>c</i><i>R</i><sub>j</sub></span>. Each is reversible, so row-equivalent matrices describe systems with the same solution set.</p>
<p>A matrix is in <b>row-echelon form</b> (REF) when any zero rows are at the bottom, the first nonzero entry of each other row is a 1 (a <b>leading 1</b>), and each leading 1 lies to the right of the one above it. It is in <b>reduced row-echelon form</b> (RREF) when, in addition, each leading 1 is the only nonzero entry in its column. Every matrix has exactly one RREF.</p>
<p>Reading the result: a row <span class="m">[0 ⋯ 0 | <i>c</i>]</span> with <span class="m"><i>c</i> ≠ 0</span> makes the system <b>inconsistent</b> (no solution). Otherwise it is <b>consistent</b>; if every variable column has a pivot the solution is unique, and if some column has none the system is <b>dependent</b>, that variable is free, and the solution set is written with a parameter. For example</p>
<div class="display"><span class="mat"><table><tr><td>1</td><td>0</td><td class="bar">−1</td><td>1</td></tr><tr><td>0</td><td>1</td><td class="bar">2</td><td>2</td></tr><tr><td>0</td><td>0</td><td class="bar">0</td><td>0</td></tr></table></span> &nbsp;⇒&nbsp; <span class="c5">(<i>x</i>, <i>y</i>, <i>z</i>) = (1 + <i>t</i>, 2 − 2<i>t</i>, <i>t</i>)</span>, <i>t</i> ∈ ℝ</div>
<p>is the RREF of <span class="m"><i>x</i> − <i>z</i> = 1</span>, <span class="m"><i>y</i> + 2<i>z</i> = 2</span>, <span class="m"><i>x</i> + <i>y</i> + <i>z</i> = 3</span>.</p>`,
  legend: [
    {
      c: `c1`,
      sym: `<span class="m">1</span>`,
      name: `Pivot`,
      desc: `The leading 1 of the current row. It is used to clear its column.`
    },
    {
      c: `c2`,
      sym: `<span class="m"><i>R</i><sub>j</sub></span>`,
      name: `Row being used`,
      desc: `The pivot row, multiplied and added to another row.`
    },
    {
      c: `c3`,
      sym: `<span class="m"><i>R</i><sub>i</sub></span>`,
      name: `Row being changed`,
      desc: `The row that receives <span class="m"><i>R</i><sub>i</sub> + <i>c</i><i>R</i><sub>j</sub></span>, is scaled or swapped.`
    },
    {
      c: `c4`,
      sym: `<span class="m">|</span>`,
      name: `Augment bar`,
      desc: `Separates the coefficients from the constants on the right.`
    },
    {
      c: `c5`,
      sym: `<span class="m">(<i>x</i>, <i>y</i>, <i>z</i>)</span>`,
      name: `Solution`,
      desc: `One point, no solution, or a family with a parameter.`
    }
  ],
  steps: {
    title: `How to solve a system by Gaussian elimination`,
    items: [
      `Write each equation in standard form, variables in the same order, and form the augmented matrix <span class="m">[<i>A</i> | <b>b</b>]</span>.`,
      `In the first column, swap or scale so the top entry is 1. This is the pivot.`,
      `Clear every entry below the pivot with <span class="m"><i>R</i><sub>i</sub> → <i>R</i><sub>i</sub> − <i>a</i><i>R</i><sub>1</sub></span>, where <span class="m"><i>a</i></span> is the entry being cleared.`,
      `Move one row down and one column right and repeat until the matrix is in row-echelon form.`,
      `Read the last nonzero row. A row <span class="m">[0 0 0 | c]</span> with <span class="m">c ≠ 0</span> means no solution; a column without a pivot means a free variable.`,
      `Back-substitute from the bottom up, or keep clearing above each pivot (Gauss–Jordan) and read the solution off the RREF.`
    ]
  },
  example: {
    prompt: `Solve <span class="m"><i>x</i> + 2<i>y</i> + <i>z</i> = 1</span>, <span class="m">2<i>x</i> + 3<i>y</i> − <i>z</i> = −3</span>, <span class="m">3<i>x</i> − <i>y</i> + 2<i>z</i> = 8</span> by Gaussian elimination.`,
    lines: [
      {
        math: `<span class="m"><span class="mat"><table><tr><td class="c1">1</td><td>2</td><td class="bar">1</td><td>1</td></tr><tr><td>2</td><td>3</td><td class="bar">−1</td><td>−3</td></tr><tr><td>3</td><td>−1</td><td class="bar">2</td><td>8</td></tr></table></span></span>`,
        note: `The augmented matrix. The 1 in the top-left corner is already a pivot.`
      },
      {
        math: `<span class="m"><span class="c3"><i>R</i><sub>2</sub> → <i>R</i><sub>2</sub> − 2<i>R</i><sub>1</sub></span>, <span class="c3"><i>R</i><sub>3</sub> → <i>R</i><sub>3</sub> − 3<i>R</i><sub>1</sub></span>: &nbsp;<span class="mat"><table><tr><td>1</td><td>2</td><td class="bar">1</td><td>1</td></tr><tr><td class="c3">0</td><td class="c3">−1</td><td class="c3 bar">−3</td><td class="c3">−5</td></tr><tr><td class="c3">0</td><td class="c3">−7</td><td class="c3 bar">−1</td><td class="c3">5</td></tr></table></span></span>`,
        note: `Clear the first column below the pivot, using row 1.`
      },
      {
        math: `<span class="m"><span class="c3"><i>R</i><sub>2</sub> → −<i>R</i><sub>2</sub></span>: &nbsp;<span class="mat"><table><tr><td>1</td><td>2</td><td class="bar">1</td><td>1</td></tr><tr><td class="c3">0</td><td class="c1">1</td><td class="c3 bar">3</td><td class="c3">5</td></tr><tr><td>0</td><td>−7</td><td class="bar">−1</td><td>5</td></tr></table></span></span>`,
        note: `Make the second pivot a 1.`
      },
      {
        math: `<span class="m"><span class="c3"><i>R</i><sub>3</sub> → <i>R</i><sub>3</sub> + 7<i>R</i><sub>2</sub></span>: &nbsp;<span class="mat"><table><tr><td>1</td><td>2</td><td class="bar">1</td><td>1</td></tr><tr><td>0</td><td>1</td><td class="bar">3</td><td>5</td></tr><tr><td class="c3">0</td><td class="c3">0</td><td class="c3 bar">20</td><td class="c3">40</td></tr></table></span></span>`,
        note: `Clear below the second pivot, using row 2.`
      },
      {
        math: `<span class="m"><span class="c3"><i>R</i><sub>3</sub> → <span class="fr"><span>1</span><span>20</span></span><i>R</i><sub>3</sub></span>: &nbsp;<span class="mat"><table><tr><td>1</td><td>2</td><td class="bar">1</td><td>1</td></tr><tr><td>0</td><td>1</td><td class="bar">3</td><td>5</td></tr><tr><td>0</td><td>0</td><td class="c1 bar">1</td><td>2</td></tr></table></span></span>`,
        note: `Row-echelon form: a staircase of leading 1s.`
      },
      {
        math: `<span class="m"><i>z</i> = 2, &nbsp; <i>y</i> = 5 − 3·2 = −1, &nbsp; <i>x</i> = 1 − 2(−1) − 2 = 1</span>`,
        note: `Back-substitute from the bottom row up.`
      }
    ],
    answer: `The system is consistent with the unique solution <span class="m"><span class="c5">(<i>x</i>, <i>y</i>, <i>z</i>) = (1, −1, 2)</span></span>. Check: <span class="m">3(1) − (−1) + 2(2) = 8</span>.`
  },
  why: `<p>Elimination by rows is the method computers actually use. It solves a system of a thousand equations the same way it solves three, it needs no cleverness about which variable to remove, and it reports at the end whether there is one solution, none or infinitely many. Circuit simulators, structural analysis programs and spreadsheet solvers all run some version of it.</p>
<p>It also turns word problems into routine work: mixtures, investments split among accounts, or a parabola <span class="m"><i>y</i> = <i>a</i><i>x</i><sup>2</sup> + <i>b</i><i>x</i> + <i>c</i></span> through three points all become one augmented matrix and the same row operations.</p>`,
  careers: [
    {
      role: `Electrical engineer`,
      use: `Row reduces the node equations of a circuit to find every voltage and current at once.`
    },
    {
      role: `Structural engineer`,
      use: `Solves the equilibrium equations of a truss, one equation per joint and direction.`
    },
    {
      role: `Numerical analyst`,
      use: `Writes the elimination routines with partial pivoting that scientific software relies on.`
    },
    {
      role: `Chemical engineer`,
      use: `Solves material-balance systems for the flows through a chain of mixers and separators.`
    },
    {
      role: `Financial analyst`,
      use: `Splits an investment among several accounts to meet targets for total amount, return and risk.`
    },
    {
      role: `Computer graphics developer`,
      use: `Fits curves through control points by solving the linear system for their coefficients.`
    }
  ],
  life: [
    `Working out the price of each item from several receipts with the same items`,
    `Mixing two or three solutions to get a required volume and strength`,
    `Splitting savings among accounts to reach a target yearly interest`,
    `Balancing a chemical equation by solving for the coefficients`,
    `Finding the parabola that passes through three measured points`
  ],
  fields: [
    {
      name: `Linear algebra`,
      use: `Rank, null space and the structure of solution sets come from the RREF.`
    },
    {
      name: `Numerical analysis`,
      use: `LU factorisation is Gaussian elimination stored for reuse; pivoting controls round-off.`
    },
    {
      name: `Chemistry`,
      use: `Balancing reactions and solving equilibrium mixtures.`
    },
    {
      name: `Economics`,
      use: `Equilibrium prices and quantities in multi-market models.`
    }
  ],
  prereqWhy: {
    "pc-matrices": `Each row operation is a scalar multiple of a row or a sum of rows, and the augmented matrix is the matrix of coefficients with the constants attached.`
  },
  unlocksWhy: {
    "pc-partial-fractions": `Finding the constants of a partial fraction decomposition means solving a linear system, which you set up and row reduce here.`,
    "pc-determinants": `Each row operation changes the determinant in a known way (swap: sign; scale: factor; add: no change), so row reduction is how large determinants are computed.`
  },
  beyond: [
    {
      field: `Linear Algebra`,
      why: `RREF gives rank, bases for the column and null spaces, and the inverse of a matrix by reducing [A | I].`
    },
    {
      field: `Engineering`,
      why: `Finite-element and circuit programs solve huge sparse systems by elimination.`
    },
    {
      field: `Economics/Operations research`,
      why: `The simplex method for linear programs moves between solutions with row operations.`
    },
    {
      field: `Differential Equations`,
      why: `Systems of linear equations for the constants appear in every initial-value problem with several conditions.`
    }
  ],
  mistakes: [
    {
      wrong: `Changing only the coefficients: <span class="m"><i>R</i><sub>2</sub> → <i>R</i><sub>2</sub> − 2<i>R</i><sub>1</sub></span> applied to the left of the bar but not to the constant.`,
      fix: `A row is a whole equation. Apply every operation to every entry of the row, including the one after the bar.`
    },
    {
      wrong: `Writing <span class="m"><i>R</i><sub>2</sub> → 2<i>R</i><sub>1</sub> − <i>R</i><sub>2</sub></span> and then replacing <span class="m"><i>R</i><sub>1</sub></span>.`,
      fix: `In <span class="m"><i>R</i><sub>i</sub> → <i>R</i><sub>i</sub> + <i>c</i><i>R</i><sub>j</sub></span> only row <span class="m"><i>i</i></span> changes; the row you use stays as it was.`
    },
    {
      wrong: `Reading a zero row <span class="m">[0 0 0 | 0]</span> as "no solution".`,
      fix: `A zero row is the true statement <span class="m">0 = 0</span>: it signals a free variable. Only <span class="m">[0 0 0 | c]</span> with <span class="m">c ≠ 0</span> means no solution.`
    },
    {
      wrong: `Multiplying a row by 0 to clear it.`,
      fix: `Scaling by 0 destroys an equation and is not a row operation. Use a multiple of another row instead.`
    }
  ],
  practice: [
    {
      q: `Solve by row reduction: <span class="m"><i>x</i> + 2<i>y</i> = 5</span>, <span class="m">3<i>x</i> − <i>y</i> = 1</span>.`,
      a: `<span class="m"><i>R</i><sub>2</sub> → <i>R</i><sub>2</sub> − 3<i>R</i><sub>1</sub></span>: <span class="m"><span class="mat"><table><tr><td>1</td><td class="bar">2</td><td>5</td></tr><tr><td>0</td><td class="bar">−7</td><td>−14</td></tr></table></span></span>, so <span class="m"><i>y</i> = 2</span> and <span class="m"><i>x</i> = 5 − 4 = 1</span>. Solution <span class="m">(1, 2)</span>.`
    },
    {
      q: `Solve <span class="m"><i>x</i> + <i>y</i> = 3</span>, <span class="m">2<i>x</i> + 2<i>y</i> = 7</span>.`,
      a: `<span class="m"><i>R</i><sub>2</sub> → <i>R</i><sub>2</sub> − 2<i>R</i><sub>1</sub></span> gives <span class="m"><span class="mat"><table><tr><td>1</td><td class="bar">1</td><td>3</td></tr><tr><td>0</td><td class="bar">0</td><td>1</td></tr></table></span></span>. The row <span class="m">0 = 1</span> is false: the system is inconsistent, no solution (parallel lines).`
    },
    {
      q: `Solve <span class="m"><i>x</i> + <i>y</i> + <i>z</i> = 3</span>, <span class="m"><i>y</i> − <i>z</i> = −1</span>, <span class="m">2<i>x</i> + <i>y</i> + 3<i>z</i> = 7</span>.`,
      a: `<span class="m"><i>R</i><sub>3</sub> → <i>R</i><sub>3</sub> − 2<i>R</i><sub>1</sub></span>, then <span class="m"><i>R</i><sub>3</sub> → <i>R</i><sub>3</sub> + <i>R</i><sub>2</sub></span> gives a zero row; <span class="m"><i>R</i><sub>1</sub> → <i>R</i><sub>1</sub> − <i>R</i><sub>2</sub></span> gives <span class="m"><span class="mat"><table><tr><td>1</td><td>0</td><td class="bar">2</td><td>4</td></tr><tr><td>0</td><td>1</td><td class="bar">−1</td><td>−1</td></tr><tr><td>0</td><td>0</td><td class="bar">0</td><td>0</td></tr></table></span></span>. With <span class="m"><i>z</i> = <i>t</i></span>: <span class="m">(4 − 2<i>t</i>, −1 + <i>t</i>, <i>t</i>)</span>, infinitely many solutions.`
    },
    {
      q: `Find the parabola <span class="m"><i>y</i> = <i>a</i><i>x</i><sup>2</sup> + <i>b</i><i>x</i> + <i>c</i></span> through <span class="m">(1, 2)</span>, <span class="m">(2, 3)</span> and <span class="m">(−1, 6)</span>.`,
      a: `<span class="m"><i>a</i> + <i>b</i> + <i>c</i> = 2</span>, <span class="m">4<i>a</i> + 2<i>b</i> + <i>c</i> = 3</span>, <span class="m"><i>a</i> − <i>b</i> + <i>c</i> = 6</span>. <span class="m"><i>R</i><sub>1</sub> − <i>R</i><sub>3</sub></span>: <span class="m">2<i>b</i> = −4</span>, <span class="m"><i>b</i> = −2</span>; then <span class="m">3<i>a</i> = 3</span>, <span class="m"><i>a</i> = 1</span>, <span class="m"><i>c</i> = 3</span>. So <span class="m"><i>y</i> = <i>x</i><sup>2</sup> − 2<i>x</i> + 3</span>.`
    }
  ],
  origin: `<p>The method is old. The eighth chapter of the Chinese <i>Nine Chapters on the Mathematical Art</i> (compiled by about the first century AD) sets out the coefficients of a system as an array of counting rods and clears them column by column, exactly as row reduction does. In Europe, Carl Friedrich Gauss used systematic elimination around 1809 to solve the normal equations of least squares when computing the orbit of the asteroid Pallas, and the method took his name. Wilhelm Jordan, a German geodesist, described the variant that also clears above each pivot in the 1888 edition of his <i>Handbook of Surveying</i>; it is now called Gauss–Jordan elimination.</p>`
};
