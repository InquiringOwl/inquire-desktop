window.ARITH = window.ARITH || {};
ARITH["trig-unit-circle"] = {
  title: "The Unit Circle",
  short: "Cosine and sine as the coordinates of a point",
  grade: "Grade 11–12 · college Trigonometry",
  hours: 6,
  voice: "plain",
  eyebrow: "The circular functions · unit circle",
  hero: `<span class="m"><i>P</i>(<span class="c1"><i>t</i></span>) = (<span class="c2">cos <i>t</i></span>, <span class="c3">sin <i>t</i></span>) &nbsp; on &nbsp;<span class="c2"><i>x</i></span><sup>2</sup> + <span class="c3"><i>y</i></span><sup>2</sup> = <span class="c4">1</span></span>`,
  lede: `Walk a distance <span class="m c1"><i>t</i></span> around the circle of radius 1, starting at <span class="m">(1, 0)</span>. The point where you stop has coordinates <span class="m">(<span class="c2">cos <i>t</i></span>, <span class="c3">sin <i>t</i></span>)</span>, and that is the definition of cosine and sine for every real number.`,
  plain: `<p>In a right triangle, sine and cosine only make sense for angles between 0° and 90°. The unit circle removes that limit. Draw the circle of radius 1 centred at the origin. Start at the point <span class="m">(1, 0)</span> and walk along the circle a distance <span class="m c1"><i>t</i></span>, counterclockwise if <span class="m"><i>t</i></span> is positive and clockwise if it is negative.</p>
<p>The point where you stop is called the terminal point. Its <span class="m c2"><i>x</i></span>-coordinate is <span class="c2">cos <i>t</i></span> and its <span class="m c3"><i>y</i></span>-coordinate is <span class="c3">sin <i>t</i></span>. Because the radius is 1, an arc of length <span class="m"><i>t</i></span> belongs to a central angle of <span class="m"><i>t</i></span> radians, so <span class="m"><i>t</i></span> is both a distance and an angle.</p>
<p>For a first-quadrant point this agrees with SOH-CAH-TOA. Drop a vertical line from the point to the <span class="m"><i>x</i></span>-axis: you get a right triangle with hypotenuse 1, so the adjacent side is the cosine and the opposite side is the sine. Past 90° the triangle stops working, but the coordinates keep going, and they turn negative on the left half or the lower half of the circle.</p>
<p>A few points are worth knowing by heart. The 30-60-90 and 45-45-90 triangles give the points for <span class="m">π/6</span>, <span class="m">π/4</span> and <span class="m">π/3</span>, and the circle's symmetry copies them into the other three quadrants with sign changes.</p>`,
  formal: `<p>The <b>unit circle</b> is <span class="m"><i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = 1</span>. For a real number <span class="m c1"><i>t</i></span>, the <b>terminal point</b> <span class="m"><i>P</i>(<i>t</i>) = (<i>x</i>, <i>y</i>)</span> is reached by moving a distance <span class="m">|<i>t</i>|</span> along the circle from <span class="m">(1, 0)</span>, counterclockwise when <span class="m"><i>t</i> &gt; 0</span> and clockwise when <span class="m"><i>t</i> &lt; 0</span>. Equivalently, <span class="m"><i>P</i>(<i>t</i>)</span> is where the terminal side of the angle of <span class="m"><i>t</i></span> radians in standard position meets the circle. Then</p>
<div class="display"><span class="c2">cos <i>t</i> = <i>x</i></span> &nbsp;&nbsp; <span class="c3">sin <i>t</i> = <i>y</i></span> &nbsp;&nbsp; <span class="c5">tan <i>t</i> = <span class="fr"><span><i>y</i></span><span><i>x</i></span></span> = <span class="fr"><span>sin <i>t</i></span><span>cos <i>t</i></span></span></span> &nbsp;<span class="dim">(<i>x</i> ≠ 0)</span></div>
<p>Sine and cosine are defined for every real <span class="m"><i>t</i></span>, so their <b>domain</b> is <span class="m">(−∞, ∞)</span>; a point on the unit circle has <span class="m">−1 ≤ <i>x</i> ≤ 1</span> and <span class="m">−1 ≤ <i>y</i> ≤ 1</span>, so their <b>range</b> is <span class="m">[−1, 1]</span>. The tangent is undefined where <span class="m"><i>x</i> = 0</span>, at <span class="m"><i>t</i> = π/2 + <i>k</i>π</span>. Since <span class="m"><i>t</i></span> and <span class="m"><i>t</i> + 2π<i>k</i></span> reach the same point, <span class="m">cos(<i>t</i> + 2π<i>k</i>) = cos <i>t</i></span> and <span class="m">sin(<i>t</i> + 2π<i>k</i>) = sin <i>t</i></span>. Substituting the point into the circle's equation gives, for every real <span class="m"><i>t</i></span>,</p>
<div class="display"><span class="c3">sin</span><sup>2</sup> <i>t</i> + <span class="c2">cos</span><sup>2</sup> <i>t</i> = <span class="c4">1</span></div>
<p>The special points come from the special right triangles with hypotenuse 1, and the reflections <span class="m"><i>P</i>(π − <i>t</i>) = (−<i>x</i>, <i>y</i>)</span>, <span class="m"><i>P</i>(π + <i>t</i>) = (−<i>x</i>, −<i>y</i>)</span>, <span class="m"><i>P</i>(2π − <i>t</i>) = (<i>x</i>, −<i>y</i>)</span> carry them around the circle:</p>
<div class="display"><i>P</i>(0) = (1, 0) &nbsp; <i>P</i>(<span class="fr"><span>π</span><span>6</span></span>) = (<span class="fr"><span>√3</span><span>2</span></span>, <span class="fr"><span>1</span><span>2</span></span>) &nbsp; <i>P</i>(<span class="fr"><span>π</span><span>4</span></span>) = (<span class="fr"><span>√2</span><span>2</span></span>, <span class="fr"><span>√2</span><span>2</span></span>) &nbsp; <i>P</i>(<span class="fr"><span>π</span><span>3</span></span>) = (<span class="fr"><span>1</span><span>2</span></span>, <span class="fr"><span>√3</span><span>2</span></span>)<br><i>P</i>(<span class="fr"><span>π</span><span>2</span></span>) = (0, 1) &nbsp; <i>P</i>(π) = (−1, 0) &nbsp; <i>P</i>(<span class="fr"><span>3π</span><span>2</span></span>) = (0, −1) &nbsp; <span class="dim">so</span> tan 0 = tan π = 0, &nbsp;tan <span class="fr"><span>π</span><span>2</span></span> <span class="dim">and</span> tan <span class="fr"><span>3π</span><span>2</span></span> <span class="dim">undefined</span></div>`,
  legend: [
    { c: "c1", sym: `<i>t</i>`, name: "Arc length = angle", desc: "The distance walked along the unit circle from (1, 0), equal to the central angle in radians." },
    { c: "c2", sym: `cos <i>t</i>`, name: "Cosine", desc: "The x-coordinate of the terminal point P(t)." },
    { c: "c3", sym: `sin <i>t</i>`, name: "Sine", desc: "The y-coordinate of the terminal point P(t)." },
    { c: "c4", sym: `1`, name: "Radius", desc: "The radius of the unit circle, so x² + y² = 1." },
    { c: "c5", sym: `tan <i>t</i>`, name: "Tangent", desc: "y/x, the slope of the radius to P(t); undefined when x = 0." }
  ],
  steps: {
    title: "How to find cos t, sin t and tan t at a special value of t",
    items: [
      `Add or subtract <span class="m">2π</span> until <span class="m c1"><i>t</i></span> is in <span class="m">[0, 2π)</span>; the terminal point does not change.`,
      `Locate the terminal point: a quadrant, or an axis if <span class="m"><i>t</i></span> is a multiple of <span class="m">π/2</span>.`,
      `Find its first-quadrant partner, the one of <span class="m">π/6</span>, <span class="m">π/4</span>, <span class="m">π/3</span> that is <span class="m">π − <i>t</i></span>, <span class="m"><i>t</i> − π</span> or <span class="m">2π − <i>t</i></span>.`,
      `Copy the partner's coordinates, then give them the signs of the quadrant: <span class="m"><i>x</i></span> is negative left of the <span class="m"><i>y</i></span>-axis, <span class="m"><i>y</i></span> is negative below the <span class="m"><i>x</i></span>-axis.`,
      `Read <span class="m c2">cos <i>t</i> = <i>x</i></span>, <span class="m c3">sin <i>t</i> = <i>y</i></span> and <span class="m c5">tan <i>t</i> = <i>y</i>/<i>x</i></span>, rationalising the denominator if needed.`,
      `Check: <span class="m"><i>x</i><sup>2</sup> + <i>y</i><sup>2</sup></span> must equal 1.`
    ]
  },
  example: {
    prompt: `Find <span class="m">cos <span class="fr"><span>17π</span><span>6</span></span></span>, <span class="m">sin <span class="fr"><span>17π</span><span>6</span></span></span> and <span class="m">tan <span class="fr"><span>17π</span><span>6</span></span></span> exactly.`,
    lines: [
      { math: `<span class="m"><span class="c1"><span class="fr"><span>17π</span><span>6</span></span></span> − 2π = <span class="fr"><span>17π − 12π</span><span>6</span></span> = <span class="c1"><span class="fr"><span>5π</span><span>6</span></span></span></span>`, note: "One full trip around the circle is 2π, so 17π/6 and 5π/6 have the same terminal point." },
      { math: `<span class="m"><span class="fr"><span>π</span><span>2</span></span> &lt; <span class="fr"><span>5π</span><span>6</span></span> &lt; π</span>`, note: "The point is in Quadrant II: x is negative and y is positive." },
      { math: `<span class="m">π − <span class="fr"><span>5π</span><span>6</span></span> = <span class="fr"><span>π</span><span>6</span></span>, &nbsp; <i>P</i>(<span class="fr"><span>π</span><span>6</span></span>) = (<span class="fr"><span>√3</span><span>2</span></span>, <span class="fr"><span>1</span><span>2</span></span>)</span>`, note: "5π/6 is the mirror image of π/6 across the y-axis." },
      { math: `<span class="m"><i>P</i>(<span class="fr"><span>5π</span><span>6</span></span>) = (<span class="c2">−<span class="fr"><span>√3</span><span>2</span></span></span>, <span class="c3"><span class="fr"><span>1</span><span>2</span></span></span>)</span>`, note: "Reflecting across the y-axis changes the sign of x only." },
      { math: `<span class="m"><span class="c5">tan</span> = <span class="fr"><span>1/2</span><span>−√3/2</span></span> = −<span class="fr"><span>1</span><span>√3</span></span> = <span class="c5">−<span class="fr"><span>√3</span><span>3</span></span></span></span>`, note: "Divide y by x, then rationalise the denominator." },
      { math: `<span class="m">(−<span class="fr"><span>√3</span><span>2</span></span>)<sup>2</sup> + (<span class="fr"><span>1</span><span>2</span></span>)<sup>2</sup> = <span class="fr"><span>3</span><span>4</span></span> + <span class="fr"><span>1</span><span>4</span></span> = <span class="c4">1</span> &nbsp;✓</span>`, note: "The point is on the unit circle." }
    ],
    answer: `<span class="m"><span class="c2">cos <span class="fr"><span>17π</span><span>6</span></span> = −<span class="fr"><span>√3</span><span>2</span></span></span>, &nbsp;<span class="c3">sin <span class="fr"><span>17π</span><span>6</span></span> = <span class="fr"><span>1</span><span>2</span></span></span>, &nbsp;<span class="c5">tan <span class="fr"><span>17π</span><span>6</span></span> = −<span class="fr"><span>√3</span><span>3</span></span></span></span>`
  },
  why: `<p>The unit circle turns sine and cosine from triangle ratios into functions of a real number. That is what lets them describe anything that repeats: the height of a seat on a Ferris wheel, the voltage in a wall socket, the position of a vibrating string, the length of daylight over a year. Each of these is a point going around a circle, seen from the side.</p>
<p>The circle also explains facts that would be puzzling in a triangle. Sine and cosine never leave <span class="m">[−1, 1]</span> because the point never leaves the circle. They repeat every <span class="m">2π</span> because the point comes back to where it started. And <span class="m">sin<sup>2</sup> <i>t</i> + cos<sup>2</sup> <i>t</i> = 1</span> is just the equation of the circle.</p>`,
  careers: [
    { role: "Electrical engineer", use: "Models alternating current as a point turning around a circle, so the voltage at time t is a constant times sin(ωt)." },
    { role: "Game developer", use: "Places an object moving in a circle at (r cos t, r sin t) and turns a heading angle into a unit direction vector (cos t, sin t)." },
    { role: "Robotics engineer", use: "Finds the position of a rotating joint's end from its angle as (L cos θ, L sin θ)." },
    { role: "Audio engineer", use: "Builds tones from sine waves, which are the y-coordinate of a point circling at a fixed rate." },
    { role: "Animator", use: "Uses sin t and cos t, which stay between −1 and 1, to make smooth looping motions such as swinging or bobbing." }
  ],
  life: [
    "The height of a Ferris wheel seat as the wheel turns",
    "The tip of a clock hand moving around the dial",
    "A phone's compass turning a heading into north and east components",
    "A spinning bicycle wheel's valve stem going up and down"
  ],
  fields: [
    { name: "Physics", use: "Uniform circular motion and simple harmonic motion are described by cos t and sin t." },
    { name: "Electrical engineering", use: "AC voltage and current are sinusoids, the projections of a rotating point." },
    { name: "Computer graphics", use: "Rotations and circular paths are computed with cosine and sine of an angle in radians." },
    { name: "Signal processing", use: "Signals are broken into sums of sines and cosines of different frequencies." }
  ],
  prereqWhy: {
    "trig-radians": "On a circle of radius 1 an angle of t radians cuts off an arc of length t, which is why t is both a distance and an angle here.",
    "g-trig-ratios": "For a first-quadrant point the unit circle definitions reduce to SOH-CAH-TOA in a right triangle with hypotenuse 1.",
    "g-special-right": "The 30-60-90 and 45-45-90 triangles with hypotenuse 1 give the coordinates of the points at π/6, π/4 and π/3.",
    "g-circle-equations": "The unit circle is the circle x² + y² = 1 centred at the origin, and that equation becomes sin² t + cos² t = 1."
  },
  unlocksWhy: {
    "trig-any-angle": "The six functions of any angle use a point (x, y) at any distance r from the origin; dividing by r scales it back to the unit circle.",
    "trig-sin-cos-graphs": "Unwrapping the unit circle onto a number line, with t across and sin t or cos t up, draws the sine and cosine graphs.",
    "pc-matrix-transform": "The point (cos <i>θ</i>, sin <i>θ</i>) is where the vector (1, 0) lands after a rotation, so these values fill the columns of the rotation matrix."
  },
  beyond: [
    { field: "Calculus I", why: "The derivatives of sin t and cos t, and the limit of sin t / t as t approaches 0, are proved from the unit circle." },
    { field: "Physics (Waves)", why: "A point moving around a circle at constant speed, seen from the side, is simple harmonic motion." },
    { field: "Precalculus", why: "Complex numbers in polar form write the unit circle point as cos t + i sin t." },
    { field: "Computer graphics", why: "Rotating a point by an angle t uses cos t and sin t in a rotation matrix." }
  ],
  mistakes: [
    { wrong: `<span class="m">sin <span class="fr"><span>π</span><span>6</span></span> = <span class="fr"><span>√3</span><span>2</span></span></span>`, fix: `The point for <span class="m">π/6</span> is low and far to the right: <span class="m">(√3/2, 1/2)</span>. Sine is the <span class="m"><i>y</i></span>-coordinate, so <span class="m">sin π/6 = 1/2</span>.` },
    { wrong: `<span class="m">tan <span class="fr"><span>π</span><span>2</span></span> = 0</span>`, fix: `At <span class="m">π/2</span> the point is <span class="m">(0, 1)</span>, so <span class="m"><i>y</i>/<i>x</i> = 1/0</span>: the tangent is undefined.` },
    { wrong: `<span class="m">cos <span class="fr"><span>2π</span><span>3</span></span> = <span class="fr"><span>1</span><span>2</span></span></span>`, fix: `<span class="m">2π/3</span> is in Quadrant II, left of the <span class="m"><i>y</i></span>-axis, so the <span class="m"><i>x</i></span>-coordinate is negative: <span class="m">cos 2π/3 = −1/2</span>.` },
    { wrong: `There is a <span class="m"><i>t</i></span> with <span class="m">sin <i>t</i> = 1.5</span>.`, fix: `Every point on the unit circle has <span class="m">−1 ≤ <i>y</i> ≤ 1</span>, so the range of sine is <span class="m">[−1, 1]</span>.` }
  ],
  practice: [
    { q: `Find the terminal points <span class="m"><i>P</i>(π)</span>, <span class="m"><i>P</i>(3π/2)</span> and <span class="m"><i>P</i>(−π/2)</span>, and find <span class="m">tan π</span>.`,
      a: `<span class="m"><i>P</i>(π) = (−1, 0)</span>, <span class="m"><i>P</i>(3π/2) = (0, −1)</span>, and <span class="m">−π/2</span> is a quarter turn clockwise, so <span class="m"><i>P</i>(−π/2) = (0, −1)</span> as well. <span class="m">tan π = 0/(−1) = 0</span>.` },
    { q: `Find <span class="m">cos(7π/4)</span>, <span class="m">sin(7π/4)</span> and <span class="m">tan(7π/4)</span>.`,
      a: `<span class="m">2π − 7π/4 = π/4</span>, and <span class="m">7π/4</span> is in Quadrant IV, so <span class="m"><i>P</i>(7π/4) = (√2/2, −√2/2)</span>: <span class="m">cos = √2/2</span>, <span class="m">sin = −√2/2</span>, <span class="m">tan = −1</span>.` },
    { q: `The terminal point of <span class="m"><i>t</i></span> is <span class="m">(−3/5, <i>y</i>)</span> and lies in Quadrant III. Find <span class="m">sin <i>t</i></span> and <span class="m">tan <i>t</i></span>.`,
      a: `<span class="m"><i>y</i><sup>2</sup> = 1 − 9/25 = 16/25</span>, and <span class="m"><i>y</i> &lt; 0</span> in Quadrant III, so <span class="m">sin <i>t</i> = −4/5</span>. <span class="m">tan <i>t</i> = (−4/5)/(−3/5) = 4/3</span>.` },
    { q: `<span class="m"><i>P</i>(<i>t</i>) = (−5/13, 12/13)</span>. In which quadrant is the point? Find <span class="m">tan <i>t</i></span>, <span class="m"><i>P</i>(<i>t</i> + π)</span> and <span class="m"><i>P</i>(π − <i>t</i>)</span>.`,
      a: `Quadrant II (<span class="m"><i>x</i> &lt; 0</span>, <span class="m"><i>y</i> &gt; 0</span>); check <span class="m">25/169 + 144/169 = 1</span>. <span class="m">tan <i>t</i> = (12/13)/(−5/13) = −12/5</span>. Adding π moves to the opposite point: <span class="m"><i>P</i>(<i>t</i> + π) = (5/13, −12/13)</span>. <span class="m"><i>P</i>(π − <i>t</i>)</span> is the mirror image across the <span class="m"><i>y</i></span>-axis: <span class="m">(5/13, 12/13)</span>.` }
  ],
  origin: `Ptolemy's chord table (about 150 CE) worked in a circle of radius 60, and Indian and Islamic astronomers tabulated half-chords, the ancestors of the sine, for circles of various radii. Leonhard Euler, in <i>Introductio in analysin infinitorum</i> (1748), took the radius to be 1 and treated sine and cosine as functions of the arc length, the definition used on this page.`
};
