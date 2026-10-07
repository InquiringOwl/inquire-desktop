window.ARITH = window.ARITH || {};

ARITH["mech-2d-motion"] = {
  title: "Motion in Two & Three Dimensions",
  short: "Position, velocity and acceleration as vectors",
  grade: "College PHYS 1xx · University Physics I",
  hours: 6,
  voice: "plain",
  eyebrow: "Mechanics · kinematics in two and three dimensions",
  hero: `<span class="m"><span class="c3"><b>v</b></span> = <span class="fr"><span>d<span class="c2"><b>r</b></span></span><span>d<i>t</i></span></span> &nbsp;&nbsp; <span class="c1"><b>a</b></span> = <span class="fr"><span>d<span class="c3"><b>v</b></span></span><span>d<i>t</i></span></span></span>`,
  lede: `In a plane or in space, position, velocity and acceleration are vectors. Each one is three ordinary one-dimensional quantities, one per axis, and each axis follows the 1-D rules on its own.`,
  plain: `<p>On a straight track one number tells you where an object is. On a lake, a field or in the sky you need two or three: how far east, how far north, how high. Bundle them into one arrow from the origin to the object and you have its <b>position vector</b> <span class="m c2"><b>r</b></span>. As the object moves, the tip of that arrow traces the <b>path</b>.</p>
<p><b>Velocity</b> <span class="m c3"><b>v</b></span> is how fast the position vector changes. It always points along the path, tangent to it, in the direction of travel. Its length is the <b>speed</b>. <b>Acceleration</b> <span class="m c1"><b>a</b></span> is how fast the velocity changes, and velocity can change in two ways: it can get longer or shorter (speeding up, slowing down), or it can turn. So an object going around a bend at a steady 50 km/h is still accelerating.</p>
<p>The working rule is to split every vector into components. The <span class="m"><i>x</i></span> motion, the <span class="m"><i>y</i></span> motion and the <span class="m"><i>z</i></span> motion run side by side, each with its own velocity and acceleration, and they share only the clock <span class="m"><i>t</i></span>. Solve each direction as a 1-D problem, then put the answers back together with the Pythagorean theorem and an inverse tangent.</p>`,
  formal: `<p>The <b>position vector</b> of a particle is <span class="m"><span class="c2"><b>r</b>(<i>t</i>)</span> = <i>x</i>(<i>t</i>) î + <i>y</i>(<i>t</i>) ĵ + <i>z</i>(<i>t</i>) k̂</span>. Displacement over <span class="m">[<i>t</i><sub>1</sub>, <i>t</i><sub>2</sub>]</span> is <span class="m">Δ<b>r</b> = <b>r</b>(<i>t</i><sub>2</sub>) − <b>r</b>(<i>t</i><sub>1</sub>)</span>, and the average velocity is <span class="m"><b>v</b><sub>avg</sub> = Δ<b>r</b>/Δ<i>t</i></span>. The instantaneous velocity and acceleration are the derivatives, taken component by component:</p>
<div class="display"><span class="c3"><b>v</b>(<i>t</i>)</span> = <span class="fr"><span>d<b>r</b></span><span>d<i>t</i></span></span> = <span class="fr"><span>d<i>x</i></span><span>d<i>t</i></span></span> î + <span class="fr"><span>d<i>y</i></span><span>d<i>t</i></span></span> ĵ + <span class="fr"><span>d<i>z</i></span><span>d<i>t</i></span></span> k̂, &nbsp;&nbsp; <span class="c1"><b>a</b>(<i>t</i>)</span> = <span class="fr"><span>d<b>v</b></span><span>d<i>t</i></span></span> = <span class="fr"><span>d<sup>2</sup><b>r</b></span><span>d<i>t</i><sup>2</sup></span></span><br>constant <b>a</b>: &nbsp; <b>v</b>(<i>t</i>) = <b>v</b><sub>0</sub> + <b>a</b><i>t</i>, &nbsp;&nbsp; <b>r</b>(<i>t</i>) = <b>r</b><sub>0</sub> + <b>v</b><sub>0</sub><i>t</i> + ½<b>a</b><i>t</i><sup>2</sup> &nbsp;<span class="dim">(one scalar equation per axis)</span></div>
<p>The velocity is tangent to the path and the speed is <span class="m">|<b>v</b>| = √(<i>v<sub>x</sub></i><sup>2</sup> + <i>v<sub>y</sub></i><sup>2</sup> + <i>v<sub>z</sub></i><sup>2</sup>)</span>. Since <span class="m">d(|<b>v</b>|<sup>2</sup>)/d<i>t</i> = 2(<i>v<sub>x</sub>a<sub>x</sub></i> + <i>v<sub>y</sub>a<sub>y</sub></i> + <i>v<sub>z</sub>a<sub>z</sub></i>)</span>, only the part of <span class="m c1"><b>a</b></span> along <span class="m c3"><b>v</b></span> changes the speed; the part perpendicular to <span class="m c3"><b>v</b></span> changes only the direction. Motions along perpendicular axes are independent: the <span class="m"><i>x</i></span>-component of acceleration affects only <span class="m"><i>v<sub>x</sub></i></span> and <span class="m"><i>x</i></span>.</p>`,
  legend: [
    { c: "c2", sym: `<b>r</b>(<i>t</i>)`, name: "Position", desc: "Arrow from the origin to the particle, with components <span class=\"m\"><i>x</i>, <i>y</i>, <i>z</i></span> in metres." },
    { c: "c3", sym: `<b>v</b>(<i>t</i>)`, name: "Velocity", desc: "Rate of change of position, in m/s. Always tangent to the path; its length is the speed." },
    { c: "c1", sym: `<b>a</b>(<i>t</i>)`, name: "Acceleration", desc: "Rate of change of velocity, in m/s². It points toward the inside of a bend when the path curves." },
    { c: "c4", sym: `path`, name: "Trajectory", desc: "The curve traced by the tip of <span class=\"m\"><b>r</b>(<i>t</i>)</span>. Time does not appear on it; the vectors tell you how fast it is traversed." }
  ],
  steps: { title: "How to analyse motion in two or three dimensions", items: [
    `Choose axes and an origin, and write each vector in unit-vector form: <span class="m"><b>r</b> = <i>x</i> î + <i>y</i> ĵ + <i>z</i> k̂</span>.`,
    `If <span class="m c2"><b>r</b>(<i>t</i>)</span> is given, differentiate each component to get <span class="m c3"><b>v</b>(<i>t</i>)</span>, then again to get <span class="m c1"><b>a</b>(<i>t</i>)</span>.`,
    `If the acceleration is constant, apply the 1-D kinematic equations separately to each axis, using that axis's initial position, initial velocity and acceleration.`,
    `Evaluate the components at the time asked for. Use one clock <span class="m"><i>t</i></span> for every axis.`,
    `Combine: magnitude <span class="m">√(<i>v<sub>x</sub></i><sup>2</sup> + <i>v<sub>y</sub></i><sup>2</sup>)</span>, direction <span class="m">θ = tan<sup>−1</sup>(<i>v<sub>y</sub></i>/<i>v<sub>x</sub></i>)</span>, checking the quadrant.`,
    `Sanity-check: velocity should be tangent to the path, and a curving path needs an acceleration component toward the inside of the bend.`
  ] },
  example: {
    prompt: `A remote-controlled boat moves on a lake with <span class="m"><i>x</i></span> east and <span class="m"><i>y</i></span> north. Its position is <span class="m"><span class="c2"><b>r</b>(<i>t</i>)</span> = 2.00<i>t</i><sup>2</sup> î + (8.00<i>t</i> − 1.00<i>t</i><sup>2</sup>) ĵ</span> m, with <span class="m"><i>t</i></span> in seconds. At <span class="m"><i>t</i> = 3.00</span> s find its position, velocity (speed and direction) and acceleration, and find its average velocity over the first 3.00 s.`,
    lines: [
      { math: `<span class="m"><span class="c3"><b>v</b>(<i>t</i>)</span> = <span class="fr"><span>d<b>r</b></span><span>d<i>t</i></span></span> = 4.00<i>t</i> î + (8.00 − 2.00<i>t</i>) ĵ &nbsp;m/s</span>`, note: "Differentiate each component separately." },
      { math: `<span class="m"><span class="c1"><b>a</b></span> = <span class="fr"><span>d<b>v</b></span><span>d<i>t</i></span></span> = 4.00 î − 2.00 ĵ &nbsp;m/s², &nbsp; |<b>a</b>| = √20.0 = 4.47 m/s²</span>`, note: "The acceleration is constant, so each axis is a constant-acceleration problem." },
      { math: `<span class="m"><span class="c2"><b>r</b>(3.00)</span> = 2.00(9.00) î + (24.0 − 9.00) ĵ = 18.0 î + 15.0 ĵ &nbsp;m</span>`, note: "Position at t = 3.00 s: 18.0 m east and 15.0 m north of the origin." },
      { math: `<span class="m"><span class="c3"><b>v</b>(3.00)</span> = 12.0 î + 2.00 ĵ &nbsp;m/s</span>`, note: "Substitute t = 3.00 s into the velocity components." },
      { math: `<span class="m">|<b>v</b>| = √(12.0<sup>2</sup> + 2.00<sup>2</sup>) = √148 = 12.2 m/s, &nbsp; θ = tan<sup>−1</sup>(2.00/12.0) = 9.46°</span>`, note: "Speed and direction: 9.46° north of east, both components positive so the first quadrant is right." },
      { math: `<span class="m"><b>v</b><sub>avg</sub> = <span class="fr"><span>Δ<b>r</b></span><span>Δ<i>t</i></span></span> = <span class="fr"><span>18.0 î + 15.0 ĵ</span><span>3.00</span></span> = 6.00 î + 5.00 ĵ &nbsp;m/s</span>`, note: "The boat starts at the origin, so Δr = r(3.00)." },
      { math: `<span class="m">½[<b>v</b>(0) + <b>v</b>(3.00)] = ½[8.00 ĵ + 12.0 î + 2.00 ĵ] = 6.00 î + 5.00 ĵ ✓</span>`, note: "Check: with constant acceleration the average velocity is the mean of the initial and final velocities." }
    ],
    answer: `At 3.00 s the boat is at <span class="m c2">(18.0 î + 15.0 ĵ) m</span>, moving at <span class="m c3">12.2 m/s, 9.46° north of east</span>, with constant acceleration <span class="m c1">(4.00 î − 2.00 ĵ) m/s²</span> (4.47 m/s²). Its average velocity over the first 3.00 s is <span class="m">(6.00 î + 5.00 ĵ) m/s</span>.`
  },
  why: `<p>Almost nothing real moves in a straight line. Aircraft climb and turn, cars take bends, a thrown ball rises while it travels forward, a robot arm sweeps through space. Writing motion as vectors lets you describe all of these with the same three definitions, and splitting into components turns each hard 2-D or 3-D problem into two or three easy 1-D ones.</p>
<p>This topic is the bridge from one-dimensional kinematics to the rest of mechanics. Projectile motion is constant acceleration in two dimensions; circular motion is the case where acceleration turns the velocity without changing its length; relative motion adds velocity vectors from different frames. Newton's second law, <span class="m">Σ<b>F</b> = <i>m</i><b>a</b></span>, is a vector equation because acceleration is a vector.</p>`,
  careers: [
    { role: "Aerospace engineer", use: "Integrates acceleration vectors from flight models to predict an aircraft's or rocket's velocity and position in three dimensions." },
    { role: "Robotics engineer", use: "Plans end-effector trajectories r(t) and differentiates them to keep a robot arm's velocity and acceleration within motor limits." },
    { role: "Air traffic controller", use: "Reads radar tracks as position vectors over time and projects each aircraft's velocity to check separation minimums." },
    { role: "Game physics programmer", use: "Updates every object's position and velocity vectors each frame from its acceleration, one component at a time." },
    { role: "Sports biomechanist", use: "Differentiates motion-capture marker positions to get the velocity and acceleration vectors of a sprinter's limbs." },
    { role: "Marine navigator", use: "Combines a vessel's velocity components to plot its course and estimated position (dead reckoning)." }
  ],
  life: [
    "Reading a GPS track where the phone reports your speed and heading",
    "Understanding why a car taking a curve at constant speed is still accelerating",
    "Leading a moving target when throwing a ball to a running friend",
    "Seeing why a drone drifts sideways when its forward and sideways thrusts both act"
  ],
  fields: [
    { name: "Aerospace engineering", use: "Flight dynamics and trajectory design are written entirely in position, velocity and acceleration vectors." },
    { name: "Robotics", use: "Motion planning specifies smooth vector paths and limits their derivatives." },
    { name: "Computer graphics and animation", use: "Particle systems and physics engines integrate vector velocity and acceleration each frame." },
    { name: "Geophysics and meteorology", use: "Plate motions, ocean currents and winds are described as velocity vector fields." }
  ],
  prereqWhy: {
    "mech-const-accel": "Each axis of a constant-acceleration 2-D problem is solved with the same four kinematic equations used on a straight line.",
    "mech-components": "Every step splits position, velocity and acceleration into x, y and z components and recombines them into a magnitude and direction."
  },
  unlocksWhy: {
    "mech-projectile": "A projectile is the special case with a = −g ĵ: constant velocity horizontally and free fall vertically, on one shared clock.",
    "mech-circular": "Circular motion is the case where the acceleration vector turns the velocity without (or as well as) changing its length.",
    "mech-relative": "Velocities measured in different frames are added as vectors, which needs velocity to be understood as a vector first."
  },
  mathWhy: {
    "pa-coordinate": `Positions are points <span class="m">(<i>x</i>, <i>y</i>)</span> on a coordinate plane; plotting <span class="m"><b>r</b>(<i>t</i>)</span> at several times draws the path.`,
    "trig-vectors": `Velocity and acceleration are written in <span class="m">î, ĵ</span> form and converted to magnitude and direction with <span class="m">√(<i>v<sub>x</sub></i><sup>2</sup> + <i>v<sub>y</sub></i><sup>2</sup>)</span> and <span class="m">tan<sup>−1</sup>(<i>v<sub>y</sub></i>/<i>v<sub>x</sub></i>)</span>.`,
    "pc-parametric": `A trajectory is a parametric curve <span class="m"><i>x</i>(<i>t</i>), <i>y</i>(<i>t</i>)</span> with time as the parameter; eliminating <span class="m"><i>t</i></span> gives the path's equation <span class="m"><i>y</i>(<i>x</i>)</span>. Needed outright for reading <span class="m"><b>r</b>(<i>t</i>)</span>.`
  },
  beyond: [
    { field: "Classical Mechanics", why: "Lagrangian and Hamiltonian mechanics start from position and velocity vectors in any coordinate system, including polar and spherical ones." },
    { field: "Electricity & Magnetism", why: "The magnetic force qv × B depends on the velocity vector, so charged particles curve and spiral in three dimensions." },
    { field: "Dynamics", why: "Curvilinear motion of machine parts and vehicles is analysed with tangential and normal components of acceleration." },
    { field: "Computational Physics", why: "Numerical integrators step position and velocity vectors forward in time from the acceleration." }
  ],
  mistakes: [
    { wrong: `Adding magnitudes: <span class="m">|<b>v</b>| = <i>v<sub>x</sub></i> + <i>v<sub>y</sub></i> = 12.0 + 2.00 = 14.0</span> m/s.`, fix: `Components are perpendicular, so combine them with the Pythagorean theorem: <span class="m">|<b>v</b>| = √(12.0<sup>2</sup> + 2.00<sup>2</sup>) = 12.2</span> m/s.` },
    { wrong: `"The speed is constant, so the acceleration is zero."`, fix: `Acceleration is any change in the velocity vector, including a change of direction. Going round a bend at constant speed has an acceleration pointing toward the inside of the bend.` },
    { wrong: `Using the <span class="m"><i>y</i></span> acceleration in the <span class="m"><i>x</i></span> equation, or giving each axis its own time.`, fix: `Each axis uses only its own components: <span class="m"><i>x</i> = <i>x</i><sub>0</sub> + <i>v</i><sub>0<i>x</i></sub><i>t</i> + ½<i>a<sub>x</sub>t</i><sup>2</sup></span>. The only thing the axes share is <span class="m"><i>t</i></span>.` },
    { wrong: `Taking <span class="m">tan<sup>−1</sup>(<i>v<sub>y</sub></i>/<i>v<sub>x</sub></i>)</span> from a calculator when <span class="m"><i>v<sub>x</sub></i> &lt; 0</span>.`, fix: `The calculator returns an angle between −90° and 90°. If <span class="m"><i>v<sub>x</sub></i> &lt; 0</span>, add 180° to put the direction in the correct quadrant.` }
  ],
  practice: [
    { q: `A particle moves from <span class="m"><b>r</b><sub>1</sub> = (3.00 î − 2.00 ĵ + 1.00 k̂)</span> m to <span class="m"><b>r</b><sub>2</sub> = (−1.00 î + 4.00 ĵ + 5.00 k̂)</span> m in 2.00 s. Find its displacement, the magnitude of the displacement, and its average velocity.`, a: `<span class="m">Δ<b>r</b> = (−4.00 î + 6.00 ĵ + 4.00 k̂)</span> m; <span class="m">|Δ<b>r</b>| = √(16.0 + 36.0 + 16.0) = √68.0 = 8.25</span> m; <span class="m"><b>v</b><sub>avg</sub> = Δ<b>r</b>/Δ<i>t</i> = (−2.00 î + 3.00 ĵ + 2.00 k̂)</span> m/s.` },
    { q: `A particle's position is <span class="m"><b>r</b>(<i>t</i>) = 5.00<i>t</i> î + 2.00<i>t</i><sup>3</sup> ĵ</span> m. Find its velocity, speed and acceleration at <span class="m"><i>t</i> = 1.00</span> s.`, a: `<span class="m"><b>v</b> = 5.00 î + 6.00<i>t</i><sup>2</sup> ĵ</span>, so <span class="m"><b>v</b>(1.00) = (5.00 î + 6.00 ĵ)</span> m/s and the speed is <span class="m">√61.0 = 7.81</span> m/s. <span class="m"><b>a</b> = 12.0<i>t</i> ĵ</span>, so <span class="m"><b>a</b>(1.00) = 12.0 ĵ</span> m/s².` },
    { q: `A probe coasting at <span class="m"><b>v</b><sub>0</sub> = 20.0 î</span> m/s fires a side thruster that gives it a constant <span class="m"><b>a</b> = 5.00 ĵ</span> m/s². Starting from the origin, find its velocity and position after 4.00 s.`, a: `<span class="m"><i>v<sub>x</sub></i> = 20.0</span> m/s (no <span class="m"><i>x</i></span>-acceleration), <span class="m"><i>v<sub>y</sub></i> = 5.00(4.00) = 20.0</span> m/s, so <span class="m"><b>v</b> = (20.0 î + 20.0 ĵ)</span> m/s, <span class="m">28.3</span> m/s at 45.0°. <span class="m"><i>x</i> = 20.0(4.00) = 80.0</span> m, <span class="m"><i>y</i> = ½(5.00)(4.00)<sup>2</sup> = 40.0</span> m: <span class="m"><b>r</b> = (80.0 î + 40.0 ĵ)</span> m.` },
    { q: `At one instant a particle has <span class="m"><b>v</b> = (4.00 î − 3.00 ĵ)</span> m/s and <span class="m"><b>a</b> = (1.50 î + 2.00 ĵ)</span> m/s². Is it speeding up, slowing down, or neither at that instant? What is its acceleration doing?`, a: `<span class="m">d(|<b>v</b>|<sup>2</sup>)/d<i>t</i> = 2(<i>v<sub>x</sub>a<sub>x</sub></i> + <i>v<sub>y</sub>a<sub>y</sub></i>) = 2(6.00 − 6.00) = 0</span>, so the speed (5.00 m/s) is momentarily constant. The acceleration (2.50 m/s²) is perpendicular to the velocity: it only turns the direction of motion, as in circular motion.` }
  ],
  origin: `Treating a motion as the combination of independent motions along different directions goes back to Galileo's analysis of projectiles in <i>Two New Sciences</i> (1638). The modern notation of vectors with components and unit vectors was developed in the 1880s by Josiah Willard Gibbs and Oliver Heaviside.`
};
