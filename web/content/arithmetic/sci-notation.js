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
    "Making sense of distances and sizes in science news"
  ],
  fields: [
    { name: "Physics", use: "Physical constants such as Planck's constant, 6.626 × 10⁻³⁴ J·s, are routinely written this way." },
    { name: "Chemistry", use: "Moles, concentrations and equilibrium constants span many orders of magnitude." },
    { name: "Computer science", use: "IEEE 754 floating point stores a sign, significand and exponent, a base-2 scientific notation." },
    { name: "Astronomy", use: "Distances, masses and luminosities are handled almost entirely in powers of ten." }
  ],
  layers: {
    concept: {
      lede: `Scientific notation answers one question: how do you write, read and compare numbers that have too many zeros to count? It puts the size of a number in a single exponent.`,
      history: `<p><b>The problem.</b> People who studied the sky needed numbers larger than ordinary words could name. Greek numerals had names only up to a myriad, 10,000. In <i>The Sand Reckoner</i>, written in the 3rd century BCE for Gelon, son of King Hiero II of Syracuse, Archimedes set out to show that even the grains of sand needed to fill the universe could be counted.</p>
<p><b>The solution.</b> He grouped numbers into "orders" of a myriad myriads (10<sup>8</sup>) each, so a number was named by the order it fell in, much as an exponent does today. His estimate came out at no more than 10<sup>63</sup> grains. Writing a power as a small raised number came much later: René Descartes used it in <i>La Géométrie</i> (1637). With decimals and exponents together, any number could be written as a few digits times a power of ten.</p>
<p><b>What it changed.</b> Scientists could write and compare quantities from atoms to galaxies in one line. When computers arrived, the form went into programming. The first version of Fortran, released for the IBM 704 in 1956, wrote it with an E, as in 1.496E11, and the first pocket calculators with scientific notation appeared in 1972. That E is what a spreadsheet shows today when a cell is too narrow for a large number.</p>`,
      sources: [
        { title: "The Sand Reckoner (Wikipedia)", url: "https://en.wikipedia.org/wiki/The_Sand_Reckoner" },
        { title: "La Géométrie (Wikipedia)", url: "https://en.wikipedia.org/wiki/La_G%C3%A9om%C3%A9trie" },
        { title: "Scientific notation (Wikipedia)", url: "https://en.wikipedia.org/wiki/Scientific_notation" }
      ],
      examples: [
        { role: "Chemist", scene: `How many molecules are in 0.5 mol of water? Multiply by Avogadro's number: <span class="m">0.5 × 6.022 × 10<sup>23</sup> = 3.011 × 10<sup>23</sup></span> molecules.`, takeaway: "Avogadro's number turns a lab amount into a count of particles, and the exponent keeps the zeros under control." },
        { role: "Astronomer", scene: `Proxima Centauri, the nearest star after the Sun, is about 4.24 light-years away. In metres: <span class="m">4.24 × 9.46 × 10<sup>15</sup> ≈ 4.01 × 10<sup>16</sup></span> m.`, takeaway: "Distances in space only fit on a page in this form." },
        { role: "Microbiologist", scene: `A sample diluted to <span class="m">10<sup>−6</sup></span> is spread on a plate, 0.1 mL at a time, and grows 24 colonies. Count in the original: <span class="m">24 ÷ (0.1 × 10<sup>−6</sup>) = 2.4 × 10<sup>8</sup></span> colony-forming units per mL.`, takeaway: "Each dilution step is a power of ten, so the exponent tracks the whole dilution series." },
        { role: "Electrical engineer", scene: `A 10 kΩ resistor with a 100 pF capacitor has time constant <span class="m">(1 × 10<sup>4</sup>)(1 × 10<sup>−10</sup>) = 1 × 10<sup>−6</sup></span> s, one microsecond.`, takeaway: "Adding exponents is faster and safer than counting zeros across unit prefixes." },
        { role: "Software engineer", scene: `A 64-bit floating-point number tops out near <span class="m">1.8 × 10<sup>308</sup></span>. Multiplying <span class="m">10<sup>200</sup></span> by <span class="m">10<sup>200</sup></span> would give <span class="m">10<sup>400</sup></span>, which does not fit, so the program gets infinity.`, takeaway: "Knowing the exponent range tells you when a calculation will overflow." },
        { role: "Environmental scientist", scene: `A water sample holds <span class="m">3.5 × 10<sup>−6</sup></span> g of a pollutant per litre. A 2-litre sample holds <span class="m">2 × 3.5 × 10<sup>−6</sup> = 7 × 10<sup>−6</sup></span> g, which is 7 micrograms.`, takeaway: "A metric prefix such as micro is a power of ten, so converting units is a shift of the exponent." }
      ]
    },
    build: {
      lede: `Move the decimal point until one nonzero digit sits in front of it, count the moves as the exponent, and when you calculate, handle coefficients and exponents separately, then tidy up.`,
      intro: `<p>The model above is a ruler of powers of ten. Each tick is ten times the one before, so objects from a proton to the observable universe fit on one line. Drag the slider, jump to an object or type a number: the readout shows the <span class="c2">coefficient</span>, the <span class="c3">exponent</span> and the standard form, and names the nearest landmark.</p>`,
      stepWhy: [
        `Keeping the coefficient between 1 and 10 gives every number exactly one way to be written, so two people writing the same number get the same answer.`,
        `Each place the point moves is a factor of ten. Moving it left makes the coefficient smaller, so the power of ten must grow by the same factor to keep the value. Moving it right does the opposite.`,
        `Multiplication can be done in any order and grouping, so coefficients and powers of ten can be gathered separately. The rules <span class="m">10<sup><i>m</i></sup> × 10<sup><i>n</i></sup> = 10<sup><i>m</i>+<i>n</i></sup></span> and <span class="m">10<sup><i>m</i></sup> ÷ 10<sup><i>n</i></sup> = 10<sup><i>m</i>−<i>n</i></sup></span> do the rest.`,
        `Dividing the coefficient by 10 and multiplying the power of ten by 10 multiplies the number by 1, so its value does not change. Only the standard form is restored.`,
        `A result cannot be more precise than the data it came from. Extra digits in the coefficient would claim accuracy you do not have.`
      ],
      bridge: `<p>The sunlight problem shows the routine: write both numbers in scientific notation, divide the coefficients, subtract the exponents, renormalise, then convert to a friendly unit. The same moves handle sizes, money and data in daily life.</p>`,
      tasks: [
        { task: "Reading a calculator result like 6.02E23", link: `The E means "times ten to the". Rewrite it in standard form as in step 1: <span class="m">6.02 × 10<sup>23</sup></span>.` },
        { task: "Comparing a national budget with a household budget", link: `Write both in scientific notation and subtract the exponents, as the example did with 11 − 8, to see how many factors of ten apart they are.` },
        { task: "Counting how many 5 MB photos fit on a 1 TB drive", link: `1 TB is <span class="m">10<sup>12</sup></span> bytes and 5 MB is <span class="m">5 × 10<sup>6</sup></span>. Divide as in step 3 to get <span class="m">0.2 × 10<sup>6</sup></span>, then renormalise as in step 4: <span class="m">2 × 10<sup>5</sup></span> photos.` },
        { task: "Checking a dose written in micrograms", link: `1 mg is <span class="m">10<sup>3</sup></span> µg, so 250 µg is <span class="m">2.5 × 10<sup>2</sup></span> µg, or <span class="m">2.5 × 10<sup>−1</sup></span> mg = 0.25 mg. A slip of three in the exponent is a thousandfold error.` },
        { task: "Making sense of distances in science news", link: `Convert to a unit you can picture, as the example turned 499 seconds into about 8.3 minutes.` }
      ]
    },
    formal: {
      setup: { title: "Writing a scientific-notation calculation", items: [
        { say: `<b>Name the quantities.</b> Give each a letter, a value in scientific notation and a unit.`, math: `<span class="m"><i>d</i> = 1.496 × 10<sup>11</sup></span> m, &nbsp;<span class="m"><i>v</i> = 3.00 × 10<sup>8</sup></span> m/s` },
        { say: `<b>Write the equation.</b> The unknown time gets its own letter.`, math: `<span class="m"><i>t</i> = <span class="fr"><span><i>d</i></span><span><i>v</i></span></span></span>` },
        { say: `<b>Justify the method.</b> Regroup the quotient and apply the law of exponents for division.`, math: `<span class="m"><i>t</i> = <span class="fr"><span>1.496</span><span>3.00</span></span> × 10<sup>11 − 8</sup> ≈ <span class="c2">0.4987</span> × 10<sup class="c3">3</sup></span>` },
        { say: `<b>Renormalise and round.</b> Bring the coefficient back to at least 1 and round to the 3 significant figures of the data.`, math: `<span class="m">0.4987 × 10<sup>3</sup> = 4.987 × 10<sup>2</sup> ≈ <span class="c2">4.99</span> × 10<sup class="c3">2</sup></span> s` },
        { say: `<b>Answer in a sentence with units.</b> Convert to a unit people can picture.`, math: `<span class="m">499 ÷ 60 ≈ 8.3</span> &nbsp;→ Sunlight takes about 8.3 minutes to reach Earth.` }
      ] }
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
    { wrong: `Writing <span class="m">45 × 10<sup>6</sup></span> and calling it scientific notation.`, fix: `The coefficient must be at least 1 and less than 10: <span class="m">4.5 × 10<sup>7</sup></span>.` },
    { wrong: `Getting the sign of the exponent backwards: <span class="m">0.00032 = 3.2 × 10<sup>4</sup></span>.`, fix: `Small numbers have negative exponents: <span class="m">3.2 × 10<sup>−4</sup></span>.` },
    { wrong: `Multiplying the exponents: <span class="m">10<sup>5</sup> × 10<sup>−2</sup> = 10<sup>−10</sup></span>.`, fix: `Add the exponents when multiplying powers of the same base: <span class="m">10<sup>5 + (−2)</sup> = 10<sup>3</sup></span>.` },
    { wrong: `Typing <span class="m">3 × 10<sup>8</sup></span> into a calculator as 3 × 10 EE 8, which gives <span class="m">3 × 10<sup>9</sup></span>.`, fix: `The EE (or EXP) key already means "times ten to the". Type 3 EE 8.` }
  ],
  practice: [
    { ctx: "Budget", q: `A city's annual budget is $45,000,000. Write it in scientific notation.`, a: `Move the point 7 places left: <span class="m">$4.5 × 10<sup>7</sup></span>` },
    { ctx: "Nature", q: `A grain of sand is about 0.00032 m across. Write that in scientific notation.`, a: `Move the point 4 places right: <span class="m">3.2 × 10<sup>−4</sup></span> m` },
    { ctx: "Data", q: `A website serves <span class="m">3 × 10<sup>5</sup></span> pages a day, and each page is <span class="m">4 × 10<sup>−2</sup></span> megabytes. How much data does it send per day?`, a: `<span class="m">(3 × 10<sup>5</sup>)(4 × 10<sup>−2</sup>) = 12 × 10<sup>3</sup> = 1.2 × 10<sup>4</sup></span> megabytes` },
    { ctx: "Grants", q: `A fund of <span class="m">$6.3 × 10<sup>8</sup></span> is shared equally among <span class="m">9 × 10<sup>3</sup></span> schools. How much does each school get?`, a: `<span class="m">0.7 × 10<sup>5</sup> = 7 × 10<sup>4</sup></span>, so $70,000 each` },
    { ctx: "Astronomy", q: `Write an equation with a letter for the unknown, then solve: a light-year is about <span class="m">9.46 × 10<sup>15</sup></span> m. How many metres <i>d</i> are in <span class="m">2.0 × 10<sup>3</sup></span> light-years?`, a: `<span class="m"><i>d</i> = (2.0 × 10<sup>3</sup>)(9.46 × 10<sup>15</sup>) = 18.92 × 10<sup>18</sup> = 1.892 × 10<sup>19</sup></span>, so <b>about 1.9 × 10<sup>19</sup> m</b> to 2 significant figures.` }
  ],
  origin: `In <i>The Sand Reckoner</i> (3rd century BCE), Archimedes built a system for naming very large numbers and estimated that fewer than 10<sup>63</sup> grains of sand would fill the universe as he pictured it. The modern form relies on exponent notation, which Descartes popularised in <i>La Géométrie</i> (1637).`
};
