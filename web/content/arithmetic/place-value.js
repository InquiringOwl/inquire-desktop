window.ARITH = window.ARITH || {};

ARITH["place-value"] = {
  title: "Place Value & Base Ten",
  short: "A digit's value depends on where it sits.",
  grade: "Grades 1–4",
  hours: 4,
  voice: "plain",
  eyebrow: "Number sense · base-ten notation",
  hero: `<span class="m">4,306 = <span class="c4">4 × 1000</span> + <span class="c3">3 × 100</span> + <span class="c2">0 × 10</span> + <span class="c1">6 × 1</span></span>`,
  lede: `In base-ten notation each position is worth ten times the position to its right, so a digit's value is the digit times the power of ten for its place. Ten digits and a zero then name every whole number in exactly one way.`,
  plain: `<p><b>Place value</b> means a digit's worth depends on where it sits. Ten digits, 0 through 9, can write any whole number. Each place counts groups ten times bigger than the place to its right: <b>ones</b>, <b>tens</b>, <b>hundreds</b>, <b>thousands</b>, and so on.</p>
<p>Take a used car priced at $4,306. The 4 sits in the thousands place and is worth $4,000. The 3 is worth $300. The 0 says there are no tens, and the 6 is worth $6. Written as a sum, <span class="m">4,000 + 300 + 0 + 6</span>, this is the number's <b>expanded form</b>.</p>
<p>The zero does real work. Without it, $4,306 would read as $436. A zero that holds an empty place open is called a <b>placeholder</b>.</p>`,
  formal: `<p>In <b>base ten</b> (decimal) positional notation, a string of digits <span class="m"><i>d</i><sub><i>k</i></sub> … <i>d</i><sub>2</sub><i>d</i><sub>1</sub><i>d</i><sub>0</sub></span>, each <span class="m"><i>d</i><sub><i>i</i></sub> ∈ {0, 1, …, 9}</span>, names the number</p>
<div class="display"><i>d</i><sub><i>k</i></sub>·10<sup><i>k</i></sup> + ⋯ + <span class="c3"><i>d</i><sub>2</sub>·10<sup>2</sup></span> + <span class="c2"><i>d</i><sub>1</sub>·10<sup>1</sup></span> + <span class="c1"><i>d</i><sub>0</sub>·10<sup>0</sup></span></div>
<p>The <b>face value</b> of a digit is the digit itself. Its <b>place value</b> is the digit times the power of ten for its position. Every positive whole number has exactly one such representation with a nonzero leading digit, so the notation is unambiguous. Writing a number as this sum is called <b>expanded form</b>.</p>`,
  legend: [
    { c: "c4", sym: `1000`, name: "Thousands", desc: "Each digit here counts groups of one thousand, shown as big cubes. One thousand is ten hundreds." },
    { c: "c3", sym: `100`, name: "Hundreds", desc: "Each digit here counts groups of one hundred, shown as flats. One hundred is ten tens." },
    { c: "c2", sym: `10`, name: "Tens", desc: "Each digit here counts groups of ten, shown as rods. One ten is ten ones." },
    { c: "c1", sym: `1`, name: "Ones", desc: "The rightmost digit of a whole number counts single units, shown as small cubes." }
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
    nudge: "Not yet. Check which place each digit sits in.",
    concept: {
      heading: "What is place value?",
      lede: `Place value answers a practical question: how can ten digits write any number? A digit's worth depends on where it sits.`,
      question: { text: "What's a digit worth?", sub: `The model above shows one number as blocks, one column per place. Watch what each digit is worth, then change the number yourself.`,
        figure: { sym: `<i>n</i>`, value: "2,354", cap: "the number", echo: "n" } },
      ideasTitle: "Three ideas, all in the model",
      objects: ["dollar", "dollars", "cube", "cubes", "rod", "rods", "flat", "flats", "bill", "bills", "dose", "invoice", "part", "car"],
      walk: { title: "Place it together: a check for a used car",
        lead: `One situation, step by step. Try each question before you show the next line.`,
        prompt: `You're buying a used car for $4,306. You pay by check, and a check needs the amount in words. What is each digit worth?`,
        demo: { kind: "columns", n: 4306, alt: "Four empty place columns fill from the left: 4 × 1,000 = 4,000, then 3 × 100 = 300, then 0 × 10 = 0, then 6 × 1 = 6, and the total 4,306 appears." },
        lines: [
          { math: `$4,306`, note: `The car costs $4,306. That's four digits in four places.`, frame: 0 },
          { math: `<span class="c4">4 × 1,000</span> = 4,000`, note: `The 4 sits in the thousands place. It's worth 4,000 dollars.`, frame: 1 },
          { math: `<span class="c3">3 × 100</span> = 300`, note: `The 3 sits in the hundreds place. Its place makes it worth 300.`, frame: 2 },
          { math: `<span class="c2">0 × 10</span> = 0,&nbsp; <span class="c1">6 × 1</span> = 6`, note: `There are no tens. The 6 ones are worth 6 dollars.`, frame: 4 },
          { math: `436 ≠ 4,306`, note: `Drop the 0 and the 4 and 3 slide one place right. Each is now worth ten times less. That's the classic slip.`, frame: 3 },
          { math: `4,000 + 300 + 0 + 6 = 4,306`, note: `The parts add back to the price. Write: four thousand three hundred six dollars.`, frame: 5 }
        ],
        predict: [null,
          { ask: `The 4 sits in the thousands place. What is it worth?`, parts: [{ label: "the 4 is worth", ans: 4000 }], hint: `It counts 4 groups of one thousand.` },
          { ask: `The 3 sits in the hundreds place. What is it worth?`, choices: [
            { t: "300", ok: true },
            { t: "3", why: "3 is the digit by itself. Its place makes each one a hundred." },
            { t: "3,000", why: "That would put the 3 in the thousands place. It sits one place to the right of the 4." }
          ], hint: `It counts 3 groups of one hundred.` },
          { ask: `How many tens does $4,306 have?`, parts: [{ label: "tens digit", ans: 0 }], hint: `Read the third digit from the left.` },
          { ask: `A friend writes the price as 436, since there are no tens. What goes wrong?`, choices: [
            { t: "The 4 and 3 slide right, so the price shrinks", ok: true },
            { t: "Nothing, a 0 is worth nothing", why: "The 0 adds no dollars, but it holds the tens place open. Drop it and $4,306 becomes $436." },
            { t: "Only the 6 changes", why: "The 6 stays in the ones place. The 4 and the 3 move, and each is worth ten times less." }
          ], hint: `Line 436 up under 4,306, ones under ones. Where does the 4 land?` },
          { ask: `Add the parts back: 4,000 + 300 + 0 + 6. What do you get?`, parts: [{ label: "total", ans: 4306 }], hint: `Put each part in its own column, then read across.` }],
        answer: `Write the check for <span class="m">$4,306</span>: "four thousand three hundred six dollars." The 0 has no word, but it keeps its place in the digits.` },
      ideas: [
        { c: "c1", title: "Ten ones make a ten", term: "regrouping", text: `Ten of any place trade for one of the next place. Ten ones make a ten. Ten tens make a hundred.`,
          demo: { kind: "tens", n: 10, unit: "cube", alt: "Ten small cubes fill one full ten, and the total, 10, lifts out." }, try: { label: "Show 9, then press +1", lab: "set:9,add:1" } },
        { c: "c4", title: "Where a digit sits sets its worth", term: "place value", text: `The digit 3 can be worth 3, 30, 300 or 3,000. Only its place changes.`,
          demo: { kind: "columns", n: 3333, alt: "The number 3,333 fills its columns from the left: 3 × 1,000 = 3,000, 3 × 100 = 300, 3 × 10 = 30, 3 × 1 = 3, then the total 3,333." }, try: { label: "Show 3,333", lab: "set:3333" } },
        { c: "c2", title: "Zero holds an empty place", term: "placeholder", text: `A 0 adds nothing. It keeps the other digits in their places, so 306 and 36 are different numbers.`,
          demo: { kind: "columns", n: 306, alt: "The number 306 fills its columns from the left: 3 × 100 = 300, 0 × 10 = 0, 6 × 1 = 6, then the total 306." }, try: { label: "Show 306", lab: "set:306" } }
      ],
      matters: { title: "Why place value comes first", text: `<p>Place value lets <b>ten digits</b> write any amount, from a coffee to a house. Every column method in arithmetic leans on it.</p><ul class="why-chips"><li><b>Adding</b> works one column at a time</li><li><b>Money</b> is read place by place</li><li><b>Decimals</b> carry the places to the right</li></ul><p>When you read each place right, a price, a dose or a bill <b>means what it says</b>. One digit in the wrong place changes the amount <b>ten times over</b>.</p>` },
      stakes: { title: "Where place value goes wrong", lead: `Move a digit one place, and the amount changes ten times over.`, items: [
        { role: "Writing a check", text: `$4,306 written as 436 drops the empty tens place. The 4 and 3 slide right, and the check is for $436.` },
        { role: "Medicine", text: `A 0.5 mg dose read as 5 mg is ten times too much.` },
        { role: "Invoices", text: `A $1,250 bill keyed as $12,500 is ten times too big.` },
        { role: "Reading a digit", text: `The 7 in 3,782 is worth 700. Read as 7, it is 100 times too small.` }
      ], try: { label: "Set the model to 436", lab: "set:436" } },
      examplesTitle: "Where you will meet it",
      timelineTitle: "Writing numbers by place took thousands of years",
      timelineLead: `People tried many ways to write big numbers. The one that lasted lets position carry the value, the same columns you see in the model.`,
      timeline: [
        { when: "About 2000 BCE", what: `In Babylonia, numbers are written by place, in groups of 60. An empty place is first left as a gap, later marked with a sign, like the empty tens column of 4,306.` },
        { when: "628", what: `In Bhillamala, India, the astronomer Brahmagupta writes rules for zero as a number. Add zero to a number, and the number stays the same.` },
        { when: "About 825", what: `Al-Khwarizmi writes a book on calculating with the Hindu numerals. It spreads the ten digits across the Islamic world.` },
        { when: "1202", what: `Fibonacci finishes <i>Liber Abaci</i>. It shows merchants how to keep accounts, change money and work out interest with the ten digits.` },
        { when: "1400s", what: `The ten digits come into common use in Europe and replace Roman numerals.` }
      ],
      history: `<p><b>The problem.</b> Writing a large amount in Roman numerals takes many symbols, and working sums with them on paper is slow. Traders, tax collectors and astronomers needed a way to write any amount and calculate with it.</p>
<p><b>The solution.</b> Letting position carry the value is an old idea. In Babylonia a place-value system in base 60 appeared around 2000 BCE. At first an empty place was left as a gap; later texts used a sign for it, though only inside a number, never at the end. In India a base-ten system with ten digits and a zero took shape. In 628 the astronomer Brahmagupta, writing at Bhillamala (today Bhinmal), gave rules for calculating with zero: a number plus or minus zero is unchanged, and a number times zero is zero. Al-Khwarizmi's book on calculating with the Hindu numerals, written about 825, carried the system across the Islamic world. Leonardo of Pisa, called Fibonacci, learned it as a boy in Bugia (today Béjaïa, Algeria), where his father was a merchant and customs official. In 1202 he finished <i>Liber Abaci</i>, which showed merchants how to use it for record-keeping, converting weights and measures, interest and money-changing.</p>
<p><b>What it changed.</b> From the 15th century the new digits were in common use in Europe, replacing Roman numerals. With ten digits and a zero, anyone could write any amount and work it out on paper one column at a time, leaving a record of every step that someone else could check. Checks, invoices, ledgers, odometers and spreadsheets all rest on it, and the check for the used car in this lesson is written with the same system.</p>`,
      sources: [
        { title: "Babylonian cuneiform numerals (Wikipedia)", url: "https://en.wikipedia.org/wiki/Babylonian_cuneiform_numerals" },
        { title: "Brahmagupta (MacTutor)", url: "https://mathshistory.st-andrews.ac.uk/Biographies/Brahmagupta/" },
        { title: "Hindu–Arabic numeral system (Wikipedia)", url: "https://en.wikipedia.org/wiki/Hindu%E2%80%93Arabic_numeral_system" },
        { title: "Fibonacci (Wikipedia)", url: "https://en.wikipedia.org/wiki/Fibonacci" }
      ],
      examples: [
        { role: "Nurse", figure: "0.5 mg", scene: `An order reads 0.5 mg. Read as 5 mg, the dose would be <span class="m">5 ÷ 0.5 = 10</span> times too large. That is why a dose below 1 is written with a leading zero, 0.5 and never .5.`, takeaway: "One place to the left or right is a factor of ten, which in medicine can be the difference between a dose and an overdose." },
        { role: "Accountant", figure: "$11,250 off", scene: `A $1,250 invoice was keyed as $12,500. The books are off by <span class="m">12,500 − 1,250 = 11,250</span>, and <span class="m">11,250 ÷ 9 = 1,250</span>.`, takeaway: "A difference that divides evenly by 9 often points to a digit typed in the wrong place." },
        { role: "Software developer", figure: "FF = 255", scene: `Binary uses places worth 1, 2, 4, 8: <span class="m">1011<sub>2</sub> = 8 + 0 + 2 + 1 = 11</span>. Hexadecimal uses places worth 1 and 16: <span class="m">FF<sub>16</sub> = 15 × 16 + 15 = 255</span>.`, takeaway: "Every number base works like base ten with a different group size." },
        { role: "Bank teller", figure: "$1,045", try: { label: "Show 1,045", lab: "set:1045" }, scene: `A check shows $1,045 in digits and "one thousand forty-five" in words: 1 thousand, 0 hundreds, 4 tens, 5 ones. The two must agree before it is cashed.`, takeaway: "Writing the amount two ways makes a misplaced digit stand out." },
        { role: "Machinist", figure: "0.003 in", scene: `A caliper reads 1.237 in: 1 inch, 2 tenths, 3 hundredths, 7 thousandths. The drawing calls for 1.240 in, so the part is <span class="m">1.240 − 1.237 = 0.003</span> in, or 3 thousandths, short.`, takeaway: "Each place to the right is one tenth of the last, so a machinist reads fine tolerances by place." }
      ]
    },
    build: {
      lede: `To read a number, label each digit's place from the right, multiply the digit by its place, and add the results.`,
      task: { text: "Find what each digit is worth.", sub: `The same five moves read any whole number, from a $6 lunch to a $4,306 car. Try each one in the model above as you go.`,
        figure: { sym: `<i>n</i>`, value: "2,354", cap: "in the model", echo: "n" },
        jump: [{ label: "The method", to: "b-method" }, { label: "Everyday tasks", to: "b-tasks" }] },
      keysTitle: "What the model shows",
      intro: `<p>The model above breaks a number into its places, each in its own colour: <span class="c4">thousands</span> as big cubes, <span class="c3">hundreds</span> as flats, <span class="c2">tens</span> as rods and <span class="c1">ones</span> as small cubes. Each place holds one digit and is worth ten of the place to its right.</p>`,
      keyTry: [{ label: "Press +1000", lab: "add:1000" }, { label: "Press +100", lab: "add:100" }, { label: "Press +10", lab: "add:10" }, { label: "Show 9, then press +1", lab: "set:9,add:1" }],
      objects: ["dollar", "dollars", "bill", "bills", "mile", "miles", "cube", "cubes", "rod", "rods", "flat", "flats", "car", "cars", "paycheck", "drawer"],
      goalsIntro: `Three of the steps have a move for you to make in the model. Make the move, then press <b>Check my move</b>. A move also ticks itself off as soon as the model shows it.`,
      stepWhy: [
        `The ones place is always the last digit of a whole number, whatever its length. Starting there means you never have to guess how big the first digit is.`,
        `Ten of any place trade for one of the next, so each step left multiplies by 10. That gives the list 1, 10, 100, 1,000 and so on.`,
        `The digit says how many groups there are, and the place says how big each group is. Multiplying gives what the digit is worth.`,
        `A number is the total of its parts. Adding the place values must give back the number you started with. If it does not, a digit was misread.`,
        `Spoken numbers follow the places from largest to smallest. A 0 has no word, which is why "four thousand three hundred six" has no tens word, while the 0 in the digits keeps the 3 in the hundreds place.`
      ],
      stepTry: [{ label: "Show 5,049", lab: "set:5049" }, null, null, null, { label: "Show 4,006", lab: "set:4006" }],
      stepGoal: [null,
        { key: "n", eq: 100, text: `Set the model to 99, then press <b>+1</b> once.`, after: `Ten ones made a ten, and ten tens made a hundred: <span class="m">99 + 1 = 100</span>.`, notYet: `Not yet. Slide the number to 99, then press <b>+1</b> once.` },
        { key: "hundreds", eq: 7, text: `Make a number with a 7 in the hundreds place, like 3,782.`, after: `That 7 is worth <span class="m">7 × 100 = 700</span>.`, notYet: `Not yet. Look at the hundreds column. Its digit should be 7.` },
        { key: "n", eq: 4306, text: `Build 4,306 with the buttons. Slide to 0, then press <b>+1000</b> four times, <b>+100</b> three times and <b>+1</b> six times.`, after: `<span class="m">4,000 + 300 + 0 + 6 = 4,306</span>. The tens column stays empty.`, notYet: `Not yet. You need 4 thousands, 3 hundreds, 0 tens and 6 ones.` },
        null],
      matters: { title: "Why a Method Beats a Glance", text: `<p>You can read a short number at a glance. Mistakes start with long numbers, numbers full of zeros, and numbers read in a hurry.</p><ul class="why-chips"><li><b>Long</b> numbers</li><li><b>Zeros</b> in the middle</li><li><b>Rushed</b> reading</li></ul><p>A method is <b>the same few moves every time</b>. Label the places, find each digit's worth, and add them back. If the total matches, you <b>read it right</b>.</p>` },
      bridge: `<p>The check for the used car used the whole routine: label the places, find what each digit is worth, add them back, then say the amount in words. The same routine shows up whenever a number has to be read, written or checked.</p>`,
      tasksTitle: "Everyday tasks: solve them",
      tasks: [
        { task: "Writing the amount on a check in words", check: { q: `Your rent check is for $2,050. What is the 5 worth, in dollars?`, parts: [{ label: "the 5 is worth", ans: 50 }], hint: `The 5 is the third digit from the left. Which place is that?` }, figure: "$2,050",
          demo: { kind: "columns", n: 2050, alt: "The number 2,050 fills its columns from the left: 2 × 1,000 = 2,000, 0 × 100 = 0, 5 × 10 = 50, 0 × 1 = 0, then the total 2,050." },
          lines: [{ math: `<span class="c4">2 × 1,000</span> = 2,000`, note: "Two thousand dollars." }, { math: `<span class="c3">0 × 100</span> = 0`, note: "No hundreds, so no hundreds word." }, { math: `<span class="c2">5 × 10</span> = 50`, note: "Five tens are fifty." }, { math: `2,000 + 0 + 50 + 0 = 2,050`, note: "Write: two thousand fifty dollars." }],
          predict: [null, { ask: `How many hundreds does $2,050 have?`, parts: [{ label: "hundreds digit", ans: 0 }], hint: `Read the second digit from the left.` }],
          try: { label: "Show 2,050", lab: "set:2050" }, link: `Name each nonzero part from the largest down, like the check for the used car. The words skip the 0s; the digits keep them (step 5).` },
        { task: "Reading prices, paychecks and bills", check: { q: `Your paycheck shows $1,290. A friend reads it as $129. How many times bigger is the real amount?`, parts: [{ label: "times bigger", ans: 10 }], hint: `Each digit sits one place further left in $1,290.` }, figure: "× 10",
          demo: { kind: "columns", n: 1290, alt: "The number 1,290 fills its columns from the left: 1 × 1,000 = 1,000, 2 × 100 = 200, 9 × 10 = 90, 0 × 1 = 0, then the total 1,290." },
          lines: [{ math: `129 = 1 × 100 + 2 × 10 + 9 × 1`, note: "$129 has three places." }, { math: `1,290 = 1 × 1,000 + 2 × 100 + 9 × 10 + 0`, note: "$1,290 has four. Each digit sits one place further left." }, { math: `129 × 10 = 1,290`, note: "One place left is ten times more." }],
          predict: [null, { ask: `How many places does $1,290 have?`, parts: [{ label: "places", ans: 4 }], hint: `Count the digits, including the 0.` }],
          try: { label: "Show 1,290", lab: "set:1290" }, link: `Count the places before you read the amount. Each step left is worth 10 times more (step 2).` },
        { task: "Counting cash in hundreds, tens and ones", check: { q: `A cash drawer holds 3 hundred-dollar bills, 14 ten-dollar bills and 2 one-dollar bills. How much is that?`, parts: [{ label: "dollars", ans: 442 }], hint: `14 tens are 1 hundred and 4 tens.` }, figure: "$442",
          demo: { kind: "bar", parts: [300, 140, 2], labels: ["3 hundreds", "14 tens", "2 ones"], unit: "dollar", alt: "Three bars of 300, 140 and 2 dollars appear one by one, then a brace shows the total, 442 dollars." },
          lines: [{ math: `<span class="c3">3 × 100</span> = 300`, note: "Three hundreds are 300 dollars." }, { math: `<span class="c2">14 × 10</span> = 140`, note: "Fourteen tens are 1 hundred and 4 tens. That's regrouping." }, { math: `300 + 140 + 2 = 442`, note: "4 hundreds, 4 tens, 2 ones: 442 dollars." }],
          predict: [null, { ask: `What are 14 ten-dollar bills worth?`, parts: [{ label: "dollars", ans: 140 }], hint: `10 tens are 100. Add 4 more tens.` }],
          try: { label: "Show 442", lab: "set:442" }, link: `Ten tens trade for one hundred, the rule from step 2. Watch it happen when you press +1 at 99.` },
        { task: "Reading an odometer", check: { q: `A car's odometer reads 9,980 miles. What will it read after 20 more miles?`, parts: [{ label: "miles", ans: 10000 }], hint: `9,980 + 20. Watch every place fill up and trade upward.` }, figure: "10,000 mi",
          demo: { kind: "line", from: 9960, to: 10000, start: 9980, jumps: [10, 10], unit: "mile", alt: "A number line from 9,960 to 10,000 starts at 9,980, hops 10 to 9,990, then hops 10 more to 10,000." },
          lines: [{ math: `9,980 + 10 = 9,990`, note: "Ten more miles fill the tens place up to 9." }, { math: `9,990 + 10 = 10,000`, note: "Ten tens trade for a hundred, ten hundreds for a thousand, and ten thousands for ten thousand." }, { math: `10,000`, note: "Every place rolled over to 0. The reading now needs five digits." }],
          predict: [null, { ask: `After 10 more miles, what does 9,990 become?`, parts: [{ label: "miles", ans: 10000 }], hint: `Ten tens make a hundred. What happens to the hundreds then?` }],
          link: `Each place holds at most 9, so a full place trades up to the next (step 2). The model stops at 9,999, one mile short of this rollover.` },
        { task: "Comparing car prices", check: { q: `One car is listed at $8,950 and another at $8,590. Which price is lower? Type it.`, parts: [{ label: "lower price", ans: 8590 }], hint: `Both have 8 thousands. Compare the next place.` }, figure: "$360 less",
          demo: { kind: "columns", n: 8590, alt: "The number 8,590 fills its columns from the left: 8 × 1,000 = 8,000, 5 × 100 = 500, 9 × 10 = 90, 0 × 1 = 0, then the total 8,590." },
          lines: [{ math: `8,950 and 8,590`, note: "Both have 8 thousands. That place is a tie." }, { math: `<span class="c3">9 hundreds</span> &gt; <span class="c3">5 hundreds</span>`, note: "The hundreds decide: 9 is more than 5, so $8,590 is lower." }, { math: `8,950 − 8,590 = 360`, note: "The second car costs $360 less." }],
          predict: [null, { ask: `Which place breaks the tie?`, choices: [
            { t: "The hundreds", ok: true },
            { t: "The tens", why: "The tens are 5 and 9, but the hundreds already differ, and they come first." },
            { t: "The ones", why: "Both ones digits are 0. A smaller place only matters when every larger place ties." }
          ], hint: `Read from the left. Find the first place where the digits differ.` }],
          try: { label: "Show 8,950", lab: "set:8950" }, link: `Compare from the largest place down, the same order you read a number aloud (step 5).` }
      ]
    },
    formal: {
      question: { text: "How does a digit's position fix its value?", sub: `You can read a number place by place. Here are the words a textbook uses for the same ideas, and how to write a number out in full.`,
        figure: { sym: `<i>N</i>`, value: "2,354", cap: "the number", echo: "n" },
        jump: [{ label: "Vocabulary", to: "f-vocab" }, { label: "Where it goes wrong", to: "f-mist" }, { label: "Writing it out", to: "f-setup" }, { label: "Practice", to: "f-prac" }] },
      vocabTitle: "From your words to the textbook's",
      vocabIntro: `<p>Each card is an idea you already used in the Concept and Intermediate tabs, with its proper name and its exact meaning.</p>`,
      vocab: [
        { c: "c1", sym: `0, 1, …, 9`, term: "Digit", def: `One of the ten symbols 0 through 9 used to write numbers in base ten.`, was: "the number under each column" },
        { c: "c2", sym: `10`, term: "Base ten (decimal system)", def: `A positional numeral system in which each position is worth 10 times the position to its right.`, was: "each place is ten of the place to its right" },
        { c: "c3", sym: `<i>d</i><sub><i>i</i></sub> · 10<sup><i>i</i></sup>`, term: "Place value", def: `The value a digit contributes because of its position: the digit times the power of ten for that position. The <b>face value</b> is the digit itself.`, was: "what a digit is worth" },
        { c: "c4", sym: `∑ <i>d</i><sub><i>i</i></sub> · 10<sup><i>i</i></sup>`, term: "Expanded form", def: `A number written as the sum of the place values of its digits, as in <span class="m">4,306 = 4·10<sup>3</sup> + 3·10<sup>2</sup> + 0·10 + 6</span>.`, was: "adding the parts back" },
        { c: "c2", sym: `0`, term: "Placeholder zero", def: `A digit 0 that marks an empty position, so every other digit keeps its place value.`, was: "zero holds an empty place" },
        { c: "c1", sym: `10 · 10<sup><i>i</i></sup> = 10<sup><i>i</i>+1</sup>`, term: "Regrouping", def: `Replacing ten units of one place with one unit of the next higher place, or the reverse.`, was: "ten ones make a ten" },
        { c: "c4", sym: `4,306`, term: "Standard form", def: `The usual digit string for a number, with no leading zeros and, by common convention, a comma between each group of three places.`, was: "the price as written" }
      ],
      matters: { title: "Why the exact words matter", text: `<p>In everyday talk, "what the 7 is" and "what the 7 is worth" sound alike. In a textbook, <b>face value</b> and <b>place value</b> give different answers.</p><ul class="why-chips"><li>The 7 in 3,782</li><li>Face value: <b>7</b></li><li>Place value: <b>700</b></li></ul><p>Exact words tell you which number a question wants, and let you write an answer <b>someone else can check</b>.</p>` },
      mistakesTitle: "Where formal answers go wrong",
      mistakesLead: `Most wrong answers here put a digit one place off. A zero is dropped, an extra one is added, or the face value is given instead of the place value.`,
      setupIntro: `<p>The check for the used car from the Concept tab, written the way a textbook would.</p>`,
      setup: { title: "Writing a number in expanded form", items: [
        { say: `<b>Name the digits.</b> Index them from the right, starting at 0.`, math: `<span class="m">4,306: &nbsp;<span class="c4"><i>d</i><sub>3</sub> = 4</span>, <span class="c3"><i>d</i><sub>2</sub> = 3</span>, <span class="c2"><i>d</i><sub>1</sub> = 0</span>, <span class="c1"><i>d</i><sub>0</sub> = 6</span></span>` },
        { say: `<b>Write the place values.</b> The digit in position <i>i</i> counts groups of 10<sup><i>i</i></sup>.`, math: `<span class="m">10<sup>0</sup> = 1, &nbsp;10<sup>1</sup> = 10, &nbsp;10<sup>2</sup> = 100, &nbsp;10<sup>3</sup> = 1,000</span>` },
        { say: `<b>Write the expansion.</b> The number is the sum of each digit times its place value.`, math: `<span class="m"><i>N</i> = ∑<sub><i>i</i>=0</sub><sup><i>k</i></sup> <i>d</i><sub><i>i</i></sub> · 10<sup><i>i</i></sup></span>` },
        { say: `<b>Justify it.</b> Ten of one place make one of the next, and with digits from 0 to 9 no place can hold ten, so each number has exactly one such form.`, math: `<span class="m">10 · 10<sup><i>i</i></sup> = 10<sup><i>i</i>+1</sup>, &nbsp;0 ≤ <i>d</i><sub><i>i</i></sub> ≤ 9</span>` },
        { say: `<b>Substitute, compute, answer.</b> State the result in words as well as digits.`, math: `<span class="m">4·10<sup>3</sup> + 3·10<sup>2</sup> + 0·10 + 6 = 4,306</span> &nbsp;→ Four thousand three hundred six dollars.` }
      ] },
      practiceTip: `Type your answer and press Check. Work it the formal way: name each digit's place, multiply by its power of ten, and add. Stuck? Each one has a hint.`,
      practiceDone: "All 5 solved. You can write a number in expanded form the formal way.",
      checks: [
        { hint: `Count places from the right: ones, tens, hundreds. Then multiply the 7 by its place.`, parts: [{ label: "the 7 is worth ($)", ans: 700 }] },
        { hint: `Write one term per place, including the 0 in the hundreds place. The 4 sits in the tens place.`, parts: [{ label: "the 4 is worth", ans: 40 }] },
        { hint: `14 hundreds are 1 thousand and 4 hundreds. Add the bundles place by place.`, parts: [{ label: "dollars", ans: 4425 }] },
        { hint: `Each box holds one ten. How many tens are in 4,560?`, parts: [{ label: "boxes", ans: 456 }] },
        { hint: `Write one term per place: <span class="m"><i>s</i> = 6 × 1000 + 0 × 100 + 9 × 10 + 3 × 1</span>.`, parts: [{ label: "screws s", ans: 6093 }] }
      ]
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
    { wrong: `Reading $4,306 as 436 because "the 0 is worth nothing."`, fix: `The 0 adds nothing, but it holds the tens place open. Without it the 4 and 3 each move one place right: <span class="m">4,306 = 4 × 1000 + 3 × 100 + 0 × 10 + 6</span>, while <span class="m">436 = 4 × 100 + 3 × 10 + 6</span>.` },
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
