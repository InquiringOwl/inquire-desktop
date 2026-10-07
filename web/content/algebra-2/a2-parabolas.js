window.ARITH = window.ARITH || {};
ARITH["a2-parabolas"] = {
  title: "Parabolas: Focus & Directrix",
  short: "Equal distance to a point and a line: (x − h)² = 4p(y − k)",
  grade: "Grade 11–12 · college Intermediate/College Algebra",
  hours: 5,
  voice: "plain",
  eyebrow: "Conic sections · the parabola",
  hero: `<span class="m">(<i>x</i> − <i>h</i>)<sup>2</sup> = 4<span class="c1"><i>p</i></span>(<i>y</i> − <i>k</i>)</span>`,
  lede: `A parabola is every point that is the same distance from a fixed point, the <span class="c3">focus</span>, as from a fixed line, the <span class="c4">directrix</span>. The number <span class="m c1"><i>p</i></span>, the distance from the vertex to the focus, fixes its equation <span class="m">(<i>x</i> − <i>h</i>)<sup>2</sup> = 4<span class="c1"><i>p</i></span>(<i>y</i> − <i>k</i>)</span>.`,
  plain: `<p>Mark a point and draw a line that does not pass through it. Now look for all the places that are exactly as far from the point as from the line. Halfway between them is one such place. Further out, the spots that work bend away from the line and around the point. Together they form a parabola. The point is the <b>focus</b> and the line is the <b>directrix</b>.</p>
<p>The <b>vertex</b> sits halfway between the focus and the directrix. Call that half-distance <span class="m c1"><i>p</i></span>. A larger <span class="m c1"><i>p</i></span> gives a wider, flatter parabola. The parabola always opens toward the focus and away from the directrix.</p>
<p>Parabolas have a useful property. Light or radio waves that arrive parallel to the axis bounce off the curve and all pass through the focus. That is why a satellite dish has its receiver at the focus, and why a car headlight puts its bulb there to send light out in a straight beam.</p>`,
  formal: `<p>A <b>parabola</b> is the set of all points in a plane equidistant from a fixed point, the <b>focus</b>, and a fixed line, the <b>directrix</b>, not through the focus. With focus <span class="m c3">(0, <i>p</i>)</span> and directrix <span class="m c4"><i>y</i> = −<i>p</i></span>, a point <span class="m">(<i>x</i>, <i>y</i>)</span> is on it exactly when</p>
<div class="display"><span class="c2">√<span class="ov"><i>x</i><sup>2</sup> + (<i>y</i> − <i>p</i>)<sup>2</sup></span> = |<i>y</i> + <i>p</i>|</span> &nbsp;⇔&nbsp; <i>x</i><sup>2</sup> = 4<span class="c1"><i>p</i></span><i>y</i>.</div>
<p>Shifting the vertex to <span class="m">(<i>h</i>, <i>k</i>)</span> gives the standard forms:</p>
<div class="display">(<i>x</i> − <i>h</i>)<sup>2</sup> = 4<span class="c1"><i>p</i></span>(<i>y</i> − <i>k</i>) <span class="dim">axis <i>x</i> = <i>h</i>, focus (<i>h</i>, <i>k</i> + <i>p</i>), directrix <i>y</i> = <i>k</i> − <i>p</i>; opens up if <i>p</i> &gt; 0, down if <i>p</i> &lt; 0</span><br>(<i>y</i> − <i>k</i>)<sup>2</sup> = 4<span class="c1"><i>p</i></span>(<i>x</i> − <i>h</i>) <span class="dim">axis <i>y</i> = <i>k</i>, focus (<i>h</i> + <i>p</i>, <i>k</i>), directrix <i>x</i> = <i>h</i> − <i>p</i>; opens right if <i>p</i> &gt; 0, left if <i>p</i> &lt; 0</span></div>
<p>The <b>latus rectum</b> is the chord through the focus perpendicular to the axis. Its length is <span class="m">|4<span class="c1"><i>p</i></span>|</span>, and its endpoints lie <span class="m">2|<span class="c1"><i>p</i></span>|</span> on each side of the focus. The <b>reflective property</b>: a ray parallel to the axis reflects off the parabola through the focus. Comparing with vertex form, <span class="m"><i>y</i> = <i>a</i>(<i>x</i> − <i>h</i>)<sup>2</sup> + <i>k</i></span> has <span class="m">4<span class="c1"><i>p</i></span> = 1/<i>a</i></span>.</p>`,
  legend: [
    { c: "c3", sym: `<i>F</i>`, name: "Focus", desc: "The fixed point inside the curve. Rays parallel to the axis reflect through it." },
    { c: "c4", sym: `<i>y</i> = <i>k</i> − <i>p</i>`, name: "Directrix", desc: "The fixed line outside the curve, as far from the vertex as the focus is." },
    { c: "c1", sym: `<i>p</i>`, name: "Focal distance", desc: "The signed distance from the vertex to the focus. Its sign gives the direction of opening; 4p is the latus rectum." },
    { c: "c2", sym: `<i>PF</i> = <i>PD</i>`, name: "Equal distances", desc: "For every point P on the parabola, the distance to the focus equals the distance to the directrix." }
  ],
  steps: {
    title: "How to find the focus and directrix from an equation",
    items: [
      `If the equation is in general form, keep the squared variable's terms on one side and move everything else to the other.`,
      `Complete the square on the squared variable.`,
      `Factor the other side so it reads <span class="m">4<i>p</i>(<i>y</i> − <i>k</i>)</span> or <span class="m">4<i>p</i>(<i>x</i> − <i>h</i>)</span>.`,
      `Read the vertex <span class="m">(<i>h</i>, <i>k</i>)</span>, then solve <span class="m">4<i>p</i> =</span> the coefficient for <span class="m"><i>p</i></span>.`,
      `Move <span class="m"><i>p</i></span> from the vertex along the axis to the focus, and <span class="m"><i>p</i></span> the other way to the directrix. The latus rectum has length <span class="m">|4<i>p</i>|</span>.`
    ]
  },
  example: {
    prompt: `Write <span class="m"><i>y</i><sup>2</sup> − 4<i>y</i> − 8<i>x</i> + 28 = 0</span> in standard form. Find the vertex, <span class="m"><i>p</i></span>, the focus, the directrix and the endpoints of the latus rectum.`,
    lines: [
      { math: `<span class="m"><i>y</i><sup>2</sup> − 4<i>y</i> = 8<i>x</i> − 28</span>`, note: "Only y is squared, so the axis is horizontal. Keep the y-terms on the left." },
      { math: `<span class="m"><i>y</i><sup>2</sup> − 4<i>y</i> + 4 = 8<i>x</i> − 24</span>`, note: "Half of −4 is −2 and (−2)² = 4. Add 4 to both sides." },
      { math: `<span class="m">(<i>y</i> − 2)<sup>2</sup> = 8(<i>x</i> − 3)</span>`, note: "Factor 8 out of the right side." },
      { math: `<span class="m">4<span class="c1"><i>p</i></span> = 8, &nbsp; <span class="c1"><i>p</i> = 2</span>, &nbsp; vertex (3, 2)</span>`, note: "p > 0, so it opens to the right." },
      { math: `<span class="m">focus <span class="c3">(3 + 2, 2) = (5, 2)</span>, &nbsp; directrix <span class="c4"><i>x</i> = 3 − 2 = 1</span></span>`, note: "Move p along the axis toward the opening for the focus, and p the other way for the directrix." },
      { math: `<span class="m">(5, 2 ± 4): &nbsp; (5, −2) and (5, 6)</span>`, note: "The latus rectum has length 4p = 8, so its ends are 2p = 4 above and below the focus." },
      { math: `<span class="m"><i>P</i> = (5, 6): &nbsp; <span class="c2"><i>PF</i> = 6 − 2 = 4</span>, &nbsp; <span class="c2"><i>PD</i> = 5 − 1 = 4</span></span>`, note: "Check one point: its distance to the focus (5, 2) equals its distance to the line x = 1." }
    ],
    answer: `<span class="m">(<i>y</i> − 2)<sup>2</sup> = 8(<i>x</i> − 3)</span>: vertex <span class="m">(3, 2)</span>, <span class="m c1"><i>p</i> = 2</span>, focus <span class="m c3">(5, 2)</span>, directrix <span class="m c4"><i>x</i> = 1</span>, opening right; latus rectum from <span class="m">(5, −2)</span> to <span class="m">(5, 6)</span>.`
  },
  why: `<p>The focus–directrix definition explains what the parabola is for. Because every ray parallel to the axis reflects through the focus, a parabolic mirror collects faint signals into one point, and a source at the focus leaves as a parallel beam. Satellite dishes, radio telescopes, solar cookers, car headlights and stage lights all use this.</p>
<p>It also connects the graph of a quadratic function to the other conics. Ellipses and hyperbolas have foci too, and every conic can be described by a focus, a directrix and a ratio of distances. The parabola is the case where that ratio is exactly 1.</p>`,
  careers: [
    { role: "RF engineer", use: "Places the feed horn of a parabolic antenna at the focus, using p = r²/(4d) from the dish radius r and depth d." },
    { role: "Optical engineer", use: "Designs parabolic reflectors for telescopes and searchlights so parallel light meets at one point." },
    { role: "Automotive lighting designer", use: "Positions the headlight bulb at the reflector's focus to throw a straight beam." },
    { role: "Solar energy engineer", use: "Builds parabolic troughs that focus sunlight onto a pipe running along the focal line." },
    { role: "Acoustic engineer", use: "Uses parabolic microphones that collect distant sound at a microphone mounted at the focus." },
    { role: "Bridge engineer", use: "Models the main cable of a suspension bridge with a uniform deck load as a parabola from its lowest point." }
  ],
  life: [
    "A satellite TV dish with its receiver arm held out at the focus",
    "A flashlight that throws a narrow straight beam",
    "A solar cooker that brings sunlight to a pot at one spot",
    "The handheld dish microphone at the side of a football field",
    "The curved reflector behind a bicycle lamp"
  ],
  fields: [
    { name: "Optics", use: "Parabolic mirrors focus parallel light without spherical aberration." },
    { name: "Telecommunications", use: "Dish antennas send and receive at the focus of a paraboloid." },
    { name: "Physics", use: "A projectile under constant gravity follows a parabola." },
    { name: "Astronomy", use: "A body on an escape orbit just fast enough to leave follows a parabola with the Sun at the focus." }
  ],
  prereqWhy: {
    "a2-conic-sections": "The parabola is the conic with AC = 0. Classifying from the general equation and completing the square to standard form are done there first.",
    "a2-quad-vertex": "The equation (x − h)² = 4p(y − k) is vertex form y = a(x − h)² + k with a = 1/(4p), so the vertex and axis are read the same way."
  },
  unlocksWhy: {
    "pc-eccentricity": "The focus, the directrix and the fact that every point of the parabola is equally far from both make up the case <i>e</i> = 1 of the general focus-directrix definition."
  },
  beyond: [
    { field: "Precalculus", why: "Every conic is the set of points whose distance to a focus is e times the distance to a directrix; the parabola is e = 1, and polar form r = ep/(1 − e cos θ) follows." },
    { field: "Calculus I", why: "The reflective property is proved with the tangent line: its slope 2(x − h)/(4p) makes equal angles with the axis and the focal ray." },
    { field: "Physics", why: "Projectile paths, parabolic mirrors and the shape of a spinning liquid surface are parabolas." }
  ],
  mistakes: [
    { wrong: `Saying <span class="m"><i>x</i><sup>2</sup> = 12<i>y</i></span> has its focus at <span class="m">(0, 12)</span>.`, fix: `12 is <span class="m">4<i>p</i></span>, not <span class="m"><i>p</i></span>. Here <span class="m"><i>p</i> = 3</span>, so the focus is <span class="m">(0, 3)</span>.` },
    { wrong: `Putting the directrix of <span class="m">(<i>y</i> − 2)<sup>2</sup> = 8(<i>x</i> − 3)</span> at <span class="m"><i>y</i> = 1</span>.`, fix: `Only <span class="m"><i>y</i></span> is squared, so the axis is horizontal and the directrix is vertical: <span class="m"><i>x</i> = 3 − 2 = 1</span>.` },
    { wrong: `Taking the vertex of <span class="m">(<i>x</i> + 1)<sup>2</sup> = −6(<i>y</i> − 4)</span> as <span class="m">(1, 4)</span> and saying it opens up.`, fix: `<span class="m"><i>x</i> + 1 = <i>x</i> − (−1)</span>, so <span class="m"><i>h</i> = −1</span>. And <span class="m">4<i>p</i> = −6</span> is negative, so it opens down.` }
  ],
  practice: [
    { q: `Find the focus and directrix of <span class="m"><i>x</i><sup>2</sup> = 12<i>y</i></span>. Which way does it open?`,
      a: `<span class="m">4<i>p</i> = 12</span>, so <span class="m"><i>p</i> = 3</span>. Vertex <span class="m">(0, 0)</span>, focus <span class="m">(0, 3)</span>, directrix <span class="m"><i>y</i> = −3</span>. <span class="m"><i>p</i> &gt; 0</span>: it opens up.` },
    { q: `Write the equation of the parabola with focus <span class="m">(2, 1)</span> and directrix <span class="m"><i>y</i> = −3</span>.`,
      a: `The vertex is halfway: <span class="m">(2, −1)</span>, and <span class="m"><i>p</i> = 1 − (−1) = 2</span>. So <span class="m">(<i>x</i> − 2)<sup>2</sup> = 8(<i>y</i> + 1)</span>.` },
    { q: `Write <span class="m"><i>x</i><sup>2</sup> + 2<i>x</i> + 6<i>y</i> − 23 = 0</span> in standard form and give the vertex, focus, directrix and length of the latus rectum.`,
      a: `<span class="m"><i>x</i><sup>2</sup> + 2<i>x</i> + 1 = −6<i>y</i> + 24</span>, so <span class="m">(<i>x</i> + 1)<sup>2</sup> = −6(<i>y</i> − 4)</span>. Vertex <span class="m">(−1, 4)</span>, <span class="m">4<i>p</i> = −6</span>, <span class="m"><i>p</i> = −<span class="fr"><span>3</span><span>2</span></span></span>: opens down, focus <span class="m">(−1, <span class="fr"><span>5</span><span>2</span></span>)</span>, directrix <span class="m"><i>y</i> = <span class="fr"><span>11</span><span>2</span></span></span>, latus rectum 6.` },
    { q: `A satellite dish is a paraboloid 60 cm across and 10 cm deep. How far from the vertex should the receiver be placed?`,
      a: `Put the vertex at the origin, opening up: <span class="m"><i>x</i><sup>2</sup> = 4<i>py</i></span>. The rim passes through <span class="m">(30, 10)</span>, so <span class="m">900 = 40<i>p</i></span> and <span class="m"><i>p</i> = 22.5</span>. The receiver goes at the focus, 22.5 cm above the vertex.` }
  ],
  origin: `<p>Menaechmus found the parabola around 350 BC as a section of a cone, and Apollonius of Perga gave it its name around 200 BC. About the same time Diocles, in <i>On Burning Mirrors</i>, proved that a parabolic mirror sends rays parallel to its axis to a single point, the earliest known proof of the focal property. The focus–directrix description of all three conics appears in the <i>Collection</i> of Pappus of Alexandria, around 320 AD. Kepler introduced the Latin word <i>focus</i>, meaning hearth or fireplace, in 1604, because sunlight collected there by a mirror can start a fire.</p>`
};
