window.ARITH = window.ARITH || {};

ARITH["averages"] = {
  title: "Mean, Median & Mode",
  short: "Three ways to describe a typical value",
  grade: "Grade 6",
  hours: 5,
  voice: "plain",
  eyebrow: "Data · measures of center",
  hero: `<span class="m"><span class="c1"><i>x̄</i></span> = <span class="fr"><span><i>x</i><sub>1</sub> + <i>x</i><sub>2</sub> + ⋯ + <i>x</i><sub><i>n</i></sub></span><span><i>n</i></span></span></span>`,
  lede: `The mean is the balance point of the data. The median is the middle value, and the mode is the most common one.`,
  plain: `<p>When someone asks how long your commute usually takes, one number has to stand for many days. Say this week's trips took 22, 25, 34, 28, 25, 90 and 31 minutes, and the 90 was a day with a road closure. There are three standard ways to pick a typical value.</p>
<p>The <b>mean</b> is what most people call the average: add the values and divide by how many there are, <span class="m">255 ÷ 7 ≈ 36.4</span> minutes. The <b>median</b> is the middle value once the data is in order, here 28 minutes. The <b>mode</b> is the value that occurs most often, here 25 minutes.</p>
<p>They disagree because of one bad day. The 90 pulls the mean above six of the seven trips, while the median barely notices it. That is why reports on home prices and incomes usually quote the median. The mean uses every value. The median resists extreme ones.</p>`,
  formal: `<p>For data values <span class="m"><i>x</i><sub>1</sub>, …, <i>x</i><sub><i>n</i></sub></span>, let <span class="m"><i>x</i><sub>(1)</sub> ≤ <i>x</i><sub>(2)</sub> ≤ ⋯ ≤ <i>x</i><sub>(<i>n</i>)</sub></span> be the values in increasing order.</p>
<div class="display"><b>Mean:</b> <span class="c1"><i>x̄</i></span> = <span class="fr"><span>1</span><span><i>n</i></span></span> ∑<sub><i>i</i>=1</sub><sup><i>n</i></sup> <i>x</i><sub><i>i</i></sub> &nbsp;&nbsp; <span class="dim">∑ (<i>x</i><sub><i>i</i></sub> − <i>x̄</i>) = 0</span><br><b>Median:</b> <span class="c2"><i>x</i><sub>((<i>n</i>+1)/2)</sub></span> if <i>n</i> is odd; &nbsp;<span class="c2"><span class="fr"><span><i>x</i><sub>(<i>n</i>/2)</sub> + <i>x</i><sub>(<i>n</i>/2+1)</sub></span><span>2</span></span></span> if <i>n</i> is even<br><b>Mode:</b> any value of greatest frequency</div>
<p>The deviations from the mean sum to zero, which is why the mean is the balance point. A data set may have one mode, several modes, or none (when every value occurs equally often). The mean minimises the sum of squared deviations, and the median minimises the sum of absolute deviations.</p>`,
  legend: [
    { c: "c1", sym: `<i>x̄</i>`, name: "Mean", desc: "The sum divided by the count. The balance point of the dot plot." },
    { c: "c2", sym: `<i>M</i>`, name: "Median", desc: "The middle value of the ordered data, or the average of the two middle values." },
    { c: "c3", sym: `Mo`, name: "Mode", desc: "The most frequent value. There can be more than one." },
    { c: "c4", sym: `<i>n</i>`, name: "Count", desc: "The number of data values." }
  ],
  steps: { title: "How to find the mean, median and mode", items: [
    `Write the data in order from least to greatest and count the values <span class="m"><i>n</i></span>.`,
    `<b>Mean:</b> add all the values and divide by <span class="m"><i>n</i></span>.`,
    `<b>Median:</b> if <span class="m"><i>n</i></span> is odd, take the middle value. If even, average the two middle values.`,
    `<b>Mode:</b> find the value or values that appear most often.`,
    `Compare them. If the mean is far from the median, look for an outlier or skew.`
  ] },
  example: {
    prompt: `Your commute times this week (in minutes) were 22, 25, 34, 28, 25, 90 and 31. The 90 was a day with a road closure. Find the mean, median and mode. Which best describes a typical day?`,
    lines: [
      { math: `<span class="m">22, 25, 25, 28, 31, 34, 90</span>`, note: "Sort the data. There are n = 7 values." },
      { math: `<span class="m">22 + 25 + 25 + 28 + 31 + 34 + 90 = 255</span>`, note: "Add all the values." },
      { math: `<span class="m"><span class="c1"><i>x̄</i></span> = 255 ÷ 7 ≈ <span class="c1">36.4</span></span>`, note: "Mean, rounded to one decimal place." },
      { math: `<span class="m"><span class="c2"><i>M</i></span> = <i>x</i><sub>(4)</sub> = <span class="c2">28</span></span>`, note: "With 7 values the median is the 4th." },
      { math: `<span class="m"><span class="c3">Mo</span> = <span class="c3">25</span></span>`, note: "25 appears twice. Every other value appears once." }
    ],
    answer: `Mean <span class="m">≈ 36.4</span> min, median <span class="m">28</span> min, mode <span class="m">25</span> min. The median best describes a typical day, because the one 90-minute outlier pulls the mean higher than six of the seven commutes.`
  },
  why: `<p>Quoting the wrong average misleads. A few very large salaries can lift a company's mean pay far above what most of its staff earn. A store that stocked shoes by the mean size would order a size that does not exist, such as 9.3, when the mode tells it which size actually sells.</p>
<p>With the right measure you can set a target, such as the score you need on a final test, track your spending month by month, compare neighbourhoods by median price, or notice when a process starts to drift because its mean has moved.</p>
<p>The mean is the starting point of statistics. Variance and standard deviation measure spread around it, and the expected value in probability is a weighted mean. The median leads to quartiles and box plots, and to methods that are not thrown off by outliers.</p>`,
  careers: [
    { role: "Real estate appraiser", use: "Uses median sale prices of comparable homes because a few luxury sales would distort the mean." },
    { role: "Teacher", use: "Computes mean scores to set grades and compares class medians to spot uneven results." },
    { role: "Meteorologist", use: "Reports normal temperatures as 30-year means for each calendar day." },
    { role: "Human resources analyst", use: "Compares median salaries across roles when setting pay bands." },
    { role: "Quality engineer", use: "Tracks the mean of sample measurements on control charts to see if a process has drifted." },
    { role: "Retail manager", use: "Uses the mode of shoe or clothing sizes sold to decide which sizes to stock most." }
  ],
  life: [
    "Working out what score you need on the next test to hit a target average",
    "Understanding median home prices in a news report",
    "Tracking your average monthly spending",
    "Comparing typical wait times at two clinics",
    "Choosing the most common size when ordering team shirts"
  ],
  fields: [
    { name: "Statistics", use: "Measures of centre are the first summary of any data set." },
    { name: "Economics", use: "Median household income and mean GDP per person describe living standards." },
    { name: "Psychology", use: "Experiments compare mean responses between groups." },
    { name: "Public health", use: "Median age, mean blood pressure and similar summaries describe populations." }
  ],
  layers: {
    concept: {
      lede: `When one number has to stand for many, which number should it be? Mean, median and mode are three answers, and each suits a different job.`,
      heading: `What are mean, median and mode?`,
      history: `<p><b>The problem.</b> Merchants and sailors needed a fair way to share a loss. In medieval sea trade, when cargo was thrown overboard to save a ship in a storm, the loss was split among all the merchants aboard. Astronomers had a different problem: repeated measurements of a planet's position or the Moon's diameter never agreed exactly, and they needed one value to work with.</p>
<p><b>The solution.</b> The shared-loss calculation, called general average, gave English the word <i>average</i>. It comes from the Latin <i>avaria</i>, used in Genoa in the 12th and 13th centuries for damage and unusual costs on a voyage. From the late 1500s, taking the arithmetic mean of many measurements became a common way to reduce measurement error, a method developed mainly in astronomy. Navigators estimating latitude in poor weather also looked for summary values, and the idea of the median may first appear in Edward Wright's 1599 book <i>Certaine Errors in Navigation</i>.</p>
<p><b>What it changed.</b> In 1774 Pierre-Simon Laplace proposed the median as an estimator, and Francis Galton gave it the name "median" in 1881. Karl Pearson introduced the term "mode" in 1895. The three measures now sit behind weather normals, test reports, salary surveys and the median home price in every housing report.</p>`,
      sources: [
        { title: "Average (Wikipedia)", url: "https://en.wikipedia.org/wiki/Average" },
        { title: "Median (Wikipedia)", url: "https://en.wikipedia.org/wiki/Median" },
        { title: "Mode (statistics) (Wikipedia)", url: "https://en.wikipedia.org/wiki/Mode_(statistics)" }
      ],
      examples: [
        { role: "Real estate appraiser", scene: `Five comparable homes sold for $310,000, $325,000, $330,000, $340,000 and $1,200,000. The median is <b>$330,000</b>. The mean is <span class="m">2,505,000 ÷ 5 = 501,000</span>.`, takeaway: "One luxury sale would have inflated the value by more than half." },
        { role: "Teacher", scene: `Five quiz scores are 72, 85, 90, 64 and 89. Mean: <span class="m">400 ÷ 5 = 80</span>. Sorted, 64, 72, 85, 89, 90, so the median is <b>85</b>.`, takeaway: "A median above the mean shows a few low scores pulling the average down." },
        { role: "Meteorologist", scene: `The high temperatures on one calendar date over 30 years add up to 2,550 °F. The normal high is <span class="m">2,550 ÷ 30 = 85</span> °F.`, takeaway: "A \"normal\" in a forecast is a long-run mean." },
        { role: "Human resources analyst", scene: `Six salaries in a team are $48k, $52k, $55k, $61k, $64k and $250k. Median: <span class="m">(55 + 61) ÷ 2 = 58</span>, so <b>$58k</b>. Mean: <span class="m">530 ÷ 6 ≈ 88.3</span>, about $88k.`, takeaway: "The median shows what a typical team member is paid." },
        { role: "Quality engineer", scene: `Four bolts from a line measure 10.02, 9.98, 10.05 and 10.03 mm. Mean: <span class="m">40.08 ÷ 4 = 10.02</span> mm, against a target of 10.00 mm.`, takeaway: "A mean that creeps away from the target is an early warning of drift." },
        { role: "Retail manager", scene: `Last month a store sold 14 pairs in size 8, 22 in size 9 and 17 in size 10. The mode is <b>size 9</b>.`, takeaway: "The mode answers \"what sells most\", which decides what to restock first." }
      ]
    },
    build: {
      lede: `Sort the data and count it, then add and divide for the mean, find the middle for the median, and look for the most frequent value for the mode.`,
      intro: `<p>The model is a dot plot. Each dot is one data value on a number line from 0 to 20, and equal values stack. The amber triangle is the mean, the point where the line would balance. The dashed cyan line is the median, and pink dots mark the mode. Drag a dot, or add the outlier at 20, and watch the mean slide toward it while the median moves much less.</p>`,
      stepWhy: [
        `Sorting makes the middle visible and puts repeated values side by side, which makes the mode easy to spot. The count <i>n</i> is needed for the mean and for the median's position.`,
        `Adding gives the total, and dividing by <i>n</i> shares it out equally. In the commute example, 255 minutes spread over 7 days is about 36.4 minutes a day.`,
        `Half the values sit at or below the median and half at or above. With an odd count one value is in the middle, at position <span class="m">(<i>n</i> + 1)/2</span>. With an even count no single value is, so the two middle values are averaged.`,
        `The mode answers a different question: which value occurs most often? It is the only one of the three that also works for categories such as sizes or colours.`,
        `Every value pulls on the mean, while the median depends only on the order. A large gap between them signals an extreme value or a long tail, and then the median usually describes a typical case better.`
      ],
      bridge: `<p>The commute problem is the pattern behind most everyday averages: list the values, compute the three measures, then decide which one honestly describes a typical case.</p>`,
      tasks: [
        { task: "Working out what score you need on the next test to hit a target average", link: `Practice item 4: the target mean times the count gives the total needed. Subtract what you have: <span class="m">425 − 336 = 89</span>.` },
        { task: "Understanding median home prices in a news report", link: `A few very expensive homes act like the 90-minute commute: they pull the mean up. Step 5 is why reports give the median.` },
        { task: "Tracking your average monthly spending", link: `Step 2: add the months and divide by how many, as the 255 minutes were divided by 7.` },
        { task: "Comparing typical wait times at two clinics", link: `Compare medians when a few waits are very long, as the median of 28 minutes set aside the road closure.` },
        { task: "Choosing the most common size when ordering team shirts", link: `Step 4: order most of the modal size, as 8 was the most frequent value in practice item 3.` }
      ]
    },
    formal: {
      setup: { title: "Writing a measure of center", items: [
        { say: `<b>Name the data.</b> Give the values letters with subscripts, state the units and the count.`, math: `<span class="m"><i>x</i><sub>1</sub>, …, <i>x</i><sub>7</sub> = 22, 25, 34, 28, 25, 90, 31</span> minutes, &nbsp;<span class="m"><span class="c4"><i>n</i></span> = 7</span>` },
        { say: `<b>Write the order statistics.</b> Sorted values get bracketed subscripts.`, math: `<span class="m"><i>x</i><sub>(1)</sub> ≤ ⋯ ≤ <i>x</i><sub>(7)</sub>: &nbsp;22, 25, 25, 28, 31, 34, 90</span>` },
        { say: `<b>Compute the mean.</b> Sum the values and divide by the count.`, math: `<span class="m"><span class="c1"><i>x̄</i></span> = <span class="fr"><span>1</span><span><i>n</i></span></span> ∑ <i>x</i><sub><i>i</i></sub> = 255 ÷ 7 ≈ <span class="c1">36.4</span></span>` },
        { say: `<b>Justify "balance point".</b> The deviations from the mean always sum to zero.`, math: `<span class="m">∑(<i>x</i><sub><i>i</i></sub> − <i>x̄</i>) = ∑<i>x</i><sub><i>i</i></sub> − <i>n</i><i>x̄</i> = 255 − 7 · <span class="fr"><span>255</span><span>7</span></span> = 0</span>` },
        { say: `<b>Median and mode.</b> With <i>n</i> odd the median is at position (<i>n</i> + 1)/2 = 4. The mode is the most frequent value.`, math: `<span class="m"><span class="c2"><i>M</i></span> = <i>x</i><sub>(4)</sub> = <span class="c2">28</span>, &nbsp;<span class="c3">Mo</span> = <span class="c3">25</span></span>` },
        { say: `<b>Answer in a sentence.</b> Name the measure you choose and why, with units.`, math: `A typical commute is 28 minutes (the median). The mean, about 36.4 minutes, is pulled up by one 90-minute day.` }
      ] }
    }
  },
  prereqWhy: {
    "division": "The mean is a sum divided by a count.",
    "decimal-ops": "Means and medians are often decimals, and data such as prices or times are decimals to begin with."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Statistics", why: "The mean leads to variance, standard deviation, sampling distributions and hypothesis tests." },
    { field: "Probability", why: "The expected value of a random variable is a weighted mean." },
    { field: "Linear algebra", why: "Least-squares fitting generalises the fact that the mean minimises squared deviations." }
  ],
  mistakes: [
    { wrong: `Finding the median without sorting: the median of 13, 7, 21, 9, 15, 4 taken as the middle of the list as written.`, fix: `Sort first: 4, 7, 9, 13, 15, 21. The median is <span class="m">(9 + 13) ÷ 2 = 11</span>.` },
    { wrong: `Averaging averages: two classes with means 80 and 90 have an overall mean of 85.`, fix: `Only if the classes are the same size. With 10 students at 80 and 30 at 90, the mean is <span class="m">(800 + 2,700) ÷ 40 = 87.5</span>.` },
    { wrong: `Saying the mode is the frequency: "8 appears 3 times, so the mode is 3."`, fix: `The mode is the value, <span class="m">8</span>. The 3 is its frequency.` },
    { wrong: `Leaving out zeros: daily sales of $120, $0 and $90 averaged as <span class="m">(120 + 90) ÷ 2 = 105</span>.`, fix: `A zero is a value and counts toward <i>n</i>: <span class="m">(120 + 0 + 90) ÷ 3 = 70</span>, so $70 a day.` }
  ],
  practice: [
    { ctx: "Health", q: `Your step counter shows 4, 8, 9 and 11 thousand steps on four days. What is your mean daily count?`, a: `<span class="m">(4 + 8 + 9 + 11) ÷ 4 = 32 ÷ 4 = 8</span>, so 8 thousand steps a day.` },
    { ctx: "Shopping", q: `Six stores sell the same phone charger for $13, $7, $21, $9, $15 and $4. What is the median price?`, a: `Sorted: 4, 7, 9, 13, 15, 21. <span class="m">(9 + 13) ÷ 2 = 11</span>, so $11.` },
    { ctx: "Retail", q: `A shoe store sold these sizes in one hour: 3, 5, 5, 6, 8, 8, 8, 10. Which size is the mode?`, a: `<span class="m">8</span>, which appears three times.` },
    { ctx: "Training", q: `Your first four quiz scores in a certification course are 82, 90, 76 and 88. What score do you need on the fifth quiz for a mean of 85?`, a: `You need a total of <span class="m">85 × 5 = 425</span>. You have <span class="m">82 + 90 + 76 + 88 = 336</span>. So you need <span class="m">425 − 336 = 89</span>.` },
    { ctx: "Work", q: `Write an equation with a letter for the unknown, then solve: a delivery driver's tips over three days were $42, $55 and $38. What must the fourth day's tips <i>t</i> be for a four-day mean of $50?`, a: `<span class="m">(42 + 55 + 38 + <i>t</i>) ÷ 4 = 50</span>, so <span class="m">135 + <i>t</i> = 200</span> and <span class="m"><i>t</i> = 65</span>. The driver needs <b>$65</b>.` }
  ],
  origin: `Averaging repeated measurements to reduce error became standard practice among astronomers in the 1600s and 1700s. Francis Galton popularised the term "median" in the 1880s, and Karl Pearson introduced "mode" in 1895.`
};
