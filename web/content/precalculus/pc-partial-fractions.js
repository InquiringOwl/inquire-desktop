window.ARITH = window.ARITH || {};
ARITH["pc-partial-fractions"] = {
  title: "Partial Fraction Decomposition",
  short: "Split a rational expression into simple fractions",
  grade: "Grade 12 · college Precalculus",
  hours: 5,
  voice: "plain",
  eyebrow: "Systems and matrices · partial fractions",
  hero: `<span class="m"><span class="fr"><span>5<i>x</i> − 4</span><span><span class="c2">(<i>x</i> − 2)</span><span class="c3">(<i>x</i> + 1)</span></span></span> = <span class="c2"><span class="fr"><span class="c5">2</span><span><i>x</i> − 2</span></span></span> + <span class="c3"><span class="fr"><span class="c5">3</span><span><i>x</i> + 1</span></span></span></span>`,
  lede: `Adding fractions combines them over a common denominator. <b>Partial fraction decomposition</b> runs that in reverse: it splits one rational expression into a sum of simpler fractions, one for each factor of the denominator.`,
  plain: `<p>You already know how to add <span class="m"><span class="fr"><span>2</span><span><i>x</i> − 2</span></span> + <span class="fr"><span>3</span><span><i>x</i> + 1</span></span></span>: multiply out to the common denominator and get <span class="m"><span class="fr"><span>5<i>x</i> − 4</span><span>(<i>x</i> − 2)(<i>x</i> + 1)</span></span></span>. Here the question goes the other way. Given the single fraction, which simple fractions add up to it?</p>
<p>The denominator tells you the shape of the answer. Each factor of the denominator gets its own piece, with unknown constants on top. A factor <span class="m"><i>x</i> − 2</span> gets <span class="m"><span class="fr"><span><i>A</i></span><span><i>x</i> − 2</span></span></span>. A squared factor gets two pieces, one for each power. A quadratic that will not factor gets a linear top, <span class="m"><i>Bx</i> + <i>C</i></span>.</p>
<p>To find the constants, multiply both sides by the whole denominator. The fractions disappear and you are left with two polynomials that must be equal for every <span class="m"><i>x</i></span>. Equal polynomials have equal coefficients, so you get a small linear system. Solve it and the decomposition is done.</p>
<p>The method only applies when the top has a lower degree than the bottom. If it does not, divide first and decompose the remainder.</p>`,
  formal: `<p>A rational expression <span class="m"><i>N</i>(<i>x</i>)/<i>D</i>(<i>x</i>)</span> is <b>proper</b> when deg <span class="m"><i>N</i></span> &lt; deg <span class="m"><i>D</i></span>. If it is <b>improper</b>, long division gives <span class="m"><i>N</i>/<i>D</i> = <i>Q</i> + <i>R</i>/<i>D</i></span> with <span class="m"><i>R</i>/<i>D</i></span> proper. Factor <span class="m"><i>D</i></span> over the reals into linear factors and <b>irreducible quadratic</b> factors (no real zeros, <span class="m"><i>b</i><sup>2</sup> − 4<i>ac</i> &lt; 0</span>). Then the decomposition of a proper <span class="m"><i>N</i>/<i>D</i></span> has these terms:</p>
<div class="display">distinct linear factor <span class="c2">(<i>ax</i> + <i>b</i>)</span>: &nbsp;<span class="fr"><span><i>A</i></span><span><i>ax</i> + <i>b</i></span></span><br>repeated linear factor <span class="c3">(<i>ax</i> + <i>b</i>)<sup><i>m</i></sup></span>: &nbsp;<span class="fr"><span><i>A</i><sub>1</sub></span><span><i>ax</i> + <i>b</i></span></span> + <span class="fr"><span><i>A</i><sub>2</sub></span><span>(<i>ax</i> + <i>b</i>)<sup>2</sup></span></span> + ⋯ + <span class="fr"><span><i>A</i><sub><i>m</i></sub></span><span>(<i>ax</i> + <i>b</i>)<sup><i>m</i></sup></span></span><br>irreducible quadratic factor <span class="c3">(<i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i>)</span>: &nbsp;<span class="fr"><span><i>Bx</i> + <i>C</i></span><span><i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i></span></span> &nbsp;(one such term per power if it repeats)</div>
<p>Multiplying by <span class="m"><i>D</i></span> and <b>equating coefficients</b> of like powers gives a linear system in the constants with exactly one solution. For a linear factor <span class="m"><i>x</i> − <i>r</i></span> that appears once, substituting <span class="m"><i>x</i> = <i>r</i></span> isolates its constant: <span class="m"><i>A</i> = <i>N</i>(<i>r</i>)/<i>D</i><sub>1</sub>(<i>r</i>)</span>, where <span class="m"><i>D</i><sub>1</sub> = <i>D</i>/(<i>x</i> − <i>r</i>)</span> (the <b>cover-up method</b>). For example <span class="m"><span class="fr"><span><i>x</i> + 7</span><span>(<i>x</i> − 1)(<i>x</i> + 3)</span></span> = <span class="fr"><span>2</span><span><i>x</i> − 1</span></span> − <span class="fr"><span>1</span><span><i>x</i> + 3</span></span></span>.</p>`,
  legend: [
    { c: "c1", sym: `<span class="m"><i>x</i></span>`, name: "Variable", desc: `The input. Substituting a root for <span class="m"><i>x</i></span> is the cover-up shortcut.` },
    { c: "c2", sym: `<span class="m"><i>x</i> − <i>r</i><sub>1</sub></span>`, name: "Factor 1", desc: `The first linear factor and the piece over it. Its root is a handle on the x-axis.` },
    { c: "c3", sym: `<span class="m"><i>x</i> − <i>r</i><sub>2</sub></span>`, name: "Factor 2", desc: `The second factor: distinct, repeated, or an irreducible quadratic.` },
    { c: "c4", sym: `<span class="m">[<i>M</i> | <b>b</b>]</span>`, name: "System and denominators", desc: `The coefficient system from clearing denominators; vertical asymptotes at the roots.` },
    { c: "c5", sym: `<span class="m"><i>A</i>, <i>B</i>, <i>C</i></span>`, name: "Constants", desc: `The solved numerators. The pieces add back to the original curve.` }
  ],
  steps: {
    title: "How to decompose a rational expression",
    items: [
      `If deg <span class="m"><i>N</i></span> ≥ deg <span class="m"><i>D</i></span>, divide first. Decompose only the proper remainder <span class="m"><i>R</i>/<i>D</i></span>.`,
      `Factor the denominator completely into linear factors and irreducible quadratics.`,
      `Write the form: one constant over each linear factor, one term per power of a repeated factor, a linear numerator <span class="m"><i>Bx</i> + <i>C</i></span> over each irreducible quadratic.`,
      `Multiply both sides by the full denominator to clear all fractions.`,
      `Find the constants: substitute the real roots (cover-up) for quick ones, then equate coefficients of like powers for the rest and solve the system.`,
      `Write the decomposition and check it by adding the pieces back together.`
    ]
  },
  example: {
    prompt: `Decompose <span class="m"><span class="fr"><span><i>x</i><sup>2</sup> + 4<i>x</i> + 5</span><span>(<i>x</i> − 1)(<i>x</i><sup>2</sup> + 4)</span></span></span>.`,
    lines: [
      { math: `<span class="m"><span class="fr"><span><i>x</i><sup>2</sup> + 4<i>x</i> + 5</span><span>(<i>x</i> − 1)(<i>x</i><sup>2</sup> + 4)</span></span> = <span class="c2"><span class="fr"><span><i>A</i></span><span><i>x</i> − 1</span></span></span> + <span class="c3"><span class="fr"><span><i>Bx</i> + <i>C</i></span><span><i>x</i><sup>2</sup> + 4</span></span></span></span>`, note: "The top is degree 2 and the bottom degree 3, so the fraction is proper. x² + 4 has no real zeros, so it gets a linear numerator." },
      { math: `<span class="m"><i>x</i><sup>2</sup> + 4<i>x</i> + 5 = <i>A</i>(<i>x</i><sup>2</sup> + 4) + (<i>Bx</i> + <i>C</i>)(<i>x</i> − 1)</span>`, note: "Multiply both sides by (x − 1)(x² + 4)." },
      { math: `<span class="m"><i>x</i> = 1: &nbsp; 1 + 4 + 5 = 5<i>A</i> &nbsp;⇒&nbsp; <span class="c5"><i>A</i> = 2</span></span>`, note: "At x = 1 the second product vanishes, which isolates A." },
      { math: `<span class="m"><i>x</i><sup>2</sup> + 4<i>x</i> + 5 = (<i>A</i> + <i>B</i>)<i>x</i><sup>2</sup> + (<i>C</i> − <i>B</i>)<i>x</i> + (4<i>A</i> − <i>C</i>)</span>`, note: "Expand the right side and collect powers of x." },
      { math: `<span class="m"><span class="mat aug c4"><table><tr><td>1</td><td>1</td><td>0</td><td>1</td></tr><tr><td>0</td><td>−1</td><td>1</td><td>4</td></tr><tr><td>4</td><td>0</td><td>−1</td><td>5</td></tr></table></span></span>`, note: "Equate the coefficients of x², x and 1: A + B = 1, −B + C = 4, 4A − C = 5." },
      { math: `<span class="m"><span class="c5"><i>A</i> = 2, &nbsp;<i>B</i> = −1, &nbsp;<i>C</i> = 3</span></span>`, note: "With A = 2: B = 1 − 2 = −1 and C = 4A − 5 = 3. Check the middle row: −(−1) + 3 = 4." }
    ],
    answer: `<span class="m"><span class="fr"><span><i>x</i><sup>2</sup> + 4<i>x</i> + 5</span><span>(<i>x</i> − 1)(<i>x</i><sup>2</sup> + 4)</span></span> = <span class="c2"><span class="fr"><span>2</span><span><i>x</i> − 1</span></span></span> + <span class="c3"><span class="fr"><span>3 − <i>x</i></span><span><i>x</i><sup>2</sup> + 4</span></span></span></span>. Check: <span class="m">2(<i>x</i><sup>2</sup> + 4) + (3 − <i>x</i>)(<i>x</i> − 1) = <i>x</i><sup>2</sup> + 4<i>x</i> + 5</span>.`
  },
  why: `<p>Simple fractions are easier to work with than one complicated one. In calculus, each piece <span class="m"><i>A</i>/(<i>x</i> − <i>r</i>)</span> integrates to a logarithm and each <span class="m">(<i>Bx</i> + <i>C</i>)/(<i>x</i><sup>2</sup> + <i>k</i><sup>2</sup>)</span> to a logarithm plus an arctangent, so decomposition is the standard way to integrate rational functions. The same split turns a Laplace transform back into a sum of exponentials when solving differential equations, and it makes telescoping sums visible.</p>
<p>It is also a good use of linear systems: the constants are the unique solution of a square system, and the cover-up shortcut is just a clever choice of <span class="m"><i>x</i></span>.</p>`,
  careers: [
    { role: "Control systems engineer", use: "Splits transfer functions into first- and second-order pieces to read off how each mode of a system responds." },
    { role: "Electrical engineer", use: "Inverts Laplace transforms of circuit responses by partial fractions to get voltages and currents over time." },
    { role: "Signal processing engineer", use: "Expands z-transforms of digital filters into simple terms to find their impulse responses." },
    { role: "Chemical engineer", use: "Integrates rate laws such as dx/((a − x)(b − x)) by splitting them into two simple fractions." },
    { role: "Actuary", use: "Integrates rational survival and growth models by decomposing them into logarithmic pieces." },
    { role: "Pharmacokineticist", use: "Separates multi-compartment drug models into exponential terms, one per compartment." }
  ],
  life: [
    "Undoing a sum you added too early, to see what each part contributed",
    "Splitting one combined rate back into the separate rates that made it",
    "Recognising a pattern of terms that cancel in a long sum",
    "Breaking a complicated recipe for a quantity into simple ingredients"
  ],
  fields: [
    { name: "Calculus II", use: "Integration of rational functions is done by partial fractions." },
    { name: "Differential equations", use: "Inverse Laplace transforms rely on decomposing rational functions of s." },
    { name: "Discrete mathematics", use: "Generating functions are split into partial fractions to find closed formulas for sequences." },
    { name: "Control theory", use: "Poles of a transfer function are the factors of its denominator, each with its own term." }
  ],
  prereqWhy: {
    "pc-gaussian": "The constants are the unique solution of a linear system from equating coefficients, which you row reduce.",
    "a2-rational-func": "You factor the denominator, find its zeros (the vertical asymptotes) and divide first when the expression is improper.",
    "a1-rational-add": "Decomposition reverses adding rational expressions over a common denominator, and the check is exactly that addition."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Calculus II", why: "Each partial fraction has an antiderivative you know, so any rational function can be integrated." },
    { field: "Differential Equations", why: "Laplace transform solutions come back as rational functions of s, decomposed and inverted term by term." },
    { field: "Engineering", why: "Transfer functions in circuits and control are split into poles to see each mode of the response." },
    { field: "Discrete Mathematics", why: "Generating functions decomposed into simple fractions give exact formulas for recurrences." }
  ],
  mistakes: [
    { wrong: `Writing <span class="m"><span class="fr"><span><i>B</i></span><span><i>x</i><sup>2</sup> + 4</span></span></span> over an irreducible quadratic.`, fix: `A quadratic factor needs a linear numerator <span class="m"><i>Bx</i> + <i>C</i></span>. With a constant alone the system usually has no solution.` },
    { wrong: `Giving <span class="m">(<i>x</i> + 1)<sup>2</sup></span> a single term <span class="m"><i>A</i>/(<i>x</i> + 1)<sup>2</sup></span>.`, fix: `A factor to the power m needs m terms, one over each power: <span class="m"><i>A</i>/(<i>x</i> + 1) + <i>B</i>/(<i>x</i> + 1)<sup>2</sup></span>.` },
    { wrong: `Decomposing <span class="m">(<i>x</i><sup>3</sup> + 2)/(<i>x</i><sup>2</sup> − 1)</span> directly.`, fix: `The top has degree 3 and the bottom degree 2. Divide first, then decompose the proper remainder.` },
    { wrong: `Using cover-up for every constant of a repeated factor.`, fix: `Substituting the root only gives the constant over the highest power. Find the others by equating coefficients or substituting another value of x.` }
  ],
  practice: [
    { q: `Decompose <span class="m"><span class="fr"><span><i>x</i> + 7</span><span>(<i>x</i> − 1)(<i>x</i> + 3)</span></span></span>.`, a: `<span class="m"><i>x</i> + 7 = <i>A</i>(<i>x</i> + 3) + <i>B</i>(<i>x</i> − 1)</span>. <span class="m"><i>x</i> = 1</span>: <span class="m">8 = 4<i>A</i></span>, <span class="m"><i>A</i> = 2</span>. <span class="m"><i>x</i> = −3</span>: <span class="m">4 = −4<i>B</i></span>, <span class="m"><i>B</i> = −1</span>. Answer <span class="m"><span class="fr"><span>2</span><span><i>x</i> − 1</span></span> − <span class="fr"><span>1</span><span><i>x</i> + 3</span></span></span>.` },
    { q: `Decompose <span class="m"><span class="fr"><span>3<i>x</i> + 5</span><span>(<i>x</i> + 1)<sup>2</sup></span></span></span>.`, a: `<span class="m">3<i>x</i> + 5 = <i>A</i>(<i>x</i> + 1) + <i>B</i></span>. Coefficient of <span class="m"><i>x</i></span>: <span class="m"><i>A</i> = 3</span>; at <span class="m"><i>x</i> = −1</span>: <span class="m"><i>B</i> = 2</span>. Answer <span class="m"><span class="fr"><span>3</span><span><i>x</i> + 1</span></span> + <span class="fr"><span>2</span><span>(<i>x</i> + 1)<sup>2</sup></span></span></span>.` },
    { q: `Decompose <span class="m"><span class="fr"><span><i>x</i><sup>2</sup> + 1</span><span><i>x</i>(<i>x</i> − 1)<sup>2</sup></span></span></span>.`, a: `<span class="m"><i>x</i><sup>2</sup> + 1 = <i>A</i>(<i>x</i> − 1)<sup>2</sup> + <i>Bx</i>(<i>x</i> − 1) + <i>Cx</i></span>. <span class="m"><i>x</i> = 0</span>: <span class="m"><i>A</i> = 1</span>. <span class="m"><i>x</i> = 1</span>: <span class="m"><i>C</i> = 2</span>. Coefficient of <span class="m"><i>x</i><sup>2</sup></span>: <span class="m"><i>A</i> + <i>B</i> = 1</span>, so <span class="m"><i>B</i> = 0</span>. Answer <span class="m"><span class="fr"><span>1</span><span><i>x</i></span></span> + <span class="fr"><span>2</span><span>(<i>x</i> − 1)<sup>2</sup></span></span></span>.` },
    { q: `Decompose <span class="m"><span class="fr"><span><i>x</i><sup>3</sup> + 2</span><span><i>x</i><sup>2</sup> − 1</span></span></span>.`, a: `Improper: <span class="m"><i>x</i><sup>3</sup> + 2 = <i>x</i>(<i>x</i><sup>2</sup> − 1) + (<i>x</i> + 2)</span>. Then <span class="m"><span class="fr"><span><i>x</i> + 2</span><span>(<i>x</i> − 1)(<i>x</i> + 1)</span></span></span>: <span class="m"><i>A</i> = 3/2</span> (at <span class="m"><i>x</i> = 1</span>), <span class="m"><i>B</i> = −1/2</span> (at <span class="m"><i>x</i> = −1</span>). Answer <span class="m"><i>x</i> + <span class="fr"><span>3/2</span><span><i>x</i> − 1</span></span> − <span class="fr"><span>1/2</span><span><i>x</i> + 1</span></span></span>.` }
  ],
  origin: `<p>Partial fractions grew out of the first attempts to integrate rational functions. In 1702 Johann Bernoulli and Gottfried Leibniz each published papers showing how to split a rational function into simpler fractions whose integrals were logarithms and arctangents. Leibniz stumbled on <span class="m"><i>x</i><sup>4</sup> + <i>a</i><sup>4</sup></span>, which he wrongly thought could not be factored into real quadratics. The shortcut of covering a factor and substituting its root is named for the engineer Oliver Heaviside, whose operational calculus for electrical circuits in the 1890s relied on the same idea.</p>`
};
