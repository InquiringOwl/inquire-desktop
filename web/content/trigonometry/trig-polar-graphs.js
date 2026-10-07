window.ARITH = window.ARITH || {};
ARITH["trig-polar-graphs"] = {
  title: "Graphs of Polar Equations",
  short: "Circles, limaçons, roses and spirals drawn from r(θ)",
  grade: "Grade 11–12 · college Trigonometry",
  hours: 6,
  voice: "plain",
  eyebrow: "Polar coordinates · graphs",
  hero: `<span class="m"><span class="c5"><i>r</i> = 4 cos 3<i>θ</i></span> &nbsp;→&nbsp; 3 petals of length <span class="c4">4</span></span>`,
  lede: `A polar equation gives the directed distance <span class="m c4"><i>r</i></span> as a function of the angle <span class="m c1"><i>θ</i></span>. Sweeping <span class="m c1"><i>θ</i></span> and plotting each point <span class="m">(<span class="c4"><i>r</i></span>, <span class="c1"><i>θ</i></span>)</span> draws curves that are awkward in <span class="m"><i>x</i></span> and <span class="m"><i>y</i></span>: circles through the pole, limaçons, roses, lemniscates and spirals.`,
  plain: `<p>Picture a searchlight at the pole, turning slowly. For each direction <span class="m c1"><i>θ</i></span>, the equation says how far out along the beam to put a dot. As the beam turns, the dots join into a curve.</p>
<p>Sometimes the equation gives a negative distance. Then the dot goes behind the light, on the opposite ray. That is how a limaçon gets its small inner loop, and how a rose gets petals in directions where its formula is negative.</p>
<p>The best guide is the ordinary graph of <span class="m c4"><i>r</i></span> against <span class="m c1"><i>θ</i></span>. It is often a sinusoid, like the waves of the previous topic. Where it crosses zero, the polar curve passes through the pole. Where it peaks, the polar curve reaches farthest out. Where it dips below the axis, the point is drawn on the opposite ray.</p>`,
  formal: `<p>The <b>graph of a polar equation</b> <span class="m"><span class="c4"><i>r</i></span> = <i>f</i>(<span class="c1"><i>θ</i></span>)</span> is the set of points that have at least one polar name <span class="m">(<span class="c4"><i>r</i></span>, <span class="c1"><i>θ</i></span>)</span> satisfying the equation. A point with <span class="m"><i>r</i> &lt; 0</span> lies on the ray <span class="m"><i>θ</i> + π</span>.</p>
<p><b>Symmetry tests.</b> The graph is symmetric about the <b>polar axis</b> if replacing <span class="m"><i>θ</i></span> by <span class="m">−<i>θ</i></span> gives an equivalent equation; about the line <span class="m"><b><i>θ</i> = π/2</b></span> if replacing <span class="m">(<i>r</i>, <i>θ</i>)</span> by <span class="m">(<i>r</i>, π − <i>θ</i>)</span> or by <span class="m">(−<i>r</i>, −<i>θ</i>)</span> does; about the <b>pole</b> if replacing <span class="m"><i>r</i></span> by <span class="m">−<i>r</i></span> does. The tests are sufficient but not necessary: a graph can have a symmetry that a test misses. For <span class="m"><i>r</i> = sin 2<i>θ</i></span>, replacing <span class="m"><i>θ</i></span> by <span class="m">−<i>θ</i></span> gives <span class="m"><i>r</i> = −sin 2<i>θ</i></span>, yet the four-petal rose is symmetric about the polar axis. Replacing <span class="m">(<i>r</i>, <i>θ</i>)</span> by <span class="m">(−<i>r</i>, π − <i>θ</i>)</span>, another name for the mirror point, shows it.</p>
<div class="display"><b>circle</b> &nbsp; <i>r</i> = <i>a</i> cos <i>θ</i>, &nbsp; <i>r</i> = <i>a</i> sin <i>θ</i> &nbsp; <span class="dim">(diameter |<i>a</i>|, through the pole)</span><br><b>limaçon</b> &nbsp; <i>r</i> = <i>a</i> ± <i>b</i> cos <i>θ</i>, &nbsp; <i>r</i> = <i>a</i> ± <i>b</i> sin <i>θ</i> &nbsp; <span class="dim">(<i>a</i>, <i>b</i> &gt; 0)</span><br><span class="dim">inner loop if <i>a</i>/<i>b</i> &lt; 1 · cardioid if <i>a</i> = <i>b</i> · dimpled if 1 &lt; <i>a</i>/<i>b</i> &lt; 2 · convex if <i>a</i>/<i>b</i> ≥ 2</span><br><b>rose</b> &nbsp; <i>r</i> = <i>a</i> cos <i>nθ</i>, &nbsp; <i>r</i> = <i>a</i> sin <i>nθ</i> &nbsp; <span class="dim">(<i>n</i> ≥ 2 an integer: <i>n</i> petals if <i>n</i> is odd, 2<i>n</i> if <i>n</i> is even, each of length |<i>a</i>|)</span><br><b>lemniscate</b> &nbsp; <i>r</i><sup>2</sup> = <i>a</i><sup>2</sup> cos 2<i>θ</i>, &nbsp; <i>r</i><sup>2</sup> = <i>a</i><sup>2</sup> sin 2<i>θ</i><br><b>Archimedean spiral</b> &nbsp; <i>r</i> = <i>aθ</i></div>
<p><b>Zeros and maximum |<i>r</i>|.</b> Solving <span class="m"><i>r</i>(<i>θ</i>) = 0</span> gives the angles at which the curve passes through the pole. The largest value of <span class="m">|<i>r</i>|</span> shows how far the curve reaches: for <span class="m"><i>r</i> = <i>a</i> + <i>b</i> cos <i>θ</i></span> it is <span class="m"><i>a</i> + <i>b</i></span>, at <span class="m"><i>θ</i> = 0</span>. The circles are traced once as <span class="m"><i>θ</i></span> runs over <span class="m">[0, π)</span>, and so is a rose with <span class="m"><i>n</i></span> odd, because <span class="m"><i>r</i>(<i>θ</i> + π) = −<i>r</i>(<i>θ</i>)</span> names the same point again. A rose with <span class="m"><i>n</i></span> even needs <span class="m">[0, 2π)</span>.</p>`,
  legend: [
    { c: "c1", sym: `<i>θ</i>`, name: "Polar angle", desc: "The direction of the turning ray. It is also the horizontal axis of the rectangular graph of r(θ)." },
    { c: "c4", sym: `<i>r</i>`, name: "Directed distance", desc: "How far along the ray the point lies; the height of the rectangular graph." },
    { c: "c5", sym: `<i>r</i> = <i>f</i>(<i>θ</i>)`, name: "Polar curve", desc: "Every point (r, θ) that satisfies the equation, joined in order of θ." },
    { c: "c3", sym: `<i>r</i> &lt; 0`, name: "Negative-r part", desc: "Points drawn on the opposite ray θ + π. They make inner loops and some petals." }
  ],
  steps: {
    title: "How to graph a polar equation",
    items: [
      "Test for symmetry about the polar axis, the line <span class=\"m\"><i>θ</i> = π/2</span> and the pole.",
      "Find the zeros: solve <span class=\"m\"><i>r</i>(<i>θ</i>) = 0</span>. The curve passes through the pole at those angles.",
      "Find the maximum value of <span class=\"m\">|<i>r</i>|</span> and the angles where it occurs.",
      "Make a table of <span class=\"m\"><i>r</i></span> for <span class=\"m\"><i>θ</i></span> in steps of <span class=\"m\">π/6</span> (or smaller) over one full trace. Symmetry can halve the table.",
      "Plot the points, putting each negative <span class=\"m\"><i>r</i></span> on the opposite ray, and join them in order of <span class=\"m\"><i>θ</i></span>.",
      "Reflect the plotted part, as the symmetry allows, to finish the curve."
    ]
  },
  example: {
    prompt: `Graph <span class="m c5"><i>r</i> = 2 + 4 cos <i>θ</i></span>. Name the curve and give its symmetry, its zeros in <span class="m">[0, 2π)</span> and its maximum <span class="m">|<i>r</i>|</span>.`,
    lines: [
      { math: `<span class="m"><i>r</i> = 2 + 4 cos(−<i>θ</i>) = 2 + 4 cos <i>θ</i></span>`, note: "Cosine is even, so the graph is symmetric about the polar axis. Plot 0 ≤ θ ≤ π and reflect." },
      { math: `<span class="m"><i>a</i>/<i>b</i> = 2/4 = 1/2 &lt; 1</span>`, note: "A limaçon with an inner loop." },
      { math: `<span class="m">2 + 4 cos <i>θ</i> = 0 ⇒ cos <i>θ</i> = −<span class="fr"><span>1</span><span>2</span></span> ⇒ <span class="c1"><i>θ</i> = <span class="fr"><span>2π</span><span>3</span></span>, <span class="fr"><span>4π</span><span>3</span></span></span></span>`, note: "The curve passes through the pole at these angles." },
      { math: `<span class="m"><i>θ</i>: 0, π/3, π/2, 2π/3, π &nbsp;→&nbsp; <span class="c4"><i>r</i></span>: 6, 4, 2, 0, <span class="c3">−2</span></span>`, note: "A short table. r is negative for 2π/3 < θ < 4π/3." },
      { math: `<span class="m">(<span class="c3">−2</span>, π)</span> is 2 units right of the pole`, note: "The negative values draw the inner loop, which reaches the point (−2, π) = (2, 0)." },
      { math: `<span class="m">max |<i>r</i>| = 2 + 4 = <span class="c4">6</span> at <i>θ</i> = 0</span>`, note: "The outer loop reaches 6 units right of the pole." }
    ],
    answer: `<span class="m c5">A limaçon with an inner loop</span>, symmetric about the polar axis, with <span class="m"><i>r</i> = 0</span> at <span class="m"><i>θ</i> = 2π/3, 4π/3</span> and <span class="m">max |<i>r</i>| = 6</span> at <span class="m"><i>θ</i> = 0</span>`
  },
  why: `<p>Many shapes in science and engineering are rules of the form "distance depends on direction": how strongly a microphone or antenna responds in each direction, the outline of a cam, the scan of a lidar. A polar graph turns such a rule into a picture. Zeros show the directions that are silent, the maximum of |r| shows the strongest direction, and the period of r(θ) shows how the pattern repeats.</p>`,
  careers: [
    { role: "Audio engineer", use: "Chooses microphones by their polar pickup patterns: cardioid, supercardioid and figure-eight curves of sensitivity against direction." },
    { role: "Antenna engineer", use: "Reads radiation patterns as polar graphs to see the main lobe, the side lobes and the null directions where r = 0." },
    { role: "Mechanical engineer", use: "Specifies a cam profile as radius against rotation angle, then checks the curve for smoothness and maximum lift." },
    { role: "Robotics engineer", use: "Treats a lidar sweep as r(θ): one distance for each direction, converted to x and y for mapping." },
    { role: "Graphics programmer", use: "Draws roses, spirals and procedural patterns by sampling r(θ) and converting each point to screen coordinates." },
    { role: "Lighting designer", use: "Uses polar candela diagrams that show a fixture's light intensity in each direction." }
  ],
  life: [
    "A cardioid microphone is named for its heart-shaped pickup pattern: strong in front, nearly silent behind",
    "The groove of a vinyl record winds inward in turns of nearly equal spacing, close to an Archimedean spiral",
    "A rope coiled flat on a deck lies in evenly spaced turns",
    "A robot vacuum's lidar reports one distance for each direction it faces",
    "Decorative rosettes and some flower outlines look like rose curves"
  ],
  fields: [
    { name: "Acoustics", use: "Microphone and loudspeaker directivity is drawn as polar graphs; the cardioid is a standard pattern." },
    { name: "Physics", use: "Radiation from an antenna or a dipole is described by intensity as a function of direction." },
    { name: "Mechanical engineering", use: "Cams, spiral springs and scroll compressors are designed from polar equations." },
    { name: "Computer graphics", use: "Curves given by r(θ) are rendered by sampling θ and converting to x and y." }
  ],
  prereqWhy: {
    "trig-polar-coords": "Every point of a polar graph is a polar pair (r, θ). Negative r goes on the opposite ray, and converting to x and y identifies circles and checks symmetry.",
    "trig-sinusoids": "r = a + b cos θ and r = a cos nθ are sinusoids in θ. Their midline, amplitude and period give the maximum |r|, the zeros and how often petals repeat."
  },
  unlocksWhy: {
    "pc-polar-conics": "Plotting <i>r</i> as a function of <i>θ</i> and reading points from the pole is the skill used for <i>r</i> = <i>ep</i>/(1 ± <i>e</i> cos <i>θ</i>), whose graphs are ellipses, parabolas and hyperbolas."
  },
  beyond: [
    { field: "Calculus II", why: "Area inside a polar curve, arc length and slopes of tangent lines all start from these graphs and their zeros." },
    { field: "Precalculus", why: "Conic sections in polar form, r = ed/(1 ± e cos θ), and parametric curves extend the same plotting." },
    { field: "Calculus III", why: "Double integrals over regions bounded by circles, cardioids and roses are set up in polar coordinates." },
    { field: "Physics (E&M)", why: "Antenna and dipole radiation patterns are polar graphs of field strength against direction." }
  ],
  mistakes: [
    { wrong: `<span class="m"><i>r</i> = 3 cos 2<i>θ</i></span> has 2 petals.`, fix: `For <span class="m"><i>n</i></span> even a rose has <span class="m">2<i>n</i></span> petals, so 4 here. The petals in the directions where <span class="m">cos 2<i>θ</i> &lt; 0</span> come from negative <span class="m"><i>r</i></span>, drawn on the opposite ray.` },
    { wrong: `Replacing <span class="m"><i>θ</i></span> by <span class="m">−<i>θ</i></span> in <span class="m"><i>r</i> = sin 2<i>θ</i></span> gives <span class="m"><i>r</i> = −sin 2<i>θ</i></span>, so the graph is not symmetric about the polar axis.`, fix: `The tests are sufficient, not necessary. Replacing <span class="m">(<i>r</i>, <i>θ</i>)</span> by <span class="m">(−<i>r</i>, π − <i>θ</i>)</span> gives <span class="m">−<i>r</i> = sin(2π − 2<i>θ</i>) = −sin 2<i>θ</i></span>, which is equivalent. The rose is symmetric about the polar axis.` },
    { wrong: `For <span class="m"><i>r</i> = 2 + 4 cos <i>θ</i></span>, skip the angles where <span class="m"><i>r</i> &lt; 0</span>: there are no points there.`, fix: `A negative <span class="m"><i>r</i></span> is plotted on the opposite ray. From <span class="m"><i>θ</i> = 2π/3</span> to <span class="m">4π/3</span> these points form the inner loop.` },
    { wrong: `Graphing <span class="m"><i>r</i> = 4 cos 3<i>θ</i></span> for <span class="m">0 ≤ <i>θ</i> &lt; 2π</span> gives 6 petals.`, fix: `For <span class="m"><i>n</i></span> odd, <span class="m"><i>r</i>(<i>θ</i> + π) = −<i>r</i>(<i>θ</i>)</span>, which names the same point. So <span class="m"><i>θ</i></span> from π to 2π retraces the same 3 petals.` }
  ],
  practice: [
    { q: `Identify the graph of <span class="m"><i>r</i> = 6 sin <i>θ</i></span> and give its rectangular equation.`, a: `Multiply by <span class="m"><i>r</i></span>: <span class="m"><i>r</i><sup>2</sup> = 6<i>r</i> sin <i>θ</i></span>, so <span class="m"><i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = 6<i>y</i></span>, that is <span class="m"><i>x</i><sup>2</sup> + (<i>y</i> − 3)<sup>2</sup> = 9</span>. A circle with centre <span class="m">(0, 3)</span> and radius 3, through the pole, symmetric about <span class="m"><i>θ</i> = π/2</span>.` },
    { q: `Classify <span class="m"><i>r</i> = 3 − 3 sin <i>θ</i></span>. Find its zeros in <span class="m">[0, 2π)</span> and its maximum <span class="m">|<i>r</i>|</span>.`, a: `<span class="m"><i>a</i> = <i>b</i> = 3</span>: a cardioid, symmetric about <span class="m"><i>θ</i> = π/2</span>. <span class="m"><i>r</i> = 0</span> when <span class="m">sin <i>θ</i> = 1</span>, so <span class="m"><i>θ</i> = π/2</span>. <span class="m">max |<i>r</i>| = 6</span> at <span class="m"><i>θ</i> = 3π/2</span>, the point 6 units below the pole.` },
    { q: `For <span class="m"><i>r</i> = 2 sin 4<i>θ</i></span>, give the number of petals, their length and the zeros in <span class="m">[0, 2π)</span>.`, a: `<span class="m"><i>n</i> = 4</span> is even: 8 petals of length 2. <span class="m">sin 4<i>θ</i> = 0 ⇒ 4<i>θ</i> = <i>k</i>π ⇒ <i>θ</i> = <i>k</i>π/4</span>: <span class="m">0, π/4, π/2, …, 7π/4</span>. The tips, where <span class="m">|<i>r</i>| = 2</span>, are at <span class="m"><i>θ</i> = π/8 + <i>k</i>π/4</span>.` },
    { q: `For the lemniscate <span class="m"><i>r</i><sup>2</sup> = 9 cos 2<i>θ</i></span>, find where in <span class="m">[0, 2π)</span> it has points, its zeros, its maximum <span class="m">|<i>r</i>|</span> and its symmetry.`, a: `Points need <span class="m">cos 2<i>θ</i> ≥ 0</span>: <span class="m">[0, π/4] ∪ [3π/4, 5π/4] ∪ [7π/4, 2π)</span>. Zeros at <span class="m"><i>θ</i> = π/4, 3π/4, 5π/4, 7π/4</span>. <span class="m">max |<i>r</i>| = 3</span> at <span class="m"><i>θ</i> = 0, π</span>. Replacing <span class="m"><i>θ</i></span> by <span class="m">−<i>θ</i></span>, <span class="m">(<i>r</i>, <i>θ</i>)</span> by <span class="m">(<i>r</i>, π − <i>θ</i>)</span>, or <span class="m"><i>r</i></span> by <span class="m">−<i>r</i></span> each leaves the equation unchanged: symmetric about the polar axis, the line <span class="m"><i>θ</i> = π/2</span> and the pole.` }
  ],
  origin: `Archimedes studied the spiral <i>r</i> = <i>aθ</i> in <i>On Spirals</i>, around 225 BC, as the path of a point moving steadily along a ray that turns steadily. Étienne Pascal, the father of Blaise Pascal, studied the limaçon in the early 1600s, and Gilles de Roberval named it after the French word for snail in 1650. Jakob Bernoulli described the lemniscate in 1694. Guido Grandi studied the rose curves, which he called rhodonea, in the 1720s.`
};
