window.ARITH = window.ARITH || {};

ARITH["percent-apps"] = {
  title: "Percent Change, Tax & Interest",
  short: "Discounts, tax, growth and interest",
  grade: "Grades 7–8; revisited in personal finance",
  hours: 8,
  voice: "plain",
  eyebrow: "Applied percents · growth and interest",
  hero: `<span class="m"><i>A</i> = <span class="c1"><i>P</i></span>(1 + <span class="c4"><i>r</i></span>)<sup><i>t</i></sup></span>`,
  lede: `Compound interest multiplies by the same factor <span class="m">1 + <span class="c4"><i>r</i></span></span> each period. Simple interest adds the same amount each period instead.`,
  plain: `<p>Most percents in daily life describe a change. A jacket priced at $80 is 30% off, and then 8% sales tax is added at the register. The quickest way to handle both is a <b>multiplier</b>. Taking 30% off leaves 70% of the price, so you multiply by 0.70. Adding 8% means you multiply by 1.08. Then <span class="m">80 × 0.70 = 56</span> and <span class="m">56 × 1.08 = 60.48</span>, so you pay $60.48.</p>
<p><b>Percent change</b> measures a change against the starting value: subtract the old value from the new one, then divide by the old value. If rent goes from $1,200 to $1,260 a month, the change is <span class="m">60 ÷ 1,200 = 0.05</span>, a 5% increase.</p>
<p><b>Interest</b> is what a lender charges for the use of money, or what a bank pays you for yours. The starting amount is the <b>principal</b>. <b>Simple interest</b> pays the same amount every year, figured on the principal only. <b>Compound interest</b> adds each period's interest to the balance, so later interest is also earned on earlier interest. Over a few years the gap between them is small. Over decades it is large.</p>`,
  formal: `<p>For an original value <span class="m"><i>V</i><sub>0</sub> ≠ 0</span> and a new value <span class="m"><i>V</i><sub>1</sub></span>, the <b>percent change</b> is <span class="m">100 · (<i>V</i><sub>1</sub> − <i>V</i><sub>0</sub>)/<i>V</i><sub>0</sub></span>. A change by rate <span class="m"><i>r</i></span> (as a decimal) multiplies by <span class="m">1 + <i>r</i></span>, so a price with tax rate <span class="m"><i>s</i></span> totals <span class="m"><i>x</i>(1 + <i>s</i>)</span> and a discount <span class="m"><i>d</i></span> leaves <span class="m"><i>x</i>(1 − <i>d</i>)</span>.</p>
<div class="display">Simple interest: &nbsp;<span class="c2"><i>A</i> = <span class="c1"><i>P</i></span>(1 + <span class="c4"><i>r</i></span><i>t</i>)</span> &nbsp;<span class="dim">(<i>I</i> = <i>Prt</i>)</span><br>Compound interest: &nbsp;<span class="c3"><i>A</i> = <span class="c1"><i>P</i></span>(1 + <span class="c4"><i>r</i></span>/<i>n</i>)<sup><i>nt</i></sup></span><br><span class="dim">Continuous compounding: <i>A</i> = <i>P</i>e<sup><i>rt</i></sup></span></div>
<p>Here <span class="m c1"><i>P</i></span> is the principal, <span class="m c4"><i>r</i></span> the annual rate as a decimal, <span class="m"><i>t</i></span> the time in years and <span class="m"><i>n</i></span> the number of compounding periods per year. Simple interest grows linearly in <span class="m"><i>t</i></span>. Compound interest grows exponentially. Successive percent changes multiply: an increase of <span class="m"><i>r</i><sub>1</sub></span> then <span class="m"><i>r</i><sub>2</sub></span> gives the factor <span class="m">(1 + <i>r</i><sub>1</sub>)(1 + <i>r</i><sub>2</sub>)</span>.</p>`,
  legend: [
    { c: "c1", sym: `<i>P</i>`, name: "Principal", desc: "The starting amount deposited or borrowed." },
    { c: "c4", sym: `<i>r</i>`, name: "Rate", desc: "The annual interest rate or percent change, written as a decimal (5% = 0.05)." },
    { c: "c2", sym: `<i>P</i>(1 + <i>rt</i>)`, name: "Simple interest balance", desc: "Grows by the same amount P·r each year. A straight line on the chart." },
    { c: "c3", sym: `<i>P</i>(1 + <i>r</i>)<sup><i>t</i></sup>`, name: "Compound balance", desc: "Grows by the same factor each year. A curve that bends upward." },
    { c: "c5", sym: `<i>t</i>`, name: "Time", desc: "Number of years. With n periods per year the exponent becomes nt." }
  ],
  steps: { title: "How to handle percent change and interest", items: [
    `Convert the percent to a decimal rate <span class="m c4"><i>r</i></span>.`,
    `For an increase (tax, markup, growth), multiply by <span class="m">1 + <i>r</i></span>. For a decrease (discount, depreciation), multiply by <span class="m">1 − <i>r</i></span>.`,
    `For percent change, compute <span class="m">(new − old) ÷ old</span> and convert to a percent.`,
    `For simple interest, compute <span class="m"><i>I</i> = <span class="c1"><i>P</i></span><span class="c4"><i>r</i></span><i>t</i></span> and add it to the principal.`,
    `For compound interest, divide the annual rate by the periods per year <span class="m"><i>n</i></span>, raise <span class="m">1 + <i>r</i>/<i>n</i></span> to the power <span class="m"><i>nt</i></span>, and multiply by <span class="m c1"><i>P</i></span>.`,
    `Round money to the cent only at the end.`
  ] },
  example: {
    prompt: `You deposit $2,000 at 5% annual interest for 3 years. How much do you have with simple interest? With interest compounded once a year?`,
    lines: [
      { math: `<span class="m"><i>I</i> = <span class="c1">2,000</span> × <span class="c4">0.05</span> × 3 = 300</span>`, note: "Simple interest earns $100 each year for 3 years." },
      { math: `<span class="m c2">2,000 + 300 = 2,300</span>`, note: "Simple interest balance." },
      { math: `<span class="m"><span class="c1">2,000</span> × (1 + <span class="c4">0.05</span>)<sup>3</sup></span>`, note: "Compound annually: multiply by 1.05 once per year." },
      { math: `<span class="m">1.05<sup>3</sup> = 1.157625</span>`, note: "1.05 × 1.05 × 1.05." },
      { math: `<span class="m c3">2,000 × 1.157625 = 2,315.25</span>`, note: "Compound balance." },
      { math: `<span class="m">2,315.25 − 2,300 = 15.25</span>`, note: "Extra earned from interest on interest." }
    ],
    answer: `Simple interest gives <span class="m">$2,300.00</span>. Annual compounding gives <span class="m">$2,315.25</span>, which is $15.25 more.`
  },
  why: `<p>Percent mistakes cost real money. A shopper who reads "20% off, then a further 20% off" as 40% off overpays: the two discounts leave <span class="m">0.80 × 0.80 = 0.64</span> of the price, a 36% discount. A borrower who looks only at the monthly payment can miss how much interest a loan adds over its whole life.</p>
<p>With multipliers and the interest formulas you can check a sale price, a receipt, a raise against inflation, or a loan offer before you sign. Compounding works in both directions. A credit card charging 24% a year (an example rate) compounds against you if the balance is left unpaid. Savings growing at 7% a year compound for you: over 30 years they multiply by more than 7.</p>
<p>Compound interest is also the everyday face of <b>exponential growth</b>. The same formula models population growth and radioactive decay, logarithms are the tool for solving it for time, and asking what happens as compounding gets more frequent leads to the constant e.</p>`,
  careers: [
    { role: "Loan officer", use: "Explains how the interest rate and compounding on a mortgage or car loan determine the total repaid." },
    { role: "Financial planner", use: "Projects retirement balances with compound growth at assumed annual returns." },
    { role: "Retail buyer", use: "Sets prices with percent markups over cost and plans percent-off promotions that keep a target margin." },
    { role: "Tax preparer", use: "Applies percentage tax rates to income brackets and calculates sales and use tax." },
    { role: "Actuary", use: "Discounts future payments to present value using compound interest when pricing insurance and pensions." },
    { role: "Economist", use: "Measures inflation as the percent change in the Consumer Price Index from one year to the next." }
  ],
  life: [
    "Working out the sale price of an item that is 30% off",
    "Adding sales tax to a purchase",
    "Comparing savings accounts by their annual percentage yield",
    "Understanding how a credit card balance grows if unpaid",
    "Calculating the percent raise in a new job offer",
    "Seeing how inflation changes prices over time"
  ],
  fields: [
    { name: "Finance", use: "Present value, annuities and loan amortisation are all built on the compound interest formula." },
    { name: "Economics", use: "Growth rates of GDP, prices and wages are percent changes." },
    { name: "Biology", use: "Population growth with a constant rate follows the compound growth model." },
    { name: "Accounting", use: "Depreciation, tax and markups are percent-of-value calculations." }
  ],
  layers: {
    nudge: "Not yet. Write the percent as a decimal and check which amount it is a percent of.",

    concept: {
      lede: `A percent can raise a price, cut a price or grow your savings. This lesson shows how much, and how fast.`,
      heading: "What are percent change, tax and interest?",
      question: { text: "How much does it grow?", sub: `Pick a starting amount and a rate in the model above. Watch the balance grow year by year, then try each idea below.`,
        figure: { sym: `<i>A</i>`, value: "1,647.01", cap: "the balance", echo: "amount" } },
      ideasTitle: "Four ideas, all in the model",
      objects: ["dollar", "dollars", "year", "years", "month", "months", "cent", "cents", "lire", "deposit", "balance", "price", "jacket", "boots", "groceries"],
      walk: { title: "Grow it together: $2,000 in savings",
        lead: `One situation, step by step. Try each question before you show the next line.`,
        prompt: `You put $2,000 in a savings account. It pays 5% interest once a year. You leave it alone for 3 years. How much is there at the end?`,
        demo: { kind: "bar", parts: [100, 105, 110.25], labels: ["year 1", "year 2", "year 3"], unit: "dollar", cap: "dollars of interest", alt: "Three bars of interest appear one year at a time: 100 dollars, then 105, then 110.25, each a little longer than the last; a brace then shows 315.25 dollars of interest in all." },
        lines: [
          { math: `2,000 at 5% a year, for 3 years`, note: `Each year the bank pays 5% of what is in the account. Then it adds that to the balance.`, frame: 0 },
          { math: `2,000 × 0.05 = 100`, note: `Year 1: 5% of $2,000 is $100. The balance is now $2,100.`, frame: 1 },
          { math: `2,100 × 0.05 = 105`, note: `Year 2: the 5% is paid on $2,100 now. That earns $105. The balance is $2,205.`, frame: 2 },
          { math: `2,205 × 0.05 = 110.25`, note: `Year 3 earns $110.25. The balance is $2,315.25.`, frame: 3 },
          { math: `5% × 3 = 15%, &nbsp;2,000 × 0.15 = 300`, note: `A shortcut says 3 years of 5% is 15%, or $300. It misses $15.25. That is the interest earned on interest.`, frame: 4 },
          { math: `2,000 × 1.05 × 1.05 × 1.05 = 2,000 × 1.05<sup>3</sup> = 2,315.25`, note: `The fix: each year multiplies the balance by 1.05. Three years means 1.05 three times.`, frame: 4 }
        ],
        predict: [null,
          { ask: `What is 5% of $2,000?`, parts: [{ label: "year 1 interest ($)", ans: 100 }], hint: `1% of 2,000 is 20. So 5% is 5 times that.` },
          { ask: `Year 2 starts with $2,100. What does the account earn this year?`, choices: [
            { t: "$105, which is 5% of $2,100", ok: true },
            { t: "$100 again", why: "That is 5% of the first $2,000. The account holds $2,100 now, and the 5% is paid on all of it." },
            { t: "$200", why: "That would be 10% of $2,000. The rate is still 5%." }
          ], hint: `Find 5% of the new balance, $2,100.` },
          { ask: `Year 3 earns $110.25 on top of $2,205. What is the balance now?`, parts: [{ label: "balance ($)", ans: 2315.25 }], hint: `Add $110.25 to $2,205.` },
          { ask: `A friend says: "5% for 3 years is 15%. So the interest is $300." Why is that short?`, choices: [
            { t: "It skips the interest earned on interest", ok: true },
            { t: "15% of $2,000 is not $300", why: "15% of $2,000 really is $300. The trouble is that years 2 and 3 pay 5% on more than $2,000." },
            { t: "The bank rounds the interest down", why: "Nothing was rounded here. The extra $15.25 is real interest." }
          ], hint: `Look at the three bars. Are they the same length?` },
          { ask: `Each year the balance is multiplied by one number. What is it?`, parts: [{ label: "multiplier", ans: 1.05 }], hint: `Keep all of the balance (1) and add 5% of it (0.05).` }],
        answer: `After 3 years the account holds <span class="m">$2,315.25</span>: $315.25 of interest, $15.25 more than the shortcut.` },
      ideas: [
        { c: "c4", title: "A percent is a multiplier", term: "growth factor", text: `Adding 5% keeps all of an amount and adds 0.05 more. So you multiply by 1.05. Taking 30% off leaves 0.70.`,
          demo: { kind: "bar", parts: [100, 5], labels: ["the amount", "5% more"], unit: "dollar", alt: "A bar of 100 dollars, then a short piece of 5 dollars joins it; together they make 105 dollars, which is 100 times 1.05." }, try: { label: "Set the rate to 8%", lab: "r:8" } },
        { c: "c2", title: "Simple interest adds the same", term: "simple interest", text: `Interest is paid on the first deposit only. $1,000 at 5% earns $50 every year. On the chart it is a straight line.`,
          demo: { kind: "bar", parts: [50, 50, 50], labels: ["year 1", "year 2", "year 3"], unit: "dollar", alt: "Three equal pieces of 50 dollars appear one year at a time, then a brace shows 150 dollars of interest in all." }, try: { label: "Look ahead 40 years", lab: "t:40" } },
        { c: "c3", title: "Compound interest earns on interest", term: "compound interest", text: `Each year's interest joins the balance. Next year's percent is paid on more money. $1,000 at 10% earns $100, then $110, then $121.`,
          demo: { kind: "bar", parts: [100, 110, 121], labels: ["year 1", "year 2", "year 3"], unit: "dollar", alt: "Three pieces of interest appear one year at a time, 100, 110 and 121 dollars, each longer than the last; a brace shows 331 dollars in all." }, try: { label: "Raise the rate to 10%", lab: "r:10" } },
        { c: "c1", title: "Change is measured from the start", term: "percent change", text: `Divide the change by the starting amount. $1,000 growing to $1,050 is a change of 50 ÷ 1,000, or 5%.`,
          demo: { kind: "bar", parts: [1000, 50], labels: ["start", "change"], unit: "dollar", alt: "A long bar of 1,000 dollars, the start, then a short piece of 50 dollars, the change; together 1,050 dollars." }, try: { label: "Start with $5,000", lab: "p:5000" } }
      ],
      timelineTitle: "Merchants worked out interest long before banks had computers",
      timelineLead: `Lenders and traders needed the same answer you get from the model: how much a loan or a deposit grows each year.`,
      timeline: [
        { when: "About 2000 to 1700 BCE", what: `A clay tablet from Babylon may hold the first compound interest problem. It is interest on interest, the bending curve in the model.` },
        { when: "About 1340", what: `Florentine merchant Francesco Balducci Pegolotti puts a table in his trading handbook: interest on 100 lire at 1% to 8%, for up to 20 years.` },
        { when: "1494", what: `Luca Pacioli gives the rule of 72: divide 72 by the rate to estimate how long money takes to double. The model's panel uses it.` },
        { when: "1613", what: `Richard Witt's <i>Arithmeticall Questions</i> is a whole book on compound interest, with tables at 10% and 124 worked examples.` },
        { when: "1683", what: `Jacob Bernoulli studies interest compounded more and more often and finds the number now called e. Try daily compounding in the model.` }
      ],
      history: `<p><b>The problem.</b> Lenders and borrowers have had to agree on the cost of a loan for thousands of years. A clay tablet from Babylon, dated to about 2000–1700 BCE, may be the first record of a compound interest problem. Rome needed simple shares of value too: the emperor Augustus levied a tax of 1/100 on goods sold at auction.</p>
<p><b>The solution.</b> Merchants turned hundredths into routine tools. Italian traders wrote <i>per cento</i>, "for a hundred", and the gradual contraction of that phrase became the % sign. Around 1340 the Florentine merchant Francesco Balducci Pegolotti included in his trading handbook <i>Pratica della mercatura</i> a table of compound interest on 100 lire, at rates from 1% to 8% for up to 20 years. In 1494 Luca Pacioli gave the rule of 72 for how long money at compound interest takes to double. Richard Witt's <i>Arithmeticall Questions</i> (1613) was devoted entirely to compound interest, with tables at 10% and 124 worked examples.</p>
<p><b>What it changed.</b> By the 17th century it was standard to quote interest rates in hundredths, so any two loans could be compared on one scale. In 1683 Jacob Bernoulli, studying a question about compound interest, found the constant now called e. The rule of 72 in the lab above, the APY on a savings account and the formulas in this lesson all come from that merchant arithmetic.</p>`,
      sources: [
        { title: "Compound interest (Wikipedia)", url: "https://en.wikipedia.org/wiki/Compound_interest" },
        { title: "Percentage (Wikipedia)", url: "https://en.wikipedia.org/wiki/Percentage" },
        { title: "Rule of 72 (Wikipedia)", url: "https://en.wikipedia.org/wiki/Rule_of_72" }
      ],
      matters: { title: "Why percents of money matter", text: `<p>A percent is the usual way to say <b>how money changes</b>. Prices, pay, savings and debts all move by percents.</p><ul class="why-chips"><li><b>Tax</b> adds a percent</li><li><b>Sales</b> take a percent off</li><li><b>Savings and debts</b> grow by a percent each year</li></ul><p>When you can turn a percent into <b>one multiplication</b>, you can check a receipt, compare two offers and see what a loan really costs <b>before you sign</b>.</p>` },
      stakes: { title: "Where percents go wrong", lead: `Most slips add percents that should multiply, or measure from the wrong starting amount.`, items: [
        { role: "Savings", text: `5% a year for 3 years is more than 15%. On $2,000 the interest on interest adds $15.25.` },
        { role: "Shopping", text: `20% off, then 20% more off, is 36% off, not 40%. The second 20% comes off a smaller price.` },
        { role: "Credit card", text: `Unpaid interest is added to what you owe. Next month you pay interest on it too.` },
        { role: "Pay raise", text: `$20 to $21 an hour is a 5% raise. Dividing by the new pay gives about 4.8%, which is wrong.` }
      ], try: { label: "Show $2,000 at 5% for 3 years", lab: "p:2000,r:5,t:3,compounded:0" } },
      examplesTitle: "Where you will meet it",
      examples: [
        { role: "Loan officer", figure: "$2,250.43", try: { label: "Show this loan", lab: "p:10000,r:7,t:3,compounded:0" }, scene: `A client wants $10,000 for 3 years at 7%. Simple interest costs <span class="m">10,000 × 0.07 × 3 = 2,100</span>. Compounded yearly with nothing repaid, the debt grows to <span class="m">10,000 × 1.07<sup>3</sup> = 12,250.43</span>, so <b>$2,250.43</b> of interest.`, takeaway: "The same rate costs more when interest is charged on interest." },
        { role: "Financial planner", figure: "about $76,123", try: { label: "Grow it 30 years", lab: "p:10000,r:7,t:30,compounded:0" }, scene: `$10,000 left to grow at an assumed 7% a year for 30 years becomes <span class="m">10,000 × 1.07<sup>30</sup> ≈ 76,123</span>, about <b>$76,123</b>.`, takeaway: "Time does most of the work in compound growth, so starting early matters." },
        { role: "Retail buyer", figure: "$5 above cost", scene: `An item costs the store $40. A 50% markup sets the price at <span class="m">40 × 1.50 = 60</span>. A 25% off sale then charges <span class="m">60 × 0.75 = 45</span>, still <b>$5</b> above cost.`, takeaway: "Chained multipliers show whether a promotion still makes money." },
        { role: "Tax preparer", figure: "$266.25", scene: `A business receipt shows $250 before tax at an example sales-tax rate of 6.5%. Tax: <span class="m">250 × 0.065 = 16.25</span>. Total: <b>$266.25</b>.`, takeaway: "Separating the tax from the price is needed for every expense claim." },
        { role: "Actuary", figure: "about $8,219", scene: `A payment of $10,000 is due in 5 years. At 4% a year its value today is <span class="m">10,000 ÷ 1.04<sup>5</sup> ≈ 8,219.27</span>, about <b>$8,219</b>.`, takeaway: "Dividing by the growth factor runs compound interest backward, which is how future promises are priced." },
        { role: "Economist", figure: "4% inflation", scene: `A basket of groceries costs $250 one year and $260 the next. Percent change: <span class="m">(260 − 250) ÷ 250 = 0.04</span>, so <b>4%</b> inflation for that basket.`, takeaway: "Inflation is a percent change, always measured from the earlier price." }
      ]
    },

    build: {
      lede: `Turn every percent into a multiplier, multiply once per period, and divide by the starting value whenever you want a percent change.`,
      task: { text: "Turn the percent into a multiplier, then multiply.", sub: `The same six steps handle a sale, a tax bill, a raise, a savings account and a loan. Try each one in the model above as you go.`,
        figure: { sym: `<i>A</i>`, value: "1,647.01", cap: "in the model", echo: "amount" },
        jump: [{ label: "The method", to: "b-method" }, { label: "Everyday tasks", to: "b-tasks" }] },
      keysTitle: "What the model shows",
      intro: `<p>The chart shows a balance over 40 years. The dashed line is the <span class="c1">principal</span> <i>P</i>, the starting amount. The straight line is <span class="c2">simple interest</span>. It rises by the same dollar amount each year. The curve is <span class="c3">compound interest</span>. It rises by the same factor each period. Move the sliders for <i>P</i>, <span class="c4"><i>r</i></span> and <i>t</i>, and choose how often interest is compounded. The shaded gap up to year <i>t</i> is interest earned on interest. The panel gives both balances, the APY, the percent change and the doubling time.</p>`,
      keyTry: [{ label: "Set P to $5,000", lab: "p:5000" }, { label: "Set the rate to 10%", lab: "r:10" }, { label: "Stretch to 40 years", lab: "t:40" }, { label: "Compound daily", lab: "compounded:3" }, { label: "Set 20 years", lab: "t:20" }],
      objects: ["dollar", "dollars", "year", "years", "month", "months", "cent", "cents", "price", "jacket", "pay", "balance", "deposit"],
      goalsIntro: `Three of the steps have a move for you to make in the model. Make the move, then press <b>Check my move</b>. A move also ticks itself off as soon as the model shows it.`,
      stepWhy: [
        `Percent means per hundred, so 5% is <span class="m">5/100 = 0.05</span>. The formulas multiply by the rate directly. Using 5 in place of 0.05 makes the answer 100 times too large.`,
        `An increase keeps the whole amount (the 1) and adds the part <i>r</i>: <span class="m">old + <i>r</i> · old = old(1 + <i>r</i>)</span>. A decrease removes the part, leaving <span class="m">1 − <i>r</i></span>. One multiplication replaces two steps, and repeated changes chain by multiplying.`,
        `A change only means something next to where it started. The old value is the base, so it goes in the denominator: $6 on a $40 price is 15%.`,
        `Simple interest is figured on the principal only, so every year earns the same <span class="m"><i>P</i> · <i>r</i></span>. On $2,000 at 5% that is $100 a year, and 3 years earn $300.`,
        `Each period multiplies the balance by <span class="m">1 + <i>r</i>/<i>n</i></span>, so <i>nt</i> periods multiply it by that factor <i>nt</i> times. Splitting the yearly rate first stops you charging a full year's interest every month.`,
        `Rounding partway through drops parts of a cent that would then be multiplied again. Keep full precision until the last line, and the answer is right to the cent.`
      ],
      stepTry: [{ label: "Set the rate to 7.5%", lab: "r:7.5" }, null, { label: "Read the percent change for $1,000 over 10 years", lab: "p:1000,r:5,t:10,compounded:0" }, null, null, { label: "Compound monthly", lab: "compounded:2" }],
      stepGoal: [null,
        { key: "amount", eq: 2700, text: `Set the model to $2,500 at 8% for 1 year, compounded yearly. One year of 8% is one multiplication by 1.08.`, after: `<span class="m">2,500 × 1.08 = 2,700</span>. One multiplication added the 8%.`, notYet: `Not yet. Check all four settings: <i>P</i> = $2,500, <i>r</i> = 8%, <i>t</i> = 1 year, compounded yearly.` },
        null,
        { key: "interest", eq: 280, text: `Put $4,000 in for 1 year, compounded yearly. Find the rate that earns exactly $280 of interest.`, after: `<span class="m">4,000 × 0.07 × 1 = 280</span>. Over one year, compounded yearly, simple and compound interest are the same.`, notYet: `Not yet. Keep <i>P</i> = $4,000, <i>t</i> = 1 year and yearly compounding, then move the rate. What is <span class="m">280 ÷ 4,000</span>?` },
        { key: "amount", eq: 3649.96, text: `Grow $3,000 at 4% for 5 years, compounded yearly. Predict first: <span class="m">3,000 × 1.04<sup>5</sup></span>.`, after: `<span class="m">3,000 × 1.04<sup>5</sup> ≈ 3,649.96</span>: five multiplications by 1.04.`, notYet: `Not yet. Set <i>P</i> = $3,000, <i>r</i> = 4%, <i>t</i> = 5 years and compounded yearly.` },
        null],
      matters: { title: "Why One Multiplier Beats Many Steps", text: `<p>Percent problems go wrong when you do them in pieces: find the tax, add it, find the discount, take it off, round each time.</p><ul class="why-chips"><li><b>Fewer</b> steps</li><li><b>No</b> early rounding</li><li>Changes <b>chain</b> by multiplying</li></ul><p>A multiplier does each change <b>in one move</b>. Several changes in a row become one product, and that works for one year or for thirty.</p>` },
      bridge: `<p>The savings walk multiplied by 1.05 once for each year. Shopping, tax, pay and loans use the same move: turn the percent into a multiplier, then multiply.</p>`,
      tasksTitle: "Everyday tasks: solve them",
      tasks: [
        { task: "Working out the sale price of an item that is 30% off", check: { q: `A jacket costs $80 and is marked 30% off. What is the sale price?`, parts: [{ label: "sale price ($)", ans: 56 }], hint: `30% off leaves 70%. Multiply $80 by 0.70.` }, figure: "× 0.70",
          demo: { kind: "bar", parts: [24, null], total: 80, labels: ["30% off", "you pay"], unit: "dollar", alt: "An 80 dollar bar splits into the 24 dollars taken off and the part you pay, which is revealed as 56 dollars." },
          lines: [{ math: `80, &nbsp;30% off`, note: "The price and the discount." }, { math: `100% − 30% = 70% → × 0.70`, note: "You keep 70% of the price." }, { math: `80 × 0.70 = 56`, note: "One multiplication gives the sale price: $56." }],
          predict: [null, { ask: `30% comes off. What decimal do you multiply the price by?`, parts: [{ label: "multiplier", ans: 0.7 }], hint: `You keep 100% − 30% of the price.` }],
          link: `Step 2, decrease form: multiply by <span class="m">1 − <i>r</i></span>. It is the walk's multiplier, going down.` },
        { task: "Adding sales tax to a purchase", check: { q: `The $56 jacket has 8% sales tax (an example rate). What do you pay in all?`, parts: [{ label: "total ($)", ans: 60.48 }], hint: `Multiply $56 by 1.08.` }, figure: "× 1.08",
          demo: { kind: "bar", parts: [56, 4.48], labels: ["price", "8% tax"], unit: "dollar", alt: "A 56 dollar bar, then a short piece of 4.48 dollars of tax joins it; a brace shows 60.48 dollars in all." },
          lines: [{ math: `56 + 8% tax`, note: "The price and the tax rate." }, { math: `1 + 0.08 = 1.08`, note: "Keep the whole price and add 8%." }, { math: `56 × 1.08 = 60.48`, note: "You pay $60.48. The tax is $4.48." }],
          predict: [null, { ask: `What do you multiply the price by to add 8%?`, parts: [{ label: "multiplier", ans: 1.08 }], hint: `1 for the price, plus 0.08 for the tax.` }],
          link: `Step 2, increase form. It is the same move as one year of the savings walk, with 1.08 in place of 1.05.` },
        { task: "Calculating the percent raise in a new job offer", check: { q: `You earn $52,000 a year. A new offer pays $54,600. What percent raise is that?`, parts: [{ label: "raise (%)", ans: 5 }], hint: `Find the change, then divide by your current pay.` }, figure: "5%",
          demo: { kind: "bar", parts: [52000, 2600], labels: ["pay now", "raise"], unit: "dollar", alt: "A 52,000 dollar bar for current pay, then a short piece of 2,600 dollars for the raise; together 54,600 dollars." },
          lines: [{ math: `52,000 → 54,600`, note: "Old pay, then new pay." }, { math: `54,600 − 52,000 = 2,600`, note: "The change in dollars." }, { math: `2,600 ÷ 52,000 = 0.05 = 5%`, note: "Divide by the old pay. It is the base." }],
          predict: [null, { ask: `How many dollars more is the new offer?`, parts: [{ label: "change ($)", ans: 2600 }], hint: `Subtract the old pay from the new pay.` }],
          link: `Step 3: divide by where you started. Dividing by the new pay gives about 4.8%, which undersells the raise.` },
        { task: "Comparing savings accounts by their annual percentage yield", check: { q: `Bank A pays 5% compounded monthly. Bank B pays 5.1% once a year. On $1,000 for one year, how much interest does Bank A pay?`, parts: [{ label: "Bank A interest ($)", ans: 51.16 }], hint: `Multiply $1,000 by <span class="m">(1 + 0.05/12)</span> twelve times, then subtract $1,000.` }, figure: "APY 5.12%",
          demo: { kind: "bar", parts: [1000, 51.16], labels: ["deposit", "interest"], unit: "dollar", alt: "A 1,000 dollar deposit bar, then a short piece of 51.16 dollars of interest joins it; a brace shows 1,051.16 dollars in all." },
          lines: [{ math: `B: 1,000 × 0.051 = 51`, note: "Bank B pays once: $51.00." }, { math: `A: 1,000 × (1 + 0.05/12)<sup>12</sup> ≈ 1,051.16`, note: "Bank A pays a little each month, and each month's interest earns interest." }, { math: `51.16 > 51.00`, note: "Bank A pays more. Its APY is about 5.12%, above Bank B's 5.10%." }],
          predict: [null, { ask: `Bank A's rate is lower. Can it still pay more?`, choices: [
            { t: "Yes, monthly compounding adds interest on interest", ok: true },
            { t: "No, a lower rate always pays less", why: "Not when it compounds more often. Each month's interest earns interest for the rest of the year." }
          ], hint: `Think of the savings walk. Interest added early earns interest later.` }],
          try: { label: "Show Bank A in the model", lab: "p:1000,r:5,t:1,compounded:2" },
          link: `Step 5 with <i>n</i> = 12. The APY in the model's panel is the yearly percent you really get.` },
        { task: "Understanding how a credit card balance grows if unpaid", check: { q: `A card charges 24% a year (an example rate), compounded monthly. You owe $1,000 and pay nothing for a year. What do you owe then?`, parts: [{ label: "you owe ($)", ans: 1268.24 }], hint: `Each month is 24% ÷ 12 = 2%. Multiply by 1.02 twelve times.` }, figure: "2% a month",
          demo: { kind: "bar", parts: [1000, 268.24], labels: ["what you owed", "interest"], unit: "dollar", alt: "A 1,000 dollar bar of debt, then 268.24 dollars of interest joins it; a brace shows 1,268.24 dollars owed." },
          lines: [{ math: `24% ÷ 12 = 2% a month`, note: "Split the yearly rate into months." }, { math: `1,000 × 1.02<sup>12</sup>`, note: "Twelve months, each times 1.02." }, { math: `1.02<sup>12</sup> ≈ 1.268242 → 1,268.24`, note: "You owe $1,268.24. That is $28.24 more than 24% of $1,000." }],
          predict: [null, { ask: `What does the balance get multiplied by each month?`, parts: [{ label: "monthly multiplier", ans: 1.02 }], hint: `Keep the whole balance (1) and add 2% (0.02).` }],
          link: `The savings walk run against you: unpaid interest is charged interest, like the extra $15.25.` }
      ]
    },

    formal: {
      question: { text: "How does a percent change an amount?", sub: `You can grow a balance and price a sale. Here are the words a textbook uses for the same ideas, and how to write an interest problem out in full.`,
        figure: { sym: `<i>I</i>`, value: "647.01", cap: "interest earned", echo: "interest" },
        jump: [{ label: "Vocabulary", to: "f-vocab" }, { label: "Where it goes wrong", to: "f-mist" }, { label: "Writing it out", to: "f-setup" }, { label: "Practice", to: "f-prac" }] },
      vocabTitle: "From your words to the textbook's",
      vocabIntro: `<p>Each card is an idea you already used in the Concept and Intermediate tabs, with its proper name and its exact meaning.</p>`,
      vocab: [
        { c: "c1", sym: `<i>P</i>`, term: "Principal", def: `The amount deposited or borrowed at time <span class="m"><i>t</i> = 0</span>, on which interest is computed.`, was: "the starting amount, $2,000" },
        { c: "c4", sym: `<i>r</i>`, term: "Annual rate", def: `The yearly interest rate or rate of change written as a decimal: a rate of <i>p</i>% is <span class="m"><i>r</i> = <i>p</i>/100</span>.`, was: "5%, written 0.05" },
        { c: "c4", sym: `1 ± <i>r</i>`, term: "Growth (or decay) factor", def: `The number a quantity is multiplied by for one period of change at rate <i>r</i>: <span class="m">1 + <i>r</i></span> for an increase, <span class="m">1 − <i>r</i></span> for a decrease.`, was: "the multiplier, 1.05 or 0.70" },
        { c: "c1", sym: `(<i>V</i><sub>1</sub> − <i>V</i><sub>0</sub>)/<i>V</i><sub>0</sub>`, term: "Percent change", def: `The change relative to the original value <span class="m"><i>V</i><sub>0</sub> ≠ 0</span>, multiplied by 100 to give a percent.`, was: "the change divided by the start" },
        { c: "c2", sym: `<i>I</i> = <i>Prt</i>`, term: "Simple interest", def: `Interest computed on the principal only. The balance <span class="m"><i>P</i>(1 + <i>rt</i>)</span> is a linear function of <i>t</i>.`, was: "the same $100 every year" },
        { c: "c3", sym: `<i>P</i>(1 + <i>r</i>/<i>n</i>)<sup><i>nt</i></sup>`, term: "Compound interest", def: `Interest added to the balance at the end of each period, so later interest is computed on earlier interest. The balance is an exponential function of <i>t</i>.`, was: "interest on interest" },
        { c: "c5", sym: `<i>n</i>`, term: "Compounding frequency", def: `The number of compounding periods per year; each period applies the rate <span class="m"><i>r</i>/<i>n</i></span>.`, was: "yearly, quarterly, monthly or daily" },
        { c: "c3", sym: `APY`, term: "Annual percentage yield", def: `The effective one-year rate <span class="m">(1 + <i>r</i>/<i>n</i>)<sup><i>n</i></sup> − 1</span>, which lets accounts with different <i>n</i> be compared.`, was: "the yearly percent the model reports" }
      ],
      matters: { title: "Why the exact words matter", text: `<p>A rate that rises from 4% to 5% has risen by <b>one percentage point</b>. Measured against where it started, that is a <b>25% increase</b>, because <span class="m">1 ÷ 4 = 0.25</span>.</p><ul class="why-chips"><li>"Up 1 point": 4% → 5%</li><li>"Up 1%": 4% → 4.04%</li><li>"Up 25%": 4% → 5%</li></ul><p>A loan quote, a news report or a contract can mean very different things with one word changed. Exact words let you <b>read the number someone else wrote</b> and write one <b>anyone can check</b>.</p>` },
      mistakesTitle: "Where formal answers go wrong",
      mistakesLead: `Most wrong answers here use the wrong base, or add percents that should multiply.`,
      setupIntro: `<p>The savings account from the Concept tab, written the way a textbook would.</p>`,
      setup: { title: "Writing an interest problem", items: [
        { say: `<b>Name the quantities.</b> Give each a letter, its units, and write the rate as a decimal.`, math: `<span class="m"><span class="c1"><i>P</i></span> = 2,000</span> dollars, &nbsp;<span class="m"><span class="c4"><i>r</i></span> = 0.05</span> per year, &nbsp;<span class="m"><i>t</i> = 3</span> years, &nbsp;<span class="m"><i>n</i> = 1</span>` },
        { say: `<b>Choose the model.</b> Simple interest grows linearly in <i>t</i>. Compound interest grows exponentially.`, math: `<span class="m"><span class="c2"><i>A</i><sub>s</sub> = <i>P</i>(1 + <i>rt</i>)</span>, &nbsp;<span class="c3"><i>A</i><sub>c</sub> = <i>P</i>(1 + <i>r</i>/<i>n</i>)<sup><i>nt</i></sup></span></span>` },
        { say: `<b>Justify the compound formula.</b> Each year's balance is the last one plus <i>r</i> times it, so one year multiplies by 1 + <i>r</i>. Repeating that <i>t</i> times gives the power.`, math: `<span class="m"><i>B</i><sub><i>k</i>+1</sub> = <i>B</i><sub><i>k</i></sub>(1 + <i>r</i>): &nbsp;2,000 → 2,100 → 2,205 → 2,315.25</span>` },
        { say: `<b>Express growth as a percent change.</b> Compare the final balance with the principal.`, math: `<span class="m">(2,315.25 − 2,000) ÷ 2,000 = 0.157625 = 15.7625%</span>` },
        { say: `<b>Substitute, compute, answer.</b> Round to the cent only at the end and state the result as a sentence.`, math: `<span class="m"><i>A</i><sub>c</sub> = 2,000 × 1.05<sup>3</sup> = <span class="c3">2,315.25</span></span> &nbsp;→ After 3 years the account holds $2,315.25, which is $15.25 more than simple interest.` }
      ] },
      practiceTip: `Type your answer and press Check. Work it the formal way: name <i>P</i>, <i>r</i>, <i>t</i> and <i>n</i>, choose the model, then compute. Round money to the cent only at the end. Stuck? Each one has a hint.`,
      practiceDone: "All 5 solved. You can work percent change, tax and interest the formal way.",
      checks: [
        { hint: `Percent change is <span class="m">(new − old) ÷ old</span>. The old price is $40.`, parts: [{ label: "percent change (%)", ans: 15 }] },
        { hint: `Adding 7.5% multiplies by <span class="m">1.075</span>.`, parts: [{ label: "total ($)", ans: 73.1 }] },
        { hint: `<span class="m"><i>I</i> = <i>Prt</i></span> with <span class="m"><i>r</i> = 0.04</span> and <span class="m"><i>t</i> = 5</span>; then add <i>I</i> to <i>P</i>.`, parts: [{ label: "interest ($)", ans: 240 }, { label: "balance ($)", ans: 1440 }] },
        { hint: `Monthly: <span class="m"><i>r</i>/<i>n</i> = 0.06/12 = 0.005</span> and <span class="m"><i>nt</i> = 24</span>.`, parts: [{ label: "balance ($)", ans: 5635.8 }] },
        { hint: `A raise of 8% multiplies by 1.08, so <span class="m">1.08<i>p</i> = 27</span>. Undo it by dividing.`, parts: [{ label: "old pay p ($)", ans: 25 }] }
      ]
    }
  },
  prereqWhy: {
    "percents": "Every application here starts from finding a percent of an amount and converting percents to decimals.",
    "exponents": "Compound interest repeats the same multiplication each period, which is written as a power."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Algebra II", why: "Exponential growth and decay functions, and solving for time with logarithms, extend the compound interest formula." },
    { field: "Precalculus", why: "The limit of (1 + 1/n)ⁿ as n grows defines e and continuous compounding." },
    { field: "Financial mathematics", why: "Annuities, amortisation and bond pricing are sums of compound interest terms." }
  ],
  mistakes: [
    { wrong: `A price drops 20% and then rises 20%, so it is back to where it started.`, fix: `The factors multiply: <span class="m">0.80 × 1.20 = 0.96</span>. The price ends 4% lower.` },
    { wrong: `Dividing by the new value: from $40 to $46 is <span class="m">6 ÷ 46 ≈ 13%</span>.`, fix: `Percent change divides by the original: <span class="m">6 ÷ 40 = 0.15 = 15%</span>.` },
    { wrong: `Using the annual rate every month: 6% compounded monthly as <span class="m">(1.06)<sup>12<i>t</i></sup></span>.`, fix: `Divide the rate by the periods: <span class="m">(1 + 0.06/12)<sup>12<i>t</i></sup> = 1.005<sup>12<i>t</i></sup></span>.` },
    { wrong: `Adding the yearly percents: $2,000 at 5% compounded yearly for 3 years earns 15%, so the balance is <span class="m">2,000 × 1.15 = 2,300</span>.`, fix: `Compounding multiplies: <span class="m">1.05<sup>3</sup> = 1.157625</span>, so the balance is <span class="m">2,000 × 1.157625 = 2,315.25</span>, a 15.7625% increase.` },
    { wrong: `Undoing a markup by taking the same percent off: a price after a 25% markup is $50, so the original was <span class="m">50 × 0.75 = 37.50</span>.`, fix: `Undo a multiplier by dividing by it: <span class="m">50 ÷ 1.25 = 40</span>. The original price was $40.` }
  ],
  practice: [
    { ctx: "Shopping", q: `A box of printer paper goes up in price from $40 to $46. What is the percent change?`, a: `<span class="m">(46 − 40) ÷ 40 = 0.15</span>, a 15% increase.` },
    { ctx: "Shopping", q: `You buy boots priced at $68 in a place with an example sales-tax rate of 7.5%. What do you pay in all?`, a: `<span class="m">68 × 1.075 = 73.1</span>, so you pay $73.10.` },
    { ctx: "Savings", q: `You put $1,200 into a savings certificate paying 4% simple interest per year for 5 years. Find the interest and the final balance.`, a: `<span class="m"><i>I</i> = 1,200 × 0.04 × 5 = 240</span>. Balance <span class="m">$1,440</span>.` },
    { ctx: "Investing", q: `You invest $5,000 at 6% annual interest, compounded monthly, for 2 years. What is the balance?`, a: `<span class="m">5,000 × (1 + 0.06/12)<sup>24</sup> = 5,000 × 1.005<sup>24</sup> ≈ 5,635.8</span>, so the balance is $5,635.80 to the cent.` },
    { ctx: "Work", q: `Write an equation with a letter for the unknown, then solve: after an 8% raise your hourly pay is $27.00. What was your hourly pay <i>p</i> before the raise?`, a: `<span class="m">1.08<i>p</i> = 27</span>, so <span class="m"><i>p</i> = 27 ÷ 1.08 = 25</span>. You earned <b>$25.00</b> an hour.` }
  ],
  origin: `Clay tablets from ancient Mesopotamia, around 2000 to 1700 BCE, include problems about loans with interest. In 1683 Jacob Bernoulli, studying interest compounded more and more often, found the limit now called e ≈ 2.718.`
};
