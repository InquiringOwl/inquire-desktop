/* ============ Tree + field data ============ */
window.DB = window.DB || {};

/* Skill trees, one per charted field. col = tier column, row = lane.
   pre may name topics in another field (drawn in that field; listed on the topic page). */
DB.trees = {};
DB.trees["arithmetic"] = {
  eras: [
    { name: "Number Sense", from: 0, to: 2 },
    { name: "The Four Operations", from: 3, to: 4 },
    { name: "Structure of Number", from: 5, to: 6 },
    { name: "Parts of a Whole", from: 7, to: 8 },
    { name: "Applied Arithmetic", from: 9, to: 10 }
  ],
  nodes: [
    { id: "counting",      col: 0,  row: 3, icon: "ℕ",   chips: ["1","2","3"], pre: [] },
    { id: "place-value",   col: 1,  row: 2, icon: "10²", chips: ["10","100","1000"], pre: ["counting"] },
    { id: "number-line",   col: 1,  row: 4, icon: "<",   chips: ["<","=",">"], pre: ["counting"] },
    { id: "addition",      col: 2,  row: 2, icon: "+",   chips: ["+","Σ"], pre: ["place-value"] },
    { id: "rounding",      col: 2,  row: 4, icon: "≈",   chips: ["≈","½"], pre: ["place-value","number-line"] },
    { id: "multiplication",col: 3,  row: 1, icon: "×",   chips: ["×","▦"], pre: ["addition"] },
    { id: "subtraction",   col: 3,  row: 3, icon: "−",   chips: ["−","↺"], pre: ["addition"] },
    { id: "properties",    col: 4,  row: 0, icon: "⇄",   chips: ["ab=ba","a(b+c)"], pre: ["multiplication"] },
    { id: "division",      col: 4,  row: 2, icon: "÷",   chips: ["÷","r"], pre: ["multiplication","subtraction"] },
    { id: "integers",      col: 4,  row: 4, icon: "±",   chips: ["−3","|x|"], pre: ["subtraction","number-line"] },
    { id: "exponents",     col: 5,  row: 0, icon: "xⁿ",  chips: ["2³","b⁰"], pre: ["multiplication","properties"] },
    { id: "order-ops",     col: 5,  row: 1, icon: "( )", chips: ["( )","×÷","+−"], pre: ["division","properties"] },
    { id: "factors",       col: 5,  row: 3, icon: "∣",   chips: ["3∣12","×k"], pre: ["division"] },
    { id: "modular",       col: 5,  row: 5, icon: "≡",   chips: ["mod","≡"], pre: ["division","integers"] },
    { id: "roots",         col: 6,  row: 0, icon: "√",   chips: ["√","n²"], pre: ["exponents"] },
    { id: "fractions",     col: 6,  row: 2, icon: "½",   chips: ["½","=","²⁄₄"], pre: ["division","factors"] },
    { id: "primes",        col: 6,  row: 4, icon: "p",   chips: ["2","3","5","7"], pre: ["factors"] },
    { id: "decimals",      col: 7,  row: 1, icon: "0.1", chips: ["0.1","0.01"], pre: ["place-value","fractions"] },
    { id: "mixed-numbers", col: 7,  row: 2, icon: "1½",  chips: ["1½","⁷⁄₄"], pre: ["fractions"] },
    { id: "ratios",        col: 7,  row: 3, icon: "∶",   chips: ["a∶b","/h"], pre: ["fractions"] },
    { id: "gcf-lcm",       col: 7,  row: 5, icon: "gcd", chips: ["gcd","lcm"], pre: ["primes"] },
    { id: "sci-notation",  col: 8,  row: 0, icon: "10ⁿ", chips: ["×10ⁿ","e"], pre: ["exponents","decimals"] },
    { id: "percents",      col: 8,  row: 1, icon: "%",   chips: ["%","/100"], pre: ["decimals"] },
    { id: "decimal-ops",   col: 8,  row: 2, icon: ".×",  chips: ["+.","×."], pre: ["decimals","multiplication"] },
    { id: "fraction-ops",  col: 8,  row: 4, icon: "⅔",   chips: ["+","×","÷"], pre: ["fractions","gcf-lcm"] },
    { id: "percent-apps",  col: 9,  row: 1, icon: "$",   chips: ["Prt","(1+r)ᵗ"], pre: ["percents","exponents"] },
    { id: "averages",      col: 9,  row: 2, icon: "x̄",   chips: ["x̄","med","mode"], pre: ["division","decimal-ops"] },
    { id: "proportions",   col: 9,  row: 4, icon: "∷",   chips: ["a/b=c/x"], pre: ["ratios","fraction-ops"] },
    { id: "real-numbers",  col: 9,  row: 6, icon: "ℝ",   chips: ["ℚ","√2","π"], pre: ["integers","fraction-ops","roots","decimals"] },
    { id: "units",         col: 10, row: 3, icon: "m/s", chips: ["km/h","×1"], pre: ["proportions","decimal-ops"] }
  ]
};

DB.trees["pre-algebra"] = {
  eras: [
    { name: "The Language of Algebra", from: 0, to: 1 },
    { name: "Solving Equations", from: 2, to: 4 },
    { name: "Models, Formulas & Graphs", from: 5, to: 6 }
  ],
  nodes: [
    { id: "pa-variables",     col: 0, row: 2, icon: "x",     chips: ["x","3n","a+b"], pre: ["order-ops","properties"] },
    { id: "pa-coordinate",    col: 0, row: 6, icon: "(x,y)", chips: ["I","II","III","IV"], pre: ["integers","number-line"] },
    { id: "pa-translate",     col: 1, row: 0, icon: "“x”", chips: ["sum","less than"], pre: ["pa-variables"] },
    { id: "pa-like-terms",    col: 1, row: 1, icon: "3x+2x", chips: ["5x","a(b+c)"], pre: ["pa-variables","properties"] },
    { id: "pa-evaluate",      col: 1, row: 2, icon: "x=4", chips: ["x→4","f"], pre: ["pa-variables","integers"] },
    { id: "pa-exponent-laws", col: 1, row: 4, icon: "xⁿ", chips: ["x²x³","x⁻¹"], pre: ["pa-variables","exponents"] },
    { id: "pa-equations",     col: 2, row: 2, icon: "=",   chips: ["=","✓"], pre: ["pa-evaluate"] },
    { id: "pa-relations",     col: 2, row: 6, icon: "↦", chips: ["x","y","table"], pre: ["pa-coordinate","pa-evaluate"] },
    { id: "pa-one-step",      col: 3, row: 2, icon: "x+a", chips: ["−a","÷a"], pre: ["pa-equations","fraction-ops","decimal-ops"] },
    { id: "pa-inequalities",  col: 3, row: 4, icon: "<",   chips: ["<","≤","○●"], pre: ["pa-equations","number-line"] },
    { id: "pa-functions",     col: 3, row: 6, icon: "f(x)", chips: ["f(x)","1 out"], pre: ["pa-relations"] },
    { id: "pa-two-step",      col: 4, row: 2, icon: "ax+b", chips: ["−b","÷a"], pre: ["pa-one-step"] },
    { id: "pa-similar",       col: 4, row: 3, icon: "△∼", chips: ["∼","k"], pre: ["pa-one-step","proportions"] },
    { id: "pa-proportional",  col: 4, row: 6, icon: "y=kx", chips: ["k","(0,0)"], pre: ["pa-functions","proportions"] },
    { id: "pa-sequences",     col: 4, row: 7, icon: "+d",  chips: ["a₁","d"], pre: ["pa-functions"] },
    { id: "pa-both-sides",    col: 5, row: 1, icon: "x=x", chips: ["ax+b=cx+d"], pre: ["pa-two-step","pa-like-terms"] },
    { id: "pa-formulas",      col: 5, row: 3, icon: "A=lw", chips: ["P","A","V"], pre: ["pa-two-step"] },
    { id: "pa-solve-ineq",    col: 5, row: 4, icon: "≤", chips: ["flip","−x"], pre: ["pa-inequalities","pa-two-step"] },
    { id: "pa-slope",         col: 5, row: 6, icon: "m",   chips: ["rise","run"], pre: ["pa-proportional"] },
    { id: "pa-word-problems", col: 6, row: 0, icon: "?",   chips: ["let x","check"], pre: ["pa-both-sides","pa-translate"] },
    { id: "pa-pythagorean",   col: 6, row: 3, icon: "a²+b²", chips: ["c²","√"], pre: ["pa-formulas","roots"] },
    { id: "pa-linear-graphs", col: 6, row: 6, icon: "y=mx+b", chips: ["m","b"], pre: ["pa-slope","pa-two-step"] }
  ]
};

