window.ARITH = window.ARITH || {};
ARITH["a2-ellipses"] = {
  title: "Ellipses",
  short: "Distances to two foci add to 2a; c² = a² − b²",
  grade: "Grade 11–12 · college Intermediate/College Algebra",
  hours: 6,
  voice: "plain",
  eyebrow: "Conic sections · ellipses",
  hero: `<span class="m"><span class="fr"><span>(<i>x</i> − <i>h</i>)<sup>2</sup></span><span><span class="c1"><i>a</i></span><sup>2</sup></span></span> + <span class="fr"><span>(<i>y</i> − <i>k</i>)<sup>2</sup></span><span><span class="c2"><i>b</i></span><sup>2</sup></span></span> = 1, &nbsp; <span class="c3"><i>c</i></span><sup>2</sup> = <span class="c1"><i>a</i></span><sup>2</sup> − <span class="c2"><i>b</i></span><sup>2</sup></span>`,
  lede: `An <b>ellipse</b> is the set of points whose distances to two fixed points, the <span class="c3">foci</span>, add up to the same number <span class="m">2<span class="c1"><i>a</i></span></span>. Its standard form shows the centre and the semi-axes <span class="m c1"><i>a</i></span> and <span class="m c2"><i>b</i></span>; the foci sit <span class="m c3"><i>c</i></span> units from the centre, with <span class="m"><span class="c3"><i>c</i></span><sup>2</sup> = <span class="c1"><i>a</i></span><sup>2</sup> − <span class="c2"><i>b</i></span><sup>2</sup></span>.`,
  plain: `<p>Push two pins into a board and tie the ends of a string to them, leaving the string slack. Pull it tight with a pencil and move the pencil all the way around. The curve you draw is an ellipse. Wherever the pencil is, the two pieces of string add up to the whole string. That is the definition: the sum of the distances to the two pins, the foci, never changes.</p>
<p>Call the string length <span class="m">2<span class="c1"><i>a</i></span></span>. The widest points, the <b>vertices</b>, are <span class="m c1"><i>a</i></span> units from the centre along the long axis. The narrowest points, the <b>co-vertices</b>, are <span class="m c2"><i>b</i></span> units from the centre along the short axis.</p>
<p>Move the pins together and the ellipse becomes rounder; when they meet it is a circle. Pull them apart and it becomes long and thin. The <span class="c4">eccentricity</span> <span class="m"><span class="c4"><i>e</i></span> = <span class="c3"><i>c</i></span>/<span class="c1"><i>a</i></span></span> measures this: 0 for a circle, close to 1 for a very flat ellipse.</p>
<p>Kepler found that Mars, and every planet, moves on an ellipse with the Sun at one focus. In a room with an elliptical floor, a whisper at one focus bounces off the walls and arrives at the other focus.</p>`,
  formal: `<p>An <b>ellipse</b> is the set of all points <span class="m"><i>P</i></span> in a plane such that <span class="m"><i>PF</i><sub>1</sub> + <i>PF</i><sub>2</sub> = 2<span class="c1"><i>a</i></span></span>, where the <b>foci</b> <span class="m c3"><i>F</i><sub>1</sub>, <i>F</i><sub>2</sub></span> are <span class="m">2<span class="c3"><i>c</i></span></span> apart and <span class="m">0 ≤ <span class="c3"><i>c</i></span> &lt; <span class="c1"><i>a</i></span></span>. With centre <span class="m">(<i>h</i>, <i>k</i>)</span> and <span class="m"><span class="c1"><i>a</i></span> &gt; <span class="c2"><i>b</i></span> &gt; 0</span>:</p>
<div class="display"><span class="fr"><span>(<i>x</i> − <i>h</i>)<sup>2</sup></span><span><span class="c1"><i>a</i></span><sup>2</sup></span></span> + <span class="fr"><span>(<i>y</i> − <i>k</i>)<sup>2</sup></span><span><span class="c2"><i>b</i></span><sup>2</sup></span></span> = 1 <span class="dim">major axis horizontal: vertices (<i>h</i> ± <i>a</i>, <i>k</i>), foci (<i>h</i> ± <i>c</i>, <i>k</i>)</span><br><span class="fr"><span>(<i>x</i> − <i>h</i>)<sup>2</sup></span><span><span class="c2"><i>b</i></span><sup>2</sup></span></span> + <span class="fr"><span>(<i>y</i> − <i>k</i>)<sup>2</sup></span><span><span class="c1"><i>a</i></span><sup>2</sup></span></span> = 1 <span class="dim">major axis vertical: vertices (<i>h</i>, <i>k</i> ± <i>a</i>), foci (<i>h</i>, <i>k</i> ± <i>c</i>)</span><br><span class="c3"><i>c</i></span><sup>2</sup> = <span class="c1"><i>a</i></span><sup>2</sup> − <span class="c2"><i>b</i></span><sup>2</sup>, &nbsp; <span class="c4"><i>e</i></span> = <span class="fr"><span><span class="c3"><i>c</i></span></span><span><span class="c1"><i>a</i></span></span></span>, &nbsp; 0 &lt; <span class="c4"><i>e</i></span> &lt; 1</div>
<p>The larger denominator is <span class="m"><span class="c1"><i>a</i></span><sup>2</sup></span>, and it sits under the variable of the major axis. The major axis has length <span class="m">2<span class="c1"><i>a</i></span></span> and the minor axis <span class="m">2<span class="c2"><i>b</i></span></span>. At a co-vertex the two focal distances are equal, so each is <span class="m c1"><i>a</i></span>: the right triangle with legs <span class="m c2"><i>b</i></span> and <span class="m c3"><i>c</i></span> and hypotenuse <span class="m c1"><i>a</i></span> gives <span class="m"><span class="c3"><i>c</i></span><sup>2</sup> = <span class="c1"><i>a</i></span><sup>2</sup> − <span class="c2"><i>b</i></span><sup>2</sup></span>. When <span class="m"><span class="c1"><i>a</i></span> = <span class="c2"><i>b</i></span></span>, the foci meet at the centre and the ellipse is a circle with <span class="m"><span class="c4"><i>e</i></span> = 0</span>.</p>`,
  legend: [
    { c: "c1", sym: `<i>a</i>`, name: "Semi-major axis", desc: "Centre to vertex. The string length, or the sum of the focal distances, is 2a." },
    { c: "c2", sym: `<i>b</i>`, name: "Semi-minor axis", desc: "Centre to co-vertex, the short half-width." },
    { c: "c3", sym: `<i>c</i>`, name: "Focal distance", desc: "Centre to each focus, with <span class=\"m\"><i>c</i><sup>2</sup> = <i>a</i><sup>2</sup> − <i>b</i><sup>2</sup></span>." },
    { c: "c4", sym: `<i>e</i>`, name: "Eccentricity", desc: "<span class=\"m\"><i>e</i> = <i>c</i>/<i>a</i></span>: 0 for a circle, near 1 for a flat ellipse." }
  ],
  steps: {
    title: "How to graph an ellipse from its equation",
    items: [
      `Put the equation in standard form with 1 on the right, completing the square if it is in general form.`,
      `Read the centre <span class="m">(<i>h</i>, <i>k</i>)</span>.`,
      `The larger denominator is <span class="m"><i>a</i><sup>2</sup></span>; its variable gives the direction of the major axis. The smaller one is <span class="m"><i>b</i><sup>2</sup></span>.`,
      `Plot the vertices <span class="m"><i>a</i></span> units from the centre along the major axis and the co-vertices <span class="m"><i>b</i></span> units along the minor axis. Sketch a smooth oval through the four points.`,
      `Find <span class="m"><i>c</i></span> from <span class="m"><i>c</i><sup>2</sup> = <i>a</i><sup>2</sup> − <i>b</i><sup>2</sup></span>, plot the foci <span class="m"><i>c</i></span> units from the centre along the major axis, and compute <span class="m"><i>e</i> = <i>c</i>/<i>a</i></span>.`
    ]
  },
  example: {
    prompt: `An ellipse has vertices <span class="m">(−3, 2)</span> and <span class="m">(7, 2)</span> and foci <span class="m">(−1, 2)</span> and <span class="m">(5, 2)</span>. Find its equation in standard form and its eccentricity.`,
    lines: [
      { math: `<span class="m">centre = <span class="fr"><span>(−3 + 7, 2 + 2)</span><span>2</span></span> = (2, 2)</span>`, note: "The centre is the midpoint of the vertices, and also of the foci." },
      { math: `<span class="m">2<span class="c1"><i>a</i></span> = 7 − (−3) = 10, &nbsp; <span class="c1"><i>a</i></span> = 5</span>`, note: "The distance between the vertices is 2a." },
      { math: `<span class="m">2<span class="c3"><i>c</i></span> = 5 − (−1) = 6, &nbsp; <span class="c3"><i>c</i></span> = 3</span>`, note: "The distance between the foci is 2c." },
      { math: `<span class="m"><span class="c2"><i>b</i></span><sup>2</sup> = <span class="c1"><i>a</i></span><sup>2</sup> − <span class="c3"><i>c</i></span><sup>2</sup> = 25 − 9 = 16, &nbsp; <span class="c2"><i>b</i></span> = 4</span>`, note: "Rearrange c² = a² − b²." },
      { math: `<span class="m"><span class="fr"><span>(<i>x</i> − 2)<sup>2</sup></span><span>25</span></span> + <span class="fr"><span>(<i>y</i> − 2)<sup>2</sup></span><span>16</span></span> = 1</span>`, note: "The vertices lie on a horizontal line, so a² goes under the x-term." },
      { math: `<span class="m"><span class="c4"><i>e</i></span> = <span class="fr"><span>3</span><span>5</span></span> = 0.6</span>`, note: "Co-vertices are 4 units above and below the centre: (2, 6) and (2, −2)." }
    ],
    answer: `<span class="m"><span class="fr"><span>(<i>x</i> − 2)<sup>2</sup></span><span>25</span></span> + <span class="fr"><span>(<i>y</i> − 2)<sup>2</sup></span><span>16</span></span> = 1</span>, with eccentricity <span class="m"><span class="c4"><i>e</i></span> = <span class="fr"><span>3</span><span>5</span></span></span>.`
  },
  why: `<p>Ellipses are the shape of bound orbits. Every planet, moon and satellite that does not escape travels on an ellipse, and its closest and farthest distances are <span class="m"><i>a</i> − <i>c</i></span> and <span class="m"><i>a</i> + <i>c</i></span>. The reflecting property, that a ray from one focus bounces off the curve to the other focus, is used in whispering galleries and in lithotripsy, where shock waves from one focus of an ellipsoidal reflector break a kidney stone placed at the other.</p>
<p>The numbers <span class="m"><i>a</i></span>, <span class="m"><i>b</i></span>, <span class="m"><i>c</i></span> and <span class="m"><i>e</i></span> describe an ellipse completely, and moving between them with <span class="m"><i>c</i><sup>2</sup> = <i>a</i><sup>2</sup> − <i>b</i><sup>2</sup></span> is the skill behind every orbit, arch and reflector calculation.</p>`,
  careers: [
    { role: "Orbital analyst", use: "Computes a satellite's closest and farthest altitudes from the semi-major axis and eccentricity of its orbit." },
    { role: "Medical physicist", use: "Places a kidney stone at the second focus of an ellipsoidal reflector so lithotripsy shock waves converge on it." },
    { role: "Acoustical engineer", use: "Predicts where sound focuses in elliptical rooms and domes, and designs to use or avoid it." },
    { role: "Astronomer", use: "Fits elliptical orbits to observations of comets, asteroids and exoplanets and reports their eccentricities." },
    { role: "Mechanical engineer", use: "Designs elliptical gears and cams whose changing radius gives a varying speed ratio." },
    { role: "Landscape architect", use: "Lays out oval beds and lawns on site with two stakes and a loop of rope." }
  ],
  life: [
    "Drawing an oval garden bed with two stakes and a rope",
    "The rim of a round mug seen from an angle looks like an ellipse",
    "Earth is about 5 million km closer to the Sun in early January than in early July",
    "Oval mirrors, tables and running tracks"
  ],
  fields: [
    { name: "Astronomy", use: "Kepler's first law: planets move on ellipses with the Sun at one focus." },
    { name: "Acoustics", use: "Whispering galleries send sound from one focus to the other." },
    { name: "Medicine", use: "Ellipsoidal reflectors focus shock waves in lithotripsy." },
    { name: "Engineering", use: "Elliptical arches, gears and tank cross-sections." }
  ],
  prereqWhy: {
    "a2-conic-sections": "An ellipse is the case AC > 0, A ≠ C of the general equation, and completing the square is how its standard form is found."
  },
  unlocksWhy: {
    "a2-hyperbolas": "A hyperbola uses the difference of the two focal distances instead of the sum, and c² = a² + b² instead of c² = a² − b².",
    "pc-eccentricity": "The foci, the semi-axes <i>a</i> and <i>b</i> and the relation <i>c</i>² = <i>a</i>² − <i>b</i>² give the ratio <i>e</i> = <i>c</i>/<i>a</i>, which measures how stretched the ellipse is and appears in the focus-directrix definition."
  },
  beyond: [
    { field: "Physics", why: "Kepler's laws, and the energy of an orbit, depend on its semi-major axis and eccentricity." },
    { field: "Calculus II", why: "The area of an ellipse is πab, while its perimeter needs an elliptic integral with no elementary formula." },
    { field: "Precalculus", why: "The polar equation r = ep/(1 − e cos θ) describes an orbit with the Sun at the origin." }
  ],
  mistakes: [
    { wrong: `Using <span class="m"><i>c</i><sup>2</sup> = <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup></span> for an ellipse.`, fix: `For an ellipse <span class="m"><i>a</i></span> is the longest of the three lengths, the hypotenuse: <span class="m"><i>c</i><sup>2</sup> = <i>a</i><sup>2</sup> − <i>b</i><sup>2</sup></span>, and the foci lie inside the curve.` },
    { wrong: `In <span class="m"><span class="fr"><span>(<i>x</i> + 1)<sup>2</sup></span><span>9</span></span> + <span class="fr"><span>(<i>y</i> − 3)<sup>2</sup></span><span>25</span></span> = 1</span>, taking <span class="m"><i>a</i> = 3</span> because 9 is under <span class="m"><i>x</i></span>.`, fix: `<span class="m"><i>a</i><sup>2</sup></span> is the larger denominator, 25, so <span class="m"><i>a</i> = 5</span> and the major axis is vertical.` },
    { wrong: `Placing the vertices of <span class="m"><span class="fr"><span><i>x</i><sup>2</sup></span><span>25</span></span> + <span class="fr"><span><i>y</i><sup>2</sup></span><span>9</span></span> = 1</span> at <span class="m">(±25, 0)</span>.`, fix: `The denominator is <span class="m"><i>a</i><sup>2</sup></span>. Take the square root: <span class="m"><i>a</i> = 5</span>, vertices <span class="m">(±5, 0)</span>.` }
  ],
  practice: [
    { q: `For <span class="m"><span class="fr"><span><i>x</i><sup>2</sup></span><span>36</span></span> + <span class="fr"><span><i>y</i><sup>2</sup></span><span>20</span></span> = 1</span>, find the vertices, co-vertices, foci and eccentricity.`,
      a: `<span class="m"><i>a</i> = 6</span>, <span class="m"><i>b</i> = √<span class="ov">20</span> = 2√<span class="ov">5</span></span>, <span class="m"><i>c</i><sup>2</sup> = 36 − 20 = 16</span>, <span class="m"><i>c</i> = 4</span>. Vertices <span class="m">(±6, 0)</span>, co-vertices <span class="m">(0, ±2√<span class="ov">5</span>)</span>, foci <span class="m">(±4, 0)</span>, <span class="m"><i>e</i> = <span class="fr"><span>4</span><span>6</span></span> = <span class="fr"><span>2</span><span>3</span></span></span>.` },
    { q: `For <span class="m"><span class="fr"><span>(<i>x</i> + 1)<sup>2</sup></span><span>9</span></span> + <span class="fr"><span>(<i>y</i> − 3)<sup>2</sup></span><span>25</span></span> = 1</span>, find the centre, vertices and foci.`,
      a: `Centre <span class="m">(−1, 3)</span>. The larger denominator is under <span class="m"><i>y</i></span>: vertical, <span class="m"><i>a</i> = 5</span>, <span class="m"><i>b</i> = 3</span>, <span class="m"><i>c</i> = √<span class="ov">25 − 9</span> = 4</span>. Vertices <span class="m">(−1, −2)</span> and <span class="m">(−1, 8)</span>; foci <span class="m">(−1, −1)</span> and <span class="m">(−1, 7)</span>.` },
    { q: `Write <span class="m">9<i>x</i><sup>2</sup> + 4<i>y</i><sup>2</sup> + 36<i>x</i> − 8<i>y</i> + 4 = 0</span> in standard form and find the foci.`,
      a: `<span class="m">9(<i>x</i><sup>2</sup> + 4<i>x</i> + 4) + 4(<i>y</i><sup>2</sup> − 2<i>y</i> + 1) = −4 + 36 + 4</span>, so <span class="m">9(<i>x</i> + 2)<sup>2</sup> + 4(<i>y</i> − 1)<sup>2</sup> = 36</span> and <span class="m"><span class="fr"><span>(<i>x</i> + 2)<sup>2</sup></span><span>4</span></span> + <span class="fr"><span>(<i>y</i> − 1)<sup>2</sup></span><span>9</span></span> = 1</span>. Vertical, <span class="m"><i>a</i> = 3</span>, <span class="m"><i>b</i> = 2</span>, <span class="m"><i>c</i> = √<span class="ov">5</span></span>: foci <span class="m">(−2, 1 − √<span class="ov">5</span>)</span> and <span class="m">(−2, 1 + √<span class="ov">5</span>)</span>.` },
    { q: `A whispering gallery has an elliptical floor 50 ft long and 30 ft wide. Two people stand at the foci. How far is each from the nearer end wall?`,
      a: `<span class="m"><i>a</i> = 25</span>, <span class="m"><i>b</i> = 15</span>, <span class="m"><i>c</i> = √<span class="ov">625 − 225</span> = √<span class="ov">400</span> = 20</span>. Each focus is 20 ft from the centre, so <span class="m">25 − 20 = 5</span> ft from the nearer end wall.` }
  ],
  origin: `<p>Apollonius of Perga named the curve around 200 BC, from the Greek <i>elleipsis</i>, "a falling short". Johannes Kepler introduced the word <i>focus</i> (Latin for hearth) in 1604, and in his <i>Astronomia nova</i> of 1609 showed from Tycho Brahe's observations that Mars moves on an ellipse with the Sun at one focus. Isaac Newton later proved that an inverse-square force of gravity produces exactly these orbits.</p>`
};
