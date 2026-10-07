window.ARITH = window.ARITH || {};

ARITH["a2-exp-models"] = {
  title: "Exponential Growth, Decay & Compound Interest",
  short: "Money, isotopes and coffee change by a fixed factor per unit time",
  grade: "Grade 11 · college Intermediate Algebra",
  hours: 6,
  voice: "plain",
  eyebrow: "Exponential and logarithmic functions · exponential models",
  hero: `<span class="m"><i>A</i> = <span class="c1">1000</span>(1 + <span class="fr"><span class="c2">0.05</span><span>12</span></span>)<sup>12 · <span class="c3">10</span></sup> ≈ 1647.01</span>`,
  lede: `When a quantity changes by the same percentage in each equal time step, it follows an exponential model. Compound interest, population growth, radioactive decay and a cooling cup of coffee are all of this kind, and logarithms answer their "how long" questions: the <span class="c5">doubling time</span> and the <span class="c5">half-life</span>.`,
  plain: `<p>Put <span class="c1">$1000</span> in an account that pays <span class="c2">5%</span> a year. Simple interest would add the same $50 every year, a straight line: after 10 years, $1500. Compound interest pays 5% of the current balance, which keeps growing, so the balance is multiplied by 1.05 each year: <span class="m">1000 · 1.05<sup>10</sup> ≈ 1628.89</span>. Paying a twelfth of the rate every month, <span class="m">1 + 0.05/12</span> per month for 120 months, gives a little more, about $1647.01.</p>
<p>Pay more and more often and the balance approaches <span class="m"><i>Pe</i><sup><i>rt</i></sup></span>, interest compounded continuously. The same formula with a negative rate describes decay. Carbon-14 loses half of what is left every 5730 years, its <span class="c5">half-life</span>, whatever the starting amount.</p>
<p>To find a <span class="c3">time</span>, solve for the exponent with logs. Money at 5% compounded continuously doubles when <span class="m"><i>e</i><sup>0.05<i>t</i></sup> = 2</span>, so <span class="m"><i>t</i> = ln 2 / 0.05 ≈ 13.86</span> years. A hot drink is different: it does not cool toward zero but toward room temperature, so the exponential describes the gap between the drink and the room.</p>`,
  formal: `<p>A principal <span class="m"><span class="c1"><i>P</i></span></span> at annual rate <span class="m"><span class="c2"><i>r</i></span></span> (a decimal), compounded <span class="m"><i>n</i></span> times a year for <span class="m"><span class="c3"><i>t</i></span></span> years, or continuously, grows to</p>
<div class="display"><i>A</i> = <span class="c1"><i>P</i></span>(1 + <span class="fr"><span class="c2"><i>r</i></span><span><i>n</i></span></span>)<sup><i>n</i><span class="c3"><i>t</i></span></sup> &nbsp; &nbsp; <i>A</i> = <span class="c1"><i>P</i></span><i>e</i><sup><span class="c2"><i>r</i></span><span class="c3"><i>t</i></span></sup> &nbsp; &nbsp; APY = (1 + <span class="fr"><span><i>r</i></span><span><i>n</i></span></span>)<sup><i>n</i></sup> − 1</div>
<p>The <b>annual percentage yield</b> (APY) is the actual one-year growth; for continuous compounding it is <span class="m"><i>e</i><sup><i>r</i></sup> − 1</span>. In general <span class="m"><i>A</i>(<i>t</i>) = <i>A</i><sub>0</sub><i>e</i><sup><i>kt</i></sup></span> models <b>exponential growth</b> for <span class="m"><i>k</i> > 0</span> and <b>exponential decay</b> for <span class="m"><i>k</i> < 0</span>. The <span class="c5">doubling time</span> is <span class="m"><i>t</i><sub>2</sub> = ln 2 / <i>k</i></span>; the <span class="c5">half-life</span> <span class="m"><i>T</i></span> satisfies <span class="m"><i>A</i> = <i>A</i><sub>0</sub>(1/2)<sup><i>t</i>/<i>T</i></sup></span>, so the decay constant is <span class="m"><i>k</i> = ln 2 / <i>T</i></span> (for carbon-14, <span class="m"><i>T</i> = 5730</span> years and <span class="m"><i>k</i> ≈ 0.000121</span> per year). <b>Newton's law of cooling</b> is a shifted exponential: an object at <span class="m"><i>T</i><sub>0</sub></span> in surroundings at <span class="m"><i>T</i><sub><i>s</i></sub></span> has temperature <span class="m"><i>T</i>(<i>t</i>) = <i>T</i><sub><i>s</i></sub> + (<i>T</i><sub>0</sub> − <i>T</i><sub><i>s</i></sub>)<i>e</i><sup>−<i>kt</i></sup></span>, with horizontal asymptote <span class="m"><i>T</i> = <i>T</i><sub><i>s</i></sub></span>. A linear model adds a fixed amount per unit time; an exponential model multiplies by a fixed factor, so it eventually passes any linear one.</p>`,
  legend: [
    { c: "c1", sym: `<i>P</i>`, name: "Principal", desc: "The starting amount: money deposited, initial population or mass, or the starting temperature gap." },
    { c: "c2", sym: `<i>r</i>`, name: "Rate", desc: "The annual rate as a decimal, or the growth or decay constant k." },
    { c: "c3", sym: `<i>t</i>`, name: "Time", desc: "Years (or minutes) since the start. Solving for t needs logarithms." },
    { c: "c5", sym: `<i>t</i><sub>2</sub>, <i>T</i>`, name: "Doubling time / half-life", desc: "The time for the quantity to double or halve: ln 2 divided by the rate constant." }
  ],
  steps: {
    title: "How to set up and solve an exponential model",
    items: [
      `Read off the <span class="c1">starting amount</span>, the <span class="c2">rate</span> as a decimal and the time unit.`,
      `Choose the form: <span class="m"><i>P</i>(1 + <i>r</i>/<i>n</i>)<sup><i>nt</i></sup></span> for interest paid <span class="m"><i>n</i></span> times a year, <span class="m"><i>Pe</i><sup><i>rt</i></sup></span> for continuous change, <span class="m"><i>A</i><sub>0</sub>(1/2)<sup><i>t</i>/<i>T</i></sup></span> for a known half-life.`,
      `For cooling, model the gap: <span class="m"><i>T</i> − <i>T</i><sub><i>s</i></sub> = (<i>T</i><sub>0</sub> − <i>T</i><sub><i>s</i></sub>)<i>e</i><sup>−<i>kt</i></sup></span>.`,
      `If the rate is unknown, substitute one data point and solve for <span class="m"><i>k</i></span> with ln.`,
      `To find a <span class="c3">time</span>, isolate the exponential, take ln of both sides and divide.`,
      `Answer in context with units and sensible rounding: cents for money, years for dating.`
    ]
  },
  example: {
    prompt: `<span class="c1">$5000</span> is invested at <span class="c2">4.5%</span> compounded monthly. Find the balance after <span class="c3">8</span> years, the APY, and how long the money takes to double.`,
    lines: [
      { math: `<span class="m"><i>A</i> = 5000(1 + <span class="fr"><span>0.045</span><span>12</span></span>)<sup>12 · 8</sup> = 5000(1.00375)<sup>96</sup></span>`, note: "n = 12 payments a year, each at a twelfth of the rate." },
      { math: `<span class="m"><i>A</i> ≈ 7161.82</span>`, note: "The balance after 8 years, to the cent." },
      { math: `<span class="m">APY = 1.00375<sup>12</sup> − 1 ≈ 0.04594 = 4.594%</span>`, note: "Monthly compounding earns a little more than the stated 4.5% over a year." },
      { math: `<span class="m">5000(1.00375)<sup>12<i>t</i></sup> = 10000 &nbsp;⇒&nbsp; 1.00375<sup>12<i>t</i></sup> = 2</span>`, note: "Doubling: the principal cancels, so the answer does not depend on it." },
      { math: `<span class="m">12<i>t</i> ln 1.00375 = ln 2 &nbsp;⇒&nbsp; <span class="c5"><i>t</i> = <span class="fr"><span>ln 2</span><span>12 ln 1.00375</span></span> ≈ 15.43</span></span>`, note: "Take ln of both sides and use the power rule." },
      { math: `<span class="m">5000<i>e</i><sup>0.045 · 8</sup> ≈ 7166.65, &nbsp; ln 2 / 0.045 ≈ 15.40</span>`, note: "Continuous compounding for comparison: slightly more money, slightly faster doubling." }
    ],
    answer: `About <span class="m">$7161.82</span> after 8 years, an APY of about <span class="m">4.594%</span>, and a doubling time of about <span class="m">15.43</span> years.`
  },
  why: `<p>Interest on savings, loans and credit cards is compound interest, and comparing offers means comparing APYs, not stated rates. The same model, with a negative rate, describes how medicines leave the body, how radioactive waste becomes safe and how old a fossil is.</p>
<p>The key habit is to ask whether something grows by a fixed amount or by a fixed percentage. Mistaking one for the other, as people often do with debt or with an epidemic, badly underestimates how fast exponential change gets large.</p>`,
  careers: [
    { role: "Loan officer", use: "Quotes APR and APY and computes balances and payoff times with compound-interest formulas." },
    { role: "Actuary", use: "Discounts future payments with continuous rates to price insurance and pensions." },
    { role: "Archaeologist", use: "Dates bone, wood and charcoal from the fraction of carbon-14 left, using its 5730-year half-life." },
    { role: "Nuclear medicine technologist", use: "Schedules scans from the half-lives of tracers such as technetium-99m, about 6 hours." },
    { role: "Epidemiologist", use: "Fits exponential growth to early case counts and reports the doubling time." },
    { role: "Forensic pathologist", use: "Estimates time of death from body temperature with Newton's law of cooling." },
    { role: "Food safety specialist", use: "Uses bacterial doubling times to set how long food may sit at room temperature." }
  ],
  life: [
    "Comparing the APY of two savings accounts",
    "Seeing how fast a credit-card balance grows when only minimum payments are made",
    "Waiting for a hot drink to cool to a comfortable temperature",
    "Reading the carbon-14 age of an artifact in a museum",
    "Understanding why a medicine is taken every few hours",
    "Following the doubling time of a fast-spreading illness in the news"
  ],
  fields: [
    { name: "Finance", use: "Compound interest, APY and continuous discounting are exponential models." },
    { name: "Physics", use: "Radioactive decay and the charging of capacitors follow e to a negative multiple of t." },
    { name: "Biology", use: "Unlimited bacterial and population growth is exponential with a fixed doubling time." },
    { name: "Earth science", use: "Radiometric dating uses half-lives of carbon-14, uranium and potassium isotopes." },
    { name: "Medicine", use: "Drug elimination is modelled by half-lives that set dose sizes and intervals." }
  ],
  prereqWhy: {
    "a2-exp-log-eq": "Every doubling time, half-life, decay constant and time to a target comes from solving an exponential equation with logs."
  },
  unlocksWhy: {
    "pc-logistic": "Exponential growth <i>a</i>·<i>b<sup>t</sup></i> is the early stage of a logistic curve, and the logistic model adds a carrying capacity that the growth levels off toward.",
    "pc-fitting-models": "Writing a model as <i>a</i>·<i>b<sup>x</sup></i> and finding its growth factor from data is what a fitted exponential model reports, now found by least squares on ln <i>y</i>."
  },
  beyond: [
    { field: "Calculus I", why: "Exponential models are the solutions of y′ = ky, the simplest differential equation of growth and decay." },
    { field: "Economics", why: "Present value, continuous discounting and growth rates of GDP use Pe^(rt)." },
    { field: "Physics", why: "Radioactive decay, RC circuits and damping are exponential in time." },
    { field: "Statistics", why: "Exponential regression fits a·bˣ to data by taking logs and fitting a line." }
  ],
  mistakes: [
    { wrong: `Using <span class="m"><i>r</i> = 5</span> instead of <span class="m"><i>r</i> = 0.05</span> for 5%.`, fix: `The rate is a decimal. <span class="m">1000(1 + 5/12)<sup>120</sup></span> is astronomically large; <span class="m">1000(1 + 0.05/12)<sup>120</sup> ≈ 1647.01</span>.` },
    { wrong: `Writing monthly compounding as <span class="m"><i>P</i>(1 + <i>r</i>)<sup>12<i>t</i></sup></span>.`, fix: `Each month pays a twelfth of the rate: <span class="m"><i>P</i>(1 + <i>r</i>/12)<sup>12<i>t</i></sup></span>. Both the rate and the exponent change.` },
    { wrong: `Modelling a cooling drink as <span class="m"><i>T</i>(<i>t</i>) = <i>T</i><sub>0</sub><i>e</i><sup>−<i>kt</i></sup></span>, which cools toward 0°.`, fix: `It cools toward room temperature. Only the gap decays: <span class="m"><i>T</i>(<i>t</i>) = <i>T</i><sub><i>s</i></sub> + (<i>T</i><sub>0</sub> − <i>T</i><sub><i>s</i></sub>)<i>e</i><sup>−<i>kt</i></sup></span>.` },
    { wrong: `Thinking that two half-lives remove the whole sample.`, fix: `Each half-life halves what is left: after 2 half-lives, <span class="m">1/4</span> remains; after 3, <span class="m">1/8</span>. Carbon-14 at 25% means <span class="m">2 · 5730 = 11 460</span> years.` }
  ],
  practice: [
    { q: `Find the balance when $2000 is invested at 6% compounded quarterly for 5 years.`, a: `<span class="m"><i>A</i> = 2000(1 + 0.06/4)<sup>4 · 5</sup> = 2000(1.015)<sup>20</sup> ≈ $2693.71</span>.` },
    { q: `Find the balance when the same $2000 earns 6% compounded continuously for 5 years, and the APY of that account.`, a: `<span class="m"><i>A</i> = 2000<i>e</i><sup>0.06 · 5</sup> = 2000<i>e</i><sup>0.3</sup> ≈ $2699.72</span>. APY <span class="m">= <i>e</i><sup>0.06</sup> − 1 ≈ 6.184%</span>.` },
    { q: `A bone has 30% of the carbon-14 it had when the animal died. Using a half-life of 5730 years, how old is it?`, a: `<span class="m">(1/2)<sup><i>t</i>/5730</sup> = 0.3</span>, so <span class="m"><i>t</i> = 5730 · ln 0.3 / ln 0.5 ≈ 9953</span> years.` },
    { q: `Coffee at 90 °C is left in a 20 °C room and is 60 °C after 10 minutes. When will it reach 40 °C?`, a: `<span class="m"><i>T</i> = 20 + 70<i>e</i><sup>−<i>kt</i></sup></span>. From <span class="m">60 = 20 + 70<i>e</i><sup>−10<i>k</i></sup></span>, <span class="m"><i>e</i><sup>−10<i>k</i></sup> = 4/7</span> and <span class="m"><i>k</i> = ln(7/4)/10 ≈ 0.0560</span>. Then <span class="m"><i>e</i><sup>−<i>kt</i></sup> = 20/70 = 2/7</span>, so <span class="m"><i>t</i> = 10 ln(7/2) / ln(7/4) ≈ 22.4</span> minutes.` }
  ],
  origin: `<p>Jacob Bernoulli met the number e in 1683 while studying compound interest: he asked what happens to (1 + 1/n)ⁿ as interest is paid more and more often, and showed the limit lies between 2 and 3. Isaac Newton published his law of cooling anonymously in 1701. In 1900 Ernest Rutherford found that the radioactivity of thorium emanation halved in a fixed time, the first measured half-life, and in 1902 and 1903 he and Frederick Soddy explained radioactive decay as exponential. Willard Libby developed radiocarbon dating in the late 1940s, using a half-life of 5568 years that was later revised to the 5730 years used today, and received the 1960 Nobel Prize in Chemistry for it.</p>`
};
