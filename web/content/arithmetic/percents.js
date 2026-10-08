window.ARITH = window.ARITH || {};

ARITH["percents"] = {
  title: "Percents",
  short: "Parts per hundred",
  grade: "Grades 6–7",
  hours: 6,
  voice: "plain",
  eyebrow: "Rational numbers · per hundred",
  hero: `<span class="m"><span class="c2">part</span> = <span class="fr"><span class="c1"><i>p</i></span><span>100</span></span> × <span class="c3">whole</span></span>`,
  lede: `A percent is a ratio out of 100. The same equation answers all three percent questions: find the part, the percent, or the whole.`,
  plain: `<p>A <b>percent</b> is a number out of 100. The word comes from the Latin <i>per centum</i>, "by the hundred". A sales tax of 8% means $8 on every $100 you spend, so on a $250 purchase the tax is $20: <span class="m">0.08 × 250 = 20</span>. As a fraction, 8% is <span class="m"><span class="fr"><span>8</span><span>100</span></span></span>; as a decimal it is 0.08.</p>
<p>Percents put different amounts on the same scale. A score of 42 out of 48 on one test and 70 out of 80 on another are hard to compare as they stand. As percents, both are 87.5%, so the results are equal.</p>
<p>Every percent problem has three pieces: the <b>percent</b>, the <b>part</b> and the <b>whole</b>. The whole is the amount you take a percent <i>of</i>, and it counts as 100%. If you know any two of the pieces, one equation gives you the third.</p>`,
  formal: `<p>For a real number <span class="m"><i>p</i></span>, <span class="m"><i>p</i>%</span> denotes <span class="m"><span class="fr"><span><i>p</i></span><span>100</span></span> = <i>p</i> × 0.01</span>. The <b>percent equation</b> relates a part <span class="m c2"><i>A</i></span>, a whole <span class="m c3"><i>B</i></span> (<span class="m"><i>B</i> ≠ 0</span>) and a percent <span class="m c1"><i>p</i></span>:</p>
<div class="display"><span class="c2"><i>A</i></span> = <span class="fr"><span class="c1"><i>p</i></span><span>100</span></span> · <span class="c3"><i>B</i></span> &nbsp;&nbsp;⇔&nbsp;&nbsp; <span class="c1"><i>p</i></span> = 100 · <span class="fr"><span class="c2"><i>A</i></span><span class="c3"><i>B</i></span></span> &nbsp;&nbsp;⇔&nbsp;&nbsp; <span class="c3"><i>B</i></span> = <span class="fr"><span>100<span class="c2"><i>A</i></span></span><span class="c1"><i>p</i></span></span> <span class="dim">(<i>p</i> ≠ 0)</span></div>
<p>Percents greater than 100 and less than 1 are valid: 250% = 2.5 and 0.4% = 0.004. Conversions: decimal to percent multiplies by 100; percent to decimal divides by 100.</p>`,
  legend: [
    { c: "c1", sym: `<i>p</i>`, name: "Percent", desc: "How many out of every 100. On the grid, the number of shaded squares." },
    { c: "c2", sym: `<i>A</i>`, name: "Part", desc: "The amount that is p percent of the whole." },
    { c: "c3", sym: `<i>B</i>`, name: "Whole", desc: "The base amount the percent is taken of. It counts as 100%." }
  ],
  steps: { title: "How to solve a percent problem", items: [
    `Identify the whole (the amount after "of"), the part, and the percent. One of them is unknown.`,
    `Write the percent as a decimal by dividing by 100.`,
    `To find the part, multiply: <span class="m"><span class="c2">part</span> = <span class="c1">decimal</span> × <span class="c3">whole</span></span>.`,
    `To find the percent, divide part by whole, then multiply by 100.`,
    `To find the whole, divide the part by the decimal.`,
    `Check that the answer is sensible: a part smaller than the whole means a percent under 100.`
  ] },
  example: {
    prompt: `In a survey, 312 of 480 residents said they want a new park. What percent is that? If the same rate holds across the town's 2,000 residents, about how many want the park?`,
    lines: [
      { math: `<span class="m"><span class="fr"><span class="c2">312</span><span class="c3">480</span></span> = 0.65</span>`, note: "Divide part by whole." },
      { math: `<span class="m">0.65 × 100 = <span class="c1">65</span>%</span>`, note: "Convert the decimal to a percent." },
      { math: `<span class="m"><span class="c1">0.65</span> × <span class="c3">2,000</span> = <span class="c2">1,300</span></span>`, note: "Apply the percent to the new whole." },
      { math: `<span class="m">0.65 × 480 = 312</span>`, note: "Check with the original numbers." }
    ],
    answer: `<span class="m">65%</span> of those surveyed want the park, which suggests about <span class="m">1,300</span> of the town's 2,000 residents.`
  },
  why: `<p>Prices, pay and risk are reported in percents: sales tax, discounts, raises, interest rates, battery levels, nutrition labels, poll results and the chance of rain. The classic trap is losing track of the whole. A price of $100 that rises 50% becomes $150, and a 50% cut from there leaves $75, because the second percent is taken of a different whole. Reading percents carefully protects you from bad deals and misleading headlines.</p>
<p>Percents let you compare things of different sizes, such as two towns' budgets or two tests with different totals, and judge a change in context. They lead directly to percent change, discounts and tax, simple and compound interest, and on into probability and statistics, where results are routinely stated as percentages.</p>`,
  careers: [
    { role: "Registered dietitian", use: "Reads % Daily Value on nutrition labels and computes the percent of calories from fat, carbohydrate and protein." },
    { role: "Pollster", use: "Reports survey results as percentages of respondents and states margins of error in percentage points." },
    { role: "Real estate agent", use: "Calculates a commission as a percent of the sale price, such as 2.5% of $340,000 = $8,500." },
    { role: "Teacher", use: "Converts raw scores to percentages to assign grades." },
    { role: "Quality control inspector", use: "Tracks the percent of units that fail inspection in each production batch." },
    { role: "Server", use: "Estimates tips as 15% to 20% of a bill and splits tip pools." }
  ],
  life: [
    "Working out a 20% tip on a restaurant bill",
    "Reading your phone's battery percentage",
    "Converting a test score to a percent",
    "Using % Daily Value on food labels",
    "Understanding a 30% chance of rain"
  ],
  fields: [
    { name: "Statistics", use: "Relative frequencies, confidence levels and many survey results are reported as percents." },
    { name: "Nutrition science", use: "Diets and labels describe nutrient intake as percents of daily targets." },
    { name: "Business", use: "Profit margins, market share and commissions are percents." },
    { name: "Finance", use: "Interest rates, investment returns and inflation are quoted as percents per year." }
  ],
  layers: {
    concept: {
      heading: "What are percents?",
      lede: `A percent answers the question: how much is this out of every hundred? It puts amounts of any size on one scale so you can compare them.`,
      history: `<p><b>The problem.</b> Tax collectors and merchants needed a fair way to take the same share of very different amounts. In ancient Rome, calculations in hundredths were common, and the emperor Augustus levied a tax of 1/100 on goods sold at auction, the <i>centesima rerum venalium</i>.</p>
<p><b>The solution.</b> As money and trade grew in medieval Europe, rates quoted per hundred became standard. Italian merchants wrote <i>per cento</i>, "for a hundred", and abbreviated it in their books. Pages added to a manuscript of 1425, probably around 1435, show it written as "pc" with a small loop. Over about two centuries that mark contracted into a sign with a horizontal bar, the ancestor of today's %.</p>
<p><b>What it changed.</b> By the 17th century interest rates were routinely quoted in hundredths. A rate per hundred lets anyone compare a loan of 500 with a loan of 5,000 at a glance, because the same rate means the same cost per hundred borrowed. Every interest rate, tax rate and discount you see today is stated the same way.</p>`,
      sources: [
        { title: "Percentage (Wikipedia)", url: "https://en.wikipedia.org/wiki/Percentage" },
        { title: "Percent sign (Wikipedia)", url: "https://en.wikipedia.org/wiki/Percent_sign" }
      ],
      examples: [
        { role: "Real estate agent", scene: `With an agreed commission of 2.5%, a home that sells for $340,000 earns <span class="m">0.025 × 340,000 = </span><b>$8,500</b>.`, takeaway: "A small percent of a large whole is still a large amount, so the rate is worth reading closely." },
        { role: "Registered dietitian", scene: `A 600-calorie meal has 20 g of fat. Fat supplies 9 calories per gram, so <span class="m">20 × 9 = 180</span> calories come from fat, and <span class="m">180 ÷ 600 = 0.30</span>: <b>30%</b> of the calories.`, takeaway: "Turning grams into a percent of calories lets a client compare meals of any size." },
        { role: "Pollster", scene: `Of 1,200 people asked, 540 support a new transit line: <span class="m">540 ÷ 1,200 = 0.45</span>, or <b>45%</b>.`, takeaway: "Reporting the percent together with the number asked lets readers compare polls of different sizes." },
        { role: "Teacher", scene: `A student answers 34 of 40 questions correctly: <span class="m">34 ÷ 40 = 0.85</span>, a score of <b>85%</b>.`, takeaway: "Percent scores make tests with different numbers of questions comparable." },
        { role: "Quality control inspector", scene: `In a batch of 2,500 parts, 35 fail inspection: <span class="m">35 ÷ 2,500 = 0.014</span>, a failure rate of <b>1.4%</b>, inside a 2% target.`, takeaway: "A rate, not a raw count, shows whether a bigger batch really has a bigger problem." },
        { role: "Server", scene: `On a $64 bill, 10% is $6.40, so a 20% tip is twice that: <b>$12.80</b>.`, takeaway: "Benchmark percents like 10% make quick, reliable mental estimates." }
      ]
    },
    build: {
      lede: `Name the whole, write the percent as a decimal, then multiply to find a part, or divide to find the percent or the whole.`,
      intro: `<p>The model above shows a percent two ways. The 10 by 10 grid shades <span class="c1">p</span> of 100 squares, which is what "per hundred" means. The bar beside it stands for the <span class="c3">whole</span> you type in, and its shaded share is the <span class="c2">part</span>. The readout works all three percent questions for the same numbers, so you can see that they are one equation solved three ways.</p>`,
      stepWhy: [
        `The same percent of different wholes gives different parts. The word "of" points to the whole, the amount that counts as 100%. Finding it first decides where every other number goes.`,
        `Percent means per hundred, so <i>p</i>% is <i>p</i>/100. Dividing by 100 moves the point two places left: 65% becomes 0.65. A decimal can go straight into a multiplication; a percent sign cannot.`,
        `A part is a fraction of the whole, and taking a fraction "of" something means multiplying. 20% of 45 is <span class="m">0.20 × 45 = 9</span>, the same as one fifth of 45.`,
        `Part ÷ whole gives the share out of 1. Multiplying by 100 rescales it to a share out of 100, which is the percent: <span class="m">312 ÷ 480 = 0.65</span>, or 65%.`,
        `This undoes step 3. If part = decimal × whole, dividing both sides by the decimal leaves the whole: <span class="m">30 ÷ 0.12 = 250</span>.`,
        `Benchmarks catch slips such as a misplaced point: 10% is a tenth, 50% is half, and a part larger than the whole means a percent over 100.`
      ],
      bridge: `<p>The survey problem has the shape of most everyday percent questions: a part out of a whole gives a rate, and that rate applied to a new whole gives a new part. Here is where the same steps show up.</p>`,
      tasks: [
        { task: "Working out a 20% tip on a restaurant bill", link: `Step 3: tip = 0.20 × bill. On a $45 bill that is $9, the arithmetic of practice item 1.` },
        { task: "Converting a test score to a percent", link: `Step 4: divide the score by the total and multiply by 100, as <span class="m">312 ÷ 480 × 100</span> gave 65% in the survey.` },
        { task: "Adding sales tax to a price", link: `The price is the whole. Multiply it by the tax rate as a decimal, as <span class="m">0.65 × 2,000</span> applied the survey rate to the whole town.` },
        { task: "Using % Daily Value on food labels", link: `The daily target is the whole. Dividing the amount in a serving by it is step 4, the same move as 18 wins out of 72 games in practice item 3.` },
        { task: "Working back to an original price", link: `Step 5: divide the known part by the decimal, as <span class="m">$30 ÷ 0.12 = $250</span> in practice item 4.` }
      ]
    },
    formal: {
      setup: { title: "Writing a percent problem", items: [
        { say: `<b>Name the quantities.</b> Give the whole, the part and the percent each a letter and say what it counts.`, math: `<span class="m"><span class="c3"><i>B</i></span> = 480</span> residents surveyed, &nbsp;<span class="m"><span class="c2"><i>A</i></span> = 312</span> who want the park, &nbsp;<span class="m"><span class="c1"><i>p</i></span></span> unknown` },
        { say: `<b>Write the percent equation.</b> The part equals the percent, as a fraction of 100, times the whole.`, math: `<span class="m"><span class="c2"><i>A</i></span> = <span class="fr"><span class="c1"><i>p</i></span><span>100</span></span> · <span class="c3"><i>B</i></span> &nbsp;→&nbsp; 312 = <span class="fr"><span><i>p</i></span><span>100</span></span> · 480</span>` },
        { say: `<b>Solve for the unknown.</b> Multiply both sides by 100 and divide by the whole.`, math: `<span class="m"><span class="c1"><i>p</i></span> = 100 · <span class="fr"><span>312</span><span>480</span></span> = 100 · 0.65 = <span class="c1">65</span></span>` },
        { say: `<b>Justify extending the rate.</b> A percent is a ratio scaled to 100. If the same ratio holds for a new whole <i>B</i>′, the new part is that ratio times <i>B</i>′.`, math: `<span class="m"><i>A</i>′ = 0.65 · 2,000 = <span class="c2">1,300</span></span>` },
        { say: `<b>Check and answer.</b> Put the result back into the original equation, then answer in a sentence with units.`, math: `<span class="m">0.65 · 480 = 312</span> &nbsp;→ 65% want the park, about 1,300 of 2,000 residents.` }
      ] }
    }
  },
  prereqWhy: {
    "decimals": "Converting a percent to a decimal, such as 35% = 0.35, is the key step in every calculation."
  },
  unlocksWhy: {
    "percent-apps": "Discounts, tax, percent change and interest all apply the percent equation, often repeatedly."
  },
  beyond: [
    { field: "Statistics", why: "Percentiles, relative frequency tables and confidence intervals are all expressed in percents." },
    { field: "Probability", why: "Probabilities are often stated as percents, and converting between forms is routine." }
  ],
  mistakes: [
    { wrong: `Using the wrong whole: "18 is what percent of 72?" answered as <span class="m">72 ÷ 18 = 4 = 400%</span>.`, fix: `The whole follows "of". <span class="m">18 ÷ 72 = 0.25 = 25%</span>.` },
    { wrong: `Writing 5% as 0.5.`, fix: `Divide by 100: <span class="m">5% = 0.05</span>. And <span class="m">0.5 = 50%</span>.` },
    { wrong: `Thinking a percent over 100 is impossible.`, fix: `It means more than the whole. If sales went from 40 to 100 units, the new amount is <span class="m">250%</span> of the old.` },
    { wrong: `Confusing percentage points with percent: a rate that goes from 4% to 5% is reported as "up 1%".`, fix: `It rose by 1 percentage point. Measured against the old rate, that is <span class="m">1 ÷ 4 = 0.25</span>, an increase of 25%.` }
  ],
  practice: [
    { ctx: "Dining", q: `Your restaurant bill is $45. How much is a 20% tip?`, a: `<span class="m">0.20 × 45 = 9</span>. The tip is <b>$9</b>.` },
    { ctx: "Work", q: `You have finished 3 of the 8 modules of a training course. What percent have you finished?`, a: `<span class="m">3 ÷ 8 = 0.375 = </span><b>37.5%</b>.` },
    { ctx: "Sports", q: `A team won 18 of its 72 games. What percent of its games did it win?`, a: `<span class="m">18 ÷ 72 = 0.25 = </span><b>25%</b>.` },
    { ctx: "Shopping", q: `The receipt says you saved $30, which was 12% off the original price. What was the original price?`, a: `<span class="m">30 ÷ 0.12 = 250</span>, so <b>$250</b>. Check: <span class="m">0.12 × 250 = 30</span>.` },
    { ctx: "Retail", q: `Write an equation with a letter for the unknown, then solve: a jacket on sale for $63 costs 70% of its original price <i>p</i>. What was <i>p</i>?`, a: `<span class="m">0.70<i>p</i> = 63</span>, so <span class="m"><i>p</i> = 63 ÷ 0.70 = 90</span>. The original price was <b>$90</b>.` }
  ],
  origin: `The word comes from the Latin <i>per centum</i>, "by the hundred". The % sign grew out of abbreviations of the Italian "per cento" in merchants' manuscripts of the 1400s.`
};