DB.trees["algebra-1"] = {
  eras: [
    { name: "Equations, Inequalities & Functions", from: 0, to: 2 },
    { name: "Lines, Systems & Polynomials", from: 3, to: 5 },
    { name: "Quadratics & Rational Expressions", from: 6, to: 9 }
  ],
  nodes: [
    { id: "a1-multi-step",       col: 0, row: 1, icon: "⋯x", chips: ["LCD","∅","ℝ"], pre: ["pa-both-sides"] },
    { id: "a1-functions",        col: 0, row: 3, icon: "f(x)", chips: ["dom","ran"], pre: ["pa-functions","pa-linear-graphs"] },
    { id: "a1-exponents",        col: 0, row: 6, icon: "x⁻ⁿ", chips: ["x⁰","x⁻¹"], pre: ["pa-exponent-laws","sci-notation"] },
    { id: "a1-literal",          col: 1, row: 0, icon: "d=rt", chips: ["solve for"], pre: ["a1-multi-step","pa-formulas"] },
    { id: "a1-compound",         col: 1, row: 1, icon: "[a,b)", chips: ["and","or","∪"], pre: ["a1-multi-step","pa-solve-ineq"] },
    { id: "a1-abs-eq",           col: 1, row: 2, icon: "|x|", chips: ["±"], pre: ["a1-multi-step"] },
    { id: "a1-slope-forms",      col: 1, row: 3, icon: "mx+b", chips: ["m","b"], pre: ["a1-functions","pa-slope"] },
    { id: "a1-poly-add",         col: 1, row: 6, icon: "P+Q", chips: ["deg","like"], pre: ["a1-exponents"] },
    { id: "a1-radicals",         col: 1, row: 8, icon: "√", chips: ["√12","2√3"], pre: ["a1-exponents","roots"] },
    { id: "a1-abs-ineq",         col: 2, row: 1, icon: "|x|<a", chips: ["and","or"], pre: ["a1-abs-eq","a1-compound"] },
    { id: "a1-piecewise",        col: 2, row: 2, icon: "{",    chips: ["pieces","|x|"], pre: ["a1-functions","a1-abs-eq"] },
    { id: "a1-line-forms",       col: 2, row: 3, icon: "Ax+By", chips: ["y−y₁","std"], pre: ["a1-slope-forms"] },
    { id: "a1-poly-mult",        col: 2, row: 6, icon: "PQ",   chips: ["FOIL","(a+b)²"], pre: ["a1-poly-add"] },
    { id: "a1-rational-exp",     col: 2, row: 9, icon: "x^½", chips: ["ⁿ√","m/n"], pre: ["a1-radicals"] },
    { id: "a1-par-perp",         col: 3, row: 2, icon: "∥⊥", chips: ["m₁=m₂","−1/m"], pre: ["a1-line-forms"] },
    { id: "a1-sys-graph",        col: 3, row: 3, icon: "╳", chips: ["1","0","∞"], pre: ["a1-line-forms"] },
    { id: "a1-linear-models",    col: 3, row: 4, icon: "∴", chips: ["fit","r"], pre: ["a1-line-forms"] },
    { id: "a1-poly-div",         col: 3, row: 5, icon: "P÷Q", chips: ["long ÷","R"], pre: ["a1-poly-mult"] },
    { id: "a1-factor-gcf",       col: 3, row: 6, icon: "GCF", chips: ["gcf","group"], pre: ["a1-poly-mult"] },
    { id: "a1-radical-ops",      col: 3, row: 8, icon: "√±√", chips: ["conj","rat."], pre: ["a1-radicals","a1-poly-mult"] },
    { id: "a1-sys-ineq",         col: 4, row: 1, icon: "◩", chips: ["shade","∩"], pre: ["a1-sys-graph","a1-compound"] },
    { id: "a1-sys-sub",          col: 4, row: 3, icon: "y=…", chips: ["sub"], pre: ["a1-sys-graph","a1-literal"] },
    { id: "a1-factor-tri",       col: 4, row: 6, icon: "x²+bx", chips: ["ac","(x+p)(x+q)"], pre: ["a1-factor-gcf"] },
    { id: "a1-radical-eq",       col: 4, row: 8, icon: "√x=a", chips: ["square","check"], pre: ["a1-radical-ops","a1-multi-step"] },
    { id: "a1-exp-functions",    col: 4, row: 9, icon: "bˣ", chips: ["growth","decay"], pre: ["a1-functions","a1-rational-exp","percent-apps"] },
    { id: "a1-sys-elim",         col: 5, row: 3, icon: "±eq", chips: ["elim"], pre: ["a1-sys-sub"] },
    { id: "a1-factor-special",   col: 5, row: 6, icon: "a²−b²", chips: ["(a±b)²","a³±b³"], pre: ["a1-factor-tri"] },
    { id: "a1-quad-factor",      col: 5, row: 7, icon: "ab=0", chips: ["zero prod."], pre: ["a1-factor-tri"] },
    { id: "a1-sequences",        col: 5, row: 9, icon: "×r", chips: ["aₙ","r"], pre: ["a1-exp-functions","pa-sequences"] },
    { id: "a1-sys-apps",         col: 6, row: 3, icon: "2×2", chips: ["mix","rate"], pre: ["a1-sys-elim"] },
    { id: "a1-rational-simplify",col: 6, row: 5, icon: "P/Q", chips: ["×","÷","x≠"], pre: ["a1-factor-special","fraction-ops"] },
    { id: "a1-quad-sqrt",        col: 6, row: 7, icon: "(x+h)²", chips: ["±√","CTS"], pre: ["a1-quad-factor","a1-radicals"] },
    { id: "a1-rational-add",     col: 7, row: 5, icon: "P/Q+R/S", chips: ["LCD"], pre: ["a1-rational-simplify"] },
    { id: "a1-quad-formula",     col: 7, row: 7, icon: "±√Δ", chips: ["b²−4ac"], pre: ["a1-quad-sqrt"] },
    { id: "a1-rational-eq",      col: 8, row: 5, icon: "=P/Q", chips: ["work","extraneous"], pre: ["a1-rational-add"] },
    { id: "a1-quad-graphs",      col: 8, row: 7, icon: "∪", chips: ["vertex","axis"], pre: ["a1-quad-formula","a1-functions"] },
    { id: "a1-quad-apps",        col: 9, row: 7, icon: "h(t)", chips: ["max","area"], pre: ["a1-quad-graphs"] }
  ]
};

DB.trees["geometry"] = {
  eras: [
    { name: "Foundations & Proof", from: 0, to: 2 },
    { name: "Lines, Triangles & Congruence", from: 3, to: 6 },
    { name: "Similarity, Circles & Right Triangles", from: 7, to: 9 },
    { name: "Trigonometry & Measurement", from: 10, to: 12 }
  ],
  nodes: [
    { id: "g-basics", col: 0, row: 3, icon: "•—", chips: ["point","line","plane"], pre: ["pa-coordinate"] },
    { id: "g-logic", col: 0, row: 7, icon: "p→q", chips: ["conv.","contra."], pre: ["a1-compound"] },
    { id: "g-segments", col: 1, row: 1, icon: "|AB|", chips: ["d","M"], pre: ["g-basics","pa-pythagorean","a1-radicals"] },
    { id: "g-angles", col: 1, row: 4, icon: "∠", chips: ["acute","obtuse"], pre: ["g-basics"] },
    { id: "g-reasoning", col: 1, row: 7, icon: "∴", chips: ["conj.","syllog."], pre: ["g-logic"] },
    { id: "g-constructions", col: 2, row: 0, icon: "⌒", chips: ["copy","bisect"], pre: ["g-segments","g-angles"] },
    { id: "g-angle-pairs", col: 2, row: 4, icon: "✕", chips: ["comp","supp","vert."], pre: ["g-angles","a1-multi-step"] },
    { id: "g-proofs", col: 2, row: 7, icon: "⊢", chips: ["stmt","reason"], pre: ["g-reasoning","g-segments","g-angles"] },
    { id: "g-parallel", col: 3, row: 4, icon: "∥", chips: ["corr.","alt. int."], pre: ["g-angle-pairs","g-proofs"] },
    { id: "g-transformations", col: 3, row: 8, icon: "↻", chips: ["T","r","R"], pre: ["g-segments","g-angles","pa-coordinate"] },
    { id: "g-triangle-angles", col: 4, row: 4, icon: "180°", chips: ["Σ=180","ext."], pre: ["g-parallel"] },
    { id: "g-symmetry", col: 4, row: 9, icon: "⟲", chips: ["glide","order"], pre: ["g-transformations"] },
    { id: "g-polygons", col: 5, row: 2, icon: "⬡", chips: ["(n−2)180","360°"], pre: ["g-triangle-angles"] },
    { id: "g-congruence", col: 5, row: 5, icon: "≅", chips: ["SSS","SAS","ASA"], pre: ["g-triangle-angles","g-transformations","g-proofs"] },
    { id: "g-dilations", col: 5, row: 8, icon: "×k", chips: ["k","centre"], pre: ["g-transformations","proportions"] },
    { id: "g-quadrilaterals", col: 6, row: 1, icon: "▱", chips: ["▱","◇","□"], pre: ["g-polygons","g-congruence","g-parallel"] },
    { id: "g-isosceles", col: 6, row: 3, icon: "△", chips: ["base ∠s"], pre: ["g-congruence"] },
    { id: "g-bisectors", col: 6, row: 5, icon: "⊙", chips: ["circum.","in.","centroid"], pre: ["g-congruence","g-constructions"] },
    { id: "g-tri-inequality", col: 6, row: 6, icon: "a+b>c", chips: ["a+b>c","hinge"], pre: ["g-congruence","a1-compound"] },
    { id: "g-similarity", col: 6, row: 8, icon: "∼", chips: ["k","P ∝ k"], pre: ["g-dilations","g-polygons","pa-similar"] },
    { id: "g-coord-proofs", col: 7, row: 0, icon: "(x,y)⊢", chips: ["slope","dist"], pre: ["g-quadrilaterals","g-segments","a1-par-perp"] },
    { id: "g-area-polygons", col: 7, row: 1, icon: "½bh", chips: ["bh","½(b₁+b₂)h"], pre: ["g-quadrilaterals","pa-formulas"] },
    { id: "g-circles", col: 7, row: 3, icon: "◠", chips: ["arc°","minor","major"], pre: ["g-isosceles","g-polygons"] },
    { id: "g-similar-triangles", col: 7, row: 7, icon: "△∼△", chips: ["AA","SAS∼"], pre: ["g-similarity","g-congruence"] },
    { id: "g-solids", col: 8, row: 0, icon: "⬢", chips: ["V−E+F","net"], pre: ["g-polygons","g-area-polygons"] },
    { id: "g-circle-equations", col: 8, row: 2, icon: "(x−h)²", chips: ["(h,k)","r"], pre: ["g-circles","g-segments","a1-quad-sqrt"] },
    { id: "g-inscribed", col: 8, row: 4, icon: "∠◯", chips: ["½ arc","90°"], pre: ["g-circles","g-isosceles"] },
    { id: "g-pythagorean", col: 8, row: 6, icon: "a²+b²", chips: ["converse","acute/obtuse"], pre: ["g-similar-triangles","pa-pythagorean"] },
    { id: "g-geo-mean", col: 8, row: 7, icon: "√ab", chips: ["h²=pq"], pre: ["g-similar-triangles"] },
    { id: "g-proportionality", col: 8, row: 8, icon: "∥÷", chips: ["split","bisector"], pre: ["g-similar-triangles"] },
    { id: "g-chords-tangents", col: 9, row: 3, icon: "⌒|", chips: ["⊥ radius","equal tangents"], pre: ["g-circles","g-pythagorean","g-congruence"] },
    { id: "g-special-right", col: 9, row: 6, icon: "1:1:√2", chips: ["45-45-90","30-60-90"], pre: ["g-pythagorean","g-isosceles","a1-radicals"] },
    { id: "g-circle-measure", col: 10, row: 1, icon: "πr²", chips: ["2πr","sector"], pre: ["g-area-polygons","g-special-right","g-circles"] },
    { id: "g-circle-segments", col: 10, row: 3, icon: "PA·PB", chips: ["power","½(a±b)"], pre: ["g-chords-tangents","g-inscribed","g-similar-triangles"] },
    { id: "g-trig-ratios", col: 10, row: 6, icon: "sin", chips: ["SOH","CAH","TOA"], pre: ["g-special-right","g-similar-triangles"] },
    { id: "g-surface-area", col: 11, row: 0, icon: "SA", chips: ["L+2B","πrℓ"], pre: ["g-solids","g-circle-measure","g-pythagorean"] },
    { id: "g-volume", col: 11, row: 2, icon: "V=Bh", chips: ["Bh","⅓Bh","⁴⁄₃πr³"], pre: ["g-solids","g-circle-measure"] },
    { id: "g-similar-solids", col: 12, row: 1, icon: "k²,k³", chips: ["k","k²","k³"], pre: ["g-surface-area","g-volume","g-similarity"] }
  ]
};

