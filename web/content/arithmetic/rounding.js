window.ARITH = window.ARITH || {};

ARITH["rounding"] = {
  title: "Rounding & Estimation",
  short: "Swap a number for a nearby round one.",
  grade: "Grades 3–4",
  hours: 3,
  voice: "plain",
  eyebrow: "Number sense · approximation",
  hero: `<span class="m"><span class="c1">4,372</span> ≈ <span class="c3">4,400</span></span>`,
  lede: `To round a whole number to a given place, bracket it between consecutive multiples of that place and choose the nearer one, with a fixed rule for ties. An estimate computed from rounded values predicts the size of an exact result.`,
  plain: `<p><b>Rounding</b> replaces an exact number with a nearby round one that is quicker to say, remember and work with. If 4,372 people came to a game, "about 4,400 people" is close enough for most purposes. You choose the <b>place</b> to round to: the nearest ten, hundred, thousand or dollar.</p>
<p>Picture 4,372 on a number line between two <b>landmarks</b>, 4,300 and 4,400. The <b>halfway mark</b> is 4,350. Since 4,372 is past it, the number is closer to 4,400 and rounds up. A number exactly on the halfway mark, such as 4,350, needs a rule. The usual rule is to round up, so 4,350 also becomes 4,400.</p>
<p><b>Estimating</b> means rounding first and then calculating with the round numbers. An estimate tells you roughly what answer to expect, so a wrong exact answer stands out.</p>`,
  formal: `<p>To round a whole number <span class="m c1"><i>x</i></span> to the nearest multiple of <span class="m"><i>u</i></span> (where <span class="m"><i>u</i></span> = 10, 100, 1000, …), let <span class="m c2"><i>L</i></span> be the greatest multiple of <i>u</i> with <span class="m"><i>L</i> ≤ <i>x</i></span> and <span class="m c3"><i>U</i> = <i>L</i> + <i>u</i></span>. The <b>halfway point</b> is <span class="m c4"><i>L</i> + <i>u</i>/2</span>.</p>
<div class="display">round(<span class="c1"><i>x</i></span>) = <span class="c2"><i>L</i></span> &nbsp;if <span class="c1"><i>x</i></span> &lt; <span class="c4"><i>L</i> + <i>u</i>/2</span><br>round(<span class="c1"><i>x</i></span>) = <span class="c3"><i>U</i></span> &nbsp;if <span class="c1"><i>x</i></span> ≥ <span class="c4"><i>L</i> + <i>u</i>/2</span> <span class="dim">(round half up)</span></div>
<p>The digit one place to the right of the rounding place decides the result: 0–4 rounds down, 5–9 rounds up. Other tie-breaking rules exist. <b>Round half to even</b> (banker's rounding) sends ties to the even neighbour, so 4,350 → 4,400 but 4,250 → 4,200; it is the default in IEEE 754 floating-point arithmetic because it avoids an upward bias. The <b>rounding error</b> <span class="m">|round(<i>x</i>) − <i>x</i>|</span> is at most <span class="m"><i>u</i>/2</span>.</p>`,
  legend: [
    { c: "c1", sym: `<i>x</i>`, name: "The number", desc: "The exact value you want to round. In the model it is the amber dot." },
    { c: "c2", sym: `<i>L</i>`, name: "Lower landmark", desc: "The nearest multiple of 10, 100, 1000 and so on at or below x." },
    { c: "c3", sym: `<i>U</i>`, name: "Upper landmark", desc: "The next multiple above the lower landmark." },
    { c: "c4", sym: `<i>L</i> + <i>u</i>/2`, name: "Halfway mark", desc: "The point exactly between the two landmarks. At or past it, round up. Before it, round down." }
  ],
  steps: { title: "How to round a whole number", items: [
    `Find the place you are rounding to and underline that digit.`,
    `Look at the digit right after it. This is the deciding digit.`,
    `If the deciding digit is 0, 1, 2, 3 or 4, keep the underlined digit the same.`,
    `If it is 5, 6, 7, 8 or 9, add 1 to the underlined digit. If that makes 10, write 0 and carry 1 to the next place left.`,
    `Change every digit to the right of the underlined place to 0.`
  ] },
  example: {
    prompt: `A school ran three fundraisers. They raised $347, $218 and $462. The principal wants a quick estimate to the nearest hundred dollars, then the exact total.`,
    lines: [
      { math: `<span class="c1">347</span> → <span class="c2">300</span>`, note: "Tens digit is 4, so round down." },
      { math: `<span class="c1">218</span> → <span class="c2">200</span>`, note: "Tens digit is 1, so round down." },
      { math: `<span class="c1">462</span> → <span class="c3">500</span>`, note: "Tens digit is 6, so round up." },
      { math: `300 + 200 + 500 = 1,000`, note: "Add the round numbers to get the estimate." },
      { math: `347 + 218 + 462 = 1,027`, note: "The exact total." },
      { math: `1,027 − 1,000 = 27`, note: "The estimate is close, which tells us the exact answer is reasonable." }
    ],
    answer: `The estimate is about <span class="m">$1,000</span>; the exact total is <span class="m">$1,027</span>.`
  },
  why: `<p>Most everyday decisions need only a rough number. Will $60 cover this cart of groceries? Can you make a 180-mile drive before dark? Will one gallon of paint cover the room? Rounding gives the answer in seconds, in your head. It also protects you: if a calculator says a 12-item bill is $1,240 and your estimate was about $120, a decimal point has slipped.</p>
<p>Rounding has a cost. Every rounded number carries a small error, and those errors can pile up when you round many times in a row. The error is never more than half the unit you round to, and knowing that limit is what lets scientists and engineers report measurements honestly. Significant figures, scientific notation, computer arithmetic and the error bounds of calculus all build on this idea.</p>`,
  careers: [
    { role: "Construction estimator", use: "Rounds material quantities and costs to prepare fast bids before detailed takeoffs are done." },
    { role: "Journalist", use: "Rounds large figures like budgets and crowd sizes so readers can grasp them, while keeping the rounding honest." },
    { role: "Pharmacist", use: "Applies specific rounding rules when converting calculated doses to amounts that can actually be measured or dispensed." },
    { role: "Software engineer", use: "Chooses rounding modes, such as round half to even, in financial code so totals don't drift over millions of transactions." },
    { role: "Restaurant server", use: "Estimates a 20% tip quickly by rounding the bill to a nearby round number." }
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
    nudge: "Not yet. Check the digit right after the rounding place.",
    concept: {
      lede: `Rounding answers the question "what is this number, roughly?" It trades a little accuracy for speed, and it lets you check an exact answer.`,
      heading: `What are rounding and estimation?`,
      question: { text: "About how much?", sub: `Every rounding comes down to the same three ideas. Watch each one in the model above, then try it yourself.`,
        figure: { sym: `≈`, value: "350", cap: "the rounded value", echo: "rounded" } },
      ideasTitle: "Three ideas, all in the model",
      objects: ["dollar", "dollars", "fundraiser", "fundraisers", "board", "boards", "tip", "dose", "payment", "payments", "cent", "cents", "sponge", "readers", "points"],
      walk: { title: "Round it together: three fundraisers",
        lead: `One situation, step by step. Try each question before you show the next line.`,
        prompt: `A school ran three fundraisers. They raised $347, $218 and $462. The principal wants each amount to the nearest hundred dollars for a quick report, then a check against the exact total.`,
        demo: { kind: "line", from: 300, to: 400, tick: 50, points: [
          { v: 300, c: "c2", label: "300" }, { v: 400, c: "c3", label: "400" }, { v: 347, c: "c1", label: "347" }, { v: 350, c: "c4", label: "" }],
          alt: "A number line from 300 to 400. The landmarks 300 and 400 appear, then the amount 347, then the halfway mark at 350, a little to the right of 347." },
        lines: [
          { math: `300 &lt; 347 &lt; 400`, note: `To the nearest hundred, $347 becomes 300 or 400. Those are its two landmarks.`, frame: 3 },
          { math: `halfway = 350`, note: `The point exactly between the landmarks is 350. It is the dividing line.`, frame: 4 },
          { math: `347 &lt; 350 → <span class="c2">300</span>`, note: `347 has not reached halfway, so 300 is closer. The first fundraiser is about $300.`, frame: 4 },
          { math: `347 → 350 → 400`, note: `A shortcut rounds twice, to the ten and then to the hundred. The first step pushes 347 up to halfway, so it lands on the wrong side.`, frame: 4 },
          { math: `218 → <span class="c2">200</span>, &nbsp;462 → <span class="c3">500</span>`, note: `Round the other two once each. The tens digit decides: 1 is below 5, and 6 is 5 or more.`, frame: 4 },
          { math: `300 + 200 + 500 = 1,000`, note: `Add the round numbers. The estimate is about $1,000.`, frame: 4 },
          { math: `347 + 218 + 462 = 1,027`, note: `The exact total is $1,027. It is close to the estimate, so the exact sum looks right.`, frame: 4 }
        ],
        predict: [null,
          { ask: `What number is exactly halfway between 300 and 400?`, parts: [{ label: "halfway", ans: 350 }], hint: `The gap is 100. Half of it is 50. Count 50 up from 300.` },
          { ask: `Which landmark is closer to 347?`, choices: [
            { t: "300, it is 47 away", ok: true },
            { t: "400, because 347 is close to 350", why: "Close to halfway is still short of it. 400 is 53 away. 300 is only 47 away." }
          ], hint: `Is 347 before or after the halfway mark, 350?` },
          { ask: `A friend rounds 347 to 350 first, then 350 to 400. Where did it go wrong?`, choices: [
            { t: "The first step moved 347 up to halfway", ok: true },
            { t: "350 should round down", why: "350 is exactly halfway, and the usual rule sends halfway up. The slip came one step earlier." },
            { t: "Nowhere, 400 is right", why: "347 is 53 from 400 and only 47 from 300. Round once, from the number you started with." }
          ], hint: `Compare 347 with 350. Which one is past halfway?` },
          { ask: `Round $462 to the nearest hundred.`, parts: [{ label: "462 rounds to", ans: 500 }], hint: `Look at the tens digit, 6. Is it 5 or more?` },
          { ask: `Add the round numbers. What is the estimate?`, parts: [{ label: "estimate", ans: 1000 }], hint: `3 hundreds, 2 hundreds and 5 hundreds.` },
          { ask: `Now the exact sum. What is 347 + 218 + 462?`, parts: [{ label: "exact total", ans: 1027 }], hint: `347 + 218 = 565. Then add 462.` }],
        answer: `Rounded, the fundraisers raised about <span class="m">$1,000</span>; the exact total is <span class="m">$1,027</span>.` },
      ideas: [
        { c: "c2", title: "Two landmarks, one on each side", term: "landmarks", text: `To round 263 to the nearest ten, find the round numbers on each side: 260 and 270. The answer is one of them.`,
          demo: { kind: "line", from: 260, to: 270, points: [{ v: 260, c: "c2", label: "260" }, { v: 270, c: "c3", label: "270" }, { v: 263, c: "c1", label: "263" }], alt: "A number line from 260 to 270. The landmarks 260 and 270 appear, then 263 between them." },
          try: { label: "Round 263 to the ten", lab: "x:263,round:0" } },
        { c: "c4", title: "Halfway decides the direction", term: "halfway mark", text: `Before halfway, go down. At halfway or past it, go up. 265 sits exactly halfway, so it rounds up to 270.`,
          demo: { kind: "line", from: 260, to: 270, points: [{ v: 260, c: "c2", label: "260" }, { v: 270, c: "c3", label: "270" }, { v: 265, c: "c4", label: "265" }], alt: "A number line from 260 to 270. The landmarks appear, then the halfway mark, 265, exactly between them." },
          try: { label: "Put the number on 265", lab: "x:265,round:0" } },
        { c: "c1", title: "One digit tells you", term: "deciding digit", text: `To round to the hundred, read the tens digit only. 682 has tens digit 8, so it rounds up to 700.`,
          demo: { kind: "columns", n: 682, alt: "The number 682 is split into places one at a time: 6 hundreds, 8 tens and 2 ones." },
          try: { label: "Round 682 to the hundred", lab: "x:682,round:1" } }
      ],
      timelineTitle: "Rounding rules have real consequences",
      timelineLead: `Each beat is the same choice you make in the model: which landmark to pick, and what to do at halfway.`,
      timeline: [
        { when: "About 250 BCE", what: `Archimedes traps π between 3 10/71 and 3 1/7, using shapes with up to 96 sides. A lower and an upper value, like the two landmarks in the model.` },
        { when: "January 1982", what: `The Vancouver Stock Exchange starts a new index at 1,000. After each of about 3,000 updates a day, it cuts the value to three decimal places. Cutting always takes the lower landmark.` },
        { when: "November 1983", what: `The error is fixed over one weekend. The index jumps from 524.811 to 1,098.892.` },
        { when: "1985", what: `The IEEE 754 standard makes round to nearest, ties to even, the default in computer arithmetic. It is a rule for the halfway mark.` }
      ],
      history: `<p><b>The problem.</b> Some quantities cannot be written exactly, and many others are too long to be useful. Around 250 BCE Archimedes wanted the ratio of a circle's circumference to its diameter, the number now called π. No fraction gives it exactly, yet anyone measuring round things needed a usable value.</p>
<p><b>The solution.</b> Archimedes trapped the value between two simpler numbers. Using polygons drawn inside and outside a circle, up to 96 sides, he showed that π is less than 3 1/7 and greater than 3 10/71, roughly 3.1408 to 3.1429. An estimate together with a limit on its error is still the core of rounding. Computers later needed one fixed rule, and the IEEE 754 standard, adopted in 1985, made rounding to the nearest value, with ties going to the even neighbour, the default for floating-point arithmetic.</p>
<p><b>What it changed.</b> A rounding rule matters most when it is applied over and over. The Vancouver Stock Exchange started a new index at 1,000 in January 1982 and updated it about 3,000 times a day, cutting it to three decimal places each time instead of rounding. The small losses added up to about 25 points a month. When the error was corrected in November 1983, the index jumped from 524.811 to 1,098.892. Payroll, interest and sales tax software face the same risk, which is why their rounding rules are written down and tested.</p>`,
      sources: [
        { title: "Approximating Pi (NOVA, PBS)", url: "https://www.pbs.org/wgbh/nova/physics/approximating-pi.html" },
        { title: "IEEE 754-1985 (Wikipedia)", url: "https://en.wikipedia.org/wiki/IEEE_754-1985" },
        { title: "Vancouver Stock Exchange (Wikipedia)", url: "https://en.wikipedia.org/wiki/Vancouver_Stock_Exchange" }
      ],
      matters: { title: "Why rounding is worth knowing", text: `<p>Most everyday choices need <b>a close number, fast</b>. Rounding gives you one in your head.</p><ul class="why-chips"><li><b>Shopping</b>: will the cash cover the cart?</li><li><b>Driving</b>: will you arrive before dark?</li><li><b>Checking</b>: does the calculator answer make sense?</li></ul><p>A rounded estimate also <b>catches mistakes</b>. When an exact answer lands far from your estimate, a digit has slipped.</p>` },
      stakes: { title: "Where rounding goes wrong", lead: `Most slips come from reading the wrong digit or rounding more than once.`, items: [
        { role: "Rounding twice", text: `347 goes to 350, then to 400. Round once, from 347, and you get 300.` },
        { role: "The wrong digit", text: `4,351 to the nearest hundred is 4,400. Only the tens digit, 5, decides. The ones digit has no say.` },
        { role: "A 9 that rolls over", text: `2,961 to the nearest hundred: the 9 becomes 10, so write 0 and carry 1. The answer is 3,000.` },
        { role: "Buying supplies", text: `A wall needs 4.3 cans of paint. Rounding down to 4 leaves part of the wall bare. Buy 5.` }
      ], try: { label: "Round 347 to the ten first", lab: "x:347,round:0" } },
      examplesTitle: "Where you will meet it",
      examples: [
        { role: "Restaurant server", figure: "$12 tip", try: { label: "Round 58 to the ten", lab: "x:58,round:0" }, scene: `A table's bill is $58.40. Round it to $60. Ten percent of $60 is $6, so a 20% tip is about <span class="m">2 × 6 = 12</span> dollars. The exact 20% is $11.68.`, takeaway: "A close estimate in seconds, with no calculator, is all a tip needs." },
        { role: "Construction estimator", figure: "about $960", try: { label: "Round 38 to the ten", lab: "x:38,round:0" }, scene: `A deck needs 38 boards at $23.75 each. Rounded: <span class="m">40 × 24 = 960</span>, so about $960. The exact cost is $902.50.`, takeaway: "Rounding both numbers up gives a safe upper figure for a fast bid." },
        { role: "Journalist", figure: "$2.8 billion", scene: `A city budget of $2,847,300,000 is reported as $2.8 billion. To the nearest hundred million the deciding digit is 4, so it rounds down.`, takeaway: "Readers remember a rounded figure, and honest rounding keeps it from overstating the truth." },
        { role: "Pharmacist", figure: "7.4 mL", scene: `A calculated dose comes to 7.36 mL, and the oral syringe is marked in 0.1 mL steps. The hundredths digit is 6, so the dose is drawn up as <b>7.4 mL</b>.`, takeaway: "A dose has to be rounded to an amount that can actually be measured." },
        { role: "Software engineer", figure: "$2.34 or $2.35", scene: `A payment of $2.345 must be rounded to cents. Round half up gives $2.35. Round half to even gives $2.34, because 4 is even.`, takeaway: "Half to even sends ties up and down equally often, so totals do not drift upward over millions of payments." }
      ]
    },
    build: {
      lede: `To round, find the rounding place, look at the one digit to its right, and go up or down based on that digit alone.`,
      task: { text: "Round to the closer landmark.", sub: `The same five steps work for any whole number, from a $347 fundraiser to a crowd of 4,372. Try each one in the model above as you go.`,
        figure: { sym: `round(<i>x</i>)`, value: "350", cap: "in the model", echo: "rounded" },
        jump: [{ label: "The method", to: "b-method" }, { label: "Everyday tasks", to: "b-tasks" }] },
      keysTitle: "What the model shows",
      intro: `<p>The model above puts <span class="c1">the number</span> on a number line. The <span class="c2">lower landmark</span> and the <span class="c3">upper landmark</span> are the round numbers on either side. The dashed <span class="c4">halfway mark</span> sits between them, and the arc shows which landmark wins. The panel names the deciding digit.</p>`,
      keyTry: [{ label: "Set the number to 518", lab: "x:518" }, { label: "Round 412 to the hundred", lab: "x:412,round:1" }, { label: "Round 486 to the hundred", lab: "x:486,round:1" }, { label: "Put 450 on halfway", lab: "x:450,round:1" }],
      objects: ["dollar", "dollars", "mile", "miles", "hour", "hours", "ticket", "tickets", "price", "prices", "item", "items", "fundraiser", "crowd"],
      goalsIntro: `Three of the steps have a move for you to make in the model. Make the move, then press <b>Check my move</b>. A move also ticks itself off as soon as the model shows it.`,
      stepWhy: [
        `Rounding to the nearest hundred means choosing between two multiples of 100. The underlined digit tells you which two hundreds the number sits between.`,
        `The digit right after the rounding place shows how far along the gap the number is. The digits after it are too small to carry it past the halfway mark, so they never change the decision.`,
        `A deciding digit of 0 to 4 means the number is short of halfway, so the lower landmark is closer. The lower landmark already has your underlined digit.`,
        `A deciding digit of 5 to 9 means the number is at or past halfway, so the upper landmark is the answer. It is one more unit in the rounding place, and adding 1 to a 9 carries exactly as in addition.`,
        `Every landmark is a multiple of the rounding unit, so all places to its right are zero. The zeros also hold the remaining digits in their correct places.`
      ],
      stepTry: [{ label: "Round 734 to the hundred", lab: "x:734,round:1" }, null, null, null, { label: "Round 873 to the hundred", lab: "x:873,round:1" }],
      stepGoal: [null,
        { key: "x", eq: 550, text: `Round to the nearest hundred. Find the smallest whole number that rounds up to 600.`, after: `550. Its tens digit is 5, the first deciding digit that rounds up. It sits exactly on the halfway mark.`, notYet: `Not yet. Look for the number whose tens digit is 5, right on the halfway mark between 500 and 600.` },
        { key: "x", eq: 649, text: `Now find the largest whole number that still rounds down to 600.`, after: `649. Its tens digit is 4, so it stays at 600. One more, 650, rounds up to 700.`, notYet: `Not yet. The tens digit must be 4 or less. Look in the 640s.` },
        { key: "x", eq: 395, text: `Switch to the nearest ten. Find the smallest whole number that rounds up to 400.`, after: `395. Its ones digit is 5, so the tens digit 9 goes up. 9 + 1 = 10: write 0 and carry 1 to the hundreds.`, notYet: `Not yet. The ones digit must be 5 or more, and the number must be in the 390s.` },
        null],
      matters: { title: "Why a Method Beats Eyeballing", text: `<p>Eyeballing works when a number sits far from halfway. Near the middle, it lets you down.</p><ul class="why-chips"><li><b>Numbers near halfway</b></li><li><b>A 9 that carries</b></li><li><b>Long numbers</b></li></ul><p>The method reads <b>one digit</b> and makes <b>one decision</b>. It gives the same answer every time, for anyone.</p>` },
      bridge: `<p>The fundraiser walk used the whole routine: round each amount once, add the round numbers, then compare with the exact total. Here is where the same moves show up.</p>`,
      tasksTitle: "Everyday tasks: solve them",
      tasks: [
        { task: "Keeping a running grocery total", check: { q: `Your cart has items at $6.79, $3.25 and $11.50. Round each price to the nearest dollar and add. About how much is the cart?`, parts: [{ label: "about $", ans: 22 }], hint: `Look at the cents. 79 is past halfway, 25 is short of it, and 50 is exactly halfway.` }, figure: "about $22",
          demo: { kind: "bar", parts: [7, 3, 12], labels: ["$6.79 → $7", "$3.25 → $3", "$11.50 → $12"], unit: "dollar", alt: "Three bars of 7, 3 and 12 dollars join under a brace that totals 22 dollars." },
          lines: [{ math: `$6.79 → $7`, note: "79 cents is past halfway, so round up." }, { math: `$3.25 → $3`, note: "25 cents is short of halfway, so round down." }, { math: `$11.50 → $12`, note: "50 cents is exactly halfway. Halfway rounds up." }, { math: `7 + 3 + 12 = 22`, note: "About $22. The exact total is $21.54." }],
          predict: [null, null, { ask: `$11.50 sits exactly halfway between $11 and $12. Which way does it go?`, choices: [{ t: "Up, to $12", ok: true }, { t: "Down, to $11", why: "Under the usual rule halfway goes up, the same as 350 in the walk." }], hint: `Think of 350 between 300 and 400.` }, null],
          link: `Each price is rounded once, from its own exact amount, the way each fundraiser was rounded on the Concept tab.` },
        { task: "Checking a calculator answer", check: { q: `A calculator says 296 + 418 = 1,014. Round each number to the nearest hundred. What should the answer be close to?`, parts: [{ label: "about", ans: 700 }], hint: `296 has tens digit 9. 418 has tens digit 1.` }, figure: "about 700",
          demo: { kind: "bar", parts: [300, 400], labels: ["296 → 300", "418 → 400"], alt: "Two bars of 300 and 400 join under a brace that totals 700." },
          lines: [{ math: `296 → 300`, note: "Tens digit 9: round up." }, { math: `418 → 400`, note: "Tens digit 1: round down." }, { math: `300 + 400 = 700`, note: "The answer should be near 700." }, { math: `296 + 418 = 714`, note: "1,014 is far off, so a key was pressed wrong. The real sum, 714, is close to 700." }],
          predict: [null, { ask: `Round 418 to the nearest hundred.`, parts: [{ label: "418 rounds to", ans: 400 }], hint: `The tens digit is 1.` }, null, null],
          try: { label: "Round 296 to the hundred", lab: "x:296,round:1" },
          link: `It is the same check as the fundraisers: an estimate of $1,000 made $1,027 look right.` },
        { task: "Budgeting with prices like $19.99", check: { q: `Four concert tickets cost $19.99 each. Round the price to the nearest dollar. About how much do the four tickets cost?`, parts: [{ label: "about $", ans: 80 }], hint: `$19.99 rounds to $20. Then take 4 of them.` }, figure: "about $80",
          demo: { kind: "bar", parts: [20, 20, 20, 20], labels: ["ticket 1", "ticket 2", "ticket 3", "ticket 4"], unit: "dollar", alt: "Four bars of 20 dollars each join under a brace that totals 80 dollars." },
          lines: [{ math: `$19.99 → $20`, note: "99 cents is past halfway. The 9 dollars goes up to 10, so carry: $20." }, { math: `4 × 20 = 80`, note: "About $80." }, { math: `4 × 19.99 = 79.96`, note: "The exact cost is $79.96, 4 cents less." }],
          predict: [null, { ask: `What is 4 × 20?`, parts: [{ label: "about $", ans: 80 }], hint: `Four twenties.` }, null],
          link: `Step 4 at work: a 9 that goes up carries 1 into the next place.` },
        { task: "Estimating travel time", check: { q: `A drive is 287 miles, and you average about 60 miles per hour. Round the distance to the nearest hundred miles. About how many hours is the drive?`, parts: [{ label: "hours", ans: 5 }], hint: `287 rounds to 300. How many 60s make 300?` }, figure: "about 5 hours",
          demo: { kind: "line", from: 0, to: 300, start: 0, jumps: [60, 60, 60, 60, 60], unit: "mile", alt: "A number line from 0 to 300 miles. Five hops of 60 miles each land on 300." },
          lines: [{ math: `287 → 300`, note: "Tens digit 8: round up." }, { math: `300 ÷ 60 = 5`, note: "Five hours of 60 miles each." }, { math: `287 ÷ 60 ≈ 4.8`, note: "The exact time is a little under 5 hours." }],
          predict: [null, { ask: `What is 300 ÷ 60?`, parts: [{ label: "hours", ans: 5 }], hint: `How many 60s make 300?` }, null],
          try: { label: "Round 287 to the hundred", lab: "x:287,round:1" },
          link: `Rounding the distance up gives a slightly long estimate, which is a safe plan for when you will arrive.` }
      ]
    },
    formal: {
      question: { text: "What does “round to the nearest hundred” mean, exactly?", sub: `You can round and estimate. Here are the words a textbook uses for the same ideas, and how to write a rounding problem out in full.`,
        figure: { sym: `round(<i>x</i>)`, value: "350", cap: "the rounded value", echo: "rounded" },
        jump: [{ label: "Vocabulary", to: "f-vocab" }, { label: "Where it goes wrong", to: "f-mist" }, { label: "Writing it out", to: "f-setup" }, { label: "Practice", to: "f-prac" }] },
      vocabTitle: "From your words to the textbook's",
      vocabIntro: `<p>Each card is an idea you already used in the Concept and Intermediate tabs, with its proper name and its exact meaning.</p>`,
      vocab: [
        { c: "c1", sym: `<i>u</i>`, term: "Rounding unit", def: `The power of ten, such as 10 or 100, whose multiples are the allowed results. Rounding to the nearest hundred means <span class="m"><i>u</i> = 100</span>.`, was: "the place you round to" },
        { c: "c2", sym: `<i>L</i>, <i>U</i>`, term: "Bracketing multiples", def: `<span class="m"><i>L</i> = ⌊<i>x</i>/<i>u</i>⌋ · <i>u</i></span>, the greatest multiple of <i>u</i> not exceeding <i>x</i>, and <span class="m"><i>U</i> = <i>L</i> + <i>u</i></span>.`, was: "the two landmarks" },
        { c: "c4", sym: `<i>L</i> + <i>u</i>/2`, term: "Midpoint", def: `The value equidistant from <i>L</i> and <i>U</i>. Values below it are nearer <i>L</i>, values above it are nearer <i>U</i>, and the midpoint itself is a tie.`, was: "the halfway mark" },
        { c: "c1", sym: `<i>d</i>`, term: "Test digit", def: `The digit one place to the right of the rounding place, <span class="m"><i>d</i> = ⌊<i>x</i> / (<i>u</i>/10)⌋ mod 10</span>. For whole <i>x</i>, <span class="m"><i>x</i> ≥ <i>L</i> + <i>u</i>/2</span> exactly when <span class="m"><i>d</i> ≥ 5</span>.`, was: "the deciding digit" },
        { c: "c3", sym: `round(<i>x</i>)`, term: "Round half up", def: `The rule round(<i>x</i>) = <i>L</i> if <span class="m"><i>x</i> &lt; <i>L</i> + <i>u</i>/2</span>, and <i>U</i> otherwise. Ties go to the larger multiple.`, was: "halfway goes up" },
        { c: "c3", sym: `half to even`, term: "Round half to even", def: `Non-ties go to the nearer multiple; a tie goes to whichever of <i>L</i>, <i>U</i> has an even digit in the rounding place. It is the IEEE 754 default.`, was: "banker's rounding" },
        { c: "c1", sym: `|round(<i>x</i>) − <i>x</i>|`, term: "Rounding error", def: `The absolute difference between the rounded and exact values. Under either rule it is at most <span class="m"><i>u</i>/2</span>.`, was: "how far the rounded value is from x" },
        { c: "c1", sym: `<i>E</i> ≈ <i>S</i>`, term: "Estimate", def: `A value computed from rounded inputs. For a sum of <i>n</i> terms each rounded to <i>u</i>, <span class="m">|<i>E</i> − <i>S</i>| ≤ <i>n</i> · <i>u</i>/2</span>.`, was: "add the round numbers" }
      ],
      matters: { title: "Why the exact words matter", text: `<p>“Round” and “truncate” both shorten a number, and <b>they can give different answers</b>. Rounding picks the nearer multiple. Truncating always takes the lower one.</p><ul class="why-chips"><li>382 rounded to the hundred: <b>400</b></li><li>382 truncated to the hundred: <b>300</b></li><li>2,450 by the tie rule: <b>2,500</b> or <b>2,400</b></li></ul><p>The Vancouver index lost about half its value to truncation. A precise word tells the reader <b>which rule</b> to apply.</p>` },
      mistakesTitle: "Where formal answers go wrong",
      mistakesLead: `Most wrong answers read the wrong digit, round more than once, or forget to carry when a 9 goes up.`,
      setupIntro: `<p>The fundraisers from the Concept tab, written the way a textbook would.</p>`,
      setup: { title: "Writing a rounding and estimation problem", items: [
        { say: `<b>Name the quantities and the unit.</b> Give each amount a letter and fix the rounding unit <i>u</i>.`, math: `<span class="m"><i>x</i><sub>1</sub> = 347, &nbsp;<i>x</i><sub>2</sub> = 218, &nbsp;<i>x</i><sub>3</sub> = 462</span> dollars, &nbsp;<span class="m"><i>u</i> = 100</span>` },
        { say: `<b>Find the landmarks.</b> The lower landmark is the largest multiple of <i>u</i> not above <i>x</i>; the halfway mark is <i>u</i>/2 above it.`, math: `<span class="m"><span class="c2"><i>L</i></span> = 300, &nbsp;<span class="c3"><i>U</i></span> = 400, &nbsp;<span class="c4"><i>L</i> + <i>u</i>/2</span> = 350</span> &nbsp;<span class="dim">(for 347)</span>` },
        { say: `<b>Apply the rule once, to the exact value.</b> At or past the halfway mark, take <i>U</i>; before it, take <i>L</i>.`, math: `<span class="m">347 &lt; 350 ⇒ round(347) = 300; &nbsp;round(218) = 200; &nbsp;round(462) = 500</span>` },
        { say: `<b>Bound the error.</b> Each rounded value is within <i>u</i>/2 of the true one, so an estimate of a sum of <i>n</i> terms is within <i>n</i> · <i>u</i>/2 of the exact sum.`, math: `<span class="m">|<i>E</i> − <i>S</i>| ≤ 3 · 50 = 150</span>` },
        { say: `<b>Compute, compare, answer.</b> State both values in a sentence with units.`, math: `<span class="m"><i>E</i> = 300 + 200 + 500 = 1,000; &nbsp;<i>S</i> = 1,027; &nbsp;|<i>E</i> − <i>S</i>| = 27 ≤ 150</span> &nbsp;→ The fundraisers raised $1,027, about $1,000.` }
      ] },
      practiceTip: `Type your answer and press Check. Work it the formal way: name the unit, find <i>L</i>, <i>U</i> and the midpoint, then apply the rule. Stuck? Each one has a hint.`,
      practiceDone: "All 5 solved. You can round and estimate the formal way.",
      checks: [
        { hint: `Here <span class="m"><i>u</i> = 10</span>, so the ones digit is the test digit.`, parts: [{ label: "rounded", ans: 70 }] },
        { hint: `Here <span class="m"><i>u</i> = 100</span>, so the tens digit decides.`, parts: [{ label: "rounded", ans: 4400 }] },
        { hint: `2,450 is exactly halfway between 2,400 and 2,500. Half to even picks the multiple whose hundreds digit is even.`, parts: [{ label: "half up", ans: 2500 }, { label: "half to even", ans: 2400 }] },
        { hint: `Round each amount once: 612 → 600, 287 → 300, 405 → 400. Then add the exact amounts too.`, parts: [{ label: "estimate", ans: 1300 }, { label: "exact", ans: 1304 }] },
        { hint: `<span class="m"><i>E</i> = round(187) + round(242) + round(316)</span>. Subtract <i>E</i> from the exact total.`, parts: [{ label: "E (miles)", ans: 700 }, { label: "miles low", ans: 45 }] }
      ]
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
    { wrong: `Rounding in steps: 347 → 350 → 400.`, fix: `Round once, from the original number. 347 to the nearest hundred looks at the tens digit 4, so it rounds to <span class="m">300</span>.` },
    { wrong: `Rounding 4,351 to the nearest hundred by looking at the ones digit and getting 4,300.`, fix: `Look only at the digit right after the hundreds place, the tens digit 5. It is 5 or more, so round up: <span class="m">4,400</span>.` },
    { wrong: `Rounding 2,961 to the nearest hundred and writing <span class="m">2,1000</span>.`, fix: `The hundreds digit 9 becomes 10, so write 0 there and carry 1 to the thousands: <span class="m">3,000</span>.` },
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
