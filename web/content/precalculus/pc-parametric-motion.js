window.ARITH = window.ARITH || {};
ARITH["pc-parametric-motion"] = {
  title: "Parametric Graphs & Motion",
  short: "Projectiles, targets and rolling wheels as x(t), y(t)",
  grade: "Grade 12 · college Precalculus",
  hours: 4,
  voice: "plain",
  eyebrow: "Parametric equations · projectile motion and the cycloid",
  hero: `<span class="m"><span class="c2"><i>x</i> = (<i>v</i><sub>0</sub> cos <i>θ</i>)<span class="c1"><i>t</i></span></span>, &nbsp;<span class="c3"><i>y</i> = <i>h</i><sub>0</sub> + (<i>v</i><sub>0</sub> sin <i>θ</i>)<span class="c1"><i>t</i></span> − ½<span class="c4"><i>g</i></span><span class="c1"><i>t</i></span><sup>2</sup></span></span>`,
  lede: `A thrown ball moves sideways at a steady speed while gravity pulls it down. Writing the two motions as <span class="m"><i>x</i>(<i>t</i>)</span> and <span class="m"><i>y</i>(<i>t</i>)</span> gives the path, the flight time, the range and the highest point.`,
  plain: `<p>Throw a ball at speed <span class="m"><i>v</i><sub>0</sub></span> and angle <span class="m"><i>θ</i></span>. Split the launch velocity into a horizontal part <span class="m"><i>v</i><sub>0</sub> cos <i>θ</i></span> and a vertical part <span class="m"><i>v</i><sub>0</sub> sin <i>θ</i></span>. Ignoring air resistance, nothing pushes the ball sideways, so its horizontal distance grows at that constant rate. Vertically, gravity slows it on the way up and speeds it on the way down.</p>
<p>Each question about the flight is a question about one coordinate. When does it land? When <span class="m"><i>y</i> = 0</span>. How far does it go? Put that time into <span class="m"><i>x</i></span>. How high does it get? At the moment the vertical velocity is zero.</p>
<p>A point on the rim of a rolling wheel is another motion of this kind. The wheel's centre moves straight ahead while the point turns around it, and together they trace arches called a <b>cycloid</b>.</p>`,
  formal: `<p>An object launched from height <span class="m"><i>h</i><sub>0</sub></span> with speed <span class="m"><i>v</i><sub>0</sub></span> at angle <span class="m"><i>θ</i></span> above the horizontal, with no air resistance, has</p>
<div class="display"><span class="c2"><i>x</i> = (<i>v</i><sub>0</sub> cos <i>θ</i>)<i>t</i></span>, &nbsp; <span class="c3"><i>y</i> = <i>h</i><sub>0</sub> + (<i>v</i><sub>0</sub> sin <i>θ</i>)<i>t</i> − ½<i>g</i><i>t</i><sup>2</sup></span>, &nbsp; <i>g</i> = 32 ft/s<sup>2</sup> or 9.8 m/s<sup>2</sup></div>
<p>The vertical velocity <span class="m"><i>v</i><sub>0</sub> sin <i>θ</i> − <i>g</i><i>t</i></span> is zero at the <span class="c5">apex</span>, <span class="m"><i>t</i> = <i>v</i><sub>0</sub> sin <i>θ</i>/<i>g</i></span>, where the <span class="c5">maximum height</span> is <span class="m"><i>h</i><sub>0</sub> + (<i>v</i><sub>0</sub> sin <i>θ</i>)<sup>2</sup>/(2<i>g</i>)</span>. The <span class="c5">flight time</span> <span class="m"><i>T</i></span> is the positive root of <span class="m"><i>y</i>(<i>t</i>) = 0</span> and the <span class="c5">range</span> is <span class="m"><i>x</i>(<i>T</i>)</span>. From ground level (<span class="m"><i>h</i><sub>0</sub> = 0</span>):</p>
<div class="display"><i>T</i> = <span class="fr"><span>2<i>v</i><sub>0</sub> sin <i>θ</i></span><span><i>g</i></span></span>, &nbsp; <i>R</i> = <span class="fr"><span><i>v</i><sub>0</sub><sup>2</sup> sin 2<i>θ</i></span><span><i>g</i></span></span></div>
<p>so the range is greatest at <span class="m"><i>θ</i> = 45°</span>, and complementary angles such as 30° and 60° give the same range. To hit a <span class="c4">target</span> at <span class="m">(<i>x</i><sub>T</sub>, <i>y</i><sub>T</sub>)</span>, put <span class="m"><i>t</i> = <i>x</i><sub>T</sub>/(<i>v</i><sub>0</sub> cos <i>θ</i>)</span> into <span class="m"><i>y</i></span> and use <span class="m">sec<sup>2</sup> <i>θ</i> = 1 + tan<sup>2</sup> <i>θ</i></span>: with <span class="m"><i>u</i> = tan <i>θ</i></span> and <span class="m"><i>a</i> = <i>g</i><i>x</i><sub>T</sub><sup>2</sup>/(2<i>v</i><sub>0</sub><sup>2</sup>)</span>, <span class="m"><i>a</i><i>u</i><sup>2</sup> − <i>x</i><sub>T</sub><i>u</i> + (<i>a</i> + <i>y</i><sub>T</sub> − <i>h</i><sub>0</sub>) = 0</span>, which has two, one or no solutions.</p>
<p>A point at distance <span class="m"><i>d</i></span> from the centre of a wheel of radius <span class="m"><i>r</i></span> rolling along the <span class="m"><i>x</i></span>-axis, starting at its lowest position, is at</p>
<div class="display"><span class="c2"><i>x</i> = <i>r</i><i>t</i> − <i>d</i> sin <i>t</i></span>, &nbsp; <span class="c3"><i>y</i> = <i>r</i> − <i>d</i> cos <i>t</i></span></div>
<p>where <span class="m"><i>t</i></span> is the angle the wheel has turned. For <span class="m"><i>d</i> = <i>r</i></span> this is the <b>cycloid</b> <span class="m"><i>x</i> = <i>r</i>(<i>t</i> − sin <i>t</i>), <i>y</i> = <i>r</i>(1 − cos <i>t</i>)</span>, with cusps on the ground at <span class="m"><i>t</i> = 2π<i>n</i></span> and arches of width <span class="m">2π<i>r</i></span> and height <span class="m">2<i>r</i></span>. For <span class="m"><i>d</i> &lt; <i>r</i></span> it is a <b>curtate</b> cycloid (a smooth wave), for <span class="m"><i>d</i> &gt; <i>r</i></span> a <b>prolate</b> cycloid (with loops). Two moving objects <b>collide</b> only if they are at the same point at the same value of <span class="m"><i>t</i></span>; paths that cross at different times do not meet.</p>`,
  legend: [
    { c: "c1", sym: `<i>t</i>`, name: "Time", desc: "The parameter: seconds since launch, or the angle a wheel has turned." },
    { c: "c2", sym: `<i>x</i>(<i>t</i>)`, name: "Horizontal motion", desc: "Constant velocity v₀ cos θ for a projectile; rt − d sin t for a wheel." },
    { c: "c3", sym: `<i>y</i>(<i>t</i>)`, name: "Vertical motion", desc: "Height, pulled down by gravity: h₀ + (v₀ sin θ)t − ½gt²." },
    { c: "c4", sym: `<i>g</i>, target`, name: "Ground and target", desc: "Gravity, the ground line y = 0 and the point to hit." },
    { c: "c5", sym: `<i>T</i>, <i>R</i>, apex`, name: "Results", desc: "Flight time, range and the highest point of the path." }
  ],
  steps: {
    title: "How to solve a projectile problem",
    items: [
      `Write the components of the launch velocity: <span class="m"><span class="c2"><i>v</i><sub>0</sub> cos <i>θ</i></span></span> and <span class="m"><span class="c3"><i>v</i><sub>0</sub> sin <i>θ</i></span></span>. Use degree mode for degree angles.`,
      `Write <span class="m"><span class="c2"><i>x</i>(<i>t</i>)</span></span> and <span class="m"><span class="c3"><i>y</i>(<i>t</i>)</span></span>, with the launch height <span class="m"><i>h</i><sub>0</sub></span> and <span class="m"><i>g</i></span> in the same units.`,
      `Flight time: solve <span class="m"><i>y</i>(<i>t</i>) = 0</span> and keep the positive root.`,
      `Range: evaluate <span class="m"><i>x</i></span> at the flight time.`,
      `Maximum height: evaluate <span class="m"><i>y</i></span> at <span class="m"><i>t</i> = <i>v</i><sub>0</sub> sin <i>θ</i>/<i>g</i></span>.`,
      `For a target or a second object, set the coordinates equal and check that both equations give the same <span class="m"><i>t</i></span>.`
    ]
  },
  example: {
    prompt: `A ball is thrown from the top of a 48-ft wall at 64 ft/s, 30° above the horizontal. Find its flight time, how far from the wall it lands, its maximum height, and its position after 2 s. Use <span class="m"><i>g</i> = 32 ft/s<sup>2</sup></span>.`,
    lines: [
      { math: `<span class="m"><i>x</i> = (64 cos 30°)<i>t</i> = 32√3 <i>t</i>, &nbsp;<i>y</i> = 48 + 32<i>t</i> − 16<i>t</i><sup>2</sup></span>`, note: "cos 30° = √3/2 and sin 30° = 1/2; ½g = 16." },
      { math: `<span class="m">16<i>t</i><sup>2</sup> − 32<i>t</i> − 48 = 0 ⇒ (<i>t</i> − 3)(<i>t</i> + 1) = 0</span>`, note: "Landing: y = 0. Divide by 16 and factor." },
      { math: `<span class="m"><i>T</i> = 3 s</span>`, note: "Keep the positive root." },
      { math: `<span class="m"><i>x</i>(3) = 96√3 ≈ 166.3 ft</span>`, note: "The range is the horizontal distance at landing." },
      { math: `<span class="m"><i>t</i> = 32/32 = 1, &nbsp;<i>y</i>(1) = 48 + 32 − 16 = 64 ft</span>`, note: "The apex is where the vertical velocity 32 − 32t is zero." },
      { math: `<span class="m">(<i>x</i>(2), <i>y</i>(2)) = (64√3, 48) ≈ (110.9, 48)</span>`, note: "At t = 2 it is back at the height of the wall top." }
    ],
    answer: `Flight time <span class="m c5">3 s</span>; it lands <span class="m c5">96√3 ≈ 166.3 ft</span> from the wall; maximum height <span class="m c5">64 ft</span> at <span class="m"><i>t</i> = 1</span>; after 2 s it is at about <span class="m">(110.9, 48)</span>.`
  },
  why: `<p>Ballistics, sports science and game physics all start from these two equations. Treating the horizontal and vertical motions separately turns one hard question into two easy ones, and the parameter keeps them in step. The same idea describes gears, wheels and cams, whose points trace cycloids, and it is the first step toward the vector calculus of motion.</p>`,
  careers: [
    { role: "Sports scientist", use: "Models the launch speed and angle of a throw, kick or jump to find what maximises distance." },
    { role: "Game physics programmer", use: "Updates each object's x and y every frame from its velocity and gravity, and finds when two paths meet." },
    { role: "Forensic engineer", use: "Reconstructs where an object was launched from by working backward from where it landed." },
    { role: "Artillery or mortar crew member", use: "Uses firing tables built from projectile equations to choose an elevation for a target's range." },
    { role: "Mechanical engineer", use: "Designs gear tooth profiles and cams whose shapes are cycloids and related rolling curves." },
    { role: "Firefighter", use: "Aims a hose stream as a projectile, raising the nozzle angle to reach a window or roof." }
  ],
  life: [
    "A basketball shot follows a parabola set by its launch speed and angle",
    "A reflector on a bicycle wheel traces a cycloid as the bike rolls",
    "A fountain's jets are projectile paths frozen in water",
    "Throwing from higher up gives the ball more time to travel",
    "A lob and a flat shot can land in the same place"
  ],
  fields: [
    { name: "Physics", use: "Projectile motion is the standard example of two-dimensional kinematics with constant acceleration." },
    { name: "Mechanical engineering", use: "Cycloidal gears and cam followers are designed from rolling-curve equations." },
    { name: "Sports science", use: "Launch angle and speed optimisation for jumps, throws and kicks." },
    { name: "Computer graphics", use: "Particle systems move each particle with parametric position updates." }
  ],
  prereqWhy: {
    "pc-parametric": "Projectile paths and cycloids are parametric curves: this topic reads time, range and height from the x(t) and y(t) you learned to plot and eliminate.",
    "trig-vector-apps": "The launch velocity is a vector of magnitude v₀ and direction θ; its components v₀ cos θ and v₀ sin θ drive the two equations."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Physics (Mechanics)", why: "Kinematics in two dimensions, air resistance and relative motion build on these component equations." },
    { field: "Calculus II", why: "The cycloid's arc length 8r and the area 3πr² under one arch come from integrals in t." },
    { field: "Calculus III", why: "Velocity and acceleration vectors are the derivatives of the position r(t)." },
    { field: "Differential Equations", why: "The projectile equations solve x″ = 0, y″ = −g; adding drag gives new differential equations." }
  ],
  mistakes: [
    { wrong: `Using <span class="m"><i>R</i> = <i>v</i><sub>0</sub><sup>2</sup> sin 2<i>θ</i>/<i>g</i></span> for a ball thrown from a height.`, fix: `That formula assumes <span class="m"><i>h</i><sub>0</sub> = 0</span>. With a launch height, solve <span class="m"><i>y</i>(<i>t</i>) = 0</span> for the flight time first, then find <span class="m"><i>x</i></span> at that time.` },
    { wrong: `Saying two objects collide because their paths cross.`, fix: `They collide only if they reach the crossing point at the same <span class="m"><i>t</i></span>. Solve <span class="m"><i>x</i><sub>1</sub>(<i>t</i>) = <i>x</i><sub>2</sub>(<i>t</i>)</span> and check <span class="m"><i>y</i></span> at that same <span class="m"><i>t</i></span>.` },
    { wrong: `Writing <span class="m"><i>y</i> = <i>h</i><sub>0</sub> + (<i>v</i><sub>0</sub> sin <i>θ</i>)<i>t</i> + 16<i>t</i><sup>2</sup></span>.`, fix: `Gravity pulls down, so the term is <span class="m">−½<i>g</i><i>t</i><sup>2</sup> = −16<i>t</i><sup>2</sup></span> in feet.` }
  ],
  practice: [
    { q: `A ball is kicked from the ground at 48 ft/s, 30° above the horizontal. Write its parametric equations and find its flight time and range (<span class="m"><i>g</i> = 32</span>).`, a: `<span class="m"><i>x</i> = 24√3 <i>t</i>, <i>y</i> = 24<i>t</i> − 16<i>t</i><sup>2</sup></span>. <span class="m"><i>y</i> = 0</span> at <span class="m"><i>t</i> = 1.5</span> s; range <span class="m">24√3(1.5) = 36√3 ≈ 62.4</span> ft.` },
    { q: `A ball is thrown from 6 ft above the ground at 80 ft/s, 45° above the horizontal. When does it reach its highest point, and how high is it?`, a: `<span class="m"><i>v</i><sub>0</sub> sin 45° = 40√2</span>, so <span class="m"><i>t</i> = 40√2/32 = 5√2/4 ≈ 1.77</span> s and the height is <span class="m">6 + (40√2)<sup>2</sup>/64 = 6 + 50 = 56</span> ft.` },
    { q: `A wheel of radius 2 rolls along the <span class="m"><i>x</i></span>-axis; a point on its rim starts at the origin. Where is the point when the wheel has turned <span class="m">π/2</span>, and where is it at <span class="m"><i>t</i> = π</span>?`, a: `<span class="m"><i>x</i> = 2<i>t</i> − 2 sin <i>t</i>, <i>y</i> = 2 − 2 cos <i>t</i></span>. At <span class="m">π/2</span>: <span class="m">(π − 2, 2) ≈ (1.14, 2)</span>. At <span class="m">π</span>: <span class="m">(2π, 4)</span>, the top of the arch.` },
    { q: `Object A moves by <span class="m"><i>x</i> = 2<i>t</i>, <i>y</i> = <i>t</i> + 1</span> and object B by <span class="m"><i>x</i> = <i>t</i> + 3, <i>y</i> = <i>t</i><sup>2</sup> − 5</span>, for <span class="m"><i>t</i> ≥ 0</span>. Do they collide? Where else do their paths cross?`, a: `<span class="m">2<i>t</i> = <i>t</i> + 3</span> gives <span class="m"><i>t</i> = 3</span>, and both have <span class="m"><i>y</i> = 4</span>: they collide at <span class="m">(6, 4)</span>. The paths <span class="m"><i>y</i> = <i>x</i>/2 + 1</span> and <span class="m"><i>y</i> = (<i>x</i> − 3)<sup>2</sup> − 5</span> also cross at <span class="m">(1/2, 5/4)</span>, but A is there at <span class="m"><i>t</i> = 1/4</span> and B only at <span class="m"><i>t</i> = −5/2</span>, before it starts: no collision there.` }
  ],
  origin: `<p>Galileo showed in <i>Two New Sciences</i> (1638) that a projectile, combining uniform horizontal motion with uniformly accelerated fall, follows a parabola, and he tabulated how range depends on elevation, with the greatest range at 45°. Galileo also named the cycloid. Christiaan Huygens proved in <i>Horologium Oscillatorium</i> (1673) that it is the tautochrone, the curve along which a bead reaches the bottom in the same time from any starting point, and in 1696 Johann Bernoulli challenged mathematicians to find the brachistochrone, the curve of fastest descent; he, his brother Jakob, Leibniz, Newton and L'Hôpital found it to be a cycloid.</p>`
};
