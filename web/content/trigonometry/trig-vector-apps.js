window.ARITH = window.ARITH || {};
ARITH["trig-vector-apps"] = {
  title: "Applications of Vectors",
  short: "Resultant forces, equilibrium, inclines and wind",
  grade: "Grade 11–12 · college Trigonometry",
  hours: 4,
  voice: "plain",
  eyebrow: "Trigonometry · vectors",
  hero: `<span class="m"><span class="c5"><b>g</b></span> = <span class="c1"><b>a</b></span> + <span class="c2"><b>w</b></span> &nbsp;&nbsp; <span class="c1"><b>F</b><sub>1</sub></span> + <span class="c2"><b>F</b><sub>2</sub></span> + <b>W</b> = <b>0</b></span>`,
  lede: `Forces and velocities add as vectors. Split each one into components, add the components, and rebuild the magnitude and direction; or draw the triangle the vectors make and solve it with the law of cosines.`,
  plain: `<p>A boat crossing a river is pushed by its engine and carried by the current. A plane flies through air that is itself moving. A lamp hanging from two wires is pulled by each wire and by its own weight. In each case several vectors act at once, and what actually happens is decided by their sum, the <b>resultant</b>.</p>
<p>There are two ways to find a resultant. The first is to break every vector into its horizontal and vertical parts, add the parts, and turn the totals back into a size and a direction. This works for any number of vectors. The second is to draw the vectors tip to tail, which makes a triangle, and solve that triangle with the law of cosines and the law of sines. This is quick when there are only two.</p>
<p>When an object is not moving, or moves at a steady velocity, the forces on it cancel. Their resultant is the zero vector, so the horizontal parts add to zero and so do the vertical parts. That gives two equations, enough to find two unknown forces such as the tensions in two cables.</p>
<p>Navigation adds one more step: directions are given as <b>bearings</b>, measured clockwise from north, and these must be converted to angles from the positive x-axis before using cosine and sine.</p>`,
  formal: `<p>The <b>resultant</b> of forces <span class="m"><b>F</b><sub>1</sub>, …, <b>F</b><sub><i>n</i></sub></span> is <span class="m"><b>R</b> = <b>F</b><sub>1</sub> + ⋯ + <b>F</b><sub><i>n</i></sub></span>, found by adding components. An object is in <b>equilibrium</b> when <span class="m"><b>R</b> = <b>0</b></span>, that is, when the x-components and the y-components each sum to 0. For two vectors with angle <span class="m"><i>φ</i></span> between them (tails together), the parallelogram has angle <span class="m">180° − <i>φ</i></span> opposite the diagonal, so by the law of cosines</p>
<div class="display"><span class="c5">‖<b>F</b><sub>1</sub> + <b>F</b><sub>2</sub>‖</span><sup>2</sup> = <span class="c1">‖<b>F</b><sub>1</sub>‖</span><sup>2</sup> + <span class="c2">‖<b>F</b><sub>2</sub>‖</span><sup>2</sup> + 2<span class="c1">‖<b>F</b><sub>1</sub>‖</span><span class="c2">‖<b>F</b><sub>2</sub>‖</span> cos <span class="c4"><i>φ</i></span></div>
<p>On a ramp inclined at <span class="m"><span class="c4"><i>θ</i></span></span>, a weight <span class="m"><b>W</b></span> splits into a component <span class="m"><span class="c3">‖<b>W</b>‖ sin <i>θ</i></span></span> down the slope and <span class="m"><span class="c3">‖<b>W</b>‖ cos <i>θ</i></span></span> into the surface. A <b>bearing</b> <span class="m"><i>β</i></span> is measured clockwise from north (written 120°, or N 60° E style as a quadrant bearing); the direction angle is <span class="m"><i>θ</i> = 90° − <i>β</i></span>, adding 360° if needed, and back again <span class="m"><i>β</i> = 90° − <i>θ</i></span>.</p>
<p>For aircraft, the <b>heading</b> is the bearing the nose points and the <b>airspeed</b> is the speed relative to the air: together they form the air velocity <span class="m"><span class="c1"><b>a</b></span></span>. With wind velocity <span class="m"><span class="c2"><b>w</b></span></span>, the ground velocity is <span class="m"><span class="c5"><b>g</b></span> = <b>a</b> + <b>w</b></span>; its magnitude is the <b>ground speed</b> and its bearing is the <b>course</b> (or track). A wind "from 200°" blows toward 020°. Boats work the same way with water current in place of wind.</p>`,
  legend: [
    { c: "c1", sym: `<b>F</b><sub>1</sub>, <b>a</b>`, name: "First force or velocity", desc: "The first vector: a force, or the plane's air velocity (heading and airspeed)." },
    { c: "c2", sym: `<b>F</b><sub>2</sub>, <b>w</b>`, name: "Second force or velocity", desc: "The second vector: another force, or the wind or current." },
    { c: "c5", sym: `<b>R</b>, <b>g</b>`, name: "Resultant", desc: "The sum of the vectors: the net force, or the ground velocity (ground speed and course)." },
    { c: "c3", sym: `‖<b>W</b>‖ sin <i>θ</i>`, name: "Components", desc: "Parts of a vector along chosen directions, such as along and across a ramp." },
    { c: "c4", sym: `<i>θ</i>, <i>φ</i>`, name: "Angle", desc: "The ramp's angle, or the angle between two vectors." }
  ],
  steps: {
    title: "How to solve a vector application",
    items: [
      `Draw a sketch with every vector as an arrow from one point. For navigation, mark north and convert each bearing <span class="m"><i>β</i></span> to a direction angle <span class="m"><i>θ</i> = 90° − <i>β</i></span>. Check whether a wind is given as "from" or "toward".`,
      `Write each vector in components: <span class="m">⟨‖<b>v</b>‖ cos <i>θ</i>, ‖<b>v</b>‖ sin <i>θ</i>⟩</span>.`,
      `For a resultant, add the components. For equilibrium, set the sum of x-components and the sum of y-components to 0 and solve for the unknowns.`,
      `Find the magnitude <span class="m">√<span class="ov"><i>x</i><sup>2</sup> + <i>y</i><sup>2</sup></span></span> and the direction angle, fixing the quadrant. Convert back to a bearing if one is asked for.`,
      `With only two vectors, check with the law of cosines on the tip-to-tail triangle; the angle in the triangle is 180° minus the angle between the vectors.`,
      `Round only at the end and state the units.`
    ]
  },
  example: {
    prompt: `A plane flies on a heading of 120° with an airspeed of 400 mph. The wind blows from 200° at 50 mph. Find the ground speed to the nearest mph and the course to the nearest tenth of a degree.`,
    lines: [
      { math: `<span class="m"><span class="c1"><b>a</b></span>: <i>θ</i> = 90° − 120° = −30° → 330°; &nbsp; <span class="c2"><b>w</b></span>: toward 020°, <i>θ</i> = 90° − 20° = 70°</span>`, note: "Bearings become direction angles. A wind from 200° blows toward 200° − 180° = 020°." },
      { math: `<span class="m"><span class="c1"><b>a</b></span> = ⟨400 cos 330°, 400 sin 330°⟩ = ⟨200√3, −200⟩ ≈ ⟨346.41, −200.00⟩</span>`, note: "The air velocity in components." },
      { math: `<span class="m"><span class="c2"><b>w</b></span> = ⟨50 cos 70°, 50 sin 70°⟩ ≈ ⟨17.10, 46.98⟩</span>`, note: "The wind in components." },
      { math: `<span class="m"><span class="c5"><b>g</b></span> = <b>a</b> + <b>w</b> ≈ ⟨363.51, −153.02⟩</span>`, note: "Add x with x and y with y." },
      { math: `<span class="m"><span class="c5">‖<b>g</b>‖</span> ≈ √<span class="ov">363.51<sup>2</sup> + (−153.02)<sup>2</sup></span> ≈ 394.40</span>`, note: "Ground speed in mph." },
      { math: `<span class="m">tan<sup>−1</sup>(−153.02/363.51) ≈ −22.83° → <i>θ</i> ≈ 337.17°</span>`, note: "The vector points into Quadrant IV, so add 360 degrees." },
      { math: `<span class="m"><i>β</i> = 90° − 337.17° = −247.17° → 112.83°</span>`, note: "Back to a bearing: the plane drifts about 7.2 degrees to the left of its heading." },
      { math: `<span class="m">‖<b>g</b>‖<sup>2</sup> = 400<sup>2</sup> + 50<sup>2</sup> − 2(400)(50) cos 80° ⇒ ‖<b>g</b>‖ ≈ 394.40</span>`, note: "Check with the law of cosines: the heading and the wind differ by 100 degrees, so the triangle's angle between them is 80 degrees." }
    ],
    answer: `Ground speed about <span class="m c5">394 mph</span> on a course of about <span class="m c5">112.8°</span>.`
  },
  why: `<p>Engineers, pilots and sailors solve these problems every day. A bridge or a crane is safe only if the forces at every joint balance; a flight plan works only if the heading allows for the wind. The method is always the same: components in, components added, magnitude and direction out.</p>
<p>The examples here are the classic cases of a first physics course: concurrent forces, equilibrium of a hanging weight, a block on an incline, and relative velocity.</p>`,
  careers: [
    { role: "Airline pilot", use: "Computes the wind correction angle and ground speed from the forecast winds aloft before and during each flight." },
    { role: "Structural engineer", use: "Checks that the forces at each joint of a truss sum to zero so the structure stays in equilibrium." },
    { role: "Ship's navigator", use: "Combines the ship's course through the water with tidal currents to plot the course made good." },
    { role: "Crane operator and rigger", use: "Works out cable tensions from the load and the sling angles to choose rated slings." },
    { role: "Civil engineer", use: "Resolves a vehicle's weight along and across a road grade to design braking distances and retaining walls." },
    { role: "Drone flight programmer", use: "Corrects each flight leg for measured wind so the drone tracks its planned path." }
  ],
  life: [
    "Swimming across a river, you aim upstream so the current carries you straight across",
    "A picture hung by a wire pulls harder on the wire when the wire is nearly flat",
    "On a steep driveway a parked car leans on its brakes with part of its weight",
    "Flights eastward across the US are often shorter because of the jet stream behind them",
    "Two tugboats pulling a ship at an angle move it along the diagonal between them"
  ],
  fields: [
    { name: "Physics", use: "Net force, equilibrium and relative velocity are vector sums done by components." },
    { name: "Aviation and navigation", use: "Headings, courses, winds and currents are combined as vectors in bearing form." },
    { name: "Civil and mechanical engineering", use: "Statics balances every force on a joint or a beam." },
    { name: "Robotics", use: "A robot sums thrust, drag and gravity to decide how to move." }
  ],
  prereqWhy: {
    "trig-vectors": "Every problem here writes vectors in components from a magnitude and direction angle, adds them, and finds the magnitude and direction of the sum.",
    "trig-law-cosines": "Two vectors drawn tip to tail form a triangle, and the law of cosines gives the resultant's magnitude directly from the two magnitudes and the angle between them."
  },
  unlocksWhy: {
    "pc-parametric-motion": "Splitting an initial velocity into horizontal and vertical components with <i>v</i> cos <i>θ</i> and <i>v</i> sin <i>θ</i> gives the two parametric equations for a projectile."
  },
  beyond: [
    { field: "Physics (Mechanics)", why: "Free-body diagrams, Newton's second law and relative motion are these same vector sums with units of force and velocity." },
    { field: "Engineering", why: "Statics courses solve trusses and frames by writing equilibrium at every joint." },
    { field: "Calculus III", why: "Forces and velocities become three-dimensional and can change from point to point as vector fields." },
    { field: "Navigation/Surveying", why: "Dead reckoning and current correction add velocity vectors given as bearings." }
  ],
  mistakes: [
    { wrong: `A wind "from 200°" is drawn pointing toward 200°.`, fix: `Winds are named by where they come from. A wind from 200° blows toward 020°, so its direction angle is <span class="m">90° − 20° = 70°</span>.` },
    { wrong: `A bearing of 120° is used as the direction angle: <span class="m">⟨400 cos 120°, 400 sin 120°⟩</span>.`, fix: `Bearings run clockwise from north; direction angles run counterclockwise from east. Convert first: <span class="m"><i>θ</i> = 90° − 120° = −30°</span>, or 330°.` },
    { wrong: `Two forces of 30 N and 40 N at 60° to each other give a resultant of 70 N.`, fix: `Magnitudes add only when the forces point the same way. Here <span class="m">‖<b>R</b>‖<sup>2</sup> = 30<sup>2</sup> + 40<sup>2</sup> + 2(30)(40) cos 60° = 3700</span>, so about 60.8 N.` },
    { wrong: `In the tip-to-tail triangle, the angle opposite the resultant is the angle between the vectors.`, fix: `The triangle's angle is 180° minus the angle between the vectors, which is why the law of cosines in the tip-to-tail form has a minus sign: <span class="m">30<sup>2</sup> + 40<sup>2</sup> − 2(30)(40) cos 120°</span> gives the same 3700.` }
  ],
  practice: [
    { q: `Forces of 30 N and 40 N act on an object, with an angle of 60° between them. Find the magnitude of the resultant to the nearest tenth and the angle it makes with the 40-N force to the nearest tenth of a degree.`, a: `<span class="m">‖<b>R</b>‖<sup>2</sup> = 900 + 1600 + 2400 cos 60° = 3700</span>, so <span class="m">‖<b>R</b>‖ = √3700 ≈ 60.8 N</span>. In the triangle the angle opposite the 30-N side is <span class="m"><i>α</i></span> with <span class="m">sin <i>α</i> = 30 sin 120°/√3700</span>, so <span class="m"><i>α</i> ≈ 25.3°</span>.` },
    { q: `A 500-lb cart stands on a ramp inclined at 12°. What force parallel to the ramp keeps it from rolling down, and what is the force against the ramp? Round to the nearest tenth of a pound.`, a: `Along the ramp: <span class="m">500 sin 12° ≈ 104.0 lb</span>. Against the ramp: <span class="m">500 cos 12° ≈ 489.1 lb</span>.` },
    { q: `A 200-N lamp hangs from two cables that make angles of 30° and 45° with the horizontal ceiling. Find the tension in each cable to the nearest tenth of a newton.`, a: `x: <span class="m"><i>T</i><sub>1</sub> cos 30° = <i>T</i><sub>2</sub> cos 45°</span>; y: <span class="m"><i>T</i><sub>1</sub> sin 30° + <i>T</i><sub>2</sub> sin 45° = 200</span>. Solving, <span class="m"><i>T</i><sub>1</sub> = 200 cos 45°/sin 75° = 200(√3 − 1) ≈ 146.4 N</span> in the 30° cable and <span class="m"><i>T</i><sub>2</sub> = 200 cos 30°/sin 75° ≈ 179.3 N</span> in the 45° cable.` },
    { q: `A boat moves at 8 km/h relative to the water in a river 0.5 km wide with a 3 km/h current. At what angle upstream from straight across must it head to land directly opposite, and how long does the crossing take? Round to the nearest tenth.`, a: `The upstream part of the boat's velocity must cancel the current: <span class="m">8 sin <i>α</i> = 3</span>, so <span class="m"><i>α</i> = sin<sup>−1</sup>(3/8) ≈ 22.0°</span>. The speed across is <span class="m">√<span class="ov">64 − 9</span> = √55 ≈ 7.42 km/h</span>, so the time is <span class="m">0.5/√55 h ≈ 4.0 min</span>.` }
  ],
  origin: `Simon Stevin's De Beghinselen der Weeghconst (1586) analysed a chain draped over an inclined plane and showed how a weight resolves into parts along and across the slope, an early form of the triangle of forces. Pierre Varignon (1687) and Isaac Newton's Principia (1687) both stated the parallelogram rule for combining forces, which became the basis of statics.`
};
