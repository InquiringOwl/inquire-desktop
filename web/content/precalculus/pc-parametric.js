window.ARITH = window.ARITH || {};
ARITH["pc-parametric"] = {
  title: "Parametric Equations",
  short: "Curves traced by a point whose x and y both depend on t",
  grade: "Grade 12 · college Precalculus",
  hours: 4,
  voice: "plain",
  eyebrow: "Parametric equations · curves and orientation",
  hero: `<span class="m"><span class="c2"><i>x</i> = 1 + 2<span class="c1"><i>t</i></span></span>, &nbsp;<span class="c3"><i>y</i> = <span class="c1"><i>t</i></span><sup>2</sup> − 3</span>, &nbsp;<span class="c4">−2 ≤ <span class="c1"><i>t</i></span> ≤ 2</span></span>`,
  lede: `A curve can be described by two equations, one for <span class="m"><i>x</i></span> and one for <span class="m"><i>y</i></span>, both driven by a third variable <span class="m"><i>t</i></span>. The pair says where a moving point is at each value of <span class="m"><i>t</i></span>, and in which direction it travels.`,
  plain: `<p>Think of <span class="m"><i>t</i></span> as a clock. At each moment a point has a horizontal position <span class="m"><i>x</i>(<i>t</i>)</span> and a vertical position <span class="m"><i>y</i>(<i>t</i>)</span>. As the clock runs, the point moves and draws a curve.</p>
<p>The curve alone does not show the clock. Two points can draw the same circle, one fast and one slow, or one clockwise and one counterclockwise. The equations carry that extra information: where the point starts, where it ends, and which way it goes. That direction is the <b>orientation</b> of the curve.</p>
<p>To draw such a curve, make a table: choose values of <span class="m"><i>t</i></span>, compute <span class="m"><i>x</i></span> and <span class="m"><i>y</i></span> for each, plot the points in order and connect them. To recognise the curve, remove <span class="m"><i>t</i></span> from the two equations and get one equation in <span class="m"><i>x</i></span> and <span class="m"><i>y</i></span>, such as a line, a parabola or a circle.</p>`,
  formal: `<p>If <span class="m"><i>f</i></span> and <span class="m"><i>g</i></span> are functions defined on an interval <span class="m"><i>I</i></span>, the set of points <span class="m">(<i>f</i>(<i>t</i>), <i>g</i>(<i>t</i>))</span> for <span class="m"><i>t</i> ∈ <i>I</i></span> is a <b>plane curve</b>. The equations <span class="m"><span class="c2"><i>x</i> = <i>f</i>(<i>t</i>)</span>, <span class="c3"><i>y</i> = <i>g</i>(<i>t</i>)</span></span> are <b>parametric equations</b> of the curve and <span class="m c1"><i>t</i></span> is the <b>parameter</b>. The direction in which the point moves as <span class="m"><i>t</i></span> increases is the curve's <b>orientation</b>; for <span class="m"><span class="c4"><i>a</i> ≤ <i>t</i> ≤ <i>b</i></span></span> the <b>initial point</b> is <span class="m">(<i>f</i>(<i>a</i>), <i>g</i>(<i>a</i>))</span> and the <b>terminal point</b> is <span class="m">(<i>f</i>(<i>b</i>), <i>g</i>(<i>b</i>))</span>.</p>
<p><b>Eliminating the parameter</b> gives a <span class="c5">rectangular equation</span> in <span class="m"><i>x</i></span> and <span class="m"><i>y</i></span>: solve one equation for <span class="m"><i>t</i></span> and substitute into the other, or use an identity such as <span class="m">cos<sup>2</sup> <i>t</i> + sin<sup>2</sup> <i>t</i> = 1</span>. The parametric curve may be only part of the rectangular graph, so restrict <span class="m"><i>x</i></span> and <span class="m"><i>y</i></span> to the values the parameter actually produces.</p>
<div class="display">segment from (<i>x</i><sub>0</sub>, <i>y</i><sub>0</sub>) to (<i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>): &nbsp;<i>x</i> = <i>x</i><sub>0</sub> + (<i>x</i><sub>1</sub> − <i>x</i><sub>0</sub>)<i>t</i>, &nbsp;<i>y</i> = <i>y</i><sub>0</sub> + (<i>y</i><sub>1</sub> − <i>y</i><sub>0</sub>)<i>t</i>, &nbsp;0 ≤ <i>t</i> ≤ 1<br>ellipse: &nbsp;<i>x</i> = <i>h</i> + <i>a</i> cos <i>t</i>, &nbsp;<i>y</i> = <i>k</i> + <i>b</i> sin <i>t</i>, &nbsp;0 ≤ <i>t</i> &lt; 2π &nbsp;⇒ &nbsp;<span class="fr"><span>(<i>x</i> − <i>h</i>)<sup>2</sup></span><span><i>a</i><sup>2</sup></span></span> + <span class="fr"><span>(<i>y</i> − <i>k</i>)<sup>2</sup></span><span><i>b</i><sup>2</sup></span></span> = 1 &nbsp;(a circle when <i>a</i> = <i>b</i> = <i>r</i>)<br>graph of <i>y</i> = <i>f</i>(<i>x</i>): &nbsp;<i>x</i> = <i>t</i>, &nbsp;<i>y</i> = <i>f</i>(<i>t</i>)</div>
<p>A curve has many parametrisations. <span class="m"><i>x</i> = cos <i>t</i>, <i>y</i> = sin <i>t</i></span> and <span class="m"><i>x</i> = cos 2<i>t</i>, <i>y</i> = sin 2<i>t</i></span> for <span class="m">0 ≤ <i>t</i> ≤ 2π</span> both give the unit circle counterclockwise from <span class="m">(1, 0)</span>, but the second goes around twice. <span class="m"><i>x</i> = sin <i>t</i>, <i>y</i> = cos <i>t</i></span> gives the same circle clockwise from <span class="m">(0, 1)</span>.</p>`,
  legend: [
    { c: "c1", sym: `<i>t</i>`, name: "Parameter", desc: "The input that drives both coordinates; often time. The amber point is the position at the current t." },
    { c: "c2", sym: `<i>x</i>(<i>t</i>)`, name: "x-component", desc: "The horizontal position as a function of t." },
    { c: "c3", sym: `<i>y</i>(<i>t</i>)`, name: "y-component", desc: "The vertical position as a function of t." },
    { c: "c4", sym: `<i>a</i> ≤ <i>t</i> ≤ <i>b</i>`, name: "Parameter interval", desc: "The values of t used; its ends give the initial and terminal points." },
    { c: "c5", sym: `<i>F</i>(<i>x</i>, <i>y</i>) = 0`, name: "Rectangular equation", desc: "The equation left after eliminating t: the shape of the path without its timing." }
  ],
  steps: {
    title: "How to work with a parametric curve",
    items: [
      `Make a table of <span class="m"><i>t</i></span>, <span class="m"><span class="c2"><i>x</i>(<i>t</i>)</span></span>, <span class="m"><span class="c3"><i>y</i>(<i>t</i>)</span></span> for several values in the <span class="c4">parameter interval</span>, including its ends.`,
      `Plot the points in order of increasing <span class="m"><i>t</i></span> and connect them. Draw arrows to show the orientation.`,
      `Eliminate the parameter: solve the simpler equation for <span class="m"><i>t</i></span> and substitute, or use <span class="m">cos<sup>2</sup> <i>t</i> + sin<sup>2</sup> <i>t</i> = 1</span> when the equations contain <span class="m">cos <i>t</i></span> and <span class="m">sin <i>t</i></span>.`,
      `Simplify the <span class="c5">rectangular equation</span> and name the curve.`,
      `Restrict <span class="m"><i>x</i></span> or <span class="m"><i>y</i></span> to the values the parameter interval produces.`,
      `To parametrise a segment, start at one endpoint and add <span class="m"><i>t</i></span> times the change to the other, with <span class="m">0 ≤ <i>t</i> ≤ 1</span>.`
    ]
  },
  example: {
    prompt: `Sketch the curve <span class="m"><i>x</i> = 1 + 2<i>t</i>, <i>y</i> = <i>t</i><sup>2</sup> − 3</span>, <span class="m">−2 ≤ <i>t</i> ≤ 2</span>, show its orientation, and find a rectangular equation.`,
    lines: [
      { math: `<span class="m"><i>t</i> = −2, −1, 0, 1, 2</span>`, note: "Choose values across the interval, including both ends." },
      { math: `<span class="m">(−3, 1), (−1, −2), (1, −3), (3, −2), (5, 1)</span>`, note: "x = 1 + 2t and y = t² − 3 for each t." },
      { math: `<span class="m"><i>t</i> = <span class="fr"><span><i>x</i> − 1</span><span>2</span></span></span>`, note: "Solve the x-equation for t." },
      { math: `<span class="m"><i>y</i> = <span class="fr"><span>(<i>x</i> − 1)<sup>2</sup></span><span>4</span></span> − 3</span>`, note: "Substitute into the y-equation: a parabola with vertex (1, −3)." },
      { math: `<span class="m">−3 ≤ <i>x</i> ≤ 5</span>`, note: "x runs from 1 + 2(−2) = −3 to 1 + 2(2) = 5." },
      { math: `<span class="m">(−3, 1) → (1, −3) → (5, 1)</span>`, note: "x increases with t, so the point moves left to right." }
    ],
    answer: `The arc of the parabola <span class="m c5"><i>y</i> = (<i>x</i> − 1)<sup>2</sup>/4 − 3</span> for <span class="m">−3 ≤ <i>x</i> ≤ 5</span>, traced from <span class="m">(−3, 1)</span> through the vertex <span class="m">(1, −3)</span> to <span class="m">(5, 1)</span>.`
  },
  why: `<p>Many curves are not graphs of functions: a circle fails the vertical line test, and a path that loops back cannot be written as <span class="m"><i>y</i> = <i>f</i>(<i>x</i>)</span>. Parametric equations handle all of them, and they also record time, speed and direction. That is why physics, animation, robotics and computer-aided design describe motion and shapes this way, and why calculus later finds slopes, lengths and areas of curves from their parametric form.</p>`,
  careers: [
    { role: "Animator", use: "Moves characters and cameras along paths given as x(t), y(t) keyframe curves." },
    { role: "CNC machinist", use: "Programs tool paths for arcs and lines, which the controller interpolates as parametric segments." },
    { role: "Robotics engineer", use: "Plans a robot arm's trajectory as coordinates over time so it reaches each point at the right moment." },
    { role: "Game developer", use: "Moves projectiles and enemies along parametric paths and checks where two of them are at the same time." },
    { role: "Typeface designer", use: "Draws letter outlines with Bézier curves, which are parametric polynomials in t." },
    { role: "Air traffic controller", use: "Tracks each aircraft's position as a function of time to keep separation between flight paths." }
  ],
  life: [
    "A GPS track records where you were at each moment, not just the shape of the route",
    "A spirograph drawing is a curve traced by a point on a turning wheel",
    "The path of a car on a roundabout is a circle with a direction",
    "Two runners on the same track can be in different places at the same time",
    "Video game characters follow paths given point by point over time"
  ],
  fields: [
    { name: "Physics", use: "Position vectors x(t), y(t) describe motion; velocity is the rate of change of each component." },
    { name: "Computer graphics", use: "Bézier and spline curves are parametric; fonts and vector drawings are built from them." },
    { name: "Engineering", use: "Cam profiles, gear teeth and tool paths are specified parametrically." },
    { name: "Astronomy", use: "Orbits are tracked as positions over time, not only as ellipses." }
  ],
  prereqWhy: {
    "trig-sinusoids": "Circles, ellipses and Lissajous figures use cos t and sin t as coordinates, and their periods decide when the curve closes.",
    "a2-func-ops": "Each coordinate is a function of t, and eliminating t is a composition: substitute t = g⁻¹(x) into y = f(t)."
  },
  unlocksWhy: {
    "pc-parametric-motion": "Projectiles and rolling wheels are parametric curves with t as time: the next topic reads flight time, range and height from x(t) and y(t)."
  },
  beyond: [
    { field: "Calculus II", why: "The slope of a parametric curve is (dy/dt)/(dx/dt), and arc length and area are integrals in t." },
    { field: "Calculus III", why: "Space curves r(t) = (x(t), y(t), z(t)) give velocity, curvature and line integrals." },
    { field: "Physics (Mechanics)", why: "Two-dimensional motion is analysed component by component, each a function of time." },
    { field: "Computer graphics", why: "Bézier curves and splines are polynomial parametric curves controlled by a few points." }
  ],
  mistakes: [
    { wrong: `Eliminating <span class="m"><i>t</i></span> from <span class="m"><i>x</i> = √<span class="ov"><i>t</i></span>, <i>y</i> = <i>t</i></span> and drawing the whole parabola <span class="m"><i>y</i> = <i>x</i><sup>2</sup></span>.`, fix: `Since <span class="m"><i>x</i> = √<span class="ov"><i>t</i></span> ≥ 0</span>, the curve is only the right half: <span class="m"><i>y</i> = <i>x</i><sup>2</sup></span>, <span class="m"><i>x</i> ≥ 0</span>. Always restrict to the values the parameter produces.` },
    { wrong: `Treating the rectangular equation as the whole answer and losing the direction.`, fix: `The rectangular equation gives the shape only. State the orientation from the table or from how <span class="m"><i>x</i></span> or <span class="m"><i>y</i></span> changes with <span class="m"><i>t</i></span>.` },
    { wrong: `For <span class="m"><i>x</i> = 3 cos <i>t</i>, <i>y</i> = 2 sin <i>t</i></span>, writing <span class="m"><i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = 1</span>.`, fix: `Divide first: <span class="m">cos <i>t</i> = <i>x</i>/3</span>, <span class="m">sin <i>t</i> = <i>y</i>/2</span>, so <span class="m"><i>x</i><sup>2</sup>/9 + <i>y</i><sup>2</sup>/4 = 1</span>, an ellipse.` }
  ],
  practice: [
    { q: `Eliminate the parameter: <span class="m"><i>x</i> = <i>t</i> + 2, <i>y</i> = 3<i>t</i> − 1</span>.`, a: `<span class="m"><i>t</i> = <i>x</i> − 2</span>, so <span class="m"><i>y</i> = 3(<i>x</i> − 2) − 1 = 3<i>x</i> − 7</span>, a line.` },
    { q: `Describe the curve <span class="m"><i>x</i> = 4 cos <i>t</i>, <i>y</i> = 4 sin <i>t</i></span>, <span class="m">0 ≤ <i>t</i> ≤ π</span>, with its orientation.`, a: `<span class="m"><i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = 16</span>; with <span class="m">sin <i>t</i> ≥ 0</span> it is the upper half of the circle of radius 4, traced counterclockwise from <span class="m">(4, 0)</span> to <span class="m">(−4, 0)</span>.` },
    { q: `Parametrise the segment from <span class="m">(1, −2)</span> to <span class="m">(4, 7)</span> with <span class="m">0 ≤ <i>t</i> ≤ 1</span>, and find the point at <span class="m"><i>t</i> = 1/2</span>.`, a: `<span class="m"><i>x</i> = 1 + 3<i>t</i>, <i>y</i> = −2 + 9<i>t</i></span>. At <span class="m"><i>t</i> = 1/2</span>: <span class="m">(5/2, 5/2)</span>, the midpoint.` },
    { q: `Eliminate the parameter: <span class="m"><i>x</i> = 1 + 2 cos <i>t</i>, <i>y</i> = −3 + 5 sin <i>t</i></span>, <span class="m">0 ≤ <i>t</i> &lt; 2π</span>. Where is the point at <span class="m"><i>t</i> = π/2</span>?`, a: `<span class="m">cos <i>t</i> = (<i>x</i> − 1)/2</span>, <span class="m">sin <i>t</i> = (<i>y</i> + 3)/5</span>, so <span class="m">(<i>x</i> − 1)<sup>2</sup>/4 + (<i>y</i> + 3)<sup>2</sup>/25 = 1</span>, an ellipse centred at <span class="m">(1, −3)</span>, counterclockwise. At <span class="m"><i>t</i> = π/2</span> the point is <span class="m">(1, 2)</span>, the top vertex.` }
  ],
  origin: `<p>Describing a curve by a moving point is as old as the study of motion. Galileo's <i>Two New Sciences</i> (1638) built the path of a projectile from a steady horizontal motion and a uniformly accelerated vertical motion, the two coordinates as separate functions of time. Newton's method of fluxions (written about 1671) treated <span class="m"><i>x</i></span> and <span class="m"><i>y</i></span> as quantities flowing with time, and Euler used parameters freely to describe curves in the eighteenth century.</p>`
};
