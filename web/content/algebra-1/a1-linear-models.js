window.ARITH = window.ARITH || {};

ARITH["a1-linear-models"] = {
  title: "Linear Models & Line of Best Fit",
  short: "Fit a line to data, predict, and judge the fit",
  grade: "Grade 8–9 · college Elementary Algebra",
  hours: 5,
  voice: "plain",
  eyebrow: "Linear functions · modelling data",
  hero: `<span class="m"><span class="c1"><i>ŷ</i> = <i>mx</i> + <i>b</i></span> &nbsp;&nbsp;&nbsp; <span class="c4"><i>e</i> = <span class="c2"><i>y</i></span> − <i>ŷ</i></span></span>`,
  lede: `Real data never sit exactly on a line, but many sets of paired data follow a straight-line trend. A line of best fit summarises that trend, predicts new values, and its residuals show how far each point misses.`,
  plain: `<p>Plot paired data, such as temperature and drinks sold, as points on a <b>scatter plot</b>. If the points drift upward or downward in a roughly straight band, a line can describe the pattern. That line is a <b>linear model</b>: its slope is the average change in <span class="m"><i>y</i></span> for each one-unit increase in <span class="m"><i>x</i></span>, and its y-intercept is the predicted <span class="m"><i>y</i></span> when <span class="m"><i>x</i> = 0</span>.</p>
<p>Many lines could be drawn through a cloud of points. For each one, measure the vertical miss at every point: the <b>residual</b>, actual minus predicted. The <b>least-squares line</b> is the one line that makes the sum of the squared residuals as small as possible. Calculators and spreadsheets find it for you, and for small data sets you can compute it by hand.</p>
<p>The <b>correlation coefficient</b> <span class="m"><i>r</i></span> is a number between −1 and 1 that says how tightly the points hug a line. Values near 1 or −1 mean a strong linear pattern; values near 0 mean a weak one. Two cautions: a strong correlation does not prove that one variable causes the other, and predictions far outside the range of the data (extrapolation) are unreliable.</p>`,
  formal: `<p>Given data <span class="m">(<i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>), …, (<i>x</i><sub><i>n</i></sub>, <i>y</i><sub><i>n</i></sub>)</span> with means <span class="m"><i>x̄</i></span> and <span class="m"><i>ȳ</i></span>, the <b>least-squares regression line</b> <span class="m"><i>ŷ</i> = <i>mx</i> + <i>b</i></span> minimises <span class="m">Σ(<i>y</i><sub><i>i</i></sub> − <i>ŷ</i><sub><i>i</i></sub>)<sup>2</sup></span>. Its coefficients are</p>
<div class="display"><i>m</i> = <span class="fr"><span>Σ(<i>x</i><sub><i>i</i></sub> − <i>x̄</i>)(<i>y</i><sub><i>i</i></sub> − <i>ȳ</i>)</span><span>Σ(<i>x</i><sub><i>i</i></sub> − <i>x̄</i>)<sup>2</sup></span></span>, &nbsp;&nbsp; <i>b</i> = <i>ȳ</i> − <i>m</i><i>x̄</i><br><i>r</i> = <span class="fr"><span>Σ(<i>x</i><sub><i>i</i></sub> − <i>x̄</i>)(<i>y</i><sub><i>i</i></sub> − <i>ȳ</i>)</span><span>√<span style="text-decoration:overline">Σ(<i>x</i><sub><i>i</i></sub> − <i>x̄</i>)<sup>2</sup> · Σ(<i>y</i><sub><i>i</i></sub> − <i>ȳ</i>)<sup>2</sup></span></span></span>, &nbsp;&nbsp; −1 ≤ <i>r</i> ≤ 1</div>
<p>The line always passes through <span class="m">(<i>x̄</i>, <i>ȳ</i>)</span>, its residuals <span class="m"><i>e</i><sub><i>i</i></sub> = <i>y</i><sub><i>i</i></sub> − <i>ŷ</i><sub><i>i</i></sub></span> sum to 0, and the slope has the same sign as <span class="m"><i>r</i></span>. Using the model inside the range of the observed <span class="m"><i>x</i></span>-values is <b>interpolation</b>; outside it is <b>extrapolation</b>.</p>`,
  legend: [
    { c: "c2", sym: `(<i>x</i><sub><i>i</i></sub>, <i>y</i><sub><i>i</i></sub>)`, name: "Data points", desc: "The observed pairs plotted on the scatter plot." },
    { c: "c1", sym: `<i>ŷ</i> = <i>mx</i> + <i>b</i>`, name: "Best-fit line", desc: "The least-squares line. The hat on y marks a predicted value, not an observed one." },
    { c: "c4", sym: `<i>e</i> = <i>y</i> − <i>ŷ</i>`, name: "Residual", desc: "Observed minus predicted, the vertical gap from a point to the line. Positive means the point lies above the line." },
    { c: "c3", sym: `<i>r</i>`, name: "Correlation", desc: "A number from −1 to 1 measuring how closely the points follow a straight line and in which direction." }
  ],
  steps: { title: "How to build and use a linear model", items: [
    `Make a scatter plot and decide whether a straight-line pattern is reasonable. A curved pattern needs a different model.`,
    `Find the means <span class="m"><i>x̄</i></span> and <span class="m"><i>ȳ</i></span>.`,
    `For each point, compute <span class="m"><i>x</i> − <i>x̄</i></span> and <span class="m"><i>y</i> − <i>ȳ</i></span>. Add up their products and the squares <span class="m">(<i>x</i> − <i>x̄</i>)<sup>2</sup></span>.`,
    `Divide to get the slope <span class="m"><i>m</i></span>, then <span class="m"><i>b</i> = <i>ȳ</i> − <i>m</i><i>x̄</i></span>. (A calculator's linear regression gives the same numbers plus <span class="m"><i>r</i></span>.)`,
    `Interpret the slope and intercept in the units of the problem.`,
    `Predict by substituting an <span class="m"><i>x</i></span>-value, preferably inside the data range, and judge the fit from <span class="m"><i>r</i></span> and the residuals.`
  ] },
  example: {
    prompt: `A café records the daily high temperature <span class="m"><i>x</i></span> (°F) and iced drinks sold <span class="m"><i>y</i></span> on five days: (60, 40), (65, 48), (70, 55), (75, 61), (80, 71). Find the least-squares line, predict sales on an 85°F day, and find the residual for the 75°F day.`,
    lines: [
      { math: `<span class="m"><i>x̄</i> = 70, &nbsp; <i>ȳ</i> = <span class="fr"><span>275</span><span>5</span></span> = 55</span>`, note: "Means of the temperatures and of the sales." },
      { math: `<span class="m"><i>x</i> − <i>x̄</i>: −10, −5, 0, 5, 10 &nbsp;&nbsp; <i>y</i> − <i>ȳ</i>: −15, −7, 0, 6, 16</span>`, note: "Deviations from the means for each day." },
      { math: `<span class="m">Σ(<i>x</i> − <i>x̄</i>)(<i>y</i> − <i>ȳ</i>) = 150 + 35 + 0 + 30 + 160 = 375, &nbsp; Σ(<i>x</i> − <i>x̄</i>)<sup>2</sup> = 250</span>`, note: "The two sums in the slope formula." },
      { math: `<span class="m"><i>m</i> = <span class="fr"><span>375</span><span>250</span></span> = 1.5, &nbsp; <i>b</i> = 55 − 1.5(70) = −50</span>`, note: "About 1.5 more drinks for each extra degree." },
      { math: `<span class="m c1"><i>ŷ</i> = 1.5<i>x</i> − 50</span>`, note: "The line of best fit. The intercept has no real meaning here, since 0°F is far outside the data." },
      { math: `<span class="m"><i>ŷ</i>(85) = 127.5 − 50 = 77.5</span>`, note: "Predict about 78 drinks at 85°F, a mild extrapolation." },
      { math: `<span class="m c4"><i>e</i> = 61 − (1.5 · 75 − 50) = 61 − 62.5 = −1.5</span>`, note: "The 75°F day sold 1.5 drinks fewer than the model predicts." }
    ],
    answer: `The model is <span class="m"><i>ŷ</i> = 1.5<i>x</i> − 50</span>, with <span class="m"><i>r</i> ≈ 0.997</span>, a very strong positive linear relationship. It predicts about 78 drinks at 85°F, and the 75°F day has residual <span class="m">−1.5</span>.`
  },
  why: `<p>Linear models are the first tool people reach for when they have data and want to predict: sales from advertising, fuel use from distance, a child's height from age, house price from floor area. The slope turns a messy table into one rate you can quote and act on.</p>
<p>Knowing how the line is chosen, and what residuals and <span class="m"><i>r</i></span> say, protects you from bad conclusions. It is the entry point to statistics, data science and machine learning, where the same least-squares idea is scaled up to many variables.</p>`,
  careers: [
    { role: "Data analyst", use: "Fits regression lines in a spreadsheet or Python to estimate how sales change with advertising spend." },
    { role: "Laboratory technician", use: "Builds a linear calibration curve of instrument reading against known concentrations and reads unknown samples from it." },
    { role: "Real estate appraiser", use: "Uses regression of sale price on square footage from comparable homes to support a valuation." },
    { role: "Sports analyst", use: "Models points scored against shots attempted or minutes played to compare player efficiency." },
    { role: "Environmental scientist", use: "Fits a trend line to yearly temperature or pollution measurements to estimate the rate of change." },
    { role: "Operations manager", use: "Regresses staffing hours on customer volume to forecast how many staff a busy day needs." }
  ],
  life: [
    "Estimating a monthly electricity bill from the average outdoor temperature",
    "Judging whether more study hours have been paying off in quiz scores",
    "Predicting when a savings balance growing steadily will reach a goal",
    "Reading a news chart with a trend line and asking whether the claim holds",
    "Tracking running pace against weekly distance to see training progress"
  ],
  fields: [
    { name: "Statistics", use: "Simple linear regression and correlation are core topics, with tests of whether the slope differs from 0." },
    { name: "Chemistry", use: "Beer's law calibration plots of absorbance against concentration are fitted with least squares." },
    { name: "Economics", use: "Econometrics estimates relationships such as demand against price with regression." },
    { name: "Machine learning", use: "Linear regression is the simplest supervised learning model, trained by minimising squared error." }
  ],
  prereqWhy: {
    "a1-line-forms": "Writing, interpreting and converting the model line uses slope, intercepts and point-slope form."
  },
  unlocksWhy: {
    "pc-fitting-models": "Fitting a line to scatter data and reading its slope, intercept and correlation is the step Precalculus repeats after taking logarithms, so an exponential or power model is fitted as a straight line on transformed data."
  },
  beyond: [
    { field: "Statistics", why: "Regression inference, confidence intervals for the slope and multiple regression all build on the least-squares line." },
    { field: "Linear Algebra", why: "Least squares is solved in general by the normal equations AᵀAx = Aᵀb, a projection onto a subspace." },
    { field: "Calculus I", why: "The least-squares formulas come from setting derivatives of the squared-error sum to zero." },
    { field: "Economics", why: "Estimating elasticities and forecasting uses regression models fitted to real data." }
  ],
  mistakes: [
    { wrong: `Computing a residual as predicted minus observed.`, fix: `A residual is <span class="m"><i>e</i> = <i>y</i> − <i>ŷ</i></span>, observed minus predicted. A negative residual means the point is below the line.` },
    { wrong: `"<span class="m"><i>r</i> = 0.9</span> between ice cream sales and drownings, so ice cream causes drowning."`, fix: `Correlation is not causation. Both rise in hot weather; a third variable (temperature) drives both.` },
    { wrong: `Using <span class="m"><i>ŷ</i> = 1.5<i>x</i> − 50</span> to predict drink sales at 20°F and getting <span class="m">−20</span>.`, fix: `That is extrapolation far outside the data (60 to 80°F). The model is only trustworthy near the observed range.` },
    { wrong: `Concluding "no relationship" from <span class="m"><i>r</i> ≈ 0</span>.`, fix: `<span class="m"><i>r</i></span> only measures linear association. Data following a U-shaped curve can have <span class="m"><i>r</i> ≈ 0</span> and a very strong relationship.` }
  ],
  practice: [
    { q: `A model for a plant's height is <span class="m"><i>ŷ</i> = 2.5<i>x</i> + 10</span> cm after <span class="m"><i>x</i></span> weeks. Predict the height at 8 weeks and interpret the slope.`, a: `<span class="m">2.5(8) + 10 = 30</span> cm. The plant grows about 2.5 cm per week.` },
    { q: `A car's value is modelled by <span class="m"><i>ŷ</i> = −1,200<i>x</i> + 18,000</span> dollars at age <span class="m"><i>x</i></span> years. Interpret both numbers, and find the residual for a 5-year-old car that sold for $13,500.`, a: `It loses about $1,200 per year, and the model's value for a new car is $18,000. Predicted at 5 years: <span class="m">−6,000 + 18,000 = 12,000</span>. Residual <span class="m">13,500 − 12,000 = 1,500</span>: it sold for $1,500 more than predicted.` },
    { q: `A plumber charged $150 for a 2-hour job and $250 for a 6-hour job. Write a linear model for cost by hours and predict a 4.5-hour job.`, a: `<span class="m"><i>m</i> = <span class="fr"><span>250 − 150</span><span>6 − 2</span></span> = 25</span>. <span class="m"><i>y</i> − 150 = 25(<i>x</i> − 2)</span>, so <span class="m"><i>y</i> = 25<i>x</i> + 100</span>: a $100 call-out fee plus $25 per hour. At 4.5 hours: <span class="m">$212.50</span>.` },
    { q: `Find the least-squares line and <span class="m"><i>r</i></span> for the points <span class="m">(1, 2), (2, 3), (3, 5), (4, 6)</span>.`, a: `<span class="m"><i>x̄</i> = 2.5</span>, <span class="m"><i>ȳ</i> = 4</span>. Products of deviations: <span class="m">3 + 0.5 + 0.5 + 3 = 7</span>; <span class="m">Σ(<i>x</i> − <i>x̄</i>)<sup>2</sup> = 5</span>; <span class="m">Σ(<i>y</i> − <i>ȳ</i>)<sup>2</sup> = 10</span>. <span class="m"><i>m</i> = 1.4</span>, <span class="m"><i>b</i> = 4 − 1.4(2.5) = 0.5</span>, so <span class="m"><i>ŷ</i> = 1.4<i>x</i> + 0.5</span>. <span class="m"><i>r</i> = 7/√50 ≈ 0.990</span>.` }
  ],
  origin: `Adrien-Marie Legendre published the method of least squares in 1805, and Carl Friedrich Gauss published his own account in 1809, saying he had used it since 1795. Francis Galton introduced the term "regression" in the 1880s while studying the heights of parents and children, and Karl Pearson developed the correlation coefficient <span class="m"><i>r</i></span> in the 1890s.`
};
