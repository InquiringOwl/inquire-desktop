window.ARITH = window.ARITH || {};
ARITH["a2-hyperbolas"] = {
  title: "Hyperbolas",
  short: "Focal distances differ by 2a; asymptotes; c² = a² + b²",
  grade: "Grade 11–12 · college Intermediate/College Algebra",
  hours: 5,
  voice: "plain",
  eyebrow: "Conic sections · hyperbolas",
  hero: `<span class="m"><span class="fr"><span><i>x</i><sup>2</sup></span><span><span class="c1"><i>a</i></span><sup>2</sup></span></span> − <span class="fr"><span><i>y</i><sup>2</sup></span><span><span class="c2"><i>b</i></span><sup>2</sup></span></span> = 1, &nbsp; <span class="c4"><i>y</i> = ±<span class="fr"><span><span class="c2"><i>b</i></span></span><span><span class="c1"><i>a</i></span></span></span><i>x</i></span>, &nbsp; <span class="c3"><i>c</i></span><sup>2</sup> = <span class="c1"><i>a</i></span><sup>2</sup> + <span class="c2"><i>b</i></span><sup>2</sup></span>`,
  lede: `A <b>hyperbola</b> is the set of points whose distances to two <span class="c3">foci</span> differ by the same amount <span class="m">2<span class="c1"><i>a</i></span></span>. It has two branches that bend toward two crossing <span class="c4">asymptotes</span>, and its foci lie <span class="m c3"><i>c</i></span> units from the centre with <span class="m"><span class="c3"><i>c</i></span><sup>2</sup> = <span class="c1"><i>a</i></span><sup>2</sup> + <span class="c2"><i>b</i></span><sup>2</sup></span>.`,
  plain: `<p>Take two points 10 units apart and look for every point that is 6 units closer to one of them than to the other. Those points form two curves, one wrapped around each point. Together they are a hyperbola, and the two points are its foci. An ellipse keeps the sum of the two distances fixed; a hyperbola keeps the difference fixed.</p>
<p>Far from the centre each branch straightens out and runs alongside a line it never meets, an <span class="c4">asymptote</span>. To draw a hyperbola, first draw the <b>fundamental rectangle</b>: it reaches <span class="m c1"><i>a</i></span> units from the centre toward the branches and <span class="m c2"><i>b</i></span> units the other way. Its diagonals, extended, are the asymptotes. The branches start at the <b>vertices</b>, the midpoints of two opposite sides, and bend outward toward the asymptotes.</p>
<p>Here <span class="m c3"><i>c</i></span> is the longest length: a circle through the corners of the rectangle passes through the foci, so <span class="m"><span class="c3"><i>c</i></span><sup>2</sup> = <span class="c1"><i>a</i></span><sup>2</sup> + <span class="c2"><i>b</i></span><sup>2</sup></span>. The foci lie outside the vertices and the eccentricity <span class="m"><i>e</i> = <span class="c3"><i>c</i></span>/<span class="c1"><i>a</i></span></span> is always greater than 1.</p>`,
  formal: `<p>A <b>hyperbola</b> is the set of all points <span class="m"><i>P</i></span> in a plane such that <span class="m">|<i>PF</i><sub>1</sub> − <i>PF</i><sub>2</sub>| = 2<span class="c1"><i>a</i></span></span>, where the <b>foci</b> <span class="m c3"><i>F</i><sub>1</sub>, <i>F</i><sub>2</sub></span> are <span class="m">2<span class="c3"><i>c</i></span></span> apart and <span class="m">0 &lt; <span class="c1"><i>a</i></span> &lt; <span class="c3"><i>c</i></span></span>. With centre <span class="m">(<i>h</i>, <i>k</i>)</span>:</p>
<div class="display"><span class="fr"><span>(<i>x</i> − <i>h</i>)<sup>2</sup></span><span><span class="c1"><i>a</i></span><sup>2</sup></span></span> − <span class="fr"><span>(<i>y</i> − <i>k</i>)<sup>2</sup></span><span><span class="c2"><i>b</i></span><sup>2</sup></span></span> = 1 <span class="dim">transverse axis horizontal: vertices (<i>h</i> ± <i>a</i>, <i>k</i>), foci (<i>h</i> ± <i>c</i>, <i>k</i>)</span><br><span class="c4"><i>y</i> − <i>k</i> = ±<span class="fr"><span><span class="c2"><i>b</i></span></span><span><span class="c1"><i>a</i></span></span></span>(<i>x</i> − <i>h</i>)</span> <span class="dim">asymptotes</span><br><span class="fr"><span>(<i>y</i> − <i>k</i>)<sup>2</sup></span><span><span class="c1"><i>a</i></span><sup>2</sup></span></span> − <span class="fr"><span>(<i>x</i> − <i>h</i>)<sup>2</sup></span><span><span class="c2"><i>b</i></span><sup>2</sup></span></span> = 1 <span class="dim">transverse axis vertical: vertices (<i>h</i>, <i>k</i> ± <i>a</i>), foci (<i>h</i>, <i>k</i> ± <i>c</i>)</span><br><span class="c4"><i>y</i> − <i>k</i> = ±<span class="fr"><span><span class="c1"><i>a</i></span></span><span><span class="c2"><i>b</i></span></span></span>(<i>x</i> − <i>h</i>)</span> <span class="dim">asymptotes</span></div>
<p>In both forms <span class="m"><span class="c3"><i>c</i></span><sup>2</sup> = <span class="c1"><i>a</i></span><sup>2</sup> + <span class="c2"><i>b</i></span><sup>2</sup></span> and the eccentricity is <span class="m"><i>e</i> = <span class="c3"><i>c</i></span>/<span class="c1"><i>a</i></span> &gt; 1</span>. <span class="m"><span class="c1"><i>a</i></span><sup>2</sup></span> is the denominator of the positive term, whether or not it is the larger one. The fundamental rectangle has sides <span class="m">2<span class="c1"><i>a</i></span></span> and <span class="m">2<span class="c2"><i>b</i></span></span>, and its diagonals lie on the asymptotes. When <span class="m"><span class="c1"><i>a</i></span> = <span class="c2"><i>b</i></span></span> the asymptotes are perpendicular and <span class="m"><i>e</i> = √<span class="ov">2</span></span>.</p>`,
  legend: [
    { c: "c1", sym: `<i>a</i>`, name: "Semi-transverse axis", desc: "Centre to vertex. The difference of the focal distances is 2a." },
    { c: "c2", sym: `<i>b</i>`, name: "Semi-conjugate axis", desc: "Half the other side of the fundamental rectangle; it sets the slope of the asymptotes." },
    { c: "c3", sym: `<i>c</i>`, name: "Focal distance", desc: "Centre to each focus, with <span class=\"m\"><i>c</i><sup>2</sup> = <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup></span>." },
    { c: "c4", sym: `<i>y</i> = ±<i>bx</i>/<i>a</i>`, name: "Asymptotes", desc: "The diagonals of the fundamental rectangle, extended. The branches approach them but never meet them." }
  ],
  steps: {
    title: "How to graph a hyperbola from its equation",
    items: [
      `Put the equation in standard form with 1 on the right and read the centre <span class="m">(<i>h</i>, <i>k</i>)</span>.`,
      `The positive term gives the transverse axis: its variable is the direction the branches open, and its denominator is <span class="m"><i>a</i><sup>2</sup></span>. The other denominator is <span class="m"><i>b</i><sup>2</sup></span>.`,
      `Draw the fundamental rectangle: <span class="m"><i>a</i></span> units from the centre along the transverse axis and <span class="m"><i>b</i></span> units the other way.`,
      `Extend its diagonals as dashed asymptotes and write their equations.`,
      `Sketch each branch from a vertex outward, bending toward the asymptotes.`,
      `Find <span class="m"><i>c</i></span> from <span class="m"><i>c</i><sup>2</sup> = <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup></span> and plot the foci <span class="m"><i>c</i></span> units from the centre along the transverse axis.`
    ]
  },
  example: {
    prompt: `Write <span class="m">9<i>x</i><sup>2</sup> − 16<i>y</i><sup>2</sup> − 36<i>x</i> − 32<i>y</i> − 124 = 0</span> in standard form. Find the centre, vertices, foci and asymptotes.`,
    lines: [
      { math: `<span class="m">9(<i>x</i><sup>2</sup> − 4<i>x</i>) − 16(<i>y</i><sup>2</sup> + 2<i>y</i>) = 124</span>`, note: "AC = −144 < 0, so this is a hyperbola. Group the terms and move the constant." },
      { math: `<span class="m">9(<i>x</i><sup>2</sup> − 4<i>x</i> + 4) − 16(<i>y</i><sup>2</sup> + 2<i>y</i> + 1) = 124 + 36 − 16</span>`, note: "Adding 4 inside the first group adds 9 · 4 = 36. Adding 1 inside the second adds −16 · 1 = −16." },
      { math: `<span class="m">9(<i>x</i> − 2)<sup>2</sup> − 16(<i>y</i> + 1)<sup>2</sup> = 144</span>`, note: "Write each group as a square." },
      { math: `<span class="m"><span class="fr"><span>(<i>x</i> − 2)<sup>2</sup></span><span>16</span></span> − <span class="fr"><span>(<i>y</i> + 1)<sup>2</sup></span><span>9</span></span> = 1</span>`, note: "Divide by 144. The x-term is positive, so the branches open left and right." },
      { math: `<span class="m"><span class="c1"><i>a</i></span> = 4, &nbsp; <span class="c2"><i>b</i></span> = 3, &nbsp; <span class="c3"><i>c</i></span><sup>2</sup> = 16 + 9 = 25, &nbsp; <span class="c3"><i>c</i></span> = 5</span>`, note: "Centre (2, −1)." },
      { math: `<span class="m">vertices (−2, −1), (6, −1); &nbsp; <span class="c3">foci (−3, −1), (7, −1)</span></span>`, note: "Move a = 4 and c = 5 left and right from the centre." },
      { math: `<span class="m c4"><i>y</i> + 1 = ±<span class="fr"><span>3</span><span>4</span></span>(<i>x</i> − 2)</span>`, note: "Slopes ±b/a for a hyperbola that opens left and right." }
    ],
    answer: `<span class="m"><span class="fr"><span>(<i>x</i> − 2)<sup>2</sup></span><span>16</span></span> − <span class="fr"><span>(<i>y</i> + 1)<sup>2</sup></span><span>9</span></span> = 1</span>: centre <span class="m">(2, −1)</span>, vertices <span class="m">(−2, −1)</span> and <span class="m">(6, −1)</span>, foci <span class="m">(−3, −1)</span> and <span class="m">(7, −1)</span>, asymptotes <span class="m"><i>y</i> + 1 = ±<span class="fr"><span>3</span><span>4</span></span>(<i>x</i> − 2)</span>, eccentricity <span class="m"><span class="fr"><span>5</span><span>4</span></span></span>.`
  },
  why: `<p>A difference of distances is what you measure when you compare arrival times. If a signal from two transmitters reaches a ship 0.4 milliseconds apart, the ship is about 120 km closer to one than the other, so it lies on a hyperbola with the transmitters as foci. LORAN navigation in the Second World War worked this way, and modern systems still locate aircraft, phones and lightning strikes from time differences.</p>
<p>Hyperbolas also appear in the paths of objects moving fast enough to escape gravity, such as interstellar comets, in the secondary mirrors of many telescopes, and in the waist of a power-station cooling tower. The asymptotes give the far-away behaviour in one line, and <span class="m"><i>c</i><sup>2</sup> = <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup></span> links the shape to where the foci are.</p>`,
  careers: [
    { role: "Navigation systems engineer", use: "Locates a receiver on intersecting hyperbolas from the time differences of signals from pairs of transmitters." },
    { role: "Air traffic surveillance engineer", use: "Runs multilateration systems that place an aircraft from the differences in arrival time of its transponder signal at ground stations." },
    { role: "Acoustic surveillance engineer", use: "Locates a gunshot or explosion from the delays between microphones, each delay defining a hyperbola." },
    { role: "Optical engineer", use: "Shapes the hyperbolic secondary mirror of a Cassegrain or Ritchey–Chrétien telescope." },
    { role: "Astrodynamicist", use: "Plans hyperbolic flyby trajectories that bend a spacecraft's path around a planet." },
    { role: "Structural engineer", use: "Designs hyperboloid cooling towers and towers that are built entirely from straight members." }
  ],
  life: [
    "The shadow edge thrown on a wall by a lampshade is a hyperbola",
    "The cooling towers of power stations have hyperbolic outlines",
    "The ground hit by a supersonic jet's sonic boom at one moment is bounded by a hyperbola",
    "The graph of y = 1/x from inverse variation is a hyperbola turned 45°"
  ],
  fields: [
    { name: "Navigation", use: "Time-difference positioning puts the receiver on hyperbolas with the transmitters as foci." },
    { name: "Astronomy", use: "Objects faster than escape speed, such as interstellar comets, follow hyperbolic paths." },
    { name: "Physics", use: "Alpha particles scattered by a nucleus follow hyperbolic paths, as in Rutherford's experiment." },
    { name: "Structural engineering", use: "Hyperboloid towers are strong and can be built from straight beams." }
  ],
  prereqWhy: {
    "a2-ellipses": "A hyperbola mirrors an ellipse: a difference of focal distances instead of a sum, a minus sign in the standard form, and c² = a² + b² instead of c² = a² − b²."
  },
  unlocksWhy: {
    "pc-eccentricity": "The values <i>a</i>, <i>c</i> and the relation <i>c</i>² = <i>a</i>² + <i>b</i>² give <i>e</i> = <i>c</i>/<i>a</i> &gt; 1, the hyperbola case of the single focus-directrix definition of a conic."
  },
  beyond: [
    { field: "Physics", why: "Hyperbolic orbits and Rutherford scattering both come from inverse-square forces." },
    { field: "Calculus I", why: "Asymptotes are limits of the slope as x → ∞, and the hyperbolic functions cosh and sinh trace x² − y² = 1." },
    { field: "Precalculus", why: "Rotating the axes turns xy = 1 into the standard form x²/2 − y²/2 = 1." }
  ],
  mistakes: [
    { wrong: `Using <span class="m"><i>c</i><sup>2</sup> = <i>a</i><sup>2</sup> − <i>b</i><sup>2</sup></span> for a hyperbola.`, fix: `For a hyperbola <span class="m"><i>c</i></span> is the longest length: <span class="m"><i>c</i><sup>2</sup> = <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup></span>, and the foci lie beyond the vertices.` },
    { wrong: `In <span class="m"><span class="fr"><span><i>y</i><sup>2</sup></span><span>9</span></span> − <span class="fr"><span><i>x</i><sup>2</sup></span><span>16</span></span> = 1</span>, taking <span class="m"><i>a</i> = 4</span> because 16 is the larger denominator.`, fix: `<span class="m"><i>a</i><sup>2</sup></span> is under the positive term: <span class="m"><i>a</i> = 3</span>, <span class="m"><i>b</i> = 4</span>, the branches open up and down, and the asymptotes are <span class="m"><i>y</i> = ±<span class="fr"><span>3</span><span>4</span></span><i>x</i></span>.` },
    { wrong: `Writing the asymptotes of a vertical hyperbola with slope <span class="m">±<i>b</i>/<i>a</i></span>.`, fix: `The slope is rise over run of the rectangle's diagonal. For a vertical hyperbola the rectangle is <span class="m">2<i>a</i></span> tall and <span class="m">2<i>b</i></span> wide, so the slopes are <span class="m">±<i>a</i>/<i>b</i></span>.` }
  ],
  practice: [
    { q: `For <span class="m"><span class="fr"><span><i>x</i><sup>2</sup></span><span>9</span></span> − <span class="fr"><span><i>y</i><sup>2</sup></span><span>16</span></span> = 1</span>, find the vertices, foci, asymptotes and eccentricity.`,
      a: `<span class="m"><i>a</i> = 3</span>, <span class="m"><i>b</i> = 4</span>, <span class="m"><i>c</i> = √<span class="ov">9 + 16</span> = 5</span>. Vertices <span class="m">(±3, 0)</span>, foci <span class="m">(±5, 0)</span>, asymptotes <span class="m"><i>y</i> = ±<span class="fr"><span>4</span><span>3</span></span><i>x</i></span>, <span class="m"><i>e</i> = <span class="fr"><span>5</span><span>3</span></span></span>.` },
    { q: `For <span class="m"><span class="fr"><span>(<i>y</i> − 2)<sup>2</sup></span><span>4</span></span> − <span class="fr"><span>(<i>x</i> + 1)<sup>2</sup></span><span>5</span></span> = 1</span>, find the centre, vertices, foci and asymptotes.`,
      a: `Centre <span class="m">(−1, 2)</span>, opening up and down, <span class="m"><i>a</i> = 2</span>, <span class="m"><i>b</i> = √<span class="ov">5</span></span>, <span class="m"><i>c</i> = √<span class="ov">4 + 5</span> = 3</span>. Vertices <span class="m">(−1, 0)</span> and <span class="m">(−1, 4)</span>; foci <span class="m">(−1, −1)</span> and <span class="m">(−1, 5)</span>; asymptotes <span class="m"><i>y</i> − 2 = ±<span class="fr"><span>2</span><span>√<span class="ov">5</span></span></span>(<i>x</i> + 1) = ±<span class="fr"><span>2√<span class="ov">5</span></span><span>5</span></span>(<i>x</i> + 1)</span>.` },
    { q: `Find the standard form of the hyperbola with foci <span class="m">(±10, 0)</span> and vertices <span class="m">(±6, 0)</span>, and its asymptotes.`,
      a: `Centre <span class="m">(0, 0)</span>, <span class="m"><i>a</i> = 6</span>, <span class="m"><i>c</i> = 10</span>, <span class="m"><i>b</i><sup>2</sup> = 100 − 36 = 64</span>: <span class="m"><span class="fr"><span><i>x</i><sup>2</sup></span><span>36</span></span> − <span class="fr"><span><i>y</i><sup>2</sup></span><span>64</span></span> = 1</span>, asymptotes <span class="m"><i>y</i> = ±<span class="fr"><span>8</span><span>6</span></span><i>x</i> = ±<span class="fr"><span>4</span><span>3</span></span><i>x</i></span>.` },
    { q: `Stations <span class="m"><i>A</i>(100, 0)</span> and <span class="m"><i>B</i>(−100, 0)</span> (km) send signals at the same moment. A ship finds it is 120 km closer to <span class="m"><i>A</i></span> than to <span class="m"><i>B</i></span>. Find the hyperbola it lies on and its position if it is 80 km north of the line through the stations.`,
      a: `<span class="m">2<i>a</i> = 120</span>, <span class="m"><i>a</i> = 60</span>, <span class="m"><i>c</i> = 100</span>, <span class="m"><i>b</i><sup>2</sup> = 10000 − 3600 = 6400</span>: <span class="m"><span class="fr"><span><i>x</i><sup>2</sup></span><span>3600</span></span> − <span class="fr"><span><i>y</i><sup>2</sup></span><span>6400</span></span> = 1</span>, right branch (<span class="m"><i>x</i> &gt; 0</span>, nearer <span class="m"><i>A</i></span>). With <span class="m"><i>y</i> = 80</span>: <span class="m"><i>x</i><sup>2</sup> = 3600(1 + 1) = 7200</span>, <span class="m"><i>x</i> = 60√<span class="ov">2</span> ≈ 84.9</span>. The ship is at about <span class="m">(84.9, 80)</span>.` }
  ],
  origin: `<p>Apollonius of Perga named the hyperbola around 200 BC, from the Greek <i>hyperbolē</i>, "an excess", and was the first to treat its two branches as one curve. In the early 1940s the LORAN system (long-range navigation), developed in the United States, printed families of hyperbolas on charts so that navigators could fix their position from radio time differences.</p>`
};
