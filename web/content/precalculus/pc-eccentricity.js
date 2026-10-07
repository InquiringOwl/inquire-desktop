window.ARITH = window.ARITH || {};
ARITH["pc-eccentricity"] = {
  title: "Focus, Directrix & Eccentricity",
  short: "One definition for every conic: PF = e·PD",
  grade: "Grade 12 · college Precalculus",
  hours: 4,
  voice: "plain",
  eyebrow: "Analytic geometry · conics",
  hero: `<span class="m"><span class="c2"><i>PF</i></span> = <span class="c5"><i>e</i></span> · <span class="c3"><i>PD</i></span></span>`,
  lede: `Every parabola, ellipse and hyperbola is the set of points <span class="m c1"><i>P</i></span> whose distance to a fixed point, the <b>focus</b>, is a fixed multiple <span class="m c5"><i>e</i></span> of its distance to a fixed line, the <b>directrix</b>. The number <span class="m c5"><i>e</i></span>, the <b>eccentricity</b>, decides which conic you get.`,
  plain: `<p>Pick a point <span class="m"><i>F</i></span> and a line that does not pass through it. Now look for every point that is exactly as far from <span class="m"><i>F</i></span> as it is from the line. You get a parabola, the curve you already met in Algebra II.</p>
<p>Change the rule a little. Ask for points whose distance to <span class="m"><i>F</i></span> is only half their distance to the line. Those points have to stay close to <span class="m"><i>F</i></span>, so the curve closes up around it: an ellipse. Ask instead for points that are twice as far from <span class="m"><i>F</i></span> as from the line. Now the curve opens out in two separate pieces: a hyperbola.</p>
<p>So one number does all the work. Call it <span class="m"><i>e</i></span>. Below 1 the curve is an ellipse, exactly 1 gives a parabola, above 1 gives a hyperbola. The closer <span class="m"><i>e</i></span> is to 0, the rounder the ellipse.</p>`,
  formal: `<p>Let <span class="m"><i>F</i></span> be a point (the <b>focus</b>), <span class="m"><i>ℓ</i></span> a line not through <span class="m"><i>F</i></span> (the <b>directrix</b>) and <span class="m"><i>e</i> &gt; 0</span> a constant (the <b>eccentricity</b>). The set of points <span class="m"><i>P</i></span> with</p>
<div class="display"><span class="c2"><i>PF</i></span> = <span class="c5"><i>e</i></span> · <span class="c3"><i>PD</i></span>, &nbsp; <i>D</i> the foot of the perpendicular from <i>P</i> to <i>ℓ</i></div>
<p>is a conic: an <b>ellipse</b> if <span class="m">0 &lt; <i>e</i> &lt; 1</span>, a <b>parabola</b> if <span class="m"><i>e</i> = 1</span>, a <b>hyperbola</b> if <span class="m"><i>e</i> &gt; 1</span>. A circle is the limit <span class="m"><i>e</i> → 0</span> (its eccentricity is 0, and it has no directrix).</p>
<p>For an ellipse or hyperbola centred at the origin with vertices <span class="m">(±<i>a</i>, 0)</span> and foci <span class="m">(±<i>c</i>, 0)</span>, where <span class="m"><i>c</i><sup>2</sup> = <i>a</i><sup>2</sup> − <i>b</i><sup>2</sup></span> (ellipse) or <span class="m"><i>c</i><sup>2</sup> = <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup></span> (hyperbola),</p>
<div class="display"><i>e</i> = <span class="fr"><span><i>c</i></span><span><i>a</i></span></span>, &nbsp; directrices <i>x</i> = ±<span class="fr"><span><i>a</i></span><span><i>e</i></span></span> = ±<span class="fr"><span><i>a</i><sup>2</sup></span><span><i>c</i></span></span></div>
<p>Each focus goes with the directrix on its own side. With the focus <span class="m">(<i>c</i>, 0)</span> and directrix <span class="m"><i>x</i> = <i>a</i>/<i>e</i></span>, squaring <span class="m">(<i>x</i> − <i>a</i><i>e</i>)<sup>2</sup> + <i>y</i><sup>2</sup> = <i>e</i><sup>2</sup>(<i>x</i> − <i>a</i>/<i>e</i>)<sup>2</sup></span> gives <span class="m"><i>x</i><sup>2</sup>(1 − <i>e</i><sup>2</sup>) + <i>y</i><sup>2</sup> = <i>a</i><sup>2</sup>(1 − <i>e</i><sup>2</sup>)</span>, the standard form with <span class="m"><i>b</i><sup>2</sup> = <i>a</i><sup>2</sup>(1 − <i>e</i><sup>2</sup>)</span> when <span class="m"><i>e</i> &lt; 1</span> and <span class="m"><i>b</i><sup>2</sup> = <i>a</i><sup>2</sup>(<i>e</i><sup>2</sup> − 1)</span> when <span class="m"><i>e</i> &gt; 1</span>.</p>`,
  legend: [
    { c: "c1", sym: `<i>P</i>`, name: "Point on the conic", desc: `Any point of the curve. It glides along the conic in the lab.` },
    { c: "c2", sym: `<i>PF</i>`, name: "Distance to the focus", desc: `From <span class="m"><i>P</i></span> straight to the focus <span class="m"><i>F</i></span>.` },
    { c: "c3", sym: `<i>PD</i>`, name: "Distance to the directrix", desc: `From <span class="m"><i>P</i></span> perpendicular to the directrix.` },
    { c: "c4", sym: `<i>ℓ</i>`, name: "Directrix", desc: `The fixed line. Ellipses and hyperbolas have two, one beside each focus.` },
    { c: "c5", sym: `<i>e</i>`, name: "Eccentricity", desc: `The ratio <span class="m"><i>PF</i>/<i>PD</i></span>; it names the type.` }
  ],
  steps: {
    title: "How to find the eccentricity and directrices from standard form",
    items: [
      `Write the equation as <span class="m"><i>x</i><sup>2</sup>/<i>a</i><sup>2</sup> ± <i>y</i><sup>2</sup>/<i>b</i><sup>2</sup> = 1</span>. For an ellipse, <span class="m"><i>a</i><sup>2</sup></span> is the larger denominator; for a hyperbola, it is the one under the positive term.`,
      `Find <span class="m"><i>c</i></span>: <span class="m"><i>c</i><sup>2</sup> = <i>a</i><sup>2</sup> − <i>b</i><sup>2</sup></span> for an ellipse, <span class="m"><i>c</i><sup>2</sup> = <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup></span> for a hyperbola.`,
      `Divide: <span class="m"><i>e</i> = <i>c</i>/<i>a</i></span>. Check that <span class="m"><i>e</i> &lt; 1</span> for an ellipse and <span class="m"><i>e</i> &gt; 1</span> for a hyperbola.`,
      `The directrices are perpendicular to the major (or transverse) axis, at distance <span class="m"><i>a</i>/<i>e</i> = <i>a</i><sup>2</sup>/<i>c</i></span> from the centre.`,
      `Starting from a focus, a directrix and <span class="m"><i>e</i></span> instead, write <span class="m"><i>PF</i> = <i>e</i> · <i>PD</i></span> with the distance formula, square both sides and complete the square.`
    ]
  },
  example: {
    prompt: `Find an equation for the set of points <span class="m"><i>P</i></span> whose distance to <span class="m"><i>F</i> = (1, 0)</span> is half their distance to the line <span class="m"><i>x</i> = 4</span>. Name the conic.`,
    lines: [
      { math: `<span class="m"><span class="c2"><i>PF</i></span> = √<span class="ov">(<i>x</i> − 1)<sup>2</sup> + <i>y</i><sup>2</sup></span>, &nbsp; <span class="c3"><i>PD</i></span> = |<i>x</i> − 4|</span>`, note: "Distance formula to the focus; horizontal distance to the vertical line." },
      { math: `<span class="m">√<span class="ov">(<i>x</i> − 1)<sup>2</sup> + <i>y</i><sup>2</sup></span> = <span class="fr"><span>1</span><span>2</span></span>|<i>x</i> − 4|</span>`, note: "PF = e·PD with e = 1/2." },
      { math: `<span class="m">(<i>x</i> − 1)<sup>2</sup> + <i>y</i><sup>2</sup> = <span class="fr"><span>1</span><span>4</span></span>(<i>x</i> − 4)<sup>2</sup></span>`, note: "Square both sides." },
      { math: `<span class="m"><i>x</i><sup>2</sup> − 2<i>x</i> + 1 + <i>y</i><sup>2</sup> = <span class="fr"><span>1</span><span>4</span></span><i>x</i><sup>2</sup> − 2<i>x</i> + 4</span>`, note: "Expand. The x-terms cancel." },
      { math: `<span class="m"><span class="fr"><span>3</span><span>4</span></span><i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = 3 &nbsp;⇒&nbsp; <span class="fr"><span><i>x</i><sup>2</sup></span><span>4</span></span> + <span class="fr"><span><i>y</i><sup>2</sup></span><span>3</span></span> = 1</span>`, note: "Divide by 3 to get standard form." },
      { math: `<span class="m"><i>a</i> = 2, &nbsp;<i>c</i><sup>2</sup> = 4 − 3 = 1, &nbsp;<i>e</i> = <i>c</i>/<i>a</i> = <span class="fr"><span>1</span><span>2</span></span>, &nbsp;<i>a</i>/<i>e</i> = 4</span>`, note: "Check: the focus (1, 0) and the directrix x = 4 come back." }
    ],
    answer: `An ellipse, <span class="m"><span class="fr"><span><i>x</i><sup>2</sup></span><span>4</span></span> + <span class="fr"><span><i>y</i><sup>2</sup></span><span>3</span></span> = 1</span>, with eccentricity <span class="m c5"><span class="fr"><span>1</span><span>2</span></span></span>.`
  },
  why: `<p>The focus–directrix definition puts all three conics in one family, so one formula handles them all. That is what makes the polar equation <span class="m"><i>r</i> = <i>e</i><i>p</i>/(1 + <i>e</i> cos <i>θ</i>)</span> work: astronomers use it for every orbit, closed or open, and read off from <span class="m"><i>e</i></span> alone whether a comet returns. Eccentricity is also the standard single number for how stretched an orbit, a gear or a lens profile is.</p>`,
  careers: [
    { role: "Orbital analyst", use: "Reads a spacecraft's eccentricity to tell a closed orbit (e < 1) from an escape trajectory (e ≥ 1)." },
    { role: "Astronomer", use: "Classifies newly found comets by eccentricity, which shows whether they are bound to the Sun." },
    { role: "Optical engineer", use: "Uses the conic constant, which is minus the eccentricity squared, to specify aspheric lens and mirror profiles." },
    { role: "Mechanical engineer", use: "Designs elliptical gears and cams whose eccentricity sets how much the speed varies per turn." },
    { role: "Antenna engineer", use: "Places a feed at the focus of a parabolic dish, where the focus–directrix property sends every reflected ray." },
    { role: "Architect", use: "Lays out elliptical and parabolic arches and whispering galleries from a focus and an axis." }
  ],
  life: [
    "The orbit of Earth is almost a circle: its eccentricity is about 0.017",
    "Halley's comet follows a very long ellipse, eccentricity about 0.97",
    "A satellite dish puts its receiver at the focus",
    "A flashlight's mirror is shaped so the bulb sits at the focus"
  ],
  fields: [
    { name: "Astronomy", use: "Orbits are conics with the Sun at a focus; e gives their shape." },
    { name: "Optics", use: "Reflectors and lenses are described by conic sections and their eccentricity." },
    { name: "Engineering", use: "Cams, gears and arches are drawn from foci and directrices." }
  ],
  prereqWhy: {
    "a2-parabolas": "A parabola is already defined by a focus and a directrix: it is the case e = 1 of this page.",
    "a2-ellipses": "The ellipse page found c from c² = a² − b² and called c/a the eccentricity; here that same number becomes the ratio PF/PD.",
    "a2-hyperbolas": "The hyperbola's c² = a² + b² gives c &gt; a, which is why its eccentricity is greater than 1."
  },
  unlocksWhy: {
    "pc-polar-conics": "Putting the focus at the pole turns PF = e·PD into the single polar equation r = ep/(1 ± e cos θ)."
  },
  beyond: [
    { field: "Physics", why: "Kepler orbits: the eccentricity vector, energy and angular momentum of a body moving under gravity." },
    { field: "Calculus II", why: "Areas and arc lengths of conics in polar form, and conics as parametric curves." },
    { field: "Engineering", why: "Optical design with conic constants and trajectory design for spacecraft." }
  ],
  mistakes: [
    { wrong: `Computing <span class="m"><i>e</i> = <i>b</i>/<i>a</i></span> or <span class="m"><i>e</i> = <i>c</i>/<i>b</i></span>.`, fix: `Eccentricity is centre-to-focus over centre-to-vertex: <span class="m"><i>e</i> = <i>c</i>/<i>a</i></span>.` },
    { wrong: `Placing the directrices at <span class="m"><i>x</i> = ±<i>a</i><i>e</i></span>.`, fix: `<span class="m"><i>a</i><i>e</i> = <i>c</i></span> is where the foci are. The directrices are at <span class="m"><i>x</i> = ±<i>a</i>/<i>e</i></span>, outside the vertices of an ellipse and between the vertices and the centre of a hyperbola.` },
    { wrong: `Using <span class="m"><i>PD</i></span> as the distance from <span class="m"><i>P</i></span> to some point of the directrix.`, fix: `<span class="m"><i>PD</i></span> is the perpendicular distance, to the nearest point of the line. For a vertical directrix <span class="m"><i>x</i> = <i>d</i></span> it is <span class="m">|<i>x</i> − <i>d</i>|</span>.` }
  ],
  practice: [
    { q: `Find <span class="m"><i>e</i></span> and the directrices of <span class="m"><span class="fr"><span><i>x</i><sup>2</sup></span><span>25</span></span> + <span class="fr"><span><i>y</i><sup>2</sup></span><span>16</span></span> = 1</span>.`, a: `<span class="m"><i>a</i> = 5</span>, <span class="m"><i>c</i><sup>2</sup> = 25 − 16 = 9</span>, <span class="m"><i>c</i> = 3</span>. So <span class="m"><i>e</i> = <span class="fr"><span>3</span><span>5</span></span></span> and the directrices are <span class="m"><i>x</i> = ±<span class="fr"><span>25</span><span>3</span></span></span>.` },
    { q: `Find <span class="m"><i>e</i></span> and the directrices of the hyperbola <span class="m"><span class="fr"><span><i>x</i><sup>2</sup></span><span>9</span></span> − <span class="fr"><span><i>y</i><sup>2</sup></span><span>16</span></span> = 1</span>.`, a: `<span class="m"><i>c</i><sup>2</sup> = 9 + 16 = 25</span>, <span class="m"><i>c</i> = 5</span>, <span class="m"><i>e</i> = <span class="fr"><span>5</span><span>3</span></span></span>. Directrices <span class="m"><i>x</i> = ±<span class="fr"><span>9</span><span>5</span></span></span>.` },
    { q: `A conic has focus <span class="m">(0, 0)</span>, directrix <span class="m"><i>y</i> = −2</span> and <span class="m"><i>e</i> = 1</span>. Find its equation and vertex.`, a: `<span class="m"><i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = (<i>y</i> + 2)<sup>2</sup></span>, so <span class="m"><i>x</i><sup>2</sup> = 4<i>y</i> + 4</span>, or <span class="m"><i>y</i> = <span class="fr"><span>1</span><span>4</span></span><i>x</i><sup>2</sup> − 1</span>. A parabola with vertex <span class="m">(0, −1)</span>, halfway between focus and directrix.` },
    { q: `Find the conic with focus <span class="m">(0, 0)</span>, directrix <span class="m"><i>x</i> = 3</span> and <span class="m"><i>e</i> = 2</span>, in standard form.`, a: `<span class="m"><i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = 4(<i>x</i> − 3)<sup>2</sup></span> gives <span class="m">3<i>x</i><sup>2</sup> − 24<i>x</i> + 36 − <i>y</i><sup>2</sup> = 0</span>, then <span class="m">3(<i>x</i> − 4)<sup>2</sup> − <i>y</i><sup>2</sup> = 12</span>: <span class="m"><span class="fr"><span>(<i>x</i> − 4)<sup>2</sup></span><span>4</span></span> − <span class="fr"><span><i>y</i><sup>2</sup></span><span>12</span></span> = 1</span>, a hyperbola with centre <span class="m">(4, 0)</span>, <span class="m"><i>a</i> = 2</span>, <span class="m"><i>c</i> = 4</span>, <span class="m"><i>e</i> = <i>c</i>/<i>a</i> = 2</span>.` }
  ],
  origin: `<p>Pappus of Alexandria described the focus–directrix property of the conics in the fourth century AD, in his <i>Collection</i>. Apollonius had studied the conics as sections of a cone without using a directrix. The word <i>eccentricity</i> comes from astronomy, where it measured how far off-centre an orbit's centre was; with Kepler's elliptical orbits (1609) it came to mean the ratio <span class="m"><i>c</i>/<i>a</i></span>.</p>`
};
