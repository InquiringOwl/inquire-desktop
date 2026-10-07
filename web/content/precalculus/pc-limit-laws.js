window.ARITH = window.ARITH || {};
ARITH["pc-limit-laws"] = {
  title: "Limit Laws & Evaluating Limits Algebraically",
  short: "Compute limits exactly: substitute, factor, rationalize",
  grade: "Grade 12 · college Precalculus",
  hours: 5,
  voice: "plain",
  eyebrow: "Introduction to calculus · limit laws",
  hero: `<span class="m"><span class="c5">lim<sub><i>x</i>→3</sub></span> <span class="fr"><span><i>x</i><sup>2</sup> − 9</span><span><i>x</i> − 3</span></span> = <span class="c5">lim<sub><i>x</i>→3</sub></span> <span class="fr"><span><span class="c4">(<i>x</i> − 3)</span>(<span class="c1"><i>x</i></span> + 3)</span><span><span class="c4"><i>x</i> − 3</span></span></span> = <span class="c5">lim<sub><i>x</i>→3</sub></span> (<span class="c1"><i>x</i></span> + 3) = <span class="c5">6</span></span>`,
  lede: `The <b>limit laws</b> let you compute a limit exactly from the limits of simpler pieces. When plugging in gives the <b>indeterminate form</b> <span class="m">0/0</span>, a little algebra (factoring, the conjugate, or a common denominator) removes the zero and the limit appears.`,
  plain: `<p>Reading a limit from a graph or a table gives a good guess. Algebra gives the exact value. For most functions you meet, the limit at <span class="m"><span class="c1"><i>a</i></span></span> is simply the value at <span class="m"><span class="c1"><i>a</i></span></span>: to find the limit of <span class="m">3<i>x</i><sup>2</sup> − <i>x</i> + 5</span> as <span class="m"><i>x</i> → 2</span>, plug in 2 and get 15.</p>
<p>The interesting cases are the ones where plugging in breaks. In <span class="m">(<i>x</i><sup>2</sup> − 9)/(<i>x</i> − 3)</span> at <span class="m"><i>x</i> = 3</span> the top and bottom are both 0. The form <span class="m">0/0</span> says nothing yet: the limit could be any number.</p>
<p>Both 0s come from the same <span class="c4">factor <span class="m"><i>x</i> − 3</span></span>. For every <span class="m"><i>x</i></span> except 3 you may cancel it, and the function becomes <span class="m"><i>x</i> + 3</span>. The limit never looks at <span class="m"><i>x</i> = 3</span> itself, so it is <span class="m">3 + 3 = <span class="c5">6</span></span>. On the graph this is a hole at <span class="m">(3, 6)</span>.</p>
<p>When a square root causes the 0, multiply top and bottom by the <b>conjugate</b>. When fractions inside a fraction cause it, combine them over a common denominator. Each trick uncovers the same hidden factor so that it can cancel.</p>`,
  formal: `<p>Suppose <span class="m"><span class="c2">lim<sub><i>x</i>→<i>a</i></sub> <i>f</i>(<i>x</i>) = <i>L</i></span></span> and <span class="m"><span class="c3">lim<sub><i>x</i>→<i>a</i></sub> <i>g</i>(<i>x</i>) = <i>M</i></span></span>, and let <span class="m"><i>c</i></span> be a constant and <span class="m"><i>n</i></span> a positive integer. Then:</p>
<div class="display">lim [<i>f</i>(<i>x</i>) ± <i>g</i>(<i>x</i>)] = <i>L</i> ± <i>M</i> &nbsp; (sum and difference)<br>lim <i>c</i>·<i>f</i>(<i>x</i>) = <i>c</i><i>L</i> &nbsp; (constant multiple)<br>lim <i>f</i>(<i>x</i>)<i>g</i>(<i>x</i>) = <i>L</i><i>M</i> &nbsp; (product)<br>lim <i>f</i>(<i>x</i>)/<i>g</i>(<i>x</i>) = <i>L</i>/<i>M</i> &nbsp; if <i>M</i> ≠ 0 &nbsp; (quotient)<br>lim [<i>f</i>(<i>x</i>)]<sup><i>n</i></sup> = <i>L</i><sup><i>n</i></sup>, &nbsp; lim <sup><i>n</i></sup>√<span class="ov"><i>f</i>(<i>x</i>)</span> = <sup><i>n</i></sup>√<span class="ov"><i>L</i></span> &nbsp; (power and root; <i>L</i> &gt; 0 when <i>n</i> is even)</div>
<p>Starting from <span class="m">lim <i>c</i> = <i>c</i></span> and <span class="m">lim <i>x</i> = <i>a</i></span>, the laws give <b>direct substitution</b>: for a polynomial <span class="m"><i>p</i></span>, <span class="m">lim<sub><i>x</i>→<i>a</i></sub> <i>p</i>(<i>x</i>) = <i>p</i>(<i>a</i>)</span>, and for a rational function <span class="m"><i>p</i>/<i>q</i></span> with <span class="m"><i>q</i>(<i>a</i>) ≠ 0</span>, the limit is <span class="m"><i>p</i>(<i>a</i>)/<i>q</i>(<i>a</i>)</span>. If <span class="m"><i>q</i>(<i>a</i>) = 0</span> and <span class="m"><i>p</i>(<i>a</i>) ≠ 0</span>, the outputs grow without bound and there is no finite limit. If both are 0, <span class="m"><i>x</i> − <i>a</i></span> is a factor of each: cancel it and substitute again.</p>
<p><b>Squeeze theorem.</b> If <span class="m"><i>g</i>(<i>x</i>) ≤ <i>f</i>(<i>x</i>) ≤ <i>h</i>(<i>x</i>)</span> near <span class="m"><i>a</i></span> and <span class="m">lim <i>g</i> = lim <i>h</i> = <i>L</i></span>, then <span class="m">lim <i>f</i> = <i>L</i></span>. Since <span class="m">−|<i>x</i>| ≤ <i>x</i> sin(1/<i>x</i>) ≤ |<i>x</i>|</span>, <span class="m">lim<sub><i>x</i>→0</sub> <i>x</i> sin(1/<i>x</i>) = 0</span>. The same idea, with areas in the unit circle, proves <span class="m">lim<sub><i>x</i>→0</sub> (sin <i>x</i>)/<i>x</i> = 1</span> for <span class="m"><i>x</i></span> in radians.</p>`,
  legend: [
    { c: "c1", sym: `<i>x</i>`, name: "Input", desc: "The variable approaching a; drag a along the axis or the trace point along the curve." },
    { c: "c2", sym: `<i>f</i>`, name: "First function", desc: "Its limit L feeds the laws; drag its end point or scrub L." },
    { c: "c3", sym: `<i>g</i>`, name: "Second function", desc: "Its limit M feeds the laws; the quotient law needs M ≠ 0." },
    { c: "c4", sym: `<i>x</i> − <i>a</i>`, name: "Cancelled factor / hole", desc: "The common factor behind 0/0, and the hole it leaves in the graph." },
    { c: "c5", sym: `<i>L</i>`, name: "Limit", desc: "The exact value the outputs approach." }
  ],
  steps: {
    title: "How to evaluate a limit algebraically",
    items: [
      `Substitute <span class="m"><i>x</i> = <span class="c1"><i>a</i></span></span>. If you get a number, that number is the limit (direct substitution).`,
      `If you get a nonzero number over 0, there is a vertical asymptote: check the sign on each side; there is no finite limit.`,
      `If you get <span class="m">0/0</span>, the expression hides a factor <span class="m"><span class="c4"><i>x</i> − <i>a</i></span></span>. Do not stop there.`,
      `Factor polynomials; multiply by the conjugate for a difference with a square root; combine fractions inside a fraction over a common denominator.`,
      `Cancel the common factor. This is allowed because the limit only uses <span class="m"><i>x</i> ≠ <i>a</i></span>.`,
      `Substitute again into the simplified expression. The result is the <span class="c5">limit</span>, and the original graph has a hole there.`
    ]
  },
  example: {
    prompt: `Evaluate <span class="m">lim<sub><i>x</i>→−2</sub> <span class="fr"><span><i>x</i><sup>2</sup> + 5<i>x</i> + 6</span><span><i>x</i><sup>2</sup> − 4</span></span></span>.`,
    lines: [
      { math: `<span class="m"><span class="fr"><span>(−2)<sup>2</sup> + 5(−2) + 6</span><span>(−2)<sup>2</sup> − 4</span></span> = <span class="fr"><span>0</span><span>0</span></span></span>`, note: "Direct substitution gives the indeterminate form 0/0." },
      { math: `<span class="m"><span class="fr"><span><span class="c4">(<i>x</i> + 2)</span>(<i>x</i> + 3)</span><span><span class="c4">(<i>x</i> + 2)</span>(<i>x</i> − 2)</span></span></span>`, note: "Factor top and bottom; x + 2 appears in both because −2 makes both zero." },
      { math: `<span class="m">= <span class="fr"><span><i>x</i> + 3</span><span><i>x</i> − 2</span></span> &nbsp; for <i>x</i> ≠ −2</span>`, note: "Cancel the common factor; the limit never uses x = −2 itself." },
      { math: `<span class="m"><span class="fr"><span>−2 + 3</span><span>−2 − 2</span></span> = <span class="fr"><span>1</span><span>−4</span></span> = <span class="c5">−<span class="fr"><span>1</span><span>4</span></span></span></span>`, note: "Substitute into the simplified quotient; the denominator is no longer 0." },
      { math: `<span class="m">hole at <span class="c4">(−2, −<span class="fr"><span>1</span><span>4</span></span>)</span></span>`, note: "The original function is undefined at −2, so its graph has a hole at that height." }
    ],
    answer: `<span class="m"><span class="c5">lim<sub><i>x</i>→−2</sub> <span class="fr"><span><i>x</i><sup>2</sup> + 5<i>x</i> + 6</span><span><i>x</i><sup>2</sup> − 4</span></span> = −<span class="fr"><span>1</span><span>4</span></span></span></span>`
  },
  why: `<p>Calculus asks for limits that always start as <span class="m">0/0</span>: the slope of a tangent line is a limit of <span class="m">(<i>f</i>(<i>a</i> + <i>h</i>) − <i>f</i>(<i>a</i>))/<i>h</i></span>, and at <span class="m"><i>h</i> = 0</span> both parts vanish. The techniques here, cancelling a hidden factor or rationalizing, are exactly the ones used to find those slopes.</p>
<p>The laws also explain why tables and graphs usually agree with plugging in: sums, products and quotients of well-behaved pieces stay well behaved, so the value at a point and the limit there match except where something divides by zero.</p>`,
  careers: [
    { role: "Mechanical engineer", use: "Simplifies formulas such as stress or flow ratios that read 0/0 at a design point to find the value the system actually approaches." },
    { role: "Control systems engineer", use: "Evaluates limits of transfer functions as a variable approaches a pole or zero to predict steady-state behaviour." },
    { role: "Physicist", use: "Takes limits of formulas as a parameter goes to a special value, such as relativistic results reducing to Newtonian ones at low speed." },
    { role: "Actuary", use: "Uses limits of interest formulas, such as compounding more and more often, to reach continuous-compounding models." },
    { role: "Numerical analyst", use: "Rewrites expressions like √(x + 1) − 1 with the conjugate so a computer does not lose digits subtracting nearly equal numbers." },
    { role: "Economist", use: "Computes marginal cost and revenue as limits of difference quotients that start as 0/0." }
  ],
  life: [
    "A speedometer reading is a limit of distance over time as the time interval shrinks to zero",
    "Calculators lose accuracy on √(x + 1) − 1 for tiny x; the conjugate form avoids it",
    "Average cost per item approaches a fixed value as production grows, found with the same algebra",
    "Sports statistics like a rate per minute become unstable over very short spans, a 0/0 situation",
    "Zooming in on a curve in a graphing app shows it looking straighter, the idea behind tangent slopes"
  ],
  fields: [
    { name: "Calculus", use: "Derivatives are limits of difference quotients, evaluated with exactly these algebraic steps." },
    { name: "Physics", use: "Instantaneous velocity and acceleration are limits of average rates over shrinking time intervals." },
    { name: "Numerical computing", use: "Conjugate and factored forms avoid cancellation error when a formula is near 0/0." },
    { name: "Economics", use: "Marginal quantities are limits of ratios of small changes." }
  ],
  prereqWhy: {
    "pc-limits-graph": "The meaning of a limit, one-sided limits and holes come from graphs and tables; the laws now compute the same values exactly.",
    "a1-rational-simplify": "Factoring and cancelling common factors of rational expressions is the main tool for the 0/0 form.",
    "a1-radical-ops": "Multiplying by a conjugate to clear a square root is how limits with radicals are simplified."
  },
  unlocksWhy: {
    "pc-continuity": "A function is continuous at a exactly when its limit there, computed with these laws, equals f(a).",
    "pc-tangent-rate": "The slope of a tangent line is a 0/0 limit of difference quotients, simplified by the same factor-and-cancel step."
  },
  beyond: [
    { field: "Calculus I", why: "The limit laws are proved with ε–δ and used to build every derivative rule." },
    { field: "Calculus II", why: "L'Hôpital's rule handles 0/0 forms that algebra cannot simplify, such as (eˣ − 1)/x." },
    { field: "Physics (Mechanics)", why: "Velocity and acceleration are defined as limits of average rates." }
  ],
  mistakes: [
    { wrong: `"Substituting gives <span class="m">0/0</span>, so the limit is 0" (or "does not exist").`, fix: `<span class="m">0/0</span> is indeterminate: it says to simplify. <span class="m">(<i>x</i><sup>2</sup> − 9)/(<i>x</i> − 3)</span> gives 0/0 at 3 and its limit is 6.` },
    { wrong: `Cancelling terms instead of factors: <span class="m">(<i>x</i><sup>2</sup> − 9)/(<i>x</i> − 3) = <i>x</i> − 3</span> "by cancelling <i>x</i>".`, fix: `Only a common factor of the whole top and the whole bottom can cancel. Factor first: <span class="m">(<i>x</i> − 3)(<i>x</i> + 3)/(<i>x</i> − 3) = <i>x</i> + 3</span>.` },
    { wrong: `Applying the quotient law when the bottom's limit is 0: "<span class="m">lim (<i>x</i><sup>2</sup> − 9)/lim (<i>x</i> − 3) = 0/0</span>".`, fix: `The quotient law needs <span class="m">lim <i>g</i> ≠ 0</span>. Simplify the quotient first, then take the limit.` },
    { wrong: `Multiplying only the numerator by the conjugate <span class="m">√<span class="ov"><i>x</i></span> + 3</span>.`, fix: `Multiply top and bottom by the same conjugate, so the value is unchanged: you are multiplying by 1.` }
  ],
  practice: [
    { q: `If <span class="m">lim<sub><i>x</i>→<i>a</i></sub> <i>f</i>(<i>x</i>) = 4</span> and <span class="m">lim<sub><i>x</i>→<i>a</i></sub> <i>g</i>(<i>x</i>) = −2</span>, find <span class="m">lim<sub><i>x</i>→<i>a</i></sub> <span class="fr"><span><i>f</i>(<i>x</i>)<sup>2</sup> − 3<i>g</i>(<i>x</i>)</span><span><i>f</i>(<i>x</i>) + <i>g</i>(<i>x</i>)</span></span></span>.`, a: `Power, constant multiple and difference laws on top: <span class="m">16 + 6 = 22</span>. Sum law on the bottom: <span class="m">4 − 2 = 2 ≠ 0</span>, so the quotient law applies: <span class="m"><span class="c5">22/2 = 11</span></span>.` },
    { q: `Evaluate <span class="m">lim<sub><i>x</i>→5</sub> <span class="fr"><span><i>x</i><sup>2</sup> − 2<i>x</i> − 15</span><span><i>x</i> − 5</span></span></span>.`, a: `Substitution gives <span class="m">0/0</span>. Factor: <span class="m">(<i>x</i> − 5)(<i>x</i> + 3)/(<i>x</i> − 5) = <i>x</i> + 3</span> for <span class="m"><i>x</i> ≠ 5</span>, so the limit is <span class="m"><span class="c5">8</span></span>.` },
    { q: `Evaluate <span class="m">lim<sub><i>x</i>→9</sub> <span class="fr"><span>√<span class="ov"><i>x</i></span> − 3</span><span><i>x</i> − 9</span></span></span>.`, a: `Multiply top and bottom by <span class="m">√<span class="ov"><i>x</i></span> + 3</span>: <span class="m">(<i>x</i> − 9)/((<i>x</i> − 9)(√<span class="ov"><i>x</i></span> + 3)) = 1/(√<span class="ov"><i>x</i></span> + 3)</span>. Substitute: <span class="m"><span class="c5">1/(3 + 3) = 1/6</span></span>.` },
    { q: `Evaluate <span class="m">lim<sub><i>x</i>→3</sub> <span class="fr"><span><span class="fr"><span>1</span><span><i>x</i></span></span> − <span class="fr"><span>1</span><span>3</span></span></span><span><i>x</i> − 3</span></span></span>.`, a: `Common denominator on top: <span class="m">1/<i>x</i> − 1/3 = (3 − <i>x</i>)/(3<i>x</i>) = −(<i>x</i> − 3)/(3<i>x</i>)</span>. Divide by <span class="m"><i>x</i> − 3</span>: <span class="m">−1/(3<i>x</i>)</span>. Substitute: <span class="m"><span class="c5">−1/9</span></span>.` }
  ],
  origin: `<p>The squeeze idea is ancient: Archimedes trapped π between the perimeters of inscribed and circumscribed 96-sided polygons, getting <span class="m">223/71 &lt; π &lt; 22/7</span>. Augustin-Louis Cauchy made limits the working language of analysis in his <i>Cours d'analyse</i> (1821), and Karl Weierstrass gave the ε–δ definition in his Berlin lectures of the 1850s and 1860s, from which the limit laws are proved as theorems.</p>`
};