/* Fields of mathematics (sidebar + field map).
   status: "charted" (tree built) or "planned". */
DB.fieldGroups = [
  { name: "Foundations", ids: ["arithmetic","pre-algebra"] },
  { name: "Core Sequence", ids: ["algebra-1","geometry","algebra-2","trigonometry","precalculus"] },
  { name: "Calculus", ids: ["calculus-1","calculus-2","calculus-3","diff-eq"] },
  { name: "Data & Chance", ids: ["statistics","probability"] },
  { name: "Upper Division", ids: ["linear-algebra","discrete","number-theory","abstract-algebra","real-analysis","complex-analysis","topology","numerical-analysis"] }
];

DB.fields = {
  "arithmetic": { name: "Arithmetic", icon: "+", level: "Grades K–6 · college developmental math", col: 0, row: 3, pre: [], status: "charted",
    blurb: "The numbers themselves and the four operations on them: whole numbers, integers, fractions, decimals, percents, ratios and powers. Every later field assumes these are automatic.",
    topics: [] },
  "pre-algebra": { name: "Pre-Algebra", icon: "x", level: "Grades 6–8 · college MATH 0xx", col: 1, row: 3, pre: ["arithmetic"], status: "charted",
    blurb: "The bridge from numbers to symbols. Variables stand in for unknown numbers, and the laws of arithmetic become rules for rewriting expressions.",
    topics: ["Variables and algebraic expressions","Evaluating and simplifying expressions","Combining like terms","One- and two-step linear equations","Linear inequalities on a number line","Integer exponents and exponent laws","Coordinate plane and plotting points","Introduction to functions and tables","Perimeter, area and volume formulas","The Pythagorean theorem"] },
  "algebra-1": { name: "Algebra I", icon: "y=mx+b", level: "Grade 9 · college elementary algebra", col: 2, row: 3, pre: ["pre-algebra"], status: "charted",
    blurb: "Linear relationships, systems of equations, polynomials and a first look at quadratics. This is where modelling a situation with an equation becomes routine.",
    topics: ["Multi-step linear equations and literal equations","Slope, intercepts and forms of a line","Graphing linear functions","Systems of linear equations (substitution, elimination)","Linear inequalities and systems of inequalities","Polynomial operations","Factoring (GCF, trinomials, difference of squares)","Quadratic equations: factoring, square roots, quadratic formula","Radicals and rational exponents","Function notation, domain and range"] },
  "geometry": { name: "Geometry", icon: "△", level: "Grade 10 · college-prep Euclidean geometry", col: 3, row: 2, pre: ["algebra-1"], status: "charted",
    blurb: "Shape, size and position, built from axioms with deductive proof. Congruence, similarity, circles and measurement.",
    topics: [] },
  "algebra-2": { name: "Algebra II", icon: "f(x)", level: "Grade 11 · college intermediate algebra", col: 4, row: 3, pre: ["algebra-1","geometry"], status: "planned",
    blurb: "A wider family of functions: quadratics in depth, polynomials, rational, radical, exponential and logarithmic functions, plus complex numbers and sequences.",
    topics: ["Quadratic functions and completing the square","Complex numbers","Polynomial division, Remainder and Factor Theorems","Rational expressions and equations","Radical equations","Exponential functions and growth/decay","Logarithms and their laws","Sequences and series (arithmetic, geometric)","Systems in three variables and matrices intro","Conic sections"] },
  "trigonometry": { name: "Trigonometry", icon: "sin", level: "Grade 11–12 · college trigonometry", col: 5, row: 2, pre: ["geometry","algebra-2"], status: "planned",
    blurb: "Angles and the ratios of triangle sides, extended to periodic functions on the unit circle. The language of waves, rotation and navigation.",
    topics: ["Radian and degree measure","Right-triangle ratios (SOH-CAH-TOA)","The unit circle","Graphs of sine, cosine and tangent","Inverse trigonometric functions","Trigonometric identities","Solving trigonometric equations","Law of Sines and Law of Cosines","Polar coordinates","Vectors in the plane"] },
  "precalculus": { name: "Precalculus", icon: "→", level: "Grade 12 · college precalculus", col: 6, row: 3, pre: ["algebra-2","trigonometry"], status: "planned",
    blurb: "A unified study of functions as objects: transformations, composition, inverses and limits of behaviour. Prepares the exact toolkit calculus uses.",
    topics: ["Functions: composition and inverses","Transformations of graphs","Polynomial and rational function behaviour","Exponential and logarithmic modelling","Trigonometric functions as functions","Parametric equations","Sequences, series and sigma notation","Introduction to limits","Complex numbers in polar form (De Moivre)","Matrices and determinants"] },
  "calculus-1": { name: "Calculus I", icon: "d/dx", level: "College MATH 1xx · AP Calculus AB", col: 7, row: 3, pre: ["precalculus"], status: "planned",
    blurb: "Rates of change. Limits make the idea of an instantaneous rate exact, and the derivative becomes a tool for motion, optimisation and approximation.",
    topics: ["Limits and continuity","Definition of the derivative","Differentiation rules (power, product, quotient, chain)","Derivatives of trig, exponential and log functions","Implicit differentiation","Related rates","Curve sketching and the Mean Value Theorem","Optimisation","Linear approximation and L'Hôpital's rule","Antiderivatives and the definite integral"] },
  "calculus-2": { name: "Calculus II", icon: "∫", level: "College MATH 1xx · AP Calculus BC", col: 8, row: 3, pre: ["calculus-1"], status: "planned",
    blurb: "Accumulation. Integration techniques, applications to area, volume and work, and infinite series that represent functions as polynomials.",
    topics: ["Fundamental Theorem of Calculus","Substitution and integration by parts","Trigonometric integrals and substitution","Partial fractions","Improper integrals","Area, volume, arc length, work","Sequences and convergence","Series tests","Power series and Taylor series","Parametric and polar calculus"] },
  "calculus-3": { name: "Calculus III", icon: "∇", level: "College MATH 2xx · multivariable", col: 9, row: 2, pre: ["calculus-2"], status: "planned",
    blurb: "Calculus in two and three dimensions: vectors, partial derivatives, multiple integrals and the theorems of Green, Stokes and Gauss.",
    topics: ["Vectors, dot and cross products","Lines, planes and surfaces","Vector-valued functions and motion","Partial derivatives and gradient","Lagrange multipliers","Double and triple integrals","Change of variables and Jacobians","Line integrals and conservative fields","Green's theorem","Stokes' and divergence theorems"] },
  "diff-eq": { name: "Differential Equations", icon: "y′", level: "College MATH 2xx", col: 10, row: 3, pre: ["calculus-2","linear-algebra"], status: "planned",
    blurb: "Equations whose unknown is a function, defined by how it changes. The main language of physics, engineering, biology and economics models.",
    topics: ["First-order equations: separable, linear, exact","Existence and uniqueness","Modelling: growth, cooling, mixing","Second-order linear equations","Undetermined coefficients and variation of parameters","Mechanical vibrations and resonance","Laplace transforms","Systems of first-order equations","Phase plane and stability","Series solutions"] },
  "statistics": { name: "Statistics", icon: "σ", level: "College STAT 1xx · AP Statistics", col: 5, row: 5, pre: ["algebra-2"], status: "planned",
    blurb: "Learning from data. Describing distributions, designing studies, and using probability to measure how far conclusions can be trusted.",
    topics: ["Types of data and sampling","Descriptive statistics and graphs","Measures of centre and spread","Normal distribution and z-scores","Correlation and linear regression","Experimental design","Sampling distributions and the Central Limit Theorem","Confidence intervals","Hypothesis testing (z, t, χ²)","ANOVA and nonparametric tests"] },
  "probability": { name: "Probability", icon: "P", level: "College MATH 3xx (calculus-based)", col: 9, row: 5, pre: ["calculus-2","discrete"], status: "planned",
    blurb: "The mathematics of uncertainty: sample spaces, random variables and distributions, with limit theorems that explain why averages stabilise.",
    topics: ["Axioms of probability and counting","Conditional probability and Bayes' theorem","Independence","Discrete random variables (binomial, Poisson, geometric)","Continuous random variables (uniform, exponential, normal)","Expectation and variance","Joint distributions and covariance","Moment generating functions","Law of Large Numbers","Central Limit Theorem"] },
  "linear-algebra": { name: "Linear Algebra", icon: "[A]", level: "College MATH 2xx", col: 9, row: 4, pre: ["calculus-2"], status: "planned",
    blurb: "Vectors, matrices and linear transformations. The working mathematics of computer graphics, machine learning, data science and quantum physics.",
    topics: ["Systems of equations and row reduction","Matrix algebra and inverses","Determinants","Vector spaces and subspaces","Linear independence, basis and dimension","Linear transformations","Eigenvalues and eigenvectors","Diagonalisation","Orthogonality and least squares","Singular value decomposition"] },
  "discrete": { name: "Discrete Mathematics", icon: "{ }", level: "College MATH/CS 2xx", col: 5, row: 6, pre: ["algebra-2"], status: "planned",
    blurb: "The mathematics of separate, countable things, and the first course in writing proofs. Core to computer science.",
    topics: ["Propositional and predicate logic","Proof techniques: direct, contrapositive, contradiction","Mathematical induction","Sets, relations and functions","Counting: permutations and combinations","Pigeonhole principle","Recurrence relations","Graph theory basics","Trees","Elementary number theory and modular arithmetic"] },
  "number-theory": { name: "Number Theory", icon: "≡", level: "College MATH 3xx", col: 6, row: 6, pre: ["discrete"], status: "planned",
    blurb: "The properties of the integers: divisibility, primes and congruences, and the mathematics behind modern encryption.",
    topics: ["Divisibility and the Euclidean algorithm","Fundamental Theorem of Arithmetic","Linear Diophantine equations","Congruences","Fermat's little theorem and Euler's theorem","Chinese Remainder Theorem","Primitive roots","Quadratic residues and reciprocity","Arithmetic functions","RSA cryptography"] },
  "abstract-algebra": { name: "Abstract Algebra", icon: "G", level: "College MATH 4xx", col: 10, row: 5, pre: ["linear-algebra","number-theory"], status: "planned",
    blurb: "Structures defined by their operations: groups, rings and fields. Explains why the laws of arithmetic work and where else they hold.",
    topics: ["Groups and subgroups","Cyclic and permutation groups","Lagrange's theorem","Homomorphisms and isomorphisms","Quotient groups","Rings and ideals","Integral domains and fields","Polynomial rings","Field extensions","Galois theory introduction"] },
  "real-analysis": { name: "Real Analysis", icon: "ε", level: "College MATH 4xx", col: 10, row: 1, pre: ["calculus-3","discrete"], status: "planned",
    blurb: "The rigorous foundation of calculus. Completeness of the real numbers, limits with epsilon and delta, and proofs of the theorems calculus uses.",
    topics: ["Construction and completeness of ℝ","Sequences and Cauchy sequences","Series and convergence","Topology of the real line","Limits and continuity (ε–δ)","Uniform continuity","Differentiation theorems","Riemann integration","Sequences and series of functions","Uniform convergence"] },
  "complex-analysis": { name: "Complex Analysis", icon: "ℂ", level: "College MATH 4xx", col: 11, row: 2, pre: ["calculus-3","real-analysis"], status: "planned",
    blurb: "Calculus with complex numbers. Differentiable complex functions are unusually rigid, which yields powerful tools for integrals and physics.",
    topics: ["Complex numbers and the complex plane","Analytic functions and Cauchy–Riemann equations","Elementary complex functions","Contour integrals","Cauchy's theorem and integral formula","Taylor and Laurent series","Singularities and residues","Residue theorem and real integrals","Conformal mapping","Harmonic functions"] },
  "topology": { name: "Topology", icon: "∘", level: "College MATH 4xx", col: 11, row: 0, pre: ["real-analysis"], status: "planned",
    blurb: "The study of properties preserved under continuous stretching. Generalises the ideas of nearness, continuity and connectedness.",
    topics: ["Topological spaces and open sets","Bases and subspaces","Continuous functions and homeomorphisms","Product and quotient spaces","Connectedness","Compactness","Metric spaces","Separation axioms","Fundamental group","Classification of surfaces"] },
  "numerical-analysis": { name: "Numerical Analysis", icon: "≈", level: "College MATH 4xx", col: 11, row: 4, pre: ["linear-algebra","diff-eq"], status: "planned",
    blurb: "Algorithms that compute answers to continuous problems on real computers, and the analysis of how accurate and stable they are.",
    topics: ["Floating-point arithmetic and error","Root finding (bisection, Newton's method)","Interpolation and polynomial approximation","Numerical differentiation","Numerical integration (quadrature)","Direct methods for linear systems","Iterative methods","Eigenvalue algorithms","Numerical ODE solvers","Stability and convergence"] }
};

