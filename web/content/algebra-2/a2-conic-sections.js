window.ARITH = window.ARITH || {};
ARITH["a2-conic-sections"] = {
  title: "Conic Sections & the General Equation",
  short: "Slice a cone; classify Ax² + Cy² + Dx + Ey + F = 0",
  grade: "Grade 11–12 · college Intermediate/College Algebra",
  hours: 6,
  voice: "plain",
  eyebrow: "Conic sections · slices and the general equation",
  hero: `<span class="m"><span class="c4"><i>A</i></span><i>x</i><sup>2</sup> + <span class="c4"><i>C</i></span><i>y</i><sup>2</sup> + <span class="c4"><i>D</i></span><i>x</i> + <span class="c4"><i>E</i></span><i>y</i> + <span class="c4"><i>F</i></span> = 0</span>`,
  lede: `Cut a double cone with a flat <span class="c1">plane</span> and the edge of the cut is a circle, an ellipse, a parabola or a hyperbola. Each of these <span class="c2">curves</span> has an equation of the form <span class="m"><span class="c4"><i>A</i></span><i>x</i><sup>2</sup> + <span class="c4"><i>C</i></span><i>y</i><sup>2</sup> + <span class="c4"><i>D</i></span><i>x</i> + <span class="c4"><i>E</i></span><i>y</i> + <span class="c4"><i>F</i></span> = 0</span>, and the signs of <span class="m c4"><i>A</i></span> and <span class="m c4"><i>C</i></span> tell you which one it is.`,
  plain: `<p>Picture two ice-cream cones joined tip to tip and going on forever in both directions. That shape is a <b>double cone</b>. Slice it with a flat sheet. A level slice gives a circle. Tilt the sheet a little and the circle stretches into an ellipse, still a closed loop. Tilt it until it is parallel to the side of the cone and the curve can no longer close: that is a parabola. Tilt it further and the sheet cuts both cones, giving two separate pieces: a hyperbola.</p>
<p>If the slice passes exactly through the tip, the cut shrinks to a single point, a single line or two crossing lines. These are the <b>degenerate</b> conics.</p>
<p>Algebra sees the same four curves. Each one has an equation with <span class="m"><i>x</i><sup>2</sup></span>, <span class="m"><i>y</i><sup>2</sup></span> or both, and no <span class="m"><i>xy</i></span> term when the curve sits level with the axes. Look only at the two squared terms. Equal coefficients give a circle. The same sign gives an ellipse. Opposite signs give a hyperbola. Only one squared variable gives a parabola.</p>
<p>To find where the curve sits and how big it is, complete the square in <span class="m"><i>x</i></span> and in <span class="m"><i>y</i></span>, the same move you used to solve quadratic equations. The result is a standard form, and the <span class="c3">centre</span> or <span class="c3">vertex</span> and the lengths can be read straight off it.</p>`,
  formal: `<p>A <b>conic section</b> is the intersection of a plane with a double right circular cone. When its axes are parallel to the coordinate axes, every conic has an equation in <b>general form</b></p>
<div class="display"><span class="c4"><i>A</i></span><i>x</i><sup>2</sup> + <span class="c4"><i>C</i></span><i>y</i><sup>2</sup> + <span class="c4"><i>D</i></span><i>x</i> + <span class="c4"><i>E</i></span><i>y</i> + <span class="c4"><i>F</i></span> = 0, &nbsp; <span class="c4"><i>A</i></span> and <span class="c4"><i>C</i></span> not both 0.</div>
<p>If the graph is a nondegenerate conic, it is a <b>circle</b> when <span class="m"><span class="c4"><i>A</i></span> = <span class="c4"><i>C</i></span></span>, an <b>ellipse</b> when <span class="m"><span class="c4"><i>A</i></span><span class="c4"><i>C</i></span> &gt; 0</span> and <span class="m"><span class="c4"><i>A</i></span> ≠ <span class="c4"><i>C</i></span></span>, a <b>hyperbola</b> when <span class="m"><span class="c4"><i>A</i></span><span class="c4"><i>C</i></span> &lt; 0</span>, and a <b>parabola</b> when <span class="m"><span class="c4"><i>A</i></span><span class="c4"><i>C</i></span> = 0</span>. Completing the square gives the standard forms, with <span class="c3">centre or vertex</span> <span class="m c3">(<i>h</i>, <i>k</i>)</span>:</p>
<div class="display">(<i>x</i> − <i>h</i>)<sup>2</sup> + (<i>y</i> − <i>k</i>)<sup>2</sup> = <i>r</i><sup>2</sup> <span class="dim">circle</span><br><span class="fr"><span>(<i>x</i> − <i>h</i>)<sup>2</sup></span><span><i>a</i><sup>2</sup></span></span> + <span class="fr"><span>(<i>y</i> − <i>k</i>)<sup>2</sup></span><span><i>b</i><sup>2</sup></span></span> = 1 <span class="dim">ellipse</span><br><span class="fr"><span>(<i>x</i> − <i>h</i>)<sup>2</sup></span><span><i>a</i><sup>2</sup></span></span> − <span class="fr"><span>(<i>y</i> − <i>k</i>)<sup>2</sup></span><span><i>b</i><sup>2</sup></span></span> = 1 <span class="dim">hyperbola</span><br>(<i>y</i> − <i>k</i>)<sup>2</sup> = 4<i>p</i>(<i>x</i> − <i>h</i>) <span class="dim">parabola</span></div>
<p>If completing the square leaves a sum of squares equal to 0, the graph is a single point; equal to a negative number, it has no points. A difference of squares equal to 0 is a pair of crossing lines: <span class="m"><i>x</i><sup>2</sup> − 4<i>y</i><sup>2</sup> = 0</span> is the two lines <span class="m"><i>y</i> = ±<span class="fr"><span>1</span><span>2</span></span><i>x</i></span>. These are the degenerate cases.</p>`,
  legend: [
    { c: "c1", sym: `plane`, name: "Cutting plane", desc: "The flat slice through the double cone. Its tilt compared with the cone's side decides the type of curve." },
    { c: "c2", sym: `curve`, name: "Conic", desc: "The curve where the plane meets the cone: circle, ellipse, parabola or hyperbola." },
    { c: "c3", sym: `(<i>h</i>, <i>k</i>)`, name: "Centre or vertex", desc: "Read from the standard form after completing the square." },
    { c: "c4", sym: `<i>A</i>, <i>C</i>`, name: "Coefficients", desc: "The coefficients of <span class=\"m\"><i>x</i><sup>2</sup></span> and <span class=\"m\"><i>y</i><sup>2</sup></span>. Their signs classify the conic; <span class=\"m\"><i>D</i>, <i>E</i>, <i>F</i></span> only move and size it." }
  ],
  steps: {
    title: "How to identify a conic and write it in standard form",
    items: [
      `Write the equation as <span class="m"><i>A</i><i>x</i><sup>2</sup> + <i>C</i><i>y</i><sup>2</sup> + <i>D</i><i>x</i> + <i>E</i><i>y</i> + <i>F</i> = 0</span> and check there is no <span class="m"><i>xy</i></span> term.`,
      `Classify from <span class="m"><i>A</i></span> and <span class="m"><i>C</i></span>: equal means circle, <span class="m"><i>AC</i> &gt; 0</span> ellipse, <span class="m"><i>AC</i> &lt; 0</span> hyperbola, one of them 0 parabola.`,
      `Group the <span class="m"><i>x</i></span>-terms and the <span class="m"><i>y</i></span>-terms and move <span class="m"><i>F</i></span> to the right side.`,
      `Factor <span class="m"><i>A</i></span> out of the <span class="m"><i>x</i></span>-group and <span class="m"><i>C</i></span> out of the <span class="m"><i>y</i></span>-group. Complete each square, and add the same amount, multiplied by the factor outside, to the right side.`,
      `Write each group as a squared binomial. Divide so the right side is 1 (ellipse, hyperbola), or isolate the square (circle, parabola).`,
      `Read the centre or vertex and the lengths <span class="m"><i>a</i></span>, <span class="m"><i>b</i></span>, <span class="m"><i>r</i></span> or <span class="m"><i>p</i></span>. A right side of 0 or a negative number means a degenerate conic.`
    ]
  },
  example: {
    prompt: `Identify the conic <span class="m">4<i>x</i><sup>2</sup> + 9<i>y</i><sup>2</sup> − 16<i>x</i> + 18<i>y</i> − 11 = 0</span>, write it in standard form and find its centre.`,
    lines: [
      { math: `<span class="m"><span class="c4"><i>A</i> = 4</span>, <span class="c4"><i>C</i> = 9</span>: &nbsp; <i>AC</i> = 36 &gt; 0, &nbsp; <i>A</i> ≠ <i>C</i></span>`, note: "Same signs and different coefficients: an ellipse." },
      { math: `<span class="m">4(<i>x</i><sup>2</sup> − 4<i>x</i>) + 9(<i>y</i><sup>2</sup> + 2<i>y</i>) = 11</span>`, note: "Group the x-terms and the y-terms, factor out A and C, and move F to the right." },
      { math: `<span class="m">4(<i>x</i><sup>2</sup> − 4<i>x</i> + 4) + 9(<i>y</i><sup>2</sup> + 2<i>y</i> + 1) = 11 + 16 + 9</span>`, note: "Half of −4 is −2 and (−2)² = 4, which counts 4 · 4 = 16. Half of 2 is 1 and 1² = 1, which counts 9 · 1 = 9." },
      { math: `<span class="m">4(<i>x</i> − 2)<sup>2</sup> + 9(<i>y</i> + 1)<sup>2</sup> = 36</span>`, note: "Write each group as a square." },
      { math: `<span class="m"><span class="fr"><span>(<i>x</i> − 2)<sup>2</sup></span><span>9</span></span> + <span class="fr"><span>(<i>y</i> + 1)<sup>2</sup></span><span>4</span></span> = 1</span>`, note: "Divide both sides by 36 so the right side is 1." },
      { math: `<span class="m">centre <span class="c3">(2, −1)</span>, &nbsp; <i>a</i> = 3, &nbsp; <i>b</i> = 2</span>`, note: "The larger denominator, 9, is under x, so the long axis is horizontal." }
    ],
    answer: `An ellipse: <span class="m"><span class="fr"><span>(<i>x</i> − 2)<sup>2</sup></span><span>9</span></span> + <span class="fr"><span>(<i>y</i> + 1)<sup>2</sup></span><span>4</span></span> = 1</span> with centre <span class="m c3">(2, −1)</span>, reaching 3 units left and right to <span class="m">(−1, −1)</span> and <span class="m">(5, −1)</span>, and 2 units up and down.`
  },
  why: `<p>The conics are the curves of motion and of focusing. Planets and comets move on ellipses, parabolas and hyperbolas around the Sun. Satellite dishes and car headlights are parabolic, telescope mirrors combine parabolas and hyperbolas, and arches and domes are often elliptical.</p>
<p>The general equation is how these curves are stored in a computer or come out of a calculation. Being able to tell the type from two coefficients, and then complete the square to find the centre and size, turns an unreadable line of algebra into a picture you can draw. Every later conic topic, and solving systems of conic equations, starts here.</p>`,
  careers: [
    { role: "Aerospace engineer", use: "Classifies a spacecraft trajectory as an ellipse, parabola or hyperbola to know whether it stays in orbit or escapes." },
    { role: "Optical engineer", use: "Designs telescope mirrors whose cross-sections are parabolas and hyperbolas, as in a Cassegrain telescope." },
    { role: "Civil engineer", use: "Lays out elliptical arches and parabolic road crests from their centre-and-axis equations." },
    { role: "Computer graphics programmer", use: "Stores curves as second-degree equations and tests the coefficients to decide how to draw them." },
    { role: "CNC programmer", use: "Converts conic contours on drawings into centre and axis lengths to generate the cutting path." },
    { role: "Architect", use: "Uses ellipses and hyperbolic shapes for domes, galleries and shell roofs." }
  ],
  life: [
    "A flashlight aimed at a wall at an angle throws an ellipse of light",
    "The shadow edge from a lampshade on a nearby wall is a hyperbola",
    "The surface of water in a tilted glass meets the glass in an ellipse",
    "The arc of a drinking fountain jet is a parabola",
    "Satellite TV dishes have parabolic cross-sections"
  ],
  fields: [
    { name: "Astronomy", use: "Orbits of planets, comets and spacecraft are conics with the Sun or planet at a focus." },
    { name: "Optics", use: "Parabolic and hyperbolic mirrors focus light in telescopes and headlights." },
    { name: "Architecture", use: "Elliptical arches, domes and whispering galleries." },
    { name: "Computer-aided design", use: "Conics are stored as second-degree equations and drawn from their coefficients." }
  ],
  prereqWhy: {
    "g-circle-equations": "The circle (x − h)² + (y − k)² = r² is the first conic. Expanding it gives the general form with A = C, so circles are the model for every other case.",
    "a1-quad-sqrt": "Completing the square, first used to solve quadratic equations, is exactly how a general equation is turned into standard form."
  },
  unlocksWhy: {
    "a2-parabolas": "The case AC = 0 becomes the parabola, studied through its focus, directrix and the value p.",
    "a2-ellipses": "The case AC > 0 with A ≠ C becomes the ellipse, with its foci, axes and eccentricity.",
    "a2-nonlinear-sys": "Solving a nonlinear system means intersecting conics, so you need to recognise each equation's graph first.",
    "pc-rotation": "The general second-degree equation, with the sign of <i>AC</i> sorting conics into types, is extended by adding an <i>xy</i> term, whose discriminant <i>B</i>² − 4<i>AC</i> does the same sorting for a rotated conic."
  },
  beyond: [
    { field: "Precalculus", why: "Rotating the axes removes an xy term, and the polar form r = ep/(1 − e cos θ) gives every conic from one eccentricity." },
    { field: "Physics", why: "A body moving under an inverse-square force, like gravity, travels on a conic." },
    { field: "Linear Algebra", why: "Quadratic forms and eigenvalues classify conics that do have an xy term." },
    { field: "Calculus II", why: "Parametric and polar descriptions of conics are used for arc length and area." }
  ],
  mistakes: [
    { wrong: `Completing the square inside <span class="m">4(<i>x</i><sup>2</sup> − 4<i>x</i> + 4)</span> and adding only 4 to the right side.`, fix: `The 4 inside is multiplied by the 4 outside, so the left side grew by 16. Add 16 to the right side.` },
    { wrong: `Calling <span class="m">3<i>x</i><sup>2</sup> + 3<i>y</i><sup>2</sup> − 12<i>x</i> = 0</span> an ellipse because both squares are positive.`, fix: `<span class="m"><i>A</i> = <i>C</i> = 3</span>, so it is a circle: divide by 3 and complete the square to get <span class="m">(<i>x</i> − 2)<sup>2</sup> + <i>y</i><sup>2</sup> = 4</span>, radius 2.` },
    { wrong: `Graphing <span class="m"><i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> + 4 = 0</span> as a circle of radius 2.`, fix: `It says <span class="m"><i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = −4</span>. A sum of squares is never negative, so there are no points. Always check the right side after completing the square.` }
  ],
  practice: [
    { q: `Write <span class="m"><i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> + 8<i>x</i> − 2<i>y</i> + 8 = 0</span> in standard form. Name the conic, its centre and its radius.`,
      a: `<span class="m"><i>A</i> = <i>C</i> = 1</span>: a circle. <span class="m">(<i>x</i><sup>2</sup> + 8<i>x</i> + 16) + (<i>y</i><sup>2</sup> − 2<i>y</i> + 1) = −8 + 16 + 1</span>, so <span class="m">(<i>x</i> + 4)<sup>2</sup> + (<i>y</i> − 1)<sup>2</sup> = 9</span>: centre <span class="m">(−4, 1)</span>, radius 3.` },
    { q: `Classify without completing the square (each graph is nondegenerate): (a) <span class="m">2<i>x</i><sup>2</sup> − 5<i>y</i><sup>2</sup> + 4<i>x</i> − 7 = 0</span> (b) <span class="m"><i>y</i><sup>2</sup> − 6<i>x</i> + 2<i>y</i> = 0</span> (c) <span class="m">5<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> − 10 = 0</span>.`,
      a: `(a) <span class="m"><i>AC</i> = −10 &lt; 0</span>: hyperbola. (b) <span class="m"><i>A</i> = 0</span>, only <span class="m"><i>y</i></span> is squared: parabola. (c) <span class="m"><i>AC</i> = 5 &gt; 0</span> and <span class="m"><i>A</i> ≠ <i>C</i></span>: ellipse.` },
    { q: `Write <span class="m">9<i>x</i><sup>2</sup> − 4<i>y</i><sup>2</sup> − 54<i>x</i> − 16<i>y</i> + 29 = 0</span> in standard form and identify it.`,
      a: `<span class="m">9(<i>x</i><sup>2</sup> − 6<i>x</i> + 9) − 4(<i>y</i><sup>2</sup> + 4<i>y</i> + 4) = −29 + 81 − 16</span>, so <span class="m">9(<i>x</i> − 3)<sup>2</sup> − 4(<i>y</i> + 2)<sup>2</sup> = 36</span> and <span class="m"><span class="fr"><span>(<i>x</i> − 3)<sup>2</sup></span><span>4</span></span> − <span class="fr"><span>(<i>y</i> + 2)<sup>2</sup></span><span>9</span></span> = 1</span>: a hyperbola with centre <span class="m">(3, −2)</span> opening left and right.` },
    { q: `The equation <span class="m"><i>x</i><sup>2</sup> + 4<i>y</i><sup>2</sup> − 2<i>x</i> + 8<i>y</i> + 5 = 0</span> has <span class="m"><i>AC</i> = 4 &gt; 0</span>. Is its graph an ellipse?`,
      a: `<span class="m">(<i>x</i><sup>2</sup> − 2<i>x</i> + 1) + 4(<i>y</i><sup>2</sup> + 2<i>y</i> + 1) = −5 + 1 + 4</span>, so <span class="m">(<i>x</i> − 1)<sup>2</sup> + 4(<i>y</i> + 1)<sup>2</sup> = 0</span>. A sum of squares is 0 only when both are 0, so the graph is the single point <span class="m">(1, −1)</span>: a degenerate ellipse.` }
  ],
  origin: `<p>Menaechmus, a Greek mathematician of the 4th century BC, met these curves while working on the problem of doubling the cube. Around 200 BC Apollonius of Perga wrote the eight books of the <i>Conics</i>, obtained all three curves from a single double cone by changing the angle of the cutting plane, and gave them the names ellipse, parabola and hyperbola. In the 1630s Fermat and Descartes described curves by equations, and Fermat showed that every second-degree equation in two variables describes a conic or one of its degenerate cases.</p>`
};
