window.ARITH = window.ARITH || {};

ARITH["a2-exp-func"] = {
  title: "Exponential Functions & the Number e",
  short: "Graph a·bˣ⁻ʰ + k and meet the natural base e",
  grade: "Grade 11 · college Intermediate Algebra",
  hours: 5,
  voice: "plain",
  eyebrow: "Exponential and logarithmic functions · exponential functions",
  hero: `<span class="m"><span class="c2"><i>f</i>(<i>x</i>) = <span class="c1">2</span><sup><i>x</i></sup></span>, &nbsp; <span class="c4"><i>y</i> = 0</span>, &nbsp; (1 + 1/<i>n</i>)<sup><i>n</i></sup> → <span class="c3"><i>e</i> ≈ 2.71828</span></span>`,
  lede: `An <b>exponential function</b> <span class="m"><span class="c2"><i>f</i>(<i>x</i>) = <span class="c1"><i>b</i></span><sup><i>x</i></sup></span></span> multiplies by the same <span class="c1">base</span> every time <span class="m"><i>x</i></span> goes up by 1. Its graph hugs a <span class="c4">horizontal asymptote</span> on one side and shoots off on the other, and the most important base is the number <span class="c3"><i>e</i> ≈ 2.71828</span>.`,
  plain: `<p>In <span class="m"><i>x</i><sup>2</sup></span> the variable is the base. In <span class="m"><span class="c1">2</span><sup><i>x</i></sup></span> the variable is the exponent, and that changes everything. Each step of 1 in <span class="m"><i>x</i></span> doubles the output: 1, 2, 4, 8, 16. Each step back halves it: <span class="m">2<sup>−1</sup> = 1/2</span>, <span class="m">2<sup>−2</sup> = 1/4</span>. The outputs get closer and closer to 0 but never reach it, so the x-axis is a <span class="c4">horizontal asymptote</span>.</p>
<p>The base must be positive and not 1. A base above 1 gives growth; a base between 0 and 1, such as <span class="m">(1/2)<sup><i>x</i></sup></span>, gives decay, the same curve flipped left to right. Every graph <span class="m"><i>y</i> = <i>b</i><sup><i>x</i></sup></span> passes through <span class="m">(0, 1)</span> and <span class="m">(1, <i>b</i>)</span>. Stretching, reflecting and shifting it works exactly as for any parent function, and a vertical shift moves the asymptote with it.</p>
<p>The number <span class="c3"><i>e</i></span> comes from interest. Put $1 in an account paying 100% a year. Paid once, you end with $2. Split into 12 monthly payments of 1/12 each, you end with <span class="m">(1 + 1/12)<sup>12</sup> ≈ 2.613</span>. Daily gives about 2.7146. Paying more and more often never runs away: the totals level off at <span class="c3"><i>e</i> = 2.71828…</span>, the value of continuous growth.</p>`,
  formal: `<p>For a constant <span class="m"><span class="c1"><i>b</i></span> > 0</span>, <span class="m"><i>b</i> ≠ 1</span>, the <b>exponential function with base <i>b</i></b> is <span class="m"><span class="c2"><i>f</i>(<i>x</i>) = <span class="c1"><i>b</i></span><sup><i>x</i></sup></span></span>. Its domain is <span class="m">(−∞, ∞)</span>, its range is <span class="m">(0, ∞)</span>, its y-intercept is <span class="m">(0, 1)</span>, and the line <span class="m"><span class="c4"><i>y</i> = 0</span></span> is a horizontal asymptote. It is increasing if <span class="m"><i>b</i> > 1</span> and decreasing if <span class="m">0 < <i>b</i> < 1</span>; since <span class="m">(1/<i>b</i>)<sup><i>x</i></sup> = <i>b</i><sup>−<i>x</i></sup></span>, the two graphs are reflections in the y-axis. The transformed function</p>
<div class="display"><i>g</i>(<i>x</i>) = <i>a</i> · <span class="c1"><i>b</i></span><sup><i>x</i> − <i>h</i></sup> + <i>k</i> &nbsp;<span class="dim">has asymptote</span>&nbsp; <span class="c4"><i>y</i> = <i>k</i></span><br><span class="dim">range</span> (<i>k</i>, ∞) <span class="dim">if</span> <i>a</i> > 0, &nbsp; (−∞, <i>k</i>) <span class="dim">if</span> <i>a</i> < 0</div>
<p>The number <span class="m"><span class="c3"><i>e</i></span></span> is the limit of <span class="m">(1 + 1/<i>n</i>)<sup><i>n</i></sup></span> as <span class="m"><i>n</i> → ∞</span>: the values for <span class="m"><i>n</i> = 1, 12, 365, 10<sup>6</sup></span> are 2, 2.613035, 2.714567 and 2.718280, and <span class="m"><span class="c3"><i>e</i></span> = 2.718281828…</span> is irrational. The <b>natural exponential function</b> is <span class="m"><i>f</i>(<i>x</i>) = <span class="c3"><i>e</i></span><sup><i>x</i></sup></span>. Every exponential function is one-to-one, which gives the <b>one-to-one property</b>: <span class="m"><i>b</i><sup><i>x</i></sup> = <i>b</i><sup><i>y</i></sup> ⇒ <i>x</i> = <i>y</i></span>. To solve <span class="m">9<sup><i>x</i></sup> = 27</span>, write <span class="m">3<sup>2<i>x</i></sup> = 3<sup>3</sup></span>, so <span class="m"><i>x</i> = 3/2</span>.</p>`,
  legend: [
    { c: "c1", sym: `<i>b</i>`, name: "Base", desc: "The constant factor, b > 0 and b ≠ 1. Each step of 1 in x multiplies the output by b." },
    { c: "c2", sym: `<i>b</i><sup><i>x</i></sup>`, name: "Exponential curve", desc: "Passes through (0, 1) and (1, b); rises if b > 1, falls if 0 < b < 1." },
    { c: "c4", sym: `<i>y</i> = <i>k</i>`, name: "Horizontal asymptote", desc: "The line the curve approaches on one side. For bˣ it is y = 0; a vertical shift k moves it." },
    { c: "c3", sym: `<i>e</i>`, name: "The number e", desc: "e = lim (1 + 1/n)ⁿ ≈ 2.71828, the base of continuous growth." }
  ],
  steps: {
    title: "How to graph g(x) = a · bˣ⁻ʰ + k",
    items: [
      `Start from three points of the parent <span class="m"><span class="c1"><i>b</i></span><sup><i>x</i></sup></span>: <span class="m">(−1, 1/<i>b</i>)</span>, <span class="m">(0, 1)</span>, <span class="m">(1, <i>b</i>)</span>.`,
      `Map each point <span class="m">(<i>x</i>, <i>y</i>) → (<i>x</i> + <i>h</i>, <i>a</i><i>y</i> + <i>k</i>)</span>.`,
      `Draw the <span class="c4">asymptote</span> <span class="m"><i>y</i> = <i>k</i></span> as a dashed line.`,
      `Sketch the curve through the points, approaching the asymptote on the side where <span class="m"><i>b</i><sup><i>x</i> − <i>h</i></sup> → 0</span>.`,
      `State the domain <span class="m">(−∞, ∞)</span> and the range: <span class="m">(<i>k</i>, ∞)</span> if <span class="m"><i>a</i> > 0</span>, <span class="m">(−∞, <i>k</i>)</span> if <span class="m"><i>a</i> < 0</span>.`,
      `Find the intercepts: <span class="m"><i>g</i>(0)</span> for the y-intercept; solve <span class="m"><i>g</i>(<i>x</i>) = 0</span> with the one-to-one property when both sides are powers of one base.`
    ]
  },
  example: {
    prompt: `Graph <span class="m"><i>g</i>(<i>x</i>) = 3 · <span class="c1">2</span><sup><i>x</i> − 1</sup> − 6</span>. Give the asymptote, domain, range and both intercepts.`,
    lines: [
      { math: `<span class="m"><i>a</i> = 3, &nbsp;<span class="c1"><i>b</i> = 2</span>, &nbsp;<i>h</i> = 1, &nbsp;<i>k</i> = −6</span>`, note: "Read the parameters: stretch by 3, shift right 1 and down 6." },
      { math: `<span class="m">(−1, <span class="fr"><span>1</span><span>2</span></span>), (0, 1), (1, 2), (2, 4) &nbsp;→&nbsp; (0, −<span class="fr"><span>9</span><span>2</span></span>), (1, −3), (2, 0), (3, 6)</span>`, note: "Map each parent point (x, y) to (x + 1, 3y − 6)." },
      { math: `<span class="m"><span class="c4"><i>y</i> = −6</span></span>`, note: "The asymptote y = 0 of 2ˣ moves down 6. As x → −∞ the curve approaches it from above." },
      { math: `<span class="m">domain (−∞, ∞), &nbsp; range (−6, ∞)</span>`, note: "a = 3 > 0, so every output is above the asymptote." },
      { math: `<span class="m"><i>g</i>(0) = 3 · 2<sup>−1</sup> − 6 = −<span class="fr"><span>9</span><span>2</span></span></span>`, note: "The y-intercept is (0, −9/2)." },
      { math: `<span class="m">3 · 2<sup><i>x</i> − 1</sup> = 6 &nbsp;⇒&nbsp; 2<sup><i>x</i> − 1</sup> = 2<sup>1</sup> &nbsp;⇒&nbsp; <i>x</i> = 2</span>`, note: "For the x-intercept set g(x) = 0, then use the one-to-one property." }
    ],
    answer: `Asymptote <span class="m c4"><i>y</i> = −6</span>, domain <span class="m">(−∞, ∞)</span>, range <span class="m">(−6, ∞)</span>, y-intercept <span class="m">(0, −9/2)</span>, x-intercept <span class="m">(2, 0)</span>; the curve rises through <span class="m">(1, −3)</span> and <span class="m">(3, 6)</span>.`
  },
  why: `<p>Anything that changes by a fixed percentage per unit of time is exponential: money earning interest, a bacterial culture, a drug clearing from the blood, a radioactive sample, the number of people who have heard a rumour in its early days. A linear model adds the same amount each step. An exponential model multiplies, and the gap between the two grows without limit.</p>
<p>The base <span class="m"><i>e</i></span> appears whenever the change is continuous rather than in steps. That is why <span class="m"><i>A</i> = <i>Pe</i><sup><i>rt</i></sup></span> describes continuous interest, why population and decay laws use <span class="m"><i>e</i></span>, and why calculus treats <span class="m"><i>e</i><sup><i>x</i></sup></span> as the simplest exponential: its rate of change equals its own value.</p>`,
  careers: [
    { role: "Actuary", use: "Uses exponential growth and discounting to price insurance and pension payments decades ahead." },
    { role: "Epidemiologist", use: "Models the early spread of an outbreak as exponential growth and estimates its doubling time." },
    { role: "Pharmacologist", use: "Describes how a drug's concentration in the blood falls exponentially and sets the dosing interval." },
    { role: "Financial analyst", use: "Compares monthly, daily and continuous compounding with (1 + r/n)ⁿᵗ and eʳᵗ." },
    { role: "Nuclear engineer", use: "Tracks radioactive inventory in fuel and waste with exponential decay curves." },
    { role: "Microbiologist", use: "Fits bacterial growth curves to estimate how many generations a culture has gone through." }
  ],
  life: [
    "Watching a savings balance grow faster each year as interest earns interest",
    "Seeing a video's view count double every few hours after it goes viral",
    "Waiting for a cup of coffee to cool toward room temperature",
    "Reading how quickly caffeine leaves your body after a drink",
    "Comparing a loan offer quoted with monthly compounding to one with daily compounding"
  ],
  fields: [
    { name: "Biology", use: "Unchecked population growth and cell division follow exponential functions." },
    { name: "Chemistry", use: "First-order reactions and radioactive decay use the natural exponential e^(−kt)." },
    { name: "Economics", use: "Compound and continuous interest, inflation and present value are exponential." },
    { name: "Physics", use: "Capacitor discharge and Newton's law of cooling are shifted exponential functions." }
  ],
  prereqWhy: {
    "a1-exp-functions": "The starting point is y = abˣ from Algebra I: growth and decay, the initial value a and the growth factor b.",
    "a2-transformations": "The graph of a · bˣ⁻ʰ + k is the parent bˣ stretched and shifted, using the same point rule (x, y) → (x + h, ay + k)."
  },
  unlocksWhy: {
    "a2-logs": "The logarithm log_b x is the inverse of bˣ, so its graph is this curve reflected in y = x.",
    "a2-geom-series": "A geometric sequence a₁rⁿ⁻¹ is an exponential function sampled at whole numbers, and its sums use the same powers.",
    "trig-modeling": "Damped oscillation multiplies a sinusoid by a decaying exponential <span class=\"m\"><i>e</i><sup>−<i>ct</i></sup></span>, and the base and rate set how fast the swings shrink.",
    "pc-limits-infinity": "The limits of <i>e</i><sup><i>x</i></sup> and <i>e</i><sup>−<i>x</i></sup> as <span class=\"m\"><i>x</i> → ±∞</span> are read from the shape of the exponential graph, growing without bound one way and flattening to a horizontal asymptote at 0 the other."
  },
  beyond: [
    { field: "Calculus I", why: "The derivative of eˣ is eˣ, which makes e the natural base for growth rates and differential equations." },
    { field: "Statistics", why: "The normal distribution's bell curve is built from e to the power −x²/2." },
    { field: "Economics", why: "Continuous compounding and discounting use A = Pe^(rt) and its inverse." },
    { field: "Physics", why: "Radioactive decay, RC circuits and damped oscillations are written with e^(−t/τ)." }
  ],
  mistakes: [
    { wrong: `Giving the range of <span class="m"><i>g</i>(<i>x</i>) = 2<sup><i>x</i></sup> − 3</span> as <span class="m">(0, ∞)</span>.`, fix: `The shift moves the asymptote to <span class="m"><i>y</i> = −3</span>, so the range is <span class="m">(−3, ∞)</span>.` },
    { wrong: `Reasoning that <span class="m">(1 + 1/<i>n</i>)<sup><i>n</i></sup> → 1</span> because <span class="m">1 + 1/<i>n</i> → 1</span>.`, fix: `The exponent grows at the same time. The values rise: <span class="m"><i>n</i> = 1000</span> gives about 2.71692, and the limit is <span class="m"><i>e</i> ≈ 2.71828</span>.` },
    { wrong: `Treating <span class="m">(−2)<sup><i>x</i></sup></span> as an exponential function.`, fix: `A negative base fails for many inputs: <span class="m">(−2)<sup>1/2</sup> = √<span class="ov">−2</span></span> is not real. The base must be positive.` },
    { wrong: `Solving <span class="m">4<sup><i>x</i> − 1</sup> = 32</span> by setting <span class="m"><i>x</i> − 1 = 32/4</span>.`, fix: `The one-to-one property needs one base on both sides: <span class="m">2<sup>2<i>x</i> − 2</sup> = 2<sup>5</sup></span>, so <span class="m">2<i>x</i> − 2 = 5</span> and <span class="m"><i>x</i> = 7/2</span>.` }
  ],
  practice: [
    { q: `For <span class="m"><i>f</i>(<i>x</i>) = (1/3)<sup><i>x</i></sup></span>, find <span class="m"><i>f</i>(−2)</span> and <span class="m"><i>f</i>(3)</span>. Is <span class="m"><i>f</i></span> increasing or decreasing?`, a: `<span class="m"><i>f</i>(−2) = 3<sup>2</sup> = 9</span> and <span class="m"><i>f</i>(3) = 1/27</span>. The base is between 0 and 1, so <span class="m"><i>f</i></span> is decreasing.` },
    { q: `Solve <span class="m">4<sup><i>x</i> − 1</sup> = 32</span>.`, a: `Write both sides as powers of 2: <span class="m">2<sup>2(<i>x</i> − 1)</sup> = 2<sup>5</sup></span>. Then <span class="m">2<i>x</i> − 2 = 5</span>, so <span class="m"><i>x</i> = 7/2</span>. Check: <span class="m">4<sup>5/2</sup> = 2<sup>5</sup> = 32</span>.` },
    { q: `For <span class="m"><i>g</i>(<i>x</i>) = −2 · 3<sup><i>x</i> + 1</sup> + 5</span>, give the asymptote, domain, range, y-intercept and end behavior.`, a: `Asymptote <span class="m"><i>y</i> = 5</span>; domain <span class="m">(−∞, ∞)</span>; <span class="m"><i>a</i> = −2 < 0</span>, so the range is <span class="m">(−∞, 5)</span>. <span class="m"><i>g</i>(0) = −2 · 3 + 5 = −1</span>. As <span class="m"><i>x</i> → −∞</span>, <span class="m"><i>g</i>(<i>x</i>) → 5</span>; as <span class="m"><i>x</i> → ∞</span>, <span class="m"><i>g</i>(<i>x</i>) → −∞</span>.` },
    { q: `Solve <span class="m"><i>e</i><sup><i>x</i><sup>2</sup></sup> = <i>e</i><sup>3<i>x</i> + 4</sup></span>.`, a: `Same base, so the exponents are equal: <span class="m"><i>x</i><sup>2</sup> = 3<i>x</i> + 4</span>, <span class="m"><i>x</i><sup>2</sup> − 3<i>x</i> − 4 = 0</span>, <span class="m">(<i>x</i> − 4)(<i>x</i> + 1) = 0</span>. Solution set <span class="m">{−1, 4}</span>.` }
  ],
  origin: `<p>In 1683 Jacob Bernoulli studied interest compounded more and more often and showed that the total of (1 + 1/n)ⁿ stays between 2 and 3 as n grows. Leonhard Euler used the letter e for the limit in a manuscript of about 1727, put it in print in his Mechanica of 1736, and in his Introductio in analysin infinitorum of 1748 wrote e as the series 1 + 1 + 1/2 + 1/6 + … and gave it to more than twenty decimal places. Euler also proved that e is irrational; Charles Hermite proved in 1873 that it is transcendental.</p>`
};
