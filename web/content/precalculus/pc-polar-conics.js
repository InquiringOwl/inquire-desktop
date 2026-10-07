window.ARITH = window.ARITH || {};
ARITH["pc-polar-conics"] = {
  title: "Conics in Polar Coordinates",
  short: "r = ep/(1 ± e cos θ): every conic with a focus at the pole",
  grade: "Grade 12 · college Precalculus",
  hours: 4,
  voice: "plain",
  eyebrow: "Analytic geometry · polar conics",
  hero: `<span class="m"><span class="c3"><i>r</i></span> = <span class="fr"><span><span class="c5"><i>e</i></span><span class="c4"><i>p</i></span></span><span>1 ± <span class="c5"><i>e</i></span> cos <span class="c1"><i>θ</i></span></span></span></span>`,
  lede: `Put the focus of a conic at the pole and its directrix perpendicular to the polar axis. Then <span class="m"><i>PF</i> = <i>e</i> · <i>PD</i></span> becomes one short polar equation that covers ellipses, parabolas and hyperbolas, and it is the equation of every orbit.`,
  plain: `<p>In polar coordinates the distance from the pole to a point is just <span class="m"><i>r</i></span>. So if the focus sits at the pole, the distance <span class="m"><i>PF</i></span> in the focus–directrix rule is <span class="m"><i>r</i></span> itself. That is why conics look so simple in polar form.</p>
<p>Say the directrix is the vertical line <span class="m"><i>p</i></span> units to the right of the focus. A point at angle <span class="m"><i>θ</i></span> and distance <span class="m"><i>r</i></span> sits <span class="m"><i>r</i> cos <i>θ</i></span> to the right of the pole, so its distance to the directrix is <span class="m"><i>p</i> − <i>r</i> cos <i>θ</i></span>. The rule <span class="m"><i>r</i> = <i>e</i>(<i>p</i> − <i>r</i> cos <i>θ</i>)</span> solves to <span class="m"><i>r</i> = <i>e</i><i>p</i>/(1 + <i>e</i> cos <i>θ</i>)</span>.</p>
<p>The other three positions of the directrix (left, above, below) change only the sign or swap cosine for sine. To read an equation, make the constant in the denominator 1; then the coefficient of the trig term is <span class="m"><i>e</i></span>, the numerator is <span class="m"><i>e</i><i>p</i></span>, and the two vertices come from the angles on the axis.</p>`,
  formal: `<p>A conic with eccentricity <span class="m"><i>e</i> &gt; 0</span>, a focus at the pole and its directrix at distance <span class="m"><i>p</i> &gt; 0</span> from the pole has polar equation</p>
<div class="display"><i>r</i> = <span class="fr"><span><i>e</i><i>p</i></span><span>1 + <i>e</i> cos <i>θ</i></span></span> &nbsp;(directrix <i>x</i> = <i>p</i>), &nbsp;&nbsp; <i>r</i> = <span class="fr"><span><i>e</i><i>p</i></span><span>1 − <i>e</i> cos <i>θ</i></span></span> &nbsp;(<i>x</i> = −<i>p</i>)<br><i>r</i> = <span class="fr"><span><i>e</i><i>p</i></span><span>1 + <i>e</i> sin <i>θ</i></span></span> &nbsp;(directrix <i>y</i> = <i>p</i>), &nbsp;&nbsp; <i>r</i> = <span class="fr"><span><i>e</i><i>p</i></span><span>1 − <i>e</i> sin <i>θ</i></span></span> &nbsp;(<i>y</i> = −<i>p</i>)</div>
<p>It is an ellipse if <span class="m"><i>e</i> &lt; 1</span>, a parabola if <span class="m"><i>e</i> = 1</span>, a hyperbola if <span class="m"><i>e</i> &gt; 1</span>. The axis through the focus (the <b>major axis</b> of an ellipse, the transverse axis of a hyperbola) lies along the polar axis for the cosine forms and along <span class="m"><i>θ</i> = π/2</span> for the sine forms; the vertices are at <span class="m"><i>θ</i> = 0, π</span> (or <span class="m">π/2, 3π/2</span>). A negative <span class="m"><i>r</i></span> plots opposite the angle: for a hyperbola those points form the branch beyond the directrix.</p>
<p>For a closed orbit around the Sun at the focus, the closest point (<b>perihelion</b>) and farthest point (<b>aphelion</b>) are <span class="m"><i>r</i><sub>min</sub> = <i>a</i>(1 − <i>e</i>)</span> and <span class="m"><i>r</i><sub>max</sub> = <i>a</i>(1 + <i>e</i>)</span>, with <span class="m"><i>e</i><i>p</i> = <i>a</i>(1 − <i>e</i><sup>2</sup>)</span>.</p>`,
  legend: [
    { c: "c1", sym: `<i>θ</i>`, name: "Angle", desc: `Measured from the polar axis, as for any polar graph.` },
    { c: "c3", sym: `<i>r</i>`, name: "Distance from the focus", desc: `The focal distance <span class="m"><i>PF</i></span> of the point.` },
    { c: "c2", sym: `<i>F</i>`, name: "Focus at the pole", desc: `The origin. For an orbit, the Sun.` },
    { c: "c4", sym: `<i>p</i>`, name: "Directrix", desc: `The line at distance <span class="m"><i>p</i></span> from the pole, perpendicular to the axis.` },
    { c: "c5", sym: `<i>e</i>`, name: "Eccentricity and type", desc: `The coefficient of cos θ or sin θ once the constant is 1.` }
  ],
  steps: {
    title: "How to read and graph a polar conic",
    items: [
      `Divide numerator and denominator by the constant term so the denominator reads <span class="m">1 ± <i>e</i> cos <i>θ</i></span> or <span class="m">1 ± <i>e</i> sin <i>θ</i></span>.`,
      `Read <span class="m"><i>e</i></span> (the coefficient of the trig function) and the type. Then <span class="m"><i>p</i> = (numerator)/<i>e</i></span>.`,
      `Place the directrix: cosine means a vertical line <span class="m"><i>x</i> = ±<i>p</i></span>, sine a horizontal line <span class="m"><i>y</i> = ±<i>p</i></span>, with the same sign as in the denominator.`,
      `Find the vertices by substituting <span class="m"><i>θ</i> = 0</span> and <span class="m">π</span> (cosine) or <span class="m">π/2</span> and <span class="m">3π/2</span> (sine). A parabola has only one; the other angle makes the denominator 0.`,
      `For rectangular form, clear the denominator, replace <span class="m"><i>r</i> cos <i>θ</i></span> by <span class="m"><i>x</i></span> (or <span class="m"><i>r</i> sin <i>θ</i></span> by <span class="m"><i>y</i></span>), isolate <span class="m"><i>r</i></span>, square, and use <span class="m"><i>r</i><sup>2</sup> = <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup></span>.`
    ]
  },
  example: {
    prompt: `Identify the conic <span class="m"><i>r</i> = <span class="fr"><span>15</span><span>3 − 2 cos <i>θ</i></span></span></span>. Give <span class="m"><i>e</i></span>, the directrix, the vertices, and the equation in rectangular form.`,
    lines: [
      { math: `<span class="m"><i>r</i> = <span class="fr"><span>5</span><span>1 − <span class="fr"><span>2</span><span>3</span></span> cos <i>θ</i></span></span></span>`, note: "Divide top and bottom by 3." },
      { math: `<span class="m"><span class="c5"><i>e</i> = <span class="fr"><span>2</span><span>3</span></span></span>, &nbsp;<i>e</i><i>p</i> = 5 ⇒ <span class="c4"><i>p</i> = <span class="fr"><span>15</span><span>2</span></span></span></span>`, note: "e < 1, so it is an ellipse; the minus cosine puts the directrix on the left." },
      { math: `<span class="m">directrix <i>x</i> = −<span class="fr"><span>15</span><span>2</span></span></span>`, note: "Vertical, p units left of the pole." },
      { math: `<span class="m"><i>θ</i> = 0: <i>r</i> = <span class="fr"><span>15</span><span>3 − 2</span></span> = 15 → (15, 0); &nbsp; <i>θ</i> = π: <i>r</i> = <span class="fr"><span>15</span><span>3 + 2</span></span> = 3 → (−3, 0)</span>`, note: "The two vertices on the polar axis." },
      { math: `<span class="m">centre (6, 0), &nbsp;<i>a</i> = 9, &nbsp;<i>c</i> = 6, &nbsp;<i>c</i>/<i>a</i> = <span class="fr"><span>2</span><span>3</span></span>, &nbsp;<i>b</i><sup>2</sup> = 81 − 36 = 45</span>`, note: "Centre is the midpoint of the vertices; the focus (0, 0) is 6 from it." },
      { math: `<span class="m">3<i>r</i> = 15 + 2<i>x</i> ⇒ 9(<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup>) = (15 + 2<i>x</i>)<sup>2</sup> ⇒ 5(<i>x</i> − 6)<sup>2</sup> + 9<i>y</i><sup>2</sup> = 405</span>`, note: "Clear the denominator, square, complete the square." }
    ],
    answer: `An ellipse with <span class="m"><i>e</i> = <span class="fr"><span>2</span><span>3</span></span></span>, directrix <span class="m"><i>x</i> = −<span class="fr"><span>15</span><span>2</span></span></span>, vertices <span class="m">(15, 0)</span> and <span class="m">(−3, 0)</span>: <span class="m"><span class="fr"><span>(<i>x</i> − 6)<sup>2</sup></span><span>81</span></span> + <span class="fr"><span><i>y</i><sup>2</sup></span><span>45</span></span> = 1</span>.`
  },
  why: `<p>Gravity pulls toward the Sun, so the natural place for the origin of an orbit is the Sun, which is a focus. In polar form about that focus every orbit, from a planet's near-circle to a comet's long ellipse to a probe's escape hyperbola, has the same equation. Perihelion and aphelion are simply <span class="m"><i>r</i></span> at <span class="m"><i>θ</i> = 0</span> and <span class="m"><i>θ</i> = π</span>.</p>`,
  careers: [
    { role: "Orbital analyst", use: "Writes a satellite's path as r = a(1 − e²)/(1 + e cos θ) and reads off perigee and apogee altitudes." },
    { role: "Mission designer", use: "Plans flybys on hyperbolic trajectories, using e > 1 and the closest approach r at θ = 0." },
    { role: "Astronomer", use: "Fits the orbit of a new comet or asteroid and predicts its distance from the Sun at each angle." },
    { role: "Radar engineer", use: "Converts between range-and-bearing (polar) measurements and conic flight paths." },
    { role: "Physics teacher", use: "Derives Kepler's first law in polar coordinates, where the solution is exactly this equation." }
  ],
  life: [
    "Earth is about 0.983 AU from the Sun in early January and about 1.017 AU in early July",
    "Halley's comet comes within about 0.59 AU of the Sun and swings out past Neptune",
    "A GPS satellite's orbit is nearly a circle, e close to 0",
    "Space probes that leave the solar system follow hyperbolas"
  ],
  fields: [
    { name: "Astronomy", use: "Planetary and cometary orbits in polar form about the Sun." },
    { name: "Aerospace engineering", use: "Orbit transfers and flybys use perigee, apogee and e." },
    { name: "Physics", use: "Inverse-square forces give exactly these curves." }
  ],
  prereqWhy: {
    "pc-eccentricity": "The polar equation is PF = e·PD with the focus at the pole, so PF = r.",
    "trig-polar-graphs": "Plotting r = f(θ), negative r, and converting with x = r cos θ and r² = x² + y² are all used here."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Physics", why: "Solving Newton's law of gravity in polar coordinates gives r = ep/(1 + e cos θ) for every orbit." },
    { field: "Calculus II", why: "Area swept in polar coordinates, ½∫r² dθ, is Kepler's second law." },
    { field: "Engineering", why: "Spacecraft trajectory design with orbital elements." }
  ],
  mistakes: [
    { wrong: `Reading <span class="m"><i>e</i> = 2</span> from <span class="m"><i>r</i> = <span class="fr"><span>15</span><span>3 − 2 cos <i>θ</i></span></span></span>.`, fix: `First make the constant in the denominator 1: <span class="m"><i>r</i> = 5/(1 − <span class="fr"><span>2</span><span>3</span></span> cos <i>θ</i>)</span>, so <span class="m"><i>e</i> = <span class="fr"><span>2</span><span>3</span></span></span>.` },
    { wrong: `Taking the numerator as <span class="m"><i>p</i></span>.`, fix: `The numerator is <span class="m"><i>e</i><i>p</i></span>; divide it by <span class="m"><i>e</i></span> to find the directrix distance.` },
    { wrong: `Placing the directrix of <span class="m"><i>r</i> = <i>e</i><i>p</i>/(1 − <i>e</i> sin <i>θ</i>)</span> at <span class="m"><i>x</i> = −<i>p</i></span>.`, fix: `Sine means a horizontal directrix: <span class="m"><i>y</i> = −<i>p</i></span>.` }
  ],
  practice: [
    { q: `Identify <span class="m"><i>r</i> = <span class="fr"><span>4</span><span>1 + cos <i>θ</i></span></span></span>: type, directrix and vertex.`, a: `<span class="m"><i>e</i> = 1</span>, a parabola; <span class="m"><i>e</i><i>p</i> = 4</span> so <span class="m"><i>p</i> = 4</span> and the directrix is <span class="m"><i>x</i> = 4</span>. Vertex at <span class="m"><i>θ</i> = 0</span>: <span class="m"><i>r</i> = 2</span>, the point <span class="m">(2, 0)</span>.` },
    { q: `Identify <span class="m"><i>r</i> = <span class="fr"><span>6</span><span>2 + sin <i>θ</i></span></span></span> and find its vertices.`, a: `<span class="m"><i>r</i> = 3/(1 + <span class="fr"><span>1</span><span>2</span></span> sin <i>θ</i>)</span>: <span class="m"><i>e</i> = <span class="fr"><span>1</span><span>2</span></span></span>, an ellipse, <span class="m"><i>p</i> = 6</span>, directrix <span class="m"><i>y</i> = 6</span>. <span class="m"><i>θ</i> = π/2</span>: <span class="m"><i>r</i> = 2</span>, vertex <span class="m">(0, 2)</span>; <span class="m"><i>θ</i> = 3π/2</span>: <span class="m"><i>r</i> = 6</span>, vertex <span class="m">(0, −6)</span>.` },
    { q: `Write the polar equation of the conic with a focus at the pole, <span class="m"><i>e</i> = 3</span> and directrix <span class="m"><i>y</i> = −2</span>. Find its vertices.`, a: `<span class="m"><i>r</i> = <span class="fr"><span>6</span><span>1 − 3 sin <i>θ</i></span></span></span>, a hyperbola. <span class="m"><i>θ</i> = π/2</span>: <span class="m"><i>r</i> = 6/(−2) = −3</span>, the point <span class="m">(0, −3)</span>; <span class="m"><i>θ</i> = 3π/2</span>: <span class="m"><i>r</i> = 6/4 = <span class="fr"><span>3</span><span>2</span></span></span>, the point <span class="m">(0, −<span class="fr"><span>3</span><span>2</span></span>)</span>.` },
    { q: `A comet's orbit has <span class="m"><i>e</i> = 0.9</span> and perihelion 1 AU, with the Sun at the pole and perihelion at <span class="m"><i>θ</i> = 0</span>. Find its polar equation, its aphelion and <span class="m"><i>a</i></span>.`, a: `<span class="m"><i>r</i>(0) = <i>e</i><i>p</i>/1.9 = 1</span>, so <span class="m"><i>e</i><i>p</i> = 1.9</span> and <span class="m"><i>r</i> = 1.9/(1 + 0.9 cos <i>θ</i>) = 19/(10 + 9 cos <i>θ</i>)</span>. Aphelion <span class="m"><i>r</i>(π) = 1.9/0.1 = 19</span> AU, and <span class="m"><i>a</i> = (1 + 19)/2 = 10</span> AU.` }
  ],
  origin: `<p>Isaac Newton showed in the <i>Principia</i> (1687) that a body pulled toward a centre by an inverse-square force moves on a conic with that centre at a focus, explaining Kepler's elliptical orbits. Edmond Halley used Newton's method in 1705 to show that the comets of 1531, 1607 and 1682 were one object on a long ellipse, and predicted its return in 1758. Today the polar equation with the focus at the pole is the standard way to write an orbit.</p>`
};
