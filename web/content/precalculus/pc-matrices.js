window.ARITH = window.ARITH || {};
ARITH["pc-matrices"] = {
  title: `Matrices & Matrix Operations`,
  short: `Sizes, sums, scalar multiples and row-by-column products`,
  grade: `Grade 12 · college Precalculus`,
  hours: 5,
  voice: `plain`,
  eyebrow: `Systems and matrices · matrix algebra`,
  hero: `<span class="m"><span class="mat c2"><table><tr><td>1</td><td>2</td></tr><tr><td>3</td><td>4</td></tr></table></span><span class="mat c3"><table><tr><td>2</td><td>0</td></tr><tr><td>1</td><td>3</td></tr></table></span> = <span class="mat c5"><table><tr><td>4</td><td>6</td></tr><tr><td>10</td><td>12</td></tr></table></span> &nbsp; but &nbsp; <span class="mat c3"><table><tr><td>2</td><td>0</td></tr><tr><td>1</td><td>3</td></tr></table></span><span class="mat c2"><table><tr><td>1</td><td>2</td></tr><tr><td>3</td><td>4</td></tr></table></span> = <span class="mat"><table><tr><td>2</td><td>4</td></tr><tr><td>10</td><td>14</td></tr></table></span></span>`,
  lede: `A <b>matrix</b> is a rectangular array of numbers arranged in rows and columns. Matrices of the same size add entry by entry, and the product of two matrices is built from dot products of the rows of the first with the columns of the second.`,
  plain: `<p>A table of numbers with <span class="m"><i>m</i></span> rows and <span class="m"><i>n</i></span> columns is a matrix of size <span class="m"><span class="c4"><i>m</i> × <i>n</i></span></span>, read "m by n". Every number in it has an address: the entry in row <span class="m"><i>i</i></span> and column <span class="m"><i>j</i></span> is written <span class="m"><i>a</i><sub><i>i</i><i>j</i></sub></span>. Two matrices are equal only when they have the same size and every pair of matching entries agree.</p>
<p>Adding two matrices of the same size is done entry by entry, and so is subtracting. Multiplying a matrix by a single number, a <b>scalar</b>, multiplies every entry by that number.</p>
<p>Multiplying two matrices works differently. To get the entry in row <span class="m"><i>i</i></span>, column <span class="m"><i>j</i></span> of <span class="m"><i>A</i><i>B</i></span>, run along row <span class="m"><i>i</i></span> of <span class="m"><span class="c2"><i>A</i></span></span> and down column <span class="m"><i>j</i></span> of <span class="m"><span class="c3"><i>B</i></span></span>, multiply the matching pairs and add. That only works when a row of <span class="m"><i>A</i></span> is as long as a column of <span class="m"><i>B</i></span>: the number of columns of <span class="m"><i>A</i></span> must equal the number of rows of <span class="m"><i>B</i></span>.</p>
<p>Because rows of the first factor meet columns of the second, order matters. <span class="m"><i>A</i><i>B</i></span> and <span class="m"><i>B</i><i>A</i></span> are usually different, and one of them may not exist at all.</p>`,
  formal: `<p>An <b><i>m</i> × <i>n</i> matrix</b> <span class="m"><i>A</i> = [<i>a</i><sub><i>i</i><i>j</i></sub>]</span> has <span class="m"><i>m</i></span> rows and <span class="m"><i>n</i></span> columns; <span class="m"><i>a</i><sub><i>i</i><i>j</i></sub></span> is the <b>entry</b> in row <span class="m"><i>i</i></span>, column <span class="m"><i>j</i></span>. If <span class="m"><i>A</i></span> and <span class="m"><i>B</i></span> are both <span class="m"><i>m</i> × <i>n</i></span>, then <span class="m"><i>A</i> ± <i>B</i> = [<i>a</i><sub><i>i</i><i>j</i></sub> ± <i>b</i><sub><i>i</i><i>j</i></sub>]</span> and, for a scalar <span class="m"><i>c</i></span>, <span class="m"><i>c</i><i>A</i> = [<i>c</i><i>a</i><sub><i>i</i><i>j</i></sub>]</span>.</p>
<p>If <span class="m"><i>A</i></span> is <span class="m"><span class="c4"><i>m</i> × <i>n</i></span></span> and <span class="m"><i>B</i></span> is <span class="m"><span class="c4"><i>n</i> × <i>p</i></span></span>, the <b>product</b> <span class="m"><i>A</i><i>B</i></span> is the <span class="m"><span class="c4"><i>m</i> × <i>p</i></span></span> matrix with entries</p>
<div class="display"><span class="c5">(<i>A</i><i>B</i>)<sub><i>i</i><i>j</i></sub></span> = <span class="c2"><i>a</i><sub><i>i</i>1</sub></span><span class="c3"><i>b</i><sub>1<i>j</i></sub></span> + <span class="c2"><i>a</i><sub><i>i</i>2</sub></span><span class="c3"><i>b</i><sub>2<i>j</i></sub></span> + ⋯ + <span class="c2"><i>a</i><sub><i>i</i><i>n</i></sub></span><span class="c3"><i>b</i><sub><i>n</i><i>j</i></sub></span></div>
<p>When the number of columns of <span class="m"><i>A</i></span> differs from the number of rows of <span class="m"><i>B</i></span>, <span class="m"><i>A</i><i>B</i></span> is <b>undefined</b>. The <b>identity matrix</b> <span class="m"><i>I</i><sub><i>n</i></sub></span> has 1s on the main diagonal and 0s elsewhere, and <span class="m"><i>A</i><i>I</i><sub><i>n</i></sub> = <i>I</i><sub><i>m</i></sub><i>A</i> = <i>A</i></span>. Multiplication is associative, <span class="m">(<i>A</i><i>B</i>)<i>C</i> = <i>A</i>(<i>B</i><i>C</i>)</span>, and distributes over addition, <span class="m"><i>A</i>(<i>B</i> + <i>C</i>) = <i>A</i><i>B</i> + <i>A</i><i>C</i></span>, but it is not commutative:</p>
<div class="display"><span class="mat c2"><table><tr><td>1</td><td>2</td></tr><tr><td>3</td><td>4</td></tr></table></span><span class="mat c3"><table><tr><td>2</td><td>0</td></tr><tr><td>1</td><td>3</td></tr></table></span> = <span class="mat"><table><tr><td>4</td><td>6</td></tr><tr><td>10</td><td>12</td></tr></table></span> &nbsp;≠&nbsp; <span class="mat"><table><tr><td>2</td><td>4</td></tr><tr><td>10</td><td>14</td></tr></table></span> = <span class="mat c3"><table><tr><td>2</td><td>0</td></tr><tr><td>1</td><td>3</td></tr></table></span><span class="mat c2"><table><tr><td>1</td><td>2</td></tr><tr><td>3</td><td>4</td></tr></table></span></div>`,
  legend: [
    {
      c: `c2`,
      sym: `<span class="m"><i>A</i></span>`,
      name: `Matrix A`,
      desc: `The left factor. Row <span class="m"><i>i</i></span> of <span class="m"><i>A</i></span> gives the first number of each pair in a dot product.`
    },
    {
      c: `c3`,
      sym: `<span class="m"><i>B</i></span>`,
      name: `Matrix B`,
      desc: `The right factor. Column <span class="m"><i>j</i></span> of <span class="m"><i>B</i></span> gives the second number of each pair.`
    },
    {
      c: `c4`,
      sym: `<span class="m"><i>m</i> × <i>n</i></span>`,
      name: `Dimensions`,
      desc: `Rows by columns. For <span class="m"><i>A</i><i>B</i></span> the inner sizes must agree; the outer sizes give the size of <span class="m"><i>A</i><i>B</i></span>.`
    },
    {
      c: `c5`,
      sym: `<span class="m">(<i>A</i><i>B</i>)<sub><i>i</i><i>j</i></sub></span>`,
      name: `Product entry`,
      desc: `Row <span class="m"><i>i</i></span> of <span class="m"><i>A</i></span> times column <span class="m"><i>j</i></span> of <span class="m"><i>B</i></span>: multiply matching pairs and add.`
    }
  ],
  steps: {
    title: `How to multiply two matrices`,
    items: [
      `Write the sizes side by side, <span class="m">(<i>m</i> × <i>n</i>)(<i>n</i> × <i>p</i>)</span>. If the inner numbers differ, stop: the product is undefined.`,
      `The outer numbers give the size of the answer, <span class="m"><i>m</i> × <i>p</i></span>.`,
      `For the entry in row <span class="m"><i>i</i></span>, column <span class="m"><i>j</i></span>, take row <span class="m"><i>i</i></span> of <span class="m"><i>A</i></span> and column <span class="m"><i>j</i></span> of <span class="m"><i>B</i></span>.`,
      `Multiply first with first, second with second, and so on, then add the products.`,
      `Repeat for every row of <span class="m"><i>A</i></span> with every column of <span class="m"><i>B</i></span>.`
    ]
  },
  example: {
    prompt: `Find <span class="m"><i>A</i><i>B</i></span> for <span class="m"><span class="c2"><i>A</i></span> = <span class="mat c2"><table><tr><td>2</td><td>−1</td><td>0</td></tr><tr><td>1</td><td>3</td><td>4</td></tr></table></span></span> and <span class="m"><span class="c3"><i>B</i></span> = <span class="mat c3"><table><tr><td>1</td><td>2</td></tr><tr><td>0</td><td>−1</td></tr><tr><td>3</td><td>1</td></tr></table></span></span>. Is <span class="m"><i>B</i><i>A</i></span> equal to <span class="m"><i>A</i><i>B</i></span>?`,
    lines: [
      {
        math: `<span class="m"><span class="c4">(2 × 3)(3 × 2)</span> → <span class="c4">2 × 2</span></span>`,
        note: `The inner sizes 3 and 3 agree, so AB exists. It has 2 rows and 2 columns.`
      },
      {
        math: `<span class="m"><span class="c5">(<i>A</i><i>B</i>)<sub>11</sub></span> = 2·1 + (−1)·0 + 0·3 = <span class="c5">2</span></span>`,
        note: `Row 1 of A with column 1 of B.`
      },
      {
        math: `<span class="m"><span class="c5">(<i>A</i><i>B</i>)<sub>12</sub></span> = 2·2 + (−1)(−1) + 0·1 = <span class="c5">5</span></span>`,
        note: `Row 1 of A with column 2 of B.`
      },
      {
        math: `<span class="m"><span class="c5">(<i>A</i><i>B</i>)<sub>21</sub></span> = 1·1 + 3·0 + 4·3 = <span class="c5">13</span></span>`,
        note: `Row 2 of A with column 1 of B.`
      },
      {
        math: `<span class="m"><span class="c5">(<i>A</i><i>B</i>)<sub>22</sub></span> = 1·2 + 3(−1) + 4·1 = <span class="c5">3</span></span>`,
        note: `Row 2 of A with column 2 of B.`
      },
      {
        math: `<span class="m"><span class="c4">(3 × 2)(2 × 3)</span> → <span class="c4">3 × 3</span></span>`,
        note: `BA also exists, but it is 3 by 3, so it cannot equal the 2 by 2 matrix AB.`
      }
    ],
    answer: `<span class="m"><i>A</i><i>B</i> = <span class="mat c5"><table><tr><td>2</td><td>5</td></tr><tr><td>13</td><td>3</td></tr></table></span></span>. The product <span class="m"><i>B</i><i>A</i> = <span class="mat"><table><tr><td>4</td><td>5</td><td>8</td></tr><tr><td>−1</td><td>−3</td><td>−4</td></tr><tr><td>7</td><td>0</td><td>4</td></tr></table></span></span> is 3 × 3, so <span class="m"><i>A</i><i>B</i> ≠ <i>B</i><i>A</i></span>.`
  },
  why: `<p>A matrix is how a computer stores anything that comes as a table: pixel colours, survey answers, prices and quantities, the coefficients of a linear system. One product <span class="m"><i>A</i><i>B</i></span> packs thousands of multiply-and-add steps into a single well-defined operation, which is why graphics cards and machine-learning chips are built to multiply matrices quickly.</p>
<p>The row-by-column rule is chosen so that a product describes doing one linear process after another. That choice makes matrices the common language of linear systems, transformations of the plane, and data.</p>`,
  careers: [
    {
      role: `Data scientist`,
      use: `Stores a data set as a matrix with one row per record and one column per feature, and multiplies it by weight vectors to score every record at once.`
    },
    {
      role: `Machine learning engineer`,
      use: `Runs each layer of a neural network as a matrix of weights times a matrix of inputs.`
    },
    {
      role: `Graphics programmer`,
      use: `Combines rotations, scalings and camera moves into one matrix product applied to every vertex of a 3D model.`
    },
    {
      role: `Economist`,
      use: `Uses Leontief input-output matrices to find how much each industry must produce to meet final demand.`
    },
    {
      role: `Supply chain analyst`,
      use: `Multiplies an order matrix by a price-and-cost matrix to get revenue and cost for every store and week.`
    },
    {
      role: `Structural engineer`,
      use: `Assembles a stiffness matrix for a truss and multiplies it by joint displacements to get the forces.`
    }
  ],
  life: [
    `Totalling a week of café orders against a price list in a spreadsheet`,
    `Converting quantities of ingredients for several recipes into total cost and calories`,
    `Reading a sports league table as rows of teams and columns of results`,
    `Photo filters that mix the red, green and blue channels of every pixel`,
    `Seating charts and timetables stored as rows and columns`
  ],
  fields: [
    {
      name: `Linear algebra`,
      use: `Matrices represent linear maps; multiplication is composition of maps.`
    },
    {
      name: `Statistics`,
      use: `Data matrices, covariance matrices and least-squares regression.`
    },
    {
      name: `Computer science`,
      use: `Images, graphs (adjacency matrices) and fast matrix multiplication algorithms.`
    },
    {
      name: `Economics`,
      use: `Input-output models and price-quantity tables.`
    }
  ],
  prereqWhy: {
    "a2-sys-three": `The coefficients of a system in three variables already form a 3 × 3 array. A matrix treats that array as one object, and the left side of the system becomes a matrix times the column of unknowns.`
  },
  unlocksWhy: {
    "pc-gaussian": `Elimination becomes row operations on the augmented matrix: the same sums and scalar multiples you do here, applied to whole rows at a time.`,
    "pc-matrix-transform": `A 2 × 2 matrix times a column <span class="m">(<i>x</i>, <i>y</i>)</span> moves the points of the plane, and the product of two matrices is one move followed by the other.`
  },
  beyond: [
    {
      field: `Linear Algebra`,
      why: `Matrix products as compositions of linear maps, rank, eigenvalues and diagonalization.`
    },
    {
      field: `Computer graphics`,
      why: `Every frame multiplies thousands of vertices by model, view and projection matrices.`
    },
    {
      field: `Data science`,
      why: `Data sets are matrices; regression, principal components and neural networks are matrix products.`
    },
    {
      field: `Economics/Operations research`,
      why: `Input-output models and linear programs are written and solved in matrix form.`
    }
  ],
  mistakes: [
    {
      wrong: `Multiplying matching entries: <span class="m"><span class="mat"><table><tr><td>1</td><td>2</td></tr><tr><td>3</td><td>4</td></tr></table></span><span class="mat"><table><tr><td>2</td><td>0</td></tr><tr><td>1</td><td>3</td></tr></table></span> = <span class="mat"><table><tr><td>2</td><td>0</td></tr><tr><td>3</td><td>12</td></tr></table></span></span>.`,
      fix: `That entrywise product is not <span class="m"><i>A</i><i>B</i></span>. Each entry of <span class="m"><i>A</i><i>B</i></span> is a row of <span class="m"><i>A</i></span> times a column of <span class="m"><i>B</i></span>; here <span class="m"><i>A</i><i>B</i> = <span class="mat"><table><tr><td>4</td><td>6</td></tr><tr><td>10</td><td>12</td></tr></table></span></span>.`
    },
    {
      wrong: `Assuming <span class="m"><i>A</i><i>B</i> = <i>B</i><i>A</i></span>, for example rewriting <span class="m">(<i>A</i> + <i>B</i>)<sup>2</sup></span> as <span class="m"><i>A</i><sup>2</sup> + 2<i>A</i><i>B</i> + <i>B</i><sup>2</sup></span>.`,
      fix: `Order matters: <span class="m">(<i>A</i> + <i>B</i>)<sup>2</sup> = <i>A</i><sup>2</sup> + <i>A</i><i>B</i> + <i>B</i><i>A</i> + <i>B</i><sup>2</sup></span>, and <span class="m"><i>A</i><i>B</i></span> and <span class="m"><i>B</i><i>A</i></span> are usually different.`
    },
    {
      wrong: `Adding a 2 × 3 matrix to a 3 × 2 matrix.`,
      fix: `Sums and differences need matrices of exactly the same size; otherwise they are undefined.`
    },
    {
      wrong: `Reading a 2 × 3 matrix as 2 columns and 3 rows.`,
      fix: `The size is always rows first, then columns: a 2 × 3 matrix has 2 rows of 3 entries.`
    }
  ],
  practice: [
    {
      q: `Let <span class="m"><i>A</i> = <span class="mat"><table><tr><td>3</td><td>−1</td></tr><tr><td>0</td><td>2</td></tr></table></span></span> and <span class="m"><i>B</i> = <span class="mat"><table><tr><td>1</td><td>4</td></tr><tr><td>−2</td><td>5</td></tr></table></span></span>. Find <span class="m">2<i>A</i> − <i>B</i></span>.`,
      a: `<span class="m">2<i>A</i> = <span class="mat"><table><tr><td>6</td><td>−2</td></tr><tr><td>0</td><td>4</td></tr></table></span></span>, so <span class="m">2<i>A</i> − <i>B</i> = <span class="mat"><table><tr><td>5</td><td>−6</td></tr><tr><td>2</td><td>−1</td></tr></table></span></span>.`
    },
    {
      q: `<span class="m"><i>A</i></span> is 2 × 3 and <span class="m"><i>B</i></span> is 3 × 4. Which of <span class="m"><i>A</i><i>B</i></span> and <span class="m"><i>B</i><i>A</i></span> are defined, and what are their sizes?`,
      a: `<span class="m"><i>A</i><i>B</i></span>: <span class="m">(2 × 3)(3 × 4)</span>, inner 3 = 3, so <span class="m"><i>A</i><i>B</i></span> is 2 × 4. <span class="m"><i>B</i><i>A</i></span>: <span class="m">(3 × 4)(2 × 3)</span>, inner 4 ≠ 2, so <span class="m"><i>B</i><i>A</i></span> is undefined.`
    },
    {
      q: `Find <span class="m"><i>A</i><i>B</i></span> and <span class="m"><i>B</i><i>A</i></span> for <span class="m"><i>A</i> = <span class="mat"><table><tr><td>1</td><td>2</td></tr><tr><td>3</td><td>4</td></tr></table></span></span> and <span class="m"><i>B</i> = <span class="mat"><table><tr><td>0</td><td>1</td></tr><tr><td>1</td><td>0</td></tr></table></span></span>. What does <span class="m"><i>B</i></span> do on each side?`,
      a: `<span class="m"><i>A</i><i>B</i> = <span class="mat"><table><tr><td>2</td><td>1</td></tr><tr><td>4</td><td>3</td></tr></table></span></span> (the columns of <span class="m"><i>A</i></span> swapped) and <span class="m"><i>B</i><i>A</i> = <span class="mat"><table><tr><td>3</td><td>4</td></tr><tr><td>1</td><td>2</td></tr></table></span></span> (the rows swapped). They differ.`
    },
    {
      q: `A café sells coffee, muffins and sandwiches. Monday's orders were 10, 4, 6 and Tuesday's 8, 12, 5. Prices are $3, $2, $6 and the café's costs are $1, $1, $3. Use <span class="m"><i>Q</i><i>P</i></span> to find each day's revenue, cost and profit.`,
      a: `<span class="m"><i>Q</i><i>P</i> = <span class="mat"><table><tr><td>10</td><td>4</td><td>6</td></tr><tr><td>8</td><td>12</td><td>5</td></tr></table></span><span class="mat"><table><tr><td>3</td><td>1</td></tr><tr><td>2</td><td>1</td></tr><tr><td>6</td><td>3</td></tr></table></span> = <span class="mat"><table><tr><td>74</td><td>32</td></tr><tr><td>78</td><td>35</td></tr></table></span></span>. Monday: revenue $74, cost $32, profit $42. Tuesday: revenue $78, cost $35, profit $43.`
    }
  ],
  origin: `<p>Arrays of coefficients were used to solve linear systems in the Chinese <i>Nine Chapters on the Mathematical Art</i>, compiled about two thousand years ago. The word <b>matrix</b> was introduced by James Joseph Sylvester in 1850, for a rectangular array from which determinants can be formed. In 1858 Arthur Cayley's <i>A Memoir on the Theory of Matrices</i> treated a matrix as a single object with its own addition and multiplication. He defined the product so that it matches doing one linear substitution after another, and he noted that matrices do not in general commute.</p>`
};
