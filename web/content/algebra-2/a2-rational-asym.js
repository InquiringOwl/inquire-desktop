window.ARITH = window.ARITH || {};

ARITH["a2-rational-asym"] = {
  title: "Horizontal & Slant Asymptotes; Graphing Rational Functions",
  short: "Compare degrees for the end behaviour, then graph it all",
  grade: "Grade 11 · college Intermediate Algebra",
  hours: 6,
  voice: "plain",
  eyebrow: "Rational functions · end behaviour and full graphs",
  hero: `<span class="m"><span class="c2"><i>f</i>(<i>x</i>)</span> = <span class="fr"><span>2<i>x</i><sup>2</sup> − 2<i>x</i> − 4</span><span><i>x</i><sup>2</sup> − 9</span></span> &nbsp;⇒&nbsp; <span class="c4"><i>y</i> = <span class="fr"><span>2</span><span>1</span></span> = 2</span></span>`,
  lede: `Far from the origin a rational function settles along a line. Compare the degrees of the numerator and the denominator: that one comparison tells you whether the graph levels off at a <span class="c4">horizontal asymptote</span>, follows a <span class="c4">slant asymptote</span>, or neither.`,
  plain: `<p>When <span class="m"><i>x</i></span> is huge, say a million, only the highest power on top and on the bottom matters. In <span class="m">(2<i>x</i><sup>2</sup> − 2<i>x</i> − 4)/(<i>x</i><sup>2</sup> − 9)</span> the lower terms are tiny next to <span class="m">2<i>x</i><sup>2</sup></span> and <span class="m"><i>x</i><sup>2</sup></span>, so the fraction is close to <span class="m">2<i>x</i><sup>2</sup>/<i>x</i><sup>2</sup> = 2</span>. The graph flattens out along the line <span class="m"><i>y</i> = 2</span>.</p>
<p>If the bottom has the higher degree, the bottom wins and the fraction shrinks toward 0. If the top is one degree higher, the fraction grows, but in a straight-line way: dividing the polynomials gives a linear part plus a small leftover fraction, and the graph hugs that line.</p>
<p>An asymptote like this only describes the far left and far right. In the middle the graph is free to cross it, and often does. Only vertical asymptotes can never be crossed, because the function is undefined there.</p>
<p>To graph a rational function, collect everything: holes, <span class="c3">vertical asymptotes</span>, the horizontal or slant asymptote, the <span class="c5">intercepts</span>, and the sign of the function between the special <span class="m"><i>x</i></span>-values. Then sketch the curve through what you found.</p>`,
  formal: `<p>Let <span class="m"><i>f</i>(<i>x</i>) = <i>p</i>(<i>x</i>)/<i>q</i>(<i>x</i>)</span> be in lowest terms, with <span class="m"><i>p</i></span> of degree <span class="m"><i>n</i></span> and leading coefficient <span class="m"><i>a</i><sub><i>n</i></sub></span>, and <span class="m"><i>q</i></span> of degree <span class="m"><i>m</i></span> and leading coefficient <span class="m"><i>b</i><sub><i>m</i></sub></span>.</p>
<div class="display"><i>n</i> &lt; <i>m</i> &nbsp;⇒&nbsp; <span class="c4">horizontal asymptote <i>y</i> = 0</span><br><i>n</i> = <i>m</i> &nbsp;⇒&nbsp; <span class="c4">horizontal asymptote <i>y</i> = <i>a</i><sub><i>n</i></sub>/<i>b</i><sub><i>m</i></sub></span><br><i>n</i> = <i>m</i> + 1 &nbsp;⇒&nbsp; <span class="c4">slant asymptote <i>y</i> = <i>Q</i>(<i>x</i>)</span>, &nbsp;where <i>p</i> = <i>Q</i> · <i>q</i> + <i>R</i>, deg <i>R</i> &lt; <i>m</i><br><i>n</i> &gt; <i>m</i> + 1 &nbsp;⇒&nbsp; no horizontal or slant asymptote</div>
<p>In the slant case <span class="m"><i>f</i>(<i>x</i>) − <i>Q</i>(<i>x</i>) = <i>R</i>(<i>x</i>)/<i>q</i>(<i>x</i>)</span>, which tends to 0 as <span class="m"><i>x</i> → ±∞</span>, so the graph approaches the line <span class="m"><i>y</i> = <i>Q</i>(<i>x</i>)</span>. The graph crosses the horizontal or slant asymptote exactly where <span class="m"><i>R</i>(<i>x</i>) = 0</span> in the domain; for <span class="m"><i>n</i> &lt; <i>m</i></span> that means at the zeros of <span class="m"><i>p</i></span>. When <span class="m"><i>n</i> &gt; <i>m</i> + 1</span> the end behaviour follows the polynomial quotient <span class="m"><i>Q</i></span>.</p>
<p>A <span class="c2">rational function</span> can change sign only at a zero of its numerator or its denominator. These <b>critical values</b> split the domain into intervals, and one test value in each interval gives the sign of <span class="m"><i>f</i></span> on the whole interval. The signs next to each <span class="c3">vertical asymptote</span> tell you whether the curve goes up or down there.</p>`,
  legend: [
    { c: "c2", sym: `<i>f</i>(<i>x</i>)`, name: "Rational function", desc: "The curve itself, a polynomial over a polynomial, in lowest terms." },
    { c: "c4", sym: `<i>y</i> = <i>L</i>`, name: "Horizontal or slant asymptote", desc: "The line the graph approaches as x → ±∞. It may be crossed in the middle of the graph." },
    { c: "c3", sym: `<i>x</i> = <i>a</i>`, name: "Vertical asymptote", desc: "A zero of the reduced denominator. The graph never crosses it." },
    { c: "c5", sym: `(<i>x</i>, 0), (0, <i>y</i>)`, name: "Intercepts", desc: "Zeros of the reduced numerator in the domain, and f(0) when 0 is in the domain." }
  ],
  steps: {
    title: "How to graph a rational function",
    items: [
      `Factor the numerator and denominator. State the domain and cancel common factors; each factor that cancels completely gives a hole.`,
      `Find the <span class="c3">vertical asymptotes</span> from the zeros of the reduced denominator.`,
      `Compare degrees for the <span class="c4">horizontal or slant asymptote</span>; for a slant asymptote, divide the polynomials and keep the quotient.`,
      `Find the <span class="c5">intercepts</span>: zeros of the reduced numerator, and <span class="m"><i>f</i>(0)</span>.`,
      `Solve <span class="m"><i>f</i>(<i>x</i>) = <i>L</i></span> (or <span class="m"><i>R</i>(<i>x</i>) = 0</span> for a slant asymptote) to see where the graph crosses the horizontal or slant asymptote.`,
      `Mark all zeros and vertical asymptotes on a number line, test one value in each interval, and sketch the curve through the points, following the asymptotes.`
    ]
  },
  example: {
    prompt: `Graph <span class="m"><span class="c2"><i>f</i>(<i>x</i>)</span> = <span class="fr"><span>2<i>x</i><sup>2</sup> − 2<i>x</i> − 4</span><span><i>x</i><sup>2</sup> − 9</span></span></span>: find its asymptotes, intercepts, where it crosses the horizontal asymptote, and its sign on each interval.`,
    lines: [
      { math: `<span class="m"><span class="c2"><i>f</i>(<i>x</i>)</span> = <span class="fr"><span>2(<i>x</i> − 2)(<i>x</i> + 1)</span><span>(<i>x</i> − 3)(<i>x</i> + 3)</span></span></span>`, note: "Factor. No factor is shared, so there are no holes; the domain excludes x = ±3." },
      { math: `<span class="m"><span class="c3"><i>x</i> = −3</span>, &nbsp;<span class="c3"><i>x</i> = 3</span></span>`, note: "Both denominator factors remain, so both give vertical asymptotes." },
      { math: `<span class="m"><i>n</i> = <i>m</i> = 2 &nbsp;⇒&nbsp; <span class="c4"><i>y</i> = <span class="fr"><span>2</span><span>1</span></span> = 2</span></span>`, note: "Equal degrees: the horizontal asymptote is the ratio of leading coefficients." },
      { math: `<span class="m"><span class="c5">(−1, 0), (2, 0)</span>, &nbsp; <i>f</i>(0) = <span class="fr"><span>−4</span><span>−9</span></span> = <span class="c5"><span class="fr"><span>4</span><span>9</span></span></span></span>`, note: "x-intercepts from the numerator; y-intercept (0, 4/9)." },
      { math: `<span class="m">2<i>x</i><sup>2</sup> − 2<i>x</i> − 4 = 2(<i>x</i><sup>2</sup> − 9) &nbsp;⇒&nbsp; −2<i>x</i> = −14 &nbsp;⇒&nbsp; <i>x</i> = 7</span>`, note: "Set f(x) = 2. The graph crosses its horizontal asymptote at (7, 2) and then approaches it from below." },
      { math: `<span class="m"><i>f</i>(−4) = <span class="fr"><span>36</span><span>7</span></span>, &nbsp;<i>f</i>(−2) = −<span class="fr"><span>8</span><span>5</span></span>, &nbsp;<i>f</i>(0) = <span class="fr"><span>4</span><span>9</span></span>, &nbsp;<i>f</i>(<span class="fr"><span>5</span><span>2</span></span>) = −<span class="fr"><span>14</span><span>11</span></span>, &nbsp;<i>f</i>(4) = <span class="fr"><span>20</span><span>7</span></span></span>`, note: "One test value in each interval between the critical values −3, −1, 2, 3: signs +, −, +, −, +." },
      { math: `<span class="m"><i>x</i> → −3<sup>−</sup>: ∞, &nbsp;<i>x</i> → −3<sup>+</sup>: −∞, &nbsp;<i>x</i> → 3<sup>−</sup>: −∞, &nbsp;<i>x</i> → 3<sup>+</sup>: ∞</span>`, note: "The signs beside each vertical asymptote tell which way each branch goes." }
    ],
    answer: `<span class="c3">Vertical asymptotes <span class="m"><i>x</i> = ±3</span></span>, <span class="c4">horizontal asymptote <span class="m"><i>y</i> = 2</span></span> (crossed at <span class="m">(7, 2)</span>), <span class="c5">intercepts <span class="m">(−1, 0), (2, 0), (0, <span class="fr"><span>4</span><span>9</span></span>)</span></span>; positive on <span class="m">(−∞, −3) ∪ (−1, 2) ∪ (3, ∞)</span>, negative on <span class="m">(−3, −1) ∪ (2, 3)</span>.`
  },
  why: `<p>End behaviour is the long-run answer a model gives. A drug concentration model that levels off at a horizontal asymptote predicts a steady state; an average-cost curve that approaches a horizontal asymptote shows the lowest cost per item that mass production can reach. A slant asymptote says the quantity keeps growing at a steady rate once the startup effects have faded.</p>
<p>The full graphing procedure is also a habit of mind: before trusting a picture from a calculator, which can draw false vertical lines and hide holes, you list the features a graph must have and check that the picture shows them.</p>`,
  careers: [
    { role: "Pharmacokineticist", use: "Reads the horizontal asymptote of a concentration model as the steady-state level a repeated dose approaches." },
    { role: "Manufacturing cost analyst", use: "Finds the horizontal asymptote of average cost (F + vx)/x, the variable cost v that unit cost approaches at large volume." },
    { role: "Control systems engineer", use: "Compares numerator and denominator degrees of a transfer function to predict its response at high frequency." },
    { role: "Ecologist", use: "Fits saturating rational models such as a·N/(b + N) and reads the asymptote a as the maximum feeding or growth rate." },
    { role: "Actuary", use: "Uses rational approximations of mortality and rate curves and checks their long-run limits before applying them." },
    { role: "Computer graphics programmer", use: "Works with rational curves and perspective division x/z, whose behaviour near z = 0 and at large z must be controlled." }
  ],
  life: [
    "The cost per ticket for a bus hire falls toward a floor as more passengers share it",
    "A cup of tea cools toward room temperature, a level it approaches but does not pass",
    "Average speed over a trip with a long stop approaches the moving speed as the trip gets longer",
    "Batting or shooting averages settle down as the number of attempts grows"
  ],
  fields: [
    { name: "Pharmacology", use: "Concentration and dose-response models are rational functions with a horizontal asymptote at the maximum effect." },
    { name: "Economics", use: "Average cost and average revenue curves level off at horizontal asymptotes." },
    { name: "Biology", use: "Michaelis-Menten and Holling type II models saturate at a horizontal asymptote." },
    { name: "Engineering", use: "Frequency response of filters is read from the degrees of the transfer function's numerator and denominator." }
  ],
  prereqWhy: {
    "a2-rational-func": "Holes and vertical asymptotes come first; this topic adds end behaviour and puts all the features together into one graph.",
    "a1-poly-div": "A slant asymptote is the quotient of polynomial long division, and the remainder shows where the graph crosses it."
  },
  unlocksWhy: {
    "a2-rational-ineq": "Solving a rational inequality uses the same sign chart, with the zeros of the numerator and denominator as critical values.",
    "pc-limits-graph": "Vertical asymptotes, holes and horizontal asymptotes are the three behaviours of a rational graph that a limit statement must describe, such as the limit being infinite at an asymptote and finite at a hole.",
    "pc-limits-infinity": "Comparing the degrees of numerator and denominator gives the horizontal asymptote, which is the limit of a rational function as <span class=\"m\"><i>x</i> → ±∞</span>, and the vertical asymptotes give the infinite limits."
  },
  beyond: [
    { field: "Calculus I", why: "Horizontal asymptotes are limits at infinity, and slant asymptotes are found the same way; curve sketching adds increasing, decreasing and concavity to this procedure." },
    { field: "Precalculus", why: "Partial fraction decomposition and the analysis of rational models build on the division used for slant asymptotes." },
    { field: "Economics", why: "Long-run average cost and saturation effects are read from the end behaviour of rational models." }
  ],
  mistakes: [
    { wrong: `Using the ratio of leading coefficients when the degrees differ: saying <span class="m"><span class="fr"><span>3<i>x</i> + 1</span><span><i>x</i><sup>2</sup> + 4</span></span></span> has horizontal asymptote <span class="m"><i>y</i> = 3</span>.`, fix: `The denominator has the higher degree, so the fraction tends to 0. The horizontal asymptote is <span class="m"><i>y</i> = 0</span>.` },
    { wrong: `Believing a graph can never cross its horizontal asymptote.`, fix: `Only vertical asymptotes are never crossed. <span class="m"><span class="fr"><span>2<i>x</i><sup>2</sup> − 2<i>x</i> − 4</span><span><i>x</i><sup>2</sup> − 9</span></span></span> equals 2 at <span class="m"><i>x</i> = 7</span>, on its horizontal asymptote <span class="m"><i>y</i> = 2</span>.` },
    { wrong: `Taking the slant asymptote from the leading terms alone: <span class="m"><span class="fr"><span><i>x</i><sup>2</sup> + 3<i>x</i> − 1</span><span><i>x</i> − 2</span></span></span> has slant asymptote <span class="m"><i>y</i> = <i>x</i></span>.`, fix: `Divide fully: <span class="m"><i>x</i><sup>2</sup> + 3<i>x</i> − 1 = (<i>x</i> − 2)(<i>x</i> + 5) + 9</span>, so the slant asymptote is <span class="m"><i>y</i> = <i>x</i> + 5</span>.` },
    { wrong: `Finding asymptotes before reducing: saying <span class="m"><span class="fr"><span><i>x</i><sup>2</sup> − 1</span><span><i>x</i> − 1</span></span></span> has slant asymptote <span class="m"><i>y</i> = <i>x</i> + 1</span> and a vertical asymptote at <span class="m"><i>x</i> = 1</span>.`, fix: `It reduces to <span class="m"><i>x</i> + 1</span> for <span class="m"><i>x</i> ≠ 1</span>. The graph is the line itself with a hole at <span class="m">(1, 2)</span>, and there is no asymptote.` }
  ],
  practice: [
    { q: `Find the horizontal asymptote of <span class="m"><i>f</i>(<i>x</i>) = <span class="fr"><span>3<i>x</i> + 1</span><span><i>x</i><sup>2</sup> + 4</span></span></span>. Does the graph cross it?`, a: `<span class="m"><i>n</i> = 1 &lt; <i>m</i> = 2</span>, so <span class="m"><i>y</i> = 0</span>. It crosses where <span class="m">3<i>x</i> + 1 = 0</span>, at <span class="m">(−<span class="fr"><span>1</span><span>3</span></span>, 0)</span>.` },
    { q: `Find the horizontal asymptote of <span class="m"><i>g</i>(<i>x</i>) = <span class="fr"><span>6<i>x</i><sup>3</sup> − <i>x</i></span><span>2<i>x</i><sup>3</sup> + 5</span></span></span>.`, a: `Equal degrees <span class="m"><i>n</i> = <i>m</i> = 3</span>: <span class="m"><i>y</i> = <span class="fr"><span>6</span><span>2</span></span> = 3</span>.` },
    { q: `Find the slant and vertical asymptotes of <span class="m"><i>h</i>(<i>x</i>) = <span class="fr"><span><i>x</i><sup>2</sup> + 3<i>x</i> − 1</span><span><i>x</i> − 2</span></span></span>.`, a: `Synthetic division by 2: <span class="m"><i>x</i><sup>2</sup> + 3<i>x</i> − 1 = (<i>x</i> − 2)(<i>x</i> + 5) + 9</span>, so <span class="m"><i>h</i>(<i>x</i>) = <i>x</i> + 5 + <span class="fr"><span>9</span><span><i>x</i> − 2</span></span></span>. Slant asymptote <span class="m"><i>y</i> = <i>x</i> + 5</span>, vertical asymptote <span class="m"><i>x</i> = 2</span>.` },
    { q: `Graph <span class="m"><i>r</i>(<i>x</i>) = <span class="fr"><span><i>x</i><sup>2</sup> − <i>x</i> − 6</span><span><i>x</i> − 1</span></span></span>: give its asymptotes, intercepts and signs.`, a: `<span class="m"><i>r</i>(<i>x</i>) = <span class="fr"><span>(<i>x</i> − 3)(<i>x</i> + 2)</span><span><i>x</i> − 1</span></span> = <i>x</i> − <span class="fr"><span>6</span><span><i>x</i> − 1</span></span></span>. Vertical asymptote <span class="m"><i>x</i> = 1</span>, slant asymptote <span class="m"><i>y</i> = <i>x</i></span> (never crossed, since the remainder is −6). Intercepts <span class="m">(−2, 0), (3, 0), (0, 6)</span>. Negative on <span class="m">(−∞, −2) ∪ (1, 3)</span>, positive on <span class="m">(−2, 1) ∪ (3, ∞)</span>.` }
  ],
  origin: `<p>Slant and horizontal asymptotes of curves were studied in the 17th and 18th centuries. Newton classified cubic curves partly by their asymptotes in his <i>Enumeratio linearum tertii ordinis</i> (1704), and Euler's <i>Introductio in analysin infinitorum</i> (1748) treated the asymptotes of algebraic curves systematically. The step-by-step curve-sketching routine taught today became standard in calculus and precalculus textbooks in the 20th century.</p>`
};
