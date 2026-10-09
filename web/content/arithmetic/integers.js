window.ARITH = window.ARITH || {};

ARITH["integers"] = {
  title: "Integers & Negative Numbers",
  short: "Numbers below zero and how to compute with them",
  grade: "Grades 6–7",
  hours: 8,
  voice: "plain",
  eyebrow: "Number systems · the integers",
  hero: `<span class="m"><span class="c2"><i>a</i></span> − <span class="c3"><i>b</i></span> = <span class="c2"><i>a</i></span> + (−<span class="c3"><i>b</i></span>)</span>`,
  lede: `Every whole number has a mirror image on the other side of zero. Subtracting a number is the same as adding its opposite.`,
  plain: `<p>A bank account holds $40 and you pay a $65 bill. The balance is now <span class="m">40 − 65 = −25</span>. You are $25 overdrawn. Numbers below zero are <b>negative numbers</b>. Together with zero and the counting numbers they make the <b>integers</b>: …, −3, −2, −1, 0, 1, 2, 3, ….</p>
<p>Each integer has an <b>opposite</b> the same distance from zero on the other side. The opposite of 25 is −25, and a number plus its opposite is 0. That distance from zero is the <b>absolute value</b>, so <span class="m">|−25| = 25</span>. On a number line, adding a positive number moves right and adding a negative number moves left. Subtracting reverses the direction, so subtracting −4 is the same as adding 4.</p>
<p>For multiplying and dividing, compare the signs. Two numbers with the same sign give a positive answer. Two with different signs give a negative one. Losing $3 a day for 4 days is <span class="m">4 × (−3) = −12</span>, a $12 drop.</p>`,
  formal: `<p>The set of <b>integers</b> is <span class="m">ℤ = {…, −3, −2, −1, 0, 1, 2, 3, …}</span>. Every <span class="m"><i>a</i> ∈ ℤ</span> has a unique <b>additive inverse</b> <span class="m">−<i>a</i></span> with <span class="m"><i>a</i> + (−<i>a</i>) = 0</span>. Subtraction is defined as addition of the inverse, and the <b>absolute value</b> <span class="m">|<i>a</i>|</span> is the distance from <i>a</i> to 0.</p>
<div class="display"><span class="m"><span class="c2"><i>a</i></span> − <span class="c3"><i>b</i></span> = <span class="c2"><i>a</i></span> + (−<span class="c3"><i>b</i></span>)</span><br><span class="m">(−<i>a</i>)<i>b</i> = <i>a</i>(−<i>b</i>) = −(<i>ab</i>)</span><br><span class="m">(−<i>a</i>)(−<i>b</i>) = <i>ab</i></span></div>
<p>ℤ is closed under addition, subtraction and multiplication. It is not closed under division: <span class="m">1 ÷ 2 ∉ ℤ</span>. The order on ℤ satisfies: if <span class="m"><i>a</i> &lt; <i>b</i></span> then <span class="m">−<i>a</i> &gt; −<i>b</i></span>.</p>`,
  legend: [
    { c: "c2", sym: `<i>a</i>`, name: "Starting value", desc: "The integer you begin with. When you add or subtract, it is the point on the number line where the hops start." },
    { c: "c3", sym: `<i>b</i>`, name: "Change", desc: "The integer being added, subtracted or multiplied by. Its sign and the operation together decide which way you hop." },
    { c: "c1", sym: `<i>a</i> ± <i>b</i>`, name: "Result", desc: "Where you land after the hops. It can be positive, negative or zero." },
    { c: "c4", sym: `|<i>a</i>|`, name: "Absolute value", desc: "The distance from a number to zero, which is never negative. |−7| = 7." }
  ],
  steps: { title: "How to add and subtract integers", items: [
    `Rewrite every subtraction as adding the opposite: <span class="m">6 − (−2)</span> becomes <span class="m">6 + 2</span>.`,
    `If the two numbers have the same sign, add their absolute values and keep that sign.`,
    `If the signs differ, subtract the smaller absolute value from the larger one.`,
    `Give the result the sign of the number with the larger absolute value.`,
    `For multiplication or division, work with absolute values, then make the answer positive if the signs match and negative if they differ.`
  ] },
  example: {
    prompt: `At dawn the temperature in a mountain town is <span class="m">−6</span> °C. By noon it has risen 9 degrees. By midnight it has dropped 7 degrees from the noon reading. What is the midnight temperature, and how much warmer was noon than dawn?`,
    lines: [
      { math: `<span class="m"><span class="c2">−6</span> + <span class="c3">9</span> = <span class="c1">3</span></span>`, note: "A rise is adding a positive number. Signs differ, so 9 − 6 = 3, and 9 is larger, so noon is 3 °C." },
      { math: `<span class="m"><span class="c2">3</span> − <span class="c3">7</span> = 3 + (−7)</span>`, note: "A drop is subtracting. Rewrite it as adding the opposite." },
      { math: `<span class="m">3 + (−7) = <span class="c1">−4</span></span>`, note: "Signs differ: 7 − 3 = 4, and −7 has the larger absolute value, so the result is negative." },
      { math: `<span class="m">3 − (−6) = 3 + 6 = 9</span>`, note: "Noon minus dawn. Subtracting −6 adds 6. Writing 3 − 6 = −3 drops a sign and would say noon was colder." }
    ],
    answer: `The midnight temperature is <span class="m">−4</span> °C, and noon was 9 degrees warmer than dawn.`
  },
  why: `<p>Negative numbers describe anything with two directions: money in and out, above and below freezing, height above and depth below sea level, a gain or a loss. Without them a subtraction like <span class="m">3 − 10</span> has no answer, and a bank statement could not show how much you owe.</p>
<p>Sign errors are costly. Reading −15 as 15 on a ledger makes a loss look like a profit. A fall from 4 °C to −9 °C is 13 degrees, and calling it 9 understates the drop by 4 degrees. Confident sign rules prevent both.</p>
<p>Algebra depends on integers completely. Solving <span class="m"><i>x</i> + 10 = 3</span>, plotting points on coordinate axes and working with slopes all use sign rules on every line. The rationals and the reals, the number systems that come next, are built on top of the integers.</p>`,
  careers: [
    { role: "Accountant", use: "Records losses and refunds as negative amounts and nets them against gains to report a period's profit or loss." },
    { role: "Meteorologist", use: "Computes temperature changes across zero, such as a fall from 4 °C to −9 °C being a change of −13 degrees." },
    { role: "Scuba instructor", use: "Tracks depth as a negative elevation relative to the surface and plans ascent rates between depths." },
    { role: "Electrician", use: "Works with positive and negative terminals and voltages whose signs set the direction of current in DC circuits." },
    { role: "Financial analyst", use: "Reports negative returns and compares them with gains to measure a portfolio's net performance." },
    { role: "Pilot", use: "Reads vertical speed as positive for climbing and negative for descending, in feet per minute." }
  ],
  life: [
    "Reading a bank balance that has gone below zero",
    "Working out how much colder it got overnight",
    "Tracking a golf score over and under par",
    "Measuring heights above and below the water line",
    "Measuring gains and losses on a budget month to month"
  ],
  fields: [
    { name: "Physics", use: "Signed quantities like velocity, charge and displacement point in one of two directions along an axis." },
    { name: "Finance", use: "Cash flows in and out are positive and negative values in every ledger and model." },
    { name: "Chemistry", use: "Ion charges such as −2 for oxide and +3 for aluminium must sum to zero in a neutral compound." },
    { name: "Computer science", use: "Signed integers are stored in two's complement form in every modern processor." }
  ],
  layers: {
    nudge: "Not yet. Check each minus sign: is it taking away, or a negative number?",
    concept: {
      heading: "What are integers and negative numbers?",
      lede: `Integers answer a question counting numbers cannot: what lies below zero? They describe debts, cold, depth and loss, and they give every subtraction an answer.`,
      question: { text: "What lies below zero?", sub: `Many amounts can go up and down past zero. Negative numbers keep track of them. Watch the hop in the model above, then try each idea yourself.`,
        figure: { sym: `<i>a</i> + <i>b</i>`, value: "−4", cap: "where the hop lands", echo: "result" } },
      ideasTitle: "Four ideas, all in the model",
      objects: ["degree", "degrees", "step", "steps", "dollar", "dollars", "debt", "debts", "fortune", "fortunes", "rod", "rods", "tablet", "metre", "metres", "volt", "volts", "feet", "foot"],
      walk: { title: "Track it together: a winter day",
        lead: `One situation, step by step. Try each question before you show the next line.`,
        prompt: `A winter day in a mountain town. At dawn it is −6 °C. By noon it is 9 degrees warmer. By midnight it is 7 degrees colder than at noon. What is the temperature at midnight?`,
        demo: { kind: "line", from: -8, to: 6, start: -6, jumps: [9, -7], unit: "degree", alt: "A number line from −8 to 6. A dot starts at −6, hops 9 to the right to land on 3, then hops 7 to the left to land on −4." },
        lines: [
          { math: `−6`, note: `Dawn is 6 degrees below zero. On the line, that is 6 steps left of 0.`, frame: 0 },
          { math: `−6 + 9 = 3`, note: `Warmer means add, so hop 9 to the right. 6 steps reach 0, and 3 more land on 3. Noon is 3 °C.`, frame: 1 },
          { math: `3 − 7 = 3 + (−7)`, note: `Colder means take away 7. Taking away 7 is the same as adding −7, a hop to the left.`, frame: 1 },
          { math: `3 + (−7) = <span class="c1">−4</span>`, note: `3 steps reach 0. The other 4 go below zero. Midnight is −4 °C. The model above starts on this same sum.`, frame: 3 },
          { math: `3 − (−6) → 3 − 6 = −3`, note: `How much warmer was noon than dawn? A quick try drops one minus sign and gets −3. That says noon was colder. It was not.`, frame: 1 },
          { math: `3 − (−6) = 3 + 6 = 9`, note: `Taking away a negative adds its opposite. Noon was 9 degrees warmer, the same 9 as the rise.`, frame: 1 }
        ],
        predict: [null,
          { ask: `It warms up 9 degrees from −6. Where does it land?`, parts: [{ label: "noon (°C)", ans: 3 }], hint: `6 of the 9 steps take you up to 0. How many steps are left?` },
          { ask: `By midnight it is 7 degrees colder. Which move is the same as 3 − 7?`, choices: [
            { t: "3 + (−7), a hop 7 to the left", ok: true },
            { t: "7 − 3", why: "That swaps the order. 7 − 3 is 4, above zero, but the day got colder than 3 °C." },
            { t: "3 + 7", why: "Adding 7 hops to the right. Midnight would be warmer than noon." }
          ], hint: `Colder moves left on the line.` },
          { ask: `Hop 7 to the left from 3. Where do you land?`, parts: [{ label: "midnight (°C)", ans: -4 }], hint: `3 steps take you to 0. The other 4 go below zero, so type a minus sign: -4.` },
          { ask: `How much warmer was noon than dawn? A friend writes 3 − (−6) = 3 − 6 = −3. What went wrong?`, choices: [
            { t: "Taking away −6 was treated as taking away 6", ok: true },
            { t: "It should be −6 − 3", why: "−6 − 3 is −9. That compares the other way round, dawn minus noon, so the sign comes out backward." },
            { t: "Nothing. Noon was 3 degrees colder", why: "Noon was 3 °C and dawn was −6 °C. Noon was warmer, so the answer must be positive." }
          ], hint: `Look at the two minus signs in 3 − (−6). The friend kept only one.` },
          { ask: `Rewrite 3 − (−6) as an addition and work it out. How many degrees warmer was noon?`, parts: [{ label: "degrees warmer", ans: 9 }], hint: `Taking away −6 is the same as adding 6.` }],
        answer: `At midnight it is <span class="m c1">−4</span> °C, and noon was 9 degrees warmer than dawn.` },
      ideas: [
        { c: "c2", title: "Numbers keep going below zero", term: "negative numbers", text: `Zero is not the bottom. Below it come −1, −2, −3 and on. A reading of −6 °C is 6 degrees below zero.`,
          demo: { kind: "line", from: -8, to: 8, points: [{ v: 0, c: "c1", label: "0" }, { v: -6, c: "c2", label: "−6" }], alt: "A number line from −8 to 8. Zero is marked, then −6 appears six places to its left." }, try: { label: "Start at −6", lab: "a:-6,op:0,b:0" } },
        { c: "c4", title: "Same distance, other side", term: "absolute value", text: `−6 is 6 steps from zero. So is 6. That distance is the absolute value, |−6| = 6. It is never negative.`,
          demo: { kind: "line", from: -8, to: 8, points: [{ v: -6, c: "c2", label: "−6" }, { v: 0, c: "c1", label: "0" }], show: "dist", cap: "|−6|", alt: "Points at −6 and 0 on a number line, joined by a bracket that shows a distance of 6." }, try: { label: "Add −6 and 6", lab: "a:-6,op:0,b:6" } },
        { c: "c3", title: "Taking away a minus moves right", term: "adding the opposite", text: `Adding a negative moves left. Taking away a negative turns you around, so you move right. 3 − (−6) is 3 + 6.`,
          demo: { kind: "line", from: -2, to: 10, start: 3, jumps: [6], unit: "step", alt: "A dot starts at 3 and hops 6 to the right to land on 9. Taking away −6 moves right." }, try: { label: "Show 3 − (−6)", lab: "a:3,op:1,b:-6" } },
        { c: "c1", title: "Two negatives multiply to a plus", term: "sign rules", text: `Times a negative turns you around. Turn around twice and you face forward again. So (−2) × (−4) = 8.`,
          demo: { kind: "line", from: -2, to: 10, start: 0, jumps: [2, 2, 2, 2], unit: "step", alt: "Four hops of 2 from zero land on 8, the way the model draws (−2) × (−4)." }, try: { label: "Show (−2) × (−4)", lab: "a:-2,op:2,b:-4" } }
      ],
      timelineTitle: "From coloured rods to a walk along a line",
      timelineLead: `People tracked debts with negative numbers long before everyone agreed they were numbers. Each step ties to something you can do in the model.`,
      timeline: [
        { when: "Han period, 202 BCE to 220 CE", what: `<i>The Nine Chapters on the Mathematical Art</i> uses counting rods in two colours: red for positive amounts, black for negative. It is the first known use of negative numbers.` },
        { when: "3rd century CE", what: `In China, Liu Hui writes rules for adding and subtracting the red and black rods. In Greece, Diophantus calls an equation with a negative answer "absurd".` },
        { when: "628 CE", what: `Brahmagupta, in India, writes rules for "fortunes" and "debts". A debt taken away from zero is a fortune: the subtract-a-negative hop in the model. Two debts multiplied give a fortune.` },
        { when: "1202", what: `Fibonacci's <i>Liber Abaci</i> accepts a negative answer in a money problem and reads it as a debit.` },
        { when: "1685", what: `John Wallis's <i>Treatise of Algebra</i> describes adding and subtracting as a person walking forward and backward along a line. The hops in the model are the same walk.` }
      ],
      history: `<p><b>The problem.</b> Anyone who lends, borrows or trades has to track amounts owed as well as amounts held. Counting numbers cannot do it. There is no counting number for "3 less than nothing", and an equation like <span class="m"><i>x</i> + 10 = 3</span> has no answer among them. Many mathematicians rejected such answers for centuries. In the 3rd century CE, Diophantus called an equation with a negative solution "absurd".</p>
<p><b>The solution.</b> The earliest known use of negative numbers is in the Chinese text <i>The Nine Chapters on the Mathematical Art</i>, from the Han period (202 BCE to 220 CE). There red counting rods stood for positive amounts and black rods for negative ones, and in the 3rd century Liu Hui set out rules for adding and subtracting them. In India negative numbers stood for debts. In 628 CE Brahmagupta's <i>Brāhmasphuṭasiddhānta</i> gave rules for computing with "fortunes" and "debts": a debt taken away from zero is a fortune, and the product of two debts is a fortune. In Europe, Fibonacci accepted negative answers in money problems as debits in 1202.</p>
<p><b>What it changed.</b> Treating a debt as a number meant it could be added, subtracted and compared like any other amount. That is how ledgers, bank balances and profit-and-loss statements work. In 1685 John Wallis described adding and subtracting as walking forward and backward along a line, the picture the model uses. Accounting still uses colour for sign, with the Chinese convention reversed: red figures mark negative values.</p>`,
      sources: [
        { title: "Negative number (Wikipedia)", url: "https://en.wikipedia.org/wiki/Negative_number" },
        { title: "Brahmagupta (MacTutor History of Mathematics, University of St Andrews)", url: "https://mathshistory.st-andrews.ac.uk/Biographies/Brahmagupta/" },
        { title: "Brahmagupta (Wikipedia)", url: "https://en.wikipedia.org/wiki/Brahmagupta" },
        { title: "Number line (Wikipedia)", url: "https://en.wikipedia.org/wiki/Number_line" }
      ],
      matters: { title: "Why negative numbers matter", text: `<p>Many amounts can go <b>both ways</b>, and a sign tells you which way.</p><ul class="why-chips"><li><b>Money</b> in and out</li><li><b>Temperature</b> above and below freezing</li><li><b>Height</b> above and below sea level</li></ul><p>Without negatives, a small number minus a bigger one <b>has no answer</b>, and a bank could not show what you owe. With them, gains and losses go into <b>one running total</b>.</p>` },
      stakes: { title: "Where signs go wrong", lead: `Most slips come from one minus sign dropped or misread.`, items: [
        { role: "Double minus", text: `4 − (−6) worked out as −2. Taking away a negative adds, so it is 10.` },
        { role: "Weather report", text: `A fall from 4 °C to −9 °C called 9 degrees. It is 13.` },
        { role: "Bank statement", text: `A balance of −$15 read as $15 in the bank. It means you owe $15.` },
        { role: "Spreadsheet", text: `(−3) × (−4) entered as −12. Two negatives multiply to 12.` }
      ], try: { label: "Show 4 − (−6)", lab: "a:4,op:1,b:-6" } },
      examplesTitle: "Where you will meet it",
      examples: [
        { role: "Accountant", figure: "$13,000 profit", scene: `A small business posts quarterly results of +$12,000, −$4,500, −$2,000 and +$7,500. Net for the year: <span class="m">12,000 − 4,500 − 2,000 + 7,500 = 13,000</span>, a $13,000 profit.`, takeaway: "Losses and gains only make sense together once each carries its sign." },
        { role: "Meteorologist", figure: "−13 degrees", scene: `The temperature falls from 4 °C to −9 °C overnight. Change: <span class="m">−9 − 4 = −13</span> degrees.`, takeaway: "Crossing zero is where people miscount. The signed change gets it right." },
        { role: "Scuba instructor", figure: "13 m up", scene: `A diver at −18 m rises to a safety stop at −5 m. Distance to rise: <span class="m">−5 − (−18) = −5 + 18 = 13</span> m.`, takeaway: "Subtracting a negative depth gives the distance to travel, which sets the ascent time." },
        { role: "Electrician", figure: "10 volts", try: { label: "Show 5 − (−5)", lab: "a:5,op:1,b:-5" }, scene: `A power supply has a +5 V rail and a −5 V rail. The voltage between them is <span class="m">5 − (−5) = 10</span> V.`, takeaway: "The difference between two signed values is what a meter reads." },
        { role: "Financial analyst", figure: "+$250", scene: `A $10,000 portfolio gains $800, loses $1,200, then gains $650: <span class="m">10,000 + 800 + (−1,200) + 650 = 10,250</span>, a net change of +$250.`, takeaway: "A signed running total shows the net result through the ups and downs." },
        { role: "Pilot", figure: "6,200 ft", scene: `At 11,000 ft the aircraft descends at −800 ft per minute for 6 minutes: <span class="m">6 × (−800) = −4,800</span> ft, leveling at <span class="m">11,000 − 4,800 = 6,200</span> ft.`, takeaway: "A negative rate times a time gives a signed change in altitude." }
      ]
    },
    build: {
      lede: `Turn every subtraction into adding the opposite, then use the sign rules: same signs add, different signs subtract, and the larger absolute value sets the sign.`,
      task: { text: "Find where the hops land.", sub: `The same five moves work for any pair of signed numbers, from a cold night to an overdrawn account. Try each one in the model above as you go.`,
        figure: { sym: `<i>a</i> ± <i>b</i>`, value: "−4", cap: "in the model", echo: "result" },
        jump: [{ label: "The method", to: "b-method" }, { label: "Everyday tasks", to: "b-tasks" }] },
      keysTitle: "What the model shows",
      intro: `<p>The model above is a number line. To add or subtract, the hops start at <span class="c2"><i>a</i></span>, move by <span class="c3"><i>b</i></span> (right for positive, left for negative) and land on the result <span class="c1"><i>a</i> ± <i>b</i></span>. The length of the move is the absolute value <span class="c4">|<i>b</i>|</span>. To multiply, the hops start at 0 and repeat.</p>`,
      keyTry: [{ label: "Start at −6 and add 9", lab: "a:-6,op:0,b:9" }, { label: "Make the change −7", lab: "a:3,op:0,b:-7" }, { label: "Replay the hops", lab: "replay" }, { label: "Add −9 and 9", lab: "a:-9,op:0,b:9" }],
      objects: ["degree", "degrees", "dollar", "dollars", "metre", "metres", "stroke", "strokes", "month", "months", "debt", "debts"],
      goalsIntro: `Three of the steps have a move for you to make in the model. Make the move, then press <b>Check my move</b>. A move also ticks itself off as soon as the model shows it.`,
      stepWhy: [
        `Subtracting <i>b</i> and adding −<i>b</i> land on the same point, so one set of addition rules covers both. It also stops a double minus from being misread.`,
        `Two moves in the same direction add their lengths. Debts of $3 and $5 make a debt of $8. The direction, and so the sign, stays the same.`,
        `Moves in opposite directions partly cancel. The shorter move undoes part of the longer one, so what is left is the difference of the lengths.`,
        `The longer move decides which side of zero you end on. In <span class="m">−6 + 9</span>, 9 is longer, so the result is positive.`,
        `Multiplying by a negative number turns you around. One turn gives a negative result. Two turns bring you back, so matching signs give a positive answer.`
      ],
      stepTry: [{ label: "Show 6 − (−2)", lab: "a:6,op:1,b:-2" }, null, { label: "Show −8 + 5", lab: "a:-8,op:0,b:5" }, null, null],
      stepGoal: [null,
        { key: "result", eq: -13, text: `Add two negatives: set <i>a</i> to −5, keep +, and set <i>b</i> to −8.`, after: `Both hops go left, so the lengths add, 5 + 8 = 13, and the sign stays negative: <span class="m">−5 + (−8) = −13</span>.`, notYet: `Not yet. Set <i>a</i> to −5 and <i>b</i> to −8, with + between them.` },
        null,
        { key: "result", eq: -5, text: `Set the model to <span class="m">4 + (−9)</span>. Before you look, decide which side of zero you will land on.`, after: `9 is longer than 4, so the answer takes the sign of −9: <span class="m">4 + (−9) = −5</span>.`, notYet: `Not yet. Set <i>a</i> to 4, choose +, and set <i>b</i> to −9.` },
        { key: "result", eq: 32, text: `Choose × and multiply two negatives: <span class="m">(−4) × (−8)</span>.`, after: `Two negatives, so the product is positive: <span class="m">(−4) × (−8) = 32</span>.`, notYet: `Not yet. Set <i>a</i> to −4, choose ×, and set <i>b</i> to −8.` }],
      matters: { title: "Why a Method Keeps Signs Straight", text: `<p>Most sign mistakes happen when there are <b>two minus signs</b> close together, or when the answer <b>crosses zero</b>.</p><ul class="why-chips"><li>A <b>double minus</b></li><li>A hop <b>past zero</b></li><li>A <b>product</b> of negatives</li></ul><p>A method turns each of these into <b>the same few moves</b>. Rewrite, compare lengths, pick the sign. You can check each line on its own.</p>` },
      bridge: `<p>The winter day used the whole method: a rise added, a drop rewritten as adding the opposite, and the longer hop deciding the sign. Any running balance works the same way.</p>`,
      tasksTitle: "Everyday tasks: solve them",
      tasks: [
        { task: "Reading a bank balance below zero", check: { q: `Your account holds $40. A $65 bill is paid from it. What is the balance now?`, parts: [{ label: "balance ($)", ans: -25 }], hint: `Write it as <span class="m">40 + (−65)</span>. The longer move, 65, is negative. Type a minus sign with the hyphen key.` }, figure: "−$25",
          demo: { kind: "line", from: -30, to: 50, start: 40, jumps: [-65], unit: "dollar", alt: "A dot starts at 40 on a number line and hops 65 to the left, past zero, to land on −25." },
          lines: [{ math: `40 − 65 = 40 + (−65)`, note: "Paying out is taking away. Rewrite it as adding −65." }, { math: `65 − 40 = 25`, note: "The signs differ, so subtract the lengths." }, { math: `40 + (−65) = −25`, note: "65 is longer and negative, so the balance is −25. You owe $25." }],
          predict: [null, { ask: `The signs differ. What is 65 − 40?`, parts: [{ label: "65 − 40", ans: 25 }], hint: `Count up from 40 to 65.` }, null],
          link: `Steps 1, 3 and 4 in order: the same moves that took noon to midnight in the Concept walk.` },
        { task: "Working out how much colder it got overnight", check: { q: `At 6 p.m. it is 4 °C. By 6 a.m. it is −9 °C. How many degrees did the temperature fall?`, parts: [{ label: "degrees", ans: 13 }], hint: `4 degrees down to 0, then 9 more below zero.` }, figure: "13 degrees",
          demo: { kind: "line", from: -10, to: 6, points: [{ v: 4, c: "c2", label: "6 p.m." }, { v: -9, c: "c1", label: "6 a.m.", below: true }], show: "dist", alt: "Two points on a number line, 4 and −9, joined by a bracket that shows a distance of 13." },
          lines: [{ math: `−9 − 4`, note: "The change is the later reading minus the earlier one." }, { math: `−9 + (−4) = −13`, note: "Rewrite and add. Both are negative, so the lengths add and the sign stays." }, { math: `|−13| = 13`, note: "The change is −13, a fall of 13 degrees: 4 above zero plus 9 below." }],
          predict: [null, { ask: `Both numbers are negative now. What is −9 + (−4)?`, parts: [{ label: "change (°C)", ans: -13 }], hint: `Same signs: add 9 and 4, and keep the minus.` }, null],
          link: `This is the weather slip from "Where signs go wrong": counting only the 9 degrees below zero. Take later minus earlier, as you did for noon and dawn in the Concept walk.` },
        { task: "Tracking a golf score against par", check: { q: `Your scores against par for three rounds are −2, +1 and −3. What is your total against par?`, parts: [{ label: "total", ans: -4 }], hint: `Add them in order: −2 + 1 first, then add −3.` }, figure: "4 under par",
          demo: { kind: "line", from: -6, to: 2, start: 0, jumps: [-2, 1, -3], unit: "stroke", alt: "A dot starts at 0, which is par. It hops 2 left, 1 right, then 3 left, and ends at −4." },
          lines: [{ math: `−2 + 1 = −1`, note: "Signs differ: 2 − 1 = 1, and −2 is longer, so −1." }, { math: `−1 + (−3) = −4`, note: "Same signs: add the lengths and keep the minus." }, { math: `−4`, note: "Four under par. In golf, below par is good." }],
          predict: [null, { ask: `Now add the third round. What is −1 + (−3)?`, parts: [{ label: "total", ans: -4 }], hint: `Both are negative, so add 1 and 3 and keep the minus.` }, null],
          link: `Mixed signs use steps 3 and 4. Same signs use step 2.` },
        { task: "Measuring heights above and below the water line", check: { q: `A dock is 3 m above the water. A diver waits 2 m below the surface. How far apart are they?`, parts: [{ label: "metres", ans: 5 }], hint: `Higher minus lower: <span class="m">3 − (−2)</span>.` }, figure: "5 m",
          demo: { kind: "line", from: -3, to: 4, points: [{ v: 3, c: "c2", label: "dock" }, { v: -2, c: "c1", label: "diver", below: true }], show: "dist", alt: "Points at 3 and −2 on a number line, joined by a bracket that shows a distance of 5." },
          lines: [{ math: `3 − (−2)`, note: "Distance is the higher height minus the lower one." }, { math: `3 + 2`, note: "Taking away −2 adds 2." }, { math: `= 5`, note: "They are 5 metres apart: 3 above the water and 2 below." }],
          predict: [null, { ask: `What is 3 − (−2) the same as?`, choices: [
            { t: "3 + 2", ok: true },
            { t: "3 − 2", why: "That drops a minus sign. It gives 1 metre, but the diver is below the water and the dock is above it." }
          ], hint: `Taking away a negative adds its opposite.` }, null],
          try: { label: "Show 3 − (−2)", lab: "a:3,op:1,b:-2" },
          link: `It is the subtract-a-negative move from the end of the Concept walk, where 3 − (−6) became 3 + 6.` },
        { task: "Netting gains and losses in a budget", check: { q: `Your budget nets −$120 in January, +$200 in February and −$95 in March. What is the total for the three months?`, parts: [{ label: "total ($)", ans: -15 }], hint: `Do two months at a time: −120 + 200 first.` }, figure: "−$15",
          demo: { kind: "line", from: -150, to: 100, start: 0, jumps: [-120, 200, -95], unit: "dollar", alt: "A dot starts at 0, hops 120 left, 200 right, then 95 left, and ends at −15." },
          lines: [{ math: `−120 + 200 = 80`, note: "Signs differ: 200 − 120 = 80, and 200 is longer." }, { math: `80 + (−95) = −15`, note: "Signs differ: 95 − 80 = 15, and −95 is longer." }, { math: `−15`, note: "Down $15 over three months, even with a good February." }],
          predict: [null, { ask: `What is 80 + (−95)?`, parts: [{ label: "total ($)", ans: -15 }], hint: `95 − 80 = 15. Which number is longer, 80 or −95?` }, null],
          link: `Each month is one hop, and steps 3 and 4 decide every sign.` }
      ]
    },
    formal: {
      question: { text: "How are the integers defined, and how do signs combine?", sub: `You can track a temperature across zero. Here are the words a textbook uses for the same ideas, and how to write an integer problem out in full.`,
        figure: { sym: `<i>a</i> ± <i>b</i>`, value: "−4", cap: "the result", echo: "result" },
        jump: [{ label: "Vocabulary", to: "f-vocab" }, { label: "Where it goes wrong", to: "f-mist" }, { label: "Writing it out", to: "f-setup" }, { label: "Practice", to: "f-prac" }] },
      vocabTitle: "From your words to the textbook's",
      vocabIntro: `<p>Each card is an idea you already used in the Concept and Intermediate tabs, with its proper name and its exact meaning.</p>`,
      vocab: [
        { c: "c1", sym: `ℤ`, term: "Integers", def: `The set <span class="m">{…, −2, −1, 0, 1, 2, …}</span>: the whole numbers together with their opposites.`, was: "numbers above and below zero" },
        { c: "c3", sym: `−<i>a</i>`, term: "Additive inverse (opposite)", def: `The unique integer <span class="m">−<i>a</i></span> with <span class="m"><i>a</i> + (−<i>a</i>) = 0</span>. On a number line it is the reflection of <i>a</i> across 0.`, was: "same distance, other side" },
        { c: "c4", sym: `|<i>a</i>|`, term: "Absolute value", def: `<span class="m">|<i>a</i>| = <i>a</i></span> if <span class="m"><i>a</i> ≥ 0</span> and <span class="m">|<i>a</i>| = −<i>a</i></span> if <span class="m"><i>a</i> &lt; 0</span>: the distance from <i>a</i> to 0, never negative.`, was: "the length of a hop" },
        { c: "c3", sym: `<i>a</i> − <i>b</i> = <i>a</i> + (−<i>b</i>)`, term: "Subtraction", def: `Defined as addition of the additive inverse. Because ℤ is closed under addition and inverses, every difference of integers is an integer.`, was: "taking away is adding the opposite" },
        { c: "c1", sym: `(−<i>a</i>)(−<i>b</i>) = <i>ab</i>`, term: "Sign rules for products", def: `<span class="m">(−<i>a</i>)<i>b</i> = −(<i>ab</i>)</span> and <span class="m">(−<i>a</i>)(−<i>b</i>) = <i>ab</i></span>. Both follow from the distributive property and <span class="m"><i>a</i> + (−<i>a</i>) = 0</span>.`, was: "two negatives multiply to a plus" },
        { c: "c2", sym: `<i>a</i> &lt; <i>b</i>`, term: "Order", def: `<span class="m"><i>a</i> &lt; <i>b</i></span> when <span class="m"><i>b</i> − <i>a</i></span> is positive. On a number line <i>a</i> lies to the left of <i>b</i>, so <span class="m">−9 &lt; −2</span>.`, was: "further left is smaller" }
      ],
      matters: { title: "Why the exact words matter", text: `<p>“Subtract 2 from −5” and “subtract −5 from 2” use the same two numbers. <b>The order of the words decides the sign.</b></p><ul class="why-chips"><li><span class="m">−5 − 2 = −7</span></li><li><span class="m">2 − (−5) = 7</span></li></ul><p>“Minus” names an operation and “negative” names a number. Reading <span class="m">−(−5)</span> as “the opposite of negative five” gives <b>5</b>.</p>` },
      mistakesTitle: "Where formal answers go wrong",
      mistakesLead: `Most wrong answers come from one dropped sign: a double minus read as a single minus, or the wrong number setting the sign.`,
      setupIntro: `<p>The winter day from the Concept tab, written the way a textbook would.</p>`,
      setup: { title: "Writing an integer problem", items: [
        { say: `<b>Name the quantities.</b> Give the start and each change a letter, with a sign for direction and units.`, math: `<span class="m"><span class="c2"><i>a</i></span> = −6</span> °C, &nbsp;rise <span class="m"><i>r</i> = 9</span>, &nbsp;drop <span class="m"><i>d</i> = 7</span>` },
        { say: `<b>Write the expression.</b> A rise is added and a drop is subtracted.`, math: `<span class="m"><i>T</i> = <span class="c2"><i>a</i></span> + <i>r</i> − <i>d</i> = −6 + 9 − 7</span>` },
        { say: `<b>Justify the rewrite.</b> Subtraction is addition of the additive inverse, so the whole expression becomes a sum.`, math: `<span class="m"><i>T</i> = −6 + 9 + (−7)</span>` },
        { say: `<b>Compute with the sign rules.</b> At each step the larger absolute value sets the sign.`, math: `<span class="m">−6 + 9 = 3</span> &nbsp;(|9| &gt; |−6|), &nbsp;<span class="m">3 + (−7) = <span class="c1">−4</span></span> &nbsp;(|−7| &gt; |3|)` },
        { say: `<b>Check by regrouping.</b> Addition is associative and commutative, so any grouping gives the same sum.`, math: `<span class="m">9 + (−6 + (−7)) = 9 + (−13) = −4</span>` },
        { say: `<b>Answer, with units.</b> The change from dawn to noon is the later reading minus the earlier one.`, math: `<span class="m">3 − (−6) = 3 + 6 = 9</span> &nbsp;→ Midnight is −4 °C, and noon was 9 °C warmer than dawn.` }
      ] },
      practiceTip: `Type your answer and press Check. Rewrite each subtraction as adding the opposite, then use the sign rules. For a negative answer, type the minus sign with the hyphen key. Stuck? Each one has a hint.`,
      practiceDone: "All 5 solved. You can compute with integers the formal way.",
      checks: [
        { hint: `The signs differ: subtract 9 − 5, then take the sign of the longer one.`, parts: [{ label: "balance ($)", ans: 4 }] },
        { hint: `Rewrite <span class="m">3 − 10</span> as <span class="m">3 + (−10)</span>.`, parts: [{ label: "degrees below zero", ans: 7 }] },
        { hint: `Taking away −14 is the same as adding 14.`, parts: [{ label: "metres", ans: 8 }] },
        { hint: `Work each product first: <span class="m">(−4)(−7)</span> and <span class="m">(−3)(5)</span>. Then subtract.`, parts: [{ label: "cell value", ans: 43 }] },
        { hint: `Undo the payment: add 65 to both sides.`, parts: [{ label: "x ($)", ans: 40 }] }
      ]
    }
  },
  prereqWhy: {
    "subtraction": "Integer arithmetic extends subtraction so that a smaller number minus a larger one has an answer.",
    "number-line": "Negative numbers live to the left of zero, and hops on the number line are the main picture for integer addition."
  },
  unlocksWhy: {
    "modular": "Remainders of negative numbers, such as −7 mod 12, need integer arithmetic to compute correctly.",
    "real-numbers": "The integers are one of the nested sets inside the real numbers, sitting between the whole numbers and the rationals."
  },
  beyond: [
    { field: "Algebra I", why: "Solving equations and simplifying expressions uses sign rules on every line." },
    { field: "Number theory", why: "Divisibility, primes and congruences are all studied on the full set of integers." },
    { field: "Abstract algebra", why: "ℤ under addition is the model example of a group, and ℤ is the model example of a ring." }
  ],
  mistakes: [
    { wrong: `<span class="m">4 − (−6) = −2</span>`, fix: `Subtracting a negative adds its opposite: <span class="m">4 + 6 = 10</span>.` },
    { wrong: `<span class="m">−3 − 5 = 2</span> or <span class="m">−2</span>`, fix: `Both numbers push left. <span class="m">−3 + (−5) = −8</span>.` },
    { wrong: `<span class="m">−9 &lt; −2</span> is false because 9 is bigger`, fix: `−9 is further left on the number line, so <span class="m">−9 &lt; −2</span> is true.` },
    { wrong: `<span class="m">(−3)(−4) = −12</span>`, fix: `Two negative factors give a positive product: <span class="m">(−3)(−4) = 12</span>.` },
    { wrong: `Reading a fall "to −9 °C" from 4 °C as a fall of 9 degrees.`, fix: `The change is the later reading minus the earlier one: <span class="m">−9 − 4 = −13</span>, a fall of 13 degrees.` }
  ],
  practice: [
    { ctx: "Banking", q: `Your account is $5 overdrawn and you deposit $9. Find the new balance, <span class="m">−5 + 9</span>.`, a: `<span class="m">4</span>, so <b>$4</b>. Signs differ: 9 − 5 = 4, and 9 is larger, so positive.` },
    { ctx: "Weather", q: `It is 3 °C and the temperature drops 10 degrees. Find <span class="m">3 − 10</span>. How many degrees below zero is that?`, a: `Rewrite as <span class="m">3 + (−10)</span>. 10 − 3 = 7, and −10 is larger in size, so the result is <span class="m">−7</span> °C: <b>7</b> degrees below zero.` },
    { ctx: "Diving", q: `A diver rises from 14 m below the surface to 6 m below. How far did she rise? Find <span class="m">−6 − (−14)</span>.`, a: `<span class="m">8</span>, so <b>8 m</b>. Rewrite as −6 + 14; 14 − 6 = 8, positive.` },
    { ctx: "Spreadsheets", q: `A spreadsheet cell computes <span class="m">(−4)(−7) − (−3)(5)</span>. What value should it show?`, a: `<span class="m">43</span>. (−4)(−7) = 28 and (−3)(5) = −15, so 28 − (−15) = 28 + 15 = <b>43</b>.` },
    { ctx: "Banking", q: `Write an equation with a letter for the unknown, then solve: after a $65 payment your balance is −$25. What was the balance <i>x</i> before the payment?`, a: `<span class="m"><i>x</i> − 65 = −25</span>, so <span class="m"><i>x</i> = −25 + 65 = 40</span>. The balance was <b>$40</b>.` }
  ],
  origin: `The Chinese text <i>The Nine Chapters on the Mathematical Art</i>, from the Han period (202 BCE to 220 CE), used red and black counting rods for positive and negative quantities. In 628 CE the Indian mathematician Brahmagupta wrote out rules for computing with "fortunes" and "debts", including that the product of two debts is a fortune.`
};
