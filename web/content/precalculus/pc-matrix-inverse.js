window.ARITH = window.ARITH || {};
ARITH["pc-matrix-inverse"] = {
  title: "Inverse Matrices & AX = B",
  short: "A⁻¹ by formula or by reducing [A | I]; X = A⁻¹B",
  grade: "Grade 12 · college Precalculus",
  hours: 5,
  voice: "plain",
  eyebrow: "Systems and matrices · inverses",
  hero: `<span class="m"><span class="c2"><span class="mat"><table><tr><td>2</td><td>1</td></tr><tr><td>5</td><td>3</td></tr></table></span></span><sup>−1</sup> = <span class="c3"><span class="mat"><table><tr><td>3</td><td>−1</td></tr><tr><td>−5</td><td>2</td></tr></table></span></span> &nbsp;since&nbsp; <span class="c4">det = 6 − 5 = 1</span></span>`,
  lede: `The <b>inverse</b> of a square matrix <span class="m"><i>A</i></span> is the matrix <span class="m"><i>A</i><sup>−1</sup></span> that undoes it: <span class="m"><i>AA</i><sup>−1</sup> = <i>A</i><sup>−1</sup><i>A</i> = <i>I</i></span>. It exists exactly when <span class="m">det <i>A</i> ≠ 0</span>, and it solves the matrix equation <span class="m"><i>AX</i> = <i>B</i></span> in one multiplication.`,
  plain: `<p>To solve <span class="m">3<i>x</i> = 12</span> you multiply by <span class="m">1/3</span>, the number that undoes 3. Matrices work the same way. A linear system is one matrix equation <span class="m"><i>AX</i> = <i>B</i></span>, and if some matrix undoes <span class="m"><i>A</i></span>, multiplying by it gives <span class="m"><i>X</i></span> directly.</p>
<p>Think of <span class="m"><i>A</i></span> as a move of the plane. The inverse is the move back: <span class="m"><i>A</i></span> takes a point somewhere, <span class="m"><i>A</i><sup>−1</sup></span> returns it. That only works if <span class="m"><i>A</i></span> never sends two points to the same place. A matrix that flattens the plane onto a line (determinant 0) has no way back, and is called <b>singular</b>.</p>
<p>For a 2 × 2 matrix there is a short formula: swap the diagonal entries, change the signs of the other two, and divide by the determinant. For bigger matrices, write <span class="m"><i>A</i></span> and the identity side by side and row reduce. When the left half becomes <span class="m"><i>I</i></span>, the right half is <span class="m"><i>A</i><sup>−1</sup></span>.</p>`,
  formal: `<p>An <span class="m"><i>n</i> × <i>n</i></span> matrix <span class="m"><i>A</i></span> is <b>invertible</b> (nonsingular) if there is a matrix <span class="m"><i>A</i><sup>−1</sup></span> with <span class="m"><i>AA</i><sup>−1</sup> = <i>A</i><sup>−1</sup><i>A</i> = <i>I</i><sub><i>n</i></sub></span>. The inverse is unique, and <span class="m"><i>A</i></span> is invertible if and only if <span class="m">det <i>A</i> ≠ 0</span>. For 2 × 2:</p>
<div class="display"><span class="mat"><table><tr><td><i>a</i></td><td><i>b</i></td></tr><tr><td><i>c</i></td><td><i>d</i></td></tr></table></span><sup>−1</sup> = <span class="fr"><span>1</span><span><i>ad</i> − <i>bc</i></span></span> <span class="mat"><table><tr><td><i>d</i></td><td>−<i>b</i></td></tr><tr><td>−<i>c</i></td><td><i>a</i></td></tr></table></span>, &nbsp; <i>ad</i> − <i>bc</i> ≠ 0</div>
<p>In general, row reduce <span class="m">[<i>A</i> | <i>I</i>]</span>. If it reaches <span class="m">[<i>I</i> | <i>C</i>]</span> then <span class="m"><i>C</i> = <i>A</i><sup>−1</sup></span>; if a zero row appears on the left, <span class="m"><i>A</i></span> is singular. Rules: <span class="m">(<i>A</i><sup>−1</sup>)<sup>−1</sup> = <i>A</i></span>, <span class="m">(<i>AB</i>)<sup>−1</sup> = <i>B</i><sup>−1</sup><i>A</i><sup>−1</sup></span>, <span class="m">det(<i>A</i><sup>−1</sup>) = 1/det <i>A</i></span>. If <span class="m"><i>A</i></span> is invertible, the equation <span class="m"><i>AX</i> = <i>B</i></span> has the unique solution <span class="m"><i>X</i> = <i>A</i><sup>−1</sup><i>B</i></span> (multiply on the left; matrix products do not commute). For example <span class="m"><span class="mat"><table><tr><td>4</td><td>7</td></tr><tr><td>2</td><td>6</td></tr></table></span><sup>−1</sup> = <span class="fr"><span>1</span><span>10</span></span><span class="mat"><table><tr><td>6</td><td>−7</td></tr><tr><td>−2</td><td>4</td></tr></table></span></span>.</p>`,
  legend: [
    { c: "c2", sym: `<span class="m"><i>A</i></span>`, name: "Matrix A", desc: `The matrix to invert. Every entry is a number you can change.` },
    { c: "c3", sym: `<span class="m"><i>A</i><sup>−1</sup></span>`, name: "Identity / inverse", desc: `The right half of <span class="m">[<i>A</i> | <i>I</i>]</span>, which becomes the inverse.` },
    { c: "c1", sym: `<span class="m"><i>R</i><sub>2</sub> → <i>R</i><sub>2</sub> − 2<i>R</i><sub>1</sub></span>`, name: "Row operation", desc: `Each step of the reduction, applied to both halves.` },
    { c: "c4", sym: `<span class="m">det <i>A</i></span>`, name: "Determinant", desc: `Nonzero: the inverse exists. Zero: <span class="m"><i>A</i></span> is singular.` },
    { c: "c5", sym: `<span class="m"><i>X</i> = <i>A</i><sup>−1</sup><i>B</i></span>`, name: "Solution", desc: `The unknowns of <span class="m"><i>AX</i> = <i>B</i></span>.` }
  ],
  steps: {
    title: "How to find an inverse and solve AX = B",
    items: [
      `Check <span class="m">det <i>A</i></span>. If it is 0, <span class="m"><i>A</i></span> has no inverse.`,
      `For 2 × 2, swap <span class="m"><i>a</i></span> and <span class="m"><i>d</i></span>, negate <span class="m"><i>b</i></span> and <span class="m"><i>c</i></span>, and divide every entry by <span class="m"><i>ad</i> − <i>bc</i></span>.`,
      `Otherwise write the augmented matrix <span class="m">[<i>A</i> | <i>I</i>]</span>.`,
      `Row reduce until the left half is <span class="m"><i>I</i></span>, applying every operation to the whole row. The right half is <span class="m"><i>A</i><sup>−1</sup></span>.`,
      `Check one product: <span class="m"><i>AA</i><sup>−1</sup></span> should be <span class="m"><i>I</i></span>.`,
      `To solve <span class="m"><i>AX</i> = <i>B</i></span>, compute <span class="m"><i>X</i> = <i>A</i><sup>−1</sup><i>B</i></span>, with <span class="m"><i>A</i><sup>−1</sup></span> on the left.`
    ]
  },
  example: {
    prompt: `Find <span class="m"><i>A</i><sup>−1</sup></span> for <span class="m"><i>A</i> = <span class="mat"><table><tr><td>2</td><td>3</td></tr><tr><td>1</td><td>2</td></tr></table></span></span> by row reducing <span class="m">[<i>A</i> | <i>I</i>]</span>, then solve <span class="m">2<i>x</i> + 3<i>y</i> = 4</span>, <span class="m"><i>x</i> + 2<i>y</i> = 1</span>.`,
    lines: [
      { math: `<span class="m"><span class="mat"><table><tr><td class="c2">2</td><td class="c2 bar">3</td><td class="c3">1</td><td class="c3">0</td></tr><tr><td class="c2">1</td><td class="c2 bar">2</td><td class="c3">0</td><td class="c3">1</td></tr></table></span></span>`, note: "Write A beside the identity. det A = 4 − 3 = 1, so the inverse exists." },
      { math: `<span class="m"><span class="c1"><i>R</i><sub>1</sub> ↔ <i>R</i><sub>2</sub></span>: <span class="mat"><table><tr><td>1</td><td class="bar">2</td><td>0</td><td>1</td></tr><tr><td>2</td><td class="bar">3</td><td>1</td><td>0</td></tr></table></span></span>`, note: "Bring the row with a leading 1 to the top." },
      { math: `<span class="m"><span class="c1"><i>R</i><sub>2</sub> → <i>R</i><sub>2</sub> − 2<i>R</i><sub>1</sub></span>: <span class="mat"><table><tr><td>1</td><td class="bar">2</td><td>0</td><td>1</td></tr><tr><td>0</td><td class="bar">−1</td><td>1</td><td>−2</td></tr></table></span></span>`, note: "Clear the entry below the first pivot." },
      { math: `<span class="m"><span class="c1"><i>R</i><sub>2</sub> → −<i>R</i><sub>2</sub></span>: <span class="mat"><table><tr><td>1</td><td class="bar">2</td><td>0</td><td>1</td></tr><tr><td>0</td><td class="bar">1</td><td>−1</td><td>2</td></tr></table></span></span>`, note: "Make the second pivot 1." },
      { math: `<span class="m"><span class="c1"><i>R</i><sub>1</sub> → <i>R</i><sub>1</sub> − 2<i>R</i><sub>2</sub></span>: <span class="mat"><table><tr><td>1</td><td class="bar">0</td><td class="c3">2</td><td class="c3">−3</td></tr><tr><td>0</td><td class="bar">1</td><td class="c3">−1</td><td class="c3">2</td></tr></table></span></span>`, note: "Clear above the second pivot. The left half is I, so the right half is the inverse." },
      { math: `<span class="m"><i>X</i> = <span class="c3"><span class="mat"><table><tr><td>2</td><td>−3</td></tr><tr><td>−1</td><td>2</td></tr></table></span></span><span class="mat"><table><tr><td>4</td></tr><tr><td>1</td></tr></table></span> = <span class="mat"><table><tr><td>2·4 + (−3)·1</td></tr><tr><td>(−1)·4 + 2·1</td></tr></table></span> = <span class="c5"><span class="mat"><table><tr><td>5</td></tr><tr><td>−2</td></tr></table></span></span></span>`, note: "The system is AX = B with B = (4, 1), so X = A⁻¹B." }
    ],
    answer: `<span class="m"><i>A</i><sup>−1</sup> = <span class="mat"><table><tr><td>2</td><td>−3</td></tr><tr><td>−1</td><td>2</td></tr></table></span></span> (the 2 × 2 formula agrees, since det A = 1), and <span class="m"><span class="c5">(<i>x</i>, <i>y</i>) = (5, −2)</span></span>. Check: <span class="m">2(5) + 3(−2) = 4</span> and <span class="m">5 + 2(−2) = 1</span>.`
  },
  why: `<p>The inverse turns "solve this system" into "multiply by this matrix". When the same coefficients come with many different right-hand sides, as in a structure tested under different loads or a circuit driven by different sources, one inverse (or its factorisation) answers them all. The inverse also undoes transformations: graphics programs invert camera and object matrices to go from screen coordinates back to the scene.</p>
<p>The idea that a matrix can be undone exactly when its determinant is nonzero ties together everything in this part of the course: row reduction, determinants, and matrices as maps of the plane.</p>`,
  careers: [
    { role: "Computer graphics programmer", use: "Inverts view and model matrices to map a mouse click on the screen back to a point in the 3D scene." },
    { role: "Cryptographer", use: "Studies Hill-type ciphers, where a key matrix encodes blocks of letters and its inverse mod 26 decodes them." },
    { role: "Economist", use: "Uses the Leontief inverse (I − A)⁻¹ to find the total output each industry needs to meet final demand." },
    { role: "Robotics engineer", use: "Inverts transformation matrices to convert between the frames of a robot's joints and its gripper." },
    { role: "Structural engineer", use: "Solves stiffness equations for many load cases with the same coefficient matrix." },
    { role: "Data scientist", use: "Computes least-squares coefficients from the normal equations, which involve the inverse of XᵀX." }
  ],
  life: [
    "Decoding a message that was scrambled with a known rule",
    "Undoing a resize or rotation of a photo to get the original back",
    "Working out how much of each ingredient went into several mixtures",
    "Reversing a currency conversion chain to find the starting amounts"
  ],
  fields: [
    { name: "Linear algebra", use: "The invertible matrix theorem links inverses, determinants, rank and unique solutions." },
    { name: "Economics", use: "Input–output models are solved with the Leontief inverse." },
    { name: "Cryptography", use: "Matrix ciphers encode with a key matrix and decode with its inverse." },
    { name: "Statistics", use: "Regression coefficients come from inverting XᵀX in the normal equations." }
  ],
  prereqWhy: {
    "pc-determinants": "A matrix has an inverse exactly when its determinant is nonzero, and the 2 × 2 inverse divides by ad − bc."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Linear Algebra", why: "Invertibility is equivalent to full rank, independent columns, a nonzero determinant and no zero eigenvalue." },
    { field: "Statistics", why: "Least-squares regression solves the normal equations XᵀXβ = Xᵀy, with β = (XᵀX)⁻¹Xᵀy." },
    { field: "Computer graphics", why: "Inverse transforms map screen positions back into the world and undo camera moves." },
    { field: "Economics", why: "The Leontief inverse gives the total production needed for a given final demand." }
  ],
  mistakes: [
    { wrong: `Writing <span class="m"><i>X</i> = <i>BA</i><sup>−1</sup></span> for <span class="m"><i>AX</i> = <i>B</i></span>.`, fix: `Multiply both sides on the left by <span class="m"><i>A</i><sup>−1</sup></span>: <span class="m"><i>X</i> = <i>A</i><sup>−1</sup><i>B</i></span>. Matrix products do not commute.` },
    { wrong: `Inverting entry by entry: <span class="m"><span class="mat"><table><tr><td>2</td><td>4</td></tr><tr><td>1</td><td>3</td></tr></table></span><sup>−1</sup> = <span class="mat"><table><tr><td>1/2</td><td>1/4</td></tr><tr><td>1</td><td>1/3</td></tr></table></span></span>.`, fix: `The inverse is not made of reciprocals. Use <span class="m">(1/det)[<i>d</i>, −<i>b</i>; −<i>c</i>, <i>a</i>]</span> or row reduce <span class="m">[<i>A</i> | <i>I</i>]</span>.` },
    { wrong: `Swapping <span class="m"><i>b</i></span> and <span class="m"><i>c</i></span> in the 2 × 2 formula instead of negating them.`, fix: `Swap the diagonal entries <span class="m"><i>a</i></span> and <span class="m"><i>d</i></span>; leave <span class="m"><i>b</i></span> and <span class="m"><i>c</i></span> in place and change their signs.` },
    { wrong: `Row reducing only the left half of <span class="m">[<i>A</i> | <i>I</i>]</span>.`, fix: `Every row operation acts on the whole row. The right half records the operations and becomes <span class="m"><i>A</i><sup>−1</sup></span>.` }
  ],
  practice: [
    { q: `Find the inverse of <span class="m"><span class="mat"><table><tr><td>4</td><td>7</td></tr><tr><td>2</td><td>6</td></tr></table></span></span>.`, a: `<span class="m">det = 24 − 14 = 10</span>, so the inverse is <span class="m"><span class="fr"><span>1</span><span>10</span></span><span class="mat"><table><tr><td>6</td><td>−7</td></tr><tr><td>−2</td><td>4</td></tr></table></span> = <span class="mat"><table><tr><td>3/5</td><td>−7/10</td></tr><tr><td>−1/5</td><td>2/5</td></tr></table></span></span>.` },
    { q: `Does <span class="m"><span class="mat"><table><tr><td>2</td><td>4</td></tr><tr><td>3</td><td>6</td></tr></table></span></span> have an inverse?`, a: `No. <span class="m">det = 12 − 12 = 0</span>: the second column is twice the first, so the matrix is singular.` },
    { q: `Find <span class="m"><i>A</i><sup>−1</sup></span> for <span class="m"><i>A</i> = <span class="mat"><table><tr><td>1</td><td>2</td><td>3</td></tr><tr><td>0</td><td>1</td><td>4</td></tr><tr><td>5</td><td>6</td><td>0</td></tr></table></span></span>.`, a: `<span class="m">det <i>A</i> = 1(−24) − 2(−20) + 3(−5) = 1</span>. Row reducing <span class="m">[<i>A</i> | <i>I</i>]</span> gives <span class="m"><i>A</i><sup>−1</sup> = <span class="mat"><table><tr><td>−24</td><td>18</td><td>5</td></tr><tr><td>20</td><td>−15</td><td>−4</td></tr><tr><td>−5</td><td>4</td><td>1</td></tr></table></span></span>; check that <span class="m"><i>AA</i><sup>−1</sup> = <i>I</i></span>.` },
    { q: `A message was coded in pairs with <span class="m"><i>A</i> = <span class="mat"><table><tr><td>1</td><td>2</td></tr><tr><td>1</td><td>3</td></tr></table></span></span> (A = 1, …, Z = 26). Decode the pair <span class="m">(26, 35)</span>.`, a: `<span class="m">det <i>A</i> = 1</span>, <span class="m"><i>A</i><sup>−1</sup> = <span class="mat"><table><tr><td>3</td><td>−2</td></tr><tr><td>−1</td><td>1</td></tr></table></span></span>. <span class="m"><i>A</i><sup>−1</sup>(26, 35) = (78 − 70, −26 + 35) = (8, 9)</span>, the letters H, I: "HI".` }
  ],
  origin: `<p>Arthur Cayley defined the inverse of a matrix in his 1858 "A Memoir on the Theory of Matrices", the paper that first treated matrices as objects you can add, multiply and invert. He wrote the inverse as the matrix of cofactors divided by the determinant, the general form of the 2 × 2 formula. In 1929 Lester Hill published a cipher that encodes blocks of letters with an invertible matrix and decodes them with its inverse, one of the first uses of linear algebra in cryptography.</p>`
};