DB.fieldEras = [
  { name: "Foundations", from: 0, to: 1 },
  { name: "Core Sequence", from: 2, to: 6 },
  { name: "Calculus & Beyond", from: 7, to: 9 },
  { name: "Upper Division", from: 10, to: 11 }
];

/* Dictionary subjects, grouped the way universities group them.
   group: "stem" | "humanities" | "social" (see DB.subjectGroups). status "open" = has a field map. */
DB.subjectGroups = [
  { id: "stem", name: "STEM", line: "Science, technology, engineering and mathematics", accent: "cyan" },
  { id: "humanities", name: "Arts & Humanities", line: "Language, literature, the arts and ideas", accent: "magenta" },
  { id: "social", name: "Social Sciences", line: "How people, markets and societies behave", accent: "lime" }
];
DB.subjects = [
  { id: "mathematics", group: "stem", name: "Mathematics", glyph: "∑", status: "open", note: "21 fields · Arithmetic, Pre-Algebra, Algebra I and Geometry charted" },
  { id: "physics", group: "stem", name: "Physics", glyph: "⚛", status: "open", note: "17 fields · Mechanics charted" },
  { id: "chemistry", group: "stem", name: "Chemistry", glyph: "⌬", status: "locked", note: "Not yet charted" },
  { id: "biology", group: "stem", name: "Biology", glyph: "❦", status: "locked", note: "Not yet charted" },
  { id: "computer-science", group: "stem", name: "Computer Science", glyph: "<span class=\"gx\">&lt;/&gt;</span>", status: "locked", note: "Not yet charted" },
  { id: "physical-geography", group: "stem", name: "Physical Geography", glyph: "∆", status: "locked", note: "Not yet charted" },
  { id: "english", group: "humanities", name: "English", glyph: "¶", status: "open", note: "20 fields · Grammar & Usage charted" },
  { id: "music-theory", group: "humanities", name: "Music Theory", glyph: "♪", status: "locked", note: "Not yet charted" },
  { id: "visual-arts", group: "humanities", name: "Visual Arts", glyph: "◈", status: "locked", note: "Not yet charted" },
  { id: "philosophy", group: "humanities", name: "Philosophy", glyph: "Φ", status: "locked", note: "Not yet charted" },
  { id: "economics", group: "social", name: "Economics", glyph: "¤", status: "locked", note: "Not yet charted" },
  { id: "political-science", group: "social", name: "Political Science", glyph: "⚖", status: "locked", note: "Not yet charted" },
  { id: "human-geography", group: "social", name: "Human Geography", glyph: "⌂", status: "locked", note: "Not yet charted" },
  { id: "international-relations", group: "social", name: "International Relations", glyph: "⇌", status: "locked", note: "Not yet charted" }
];

/* ============ Physics ============
   Physics fields live in DB.fields too (ids unique across subjects) with subject: "physics".
   A field's `math` lists the math fields it needs. A node's `math` lists the math it needs:
   a charted math topic id, or "field:Topic name" (exact name from that field's topics list).
   Math entries are informational and never lock a node. Spec: web/TREE-SPEC-PHYSICS.md */
