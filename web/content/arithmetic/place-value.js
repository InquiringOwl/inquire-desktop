window.ARITH = window.ARITH || {};

ARITH["place-value"] = {
  title: "Place Value & Base Ten",
  short: "A digit's value depends on where it sits.",
  grade: "Grades 1–4",
  hours: 4,
  voice: "plain",
  eyebrow: "Number sense · base-ten notation",
  hero: `<span class="m">4,306 = <span class="c4">4 × 1000</span> + <span class="c3">3 × 100</span> + <span class="c2">0 × 10</span> + <span class="c1">6 × 1</span></span>`,
  lede: `Ten ones make a ten, ten tens make a hundred, and ten hundreds make a thousand. Each place is worth ten times the place to its right.`,
  plain: `<p><b>Place value</b> means a digit's worth depends on where it sits. Ten digits, 0 through 9, are enough to write any whole number, because each position counts groups ten times larger than the position to its right: <b>ones</b>, <b>tens</b>, <b>hundreds</b>, <b>thousands</b>, and so on.</p>
<p>Take a used car priced at $4,306. The 4 sits in the thousands place and is worth $4,000. The 3 is worth $300, the 0 says there are no tens, and the 6 is worth $6. Written as a sum, <span class="m">4,000 + 300 + 0 + 6</span>, this is the number's <b>expanded form</b>.</p>
<p>The zero does real work. Without it, $4,306 would read as $436. A zero that holds an empty place open is called a <b>placeholder</b>.</p>`,
  formal: `<p>In <b>base ten</b> (decimal) positional notation, a string of digits <span class="m"><i>d</i><sub><i>k</i></sub> … <i>d</i><sub>2</sub><i>d</i><sub>1</sub><i>d</i><sub>0</sub></span>, each <span class="m"><i>d</i><sub><i>i</i></sub> ∈ {0, 1, …, 9}</span>, names the number</p>
<div class="display"><i>d</i><sub><i>k</i></sub>·10<sup><i>k</i></sup> + ⋯ + <span class="c3"><i>d</i><sub>2</sub>·10<sup>2</sup></span> + <span class="c2"><i>d</i><sub>1</sub>·10<sup>1</sup></span> + <span class="c1"><i>d</i><sub>0</sub>·10<sup>0</sup></span></div>
<p>The <b>face value</b> of a digit is the digit itself. Its <b>place value</b> is the digit times the power of ten for its position. Every positive whole number has exactly one such representation with a nonzero leading digit, so the notation is unambiguous. Writing a number as this sum is called <b>expanded form</b>.</p>`,
  legend: [
    { c: "c4", sym: `1000`, name: "Thousands", desc: "Each digit here counts groups of one thousand. One thousand is ten hundreds." },
    { c: "c3", sym: `100`, name: "Hundreds", desc: "Each digit here counts groups of one hundred. One hundred is ten tens." },
    { c: "c2", sym: `10`, name: "Tens", desc: "Each digit here counts groups of ten. One ten is ten ones." },
    { c: "c1", sym: `1`, name: "Ones", desc: "The rightmost digit of a whole number counts single units." }
  ],
  steps: { title: "How to find what each digit is worth", items: [
    `Start at the rightmost digit. That is the ones place.`,
    `Move one place left for each step up: ones, tens, hundreds, thousands. Each place is worth 10 times the one to its right.`,
    `Multiply each digit by its place: for example, a 3 in the hundreds place is worth <span class="m">3 × 100 = 300</span>.`,
    `Add all the place values to write the number in expanded form.`,
    `To read the number aloud, say the thousands part, then the hundreds, then the tens and ones. Skip any place that holds a 0.`
  ] },
  example: {
    prompt: `You are writing a check for a used car that costs $4,306. The check needs the amount in words. What do you write?`,
    lines: [
      { math: `<span class="c4">4</span> <span class="c3">3</span> <span class="c2">0</span> <span class="c1">6</span>`, note: "Label the places from the right: ones, tens, hundreds, thousands." },
      { math: `<span class="c4">4 × 1000</span> = 4,000`, note: "The 4 is in the thousands place." },
      { math: `<span class="c3">3 × 100</span> = 300`, note: "The 3 is in the hundreds place." },
      { math: `<span class="c2">0 × 10</span> = 0,&nbsp; <span class="c1">6 × 1</span> = 6`, note: "There are no tens, and 6 ones." },
      { math: `4,000 + 300 + 0 + 6 = 4,306`, note: "Expanded form adds back to the original number, so the reading is right." }
    ],
    answer: `Write "Four thousand three hundred six and 00/100 dollars." There is no "tens" word because the tens digit is 0.`
  },
  why: `<p>Many costly number errors are place-value errors. A digit in the wrong spot changes an amount tenfold: a 0.5 mg dose read as 5 mg, a $1,250 invoice keyed as $12,500. Reading each place carefully is how you catch these before they cost money or harm someone.</p>
<p>Place value also turns big numbers into small steps. Because every place follows the same rule, you can add, subtract, multiply and divide one column at a time, trading ten of one place for one of the next. Every written method in arithmetic works this way.</p>
<p>Later math stretches the same idea. Decimals continue the places to the right of the ones, scientific notation writes the power of ten directly, and computers use the same positional scheme in base 2.</p>`,
  careers: [
    { role: "Nurse", use: "Reads medication orders where 0.5 mg and 5 mg differ by one place, and knows a misplaced digit is a tenfold dosing error." },
    { role: "Accountant", use: "Lines up figures by place in ledgers and spreadsheets so columns of dollars can be totaled and audited." },
    { role: "Software developer", use: "Converts between base ten, binary (base two) and hexadecimal (base sixteen), which all use place value." },
    { role: "Bank teller", use: "Writes and verifies check amounts in both digits and words, which requires reading each place correctly." },
    { role: "Machinist", use: "Reads measurements to the thousandth of an inch, where each place to the right is one tenth the size of the last." }
  ],
  life: [
    "Reading prices, paychecks and bills correctly",
    "Writing the amount on a check in words",
    "Reading addresses, phone numbers and odometer readings",
    "Counting cash in hundreds, tens and ones",
    "Comparing house prices or car prices"
  ],
  fields: [
    { name: "Computer science", use: "Binary and hexadecimal are place-value systems in base 2 and base 16." },
    { name: "Accounting and finance", use: "Column alignment by place value is the basis of every ledger and financial statement." },
    { name: "Physics and chemistry", use: "Measurements and significant figures depend on knowing the place value of each digit." }
  ],
  layers: {
    concept: {
      heading: "What is place value?",
      lede: `Place value answers a practical question: how can ten digits write any number? A digit's worth depends on where it sits.`,
      history: `<p><b>The problem.</b> In systems like Roman numerals, writing a large number takes many symbols, and calculating with them on paper is awkward. In medieval Europe, sums were often worked on a counting table or an abacus, where each line or rod stood for a size of group, and only the answer was written down.</p>
<p><b>The solution.</b> Letting position carry the value is an old idea. Babylonian scribes used a place-value system in base 60 from around 2000 BCE, and later added a sign for an empty place inside a number, though never at the end. In India a base-ten place-value system took shape; it is used in the Bakhshali manuscript, whose oldest leaves are dated to about 224–383 CE, and in 628 the astronomer Brahmagupta gave rules for calculating with zero as a number. Al-Khwarizmi's book on calculating with the Hindu numerals, written about 825, carried the system across the Islamic world. In 1202 Leonardo of Pisa (Fibonacci) finished <i>Liber Abaci</i>, which showed European merchants how to use it for bookkeeping, converting weights and measures, and interest.</p>
<p><b>What it changed.</b> With ten digits and a zero, anyone could write any amount and work it out on paper one column at a time, leaving a record of every step that someone else could check. Checks, invoices, ledgers, odometers and spreadsheets all rest on it, and the check in this lesson's worked example is written with the same system.</p>`,
      sources: [
        { title: "Babylonian cuneiform numerals (Wikipedia)", url: "https://en.wikipedia.org/wiki/Babylonian_cuneiform_numerals" },
        { title: "Hindu–Arabic numeral system (Wikipedia)", url: "https://en.wikipedia.org/wiki/Hindu%E2%80%93Arabic_numeral_system" },
        { title: "Brahmagupta (MacTutor)", url: "https://mathshistory.st-andrews.ac.uk/Biographies/Brahmagupta/" },
        { title: "Fibonacci (Wikipedia)", url: "https://en.wikipedia.org/wiki/Fibonacci" }
      ],
      examples: [
        { role: "Nurse", scene: `An order reads 0.5 mg. Read as 5 mg, the dose would be <span class="m">5 ÷ 0.5 = 10</span> times too large. That is why a dose below 1 is written with a leading zero, 0.5 and never .5.`, takeaway: "One place to the left or right is a factor of ten, which in medicine can be the difference between a dose and an overdose." },
        { role: "Accountant", scene: `A $1,250 invoice was keyed as $12,500. The books are off by <span class="m">12,500 − 1,250 = 11,250</span>, and <span class="m">11,250 ÷ 9 = 1,250</span>.`, takeaway: "A difference that divides evenly by 9 often points to a digit typed in the wrong place." },
        { role: "Software developer", scene: `Binary uses places worth 1, 2, 4, 8: <span class="m">1011<sub>2</sub> = 8 + 0 + 2 + 1 = 11</span>. Hexadecimal uses places worth 1 and 16: <span class="m">FF<sub>16</sub> = 15 × 16 + 15 = 255</span>.`, takeaway: "Every number base works like base ten with a different group size." },
        { role: "Bank teller", scene: `A check shows $1,045 in digits and "one thousand forty-five" in words: 1 thousand, 0 hundreds, 4 tens, 5 ones. The two must agree before it is cashed.`, takeaway: "Writing the amount two ways makes a misplaced digit stand out." },
        { role: "Machinist", scene: `A caliper reads 1.237 in: 1 inch, 2 tenths, 3 hundredths, 7 thousandths. The drawing calls for 1.240 in, so the part is <span class="m">1.240 − 1.237 = 0.003</span> in, or 3 thousandths, short.`, takeaway: "Each place to the right is one tenth of the last, so a machinist reads fine tolerances by place." }
      ]
    },
    build: {
      lede: `To read a number, label each digit's place from the right, multiply the digit by its place, and add the results.`,
      intro: `<p>The model above breaks a number into its places, each in its own colour: <span class="c4">thousands</span>, <span class="c3">hundreds</span>, <span class="c2">tens</span> and <span class="c1">ones</span>. Each place holds one digit and is worth ten of the place to its right.</p>`,
      stepWhy: [
        `The ones place is always the last digit of a whole number, whatever its length. Starting there means you never have to guess how big the first digit is.`,
        `Ten of any place trade for one of the next, so each step left multiplies by 10. That gives the list 1, 10, 100, 1,000 and so on.`,
        `The digit says how many groups there are, and the place says how big each group is. Multiplying gives what the digit is worth.`,
        `A number is the total of its parts. Adding the place values must give back the number you started with. If it does not, a digit was misread.`,
        `Spoken numbers follow the places from largest to smallest. A 0 has no word, which is why "four thousand three hundred six" has no tens word, while the 0 in the digits keeps the 3 in the hundreds place.`
      ],
      bridge: `<p>The check for $4,306 used the whole routine: label the places, find what each digit is worth, add them back, then say the amount in words. The same routine appears whenever a number has to be read, written or checked.</p>`,
      tasks: [
        { task: "Writing the amount on a check in words", link: `Label the places, then name each nonzero part from the largest down, as in the last line of the worked example.` },
        { task: "Reading prices, paychecks and bills", link: `Count the places before you read. $1,290 has a thousands place and $129 does not, and <span class="m">1,290 = 10 × 129</span> (step 2).` },
        { task: "Counting cash in hundreds, tens and ones", link: `3 hundred-dollar bills, 14 tens and 2 ones: regroup the 14 tens as in practice item 3, <span class="m">300 + 140 + 2 = 442</span> dollars.` },
        { task: "Reading an odometer", link: `At 49,980 miles, 20 more miles make 50,000. The tens fill up and trade upward place after place, the rule from step 2.` },
        { task: "Comparing house or car prices", link: `$389,000 and $398,000 share the hundred-thousands digit. The ten-thousands digit decides: 8 &lt; 9, so the first is lower. The larger place decides before any smaller one is read.` }
      ]
    },
    formal: {
      setup: { title: "Writing a number in expanded form", items: [
        { say: `<b>Name the digits.</b> Index them from the right, starting at 0.`, math: `<span class="m">4,306: &nbsp;<span class="c4"><i>d</i><sub>3</sub> = 4</span>, <span class="c3"><i>d</i><sub>2</sub> = 3</span>, <span class="c2"><i>d</i><sub>1</sub> = 0</span>, <span class="c1"><i>d</i><sub>0</sub> = 6</span></span>` },
        { say: `<b>Write the place values.</b> The digit in position <i>i</i> counts groups of 10<sup><i>i</i></sup>.`, math: `<span class="m">10<sup>0</sup> = 1, &nbsp;10<sup>1</sup> = 10, &nbsp;10<sup>2</sup> = 100, &nbsp;10<sup>3</sup> = 1,000</span>` },
        { say: `<b>Write the expansion.</b> The number is the sum of each digit times its place value.`, math: `<span class="m"><i>N</i> = ∑<sub><i>i</i>=0</sub><sup><i>k</i></sup> <i>d</i><sub><i>i</i></sub> · 10<sup><i>i</i></sup></span>` },
        { say: `<b>Justify it.</b> Ten of one place make one of the next, and with digits from 0 to 9 no place can hold ten, so each number has exactly one such form.`, math: `<span class="m">10 · 10<sup><i>i</i></sup> = 10<sup><i>i</i>+1</sup>, &nbsp;0 ≤ <i>d</i><sub><i>i</i></sub> ≤ 9</span>` },
        { say: `<b>Substitute, compute, answer.</b> State the result in words as well as digits.`, math: `<span class="m">4·10<sup>3</sup> + 3·10<sup>2</sup> + 0·10 + 6 = 4,306</span> &nbsp;→ Four thousand three hundred six dollars.` }
      ] }
    }
  },
  prereqWhy: {
    "counting": "Place value is a way of recording counts, so you need to count reliably to 10 and beyond before grouping by tens."
  },
  unlocksWhy: {
    "rounding": "Rounding to the nearest ten, hundred or thousand means looking at the digit one place to the right of the rounding place.",
    "addition": "Column addition adds ones to ones, tens to tens and so on, and carrying is trading ten of one place for one of the next.",
    "decimals": "Decimals extend place value to the right of the ones place with tenths, hundredths and thousandths."
  },
  beyond: [
    { field: "Number theory", why: "Divisibility tests, such as the rule for 9 using digit sums, come from the base-ten expansion of a number." },
    { field: "Algebra I", why: "Polynomials in x look like expanded form with 10 replaced by x, and long division of polynomials copies long division of numbers." },
    { field: "Discrete math and computing", why: "Number bases, binary arithmetic and data representation all use positional notation." }
  ],
  mistakes: [
    { wrong: `Writing "four thousand six" as <span class="m">46</span> or <span class="m">4,0006</span>.`, fix: `Each place needs exactly one digit. Four thousand six is <span class="m">4,006</span>: 4 thousands, 0 hundreds, 0 tens, 6 ones.` },
    { wrong: `Saying the 7 in 3,782 is worth 7.`, fix: `The 7 is in the hundreds place, so it is worth <span class="m">7 × 100 = 700</span>.` },
    { wrong: `Thinking 4,560 has only 6 tens because the tens digit is 6.`, fix: `The tens digit is 6, but the total number of tens is 456, since <span class="m">4,560 = 456 × 10</span>.` },
    { wrong: `Keying an extra zero, so a $1,250 invoice is entered as $12,500.`, fix: `Count the places before you enter a number. One extra place makes the amount 10 times larger: <span class="m">12,500 = 10 × 1,250</span>.` }
  ],
  practice: [
    { ctx: "Car shopping", q: `A used car is listed at $3,782. How much is the 7 in that price worth?`, a: `It is in the hundreds place: <span class="m">7 × 100 = </span><b>$700</b>.` },
    { ctx: "Banking", q: `You write a check for $5,049. Write the amount in expanded form.`, a: `<span class="m">5,000 + 0 + 40 + 9</span>, or <b>5 × 1000 + 4 × 10 + 9 × 1</b>. In words: five thousand forty-nine.` },
    { ctx: "Cash count", q: `A safe holds 3 bundles of $1,000, 14 bundles of $100, 2 ten-dollar bills and 5 one-dollar bills. How much money is that?`, a: `14 hundreds is 1,400. <span class="m">3,000 + 1,400 + 20 + 5 = </span><b>$4,425</b>.` },
    { ctx: "Packing", q: `A warehouse packs 4,560 bolts in boxes of 10. How many full boxes does it fill?`, a: `<span class="m">4,560 ÷ 10 = 456</span>, so <b>456 boxes</b>, with none left over.` },
    { ctx: "Supply", q: `Write an expression with a letter for the unknown, then solve: a supplier ships 6 crates of 1,000 screws, no boxes of 100, 9 bags of 10 and 3 loose screws. How many screws <i>s</i> are there?`, a: `<span class="m"><i>s</i> = 6 × 1000 + 0 × 100 + 9 × 10 + 3 × 1</span> = 6,000 + 0 + 90 + 3 = <b>6,093</b> screws.` }
  ],
  origin: `The Babylonians used a positional system in base 60 about 4,000 years ago. The base-ten place-value system with a digit for zero developed in India; Brahmagupta treated zero as a number in 628 CE. It reached the Islamic world through al-Khwarizmi's work around 825 CE and was spread in Europe by Fibonacci's <i>Liber Abaci</i> in 1202.`
};
