window.ARITH = window.ARITH || {};
ARITH["pc-limits-infinity"] = {
  title: "Infinite Limits & Limits at Infinity",
  short: "Outputs that blow up, and inputs that run off forever",
  grade: "Grade 12 · college Precalculus",
  hours: 5,
  voice: "plain",
  eyebrow: "Introduction to calculus · limits and infinity",
  hero: `<span class="m"><span class="c5">lim<sub><i>x</i>→∞</sub></span> <span class="fr"><span class="c2">3<i>x</i><sup>2</sup> − <i>x</i> + 1</span><span class="c3"><i>x</i><sup>2</sup> + 4</span></span> = <span class="c5">3</span> &nbsp;·&nbsp; <span class="c5">lim<sub><i>x</i>→2<sup>+</sup></sub></span> <span class="fr"><span>1</span><span class="c3"><i>x</i> − 2</span></span> = <span class="c5">∞</span></span>`,
  lede: `Infinity enters a limit in two ways. In an <b>infinite limit</b> the outputs grow without bound as <span class="m"><span class="c1"><i>x</i></span></span> nears a number, which gives a <span class="c4">vertical asymptote</span>. In a <b>limit at infinity</b> the input <span class="m"><span class="c1"><i>x</i></span></span> itself grows without bound, and the outputs may settle on a <span class="c4">horizontal asymptote</span>.`,
  plain: `<p>Put <span class="m"><span class="c1"><i>x</i></span> = 2.01</span> into <span class="m">1/(<i>x</i> − 2)</span> and you get 100. At 2.001 you get 1000, at 2.0001 you get 10 000. The closer <span class="m"><span class="c1"><i>x</i></span></span> comes to 2 from the right, the larger the output, with no ceiling. We write <span class="m"><span class="c5">lim<sub><i>x</i>→2<sup>+</sup></sub> 1/(<i>x</i> − 2) = ∞</span></span>. From the left the denominator is a tiny negative number, so the outputs run off to <span class="m">−∞</span>.</p>
<p>The symbol ∞ is not a number you reach. Writing "the limit is ∞" is a precise way of saying the limit does not exist, and saying how it fails: the outputs grow past every bound.</p>
<p>Now let <span class="m"><span class="c1"><i>x</i></span></span> itself grow. For <span class="m">(3<i>x</i><sup>2</sup> − <i>x</i> + 1)/(<i>x</i><sup>2</sup> + 4)</span> at <span class="m"><i>x</i> = 1000</span>, the <span class="m">3<i>x</i><sup>2</sup></span> on top and the <span class="m"><i>x</i><sup>2</sup></span> below swamp everything else, and the value is about 2.999. As <span class="m"><span class="c1"><i>x</i></span></span> keeps growing the output settles on <span class="c5">3</span>, and the line <span class="m"><span class="c4"><i>y</i> = 3</span></span> is a horizontal asymptote.</p>`,
  formal: `<p>We write <span class="m"><span class="c5">lim<sub><i>x</i>→<i>a</i><sup>+</sup></sub> <i>f</i>(<i>x</i>) = ∞</span></span> if <span class="m"><i>f</i>(<i>x</i>)</span> can be made larger than any number by taking <span class="m"><i>x</i></span> close enough to <span class="m"><i>a</i></span> on the right; <span class="m">−∞</span> and the left-hand side are defined the same way. If at least one one-sided limit at <span class="m"><i>a</i></span> is <span class="m">∞</span> or <span class="m">−∞</span>, the line <span class="m"><span class="c4"><i>x</i> = <i>a</i></span></span> is a <b>vertical asymptote</b>. We write <span class="m"><span class="c5">lim<sub><i>x</i>→∞</sub> <i>f</i>(<i>x</i>) = <i>L</i></span></span> if <span class="m"><i>f</i>(<i>x</i>)</span> can be made as close to <span class="m"><i>L</i></span> as we like by taking <span class="m"><i>x</i></span> large enough; then <span class="m"><span class="c4"><i>y</i> = <i>L</i></span></span> is a <b>horizontal asymptote</b> (likewise for <span class="m"><i>x</i> → −∞</span>).</p>
<div class="display">lim<sub><i>x</i>→0<sup>+</sup></sub> 1/<i>x</i> = ∞, &nbsp; lim<sub><i>x</i>→0<sup>−</sup></sub> 1/<i>x</i> = −∞, &nbsp; lim<sub><i>x</i>→0</sub> 1/<i>x</i><sup>2</sup> = ∞<br>lim<sub><i>x</i>→±∞</sub> 1/<i>x</i><sup><i>n</i></sup> = 0 &nbsp;(<i>n</i> &gt; 0)<br>lim<sub><i>x</i>→∞</sub> <i>e</i><sup><i>x</i></sup> = ∞, &nbsp; lim<sub><i>x</i>→−∞</sub> <i>e</i><sup><i>x</i></sup> = 0, &nbsp; lim<sub><i>x</i>→∞</sub> <i>e</i><sup>−<i>x</i></sup> = 0<br>lim<sub><i>x</i>→∞</sub> ln <i>x</i> = ∞, &nbsp; lim<sub><i>x</i>→0<sup>+</sup></sub> ln <i>x</i> = −∞</div>
<p>For a rational function <span class="m"><i>f</i> = <span class="c2"><i>p</i></span>/<span class="c3"><i>q</i></span></span> with <span class="c2">deg <i>p</i> = <i>n</i></span>, leading coefficient <span class="m"><span class="c2"><i>a</i><sub><i>n</i></sub></span></span>, and <span class="c3">deg <i>q</i> = <i>m</i></span>, leading coefficient <span class="m"><span class="c3"><i>b</i><sub><i>m</i></sub></span></span>, divide every term by <span class="m"><i>x</i><sup><i>m</i></sup></span> and use <span class="m">1/<i>x</i><sup><i>k</i></sup> → 0</span>. If <span class="m"><i>n</i> &lt; <i>m</i></span> the limit at <span class="m">±∞</span> is <span class="c5">0</span>. If <span class="m"><i>n</i> = <i>m</i></span> it is <span class="m"><span class="c5"><i>a</i><sub><i>n</i></sub>/<i>b</i><sub><i>m</i></sub></span></span>. If <span class="m"><i>n</i> &gt; <i>m</i></span> it is <span class="m">±∞</span>, with the sign of <span class="m">(<i>a</i><sub><i>n</i></sub>/<i>b</i><sub><i>m</i></sub>)<i>x</i><sup><i>n</i>−<i>m</i></sup></span>: for example <span class="m">(<i>x</i><sup>2</sup> + 1)/(<i>x</i> − 1) → ∞</span> as <span class="m"><i>x</i> → ∞</span> and <span class="m">→ −∞</span> as <span class="m"><i>x</i> → −∞</span>. A polynomial behaves like its leading term at <span class="m">±∞</span>, so <span class="m">lim<sub><i>x</i>→∞</sub> (−2<i>x</i><sup>3</sup> + <i>x</i>) = −∞</span> and <span class="m">lim<sub><i>x</i>→−∞</sub> (−2<i>x</i><sup>3</sup> + <i>x</i>) = ∞</span>.</p>`,
  legend: [
    { c: "c1", sym: `<i>x</i>`, name: "Moving input", desc: "The trace point you pull toward ±∞, or the points you slide toward x = a." },
    { c: "c2", sym: `<i>p</i>(<i>x</i>)`, name: "Numerator", desc: "Its degree n and leading coefficient; its sign near a decides +∞ or −∞." },
    { c: "c3", sym: `<i>q</i>(<i>x</i>)`, name: "Denominator", desc: "Its degree m sets the power you divide by; its zeros give vertical asymptotes." },
    { c: "c4", sym: `<i>x</i> = <i>a</i>, <i>y</i> = <i>L</i>`, name: "Asymptotes", desc: "Vertical where an infinite limit occurs, horizontal where a limit at infinity is finite." },
    { c: "c5", sym: `lim`, name: "Limit", desc: "A number L, or ∞ / −∞ to say how the outputs grow without bound." },
  ],
  steps: {
    title: "How to find infinite limits and limits at infinity",
    items: [
      "Factor the numerator and denominator and cancel common factors. A factor that cancels completely gives a hole, not an asymptote.",
      "For <span class=\"m\"><i>x</i> → <i>a</i></span> where the reduced denominator is 0 and the numerator is not, the one-sided limits are <span class=\"m\">∞</span> or <span class=\"m\">−∞</span>.",
      "Find each sign from the factors: just left and just right of <span class=\"m\"><i>a</i></span>, mark each factor + or −. An even power is positive on both sides.",
      "For <span class=\"m\"><i>x</i> → ±∞</span>, divide every term of the numerator and denominator by <span class=\"m\"><i>x</i><sup><i>m</i></sup></span>, the highest power in the denominator.",
      "Let every term <span class=\"m\"><i>c</i>/<i>x</i><sup><i>k</i></sup></span> go to 0 and read the limit. A finite limit <span class=\"m\"><i>L</i></span> gives the horizontal asymptote <span class=\"m\"><i>y</i> = <i>L</i></span>.",
      "For <span class=\"m\"><i>x</i> → −∞</span>, check odd powers: <span class=\"m\"><i>x</i><sup>3</sup></span> is negative there, <span class=\"m\"><i>x</i><sup>2</sup></span> is positive.",
    ],
  },
  example: {
    prompt: `Find the one-sided limits of <span class="m"><i>f</i>(<i>x</i>) = <span class="fr"><span class="c2"><i>x</i> − 1</span><span class="c3"><i>x</i><sup>2</sup> − 4</span></span></span> at each vertical asymptote, and its limits as <span class="m"><i>x</i> → ±∞</span>.`,
    lines: [
      { math: `<span class="m"><i>f</i>(<i>x</i>) = <span class="fr"><span class="c2"><i>x</i> − 1</span><span class="c3">(<i>x</i> − 2)(<i>x</i> + 2)</span></span></span>`, note: "Factor. No factor is shared, so x = 2 and x = −2 are vertical asymptotes." },
      { math: `<span class="m"><i>x</i> → 2<sup>−</sup>: &nbsp;<span class="fr"><span class="c2">1</span><span class="c3">(0<sup>−</sup>)(4)</span></span> ⇒ <span class="c5">−∞</span></span>`, note: "Just left of 2: the numerator is near 1, x − 2 is a tiny negative number, x + 2 is near 4." },
      { math: `<span class="m"><i>x</i> → 2<sup>+</sup>: &nbsp;<span class="fr"><span class="c2">1</span><span class="c3">(0<sup>+</sup>)(4)</span></span> ⇒ <span class="c5">∞</span></span>`, note: "Just right of 2 only the sign of x − 2 changes." },
      { math: `<span class="m"><i>x</i> → −2<sup>−</sup>: &nbsp;<span class="fr"><span class="c2">−3</span><span class="c3">(−4)(0<sup>−</sup>)</span></span> ⇒ <span class="c5">−∞</span></span>`, note: "The denominator is a tiny positive number and the numerator is negative." },
      { math: `<span class="m"><i>x</i> → −2<sup>+</sup>: &nbsp;<span class="fr"><span class="c2">−3</span><span class="c3">(−4)(0<sup>+</sup>)</span></span> ⇒ <span class="c5">∞</span></span>`, note: "Now the denominator is a tiny negative number: negative over negative." },
      { math: `<span class="m"><i>f</i>(<i>x</i>) = <span class="fr"><span class="c2">1/<i>x</i> − 1/<i>x</i><sup>2</sup></span><span class="c3">1 − 4/<i>x</i><sup>2</sup></span></span> → <span class="fr"><span>0</span><span>1</span></span> = <span class="c5">0</span></span>`, note: "Divide every term by x squared, the highest power in the denominator. Both directions give 0." },
    ],
    answer: `<span class="m"><span class="c5">lim<sub><i>x</i>→2<sup>−</sup></sub> <i>f</i> = −∞</span></span>, <span class="m"><span class="c5">lim<sub><i>x</i>→2<sup>+</sup></sub> <i>f</i> = ∞</span></span>, <span class="m"><span class="c5">lim<sub><i>x</i>→−2<sup>−</sup></sub> <i>f</i> = −∞</span></span>, <span class="m"><span class="c5">lim<sub><i>x</i>→−2<sup>+</sup></sub> <i>f</i> = ∞</span></span> and <span class="m"><span class="c5">lim<sub><i>x</i>→±∞</sub> <i>f</i> = 0</span></span>. Vertical asymptotes <span class="m"><span class="c4"><i>x</i> = ±2</span></span>, horizontal asymptote <span class="m"><span class="c4"><i>y</i> = 0</span></span>.`,
  },
  why: `<p>Long-run behaviour is often the question a model is built to answer. A drug concentration that levels off at a horizontal asymptote is a steady state; a capacitor's voltage approaches the supply voltage as time goes to infinity; average cost per item falls toward a floor as production grows. Each is a limit at infinity.</p>
<p>Infinite limits mark where a model breaks down: a lens equation as the object nears the focal point, a resonance as the driving frequency nears the natural one, a cost formula as capacity nears 100 %. In calculus both kinds of limit are used to sketch curves, to compare growth rates, and to define integrals over infinite intervals.</p>`,
  careers: [
    { role: "Pharmacologist", use: "Reads the steady-state concentration of a repeated or continuous dose as the limit of a concentration model as time grows." },
    { role: "Electrical engineer", use: "Finds the final voltage or current of a circuit as t → ∞ and the time constants that govern how fast it gets there." },
    { role: "Control systems engineer", use: "Uses the limit of a system's response as t → ∞ to check that a controller settles at the target with no steady-state error." },
    { role: "Software engineer", use: "Compares algorithms by how their running times grow as the input size goes to infinity, the idea behind big-O notation." },
    { role: "Economist", use: "Models long-run average cost and growth paths that approach an equilibrium level as output or time grows." },
    { role: "Optical engineer", use: "Locates where the image distance of a lens blows up as the object approaches the focal point." },
  ],
  life: [
    "Hot coffee cools toward room temperature but never quite reaches it",
    "The cost per ticket of a chartered bus falls toward a floor as more riders share it",
    "A phone battery charges quickly at first and then creeps toward 100 %",
    "Standing closer and closer to a lamp, the light on your face gets brighter without a ceiling in the simple inverse-square model",
    "A rumour spreads fast and then levels off once almost everyone has heard it",
  ],
  fields: [
    { name: "Calculus", use: "Curve sketching, comparing growth rates, L'Hôpital's rule and improper integrals all rest on limits involving infinity." },
    { name: "Physics", use: "Potential energy goes to 0 as distance goes to infinity, which defines escape speed." },
    { name: "Computer science", use: "Asymptotic analysis compares algorithms by the limit of the ratio of their running times." },
    { name: "Pharmacology", use: "Concentration and dose-response curves level off at horizontal asymptotes." },
  ],
  prereqWhy: {
    "pc-limits-graph": "One-sided limits and limits that fail by growing without bound were read from graphs and tables there; here they get the symbols ∞ and −∞ and exact rules.",
    "a2-rational-asym": "Comparing degrees for horizontal asymptotes is the rule this topic proves, by dividing by the highest power and letting x go to infinity.",
    "a2-exp-func": "The graphs of eˣ and e⁻ˣ supply the basic limits at ±∞ of exponential growth and decay.",
  },
  unlocksWhy: {},
  beyond: [
    { field: "Calculus I", why: "Limits at infinity give horizontal asymptotes in curve sketching, and L'Hôpital's rule settles the forms ∞/∞ and 0/0." },
    { field: "Calculus II", why: "Improper integrals and the convergence of infinite series are limits as a bound or an index goes to infinity." },
    { field: "Differential Equations", why: "The long-run behaviour of a solution, such as approach to an equilibrium, is its limit as t → ∞." },
    { field: "Discrete Mathematics", why: "Big-O and big-Θ compare the growth of functions with limits of ratios as n → ∞." },
  ],
  mistakes: [
    { wrong: `"The limit is ∞, so the limit exists."`, fix: `∞ is not a real number. <span class="m">lim<sub><i>x</i>→2<sup>+</sup></sub> 1/(<i>x</i> − 2) = ∞</span> says the limit does not exist because the outputs grow without bound.` },
    { wrong: `"Top and bottom both go to ∞, so <span class="m">(<i>x</i><sup>2</sup> + 1)/(<i>x</i> − 1)</span> goes to 1."`, fix: `∞/∞ is not a value. Divide by <span class="m"><i>x</i></span>: <span class="m">(<i>x</i> + 1/<i>x</i>)/(1 − 1/<i>x</i>)</span> grows without bound, so the limit at ∞ is ∞.` },
    { wrong: `Taking the sign of an infinite limit from the denominator alone: "<span class="m">(<i>x</i> − 3)/(<i>x</i> − 2) → ∞</span> as <span class="m"><i>x</i> → 2<sup>+</sup></span>, because <span class="m"><i>x</i> − 2 &gt; 0</span>."`, fix: `The numerator is near −1 there, so the quotient is negative and the limit is <span class="m">−∞</span>. Mark every factor's sign.` },
    { wrong: `Assuming the limits at ∞ and −∞ always agree.`, fix: `<span class="m"><i>e</i><sup><i>x</i></sup> → ∞</span> as <span class="m"><i>x</i> → ∞</span> but <span class="m">→ 0</span> as <span class="m"><i>x</i> → −∞</span>; and when <span class="m"><i>n</i> − <i>m</i></span> is odd a rational function goes to opposite infinities at the two ends.` },
  ],
  practice: [
    { q: `Find <span class="m">lim<sub><i>x</i>→∞</sub> <span class="fr"><span>4<i>x</i><sup>3</sup> − <i>x</i></span><span>2<i>x</i><sup>3</sup> + 7</span></span></span>.`, a: `Divide by <span class="m"><i>x</i><sup>3</sup></span>: <span class="m">(4 − 1/<i>x</i><sup>2</sup>)/(2 + 7/<i>x</i><sup>3</sup>) → 4/2 = 2</span>. Horizontal asymptote <span class="m"><i>y</i> = 2</span>.` },
    { q: `Find <span class="m">lim<sub><i>x</i>→−∞</sub> <span class="fr"><span>2<i>x</i><sup>2</sup> + 1</span><span>3 − <i>x</i></span></span></span>.`, a: `Divide by <span class="m"><i>x</i></span>: <span class="m">(2<i>x</i> + 1/<i>x</i>)/(3/<i>x</i> − 1)</span>. As <span class="m"><i>x</i> → −∞</span> the top goes to <span class="m">−∞</span> and the bottom to <span class="m">−1</span>, so the limit is <span class="m">∞</span>. (As <span class="m"><i>x</i> → ∞</span> it is <span class="m">−∞</span>.)` },
    { q: `Find <span class="m">lim<sub><i>x</i>→3<sup>−</sup></sub></span>, <span class="m">lim<sub><i>x</i>→3<sup>+</sup></sub></span> and <span class="m">lim<sub><i>x</i>→3</sub></span> of <span class="m"><span class="fr"><span><i>x</i> + 1</span><span>(<i>x</i> − 3)<sup>2</sup></span></span></span>.`, a: `The numerator is near 4 and <span class="m">(<i>x</i> − 3)<sup>2</sup></span> is a tiny positive number on both sides, so all three are <span class="m">∞</span>. The line <span class="m"><i>x</i> = 3</span> is a vertical asymptote.` },
    { q: `Find <span class="m">lim<sub><i>x</i>→∞</sub></span> and <span class="m">lim<sub><i>x</i>→−∞</sub></span> of <span class="m"><span class="fr"><span>3<i>e</i><sup><i>x</i></sup> + 2</span><span><i>e</i><sup><i>x</i></sup> − 1</span></span></span>.`, a: `As <span class="m"><i>x</i> → ∞</span> divide by <span class="m"><i>e</i><sup><i>x</i></sup></span>: <span class="m">(3 + 2<i>e</i><sup>−<i>x</i></sup>)/(1 − <i>e</i><sup>−<i>x</i></sup>) → 3</span>. As <span class="m"><i>x</i> → −∞</span>, <span class="m"><i>e</i><sup><i>x</i></sup> → 0</span>, so the quotient goes to <span class="m">2/(−1) = −2</span>. Two horizontal asymptotes: <span class="m"><i>y</i> = 3</span> and <span class="m"><i>y</i> = −2</span>.` },
  ],
  origin: `<p>John Wallis introduced the symbol ∞ in <i>De sectionibus conicis</i> (1655). Augustin-Louis Cauchy's <i>Cours d'analyse</i> (1821) treated infinitely large and infinitely small quantities as variables that grow or shrink without bound, the idea behind today's infinite limits and limits at infinity. The arrow notation <span class="m"><i>x</i> → ∞</span> was introduced by J. G. Leathem in 1905 and spread through G. H. Hardy's <i>A Course of Pure Mathematics</i> (1908).</p>`,
};
