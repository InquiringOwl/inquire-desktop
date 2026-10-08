window.ARITH = window.ARITH || {};

ARITH["primes"] = {
  title: "Prime Numbers & Prime Factorization",
  short: "The building blocks of every whole number",
  grade: "Grades 4–6",
  hours: 5,
  voice: "plain",
  eyebrow: "Number theory · the primes",
  hero: `<span class="m">360 = <span class="c1">2</span><sup>3</sup> × <span class="c1">3</span><sup>2</sup> × <span class="c1">5</span></span>`,
  lede: `A prime has exactly two factors: 1 and itself. Every whole number above 1 is a product of primes in exactly one way.`,
  plain: `<p>A <b>prime number</b> is a whole number greater than 1 that divides evenly only by 1 and itself. Suppose you set out 7 chairs in equal rows. One row of 7 or seven rows of 1 are the only options. With 12 chairs you could also make 2 rows of 6, 3 rows of 4, 4 rows of 3 or 6 rows of 2. So 7 is prime and 12 is <b>composite</b>. The first primes are 2, 3, 5, 7, 11, 13 and 17. The number 1 is neither prime nor composite.</p>
<p>Primes are the building blocks of multiplication. Split a composite number into factors and keep splitting until every piece is prime. The result is its <b>prime factorization</b>: <span class="m">12 = 2 × 2 × 3</span>. You reach the same primes whichever split you start with. A <b>factor tree</b> records the splits.</p>
<p>To list primes, the <b>Sieve of Eratosthenes</b> crosses out multiples. Keep 2 and cross out its other multiples. Keep the next number left, 3, and cross out its multiples. Repeat. The numbers that survive are prime.</p>`,
  formal: `<p>An integer <span class="m"><i>p</i> &gt; 1</span> is <b>prime</b> if its only positive divisors are 1 and <i>p</i>. An integer <span class="m"><i>n</i> &gt; 1</span> that is not prime is <b>composite</b>. If <i>n</i> is composite it has a prime factor <span class="m"><i>p</i> ≤ √<i>n</i></span>, so trial division up to <span class="m">√<i>n</i></span> decides primality.</p>
<div class="display"><b>Fundamental Theorem of Arithmetic.</b> Every integer <span class="m"><i>n</i> &gt; 1</span> can be written as<br><span class="m"><i>n</i> = <span class="c1"><i>p</i></span><sub>1</sub><sup><i>e</i><sub>1</sub></sup> <span class="c1"><i>p</i></span><sub>2</sub><sup><i>e</i><sub>2</sub></sup> ⋯ <span class="c1"><i>p</i></span><sub><i>k</i></sub><sup><i>e</i><sub><i>k</i></sub></sup></span>, with primes <span class="m"><i>p</i><sub>1</sub> &lt; ⋯ &lt; <i>p</i><sub><i>k</i></sub></span> and exponents <span class="m"><i>e</i><sub><i>i</i></sub> ≥ 1</span>,<br>and this representation is unique.</div>
<p><b>Euclid's theorem:</b> there are infinitely many primes. <b>Euclid's lemma:</b> if a prime <i>p</i> divides <span class="m"><i>ab</i></span>, then <span class="m"><i>p</i> | <i>a</i></span> or <span class="m"><i>p</i> | <i>b</i></span>.</p>`,
  legend: [
    { c: "c1", sym: `<i>p</i>`, name: "Prime", desc: "A whole number greater than 1 whose only factors are 1 and itself. Circled in the sieve." },
    { c: "c3", sym: `<i>kp</i>`, name: "Multiples of the current prime", desc: "Numbers crossed out in the sieve because p divides them, so they cannot be prime (except p itself)." },
    { c: "c2", sym: `<i>n</i>`, name: "Number being factored", desc: "The top of the factor tree." },
    { c: "c4", sym: `<i>e</i>`, name: "Exponent", desc: "How many times a prime appears in the factorization." }
  ],
  steps: { title: "How to find a prime factorization", items: [
    `Try the smallest prime, 2. While the number is even, divide by 2 and record a 2.`,
    `Move to the next prime (3, 5, 7, 11, …) and divide by it as many times as it goes evenly.`,
    `Stop testing once the prime squared is larger than what remains. If what remains is bigger than 1, it is prime; record it.`,
    `Group repeated primes with exponents and list them in increasing order.`,
    `Check by multiplying the factorization back out.`
  ] },
  example: {
    prompt: `A bakery has 360 cookies and wants to offer every possible box size that packs all of them into full, equal boxes. Find the prime factorization of 360 and use it to count the box sizes.`,
    lines: [
      { math: `<span class="m">360 = <span class="c1">2</span> × 180 = <span class="c1">2</span> × <span class="c1">2</span> × 90 = <span class="c1">2</span> × <span class="c1">2</span> × <span class="c1">2</span> × 45</span>`, note: "Divide by 2 while the number is even." },
      { math: `<span class="m">45 = <span class="c1">3</span> × 15 = <span class="c1">3</span> × <span class="c1">3</span> × <span class="c1">5</span></span>`, note: "45 is odd. Its digits sum to 9, so divide by 3 twice. 5 is prime." },
      { math: `<span class="m">360 = <span class="c1">2</span><sup>3</sup> × <span class="c1">3</span><sup>2</sup> × <span class="c1">5</span><sup>1</sup></span>`, note: "Group the repeated primes. Check: 8 × 9 × 5 = 360." },
      { math: `<span class="m">(3 + 1)(2 + 1)(1 + 1) = 24</span>`, note: "A factor uses 0 to 3 twos, 0 to 2 threes and 0 or 1 five. Multiply the number of choices." }
    ],
    answer: `<span class="m">360 = 2<sup>3</sup> × 3<sup>2</sup> × 5</span>, so there are 24 box sizes, from 1 cookie per box up to 360.`
  },
  why: `<p>Prime factorization is the quickest route to simplifying fractions, finding common denominators and computing the GCF and LCM. Once you know that <span class="m">91 = 7 × 13</span> and <span class="m">104 = 8 × 13</span>, the fraction 91/104 reduces in one step to 7/8. Without it you test divisors one by one and can miss the one they share.</p>
<p>It also settles grouping questions. A number's prime factors list every way it splits into equal groups, so you can see that 360 items pack many ways while 97 items, a prime, fit only in a single row.</p>
<p>Primes protect your data too. Encryption methods such as RSA rely on the fact that multiplying two large primes is quick, while recovering them from their product takes far too long. Later math builds on the same idea: the GCF and LCM, modular arithmetic and much of number theory start from prime factorizations.</p>`,
  careers: [
    { role: "Cryptographer", use: "Generates RSA keys from pairs of large primes, often hundreds of digits long." },
    { role: "Security engineer", use: "Configures key sizes for TLS and SSH based on how hard it is to factor products of primes." },
    { role: "Mechanical engineer", use: "Chooses gear tooth counts with no common factor so each tooth meets every tooth on the mating gear, spreading wear." },
    { role: "Software developer", use: "Picks prime table sizes for some hash tables so keys spread evenly across slots." },
    { role: "Mathematician", use: "Researches the distribution of primes, including open problems such as the Riemann Hypothesis." }
  ],
  life: [
    "Simplifying a fraction in one step",
    "Finding how many ways items can be packed evenly",
    "Understanding why website padlock icons mean a connection is encrypted",
    "Checking quickly whether a number can be split into equal groups"
  ],
  fields: [
    { name: "Computer security", use: "Public-key encryption and digital signatures depend on properties of primes." },
    { name: "Number theory", use: "Primes are the central objects of the field." },
    { name: "Mechanical engineering", use: "Gear design uses tooth counts that share no common factor." },
    { name: "Biology", use: "Researchers have proposed that the 13- and 17-year cycles of periodical cicadas help them avoid predators with shorter cycles." }
  ],
  layers: {
    concept: {
      heading: "What are prime numbers?",
      lede: `Which numbers cannot be split into equal groups, and how is every other number built from them? Primes answer both questions.`,
      history: `<p><b>The problem.</b> Anyone sharing goods into equal lots meets numbers that will not split: 7 loaves make equal groups only as 1 group of 7 or 7 groups of 1. Greek mathematicians asked the deeper questions. Which numbers are built from smaller ones by multiplying, how many primes are there, and how can you find them?</p>
<p><b>The solution.</b> Euclid's <i>Elements</i>, compiled around 300 BCE, proves in Book IX that the primes never run out: multiply any finite list of primes, add 1, and the result has a prime factor that is not on the list. A method for finding primes, the sieve, is credited to Eratosthenes of Cyrene, a 3rd-century BCE Greek scholar, by Nicomachus in his <i>Introduction to Arithmetic</i>, written in the early 2nd century CE.</p>
<p><b>What it changed.</b> For centuries primes were studied mostly for their own sake. Pierre de Fermat found the result now called Fermat's little theorem, which became the basis of the primality checks computers still run. In 1977 Ron Rivest, Adi Shamir and Leonard Adleman published RSA, an encryption method whose security rests on how hard it is to factor the product of two large primes. Methods like it secure online connections and digital signatures.</p>`,
      sources: [
        { title: "Prime numbers (MacTutor)", url: "https://mathshistory.st-andrews.ac.uk/HistTopics/Prime_numbers/" },
        { title: "Euclid's theorem (Wikipedia)", url: "https://en.wikipedia.org/wiki/Euclid%27s_theorem" },
        { title: "Sieve of Eratosthenes (Wikipedia)", url: "https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes" },
        { title: "RSA cryptosystem (Wikipedia)", url: "https://en.wikipedia.org/wiki/RSA_cryptosystem" }
      ],
      examples: [
        { role: "Cryptographer", scene: `A classroom-size RSA key uses the primes 61 and 53. Their product, <span class="m">61 × 53 = 3,233</span>, is made public and the primes stay secret. Real keys use primes hundreds of digits long.`, takeaway: "Multiplying primes is fast. Undoing it is the hard step security depends on." },
        { role: "Security engineer", scene: `A 2,048-bit RSA key, a common size, has a public number about 617 digits long, made by multiplying two primes of roughly 309 digits each.`, takeaway: "Longer primes make factoring slower for an attacker, so key size is a security setting." },
        { role: "Mechanical engineer", scene: `A 12-tooth gear drives a 25-tooth gear. <span class="m">12 = 2<sup>2</sup> × 3</span> and <span class="m">25 = 5<sup>2</sup></span> share no prime, so the same pair of teeth meets again only after <span class="m">12 × 25 = 300</span> tooth contacts, and every tooth meets every tooth on the other gear.`, takeaway: "A shared prime factor would make the same teeth meet over and over and wear unevenly." },
        { role: "Software developer", scene: `A hash table with 97 slots puts key <i>k</i> in slot <span class="m"><i>k</i> mod 97</span>. Keys that are all multiples of 4 still reach all 97 slots, because 97 is prime. With 100 slots they would use only 25 of them.`, takeaway: "A prime table size spreads patterned data evenly." },
        { role: "Mathematician", scene: `To test 221, try primes only up to <span class="m">√221 ≈ 14.9</span>: 2, 3, 5, 7, 11, 13. The last one divides it: <span class="m">221 = 13 × 17</span>, so 221 is composite.`, takeaway: "Stopping at the square root turns a long search into six divisions." }
      ]
    },
    build: {
      lede: `To factor a number, divide out the smallest prime as often as it goes, move to the next prime, and stop once the prime squared is larger than what is left.`,
      intro: `<p>The model has two views. The sieve shows the numbers 1 to 120 in rows of ten: each new prime is filled in amber and its multiples are crossed out in pink, starting at the prime squared. The factor tree splits off the smallest prime at each level until only a prime is left. The panel beside it gives the factorization with exponents and the number of divisors.</p>`,
      stepWhy: [
        `Starting with 2 means every factor you divide out is prime: by the time you try a larger number, its smaller prime factors are already gone. Even numbers are also the easiest to spot.`,
        `Dividing by the same prime until it stops going catches repeated factors, like the three 2s in 360. Only primes need testing: once 2 and 3 are divided out, 4, 6 and 9 cannot divide what is left.`,
        `Every prime factor still in the remainder is at least the current prime <i>p</i>, so a composite remainder would be at least <span class="m"><i>p</i><sup>2</sup></span>. Once <span class="m"><i>p</i><sup>2</sup></span> is larger, the remainder must be prime.`,
        `Exponents make the factorization short and quick to compare. Increasing order is the standard form, so two people factoring the same number write the same answer.`,
        `Multiplying back checks every division at once. If the product is right and every factor is prime, the Fundamental Theorem of Arithmetic says this is the only factorization.`
      ],
      bridge: `<p>The cookie problem shows the pattern: factor a quantity into primes, then read every way it can be split from the exponents. The same reasoning appears whenever you need equal groups or a simpler fraction.</p>`,
      tasks: [
        { task: "Simplifying a fraction in one step", link: `Factor top and bottom, as practice 4 factors <span class="m">1,001 = 7 × 11 × 13</span>, and cancel the primes they share.` },
        { task: "Finding how many ways items can be packed evenly", link: `Use the last line of the worked example: add 1 to each exponent and multiply, as <span class="m">(3 + 1)(2 + 1)(1 + 1) = 24</span> did for 360.` },
        { task: "Checking whether a number can be split into equal groups", link: `Run step 3: test primes only up to the square root, as practice 3 does for 211 (√211 ≈ 14.5).` },
        { task: "Spotting numbers that look prime but are not", link: `Use the digit-sum test from practice 1: the digits of 51 sum to 6, so 3 divides it.` },
        { task: "Understanding why website padlock icons mean a connection is encrypted", link: `Step 5, multiplying back, is fast. Steps 1 to 3 take far too long for numbers hundreds of digits long, and some encryption relies on that gap.` }
      ]
    },
    formal: {
      setup: { title: "Writing a prime factorization", items: [
        { say: `<b>Name the number.</b> Say what <i>n</i> counts.`, math: `<span class="m"><span class="c2"><i>n</i></span> = 360</span> cookies` },
        { say: `<b>Write the general form.</b> Each prime carries an exponent: how many times it appears.`, math: `<span class="m"><i>n</i> = <span class="c1"><i>p</i></span><sub>1</sub><sup><i>e</i><sub>1</sub></sup> × <span class="c1"><i>p</i></span><sub>2</sub><sup><i>e</i><sub>2</sub></sup> × ⋯ × <span class="c1"><i>p</i></span><sub><i>k</i></sub><sup><i>e</i><sub><i>k</i></sub></sup></span>` },
        { say: `<b>Justify the method.</b> A composite number has a prime factor no larger than its square root, so trial division by primes up to √<i>n</i> is enough. The Fundamental Theorem of Arithmetic makes the result unique.`, math: `<span class="m">√360 ≈ 18.97</span>, so at most the primes 2, 3, 5, 7, 11, 13, 17` },
        { say: `<b>Compute.</b> Divide out each prime in turn and record its exponent.`, math: `<span class="m">360 ÷ 2 ÷ 2 ÷ 2 = 45, &nbsp;45 ÷ 3 ÷ 3 = 5</span> → <span class="m">360 = 2<sup>3</sup> × 3<sup>2</sup> × 5</span>` },
        { say: `<b>Use it and answer.</b> The number of divisors is the product of (exponent + 1). State the result in a sentence.`, math: `<span class="m"><i>d</i>(360) = (3 + 1)(2 + 1)(1 + 1) = 24</span> → 24 box sizes are possible.` }
      ] }
    }
  },
  prereqWhy: {
    "factors": "A prime is defined by its factors, and factor trees are built from factor pairs."
  },
  unlocksWhy: {
    "gcf-lcm": "The GCF and LCM can be read off prime factorizations by taking the smaller or larger exponent of each prime."
  },
  beyond: [
    { field: "Number theory", why: "Primes, their distribution and unique factorization are its foundation." },
    { field: "Abstract algebra", why: "Prime and irreducible elements generalize primes to other number systems and polynomial rings." },
    { field: "Cryptography", why: "RSA and many other systems are built directly on prime numbers." }
  ],
  mistakes: [
    { wrong: `"1 is prime"`, fix: `A prime must have exactly two positive factors. 1 has only one, so it is neither prime nor composite.` },
    { wrong: `"51 and 91 are prime because they are odd"`, fix: `<span class="m">51 = 3 × 17</span> and <span class="m">91 = 7 × 13</span>. Odd does not mean prime.` },
    { wrong: `Stopping the factor tree at <span class="m">360 = 2 × 2 × 2 × 45</span>`, fix: `Every leaf must be prime. 45 splits further into <span class="m">3 × 3 × 5</span>.` },
    { wrong: `Deciding 91 is prime after trying only 2, 3 and 5`, fix: `Keep testing primes up to <span class="m">√91 ≈ 9.5</span>. The next one, 7, divides it: <span class="m">91 = 7 × 13</span>.` }
  ],
  practice: [
    { ctx: "Events", q: `51 guests arrive for a dinner. Can they sit at more than one table with the same number of people, more than one, at each? In other words, is 51 composite?`, a: `Yes. Its digits sum to 6, so 3 divides it: <span class="m">51 = 3 × 17</span>. That gives 3 tables of 17 or 17 tables of 3.` },
    { ctx: "Retail", q: `A shop has 84 candles to pack into identical gift sets. Find the prime factorization of 84.`, a: `<span class="m">84 = 2<sup>2</sup> × 3 × 7</span>. 84 → 42 → 21 → 7, dividing by 2, 2, 3.` },
    { ctx: "Warehouse", q: `211 boxes must be stacked in a rectangle with more than one row and more than one column. Is that possible? (Is 211 prime?)`, a: `No. 211 is prime: √211 ≈ 14.5, and none of 2, 3, 5, 7, 11, 13 divides 211. The only arrangement is a single row.` },
    { ctx: "Catering", q: `A caterer has 1,001 dumplings to share out evenly. Find the prime factorization of 1,001 to see the possible group sizes.`, a: `<span class="m">1,001 = 7 × 11 × 13</span>. 1,001 ÷ 7 = 143, and 143 = 11 × 13.` },
    { ctx: "Office", q: `Write an expression with a letter for the unknown, then solve: a printer has 200 sheets and wants every stack size that uses all the sheets in equal stacks. Let <i>d</i> be the number of possible stack sizes. Factor 200 and find <i>d</i>.`, a: `<span class="m">200 = 2<sup>3</sup> × 5<sup>2</sup></span>, so <span class="m"><i>d</i> = (3 + 1)(2 + 1) = 12</span>. There are <b>12</b> stack sizes: 1, 2, 4, 5, 8, 10, 20, 25, 40, 50, 100 and 200.` }
  ],
  origin: `Euclid's <i>Elements</i> (around 300 BCE) proves there are infinitely many primes (Book IX, Proposition 20). The sieve is credited to Eratosthenes of Cyrene (3rd century BCE) by the later writer Nicomachus. Gauss gave what is generally taken as the first proof that the factorization is unique, in <i>Disquisitiones Arithmeticae</i> (1801).`
};
