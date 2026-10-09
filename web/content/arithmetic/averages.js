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
  plain: `<p>When someone asks how long you usually wait for the bus, one number has to stand for many days. Say you timed 10 workdays: 3, 5, 5, 6, 8, 9, 12, 5, 7 and 20 minutes. The 20 was the day a bus broke down. There are three standard ways to pick a typical value.</p>
<p>The <b>mean</b> is what most people call the average. Add the values and divide by how many there are: <span class="m">80 ÷ 10 = 8</span> minutes. The <b>median</b> is the middle value once the data is in order. With 10 values, it is halfway between the 5th and 6th: <span class="m">(6 + 7) ÷ 2 = 6.5</span> minutes. The <b>mode</b> is the value that shows up most often, here 5 minutes.</p>
<p>They disagree because of one bad day. The 20 pulls the mean above 6 of the 10 waits, while the median barely moves. That is why reports on home prices and incomes usually give the median. The mean uses every value. The median resists extreme ones.</p>`,
  formal: `<p>For data values <span class="m"><i>x</i><sub>1</sub>, …, <i>x</i><sub><i>n</i></sub></span>, let <span class="m"><i>x</i><sub>(1)</sub> ≤ <i>x</i><sub>(2)</sub> ≤ ⋯ ≤ <i>x</i><sub>(<i>n</i>)</sub></span> be the values in increasing order.</p>
<div class="display"><b>Mean:</b> <span class="c1"><i>x̄</i></span> = <span class="fr"><span>1</span><span><i>n</i></span></span> ∑<sub><i>i</i>=1</sub><sup><i>n</i></sup> <i>x</i><sub><i>i</i></sub> &nbsp;&nbsp; <span class="dim">∑ (<i>x</i><sub><i>i</i></sub> − <i>x̄</i>) = 0</span><br><b>Median:</b> <span class="c2"><i>x</i><sub>((<i>n</i>+1)/2)</sub></span> if <i>n</i> is odd; &nbsp;<span class="c2"><span class="fr"><span><i>x</i><sub>(<i>n</i>/2)</sub> + <i>x</i><sub>(<i>n</i>/2+1)</sub></span><span>2</span></span></span> if <i>n</i> is even<br><b>Mode:</b> any value of greatest frequency</div>
<p>The deviations from the mean sum to zero, which is why the mean is the balance point. A data set may have one mode, several modes, or none (when every value occurs equally often). The mean minimises the sum of squared deviations, and the median minimises the sum of absolute deviations.</p>`,
  legend: [
    { c: "c1", sym: `<i>x̄</i>`, name: "Mean", desc: "The total shared out evenly: add the values, divide by how many. It is the balance point of the dot plot." },
    { c: "c2", sym: `<i>M</i>`, name: "Median", desc: "The middle value once the data is in order, or the average of the two middle values." },
    { c: "c3", sym: `Mo`, name: "Mode", desc: "The value that shows up most often. There can be more than one." },
    { c: "c4", sym: `<i>n</i>`, name: "Count", desc: "How many data values there are." }
  ],
  steps: { title: "How to find the mean, median and mode", items: [
    `Write the data in order from least to greatest and count the values <span class="m"><i>n</i></span>.`,
    `<b>Mean:</b> add all the values and divide by <span class="m"><i>n</i></span>.`,
    `<b>Median:</b> if <span class="m"><i>n</i></span> is odd, take the middle value. If it is even, average the two middle values.`,
    `<b>Mode:</b> find the value or values that appear most often.`,
    `Compare them. If the mean is far from the median, look for an outlier.`
  ] },
  example: {
    prompt: `You timed your wait for the bus on 10 workdays: 3, 5, 5, 6, 8, 9, 12, 5, 7 and 20 minutes. The 20 was the day a bus broke down. Find the mean, median and mode. Which best describes a typical wait?`,
    lines: [
      { math: `<span class="m">3, 5, 5, 5, 6, 7, 8, 9, 12, 20</span>`, note: "Sort the data. There are n = 10 values." },
      { math: `<span class="m">3 + 5 + 5 + 5 + 6 + 7 + 8 + 9 + 12 + 20 = 80</span>`, note: "Add all the values." },
      { math: `<span class="m"><span class="c1"><i>x̄</i></span> = 80 ÷ 10 = <span class="c1">8</span></span>`, note: "Mean: share the total over the 10 days." },
      { math: `<span class="m"><span class="c2"><i>M</i></span> = (6 + 7) ÷ 2 = <span class="c2">6.5</span></span>`, note: "With 10 values the median is halfway between the 5th and the 6th." },
      { math: `<span class="m"><span class="c3">Mo</span> = <span class="c3">5</span></span>`, note: "5 appears three times. No other value appears more than once." }
    ],
    answer: `Mean <span class="m">8</span> min, median <span class="m">6.5</span> min, mode <span class="m">5</span> min. The median best describes a typical wait, because the one 20-minute day pulls the mean above 6 of the 10 waits.`
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
    nudge: "Not yet. Check that the values are sorted and that you counted every one.",
    concept: {
      lede: `When one number has to stand for many, which number should it be? Mean, median and mode are three answers, and each suits a different job.`,
      heading: "What are mean, median and mode?",
      question: { text: "What is typical?", sub: `The model above holds nine bus waits, in minutes. Each idea below is one way to pick the number that stands for all of them. Watch each one in the model, then try it.`,
        figure: { sym: `<i>x̄</i>`, value: "6.67", cap: "the mean", echo: "mean" } },
      ideasTitle: "Four ideas, all in the model",
      objects: ["wait", "waits", "minute", "minutes", "day", "days", "home", "homes", "score", "scores", "salary", "salaries", "bolt", "bolts", "pair", "pairs", "size", "sizes"],
      walk: { title: "Find it together: a typical bus wait",
        lead: `One situation, step by step. Try each question before you show the next line.`,
        prompt: `You timed your wait for the bus on 10 workdays: 3, 5, 5, 6, 8, 9, 12, 5, 7 and 20 minutes. The 20 was the day a bus broke down. How long is a typical wait?`,
        demo: { kind: "line", from: 0, to: 20, tick: 5, unit: "minute",
          points: [{ v: 8, c: "c1", label: "mean 8" }, { v: 6.5, c: "c2", label: "median 6.5", below: true }, { v: 5, c: "c3", label: "mode 5" }, { v: 20, c: "c4", label: "20" }], show: "dist",
          alt: "A number line from 0 to 20 minutes. The mean, 8, appears first, then the median, 6.5, then the mode, 5, then the 20-minute wait; a bracket marks the 1.5 minutes between the mean and the median." },
        lines: [
          { math: `3, 5, 5, 5, 6, 7, 8, 9, 12, 20`, note: `Put the waits in order, shortest first. There are 10 of them.`, frame: 0 },
          { math: `3 + 5 + 5 + 5 + 6 + 7 + 8 + 9 + 12 + 20 = 80`, note: `Add every wait. Together they make 80 minutes.`, frame: 0 },
          { math: `<span class="c1"><i>x̄</i></span> = 80 ÷ 10 = <span class="c1">8</span>`, note: `Share the 80 minutes evenly over the 10 days. That is the mean: 8 minutes.`, frame: 1 },
          { math: `<span class="c2"><i>M</i></span> = (6 + 7) ÷ 2 = <span class="c2">6.5</span>`, note: `Ten waits have no single middle. The 5th and 6th are 6 and 7, so the median is halfway: 6.5.`, frame: 2 },
          { math: `<span class="c3">Mo</span> = <span class="c3">5</span>`, note: `5 shows up three times, more than any other wait. That is the mode.`, frame: 3 },
          { math: `60 ÷ 9 ≈ 6.7, &nbsp;<span class="c2"><i>M</i></span> = 6`, note: `Take out the 20. The other nine waits have a mean near 6.7 and a median of 6. One bad day moved the mean much more.`, frame: 4 },
          { math: `8 − 6.5 = 1.5`, note: `The mean sits above 6 of the 10 waits. The median, 6.5, is the honest typical wait.`, frame: 5 }
        ],
        predict: [null,
          { ask: `Add the 10 waits. What is the total?`, parts: [{ label: "total minutes", ans: 80 }], hint: `The nine waits before the breakdown make 60. Add the 20.` },
          { ask: `Share the total evenly over the 10 days. What is the mean?`, choices: [
            { t: "8 minutes", ok: true },
            { t: "80 minutes", why: "80 is the total. The mean shares it out over the 10 days." },
            { t: "10 minutes", why: "10 is how many waits there are, not the size of one." }
          ], hint: `80 ÷ 10.` },
          { ask: `Which two waits sit in the middle?`, choices: [
            { t: "6 and 7, from the sorted list", ok: true },
            { t: "8 and 9, from the list as written", why: "The list as written is in day order, not size order. Sort first, then find the middle." },
            { t: "There is no middle with 10 values", why: "With an even count the middle falls between two values. Average those two." }
          ], hint: `In the sorted list, count 5 in from each end.` },
          { ask: `Which wait shows up most often?`, parts: [{ label: "the mode", ans: 5 }], hint: `Look for repeats in the sorted list.` },
          { ask: `Take out the 20. What is the median of the other nine waits?`, parts: [{ label: "median of nine", ans: 6 }], hint: `Nine values: the 5th one in order is the middle.` },
          { ask: `A friend says the typical wait is 8 minutes, the mean. What is wrong with that?`, choices: [
            { t: "One 20-minute day pulls the mean up", ok: true },
            { t: "The math is wrong", why: "80 ÷ 10 really is 8. The mean is right. It does not describe a typical day." },
            { t: "The mean leaves out the 20", why: "The opposite. The mean uses every value, so the 20 pulls it up." }
          ], hint: `Count how many waits are shorter than 8.` }],
        answer: `A typical wait is <span class="m c2">6.5</span> minutes, the median. The mean, 8, is pulled up by one bad day.` },
      ideas: [
        { c: "c1", title: "Share the total out evenly", term: "mean", text: `Add every value, then share the total evenly. Waits of 4, 8 and 6 minutes make 18. Over 3 days that is 6 each.`,
          demo: { kind: "array", rows: 3, cols: 6, unit: "minute", alt: "Eighteen minutes are laid out in 3 equal rows of 6, one row per day: shared evenly, each day gets 6." }, try: { label: "Show the nine waits", lab: "reset" } },
        { c: "c2", title: "The middle one, in order", term: "median", text: `Put the values in order and take the middle one. With an even count, average the two middle values.`,
          demo: { kind: "line", from: 0, to: 16, points: [{ v: 2 }, { v: 4 }, { v: 6, c: "c2", label: "middle" }, { v: 9 }, { v: 15 }], alt: "Five values, 2, 4, 6, 9 and 15, appear on a number line in order; the third one, 6, is marked as the middle." }, try: { label: "Remove the last wait", lab: "reset,remove" } },
        { c: "c3", title: "The one that shows up most", term: "mode", text: `A store sold 14 pairs in size 8, 22 in size 9 and 17 in size 10. Size 9 sold most, so it is the mode.`,
          demo: { kind: "bar", parts: [14, 22, 17], labels: ["size 8", "size 9", "size 10"], unit: "pair", alt: "A bar split into pairs sold by size: 14 in size 8, 22 in size 9, 17 in size 10. The size 9 part is the widest." }, try: { label: "Add the 20 three times", lab: "reset,addoutlier,addoutlier,addoutlier" } },
        { c: "c1", title: "One far value pulls the mean", term: "outlier", text: `Waits of 4, 5 and 6 have a mean of 5. Add one 25-minute wait and the mean jumps to 10. The median moves only to 5.5.`,
          demo: { kind: "line", from: 0, to: 25, unit: "minute", points: [{ v: 5, c: "c1", label: "before" }, { v: 10, c: "c1", label: "after" }, { v: 25, c: "c4", label: "25" }], show: "dist", alt: "On a number line the mean starts at 5, moves to 10 when a 25-minute wait is added, and a bracket marks the 5-minute jump." }, try: { label: "Add the 20-minute outlier", lab: "reset,addoutlier" } }
      ],
      timelineTitle: "Sailors, astronomers and statisticians",
      timelineLead: `Each measure arrived to solve a real problem. The mean came from sharing losses and taming errors, the median from navigators, and the mode last of all. All three are in the model above.`,
      timeline: [
        { when: "1491 and 1502", what: `The words "averay" and "average" appear in English for a loss at sea shared by every merchant on a ship. Sharing a total out evenly is the mean, the amber triangle in the model.` },
        { when: "Late 1500s", what: `Astronomers start averaging many measurements of a planet's position to cancel out errors. The method spreads to other fields.` },
        { when: "1599", what: `Edward Wright's book <i>Certaine Errors in Navigation</i> may hold the first use of the median idea. It is the dashed line in the model.` },
        { when: "1881", what: `Francis Galton uses the word "median". Antoine Cournot had used "valeur médiane" in 1843.` },
        { when: "1895", what: `Karl Pearson names the "mode", the value of greatest frequency. The pink dots in the model mark it.` }
      ],
      history: `<p><b>The problem.</b> Merchants needed a fair way to share a loss. When cargo was thrown overboard to save a ship in a storm, the loss was split among everyone with goods on board, in proportion to what they had. Astronomers had a different problem. Repeated measurements of a planet's position or the Moon's diameter never agreed exactly, and they needed one value to work with.</p>
<p><b>The solution.</b> The shared-loss sum gave English the word <i>average</i>, from the Italian <i>avaria</i>, damage to a ship or its goods. The English forms "averay" (1491) and "average" (1502) come from that sea trade, and the sums used to settle a shared loss gave "average" its meaning of arithmetic mean. In the 16th century astronomers began to take the mean of many measurements, and by the late 1500s averaging to reduce error was spreading to other fields. Navigators had their own summary values, and the idea of the median may first appear in Edward Wright's 1599 book <i>Certaine Errors in Navigation</i>.</p>
<p><b>What it changed.</b> In 1774 Pierre-Simon Laplace proposed the median as an estimator. Antoine Cournot used the term "valeur médiane" in 1843, and Francis Galton used "median" in 1881. Karl Pearson introduced the term "mode" in 1895. The three measures now sit behind weather normals, test reports, salary surveys and the median price in every housing report.</p>`,
      sources: [
        { title: "Average (Wikipedia)", url: "https://en.wikipedia.org/wiki/Average" },
        { title: "average (Online Etymology Dictionary)", url: "https://www.etymonline.com/word/average" },
        { title: "Median (Wikipedia)", url: "https://en.wikipedia.org/wiki/Median" },
        { title: "Mode (statistics) (Wikipedia)", url: "https://en.wikipedia.org/wiki/Mode_(statistics)" }
      ],
      matters: { title: "Why the right average matters", text: `<p>One number often stands for many, and people make <b>real choices</b> from it. A wrong pick tells a story that is not true.</p><ul class="why-chips"><li><b>Mean</b> for sharing a total</li><li><b>Median</b> for a typical case</li><li><b>Mode</b> for what is most common</li></ul><p>Pick the measure that fits the question. When one value is <b>far from the rest</b>, the mean and the median tell different stories.</p>` },
      stakes: { title: "Where averages go wrong", lead: `The usual slip is quoting the mean when one value is far from the rest.`, items: [
        { role: "Home prices", text: `One mansion on a street pulls the mean price far above what most homes sold for. Reports give the median.` },
        { role: "Finding the middle", text: `Taking the middle of an unsorted list. Sort the values first.` },
        { role: "Daily sales", text: `Leaving out a $0 day. Sales of $120, $0 and $90 average $70, not $105.` },
        { role: "Two classes", text: `Averaging two class means, 80 and 90, to get 85. That works only when the classes are the same size.` }
      ], try: { label: "Add two 20-minute waits", lab: "reset,addoutlier,addoutlier" } },
      examplesTitle: "Where you will meet it",
      examples: [
        { role: "Real estate appraiser", figure: "$330,000", scene: `Five comparable homes sold for $310,000, $325,000, $330,000, $340,000 and $1,200,000. The median is <b>$330,000</b>. The mean is <span class="m">2,505,000 ÷ 5 = 501,000</span>.`, takeaway: "One luxury sale would have inflated the value by more than half." },
        { role: "Teacher", figure: "median 85", scene: `Five quiz scores are 72, 85, 90, 64 and 89. Mean: <span class="m">400 ÷ 5 = 80</span>. Sorted, they are 64, 72, 85, 89, 90, so the median is <b>85</b>.`, takeaway: "A median above the mean shows a few low scores pulling the average down." },
        { role: "Meteorologist", figure: "85 °F", scene: `The high temperatures on one calendar date over 30 years add up to 2,550 °F. The normal high is <span class="m">2,550 ÷ 30 = 85</span> °F.`, takeaway: "A \"normal\" in a forecast is a long-run mean." },
        { role: "Human resources analyst", figure: "$58k", scene: `Six salaries in a team are $48k, $52k, $55k, $61k, $64k and $250k. Median: <span class="m">(55 + 61) ÷ 2 = 58</span>, so <b>$58k</b>. Mean: <span class="m">530 ÷ 6 ≈ 88.3</span>, about $88k.`, takeaway: "The median shows what a typical team member is paid." },
        { role: "Quality engineer", figure: "10.02 mm", scene: `Four bolts from a line measure 10.02, 9.98, 10.05 and 10.03 mm. Mean: <span class="m">40.08 ÷ 4 = 10.02</span> mm, against a target of 10.00 mm.`, takeaway: "A mean that creeps away from the target is an early warning of drift." },
        { role: "Retail manager", figure: "size 9", scene: `Last month a store sold 14 pairs in size 8, 22 in size 9 and 17 in size 10. The mode is <b>size 9</b>.`, takeaway: "The mode answers \"what sells most\", which decides what to restock first." }
      ]
    },
    build: {
      lede: `Sort the data and count it. Then add and divide for the mean, find the middle for the median, and look for the most common value for the mode.`,
      task: { text: "Find the number that stands for all of them.", sub: `The same five steps work for bus waits, test scores, prices or sizes. Try each one in the model above as you go.`,
        figure: { sym: `<i>M</i>`, value: "6", cap: "in the model", echo: "median" },
        jump: [{ label: "The method", to: "b-method" }, { label: "Everyday tasks", to: "b-tasks" }] },
      keysTitle: "What the model shows",
      intro: `<p>The model is a dot plot. Each dot is one data value on a number line from 0 to 20, and equal values stack. The amber triangle is the <span class="c1">mean</span>, the point where the line would balance. The dashed cyan line is the <span class="c2">median</span>, and pink dots mark the <span class="c3">mode</span>. The panel shows the <span class="c4">count</span>. Drag a dot, or add the outlier at 20, and watch the mean slide toward it while the median moves much less.</p>`,
      keyTry: [{ label: "Add the 20-minute outlier", lab: "reset,addoutlier" }, { label: "Remove the last value", lab: "reset,remove" }, { label: "Add the 20 three times", lab: "reset,addoutlier,addoutlier,addoutlier" }, { label: "Remove two values", lab: "reset,remove,remove" }],
      objects: ["wait", "waits", "minute", "minutes", "day", "days", "dot", "dots", "score", "scores", "quiz", "quizzes", "home", "homes", "dollar", "dollars", "month", "months"],
      goalsIntro: `Three of the steps have a move for you to make in the model. Make the move, then press <b>Check my move</b>. A move also ticks itself off as soon as the model shows it.`,
      stepWhy: [
        `Sorting makes the middle visible and puts repeated values side by side, so the mode stands out. You need the count <i>n</i> for the mean and to find the middle.`,
        `Adding gives the total, and dividing by <i>n</i> shares it out evenly. In the bus walk, 80 minutes spread over 10 days is 8 minutes a day.`,
        `Half the values sit at or below the median and half at or above. With an odd count one value is in the middle, at position <span class="m">(<i>n</i> + 1) ÷ 2</span>. With an even count no single value is, so you average the two middle values.`,
        `The mode answers a different question: which value shows up most? It is the only one of the three that also works for categories such as sizes or colours.`,
        `Every value pulls on the mean, but the median depends only on the order. A big gap between them points to a value far from the rest. Then the median usually describes a typical case better.`
      ],
      stepTry: [{ label: "Back to the nine waits", lab: "reset" }, null, null, { label: "Add the 20 three times", lab: "reset,addoutlier,addoutlier,addoutlier" }, null],
      stepGoal: [null,
        { key: "mean", eq: 5.67, text: `Press <b>Reset</b>. Then drag the dot at 12 down to 3 and watch the mean.`, after: `The total fell by 9, from 60 to 51. Shared over 9 waits, that is 1 minute less each: <span class="m">51 ÷ 9 ≈ 5.67</span>.`, notYet: `Not yet. Press <b>Reset</b>, then drag the dot at 12 to 3. The mean should read 5.67.` },
        { key: "median", eq: 8, text: `Press <b>Reset</b>. Drag the 6 up to 8, then drag one 5 up to 8. Which value sits in the middle now?`, after: `Sorted: 3, 5, 5, 7, 8, 8, 8, 9, 12. The 5th of 9 values is the median, 8. It is now the mode too.`, notYet: `Not yet. Press <b>Reset</b>, then move the 6 to 8 and one of the 5s to 8.` },
        null,
        { key: "mean", eq: 7.56, text: `Press <b>Reset</b>. Drag the 12 all the way to 20. Watch the mean and the median.`, after: `The mean climbed from 6.67 to <span class="m">68 ÷ 9 ≈ 7.56</span>. The median stayed at 6. It only cares about order.`, notYet: `Not yet. Press <b>Reset</b>, then drag the dot at 12 to the far right, 20.` }],
      matters: { title: "Why a Method Beats a Guess", text: `<p>A glance at a list can fool you. The middle of the page is not the middle of the data, and <b>one big value</b> hides in a long list.</p><ul class="why-chips"><li><b>Sort</b> before the middle</li><li><b>Count</b> every value, zeros too</li><li><b>Compare</b> mean and median</li></ul><p>The same five steps every time give <b>three numbers you can check</b>, and the gap between them tells you which one to trust.</p>` },
      bridge: `<p>The bus waits used the habits that matter most: sort first, count every value, and check the mean against the median. Here is where the same moves show up.</p>`,
      tasksTitle: "Everyday tasks: solve them",
      tasks: [
        { task: "Working out what score you need on the next test to hit a target average", check: { q: `Your first three quiz scores are 78, 84 and 91. What do you need on the fourth quiz for a mean of 85?`, parts: [{ label: "fourth score", ans: 87 }], hint: `A mean of 85 over 4 quizzes needs a total of <span class="m">85 × 4</span>.` }, figure: "target 85",
          demo: { kind: "bar", parts: [78, 84, 91, null], total: 340, labels: ["quiz 1", "quiz 2", "quiz 3", "quiz 4"], alt: "A bar for a total of 340 points holds three quiz scores, 78, 84 and 91, and one unknown part; the unknown is revealed as 87." },
          lines: [{ math: `85 × 4 = 340`, note: "A mean of 85 over 4 quizzes needs 340 points in all." }, { math: `78 + 84 + 91 = 253`, note: "Add what you have so far." }, { math: `340 − 253 = 87`, note: "The fourth score has to make up the rest." }],
          predict: [null, { ask: `What do your first three scores add up to?`, parts: [{ label: "so far", ans: 253 }], hint: `78 + 84 = 162. Then add 91.` }],
          link: `This runs step 2 backwards: the mean times the count gives the total. Practice item 4 uses the same idea.` },
        { task: "Understanding median home prices in a news report", check: { q: `Five homes on a street sold for $210k, $240k, $250k, $265k and $900k. What is the median price, in thousands?`, parts: [{ label: "median ($k)", ans: 250 }], hint: `The prices are already in order. Take the 3rd of 5.` }, figure: "5 sales",
          demo: { kind: "line", from: 0, to: 1000, tick: 200, cap: "thousand dollars apart", points: [{ v: 250, c: "c2", label: "median" }, { v: 373, c: "c1", label: "mean", below: true }, { v: 900, c: "c4", label: "$900k" }], show: "dist", alt: "On a number line in thousands of dollars, the median 250 appears, then the mean 373, then the 900 sale; a bracket marks the 123 between mean and median." },
          lines: [{ math: `210, 240, 250, 265, 900`, note: "The prices in order, in thousands." }, { math: `<span class="c2"><i>M</i></span> = 250`, note: "The 3rd of 5 values is the middle." }, { math: `1,865 ÷ 5 = 373`, note: "The mean adds every sale, so the $900k pulls it up." }, { math: `373 − 250 = 123`, note: "The mean is $123k above the typical sale." }],
          predict: [null, null, { ask: `The five prices add up to 1,865. What is the mean, in thousands?`, parts: [{ label: "mean ($k)", ans: 373 }], hint: `1,865 ÷ 5.` }],
          link: `The $900k home acts like the 20-minute wait in the bus walk. Step 5 is why news reports give the median.` },
        { task: "Tracking your average monthly spending", check: { q: `You spent $310, $285, $342 and $299 on groceries over four months. What is your mean monthly spending?`, parts: [{ label: "dollars a month", ans: 309 }], hint: `Add the four months, then divide by 4.` }, figure: "4 months",
          demo: { kind: "bar", parts: [310, 285, 342, 299], labels: ["Jan", "Feb", "Mar", "Apr"], unit: "dollar", alt: "A bar of four months of grocery spending, 310, 285, 342 and 299 dollars, joined by a brace showing 1,236 dollars in all." },
          lines: [{ math: `310, 285, 342, 299`, note: "One value for each month." }, { math: `310 + 285 + 342 + 299 = 1,236`, note: "Add the months." }, { math: `1,236 ÷ 4 = 309`, note: "Share the total over 4 months." }, { math: `309 × 4 = 1,236`, note: "Check: the mean times the count gives back the total." }],
          predict: [null, { ask: `What do the four months add up to?`, parts: [{ label: "total ($)", ans: 1236 }], hint: `310 + 285 = 595, and 342 + 299 = 641.` }],
          link: `Step 2: add the values and divide by how many, as the 80 minutes were shared over 10 days.` },
        { task: "Comparing typical wait times at two clinics", check: { q: `Clinic A's waits were 12, 15, 14, 60 and 13 minutes. Clinic B's were 18, 20, 19, 21 and 22. What is each clinic's median wait?`, parts: [{ label: "Clinic A", ans: 14 }, { label: "Clinic B", ans: 20 }], hint: `Sort each list, then take the 3rd of 5.` }, figure: "2 clinics",
          demo: { kind: "line", from: 0, to: 30, tick: 5, unit: "minute", points: [{ v: 14, c: "c2", label: "A median" }, { v: 20, c: "c2", label: "B median" }, { v: 22.8, c: "c1", label: "A mean", below: true }], show: "dist", alt: "On a number line in minutes, Clinic A's median 14 and Clinic B's median 20 appear, then Clinic A's mean 22.8; a bracket marks the 6 minutes between the two medians." },
          lines: [{ math: `A: 12, 13, 14, 15, 60`, note: "Sort Clinic A's waits." }, { math: `<span class="c2"><i>M</i></span> = 14, &nbsp;<span class="c1"><i>x̄</i></span> = 114 ÷ 5 = 22.8`, note: "One 60-minute wait lifts A's mean above B's." }, { math: `B: 18, 19, 20, 21, 22`, note: "Sort Clinic B's waits." }, { math: `<span class="c2"><i>M</i></span> = 20, &nbsp;<span class="c1"><i>x̄</i></span> = 100 ÷ 5 = 20`, note: "B's waits are steady, so mean and median agree." }],
          predict: [null, { ask: `Clinic A's waits add up to 114. What is its mean wait?`, parts: [{ label: "A's mean", ans: 22.8 }], hint: `114 ÷ 5.` }],
          link: `By the mean, A looks slower. By the median, A's typical wait is 6 minutes shorter. Compare medians when one wait is far from the rest (step 5).` }
      ]
    },
    formal: {
      question: { text: "What is a measure of center?", sub: `You can find a typical value and choose the right one. Here are the words a textbook uses for the same ideas, and how to write the bus waits out in full.`,
        figure: { sym: `<i>x̄</i>`, value: "6.67", cap: "the sample mean", echo: "mean" },
        jump: [{ label: "Vocabulary", to: "f-vocab" }, { label: "Where it goes wrong", to: "f-mist" }, { label: "Writing it out", to: "f-setup" }, { label: "Practice", to: "f-prac" }] },
      vocabTitle: "From your words to the textbook's",
      vocabIntro: `<p>Each card is an idea you already used in the Concept and Intermediate tabs, with its proper name and its exact meaning.</p>`,
      vocab: [
        { c: "c4", sym: `<i>n</i>`, term: "Sample size", def: `The number of observations <span class="m"><i>x</i><sub>1</sub>, …, <i>x</i><sub><i>n</i></sub></span> in a data set, repeated values included.`, was: "how many values, the count" },
        { c: "c1", sym: `<i>x̄</i>`, term: "Arithmetic mean", def: `<span class="m"><i>x̄</i> = (1/<i>n</i>) ∑ <i>x</i><sub><i>i</i></sub></span>, the sum of the observations divided by their number.`, was: "share the total out evenly" },
        { c: "c1", sym: `∑(<i>x</i><sub><i>i</i></sub> − <i>x̄</i>) = 0`, term: "Deviation", def: `The signed difference <span class="m"><i>x</i><sub><i>i</i></sub> − <i>x̄</i></span> of an observation from the mean. The deviations always sum to zero.`, was: "the balance point" },
        { c: "c2", sym: `<i>x</i><sub>(1)</sub> ≤ ⋯ ≤ <i>x</i><sub>(<i>n</i>)</sub>`, term: "Order statistics", def: `The observations arranged in nondecreasing order; <span class="m"><i>x</i><sub>(<i>k</i>)</sub></span> is the <i>k</i>th smallest.`, was: "the values sorted, shortest first" },
        { c: "c2", sym: `<i>M</i>`, term: "Median", def: `<span class="m"><i>x</i><sub>((<i>n</i>+1)/2)</sub></span> for odd <i>n</i>; the mean of <span class="m"><i>x</i><sub>(<i>n</i>/2)</sub></span> and <span class="m"><i>x</i><sub>(<i>n</i>/2+1)</sub></span> for even <i>n</i>.`, was: "the middle one, in order" },
        { c: "c3", sym: `Mo`, term: "Mode", def: `A value of greatest frequency. A data set may be unimodal, bimodal or multimodal, or have no mode when all frequencies are equal.`, was: "the one that shows up most" },
        { c: "c1", sym: `outlier`, term: "Outlier; resistant measure", def: `An outlier is an observation far from the bulk of the data. A measure is resistant if outliers barely change it: the median is resistant, the mean is not.`, was: "one far value pulls the mean" }
      ],
      matters: { title: "Why the exact words matter", text: `<p>In everyday talk, "average" can mean the mean or the median. For the bus waits, <b>the word decides the answer</b>.</p><ul class="why-chips"><li>"Average wait"</li><li><b>8 minutes</b> if it means the mean</li><li><b>6.5 minutes</b> if it means the median</li></ul><p>Saying which measure you used lets a reader <b>check your number</b> and judge whether it fits.</p>` },
      mistakesTitle: "Where formal answers go wrong",
      mistakesLead: `Most wrong answers here come from the order of the data, a value left out, or the wrong measure for the question.`,
      setupIntro: `<p>The bus waits from the Concept tab, written the way a textbook would.</p>`,
      setup: { title: "Writing a measure of center", items: [
        { say: `<b>Name the data.</b> Give the values letters with subscripts, and state the units and the sample size.`, math: `<span class="m"><i>x</i><sub>1</sub>, …, <i>x</i><sub>10</sub> = 3, 5, 5, 6, 8, 9, 12, 5, 7, 20</span> minutes, &nbsp;<span class="m"><span class="c4"><i>n</i></span> = 10</span>` },
        { say: `<b>Write the order statistics.</b> Sorted values get bracketed subscripts.`, math: `<span class="m"><i>x</i><sub>(1)</sub> ≤ ⋯ ≤ <i>x</i><sub>(10)</sub>: &nbsp;3, 5, 5, 5, 6, 7, 8, 9, 12, 20</span>` },
        { say: `<b>Compute the mean.</b> Sum the values and divide by the sample size.`, math: `<span class="m"><span class="c1"><i>x̄</i></span> = <span class="fr"><span>1</span><span><i>n</i></span></span> ∑ <i>x</i><sub><i>i</i></sub> = 80 ÷ 10 = <span class="c1">8</span></span>` },
        { say: `<b>Justify "balance point".</b> The deviations from the mean sum to zero.`, math: `<span class="m">∑(<i>x</i><sub><i>i</i></sub> − <i>x̄</i>) = ∑<i>x</i><sub><i>i</i></sub> − <i>n</i><i>x̄</i> = 80 − 10 · 8 = 0</span>` },
        { say: `<b>Median and mode.</b> With <i>n</i> even, the median is the mean of the two middle order statistics. The mode is the most frequent value.`, math: `<span class="m"><span class="c2"><i>M</i></span> = (<i>x</i><sub>(5)</sub> + <i>x</i><sub>(6)</sub>) ÷ 2 = (6 + 7) ÷ 2 = <span class="c2">6.5</span>, &nbsp;<span class="c3">Mo</span> = <span class="c3">5</span></span>` },
        { say: `<b>Answer in a sentence.</b> Name the measure you choose and why, with units.`, math: `A typical wait is 6.5 minutes (the median). The mean, 8 minutes, is pulled up by one 20-minute outlier.` }
      ] },
      practiceTip: `Type your answer and press Check. Work it the formal way: order the data, state <i>n</i>, then compute the measure the question asks for. Stuck? Each one has a hint.`,
      practiceDone: "All 5 solved. You can find a measure of center the formal way.",
      checks: [
        { hint: `Add the four days, then divide by <i>n</i> = 4.`, parts: [{ label: "thousand steps", ans: 8 }] },
        { hint: `Sort the six prices. With <i>n</i> even, average the 3rd and 4th.`, parts: [{ label: "median ($)", ans: 11 }] },
        { hint: `Count how often each size appears. The mode is the size, not the count.`, parts: [{ label: "mode size", ans: 8 }] },
        { hint: `The total needed is the target mean times 5. Subtract the four scores you have.`, parts: [{ label: "fifth score", ans: 89 }] },
        { hint: `Set <span class="m">(42 + 55 + 38 + <i>t</i>) ÷ 4 = 50</span> and multiply both sides by 4.`, parts: [{ label: "t ($)", ans: 65 }] }
      ]
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
    { wrong: `Calling the mean the typical value when one value is far from the rest: bus waits of 3, 5, 5, 5, 6, 7, 8, 9, 12 and 20 minutes "usually take 8 minutes".`, fix: `Check the median too: <span class="m">(6 + 7) ÷ 2 = 6.5</span>. The 20 pulls the mean above 6 of the 10 waits, so the median describes a typical wait.` },
    { wrong: `Finding the median without sorting: the median of 13, 7, 21, 9, 15, 4 taken as the middle of the list as written.`, fix: `Sort first: 4, 7, 9, 13, 15, 21. The median is <span class="m">(9 + 13) ÷ 2 = 11</span>.` },
    { wrong: `Averaging averages: two classes with means 80 and 90 have an overall mean of 85.`, fix: `Only if the classes are the same size. With 10 students at 80 and 30 at 90, the mean is <span class="m">(800 + 2,700) ÷ 40 = 87.5</span>.` },
    { wrong: `Saying the mode is the frequency: "8 appears 3 times, so the mode is 3."`, fix: `The mode is the value, <span class="m">8</span>. The 3 is its frequency.` },
    { wrong: `Leaving out zeros: daily sales of $120, $0 and $90 averaged as <span class="m">(120 + 90) ÷ 2 = 105</span>.`, fix: `A zero is a value and counts toward <i>n</i>: <span class="m">(120 + 0 + 90) ÷ 3 = 70</span>, so $70 a day.` }
  ],
  practice: [
    { ctx: "Health", q: `Your step counter shows 4, 8, 9 and 11 thousand steps on four days. What is your mean daily count?`, a: `<span class="m">(4 + 8 + 9 + 11) ÷ 4 = 32 ÷ 4 = 8</span>, so <b>8</b> thousand steps a day.` },
    { ctx: "Shopping", q: `Six stores sell the same phone charger for $13, $7, $21, $9, $15 and $4. What is the median price?`, a: `Sorted: 4, 7, 9, 13, 15, 21. <span class="m">(9 + 13) ÷ 2 = 11</span>, so <b>$11</b>.` },
    { ctx: "Retail", q: `A shoe store sold these sizes in one hour: 3, 5, 5, 6, 8, 8, 8, 10. Which size is the mode?`, a: `Size <b>8</b>, which appears three times.` },
    { ctx: "Training", q: `Your first four quiz scores in a certification course are 82, 90, 76 and 88. What score do you need on the fifth quiz for a mean of 85?`, a: `You need a total of <span class="m">85 × 5 = 425</span>. You have <span class="m">82 + 90 + 76 + 88 = 336</span>. So you need <span class="m">425 − 336 = 89</span>.` },
    { ctx: "Work", q: `Write an equation with a letter for the unknown, then solve: a delivery driver's tips over three days were $42, $55 and $38. What must the fourth day's tips <i>t</i> be for a four-day mean of $50?`, a: `<span class="m">(42 + 55 + 38 + <i>t</i>) ÷ 4 = 50</span>, so <span class="m">135 + <i>t</i> = 200</span> and <span class="m"><i>t</i> = 65</span>. The driver needs <b>$65</b>.` }
  ],
  origin: `The word "average" comes from the shared losses of medieval sea trade. Averaging repeated measurements to reduce error became common practice from the late 1500s, mainly through astronomy. Edward Wright's 1599 book may hold the first use of the median idea; Francis Galton used the term "median" in 1881, and Karl Pearson introduced "mode" in 1895.`
};
