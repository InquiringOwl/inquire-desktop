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
  plain: `<p>A <b>percent</b> is a number out of 100. The word comes from the Latin <i>per centum</i>, "by the hundred". A sales tax of 8% means $8 on every $100 you spend. On a $250 purchase the tax is $20: <span class="m">0.08 × 250 = 20</span>. As a fraction, 8% is <span class="m"><span class="fr"><span>8</span><span>100</span></span></span>. As a decimal it is 0.08.</p>
<p>Percents put different amounts on the same scale. A score of 42 out of 48 on one test and 70 out of 80 on another are hard to compare as they stand. As percents, both are 87.5%, so the results are equal.</p>
<p>Every percent problem has three pieces: the <b>percent</b>, the <b>part</b> and the <b>whole</b>. The whole is the amount you take a percent <i>of</i>, and it counts as 100%. If you know any two of the pieces, one equation gives you the third.</p>`,
  formal: `<p>For a real number <span class="m"><i>p</i></span>, <span class="m"><i>p</i>%</span> denotes <span class="m"><span class="fr"><span><i>p</i></span><span>100</span></span> = <i>p</i> × 0.01</span>. The <b>percent equation</b> relates a part <span class="m c2"><i>A</i></span>, a whole or base <span class="m c3"><i>B</i></span> (<span class="m"><i>B</i> ≠ 0</span>) and a percent <span class="m c1"><i>p</i></span>:</p>
<div class="display"><span class="c2"><i>A</i></span> = <span class="fr"><span class="c1"><i>p</i></span><span>100</span></span> · <span class="c3"><i>B</i></span> &nbsp;&nbsp;⇔&nbsp;&nbsp; <span class="c1"><i>p</i></span> = 100 · <span class="fr"><span class="c2"><i>A</i></span><span class="c3"><i>B</i></span></span> &nbsp;&nbsp;⇔&nbsp;&nbsp; <span class="c3"><i>B</i></span> = <span class="fr"><span>100<span class="c2"><i>A</i></span></span><span class="c1"><i>p</i></span></span> <span class="dim">(<i>p</i> ≠ 0)</span></div>
<p>Percents greater than 100 and less than 1 are valid: 250% = 2.5 and 0.4% = 0.004. Conversions: decimal to percent multiplies by 100; percent to decimal divides by 100.</p>`,
  legend: [
    { c: "c1", sym: `<i>p</i>`, name: "Percent", desc: "How many out of every 100. On the grid, it is the number of shaded squares." },
    { c: "c2", sym: `<i>A</i>`, name: "Part", desc: "The amount that is p percent of the whole. On the bar, it is the filled share." },
    { c: "c3", sym: `<i>B</i>`, name: "Whole", desc: "The amount you take the percent of. It counts as 100%. On the bar, it is the full length." }
  ],
  steps: { title: "How to solve a percent problem", items: [
    `Find the whole (the amount after "of"), the part, and the percent. One of them is unknown.`,
    `Write the percent as a decimal by dividing by 100.`,
    `To find the part, multiply: <span class="m"><span class="c2">part</span> = <span class="c1">decimal</span> × <span class="c3">whole</span></span>.`,
    `To find the percent, divide the part by the whole, then multiply by 100.`,
    `To find the whole, divide the part by the decimal.`,
    `Check that the answer makes sense: a part smaller than the whole means a percent under 100.`
  ] },
  example: {
    prompt: `You ask the 40 neighbors on your street about a new park, and 30 say yes. What percent want the park? If the town's 2,000 people feel the same way, about how many want it?`,
    lines: [
      { math: `<span class="m"><span class="fr"><span class="c2">30</span><span class="c3">40</span></span> = 0.75</span>`, note: "Divide the part by the whole." },
      { math: `<span class="m">0.75 × 100 = <span class="c1">75</span>%</span>`, note: "Turn the decimal into a percent." },
      { math: `<span class="m"><span class="c1">0.75</span> × <span class="c3">2,000</span> = <span class="c2">1,500</span></span>`, note: "Apply the same percent to the new whole." },
      { math: `<span class="m">0.75 × 40 = 30</span>`, note: "Check with the street's numbers." }
    ],
    answer: `<span class="m">75%</span> of your street wants the park, which suggests about <span class="m">1,500</span> of the town's 2,000 people.`
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
    "Converting a test score to a percent",
    "Adding sales tax to a price",
    "Using % Daily Value on food labels",
    "Working back to an original price"
  ],
  fields: [
    { name: "Statistics", use: "Relative frequencies, confidence levels and many survey results are reported as percents." },
    { name: "Nutrition science", use: "Diets and labels describe nutrient intake as percents of daily targets." },
    { name: "Business", use: "Profit margins, market share and commissions are percents." },
    { name: "Finance", use: "Interest rates, investment returns and inflation are quoted as percents per year." }
  ],
  layers: {
    nudge: "Not yet. Check which amount is the whole: the one after \"of\".",
    concept: {
      heading: "What are percents?",
      lede: `A percent answers the question: how much is this out of every hundred? It puts amounts of any size on one scale so you can compare them.`,
      question: { text: "Out of 100?", sub: `A percent turns any share into a share of 100. Watch the grid and the bar in the model above, then try each idea yourself.`,
        figure: { sym: `<i>p</i>%`, value: "35", cap: "out of every 100", echo: "p" } },
      ideasTitle: "Three ideas, all in the model",
      objects: ["neighbor", "neighbors", "people", "group", "groups", "square", "squares", "dollar", "dollars", "question", "questions", "calories", "parts", "home", "meal", "bill", "tablet", "tax", "goods"],
      walk: { title: "Scale it together: a vote on a new park",
        lead: `One situation, step by step. Try each question before you show the next line.`,
        prompt: `You ask the 40 neighbors on your street about a new park. 30 say yes. What percent want the park? Your town has 2,000 people. If the town feels the same way, about how many want it?`,
        demo: { kind: "fraction", n: 3, d: 4, cap: "said yes", alt: "A bar for all 40 neighbors is cut into 4 equal groups of 10. Three groups shade in one at a time, then the fraction 3/4 lifts out." },
        lines: [
          { math: `30 out of 40`, note: `40 neighbors answered and 30 said yes. The 40 is the whole: everyone you asked.`, frame: 0 },
          { math: `30 of 40 → 3 of 4`, note: `Cut the 40 into 4 equal groups of 10. The 30 yes answers fill 3 of the groups.`, frame: 3 },
          { math: `<span class="fr"><span>3</span><span>4</span></span> = <span class="fr"><span>75</span><span>100</span></span> = <span class="c1">75%</span>`, note: `Percent means out of 100. Each quarter of 100 is 25, so 3 quarters are 75 out of 100.`, frame: 4 },
          { math: `30 said yes ≠ 30%`, note: `The trap: a count is not a percent. 30 would be 30% only if you had asked 100 people.`, frame: 4 },
          { math: `2,000 = 20 hundreds`, note: `Now the town. 75% means 75 of every 100 people, and the town holds 20 hundreds.`, frame: 4 },
          { math: `20 × 75 = <span class="c2">1,500</span>`, note: `Each hundred gives 75 yes answers. 20 hundreds give 1,500.`, frame: 4 }
        ],
        predict: [null,
          { ask: `Each group is 10 neighbors. How many groups said yes?`, parts: [{ label: "groups", ans: 3 }], hint: `30 is how many tens?` },
          { ask: `3 out of 4 is how many out of 100?`, parts: [{ label: "out of 100", ans: 75 }], hint: `A quarter of 100 is 25. You need three quarters.` },
          { ask: `A neighbor says: "30 people said yes, so 30% want the park." What went wrong?`, choices: [
            { t: "The whole is 40 people, not 100", ok: true },
            { t: "Nothing. 30 people is 30%", why: "30% means 30 out of every 100. You asked 40, so the count and the percent are different numbers." },
            { t: "It should be 40%", why: "40 is how many you asked. It is the whole, not the share that said yes." }
          ], hint: `Would 30 be 30% if you had asked 100 people? You asked 40.` },
          null,
          { ask: `About how many of the town's 2,000 people want the park?`, parts: [{ label: "people", ans: 1500 }], hint: `75 for each hundred, and there are 20 hundreds.` }],
        answer: `75% of your street wants the park, so about <span class="m c2">1,500</span> of the town's 2,000 people may want it too.` },
      ideas: [
        { c: "c1", title: "Percent means out of 100", term: "percent", text: `35% means 35 out of every 100. On the grid, 35 of the 100 squares are shaded.`,
          demo: { kind: "bar", parts: [35, 65], labels: ["35 shaded", "65 not"], unit: "square", alt: "A bar of 100 squares fills in two pieces: 35 shaded squares, then the 65 that are not, for 100 squares in all." },
          try: { label: "Shade 35 of 100", lab: "p:35,whole:100" } },
        { c: "c2", title: "The part is a share", term: "part", text: `The part is the amount the percent picks out. 25% of 80 is 20, a quarter of the whole.`,
          demo: { kind: "bar", parts: [20, 60], labels: ["25%", "75%"], cap: "the whole", alt: "A bar of 80 splits into a part of 20, which is 25%, and the other 60, which is 75%. Together they make 80." },
          try: { label: "Take 25% of 80", lab: "p:25,whole:80" } },
        { c: "c3", title: "The whole counts as 100%", term: "whole", text: `The whole is the amount you take the percent of. Small or huge, it always counts as 100%.`,
          demo: { kind: "array", rows: 10, cols: 10, unit: "square", alt: "A grid fills in one row of 10 squares at a time, 10, 20, 30 up to 100 squares: the whole, 100%." },
          try: { label: "Set p to 100%", lab: "p:100,whole:80" } }
      ],
      timelineTitle: "Per hundred, from Roman taxes to the % sign",
      timelineLead: `People have shared out money in hundredths for about 2,000 years. It is the same grid of 100 squares you see in the model.`,
      timeline: [
        { when: "6 CE", what: `In Rome, the emperor Augustus sets up a fund to pay retired soldiers. Part of its money is said to come from a tax of 1 in every 100 on goods sold at auction.` },
        { when: "1339", what: `An Italian arithmetic book writes "per 100" and "p cento", meaning "for a hundred".` },
        { when: "About 1435", what: `A scribe shortens <i>per cento</i> to "pc" with a tiny loop, in pages added to a 1425 arithmetic book.` },
        { when: "By 1650", what: `The loop has become a sign like a small fraction, the ancestor of the % sign. In the same century, quoting interest rates in hundredths becomes standard.` }
      ],
      history: `<p><b>The problem.</b> Tax collectors and merchants needed a fair way to take the same share of very different amounts. In ancient Rome, sums were often worked in hundredths. Augustus set up a military treasury in 6 CE to pay soldiers when they retired, and a tax of one hundredth on goods sold at auction, the <i>centesima rerum venalium</i>, is said to have helped fund it.</p>
<p><b>The solution.</b> As money and trade grew in medieval Europe, sums in hundredths became standard. Italian merchants wrote <i>per cento</i>, "for a hundred", and shortened it in their books. An arithmetic text of 1339 writes "per 100" and "p cento". Pages added to a 1425 text, probably around 1435, show it as "pc" with a tiny loop. By 1650 that mark had become a sign like a small fraction, the ancestor of today's %.</p>
<p><b>What it changed.</b> By the 17th century interest rates were routinely quoted in hundredths. A rate per hundred lets anyone compare a loan of 500 with a loan of 5,000 at a glance, because the same rate means the same cost per hundred borrowed. Every interest rate, tax rate and discount you see today is stated the same way.</p>`,
      sources: [
        { title: "Percentage (Wikipedia)", url: "https://en.wikipedia.org/wiki/Percentage" },
        { title: "Percent sign (Wikipedia)", url: "https://en.wikipedia.org/wiki/Percent_sign" },
        { title: "Aerarium militare (Wikipedia)", url: "https://en.wikipedia.org/wiki/Aerarium_militare" },
        { title: "Centesima (Smith's Dictionary of Greek and Roman Antiquities, LacusCurtius)", url: "https://penelope.uchicago.edu/Thayer/E/Roman/Texts/secondary/SMIGRA*/Centesima.html" }
      ],
      matters: { title: "Why percents matter", text: `<p>Percents let you compare <b>amounts of different sizes</b> on one scale. A raw count can't do that.</p><ul class="why-chips"><li><b>Prices</b>: tax, tips and sales</li><li><b>Pay</b>: raises and commissions</li><li><b>Risk</b>: polls and the chance of rain</li></ul><p>Every percent is a share of <b>some whole</b>. Get the whole right and the rest follows. Get it wrong and every number after it is wrong too.</p>` },
      stakes: { title: "Where percents go wrong", lead: `Most percent slips come from the wrong whole or a misplaced decimal point.`, items: [
        { role: "Counting as a percent", text: `30 yes answers out of 40 is 75%. A count matches its percent only out of 100.` },
        { role: "Tax at the register", text: `Writing 5% as 0.5 turns a $2 tax on $40 into $20.` },
        { role: "Up, then down", text: `A $100 price up 50% is $150. Down 50% from there is $75. The second 50% is taken of a bigger whole.` },
        { role: "News headline", text: `A rate that goes from 4% to 5% rose 1 point. That is 25% more than before, so "up 1%" misleads.` }
      ], try: { label: "Show 5% of $40", lab: "p:5,whole:40" } },
      examplesTitle: "Where you will meet it",
      examples: [
        { role: "Real estate agent", figure: "$8,500", scene: `With an agreed commission of 2.5%, a home that sells for $340,000 earns <span class="m">0.025 × 340,000 = 8,500</span> dollars.`, takeaway: "A small percent of a large whole is still a large amount, so the rate is worth reading closely." },
        { role: "Registered dietitian", figure: "30% from fat", try: { label: "Show 30% of 600", lab: "p:30,whole:600" }, scene: `A 600-calorie meal has 20 g of fat. Fat gives 9 calories per gram, so <span class="m">20 × 9 = 180</span> calories come from fat, and <span class="m">180 ÷ 600 = 0.30</span>: 30% of the calories.`, takeaway: "Turning grams into a percent of calories lets a client compare meals of any size." },
        { role: "Pollster", figure: "45%", try: { label: "Show 45% of 1,200", lab: "p:45,whole:1200" }, scene: `Of 1,200 people asked, 540 support a new transit line: <span class="m">540 ÷ 1,200 = 0.45</span>, or 45%.`, takeaway: "Reporting the percent together with the number asked lets readers compare polls of different sizes." },
        { role: "Teacher", figure: "85%", try: { label: "Show 85% of 40", lab: "p:85,whole:40" }, scene: `A student answers 34 of 40 questions correctly: <span class="m">34 ÷ 40 = 0.85</span>, a score of 85%.`, takeaway: "Percent scores make tests with different numbers of questions comparable." },
        { role: "Quality control inspector", figure: "1.4%", scene: `In a batch of 2,500 parts, 35 fail inspection: <span class="m">35 ÷ 2,500 = 0.014</span>, a failure rate of 1.4%, inside a 2% target.`, takeaway: "A rate shows whether a bigger batch really has a bigger problem. A raw count can't." },
        { role: "Server", figure: "$12.80 tip", try: { label: "Show 20% of $64", lab: "p:20,whole:64" }, scene: `On a $64 bill, 10% is $6.40, so a 20% tip is twice that: <span class="m">2 × 6.40 = 12.80</span> dollars.`, takeaway: "Benchmark percents like 10% make quick, reliable mental estimates." }
      ]
    },
    build: {
      lede: `Name the whole, write the percent as a decimal, then multiply to find a part, or divide to find the percent or the whole.`,
      task: { text: "Name the whole, then find the missing piece.", sub: `Every percent question has three pieces: the percent, the part and the whole. You know two of them. The six steps below find the third. Try them in the model above as you go.`,
        figure: { sym: `part`, value: "28", cap: "in the model", echo: "part" },
        jump: [{ label: "The method", to: "b-method" }, { label: "Everyday tasks", to: "b-tasks" }] },
      keysTitle: "What the model shows",
      intro: `<p>The model above shows a percent two ways. The 10 by 10 grid shades <span class="c1">p</span> of 100 squares, which is what "per hundred" means. The bar beside it stands for the <span class="c3">whole</span> you type in, and its filled share is the <span class="c2">part</span>. The readout works all three percent questions for the same numbers, so you can see they are one equation solved three ways.</p>`,
      keyTry: [{ label: "Shade 10 squares", lab: "p:10,whole:80" }, { label: "Take 50% of 80", lab: "p:50,whole:80" }, { label: "Take 35% of 500", lab: "p:35,whole:500" }],
      objects: ["square", "squares", "dollar", "dollars", "question", "questions", "neighbor", "neighbors", "people", "bill", "price", "tip", "tax", "sodium", "games"],
      goalsIntro: `Three of the steps have a move for you to make in the model. Make the move, then press <b>Check my move</b>. A move also ticks itself off as soon as the model shows it.`,
      stepWhy: [
        `The same percent of different wholes gives different parts. The word "of" points to the whole, the amount that counts as 100%. Find it first and every other number has its place.`,
        `Percent means per hundred, so <i>p</i>% is <i>p</i>/100. Dividing by 100 moves the point two places left: 75% becomes 0.75. A decimal can go straight into a multiplication. A percent sign can't.`,
        `A part is a fraction of the whole, and taking a fraction "of" something means multiplying. 20% of 45 is <span class="m">0.20 × 45 = 9</span>, the same as one fifth of 45.`,
        `Part ÷ whole gives the share out of 1. Multiplying by 100 turns it into a share out of 100, which is the percent: <span class="m">30 ÷ 40 = 0.75</span>, or 75%.`,
        `This undoes step 3. If part = decimal × whole, dividing the part by the decimal leaves the whole: <span class="m">30 ÷ 0.12 = 250</span>.`,
        `Benchmarks catch slips such as a misplaced point. 10% is a tenth, 50% is half, and a part bigger than the whole means a percent over 100.`
      ],
      stepTry: [{ label: "Take 35% of 200", lab: "p:35,whole:200" }, { label: "Set p to 5%", lab: "p:5,whole:80" }, null, null, null, { label: "Try 10% of 640", lab: "p:10,whole:640" }],
      stepGoal: [null, null,
        { key: "part", eq: 63, text: `Find 45% of 140 in the model. Set <i>p</i> to 45 and type 140 as the whole.`, after: `<span class="m">0.45 × 140 = 63</span>. The part is 63.`, notYet: `Not yet. Set <i>p</i> to 45 and type 140 as the whole.` },
        { key: "p", eq: 15, text: `A $12 tip on an $80 bill: what percent is that? Keep the whole at 80 and move <i>p</i> until the part reads 12.`, after: `<span class="m">12 ÷ 80 = 0.15</span>, so the tip is 15%.`, notYet: `Not yet. With the whole at 80, move <i>p</i> until the part reads exactly 12.` },
        { key: "whole", eq: 150, text: `You saved $18, which was 12% off. Set <i>p</i> to 12, then change the whole until the part reads 18.`, after: `<span class="m">18 ÷ 0.12 = 150</span>. The original price was $150.`, notYet: `Not yet. Set <i>p</i> to 12, then try wholes until the part reads 18.` },
        null],
      matters: { title: "Why a Method Keeps the Whole in View", text: `<p>Percent questions come in <b>three shapes</b>, and they look alike in words. A method sorts them before you compute.</p><ul class="why-chips"><li>Find the <b>part</b>: multiply</li><li>Find the <b>percent</b>: divide by the whole</li><li>Find the <b>whole</b>: divide by the decimal</li></ul><p>Naming the whole first is the move that <b>stops the classic slip</b>. Once you know what counts as 100%, the right operation follows.</p>` },
      bridge: `<p>The park vote has the shape of most everyday percent questions. A part out of a whole gives a rate. That rate times a new whole gives a new part. Here is where the same steps show up.</p>`,
      tasksTitle: "Everyday tasks: solve them",
      tasks: [
        { task: "Working out a 20% tip on a restaurant bill", check: { q: `Your dinner bill is $65. How much is a 20% tip?`, parts: [{ label: "tip ($)", ans: 13 }], hint: `Find 10% first by moving the point one place left. Then double it.` }, figure: "20% tip",
          demo: { kind: "bar", parts: [null, 52], total: 65, labels: ["20% tip", "the other 80%"], alt: "A bar for the $65 bill splits into the 20% tip, shown as a question mark, and the other 80%, which is $52. The tip is revealed as $13." },
          lines: [{ math: `20% = 2 × 10%`, note: "20% is twice 10%, and 10% is a tenth." }, { math: `10% of $65 = $6.50`, note: "A tenth of 65: move the point one place left." }, { math: `2 × $6.50 = $13`, note: "Double it for 20%. The tip is $13." }],
          predict: [null, { ask: `What is 10% of $65?`, parts: [{ label: "10% ($)", ans: 6.5 }], hint: `Divide by 10: move the point one place left.` }, null],
          try: { label: "Show 20% of 65", lab: "p:20,whole:65" }, link: `Step 3: tip = 0.20 × bill. Benchmarks like 10% (step 6) make it quick to do in your head.` },
        { task: "Converting a test score to a percent", check: { q: `You got 27 of 30 questions right. What is your score as a percent?`, parts: [{ label: "score (%)", ans: 90 }], hint: `Divide the score by the total, then multiply by 100.` }, figure: "27 of 30",
          demo: { kind: "bar", parts: [27, 3], labels: ["right", "wrong"], unit: "question", alt: "A bar of 30 questions splits into 27 right and 3 wrong, 30 questions in all." },
          lines: [{ math: `27 out of 30`, note: "The whole is the 30 questions on the test." }, { math: `27 ÷ 30 = 0.90`, note: "Divide the part by the whole." }, { math: `0.90 × 100 = 90%`, note: "Multiply by 100 to get the percent." }],
          predict: [null, { ask: `What is 27 ÷ 30 as a decimal?`, parts: [{ label: "27 ÷ 30", ans: 0.9 }], hint: `30 goes into 27 less than once. Try 270 ÷ 30 and move the point.` }, null],
          try: { label: "Show 90% of 30", lab: "p:90,whole:30" }, link: `Step 4: part ÷ whole × 100. It is the same move as <span class="m">30 ÷ 40 = 0.75</span> in the park vote on the Concept tab.` },
        { task: "Adding sales tax to a price", check: { q: `A $250 phone has 8% sales tax. How much is the tax, and what do you pay in all?`, parts: [{ label: "tax ($)", ans: 20 }, { label: "total ($)", ans: 270 }], hint: `8% is 0.08. Multiply it by the price, then add the tax to the price.` }, figure: "8% tax",
          demo: { kind: "bar", parts: [250, 20], labels: ["price", "8% tax"], unit: "dollar", alt: "A bar for the $250 price, then a short piece for the $20 tax, for $270 in all." },
          lines: [{ math: `8% = 0.08`, note: "Write the tax rate as a decimal." }, { math: `0.08 × 250 = 20`, note: "The price is the whole. The tax is $20." }, { math: `250 + 20 = 270`, note: "Add the tax to the price: you pay $270." }],
          predict: [null, { ask: `What is 0.08 × 250?`, parts: [{ label: "tax ($)", ans: 20 }], hint: `8 dollars for each 100, and 250 is two and a half hundreds.` }, null],
          try: { label: "Show 8% of 250", lab: "p:8,whole:250" }, link: `Steps 2 and 3: the price is the whole, as the town of 2,000 was the new whole in the park vote.` },
        { task: "Using % Daily Value on food labels", check: { q: `A can of soup has 690 mg of sodium. The daily value is 2,300 mg. What percent of the daily value is that?`, parts: [{ label: "% daily value", ans: 30 }], hint: `The daily value is the whole. Divide the serving's amount by it.` }, figure: "690 mg",
          demo: { kind: "bar", parts: [690, 1610], labels: ["the soup", "rest of the day"], cap: "mg a day", alt: "A bar for the 2,300 mg daily value splits into 690 mg from the soup and 1,610 mg for the rest of the day." },
          lines: [{ math: `690 of 2,300`, note: "The daily value of 2,300 mg is the whole." }, { math: `690 ÷ 2,300 = 0.30`, note: "Divide the part by the whole." }, { math: `0.30 × 100 = 30%`, note: "One can is 30% of the day's sodium." }],
          predict: [null, { ask: `What is 690 ÷ 2,300 as a decimal?`, parts: [{ label: "690 ÷ 2,300", ans: 0.3 }], hint: `Try 0.3 × 2,300 and see if you get 690.` }, null],
          try: { label: "Show 30% of 2,300", lab: "p:30,whole:2300" }, link: `Step 4 again: the daily target is the whole, the same move as 18 wins out of 72 games in practice item 3.` },
        { task: "Working back to an original price", check: { q: `After 20% off, you paid $48. What was the original price?`, parts: [{ label: "original ($)", ans: 60 }], hint: `You paid 80% of the original. Divide 48 by 0.80.` }, figure: "$48 paid",
          demo: { kind: "bar", parts: [48, null], total: 60, labels: ["you paid: 80%", "20% off"], unit: "dollar", alt: "A bar for the original price splits into the $48 you paid, which is 80%, and the 20% taken off, shown as a question mark and then revealed as $12." },
          lines: [{ math: `100% − 20% = 80%`, note: "You paid 80% of the original price." }, { math: `$48 ÷ 0.80 = $60`, note: "Divide the part by the decimal to get the whole." }, { math: `0.80 × 60 = 48`, note: "Check: 80% of $60 is the $48 you paid." }],
          predict: [null, { ask: `What is $48 ÷ 0.80?`, parts: [{ label: "original ($)", ans: 60 }], hint: `0.80 is 4/5. Find a quarter of 48, then times 5. Or try 0.80 × 60.` }, null],
          try: { label: "Show 80% of 60", lab: "p:80,whole:60" }, link: `Step 5: divide the known part by the decimal. Adding 20% to $48 gives $57.60, the wrong whole.` }
      ]
    },
    formal: {
      question: { text: "What does p% of B mean, exactly?", sub: `You can find a part, a percent or a whole. Here are the words a textbook uses for the same ideas, and how to write a percent problem out in full.`,
        figure: { sym: `<i>A</i>`, value: "28", cap: "the part A", echo: "part" },
        jump: [{ label: "Vocabulary", to: "f-vocab" }, { label: "Where it goes wrong", to: "f-mist" }, { label: "Writing it out", to: "f-setup" }, { label: "Practice", to: "f-prac" }] },
      vocabTitle: "From your words to the textbook's",
      vocabIntro: `<p>Each card is an idea you already used in the Concept and Intermediate tabs, with its proper name and its exact meaning.</p>`,
      vocab: [
        { c: "c1", sym: `<i>p</i>%`, term: "Percent", def: `The number <span class="m"><i>p</i>/100</span>. The symbol % means "divided by 100": <span class="m">75% = 75/100 = 0.75</span>.`, was: "out of every hundred" },
        { c: "c3", sym: `<i>B</i>`, term: "Base", def: `The quantity the percent is taken of. It corresponds to 100%. In "<i>p</i>% of <i>B</i>", the base follows "of".`, was: "the whole" },
        { c: "c2", sym: `<i>A</i>`, term: "Amount (percentage)", def: `The quantity equal to <i>p</i>% of the base: <span class="m"><i>A</i> = (<i>p</i>/100) · <i>B</i></span>.`, was: "the part" },
        { c: "c1", sym: `<i>A</i> = (<i>p</i>/100) · <i>B</i>`, term: "Percent equation", def: `The relation among amount, percent and base. Given any two, with <span class="m"><i>B</i> ≠ 0</span> (and <span class="m"><i>p</i> ≠ 0</span> when solving for <i>B</i>), it determines the third.`, was: "one equation solved three ways" },
        { c: "c1", sym: `÷ 100, × 100`, term: "Percent–decimal conversion", def: `Percent to decimal: divide by 100, so <span class="m">5% = 0.05</span>. Decimal to percent: multiply by 100, so <span class="m">0.375 = 37.5%</span>.`, was: "move the point two places" },
        { c: "c1", sym: `pp`, term: "Percentage point", def: `The unit for the difference of two percents. A rate that goes from 4% to 5% rises 1 percentage point, a relative increase of 25%.`, was: "a change in the rate itself" }
      ],
      matters: { title: "Why the exact words matter", text: `<p>"Up 1 percent" and "up 1 percentage point" sound alike. For a rate of 4%, <b>they give different answers</b>.</p><ul class="why-chips"><li>Up 1 <b>percentage point</b>: 5%</li><li>Up 1 <b>percent</b>: 4.04%</li><li>4% to 5% is a <b>25%</b> relative increase</li></ul><p>Naming the base and the unit lets a reader <b>check your answer</b> and compare it with someone else's.</p>` },
      mistakesTitle: "Where formal answers go wrong",
      mistakesLead: `Most wrong answers here use the wrong base, misplace the decimal point, or treat a count as a percent.`,
      setupIntro: `<p>The park vote from the Concept tab, written the way a textbook would.</p>`,
      setup: { title: "Writing a percent problem", items: [
        { say: `<b>Name the quantities.</b> Give the base, the amount and the percent each a letter and say what it counts.`, math: `<span class="m"><span class="c3"><i>B</i></span> = 40</span> neighbors asked, &nbsp;<span class="m"><span class="c2"><i>A</i></span> = 30</span> who want the park, &nbsp;<span class="m"><span class="c1"><i>p</i></span></span> unknown` },
        { say: `<b>Write the percent equation.</b> The amount equals the percent, as a fraction of 100, times the base.`, math: `<span class="m"><span class="c2"><i>A</i></span> = <span class="fr"><span class="c1"><i>p</i></span><span>100</span></span> · <span class="c3"><i>B</i></span> &nbsp;→&nbsp; 30 = <span class="fr"><span><i>p</i></span><span>100</span></span> · 40</span>` },
        { say: `<b>Solve for the unknown.</b> Multiply both sides by 100 and divide by the base.`, math: `<span class="m"><span class="c1"><i>p</i></span> = 100 · <span class="fr"><span>30</span><span>40</span></span> = 100 · 0.75 = <span class="c1">75</span></span>` },
        { say: `<b>Justify extending the rate.</b> A percent is a ratio scaled to 100. If the same ratio holds for a new base <i>B</i>′, the new amount is that ratio times <i>B</i>′.`, math: `<span class="m"><i>A</i>′ = 0.75 · 2,000 = <span class="c2">1,500</span></span>` },
        { say: `<b>Check and answer.</b> Put the result back into the original equation, then answer in a sentence with units.`, math: `<span class="m">0.75 · 40 = 30</span> &nbsp;→ 75% of the street wants the park, about 1,500 of the town's 2,000 people.` }
      ] },
      practiceTip: `Type your answer and press Check. Work it the formal way: name the base, write the percent equation, and solve for the unknown. Stuck? Each one has a hint.`,
      practiceDone: "All 5 solved. You can solve a percent problem the formal way.",
      checks: [
        { hint: `The bill is the base. Write 20% as 0.20 and multiply.`, parts: [{ label: "tip ($)", ans: 9 }] },
        { hint: `The 8 modules are the base. Divide 3 by 8, then multiply by 100.`, parts: [{ label: "percent", ans: 37.5 }] },
        { hint: `The base is the 72 games played. Divide the wins by it.`, parts: [{ label: "percent", ans: 25 }] },
        { hint: `$30 is the amount and 12% is the percent. Solve <span class="m">0.12<i>B</i> = 30</span>.`, parts: [{ label: "original ($)", ans: 250 }] },
        { hint: `Write <span class="m">0.70<i>p</i> = 63</span>, then divide both sides by 0.70.`, parts: [{ label: "p ($)", ans: 90 }] }
      ]
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
    { wrong: `Reading "30 of 40 neighbors said yes" as 30%.`, fix: `A count equals its percent only when the base is 100. <span class="m">30 ÷ 40 = 0.75 = 75%</span>.` },
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
