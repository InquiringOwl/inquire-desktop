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
    concept: {
      heading: "What are percent change, tax and interest?",
      lede: `How much does a price, a paycheck or a balance change when a percent is applied, and how fast does money grow or a debt build over time?`,
      history: `<p><b>The problem.</b> Lenders and borrowers have had to agree on the cost of a loan for thousands of years. A clay tablet from Babylon, dated to about 2000–1700 BCE, may be the first record of a compound interest problem. Rome needed simple shares of value too: the emperor Augustus levied a tax of 1/100 on goods sold at auction.</p>
<p><b>The solution.</b> Merchants turned hundredths into routine tools. Italian traders wrote <i>per cento</i>, "for a hundred", and the gradual contraction of that phrase became the % sign. Around 1340 the Florentine merchant Francesco Balducci Pegolotti included in his trading handbook <i>Pratica della mercatura</i> a table of compound interest on 100 lire, at rates from 1% to 8% for up to 20 years. In 1494 Luca Pacioli gave the rule of 72 for how long money at compound interest takes to double. Richard Witt's <i>Arithmeticall Questions</i> (1613) was devoted entirely to compound interest, with tables at 10% and 124 worked examples.</p>
<p><b>What it changed.</b> By the 17th century it was standard to quote interest rates in hundredths, so any two loans could be compared on one scale. In 1683 Jacob Bernoulli, studying a question about compound interest, found the constant now called e. The rule of 72 in the lab above, the APY on a savings account and the formulas in this lesson all come from that merchant arithmetic.</p>`,
      sources: [
        { title: "Compound interest (Wikipedia)", url: "https://en.wikipedia.org/wiki/Compound_interest" },
        { title: "Percentage (Wikipedia)", url: "https://en.wikipedia.org/wiki/Percentage" }
      ],
      examples: [
        { role: "Loan officer", scene: `A client wants $10,000 for 3 years at 7%. Simple interest costs <span class="m">10,000 × 0.07 × 3 = 2,100</span>. Compounded yearly with nothing repaid, the debt grows to <span class="m">10,000 × 1.07<sup>3</sup> = 12,250.43</span>, so <b>$2,250.43</b> of interest.`, takeaway: "The same rate costs more when interest is charged on interest." },
        { role: "Financial planner", scene: `$10,000 left to grow at an assumed 7% a year for 30 years becomes <span class="m">10,000 × 1.07<sup>30</sup> ≈ 76,123</span>, about <b>$76,123</b>.` , takeaway: "Time does most of the work in compound growth, so starting early matters." },
        { role: "Retail buyer", scene: `An item costs the store $40. A 50% markup sets the price at <span class="m">40 × 1.50 = 60</span>. A 25% off sale then charges <span class="m">60 × 0.75 = 45</span>, still <b>$5</b> above cost.`, takeaway: "Chained multipliers show whether a promotion still makes money." },
        { role: "Tax preparer", scene: `A business receipt shows $250 before tax at an example sales-tax rate of 6.5%. Tax: <span class="m">250 × 0.065 = 16.25</span>. Total: <b>$266.25</b>.`, takeaway: "Separating the tax from the price is needed for every expense claim." },
        { role: "Actuary", scene: `A payment of $10,000 is due in 5 years. At 4% a year its value today is <span class="m">10,000 ÷ 1.04<sup>5</sup> ≈ 8,219.27</span>, about <b>$8,219</b>.`, takeaway: "Dividing by the growth factor runs compound interest backward, which is how future promises are priced." },
        { role: "Economist", scene: `A basket of groceries costs $250 one year and $260 the next. Percent change: <span class="m">(260 − 250) ÷ 250 = 0.04</span>, so <b>4%</b> inflation for that basket.`, takeaway: "Inflation is a percent change, always measured from the earlier price." }
      ]
    },
    build: {
      lede: `Turn every percent into a multiplier, multiply once per period, and divide by the starting value whenever you want a percent change.`,
      intro: `<p>The chart shows a balance over 40 years. The dashed amber line is the principal <i>P</i>. The cyan straight line is simple interest, which rises by the same dollar amount each year. The pink curve is compound interest, which rises by the same factor each period. Move the sliders for <i>P</i>, <i>r</i> and <i>t</i> and choose how often interest is compounded. The shaded gap up to year <i>t</i> is interest earned on interest, and the panel gives both balances, the APY and the doubling time.</p>`,
      stepWhy: [
        `Percent means per hundred, so 5% is <span class="m">5/100 = 0.05</span>. The formulas multiply by the rate directly, and using 5 in place of 0.05 makes the answer 100 times too large.`,
        `An increase keeps the whole original amount (the 1) and adds the part <i>r</i>: <span class="m">old + <i>r</i> · old = old(1 + <i>r</i>)</span>. A decrease removes the part, leaving <span class="m">1 − <i>r</i></span>. One multiplication replaces two steps, and repeated changes chain by multiplying.`,
        `A change only means something next to where it started. The old value is the base, so it goes in the denominator: $6 on a $40 price is 15%.`,
        `Simple interest is figured on the principal only, so every year earns the same <span class="m"><i>P</i> · <i>r</i></span>. In the worked example that is $100 a year, and 3 years earn $300.`,
        `Each period multiplies the balance by <span class="m">1 + <i>r</i>/<i>n</i></span>, so <i>nt</i> periods multiply it by that factor <i>nt</i> times. Splitting the annual rate first stops you charging a full year's interest every month.`,
        `Rounding partway through drops fractions of a cent that would then be multiplied again. Keeping full precision until the last line keeps the final answer correct to the cent.`
      ],
      bridge: `<p>The deposit problem shows the two growth patterns behind most money decisions: add the same amount each period, or multiply by the same factor. Shopping, tax and pay changes use the one-step version of the same multiplier.</p>`,
      tasks: [
        { task: "Working out the sale price of an item that is 30% off", link: `Step 2, decrease form: 30% off leaves 70%, so multiply the price by 0.70.` },
        { task: "Adding sales tax to a purchase", link: `Practice item 2 does it in one multiplication: <span class="m">68 × 1.075 = 73.10</span>.` },
        { task: "Calculating the percent raise in a new job offer", link: `Step 3: divide the increase by your current pay, as practice item 1 divides by the old price of $40.` },
        { task: "Comparing savings accounts by their annual percentage yield", link: `Compare APY, the effective yearly increase the lab reports. Monthly compounding multiplies by 1.005 each month in practice item 4, which gives a little more than 6% a year.` },
        { task: "Understanding how a credit card balance grows if unpaid", link: `An unpaid balance follows the compound curve of the worked example: interest is charged on earlier interest, like the extra $15.25.` }
      ]
    },
    formal: {
      setup: { title: "Writing an interest problem", items: [
        { say: `<b>Name the quantities.</b> Give each a letter, its units, and write the rate as a decimal.`, math: `<span class="m"><span class="c1"><i>P</i></span> = 2,000</span> dollars, &nbsp;<span class="m"><span class="c4"><i>r</i></span> = 0.05</span> per year, &nbsp;<span class="m"><i>t</i> = 3</span> years, &nbsp;<span class="m"><i>n</i> = 1</span>` },
        { say: `<b>Choose the model.</b> Simple interest grows linearly in <i>t</i>. Compound interest grows exponentially.`, math: `<span class="m"><span class="c2"><i>A</i><sub>s</sub> = <i>P</i>(1 + <i>rt</i>)</span>, &nbsp;<span class="c3"><i>A</i><sub>c</sub> = <i>P</i>(1 + <i>r</i>/<i>n</i>)<sup><i>nt</i></sup></span></span>` },
        { say: `<b>Justify the compound formula.</b> Each year's balance is the last one plus <i>r</i> times it, so one year multiplies by 1 + <i>r</i>. Repeating that <i>t</i> times gives the power.`, math: `<span class="m"><i>B</i><sub><i>k</i>+1</sub> = <i>B</i><sub><i>k</i></sub>(1 + <i>r</i>): &nbsp;2,000 → 2,100 → 2,205 → 2,315.25</span>` },
        { say: `<b>Express growth as a percent change.</b> Compare the final balance with the principal.`, math: `<span class="m">(2,315.25 − 2,000) ÷ 2,000 = 0.157625 = 15.7625%</span>` },
        { say: `<b>Substitute, compute, answer.</b> Round to the cent only at the end and state the result as a sentence.`, math: `<span class="m"><i>A</i><sub>c</sub> = 2,000 × 1.05<sup>3</sup> = <span class="c3">2,315.25</span></span> &nbsp;→ After 3 years the account holds $2,315.25, which is $15.25 more than simple interest.` }
      ] }
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
    { wrong: `Confusing percent with percentage points: a rate rising from 4% to 5% "rose 1%".`, fix: `It rose 1 percentage point, which is a <span class="m">25%</span> increase in the rate.` },
    { wrong: `Undoing a markup by taking the same percent off: a price after a 25% markup is $50, so the original was <span class="m">50 × 0.75 = 37.50</span>.`, fix: `Undo a multiplier by dividing by it: <span class="m">50 ÷ 1.25 = 40</span>. The original price was $40.` }
  ],
  practice: [
    { ctx: "Shopping", q: `A box of printer paper goes up in price from $40 to $46. What is the percent change?`, a: `<span class="m">(46 − 40) ÷ 40 = 0.15</span>, a 15% increase.` },
    { ctx: "Shopping", q: `You buy boots priced at $68 in a place with an example sales-tax rate of 7.5%. What do you pay in all?`, a: `<span class="m">68 × 1.075 = 73.10</span>, so $73.10.` },
    { ctx: "Savings", q: `You put $1,200 into a savings certificate paying 4% simple interest per year for 5 years. Find the interest and the final balance.`, a: `<span class="m"><i>I</i> = 1,200 × 0.04 × 5 = 240</span>. Balance <span class="m">$1,440</span>.` },
    { ctx: "Investing", q: `You invest $5,000 at 6% annual interest, compounded monthly, for 2 years. What is the balance?`, a: `<span class="m">5,000 × (1 + 0.06/12)<sup>24</sup> = 5,000 × 1.005<sup>24</sup> ≈ 5,635.80</span>, so about $5,635.80.` },
    { ctx: "Work", q: `Write an equation with a letter for the unknown, then solve: after an 8% raise your hourly pay is $27.00. What was your hourly pay <i>p</i> before the raise?`, a: `<span class="m">1.08<i>p</i> = 27</span>, so <span class="m"><i>p</i> = 27 ÷ 1.08 = 25</span>. You earned <b>$25.00</b> an hour.` }
  ],
  origin: `Clay tablets from ancient Mesopotamia, around 2000 to 1700 BCE, include problems about loans with interest. In 1683 Jacob Bernoulli, studying interest compounded more and more often, found the limit now called e ≈ 2.718.`
};
