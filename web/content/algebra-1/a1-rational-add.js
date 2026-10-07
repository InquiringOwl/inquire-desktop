window.ARITH = window.ARITH || {};

ARITH["a1-rational-add"] = {
  title: "Adding & Subtracting Rational Expressions",
  short: "Build the LCD from factored denominators, then combine",
  grade: "Grade 10 · college Elementary Algebra",
  hours: 6,
  voice: "plain",
  eyebrow: "Rational expressions · common denominators",
  hero: `<span class="m"><span class="fr"><span>3</span><span><span class="c2"><i>x</i> − 2</span></span></span> + <span class="fr"><span>5</span><span><span class="c3"><i>x</i> + 2</span></span></span> = <span class="fr"><span>3(<i>x</i> + 2) + 5(<i>x</i> − 2)</span><span><span class="c4">(<i>x</i> − 2)(<i>x</i> + 2)</span></span></span> = <span class="c1"><span class="fr"><span>8<i>x</i> − 4</span><span>(<i>x</i> − 2)(<i>x</i> + 2)</span></span></span></span>`,
  lede: `Rational expressions are added exactly like numerical fractions: rewrite each over the <span class="c4">least common denominator</span>, combine the numerators, and simplify the <span class="c1">result</span>.`,
  plain: `<p>To add <span class="m">1/4 + 1/6</span> you do not add the tops and bottoms. You rewrite both as twelfths, <span class="m">3/12 + 2/12</span>, then add the numerators to get <span class="m">5/12</span>. The 12 is the least common denominator: the smallest number both 4 and 6 divide into.</p>
<p>Rational expressions work the same way, with factors in place of numbers. First factor every denominator. The LCD uses each different factor the greatest number of times it appears in any one denominator. For <span class="m">1/(<i>x</i> − 2)</span> and <span class="m">1/(<i>x</i><sup>2</sup> − 4)</span>, the second denominator is <span class="m">(<i>x</i> − 2)(<i>x</i> + 2)</span>, so the LCD is just <span class="m">(<i>x</i> − 2)(<i>x</i> + 2)</span>, not the product of both denominators.</p>
<p>Multiply each numerator by whatever its denominator is missing. Then combine the numerators over the LCD. With subtraction, put the second numerator in parentheses so the minus sign reaches every term. Finally, factor the numerator and see whether anything cancels with the denominator.</p>`,
  formal: `<p>For polynomials <span class="m"><i>P</i>, <i>Q</i>, <i>R</i></span> with <span class="m"><i>R</i> ≠ 0</span>, expressions with a <b>common denominator</b> combine as</p>
<div class="display"><span class="fr"><span><i>P</i></span><span><i>R</i></span></span> + <span class="fr"><span><i>Q</i></span><span><i>R</i></span></span> = <span class="fr"><span><i>P</i> + <i>Q</i></span><span><i>R</i></span></span> &nbsp;&nbsp; <span class="fr"><span><i>P</i></span><span><i>R</i></span></span> − <span class="fr"><span><i>Q</i></span><span><i>R</i></span></span> = <span class="fr"><span><i>P</i> − <i>Q</i></span><span><i>R</i></span></span><br><span class="fr"><span><i>a</i></span><span><i>b</i></span></span> + <span class="fr"><span><i>c</i></span><span><i>d</i></span></span> = <span class="fr"><span><i>ad</i> + <i>bc</i></span><span><i>bd</i></span></span> &nbsp;<span class="dim">(always valid; <i>bd</i> is a common denominator, not always the least)</span></div>
<p>The <b>least common denominator</b> (LCD) is the product of every distinct prime factor of the denominators, each raised to the highest power with which it appears. Each expression is converted to an equivalent one with the LCD by multiplying numerator and denominator by the missing factors. The excluded values of the sum are the zeros of all original denominators. A <b>complex rational expression</b>, one with fractions in its numerator or denominator, is simplified by multiplying its numerator and denominator by the LCD of all the inner fractions.</p>`,
  legend: [
    { c: "c2", sym: `<i>D</i><sub>1</sub>`, name: "First denominator", desc: "The factored denominator of the first expression." },
    { c: "c3", sym: `<i>D</i><sub>2</sub>`, name: "Second denominator", desc: "The factored denominator of the second expression." },
    { c: "c4", sym: `LCD`, name: "Least common denominator", desc: "Every distinct factor of the denominators, each to its highest power. Both expressions are rewritten over it." },
    { c: "c1", sym: `<i>N</i>/LCD`, name: "Result", desc: "The combined numerator over the LCD, simplified by cancelling any common factor." }
  ],
  steps: { title: "How to add or subtract rational expressions", items: [
    `Factor every <span class="c2">denominator</span> completely and note the excluded values.`,
    `Build the <span class="c4">LCD</span>: list each different factor, using the highest power that appears in any one denominator.`,
    `Rewrite each expression over the LCD by multiplying its numerator and denominator by the factors it is missing.`,
    `Add or subtract the numerators, keeping the LCD. For subtraction, put the second numerator in parentheses and distribute the minus sign.`,
    `Simplify the numerator by distributing and combining like terms.`,
    `Factor the numerator and cancel any factor it shares with the denominator. State the <span class="c1">result</span> with its excluded values.`
  ] },
  example: {
    prompt: `You drive 60 miles to a town at an average speed of <span class="m"><i>r</i></span> mph and return 10 mph faster. Write the total driving time as a single rational expression, and find it when <span class="m"><i>r</i> = 50</span>.`,
    lines: [
      { math: `<span class="m"><span class="fr"><span>60</span><span><span class="c2"><i>r</i></span></span></span> + <span class="fr"><span>60</span><span><span class="c3"><i>r</i> + 10</span></span></span></span>`, note: "Time is distance divided by speed for each leg." },
      { math: `<span class="m">LCD = <span class="c4"><i>r</i>(<i>r</i> + 10)</span></span>`, note: "The two denominators share no factor, so the LCD is their product." },
      { math: `<span class="m"><span class="fr"><span>60(<i>r</i> + 10)</span><span><i>r</i>(<i>r</i> + 10)</span></span> + <span class="fr"><span>60<i>r</i></span><span><i>r</i>(<i>r</i> + 10)</span></span></span>`, note: "Multiply each fraction by its missing factor." },
      { math: `<span class="m c1"><span class="fr"><span>120<i>r</i> + 600</span><span><i>r</i>(<i>r</i> + 10)</span></span> = <span class="fr"><span>120(<i>r</i> + 5)</span><span><i>r</i>(<i>r</i> + 10)</span></span></span>`, note: "Add the numerators and factor. No factor cancels." },
      { math: `<span class="m"><span class="fr"><span>120(55)</span><span>50(60)</span></span> = <span class="fr"><span>6600</span><span>3000</span></span> = 2.2</span>`, note: "Substitute r = 50." },
      { math: `<span class="m"><span class="fr"><span>60</span><span>50</span></span> + <span class="fr"><span>60</span><span>60</span></span> = 1.2 + 1 = 2.2 ✓</span>`, note: "Check with the original two-leg form." }
    ],
    answer: `The total time is <span class="m c1"><span class="fr"><span>120(<i>r</i> + 5)</span><span><i>r</i>(<i>r</i> + 10)</span></span></span> hours, which is <span class="m">2.2</span> hours (2 hours 12 minutes) when <span class="m"><i>r</i> = 50</span>.`
  },
  why: `<p>Whenever two rates, times or shares are combined, fractions with variables in the denominator are added: total time for trips at different speeds, combined work rates, total resistance of resistors in parallel, the combined focal length of two lenses. Writing the total as one expression makes it easy to evaluate and to set equal to a target.</p>
<p>This is the step that makes rational equations solvable, and it is used constantly later: combining terms in precalculus, simplifying difference quotients, and in calculus when adding fractions before taking limits or reversing the process with partial fractions.</p>`,
  careers: [
    { role: "Electrician", use: "Combines resistances in parallel with 1/R = 1/R₁ + 1/R₂, adding fractions to find the total resistance." },
    { role: "Optician", use: "Adds lens powers, the reciprocals of focal lengths, to find the effective power of two lenses together." },
    { role: "Logistics planner", use: "Adds travel times d/r for route segments at different speeds to estimate total delivery time." },
    { role: "Project manager", use: "Adds individual work rates such as 1/a + 1/b jobs per hour to estimate how fast a team finishes a task." },
    { role: "Pharmacist", use: "Combines rates of drug infusion and elimination written as fractions of a dose per hour." }
  ],
  life: [
    "Working out the total time for a round trip at two different speeds",
    "Estimating how long two people take to paint a room together",
    "Adding recipe amounts written as fractions of different sizes",
    "Figuring out the average speed for a whole trip, which is not the average of the two speeds"
  ],
  fields: [
    { name: "Physics", use: "Parallel resistors, springs in series and thin-lens combinations add reciprocals." },
    { name: "Chemistry", use: "Combined rate laws and dilution formulas involve sums of fractional expressions." },
    { name: "Engineering", use: "Transfer functions of connected systems are combined by adding and multiplying rational expressions." },
    { name: "Calculus", use: "Difference quotients and partial fractions require combining and splitting rational expressions." }
  ],
  prereqWhy: {
    "a1-rational-simplify": "Finding an LCD requires factoring denominators, and the final answer must be simplified by cancelling common factors, both learned there."
  },
  unlocksWhy: {
    "a1-rational-eq": "Rational equations are solved by multiplying through by the LCD, the same common denominator built here.",
    "trig-verify-ids": "Verifying identities often means combining trigonometric fractions, which uses the same common denominator built here.",
    "pc-partial-fractions": "Partial fractions run the common-denominator step backwards: a single fraction is split into simpler ones, and recombining over an LCD is how each answer is checked."
  },
  beyond: [
    { field: "Algebra II", why: "Complex rational expressions and rational functions are simplified by combining fractions over an LCD." },
    { field: "Calculus I", why: "Limits of difference quotients such as (1/(x + h) − 1/x)/h start by subtracting rational expressions." },
    { field: "Calculus II", why: "Partial fraction decomposition reverses this process to integrate rational functions." },
    { field: "Physics", why: "Circuit and optics formulas add reciprocals, and rearranging them requires combining rational expressions." }
  ],
  mistakes: [
    { wrong: `Adding numerators and denominators: <span class="m"><span class="fr"><span>3</span><span><i>x</i></span></span> + <span class="fr"><span>5</span><span><i>y</i></span></span> = <span class="fr"><span>8</span><span><i>x</i> + <i>y</i></span></span></span>.`, fix: `Use a common denominator: <span class="m"><span class="fr"><span>3<i>y</i> + 5<i>x</i></span><span><i>xy</i></span></span></span>.` },
    { wrong: `Not distributing the minus sign: <span class="m"><span class="fr"><span>2(<i>x</i> − 1) − <i>x</i> + 3</span><span>(<i>x</i> + 3)(<i>x</i> − 1)</span></span></span> for <span class="m"><span class="fr"><span>2</span><span><i>x</i> + 3</span></span> − <span class="fr"><span>1</span><span><i>x</i> − 1</span></span></span>.`, fix: `The whole second numerator is subtracted: <span class="m">2(<i>x</i> − 1) − (<i>x</i> + 3) = <i>x</i> − 5</span>.` },
    { wrong: `Using the product of the denominators when they share a factor, then forgetting to simplify.`, fix: `Factor first. For <span class="m"><i>x</i><sup>2</sup> − 9</span> and <span class="m"><i>x</i> − 3</span> the LCD is <span class="m">(<i>x</i> + 3)(<i>x</i> − 3)</span>, not <span class="m">(<i>x</i><sup>2</sup> − 9)(<i>x</i> − 3)</span>.` }
  ],
  practice: [
    { q: `Add <span class="m"><span class="fr"><span>5</span><span>2<i>x</i></span></span> + <span class="fr"><span>1</span><span>3<i>x</i></span></span></span>.`, a: `LCD <span class="m">6<i>x</i></span>: <span class="m"><span class="fr"><span>15</span><span>6<i>x</i></span></span> + <span class="fr"><span>2</span><span>6<i>x</i></span></span> = <span class="fr"><span>17</span><span>6<i>x</i></span></span></span>, <span class="m"><i>x</i> ≠ 0</span>.` },
    { q: `Subtract <span class="m"><span class="fr"><span><i>x</i></span><span><i>x</i> − 3</span></span> − <span class="fr"><span>3</span><span><i>x</i> − 3</span></span></span>.`, a: `Same denominator: <span class="m"><span class="fr"><span><i>x</i> − 3</span><span><i>x</i> − 3</span></span> = 1</span>, for <span class="m"><i>x</i> ≠ 3</span>.` },
    { q: `Subtract <span class="m"><span class="fr"><span>2</span><span><i>x</i> + 3</span></span> − <span class="fr"><span>1</span><span><i>x</i> − 1</span></span></span>.`, a: `LCD <span class="m">(<i>x</i> + 3)(<i>x</i> − 1)</span>: <span class="m"><span class="fr"><span>2(<i>x</i> − 1) − (<i>x</i> + 3)</span><span>(<i>x</i> + 3)(<i>x</i> − 1)</span></span> = <span class="fr"><span><i>x</i> − 5</span><span>(<i>x</i> + 3)(<i>x</i> − 1)</span></span></span>, <span class="m"><i>x</i> ≠ −3, 1</span>.` },
    { q: `Simplify <span class="m"><span class="fr"><span>6</span><span><i>x</i><sup>2</sup> − 9</span></span> − <span class="fr"><span>1</span><span><i>x</i> − 3</span></span></span>.`, a: `LCD <span class="m">(<i>x</i> + 3)(<i>x</i> − 3)</span>: <span class="m"><span class="fr"><span>6 − (<i>x</i> + 3)</span><span>(<i>x</i> + 3)(<i>x</i> − 3)</span></span> = <span class="fr"><span>3 − <i>x</i></span><span>(<i>x</i> + 3)(<i>x</i> − 3)</span></span> = <span class="fr"><span>−1</span><span><i>x</i> + 3</span></span></span>, <span class="m"><i>x</i> ≠ −3, 3</span>.` }
  ]
};