DB.subjectMaps = {
  mathematics: { name: "Mathematics", glyph: "∑", groups: DB.fieldGroups, eras: DB.fieldEras, mapLine: "The whole path from arithmetic to analysis",
    mapSub: "The standard order of study from arithmetic to upper-division mathematics. Arrows show the usual prerequisites." },
  physics: { name: "Physics", glyph: "⚛", mapLine: "The whole path from mechanics to quantum field theory",
    mapSub: "The standard calculus-based college sequence, from Physics I to graduate topics. Arrows show physics prerequisites; each field lists the mathematics it needs.",
    groups: [
      { name: "Introductory Sequence", ids: ["mechanics","waves","thermodynamics","electromagnetism","optics","modern-physics"] },
      { name: "Intermediate Core", ids: ["math-methods","computational-physics","classical-mechanics","electrodynamics","quantum-mechanics","stat-mech"] },
      { name: "Specialisations", ids: ["general-relativity","astrophysics","nuclear-particle","condensed-matter","qft"] }
    ],
    eras: [
      { name: "Introductory Sequence", from: 0, to: 3 },
      { name: "Intermediate Core", from: 4, to: 6 },
      { name: "Specialisations", from: 7, to: 8 }
    ] }
};
Object.values(DB.fields).forEach(f => { if (!f.subject) f.subject = "mathematics"; });
Object.assign(DB.fields, {
  "mechanics": { subject: "physics", name: "Mechanics", icon: "ΣF", level: "College PHYS 1xx · University Physics I", col: 0, row: 3, pre: [], math: ["algebra-1","trigonometry","calculus-1"], status: "charted",
    blurb: "Motion and its causes: measurement, vectors, kinematics, Newton's laws, energy, momentum, rotation and gravitation. The first course in physics and the model for every later one.",
    topics: [] },
  "waves": { subject: "physics", name: "Waves & Fluids", icon: "∿", level: "College PHYS 1xx · University Physics I–II", col: 1, row: 2, pre: ["mechanics"], math: ["trigonometry","calculus-1"], status: "planned",
    blurb: "Things that repeat and things that flow: simple harmonic motion, damping and resonance, mechanical waves and sound, and fluid statics and dynamics.",
    topics: ["Fluid pressure and Pascal's principle","Buoyancy and Archimedes' principle","Fluid flow and Bernoulli's equation","Simple harmonic motion","Energy in SHM and the pendulum","Damped and driven oscillations, resonance","Travelling waves and the wave equation","Superposition, interference and standing waves","Sound: intensity, decibels and the Doppler effect","Beats and resonance in pipes and strings"] },
  "thermodynamics": { subject: "physics", name: "Thermodynamics", icon: "ΔS", level: "College PHYS 1xx · University Physics II", col: 1, row: 4, pre: ["mechanics"], math: ["calculus-1"], status: "planned",
    blurb: "Heat, temperature and energy transfer, the ideal gas and kinetic theory, and the laws that limit every engine and refrigerator.",
    topics: ["Temperature and thermal equilibrium","Thermal expansion","Heat, specific heat and phase changes","Heat transfer: conduction, convection, radiation","The ideal gas law","Kinetic theory of gases","The first law of thermodynamics","Thermodynamic processes and PV diagrams","Heat engines, refrigerators and the Carnot cycle","The second law and entropy"] },
  "electromagnetism": { subject: "physics", name: "Electricity & Magnetism", icon: "E·B", level: "College PHYS 2xx · University Physics II", col: 2, row: 3, pre: ["mechanics"], math: ["calculus-2","calculus-3"], status: "planned",
    blurb: "Charges, fields and circuits, magnetism and induction, ending with Maxwell's equations and electromagnetic waves.",
    topics: ["Electric charge and Coulomb's law","Electric fields","Gauss's law","Electric potential","Capacitance and dielectrics","Current, resistance and DC circuits","Magnetic fields and forces","Sources of magnetic fields (Biot–Savart, Ampère)","Faraday's law and inductance","AC circuits, Maxwell's equations and EM waves"] },
  "optics": { subject: "physics", name: "Optics", icon: "λ", level: "College PHYS 2xx · University Physics III", col: 3, row: 2, pre: ["electromagnetism","waves"], math: ["trigonometry","geometry"], status: "planned",
    blurb: "Light as rays and as waves: reflection, refraction, lenses and instruments, then interference, diffraction and polarisation.",
    topics: ["Nature of light and the speed of light","Reflection and refraction (Snell's law)","Total internal reflection and dispersion","Polarisation","Mirrors and image formation","Thin lenses and the lens equation","Optical instruments","Interference and Young's double slit","Thin-film interference","Diffraction and gratings"] },
  "modern-physics": { subject: "physics", name: "Modern Physics", icon: "hν", level: "College PHYS 2xx · University Physics III", col: 3, row: 4, pre: ["electromagnetism","waves"], math: ["calculus-2","algebra-2"], status: "planned",
    blurb: "The physics of the twentieth century: special relativity, light quanta, matter waves, atoms, nuclei and a first look at quantum mechanics.",
    topics: ["Special relativity: time dilation and length contraction","Relativistic momentum and energy","Blackbody radiation and photons","The photoelectric and Compton effects","Bohr model and atomic spectra","Matter waves and the uncertainty principle","Schrödinger equation and the particle in a box","Atomic structure and the periodic table","Nuclear structure and radioactive decay","Particle physics and cosmology overview"] },
  "math-methods": { subject: "physics", name: "Mathematical Methods for Physics", icon: "∮", level: "College PHYS 3xx", col: 4, row: 5, pre: ["electromagnetism"], math: ["calculus-3","linear-algebra","diff-eq"], status: "planned",
    blurb: "The mathematical toolkit of upper-division physics, taught with physical problems: vector calculus, linear algebra, series, Fourier analysis and special functions.",
    topics: ["Vector calculus in curvilinear coordinates","Linear algebra and eigenvalue problems","Complex numbers and functions","Series expansions and approximations","Ordinary differential equations","Fourier series and transforms","Partial differential equations and separation of variables","Legendre polynomials and spherical harmonics","Bessel functions","Green's functions and the delta function"] },
  "computational-physics": { subject: "physics", name: "Computational Physics", icon: "</>", level: "College PHYS 3xx", col: 4, row: 7, pre: ["mechanics","math-methods"], math: ["numerical-analysis","linear-algebra"], status: "planned",
    blurb: "Solving physics problems with a computer: numerical integration of motion, Monte Carlo methods, and simulating fields and quantum systems.",
    topics: ["Floating-point error in physical calculations","Numerical derivatives and integrals","ODE solvers for trajectories (Euler, Runge–Kutta, Verlet)","Root finding and optimisation","Linear systems and eigenvalue solvers","Fourier transforms and the FFT","Monte Carlo methods and random walks","The Ising model","Solving PDEs on a grid","Time-dependent quantum simulations"] },
  "classical-mechanics": { subject: "physics", name: "Classical Mechanics", icon: "ℒ", level: "College PHYS 3xx · intermediate mechanics", col: 5, row: 1, pre: ["mechanics","waves","math-methods"], math: ["diff-eq","linear-algebra","calculus-3"], status: "planned",
    blurb: "Newtonian mechanics recast: Lagrangian and Hamiltonian formulations, central forces, rigid bodies, coupled oscillations and chaos.",
    topics: ["Newtonian mechanics revisited","Oscillators, damping and resonance","Calculus of variations","Lagrangian mechanics","Conservation laws and Noether's theorem","Central forces and orbits","Non-inertial frames","Rigid-body motion and the inertia tensor","Coupled oscillations and normal modes","Hamiltonian mechanics and chaos"] },
  "electrodynamics": { subject: "physics", name: "Electrodynamics", icon: "∇·E", level: "College PHYS 3xx–4xx", col: 5, row: 3, pre: ["electromagnetism","math-methods"], math: ["calculus-3","diff-eq"], status: "planned",
    blurb: "Maxwell's theory in full: electrostatics and magnetostatics with vector calculus, fields in matter, electromagnetic waves, radiation and relativity.",
    topics: ["Vector analysis and the Dirac delta","Electrostatics and boundary conditions","Laplace's equation and the method of images","Multipole expansion","Electric fields in matter","Magnetostatics and vector potential","Magnetic fields in matter","Electrodynamics and Maxwell's equations","Electromagnetic waves and radiation","Relativistic electrodynamics"] },
  "quantum-mechanics": { subject: "physics", name: "Quantum Mechanics", icon: "ψ", level: "College PHYS 4xx", col: 5, row: 5, pre: ["modern-physics","math-methods"], math: ["linear-algebra","diff-eq","probability"], status: "planned",
    blurb: "The theory of the very small: wavefunctions, operators and measurement, the harmonic oscillator and hydrogen atom, spin and approximation methods.",
    topics: ["The wavefunction and the Born rule","Time-independent Schrödinger equation","Infinite well and harmonic oscillator","Free particle, scattering and tunnelling","Formalism: Hilbert space, operators and observables","Angular momentum and the hydrogen atom","Spin","Identical particles","Perturbation theory","Variational principle and WKB approximation"] },
  "stat-mech": { subject: "physics", name: "Thermal & Statistical Physics", icon: "k ln W", level: "College PHYS 4xx", col: 6, row: 6, pre: ["thermodynamics","quantum-mechanics"], math: ["probability","calculus-3"], status: "planned",
    blurb: "Why thermodynamics works: counting microstates, the Boltzmann distribution, partition functions and quantum gases.",
    topics: ["Microstates, macrostates and multiplicity","Entropy and temperature from counting","The Boltzmann factor","The partition function","Equipartition and heat capacities","Free energies and chemical potential","Phase transitions","Quantum statistics: Fermi–Dirac and Bose–Einstein","Blackbody radiation and phonons","Degenerate Fermi gases and Bose–Einstein condensation"] },
  "general-relativity": { subject: "physics", name: "General Relativity", icon: "Gμν", level: "College PHYS 4xx · graduate", col: 7, row: 0, pre: ["classical-mechanics","electrodynamics"], math: ["linear-algebra","calculus-3","diff-eq"], status: "planned",
    blurb: "Gravity as the curvature of spacetime: tensors, geodesics, Einstein's field equations, black holes, gravitational waves and cosmology.",
    topics: ["Special relativity in four-vector form","The equivalence principle","Tensors and the metric","Geodesics","Curvature and the Riemann tensor","Einstein's field equations","The Schwarzschild solution","Black holes","Gravitational waves","Cosmology and the FLRW metric"] },
  "astrophysics": { subject: "physics", name: "Astrophysics & Cosmology", icon: "☉", level: "College PHYS/ASTR 4xx", col: 7, row: 2, pre: ["classical-mechanics","modern-physics","stat-mech"], math: ["diff-eq","calculus-3"], status: "planned",
    blurb: "Physics applied to the universe: stellar structure and evolution, compact objects, galaxies, and the expanding universe.",
    topics: ["Celestial mechanics and binary stars","Radiation and stellar spectra","Stellar structure equations","Nuclear fusion in stars","Stellar evolution","White dwarfs, neutron stars and black holes","The interstellar medium","Galaxies and dark matter","The expanding universe and the Big Bang","The cosmic microwave background"] },
  "nuclear-particle": { subject: "physics", name: "Nuclear & Particle Physics", icon: "ν", level: "College PHYS 4xx", col: 7, row: 4, pre: ["quantum-mechanics"], math: ["linear-algebra","probability"], status: "planned",
    blurb: "The structure of nuclei and the elementary particles and forces of the Standard Model.",
    topics: ["Nuclear properties and binding energy","Nuclear models","Radioactive decay and decay laws","Nuclear reactions, fission and fusion","Particle detectors and accelerators","Relativistic kinematics of collisions","Leptons, quarks and hadrons","Symmetries and conservation laws","The electroweak and strong interactions","The Standard Model and beyond"] },
  "condensed-matter": { subject: "physics", name: "Condensed Matter Physics", icon: "⌗", level: "College PHYS 4xx", col: 7, row: 6, pre: ["quantum-mechanics","stat-mech"], math: ["linear-algebra","diff-eq"], status: "planned",
    blurb: "The physics of solids and liquids: crystals, electrons in periodic potentials, semiconductors, magnetism and superconductivity.",
    topics: ["Crystal structure and the reciprocal lattice","X-ray diffraction","Lattice vibrations and phonons","Free electron model","Band theory","Semiconductors","Magnetism in solids","Superconductivity","Dielectrics and optical properties","Soft matter overview"] },
  "qft": { subject: "physics", name: "Quantum Field Theory", icon: "ϕ", level: "Graduate PHYS 5xx", col: 8, row: 3, pre: ["quantum-mechanics","electrodynamics","classical-mechanics"], math: ["complex-analysis","linear-algebra","abstract-algebra"], status: "planned",
    blurb: "Quantum mechanics merged with special relativity: fields as the basic objects, particles as their excitations, and the framework of the Standard Model.",
    topics: ["Classical field theory and Lagrangian densities","Symmetries and Noether currents","Canonical quantisation of the scalar field","The Dirac equation","Quantising the electromagnetic field","Interactions and perturbation theory","Feynman diagrams","Quantum electrodynamics","Renormalisation","Gauge theories"] }
});

