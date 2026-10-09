window.ARITH = window.ARITH || {};

ARITH["sci-notation"] = {
  title: "Scientific Notation",
  short: "Writing huge and tiny numbers with powers of ten",
  grade: "Grade 8",
  hours: 5,
  voice: "plain",
  eyebrow: "Powers of ten · orders of magnitude",
  hero: `<span class="m"><span class="c2"><i>c</i></span> × 10<sup class="c3"><i>n</i></sup>, &nbsp; 1 ≤ |<span class="c2"><i>c</i></span>| &lt; 10</span>`,
  lede: `Any nonzero number can be written as a coefficient between 1 and 10 times a power of ten. The exponent tells you its size at a glance.`,
  plain: `<p>Some numbers are too long to read safely. The Sun is about 149,600,000,000 metres from Earth, and a hydrogen atom is about 0.0000000001 metres across. Miss one zero and you are off by a factor of ten. <b>Scientific notation</b> writes such a number as a short decimal times a power of ten.</p>
<p>The decimal part is the <b>coefficient</b>. It is always at least 1 and less than 10. The power of ten carries the size, and its <b>exponent</b> counts how many places the decimal point moved. The Sun's distance becomes <span class="m">1.496 × 10<sup>11</sup></span> m and the atom becomes <span class="m">1 × 10<sup>−10</sup></span> m. An exponent of 1 or more means the number is at least 10. A negative exponent means it is less than 1.</p>
<p>Comparing is quick: the exponent tells you which number is larger before you look at anything else. Multiplying and dividing are quick too, because you work on the coefficients and the exponents separately.</p>`,
  formal: `<p>Every nonzero real number <span class="m"><i>x</i></span> has a unique representation</p>
<div class="display"><i>x</i> = <span class="c2"><i>c</i></span> × 10<sup class="c3"><i>n</i></sup>, &nbsp; 1 ≤ |<span class="c2"><i>c</i></span>| &lt; 10, &nbsp; <span class="c3"><i>n</i></span> ∈ ℤ, &nbsp; <span class="dim"><span class="c3"><i>n</i></span> = ⌊log<sub>10</sub>|<i>x</i>|⌋</span></div>
<p>Using the laws of exponents, <span class="m">(<i>c</i><sub>1</sub> × 10<sup><i>m</i></sup>)(<i>c</i><sub>2</sub> × 10<sup><i>n</i></sup>) = <i>c</i><sub>1</sub><i>c</i><sub>2</sub> × 10<sup><i>m</i>+<i>n</i></sup></span> and <span class="m">(<i>c</i><sub>1</sub> × 10<sup><i>m</i></sup>) ÷ (<i>c</i><sub>2</sub> × 10<sup><i>n</i></sup>) = (<i>c</i><sub>1</sub>/<i>c</i><sub>2</sub>) × 10<sup><i>m</i>−<i>n</i></sup></span>, followed by renormalising the coefficient. The digits of <span class="m c2"><i>c</i></span> are the <b>significant figures</b> of the measurement, and <span class="m c3"><i>n</i></span> is its <b>order of magnitude</b>. Calculators often display <span class="m">1.496 × 10<sup>11</sup></span> as <span class="m">1.496E11</span>.</p>`,
  legend: [
    { c: "c2", sym: `<i>c</i>`, name: "Coefficient", desc: "A number with absolute value at least 1 and less than 10. Its digits are the significant figures." },
    { c: "c3", sym: `<i>n</i>`, name: "Exponent", desc: "An integer. It counts how many places the decimal point moved. Positive for large numbers, negative for small ones." },
    { c: "c1", sym: `10<sup><i>n</i></sup>`, name: "Power of ten", desc: "The scale. Each step of 1 in n is a factor of 10 on the lab's ruler." }
  ],
  steps: { title: "How to write and compute in scientific notation", items: [
    `Move the decimal point until exactly one nonzero digit is to its left. That gives the coefficient <span class="m c2"><i>c</i></span>.`,
    `Count the places moved. Moving left gives a positive <span class="m c3"><i>n</i></span>. Moving right gives a negative <span class="m c3"><i>n</i></span>.`,
    `To multiply, multiply coefficients and add exponents. To divide, divide coefficients and subtract exponents.`,
    `If the new coefficient is 10 or more, divide it by 10 and add 1 to the exponent. If it is less than 1, multiply by 10 and subtract 1.`,
    `Round the coefficient to the number of significant figures the data supports.`
  ] },
  example: {
    prompt: `Light travels about <span class="m">3.00 × 10<sup>8</sup></span> metres per second. The Sun is about <span class="m">1.496 × 10<sup>11</sup></span> metres from Earth. How long does sunlight take to reach us?`,
    lines: [
      { math: `<span class="m">time = <span class="fr"><span>distance</span><span>speed</span></span></span>`, note: "Time equals distance divided by speed." },
      { math: `<span class="m"><span class="fr"><span>1.496 × 10<sup>11</sup></span><span>3.00 × 10<sup>8</sup></span></span></span>`, note: "Set up the division." },
      { math: `<span class="m"><span class="c2">0.4987</span> × 10<sup class="c3">3</sup></span>`, note: "Divide coefficients (1.496 ÷ 3.00 ≈ 0.4987) and subtract exponents (11 − 8 = 3)." },
      { math: `<span class="m"><span class="c2">4.99</span> × 10<sup class="c3">2</sup> s</span>`, note: "Renormalise: multiply the coefficient by 10, subtract 1 from the exponent, round to 3 significant figures." },
      { math: `<span class="m">499 ÷ 60 ≈ 8.3</span> min`, note: "Convert seconds to minutes." }
    ],
    answer: `Sunlight takes about <span class="m">4.99 × 10<sup>2</sup></span> seconds, a little over 8 minutes, to reach Earth.`
  },
  why: `<p>When a number has many zeros, the zeros are where mistakes hide. A dose in micrograms read as milligrams, or a budget figure read in millions instead of billions, is off by a factor of a thousand. Scientific notation puts the scale in one place, the exponent, so you can check it at a glance and compare two numbers by their exponents first.</p>
<p>It also shows precision. Writing <span class="m">1.50 × 10<sup>3</sup></span> says a measurement is good to three significant figures, which 1500 cannot say. Calculators, spreadsheets and computers all use the idea. They display 6.02E23 for <span class="m">6.02 × 10<sup>23</sup></span>, and they store numbers in a binary version called floating point.</p>
<p>Later math builds directly on it. Logarithms are the exponent part of scientific notation, and they run the pH scale in chemistry, decibels in acoustics and earthquake magnitude scales. Metric prefixes such as kilo, mega, micro and nano are names for powers of ten.</p>`,
  careers: [
    { role: "Chemist", use: "Converts between grams and numbers of particles using Avogadro's number, 6.022 × 10²³ per mole." },
    { role: "Astronomer", use: "Works with distances like 9.46 × 10¹⁵ m per light-year and stellar masses around 10³⁰ kg." },
    { role: "Microbiologist", use: "Reports bacterial counts from serial dilutions, such as 2.4 × 10⁷ colony-forming units per millilitre." },
    { role: "Electrical engineer", use: "Specifies components in picofarads and nanoseconds, which are 10⁻¹² F and 10⁻⁹ s." },
    { role: "Software engineer", use: "Chooses between floating-point types knowing a 64-bit double has about 15 to 17 significant decimal digits." },
    { role: "Environmental scientist", use: "Records pollutant concentrations such as 3.5 × 10⁻⁶ g per litre." }
  ],
  life: [
    "Reading a calculator result shown as 6.02E23",
    "Comparing the national debt in trillions to a household budget",
    "Understanding file and storage sizes in gigabytes and terabytes",
    "Making sense of distances and sizes in science news",
    "Checking a dose written in micrograms"
  ],
  fields: [
    { name: "Physics", use: "Physical constants such as Planck's constant, 6.626 × 10⁻³⁴ J·s, are routinely written this way." },
    { name: "Chemistry", use: "Moles, concentrations and equilibrium constants span many orders of magnitude." },
    { name: "Computer science", use: "IEEE 754 floating point stores a sign, significand and exponent, a base-2 scientific notation." },
    { name: "Astronomy", use: "Distances, masses and luminosities are handled almost entirely in powers of ten." }
  ],
  layers: {
    nudge: "Not yet. Count every place the point moves, digits and zeros alike.",
    concept: {
      lede: `Some numbers have too many zeros to read safely. Scientific notation writes them as a short number times a power of ten, so the size sits in one small number, the exponent.`,
      heading: "What is scientific notation?",
      question: { text: "How big, or how small?", sub: `The model above is a ruler where each tick is ten times the last. Drag it from a proton to the whole universe and watch the exponent change.`,
        figure: { sym: `<i>n</i>`, value: "0", cap: "the exponent", echo: "exp" } },
      ideasTitle: "Three ideas, all in the model",
      objects: ["metre", "metres", "place", "places", "zero", "zeros", "grain", "grains", "molecules", "colonies", "microseconds", "micrograms", "light-years"],
      walk: { title: "Write it together: the distance to the Sun",
        lead: `One situation, step by step. Try each question before you show the next line.`,
        prompt: `Earth is about 149,600,000,000 metres from the Sun. That's a lot of zeros to copy. Write it in scientific notation.`,
        demo: { kind: "line", from: 0, to: 12, start: 0, jumps: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], unit: "place", cap: "places moved", alt: "A dot starts at 0 and hops one step for each place the decimal point moves, eleven hops in all, and lands on 11, the exponent." },
        lines: [
          { math: `149,600,000,000 m`, note: `Here is the distance. It has 12 digits. Drop one zero and you are ten times off.`, frame: 0 },
          { math: `<span class="c2">1.496</span>`, note: `Move the decimal point left until one digit sits in front of it. This short number is the coefficient.`, frame: 0 },
          { math: `+1, +1, +1, … 11 places`, note: `Count each place the point moved past. It moved past 4, 9, 6 and eight zeros: 11 places.`, frame: 12 },
          { math: `<span class="c2">1.496</span> × 10<sup class="c3">11</sup> m`, note: `The count of places becomes the exponent. The number is now short, and its size is in one spot.`, frame: 12 },
          { math: `8 zeros → 1.496 × 10<sup>8</sup> m ✗`, note: `A shortcut counts only the zeros: 8. But 1.496 × 10<sup>8</sup> m is 149,600,000 m. That's 1,000 times too small, less than halfway to the Moon.`, frame: 8 },
          { math: `1.496 × 100,000,000,000 = 149,600,000,000`, note: `Check it. Move the point 11 places back to the right, and you get the distance you started with.`, frame: 12 }
        ],
        predict: [null,
          { ask: `Where should the decimal point go?`, choices: [
            { t: "1.496, with one digit in front", ok: true },
            { t: "14.96", why: "Two digits sit in front of the point. The coefficient has to be less than 10." },
            { t: "0.1496", why: "No digit sits in front of the point. The coefficient has to be at least 1." }
          ], hint: `The coefficient is at least 1 and less than 10.` },
          { ask: `From 149,600,000,000 to 1.496, how many places did the point move?`, parts: [{ label: "places", ans: 11 }], hint: `Count every digit after the 1: the 4, the 9, the 6 and all the zeros.` },
          null,
          { ask: `A friend counts the zeros and writes 1.496 × 10<sup>8</sup>. What went wrong?`, choices: [
            { t: "The 4, 9 and 6 are places too", ok: true },
            { t: "Zeros should not be counted at all", why: "The zeros are places the point moves past. They count, along with the other digits." },
            { t: "Nothing, 10⁸ is right", why: "1.496 × 10⁸ is 149,600,000. That is three places short, 1,000 times too small." }
          ], hint: `The exponent counts places the point moves, and every digit after the 1 is a place.` },
          { ask: `10<sup>11</sup> written out is a 1 followed by how many zeros?`, parts: [{ label: "zeros", ans: 11 }], hint: `10<sup>2</sup> = 100 has 2 zeros. 10<sup>3</sup> = 1,000 has 3.` }],
        answer: `Earth is about <span class="m"><span class="c2">1.496</span> × 10<sup class="c3">11</sup></span> metres from the Sun.` },
      ideas: [
        { c: "c2", title: "One digit before the point", term: "coefficient", text: `Slide the point until one nonzero digit is in front. The number you get is at least 1 and less than 10.`,
          demo: { kind: "line", from: 0, to: 10, tick: 1, points: [{ v: 1, c: "c1", label: "1", below: true }, { v: 2.5, c: "c2", label: "2.5" }, { v: 10, c: "c1", label: "10", below: true }], alt: "A number line from 0 to 10 marks 1 and 10. The coefficient 2.5 sits between them, at least 1 and less than 10." },
          try: { label: "Jump to the blue whale", lab: "jump:9" } },
        { c: "c3", title: "Count the places moved", term: "exponent", text: `Each place the point moves is one factor of ten. Mount Everest, 8,849 m, moves three places: 8.849 × 10³.`,
          demo: { kind: "line", from: 0, to: 4, tick: 1, start: 0, jumps: [1, 1, 1], unit: "place", cap: "the exponent", alt: "A dot hops three times, once for each place the point moves in 8,849, and lands on 3, the exponent." },
          try: { label: "Jump to Mount Everest", lab: "jump:11" } },
        { c: "c3", title: "Small numbers go below zero", term: "negative exponent", text: `A grain of sand, 0.0005 m, needs the point moved four places right. That makes the exponent −4: 5 × 10⁻⁴.`,
          demo: { kind: "line", from: -5, to: 1, tick: 1, start: 0, jumps: [-1, -1, -1, -1], unit: "place", cap: "the exponent", alt: "A dot hops four steps left from 0, once for each place the point moves in 0.0005, and lands on −4." },
          try: { label: "Jump to a grain of sand", lab: "jump:6" } }
      ],
      timelineTitle: "People have written huge numbers this way for over 2,000 years",
      timelineLead: `Each step made the ruler in the model easier to read: group by powers, write the power small and raised, then let machines print it with an E.`,
      timeline: [
        { when: "3rd century BCE", what: `Archimedes groups numbers in "orders" of 10<sup>8</sup> and counts the grains of sand that would fill the universe: no more than 10<sup>63</sup>.` },
        { when: "1637", what: `René Descartes writes powers with a small raised number in <i>La Géométrie</i>. That raised number is the pink exponent in the model.` },
        { when: "1956", what: `The first version of Fortran, for the IBM 704 computer, writes 1.496 × 10<sup>11</sup> as 1.496E11.` },
        { when: "1972", what: `The first pocket calculators that show scientific notation go on sale.` }
      ],
      history: `<p><b>The problem.</b> People who studied the sky needed numbers larger than ordinary words could name. The Greek number names ran out at a myriad, 10,000. In <i>The Sand Reckoner</i>, written in the 3rd century BCE for Gelon, son of King Hiero II of Syracuse, Archimedes set out to show that even the grains of sand needed to fill the universe could be counted.</p>
<p><b>The solution.</b> He grouped numbers into "orders" of a myriad myriads (10<sup>8</sup>) each, so a number was named by the order it fell in, much as an exponent does today. His estimate came out at no more than 10<sup>63</sup> grains. Writing a power as a small raised number came much later: René Descartes used it in <i>La Géométrie</i> (1637). With decimals and exponents together, any number could be written as a few digits times a power of ten.</p>
<p><b>What it changed.</b> Scientists could write and compare quantities from atoms to galaxies in one line. When computers arrived, the form went into programming. The first version of Fortran, released for the IBM 704 in 1956, wrote it with an E, as in 1.496E11, and the first pocket calculators with scientific notation appeared in 1972. That E is what a spreadsheet shows today when a cell is too narrow for a large number.</p>`,
      sources: [
        { title: "The Sand Reckoner (Wikipedia)", url: "https://en.wikipedia.org/wiki/The_Sand_Reckoner" },
        { title: "Archimedes of Syracuse (MacTutor, University of St Andrews)", url: "https://mathshistory.st-andrews.ac.uk/Biographies/Archimedes/" },
        { title: "La Géométrie (Wikipedia)", url: "https://en.wikipedia.org/wiki/La_G%C3%A9om%C3%A9trie" },
        { title: "Scientific notation (Wikipedia)", url: "https://en.wikipedia.org/wiki/Scientific_notation" }
      ],
      matters: { title: "Why the exponent comes first", text: `<p>When a number has many zeros, the zeros are where mistakes hide. Scientific notation puts the whole size in <b>one small number</b> you can check at a glance.</p><ul class="why-chips"><li><b>Compare</b> by the exponent first</li><li><b>Multiply</b> by adding exponents</li><li><b>Show</b> how precise a measurement is</li></ul><p>A slip of one in the exponent is a <b>factor of ten</b>. A slip of three is a factor of a thousand, the gap between a milligram and a microgram.</p>` },
      stakes: { title: "Where scientific notation goes wrong", lead: `Almost every slip is in the exponent, and each step of one is ten times off.`, items: [
        { role: "Counting zeros", text: `149,600,000,000 m written as 1.496 × 10<sup>8</sup>. The 4, 9 and 6 were not counted, so the Sun lands closer than the Moon.` },
        { role: "Pharmacy", text: `A dose in micrograms read as milligrams. The exponent is off by 3, a thousand times the dose.` },
        { role: "Budget", text: `A figure in millions read as billions, 10<sup>6</sup> for 10<sup>9</sup>.` },
        { role: "Calculator", text: `Typing 3 × 10 EE 8 gives 3 × 10<sup>9</sup>. The EE key already means "times ten to the".` }
      ], try: { label: "Jump to Earth to Moon", lab: "jump:13" } },
      examplesTitle: "Where you will meet it",
      examples: [
        { role: "Chemist", figure: "3.011 × 10²³ molecules", scene: `How many molecules are in 0.5 mol of water? Multiply by Avogadro's number: <span class="m">0.5 × 6.022 × 10<sup>23</sup> = 3.011 × 10<sup>23</sup></span> molecules.`, takeaway: "Avogadro's number turns a lab amount into a count of particles, and the exponent keeps the zeros under control." },
        { role: "Astronomer", figure: "4.01 × 10¹⁶ m", try: { label: "Jump to one light-year", lab: "jump:16" }, scene: `Proxima Centauri, the nearest star after the Sun, is about 4.24 light-years away. A light-year is about 9.46 × 10<sup>15</sup> m, so <span class="m">4.24 × 9.46 × 10<sup>15</sup> ≈ 4.01 × 10<sup>16</sup></span> m.`, takeaway: "Distances in space only fit on a page in this form." },
        { role: "Microbiologist", figure: "2.4 × 10⁸ per mL", scene: `A sample diluted to <span class="m">10<sup>−6</sup></span> is spread on a plate, 0.1 mL at a time, and grows 24 colonies. Count in the original: <span class="m">24 ÷ (0.1 × 10<sup>−6</sup>) = 2.4 × 10<sup>8</sup></span> colony-forming units per mL.`, takeaway: "Each dilution step is a power of ten, so the exponent tracks the whole dilution series." },
        { role: "Electrical engineer", figure: "10⁻⁶ s", scene: `A 10 kΩ resistor with a 100 pF capacitor has time constant <span class="m">(1 × 10<sup>4</sup>)(1 × 10<sup>−10</sup>) = 1 × 10<sup>−6</sup></span> s, one microsecond.`, takeaway: "Adding exponents is faster and safer than counting zeros across unit prefixes." },
        { role: "Software engineer", figure: "1.8 × 10³⁰⁸", scene: `A 64-bit floating-point number tops out near <span class="m">1.8 × 10<sup>308</sup></span>. Multiplying <span class="m">10<sup>200</sup></span> by <span class="m">10<sup>200</sup></span> would give <span class="m">10<sup>400</sup></span>, which does not fit, so the program gets infinity.`, takeaway: "Knowing the exponent range tells you when a calculation will overflow." },
        { role: "Environmental scientist", figure: "7 micrograms", scene: `A water sample holds <span class="m">3.5 × 10<sup>−6</sup></span> g of a pollutant per litre. A 2-litre sample holds <span class="m">2 × 3.5 × 10<sup>−6</sup> = 7 × 10<sup>−6</sup></span> g, which is 7 micrograms.`, takeaway: "A metric prefix such as micro is a power of ten, so converting units is a shift of the exponent." }
      ]
    },
    build: {
      lede: `Move the point until one nonzero digit sits in front, count the moves as the exponent, and when you calculate, work the coefficients and exponents apart, then tidy up.`,
      task: { text: "Write it short, and keep the size right.", sub: `The same five moves work for a proton, a paycheck or a galaxy. Try each one in the model above as you go.`,
        figure: { sym: `<i>n</i>`, value: "0", cap: "in the model", echo: "exp" },
        jump: [{ label: "The method", to: "b-method" }, { label: "Everyday tasks", to: "b-tasks" }] },
      keysTitle: "What the model shows",
      intro: `<p>The model above is a ruler of powers of ten. Each tick is ten times the one before, so a proton and the whole universe fit on one line. Drag the slider, jump to an object or type a number in Convert. The readout shows the <span class="c2">coefficient</span>, the <span class="c3">exponent</span> and the number written out, and names the nearest landmark.</p>`,
      keyTry: [{ label: "Jump to the blue whale", lab: "jump:9" }, { label: "Jump to a hydrogen atom", lab: "jump:1" }, { label: "Jump to Earth", lab: "jump:12" }],
      objects: ["place", "places", "dollar", "dollars", "photo", "photos", "byte", "bytes", "metre", "metres", "sheet", "sheets", "laps", "second", "seconds", "microgram", "micrograms", "milligram", "milligrams"],
      goalsIntro: `Three of the steps have a move for you to make in the model. Type the number in <b>Convert</b> or drag the slider, then press <b>Check my move</b>. A move also ticks itself off as soon as the model shows it.`,
      stepWhy: [
        `Keeping the coefficient between 1 and 10 gives every number exactly one way to be written. Two people writing the same number get the same answer.`,
        `Each place the point moves is a factor of ten. Moving it left makes the coefficient smaller, so the power of ten must grow by the same factor to keep the value. Moving it right does the opposite.`,
        `You can multiply in any order and grouping, so coefficients and powers of ten can be gathered apart. The rules <span class="m">10<sup><i>m</i></sup> × 10<sup><i>n</i></sup> = 10<sup><i>m</i>+<i>n</i></sup></span> and <span class="m">10<sup><i>m</i></sup> ÷ 10<sup><i>n</i></sup> = 10<sup><i>m</i>−<i>n</i></sup></span> do the rest.`,
        `Dividing the coefficient by 10 and multiplying the power of ten by 10 multiplies the number by 1. Its value stays the same. Only the form is fixed.`,
        `A result can't be more precise than the data it came from. Extra digits in the coefficient would claim accuracy you don't have.`
      ],
      stepTry: [{ label: "Jump to Earth to Sun", lab: "jump:15" }, null, null, null, { label: "Jump to Earth", lab: "jump:12" }],
      stepGoal: [null,
        { key: "exp", eq: -6, text: `A bacterium is about 0.000002 m long. Type 0.000002 in <b>Convert</b>, or drag the slider there. Which way did the point move, and how far?`, after: `Six places right, so the exponent is negative: <span class="m">2 × 10<sup class="c3">−6</sup></span> m.`, notYet: `Not yet. Count the places: the point moves right past five zeros and the 2. That is 6 places, so the exponent is −6.` },
        { key: "exp", eq: -1, text: `A stack of 5,000 sheets of paper, each <span class="m">1 × 10<sup>−4</sup></span> m thick. Multiply, then show the height of the stack in the model.`, after: `<span class="m">(5 × 10<sup>3</sup>)(1 × 10<sup>−4</sup>) = 5 × 10<sup class="c3">−1</sup></span> m, which is 0.5 m.`, notYet: `Not yet. Multiply 5 × 1 = 5, then add the exponents: 3 + (−4) = −1. Type 0.5 in Convert.` },
        { key: "exp", eq: 4, text: `You run 30 laps of a 400 m track: <span class="m">(3 × 10<sup>1</sup>)(4 × 10<sup>2</sup>) = 12 × 10<sup>3</sup></span> m. Fix the coefficient, then show the distance in the model.`, after: `12 is too big for a coefficient: <span class="m">12 × 10<sup>3</sup> = 1.2 × 10<sup class="c3">4</sup></span> m, or 12,000 m.`, notYet: `Not yet. Divide 12 by 10 and add 1 to the exponent. Type 12000 in Convert.` },
        null],
      matters: { title: "Why a Method Beats Counting Zeros", text: `<p>Counting zeros works until a number has other digits, or a decimal point, or two numbers meet in one sum. Then the zeros stop telling the truth.</p><ul class="why-chips"><li><b>Long</b> numbers</li><li><b>Tiny</b> numbers</li><li><b>Mixed</b> units</li></ul><p>The method <b>counts every place the point moves</b>, and keeps coefficients and exponents apart. Then you can check every step by moving the point back.</p>` },
      bridge: `<p>The distance to the Sun used the habit that matters most: count every place the point moves, digits and zeros alike. Here is where the same moves show up.</p>`,
      tasksTitle: "Everyday tasks: solve them",
      tasks: [
        { task: "Reading a calculator or spreadsheet result like 2.5E+06", check: { q: `A spreadsheet shows the cost of a new clinic as 2.5E+06. How many dollars is that?`, parts: [{ label: "dollars", ans: 2500000 }], hint: `E means "times ten to the". Move the point 6 places right.` }, figure: "2.5E+06",
          demo: { kind: "line", from: 0, to: 7, tick: 1, start: 0, jumps: [1, 1, 1, 1, 1, 1], unit: "place", cap: "places right", alt: "A dot hops six steps right, one for each place the point moves in 2.5E+06, and lands on 6." },
          lines: [{ math: `2.5E+06 = 2.5 × 10<sup>6</sup>`, note: "E means times ten to the." }, { math: `6 places right`, note: "A positive exponent moves the point right to write the number out." }, { math: `2,500,000 dollars`, note: "Fill the empty places with zeros." }],
          predict: [null, { ask: `How many places does the point move to the right?`, parts: [{ label: "places", ans: 6 }], hint: `The exponent tells you.` }, null], link: `This is step 2 run backward, the same check as the last line of the Sun walk on the Concept tab.` },
        { task: "Comparing a national budget with a household budget", check: { q: `A national budget is about $6.8 × 10<sup>12</sup>. A household spends about $6.8 × 10<sup>4</sup> a year. How many powers of ten apart are they?`, parts: [{ label: "powers of ten", ans: 8 }], hint: `The coefficients match, so subtract the exponents.` }, figure: "10⁸ times",
          demo: { kind: "line", from: 0, to: 14, tick: 2, points: [{ v: 4, c: "c3", label: "home" }, { v: 12, c: "c3", label: "nation" }], show: "dist", cap: "powers of ten apart", alt: "Exponent 4 for the household and 12 for the nation are marked on a line; the bracket between them shows 8." },
          lines: [{ math: `12 − 4 = 8`, note: "Same coefficient, so only the exponents differ." }, { math: `10<sup>8</sup> = 100,000,000`, note: "Eight factors of ten." }, { math: `nation = 100,000,000 × household`, note: "The nation spends a hundred million times as much." }],
          predict: [null, { ask: `What is 10<sup>8</sup> written out?`, parts: [{ label: "10⁸", ans: 100000000 }], hint: `A 1 followed by 8 zeros.` }, null], link: `Compare exponents first (step 3, dividing), the way 10<sup>11</sup> and 10<sup>8</sup> showed the zero-counting slip was 1,000 times off.` },
        { task: "Counting how many 5 MB photos fit on a 1 TB drive", check: { q: `A 1 TB drive holds 10<sup>12</sup> bytes. Each photo is 5 MB, or 5 × 10<sup>6</sup> bytes. How many photos fit?`, parts: [{ label: "photos", ans: 200000 }], hint: `Divide coefficients (1 ÷ 5), subtract exponents, then fix the coefficient.` }, figure: "2 × 10⁵",
          demo: { kind: "columns", n: 200000, alt: "Place-value columns fill in for 200,000: a 2 in the hundred-thousands column and zeros in the rest." },
          lines: [{ math: `10<sup>12</sup> ÷ (5 × 10<sup>6</sup>)`, note: "Write 1 TB as 1 × 10¹² bytes." }, { math: `(1 ÷ 5) × 10<sup>12 − 6</sup> = 0.2 × 10<sup>6</sup>`, note: "Divide the coefficients and subtract the exponents." }, { math: `2 × 10<sup>5</sup> = 200,000 photos`, note: "0.2 is less than 1: multiply it by 10 and take 1 off the exponent." }],
          predict: [null, { ask: `What is 1 ÷ 5?`, parts: [{ label: "1 ÷ 5", ans: 0.2 }], hint: `One dollar split five ways is 20 cents.` }, null], link: `Steps 3 and 4: divide, then fix a coefficient that fell below 1.` },
        { task: "Checking a dose written in micrograms", check: { q: `A label says 250 µg. The order is written in milligrams, and 1 mg = 1,000 µg. How many milligrams is 250 µg?`, parts: [{ label: "mg", ans: 0.25 }], hint: `Write 250 as 2.5 × 10<sup>2</sup>, then divide by 10<sup>3</sup>.` }, figure: "0.25 mg",
          demo: { kind: "line", from: -2, to: 3, tick: 1, start: 2, jumps: [-3], cap: "exponent in mg", alt: "A dot starts at exponent 2 and hops 3 steps left to −1: dividing by 1,000 takes 3 off the exponent." },
          lines: [{ math: `250 µg = 2.5 × 10<sup>2</sup> µg`, note: "Write the dose in scientific notation." }, { math: `2.5 × 10<sup>2 − 3</sup> = 2.5 × 10<sup>−1</sup> mg`, note: "Dividing by 1,000 takes 3 off the exponent." }, { math: `2.5 × 10<sup>−1</sup> = 0.25 mg`, note: "A negative exponent moves the point left." }],
          predict: [null, { ask: `What is 2 − 3?`, parts: [{ label: "exponent", ans: -1 }], hint: `Start at 2 and count back 3.` }, null], link: `A slip of 3 in the exponent is a thousandfold error, the pharmacy slip from the Concept tab.` },
        { task: "Making sense of distances in science news", check: { q: `Light travels about 3.0 × 10<sup>8</sup> m each second. The Moon is about 3.84 × 10<sup>8</sup> m away. How many seconds does moonlight take to reach you?`, parts: [{ label: "seconds", ans: 1.28 }], hint: `The exponents are the same, so divide the coefficients.` }, figure: "1.28 s",
          demo: { kind: "bar", parts: [3.0, 0.84], labels: ["1 second", "a bit more"], cap: "× 10⁸ m to the Moon", alt: "A bar shows the Moon distance, 3.84 × 10⁸ m, as one second of light travel, 3.0, plus 0.84 more." },
          lines: [{ math: `(3.84 × 10<sup>8</sup>) ÷ (3.0 × 10<sup>8</sup>)`, note: "Time is distance divided by speed." }, { math: `(3.84 ÷ 3.0) × 10<sup>8 − 8</sup> = 1.28 × 10<sup>0</sup>`, note: "Divide the coefficients and subtract the exponents." }, { math: `10<sup>0</sup> = 1, so 1.28 seconds`, note: "The powers of ten cancel." }],
          predict: [null, { ask: `What is 8 − 8, the new exponent?`, parts: [{ label: "exponent", ans: 0 }], hint: `Same exponent on top and bottom.` }, null], try: { label: "Jump to Earth to Moon", lab: "jump:13" }, link: `Step 3 again. The Moon is 3.84 × 10<sup>8</sup> m away, so the zero-counting slip from the Sun walk would put the Sun near the Moon.` }
      ]
    },
    formal: {
      question: { text: "How is a number written in scientific notation?", sub: `You can write a number short and keep its size right. Here are the words a textbook uses for the same ideas, and how to write a calculation out in full.`,
        figure: { sym: `<i>n</i>`, value: "0", cap: "the exponent", echo: "exp" },
        jump: [{ label: "Vocabulary", to: "f-vocab" }, { label: "Where it goes wrong", to: "f-mist" }, { label: "Writing it out", to: "f-setup" }, { label: "Practice", to: "f-prac" }] },
      vocabTitle: "From your words to the textbook's",
      vocabIntro: `<p>Each card is an idea you already used in the Concept and Intermediate tabs, with its proper name and its exact meaning.</p>`,
      vocab: [
        { c: "c2", sym: `<i>c</i>`, term: "Coefficient (significand)", def: `The factor <i>c</i> in <span class="m"><i>c</i> × 10<sup><i>n</i></sup></span>, required to satisfy <span class="m">1 ≤ |<i>c</i>| &lt; 10</span>.`, was: "the short number with one digit before the point" },
        { c: "c3", sym: `<i>n</i>`, term: "Exponent", def: `The integer <i>n</i> in <span class="m"><i>c</i> × 10<sup><i>n</i></sup></span>. For <span class="m"><i>x</i> ≠ 0</span>, <span class="m"><i>n</i> = ⌊log<sub>10</sub>|<i>x</i>|⌋</span>.`, was: "the number of places the point moved" },
        { c: "c1", sym: `10<sup><i>n</i></sup>`, term: "Integer power of ten", def: `<span class="m">10<sup><i>n</i></sup></span> is the product of <i>n</i> factors of 10 for <span class="m"><i>n</i> &gt; 0</span>, equals 1 for <span class="m"><i>n</i> = 0</span>, and equals <span class="m">1/10<sup>−<i>n</i></sup></span> for <span class="m"><i>n</i> &lt; 0</span>.`, was: "one tick on the ruler" },
        { c: "c2", sym: `<i>c</i> × 10<sup><i>n</i></sup>`, term: "Normalised form", def: `The unique representation of a nonzero real number with <span class="m">1 ≤ |<i>c</i>| &lt; 10</span> and <span class="m"><i>n</i> ∈ ℤ</span>. Called standard form in the UK.`, was: "writing it short" },
        { c: "c3", sym: `⌊log<sub>10</sub>|<i>x</i>|⌋`, term: "Order of magnitude", def: `The exponent of <i>x</i> in normalised form. Two quantities whose orders differ by <i>k</i> differ by a factor of roughly 10<sup><i>k</i></sup>.`, was: "how many powers of ten apart" },
        { c: "c2", sym: `4.99`, term: "Significant figures", def: `The digits of the coefficient that the measurement supports. A product or quotient keeps the fewest significant figures among its factors.`, was: "rounding to what the data supports" },
        { c: "c1", sym: `1.496E11`, term: "E notation", def: `Machine notation for <span class="m"><i>c</i> × 10<sup><i>n</i></sup></span>, written <i>c</i>E<i>n</i>, used by calculators, spreadsheets and programming languages.`, was: "the E on a calculator" }
      ],
      matters: { title: "Why the exact words matter", text: `<p>In a US textbook, <b>standard form</b> means the number written out in full. In the UK it means <b>scientific notation</b>. The same instruction asks for opposite answers.</p><ul class="why-chips"><li>Write 1.496 × 10<sup>11</sup> in standard form</li><li><b>US:</b> 149,600,000,000</li><li><b>UK:</b> 1.496 × 10<sup>11</sup></li></ul><p>Exact words, such as <b>normalised form</b> or <b>written out</b>, let you read any book and write an answer <b>someone else can check</b>.</p>` },
      mistakesTitle: "Where formal answers go wrong",
      mistakesLead: `Most wrong answers have the right digits and the wrong exponent: a coefficient left outside 1 to 10, a sign flipped, or zeros counted instead of places.`,
      setupIntro: `<p>The distance to the Sun from the Concept tab, used the way a textbook would: how long does sunlight take to reach Earth?</p>`,
      setup: { title: "Writing a scientific-notation calculation", items: [
        { say: `<b>Name the quantities.</b> Give each a letter, a value in normalised form and a unit.`, math: `<span class="m"><i>d</i> = 149,600,000,000 = 1.496 × 10<sup>11</sup></span> m, &nbsp;<span class="m"><i>v</i> = 3.00 × 10<sup>8</sup></span> m/s` },
        { say: `<b>Write the equation.</b> The unknown time gets its own letter.`, math: `<span class="m"><i>t</i> = <span class="fr"><span><i>d</i></span><span><i>v</i></span></span></span>` },
        { say: `<b>Justify the method.</b> Regroup the quotient and apply the law of exponents for division.`, math: `<span class="m"><i>t</i> = <span class="fr"><span>1.496</span><span>3.00</span></span> × 10<sup>11 − 8</sup> ≈ <span class="c2">0.4987</span> × 10<sup class="c3">3</sup></span>` },
        { say: `<b>Renormalise and round.</b> Bring the coefficient back to at least 1 and round to the 3 significant figures of the data.`, math: `<span class="m">0.4987 × 10<sup>3</sup> = 4.987 × 10<sup>2</sup> ≈ <span class="c2">4.99</span> × 10<sup class="c3">2</sup></span> s` },
        { say: `<b>Answer in a sentence with units.</b> Convert to a unit people can picture.`, math: `<span class="m">499 ÷ 60 ≈ 8.3</span> &nbsp;→ Sunlight takes about 8.3 minutes to reach Earth.` }
      ] },
      practiceTip: `Type your answer and press Check. Work it the formal way: normalise each number, combine coefficients and exponents, renormalise and round. Stuck? Each one has a hint.`,
      practiceDone: "All 5 solved. You can write and compute in scientific notation the formal way.",
      checks: [
        { hint: `Move the point left until one nonzero digit is in front of it, and count the places.`, parts: [{ label: "coefficient", ans: 4.5 }, { label: "exponent", ans: 7 }] },
        { hint: `The number is less than 1, so the point moves right and the exponent is negative.`, parts: [{ label: "coefficient", ans: 3.2 }, { label: "exponent", ans: -4 }] },
        { hint: `Multiply 3 × 4 and add 5 + (−2), then renormalise the coefficient.`, parts: [{ label: "coefficient", ans: 1.2 }, { label: "exponent", ans: 4 }] },
        { hint: `Divide 6.3 by 9 and subtract 8 − 3, then renormalise and write it out.`, parts: [{ label: "dollars", ans: 70000 }] },
        { hint: `Let <i>d</i> = (2.0 × 10<sup>3</sup>)(9.46 × 10<sup>15</sup>). Multiply, add exponents, renormalise, round to 2 significant figures.`, parts: [{ label: "coefficient", ans: 1.9 }, { label: "exponent", ans: 19 }] }
      ]
    }
  },
  prereqWhy: {
    "exponents": "You need to know what 10<sup>n</sup> means, including negative exponents, and the rules for multiplying and dividing powers.",
    "decimals": "Writing the coefficient means moving a decimal point and understanding place value to the right of the point."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Algebra II", why: "Logarithms and exponential functions generalise the exponent part of scientific notation." },
    { field: "Numerical analysis", why: "Floating-point error and significant-figure precision are studied through normalised scientific representations." }
  ],
  mistakes: [
    { wrong: `Counting only the zeros: <span class="m">149,600,000,000 = 1.496 × 10<sup>8</sup></span>.`, fix: `The exponent counts every place the point moves, digits and zeros: <span class="m">1.496 × 10<sup>11</sup></span>. Check by moving the point back.` },
    { wrong: `Writing <span class="m">45 × 10<sup>6</sup></span> and calling it scientific notation.`, fix: `The coefficient must be at least 1 and less than 10: <span class="m">4.5 × 10<sup>7</sup></span>.` },
    { wrong: `Getting the sign of the exponent backwards: <span class="m">0.00032 = 3.2 × 10<sup>4</sup></span>.`, fix: `Small numbers have negative exponents: <span class="m">3.2 × 10<sup>−4</sup></span>.` },
    { wrong: `Multiplying the exponents: <span class="m">10<sup>5</sup> × 10<sup>−2</sup> = 10<sup>−10</sup></span>.`, fix: `Add the exponents when multiplying powers of the same base: <span class="m">10<sup>5 + (−2)</sup> = 10<sup>3</sup></span>.` },
    { wrong: `Typing <span class="m">3 × 10<sup>8</sup></span> into a calculator as 3 × 10 EE 8, which gives <span class="m">3 × 10<sup>9</sup></span>.`, fix: `The EE (or EXP) key already means "times ten to the". Type 3 EE 8.` }
  ],
  practice: [
    { ctx: "Budget", q: `A city's annual budget is $45,000,000. Write it in scientific notation.`, a: `Move the point 7 places left: <span class="m">$4.5 × 10<sup>7</sup></span>` },
    { ctx: "Nature", q: `A grain of sand is about 0.00032 m across. Write that in scientific notation.`, a: `Move the point 4 places right: <span class="m">3.2 × 10<sup>−4</sup></span> m. The coefficient is <b>3.2</b> and the exponent is <b>−4</b>.` },
    { ctx: "Data", q: `A website serves <span class="m">3 × 10<sup>5</sup></span> pages a day, and each page is <span class="m">4 × 10<sup>−2</sup></span> megabytes. How much data does it send per day?`, a: `<span class="m">(3 × 10<sup>5</sup>)(4 × 10<sup>−2</sup>) = 12 × 10<sup>3</sup> = 1.2 × 10<sup>4</sup></span> megabytes` },
    { ctx: "Grants", q: `A fund of <span class="m">$6.3 × 10<sup>8</sup></span> is shared equally among <span class="m">9 × 10<sup>3</sup></span> schools. How much does each school get?`, a: `<span class="m">0.7 × 10<sup>5</sup> = 7 × 10<sup>4</sup></span>, so $70,000 each` },
    { ctx: "Astronomy", q: `Write an equation with a letter for the unknown, then solve: a light-year is about <span class="m">9.46 × 10<sup>15</sup></span> m. How many metres <i>d</i> are in <span class="m">2.0 × 10<sup>3</sup></span> light-years?`, a: `<span class="m"><i>d</i> = (2.0 × 10<sup>3</sup>)(9.46 × 10<sup>15</sup>) = 18.92 × 10<sup>18</sup> = 1.892 × 10<sup>19</sup></span>, so <b>about 1.9 × 10<sup>19</sup> m</b> to 2 significant figures: coefficient <b>1.9</b>, exponent <b>19</b>.` }
  ],
  origin: `In <i>The Sand Reckoner</i> (3rd century BCE), Archimedes built a system for naming very large numbers and estimated that fewer than 10<sup>63</sup> grains of sand would fill the universe as he pictured it. The modern form relies on exponent notation, which Descartes popularised in <i>La Géométrie</i> (1637).`
};
