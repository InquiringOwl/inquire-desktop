window.ARITH = window.ARITH || {};
ARITH["pc-ivt-bounds"] = {
  title: "Locating Real Zeros: IVT, Descartes & Bounds",
  short: "Trap, count and close in on the real zeros of a polynomial",
  grade: "Grade 12 · college Precalculus",
  hours: 5,
  voice: "plain",
  eyebrow: "Polynomial functions · locating zeros",
  hero: `<span class="m"><span class="c3"><i>f</i></span>(<span class="c1"><i>a</i></span>) &lt; 0 &lt; <span class="c3"><i>f</i></span>(<span class="c2"><i>b</i></span>) ⇒ <span class="c5"><i>f</i>(<i>c</i>) = 0</span> for some <i>c</i> in (<span class="c1"><i>a</i></span>, <span class="c2"><i>b</i></span>)</span>`,
  lede: `Most polynomials have zeros that no formula you know will produce exactly. Three tools still tell you a lot: the <b>Intermediate Value Theorem</b> traps a zero between two inputs, <b>Descartes' rule of signs</b> limits how many positive and negative zeros there can be, and the <b>bound tests</b> fence all the real zeros inside an interval. Bisection then closes in on a zero to any accuracy you want.`,
  plain: `<p>The graph of a polynomial has no breaks or jumps. If it is below the <i>x</i>-axis at one input and above it at another, it has to cross the axis somewhere in between. That is the whole idea of the Intermediate Value Theorem: a sign change traps a zero.</p>
<p>The signs of the coefficients also carry information. Read the coefficients of <span class="m"><i>x</i><sup>3</sup> − 2<i>x</i> − 5</span> from the highest power down: plus, minus, minus. The sign changes once, and Descartes' rule says there is then exactly one positive zero. Replacing <span class="m"><i>x</i></span> by <span class="m">−<i>x</i></span> does the same job for the negative zeros.</p>
<p>Synthetic division can show that no zero is larger than some number, or smaller than another. Once a zero is trapped in an interval, cut the interval in half, keep the half where the sign still changes, and repeat. Each halving makes the trap half as wide.</p>`,
  formal: `<p><b>Intermediate Value Theorem</b> (for polynomials). If <span class="m"><span class="c3"><i>f</i></span></span> is a polynomial and <span class="m"><span class="c3"><i>f</i></span>(<span class="c1"><i>a</i></span>)</span> and <span class="m"><span class="c3"><i>f</i></span>(<span class="c2"><i>b</i></span>)</span> have opposite signs, then <span class="m"><span class="c3"><i>f</i></span></span> has at least one zero in <span class="m">(<span class="c1"><i>a</i></span>, <span class="c2"><i>b</i></span>)</span>. The converse fails: equal signs allow no zeros or an even number of them.</p>
<p><b>Descartes' rule of signs</b>. For a polynomial with real coefficients written in descending powers, the number of positive real zeros (counted with multiplicity) equals the number of sign changes of its coefficients or is less than that by an even number. The negative real zeros are counted the same way from <span class="m"><i>p</i>(−<i>x</i>)</span>. For <span class="m"><i>p</i>(<i>x</i>) = <i>x</i><sup>3</sup> − 2<i>x</i> − 5</span>: one sign change, so exactly <span class="c5">1</span> positive zero; <span class="m"><i>p</i>(−<i>x</i>) = −<i>x</i><sup>3</sup> + 2<i>x</i> − 5</span> has two, so <span class="c5">2 or 0</span> negative zeros.</p>
<p><b>Bound tests</b>. Divide <span class="m"><i>p</i>(<i>x</i>)</span> (positive leading coefficient) synthetically by <span class="m"><i>x</i> − <span class="c4"><i>c</i></span></span>. If <span class="m"><span class="c4"><i>c</i></span> &gt; 0</span> and every number in the bottom row is nonnegative, <span class="m"><span class="c4"><i>c</i></span></span> is an <b>upper bound</b>: no real zero is greater than <span class="m"><span class="c4"><i>c</i></span></span>. If <span class="m"><span class="c4"><i>c</i></span> &lt; 0</span> and the bottom row alternates in sign (a 0 may count as either sign), <span class="m"><span class="c4"><i>c</i></span></span> is a <b>lower bound</b>. <b>Bisection</b> halves a trapping interval <span class="m">[<i>a</i>, <i>b</i>]</span> at each step, so after <span class="m"><i>n</i></span> steps the zero lies in an interval of width <span class="m">(<i>b</i> − <i>a</i>)/2<sup><i>n</i></sup></span>.</p>`,
  legend: [
    { c: "c1", sym: `<i>a</i>`, name: "Left input", desc: "One end of the interval, a point you drag along the curve." },
    { c: "c2", sym: `<i>b</i>`, name: "Right input", desc: "The other end of the interval; its value's sign is compared with f(a)." },
    { c: "c3", sym: `<i>p</i>(<i>x</i>)`, name: "The polynomial", desc: "The curve and its coefficients, each of which you can change." },
    { c: "c4", sym: `<i>c</i>, [<i>a</i>, <i>b</i>]`, name: "Bounds and brackets", desc: "The bound-test number and the interval that traps a zero." },
    { c: "c5", sym: `0`, name: "Zero and counts", desc: "The guaranteed zero, the possible counts and the bisection estimate." },
  ],
  steps: {
    title: "How to locate the real zeros of a polynomial",
    items: [
      `Count with Descartes: sign changes of <span class="m"><i>p</i>(<i>x</i>)</span> give the possible positive zeros, sign changes of <span class="m"><i>p</i>(−<i>x</i>)</span> the possible negative ones; each count may drop by 2.`,
      `Fence the zeros: try <span class="m"><span class="c4"><i>c</i></span> = 1, 2, 3, …</span> by synthetic division until the bottom row has no negative entry (upper bound), and <span class="m"><span class="c4"><i>c</i></span> = −1, −2, …</span> until it alternates (lower bound).`,
      `Inside the fence, evaluate <span class="m"><i>p</i></span> at integers. Each sign change between neighbours traps a zero (Intermediate Value Theorem).`,
      `Bisect a trapping interval: evaluate at the midpoint and keep the half whose ends still have opposite signs.`,
      `Stop when the width is below the accuracy you need; the midpoint of the last interval is within half that width of a zero.`,
    ],
  },
  example: {
    prompt: `Locate the real zeros of <span class="m"><span class="c3"><i>p</i>(<i>x</i>) = <i>x</i><sup>3</sup> − 2<i>x</i> − 5</span></span> and narrow the positive one to an interval of width <span class="m">1/16</span>.`,
    lines: [
      { math: `<span class="m">+ &nbsp; − &nbsp; − : 1 change; &nbsp; <i>p</i>(−<i>x</i>) = −<i>x</i><sup>3</sup> + 2<i>x</i> − 5 : 2 changes</span>`, note: "Exactly one positive zero; two or no negative zeros." },
      { math: `<span class="m"><span class="c4"><i>c</i> = 3</span>: 1, 3, 7, 16 &nbsp; · &nbsp; <span class="c4"><i>c</i> = −2</span>: 1, −2, 2, −9</span>`, note: "Upper bound 3 (no negative entry); lower bound −2 (signs alternate)." },
      { math: `<span class="m"><i>p</i>(−2) = −9, <i>p</i>(−1) = −4, <i>p</i>(0) = −5, <i>p</i>(1) = −6, <i>p</i>(<span class="c1">2</span>) = −1, <i>p</i>(<span class="c2">3</span>) = 16</span>`, note: "The only sign change on [−2, 3] is between 2 and 3." },
      { math: `<span class="m"><i>p</i>(2.5) = 5.625 &gt; 0 ⇒ [2, 2.5]</span>`, note: "Bisect: keep the half where the sign still changes." },
      { math: `<span class="m"><i>p</i>(2.25) = 1.890625 &gt; 0 ⇒ [2, 2.25]</span>`, note: "The positive value replaces the right end." },
      { math: `<span class="m"><i>p</i>(2.125) ≈ 0.3457 &gt; 0 ⇒ [2, 2.125]</span>`, note: "Width 1/8." },
      { math: `<span class="m"><i>p</i>(2.0625) ≈ −0.3513 &lt; 0 ⇒ <span class="c5">[2.0625, 2.125]</span></span>`, note: "Width 1/16; the negative value replaces the left end." },
    ],
    answer: `One real zero, in <span class="m"><span class="c5">[2.0625, 2.125]</span></span> (it is <span class="m">≈ 2.0946</span>). There are no negative zeros: −2 is a lower bound, and for <span class="m">−2 ≤ <i>x</i> ≤ 0</span>, <span class="m"><i>x</i><sup>3</sup> ≤ 0</span> and <span class="m">−2<i>x</i> ≤ 4</span> give <span class="m"><i>p</i>(<i>x</i>) ≤ −1</span>. The other two zeros are nonreal.`,
  },
  why: `<p>Polynomials of degree 5 and higher have no general formula for their zeros, and even the cubic and quartic formulas are rarely practical. Yet zeros are what equations ask for: break-even points, equilibrium positions, the interest rate that makes an investment pay off. These tools find zeros you cannot write down.</p>
<p>The same three ideas run inside every equation solver: a sign check to make sure a root is bracketed, bounds to know where to search, and a method that shrinks the bracket. Bisection is slow but never fails once a sign change is found, which is why safer solvers fall back on it.</p>`,
  careers: [
    { role: "Numerical analyst", use: "Designs root-finding routines that combine bracketing by sign change with faster methods such as Newton's and the secant method." },
    { role: "Financial analyst", use: "Finds the internal rate of return, the zero of a polynomial in the discount factor, by bracketing it between two trial rates." },
    { role: "Control systems engineer", use: "Uses sign-change and bound tests on characteristic polynomials to decide whether a system's poles can lie in an unstable region." },
    { role: "Structural engineer", use: "Locates the loads at which a stiffness polynomial changes sign, the critical buckling loads of a column or frame." },
    { role: "Software engineer", use: "Implements robust solvers in spreadsheets and graphics engines that bisect when faster iterations fail." },
  ],
  life: [
    "Guessing a number with higher-or-lower hints by always splitting the remaining range in half",
    "Knowing a hike crossed sea level because it started below it and ended above it",
    "Finding the break-even sales level by trying one too low and one too high",
    "Adjusting a shower's temperature from too cold and too hot toward just right",
  ],
  fields: [
    { name: "Numerical analysis", use: "Bracketing and bisection are the safest root-finding methods and come with a guaranteed error bound." },
    { name: "Finance", use: "Yields and internal rates of return are zeros of polynomials found by bracketing between trial rates." },
    { name: "Control engineering", use: "Sign rules on characteristic polynomials limit where a system's roots can be before they are computed." },
    { name: "Computer graphics", use: "Ray tracing finds where a ray meets a curved surface by locating the zeros of a polynomial along the ray." },
  ],
  prereqWhy: {
    "pc-function-behavior": "Knowing where a polynomial rises and falls tells you where it can cross the axis, and how many times.",
    "a2-fta": "The Fundamental Theorem of Algebra says how many zeros there are in all, so Descartes' counts leave the rest as nonreal pairs.",
    "a2-zeros-mult": "Descartes' rule counts zeros with multiplicity, and a zero of even multiplicity touches the axis without a sign change.",
  },
  unlocksWhy: {
    "pc-continuity": "The Intermediate Value Theorem holds for every function continuous on [a, b], not just polynomials; continuity is the property that makes it work.",
  },
  beyond: [
    { field: "Calculus I", why: "The Intermediate Value Theorem is proved for continuous functions, and Newton's method uses the derivative to find zeros much faster than bisection." },
    { field: "Engineering", why: "Stability tests such as the Routh–Hurwitz criterion count roots of characteristic polynomials in a half-plane, extending Descartes' idea." },
    { field: "Computer graphics", why: "Bracketing and bisection on polynomials find intersections of rays with curved surfaces." },
  ],
  mistakes: [
    { wrong: `"<span class="m"><i>f</i>(−1)</span> and <span class="m"><i>f</i>(1)</span> are both positive, so there is no zero between them."`, fix: `Equal signs guarantee nothing. <span class="m"><i>x</i><sup>2</sup> − 0.25</span> is positive at <span class="m">±1</span> and has two zeros in between.` },
    { wrong: `Reading Descartes' count as the exact number: "two sign changes, so two positive zeros."`, fix: `The count is a maximum that may drop by 2: two sign changes allow 2 or 0 positive zeros.` },
    { wrong: `Skipping zero coefficients when testing a bound: dividing <span class="m"><i>x</i><sup>3</sup> − 2<i>x</i> − 5</span> by <span class="m"><i>x</i> − 3</span> using the row 1, −2, −5.`, fix: `Keep a 0 for every missing power: the row is 1, 0, −2, −5, and the bottom row is 1, 3, 7, 16.` },
  ],
  practice: [
    { q: `Show that <span class="m"><i>f</i>(<i>x</i>) = <i>x</i><sup>3</sup> + <i>x</i> − 1</span> has a zero between 0 and 1.`, a: `<span class="m"><i>f</i>(0) = −1 &lt; 0</span> and <span class="m"><i>f</i>(1) = 1 &gt; 0</span>; a polynomial is continuous, so by the Intermediate Value Theorem it has a zero in <span class="m">(0, 1)</span>.` },
    { q: `Use Descartes' rule of signs on <span class="m"><i>p</i>(<i>x</i>) = <i>x</i><sup>4</sup> − 3<i>x</i><sup>3</sup> + 2<i>x</i><sup>2</sup> − <i>x</i> + 5</span>.`, a: `Signs + − + − +: 4 changes, so 4, 2 or 0 positive zeros. <span class="m"><i>p</i>(−<i>x</i>) = <i>x</i><sup>4</sup> + 3<i>x</i><sup>3</sup> + 2<i>x</i><sup>2</sup> + <i>x</i> + 5</span> has no change: no negative zeros.` },
    { q: `Show that every real zero of <span class="m"><i>p</i>(<i>x</i>) = <i>x</i><sup>3</sup> − 2<i>x</i><sup>2</sup> − 5<i>x</i> + 6</span> lies in <span class="m">[−3, 4]</span>.`, a: `Synthetic division by <span class="m"><i>x</i> − 4</span>: 1, 2, 3, 18, no negative entry, so 4 is an upper bound. By <span class="m"><i>x</i> + 3</span>: 1, −5, 10, −24, alternating, so −3 is a lower bound. (The zeros are −2, 1 and 3.)` },
    { q: `Bisect <span class="m"><i>x</i><sup>2</sup> − 2</span> on <span class="m">[1, 2]</span> three times. How many halvings would make the width at most 0.001?`, a: `<span class="m"><i>f</i>(1.5) = 0.25 &gt; 0</span> → [1, 1.5]; <span class="m"><i>f</i>(1.25) = −0.4375</span> → [1.25, 1.5]; <span class="m"><i>f</i>(1.375) = −0.109375</span> → [1.375, 1.5]. Width <span class="m">1/2<sup><i>n</i></sup> ≤ 0.001</span> needs <span class="m"><i>n</i> = 10</span>, since <span class="m">2<sup>10</sup> = 1024</span>.` },
  ],
  origin: `<p>René Descartes stated his rule of signs in <i>La Géométrie</i> (1637) without proof; proofs came in the 18th century, and Carl Friedrich Gauss showed in 1828 that the count drops by an even number. Bernard Bolzano proved the Intermediate Value Theorem from a careful definition of continuity in 1817, and Augustin-Louis Cauchy gave a proof in 1821 by repeatedly subdividing the interval, the idea behind bisection.</p>`,
};
