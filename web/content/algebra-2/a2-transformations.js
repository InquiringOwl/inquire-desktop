window.ARITH = window.ARITH || {};

ARITH["a2-transformations"] = {
  title: "Transformations of Functions",
  short: "Shift, stretch and reflect a parent graph: a·f(b(x − h)) + k",
  grade: "Grade 11 · college Intermediate Algebra",
  hours: 6,
  voice: "plain",
  eyebrow: "Functions · shifts, stretches and reflections",
  hero: `<span class="m"><i>g</i>(<i>x</i>) = <span class="c3"><i>a</i></span> · <span class="c5"><i>f</i></span>(<span class="c4"><i>b</i></span>(<i>x</i> − <span class="c1"><i>h</i></span>)) + <span class="c2"><i>k</i></span></span>`,
  lede: `Most graphs you meet are a familiar <span class="c5">parent graph</span> that has been moved, stretched or flipped. Four numbers describe the change: <span class="c1"><i>h</i></span> and <span class="c2"><i>k</i></span> shift it, <span class="c3"><i>a</i></span> and <span class="c4"><i>b</i></span> stretch, compress or reflect it.`,
  plain: `<p>You already know the shapes of a few basic graphs: the line <span class="m"><i>y</i> = <i>x</i></span>, the parabola <span class="m"><i>y</i> = <i>x</i><sup>2</sup></span>, the V of <span class="m"><i>y</i> = |<i>x</i>|</span>, the half-parabola <span class="m"><i>y</i> = √<span class="ov"><i>x</i></span></span>. These are the <b>parent functions</b>. A new formula built from one of them usually draws the same shape somewhere else, or taller, or upside down.</p>
<p>Changes made outside the function act on the outputs, the <span class="m"><i>y</i></span>-values. Adding <span class="c2"><i>k</i></span> lifts every point by <span class="c2"><i>k</i></span>. Multiplying by <span class="c3"><i>a</i></span> stretches every height by <span class="c3"><i>a</i></span>, and a negative <span class="c3"><i>a</i></span> flips the graph over the <span class="m"><i>x</i></span>-axis. These behave the way they look.</p>
<p>Changes made inside, next to <span class="m"><i>x</i></span>, act on the inputs, and they seem to work backwards. In <span class="m"><i>f</i>(<i>x</i> − 3)</span> the graph moves right 3, because the input must be 3 larger to get the same output as before. In <span class="m"><i>f</i>(2<i>x</i>)</span> the graph gets narrower by half, because the input only needs to be half as large. Undo the inside operation to see where each point goes.</p>`,
  formal: `<p>Let <span class="m"><span class="c3"><i>a</i></span> ≠ 0</span> and <span class="m"><span class="c4"><i>b</i></span> ≠ 0</span>. The graph of <span class="m"><i>g</i>(<i>x</i>) = <span class="c3"><i>a</i></span><i>f</i>(<span class="c4"><i>b</i></span>(<i>x</i> − <span class="c1"><i>h</i></span>)) + <span class="c2"><i>k</i></span></span> is obtained from the graph of <span class="m"><i>f</i></span> by moving every point by the rule</p>
<div class="display">(<i>x</i>, <i>y</i>) &nbsp;→&nbsp; (<span class="fr"><span><i>x</i></span><span><span class="c4"><i>b</i></span></span></span> + <span class="c1"><i>h</i></span>, &nbsp;<span class="c3"><i>a</i></span><i>y</i> + <span class="c2"><i>k</i></span>)</div>
<p>A <b>horizontal shift</b> of <span class="c1"><i>h</i></span> (right if <span class="m"><i>h</i> &gt; 0</span>) and a <b>vertical shift</b> of <span class="c2"><i>k</i></span> (up if <span class="m"><i>k</i> &gt; 0</span>). If <span class="m">|<span class="c3"><i>a</i></span>| &gt; 1</span> the graph is <b>stretched vertically</b>, if <span class="m">0 &lt; |<span class="c3"><i>a</i></span>| &lt; 1</span> it is <b>compressed vertically</b>, and <span class="m"><span class="c3"><i>a</i></span> &lt; 0</span> adds a <b>reflection in the <i>x</i>-axis</b>. If <span class="m">|<span class="c4"><i>b</i></span>| &gt; 1</span> the graph is <b>compressed horizontally</b> by the factor <span class="m">1/|<i>b</i>|</span>, if <span class="m">0 &lt; |<span class="c4"><i>b</i></span>| &lt; 1</span> it is <b>stretched horizontally</b>, and <span class="m"><span class="c4"><i>b</i></span> &lt; 0</span> adds a <b>reflection in the <i>y</i>-axis</b>. Apply the inside changes in the order <span class="c4"><i>b</i></span> then <span class="c1"><i>h</i></span>, and the outside changes in the order <span class="c3"><i>a</i></span> then <span class="c2"><i>k</i></span>; the inside and outside groups do not affect each other.</p>
<p>Write the inside as <span class="m"><span class="c4"><i>b</i></span>(<i>x</i> − <span class="c1"><i>h</i></span>)</span> before reading off <span class="c1"><i>h</i></span>: <span class="m"><i>f</i>(2<i>x</i> − 6) = <i>f</i>(2(<i>x</i> − 3))</span> is shifted 3, not 6. The parent functions here are <span class="m"><i>x</i>, <i>x</i><sup>2</sup>, <i>x</i><sup>3</sup>, |<i>x</i>|, √<span class="ov"><i>x</i></span>, ∛<span class="ov"><i>x</i></span></span> and <span class="m">1/<i>x</i></span>. For some of them two different changes give the same graph: <span class="m">√<span class="ov">4<i>x</i></span> = 2√<span class="ov"><i>x</i></span></span>, so a horizontal compression by <span class="m">1/4</span> equals a vertical stretch by 2, and <span class="m">(−<i>x</i>)<sup>2</sup> = <i>x</i><sup>2</sup></span>, so reflecting a parabola in the <span class="m"><i>y</i></span>-axis changes nothing.</p>`,
  legend: [
    { c: "c5", sym: `<i>f</i>(<i>x</i>)`, name: "Parent function", desc: "The basic graph before any change: x, x², x³, |x|, √x, ∛x or 1/x." },
    { c: "c1", sym: `<i>h</i>`, name: "Horizontal shift", desc: "Inside, as x − h. Moves the graph right by h (left when h is negative)." },
    { c: "c2", sym: `<i>k</i>`, name: "Vertical shift", desc: "Added outside. Moves the graph up by k (down when k is negative)." },
    { c: "c3", sym: `<i>a</i>`, name: "Vertical factor", desc: "Multiplies every y-value. Stretches when |a| &gt; 1, compresses when |a| &lt; 1, reflects in the x-axis when a &lt; 0." },
    { c: "c4", sym: `<i>b</i>`, name: "Horizontal factor", desc: "Multiplies x inside. Divides every x-value by b, so |b| &gt; 1 compresses; b &lt; 0 reflects in the y-axis." }
  ],
  steps: {
    title: "How to graph a transformed function",
    items: [
      `Identify the <span class="c5">parent function</span> and three or four of its key points, such as <span class="m">(0, 0), (1, 1), (4, 2)</span> for <span class="m">√<span class="ov"><i>x</i></span></span>.`,
      `Write the inside in the form <span class="m"><span class="c4"><i>b</i></span>(<i>x</i> − <span class="c1"><i>h</i></span>)</span> by factoring out the coefficient of <span class="m"><i>x</i></span>.`,
      `Read off <span class="c3"><i>a</i></span>, <span class="c4"><i>b</i></span>, <span class="c1"><i>h</i></span> and <span class="c2"><i>k</i></span>, and say in words what each one does.`,
      `Move each key point with <span class="m">(<i>x</i>, <i>y</i>) → (<i>x</i>/<span class="c4"><i>b</i></span> + <span class="c1"><i>h</i></span>, <span class="c3"><i>a</i></span><i>y</i> + <span class="c2"><i>k</i></span>)</span>, and move any asymptote the same way.`,
      `Draw the parent shape through the new points and state the domain and range.`,
      `Check one point by substituting its <span class="m"><i>x</i></span>-value into the formula for <span class="m"><i>g</i></span>.`
    ]
  },
  example: {
    prompt: `Describe the transformations in <span class="m"><i>g</i>(<i>x</i>) = 3 − √<span class="ov">8 − 2<i>x</i></span></span>, find the images of the key points <span class="m">(0, 0), (1, 1), (4, 2)</span> of <span class="m">√<span class="ov"><i>x</i></span></span>, and give the domain and range of <span class="m"><i>g</i></span>.`,
    lines: [
      { math: `<span class="m"><i>g</i>(<i>x</i>) = <span class="c3">−1</span> · √<span class="ov">8 − 2<i>x</i></span> + <span class="c2">3</span></span>`, note: "Put the outside changes in the form a · f(…) + k." },
      { math: `<span class="m">8 − 2<i>x</i> = <span class="c4">−2</span>(<i>x</i> − <span class="c1">4</span>)</span>`, note: "Factor the coefficient of x out of the inside." },
      { math: `<span class="m"><span class="c3"><i>a</i> = −1</span>, &nbsp;<span class="c4"><i>b</i> = −2</span>, &nbsp;<span class="c1"><i>h</i> = 4</span>, &nbsp;<span class="c2"><i>k</i> = 3</span></span>`, note: "Compress horizontally by 1/2 and reflect in the y-axis, shift right 4; reflect in the x-axis, shift up 3." },
      { math: `<span class="m">(0, 0) → (<span class="fr"><span>0</span><span>−2</span></span> + 4, −0 + 3) = (4, 3)</span>`, note: "Apply (x, y) → (x/b + h, ay + k). The endpoint moves to (4, 3)." },
      { math: `<span class="m">(1, 1) → (<span class="fr"><span>7</span><span>2</span></span>, 2), &nbsp; (4, 2) → (2, 1)</span>`, note: "1/(−2) + 4 = 7/2 and −1 + 3 = 2; 4/(−2) + 4 = 2 and −2 + 3 = 1." },
      { math: `<span class="m">8 − 2<i>x</i> ≥ 0 ⇔ <i>x</i> ≤ 4</span>`, note: "The radicand must be nonnegative. The graph runs left from its endpoint and downward." },
      { math: `<span class="m"><i>g</i>(2) = 3 − √<span class="ov">4</span> = 1</span> ✓`, note: "Check the point (2, 1) in the original formula." }
    ],
    answer: `The image points are <span class="m">(4, 3), (<span class="fr"><span>7</span><span>2</span></span>, 2), (2, 1)</span>. Domain <span class="m">(−∞, 4]</span>, range <span class="m">(−∞, 3]</span>.`
  },
  why: `<p>Transformations turn a short list of shapes into every graph in the course. Once you can read <span class="m"><i>a</i>, <i>b</i>, <i>h</i>, <i>k</i></span> off a formula, you know where a parabola's vertex is, where a rational function's asymptotes sit and where an exponential curve levels off without plotting a table of values.</p>
<p>The same idea runs backwards. Given a graph or data that look like a parent shape, you choose the four numbers that fit. That is how a scientist fits a model, how an engineer calibrates a sensor curve and how a game designer moves and scales a shape on screen.</p>`,
  careers: [
    { role: "Data analyst", use: "Shifts and rescales a baseline model y = a·f(b(x − h)) + k so it lines up with measured data before reading off parameters." },
    { role: "Audio engineer", use: "Changes gain (vertical stretch), time delay (horizontal shift) and playback speed (horizontal compression) of a waveform." },
    { role: "Game developer", use: "Translates, scales and mirrors sprites and motion curves with the same point rule applied to coordinates." },
    { role: "Instrumentation technician", use: "Calibrates a sensor by fitting an offset and a scale factor so its reading curve matches a reference standard." },
    { role: "Pharmacologist", use: "Compares dose-response curves that differ by a shift along the dose axis and a change of maximum effect." },
    { role: "Animator", use: "Retimes motion by stretching an easing curve horizontally and exaggerates it by stretching it vertically." }
  ],
  life: [
    "Converting a temperature curve from Celsius to Fahrenheit stretches and shifts it vertically",
    "Daylight saving time shifts a daily schedule graph one hour horizontally",
    "Zooming a photo or map scales both coordinates by the same factor",
    "Playing a recording at double speed squeezes its waveform horizontally by half",
    "A price list after a flat delivery fee is the old graph shifted up"
  ],
  fields: [
    { name: "Physics", use: "A wave y = A·sin(k(x − vt)) is a sine curve stretched by A and shifted by vt as time passes." },
    { name: "Economics", use: "A tax or subsidy shifts a supply or demand curve, and a change of units rescales it." },
    { name: "Signal processing", use: "Delays, gains and time-scaling of signals are horizontal shifts, vertical stretches and horizontal compressions." },
    { name: "Computer graphics", use: "Translation, scaling and reflection of coordinates are the basic transformations of every drawing system." }
  ],
  prereqWhy: {
    "a1-quad-graphs": "The parabola y = x² and its vertex are the first parent graph whose shifts and stretches you have already seen.",
    "a1-piecewise": "The absolute value function |x| is one of the parent graphs, and its V shape makes shifts and reflections easy to see.",
    "g-transformations": "Translations, reflections and dilations of points in the plane are the geometric moves applied here to whole graphs."
  },
  unlocksWhy: {
    "a2-quad-vertex": "Vertex form a(x − h)² + k is the parabola y = x² transformed; completing the square finds a, h and k.",
    "a2-poly-graphs": "Polynomial graphs start from the power functions xⁿ, and shifts and stretches of them explain their basic shapes.",
    "a2-rational-func": "Rational functions such as a/(x − h) + k are 1/x transformed, so the asymptotes move to x = h and y = k.",
    "a2-radical-func": "Graphs of a√(b(x − h)) + k and the cube-root family are √x and ∛x transformed, with the domain moving with the endpoint.",
    "a2-exp-func": "Exponential functions a·bˣ⁻ʰ + k are transformations of bˣ, and the shift k moves the horizontal asymptote.",
    "trig-sinusoids": "The amplitude, period, phase shift and midline of a sinusoid are the stretch, compression and shifts of <span class=\"m\"><i>a</i> <i>f</i>(<i>b</i>(<i>x</i> − <i>h</i>)) + <i>k</i></span>.",
    "pc-parent-functions": "Shifts, stretches and reflections only make sense relative to a parent graph, so the parent functions are collected into one library with their key points and symmetries."
  },
  beyond: [
    { field: "Precalculus", why: "Trigonometric graphs y = A·sin(B(x − C)) + D are read with exactly the same four parameters." },
    { field: "Calculus I", why: "Substitution and the chain rule track how a horizontal stretch or shift changes slopes and areas." },
    { field: "Statistics", why: "Standardizing a variable, z = (x − μ)/σ, shifts and rescales a distribution to the standard normal curve." },
    { field: "Physics", why: "Travelling waves and changes of units are transformations of a fixed graph." }
  ],
  mistakes: [
    { wrong: `Reading <span class="m"><i>y</i> = (<i>x</i> + 3)<sup>2</sup></span> as a shift right 3.`, fix: `<span class="m"><i>x</i> + 3 = <i>x</i> − (−3)</span>, so <span class="m"><i>h</i> = −3</span>: the parabola moves left 3. The vertex is where the inside is 0, at <span class="m"><i>x</i> = −3</span>.` },
    { wrong: `Reading the shift of <span class="m"><i>y</i> = √<span class="ov">2<i>x</i> − 6</span></span> as 6.`, fix: `Factor first: <span class="m">2<i>x</i> − 6 = 2(<i>x</i> − 3)</span>, so <span class="m"><i>h</i> = 3</span>. The endpoint is at <span class="m">(3, 0)</span>, where the radicand is 0.` },
    { wrong: `Treating <span class="m"><i>y</i> = 2<i>f</i>(<i>x</i>) + 3</span> and <span class="m"><i>y</i> = 2(<i>f</i>(<i>x</i>) + 3)</span> as the same graph.`, fix: `Outside changes happen in the order written. The first stretches then lifts 3, so <span class="m"><i>y</i> → 2<i>y</i> + 3</span>; the second lifts then stretches, so <span class="m"><i>y</i> → 2<i>y</i> + 6</span>.` },
    { wrong: `Thinking <span class="m"><i>f</i>(2<i>x</i>)</span> doubles the width of the graph.`, fix: `The input only needs to be half as large, so each point moves to <span class="m">(<i>x</i>/2, <i>y</i>)</span>: the graph is compressed horizontally by <span class="m">1/2</span>.` }
  ],
  practice: [
    { q: `Describe how the graph of <span class="m"><i>g</i>(<i>x</i>) = (<i>x</i> − 2)<sup>2</sup> − 5</span> comes from <span class="m"><i>y</i> = <i>x</i><sup>2</sup></span>, and give its vertex.`, a: `Shift right 2 and down 5. The vertex <span class="m">(0, 0)</span> moves to <span class="m">(2, −5)</span>.` },
    { q: `Write a formula for the graph of <span class="m"><i>y</i> = |<i>x</i>|</span> reflected in the <span class="m"><i>x</i></span>-axis, stretched vertically by a factor of 3, then shifted left 1 and up 4.`, a: `<span class="m"><i>a</i> = −3, <i>h</i> = −1, <i>k</i> = 4</span>: <span class="m"><i>g</i>(<i>x</i>) = −3|<i>x</i> + 1| + 4</span>. Vertex <span class="m">(−1, 4)</span>; check <span class="m"><i>g</i>(0) = −3 + 4 = 1</span>.` },
    { q: `The point <span class="m">(2, 8)</span> is on the graph of <span class="m"><i>y</i> = <i>f</i>(<i>x</i>)</span>. Find the matching point on <span class="m"><i>y</i> = 3<i>f</i>(2<i>x</i>) − 1</span> and on <span class="m"><i>y</i> = <i>f</i>(<i>x</i> + 5)</span>.`, a: `First: <span class="m"><i>a</i> = 3, <i>b</i> = 2, <i>k</i> = −1</span>, so <span class="m">(2/2, 3 · 8 − 1) = (1, 23)</span>. Second: <span class="m"><i>h</i> = −5</span>, so <span class="m">(2 − 5, 8) = (−3, 8)</span>.` },
    { q: `For <span class="m"><i>g</i>(<i>x</i>) = 3 − <span class="fr"><span>2</span><span><i>x</i> + 1</span></span></span>, describe the transformations of <span class="m"><i>y</i> = 1/<i>x</i></span> and give the asymptotes, domain and range.`, a: `<span class="m"><i>g</i>(<i>x</i>) = −2 · <span class="fr"><span>1</span><span><i>x</i> + 1</span></span> + 3</span>: stretch vertically by 2, reflect in the <span class="m"><i>x</i></span>-axis, shift left 1 and up 3. Asymptotes <span class="m"><i>x</i> = −1</span> and <span class="m"><i>y</i> = 3</span>. Domain <span class="m">(−∞, −1) ∪ (−1, ∞)</span>, range <span class="m">(−∞, 3) ∪ (3, ∞)</span>.` }
  ],
  origin: `<p>The idea that a formula and a curve are two views of one object comes from René Descartes and Pierre de Fermat in the 1630s. The systematic study of how a curve changes when its coordinates are shifted and rescaled grew with analytic geometry in the 1700s, when Leonhard Euler wrote functions as the central objects of analysis and classified curves by their equations. The four-parameter form a·f(b(x − h)) + k used in classrooms today became standard in twentieth-century algebra and precalculus textbooks.</p>`
};
