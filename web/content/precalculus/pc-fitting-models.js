window.ARITH = window.ARITH || {};
ARITH["pc-fitting-models"] = {
  title: "Fitting Exponential, Log & Power Models",
  short: "Straighten curved data with logs, fit a line, transform back",
  grade: "Grade 12 · college Precalculus",
  hours: 5,
  voice: "plain",
  eyebrow: "Exponential and logarithmic functions · fitting models to data",
  hero: `<span class="m">ln <span class="c3"><i>y</i></span> = ln <i>a</i> + (ln <i>b</i>)<span class="c1"><i>x</i></span> &nbsp;⇒&nbsp; <span class="c5"><i>y</i> ≈ 120.2(1.567)<sup><i>x</i></sup></span></span>`,
  lede: `Curved data can often be straightened by taking logarithms. Fit a line to the straightened points by least squares, then undo the logarithms to get an exponential, logarithmic or power model.`,
  plain: `<p>A scatter plot of bacteria counts curves upward more and more steeply. A line through it would be a poor model. But if each count is replaced by its natural logarithm, the points fall almost on a straight line. That happens because an exponential model multiplies by the same factor each hour, and a logarithm turns multiplying into adding.</p>
<p>So the method is: transform the data until it looks straight, fit the best line to the transformed points, then transform the line back. Which transformation straightens the data tells you which kind of model fits. Taking ln of <span class="c3"><i>y</i></span> straightens exponential data, taking ln of <span class="c1"><i>x</i></span> straightens logarithmic data, and taking ln of both straightens power data.</p>
<p>The <b>coefficient of determination</b> <span class="c5"><i>r</i>²</span> says how close the transformed points lie to their line: 1 is a perfect fit. A model is only trusted inside the range of the data. Predicting far outside it, <b>extrapolation</b>, assumes the pattern keeps going, which real data often does not.</p>`,
  formal: `<p>For data <span class="m">(<i>X</i><sub><i>i</i></sub>, <i>Y</i><sub><i>i</i></sub>)</span>, <i>i</i> = 1 … <i>n</i>, the <b>least-squares line</b> <span class="m"><i>Y</i> = <i>c</i> + <i>mX</i></span> minimises the sum of squared vertical distances. Its slope and intercept are</p>
<div class="display"><i>m</i> = <span class="fr"><span>Σ(<i>X</i><sub><i>i</i></sub> − <i>X̄</i>)(<i>Y</i><sub><i>i</i></sub> − <i>Ȳ</i>)</span><span>Σ(<i>X</i><sub><i>i</i></sub> − <i>X̄</i>)²</span></span>, &nbsp; <i>c</i> = <i>Ȳ</i> − <i>m</i><i>X̄</i></div>
<p>and the correlation coefficient <span class="m"><i>r</i></span> has <span class="m"><i>r</i>² = 1 − Σ(<i>Y</i><sub><i>i</i></sub> − <i>Ŷ</i><sub><i>i</i></sub>)²/Σ(<i>Y</i><sub><i>i</i></sub> − <i>Ȳ</i>)²</span>. The <b>residual</b> of a point is <span class="m"><i>Y</i><sub><i>i</i></sub> − <i>Ŷ</i><sub><i>i</i></sub></span>. <b>Linearising</b> the three models:</p>
<div class="display">exponential <i>y</i> = <i>a</i>·<i>b</i><sup><i>x</i></sup>: &nbsp; <span class="c4">ln <i>y</i></span> = ln <i>a</i> + (ln <i>b</i>)<i>x</i><br>logarithmic <i>y</i> = <i>a</i> + <i>b</i> ln <i>x</i>: &nbsp; <i>y</i> is linear in <span class="c4">ln <i>x</i></span><br>power <i>y</i> = <i>a</i>·<i>x</i><sup><i>b</i></sup>: &nbsp; <span class="c4">ln <i>y</i></span> = ln <i>a</i> + <i>b</i> <span class="c4">ln <i>x</i></span></div>
<p>Fit the line to the transformed data, then back-transform: for the exponential, <span class="m"><i>a</i> = <i>e</i><sup><i>c</i></sup></span> and <span class="m"><i>b</i> = <i>e</i><sup><i>m</i></sup></span>; for the power model, <span class="m"><i>a</i> = <i>e</i><sup><i>c</i></sup></span> and <span class="m"><i>b</i> = <i>m</i></span>. The values <span class="m"><i>r</i></span> and <span class="m"><i>r</i>²</span> describe the fit of the transformed data, and the logarithms need <span class="m"><i>y</i> &gt; 0</span> (exponential, power) and <span class="m"><i>x</i> &gt; 0</span> (logarithmic, power).</p>`,
  legend: [
    { c: "c1", sym: `<i>x</i>`, name: "Input", desc: "The independent variable: time, distance, practice weeks." },
    { c: "c2", sym: `(<i>x</i><sub><i>i</i></sub>, <i>y</i><sub><i>i</i></sub>)`, name: "Data", desc: "The measured points; drag them in the lab." },
    { c: "c3", sym: `<i>y</i> = <i>f</i>(<i>x</i>)`, name: "Model curve", desc: "The fitted exponential, logarithmic, power or linear model." },
    { c: "c4", sym: `ln <i>y</i>, ln <i>x</i>`, name: "Transformed axis", desc: "The logarithmic scale that makes the data straight." },
    { c: "c5", sym: `<i>r</i>²`, name: "Fitted equation / r²", desc: "The model's coefficients and how well the line fits." }
  ],
  steps: {
    title: "How to fit a model by linearising",
    items: [
      `Plot the data and look at its shape: rising faster and faster (exponential), rising fast then slowly (logarithmic), passing near the origin with a curve (power).`,
      `Transform: <span class="m">(<i>x</i>, ln <i>y</i>)</span> for exponential, <span class="m">(ln <i>x</i>, <i>y</i>)</span> for logarithmic, <span class="m">(ln <i>x</i>, ln <i>y</i>)</span> for power.`,
      `Check the transformed points lie close to a line and the residuals show no pattern.`,
      `Fit the least-squares line <span class="m"><i>Y</i> = <i>c</i> + <i>mX</i></span> to the transformed points.`,
      `Back-transform <span class="m"><i>c</i></span> and <span class="m"><i>m</i></span> into <span class="m"><i>a</i></span> and <span class="m"><i>b</i></span> and write the model.`,
      `Predict with the model, and say whether the input lies inside the data range.`
    ]
  },
  example: {
    prompt: `A bacteria culture has 120, 190, 290, 470 and 720 cells per microlitre at hours 0, 1, 2, 3 and 4. Fit an exponential model and predict the count at hour 6.`,
    lines: [
      { math: `<span class="m">ln <i>y</i>: 4.787, 5.247, 5.670, 6.153, 6.579</span>`, note: "Take the natural log of each count." },
      { math: `<span class="m"><i>x̄</i> = 2, &nbsp; <i>Ȳ</i> ≈ 5.6873</span>`, note: "Means of the hours and of the logs." },
      { math: `<span class="m"><i>m</i> = <span class="fr"><span>Σ(<i>x</i> − 2)(<i>Y</i> − <i>Ȳ</i>)</span><span>10</span></span> ≈ <span class="fr"><span>4.4892</span><span>10</span></span> ≈ 0.4489</span>`, note: "The squared deviations of x add to 4 + 1 + 0 + 1 + 4 = 10." },
      { math: `<span class="m"><i>c</i> = 5.6873 − 0.4489 · 2 ≈ 4.7894</span>`, note: "Intercept of the line for ln y." },
      { math: `<span class="m"><i>a</i> = <i>e</i><sup>4.7894</sup> ≈ 120.2, &nbsp; <i>b</i> = <i>e</i><sup>0.4489</sup> ≈ 1.567</span>`, note: "Undo the logarithm." },
      { math: `<span class="m"><i>y</i> ≈ 120.2(1.567)<sup><i>x</i></sup>, &nbsp; <i>r</i>² ≈ 0.9997</span>`, note: "The logs lie almost exactly on a line." },
      { math: `<span class="m"><i>y</i>(6) ≈ 1778</span>`, note: "Hour 6 is outside the data, so this is an extrapolation." }
    ],
    answer: `<span class="m"><i>y</i> ≈ 120.2(1.567)<sup><i>x</i></sup></span>, growing about 56.7% an hour; about 1778 cells per microlitre at hour 6, if growth keeps the same pace.`
  },
  why: `<p>Scientists, engineers and analysts rarely get a formula handed to them. They get measurements, and they need a model to summarise them, compare them and predict. Logarithms turn the three most common curved patterns into straight lines, so one tool, the least-squares line, fits all of them. The same idea is behind log-scale graphs in news reports on epidemics and the log–log plots that reveal scaling laws in biology and physics.</p>`,
  careers: [
    { role: "Data analyst", use: "Fits growth curves to user or sales data and reports how well the model fits." },
    { role: "Microbiologist", use: "Fits exponential models to cell counts to find the doubling time of a culture." },
    { role: "Pharmacokineticist", use: "Fits exponential decay to blood concentration data to find a drug's half-life." },
    { role: "Astronomer", use: "Uses log–log fits of orbital data to find power laws such as Kepler's third law." },
    { role: "Actuary", use: "Fits exponential and power models to claim and mortality data to price insurance." },
    { role: "Materials engineer", use: "Fits power laws to fatigue and creep test data to predict how long parts last." }
  ],
  life: [
    "Log-scale charts of case counts in an epidemic",
    "How fast you improve when learning a skill",
    "The value of a car falling each year",
    "Predicting the next term of a growing account from past statements",
    "Why heavier animals have slower heartbeats"
  ],
  fields: [
    { name: "Statistics", use: "Least-squares regression on transformed data." },
    { name: "Biology", use: "Allometric power laws relate body size to metabolism and lifespan." },
    { name: "Physics", use: "Log–log plots reveal the exponent of a power law in experimental data." },
    { name: "Economics", use: "Log-linear models for growth rates and elasticities." }
  ],
  prereqWhy: {
    "a2-exp-models": "The exponential models being fitted here, and what their a and b mean.",
    "a2-log-props": "ln(ab) = ln a + ln b and ln(bˣ) = x ln b are what turn the curved models into straight lines.",
    "a1-linear-models": "Fitting a line of best fit to a scatter plot, and interpreting slope, intercept and r."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Statistics", why: "Regression analysis, residual plots and inference about fitted coefficients." },
    { field: "Data science", why: "Feature transforms and model selection start from the same linearising idea." },
    { field: "Physics", why: "Lab reports find power laws by fitting a line on a log–log plot." }
  ],
  mistakes: [
    { wrong: `Using the fitted intercept <span class="m"><i>c</i></span> as <span class="m"><i>a</i></span> in <span class="m"><i>y</i> = <i>a</i>·<i>b</i><sup><i>x</i></sup></span>.`, fix: `The line fits ln <i>y</i>, so <span class="m"><i>a</i> = <i>e</i><sup><i>c</i></sup></span> and <span class="m"><i>b</i> = <i>e</i><sup><i>m</i></sup></span>.` },
    { wrong: `Choosing the model with the largest <span class="m"><i>r</i>²</span> without looking at the plot.`, fix: `Check the shape and the residuals too. An <span class="m"><i>r</i>²</span> near 1 can hide a curved pattern, and r² values from different transformations are not directly comparable.` },
    { wrong: `Trusting a prediction far outside the data.`, fix: `Bacteria cannot grow exponentially forever; the model only describes the hours that were measured.` }
  ],
  practice: [
    { q: `Exponential data linearises to <span class="m">ln <i>y</i> = 0.7 + 0.405<i>x</i></span>. Write the model.`, a: `<span class="m"><i>a</i> = <i>e</i><sup>0.7</sup> ≈ 2.014</span>, <span class="m"><i>b</i> = <i>e</i><sup>0.405</sup> ≈ 1.499</span>: <span class="m"><i>y</i> ≈ 2.014(1.499)<sup><i>x</i></sup></span>.` },
    { q: `Power data linearises to <span class="m">ln <i>y</i> = 1.1 + 2 ln <i>x</i></span>. Write the model.`, a: `<span class="m"><i>y</i> = <i>e</i><sup>1.1</sup><i>x</i><sup>2</sup> ≈ 3.004<i>x</i><sup>2</sup></span>.` },
    { q: `Fit a model to (1, 3), (<i>e</i>, 5), (<i>e</i>², 7), (<i>e</i>³, 9) and predict <span class="m"><i>y</i></span> at <span class="m"><i>x</i> = 20</span>.`, a: `Against ln <i>x</i> = 0, 1, 2, 3 the values 3, 5, 7, 9 are exactly linear: <span class="m"><i>y</i> = 3 + 2 ln <i>x</i></span>, <span class="m"><i>r</i>² = 1</span>. Then <span class="m"><i>y</i>(20) = 3 + 2 ln 20 ≈ 8.991</span>.` },
    { q: `Orbital distances (AU) and periods (years): Mercury (0.387, 0.241), Venus (0.723, 0.615), Earth (1, 1), Mars (1.524, 1.881), Jupiter (5.203, 11.862). Fit a power model and predict Saturn's period at 9.537 AU.`, a: `On (ln <i>x</i>, ln <i>y</i>) the line has slope ≈ 1.499 and intercept ≈ 0.000, so <span class="m"><i>T</i> ≈ 1.000<i>d</i><sup>1.499</sup></span> (Kepler's third law, <span class="m"><i>T</i> = <i>d</i><sup>3/2</sup></span>). Saturn: <span class="m"><i>T</i> ≈ 29.42</span> years; the measured value is 29.46.` }
  ],
  origin: `<p>Adrien-Marie Legendre published the method of least squares in 1805 for fitting comet orbits, and Carl Friedrich Gauss, who had used it since 1795, gave its probabilistic justification in 1809. Johannes Kepler found the power law relating a planet's period to its distance in 1618, after years of working through tables of observations. He was an early champion of the logarithms John Napier published in 1614 and printed his own tables of them in 1624.</p>`
};
