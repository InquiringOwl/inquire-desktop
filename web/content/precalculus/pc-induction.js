window.ARITH = window.ARITH || {};

ARITH["pc-induction"] = {
  title: "Mathematical Induction",
  short: "Prove a statement for every n with a base case and a step",
  grade: "Grade 12 · college Precalculus",
  hours: 4,
  voice: "plain",
  eyebrow: "Proof · statements about every natural number",
  hero: `<span class="m"><span class="c4"><i>P</i>(1)</span> true &nbsp;and&nbsp; <span class="c2"><i>P</i>(<i>k</i>)</span> ⇒ <span class="c3"><i>P</i>(<i>k</i> + 1)</span> &nbsp;⇒&nbsp; <span class="c5"><i>P</i>(<i>n</i>) for every <i>n</i> ≥ 1</span></span>`,
  lede: `Mathematical induction proves a statement about every positive integer with two finite checks: it holds for the first value, and whenever it holds for one value it also holds for the next.`,
  plain: `<p>Picture an endless row of dominoes. If the first one falls, and every domino that falls knocks over the next, then every domino falls. Nobody has to watch them all; the two facts are enough.</p>
<p>Take the claim <span class="m">1 + 2 + ⋯ + <i>n</i> = <i>n</i>(<i>n</i> + 1)/2</span>. Checking <span class="m"><i>n</i> = 1, 2, 3, 4</span> gives 1, 3, 6, 10 on both sides, which is evidence but not proof: some patterns hold for many values and then fail.</p>
<p>Induction proves it for all <span class="m"><i>n</i></span>. The <span class="c4">base case</span> is <span class="m">1 = 1 · 2/2</span>. For the step, suppose the formula is true for some <span class="m c1"><i>k</i></span>. Adding the next term <span class="m"><i>k</i> + 1</span> to both sides gives <span class="m"><i>k</i>(<i>k</i> + 1)/2 + (<i>k</i> + 1) = (<i>k</i> + 1)(<i>k</i> + 2)/2</span>, which is the formula for <span class="m"><i>k</i> + 1</span>. Each case pushes over the next.</p>
<p>Both parts are needed. The claim <span class="m">2 + 4 + ⋯ + 2<i>n</i> = <i>n</i><sup>2</sup> + <i>n</i> + 1</span> has a step that works perfectly, yet it is false for every <span class="m"><i>n</i></span>: the first domino never falls, since <span class="m">2 ≠ 3</span>.</p>`,
  formal: `<p><b>Principle of mathematical induction.</b> Let <span class="m"><i>P</i>(<i>n</i>)</span> be a statement about integers <span class="m"><i>n</i> ≥ <i>n</i><sub>0</sub></span>. If (1) <span class="m c4"><i>P</i>(<i>n</i><sub>0</sub>)</span> is true (the <b>base case</b>) and (2) for every integer <span class="m"><i>k</i> ≥ <i>n</i><sub>0</sub></span>, <span class="m"><span class="c2"><i>P</i>(<i>k</i>)</span> ⇒ <span class="c3"><i>P</i>(<i>k</i> + 1)</span></span> (the <b>inductive step</b>), then <span class="m c5"><i>P</i>(<i>n</i>)</span> is true for every <span class="m"><i>n</i> ≥ <i>n</i><sub>0</sub></span>. The assumption <span class="m c2"><i>P</i>(<i>k</i>)</span> made in the step is the <b>inductive hypothesis</b>.</p>
<div class="display"><span class="m">1 + 2 + ⋯ + <i>n</i> = <span class="fr"><span><i>n</i>(<i>n</i> + 1)</span><span>2</span></span></span><br><span class="m">1<sup>2</sup> + 2<sup>2</sup> + ⋯ + <i>n</i><sup>2</sup> = <span class="fr"><span><i>n</i>(<i>n</i> + 1)(2<i>n</i> + 1)</span><span>6</span></span></span><br><span class="m">1 + <i>r</i> + <i>r</i><sup>2</sup> + ⋯ + <i>r</i><sup><i>n</i> − 1</sup> = <span class="fr"><span><i>r</i><sup><i>n</i></sup> − 1</span><span><i>r</i> − 1</span></span> &nbsp; (<i>r</i> ≠ 1)</span><br><span class="m">3 divides <i>n</i><sup>3</sup> − <i>n</i> &nbsp; (<i>n</i> ≥ 1)</span><br><span class="m">2<sup><i>n</i></sup> &gt; <i>n</i><sup>2</sup> &nbsp; (<i>n</i> ≥ 5)</span></div>
<p>Each line is proved by induction on <span class="m"><i>n</i></span>. The last shows why <span class="m"><i>n</i><sub>0</sub></span> matters: <span class="m">2<sup><i>n</i></sup> &gt; <i>n</i><sup>2</sup></span> is true at <span class="m"><i>n</i> = 1</span> but false at 2, 3 and 4, and its step <span class="m">2<sup><i>k</i> + 1</sup> = 2 · 2<sup><i>k</i></sup> &gt; 2<i>k</i><sup>2</sup> ≥ (<i>k</i> + 1)<sup>2</sup></span> needs <span class="m"><i>k</i> ≥ 3</span>, so the proof starts at <span class="m"><i>n</i><sub>0</sub> = 5</span>.</p>`,
  legend: [
    { c: "c1", sym: `<i>n</i>, <i>k</i>`, name: "The index", desc: "n is any integer in the claim; k is the arbitrary case used in the step." },
    { c: "c2", sym: `<i>P</i>(<i>k</i>)`, name: "Inductive hypothesis", desc: "The statement assumed true for one k ≥ n₀." },
    { c: "c3", sym: `<i>P</i>(<i>k</i> + 1)`, name: "The target", desc: "What the step must reach using the hypothesis." },
    { c: "c4", sym: `<i>P</i>(<i>n</i><sub>0</sub>)`, name: "Base case", desc: "The first case, checked directly." },
    { c: "c5", sym: `∀<i>n</i> ≥ <i>n</i><sub>0</sub>`, name: "Conclusion", desc: "The claim holds for every n from n₀ on." }
  ],
  steps: {
    title: "How to write a proof by induction",
    items: [
      `State the claim <span class="m"><i>P</i>(<i>n</i>)</span> and the first value <span class="m"><i>n</i><sub>0</sub></span>.`,
      `<span class="c4">Base case</span>: substitute <span class="m"><i>n</i> = <i>n</i><sub>0</sub></span> and check both sides separately.`,
      `<span class="c2">Inductive hypothesis</span>: assume <span class="m"><i>P</i>(<i>k</i>)</span> for an arbitrary <span class="m"><i>k</i> ≥ <i>n</i><sub>0</sub></span>, and write it out.`,
      `Write the <span class="c3">target</span> <span class="m"><i>P</i>(<i>k</i> + 1)</span> by replacing <span class="m"><i>n</i></span> with <span class="m"><i>k</i> + 1</span> everywhere.`,
      `Start from one side of <span class="m"><i>P</i>(<i>k</i> + 1)</span>, find <span class="m"><i>P</i>(<i>k</i>)</span> inside it, replace it using the hypothesis, and simplify to the other side.`,
      `<span class="c5">Conclude</span>: by the principle of mathematical induction, <span class="m"><i>P</i>(<i>n</i>)</span> holds for all <span class="m"><i>n</i> ≥ <i>n</i><sub>0</sub></span>.`
    ]
  },
  example: {
    prompt: `Prove that <span class="m">1<sup>2</sup> + 2<sup>2</sup> + ⋯ + <i>n</i><sup>2</sup> = <span class="fr"><span><i>n</i>(<i>n</i> + 1)(2<i>n</i> + 1)</span><span>6</span></span></span> for every integer <span class="m"><i>n</i> ≥ 1</span>.`,
    lines: [
      { math: `<span class="m c4">1<sup>2</sup> = 1, &nbsp; <span class="fr"><span>1 · 2 · 3</span><span>6</span></span> = 1</span>`, note: "Base case n = 1: both sides equal 1." },
      { math: `<span class="m c2">1<sup>2</sup> + ⋯ + <i>k</i><sup>2</sup> = <span class="fr"><span><i>k</i>(<i>k</i> + 1)(2<i>k</i> + 1)</span><span>6</span></span></span>`, note: "Inductive hypothesis for some k ≥ 1." },
      { math: `<span class="m c3">1<sup>2</sup> + ⋯ + (<i>k</i> + 1)<sup>2</sup> = <span class="fr"><span>(<i>k</i> + 1)(<i>k</i> + 2)(2<i>k</i> + 3)</span><span>6</span></span></span>`, note: "Target: replace n by k + 1." },
      { math: `<span class="m"><span class="c2"><span class="fr"><span><i>k</i>(<i>k</i> + 1)(2<i>k</i> + 1)</span><span>6</span></span></span> + (<i>k</i> + 1)<sup>2</sup> = <span class="fr"><span>(<i>k</i> + 1)[<i>k</i>(2<i>k</i> + 1) + 6(<i>k</i> + 1)]</span><span>6</span></span></span>`, note: "Use the hypothesis for the first k terms, then factor out k + 1." },
      { math: `<span class="m">= <span class="fr"><span>(<i>k</i> + 1)(2<i>k</i><sup>2</sup> + 7<i>k</i> + 6)</span><span>6</span></span> = <span class="c3"><span class="fr"><span>(<i>k</i> + 1)(<i>k</i> + 2)(2<i>k</i> + 3)</span><span>6</span></span></span></span>`, note: "2k² + 7k + 6 factors as (k + 2)(2k + 3): the target." },
      { math: `<span class="m c5"><i>P</i>(<i>n</i>) for all <i>n</i> ≥ 1</span>`, note: "Base case and step hold, so induction applies." }
    ],
    answer: `The formula holds for every <span class="m"><i>n</i> ≥ 1</span>; for example <span class="m">1<sup>2</sup> + ⋯ + 10<sup>2</sup> = 10 · 11 · 21/6 = 385</span>.`
  },
  why: `<p>Many facts concern infinitely many cases: a formula for every <span class="m"><i>n</i></span>, a loop that must work on every pass, a recursive program that must finish on inputs of every size. Testing cases can never cover them all, but induction can. The sum formulas proved here are used again in calculus, where <span class="m">1<sup>2</sup> + ⋯ + <i>n</i><sup>2</sup></span> turns the area under <span class="m"><i>y</i> = <i>x</i><sup>2</sup></span> into a limit.</p>`,
  careers: [
    { role: "Software engineer", use: "Argues that a loop is correct by showing an invariant holds before the first pass and survives every pass." },
    { role: "Formal verification engineer", use: "Proves properties of chips and programs with induction over time steps or data structures in proof assistants." },
    { role: "Algorithm designer", use: "Proves running-time bounds from recurrences such as T(n) = 2T(n/2) + n by induction on n." },
    { role: "Compiler engineer", use: "Shows that a transformation preserves meaning by structural induction over syntax trees." },
    { role: "Mathematics researcher", use: "Uses induction, strong induction and well-ordering arguments throughout combinatorics and number theory." },
    { role: "Cryptographer", use: "Proves identities about modular powers and sequences that security arguments depend on." }
  ],
  life: [
    "Climbing a ladder: reach the first rung, and from any rung reach the next",
    "Seeing why the Tower of Hanoi with n discs needs 2ⁿ − 1 moves",
    "Trusting a recipe step that is repeated until the dough is ready",
    "Following a chain message that each person passes to the next",
    "Explaining why a staircase of n steps uses 1 + 2 + ⋯ + n blocks"
  ],
  fields: [
    { name: "Computer science", use: "Recursion, loop invariants and structural induction prove programs correct." },
    { name: "Discrete mathematics", use: "Graph theory and combinatorics prove statements for all sizes n by induction." },
    { name: "Number theory", use: "Divisibility facts such as 3 dividing n³ − n are proved one n at a time." },
    { name: "Calculus", use: "Closed forms for sums of k and k² evaluate Riemann sums exactly." }
  ],
  prereqWhy: {
    "a2-arith-series": "The first formulas proved by induction are arithmetic sums such as 1 + 2 + ⋯ + n = n(n + 1)/2, met there without a proof for all n.",
    "a2-geom-series": "The geometric sum formula 1 + r + ⋯ + rⁿ⁻¹ = (rⁿ − 1)/(r − 1) gets a full proof here, and its algebra is a model inductive step."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Discrete Mathematics", why: "Strong induction, recursive definitions and structural induction extend the same principle." },
    { field: "Calculus I", why: "Riemann sums for areas use the induction-proved formulas for 1 + 2 + ⋯ + n and 1² + ⋯ + n²." },
    { field: "Linear Algebra", why: "Facts about n × n matrices, such as determinant properties, are proved by induction on n." }
  ],
  mistakes: [
    { wrong: `The step <span class="m">(<i>k</i><sup>2</sup> + <i>k</i> + 1) + 2(<i>k</i> + 1) = (<i>k</i> + 1)<sup>2</sup> + (<i>k</i> + 1) + 1</span> works, so <span class="m">2 + 4 + ⋯ + 2<i>n</i> = <i>n</i><sup>2</sup> + <i>n</i> + 1</span>.`, fix: `Check the base case: at <span class="m"><i>n</i> = 1</span>, <span class="m">2 ≠ 3</span>. The true formula is <span class="m"><i>n</i><sup>2</sup> + <i>n</i></span>. A step with no base case proves nothing.` },
    { wrong: `<span class="m"><i>n</i><sup>2</sup> − <i>n</i> + 41</span> is prime for <span class="m"><i>n</i> = 1, 2, …, 40</span>, so it is prime for every <span class="m"><i>n</i></span>.`, fix: `Checking cases is not a proof. At <span class="m"><i>n</i> = 41</span> it equals <span class="m">41<sup>2</sup> = 1681</span>, which is not prime.` },
    { wrong: `<span class="m">2<sup><i>n</i></sup> &gt; <i>n</i><sup>2</sup></span> for all <span class="m"><i>n</i> ≥ 1</span>: true at <span class="m"><i>n</i> = 1</span>, and <span class="m">2<sup><i>k</i> + 1</sup> &gt; 2<i>k</i><sup>2</sup> ≥ (<i>k</i> + 1)<sup>2</sup></span>.`, fix: `<span class="m">2<i>k</i><sup>2</sup> ≥ (<i>k</i> + 1)<sup>2</sup></span> fails for <span class="m"><i>k</i> = 1, 2</span>, and the claim fails at <span class="m"><i>n</i> = 2, 3, 4</span>. The step holds for <span class="m"><i>k</i> ≥ 3</span>, so start at <span class="m"><i>n</i><sub>0</sub> = 5</span>.` },
    { wrong: `Assume <span class="m"><i>P</i>(<i>k</i> + 1)</span> and simplify until you reach a true statement.`, fix: `Assume only <span class="m"><i>P</i>(<i>k</i>)</span>. Start from one side of <span class="m"><i>P</i>(<i>k</i> + 1)</span> and transform it into the other side.` }
  ],
  practice: [
    { q: `For <span class="m">1 + 3 + 5 + ⋯ + (2<i>n</i> − 1) = <i>n</i><sup>2</sup></span>, check the base case and write the statement <span class="m"><i>P</i>(<i>k</i> + 1)</span>.`, a: `<span class="m"><i>n</i> = 1</span>: <span class="m">1 = 1<sup>2</sup></span>. <span class="m"><i>P</i>(<i>k</i> + 1)</span>: <span class="m">1 + 3 + ⋯ + (2<i>k</i> − 1) + (2<i>k</i> + 1) = (<i>k</i> + 1)<sup>2</sup></span>.` },
    { q: `Prove <span class="m">1 + 3 + 5 + ⋯ + (2<i>n</i> − 1) = <i>n</i><sup>2</sup></span> for all <span class="m"><i>n</i> ≥ 1</span>.`, a: `Base case above. Assuming the sum of the first <span class="m"><i>k</i></span> odd numbers is <span class="m"><i>k</i><sup>2</sup></span>, the next sum is <span class="m"><i>k</i><sup>2</sup> + (2<i>k</i> + 1) = (<i>k</i> + 1)<sup>2</sup></span>, which is <span class="m"><i>P</i>(<i>k</i> + 1)</span>.` },
    { q: `Prove that 3 divides <span class="m"><i>n</i><sup>3</sup> − <i>n</i></span> for every integer <span class="m"><i>n</i> ≥ 1</span>.`, a: `<span class="m"><i>n</i> = 1</span>: <span class="m">1 − 1 = 0 = 3 · 0</span>. Step: <span class="m">(<i>k</i> + 1)<sup>3</sup> − (<i>k</i> + 1) = (<i>k</i><sup>3</sup> − <i>k</i>) + 3(<i>k</i><sup>2</sup> + <i>k</i>)</span>; the first part is a multiple of 3 by the hypothesis and the second is too.` },
    { q: `Prove that <span class="m">2<sup><i>n</i></sup> &gt; <i>n</i><sup>2</sup></span> for every integer <span class="m"><i>n</i> ≥ 5</span>.`, a: `<span class="m"><i>n</i> = 5</span>: <span class="m">32 &gt; 25</span>. Step, for <span class="m"><i>k</i> ≥ 5</span>: <span class="m">2<sup><i>k</i> + 1</sup> = 2 · 2<sup><i>k</i></sup> &gt; 2<i>k</i><sup>2</sup> = <i>k</i><sup>2</sup> + <i>k</i> · <i>k</i> ≥ <i>k</i><sup>2</sup> + 5<i>k</i> &gt; <i>k</i><sup>2</sup> + 2<i>k</i> + 1 = (<i>k</i> + 1)<sup>2</sup></span>.` }
  ],
  origin: `Al-Karaji (around 1000) and Levi ben Gershon (1321) argued from each case to the next when proving sum formulas. Francesco Maurolico's Arithmeticorum libri duo (1575) proved that the sum of the first n odd numbers is n² by such a stepwise argument, and Blaise Pascal used the method clearly in his Traité du triangle arithmétique (1654). Augustus De Morgan named it mathematical induction in 1838, and Richard Dedekind (1888) and Giuseppe Peano (1889) made it an axiom of the natural numbers.`
};