DB.trees["mechanics"] = {
  eras: [
    { name: "Measurement & Vectors", from: 0, to: 3 },
    { name: "Kinematics", from: 4, to: 9 },
    { name: "Newton's Laws", from: 10, to: 15 },
    { name: "Energy & Momentum", from: 16, to: 20 },
    { name: "Rotation", from: 21, to: 24 },
    { name: "Gravitation", from: 25, to: 27 }
  ],
  nodes: [
    { id: "mech-units", col: 0, row: 3, icon: "SI", chips: ["m","kg","s"], pre: [], math: ["units","sci-notation","a1-exponents"] },
    { id: "mech-dimensions", col: 1, row: 2, icon: "[L]", chips: ["[L]","[M]","[T]"], pre: ["mech-units"], math: ["pa-exponent-laws","a1-literal","proportions"] },
    { id: "mech-vectors", col: 1, row: 5, icon: "→", chips: ["A+B","|A|"], pre: ["mech-units"], math: ["pa-coordinate","pa-pythagorean","g-angles"] },
    { id: "mech-sigfigs", col: 2, row: 2, icon: "±", chips: ["3 s.f.","±δ"], pre: ["mech-dimensions"], math: ["rounding","sci-notation"] },
    { id: "mech-components", col: 2, row: 5, icon: "î ĵ", chips: ["Ax","Ay","θ"], pre: ["mech-vectors"], math: ["pa-pythagorean","g-trig-ratios","trig-inverse","trig-vectors"] },
    { id: "mech-vector-products", col: 3, row: 6, icon: "A×B", chips: ["A·B","A×B"], pre: ["mech-components"], math: ["g-trig-ratios","precalculus:Matrices and determinants","calculus-3:Vectors, dot and cross products"] },
    { id: "mech-displacement", col: 4, row: 3, icon: "Δx", chips: ["x","Δx"], pre: ["mech-vectors"], math: ["integers","pa-coordinate","a1-functions"] },
    { id: "mech-velocity", col: 5, row: 3, icon: "v", chips: ["Δx/Δt","dx/dt"], pre: ["mech-displacement"], math: ["pa-slope","a1-slope-forms","calculus-1:Definition of the derivative"] },
    { id: "mech-acceleration", col: 6, row: 3, icon: "a", chips: ["dv/dt","m/s²"], pre: ["mech-velocity"], math: ["pa-slope","calculus-1:Differentiation rules (power, product, quotient, chain)"] },
    { id: "mech-const-accel", col: 7, row: 2, icon: "v²", chips: ["v=v₀+at","½at²"], pre: ["mech-acceleration"], math: ["a1-literal","a1-quad-formula","a1-sys-sub"] },
    { id: "mech-motion-integration", col: 7, row: 4, icon: "∫a dt", chips: ["∫a dt","∫v dt"], pre: ["mech-acceleration"], math: ["calculus-1:Antiderivatives and the definite integral","calculus-2:Fundamental Theorem of Calculus"] },
    { id: "mech-free-fall", col: 8, row: 1, icon: "g", chips: ["9.80","↓"], pre: ["mech-const-accel"], math: ["a1-quad-apps","a1-quad-formula"] },
    { id: "mech-2d-motion", col: 8, row: 3, icon: "r(t)", chips: ["r","v","a"], pre: ["mech-const-accel","mech-components"], math: ["pa-coordinate","trig-vectors","precalculus:Parametric equations"] },
    { id: "mech-projectile", col: 9, row: 1, icon: "⌒", chips: ["θ","R","H"], pre: ["mech-2d-motion","mech-free-fall"], math: ["g-trig-ratios","trig-double-half","a1-quad-graphs"] },
    { id: "mech-circular", col: 9, row: 3, icon: "○", chips: ["v²/r","T"], pre: ["mech-2d-motion"], math: ["trig-radians","trig-unit-circle","calculus-1:Derivatives of trig, exponential and log functions"] },
    { id: "mech-relative", col: 9, row: 5, icon: "v′", chips: ["vAB","vBC"], pre: ["mech-2d-motion"], math: ["pa-pythagorean","trig-law-cosines"] },
    { id: "mech-forces", col: 10, row: 3, icon: "ΣF", chips: ["N","FBD"], pre: ["mech-components","mech-acceleration"], math: ["trig-vectors","pa-pythagorean"] },
    { id: "mech-newton-1", col: 11, row: 3, icon: "I", chips: ["ΣF=0","inertia"], pre: ["mech-forces"], math: ["trig-vectors"] },
    { id: "mech-newton-2", col: 12, row: 2, icon: "F=ma", chips: ["ma","mg"], pre: ["mech-newton-1"], math: ["a1-literal","pa-proportional"] },
    { id: "mech-newton-3", col: 12, row: 4, icon: "⇄", chips: ["FAB","−FBA"], pre: ["mech-newton-1"], math: ["a1-sys-elim"] },
    { id: "mech-common-forces", col: 13, row: 3, icon: "N T", chips: ["N","T","−kx"], pre: ["mech-newton-2","mech-newton-3"], math: ["pa-proportional","a1-slope-forms","g-trig-ratios"] },
    { id: "mech-friction", col: 14, row: 3, icon: "μ", chips: ["μs","μk"], pre: ["mech-common-forces"], math: ["a1-compound","g-trig-ratios"] },
    { id: "mech-centripetal", col: 14, row: 1, icon: "Fc", chips: ["mv²/r","bank"], pre: ["mech-common-forces","mech-circular"], math: ["g-trig-ratios","a1-radicals"] },
    { id: "mech-newton-apps", col: 15, row: 4, icon: "◿", chips: ["θ","T","a"], pre: ["mech-friction"], math: ["a1-sys-elim","g-trig-ratios"] },
    { id: "mech-drag", col: 15, row: 2, icon: "vT", chips: ["½CρAv²","vT"], pre: ["mech-friction","mech-motion-integration"], math: ["a1-exp-functions","calculus-1:Limits and continuity","diff-eq:First-order equations: separable, linear, exact"] },
    { id: "mech-work", col: 16, row: 2, icon: "W", chips: ["F·d","J"], pre: ["mech-newton-2","mech-vector-products"], math: ["g-trig-ratios","calculus-1:Antiderivatives and the definite integral","calculus-2:Area, volume, arc length, work"] },
    { id: "mech-impulse", col: 16, row: 5, icon: "J", chips: ["p=mv","FΔt"], pre: ["mech-newton-3","mech-motion-integration"], math: ["a1-literal","calculus-1:Antiderivatives and the definite integral"] },
    { id: "mech-kinetic", col: 17, row: 2, icon: "K", chips: ["½mv²","ΔK"], pre: ["mech-work"], math: ["a1-radicals","a1-literal"] },
    { id: "mech-power", col: 17, row: 0, icon: "P", chips: ["W/t","F·v"], pre: ["mech-work"], math: ["a1-literal","calculus-1:Definition of the derivative"] },
    { id: "mech-momentum-cons", col: 17, row: 5, icon: "Σp", chips: ["Σp=const"], pre: ["mech-impulse"], math: ["a1-sys-sub","trig-vectors"] },
    { id: "mech-potential", col: 18, row: 2, icon: "U", chips: ["mgh","½kx²"], pre: ["mech-kinetic","mech-common-forces"], math: ["calculus-1:Antiderivatives and the definite integral","calculus-1:Differentiation rules (power, product, quotient, chain)"] },
    { id: "mech-collisions", col: 18, row: 4, icon: "⊕", chips: ["elastic","inelastic"], pre: ["mech-momentum-cons","mech-kinetic"], math: ["a1-sys-elim","a1-quad-formula","trig-vectors"] },
    { id: "mech-center-mass", col: 18, row: 6, icon: "cm", chips: ["Σmr/M"], pre: ["mech-momentum-cons"], math: ["averages","calculus-2:Area, volume, arc length, work"] },
    { id: "mech-energy-cons", col: 19, row: 2, icon: "E", chips: ["K+U","ΔE=0"], pre: ["mech-potential"], math: ["a1-radicals","a1-sys-sub"] },
    { id: "mech-energy-diagrams", col: 20, row: 2, icon: "U(x)", chips: ["U(x)","−dU/dx"], pre: ["mech-energy-cons"], math: ["a1-quad-graphs","calculus-1:Curve sketching and the Mean Value Theorem"] },
    { id: "mech-rot-kinematics", col: 21, row: 3, icon: "ω", chips: ["θ","ω","α"], pre: ["mech-circular"], math: ["trig-radians","calculus-1:Definition of the derivative"] },
    { id: "mech-rot-inertia", col: 22, row: 2, icon: "I", chips: ["Σmr²","½Iω²"], pre: ["mech-rot-kinematics","mech-kinetic"], math: ["g-volume","calculus-1:Antiderivatives and the definite integral"] },
    { id: "mech-torque", col: 22, row: 4, icon: "τ", chips: ["r×F","N·m"], pre: ["mech-rot-kinematics","mech-vector-products","mech-newton-2"], math: ["g-trig-ratios","calculus-3:Vectors, dot and cross products"] },
    { id: "mech-rot-dynamics", col: 23, row: 3, icon: "Iα", chips: ["τ=Iα"], pre: ["mech-rot-inertia","mech-torque"], math: ["a1-literal","a1-sys-elim"] },
    { id: "mech-equilibrium", col: 23, row: 5, icon: "⚖", chips: ["ΣF=0","Στ=0"], pre: ["mech-torque","mech-center-mass"], math: ["a1-sys-elim","g-trig-ratios"] },
    { id: "mech-rolling", col: 24, row: 2, icon: "◉", chips: ["v=Rω"], pre: ["mech-rot-dynamics","mech-energy-cons"], math: ["a1-radicals","a1-sys-sub"] },
    { id: "mech-ang-momentum", col: 24, row: 4, icon: "L", chips: ["Iω","r×p"], pre: ["mech-rot-dynamics","mech-momentum-cons"], math: ["a1-literal","calculus-3:Vectors, dot and cross products"] },
    { id: "mech-gravitation", col: 25, row: 3, icon: "G", chips: ["Gm₁m₂/r²"], pre: ["mech-newton-3","mech-centripetal"], math: ["sci-notation","a1-radicals","a1-rational-exp"] },
    { id: "mech-orbits", col: 26, row: 3, icon: "⊙", chips: ["−GMm/r","vesc"], pre: ["mech-gravitation","mech-energy-cons"], math: ["a1-radicals","calculus-1:Antiderivatives and the definite integral"] },
    { id: "mech-kepler", col: 27, row: 3, icon: "T²", chips: ["T²∝a³"], pre: ["mech-orbits","mech-ang-momentum"], math: ["a1-rational-exp","a2-ellipses"] }
  ]
};

