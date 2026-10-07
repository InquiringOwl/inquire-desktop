window.ARITH = window.ARITH || {};

ARITH["a2-geom-series"] = {
  title: "Geometric Series",
  short: "Sₙ = a₁(1 − rⁿ)/(1 − r), and a₁/(1 − r) when |r| < 1",
  grade: "Grade 11–12 · college Intermediate/College Algebra",
  hours: 4,
  voice: "plain",
  eyebrow: "Sequences & series · geometric sums and their limits",
  hero: `<span class="m"><span class="c1"><span class="fr"><span>1</span><span>2</span></span></span> + <span class="fr"><span>1</span><span>4</span></span> + <span class="fr"><span>1</span><span>8</span></span> + ⋯ = <span class="fr"><span class="c1">1/2</span><span>1 − <span class="c2">1/2</span></span></span> = <span class="c5">1</span></span>`,
  lede: `A geometric series adds terms that are each the previous term times the common ratio <span class="m c2"><i>r</i></span>. A finite one has the closed form <span class="m"><span class="c3"><i>S</i><sub><i>n</i></sub></span> = <span class="c1"><i>a</i><sub>1</sub></span>(1 − <span class="c2"><i>r</i></span><sup><i>n</i></sup>)/(1 − <span class="c2"><i>r</i></span>)</span>. When <span class="m">|<span class="c2"><i>r</i></span>| &lt; 1</span> the partial sums approach a limit, the infinite sum <span class="m"><span class="c5"><i>S</i></span> = <span class="c1"><i>a</i><sub>1</sub></span>/(1 − <span class="c2"><i>r</i></span>)</span>.`,
  plain: `<p>Shade half of a square. Then shade half of what is left, then half of what is left after that. The shaded pieces are <span class="m"><span class="fr"><span>1</span><span>2</span></span>, <span class="fr"><span>1</span><span>4</span></span>, <span class="fr"><span>1</span><span>8</span></span>, …</span> of the square. After <span class="m"><i>n</i></span> pieces the unshaded part is <span class="m"><span class="fr"><span>1</span><span>2<sup><i>n</i></sup></span></span></span>, which gets as small as you like. So the shaded total gets as close to the whole square as you like: the infinite sum is 1.</p>
<p>In a <b>geometric series</b> each term is the previous one times the same number, the <span class="c2">common ratio</span> <span class="m c2"><i>r</i></span>. To add the first <span class="m"><i>n</i></span> terms, multiply the whole sum by <span class="m c2"><i>r</i></span>. The new list is the old one moved along by one place, so subtracting the two cancels every term except the first and the last.</p>
<p>Whether an endless geometric series has a total depends on <span class="m c2"><i>r</i></span>. If the terms shrink by a fixed fraction each time (<span class="m">|<i>r</i>| &lt; 1</span>), the total settles on a limit. If they stay the same size or grow (<span class="m">|<i>r</i>| ≥ 1</span>), the partial sums never settle, and the series <b>diverges</b>.</p>`,
  formal: `<p>A <b>geometric series</b> is the sum of terms <span class="m"><i>a</i><sub><i>k</i></sub> = <span class="c1"><i>a</i><sub>1</sub></span><span class="c2"><i>r</i></span><sup><i>k</i>−1</sup></span>. Subtracting <span class="m"><span class="c2"><i>r</i></span><span class="c3"><i>S</i><sub><i>n</i></sub></span> = <i>a</i><sub>1</sub><i>r</i> + ⋯ + <i>a</i><sub>1</sub><i>r</i><sup><i>n</i></sup></span> from <span class="m"><span class="c3"><i>S</i><sub><i>n</i></sub></span> = <i>a</i><sub>1</sub> + <i>a</i><sub>1</sub><i>r</i> + ⋯ + <i>a</i><sub>1</sub><i>r</i><sup><i>n</i>−1</sup></span> gives <span class="m">(1 − <i>r</i>)<span class="c3"><i>S</i><sub><i>n</i></sub></span> = <i>a</i><sub>1</sub> − <i>a</i><sub>1</sub><i>r</i><sup><i>n</i></sup></span>, so</p>
<div class="display"><span class="c3"><i>S</i><sub><i>n</i></sub></span> = <span class="sig"><span><i>n</i></span><span>Σ</span><span><i>k</i>=1</span></span><span class="c1"><i>a</i><sub>1</sub></span><span class="c2"><i>r</i></span><sup><i>k</i>−1</sup> = <span class="fr"><span><span class="c1"><i>a</i><sub>1</sub></span>(1 − <span class="c2"><i>r</i></span><sup><i>n</i></sup>)</span><span>1 − <span class="c2"><i>r</i></span></span></span>, &nbsp; <span class="c2"><i>r</i></span> ≠ 1 &nbsp; <span class="dim">(for <i>r</i> = 1, <i>S</i><sub><i>n</i></sub> = <i>na</i><sub>1</sub>)</span><br><span class="c5"><i>S</i></span> = <span class="sig"><span>∞</span><span>Σ</span><span><i>k</i>=1</span></span><span class="c1"><i>a</i><sub>1</sub></span><span class="c2"><i>r</i></span><sup><i>k</i>−1</sup> = <span class="fr"><span class="c1"><i>a</i><sub>1</sub></span><span>1 − <span class="c2"><i>r</i></span></span></span>, &nbsp; |<span class="c2"><i>r</i></span>| &lt; 1</div>
<p>If <span class="m">|<i>r</i>| &lt; 1</span>, then <span class="m"><i>r</i><sup><i>n</i></sup> → 0</span> as <span class="m"><i>n</i> → ∞</span>, so <span class="m"><span class="c3"><i>S</i><sub><i>n</i></sub></span> → <span class="c5"><i>S</i></span></span>; the gap after <span class="m"><i>n</i></span> terms is exactly <span class="m"><span class="c5"><i>S</i></span> − <span class="c3"><i>S</i><sub><i>n</i></sub></span> = <span class="c5"><i>S</i></span> · <i>r</i><sup><i>n</i></sup></span>. If <span class="m">|<i>r</i>| ≥ 1</span> and <span class="m"><i>a</i><sub>1</sub> ≠ 0</span>, the terms do not approach 0 and the infinite series diverges. A repeating decimal is a convergent geometric series: <span class="m">0.333… = <span class="fr"><span>3</span><span>10</span></span> + <span class="fr"><span>3</span><span>100</span></span> + ⋯ = <span class="fr"><span>3/10</span><span>1 − 1/10</span></span> = <span class="fr"><span>1</span><span>3</span></span></span>.</p>`,
  legend: [
    { c: "c1", sym: `<i>a</i><sub>1</sub>`, name: "First term", desc: "The term the series starts with. In sigma notation, substitute the lower limit." },
    { c: "c2", sym: `<i>r</i>`, name: "Common ratio", desc: "Each term divided by the one before: r = a₂/a₁. Its size decides whether an infinite series converges." },
    { c: "c3", sym: `<i>S</i><sub><i>n</i></sub>`, name: "Partial sum", desc: "The sum of the first n terms, a₁(1 − rⁿ)/(1 − r)." },
    { c: "c5", sym: `<i>S</i>`, name: "Infinite sum", desc: "The limit of the partial sums, a₁/(1 − r). It exists only when |r| < 1." }
  ],
  steps: { title: "How to find a geometric series", items: [
    `Check that the ratio of consecutive terms is constant. That ratio is <span class="m c2"><i>r</i></span>; watch for a negative ratio when the signs alternate.`,
    `Read off the first term <span class="m c1"><i>a</i><sub>1</sub></span>. In <span class="m">Σ <i>c</i> · <i>r</i><sup><i>k</i></sup></span> starting at <span class="m"><i>k</i> = 1</span>, the first term is <span class="m"><i>cr</i></span>, not <span class="m"><i>c</i></span>.`,
    `For a finite series, find the number of terms <span class="m"><i>n</i></span> (from <span class="m"><i>a</i><sub><i>n</i></sub> = <i>a</i><sub>1</sub><i>r</i><sup><i>n</i>−1</sup></span> if the last term is given), then use <span class="m"><span class="c3"><i>S</i><sub><i>n</i></sub></span> = <i>a</i><sub>1</sub>(1 − <i>r</i><sup><i>n</i></sup>)/(1 − <i>r</i>)</span>.`,
    `For an infinite series, test <span class="m">|<span class="c2"><i>r</i></span>| &lt; 1</span> first. If it holds, the sum is <span class="m"><span class="c1"><i>a</i><sub>1</sub></span>/(1 − <span class="c2"><i>r</i></span>)</span>. If not, the series diverges and has no sum.`,
    `For a repeating decimal, the first repeating block is <span class="m c1"><i>a</i><sub>1</sub></span> and <span class="m"><span class="c2"><i>r</i></span> = 1/10<sup><i>m</i></sup></span> for a block of <span class="m"><i>m</i></span> digits. Add any non-repeating part separately and simplify the fraction.`
  ] },
  example: {
    prompt: `For the geometric series <span class="m">24 − 12 + 6 − 3 + ⋯</span>, find the sum of the first 6 terms and the infinite sum.`,
    lines: [
      { math: `<span class="m"><span class="c1"><i>a</i><sub>1</sub> = 24</span>, &nbsp;<span class="c2"><i>r</i> = <span class="fr"><span>−12</span><span>24</span></span> = −<span class="fr"><span>1</span><span>2</span></span></span></span>`, note: "Check the next ratio too: 6/(−12) = −1/2. The signs alternate because r is negative." },
      { math: `<span class="m"><span class="c3"><i>S</i><sub>6</sub></span> = <span class="fr"><span><span class="c1">24</span>(1 − (<span class="c2">−1/2</span>)<sup>6</sup>)</span><span>1 − (<span class="c2">−1/2</span>)</span></span></span>`, note: "Substitute into Sₙ = a₁(1 − rⁿ)/(1 − r) with n = 6." },
      { math: `<span class="m">= <span class="fr"><span>24(1 − 1/64)</span><span>3/2</span></span> = 24 · <span class="fr"><span>63</span><span>64</span></span> · <span class="fr"><span>2</span><span>3</span></span></span>`, note: "An even power of −1/2 is positive: (−1/2)⁶ = 1/64." },
      { math: `<span class="m">= <span class="c3"><span class="fr"><span>63</span><span>4</span></span> = 15.75</span></span>`, note: "Check by adding: 24 − 12 + 6 − 3 + 1.5 − 0.75 = 15.75." },
      { math: `<span class="m"><span class="c5"><i>S</i></span> = <span class="fr"><span class="c1">24</span><span>1 − (<span class="c2">−1/2</span>)</span></span> = <span class="fr"><span>24</span><span>3/2</span></span> = <span class="c5">16</span></span>`, note: "|r| = 1/2 < 1, so the infinite series converges." },
      { math: `<span class="m"><span class="c5">16</span> − <span class="c3"><span class="fr"><span>63</span><span>4</span></span></span> = <span class="fr"><span>1</span><span>4</span></span> = 16 · <span class="fr"><span>1</span><span>64</span></span></span>`, note: "The gap after n terms is S · rⁿ in size. The partial sums jump above and below 16, closing in on it." }
    ],
    answer: `<span class="m"><span class="c3"><i>S</i><sub>6</sub> = <span class="fr"><span>63</span><span>4</span></span></span></span> and <span class="m"><span class="c5"><i>S</i> = 16</span></span>.`
  },
  why: `<p>Money that earns interest is a geometric series. Deposit $100 at the end of every month at 6% a year compounded monthly: after 24 deposits the first has grown by <span class="m">1.005<sup>23</sup></span> and the last by nothing, so the account holds <span class="m">100(1.005<sup>24</sup> − 1)/0.005 ≈ 2543.20</span> dollars. The same sum, run backwards, gives the monthly payment on a car loan or a mortgage.</p>
<p>Infinite geometric series answer questions about the long run. A medicine taken every 12 hours, of which a fixed fraction is left at the next dose, builds up toward a steady level <span class="m"><i>a</i><sub>1</sub>/(1 − <i>r</i>)</span>. In economics, if people spend 80% of each extra dollar they receive, one dollar of new spending produces <span class="m">1/(1 − 0.8) = 5</span> dollars of total spending. Repeating decimals, bouncing balls and Zeno's paradox all come down to the same formula.</p>`,
  careers: [
    { role: "Financial planner", use: "Projects retirement savings with the future value of regular deposits, a finite geometric series." },
    { role: "Mortgage loan officer", use: "Computes monthly payments from the present value of a loan, a geometric series in 1/(1 + i)." },
    { role: "Pharmacologist", use: "Predicts the steady-state level of a drug given at fixed intervals with the sum a₁/(1 − r)." },
    { role: "Economist", use: "Estimates the spending multiplier 1/(1 − MPC) from the marginal propensity to consume." },
    { role: "Actuary", use: "Values pensions and life annuities as sums of payments discounted by a constant factor each year." },
    { role: "Audio engineer", use: "Designs echo and reverb effects in which each repeat is a fixed fraction of the previous one." }
  ],
  life: [
    "Working out what a monthly savings plan will be worth in two years",
    "Understanding why a calculator shows 0.333… for one third",
    "Totalling the distance travelled by a ball that bounces lower each time",
    "Seeing how a daily medicine builds up to a steady level in the body",
    "Comparing the monthly payments on loans of different lengths"
  ],
  fields: [
    { name: "Finance", use: "Annuities, loan payments and bond prices are finite geometric series." },
    { name: "Economics", use: "The spending multiplier and the value of a perpetuity are infinite geometric series." },
    { name: "Pharmacology", use: "Repeated dosing with first-order elimination gives drug levels that sum geometrically." },
    { name: "Computer science", use: "1 + 2 + 4 + ⋯ + 2ⁿ⁻¹ = 2ⁿ − 1 counts the nodes of a full binary tree and the cost of doubling arrays." }
  ],
  prereqWhy: {
    "a2-sequences": "A geometric series is a partial sum of a geometric sequence, written in sigma notation; its infinite version is the limit of those partial sums.",
    "a2-exp-func": "The term a₁rⁿ⁻¹ is an exponential function of n. When 0 < |r| < 1 it decays toward 0, which is exactly why an infinite geometric series can have a finite sum."
  },
  unlocksWhy: {
    "pc-induction": "The sum formula <i>a</i>(1 − <i>r<sup>n</sup></i>)/(1 − <i>r</i>) is a statement about every positive integer <i>n</i>, and induction is the method that proves it."
  },
  beyond: [
    { field: "Calculus II", why: "The geometric series is the model for power series and for the ratio and comparison tests of convergence." },
    { field: "Precalculus", why: "Limits of sequences and the notation n → ∞ are introduced with partial sums of geometric series." },
    { field: "Economics", why: "Present value, perpetuities and multipliers in macroeconomics are infinite geometric series." },
    { field: "Computer science", why: "Divide-and-conquer running times and amortised costs of growing arrays are bounded by geometric sums." }
  ],
  mistakes: [
    { wrong: `<span class="m">1 + 2 + 4 + 8 + ⋯ = <span class="fr"><span>1</span><span>1 − 2</span></span> = −1</span>.`, fix: `The formula <span class="m"><i>a</i><sub>1</sub>/(1 − <i>r</i>)</span> needs <span class="m">|<i>r</i>| &lt; 1</span>. Here <span class="m"><i>r</i> = 2</span>, the partial sums grow without bound, and the series diverges.` },
    { wrong: `<span class="m"><span class="sig"><span>∞</span><span>Σ</span><span><i>k</i>=1</span></span>(<span class="fr"><span>1</span><span>2</span></span>)<sup><i>k</i></sup> = <span class="fr"><span>1</span><span>1 − 1/2</span></span> = 2</span>, taking the first term as 1.`, fix: `At <span class="m"><i>k</i> = 1</span> the first term is <span class="m"><span class="fr"><span>1</span><span>2</span></span></span>, so the sum is <span class="m"><span class="fr"><span>1/2</span><span>1 − 1/2</span></span> = 1</span>.` },
    { wrong: `Taking the ratio of <span class="m">24, 12, 6, …</span> as <span class="m">24/12 = 2</span>.`, fix: `Divide each term by the one before it: <span class="m"><i>r</i> = 12/24 = <span class="fr"><span>1</span><span>2</span></span></span>.` }
  ],
  practice: [
    { q: `Find the sum <span class="m">3 + 6 + 12 + ⋯ + 384</span>.`, a: `<span class="m"><i>r</i> = 2</span> and <span class="m">3 · 2<sup><i>n</i>−1</sup> = 384</span> gives <span class="m">2<sup><i>n</i>−1</sup> = 128</span>, <span class="m"><i>n</i> = 8</span>. <span class="m"><i>S</i><sub>8</sub> = 3(1 − 2<sup>8</sup>)/(1 − 2) = 3 · 255 = 765</span>.` },
    { q: `Write <span class="m">0.363636…</span> as a fraction in lowest terms.`, a: `<span class="m"><span class="fr"><span>36</span><span>100</span></span> + <span class="fr"><span>36</span><span>10000</span></span> + ⋯</span> has <span class="m"><i>a</i><sub>1</sub> = <span class="fr"><span>36</span><span>100</span></span></span>, <span class="m"><i>r</i> = <span class="fr"><span>1</span><span>100</span></span></span>: <span class="m"><span class="fr"><span>36/100</span><span>99/100</span></span> = <span class="fr"><span>36</span><span>99</span></span> = <span class="fr"><span>4</span><span>11</span></span></span>.` },
    { q: `A ball is dropped from 10 m. Each bounce rises to <span class="m"><span class="fr"><span>3</span><span>5</span></span></span> of the height before. What total distance does it travel?`, a: `Down 10 m, then up and down each rebound height: <span class="m">10 + 2(6 + 3.6 + ⋯) = 10 + 2 · <span class="fr"><span>6</span><span>1 − 3/5</span></span> = 10 + 2 · 15 = 40</span> m.` },
    { q: `You deposit $100 at the end of each month in an account paying 6% a year compounded monthly. What is it worth just after the 24th deposit?`, a: `The deposits grow to <span class="m">100 + 100(1.005) + ⋯ + 100(1.005)<sup>23</sup></span>, with <span class="m"><i>r</i> = 1.005</span>: <span class="m"><span class="fr"><span>100(1.005<sup>24</sup> − 1)</span><span>0.005</span></span> ≈ 2543.20</span> dollars, of which $143.20 is interest.` }
  ],
  origin: `Zeno of Elea (5th century BCE) argued that a runner can never finish a race, since he must first cover half of it, then half of the rest, and so on. Euclid's Elements (about 300 BCE, Book IX, Proposition 35) gives the sum of a finite geometric progression, and Archimedes found the area of a parabolic segment by summing 1 + 1/4 + 1/16 + ⋯ = 4/3.`
};
