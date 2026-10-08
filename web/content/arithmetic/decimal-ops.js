window.ARITH = window.ARITH || {};

ARITH["decimal-ops"] = {
  title: "Operations with Decimals",
  short: "Add, subtract, multiply and divide decimals",
  grade: "Grades 5–6",
  hours: 8,
  voice: "plain",
  eyebrow: "Base ten · decimal arithmetic",
  hero: `<span class="m"><span class="c2">0.3</span> × <span class="c3">0.4</span> = <span class="c1">0.12</span></span>`,
  lede: `Three tenths of four tenths is twelve hundredths. The decimal places of the factors add up in the product.`,
  plain: `<p><b>Decimals</b> are base-ten numbers that continue to the right of the ones place: tenths, hundredths, thousandths. Money is the everyday case: $3.49 is 3 dollars, 4 dimes and 9 cents. Adding and subtracting decimals works like whole numbers once you <b>line up the decimal points</b>, so tenths sit under tenths and hundredths under hundredths. A $3.49 coffee and a $2.75 muffin cost <span class="m">3.49 + 2.75 = 6.24</span>, or $6.24.</p>
<p>Multiplication is where the point moves. Picture a square cut into a 10 by 10 grid, and shade 3 columns and 4 rows. The overlap is 12 small squares out of 100, so <span class="m">0.3 × 0.4 = 0.12</span>. Tenths times tenths gives hundredths. That is why you count the <b>decimal places</b> in both factors and give the product that many.</p>
<p>To divide by a decimal, move the point in both numbers the same number of places until the divisor is a whole number. The answer stays the same, because both numbers were multiplied by the same power of ten.</p>`,
  formal: `<p>A terminating decimal with <span class="m"><i>j</i></span> digits after the point is the fraction <span class="m"><span class="fr"><span><i>m</i></span><span>10<sup><i>j</i></sup></span></span></span> for some integer <span class="m"><i>m</i></span>. The operations follow from fraction arithmetic:</p>
<div class="display"><span class="c2"><span class="fr"><span><i>m</i></span><span>10<sup><i>j</i></sup></span></span></span> × <span class="c3"><span class="fr"><span><i>n</i></span><span>10<sup><i>k</i></sup></span></span></span> = <span class="c1"><span class="fr"><span><i>mn</i></span><span>10<sup><i>j</i>+<i>k</i></sup></span></span></span><br><i>x</i> ÷ <i>y</i> = (<i>x</i> · 10<sup><i>k</i></sup>) ÷ (<i>y</i> · 10<sup><i>k</i></sup>) &nbsp;<span class="dim">(<i>y</i> ≠ 0)</span></div>
<p>For addition and subtraction, write both numbers over the common denominator <span class="m">10<sup>max(<i>j</i>,<i>k</i>)</sup></span>, which is what aligning decimal points does. A quotient of terminating decimals may be a repeating decimal, for example <span class="m">1 ÷ 0.3 = 3.333…</span></p>`,
  legend: [
    { c: "c2", sym: `<i>x</i>`, name: "First factor", desc: "Shown as shaded columns on the hundredths grid." },
    { c: "c3", sym: `<i>y</i>`, name: "Second factor", desc: "Shown as shaded rows on the grid." },
    { c: "c1", sym: `<i>xy</i>`, name: "Product", desc: "The overlap of the rows and columns. Its decimal places equal the sum of the factors' decimal places." },
    { c: "c4", sym: `10<sup><i>k</i></sup>`, name: "Power of ten", desc: "Multiplying by 10 moves every digit one place left. Used to clear the decimal from a divisor." }
  ],
  steps: { title: "How to compute with decimals", items: [
    `<b>Add or subtract:</b> line up the decimal points. Fill empty places with zeros.`,
    `Compute as with whole numbers and bring the decimal point straight down.`,
    `<b>Multiply:</b> ignore the points and multiply the digits as whole numbers.`,
    `Count the total decimal places in both factors and place the point that many places from the right.`,
    `<b>Divide:</b> move the point in the divisor right until it is a whole number. Move the dividend's point the same number of places.`,
    `Divide as usual, putting the quotient's point directly above the dividend's point.`,
    `Estimate with rounded numbers to check the size of the answer.`
  ] },
  example: {
    prompt: `Cheese costs $6.40 per pound. You buy 2.75 pounds and pay with a $20 bill. What is the cost, and what is your change?`,
    lines: [
      { math: `<span class="m">275 × 640 = 176,000</span>`, note: "Multiply the digits as whole numbers." },
      { math: `<span class="m">2 + 2 = 4</span> decimal places`, note: "2.75 has two decimal places and 6.40 has two." },
      { math: `<span class="m"><span class="c2">2.75</span> × <span class="c3">6.40</span> = <span class="c1">17.6000</span> = 17.60</span>`, note: "Place the point four places from the right." },
      { math: `<span class="m">3 × 6 = 18</span>`, note: "Estimate: about 3 lb at about $6 is about $18, so $17.60 is reasonable." },
      { math: `<span class="m">20.00 − 17.60 = 2.40</span>`, note: "Line up the points to subtract." }
    ],
    answer: `The cheese costs <span class="m">$17.60</span> and your change is <span class="m">$2.40</span>.`
  },
  why: `<p>Money, measurements and data almost always come as decimals. Receipts, fuel pumps, pay stubs, bank statements, medicine labels and lab readings all need decimal arithmetic. One misplaced point is a factor-of-ten error: a dose of 0.5 mg misread as 5 mg is ten times too much.</p>
<p>Calculators and spreadsheets do the digits, but you still need to know roughly where the point belongs to catch a typo or a slipped key. Decimal fluency underlies percents, scientific notation, the metric system and statistics, and it is the starting point for understanding why computers sometimes round in surprising ways.</p>`,
  careers: [
    { role: "Bank teller", use: "Adds and subtracts deposits and withdrawals to the cent and balances the cash drawer at the end of a shift." },
    { role: "Machinist", use: "Adds and subtracts dimensions measured to thousandths of an inch, like 1.250 in − 0.375 in, when setting cuts." },
    { role: "Pharmacist", use: "Multiplies decimal doses such as 0.25 mg per tablet by the number of tablets, where a misplaced point is a tenfold error." },
    { role: "Payroll clerk", use: "Multiplies hours such as 37.5 by hourly rates such as $22.80 to compute gross pay." },
    { role: "Lab technician", use: "Divides measured masses and volumes read off digital instruments to get concentrations." },
    { role: "Construction estimator", use: "Multiplies areas in square feet by decimal unit costs to price materials." }
  ],
  life: [
    "Totalling a grocery receipt and checking your change",
    "Working out the cost of 12.6 gallons of gas at $3.49 a gallon",
    "Splitting a restaurant bill evenly among friends",
    "Following a metric recipe or medicine label in millilitres",
    "Checking a paycheck's hours times rate"
  ],
  fields: [
    { name: "Accounting", use: "All ledger arithmetic is decimal arithmetic to two places." },
    { name: "Chemistry", use: "Measurements from balances and burettes are decimals combined in calculations." },
    { name: "Health care", use: "Doses in mg and mL are decimals. Many hospitals require a leading zero (0.5 mg) and forbid a trailing zero (5 mg, never 5.0 mg) so a point cannot be missed." },
    { name: "Computer science", use: "Floating-point numbers are binary analogues of decimals, and understanding decimal rounding helps explain their errors." }
  ],
  layers: {
    concept: {
      heading: "How do you calculate with decimals?",
      lede: `Operations with decimals answer everyday questions about money and measurement: what does this cost, how much is left, how much each? The only new skill is keeping track of the point.`,
      history: `<p><b>The problem.</b> Astronomers, surveyors and merchants worked with parts of units every day: parts of a degree, of a length, of a coin. Common fractions with different denominators are slow to combine, and astronomers often used base-60 fractions instead.</p>
<p><b>The solution.</b> Decimal fractions appear in Arabic arithmetic by the 10th century, when al-Uqlidisi marked the split with a short stroke above a digit. In Samarkand, al-Kashi finished <i>The Key to Arithmetic</i> in 1427, teaching decimal fractions to students of astronomy, surveying, architecture, accounting and trade. In Europe, Simon Stevin's booklet <i>De Thiende</i> ("The Tenth", 1585) explained them for "stargazers, surveyors, carpet-makers, wine-gaugers, mint-masters and all kind of merchants". The point itself settled later; John Napier's logarithm tables of 1614 and 1619 used it.</p>
<p><b>What it changed.</b> Stevin argued that coins, weights and measures should be decimal too. An English translation of his booklet, published in 1608, inspired Thomas Jefferson to propose a decimal currency for the United States. Today money and the metric system are decimal in most of the world, which is why adding prices and converting centimetres follow the rules in this lesson.</p>`,
      sources: [
        { title: "Simon Stevin (MacTutor)", url: "https://mathshistory.st-andrews.ac.uk/Biographies/Stevin/" },
        { title: "Jamshid al-Kashi (MacTutor)", url: "https://mathshistory.st-andrews.ac.uk/Biographies/Al-Kashi/" },
        { title: "De Thiende (Wikipedia)", url: "https://en.wikipedia.org/wiki/De_Thiende" },
        { title: "Decimal separator (Wikipedia)", url: "https://en.wikipedia.org/wiki/Decimal_separator" }
      ],
      examples: [
        { role: "Bank teller", scene: `A customer deposits $1,248.75 and withdraws $300.50. With the points lined up, the account changes by <span class="m">1,248.75 − 300.50 = </span><b>$948.25</b>.`, takeaway: "A cash drawer has to balance to the cent at the end of a shift." },
        { role: "Machinist", scene: `A 1.250 in slot needs a 0.375 in insert. The gap left is <span class="m">1.250 − 0.375 = </span><b>0.875 in</b>.`, takeaway: "Lining up the points keeps thousandths under thousandths, where a part's fit is decided." },
        { role: "Pharmacist", scene: `An order calls for 0.75 mg and the tablets are 0.25 mg each. Move both points two places: <span class="m">75 ÷ 25 = 3</span>, so <b>3 tablets</b>.`, takeaway: "A point in the wrong place turns a dose into ten times or one tenth of what was ordered." },
        { role: "Payroll clerk", scene: `An employee works 37.5 hours at $22.80 an hour: <span class="m">375 × 2,280 = 855,000</span>, with 1 + 2 = 3 decimal places, gives <b>$855.00</b>.`, takeaway: "Counting decimal places is how a clerk knows the pay is $855, not $85.50." },
        { role: "Lab technician", scene: `4.2 g of salt is dissolved to make 0.25 L of solution. Concentration: <span class="m">4.2 ÷ 0.25 = 420 ÷ 25 = </span><b>16.8 g/L</b>.`, takeaway: "Clearing the decimal from the divisor turns an awkward division into a familiar one." },
        { role: "Construction estimator", scene: `Flooring for 240 sq ft at $3.85 per sq ft costs <span class="m">240 × 3.85 = </span><b>$924.00</b>. Estimate: <span class="m">240 × 4 = 960</span>.`, takeaway: "A quick estimate confirms the point is in the right place before a bid goes out." }
      ]
    },
    build: {
      lede: `Line up the points to add or subtract; multiply as whole numbers and count decimal places; clear the divisor's point before dividing.`,
      intro: `<p>The model above has two modes. In <b>Multiply</b>, a 10 by 10 grid stands for one whole: <span class="c2">x</span> shades columns, <span class="c3">y</span> shades rows, and the <span class="c1">overlap</span> is the product, counted in hundredths. In <b>Add</b>, two grids stand for two wholes; the squares of <span class="c2">x</span> and then <span class="c3">y</span> fill them in turn, and the readout stacks the numbers with their points lined up.</p>`,
      stepWhy: [
        `Each place must line up with the same place, and the decimal point marks where the ones are. Zeros fill empty places without changing the value: 4.7 = 4.70.`,
        `With places lined up, carrying and borrowing work exactly as for whole numbers. The point stays put because no place value changed.`,
        `A decimal is a whole number over a power of ten: 2.75 is 275/100 and 6.40 is 640/100. Multiplying the whole numbers handles the numerators first.`,
        `The denominators multiply too: <span class="m">100 × 100 = 10,000</span>, so hundredths times hundredths gives ten-thousandths. Placing the point four places from the right is that division by 10,000.`,
        `Multiplying the divisor and the dividend by the same power of ten keeps their ratio: <span class="m">7.56 ÷ 0.36 = 756 ÷ 36</span>. A whole-number divisor makes ordinary long division possible.`,
        `Once the divisor is whole, each digit of the quotient sits over the place it came from, so the point goes straight up.`,
        `Estimating with whole numbers checks the size of the answer, which is where a misplaced point shows: $17.60, not $1.76 or $176.`
      ],
      bridge: `<p>The cheese problem follows the pattern of most money and measurement tasks: multiply a rate by an amount, place the point by counting decimal places, check with an estimate, then subtract with the points lined up. Here is where the same steps show up.</p>`,
      tasks: [
        { task: "Working out the cost of 12.6 gallons of gas at $3.49 a gallon", link: `Steps 3 and 4: <span class="m">126 × 349 = 43,974</span>, with 1 + 2 = 3 decimal places, gives $43.974, about $43.97. Estimate as the cheese example did: <span class="m">13 × 3.50 = 45.50</span>.` },
        { task: "Checking your change", link: `Line up the points and subtract, as <span class="m">20.00 − 17.60 = 2.40</span> in the worked example.` },
        { task: "Splitting a restaurant bill evenly", link: `Divide by the number of people with the point straight above (step 6): $86.40 split 4 ways is <span class="m">86.40 ÷ 4 = 21.60</span>.` },
        { task: "Checking a paycheck's hours times rate", link: `Hours times rate is the cheese problem with new labels: multiply as whole numbers, then count the decimal places in both factors (step 4).` },
        { task: "Portioning metric amounts", link: `To see how many 0.36 m pieces fit in 7.56 m, practice item 4 moves both points two places: <span class="m">756 ÷ 36 = 21</span>.` }
      ]
    },
    formal: {
      setup: { title: "Writing a decimal computation", items: [
        { say: `<b>Name the quantities.</b> Give each a letter, with its units.`, math: `<span class="m"><span class="c3"><i>r</i></span> = 6.40</span> dollars per pound, &nbsp;<span class="m"><span class="c2"><i>w</i></span> = 2.75</span> pounds, &nbsp;paid 20.00 dollars` },
        { say: `<b>Write the expressions.</b> Cost is rate times amount; change is what you paid minus the cost.`, math: `<span class="m"><span class="c1"><i>C</i></span> = <span class="c2"><i>w</i></span> · <span class="c3"><i>r</i></span></span>, &nbsp;<span class="m">change = 20.00 − <i>C</i></span>` },
        { say: `<b>Justify placing the point.</b> Write each factor as a fraction over a power of ten; the powers multiply.`, math: `<span class="m">2.75 × 6.40 = <span class="fr"><span>275</span><span>100</span></span> × <span class="fr"><span>640</span><span>100</span></span> = <span class="fr"><span>176,000</span><span>10,000</span></span> = 17.60</span>` },
        { say: `<b>Justify lining up the points.</b> Both amounts in hundredths share one denominator, so the numerators subtract.`, math: `<span class="m">20.00 − 17.60 = <span class="fr"><span>2,000</span><span>100</span></span> − <span class="fr"><span>1,760</span><span>100</span></span> = <span class="fr"><span>240</span><span>100</span></span> = 2.40</span>` },
        { say: `<b>Answer in a sentence.</b> State both results with units.`, math: `<span class="m"><i>C</i> = <span class="c1">17.60</span></span> &nbsp;→ The cheese costs $17.60 and your change is $2.40.` }
      ] }
    }
  },
  prereqWhy: {
    "decimals": "You need to read decimal place values and know that 0.1 is one tenth before you can compute with them.",
    "multiplication": "Decimal multiplication is whole-number multiplication followed by placing the point."
  },
  unlocksWhy: {
    "averages": "Means are usually decimals, and computing them means adding decimal data and dividing.",
    "units": "Metric and other conversions multiply and divide by decimal conversion factors such as 2.54 cm per inch."
  },
  beyond: [
    { field: "Statistics", why: "Means, standard deviations and regression coefficients are computed and reported as decimals." },
    { field: "Numerical analysis", why: "Rounding and truncation in decimal computation are the starting point for studying computer error." }
  ],
  mistakes: [
    { wrong: `Lining up the right-hand digits: <span class="m">4.7 + 12.35</span> computed as <span class="m">0.47 + 12.35 = 12.82</span>.`, fix: `Line up the decimal points: <span class="m">4.70 + 12.35 = 17.05</span>.` },
    { wrong: `<span class="m">0.3 × 0.4 = 1.2</span>.`, fix: `The factors have one decimal place each, so the product has two: <span class="m">0.12</span>. A positive number less than 1 times another positive number less than 1 is less than both.` },
    { wrong: `Moving the point in the divisor but not the dividend: <span class="m">7.56 ÷ 0.36</span> treated as <span class="m">7.56 ÷ 36</span>.`, fix: `Move both points two places: <span class="m">756 ÷ 36 = 21</span>.` },
    { wrong: `Writing ".5" or "5.0" for an amount where a misread matters, such as a dose.`, fix: `Write 0.5 with a leading zero and 5 with no trailing zero. A faint point in ".5" or "5.0" can be read as 5 or 50, a tenfold error.` }
  ],
  practice: [
    { ctx: "Groceries", q: `You buy 4.7 lb of apples and 12.35 lb of potatoes. What is the total weight?`, a: `<span class="m">4.70 + 12.35 = 17.05</span>, so <b>17.05 lb</b>.` },
    { ctx: "Money", q: `You pay for a $3.46 item with a $10 bill. How much change do you get?`, a: `<span class="m">10.00 − 3.46 = 6.54</span>, so <b>$6.54</b>.` },
    { ctx: "Work", q: `A pump adds 0.06 L of concentrate per minute. How much does it add in 2.5 minutes?`, a: `<span class="m">6 × 25 = 150</span>, with 2 + 1 = 3 decimal places: <span class="m">0.150 = 0.15</span>, so <b>0.15 L</b>.` },
    { ctx: "Crafts", q: `A roll holds 7.56 m of ribbon and each bow uses 0.36 m. How many bows can you make?`, a: `Multiply both by 100: <span class="m">756 ÷ 36 = 21</span>, so <b>21 bows</b>.` },
    { ctx: "Travel", q: `Write an equation with a letter for the unknown, then solve: you pay $43.20 for 12 gallons of fuel. What is the price <i>p</i> per gallon?`, a: `<span class="m">12<i>p</i> = 43.20</span>, so <span class="m"><i>p</i> = 43.20 ÷ 12 = 3.60</span>. The price is <b>$3.60</b> a gallon.` }
  ],
  origin: `The Persian astronomer Jamshid al-Kashi used decimal fractions systematically in <i>The Key to Arithmetic</i> (1427). In Europe, Simon Stevin's pamphlet <i>De Thiende</i> (1585) argued for decimals in everyday measurement and trade.`
};
