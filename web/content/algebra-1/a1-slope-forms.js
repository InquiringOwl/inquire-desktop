window.ARITH = window.ARITH || {};

ARITH["a1-slope-forms"] = {
  title: "Slope & Slope-Intercept Form",
  short: "y = mx + b: steepness m, starting value b",
  grade: "Grade 8–9 · college Elementary Algebra",
  hours: 5,
  voice: "plain",
  eyebrow: "Linear functions · the equation of a line",
  hero: `<span class="m c1"><i>y</i> = <span class="c3"><i>m</i></span><i>x</i> + <span class="c2"><i>b</i></span></span>, &nbsp; <span class="m"><span class="c3"><i>m</i></span> = <span class="fr"><span><i>y</i><sub>2</sub> − <i>y</i><sub>1</sub></span><span><i>x</i><sub>2</sub> − <i>x</i><sub>1</sub></span></span></span>`,
  lede: `Every non-vertical line can be written <span class="m"><i>y</i> = <span class="c3"><i>m</i></span><i>x</i> + <span class="c2"><i>b</i></span></span>. The slope <span class="m c3"><i>m</i></span> is the rate of change, and <span class="m c2"><i>b</i></span> is where the line crosses the <span class="m"><i>y</i></span>-axis.`,
  plain: `<p>A line has two features that pin it down: how steep it is and where it starts. The <b>slope</b> <span class="m"><i>m</i></span> is the steepness, the change in <span class="m"><i>y</i></span> for each step of 1 in <span class="m"><i>x</i></span>. You find it from any two points as rise over run. The <b>y-intercept</b> <span class="m"><i>b</i></span> is the value of <span class="m"><i>y</i></span> when <span class="m"><i>x</i> = 0</span>, the point <span class="m">(0, <i>b</i>)</span> where the line crosses the vertical axis.</p>
<p>Put them together and you get <span class="m"><i>y</i> = <i>mx</i> + <i>b</i></span>, the <b>slope-intercept form</b>. A gym charges a $40 joining fee and $25 a month: after <span class="m"><i>x</i></span> months you have paid <span class="m"><i>y</i> = 25<i>x</i> + 40</span>. The 25 is the rate and the 40 is the starting amount.</p>
<p>The sign of the slope tells you the direction. Positive slope rises from left to right, negative slope falls, and zero slope is a flat horizontal line. A vertical line has no slope at all (its run is zero), so it cannot be written in this form. Its equation is <span class="m"><i>x</i> = </span> a constant.</p>`,
  formal: `<p>The <b>slope</b> of the line through <span class="m">(<i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>)</span> and <span class="m">(<i>x</i><sub>2</sub>, <i>y</i><sub>2</sub>)</span> with <span class="m"><i>x</i><sub>1</sub> ≠ <i>x</i><sub>2</sub></span> is</p>
<div class="display"><span class="c3"><i>m</i></span> = <span class="fr"><span>Δ<i>y</i></span><span>Δ<i>x</i></span></span> = <span class="fr"><span><i>y</i><sub>2</sub> − <i>y</i><sub>1</sub></span><span><i>x</i><sub>2</sub> − <i>x</i><sub>1</sub></span></span></div>
<p>and it is the same for every pair of distinct points on the line. A non-vertical line with slope <span class="m"><i>m</i></span> and <b>y-intercept</b> <span class="m">(0, <i>b</i>)</span> has equation <span class="m"><i>y</i> = <i>mx</i> + <i>b</i></span>, so it is the graph of the <b>linear function</b> <span class="m"><i>f</i>(<i>x</i>) = <i>mx</i> + <i>b</i></span>. Horizontal lines have <span class="m"><i>m</i> = 0</span> and equation <span class="m"><i>y</i> = <i>b</i></span>. Vertical lines <span class="m"><i>x</i> = <i>a</i></span> have <b>undefined</b> slope and are not graphs of functions.</p>`,
  legend: [
    { c: "c3", sym: `<i>m</i>`, name: "Slope", desc: "Rise over run: the change in y for each increase of 1 in x. Positive rises, negative falls, zero is flat." },
    { c: "c2", sym: `<i>b</i>`, name: "y-intercept", desc: "The value of y when x = 0, where the line crosses the y-axis at (0, b)." },
    { c: "c1", sym: `<i>y</i> = <i>mx</i> + <i>b</i>`, name: "The line", desc: "Every point (x, y) on it satisfies the equation, and every solution of the equation lies on it." }
  ],
  steps: { title: "How to find and use y = mx + b", items: [
    `From two points, compute <span class="m c3"><i>m</i></span> <span class="m">= (<i>y</i><sub>2</sub> − <i>y</i><sub>1</sub>)/(<i>x</i><sub>2</sub> − <i>x</i><sub>1</sub>)</span>, subtracting in the same order on top and bottom.`,
    `Substitute <span class="m c3"><i>m</i></span> and either point into <span class="m"><i>y</i> = <i>mx</i> + <i>b</i></span> and solve for <span class="m c2"><i>b</i></span>.`,
    `Write the equation with the numbers for <span class="m"><i>m</i></span> and <span class="m"><i>b</i></span> in place.`,
    `To graph, plot <span class="m">(0, <i>b</i>)</span>, then move by the rise and run of the slope to a second point, and draw the line.`,
    `If an equation is in another form, solve it for <span class="m"><i>y</i></span> to read off <span class="m"><i>m</i></span> and <span class="m"><i>b</i></span>.`,
    `Check that both original points satisfy your equation.`
  ] },
  example: {
    prompt: `A tomato seedling is 11 cm tall on day 4 and 20 cm tall on day 10, growing at a steady rate. Write its height <span class="m"><i>h</i></span> as a function of day <span class="m"><i>d</i></span>, and predict its height on day 16.`,
    lines: [
      { math: `<span class="m"><span class="c3"><i>m</i></span> = <span class="fr"><span>20 − 11</span><span>10 − 4</span></span> = <span class="fr"><span>9</span><span>6</span></span> = 1.5</span>`, note: "The slope is the growth rate: 1.5 cm per day." },
      { math: `<span class="m">11 = 1.5(4) + <span class="c2"><i>b</i></span></span>`, note: "Substitute the point (4, 11) into h = md + b." },
      { math: `<span class="m"><span class="c2"><i>b</i></span> = 11 − 6 = 5</span>`, note: "The seedling was 5 cm tall at day 0." },
      { math: `<span class="m c1"><i>h</i> = 1.5<i>d</i> + 5</span>`, note: "Slope-intercept form." },
      { math: `<span class="m">1.5(10) + 5 = 20 ✓</span>`, note: "Check with the other point, (10, 20)." },
      { math: `<span class="m"><i>h</i>(16) = 1.5(16) + 5 = 29</span>`, note: "Predict day 16." }
    ],
    answer: `<span class="m"><i>h</i> = 1.5<i>d</i> + 5</span>, and the model predicts a height of <span class="m">29</span> cm on day 16.`
  },
  why: `<p>Any quantity that changes at a constant rate follows a line: a bill with a fixed fee and a per-unit charge, a car's distance at a steady speed, a salary with a flat raise each year. Slope-intercept form lets you read the rate and the starting value straight from the equation and make predictions from two measurements.</p>
<p>Slope is the idea that calculus generalises. The derivative of a function is the slope of its tangent line, and linear approximation replaces a curve by <span class="m"><i>y</i> = <i>mx</i> + <i>b</i></span> near a point.</p>`,
  careers: [
    { role: "Civil engineer", use: "Designs road grades and wheelchair ramps by slope, such as the ADA maximum ramp slope of 1:12." },
    { role: "Economist", use: "Interprets the slope of a linear cost function as the marginal cost of one more unit." },
    { role: "Roofer", use: "Describes roof pitch as rise over run, such as 6 inches of rise per 12 inches of run." },
    { role: "Lab technician", use: "Fits a straight calibration line of instrument reading against known concentration and uses its slope and intercept to convert readings." },
    { role: "Sales manager", use: "Models revenue as a linear function of units sold to forecast from recent data." },
    { role: "Hydrologist", use: "Estimates a stream's rate of rise from two gauge readings and projects when it will reach flood stage." }
  ],
  life: [
    "Comparing phone or gym plans with a fixed fee plus a monthly charge",
    "Predicting when you will reach a savings goal with steady deposits",
    "Reading the steepness of a hiking trail or a road sign warning of a 6% grade",
    "Estimating a taxi fare from the base fare and the per-mile rate",
    "Tracking steady weight change in a pet or a growing plant"
  ],
  fields: [
    { name: "Physics", use: "On a position–time graph the slope is velocity, and on a velocity–time graph it is acceleration." },
    { name: "Economics", use: "Linear supply, demand and cost curves are described by their slopes and intercepts." },
    { name: "Chemistry", use: "Calibration curves and Beer–Lambert law plots are straight lines read by slope." },
    { name: "Geography", use: "Gradients of terrain are rise over run, read from contour maps." }
  ],
  prereqWhy: {
    "a1-functions": "Writing a line as f(x) = mx + b and reading its intercept as f(0) uses function notation.",
    "pa-slope": "Slope as rise over run and as a rate of change is the m in slope-intercept form."
  },
  unlocksWhy: {
    "a1-line-forms": "Point-slope and standard form are other ways of writing the same line, converted to and from y = mx + b.",
    "pc-function-behavior": "The slope between two points, rise over run with units, becomes the average rate of change (<i>f</i>(<i>b</i>) − <i>f</i>(<i>a</i>))/(<i>b</i> − <i>a</i>) of any function over an interval."
  },
  beyond: [
    { field: "Calculus I", why: "The derivative is the slope of the tangent line, and tangent lines are written using slope-intercept or point-slope form." },
    { field: "Statistics", why: "Regression lines are written ŷ = a + bx, with the slope interpreted as the predicted change in y per unit of x." },
    { field: "Physics", why: "Slopes of motion graphs give velocity and acceleration." },
    { field: "Economics", why: "Marginal cost and marginal revenue are slopes of cost and revenue functions." }
  ],
  mistakes: [
    { wrong: `Subtracting in opposite orders: <span class="m"><i>m</i> = (20 − 11)/(4 − 10)</span>.`, fix: `Use the same point first on top and bottom: <span class="m">(20 − 11)/(10 − 4) = 1.5</span>.` },
    { wrong: `Reading <span class="m"><i>m</i> = 3</span> and <span class="m"><i>b</i> = 2</span> from <span class="m">3<i>x</i> + 2<i>y</i> = 8</span>.`, fix: `Solve for <span class="m"><i>y</i></span> first: <span class="m"><i>y</i> = −<span class="fr"><span>3</span><span>2</span></span><i>x</i> + 4</span>, so <span class="m"><i>m</i> = −<span class="fr"><span>3</span><span>2</span></span></span> and <span class="m"><i>b</i> = 4</span>.` },
    { wrong: `Saying a vertical line has slope 0.`, fix: `A horizontal line has slope 0. A vertical line has run 0, so its slope is undefined, and its equation is <span class="m"><i>x</i> = <i>a</i></span>.` }
  ],
  practice: [
    { q: `Find the slope of the line through <span class="m">(2, −1)</span> and <span class="m">(6, 7)</span>.`, a: `<span class="m"><i>m</i> = <span class="fr"><span>7 − (−1)</span><span>6 − 2</span></span> = <span class="fr"><span>8</span><span>4</span></span> = 2</span>.` },
    { q: `Find the slope and y-intercept of <span class="m">3<i>x</i> + 2<i>y</i> = 8</span>.`, a: `<span class="m">2<i>y</i> = −3<i>x</i> + 8</span>, so <span class="m"><i>y</i> = −<span class="fr"><span>3</span><span>2</span></span><i>x</i> + 4</span>. Slope <span class="m">−<span class="fr"><span>3</span><span>2</span></span></span>, y-intercept <span class="m">(0, 4)</span>.` },
    { q: `Write the equation of the line through <span class="m">(−3, 4)</span> and <span class="m">(3, 0)</span> in slope-intercept form.`, a: `<span class="m"><i>m</i> = <span class="fr"><span>0 − 4</span><span>3 − (−3)</span></span> = −<span class="fr"><span>2</span><span>3</span></span></span>. Then <span class="m">0 = −<span class="fr"><span>2</span><span>3</span></span>(3) + <i>b</i></span>, so <span class="m"><i>b</i> = 2</span>: <span class="m"><i>y</i> = −<span class="fr"><span>2</span><span>3</span></span><i>x</i> + 2</span>.` },
    { q: `Find the equation of the line through <span class="m">(4, −2)</span> and <span class="m">(4, 5)</span>. Can it be written in slope-intercept form?`, a: `The run is <span class="m">4 − 4 = 0</span>, so the slope is undefined. The line is vertical with equation <span class="m"><i>x</i> = 4</span>. It cannot be written as <span class="m"><i>y</i> = <i>mx</i> + <i>b</i></span>.` }
  ],
  origin: `Pierre de Fermat and René Descartes independently developed coordinate geometry in the 1630s, and Fermat showed that every first-degree equation in two unknowns graphs as a straight line. Why the letter <span class="m"><i>m</i></span> is used for slope is not known for certain.`
};
