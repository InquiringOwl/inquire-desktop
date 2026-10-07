/* ============ Mathematics: Precalculus tree ============
   Spec: web/TREE-SPEC-PRECALCULUS.md (scope, archetypes, the interaction rule per lab, colour keys, writer batches and waves).
   Pages: web/content/precalculus/, labs: web/labs/pc-b<n>.js, checks: checks/precalculus/.
   Every node is listed once below. `planned: true` = not written yet (shown dashed). A writer finishing a node deletes
   ", planned: true" from that node's line only (one-line edit, so parallel writers don't collide). */
(function(){
const DB = window.DB;
DB.fields["precalculus"].status = "charted";
DB.fields["precalculus"].topics = ["Function behaviour, symmetry and the parent library", "Piecewise and absolute-value functions",
  "Logistic growth and fitting models to data", "Matrices, row reduction, determinants and inverses", "Linear programming and partial fractions",
  "Eccentricity, rotated conics and polar conics", "Parametric equations and motion", "Counting, probability and induction",
  "Limits, continuity and the tangent line"];
const T = DB.trees["precalculus"] = {
  eras: [
    { name: "Functions in Depth", from: 0, to: 2 },
    { name: "Zeros & Growth Models", from: 3, to: 4 },
    { name: "Matrices & Systems", from: 5, to: 8 },
    { name: "Conics Revisited", from: 9, to: 10 },
    { name: "Parametric Equations", from: 11, to: 12 },
    { name: "Counting, Probability & Induction", from: 13, to: 14 },
    { name: "Limits: Toward Calculus", from: 15, to: 17 }
  ],
  nodes: [
    { id: "pc-parent-functions", label: "The Parent Function Library & Symmetry", col: 0, row: 1, icon: "f(−x)", chips: ["even","odd","domain"], pre: ["a2-transformations","a2-radical-func"] },
    { id: "pc-function-behavior", label: "Rates of Change & Behaviour of Graphs", col: 0, row: 4, icon: "Δy/Δx", chips: ["increasing","extrema","avg rate"], pre: ["a2-func-ops","a1-slope-forms"] },
    { id: "pc-piecewise-abs", label: "Piecewise & Absolute-Value Functions", col: 1, row: 1, icon: "|f|", chips: ["pieces","⌊x⌋","|x|"], pre: ["pc-parent-functions","a1-piecewise","a1-abs-eq"] },
    { id: "pc-function-modeling", label: "Building Functions from Situations", col: 2, row: 4, icon: "A(x)", chips: ["domain","optimize"], pre: ["pc-function-behavior","a2-quad-vertex"] },
    { id: "pc-logistic", label: "Logistic Growth Models", col: 3, row: 1, icon: "S(t)", chips: ["carrying capacity","inflection"], pre: ["a2-exp-models"] },
    { id: "pc-ivt-bounds", label: "Locating Real Zeros: IVT, Descartes & Bounds", col: 3, row: 5, icon: "± →0", chips: ["IVT","sign changes","bounds"], pre: ["pc-function-behavior","a2-fta","a2-zeros-mult"] },
    { id: "pc-fitting-models", label: "Fitting Exponential, Log & Power Models", col: 4, row: 2, icon: "ln y", chips: ["regression","r²","linearize"], pre: ["a2-exp-models","a2-log-props","a1-linear-models"] },
    { id: "pc-matrices", label: "Matrices & Matrix Operations", col: 5, row: 1, icon: "[aᵢⱼ]", chips: ["m × n","AB","scalar"], pre: ["a2-sys-three"] },
    { id: "pc-linear-programming", label: "Systems of Inequalities & Linear Programming", col: 5, row: 5, icon: "max z", chips: ["feasible","vertices"], pre: ["a1-sys-ineq","a1-sys-elim"] },
    { id: "pc-gaussian", label: "Gaussian & Gauss–Jordan Elimination", col: 6, row: 1, icon: "[A|b]", chips: ["row ops","RREF"], pre: ["pc-matrices"] },
    { id: "pc-matrix-transform", label: "Matrices as Transformations of the Plane", col: 6, row: 3, icon: "î ĵ", chips: ["rotate","shear","compose"], pre: ["pc-matrices","trig-unit-circle"] },
    { id: "pc-partial-fractions", label: "Partial Fraction Decomposition", col: 7, row: 0, icon: "A/(x−a)", chips: ["linear","repeated","quadratic"], pre: ["pc-gaussian","a2-rational-func","a1-rational-add"] },
    { id: "pc-determinants", label: "Determinants & Cramer's Rule", col: 7, row: 2, icon: "det", chips: ["cofactor","area","Cramer"], pre: ["pc-gaussian","pc-matrix-transform"] },
    { id: "pc-matrix-inverse", label: "Inverse Matrices & AX = B", col: 8, row: 2, icon: "A⁻¹", chips: ["[A|I]","AX = B"], pre: ["pc-determinants"] },
    { id: "pc-eccentricity", label: "Focus, Directrix & Eccentricity", col: 9, row: 1, icon: "e", chips: ["PF/PD","e < 1","e > 1"], pre: ["a2-parabolas","a2-ellipses","a2-hyperbolas"] },
    { id: "pc-rotation", label: "Rotation of Axes & the Discriminant", col: 9, row: 3, icon: "Bxy", chips: ["B² − 4AC","cot 2θ"], pre: ["a2-conic-sections","trig-double-half","pc-matrix-transform"] },
    { id: "pc-polar-conics", label: "Conics in Polar Coordinates", col: 10, row: 1, icon: "ep/(1±e)", chips: ["focus at pole","orbits"], pre: ["pc-eccentricity","trig-polar-graphs"] },
    { id: "pc-parametric", label: "Parametric Equations", col: 11, row: 3, icon: "x(t), y(t)", chips: ["orientation","eliminate t"], pre: ["trig-sinusoids","a2-func-ops"] },
    { id: "pc-parametric-motion", label: "Parametric Graphs & Motion", col: 12, row: 3, icon: "r(t)", chips: ["projectile","cycloid"], pre: ["pc-parametric","trig-vector-apps"] },
    { id: "pc-counting", label: "Counting Principles: Permutations & Combinations", col: 13, row: 1, icon: "ₙPᵣ", chips: ["multiply","nCr","repeats"], pre: ["a2-binomial"] },
    { id: "pc-induction", label: "Mathematical Induction", col: 13, row: 4, icon: "n → n+1", chips: ["base","step"], pre: ["a2-arith-series","a2-geom-series"] },
    { id: "pc-probability", label: "Probability", col: 14, row: 1, icon: "P(E)", chips: ["complement","union","independent"], pre: ["pc-counting"] },
    { id: "pc-limits-graph", label: "Limits from Graphs & Tables", col: 15, row: 3, icon: "x → a", chips: ["one-sided","DNE"], pre: ["pc-function-behavior","pc-piecewise-abs","a2-rational-asym"] },
    { id: "pc-limit-laws", label: "Limit Laws & Evaluating Limits Algebraically", col: 16, row: 2, icon: "0/0", chips: ["factor","rationalize"], pre: ["pc-limits-graph","a1-rational-simplify","a1-radical-ops"] },
    { id: "pc-limits-infinity", label: "Infinite Limits & Limits at Infinity", col: 16, row: 4, icon: "x → ∞", chips: ["asymptotes","end behavior"], pre: ["pc-limits-graph","a2-rational-asym","a2-exp-func"] },
    { id: "pc-continuity", label: "Continuity", col: 17, row: 1, icon: "no gaps", chips: ["3 conditions","removable","jump"], pre: ["pc-limit-laws","pc-ivt-bounds"] },
    { id: "pc-tangent-rate", label: "From Secant to Tangent: Instantaneous Rate", col: 17, row: 3, icon: "m = lim", chips: ["h → 0","slope at a"], pre: ["pc-limit-laws","pc-function-modeling"] }
  ]
};
T.planned = T.nodes.filter(n => n.planned);
T.nodes = T.nodes.filter(n => !n.planned);
T.planned.forEach(n => { delete n.planned; });
})();
