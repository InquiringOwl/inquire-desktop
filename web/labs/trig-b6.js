/* ============ Labs: Trigonometry, batch B6 (sum & difference, double & half angles, product-to-sum) ============ */
(function(){
const L = window.LABS, MI = "−", PI = Math.PI, D = PI / 180;

/* ---------- DOM-free helpers ---------- */
const strip = h => h.replace(/<[^>]+>/g, ""), sq = s => s.replace(/²/g, "<sup>2</sup>");
const FR = (a, b) => `<span class="fr"><span>${a}</span><span>${b}</span></span>`, RT = s => `√<span class="mk-ol">${s}</span>`;
const r2 = RT("2"), r3 = RT("3"), r6 = RT("6"), h2 = FR(r2, 2), h3 = FR(r3, 2), hf = FR(1, 2), S2 = "<sup>2</sup>";
const nT = v => String(v).replace("-", MI), degN = t => Math.round((((t / D) % 360) + 360) % 360);
const QN = ["on an axis", "QI", "QII", "QIII", "QIV"];
const quadXY = (x, y, e = 1e-9) => (Math.abs(x) < e || Math.abs(y) < e ? 0 : x > 0 ? (y > 0 ? 1 : 4) : (y > 0 ? 2 : 3));
const qF = q => { const s = q.n < 0 ? MI : "", n = Math.abs(q.n); return q.d === 1 ? s + n : s + FR(n, q.d); }, qP = q => `(${qF(q)})`;
// the other of sin/cos from one exact value and the quadrant (null unless 1 − v² is a rational square): MathRules.otherSinCos
const otherQ = (MR, v, quad, fn) => MR.otherSinCos(v, quad, fn);
const CSS = `.b6p{font:16px/1.5 var(--math);margin:2px 0 8px}.b6h.narrow~.hintc{display:none}`;   // phone: the steps panel needs the room
function css(){ if (!document.getElementById("b6-css")) { const s = document.createElement("style"); s.id = "b6-css"; s.textContent = CSS; document.head.appendChild(s); } }
function box(host){ const e = document.createElement("div"); host.appendChild(e); return h => { if (e.__h !== h) { e.innerHTML = h; e.__h = h; } }; }
// unit-circle plane (no draggable point), rays, filled sectors
function ucPlane(k, c, pad){ const P = k.plane(c, { xmin: -1.35, xmax: 1.35, ymin: -1.35, ymax: 1.35, equal: true, pad, xstep: .5, ystep: .5 }); P.grid(); P.axes();
  P.clip(() => c.d.circle(P.X(0), P.Y(0), P.X(1) - P.X(0), null, k.alpha(k.C.text, .45), 1.5));
  for (let i = 0; i <= 72; i++) P.pts.push([P.X(Math.cos(i * PI / 36)), P.Y(Math.sin(i * PI / 36))]); return P; }
const ray = (P, t, col, w = 2, dash) => P.seg(0, 0, Math.cos(t), Math.sin(t), col, w, dash);
const sector = (c, P, t0, t1, col, rr = 1.3) => P.clip(() => { const g = c.g, X = P.X(0), Y = P.Y(0); g.beginPath(); g.moveTo(X, Y); g.arc(X, Y, P.X(rr) - X, -t1, -t0); g.closePath(); g.fillStyle = col; g.fill(); });

/* ---------- trig-sum-difference ---------- */
L["trig-sum-difference"] = k => {
  MathKit.attach(k); css();
  const { C, MR } = k, { Q } = MR, c = k.canvas(), host = k.dom(), head = box((host.classList.add("b6h"), host)), SP = k.stepsPanel(host);
  let mode = "proof", P = null, step = 0, ei = 0, gi = 0, pi_ = 0;
  const S12 = PI / 12, PRE = [[135, 30], [240, 75], [60, 165], [330, 210]];
  const setT = (p, t) => { p.t = t; p.x = Math.cos(t); p.y = Math.sin(t); };
  const DP = [{}, {}]; PRE[0].forEach((d, j) => setT(DP[j], d * D));
  k.drag(c, () => (mode === "proof" ? P : null), DP, (i, p) => setT(p, Math.round(Math.atan2(p.y, p.x) / S12) * S12));
  const A_ = `<span class="c1">α</span>`, B_ = `<span class="c2">β</span>`, AB_ = `<span class="c5">α − β</span>`, ch = s => `<span class="c4">${s}</span>`;
  const PF = [
    { tag: "two points", eq: `A = (cos ${A_}, sin ${A_}), B = (cos ${B_}, sin ${B_})`, why: "points of α and β" },
    { tag: "distance", eq: `${ch("AB")}${S2} = (cos ${A_} − cos ${B_})${S2} + (sin ${A_} − sin ${B_})${S2}`, why: "distance formula" },
    { tag: "expand", eq: `= 2 − 2(cos ${A_} cos ${B_} + sin ${A_} sin ${B_})`, why: "cos² + sin² = 1, twice" },
    { tag: "rotate by −β", eq: `P = (cos(${AB_}), sin(${AB_})), Q = (1, 0)`, why: "turning keeps length: PQ = AB" },
    { tag: "distance", eq: `${ch("PQ")}${S2} = 2 − 2 cos(${AB_})`, why: "(cos(α − β) − 1)² + sin²(α − β), expanded" },
    { tag: "equal chords", eq: `<span class="c5">cos(α − β) = cos α cos β + sin α sin β</span>`, why: "AB² = PQ²" }];
  function drawProof(){
    const pad = k.split(c, host, { side: "left", frac: .55, hfrac: .56 }); P = ucPlane(k, c, pad);
    const [A, B] = DP, d = A.t - B.t, lab = [], na = ((A.t % (2 * PI)) + 2 * PI) % (2 * PI), nb = ((B.t % (2 * PI)) + 2 * PI) % (2 * PI);
    ray(P, A.t, k.alpha(C.amber, .8)); ray(P, B.t, k.alpha(C.cyan, .8));
    const ua = P.angleArc(0, 0, 24, 0, na, C.amber, { w: 2 }), ub = P.angleArc(0, 0, 38, 0, nb, C.cyan, { w: 2 });
    if (step >= 1) P.seg(A.x, A.y, B.x, B.y, C.violet, 3.5);
    if (step >= 4) { const px = Math.cos(d), py = Math.sin(d); ray(P, d, k.alpha(C.green, .8)); const ud = P.angleArc(0, 0, 54, 0, d, C.green, { w: 2 });
      P.seg(px, py, 1, 0, C.violet, 3.5, [8, 5]); P.dot(px, py, C.green, 7); P.dot(1, 0, C.text, 6);
      lab.push({ text: "P", x: px, y: py, color: C.green }, { text: "Q", x: 1, y: 0, color: C.text }, { text: "α − β", x: ud.x, y: ud.y, color: C.green }); }
    P.dot(A.x, A.y, C.amber, 7); P.dot(B.x, B.y, C.cyan, 7);
    lab.push({ text: "A", x: A.x, y: A.y, color: C.amber }, { text: "B", x: B.x, y: B.y, color: C.cyan }, { text: "α", x: ua.x, y: ua.y, color: C.amber }, { text: "β", x: ub.x, y: ub.y, color: C.cyan });
    P.labels(lab);
    head(""); SP.set(PF, step - 1);
    const ab = Math.hypot(A.x - B.x, A.y - B.y), pq = Math.hypot(Math.cos(d) - 1, Math.sin(d));
    k.readout({ title: "Two equal chords", rows: [{ lhs: "α", v: degN(A.t) + "°", cls: "c1" }, { lhs: "β", v: degN(B.t) + "°", cls: "c2" }, { lhs: "α − β", v: nT(Math.round(d / D)) + "°", cls: "c5" },
      step >= 2 && { lhs: "AB", v: k.fmt(ab, 4), cls: "c4" }, step >= 5 && { lhs: "PQ", v: k.fmt(pq, 4), cls: "c4" }],
      landmark: { hit: step >= 6, big: step >= 6 ? `cos(α − β) = ${k.fmt(Math.cos(d), 4)}` : "AB = PQ", note: step >= 6 ? `cos α cos β + sin α sin β = ${k.fmt(A.x * B.x + A.y * B.y, 4)}` : "A turn about the origin moves the chord without changing its length." },
      narr: step >= 6 ? "Drag A or B: the two numbers stay equal for every pair of angles." : "Press Step. The violet chords have the same length at every stage." });
  }
  // Exact: [target, fn, degrees, α°, β°, sign, lines]
  const EX = [
    ["cos 75°", "cos", 75, 45, 30, 1, [["75° = 45° + 30°", "two special angles"], ["cos(45° + 30°) = cos 45° cos 30° − sin 45° sin 30°", "cosine of a sum: minus in the middle"], [`= (${h2})(${h3}) − (${h2})(${hf})`, "unit-circle values"], [`= ${FR(r6, 4)} − ${FR(r2, 4)}`, "multiply"]]],
    ["sin 15°", "sin", 15, 45, 30, -1, [["15° = 45° − 30°", "two special angles"], ["sin(45° − 30°) = sin 45° cos 30° − cos 45° sin 30°", "sine of a difference: minus"], [`= (${h2})(${h3}) − (${h2})(${hf})`, "unit-circle values"], [`= ${FR(r6, 4)} − ${FR(r2, 4)}`, "multiply"]]],
    ["sin 105°", "sin", 105, 60, 45, 1, [["105° = 60° + 45°", "two special angles"], ["sin(60° + 45°) = sin 60° cos 45° + cos 60° sin 45°", "sine of a sum: plus"], [`= (${h3})(${h2}) + (${hf})(${h2})`, "unit-circle values"], [`= ${FR(r6, 4)} + ${FR(r2, 4)}`, "multiply"]]],
    ["cos 15°", "cos", 15, 45, 30, -1, [["15° = 45° − 30°", "two special angles"], ["cos(45° − 30°) = cos 45° cos 30° + sin 45° sin 30°", "cosine of a difference: plus in the middle"], [`= (${h2})(${h3}) + (${h2})(${hf})`, "unit-circle values"], [`= ${FR(r6, 4)} + ${FR(r2, 4)}`, "multiply"]]],
    ["tan(7π/12)", "tan", 105, 60, 45, 1, [["7π/12 = π/3 + π/4", "105° = 60° + 45°"], [`tan(π/3 + π/4) = ${FR("tan π/3 + tan π/4", "1 − tan π/3 tan π/4")}`, "tangent of a sum"], [`= ${FR(r3 + " + 1", "1 − " + r3)}`, "tan π/3 = √3, tan π/4 = 1"],
      [`= ${FR(`(${r3} + 1)(1 + ${r3})`, `(1 − ${r3})(1 + ${r3})`)} = ${FR("4 + 2" + r3, MI + "2")}`, "rationalise the denominator"]]]];
  const exLines = e => e[6].map(([eq, why], j) => ({ tag: ["split", "formula", "values", "multiply"][j], eq, why })).concat([{ tag: "result", eq: `<span class="c5">${e[0]} = ${MR.trigExact(e[1], MR.degQ(e[2])).text}</span>`, why: "≈ " + k.fmt(MR.trigExact(e[1], MR.degQ(e[2])).value, 4) }]);
  function drawExact(){
    const e = EX[ei], pad = k.split(c, host, { side: "left", frac: .52, hfrac: .56 }), T = e[2] * D, a = e[3] * D, lab = [];
    P = ucPlane(k, c, pad); ray(P, T, C.green, 2.5); const ut = P.angleArc(0, 0, 66, 0, T, k.alpha(C.green, .7), { w: 1.5, arrow: false });
    lab.push({ text: e[0].includes("π") ? "7π/12" : e[2] + "°", x: ut.x, y: ut.y, color: C.green });
    if (step >= 1) { ray(P, a, C.amber, 2); const ua = P.angleArc(0, 0, 26, 0, a, C.amber, { w: 2.5 }), ub = P.angleArc(0, 0, 44, a, T, C.cyan, { w: 2.5 });
      lab.push({ text: e[3] + "°", x: ua.x, y: ua.y, color: C.amber }, { text: (e[5] > 0 ? "+" : MI) + e[4] + "°", x: ub.x, y: ub.y, color: C.cyan }); }
    if (step >= 5) { const x = Math.cos(T), y = Math.sin(T); if (e[1] === "cos") P.seg(0, 0, x, 0, C.green, 4); else if (e[1] === "sin") P.seg(x, 0, x, y, C.green, 4); P.dot(x, y, C.green, 7);
      lab.push({ text: `${e[0]} ≈ ${k.fmt(MR.trigExact(e[1], MR.degQ(e[2])).value, 4)}`, x, y, color: C.green }); }
    P.labels(lab); const ls = exLines(e);
    head(`<p class="b6p">Find <span class="m">${e[0]}</span> exactly.</p>`); SP.set(ls, step - 1);
    k.readout({ title: "Exact value", rows: [{ lhs: "angle", v: e[2] + "°", cls: "c5" }, step >= 1 && { lhs: "split", v: `${e[3]}° ${e[5] > 0 ? "+" : MI} ${e[4]}°` }],
      landmark: { hit: step >= 5, big: step >= 5 ? `<span class="m">${ls[4].eq}</span>` : "split into special angles", note: step >= 5 ? ls[4].why : "" },
      narr: step >= 5 ? "Pick another value. Two different splits give the same answer: try 105° = 135° − 30° on paper." : "Press Step." });
  }
  // Given values: [[fn, value, quadrant] for α, same for β, +1 sum | −1 difference]
  const GV = [[["sin", Q(3, 5), 2], ["cos", Q(-5, 13), 3], 1], [["cos", Q(8, 17), 4], ["sin", Q(3, 5), 1], -1], [["sin", Q(7, 25), 2], ["cos", Q(8, 17), 4], 1]];
  function given(g){
    const [[fa, va, qa], [fb, vb, qb], op] = g, oa = fa === "sin" ? "cos" : "sin", ob = fb === "sin" ? "cos" : "sin", wa = otherQ(MR, va, qa, oa), wb = otherQ(MR, vb, qb, ob);
    const sa = fa === "sin" ? va : wa, ca = fa === "sin" ? wa : va, sb = fb === "sin" ? vb : wb, cb = fb === "sin" ? wb : vb, sg = op > 0 ? "+" : MI, cg = op > 0 ? MI : "+";
    const S = (op > 0 ? Q.add : Q.sub)(Q.mul(sa, cb), Q.mul(ca, sb)), Cc = (op > 0 ? Q.sub : Q.add)(Q.mul(ca, cb), Q.mul(sa, sb)), qr = quadXY(Q.val(Cc), Q.val(S)), ang = `α ${sg} β`;
    const L1 = (o, w, v, q, n) => ({ tag: `${o} ${n}`, eq: `${o} ${n} = ${w.n < 0 ? MI : ""}${RT(`1 − ${qP(v)}${S2}`)} = ${qF(w)}`, why: `${n} in ${QN[q]}: ${o} is ${w.n < 0 ? "negative" : "positive"}` });
    return { fa, va, qa, fb, vb, qb, sa, ca, sb, cb, S, Cc, qr, ang, lines: [L1(oa, wa, va, qa, "α"), L1(ob, wb, vb, qb, "β"),
      { tag: "sine", eq: `sin(${ang}) = ${qP(sa)}${qP(cb)} ${sg} ${qP(ca)}${qP(sb)} = ${qF(S)}`, why: `sin α cos β ${sg} cos α sin β` },
      { tag: "cosine", eq: `cos(${ang}) = ${qP(ca)}${qP(cb)} ${cg} ${qP(sa)}${qP(sb)} = ${qF(Cc)}`, why: `cos α cos β ${cg} sin α sin β` },
      { tag: "tangent", eq: `<span class="c5">tan(${ang}) = ${qF(Q.div(S, Cc))}; ${ang} in ${QN[qr]}</span>`, why: `sin ${S.n > 0 ? "&gt;" : "&lt;"} 0 and cos ${Cc.n > 0 ? "&gt;" : "&lt;"} 0` }] };
  }
  function drawGiven(){
    const g = given(GV[gi]), pad = k.split(c, host, { side: "left", frac: .56, hfrac: .58 }), lab = [], qs = q => sector(c, P, (q - 1) * PI / 2, q * PI / 2, k.alpha(q === g.qa ? C.amber : C.cyan, .12), 1);
    P = ucPlane(k, c, pad); qs(g.qa); if (g.qb !== g.qa) qs(g.qb);
    const pt = (x, y, col, name, s) => { const X = Q.val(x), Y = Q.val(y); ray(P, Math.atan2(Y, X), col, 2); P.dot(X, Y, col, 7); lab.push({ text: `${name} (${nT(MR.qT(x))}, ${nT(MR.qT(y))})`, x: X, y: Y, color: col }); };
    if (step >= 1) pt(g.ca, g.sa, C.amber, "α:"); if (step >= 2) pt(g.cb, g.sb, C.cyan, "β:"); if (step >= 4) pt(g.Cc, g.S, C.green, g.ang + ":");
    P.labels(lab);
    head(`<p class="b6p"><span class="m">${g.fa} <span class="c1">α</span> = ${qF(g.va)}</span>, α in ${QN[g.qa]}; <span class="m">${g.fb} <span class="c2">β</span> = ${qF(g.vb)}</span>, β in ${QN[g.qb]}. Find sin, cos, tan of <span class="m c5">${g.ang}</span>.</p>`);
    SP.set(g.lines, step - 1);
    k.readout({ title: "Given values", rows: [{ lhs: "α in", v: QN[g.qa], cls: "c1" }, { lhs: "β in", v: QN[g.qb], cls: "c2" }, step >= 4 && { lhs: "point", v: `(${MR.qT(g.Cc)}, ${MR.qT(g.S)})`.replace(/-/g, MI), cls: "c5" }],
      landmark: { hit: step >= 5, big: step >= 5 ? `${g.ang} in ${QN[g.qr]}` : "quadrant first, then the formula", note: step >= 5 ? "Check: sin² + cos² = 1 for the new point." : "Each missing value gets its sign from the shaded quadrant." },
      narr: "The green point is the terminal point of the combined angle. New problem gives another pair." });
  }
  k.modes([["proof", "Proof"], ["exact", "Exact"], ["given", "Given values"]], mode, m => { mode = m; open(); });
  const stP = k.group("proof", () => { const s = k.stepper(() => 6, v => { step = v; }, { ms: 1400 }); k.button("New angles", () => { pi_ = (pi_ + 1) % PRE.length; PRE[pi_].forEach((d, j) => setT(DP[j], d * D)); }, "btn ghost"); return s; });
  const stE = k.group("exact", () => { const s = k.stepper(() => 5, v => { step = v; }); k.select("Value", EX.map((e, i) => [i, e[0]]), 0, i => { ei = +i; s.reset(); open(); }); return s; });
  const stG = k.group("given", () => { const s = k.stepper(() => 5, v => { step = v; }); k.button("New problem", () => { gi = (gi + 1) % GV.length; s.reset(); open(); }, "btn ghost"); return s; });
  function open(){ k.showGroup(mode); [stP, stE, stG].forEach(s => { s.pause(); s.k = 0; }); step = 0;
    if (mode === "proof") { k.guard([strip(PF[5].eq)]); k.hint("Drag A and B, then step: the chord AB turned back by β is PQ."); }
    else if (mode === "exact") { k.guard([strip(exLines(EX[ei])[4].eq)]); k.hint("Split, choose the formula, substitute, simplify."); }
    else { const l = given(GV[gi]).lines; k.guard([strip(l[2].eq), strip(l[3].eq), strip(l[4].eq)]); k.hint("Quadrants first, then the formulas."); } }
  open();
  k.loop(() => { c.begin(); if (mode === "proof") drawProof(); else if (mode === "exact") drawExact(); else drawGiven(); });
};

/* ---------- trig-double-half ---------- */
L["trig-double-half"] = k => {
  MathKit.attach(k); css();
  const { C, MR } = k, c = k.canvas(), host = k.dom(), head = box((host.classList.add("b6h"), host)), SP = k.stepsPanel(host);
  let mode = "double", P = null, step = 0, hi = 0;
  const t2 = `<span class="c5">2θ</span>`;
  const DB = [
    { tag: "write as a sum", eq: `sin ${t2} = sin(θ + θ)`, why: "2θ = θ + θ" },
    { tag: "sum formula", eq: "= sin θ cos θ + cos θ sin θ", why: "sin(α + β) with β = α" },
    { tag: "like terms", eq: `<span class="c5">sin 2θ = 2 sin θ cos θ</span>`, why: "the two products are equal" },
    { tag: "cosine", eq: `cos ${t2} = cos θ cos θ − sin θ sin θ = cos² θ − sin² θ`, why: "cos(α + β) with β = α" },
    { tag: "only cosine", eq: "= cos² θ − (1 − cos² θ) = 2 cos² θ − 1", why: "sin² θ = 1 − cos² θ" },
    { tag: "only sine", eq: `<span class="c5">cos 2θ = 1 − 2 sin² θ</span>`, why: "cos² θ = 1 − sin² θ, in the first form" }].map(l => Object.assign(l, { eq: sq(l.eq), why: sq(l.why) }));
  function drawDouble(){
    const pad = k.split(c, host, { side: "left", frac: .48, hfrac: .5 }), cp = step >= 4;
    P = k.plane(c, { xmin: -PI / 4, xmax: 2 * PI + PI / 4, ymin: -2.6, ymax: 2.6, xstep: c.w < 600 ? PI : PI / 2, ystep: 1, pad }); P.grid(); P.piAxes();
    const f = cp ? x => Math.cos(2 * x) : x => Math.sin(2 * x), g = cp ? x => 2 * Math.cos(x) : x => 2 * Math.sin(x), x0 = cp ? PI : PI / 2;
    P.curve(g, C.amber, { w: 2, dash: [7, 5] }); P.curve(f, C.green, { w: 3.5 });
    const ov = (!cp && step >= 3) || step >= 6; if (ov) P.curve(cp ? x => 1 - 2 * Math.sin(x) ** 2 : x => 2 * Math.sin(x) * Math.cos(x), C.text, { w: 1.5, dash: [2, 4] });
    P.line(x0, -2.6, x0, 2.6, k.alpha(C.text, .3), 1, [3, 4]); P.dot(x0, f(x0), C.green, 6); P.dot(x0, g(x0), C.amber, 6);
    const a = P.onCurve(f, .12), b = P.onCurve(g, .62), o = ov ? P.onCurve(f, .4) : null;
    P.labels([a && { text: cp ? "cos 2x" : "sin 2x", x: a.x, y: a.y, color: C.green }, b && { text: cp ? "2 cos x" : "2 sin x", x: b.x, y: b.y, color: C.amber },
      o && { text: cp ? "1 − 2 sin²x" : "2 sin x cos x", x: o.x, y: o.y, color: C.text }]);
    head(`<p class="b6p">Derive the double-angle formulas from the sum formulas.</p>`); SP.set(DB, step - 1);
    const xs = cp ? "π" : "π/2";
    k.readout({ title: "Doubling the angle", rows: [{ lhs: `${cp ? "cos" : "sin"} 2x at x = ${xs}`, v: k.fmt(f(x0), 3), cls: "c5" }, { lhs: `2 ${cp ? "cos" : "sin"} x at x = ${xs}`, v: k.fmt(g(x0), 3), cls: "c1" }],
      landmark: { hit: step >= 6, big: step >= 6 ? "three forms of cos 2θ" : step >= 3 ? "sin 2x: amplitude 1, period π" : "doubling the angle ≠ doubling the value", note: step >= 6 ? "Pick the form that needs only what you know: cos θ, sin θ, or both." : "The dashed curve is the classic wrong guess." },
      narr: "Step through: sin 2θ first, then cos 2θ. The dotted curve is the formula; it lies exactly on the green graph." });
  }
  // Half: [question, fn, θ° drawn, θ range (lo, hi) or null, lines (5)]
  const fr2 = (a, b) => FR(a, b), A7 = `(${MI}${FR(7, 25)})`;
  const HF = [
    ["Find sin 22.5°.", "sin", 45, null, [["22.5° = 45°/2", "θ = 45°, cos θ = √2/2"], ["22.5° is in QI", "0° &lt; 22.5° &lt; 90°"], ["sine is positive in QI: +", ""], [`sin 22.5° = ${RT(fr2("1 − cos 45°", 2))} = ${RT(fr2("1 − " + h2, 2))}`, "half-angle formula"], [`sin 22.5° = ${RT(fr2("2 − " + r2, 4))} = ${FR(RT("2 − " + r2), 2)}`, "≈ 0.3827"]]],
    ["Find cos 165°.", "cos", 330, null, [["165° = 330°/2", "θ = 330°, cos θ = √3/2"], ["165° is in QII", "90° &lt; 165° &lt; 180°"], ["cosine is negative in QII: −", ""], [`cos 165° = ${MI}${RT(fr2("1 + cos 330°", 2))} = ${MI}${RT(fr2("1 + " + h3, 2))}`, "half-angle formula"], [`cos 165° = ${MI}${RT(fr2("2 + " + r3, 4))} = ${MI}${FR(RT("2 + " + r3), 2)}`, "≈ −0.9659"]]],
    [`cos θ = ${MI}${FR(7, 25)}, 180° &lt; θ &lt; 270°. Find sin(θ/2).`, "sin", 180 + Math.acos(7 / 25) / D, [180, 270], [["90° &lt; θ/2 &lt; 135°", "halve each end"], ["θ/2 is in QII", ""], ["sine is positive in QII: +", ""], [`sin(θ/2) = ${RT(fr2("1 − " + A7, 2))} = ${RT(fr2(FR(32, 25), 2))}`, "half-angle formula"], [`sin(θ/2) = ${RT(FR(16, 25))} = ${FR(4, 5)}`, "= 0.8"]]],
    [`cos θ = ${FR(1, 8)}, 270° &lt; θ &lt; 360°. Find cos(θ/2).`, "cos", 360 - Math.acos(1 / 8) / D, [270, 360], [["135° &lt; θ/2 &lt; 180°", "halve each end"], ["θ/2 is in QII", ""], ["cosine is negative in QII: −", ""], [`cos(θ/2) = ${MI}${RT(fr2("1 + " + FR(1, 8), 2))} = ${MI}${RT(fr2(FR(9, 8), 2))}`, "half-angle formula"], [`cos(θ/2) = ${MI}${RT(FR(9, 16))} = ${MI}${FR(3, 4)}`, "= −0.75"]]],
    ["Find sin 112.5°.", "sin", 225, null, [["112.5° = 225°/2", "θ = 225°, cos θ = −√2/2"], ["112.5° is in QII", "90° &lt; 112.5° &lt; 180°"], ["sine is positive in QII: +", ""], [`sin 112.5° = ${RT(fr2("1 − cos 225°", 2))} = ${RT(fr2("1 + " + h2, 2))}`, "half-angle formula"], [`sin 112.5° = ${RT(fr2("2 + " + r2, 4))} = ${FR(RT("2 + " + r2), 2)}`, "≈ 0.9239"]]]];
  const hfLines = h => h[4].map(([eq, why], j) => ({ tag: ["half angle", "quadrant", "sign", "substitute", "simplify"][j], eq: j === 2 ? `<span class="c3">${eq}</span>` : j === 4 ? `<span class="c5">${eq}</span>` : eq, why }));
  function drawHalf(){
    const h = HF[hi], pad = k.split(c, host, { side: "right", frac: .48 }), T = h[2] * D, H = T / 2, x = Math.cos(H), y = Math.sin(H), lab = [], qh = quadXY(x, y);
    P = ucPlane(k, c, pad);
    if (h[3]) sector(c, P, h[3][0] * D, h[3][1] * D, k.alpha(C.amber, .1), 1.25);
    ray(P, T, C.amber, 2, h[3] ? [6, 4] : null); const ut = P.angleArc(0, 0, 24, 0, T, C.amber, { w: 2 }); lab.push({ text: h[3] ? "θ" : `θ = ${h[2]}°`, x: ut.x, y: ut.y, color: C.amber });
    if (step >= 1) { if (h[3]) sector(c, P, h[3][0] * D / 2, h[3][1] * D / 2, k.alpha(C.cyan, .16), 1.1); ray(P, H, C.cyan, 2.5); const uh = P.angleArc(0, 0, 44, 0, H, C.cyan, { w: 2.5 }); lab.push({ text: "θ/2", x: uh.x, y: uh.y, color: C.cyan }); }
    if (step >= 2) sector(c, P, (qh - 1) * PI / 2, qh * PI / 2, k.alpha(C.pink, .12), 1);
    if (step >= 3) { if (h[1] === "sin") P.seg(x, 0, x, y, C.pink, 4); else P.seg(0, 0, x, 0, C.pink, 4); P.dot(x, y, C.cyan, 7);
      const pos = (h[1] === "sin" ? y : x) > 0; lab.push({ text: pos ? "+" : MI, x: h[1] === "sin" ? x : x / 2, y: h[1] === "sin" ? y / 2 : 0, color: C.pink, font: `bold 20px ${k.F.math}` }); }
    if (step >= 5) lab.push({ text: `${h[1]}(θ/2) ≈ ${k.fmt(h[1] === "sin" ? y : x, 4)}`, x, y, color: C.green });
    P.labels(lab); const ls = hfLines(h);
    head(`<p class="b6p">${h[0]}</p>`); SP.set(ls, step - 1);
    k.readout({ title: "Half angle and its sign", rows: [{ lhs: "θ", v: h[3] ? `${h[3][0]}° to ${h[3][1]}°` : h[2] + "°", cls: "c1" }, step >= 2 && { lhs: "θ/2 in", v: QN[qh], cls: "c2" }, step >= 3 && { lhs: "sign", v: (h[1] === "sin" ? y : x) > 0 ? "+" : MI, cls: "c3" }],
      landmark: { hit: step >= 5, big: step >= 5 ? `<span class="m">${ls[4].eq}</span>` : "sign from the quadrant of θ/2", note: step >= 5 ? ls[4].why : "Not from the quadrant of θ." },
      narr: "The pink segment is the value being found: its direction gives the sign. New problem gives another angle." });
  }
  let S = null;
  function drawRange(){
    const pad = k.split(c, host, { off: true }), _n = host.classList.remove("narrow"), v = 20, g = 9.8, th = S.th, t = th * D, tc = (90 - th) * D;
    const traj = a => z => z * Math.tan(a) - g * z * z / (2 * v * v * Math.cos(a) ** 2), Ra = a => v * v * Math.sin(2 * a) / g, R = Ra(t);
    P = k.plane(c, { xmin: -2, xmax: 46, ymin: -2, ymax: 24, equal: true, pad, xstep: 5, ystep: 5, xlabel: "x (m)", ylabel: "y (m)" }); P.grid(); P.axes();
    const lab = [];
    if (th !== 45) { const Rc = Ra(tc); P.curve(traj(tc), k.alpha(C.amber, .6), { from: 0, to: Rc, w: 2, dash: [6, 5] }); lab.push({ text: `${90 - th}°`, x: Rc / 2, y: traj(tc)(Rc / 2), color: C.amber }); }
    P.curve(traj(t), C.green, { from: 0, to: R, w: 3 }); P.vec(0, 0, 5 * Math.cos(t), 5 * Math.sin(t), C.amber, { w: 2.5 });
    const an = P.angleArc(0, 0, 34, 0, t, C.amber, { w: 2 }); P.dot(R, 0, C.green, 7);
    lab.push({ text: "θ", x: an.x, y: an.y, color: C.amber }, { text: `R ≈ ${k.fmt(R, 1)} m`, x: R, y: 0, color: C.green });
    P.labels(lab); head(""); SP.set([], -1);
    k.readout({ title: "Launch angle and range", rows: [{ lhs: "θ", v: th + "°", cls: "c1" }, { lhs: "2θ", v: 2 * th + "°", cls: "c5" }, { lhs: "sin 2θ", v: k.fmt(Math.sin(2 * t), 4), cls: "c5" }, { lhs: "R = v² sin 2θ / g", v: `≈ ${k.fmt(R, 1)} m` }],
      landmark: { hit: th === 45, big: th === 45 ? "maximum: sin 90° = 1" : `${th}° and ${90 - th}° land together`, note: th === 45 ? `R = v²/g ≈ ${k.fmt(v * v / g, 1)} m` : "sin(180° − 2θ) = sin 2θ" },
      narr: "Slide θ. The dashed path uses 90° − θ. Speed 20 m/s, g = 9.8 m/s², level ground, no air resistance." });
  }
  k.modes([["double", "Double"], ["half", "Half"], ["range", "Range"]], mode, m => { mode = m; open(); });
  const stD = k.group("double", () => k.stepper(() => 6, v => { step = v; }, { ms: 1400 }));
  const stH = k.group("half", () => { const s = k.stepper(() => 5, v => { step = v; }); k.button("New problem", () => { hi = (hi + 1) % HF.length; s.reset(); open(); }, "btn ghost"); return s; });
  S = k.group("range", () => k.params([{ key: "th", label: `<span class="c1"><i>θ</i></span>`, min: 5, max: 85, step: 1, value: 30, fmt: v => v + "°" }]));
  function open(){ k.showGroup(mode); [stD, stH].forEach(s => { s.pause(); s.k = 0; }); step = 0;
    if (mode === "double") { k.guard([strip(DB[2].eq), strip(DB[5].eq)]); k.hint("Step: write 2θ as θ + θ and use the sum formulas."); }
    else if (mode === "half") { k.guard([strip(hfLines(HF[hi])[4].eq)]); k.hint("Find the quadrant of θ/2 first; it decides the sign."); }
    else { k.guard([]); k.hint("Change the launch angle and watch the landing point."); } }
  open();
  k.loop(() => { c.begin(); if (mode === "double") drawDouble(); else if (mode === "half") drawHalf(); else drawRange(); });
};

/* ---------- trig-sum-product ---------- */
L["trig-sum-product"] = k => {
  MathKit.attach(k); css();
  const { C } = k, c = k.canvas(), host = k.dom(), head = box((host.classList.add("b6h"), host)), SP = k.stepsPanel(host);
  let mode = "derive", P = null, step = 0, vi = 0, waves = true;
  const DV = [
    { tag: "sum formula", eq: "sin(α + β) = sin α cos β + cos α sin β", why: "" },
    { tag: "difference formula", eq: "sin(α − β) = sin α cos β − cos α sin β", why: "" },
    { tag: "add the lines", eq: "sin(α + β) + sin(α − β) = 2 sin α cos β", why: "the cos α sin β terms cancel" },
    { tag: "divide by 2", eq: `<span class="c5">sin α cos β = ½[sin(α + β) + sin(α − β)]</span>`, why: "product to sum" },
    { tag: "rename", eq: "a = α + β, b = α − β ⇒ α = (a + b)/2, β = (a − b)/2", why: "add and subtract the two equations" },
    { tag: "sum to product", eq: `<span class="c5">sin a + sin b = 2 sin((a + b)/2) cos((a − b)/2)</span>`, why: "the added line with the new names" }];
  const f1 = x => Math.sin(4 * x), f2 = x => Math.sin(2 * x), fs = x => f1(x) + f2(x), ev = x => 2 * Math.cos(x);
  function drawDerive(){
    const pad = k.split(c, host, { side: "left", frac: .5, hfrac: .5 });
    P = k.plane(c, { xmin: 0, xmax: 2 * PI, ymin: -2.6, ymax: 2.6, xstep: c.w < 600 ? PI : PI / 2, ystep: 1, pad }); P.grid(); P.piAxes(); const lab = [];
    const add = (f, col, at, text, o) => { P.curve(f, col, o); const p = P.onCurve(f, at); if (p) lab.push({ text, x: p.x, y: p.y, color: col }); };
    if (step >= 6) { add(ev, C.violet, .05, "2 cos x", { w: 2, dash: [7, 5] }); P.curve(x => -ev(x), C.violet, { w: 2, dash: [7, 5] }); }
    if (step >= 1) add(f1, step >= 3 ? k.alpha(C.cyan, .5) : C.cyan, .3, "sin 4x", { w: 2 });
    if (step >= 2) add(f2, step >= 3 ? k.alpha(C.pink, .5) : C.pink, .55, "sin 2x", { w: 2 });
    if (step >= 3) add(fs, C.green, .8, "sin 4x + sin 2x", { w: 3.5 });
    add(x => 2 * Math.sin(3 * x) * Math.cos(x), C.text, .12, "2 sin 3x cos x", { w: 1.4, dash: [2, 4] });
    P.labels(lab);
    head(`<p class="b6p">Take <span class="m">α = 3<i>x</i></span>, <span class="m">β = <i>x</i></span>: then <span class="m c2">sin(α + β) = sin 4<i>x</i></span> and <span class="m c3">sin(α − β) = sin 2<i>x</i></span>.</p>`); SP.set(DV, step - 1);
    k.readout({ title: "Add two formulas", rows: [{ lhs: "α, β", v: "3x, x" }, { lhs: "dotted", v: "2 sin 3x cos x" }],
      landmark: { hit: step >= 6, big: step >= 6 ? "fast wave inside an envelope" : "add the sum and difference lines", note: step >= 6 ? "sin 4x + sin 2x = 2 cos x · sin 3x: the violet envelope ±2 cos x holds the green curve." : "" },
      narr: "Step through. The dotted product 2 sin 3x cos x ends up exactly on the green sum." });
  }
  let B = null;
  function drawBeats(){
    const pad = k.split(c, host, { off: true }), _n = host.classList.remove("narrow"), a = B.f1, b = B.f2, d = Math.abs(a - b), w1 = t => Math.sin(2 * PI * a * t), w2 = t => Math.sin(2 * PI * b * t);
    P = k.plane(c, { xmin: 0, xmax: 2, ymin: -2.6, ymax: 2.6, xstep: c.w < 600 ? .5 : .25, ystep: 1, pad, xlabel: "t (s)" }); P.grid(); P.axes();
    if (waves) { P.curve(w1, k.alpha(C.cyan, .45), { w: 1 }); P.curve(w2, k.alpha(C.pink, .45), { w: 1 }); }
    const env = t => 2 * Math.cos(PI * (a - b) * t);
    P.curve(t => w1(t) + w2(t), C.green, { w: 2 }); P.curve(env, C.violet, { w: 2, dash: [7, 5] }); P.curve(t => -env(t), C.violet, { w: 2, dash: [7, 5] });
    const p = P.onCurve(env, .1); P.labels([p && { text: "envelope", x: p.x, y: p.y, color: C.violet }]); head(""); SP.set([], -1);
    k.readout({ title: "Beats", rows: [{ lhs: "f₁", v: a + " Hz", cls: "c2" }, { lhs: "f₂", v: b + " Hz", cls: "c3" }, { lhs: "(f₁ + f₂)/2", v: k.fmt((a + b) / 2, 2) + " Hz", cls: "c5" }, { lhs: "|f₁ − f₂|", v: k.fmt(d, 2) + " beats/s", cls: "c4" }],
      landmark: { hit: d === 0, big: d === 0 ? "in tune: no beats" : `${k.fmt(d, 2)} beat${d === 1 ? "" : "s"} per second`, note: d === 0 ? "The envelope 2 cos 0 = 2 is constant: one tone, twice as loud." : "The sound fades each time the envelope crosses 0." },
      narr: "Move f₂ toward f₁: the beats slow down and stop when the two match, the way a musician tunes." });
  }
  // Evaluate: [question, angle u°, angle v° (u, v are α ± β, or a, b), coordinate of the chord midpoint used, factor, lines]
  const EV = [
    ["sin 75° cos 15°", 90, 60, "y", 1, [["sin α cos β = ½[sin(α + β) + sin(α − β)]", "sine times cosine"], ["α + β = 90°, α − β = 60°", "α = 75°, β = 15°"], ["sin 75° cos 15° = ½[sin 90° + sin 60°]", ""], [`= ½[1 + ${h3}]`, "exact values"], [`sin 75° cos 15° = ${FR("2 + " + r3, 4)}`, "≈ 0.933"]]],
    ["cos 75° cos 15°", 90, 60, "x", 1, [["cos α cos β = ½[cos(α + β) + cos(α − β)]", "cosine times cosine"], ["α + β = 90°, α − β = 60°", "α = 75°, β = 15°"], ["cos 75° cos 15° = ½[cos 90° + cos 60°]", ""], [`= ½[0 + ${hf}]`, "exact values"], [`cos 75° cos 15° = ${FR(1, 4)}`, "= 0.25"]]],
    ["sin 105° + sin 15°", 105, 15, "y", 2, [["sin a + sin b = 2 sin((a + b)/2) cos((a − b)/2)", "two sines"], ["(a + b)/2 = 60°, (a − b)/2 = 45°", "a = 105°, b = 15°"], ["sin 105° + sin 15° = 2 sin 60° cos 45°", ""], [`= 2 · ${h3} · ${h2}`, "exact values"], [`sin 105° + sin 15° = ${FR(r6, 2)}`, "≈ 1.2247"]]],
    ["cos 105° + cos 15°", 105, 15, "x", 2, [["cos a + cos b = 2 cos((a + b)/2) cos((a − b)/2)", "two cosines"], ["(a + b)/2 = 60°, (a − b)/2 = 45°", "a = 105°, b = 15°"], ["cos 105° + cos 15° = 2 cos 60° cos 45°", ""], [`= 2 · ${hf} · ${h2}`, "exact values"], [`cos 105° + cos 15° = ${FR(r2, 2)}`, "≈ 0.7071"]]]];
  const evLines = e => e[5].map(([eq, why], j) => ({ tag: ["formula", "angles", "substitute", "values", "result"][j], eq: j === 4 ? `<span class="c5">${eq}</span>` : eq, why }));
  function drawEval(){
    const e = EV[vi], pad = k.split(c, host, { side: "right", frac: .48 }), u = e[1] * D, v = e[2] * D, m = (u + v) / 2, lab = [];
    P = ucPlane(k, c, pad); ray(P, m, k.alpha(C.amber, .7), 1.5, [5, 4]);
    const U = [Math.cos(u), Math.sin(u)], V = [Math.cos(v), Math.sin(v)], M = [(U[0] + V[0]) / 2, (U[1] + V[1]) / 2];
    if (step >= 2) { ray(P, u, C.cyan, 2); ray(P, v, C.pink, 2); P.seg(U[0], U[1], V[0], V[1], C.violet, 3); P.dot(U[0], U[1], C.cyan, 7); P.dot(V[0], V[1], C.pink, 7);
      lab.push({ text: e[1] + "°", x: U[0], y: U[1], color: C.cyan }, { text: e[2] + "°", x: V[0], y: V[1], color: C.pink }); }
    if (step >= 5) { if (e[3] === "y") P.seg(M[0], 0, M[0], M[1], C.green, 4); else P.seg(0, 0, M[0], 0, C.green, 4); P.dot(M[0], M[1], C.green, 7);
      lab.push({ text: `M (${k.fmt(M[0], 3)}, ${k.fmt(M[1], 3)})`, x: M[0], y: M[1], color: C.green }); }
    P.labels(lab); const ls = evLines(e);
    head(`<p class="b6p">Find <span class="m">${e[0]}</span> exactly.</p>`); SP.set(ls, step - 1);
    k.readout({ title: "Evaluate exactly", rows: [{ lhs: "midpoint angle", v: Math.round(m / D) + "°", cls: "c1" }, step >= 5 && { lhs: e[4] === 2 ? `2 × (${e[3]} of M)` : `${e[3]} of M`, v: k.fmt(e[4] * M[e[3] === "x" ? 0 : 1], 4), cls: "c5" }],
      landmark: { hit: step >= 5, big: step >= 5 ? `<span class="m">${ls[4].eq}</span>` : "the midpoint of a chord", note: step >= 5 ? "M, the midpoint of the chord, is (cos α cos β, sin α cos β)." : "Halving a sum of two sines or cosines averages two coordinates." },
      narr: "The chord joins the points at α + β and α − β; its midpoint lies on the ray at α, at distance cos β." });
  }
  k.modes([["derive", "Derive"], ["beats", "Beats"], ["eval", "Evaluate"]], mode, mm => { mode = mm; open(); });
  const stD = k.group("derive", () => k.stepper(() => 6, v => { step = v; }, { ms: 1400 }));
  B = k.group("beats", () => { const s = k.params([{ key: "f1", label: `<span class="c2"><i>f</i><sub>1</sub></span>`, min: 4, max: 16, step: .5, value: 10, fmt: v => v + " Hz" },
    { key: "f2", label: `<span class="c3"><i>f</i><sub>2</sub></span>`, min: 4, max: 16, step: .5, value: 11, fmt: v => v + " Hz" }]); k.check("Show the two waves", true, v => { waves = v; }); return s; });
  const stE = k.group("eval", () => { const s = k.stepper(() => 5, v => { step = v; }); k.button("New problem", () => { vi = (vi + 1) % EV.length; s.reset(); open(); }, "btn ghost"); return s; });
  function open(){ k.showGroup(mode); [stD, stE].forEach(s => { s.pause(); s.k = 0; }); step = 0;
    if (mode === "derive") { k.guard([strip(DV[3].eq), strip(DV[5].eq)]); k.hint("Step: write the two sine formulas, add them, then rename the angles."); }
    else if (mode === "eval") { k.guard([strip(evLines(EV[vi])[4].eq)]); k.hint("Choose the formula, find the new angles, substitute exact values."); }
    else { k.guard([]); k.hint("Two close frequencies: the sum swells and fades inside the violet envelope."); } }
  open();
  k.loop(() => { c.begin(); if (mode === "derive") drawDerive(); else if (mode === "beats") drawBeats(); else drawEval(); });
};
})();