/* ============ English ============
   A standard college English program: language and writing first, then literature surveys,
   the upper-division core, and specialisations. Fields live in DB.fields with subject: "english".
   Topic pages add `stories` (public-domain passages, art from DB scenes in web/art/). Spec: web/TREE-SPEC-ENGLISH.md */
DB.subjectMaps.english = { name: "English", glyph: "¶", accent: "magenta", mapLine: "From grammar to the senior seminar",
  mapSub: "The standard college English program: language and writing, literature surveys, the upper-division core and specialisations. Arrows show the usual prerequisites.",
  groups: [
    { name: "Language & Writing", ids: ["grammar","comp-1","comp-2","creative-writing","intro-lit","linguistics"] },
    { name: "Literature Surveys", ids: ["brit-lit-1","brit-lit-2","am-lit-1","am-lit-2","world-lit"] },
    { name: "Upper-Division Core", ids: ["shakespeare","lit-theory","rhetoric","hist-english"] },
    { name: "Specialisations & Capstone", ids: ["drama","poetry","novel","cw-workshop","senior-seminar"] }
  ],
  eras: [
    { name: "Language & Writing", from: 0, to: 2 },
    { name: "Surveys", from: 3, to: 3 },
    { name: "Upper-Division Core", from: 4, to: 4 },
    { name: "Specialisations", from: 5, to: 6 }
  ] };
Object.assign(DB.fields, {
  "grammar": { subject: "english", name: "Grammar & Usage", icon: "N·V", level: "College ENGL 1xx · English grammar", col: 0, row: 4, pre: [], status: "charted",
    blurb: "How English sentences are built: the parts of speech, phrases, clauses and sentence patterns, then the usage, punctuation and style choices that make writing clear and correct.",
    topics: [] },
  "comp-1": { subject: "english", name: "Composition I", icon: "¶", level: "College ENGL 101 · first-year writing", col: 1, row: 4, pre: ["grammar"], status: "planned",
    blurb: "The first-year writing course: writing as a process, the thesis-driven academic essay, paragraphs that develop one idea, and reading closely to write about texts.",
    topics: ["The writing process: invention, drafting, revision","The rhetorical situation: audience, purpose, context","Thesis statements","Paragraph unity and development","Introductions and conclusions","Organisation and transitions","Narrative and descriptive writing","Expository writing: definition, comparison, cause and effect","Summary and paraphrase","Peer review and revision"] },
  "comp-2": { subject: "english", name: "Composition II", icon: "§", level: "College ENGL 102 · argument and research", col: 2, row: 3, pre: ["comp-1"], status: "planned",
    blurb: "Argument and research: claims, reasons and evidence, finding and evaluating sources, integrating them fairly, and documenting them in MLA and APA style.",
    topics: ["Claims, reasons and evidence","The Toulmin model of argument","Appeals: ethos, pathos, logos","Logical fallacies","Counterargument and rebuttal","Research questions and search strategies","Evaluating sources","Quoting, paraphrasing and synthesis","Avoiding plagiarism","MLA and APA documentation","The researched argument essay"] },
  "creative-writing": { subject: "english", name: "Introduction to Creative Writing", icon: "✒", level: "College ENGL 2xx · introductory workshop", col: 2, row: 1, pre: ["comp-1"], status: "planned",
    blurb: "The craft of fiction, poetry and creative nonfiction, learned by reading published work closely and writing and revising your own in a workshop.",
    topics: ["Reading as a writer","Image and concrete detail","Character","Point of view","Dialogue","Scene and summary","Plot and structure","Line, image and form in poetry","Creative nonfiction and the personal essay","The workshop and revision"] },
  "intro-lit": { subject: "english", name: "Introduction to Literature", icon: "“ ”", level: "College ENGL 2xx · literary analysis", col: 2, row: 5, pre: ["comp-1"], status: "planned",
    blurb: "How to read and write about fiction, poetry and drama: the elements of each genre, close reading, interpretation and the literary-analysis essay.",
    topics: ["What literature is and how to read it","Plot and narrative structure","Character and characterisation","Setting","Point of view and the narrator","Theme","Symbol, imagery and figurative language","Tone and irony","Poetry: speaker, diction, sound and form","Meter and rhyme","Drama: dialogue, staging and conflict","Close reading","The literary analysis essay"] },
  "linguistics": { subject: "english", name: "Introduction to English Linguistics", icon: "/ə/", level: "College ENGL/LING 2xx", col: 2, row: 7, pre: ["grammar"], status: "planned",
    blurb: "The scientific study of English: its sounds, word structure, sentence structure and meaning, and how it varies between speakers, places and situations.",
    topics: ["Language as a system","Phonetics: the sounds of English and the IPA","Phonology","Morphology: how words are built","Syntax and constituent structure","Semantics","Pragmatics","Language acquisition","Dialects and variation","Sociolinguistics"] },
  "brit-lit-1": { subject: "english", name: "British Literature I", icon: "Þ", level: "College ENGL 2xx · survey to 1798", col: 3, row: 0, pre: ["intro-lit"], status: "planned",
    blurb: "From Old English to the end of the eighteenth century: Beowulf, Chaucer, the Renaissance, Milton and the Restoration and eighteenth century.",
    topics: ["Old English literature and Beowulf","Middle English and the romance","Chaucer's Canterbury Tales","Medieval drama","The English Renaissance and the sonnet","Spenser and Marlowe","Metaphysical poets: Donne and Herbert","Milton's Paradise Lost","Restoration literature","Satire: Swift and Pope","The rise of the novel"] },
  "brit-lit-2": { subject: "english", name: "British Literature II", icon: "Br II", level: "College ENGL 2xx · survey 1798 to now", col: 3, row: 2, pre: ["intro-lit"], status: "planned",
    blurb: "From the Romantics to the present: Wordsworth and Keats, the Victorian novel and poem, modernism, and postwar and postcolonial writing.",
    topics: ["Romanticism: Wordsworth and Coleridge","The second generation: Byron, Shelley, Keats","Jane Austen and the novel of manners","The Victorian novel: Dickens, the Brontës, Eliot","Victorian poetry: Tennyson and Browning","Late Victorians and the fin de siècle","Modernism: Woolf, Joyce, Eliot","Poetry of the World Wars","Postwar British writing","Postcolonial literature in English"] },
  "am-lit-1": { subject: "english", name: "American Literature I", icon: "Am I", level: "College ENGL 2xx · survey to 1865", col: 3, row: 4, pre: ["intro-lit"], status: "planned",
    blurb: "From Native American oral traditions and colonial writing to the Civil War: Puritans, the Revolution, the American Renaissance and the slave narrative.",
    topics: ["Native American oral traditions","Exploration and colonial writing","Puritan literature","Literature of the Revolution","Early American fiction","Transcendentalism: Emerson and Thoreau","Hawthorne and Poe","Melville","The slave narrative: Douglass and Jacobs","Whitman and Dickinson"] },
  "am-lit-2": { subject: "english", name: "American Literature II", icon: "Am II", level: "College ENGL 2xx · survey 1865 to now", col: 3, row: 6, pre: ["intro-lit"], status: "planned",
    blurb: "From Reconstruction to the present: realism and naturalism, the Harlem Renaissance, modernism, and contemporary American writing in all its voices.",
    topics: ["Realism: Twain and James","Regionalism and naturalism","Women writers of the late nineteenth century","The Harlem Renaissance","American modernism: Fitzgerald, Hemingway, Faulkner","Modernist poetry","Drama: O'Neill, Williams, Miller","Postwar fiction and the Beats","The Civil Rights era and the Black Arts Movement","Contemporary and multiethnic American literature"] },
  "world-lit": { subject: "english", name: "World Literature", icon: "◎", level: "College ENGL 2xx · survey", col: 3, row: 8, pre: ["intro-lit"], status: "planned",
    blurb: "Major works from many traditions, read in English translation: ancient epics, classical drama, sacred and philosophical texts, and the modern world novel.",
    topics: ["The Epic of Gilgamesh","Homer: the Iliad and the Odyssey","Greek tragedy","Ancient India: the Mahabharata and Ramayana","Classical Chinese poetry","Dante's Divine Comedy","The Tale of Genji","Don Quixote","The modern world novel","Literature in translation"] },
  "shakespeare": { subject: "english", name: "Shakespeare", icon: "W.S.", level: "College ENGL 3xx", col: 4, row: 1, pre: ["brit-lit-1"], status: "planned",
    blurb: "A close study of Shakespeare's comedies, histories, tragedies and romances, his sonnets, his language and verse, and his theatre in performance.",
    topics: ["Shakespeare's life and the Elizabethan stage","Blank verse and Shakespeare's language","The comedies","The histories","The great tragedies","The problem plays","The romances","The sonnets","Shakespeare in performance and adaptation"] },
  "lit-theory": { subject: "english", name: "Literary Theory & Criticism", icon: "Crit", level: "College ENGL 3xx", col: 4, row: 4, pre: ["intro-lit","comp-2"], status: "planned",
    blurb: "The major ways of reading: from Plato and Aristotle through formalism, structuralism and deconstruction to feminist, Marxist, postcolonial and ecocritical approaches.",
    topics: ["Classical criticism: Plato and Aristotle","Formalism and New Criticism","Structuralism","Poststructuralism and deconstruction","Psychoanalytic criticism","Marxist criticism","Feminist and gender criticism","Reader-response theory","New Historicism and cultural studies","Postcolonial criticism","Critical race theory","Ecocriticism"] },
  "rhetoric": { subject: "english", name: "Advanced Composition & Rhetoric", icon: "Rhet", level: "College ENGL 3xx", col: 4, row: 6, pre: ["comp-2"], status: "planned",
    blurb: "Rhetoric as an art and a theory: the classical canons, style at the level of the sentence, and writing for real audiences in many genres.",
    topics: ["Classical rhetoric: Aristotle, Cicero, Quintilian","The five canons","Kairos and the rhetorical situation","Style: clarity, cohesion and emphasis","Sentence rhetoric and schemes","Tropes and figures","Rhetorical analysis","Genre and discourse communities","Visual and digital rhetoric","Writing for public audiences"] },
  "hist-english": { subject: "english", name: "History of the English Language", icon: "OE→", level: "College ENGL 3xx", col: 4, row: 8, pre: ["linguistics","brit-lit-1"], status: "planned",
    blurb: "How English became English: its Indo-European roots, Old and Middle English, the Great Vowel Shift, standardisation, and English as a world language.",
    topics: ["Indo-European and Germanic origins","Old English: sounds, inflections and vocabulary","The Norman Conquest and Middle English","Chaucer's English","The Great Vowel Shift","Early Modern English","Dictionaries, grammars and standardisation","American English","World Englishes"] },
  "drama": { subject: "english", name: "Drama", icon: "Act", level: "College ENGL 4xx", col: 5, row: 0, pre: ["shakespeare"], status: "planned",
    blurb: "Plays as literature and as performance, from Greek tragedy and Renaissance theatre to modern and contemporary drama.",
    topics: ["Aristotle's Poetics and tragedy","Greek and Roman theatre","Medieval and Renaissance theatre","Restoration and eighteenth-century comedy","Realism: Ibsen and Chekhov","Modern drama","Theatre of the Absurd","Contemporary drama","Reading a play for performance"] },
  "poetry": { subject: "english", name: "Poetry & Poetics", icon: "˘ ´", level: "College ENGL 4xx", col: 5, row: 2, pre: ["brit-lit-2","lit-theory"], status: "planned",
    blurb: "How poems work: meter and prosody, fixed forms and free verse, figurative language, and the history of poetic movements in English.",
    topics: ["Prosody and scansion","Accentual-syllabic meter","Fixed forms: sonnet, villanelle, sestina","Free verse","Figurative language","The lyric","Narrative and dramatic poetry","Romantic and Victorian poetics","Modernist poetics","Contemporary poetry"] },
  "novel": { subject: "english", name: "The Novel", icon: "Ch. 1", level: "College ENGL 4xx", col: 5, row: 4, pre: ["lit-theory"], status: "planned",
    blurb: "The history and theory of the novel: its rise in the eighteenth century, realism, modernist experiment, and the contemporary novel.",
    topics: ["The rise of the novel","Narrative theory: story and discourse","Free indirect discourse","The realist novel","The Gothic novel","The modernist novel","The postmodern novel","Genre fiction and the literary novel","The contemporary novel"] },
  "cw-workshop": { subject: "english", name: "Advanced Creative Writing Workshop", icon: "Draft", level: "College ENGL 3xx–4xx", col: 5, row: 6, pre: ["creative-writing","rhetoric"], status: "planned",
    blurb: "A workshop in one genre (fiction, poetry or creative nonfiction): longer projects, sustained revision, and preparing work for publication.",
    topics: ["Developing a project","Voice and style","Structure in longer work","Advanced revision","Line editing","The writer's notebook and reading list","Submitting work for publication","The portfolio"] },
  "senior-seminar": { subject: "english", name: "Senior Seminar", icon: "Thesis", level: "College ENGL 4xx · capstone", col: 6, row: 4, pre: ["lit-theory","novel","rhetoric"], status: "planned",
    blurb: "The capstone: a sustained research project on a literary or rhetorical question, from proposal and annotated bibliography to a seminar paper presented to peers.",
    topics: ["Choosing a research question","The research proposal","The annotated bibliography","Entering a critical conversation","Drafting the seminar paper","Revision and peer review","Presenting research"] }
});

