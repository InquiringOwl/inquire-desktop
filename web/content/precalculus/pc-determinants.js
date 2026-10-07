window.ARITH = window.ARITH || {};
ARITH["pc-determinants"] = {
  title: "Determinants & Cramer's Rule",
  short: "Cofactor expansion, signed area, and Cramer's rule",
  grade: "Grade 12 · college Precalculus",
  hours: 5,
  voice: "plain",
  eyebrow: "Systems and matrices · determinants",
  hero: `<span class="m"><span class="mat det"><table><tr><td class="c2">3</td><td class="c3">1</td></tr><tr><td class="c2">2</td><td class="c3">4</td></tr></table></span> = 3·4 − 1·2 = <span class="c5">10</span></span>`,
  lede: `The <b>determinant</b> of a square matrix is one number built from its entries. It is the signed area (or volume) scale factor of the matrix, it is zero exactly when the matrix has no inverse, and it solves linear systems through <b>Cramer's rule</b>.`,
  plain: `<p>For a 2 × 2 matrix the determinant is a cross product of the diagonals: <span class="m"><i>ad</i> − <i>bc</i></span>. Picture the two columns as arrows from the origin. They span a parallelogram, and its area is the absolute value of <span class="m"><i>ad</i> − <i>bc</i></span>. The sign says which way round the arrows go: positive when the second column is counterclockwise from the first, negative when the matrix flips the plane over.</p>
<p>When the determinant is 0 the parallelogram is flat. The columns lie on one line, the matrix squashes the plane, and nothing can undo it. That is the test for a singular matrix and for a system without a unique solution.</p>
<p>A 3 × 3 determinant is built from 2 × 2 ones. Pick a row or a column. For each entry, cross out its row and column, take the determinant of what is left (the <b>minor</b>), attach a sign from a checkerboard of + and −, and add the three products. Any row or column gives the same number, so pick the one with the most zeros.</p>`,
  formal: `<p>For <span class="m"><i>A</i> = <span class="mat"><table><tr><td class="c2"><i>a</i></td><td class="c3"><i>b</i></td></tr><tr><td class="c2"><i>c</i></td><td class="c3"><i>d</i></td></tr></table></span></span>, &nbsp;<span class="m">det <i>A</i> = <span class="mat det"><table><tr><td><i>a</i></td><td><i>b</i></td></tr><tr><td><i>c</i></td><td><i>d</i></td></tr></table></span> = <i>ad</i> − <i>bc</i></span>. For an <span class="m"><i>n</i> × <i>n</i></span> matrix the <b>minor</b> <span class="m"><i>M</i><sub><i>ij</i></sub></span> is the determinant of the matrix left after deleting row <span class="m"><i>i</i></span> and column <span class="m"><i>j</i></span>, and the <b>cofactor</b> is <span class="m"><i>C</i><sub><i>ij</i></sub> = (−1)<sup><i>i</i>+<i>j</i></sup><i>M</i><sub><i>ij</i></sub></span>. <b>Cofactor expansion</b> along row <span class="m"><i>i</i></span> or column <span class="m"><i>j</i></span>:</p>
<div class="display">det <i>A</i> = <i>a</i><sub><i>i</i>1</sub><i>C</i><sub><i>i</i>1</sub> + <i>a</i><sub><i>i</i>2</sub><i>C</i><sub><i>i</i>2</sub> + ⋯ + <i>a</i><sub><i>in</i></sub><i>C</i><sub><i>in</i></sub> = <i>a</i><sub>1<i>j</i></sub><i>C</i><sub>1<i>j</i></sub> + ⋯ + <i>a</i><sub><i>nj</i></sub><i>C</i><sub><i>nj</i></sub>, &nbsp; signs <span class="mat c4"><table><tr><td>+</td><td>−</td><td>+</td></tr><tr><td>−</td><td>+</td><td>−</td></tr><tr><td>+</td><td>−</td><td>+</td></tr></table></span></div>
<p>Properties: swapping two rows changes the sign; multiplying a row by <span class="m"><i>k</i></span> multiplies det by <span class="m"><i>k</i></span>; adding a multiple of one row to another leaves it unchanged; a zero row, or two equal rows, gives 0; a triangular matrix has det equal to the product of its diagonal; <span class="m">det(<i>AB</i>) = det <i>A</i> · det <i>B</i></span>. <span class="m"><i>A</i></span> is invertible exactly when <span class="m">det <i>A</i> ≠ 0</span>, and <span class="m">|det <i>A</i>|</span> is the factor by which <span class="m"><i>A</i></span> scales areas (volumes for 3 × 3).</p>
<p><b>Cramer's rule</b>: if <span class="m"><i>D</i> = det <i>A</i> ≠ 0</span>, the system <span class="m"><i>A</i><b>x</b> = <b>b</b></span> has the unique solution <span class="m"><i>x</i><sub><i>j</i></sub> = <i>D</i><sub><i>j</i></sub>/<i>D</i></span>, where <span class="m"><i>D</i><sub><i>j</i></sub></span> is the determinant of <span class="m"><i>A</i></span> with column <span class="m"><i>j</i></span> replaced by <span class="m"><b>b</b></span>. The triangle with vertices <span class="m">(<i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>), (<i>x</i><sub>2</sub>, <i>y</i><sub>2</sub>), (<i>x</i><sub>3</sub>, <i>y</i><sub>3</sub>)</span> has area <span class="m">½ |det|</span> of the matrix with rows <span class="m">(<i>x</i><sub><i>k</i></sub>, <i>y</i><sub><i>k</i></sub>, 1)</span>.</p>`,
  legend: [
    { c: "c2", sym: `<span class="m">(<i>a</i>, <i>c</i>)</span>`, name: "Column 1", desc: `The first column, drawn as an arrow whose tip you drag.` },
    { c: "c3", sym: `<span class="m">(<i>b</i>, <i>d</i>)</span>`, name: "Column 2", desc: `The second column, the other side of the parallelogram.` },
    { c: "c1", sym: `<span class="m"><i>M</i><sub><i>ij</i></sub></span>`, name: "Minor", desc: `What is left after crossing out the row and column of an entry.` },
    { c: "c4", sym: `<span class="m">±</span>`, name: "Sign pattern", desc: `The checkerboard <span class="m">(−1)<sup><i>i</i>+<i>j</i></sup></span> attached to each minor.` },
    { c: "c5", sym: `<span class="m">det <i>A</i></span>`, name: "Determinant / solution", desc: `The signed area, the expansion's total, and Cramer's solution.` }
  ],
  steps: {
    title: "How to evaluate a determinant and use Cramer's rule",
    items: [
      `For a 2 × 2 matrix compute <span class="m"><i>ad</i> − <i>bc</i></span>: main diagonal minus the other diagonal.`,
      `For a 3 × 3 matrix choose the row or column with the most zeros.`,
      `For each entry in it, cross out its row and column and find the 2 × 2 minor.`,
      `Attach the checkerboard sign <span class="m">(−1)<sup><i>i</i>+<i>j</i></sup></span>, multiply by the entry, and add the terms.`,
      `For Cramer's rule, find <span class="m"><i>D</i> = det <i>A</i></span>. If <span class="m"><i>D</i> = 0</span>, stop: there is no unique solution.`,
      `Replace column <span class="m"><i>j</i></span> by the constants to get <span class="m"><i>D</i><sub><i>j</i></sub></span>, and divide: <span class="m"><i>x</i><sub><i>j</i></sub> = <i>D</i><sub><i>j</i></sub>/<i>D</i></span>.`
    ]
  },
  example: {
    prompt: `Solve by Cramer's rule: <span class="m"><i>x</i> + <i>y</i> + <i>z</i> = 6</span>, <span class="m">2<i>x</i> − <i>y</i> + <i>z</i> = 3</span>, <span class="m"><i>x</i> + 2<i>y</i> − <i>z</i> = 2</span>.`,
    lines: [
      { math: `<span class="m"><i>D</i> = <span class="mat det"><table><tr><td>1</td><td>1</td><td>1</td></tr><tr><td>2</td><td>−1</td><td>1</td></tr><tr><td>1</td><td>2</td><td>−1</td></tr></table></span> = 1(1 − 2) − 1(−2 − 1) + 1(4 + 1) = <span class="c5">7</span></span>`, note: "Expand along row 1 with signs + − +. D is not 0, so there is exactly one solution." },
      { math: `<span class="m"><i>D</i><sub><i>x</i></sub> = <span class="mat det"><table><tr><td class="c5">6</td><td>1</td><td>1</td></tr><tr><td class="c5">3</td><td>−1</td><td>1</td></tr><tr><td class="c5">2</td><td>2</td><td>−1</td></tr></table></span> = 6(−1) − 1(−5) + 1(8) = 7</span>`, note: "Replace column 1 by the constants 6, 3, 2." },
      { math: `<span class="m"><i>D</i><sub><i>y</i></sub> = <span class="mat det"><table><tr><td>1</td><td class="c5">6</td><td>1</td></tr><tr><td>2</td><td class="c5">3</td><td>1</td></tr><tr><td>1</td><td class="c5">2</td><td>−1</td></tr></table></span> = 1(−5) − 6(−3) + 1(1) = 14</span>`, note: "Replace column 2 by the constants." },
      { math: `<span class="m"><i>D</i><sub><i>z</i></sub> = <span class="mat det"><table><tr><td>1</td><td>1</td><td class="c5">6</td></tr><tr><td>2</td><td>−1</td><td class="c5">3</td></tr><tr><td>1</td><td>2</td><td class="c5">2</td></tr></table></span> = 1(−8) − 1(1) + 6(5) = 21</span>`, note: "Replace column 3 by the constants." },
      { math: `<span class="m"><i>x</i> = 7/7 = 1, &nbsp;<i>y</i> = 14/7 = 2, &nbsp;<i>z</i> = 21/7 = 3</span>`, note: "Each unknown is its own determinant over D." }
    ],
    answer: `<span class="m"><span class="c5">(<i>x</i>, <i>y</i>, <i>z</i>) = (1, 2, 3)</span></span>. Check the third equation: <span class="m">1 + 4 − 3 = 2</span>.`
  },
  why: `<p>The determinant packs the most important facts about a square matrix into one number. Its sign and size tell how the matrix changes area and orientation, and its being zero or not decides whether a system has one solution and whether the matrix can be inverted. In calculus the same number, the Jacobian, rescales areas when you change variables in a double integral, and in physics the cross product and torque are 3 × 3 determinants.</p>
<p>Cramer's rule is rarely the fastest way to solve a big system, but it gives each unknown as an explicit formula, which is exactly what you need when the coefficients are letters rather than numbers.</p>`,
  careers: [
    { role: "Mechanical engineer", use: "Computes torques and moments as cross products, which are 3 × 3 determinants." },
    { role: "Computer graphics programmer", use: "Uses the sign of a 2 × 2 determinant to test which side of an edge a point lies on and whether a triangle faces the camera." },
    { role: "Surveyor", use: "Finds the area of a plot from the coordinates of its corners with the determinant (shoelace) formula." },
    { role: "Robotics engineer", use: "Checks the determinant of a robot arm's Jacobian to detect singular poses where it loses a direction of motion." },
    { role: "Economist", use: "Solves small input–output and market equilibrium models symbolically with Cramer's rule." },
    { role: "Structural engineer", use: "Checks that a stiffness matrix has nonzero determinant, so the structure is not a mechanism." }
  ],
  life: [
    "Working out the area of an irregular plot of land from its corner coordinates",
    "Telling whether three points on a map lie on one straight line",
    "Deciding whether a turn on a route is to the left or to the right",
    "Seeing why a flattened photo can't be stretched back to its original shape"
  ],
  fields: [
    { name: "Linear algebra", use: "Invertibility, eigenvalues (det(A − λI) = 0) and volume all rest on the determinant." },
    { name: "Multivariable calculus", use: "The Jacobian determinant is the area or volume factor in a change of variables." },
    { name: "Physics", use: "Cross products, torque and angular momentum are written as 3 × 3 determinants." },
    { name: "Computational geometry", use: "Orientation and in-circle tests are signs of small determinants." }
  ],
  prereqWhy: {
    "pc-gaussian": "Row operations change the determinant in known ways, and Cramer's rule is an alternative to row reducing the augmented matrix.",
    "pc-matrix-transform": "Reading a matrix as a map of the plane is what makes the determinant the area factor and its sign the orientation."
  },
  unlocksWhy: {
    "pc-matrix-inverse": "A matrix has an inverse exactly when its determinant is nonzero, and the 2 × 2 inverse formula divides by ad − bc."
  },
  beyond: [
    { field: "Linear Algebra", why: "Eigenvalues are the roots of det(A − λI) = 0, and det(AB) = det A · det B organises much of the theory." },
    { field: "Calculus III", why: "Jacobian determinants convert areas and volumes in polar, cylindrical and spherical coordinates." },
    { field: "Physics (Mechanics)", why: "Torque and angular momentum are cross products, written as 3 × 3 determinants." },
    { field: "Computer graphics", why: "Signs of determinants decide orientation, back-face culling and point-in-triangle tests." }
  ],
  mistakes: [
    { wrong: `Computing a 2 × 2 determinant as <span class="m"><i>ad</i> + <i>bc</i></span> or <span class="m"><i>ab</i> − <i>cd</i></span>.`, fix: `It is the main diagonal minus the other diagonal: <span class="m"><i>ad</i> − <i>bc</i></span>.` },
    { wrong: `Forgetting the sign pattern and adding every term of a cofactor expansion.`, fix: `Each minor gets the sign <span class="m">(−1)<sup><i>i</i>+<i>j</i></sup></span>: + − + along row 1, − + − along row 2.` },
    { wrong: `Using Cramer's rule when <span class="m"><i>D</i> = 0</span> and dividing anyway.`, fix: `If <span class="m"><i>D</i> = 0</span> the system has no solution or infinitely many. Row reduce to tell which.` },
    { wrong: `Replacing a row of <span class="m"><i>A</i></span> with the constants to build <span class="m"><i>D</i><sub><i>x</i></sub></span>.`, fix: `Replace the column of the unknown you want, the coefficients of <span class="m"><i>x</i></span> for <span class="m"><i>D</i><sub><i>x</i></sub></span>.` }
  ],
  practice: [
    { q: `Evaluate <span class="m"><span class="mat det"><table><tr><td>5</td><td>−2</td></tr><tr><td>3</td><td>4</td></tr></table></span></span>.`, a: `<span class="m">5 · 4 − (−2)(3) = 20 + 6 = 26</span>.` },
    { q: `Evaluate <span class="m"><span class="mat det"><table><tr><td>2</td><td>0</td><td>1</td></tr><tr><td>3</td><td>0</td><td>−1</td></tr><tr><td>4</td><td>5</td><td>2</td></tr></table></span></span>.`, a: `Expand along column 2, which has two zeros. Only the 5 in position (3, 2) counts, with sign <span class="m">(−1)<sup>5</sup> = −1</span>: <span class="m">−5 · (2(−1) − 1 · 3) = −5(−5) = 25</span>.` },
    { q: `Solve by Cramer's rule: <span class="m">3<i>x</i> + 2<i>y</i> = 7</span>, <span class="m"><i>x</i> − <i>y</i> = −1</span>.`, a: `<span class="m"><i>D</i> = 3(−1) − 2(1) = −5</span>, <span class="m"><i>D</i><sub><i>x</i></sub> = 7(−1) − 2(−1) = −5</span>, <span class="m"><i>D</i><sub><i>y</i></sub> = 3(−1) − 7(1) = −10</span>. So <span class="m"><i>x</i> = 1</span>, <span class="m"><i>y</i> = 2</span>.` },
    { q: `Find the area of the triangle with vertices <span class="m">(1, 1)</span>, <span class="m">(4, 2)</span>, <span class="m">(2, 5)</span>.`, a: `<span class="m">det <span class="mat"><table><tr><td>1</td><td>1</td><td>1</td></tr><tr><td>4</td><td>2</td><td>1</td></tr><tr><td>2</td><td>5</td><td>1</td></tr></table></span> = 1(2 − 5) − 1(4 − 2) + 1(20 − 4) = 11</span>, so the area is <span class="m">½ · |11| = 11/2</span>.` }
  ],
  origin: `<p>Determinants appeared before matrices. Seki Takakazu in Japan described them in 1683 for eliminating unknowns, and Leibniz used the same idea in a 1693 letter to L'Hôpital. Gabriel Cramer published his rule for solving n equations in 1750, in an appendix to his book on algebraic curves. In 1812 Augustin-Louis Cauchy, and Jacques Binet at the same time, proved det(AB) = det A · det B, and Cauchy used the word "determinant" in its modern sense. Arthur Cayley introduced the vertical-bar notation in 1841.</p>`
};
