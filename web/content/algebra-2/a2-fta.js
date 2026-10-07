window.ARITH = window.ARITH || {};

ARITH["a2-fta"] = {
  title: "Fundamental Theorem of Algebra & Complex Zeros",
  short: "Degree n means exactly n complex zeros, with multiplicity",
  grade: "Grade 11 · college Intermediate Algebra",
  hours: 5,
  voice: "plain",
  eyebrow: "Polynomial functions · complex zeros and linear factors",
  hero: `<span class="m"><span class="c1"><i>x</i><sup>3</sup> − 3<i>x</i><sup>2</sup> + <i>x</i> + 5</span> = (<i>x</i> + <span class="c2">1</span>)(<i>x</i> − (<span class="c3">2 + <i>i</i></span>))(<i>x</i> − (<span class="c3">2 − <i>i</i></span>))</span>`,
  lede: `Over the complex numbers every polynomial of <span class="c4">degree <i>n</i></span> splits into exactly <span class="m"><i>n</i></span> linear factors. With real coefficients, the zeros that are not <span class="c2">real</span> come in <span class="c3">conjugate pairs</span>.`,
  plain: `<p>A quadratic always has two solutions once complex numbers are allowed: <span class="m"><i>x</i><sup>2</sup> + 1 = 0</span> has <span class="m"><i>i</i></span> and <span class="m">−<i>i</i></span>. The <b>Fundamental Theorem of Algebra</b> says the same is true for every degree. A <span class="c1">polynomial</span> of <span class="c4">degree <i>n</i></span> has exactly <span class="m"><i>n</i></span> complex zeros, as long as a zero that repeats is counted as many times as it repeats.</p>
<p>The <span class="c2">real zeros</span> are the ones you can see: they are the <span class="m"><i>x</i></span>-intercepts of the graph. The rest are <span class="c3">non-real</span>, and they are hidden from the graph. For <span class="m"><i>x</i><sup>3</sup> − 3<i>x</i><sup>2</sup> + <i>x</i> + 5</span> the graph crosses the axis only at <span class="m">−1</span>. The other two zeros are <span class="m">2 + <i>i</i></span> and <span class="m">2 − <i>i</i></span>.</p>
<p>Those two are complex conjugates, and that is no accident. When every coefficient is real, a non-real zero <span class="m"><i>a</i> + <i>bi</i></span> always brings its partner <span class="m"><i>a</i> − <i>bi</i></span>. Multiplied together, their two factors give a real quadratic with no real zeros, here <span class="m"><i>x</i><sup>2</sup> − 4<i>x</i> + 5</span>.</p>`,
  formal: `<p><b>Fundamental Theorem of Algebra.</b> Every polynomial of degree <span class="m"><i>n</i> ≥ 1</span> with complex coefficients has at least one zero in <span class="m">ℂ</span>.</p>
<p><b>Linear Factorization Theorem.</b> If <span class="m"><i>f</i>(<i>x</i>) = <i>a</i><sub><i>n</i></sub><i>x</i><sup><i>n</i></sup> + ⋯ + <i>a</i><sub>0</sub></span> with <span class="m"><i>n</i> ≥ 1</span> and <span class="m"><i>a</i><sub><i>n</i></sub> ≠ 0</span>, then</p>
<div class="display"><i>f</i>(<i>x</i>) = <i>a</i><sub><i>n</i></sub>(<i>x</i> − <i>c</i><sub>1</sub>)(<i>x</i> − <i>c</i><sub>2</sub>) ⋯ (<i>x</i> − <i>c</i><sub><i>n</i></sub>)</div>
<p>for complex numbers <span class="m"><i>c</i><sub>1</sub>, …, <i>c</i><sub><i>n</i></sub></span>, not necessarily distinct. So <span class="m"><i>f</i></span> has exactly <span class="m"><i>n</i></span> zeros counted with multiplicity. It follows by applying the theorem again to each quotient after dividing out a zero.</p>
<p><b>Complex Conjugate Root Theorem.</b> If all coefficients of <span class="m"><i>f</i></span> are real and <span class="m"><i>a</i> + <i>bi</i></span> with <span class="m"><i>b</i> ≠ 0</span> is a zero, then so is <span class="m"><i>a</i> − <i>bi</i></span>, and <span class="m">(<i>x</i> − (<i>a</i> + <i>bi</i>))(<i>x</i> − (<i>a</i> − <i>bi</i>)) = <i>x</i><sup>2</sup> − 2<i>ax</i> + <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup></span>. Hence a real polynomial factors over <span class="m">ℝ</span> into linear factors and quadratics with no real zeros, its number of non-real zeros is even, and a real polynomial of odd degree has at least one real zero.</p>`,
  legend: [
    { c: "c1", sym: `<i>f</i>(<i>x</i>)`, name: "The polynomial", desc: "Real coefficients in this topic, unless stated otherwise." },
    { c: "c4", sym: `<i>n</i>`, name: "Degree", desc: "The number of complex zeros, each counted as often as it repeats." },
    { c: "c2", sym: `<i>r</i> ∈ ℝ`, name: "Real zeros", desc: "The x-intercepts of the graph." },
    { c: "c3", sym: `<i>a</i> ± <i>bi</i>`, name: "Non-real zeros", desc: "Not on the graph. With real coefficients they come in conjugate pairs." }
  ],
  steps: { title: "How to build a polynomial from given zeros", items: [
    `For real coefficients, add the conjugate <span class="m"><i>a</i> − <i>bi</i></span> of every <span class="c3">non-real zero</span> <span class="m"><i>a</i> + <i>bi</i></span> on the list.`,
    `Check the count: the number of zeros, with multiplicity, must equal the <span class="c4">degree</span>.`,
    `Multiply each <span class="c3">conjugate pair</span> into a real quadratic: <span class="m">(<i>x</i> − <i>a</i>)<sup>2</sup> + <i>b</i><sup>2</sup></span>.`,
    `Write a factor <span class="m"><i>x</i> − <i>r</i></span> for each <span class="c2">real zero</span>, with its multiplicity as a power.`,
    `Put a leading coefficient <span class="m"><i>a</i><sub><i>n</i></sub></span> in front and use any given point, such as <span class="m"><i>f</i>(0)</span>, to find it.`,
    `Expand and check one zero by substitution.`
  ] },
  example: {
    prompt: `Find the polynomial of degree 4 with real coefficients and leading coefficient 1 that has zeros <span class="m">1</span>, <span class="m">−2</span> and <span class="m">2 + <i>i</i></span>.`,
    lines: [
      { math: `<span class="m"><span class="c3">2 + <i>i</i></span> a zero ⇒ <span class="c3">2 − <i>i</i></span> a zero</span>`, note: "Real coefficients: the conjugate comes too. That makes 4 zeros, matching degree 4." },
      { math: `<span class="m">(<i>x</i> − (<span class="c3">2 + <i>i</i></span>))(<i>x</i> − (<span class="c3">2 − <i>i</i></span>)) = (<i>x</i> − 2)<sup>2</sup> − <i>i</i><sup>2</sup> = <i>x</i><sup>2</sup> − 4<i>x</i> + 5</span>`, note: "A difference of squares, with i² = −1. The conjugate pair gives a real quadratic." },
      { math: `<span class="m">(<i>x</i> − <span class="c2">1</span>)(<i>x</i> + <span class="c2">2</span>) = <i>x</i><sup>2</sup> + <i>x</i> − 2</span>`, note: "The two real zeros." },
      { math: `<span class="m"><span class="c1"><i>f</i>(<i>x</i>)</span> = (<i>x</i><sup>2</sup> + <i>x</i> − 2)(<i>x</i><sup>2</sup> − 4<i>x</i> + 5)</span>`, note: "Factored over the real numbers, leading coefficient 1." },
      { math: `<span class="m"><span class="c1"><i>f</i>(<i>x</i>)</span> = <i>x</i><sup>4</sup> − 3<i>x</i><sup>3</sup> − <i>x</i><sup>2</sup> + 13<i>x</i> − 10</span>`, note: "Expand. The x² terms are −2 − 4 + 5 = −1 and the x terms 8 + 5 = 13." },
      { math: `<span class="m"><i>f</i>(1) = 1 − 3 − 1 + 13 − 10 = 0</span>`, note: "Check one zero by substitution." }
    ],
    answer: `<span class="m"><i>f</i>(<i>x</i>) = <i>x</i><sup>4</sup> − 3<i>x</i><sup>3</sup> − <i>x</i><sup>2</sup> + 13<i>x</i> − 10</span> <span class="m">= (<i>x</i> − 1)(<i>x</i> + 2)(<i>x</i><sup>2</sup> − 4<i>x</i> + 5)</span>, with zeros <span class="m c2">1, −2</span> and <span class="m c3">2 ± <i>i</i></span>.`
  },
  why: `<p>The theorem tells you when to stop looking. A degree-5 polynomial has five zeros in all; once you have found three real ones and a conjugate pair, there are no more. It also explains the shapes you see: a cubic must cross the axis at least once, and a quartic whose graph never meets the axis has two conjugate pairs of zeros instead.</p>
<p>Complex zeros are not just a curiosity. In circuits, vibrating structures and control systems the zeros of a characteristic polynomial are often a conjugate pair <span class="m"><i>a</i> ± <i>bi</i></span>: the real part says how fast an oscillation dies out or grows, and the imaginary part says how fast it oscillates.</p>`,
  careers: [
    { role: "Electrical engineer", use: "Places the conjugate pairs of poles of a filter's transfer function to shape how a circuit rings and settles." },
    { role: "Control systems engineer", use: "Checks that every complex root of a characteristic polynomial has a negative real part, so the system is stable." },
    { role: "Mechanical engineer", use: "Reads damping and vibration frequency from the complex roots a ± bi of a structure's equation of motion." },
    { role: "Audio DSP developer", use: "Designs digital filters by choosing complex zeros and poles in conjugate pairs so the coefficients stay real." },
    { role: "Computer algebra developer", use: "Implements root finders that return all n complex roots of a degree-n polynomial." },
    { role: "Quantum physicist", use: "Finds energy levels as roots of characteristic polynomials and knows exactly how many to expect." }
  ],
  life: [
    "Knowing when a search for solutions is finished",
    "Understanding why a cubic graph must cross the x-axis",
    "Seeing what a calculator means by a complex root",
    "Reading the ringing of a guitar string or a car suspension as complex roots",
    "Checking an answer by counting zeros against the degree"
  ],
  fields: [
    { name: "Electrical engineering", use: "Poles and zeros of transfer functions are complex roots of polynomials in conjugate pairs." },
    { name: "Physics", use: "Damped oscillators have characteristic roots a ± bi that set the decay rate and the frequency." },
    { name: "Computer science", use: "Numerical root finders such as Durand-Kerner compute all n complex roots at once." },
    { name: "Mathematics", use: "Complex analysis gives the shortest proofs of the theorem, through Liouville's theorem." }
  ],
  prereqWhy: {
    "a2-factor-theorem": "Each zero found gives a factor x − c and a quotient one degree lower, which is how the n linear factors are produced.",
    "a2-quad-complex": "The last quadratic factor often has a negative discriminant, and its two complex solutions form a conjugate pair."
  },
  unlocksWhy: {
    "pc-ivt-bounds": "Knowing that a degree-<i>n</i> polynomial has at most <i>n</i> real zeros tells you how many to look for, and Descartes' rule and the bound tests narrow where they can be."
  },
  beyond: [
    { field: "Linear Algebra", why: "An n × n matrix has exactly n complex eigenvalues with multiplicity, because they are the zeros of a degree-n characteristic polynomial." },
    { field: "Precalculus", why: "Complex zeros are written in polar form, and the n-th roots of a complex number are the n zeros of xⁿ − w." },
    { field: "Physics", why: "Damped oscillations and AC circuits are solved by finding the complex roots of characteristic equations." }
  ],
  mistakes: [
    { wrong: `Building a real polynomial with zeros <span class="m">3</span> and <span class="m">2 + <i>i</i></span> as <span class="m">(<i>x</i> − 3)(<i>x</i> − 2 − <i>i</i>)</span>.`, fix: `That product has non-real coefficients. Real coefficients need the conjugate too: <span class="m">(<i>x</i> − 3)(<i>x</i><sup>2</sup> − 4<i>x</i> + 5)</span>, degree 3.` },
    { wrong: `Applying the conjugate theorem when a coefficient is not real: concluding that <span class="m"><i>x</i> − <i>i</i></span> also has the zero <span class="m">−<i>i</i></span>.`, fix: `The theorem needs real coefficients. <span class="m"><i>x</i> − <i>i</i></span> has the single zero <span class="m"><i>i</i></span>.` },
    { wrong: `Saying <span class="m"><i>x</i><sup>2</sup>(<i>x</i> − 1)</span> breaks the theorem because it has only 2 zeros.`, fix: `Count with multiplicity: <span class="m">0</span> is a zero twice, so there are <span class="m">2 + 1 = 3</span> zeros, matching the degree.` },
    { wrong: `Deciding that a quartic whose graph crosses the axis twice has only 2 zeros.`, fix: `It has 4 complex zeros. The other two are a conjugate pair or a repeated real zero, and the graph shows which: a touch point means a repeated zero.` }
  ],
  practice: [
    { q: `How many complex zeros does <span class="m"><i>f</i>(<i>x</i>) = 4<i>x</i><sup>5</sup> − <i>x</i><sup>3</sup> + 2</span> have, and must one of them be real?`, a: `Degree 5, so exactly 5 zeros counted with multiplicity. The coefficients are real, so non-real zeros come in pairs; 5 is odd, so at least one zero is real.` },
    { q: `Given that <span class="m">3 − 2<i>i</i></span> is a zero of <span class="m"><i>f</i>(<i>x</i>) = <i>x</i><sup>3</sup> − 7<i>x</i><sup>2</sup> + 19<i>x</i> − 13</span>, find all its zeros.`, a: `<span class="m">3 + 2<i>i</i></span> is also a zero, giving the factor <span class="m">(<i>x</i> − 3)<sup>2</sup> + 4 = <i>x</i><sup>2</sup> − 6<i>x</i> + 13</span>. Dividing, <span class="m"><i>f</i>(<i>x</i>) = (<i>x</i> − 1)(<i>x</i><sup>2</sup> − 6<i>x</i> + 13)</span>. Zeros <span class="m">1, 3 + 2<i>i</i>, 3 − 2<i>i</i></span>.` },
    { q: `Factor <span class="m"><i>f</i>(<i>x</i>) = <i>x</i><sup>4</sup> − 16</span> over the real numbers and over the complex numbers.`, a: `<span class="m"><i>x</i><sup>4</sup> − 16 = (<i>x</i><sup>2</sup> − 4)(<i>x</i><sup>2</sup> + 4) = (<i>x</i> − 2)(<i>x</i> + 2)(<i>x</i><sup>2</sup> + 4)</span> over <span class="m">ℝ</span>, and <span class="m">(<i>x</i> − 2)(<i>x</i> + 2)(<i>x</i> − 2<i>i</i>)(<i>x</i> + 2<i>i</i>)</span> over <span class="m">ℂ</span>. Zeros <span class="m">±2, ±2<i>i</i></span>.` },
    { q: `Find the polynomial of least degree with real coefficients that has zeros <span class="m">2</span> and <span class="m">1 − 3<i>i</i></span> and satisfies <span class="m"><i>f</i>(0) = 40</span>.`, a: `Add the conjugate <span class="m">1 + 3<i>i</i></span>: <span class="m"><i>f</i>(<i>x</i>) = <i>a</i>(<i>x</i> − 2)((<i>x</i> − 1)<sup>2</sup> + 9) = <i>a</i>(<i>x</i> − 2)(<i>x</i><sup>2</sup> − 2<i>x</i> + 10)</span>. Then <span class="m"><i>f</i>(0) = −20<i>a</i> = 40</span>, so <span class="m"><i>a</i> = −2</span> and <span class="m"><i>f</i>(<i>x</i>) = −2<i>x</i><sup>3</sup> + 8<i>x</i><sup>2</sup> − 28<i>x</i> + 40</span>.` }
  ],
  origin: `Albert Girard claimed in 1629 that an equation of degree n has n solutions, and d'Alembert attempted a proof in 1746. Carl Friedrich Gauss gave the first widely accepted proof in his 1799 doctoral thesis, which had a gap later filled, and published further proofs, the last in 1849. Jean-Robert Argand gave a simpler proof in 1806.`
};