/* Grammar & Usage. A tree may also list `planned` nodes ({id,label,col,row,icon,chips,pre}), drawn dashed until written. */
DB.trees["grammar"] = {
  eras: [
    { name: "Words", from: 0, to: 1 },
    { name: "The Simple Sentence", from: 2, to: 3 },
    { name: "Clauses & Sentences", from: 4, to: 5 },
    { name: "Usage & Mechanics", from: 6, to: 8 }
  ],
  nodes: [
    { id: "eng-parts-of-speech", col: 0, row: 4, icon: "N V", chips: ["noun","verb","adj.","adv."], pre: [] },
    { id: "eng-nouns-pronouns", col: 1, row: 1, icon: "N", chips: ["number","case"], pre: ["eng-parts-of-speech"] },
    { id: "eng-verbs", col: 1, row: 3, icon: "V", chips: ["tense","aspect"], pre: ["eng-parts-of-speech"] },
    { id: "eng-modifiers", col: 1, row: 5, icon: "Adj", chips: ["-er","-est","-ly"], pre: ["eng-parts-of-speech"] },
    { id: "eng-function-words", col: 1, row: 7, icon: "P C", chips: ["in","and","because"], pre: ["eng-parts-of-speech"] },
    { id: "eng-subject-predicate", col: 2, row: 3, icon: "S|P", chips: ["S","P"], pre: ["eng-nouns-pronouns","eng-verbs"] },
    { id: "eng-agreement", col: 3, row: 0, icon: "S=V", chips: ["is","are"], pre: ["eng-subject-predicate"] },
    { id: "eng-patterns", col: 3, row: 2, icon: "SVO", chips: ["DO","IO","SC"], pre: ["eng-subject-predicate"] },
    { id: "eng-phrases", col: 3, row: 5, icon: "NP", chips: ["NP","VP","PP"], pre: ["eng-subject-predicate","eng-modifiers","eng-function-words"] },
    { id: "eng-voice", col: 4, row: 0, icon: "be+en", chips: ["active","passive"], pre: ["eng-patterns"] },
    { id: "eng-pronoun-usage", col: 4, row: 2, icon: "I/me", chips: ["who","whom"], pre: ["eng-agreement","eng-nouns-pronouns"] },
    { id: "eng-clauses", col: 4, row: 4, icon: "[IC]", chips: ["IC","DC"], pre: ["eng-patterns","eng-phrases"] },
    { id: "eng-verbals", col: 4, row: 6, icon: "-ing", chips: ["to go","going"], pre: ["eng-phrases"] },
    { id: "eng-sentence-types", col: 5, row: 3, icon: "S+S", chips: ["CS","CX"], pre: ["eng-clauses"] },
    { id: "eng-subordinate", col: 5, row: 5, icon: "who…", chips: ["who","that","when"], pre: ["eng-clauses"] },
    { id: "eng-fragments", col: 6, row: 2, icon: "‖", chips: ["frag","CS"], pre: ["eng-sentence-types"] },
    { id: "eng-parallelism", col: 6, row: 4, icon: "= =", chips: ["A, B, C"], pre: ["eng-sentence-types","eng-verbals"] },
    { id: "eng-modifier-placement", col: 6, row: 6, icon: "↷", chips: ["dangling"], pre: ["eng-verbals","eng-subordinate"] },
    { id: "eng-commas", col: 7, row: 3, icon: ",", chips: ["FANBOYS","intro"], pre: ["eng-fragments","eng-subordinate"] },
    { id: "eng-punctuation", col: 8, row: 2, icon: "; : —", chips: [";",":","’"], pre: ["eng-commas"] },
    { id: "eng-style", col: 8, row: 5, icon: "Style", chips: ["concise","vary"], pre: ["eng-parallelism","eng-modifier-placement","eng-commas"] }
  ]
};

/* Parts-of-speech tags used in English story passages. The traditional eight, coloured in five
   groups: naming words (c1), verbs (c2), noun modifiers (c3), adverbs (c4), connectors and exclamations (c5).
   Articles count as adjectives in the traditional eight; they keep their own tag so pages can say "article". */
DB.posTags = {
  n:  { name: "Noun", c: "c1", test: "Fits the frame “the ___” and can usually be made plural or possessive: truth, truths, truth’s. Proper nouns (names) are capitalised." },
  pr: { name: "Pronoun", c: "c1", test: "Stands in for a whole noun phrase. Personal pronouns change form for case: I, me, my." },
  v:  { name: "Verb", c: "c2", test: "Heads the predicate and can be marked for tense: is → was, give → gave. Auxiliaries (be, have, will, would, must) are verbs too." },
  aj: { name: "Adjective", c: "c3", test: "Modifies a noun. Fits “a ___ thing” and “very ___”, and most compare: young, younger, youngest." },
  ar: { name: "Article", c: "c3", test: "a, an, the: mark a noun as indefinite or definite. The traditional eight count articles as adjectives (modern grammars: determiners)." },
  av: { name: "Adverb", c: "c4", test: "Modifies a verb, an adjective, another adverb or a whole clause. Answers how, when, where, how often or how much." },
  p:  { name: "Preposition", c: "c5", test: "Links a noun phrase (its object) to the rest of the sentence: in Tuckahoe, of a wife." },
  cj: { name: "Conjunction", c: "c5", test: "Joins words, phrases or clauses. Coordinating: and, but, or. Subordinating: that, because, although." },
  ij: { name: "Interjection", c: "c5", test: "An exclamation that stands outside the grammar of the sentence: Bah! Oh! Alas!" }
};
/* Story token strings: "word_tag" separated by spaces; bare punctuation; "*" after the tag = italic in
   the source; "#key" after the tag = use notes[key]; "¶" = paragraph break. Mirrors detok() in tools/mathcheck.py. */
DB.parseStory = tokens => {
  const out = []; let prev = "";
  tokens.trim().split(/\s+/).forEach(t => {
    if (t === "¶") { out.push({ br: true }); prev = "\n"; return; }
    const m = t.match(/^(.*?)_([a-z]+)(\*?)(?:#([a-z0-9]+))?$/);
    const w = (m ? m[1] : t).replace(/~/g, " ");
    const glue = prev === "" || prev === "\n" || /[“—‘(]$/.test(prev) || /^([,.;:!?’”—)]|’[a-z]|n’t)/.test(w);
    out.push({ w, tag: m ? m[2] : null, it: !!(m && m[3]), key: m ? (m[4] || w.toLowerCase().replace(/[’']s$/, "")) : null, glue });
    prev = w;
  });
  return out;
};
DB.storyText = tokens => DB.parseStory(tokens).map(x => x.br ? "\n" : (x.glue ? "" : " ") + x.w).join("");
