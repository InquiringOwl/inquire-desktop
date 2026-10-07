window.ARITH = window.ARITH || {};
ARITH["pc-matrix-transform"] = {
  title: `Matrices as Transformations of the Plane`,
  short: `Columns as images of î and ĵ, rotations, shears, composition`,
  grade: `Grade 12 · college Precalculus`,
  hours: 5,
  voice: `plain`,
  eyebrow: `Systems and matrices · linear transformations`,
  hero: `<span class="m"><span class="mat"><table><tr><td class="c2">2</td><td class="c3">1</td></tr><tr><td class="c2">0</td><td class="c3">3</td></tr></table></span>: &nbsp; <span class="c2"><i>î</i> ↦ (2, 0)</span>, &nbsp;<span class="c3"><i>ĵ</i> ↦ (1, 3)</span>, &nbsp; area × <span class="c5">6</span></span>`,
  lede: `A 2 × 2 matrix moves every point of the plane: <span class="m">(<i>x</i>, <i>y</i>) ↦ (<i>a</i><i>x</i> + <i>b</i><i>y</i>, <i>c</i><i>x</i> + <i>d</i><i>y</i>)</span>. Its two columns are where the unit vectors <span class="m"><i>î</i></span> and <span class="m"><i>ĵ</i></span> land, and that alone decides where everything else goes.`,
  plain: `<p>Write a point as a column <span class="m">(<i>x</i>, <i>y</i>)</span> and multiply it by a 2 × 2 matrix. The answer is another point, so the matrix is a rule that moves the whole plane at once. Lines stay lines, the origin stays put, and a square grid becomes a grid of parallelograms.</p>
<p>The easiest way to read such a matrix is by its columns. The point <span class="m">(1, 0)</span>, called <span class="m"><i>î</i></span>, goes to the first column, and <span class="m">(0, 1)</span>, called <span class="m"><i>ĵ</i></span>, goes to the second. Every other point is <span class="m"><i>x</i><i>î</i> + <i>y</i><i>ĵ</i></span>, so it goes to <span class="m"><i>x</i></span> times the first column plus <span class="m"><i>y</i></span> times the second.</p>
<p>Familiar moves have familiar matrices: turning by an angle (rotation), flipping across a line (reflection), stretching (scaling), sliding layers sideways (shear), flattening onto a line (projection). Doing one move and then another is a single matrix too, the product, and the order of the factors matters.</p>
<p>The unit square becomes a parallelogram whose area is <span class="m">|<i>a</i><i>d</i> − <i>b</i><i>c</i>|</span>. Every region is scaled by that same factor.</p>`,
  formal: `<p>The matrix <span class="m"><i>A</i> = <span class="mat"><table><tr><td class="c2"><i>a</i></td><td class="c3"><i>b</i></td></tr><tr><td class="c2"><i>c</i></td><td class="c3"><i>d</i></td></tr></table></span></span> defines the <b>linear transformation</b> <span class="m"><i>T</i>(<i>x</i>, <i>y</i>) = <i>A</i><span class="mat"><table><tr><td><i>x</i></td></tr><tr><td><i>y</i></td></tr></table></span> = <span class="mat"><table><tr><td><i>ax</i> + <i>by</i></td></tr><tr><td><i>cx</i> + <i>dy</i></td></tr></table></span></span>, with <span class="m"><i>A</i><i>î</i> = <span class="c2">(<i>a</i>, <i>c</i>)</span></span> and <span class="m"><i>A</i><i>ĵ</i> = <span class="c3">(<i>b</i>, <i>d</i>)</span></span>. Standard matrices:</p>
<div class="display">rotation by <i>θ</i>: <span class="mat"><table><tr><td>cos <i>θ</i></td><td>−sin <i>θ</i></td></tr><tr><td>sin <i>θ</i></td><td>cos <i>θ</i></td></tr></table></span> &nbsp; reflection in the <i>x</i>-axis: <span class="mat"><table><tr><td>1</td><td>0</td></tr><tr><td>0</td><td>−1</td></tr></table></span> &nbsp; in <i>y</i> = <i>x</i>: <span class="mat"><table><tr><td>0</td><td>1</td></tr><tr><td>1</td><td>0</td></tr></table></span><br>scaling: <span class="mat"><table><tr><td><i>k</i></td><td>0</td></tr><tr><td>0</td><td><i>m</i></td></tr></table></span> &nbsp; horizontal shear: <span class="mat"><table><tr><td>1</td><td><i>s</i></td></tr><tr><td>0</td><td>1</td></tr></table></span> &nbsp; projection onto the <i>x</i>-axis: <span class="mat"><table><tr><td>1</td><td>0</td></tr><tr><td>0</td><td>0</td></tr></table></span></div>
<p>At <span class="m"><i>θ</i> = π/6</span> the rotation matrix is <span class="m"><span class="mat"><table><tr><td><span class="fr"><span>√<span class="ov">3</span></span><span>2</span></span></td><td>−<span class="fr"><span>1</span><span>2</span></span></td></tr><tr><td><span class="fr"><span>1</span><span>2</span></span></td><td><span class="fr"><span>√<span class="ov">3</span></span><span>2</span></span></td></tr></table></span></span>. Applying <span class="m"><i>A</i></span> and then <span class="m"><i>B</i></span> is the single transformation <span class="m"><i>B</i><i>A</i></span>, since <span class="m"><i>B</i>(<i>A</i><b>v</b>) = (<i>B</i><i>A</i>)<b>v</b></span>. The <b>area scale factor</b> is <span class="m"><span class="c5">|<i>a</i><i>d</i> − <i>b</i><i>c</i>|</span></span>; when <span class="m"><i>a</i><i>d</i> − <i>b</i><i>c</i> < 0</span> the transformation also reverses orientation, and when it is 0 the plane collapses onto a line or a point.</p>`,
  legend: [
    {
      c: `c2`,
      sym: `<span class="m"><i>A</i><i>î</i></span>`,
      name: `Image of î`,
      desc: `The first column <span class="m">(<i>a</i>, <i>c</i>)</span>: where <span class="m">(1, 0)</span> lands.`
    },
    {
      c: `c3`,
      sym: `<span class="m"><i>A</i><i>ĵ</i></span>`,
      name: `Image of ĵ`,
      desc: `The second column <span class="m">(<i>b</i>, <i>d</i>)</span>: where <span class="m">(0, 1)</span> lands.`
    },
    {
      c: `c1`,
      sym: `<span class="m">F</span>`,
      name: `Figure`,
      desc: `A lopsided letter, so turns and flips are easy to tell apart.`
    },
    {
      c: `c4`,
      sym: `<span class="m">□</span>`,
      name: `Unit square`,
      desc: `The square with corners <span class="m">(0, 0)</span>, <span class="m">(1, 0)</span>, <span class="m">(1, 1)</span>, <span class="m">(0, 1)</span>; its image is the parallelogram on the two columns.`
    },
    {
      c: `c5`,
      sym: `<span class="m">|<i>a</i><i>d</i> − <i>b</i><i>c</i>|</span>`,
      name: `Area factor`,
      desc: `How many times larger every area becomes.`
    }
  ],
  steps: {
    title: `How to find and use the matrix of a transformation`,
    items: [
      `Decide where <span class="m"><i>î</i> = (1, 0)</span> goes. Write that point as the first column.`,
      `Decide where <span class="m"><i>ĵ</i> = (0, 1)</span> goes. Write that point as the second column.`,
      `To move a point, multiply: <span class="m">(<i>x</i>, <i>y</i>) ↦ (<i>a</i><i>x</i> + <i>b</i><i>y</i>, <i>c</i><i>x</i> + <i>d</i><i>y</i>)</span>.`,
      `To do <span class="m"><i>A</i></span> first and then <span class="m"><i>B</i></span>, use the single matrix <span class="m"><i>B</i><i>A</i></span>: the first move goes on the right.`,
      `For the area factor, compute <span class="m">|<i>a</i><i>d</i> − <i>b</i><i>c</i>|</span>; a negative <span class="m"><i>a</i><i>d</i> − <i>b</i><i>c</i></span> means the figure is flipped.`
    ]
  },
  example: {
    prompt: `Let <span class="m"><i>R</i></span> rotate the plane 90° counterclockwise and <span class="m"><i>F</i></span> reflect it in the <span class="m"><i>x</i></span>-axis. Find the matrix for "rotate, then reflect", apply it to <span class="m">(3, 1)</span>, and compare with the opposite order.`,
    lines: [
      {
        math: `<span class="m"><i>R</i><i>î</i> = <span class="c2">(0, 1)</span>, <i>R</i><i>ĵ</i> = <span class="c3">(−1, 0)</span> &nbsp;⇒&nbsp; <i>R</i> = <span class="mat"><table><tr><td class="c2">0</td><td class="c3">−1</td></tr><tr><td class="c2">1</td><td class="c3">0</td></tr></table></span></span>`,
        note: `Turning 90° sends (1, 0) to (0, 1) and (0, 1) to (−1, 0).`
      },
      {
        math: `<span class="m"><i>F</i><i>î</i> = <span class="c2">(1, 0)</span>, <i>F</i><i>ĵ</i> = <span class="c3">(0, −1)</span> &nbsp;⇒&nbsp; <i>F</i> = <span class="mat"><table><tr><td class="c2">1</td><td class="c3">0</td></tr><tr><td class="c2">0</td><td class="c3">−1</td></tr></table></span></span>`,
        note: `The reflection keeps (1, 0) and flips (0, 1).`
      },
      {
        math: `<span class="m"><i>F</i><i>R</i> = <span class="mat"><table><tr><td>1</td><td>0</td></tr><tr><td>0</td><td>−1</td></tr></table></span><span class="mat"><table><tr><td>0</td><td>−1</td></tr><tr><td>1</td><td>0</td></tr></table></span> = <span class="mat"><table><tr><td>0</td><td>−1</td></tr><tr><td>−1</td><td>0</td></tr></table></span></span>`,
        note: `Rotate first, so R is the right-hand factor.`
      },
      {
        math: `<span class="m"><i>F</i><i>R</i><span class="mat"><table><tr><td>3</td></tr><tr><td>1</td></tr></table></span> = <span class="mat"><table><tr><td>0·3 + (−1)·1</td></tr><tr><td>(−1)·3 + 0·1</td></tr></table></span> = <span class="c5">(−1, −3)</span></span>`,
        note: `Row by column, as for any product.`
      },
      {
        math: `<span class="m"><i>R</i><i>F</i> = <span class="mat"><table><tr><td>0</td><td>1</td></tr><tr><td>1</td><td>0</td></tr></table></span>, &nbsp; <i>R</i><i>F</i><span class="mat"><table><tr><td>3</td></tr><tr><td>1</td></tr></table></span> = <span class="mat"><table><tr><td>1</td></tr><tr><td>3</td></tr></table></span></span>`,
        note: `Reflect first, then rotate: a different matrix and a different point.`
      }
    ],
    answer: `Rotate then reflect is <span class="m"><i>F</i><i>R</i> = <span class="mat"><table><tr><td>0</td><td>−1</td></tr><tr><td>−1</td><td>0</td></tr></table></span></span>, the reflection in the line <span class="m"><i>y</i> = −<i>x</i></span>; it sends <span class="m">(3, 1)</span> to <span class="m"><span class="c5">(−1, −3)</span></span>. The other order is <span class="m"><i>R</i><i>F</i> = <span class="mat"><table><tr><td>0</td><td>1</td></tr><tr><td>1</td><td>0</td></tr></table></span></span>, the reflection in <span class="m"><i>y</i> = <i>x</i></span>, and gives <span class="m">(1, 3)</span>.`
  },
  why: `<p>Every time a phone rotates a photo, a game turns its camera, or a design program skews a shape, a matrix is multiplying a long list of points. Reading a matrix by its columns makes those programs easy to write: decide where the two unit vectors go, and the whole picture follows.</p>
<p>The same idea runs through the rest of mathematics. Matrices as transformations explain why the product is defined row by column, why <span class="m"><i>A</i><i>B</i> ≠ <i>B</i><i>A</i></span>, what a determinant measures, and how a rotated conic can be turned back to standard position.</p>`,
  careers: [
    {
      role: `Game developer`,
      use: `Builds rotation and scaling matrices for every object and multiplies them into one model matrix per frame.`
    },
    {
      role: `Computer vision engineer`,
      use: `Estimates the matrix that maps one camera image onto another to stitch panoramas.`
    },
    {
      role: `Robotics engineer`,
      use: `Chains rotation matrices joint by joint to find where a robot arm's hand ends up.`
    },
    {
      role: `Animator`,
      use: `Uses shears and scalings on character rigs to squash and stretch a shape in motion.`
    },
    {
      role: `Crystallographer`,
      use: `Describes the symmetries of a crystal lattice as rotation and reflection matrices.`
    },
    {
      role: `Cartographer`,
      use: `Applies affine transformations to register scanned maps onto map coordinates.`
    }
  ],
  life: [
    `Rotating or flipping a photo on a phone`,
    `Italic text, which is ordinary text with a horizontal shear`,
    `A shadow on the ground, a projection of a shape onto a plane`,
    `Zooming a map in one direction only when you stretch a window`,
    `Kaleidoscope and wallpaper patterns built from rotations and reflections`
  ],
  fields: [
    {
      name: `Computer graphics`,
      use: `Model, view and projection transforms are matrix products.`
    },
    {
      name: `Physics`,
      use: `Rotations of coordinate frames and the Lorentz transformations of relativity.`
    },
    {
      name: `Linear algebra`,
      use: `Linear maps, change of basis, eigenvectors as directions a map only stretches.`
    },
    {
      name: `Crystallography`,
      use: `Symmetry groups of lattices written as integer matrices.`
    }
  ],
  prereqWhy: {
    "pc-matrices": `Applying a matrix to a point is a matrix times a column, and composing two transformations is a matrix product.`,
    "trig-unit-circle": `Rotating <span class="m"><i>î</i></span> by <span class="m"><i>θ</i></span> lands on the unit-circle point <span class="m">(cos <i>θ</i>, sin <i>θ</i>)</span>, which is why those values fill the rotation matrix.`
  },
  unlocksWhy: {
    "pc-determinants": `The area factor <span class="m"><i>a</i><i>d</i> − <i>b</i><i>c</i></span> with its sign is the determinant; this page shows it as the area of the image of the unit square.`,
    "pc-rotation": `Rotating the axes by <span class="m"><i>θ</i></span> uses the rotation matrix to rewrite <span class="m"><i>x</i></span> and <span class="m"><i>y</i></span> in terms of <span class="m"><i>x</i>′</span> and <span class="m"><i>y</i>′</span>.`
  },
  beyond: [
    {
      field: `Linear Algebra`,
      why: `Linear maps in any dimension, change of basis, eigenvalues as the stretch factors along special directions.`
    },
    {
      field: `Computer graphics`,
      why: `Homogeneous 3 × 3 and 4 × 4 matrices add translation and perspective to rotation and scaling.`
    },
    {
      field: `Physics (Mechanics, E&M)`,
      why: `Rotating reference frames, the inertia tensor and the Lorentz transformation are all matrices.`
    },
    {
      field: `Calculus III`,
      why: `The Jacobian matrix is the linear transformation that best approximates a curved map near a point.`
    }
  ],
  mistakes: [
    {
      wrong: `Writing the images of <span class="m"><i>î</i></span> and <span class="m"><i>ĵ</i></span> as the rows of the matrix.`,
      fix: `They are the columns. <span class="m"><i>A</i><i>î</i></span> picks out the first column, <span class="m"><i>A</i><i>ĵ</i></span> the second.`
    },
    {
      wrong: `Using <span class="m"><i>A</i><i>B</i></span> for "do <span class="m"><i>A</i></span> first, then <span class="m"><i>B</i></span>".`,
      fix: `The first transformation acts first on the point, so it stands next to it: <span class="m"><i>B</i>(<i>A</i><b>v</b>) = (<i>B</i><i>A</i>)<b>v</b></span>.`
    },
    {
      wrong: `Rotation matrix <span class="m"><span class="mat"><table><tr><td>cos <i>θ</i></td><td>sin <i>θ</i></td></tr><tr><td>−sin <i>θ</i></td><td>cos <i>θ</i></td></tr></table></span></span> for a counterclockwise turn.`,
      fix: `That one turns clockwise. Counterclockwise sends <span class="m"><i>î</i></span> to <span class="m">(cos <i>θ</i>, sin <i>θ</i>)</span>, so the first column is <span class="m">(cos <i>θ</i>, sin <i>θ</i>)</span> and the minus sign is in the top right.`
    }
  ],
  practice: [
    {
      q: `Where does <span class="m"><i>A</i> = <span class="mat"><table><tr><td>2</td><td>1</td></tr><tr><td>0</td><td>3</td></tr></table></span></span> send the point <span class="m">(1, −2)</span>?`,
      a: `<span class="m">(2·1 + 1·(−2), 0·1 + 3·(−2)) = (0, −6)</span>.`
    },
    {
      q: `Find the matrix that sends <span class="m"><i>î</i></span> to <span class="m">(3, 1)</span> and <span class="m"><i>ĵ</i></span> to <span class="m">(−1, 2)</span>, and its area scale factor.`,
      a: `The images are the columns: <span class="m"><span class="mat"><table><tr><td class="c2">3</td><td class="c3">−1</td></tr><tr><td class="c2">1</td><td class="c3">2</td></tr></table></span></span>. Area factor <span class="m">|3·2 − (−1)·1| = 7</span>.`
    },
    {
      q: `Write the exact matrix of the rotation by 60° and find the image of <span class="m">(2, 0)</span>.`,
      a: `<span class="m"><span class="mat"><table><tr><td><span class="fr"><span>1</span><span>2</span></span></td><td>−<span class="fr"><span>√<span class="ov">3</span></span><span>2</span></span></td></tr><tr><td><span class="fr"><span>√<span class="ov">3</span></span><span>2</span></span></td><td><span class="fr"><span>1</span><span>2</span></span></td></tr></table></span></span>; <span class="m">(2, 0) ↦ (2·<span class="fr"><span>1</span><span>2</span></span>, 2·<span class="fr"><span>√<span class="ov">3</span></span><span>2</span></span>) = (1, √<span class="ov">3</span>)</span>.`
    },
    {
      q: `Shear with <span class="m"><i>S</i> = <span class="mat"><table><tr><td>1</td><td>2</td></tr><tr><td>0</td><td>1</td></tr></table></span></span>, then scale with <span class="m"><i>D</i> = <span class="mat"><table><tr><td>3</td><td>0</td></tr><tr><td>0</td><td>1</td></tr></table></span></span>. Find the single matrix and the area of the image of the unit square. Does the other order give the same matrix?`,
      a: `Shear first: <span class="m"><i>D</i><i>S</i> = <span class="mat"><table><tr><td>3</td><td>6</td></tr><tr><td>0</td><td>1</td></tr></table></span></span>, area <span class="m">|3·1 − 6·0| = 3</span>. The other order is <span class="m"><i>S</i><i>D</i> = <span class="mat"><table><tr><td>3</td><td>2</td></tr><tr><td>0</td><td>1</td></tr></table></span></span>: a different matrix with the same area factor 3.`
    }
  ],
  origin: `<p>Carl Friedrich Gauss, in his <i>Disquisitiones Arithmeticae</i> of 1801, studied linear substitutions <span class="m"><i>x</i> = α<i>x</i>′ + β<i>y</i>′</span>, <span class="m"><i>y</i> = γ<i>x</i>′ + δ<i>y</i>′</span> of quadratic forms and worked out the coefficients of one substitution followed by another. Arthur Cayley's 1858 <i>Memoir on the Theory of Matrices</i> took the arrays of coefficients themselves as objects and defined their product so that it gives exactly that composition, which is why the product is computed row by column and why its order matters.</p>`
};
