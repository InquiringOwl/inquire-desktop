window.ARITH = window.ARITH || {};
ARITH["pc-rotation"] = {
  title: "Rotation of Axes & the Discriminant",
  short: "Classify Ax² + Bxy + Cy² + … = 0 and turn away the xy-term",
  grade: "Grade 12 · college Precalculus",
  hours: 5,
  voice: "plain",
  eyebrow: "Analytic geometry · general second-degree equation",
  hero: `<span class="m"><span class="c5"><i>B</i><sup>2</sup> − 4<i>A</i><i>C</i></span>, &nbsp; cot 2<span class="c1"><i>θ</i></span> = <span class="fr"><span><i>A</i> − <i>C</i></span><span><i>B</i></span></span></span>`,
  lede: `The <b>general second-degree equation</b> <span class="m"><i>A</i><i>x</i><sup>2</sup> + <i>B</i><i>x</i><i>y</i> + <i>C</i><i>y</i><sup>2</sup> + <i>D</i><i>x</i> + <i>E</i><i>y</i> + <i>F</i> = 0</span> is a conic whose axes may be tilted. The <b>discriminant</b> <span class="m"><i>B</i><sup>2</sup> − 4<i>A</i><i>C</i></span> names the conic at once, and turning the axes through the right angle <span class="m"><i>θ</i></span> removes the <span class="m"><i>x</i><i>y</i></span>-term.`,
  plain: `<p>In Algebra II every conic had its axes parallel to the <span class="m"><i>x</i></span>- and <span class="m"><i>y</i></span>-axes, and its equation had no <span class="m"><i>x</i><i>y</i></span>-term. Turn the same ellipse a little and an <span class="m"><i>x</i><i>y</i></span>-term appears. That term is the sign of a tilt.</p>
<p>You can still tell what the curve is without drawing it. Work out <span class="m"><i>B</i><sup>2</sup> − 4<i>A</i><i>C</i></span>. Negative means an ellipse, zero a parabola, positive a hyperbola. Turning the curve never changes this number.</p>
<p>To see the curve in its own standard form, lay new axes <span class="m"><i>x</i>′</span> and <span class="m"><i>y</i>′</span> along its own axes. One angle does it, found from <span class="m">cot 2<i>θ</i> = (<i>A</i> − <i>C</i>)/<i>B</i></span>. Rewrite <span class="m"><i>x</i></span> and <span class="m"><i>y</i></span> in terms of <span class="m"><i>x</i>′</span> and <span class="m"><i>y</i>′</span>, and the cross term cancels.</p>`,
  formal: `<p>For <span class="m"><i>A</i><i>x</i><sup>2</sup> + <i>B</i><i>x</i><i>y</i> + <i>C</i><i>y</i><sup>2</sup> + <i>D</i><i>x</i> + <i>E</i><i>y</i> + <i>F</i> = 0</span> with <span class="m"><i>A</i>, <i>B</i>, <i>C</i></span> not all zero, if the graph is a non-degenerate conic it is</p>
<div class="display">an ellipse (or circle) if <i>B</i><sup>2</sup> − 4<i>A</i><i>C</i> &lt; 0, &nbsp; a parabola if <i>B</i><sup>2</sup> − 4<i>A</i><i>C</i> = 0, &nbsp; a hyperbola if <i>B</i><sup>2</sup> − 4<i>A</i><i>C</i> &gt; 0.</div>
<p>The <b>degenerate</b> cases are a point or no points (in place of an ellipse), two parallel lines, one line or no points (parabola), and two crossing lines (hyperbola); for example <span class="m"><i>x</i><sup>2</sup> − <i>y</i><sup>2</sup> = 0</span> is the pair of lines <span class="m"><i>y</i> = ±<i>x</i></span>.</p>
<p><b>Rotation of axes</b> through an angle <span class="m"><i>θ</i></span> uses <span class="m"><i>x</i> = <i>x</i>′cos <i>θ</i> − <i>y</i>′sin <i>θ</i></span>, <span class="m"><i>y</i> = <i>x</i>′sin <i>θ</i> + <i>y</i>′cos <i>θ</i></span>. The new coefficients are</p>
<div class="display"><i>A</i>′ = <i>A</i> cos<sup>2</sup> <i>θ</i> + <i>B</i> sin <i>θ</i> cos <i>θ</i> + <i>C</i> sin<sup>2</sup> <i>θ</i>, &nbsp; <i>C</i>′ = <i>A</i> sin<sup>2</sup> <i>θ</i> − <i>B</i> sin <i>θ</i> cos <i>θ</i> + <i>C</i> cos<sup>2</sup> <i>θ</i><br><i>B</i>′ = <i>B</i> cos 2<i>θ</i> + (<i>C</i> − <i>A</i>) sin 2<i>θ</i>, &nbsp; <i>D</i>′ = <i>D</i> cos <i>θ</i> + <i>E</i> sin <i>θ</i>, &nbsp; <i>E</i>′ = −<i>D</i> sin <i>θ</i> + <i>E</i> cos <i>θ</i>, &nbsp; <i>F</i>′ = <i>F</i></div>
<p>If <span class="m"><i>B</i> ≠ 0</span>, choosing <span class="m"><i>θ</i></span> in <span class="m">(0, π/2)</span> with <span class="m">cot 2<i>θ</i> = (<i>A</i> − <i>C</i>)/<i>B</i></span> makes <span class="m"><i>B</i>′ = 0</span>. The quantities <span class="m"><i>B</i><sup>2</sup> − 4<i>A</i><i>C</i></span> and <span class="m"><i>A</i> + <i>C</i></span> are <b>invariant</b>: <span class="m"><i>B</i>′<sup>2</sup> − 4<i>A</i>′<i>C</i>′ = <i>B</i><sup>2</sup> − 4<i>A</i><i>C</i></span> for every <span class="m"><i>θ</i></span>, which is why the discriminant classifies the tilted curve.</p>`,
  legend: [
    { c: "c1", sym: `<i>θ</i>`, name: "Rotation angle", desc: `From the <span class="m"><i>x</i></span>-axis to the <span class="m"><i>x</i>′</span>-axis, counterclockwise.` },
    { c: "c2", sym: `<i>x</i>′`, name: "New x′-axis", desc: `Lies along an axis of the conic once <span class="m"><i>B</i>′ = 0</span>.` },
    { c: "c3", sym: `<i>y</i>′`, name: "New y′-axis", desc: `Perpendicular to <span class="m"><i>x</i>′</span>, turned by the same <span class="m"><i>θ</i></span>.` },
    { c: "c4", sym: `<i>x</i>, <i>y</i>`, name: "Original axes", desc: `The axes of the given equation.` },
    { c: "c5", sym: `<i>B</i><sup>2</sup> − 4<i>A</i><i>C</i>`, name: "Discriminant and type", desc: `Its sign names the conic; it does not change under rotation.` }
  ],
  steps: {
    title: "How to classify and remove the xy-term",
    items: [
      `Read <span class="m"><i>A</i>, <i>B</i>, <i>C</i></span> and compute <span class="m"><i>B</i><sup>2</sup> − 4<i>A</i><i>C</i></span> to name the conic.`,
      `If <span class="m"><i>B</i> ≠ 0</span>, compute <span class="m">cot 2<i>θ</i> = (<i>A</i> − <i>C</i>)/<i>B</i></span>. If it is 0, then <span class="m"><i>θ</i> = 45°</span>.`,
      `Otherwise draw a right triangle for <span class="m">2<i>θ</i></span> (in quadrant I if the cotangent is positive, quadrant II if negative) to get <span class="m">cos 2<i>θ</i></span>.`,
      `Use the half-angle formulas <span class="m">cos <i>θ</i> = √<span class="ov">(1 + cos 2<i>θ</i>)/2</span></span>, <span class="m">sin <i>θ</i> = √<span class="ov">(1 − cos 2<i>θ</i>)/2</span></span>.`,
      `Substitute <span class="m"><i>x</i> = <i>x</i>′cos <i>θ</i> − <i>y</i>′sin <i>θ</i></span>, <span class="m"><i>y</i> = <i>x</i>′sin <i>θ</i> + <i>y</i>′cos <i>θ</i></span>, simplify, and write the result in standard form.`
    ]
  },
  example: {
    prompt: `Identify <span class="m">8<i>x</i><sup>2</sup> − 12<i>x</i><i>y</i> + 17<i>y</i><sup>2</sup> = 20</span>, find the angle that removes the <span class="m"><i>x</i><i>y</i></span>-term, and write the equation in <span class="m"><i>x</i>′<i>y</i>′</span>-coordinates.`,
    lines: [
      { math: `<span class="m"><span class="c5"><i>B</i><sup>2</sup> − 4<i>A</i><i>C</i> = 144 − 544 = −400 &lt; 0</span></span>`, note: "Negative: an ellipse." },
      { math: `<span class="m">cot 2<span class="c1"><i>θ</i></span> = <span class="fr"><span>8 − 17</span><span>−12</span></span> = <span class="fr"><span>3</span><span>4</span></span> ⇒ cos 2<i>θ</i> = <span class="fr"><span>3</span><span>5</span></span></span>`, note: "2θ is in quadrant I, on a 3-4-5 triangle." },
      { math: `<span class="m">cos <i>θ</i> = √<span class="ov"><span class="fr"><span>1 + 3/5</span><span>2</span></span></span> = <span class="fr"><span>2</span><span>√5</span></span>, &nbsp; sin <i>θ</i> = √<span class="ov"><span class="fr"><span>1 − 3/5</span><span>2</span></span></span> = <span class="fr"><span>1</span><span>√5</span></span></span>`, note: "Half-angle formulas; θ ≈ 26.57°." },
      { math: `<span class="m"><i>x</i> = <span class="fr"><span>2<i>x</i>′ − <i>y</i>′</span><span>√5</span></span>, &nbsp; <i>y</i> = <span class="fr"><span><i>x</i>′ + 2<i>y</i>′</span><span>√5</span></span></span>`, note: "The rotation formulas with these values." },
      { math: `<span class="m"><i>A</i>′ = <span class="fr"><span>32 − 24 + 17</span><span>5</span></span> = 5, &nbsp; <i>C</i>′ = <span class="fr"><span>8 + 24 + 68</span><span>5</span></span> = 20, &nbsp; <i>B</i>′ = 0</span>`, note: "A′ = A cos²θ + B sinθ cosθ + C sin²θ, and C′ likewise." },
      { math: `<span class="m">5<i>x</i>′<sup>2</sup> + 20<i>y</i>′<sup>2</sup> = 20 ⇒ <span class="fr"><span><i>x</i>′<sup>2</sup></span><span>4</span></span> + <i>y</i>′<sup>2</sup> = 1</span>`, note: "Check the invariant: −4·5·20 = −400." }
    ],
    answer: `An ellipse. Rotating the axes by <span class="m"><i>θ</i> = ½ cot<sup>−1</sup>(<span class="fr"><span>3</span><span>4</span></span>) ≈ 26.57°</span> (<span class="m">cos <i>θ</i> = 2/√5</span>) gives <span class="m"><span class="fr"><span><i>x</i>′<sup>2</sup></span><span>4</span></span> + <i>y</i>′<sup>2</sup> = 1</span>: semi-axes 2 along <span class="m"><i>x</i>′</span> and 1 along <span class="m"><i>y</i>′</span>.`
  },
  why: `<p>Real data rarely arrive lined up with the axes. The level curves of a quadratic cost, the error ellipse of two correlated measurements and the outline of a tilted part all have an <span class="m"><i>x</i><i>y</i></span>-term. Rotating the axes finds their natural directions, and the discriminant tells you the shape before you draw anything. The same idea, in matrix language, becomes diagonalising a symmetric matrix in linear algebra.</p>`,
  careers: [
    { role: "Data scientist", use: "Rotates to principal axes to read the shape of a correlated two-variable data cloud." },
    { role: "Surveyor", use: "Reports the tilted error ellipse of a position fix and its orientation angle." },
    { role: "Structural engineer", use: "Finds principal stress directions, where the shear term (the cross term) vanishes." },
    { role: "Computer graphics programmer", use: "Classifies and draws implicit quadratic curves and rotated ellipses in vector graphics." },
    { role: "Optimisation analyst", use: "Uses the sign of B² − 4AC to tell a minimum or maximum from a saddle in two variables." },
    { role: "Machinist (CNC)", use: "Converts a tilted elliptical outline into the part's own axes before programming the cut." }
  ],
  life: [
    "The shadow of a tilted dinner plate is an ellipse whose equation has an xy-term",
    "Rotating a photo of an oval changes its equation but not its shape",
    "The graph of y = 1/x is a hyperbola turned 45°",
    "An oval running track drawn on a slant map needs a rotated equation"
  ],
  fields: [
    { name: "Linear algebra", use: "Removing the cross term is diagonalising the symmetric matrix of the quadratic form." },
    { name: "Statistics", use: "Principal component analysis rotates to the axes of the data ellipse." },
    { name: "Mechanics of materials", use: "Mohr's circle and principal stresses use the same double-angle formulas." }
  ],
  prereqWhy: {
    "a2-conic-sections": "There the general equation without an xy-term was classified by A and C; here B joins in through B² − 4AC.",
    "trig-double-half": "cot 2θ gives cos 2θ, and the half-angle formulas turn it into cos θ and sin θ.",
    "pc-matrix-transform": "The rotation formulas are the rotation matrix acting on (x′, y′)."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Linear Algebra", why: "Quadratic forms, symmetric matrices and the principal axis theorem in any dimension." },
    { field: "Calculus III", why: "The second-derivative test uses the discriminant of a quadratic form, and quadric surfaces are classified the same way." },
    { field: "Statistics", why: "Covariance ellipses and principal components." }
  ],
  mistakes: [
    { wrong: `Using <span class="m"><i>A</i><i>C</i></span> alone (as for equations without an <span class="m"><i>x</i><i>y</i></span>-term) to classify.`, fix: `With <span class="m"><i>B</i> ≠ 0</span> use <span class="m"><i>B</i><sup>2</sup> − 4<i>A</i><i>C</i></span>. For example <span class="m"><i>x</i><sup>2</sup> + 4<i>x</i><i>y</i> + <i>y</i><sup>2</sup> = 1</span> has <span class="m"><i>A</i><i>C</i> &gt; 0</span> but <span class="m"><i>B</i><sup>2</sup> − 4<i>A</i><i>C</i> = 12 &gt; 0</span>: a hyperbola.` },
    { wrong: `Taking <span class="m"><i>θ</i> = cot<sup>−1</sup>((<i>A</i> − <i>C</i>)/<i>B</i>)</span>.`, fix: `That is <span class="m">2<i>θ</i></span>. Halve it, or go through <span class="m">cos 2<i>θ</i></span> and the half-angle formulas.` },
    { wrong: `Mixing the signs in the substitution, as <span class="m"><i>x</i> = <i>x</i>′cos <i>θ</i> + <i>y</i>′sin <i>θ</i></span>.`, fix: `<span class="m"><i>x</i> = <i>x</i>′cos <i>θ</i> − <i>y</i>′sin <i>θ</i></span>, <span class="m"><i>y</i> = <i>x</i>′sin <i>θ</i> + <i>y</i>′cos <i>θ</i></span>: the columns of the rotation matrix.` }
  ],
  practice: [
    { q: `Classify: (a) <span class="m">2<i>x</i><sup>2</sup> − 5<i>x</i><i>y</i> + 2<i>y</i><sup>2</sup> + 7 = 0</span>, (b) <span class="m"><i>x</i><sup>2</sup> + 4<i>x</i><i>y</i> + 4<i>y</i><sup>2</sup> + <i>x</i> − 3 = 0</span>, (c) <span class="m">3<i>x</i><sup>2</sup> + 2<i>x</i><i>y</i> + <i>y</i><sup>2</sup> − 5 = 0</span>.`, a: `(a) <span class="m">25 − 16 = 9 &gt; 0</span>, hyperbola. (b) <span class="m">16 − 16 = 0</span>, parabola. (c) <span class="m">4 − 12 = −8 &lt; 0</span>, ellipse. None of the three is degenerate.` },
    { q: `Rotate the axes to remove the <span class="m"><i>x</i><i>y</i></span>-term of <span class="m"><i>x</i><i>y</i> = 8</span>.`, a: `<span class="m"><i>A</i> = <i>C</i> = 0</span>, so <span class="m">cot 2<i>θ</i> = 0</span> and <span class="m"><i>θ</i> = 45°</span>. Then <span class="m"><i>x</i><i>y</i> = (<i>x</i>′<sup>2</sup> − <i>y</i>′<sup>2</sup>)/2 = 8</span>: <span class="m"><span class="fr"><span><i>x</i>′<sup>2</sup></span><span>16</span></span> − <span class="fr"><span><i>y</i>′<sup>2</sup></span><span>16</span></span> = 1</span>, a hyperbola.` },
    { q: `Find <span class="m"><i>θ</i></span> and the rotated equation for <span class="m">13<i>x</i><sup>2</sup> − 6√<span class="ov">3</span><i>x</i><i>y</i> + 7<i>y</i><sup>2</sup> = 16</span>.`, a: `<span class="m">cot 2<i>θ</i> = 6/(−6√<span class="ov">3</span>) = −1/√<span class="ov">3</span></span>, so <span class="m">2<i>θ</i> = 120°</span>, <span class="m"><i>θ</i> = 60°</span>. <span class="m"><i>A</i>′ = 13/4 − 18/4 + 21/4 = 4</span>, <span class="m"><i>C</i>′ = 39/4 + 18/4 + 7/4 = 16</span>: <span class="m">4<i>x</i>′<sup>2</sup> + 16<i>y</i>′<sup>2</sup> = 16</span>, or <span class="m"><span class="fr"><span><i>x</i>′<sup>2</sup></span><span>4</span></span> + <i>y</i>′<sup>2</sup> = 1</span>.` },
    { q: `Rotate <span class="m"><i>x</i><sup>2</sup> − 2<i>x</i><i>y</i> + <i>y</i><sup>2</sup> − √<span class="ov">2</span><i>x</i> − √<span class="ov">2</span><i>y</i> = 0</span> and identify it.`, a: `<span class="m"><i>B</i><sup>2</sup> − 4<i>A</i><i>C</i> = 0</span>: a parabola. <span class="m">cot 2<i>θ</i> = 0</span>, <span class="m"><i>θ</i> = 45°</span>. <span class="m"><i>A</i>′ = 0</span>, <span class="m"><i>C</i>′ = 2</span>, <span class="m"><i>D</i>′ = −√<span class="ov">2</span>·(√<span class="ov">2</span>/2) − √<span class="ov">2</span>·(√<span class="ov">2</span>/2) = −2</span>, <span class="m"><i>E</i>′ = 0</span>: <span class="m">2<i>y</i>′<sup>2</sup> − 2<i>x</i>′ = 0</span>, so <span class="m"><i>x</i>′ = <i>y</i>′<sup>2</sup></span>, a parabola opening along the <span class="m"><i>x</i>′</span>-axis.` }
  ],
  origin: `<p>Leonhard Euler classified the curves of the second order in his <i>Introductio in analysin infinitorum</i> (1748), turning the axes to remove the product term and sorting the curves by the sign of what we now call the discriminant. Joseph-Louis Lagrange later treated quadratic forms in three variables, and in 1829 Augustin-Louis Cauchy proved the general result for any number of variables. This is the principal axis theorem of linear algebra.</p>`
};
