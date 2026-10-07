window.ARITH = window.ARITH || {};

ARITH["mech-vector-products"] = {
  title: "Dot & Cross Products",
  short: "Multiply vectors: a projection or a perpendicular area",
  grade: "College PHYS 1xx · University Physics I",
  hours: 5,
  voice: "plain",
  eyebrow: "Mechanics · vectors",
  hero: `<span class="m"><span class="c2"><b>A</b></span> · <span class="c3"><b>B</b></span> = <i>AB</i> cos <span class="c4"><i>φ</i></span> &nbsp;&nbsp; |<span class="c2"><b>A</b></span> × <span class="c3"><b>B</b></span>| = <i>AB</i> sin <span class="c4"><i>φ</i></span></span>`,
  lede: `There are two useful ways to multiply vectors. The <b>dot product</b> gives a scalar that measures how much two vectors point the same way. The <b>cross product</b> gives a vector perpendicular to both, whose length is the <span class="c1">area</span> they span.`,
  plain: `<p>Pull a sled with a rope angled upward and only part of your pull moves it forward. That useful part is your force's <b>projection</b> onto the direction of motion, <span class="m"><i>F</i> cos <i>φ</i></span>. Multiply it by the distance and you get the work done. This "length of one times the matching part of the other" is the <b>dot product</b>, <span class="m"><b>A</b> · <b>B</b> = <i>AB</i> cos <i>φ</i></span>. It is a plain number: positive when the vectors point roughly the same way, zero when they are perpendicular, negative when they point roughly opposite ways.</p>
<p>Now turn a bolt with a wrench. What matters is the part of the force perpendicular to the handle, <span class="m"><i>F</i> sin <i>φ</i></span>, times the handle length. This leads to the <b>cross product</b> <span class="m"><b>A</b> × <b>B</b></span>. Its size, <span class="m"><i>AB</i> sin <i>φ</i></span>, is the area of the parallelogram the two vectors make. Its direction is perpendicular to both, fixed by the <b>right-hand rule</b>: curl the fingers of your right hand from <span class="m"><b>A</b></span> toward <span class="m"><b>B</b></span> and your thumb points along <span class="m"><b>A</b> × <b>B</b></span>. Swapping the order reverses it.</p>
<p>With components both products become arithmetic. The dot product multiplies matching components and adds: <span class="m"><i>A</i><sub>x</sub><i>B</i><sub>x</sub> + <i>A</i><sub>y</sub><i>B</i><sub>y</sub> + <i>A</i><sub>z</sub><i>B</i><sub>z</sub></span>. The cross product follows a crossed pattern that is easiest to remember as a determinant.</p>`,
  formal: `<p>For vectors <span class="m"><b>A</b>, <b>B</b></span> with angle <span class="m">0 ≤ <i>φ</i> ≤ 180°</span> between them, the <b>scalar (dot) product</b> is</p>
<div class="display"><b>A</b> · <b>B</b> = <i>AB</i> cos <i>φ</i> = <i>A</i><sub>x</sub><i>B</i><sub>x</sub> + <i>A</i><sub>y</sub><i>B</i><sub>y</sub> + <i>A</i><sub>z</sub><i>B</i><sub>z</sub>, &nbsp;&nbsp; cos <i>φ</i> = <span class="fr"><span><b>A</b> · <b>B</b></span><span><i>AB</i></span></span><br><b>A</b> × <b>B</b> = (<i>A</i><sub>y</sub><i>B</i><sub>z</sub> − <i>A</i><sub>z</sub><i>B</i><sub>y</sub>)î + (<i>A</i><sub>z</sub><i>B</i><sub>x</sub> − <i>A</i><sub>x</sub><i>B</i><sub>z</sub>)ĵ + (<i>A</i><sub>x</sub><i>B</i><sub>y</sub> − <i>A</i><sub>y</sub><i>B</i><sub>x</sub>)k̂, &nbsp;&nbsp; |<b>A</b> × <b>B</b>| = <i>AB</i> sin <i>φ</i></div>
<p>The dot product is commutative and distributive, with <span class="m">î·î = ĵ·ĵ = k̂·k̂ = 1</span> and <span class="m">î·ĵ = ĵ·k̂ = k̂·î = 0</span>; <span class="m"><b>A</b> · <b>A</b> = <i>A</i><sup>2</sup></span>, and nonzero vectors are perpendicular exactly when <span class="m"><b>A</b> · <b>B</b> = 0</span>. The <b>vector (cross) product</b> <span class="m"><b>A</b> × <b>B</b></span> is perpendicular to both <span class="m"><b>A</b></span> and <span class="m"><b>B</b></span>, with direction given by the right-hand rule, and its magnitude is the area of the parallelogram they span. It is <b>anticommutative</b>, <span class="m"><b>A</b> × <b>B</b> = −<b>B</b> × <b>A</b></span>, distributive, and zero for parallel or antiparallel vectors: <span class="m">î × ĵ = k̂</span>, <span class="m">ĵ × k̂ = î</span>, <span class="m">k̂ × î = ĵ</span>, <span class="m">î × î = <b>0</b></span>.</p>
<p>In mechanics the work done by a constant force is <span class="m"><i>W</i> = <b>F</b> · <b>d</b></span> (in general <span class="m"><i>W</i> = ∫ <b>F</b> · d<b>r</b></span>), and torque about a point is <span class="m"><b>τ</b> = <b>r</b> × <b>F</b></span>.</p>`,
  legend: [
    { c: "c2", sym: `<b>A</b>`, name: "First vector", desc: "For work, the force. For torque, the position r from the pivot to where the force acts." },
    { c: "c3", sym: `<b>B</b>`, name: "Second vector", desc: "For work, the displacement. For torque, the force. Order matters for the cross product." },
    { c: "c1", sym: `<i>B</i> cos <i>φ</i>, <i>AB</i> sin <i>φ</i>`, name: "Projection and area", desc: "The dot product is A times the projection of B onto A. The cross product's magnitude is the parallelogram area." },
    { c: "c4", sym: `<i>φ</i>`, name: "Angle between", desc: "The angle from 0° to 180° between the two vectors when drawn tail to tail." }
  ],
  steps: { title: "How to compute dot and cross products", items: [
    `Write both vectors in components, <span class="m"><b>A</b> = <i>A</i><sub>x</sub>î + <i>A</i><sub>y</sub>ĵ + <i>A</i><sub>z</sub>k̂</span>, or note their magnitudes and the <span class="c4">angle between</span> them.`,
    `Dot product: multiply matching components and add, or use <span class="m"><i>AB</i> cos <i>φ</i></span>. The result is a scalar.`,
    `To find an angle, compute <span class="m">cos <i>φ</i> = <b>A</b> · <b>B</b>/(<i>AB</i>)</span> and take the inverse cosine, which returns 0° to 180° directly.`,
    `Cross product: expand the determinant with rows <span class="m">(î, ĵ, k̂)</span>, <span class="m">(<i>A</i><sub>x</sub>, <i>A</i><sub>y</sub>, <i>A</i><sub>z</sub>)</span>, <span class="m">(<i>B</i><sub>x</sub>, <i>B</i><sub>y</sub>, <i>B</i><sub>z</sub>)</span>. The result is a vector.`,
    `Check the direction with the right-hand rule, and check that the result's dot product with <b>A</b> and with <b>B</b> is zero.`,
    `Carry units: N·m for both work (as joules) and torque, and say which one you mean.`
  ] },
  example: {
    prompt: `A child is pulled on a sled 50.0 m across level snow by a rope that makes 25.0° with the ground and has tension 120 N. How much work does the rope do?`,
    lines: [
      { math: `<span class="m"><i>W</i> = <span class="c2"><b>F</b></span> · <span class="c3"><b>d</b></span> = <i>Fd</i> cos <span class="c4"><i>φ</i></span></span>`, note: "Work by a constant force is the dot product of force and displacement." },
      { math: `<span class="m"><i>W</i> = (120 N)(50.0 m) cos 25.0° = 5.44 × 10<sup>3</sup> J</span>`, note: "The angle between the rope and the direction of motion is 25.0°." },
      { math: `<span class="m"><b>F</b> = (120 cos 25.0°)î + (120 sin 25.0°)ĵ = 108.8î + 50.7ĵ N</span>`, note: "Now check with components. x along the ground, y up." },
      { math: `<span class="m"><b>d</b> = 50.0î m</span>`, note: "The sled moves only horizontally." },
      { math: `<span class="m"><b>F</b> · <b>d</b> = (108.8)(50.0) + (50.7)(0) = <span class="c1">5.44 × 10<sup>3</sup> J</span></span>`, note: "The vertical part of the pull is perpendicular to the motion and does no work." },
      { math: `<span class="m">0 &lt; 5.44 × 10<sup>3</sup> J &lt; (120 N)(50.0 m) = 6.00 × 10<sup>3</sup> J ✓</span>`, note: "Sanity check: positive because the angle is acute, and less than for a rope pulling straight ahead." }
    ],
    answer: `The rope does <span class="m">5.44 × 10<sup>3</sup> J</span> (5.44 kJ) of work on the sled.`
  },
  why: `<p>The two products are how physics combines directed quantities. The dot product appears whenever only the aligned part of one vector counts: work <span class="m"><b>F</b> · <b>d</b></span>, power <span class="m"><b>F</b> · <b>v</b></span>, and later the flux of a field through a surface. The cross product appears whenever something turns or curls: torque <span class="m"><b>r</b> × <b>F</b></span>, angular momentum <span class="m"><b>r</b> × <b>p</b></span>, and the magnetic force <span class="m"><i>q</i><b>v</b> × <b>B</b></span>.</p>
<p>They are also the everyday tools of geometry in computing. A dot product tests whether two directions are perpendicular or finds the angle between them; a cross product gives a surface's normal direction and the area of a triangle.</p>`,
  careers: [
    { role: "Mechanical engineer", use: "Computes the torque r × F that a force produces about a shaft or joint to size motors and fasteners." },
    { role: "Game graphics programmer", use: "Uses the dot product of a surface normal with the light direction to shade surfaces, and cross products to compute those normals." },
    { role: "Aerospace engineer", use: "Computes torques from thrusters and reaction wheels as cross products to control a spacecraft's orientation." },
    { role: "Electrical engineer", use: "Works out the force on current-carrying wires in a motor from the cross product in F = IL × B." },
    { role: "Robotics engineer", use: "Uses cross products in the Jacobian that links joint rotations to the velocity of a robot's hand." }
  ],
  life: [
    "Holding a door handle far from the hinges, where the same push gives more turning effect",
    "Pulling a suitcase by an angled handle, where only part of the pull moves it forward",
    "Turning a stubborn bolt with a longer wrench",
    "Pushing a lawnmower at an angle to the ground",
    "Positioning a solar panel to face the Sun, where the energy collected depends on the angle"
  ],
  fields: [
    { name: "Engineering mechanics", use: "Moments of forces are cross products, and work and power are dot products." },
    { name: "Computer graphics", use: "Lighting, visibility tests and surface normals are built on dot and cross products." },
    { name: "Electromagnetism", use: "Magnetic forces, flux and the Poynting vector are expressed with both products." },
    { name: "Robotics", use: "Kinematics and control of arms use cross products of joint axes and positions." }
  ],
  prereqWhy: {
    "mech-components": "Both products are computed from components, so writing vectors as Ax î + Ay ĵ + Az k̂ comes first."
  },
  unlocksWhy: {
    "mech-work": "The work done by a force is the dot product W = F · d, generalised to the line integral of F · dr.",
    "mech-torque": "Torque is the cross product τ = r × F, with its direction given by the right-hand rule."
  },
  mathWhy: {
    "g-trig-ratios": `The geometric forms use <span class="m">cos <i>φ</i></span> for the projection in <span class="m"><i>AB</i> cos <i>φ</i></span> and <span class="m">sin <i>φ</i></span> for the perpendicular part in <span class="m"><i>AB</i> sin <i>φ</i></span>.`,
    "pc-determinants": `The cross product is remembered and computed as a 3 × 3 determinant with <span class="m">î, ĵ, k̂</span> in the first row, expanded by 2 × 2 minors.`,
    "calculus-3:Vectors, dot and cross products": `This is the same mathematics taught in multivariable calculus. Physics introduces it first, so the calculus course is not required; it later adds the geometry of lines and planes and the triple products.`
  },
  beyond: [
    { field: "Electricity & Magnetism", why: "The magnetic force qv × B, flux integrals of E · dA and the Biot–Savart law are built from dot and cross products." },
    { field: "Classical Mechanics", why: "Angular momentum L = r × p, rotating frames and rigid-body dynamics rely on the cross product." },
    { field: "Electrodynamics", why: "Divergence and curl are the calculus versions of the dot and cross products, and Maxwell's equations are written with them." },
    { field: "Mechanical Engineering", why: "Moments about points and axes, and the work and power of forces, are computed with these products." }
  ],
  mistakes: [
    { wrong: `Treating <span class="m"><b>A</b> · <b>B</b></span> as a vector, or writing <span class="m"><b>A</b> · <b>B</b> = <i>A</i><sub>x</sub><i>B</i><sub>x</sub>î + <i>A</i><sub>y</sub><i>B</i><sub>y</sub>ĵ</span>.`, fix: `The dot product is a scalar: <span class="m"><i>A</i><sub>x</sub><i>B</i><sub>x</sub> + <i>A</i><sub>y</sub><i>B</i><sub>y</sub> + <i>A</i><sub>z</sub><i>B</i><sub>z</sub></span>, with no unit vectors left.` },
    { wrong: `Reversing the order of a cross product without a sign change: <span class="m"><b>r</b> × <b>F</b> = <b>F</b> × <b>r</b></span>.`, fix: `The cross product is anticommutative: <span class="m"><b>F</b> × <b>r</b> = −<b>r</b> × <b>F</b></span>. Order sets the direction.` },
    { wrong: `Using the left hand, or curling from <b>B</b> to <b>A</b>, for the direction of <span class="m"><b>A</b> × <b>B</b></span>.`, fix: `Right hand, fingers from the first vector toward the second through the smaller angle, thumb along the product: <span class="m">î × ĵ = +k̂</span>.` },
    { wrong: `Using sin for work or cos for torque: <span class="m"><i>W</i> = <i>Fd</i> sin <i>φ</i></span>.`, fix: `Work needs the parallel part (<span class="m">cos <i>φ</i></span>); torque needs the perpendicular part (<span class="m">sin <i>φ</i></span>). Check with a limit: a force along the motion does full work.` }
  ],
  practice: [
    { q: `For <span class="m"><b>A</b> = 3î + 4ĵ</span> and <span class="m"><b>B</b> = 4î − 3ĵ</span>, find <span class="m"><b>A</b> · <b>B</b></span> and <span class="m"><b>A</b> × <b>B</b></span>. What does each tell you?`, a: `<span class="m"><b>A</b> · <b>B</b> = 12 − 12 = 0</span>, so the vectors are perpendicular. <span class="m"><b>A</b> × <b>B</b> = (3)(−3) − (4)(4) = −25</span> along k̂, that is <span class="m">−25k̂</span>: magnitude <span class="m">25 = <i>AB</i> = 5 × 5</span> as expected at 90°, pointing into the page because B is clockwise from A.` },
    { q: `Find the angle between <span class="m"><b>A</b> = î + 2ĵ + 2k̂</span> and <span class="m"><b>B</b> = 3î + 4k̂</span>.`, a: `<span class="m"><b>A</b> · <b>B</b> = 3 + 0 + 8 = 11</span>, <span class="m"><i>A</i> = 3</span>, <span class="m"><i>B</i> = 5</span>. <span class="m">cos <i>φ</i> = 11/15</span>, so <span class="m"><i>φ</i> = 42.8°</span>.` },
    { q: `Compute <span class="m"><b>A</b> × <b>B</b></span> for <span class="m"><b>A</b> = î + 2ĵ + 3k̂</span> and <span class="m"><b>B</b> = 4î + 5ĵ + 6k̂</span>, and check that it is perpendicular to both.`, a: `<span class="m">(2·6 − 3·5)î + (3·4 − 1·6)ĵ + (1·5 − 2·4)k̂ = −3î + 6ĵ − 3k̂</span>. Checks: <span class="m">(1)(−3) + (2)(6) + (3)(−3) = 0</span> and <span class="m">(4)(−3) + (5)(6) + (6)(−3) = 0</span>.` },
    { q: `A mechanic pushes with 80.0 N on the end of a 0.250 m wrench, at 60.0° to the handle. Find the torque magnitude. What angle gives the largest torque, and what happens if she pushes along the handle?`, a: `<span class="m"><i>τ</i> = <i>rF</i> sin <i>φ</i> = (0.250 m)(80.0 N) sin 60.0° = 17.3 N·m</span>. The maximum, <span class="m">20.0 N·m</span>, is at 90°. Pushing along the handle (<span class="m"><i>φ</i> = 0°</span>) gives zero torque: <span class="m"><b>r</b></span> and <span class="m"><b>F</b></span> are parallel, so <span class="m"><b>r</b> × <b>F</b> = <b>0</b></span>.` }
  ],
  origin: `William Rowan Hamilton's quaternions (1843) contained both products: multiplying two pure quaternions gives minus the dot product plus the cross product. In the 1880s Josiah Willard Gibbs and Oliver Heaviside split them into the separate dot and cross products, and Gibbs's notation <b>A</b> · <b>B</b> and <b>A</b> × <b>B</b> became standard.`
};
