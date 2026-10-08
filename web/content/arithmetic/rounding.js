window.ARITH = window.ARITH || {};

ARITH["rounding"] = {
  title: "Rounding & Estimation",
  short: "Swap a number for a nearby easy one.",
  grade: "Grades 3–4",
  hours: 3,
  voice: "plain",
  eyebrow: "Number sense · approximation",
  hero: `<span class="m"><span class="c1">4,372</span> ≈ <span class="c3">4,400</span></span>`,
  lede: `To round, find the two landmark numbers on either side and pick the closer one. An estimate made from rounded numbers tells you roughly what answer to expect.`,
  plain: `<p><b>Rounding</b> replaces an exact number with a nearby one that is easier to say, remember and work with. If 4,372 people came to a game, "about 4,400 people" is close enough for most purposes. You choose the <b>place</b> to round to: the nearest ten, hundred, thousand or dollar.</p>
<p>Picture 4,372 on a number line between two <b>landmarks</b>, 4,300 and 4,400. The <b>halfway mark</b> is 4,350. Since 4,372 is past it, the number is closer to 4,400 and rounds up. A number exactly on the halfway mark, such as 4,350, needs a rule. The usual rule is to round up, so 4,350 also becomes 4,400.</p>
<p><b>Estimating</b> means rounding first and then calculating with the easy numbers. An estimate tells you roughly what answer to expect, so a wrong exact answer stands out.</p>`,
  formal: `<p>To round a whole number <span class="m c1"><i>x</i></span> to the nearest multiple of <span class="m"><i>u</i></span> (where <span class="m"><i>u</i></span> = 10, 100, 1000, …), let <span class="m c2"><i>L</i></span> be the greatest multiple of <i>u</i> with <span class="m"><i>L</i> ≤ <i>x</i></span> and <span class="m c3"><i>U</i> = <i>L</i> + <i>u</i></span>. The <b>halfway point</b> is <span class="m c4"><i>L</i> + <i>u</i>/2</span>.</p>
<div class="display">round(<span class="c1"><i>x</i></span>) = <span class="c2"><i>L</i></span> &nbsp;if <span class="c1"><i>x</i></span> &lt; <span class="c4"><i>L</i> + <i>u</i>/2</span><br>round(<span class="c1"><i>x</i></span>) = <span class="c3"><i>U</i></span> &nbsp;if <span class="c1"><i>x</i></span> ≥ <span class="c4"><i>L</i> + <i>u</i>/2</span> <span class="dim">(round half up)</span></div>
<p>The digit one place to the right of the rounding place decides the result: 0–4 rounds down, 5–9 rounds up. Other tie-breaking rules exist. <b>Round half to even</b> (banker's rounding) sends ties to the even neighbour, so 4,350 → 4,400 but 4,250 → 4,200; it is the default in IEEE 754 floating-point arithmetic because it avoids an upward bias. The <b>rounding error</b> <span class="m">|round(<i>x</i>) − <i>x</i>|</span> is at most <span class="m"><i>u</i>/2</span>.</p>`,
  legend: [
    { c: "c1", sym: `<i>x</i>`, name: "The number", desc: "The exact value you want to round." },
    { c: "c2", sym: `<i>L</i>`, name: "Lower landmark", desc: "The nearest multiple of 10, 100, 1000 and so on at or below x." },
    { c: "c3", sym: `<i>U</i>`, name: "Upper landmark", desc: "The next multiple above the lower landmark." },
    { c: "c4", sym: `<i>L</i> + <i>u</i>/2`, name: "Halfway mark", desc: "The point exactly between the two landmarks. At or past it, round up; before it, round down." }
  ],
  steps: { title: "How to round a whole number", items: [
    `Find the place you are rounding to and underline that digit.`,
    `Look at the digit just to its right. This is the deciding digit.`,
    `If the deciding digit is 0, 1, 2, 3 or 4, keep the underlined digit the same.`,
    `If it is 5, 6, 7, 8 or 9, add 1 to the underlined digit. If that makes 10, write 0 and carry 1 to the next place left.`,
    `Change every digit to the right of the underlined place to 0.`
  ] },
  example: {
    prompt: `A school has three fundraisers. They raised $387, $214 and $529. The principal wants a quick estimate to the nearest hundred dollars, then the exact total.`,
    lines: [
      { math: `<span class="c1">387</span> → <span class="c3">400</span>`, note: "Tens digit is 8, so round up." },
      { math: `<span class="c1">214</span> → <span class="c2">200</span>`, note: "Tens digit is 1, so round down." },
      { math: `<span class="c1">529</span> → <span class="c2">500</span>`, note: "Tens digit is 2, so round down." },
      { math: `400 + 200 + 500 = 1,100`, note: "Add the easy numbers to get the estimate." },
      { math: `387 + 214 + 529 = 1,130`, note: "The exact total." },
      { math: `1,130 − 1,100 = 30`, note: "The estimate is close, which tells us the exact answer is reasonable." }
    ],
    answer: `The estimate is about <span class="m">$1,100</span>; the exact total is <span class="m">$1,130</span>.`
  },
  why: `<p>Most everyday decisions need only a rough number. Will $60 cover this cart of groceries? Can you make a 180-mile drive before dark? Will one gallon of paint cover the room? Rounding gives the answer in seconds, in your head. It also protects you: if a calculator says a 12-item bill is $1,240 and your estimate was about $120, a decimal point has slipped.</p>
<p>Rounding has a cost. Every rounded number carries a small error, and those errors can pile up when you round many times in a row. The error is never more than half the unit you round to, and knowing that limit is what lets scientists and engineers report measurements honestly. Significant figures, scientific notation, computer arithmetic and the error bounds of calculus all build on this idea.</p>`,
  careers: [
    { role: "Construction estimator", use: "Rounds material quantities and costs to prepare fast bids before detailed takeoffs are done." },
    { role: "Journalist", use: "Rounds large figures like budgets and crowd sizes so readers can grasp them, while keeping the rounding honest." },
    { role: "Pharmacist", use: "Applies specific rounding rules when converting calculated doses to amounts that can actually be measured or dispensed." },
    { role: "Software engineer", use: "Chooses rounding modes, such as round half to even, in financial code so totals don't drift over millions of transactions." },
    { role: "Restaurant server", use: "Estimates a 20% tip quickly by rounding the bill to a nearby easy number." }
  ],
  life: [
    "Keeping a running estimate of the grocery total while shopping",
    "Estimating travel time from distance and speed",
    "Checking whether a calculator answer looks about right",
    "Rounding a price like $19.99 to $20 when budgeting",
    "Guessing how many people will come to a party to plan food"
  ],
  fields: [
    { name: "Chemistry and physics", use: "Measured values are rounded to the correct number of significant figures." },
    { name: "Numerical computing", use: "Computers store most real numbers rounded, and analysts track how rounding error grows in a calculation." },
    { name: "Economics", use: "Official statistics are reported in rounded units, such as millions of dollars or tenths of a percent." },
    { name: "Accounting", use: "Financial statements are rounded to the nearest dollar or thousand, with a note when rounded totals do not add exactly." }
  ],
  layers: {
    concept: {
      lede: `Rounding answers the question "what is this number, roughly?" It trades a little accuracy for speed and clarity, and it lets you check an exact answer.`,
      heading: `What are rounding and estimation?`,
      history: `<p><b>The problem.</b> Some quantities cannot be written exactly, and many others are too long to be useful. Around 250 BCE Archimedes wanted the ratio of a circle's circumference to its diameter, the number now called π. No fraction gives it exactly, yet anyone measuring round things needed a usable value.</p>
<p><b>The solution.</b> Archimedes trapped the value between two simpler numbers. Using polygons drawn inside and outside a circle, up to 96 sides, he showed that π is less than 3 1/7 and greater than 3 10/71, roughly 3.1408 to 3.1429. An estimate together with a limit on its error is still the core of rounding. Computers later needed one fixed rule, and the IEEE 754 standard, adopted in 1985, made rounding to the nearest value, with ties going to the even neighbour, the default for floating-point arithmetic.</p>
<p><b>What it changed.</b> A rounding rule matters most when it is applied over and over. The Vancouver Stock Exchange started a new index at 1,000 in January 1982 and updated it about 3,000 times a day, cutting it to three decimal places each time instead of rounding. The small losses added up to about 25 points a month. When the error was corrected in November 1983, the index jumped from 524.811 to 1,098.892. Payroll, interest and sales tax software face the same risk, which is why their rounding rules are written down and tested.</p>`,
      sources: [
        { title: "Approximating Pi (NOVA, PBS)", url: "https://www.pbs.org/wgbh/nova/physics/approximating-pi.html" },
        { title: "IEEE 754-1985 (Wikipedia)", url: "https://en.wikipedia.org/wiki/IEEE_754-1985" },
        { title: "Vancouver Stock Exchange (Wikipedia)", url: "https://en.wikipedia.org/wiki/Vancouver_Stock_Exchange" }
      ],
      examples: [
        { role: "Restaurant server", scene: `A table's bill is $58.40. Round it to $60. Ten percent of $60 is $6, so a 20% tip is about <span class="m">2 × 6 = 12</span> dollars. The exact 20% is $11.68.`, takeaway: "A close estimate in seconds, with no calculator, is all a tip needs." },
        { role: "Construction estimator", scene: `A deck needs 38 boards at $23.75 each. Rounded: <span class="m">40 × 24 = 960</span>, so about $960. The exact cost is $902.50.`, takeaway: "Rounding both numbers up gives a safe upper figure for a fast bid." },
        { role: "Journalist", scene: `A city budget of $2,847,300,000 is reported as $2.8 billion. To the nearest hundred million the deciding digit is 4, so it rounds down.`, takeaway: "Readers remember a rounded figure, and honest rounding keeps it from overstating the truth." },
        { role: "Pharmacist", scene: `A calculated dose comes to 7.36 mL, and the oral syringe is marked in 0.1 mL steps. The hundredths digit is 6, so the dose is drawn up as <b>7.4 mL</b>.`, takeaway: "A dose has to be rounded to an amount that can actually be measured." },
        { role: "Software engineer", scene: `A payment of $2.345 must be rounded to cents. Round half up gives $2.35. Round half to even gives $2.34, because 4 is even.`, takeaway: "Half to even sends ties up and down equally often, so totals do not drift upward over millions of payments." }
      ]
    },
    build: {
      lede: `To round, find the rounding place, look at the one digit to its right, and go up or down based on that digit alone.`,
      intro: `<p>The model above places your number on a number line between its two landmarks, with the halfway mark between them. The colours match the legend: the number, the lower and upper landmarks, and the halfway mark that decides which way to go.</p>`,
      stepWhy: [
        `Rounding to the nearest hundred means choosing between two multiples of 100. The underlined digit tells you which two hundreds the number sits between.`,
        `The digit immediately to the right shows how far along the gap the number is. The digits after it are too small to carry it past the halfway mark, so they never change the decision.`,
        `A deciding digit of 0 to 4 means the number is short of halfway, so the lower landmark is closer. The lower landmark already has your underlined digit.`,
        `A deciding digit of 5 to 9 means the number is at or past halfway, so the upper landmark is the answer. It is one more unit in the rounding place, and adding 1 to a 9 carries exactly as in addition.`,
        `Every landmark is a multiple of the rounding unit, so all places to its right are zero. The zeros also hold the remaining digits in their correct places.`
      ],
      bridge: `<p>The fundraiser problem shows the whole routine: round each amount, add the easy numbers, then compare with the exact total. The same pattern runs through many everyday checks.</p>`,
      tasks: [
        { task: "Keeping a running grocery total", link: `Round each price as you shop, as $387 became $400 in the worked example, and add the rounded amounts as you go.` },
        { task: "Checking a calculator answer", link: `Compare it with an estimate, as $1,130 was compared with $1,100. A small gap is normal; a large one means a slipped digit.` },
        { task: "Budgeting with prices like $19.99", link: `The deciding digit is 9, so step 4 rounds the price up to $20.` },
        { task: "Estimating travel time", link: `Round 287 miles to 300, as in practice item 4. At 60 miles per hour that is about 5 hours.` },
        { task: "Reading a crowd size in the news", link: `A crowd of 4,372 reported as "about 4,400" is step 2 at work: the tens digit 7 decided it.` }
      ]
    },
    formal: {
      setup: { title: "Writing a rounding and estimation problem", items: [
        { say: `<b>Name the quantities and the unit.</b> Give each amount a letter and fix the rounding unit <i>u</i>.`, math: `<span class="m"><i>x</i><sub>1</sub> = 387, &nbsp;<i>x</i><sub>2</sub> = 214, &nbsp;<i>x</i><sub>3</sub> = 529</span> dollars, &nbsp;<span class="m"><i>u</i> = 100</span>` },
        { say: `<b>Find the landmarks.</b> The lower landmark is the largest multiple of <i>u</i> not above <i>x</i>; the halfway mark is <i>u</i>/2 above it.`, math: `<span class="m"><span class="c2"><i>L</i></span> = 300, &nbsp;<span class="c3"><i>U</i></span> = 400, &nbsp;<span class="c4"><i>L</i> + <i>u</i>/2</span> = 350</span> &nbsp;<span class="dim">(for 387)</span>` },
        { say: `<b>Apply the rule.</b> At or past the halfway mark, take <i>U</i>; before it, take <i>L</i>.`, math: `<span class="m">387 ≥ 350 ⇒ round(387) = 400; &nbsp;round(214) = 200; &nbsp;round(529) = 500</span>` },
        { say: `<b>Bound the error.</b> Each rounded value is within <i>u</i>/2 of the true one, so an estimate of a sum of <i>n</i> terms is within <i>n</i> · <i>u</i>/2 of the exact sum.`, math: `<span class="m">|<i>E</i> − <i>S</i>| ≤ 3 · 50 = 150</span>` },
        { say: `<b>Compute, compare, answer.</b> State both values in a sentence with units.`, math: `<span class="m"><i>E</i> = 400 + 200 + 500 = 1,100; &nbsp;<i>S</i> = 1,130; &nbsp;|<i>E</i> − <i>S</i>| = 30 ≤ 150</span> &nbsp;→ The fundraisers raised $1,130, about $1,100.` }
      ] }
    }
  },
  prereqWhy: {
    "place-value": "You must know which digit is in the tens, hundreds or thousands place to know where to round and which digit decides.",
    "number-line": "Rounding asks which of two landmarks on the number line a number is closer to."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Numerical analysis", why: "Studies how rounding errors arise and spread in computer calculations." },
    { field: "Statistics", why: "Reported results are rounded, and rounding decisions affect accuracy and fairness in summaries." },
    { field: "Calculus", why: "Approximations and error bounds, such as in linearization and Taylor polynomials, generalize estimation." }
  ],
  mistakes: [
    { wrong: `Rounding 4,351 to the nearest hundred by looking at the ones digit and getting 4,300.`, fix: `Look only at the digit right after the hundreds place, the tens digit 5. It is 5 or more, so round up: <span class="m">4,400</span>.` },
    { wrong: `Rounding 2,961 to the nearest hundred and writing <span class="m">2,1000</span>.`, fix: `The hundreds digit 9 becomes 10, so write 0 there and carry 1 to the thousands: <span class="m">3,000</span>.` },
    { wrong: `Rounding in steps: 347 → 350 → 400.`, fix: `Round once, from the original number. 347 to the nearest hundred looks at the tens digit 4, so it rounds to <span class="m">300</span>.` },
    { wrong: `Rounding a quantity down when running short is a problem: a wall needs 4.3 cans of paint, so you buy 4.`, fix: `The situation decides the direction. Any amount over 4 cans means buying <span class="m">5</span>, whatever the deciding digit says.` }
  ],
  practice: [
    { ctx: "Small business", q: `A shop had 67 customers in its first hour. Round that to the nearest ten for a quick report.`, a: `The ones digit is 7, so round up: <b>70</b>.` },
    { ctx: "News", q: `A concert drew 4,351 people. Round the attendance to the nearest hundred.`, a: `The tens digit is 5, so round up: <b>4,400</b>.` },
    { ctx: "Banking", q: `A transfer of $2,450 is rounded to the nearest hundred dollars. What does round half up give? What does round half to even give?`, a: `2,450 is exactly halfway. Round half up gives <b>2,500</b>. Round half to even gives <b>2,400</b>, because 4 is even.` },
    { ctx: "Shopping", q: `Three purchases cost $612, $287 and $405. Estimate the total by rounding each to the nearest hundred. Then find the exact sum.`, a: `<span class="m">600 + 300 + 400 = </span><b>1,300</b>. The exact sum is <b>1,304</b>.` },
    { ctx: "Travel", q: `Write an equation with a letter for the unknown, then solve: a road trip has legs of 187, 242 and 316 miles. Round each leg to the nearest hundred and let <i>E</i> be the estimated total. What is <i>E</i>, and how far is it from the exact total?`, a: `<span class="m"><i>E</i> = 200 + 200 + 300 = </span><b>700</b> miles. Exact: <span class="m">187 + 242 + 316 = 745</span>, so the estimate is <b>45 miles</b> low.` }
  ],
  origin: `The IEEE 754 standard for floating-point arithmetic, first published in 1985, made round-to-nearest with ties going to the even neighbour the default rounding mode in computers.`
};
