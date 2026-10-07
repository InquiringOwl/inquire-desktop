window.ARITH = window.ARITH || {};
ARITH["pc-parent-functions"] = {
  title: "The Parent Function Library & Symmetry",
  short: "Twelve basic graphs, and how to test even and odd",
  grade: "Grade 12 · college Precalculus",
  hours: 5,
  voice: "plain",
  eyebrow: "Functions · toolkit graphs and symmetry",
  hero: `<span class="m"><span class="c2"><i>f</i>(−<i>x</i>)</span> = <span class="c3"><i>f</i>(<i>x</i>)</span> ⇒ <span class="c5">even</span> &nbsp;·&nbsp; <span class="c2"><i>f</i>(−<i>x</i>)</span> = −<span class="c3"><i>f</i>(<i>x</i>)</span> ⇒ <span class="c5">odd</span></span>`,
  lede: `A short list of <b>parent functions</b> (also called toolkit functions) supplies the shape of almost every graph in the course. Knowing each one's domain, range and key points, and whether it is <span class="c5">even</span>, <span class="c5">odd</span> or neither, lets you sketch and check graphs quickly.`,
  plain: `<p>The library has twelve members: the constant function <span class="m"><i>f</i>(<i>x</i>) = <i>c</i></span>, the identity <span class="m"><i>x</i></span>, the square <span class="m"><i>x</i><sup>2</sup></span>, the cube <span class="m"><i>x</i><sup>3</sup></span>, the square root <span class="m">√<span class="ov"><i>x</i></span></span>, the cube root <span class="m">∛<span class="ov"><i>x</i></span></span>, the absolute value <span class="m">|<i>x</i>|</span>, the reciprocal <span class="m">1/<i>x</i></span>, the reciprocal squared <span class="m">1/<i>x</i><sup>2</sup></span>, the exponentials <span class="m"><i>e</i><sup><i>x</i></sup></span> and <span class="m"><i>b</i><sup><i>x</i></sup></span>, and the natural logarithm <span class="m">ln <i>x</i></span>. Each has a few points you should know by heart, such as <span class="m">(1, 1)</span> and <span class="m">(4, 2)</span> on <span class="m">√<span class="ov"><i>x</i></span></span>, or <span class="m">(0, 1)</span> on every <span class="m"><i>b</i><sup><i>x</i></sup></span>.</p>
<p>Fold the graph of <span class="m"><i>x</i><sup>2</sup></span> along the <i>y</i>-axis and the two halves land on each other. The point at <span class="m"><span class="c1"><i>x</i></span> = 3</span> has the same height as the point at <span class="m">−3</span>. Functions like this are called <b>even</b>.</p>
<p>The graph of <span class="m"><i>x</i><sup>3</sup></span> does something different. Turn it half a turn about the origin and it lands on itself: the point <span class="m">(2, 8)</span> goes to <span class="m">(−2, −8)</span>. Functions like this are called <b>odd</b>.</p>
<p>Most functions are neither. Shift <span class="m"><i>x</i><sup>2</sup></span> one unit right and the fold line moves to <span class="m"><i>x</i> = 1</span>, so the graph is no longer symmetric about the <i>y</i>-axis.</p>`,
  formal: `<p>Let the domain of <span class="m"><i>f</i></span> be symmetric: whenever <span class="m"><span class="c1"><i>x</i></span></span> is in it, so is <span class="m">−<span class="c1"><i>x</i></span></span>. Then</p>
<div class="display"><i>f</i> is <b>even</b> ⇔ <span class="c2"><i>f</i>(−<i>x</i>)</span> = <span class="c3"><i>f</i>(<i>x</i>)</span> for every <i>x</i> in the domain ⇔ the graph is symmetric about the <i>y</i>-axis<br><i>f</i> is <b>odd</b> ⇔ <span class="c2"><i>f</i>(−<i>x</i>)</span> = −<span class="c3"><i>f</i>(<i>x</i>)</span> for every <i>x</i> in the domain ⇔ the graph is symmetric about the origin</div>
<p>Among the parent functions, <span class="m"><i>c</i></span>, <span class="m"><i>x</i><sup>2</sup></span>, <span class="m">|<i>x</i>|</span> and <span class="m">1/<i>x</i><sup>2</sup></span> are even; <span class="m"><i>x</i></span>, <span class="m"><i>x</i><sup>3</sup></span>, <span class="m">∛<span class="ov"><i>x</i></span></span> and <span class="m">1/<i>x</i></span> are odd; <span class="m">√<span class="ov"><i>x</i></span></span>, <span class="m">ln <i>x</i></span>, <span class="m"><i>e</i><sup><i>x</i></sup></span> and <span class="m"><i>b</i><sup><i>x</i></sup></span> (<span class="m"><i>b</i> &gt; 0, <i>b</i> ≠ 1</span>) are neither. The domains of <span class="m">√<span class="ov"><i>x</i></span></span>, <span class="c4">[0, ∞)</span>, and <span class="m">ln <i>x</i></span>, <span class="c4">(0, ∞)</span>, are not symmetric, so the test cannot even begin. The only function on ℝ that is both even and odd is <span class="m"><i>f</i>(<i>x</i>) = 0</span>, since <span class="m"><i>f</i>(<i>x</i>) = −<i>f</i>(<i>x</i>)</span> forces <span class="m"><i>f</i>(<i>x</i>) = 0</span>.</p>
<p>Even and odd combine like signs: even + even is even, odd + odd is odd, even · even and odd · odd are even, and even · odd is odd. A polynomial is even exactly when every power of <span class="m"><i>x</i></span> it uses is even, and odd exactly when every power is odd. Any function on a symmetric domain splits into an even part plus an odd part:</p>
<div class="display"><i>f</i>(<i>x</i>) = <span class="fr"><span><i>f</i>(<i>x</i>) + <i>f</i>(−<i>x</i>)</span><span>2</span></span> + <span class="fr"><span><i>f</i>(<i>x</i>) − <i>f</i>(−<i>x</i>)</span><span>2</span></span>, &nbsp; for example &nbsp; <i>e</i><sup><i>x</i></sup> = <span class="fr"><span><i>e</i><sup><i>x</i></sup> + <i>e</i><sup>−<i>x</i></sup></span><span>2</span></span> + <span class="fr"><span><i>e</i><sup><i>x</i></sup> − <i>e</i><sup>−<i>x</i></sup></span><span>2</span></span></div>`,
  legend: [
    { c: "c1", sym: `<i>x</i>`, name: "Input", desc: "The point you move along the curve, and its mirror input −x." },
    { c: "c3", sym: `<i>f</i>(<i>x</i>)`, name: "Function value", desc: "The parent curve, or the member of the family you are testing." },
    { c: "c2", sym: `<i>f</i>(−<i>x</i>)`, name: "Mirror", desc: "The value at −x, and the reflected curve y = f(−x) used in the test." },
    { c: "c4", sym: `<i>D</i>, <i>R</i>`, name: "Domain and range", desc: "Bars on the axes showing which inputs are allowed and which outputs occur." },
    { c: "c5", sym: `even / odd`, name: "Verdict", desc: "The result of comparing f(−x) with f(x) and with −f(x)." }
  ],
  steps: {
    title: "How to decide whether a function is even, odd or neither",
    items: [
      `Check that the domain is symmetric about 0. If it is not, as for <span class="m">√<span class="ov"><i>x</i></span></span>, the function is neither.`,
      `Replace every <span class="m"><span class="c1"><i>x</i></span></span> by <span class="m">(−<i>x</i>)</span> and simplify <span class="m"><span class="c2"><i>f</i>(−<i>x</i>)</span></span>, using <span class="m">(−<i>x</i>)<sup><i>n</i></sup> = <i>x</i><sup><i>n</i></sup></span> for even <i>n</i>, <span class="m">−<i>x</i><sup><i>n</i></sup></span> for odd <i>n</i>, and <span class="m">|−<i>x</i>| = |<i>x</i>|</span>.`,
      `If <span class="m"><span class="c2"><i>f</i>(−<i>x</i>)</span></span> equals <span class="m"><span class="c3"><i>f</i>(<i>x</i>)</span></span>, the function is <span class="c5">even</span>.`,
      `Otherwise compute <span class="m">−<span class="c3"><i>f</i>(<i>x</i>)</span></span>. If <span class="m"><span class="c2"><i>f</i>(−<i>x</i>)</span></span> equals it, the function is <span class="c5">odd</span>.`,
      `To show neither, one input is enough: find an <span class="m"><i>x</i></span> with <span class="m"><i>f</i>(−<i>x</i>) ≠ <i>f</i>(<i>x</i>)</span> and another (or the same) with <span class="m"><i>f</i>(−<i>x</i>) ≠ −<i>f</i>(<i>x</i>)</span>.`,
      `Confirm on the graph: mirror symmetry in the <i>y</i>-axis for even, half-turn symmetry about the origin for odd.`
    ]
  },
  example: {
    prompt: `Decide whether <span class="m"><span class="c3"><i>f</i>(<i>x</i>)</span> = <i>x</i><sup>3</sup> − 4<i>x</i></span> is even, odd or neither. Then use the symmetry to finish the graph from its right half.`,
    lines: [
      { math: `<span class="m">Domain ℝ</span>`, note: "A polynomial accepts every real input, so the domain is symmetric." },
      { math: `<span class="m"><span class="c2"><i>f</i>(−<i>x</i>)</span> = (−<i>x</i>)<sup>3</sup> − 4(−<i>x</i>) = −<i>x</i><sup>3</sup> + 4<i>x</i></span>`, note: "Replace x by −x; the odd power keeps its minus sign." },
      { math: `<span class="m">−<span class="c3"><i>f</i>(<i>x</i>)</span> = −(<i>x</i><sup>3</sup> − 4<i>x</i>) = −<i>x</i><sup>3</sup> + 4<i>x</i></span>`, note: "The same expression, so f(−x) = −f(x)." },
      { math: `<span class="m"><span class="c5"><i>f</i> is odd</span></span>`, note: "It is not even: f(1) = −3 while f(−1) = 3." },
      { math: `<span class="m"><i>x</i><sup>3</sup> − 4<i>x</i> = <i>x</i>(<i>x</i> − 2)(<i>x</i> + 2) = 0 ⇒ <i>x</i> = −2, 0, 2</span>`, note: "The zeros come in a pair ±2 plus the origin, as symmetry predicts." },
      { math: `<span class="m">(1, −3) → (−1, 3), &nbsp; (3, 15) → (−3, −15)</span>`, note: "Each point on the right half gives a partner by a half turn about the origin." }
    ],
    answer: `<span class="m"><span class="c5"><i>f</i></span></span> is <span class="c5">odd</span>: its graph is symmetric about the origin, with zeros <span class="m">−2, 0, 2</span> and partner points such as <span class="m">(1, −3)</span> and <span class="m">(−1, 3)</span>.`
  },
  why: `<p>The parent functions are the vocabulary of graphs. A model in science or business is usually one of these shapes, stretched and shifted, so recognising the shape tells you its domain, its long-run behaviour and roughly where its values lie before you calculate anything.</p><p>Symmetry halves the work. If a function is even or odd you only need its graph for <span class="m"><i>x</i> ≥ 0</span>; the rest follows by a reflection or a half turn. In calculus the same fact makes the integral of an odd function over <span class="m">[−<i>a</i>, <i>a</i>]</span> equal to 0, and in physics and signal processing splitting a signal into even and odd parts is a standard first step.</p>`,
  careers: [
    { role: "Signal processing engineer", use: "Splits a signal into even and odd parts, which correspond to its cosine and sine components in a Fourier series." },
    { role: "Audio engineer", use: "Uses distortion curves that are odd functions of the input, which add only odd harmonics to a tone." },
    { role: "Data scientist", use: "Chooses a log, square-root or reciprocal transform of a variable by matching its scatter plot to a parent function shape." },
    { role: "Quantum physicist", use: "Classifies wavefunctions in a symmetric potential as even or odd (their parity), which decides which transitions are allowed." },
    { role: "Animation programmer", use: "Builds easing curves from x², x³ and √x so that motion starts or stops smoothly." },
    { role: "Structural engineer", use: "Uses the symmetry of a load about the centre of a beam to analyse only half of the beam." }
  ],
  life: [
    "A parabolic dish or headlight reflector is the graph of x² turned around its axis, symmetric about its centre line",
    "The loudness of a sound in decibels follows a logarithm of its intensity",
    "Money growing at a fixed percentage follows an exponential curve",
    "The brightness of a lamp falls off like 1/x² as you move away from it",
    "A speed of 30 km/h north and 30 km/h south have the same absolute value"
  ],
  fields: [
    { name: "Calculus", use: "The integral of an odd function over an interval centred at 0 is 0, and an even function's is twice the integral over the right half." },
    { name: "Physics", use: "Parity, whether a quantity is even or odd under x → −x, is a basic symmetry of physical laws." },
    { name: "Statistics", use: "The normal density is an even function of the distance from the mean, and log transforms straighten skewed data." },
    { name: "Fourier analysis", use: "Even functions have cosine series and odd functions have sine series." }
  ],
  prereqWhy: {
    "a2-transformations": "Every graph in this course is a parent function stretched, reflected and shifted; this topic collects the parents and adds symmetry.",
    "a2-radical-func": "The square-root and cube-root parents, with their domains and key points, come from radical functions."
  },
  unlocksWhy: {
    "pc-piecewise-abs": "The absolute value |x| is a piecewise function built from two parent lines, and y = f(|x|) is always even."
  },
  beyond: [
    { field: "Calculus I", why: "Symmetry shortens integrals over symmetric intervals, and the derivative of an even function is odd." },
    { field: "Calculus II", why: "Power series of even functions such as cos x use only even powers, and those of odd functions only odd powers." },
    { field: "Differential Equations", why: "Fourier series split a function into its even (cosine) and odd (sine) parts to solve heat and wave equations." },
    { field: "Physics (Mechanics, E&M)", why: "Inverse-square laws use the 1/x² parent, and symmetric charge or mass distributions simplify fields." }
  ],
  mistakes: [
    { wrong: `Calling <span class="m"><i>f</i>(<i>x</i>) = <i>x</i><sup>3</sup> + 1</span> odd because it has an odd power.`, fix: `Every term must be odd. <span class="m"><i>f</i>(−<i>x</i>) = −<i>x</i><sup>3</sup> + 1</span>, which is neither <span class="m"><i>f</i>(<i>x</i>)</span> nor <span class="m">−<i>f</i>(<i>x</i>) = −<i>x</i><sup>3</sup> − 1</span>. The constant 1 is an even term, so <span class="m"><i>f</i></span> is neither.` },
    { wrong: `Concluding "even" after checking one pair, such as <span class="m"><i>f</i>(2) = <i>f</i>(−2)</span>.`, fix: `Equality must hold for every <span class="m"><i>x</i></span>. Prove it algebraically. One failing pair is enough to rule even out, but one matching pair proves nothing.` },
    { wrong: `Saying a function is "odd" because it is not even.`, fix: `Most functions are neither. Odd is a separate test, <span class="m"><i>f</i>(−<i>x</i>) = −<i>f</i>(<i>x</i>)</span>, and <span class="m"><i>e</i><sup><i>x</i></sup></span>, <span class="m">√<span class="ov"><i>x</i></span></span> and <span class="m">(<i>x</i> − 1)<sup>2</sup></span> pass neither test.` }
  ],
  practice: [
    { q: `State the domain and range of <span class="m"><i>f</i>(<i>x</i>) = 1/<i>x</i><sup>2</sup></span>. Is it even, odd or neither?`, a: `Domain <span class="m">(−∞, 0) ∪ (0, ∞)</span>, range <span class="m">(0, ∞)</span>. <span class="m"><i>f</i>(−<i>x</i>) = 1/(−<i>x</i>)<sup>2</sup> = 1/<i>x</i><sup>2</sup> = <i>f</i>(<i>x</i>)</span>, so it is even.` },
    { q: `Is <span class="m"><i>g</i>(<i>x</i>) = <i>x</i><sup>2</sup> + 3|<i>x</i>|</span> even, odd or neither?`, a: `<span class="m"><i>g</i>(−<i>x</i>) = (−<i>x</i>)<sup>2</sup> + 3|−<i>x</i>| = <i>x</i><sup>2</sup> + 3|<i>x</i>| = <i>g</i>(<i>x</i>)</span>, so <span class="m"><i>g</i></span> is even.` },
    { q: `Show that <span class="m"><i>h</i>(<i>x</i>) = <i>x</i><sup>3</sup> + 1</span> is neither even nor odd by using <span class="m"><i>x</i> = 1</span>.`, a: `<span class="m"><i>h</i>(1) = 2</span> and <span class="m"><i>h</i>(−1) = 0</span>. Since <span class="m">0 ≠ 2</span> it is not even, and since <span class="m">0 ≠ −2</span> it is not odd.` },
    { q: `Let <span class="m"><i>p</i>(<i>x</i>) = <i>x</i><sup>2</sup> · ∛<span class="ov"><i>x</i></span></span>. Is <span class="m"><i>p</i></span> even, odd or neither? Check with <span class="m"><i>p</i>(8)</span> and <span class="m"><i>p</i>(−8)</span>.`, a: `It is (even) · (odd), so odd: <span class="m"><i>p</i>(−<i>x</i>) = <i>x</i><sup>2</sup> · (−∛<span class="ov"><i>x</i></span>) = −<i>p</i>(<i>x</i>)</span>. Indeed <span class="m"><i>p</i>(8) = 64 · 2 = 128</span> and <span class="m"><i>p</i>(−8) = 64 · (−2) = −128</span>.` }
  ],
  origin: `<p>Leonhard Euler introduced the names even and odd functions (functiones pares and impares) in 1727, and used them in his <i>Introductio in analysin infinitorum</i> of 1748. The words were chosen because a polynomial with only even powers of <span class="m"><i>x</i></span> has the first property and one with only odd powers has the second. That book also set out the library of elementary functions used ever since, including <span class="m"><i>e</i><sup><i>x</i></sup></span> and the natural logarithm as its inverse.</p>`
};
