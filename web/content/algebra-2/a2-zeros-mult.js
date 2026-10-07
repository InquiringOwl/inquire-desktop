window.ARITH = window.ARITH || {};

ARITH["a2-zeros-mult"] = {
  title: "Zeros, Multiplicity & Graphing Polynomials",
  short: "Odd multiplicity crosses, even multiplicity touches",
  grade: "Grade 11 · college Intermediate Algebra",
  hours: 5,
  voice: "plain",
  eyebrow: "Polynomial functions · sketching from factors",
  hero: `<span class="m"><span class="c1"><i>f</i>(<i>x</i>)</span> = (<i>x</i> + <span class="c2">2</span>)<sup class="c3">2</sup>(<i>x</i> − <span class="c2">1</span>): &nbsp;touches at <span class="c2">−2</span>, crosses at <span class="c2">1</span></span>`,
  lede: `In factored form a polynomial shows its <span class="c2">zeros</span> directly. The power on each factor, its <span class="c3">multiplicity</span>, tells you whether the <span class="c1">graph</span> crosses the <span class="m"><i>x</i></span>-axis there or only touches it.`,
  plain: `<p>If <span class="m"><i>f</i>(<i>x</i>) = (<i>x</i> + 2)<sup>2</sup>(<i>x</i> − 1)</span>, then <span class="m"><i>f</i></span> is zero exactly when one of the factors is zero: at <span class="m"><i>x</i> = −2</span> and at <span class="m"><i>x</i> = 1</span>. Those are the <span class="c2">zeros</span>, the places where the graph meets the <span class="m"><i>x</i></span>-axis.</p>
<p>The power on a factor is the <span class="c3">multiplicity</span> of that zero. Near <span class="m"><i>x</i> = 1</span> the factor <span class="m"><i>x</i> − 1</span> changes sign, so <span class="m"><i>f</i></span> changes sign and the graph crosses the axis. Near <span class="m"><i>x</i> = −2</span> the factor is squared, and a square is never negative, so <span class="m"><i>f</i></span> keeps its sign. The graph comes down to the axis, touches it and turns back. With a power of 3 or more the graph also flattens out as it passes through, like <span class="m"><i>y</i> = <i>x</i><sup>3</sup></span> at the origin.</p>
<p>To sketch, put together three facts: the end behavior from the leading term, the <span class="c5"><span class="m"><i>y</i></span>-intercept</span> <span class="m"><i>f</i>(0)</span>, and what happens at each zero. Between neighbouring zeros the graph stays on one side of the axis.</p>`,
  formal: `<p>A number <span class="m"><i>c</i></span> is a <b>zero of multiplicity</b> <span class="m"><i>m</i></span> of a polynomial <span class="m"><i>f</i></span> when <span class="m">(<i>x</i> − <i>c</i>)<sup><i>m</i></sup></span> is a factor of <span class="m"><i>f</i>(<i>x</i>)</span> and <span class="m">(<i>x</i> − <i>c</i>)<sup><i>m</i>+1</sup></span> is not. At a real zero of <b>odd</b> multiplicity the graph <b>crosses</b> the <span class="m"><i>x</i></span>-axis; at a zero of <b>even</b> multiplicity it <b>touches</b> the axis and turns around. For <span class="m"><i>m</i> ≥ 3</span> the graph is flattened near the zero. The multiplicities of all the zeros add up to at most the degree.</p>
<p><b>Intermediate Value Theorem.</b> If <span class="m"><i>f</i></span> is a polynomial and <span class="m"><i>f</i>(<i>a</i>)</span> and <span class="m"><i>f</i>(<i>b</i>)</span> have opposite signs, then <span class="m"><i>f</i></span> has at least one zero between <span class="m"><i>a</i></span> and <span class="m"><i>b</i></span>. For <span class="m"><i>f</i>(<i>x</i>) = <i>x</i><sup>3</sup> − 2<i>x</i> − 5</span>, <span class="m"><i>f</i>(2) = −1</span> and <span class="m"><i>f</i>(3) = 16</span>, so there is a zero between 2 and 3. It is near <span class="m">2.09</span>.</p>`,
  legend: [
    { c: "c1", sym: `<i>f</i>(<i>x</i>)`, name: "The polynomial", desc: "Written as a leading coefficient times factors (x − c) raised to powers." },
    { c: "c2", sym: `<i>c</i>`, name: "Zero", desc: "A value with f(c) = 0. The factor x − c gives the zero c, so x + 2 gives −2." },
    { c: "c3", sym: `<i>m</i>`, name: "Multiplicity", desc: "The power on the factor. Odd: the graph crosses. Even: it touches and turns back." },
    { c: "c5", sym: `(0, <i>f</i>(0))`, name: "y-intercept", desc: "Set x = 0 in the factored form: the leading coefficient times each factor's constant." }
  ],
  steps: { title: "How to sketch a polynomial from its factors", items: [
    `Factor completely. List each <span class="c2">zero</span> <span class="m"><i>c</i></span> with its <span class="c3">multiplicity</span> <span class="m"><i>m</i></span>.`,
    `Find the leading term and the end behavior.`,
    `Find the <span class="c5"><span class="m"><i>y</i></span>-intercept</span> <span class="m"><i>f</i>(0)</span>.`,
    `At each zero decide: odd <span class="m"><i>m</i></span> crosses, even <span class="m"><i>m</i></span> touches, and <span class="m"><i>m</i> ≥ 3</span> flattens.`,
    `Start at the left end, follow the graph to each zero in order, crossing or bouncing, and finish matching the right end.`,
    `Check with one test value between two zeros, and check that the number of turning points is at most the degree minus 1.`
  ] },
  example: {
    prompt: `Sketch <span class="m"><i>f</i>(<i>x</i>) = −(<i>x</i> − 1)<sup>2</sup>(<i>x</i> + 2)<sup>3</sup></span>: give the zeros with their multiplicities, the end behavior and the <span class="m"><i>y</i></span>-intercept.`,
    lines: [
      { math: `<span class="m"><span class="c2">1</span> (multiplicity <span class="c3">2</span>), &nbsp;<span class="c2">−2</span> (multiplicity <span class="c3">3</span>)</span>`, note: "Read the zeros and powers from the factors. The factor x + 2 gives the zero −2." },
      { math: `<span class="m">−<i>x</i><sup>2</sup> · <i>x</i><sup>3</sup> = −<i>x</i><sup>5</sup></span>`, note: "Leading term: degree 5, leading coefficient −1." },
      { math: `<span class="m"><i>x</i> → −∞, <i>f</i>(<i>x</i>) → ∞; &nbsp;<i>x</i> → ∞, <i>f</i>(<i>x</i>) → −∞</span>`, note: "Odd degree with a negative leading coefficient: rises on the left, falls on the right." },
      { math: `<span class="m"><span class="c5"><i>f</i>(0) = −(−1)<sup>2</sup>(2)<sup>3</sup> = −8</span></span>`, note: "The y-intercept is (0, −8)." },
      { math: `<span class="m">at <span class="c2">−2</span>: crosses, flattening; &nbsp;at <span class="c2">1</span>: touches</span>`, note: "Multiplicity 3 is odd and at least 3. Multiplicity 2 is even." },
      { math: `<span class="m"><i>f</i>(−3) = 16 &gt; 0, &nbsp;<i>f</i>(0) = −8 &lt; 0, &nbsp;<i>f</i>(2) = −64 &lt; 0</span>`, note: "Test values agree: positive left of −2, negative between, and still negative after touching at 1." }
    ],
    answer: `The graph comes down from the upper left, flattens as it crosses at <span class="m c2">−2</span>, passes through <span class="m c5">(0, −8)</span>, rises to touch the axis at <span class="m c2">1</span>, and falls to the lower right.`
  },
  why: `<p>A graph from factors is fast and reliable. Once a polynomial is factored you know every <span class="m"><i>x</i></span>-intercept, which way the graph passes through each one and where it starts and ends, without plotting a table of points. Reading the graph backwards, from intercepts and bounces to factors, is how you write an equation for a curve you can see.</p>
<p>Where a function changes sign matters in applications: a profit model turning from loss to gain, a beam bending one way then the other, a signal crossing zero. Even multiplicity marks the special case where the value reaches zero without changing sign, and the Intermediate Value Theorem guarantees a zero wherever the sign does change, which is how calculators and computers home in on zeros.</p>`,
  careers: [
    { role: "Structural engineer", use: "Reads where a bending-moment polynomial changes sign to find the points of a beam with no bending." },
    { role: "Signal processing engineer", use: "Designs filter polynomials with chosen zeros, using repeated zeros to flatten the response." },
    { role: "Numerical software developer", use: "Uses the Intermediate Value Theorem in bisection routines that bracket and refine a zero." },
    { role: "Economist", use: "Locates break-even outputs as zeros of a profit polynomial and checks whether profit changes sign there." },
    { role: "Robotics engineer", use: "Builds motion profiles from factored polynomials so position and speed reach zero at set times." },
    { role: "Mathematics teacher", use: "Sketches polynomial graphs from factors in seconds and writes equations to match a drawn curve." }
  ],
  life: [
    "Sketching a graph by hand without a calculator",
    "Writing a formula for a curve seen in a picture or data plot",
    "Knowing a value must pass through zero when it changes from positive to negative",
    "Seeing why a ball bouncing off the floor looks like a touching zero",
    "Checking that a calculator graph is not hiding an intercept"
  ],
  fields: [
    { name: "Engineering", use: "Repeated zeros of a characteristic polynomial signal critical damping in springs and circuits." },
    { name: "Computer science", use: "Root finders bracket zeros by sign changes, the Intermediate Value Theorem in action." },
    { name: "Economics", use: "Break-even points are zeros where a profit model changes sign." },
    { name: "Physics", use: "Equilibrium positions of a potential are zeros of the force, and touching zeros mark special balance points." }
  ],
  prereqWhy: {
    "a2-poly-graphs": "Every sketch starts from the end behavior given by the leading term, and the turning-point bound checks the result.",
    "a1-quad-factor": "Reading zeros needs the polynomial in factored form, and factoring quadratics and common factors gets it there."
  },
  unlocksWhy: {
    "a2-poly-ineq": "Solving P(x) > 0 means finding where the graph is above the axis, and the sign changes happen exactly at the odd-multiplicity zeros.",
    "pc-ivt-bounds": "Counting zeros with multiplicity and watching where a graph crosses or touches the axis prepares for the Intermediate Value Theorem, which guarantees a crossing when the sign changes."
  },
  beyond: [
    { field: "Calculus I", why: "A zero of even multiplicity is also a zero of the derivative, and the Intermediate Value Theorem is proved for all continuous functions." },
    { field: "Precalculus", why: "Rational functions use the same multiplicity rules at their zeros and, for the denominator, at their vertical asymptotes." },
    { field: "Linear Algebra", why: "Repeated eigenvalues are zeros of the characteristic polynomial with multiplicity greater than 1." }
  ],
  mistakes: [
    { wrong: `Reading the zero of <span class="m">(<i>x</i> + 3)</span> as <span class="m">3</span>.`, fix: `The factor <span class="m"><i>x</i> − <i>c</i></span> gives the zero <span class="m"><i>c</i></span>, and <span class="m"><i>x</i> + 3 = <i>x</i> − (−3)</span>, so the zero is <span class="m">−3</span>.` },
    { wrong: `Drawing the graph of <span class="m"><i>x</i>(<i>x</i> − 2)<sup>2</sup></span> crossing the axis at <span class="m">2</span>.`, fix: `Multiplicity 2 is even, so the graph only touches at <span class="m">2</span>: the values are positive on both sides of it.` },
    { wrong: `Writing <span class="m">(<i>x</i> + 1)(<i>x</i> − 3)</span> for a graph that has zeros <span class="m">−1</span> and <span class="m">3</span> and passes through <span class="m">(0, 6)</span>.`, fix: `That product has <span class="m"><i>f</i>(0) = −3</span>. Keep a leading coefficient <span class="m"><i>a</i></span> and use the point: <span class="m">−3<i>a</i> = 6</span>, so <span class="m"><i>a</i> = −2</span>.` },
    { wrong: `Concluding there is no zero between <span class="m">−2</span> and <span class="m">2</span> for <span class="m"><i>x</i><sup>2</sup> − 1</span> because <span class="m"><i>f</i>(−2) = <i>f</i>(2) = 3</span>.`, fix: `The Intermediate Value Theorem only works one way. Equal signs at the ends prove nothing; here there are two zeros, <span class="m">−1</span> and <span class="m">1</span>.` }
  ],
  practice: [
    { q: `List the zeros of <span class="m"><i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup>(<i>x</i> − 4)<sup>3</sup>(<i>x</i> + 1)</span> with their multiplicities, and say what the graph does at each.`, a: `<span class="m">0</span>, multiplicity 2: touches. <span class="m">4</span>, multiplicity 3: crosses, flattening. <span class="m">−1</span>, multiplicity 1: crosses. The degree is <span class="m">2 + 3 + 1 = 6</span>.` },
    { q: `Find the <span class="m"><i>y</i></span>-intercept and the end behavior of <span class="m"><i>f</i>(<i>x</i>) = −2(<i>x</i> − 1)(<i>x</i> + 3)<sup>2</sup></span>.`, a: `<span class="m"><i>f</i>(0) = −2(−1)(3)<sup>2</sup> = 18</span>, so <span class="m">(0, 18)</span>. Leading term <span class="m">−2<i>x</i><sup>3</sup></span>: as <span class="m"><i>x</i> → −∞</span>, <span class="m"><i>f</i>(<i>x</i>) → ∞</span>; as <span class="m"><i>x</i> → ∞</span>, <span class="m"><i>f</i>(<i>x</i>) → −∞</span>.` },
    { q: `Write a degree-3 polynomial whose graph touches the <span class="m"><i>x</i></span>-axis at <span class="m">−1</span>, crosses it at <span class="m">3</span>, and has <span class="m"><i>y</i></span>-intercept <span class="m">6</span>.`, a: `<span class="m"><i>f</i>(<i>x</i>) = <i>a</i>(<i>x</i> + 1)<sup>2</sup>(<i>x</i> − 3)</span>. Then <span class="m"><i>f</i>(0) = <i>a</i>(1)(−3) = −3<i>a</i> = 6</span>, so <span class="m"><i>a</i> = −2</span>: <span class="m"><i>f</i>(<i>x</i>) = −2(<i>x</i> + 1)<sup>2</sup>(<i>x</i> − 3) = −2<i>x</i><sup>3</sup> + 2<i>x</i><sup>2</sup> + 10<i>x</i> + 6</span>.` },
    { q: `Use the Intermediate Value Theorem to show that <span class="m"><i>f</i>(<i>x</i>) = <i>x</i><sup>4</sup> − 3<i>x</i> − 1</span> has a zero between 1 and 2 and another between −1 and 0.`, a: `<span class="m"><i>f</i>(1) = −3</span> and <span class="m"><i>f</i>(2) = 9</span> have opposite signs, so there is a zero in <span class="m">(1, 2)</span>. <span class="m"><i>f</i>(−1) = 3</span> and <span class="m"><i>f</i>(0) = −1</span> also have opposite signs, so there is a zero in <span class="m">(−1, 0)</span>.` }
  ],
  origin: `The idea that a sign change forces a zero was used freely by mathematicians for centuries. Bernard Bolzano gave the first proof of the Intermediate Value Theorem in 1817, and Augustin-Louis Cauchy proved it again in 1821 in his course on analysis.`
};
