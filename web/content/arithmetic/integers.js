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
  plain: `<p>A bank account holds $40 and you pay a $65 bill. The balance is now <span class="m">40 − 65 = −25</span>: you are $25 overdrawn. Numbers below zero are <b>negative numbers</b>. Together with zero and the counting numbers they make the <b>integers</b>: …, −3, −2, −1, 0, 1, 2, 3, ….</p>
<p>Each integer has an <b>opposite</b> the same distance from zero on the other side. The opposite of 25 is −25, and a number plus its opposite is 0. That distance from zero is the <b>absolute value</b>, so <span class="m">|−25| = 25</span>. On a number line, adding a positive number moves right and adding a negative number moves left. Subtracting reverses the direction, so subtracting −4 is the same as adding 4.</p>
<p>For multiplying and dividing, compare the signs. Two numbers with the same sign give a positive answer, and two with different signs give a negative one. Losing $3 a day for 4 days is <span class="m">4 × (−3) = −12</span>, a $12 drop.</p>`,
  formal: `<p>The set of <b>integers</b> is <span class="m">ℤ = {…, −3, −2, −1, 0, 1, 2, 3, …}</span>. Every <span class="m"><i>a</i> ∈ ℤ</span> has a unique <b>additive inverse</b> <span class="m">−<i>a</i></span> with <span class="m"><i>a</i> + (−<i>a</i>) = 0</span>. Subtraction is defined as addition of the inverse, and the <b>absolute value</b> <span class="m">|<i>a</i>|</span> is the distance from <i>a</i> to 0.</p>
<div class="display"><span class="m"><span class="c2"><i>a</i></span> − <span class="c3"><i>b</i></span> = <span class="c2"><i>a</i></span> + (−<span class="c3"><i>b</i></span>)</span><br><span class="m">(−<i>a</i>)<i>b</i> = <i>a</i>(−<i>b</i>) = −(<i>ab</i>)</span><br><span class="m">(−<i>a</i>)(−<i>b</i>) = <i>ab</i></span></div>
<p>ℤ is closed under addition, subtraction and multiplication. It is not closed under division: <span class="m">1 ÷ 2 ∉ ℤ</span>. The order on ℤ satisfies: if <span class="m"><i>a</i> &lt; <i>b</i></span> then <span class="m">−<i>a</i> &gt; −<i>b</i></span>.</p>`,
  legend: [
    { c: "c2", sym: `<i>a</i>`, name: "Starting value", desc: "The integer you begin with. On the lab's number line it is the point where the first hop starts." },
    { c: "c3", sym: `<i>b</i>`, name: "Change", desc: "The integer being added or subtracted. Its sign and the operation together decide which way you hop." },
    { c: "c1", sym: `<i>a</i> ± <i>b</i>`, name: "Result", desc: "Where you land after the hop. It can be positive, negative or zero." },
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
    prompt: `At 6 a.m. the temperature in a mountain town is <span class="m">−8</span> °C. By noon it has risen 15 degrees. By midnight it has dropped 11 degrees from the noon reading. What is the midnight temperature?`,
    lines: [
      { math: `<span class="m"><span class="c2">−8</span> + <span class="c3">15</span></span>`, note: "A rise is adding a positive number. Signs differ, so subtract absolute values: 15 − 8 = 7." },
      { math: `<span class="m">= <span class="c1">7</span></span>`, note: "15 has the larger absolute value, so the result is positive. Noon is 7 °C." },
      { math: `<span class="m"><span class="c2">7</span> − <span class="c3">11</span> = 7 + (−11)</span>`, note: "A drop is subtracting. Rewrite it as adding the opposite." },
      { math: `<span class="m">= <span class="c1">−4</span></span>`, note: "Signs differ: 11 − 7 = 4, and −11 has the larger absolute value, so the result is negative." }
    ],
    answer: `The midnight temperature is <span class="m">−4</span> °C.`
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
    "Finding the floor number of an underground parking level",
    "Measuring gains and losses on a budget month to month"
  ],
  fields: [
    { name: "Physics", use: "Signed quantities like velocity, charge and displacement point in one of two directions along an axis." },
    { name: "Finance", use: "Cash flows in and out are positive and negative values in every ledger and model." },
    { name: "Chemistry", use: "Ion charges such as −2 for oxide and +3 for aluminium must sum to zero in a neutral compound." },
    { name: "Computer science", use: "Signed integers are stored in two's complement form in every modern processor." }
  ],
  layers: {
    concept: {
      heading: "What are integers and negative numbers?",
      lede: `Integers answer a question counting numbers cannot: what lies below zero? They describe debts, cold, depth and loss, and they give every subtraction an answer.`,
      history: `<p><b>The problem.</b> Anyone who lends, borrows or trades has to track amounts owed as well as amounts held. Counting numbers cannot do it: there is no counting number for "3 less than nothing", and an equation like <span class="m"><i>x</i> + 10 = 3</span> has no answer among them. Many mathematicians rejected such answers for centuries; Diophantus, in the 3rd century CE, called negative solutions "false".</p>
<p><b>The solution.</b> The earliest known use of negative numbers is in the Chinese text <i>The Nine Chapters on the Mathematical Art</i>, from the Han period (202 BCE to 220 CE), where red counting rods stood for positive quantities and black rods for negative ones. In India negative numbers were used for debts by the 7th century. In 628 CE Brahmagupta's <i>Brāhmasphuṭasiddhānta</i> gave rules for computing with "fortunes" and "debts", including that the product of two negatives is positive. In Europe, Fibonacci accepted negative answers in money problems as debits in 1202.</p>
<p><b>What it changed.</b> Treating a debt as a number meant it could be added, subtracted and compared like any other amount. That is how ledgers, bank balances and profit-and-loss statements work. Accounting still uses colour for sign, with the Chinese convention reversed: red figures mark negative values and black figures positive ones.</p>`,
      sources: [
        { title: "Negative number (Wikipedia)", url: "https://en.wikipedia.org/wiki/Negative_number" },
        { title: "Brahmagupta (Wikipedia)", url: "https://en.wikipedia.org/wiki/Brahmagupta" }
      ],
      examples: [
        { role: "Accountant", scene: `A small business posts quarterly results of +$12,000, −$4,500, −$2,000 and +$7,500. Net for the year: <span class="m">12,000 − 4,500 − 2,000 + 7,500 = 13,000</span>, a <b>$13,000</b> profit.`, takeaway: "Losses and gains only make sense together once each carries its sign." },
        { role: "Meteorologist", scene: `The temperature falls from 4 °C to −9 °C overnight. Change: <span class="m">−9 − 4 = −13</span> degrees.`, takeaway: "Crossing zero is where people miscount; the signed change gets it right." },
        { role: "Scuba instructor", scene: `A diver at −18 m rises to a safety stop at −5 m. Distance to rise: <span class="m">−5 − (−18) = −5 + 18 = 13</span> m.`, takeaway: "Subtracting a negative depth gives the distance to travel, which sets the ascent time." },
        { role: "Electrician", scene: `A power supply has a +5 V rail and a −5 V rail. The voltage between them is <span class="m">5 − (−5) = 10</span> V.`, takeaway: "The difference between two signed values is what a meter reads." },
        { role: "Financial analyst", scene: `A $10,000 portfolio gains $800, loses $1,200, then gains $650: <span class="m">10,000 + 800 + (−1,200) + 650 = 10,250</span>, a net change of +$250.`, takeaway: "A signed running total shows the net result through the ups and downs." },
        { role: "Pilot", scene: `At 11,000 ft the aircraft descends at −800 ft per minute for 6 minutes: <span class="m">6 × (−800) = −4,800</span> ft, leveling at <span class="m">11,000 − 4,800 = 6,200</span> ft.`, takeaway: "A negative rate times a time gives a signed change in altitude." }
      ]
    },
    build: {
      lede: `Turn every subtraction into adding the opposite, then use the sign rules: same signs add, different signs subtract, and the larger absolute value sets the sign.`,
      intro: `<p>The model above is a number line. The hop starts at <span class="c2"><i>a</i></span>, moves by <span class="c3"><i>b</i></span> (right for positive, left for negative) and lands on the result <span class="c1"><i>a</i> ± <i>b</i></span>. The length of the hop is the absolute value <span class="c4">|<i>b</i>|</span>.</p>`,
      stepWhy: [
        `Subtracting <i>b</i> and adding −<i>b</i> land on the same point, so one set of addition rules covers both operations. It also stops a double minus from being misread.`,
        `Two moves in the same direction add their lengths: debts of $3 and $5 make a debt of $8. The direction, and so the sign, stays the same.`,
        `Moves in opposite directions partly cancel. The shorter move undoes part of the longer one, so what is left is the difference of the lengths.`,
        `The longer move decides which side of zero you end on. In <span class="m">−8 + 15</span>, 15 is longer, so the result is positive.`,
        `Multiplying by a negative number reverses direction. One reversal gives a negative result; two reversals bring you back, so matching signs give a positive answer.`
      ],
      bridge: `<p>The temperature example followed a starting value through a rise and a fall, writing each change as a signed number. Any running balance works the same way.</p>`,
      tasks: [
        { task: "Reading a bank balance below zero", link: `A $40 balance and a $65 payment give <span class="m">40 + (−65) = −25</span>. As in step 4, the larger absolute value, 65, sets the sign.` },
        { task: "Working out how much colder it got overnight", link: `Subtract the earlier reading from the later one. In the worked example the reading went from 7 to −4: <span class="m">−4 − 7 = −11</span>, the 11-degree drop.` },
        { task: "Tracking a golf score against par", link: `Rounds of −2, +1 and −3 total <span class="m">−4</span>, four under par. Same signs add (step 2) and mixed signs subtract (step 3).` },
        { task: "Counting floors to an underground parking level", link: `From floor 3 down to level −2 is <span class="m">3 − (−2) = 5</span> floors, the same subtract-a-negative move as practice item 3.` },
        { task: "Netting gains and losses in a budget", link: `Add the months as signed numbers. A month of −$120 and one of +$200 net <span class="m">+80</span> dollars, by steps 3 and 4.` }
      ]
    },
    formal: {
      setup: { title: "Writing an integer problem", items: [
        { say: `<b>Name the quantities.</b> Give the start and each change a letter, with a sign for direction and units.`, math: `<span class="m"><span class="c2"><i>a</i></span> = −8</span> °C, &nbsp;rise <span class="m"><i>b</i><sub>1</sub> = 15</span>, &nbsp;drop <span class="m"><i>b</i><sub>2</sub> = 11</span>` },
        { say: `<b>Write the expression.</b> A rise is added and a drop is subtracted.`, math: `<span class="m"><i>T</i> = <span class="c2"><i>a</i></span> + <i>b</i><sub>1</sub> − <i>b</i><sub>2</sub> = −8 + 15 − 11</span>` },
        { say: `<b>Justify the rewrite.</b> Subtraction is addition of the additive inverse, so the whole expression becomes a sum.`, math: `<span class="m"><i>T</i> = −8 + 15 + (−11)</span>` },
        { say: `<b>Compute with the sign rules.</b> At each step the larger absolute value sets the sign.`, math: `<span class="m">−8 + 15 = 7</span> &nbsp;(|15| &gt; |−8|), &nbsp;<span class="m">7 + (−11) = −4</span> &nbsp;(|−11| &gt; |7|)` },
        { say: `<b>Check and answer.</b> Addition is associative and commutative, so any grouping gives the same result. State it with units.`, math: `<span class="m">15 + (−8 + (−11)) = 15 + (−19) = −4</span> &nbsp;→ The midnight temperature is −4 °C.` }
      ] }
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
    { wrong: `<span class="m">−3 − 5 = 2</span> or <span class="m">−2</span>`, fix: `Both numbers push left. <span class="m">−3 + (−5) = −8</span>.` },
    { wrong: `<span class="m">4 − (−6) = −2</span>`, fix: `Subtracting a negative adds its opposite: <span class="m">4 + 6 = 10</span>.` },
    { wrong: `<span class="m">−9 &lt; −2</span> is false because 9 is bigger`, fix: `−9 is further left on the number line, so <span class="m">−9 &lt; −2</span> is true.` },
    { wrong: `<span class="m">(−3)(−4) = −12</span>`, fix: `Two negative factors give a positive product: <span class="m">(−3)(−4) = 12</span>.` },
    { wrong: `Reading a fall "to −9 °C" from 4 °C as a fall of 9 degrees.`, fix: `The change is the later reading minus the earlier one: <span class="m">−9 − 4 = −13</span>, a fall of 13 degrees.` }
  ],
  practice: [
    { ctx: "Banking", q: `Your account is $5 overdrawn and you deposit $9. Find the new balance, <span class="m">−5 + 9</span>.`, a: `<span class="m">4</span>, so <b>$4</b>. Signs differ: 9 − 5 = 4, and 9 is larger, so positive.` },
    { ctx: "Weather", q: `It is 3 °C and the temperature drops 10 degrees. Find <span class="m">3 − 10</span>.`, a: `<span class="m">−7</span>, so <b>−7 °C</b>. Rewrite as 3 + (−10); 10 − 3 = 7, and −10 is larger in size, so negative.` },
    { ctx: "Diving", q: `A diver rises from 14 m below the surface to 6 m below. How far did she rise? Find <span class="m">−6 − (−14)</span>.`, a: `<span class="m">8</span>, so <b>8 m</b>. Rewrite as −6 + 14; 14 − 6 = 8, positive.` },
    { ctx: "Spreadsheets", q: `A spreadsheet cell computes <span class="m">(−4)(−7) − (−3)(5)</span>. What value should it show?`, a: `<span class="m">43</span>. (−4)(−7) = 28 and (−3)(5) = −15, so 28 − (−15) = 28 + 15 = <b>43</b>.` },
    { ctx: "Banking", q: `Write an equation with a letter for the unknown, then solve: after a $65 payment your balance is −$25. What was the balance <i>x</i> before the payment?`, a: `<span class="m"><i>x</i> − 65 = −25</span>, so <span class="m"><i>x</i> = −25 + 65 = 40</span>. The balance was <b>$40</b>.` }
  ],
  origin: `The Chinese text <i>The Nine Chapters on the Mathematical Art</i> (compiled by about the 1st century CE) used red and black counting rods for positive and negative quantities. In 628 CE the Indian mathematician Brahmagupta wrote out rules for computing with "fortunes" and "debts", including that a debt times a debt is a fortune.`
};
