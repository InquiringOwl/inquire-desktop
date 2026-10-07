/* ============ Labs: Algebra II batch B9 (polynomial and rational inequalities) ============ */
(function(){
const W = window, L = W.LABS = W.LABS || {}, MR = W.MathRules;
const { Q, Poly } = MR;
const MI = "−";

/* ---------- DOM-free helpers (exposed as window.B9Rules): the sign-chart solver is MathRules.solveIneq (web/kits/subjects/math.js) ---------- */
const REL = MR.INEQ, FLIP = MR.INEQ_FLIP, critical = MR.criticalValues, testValue = MR.testValue, solveIneq = MR.solveIneq;
const cT = c => (c.q ? MR.qT(c.q) : MR.fmtN(c.x, 3));
const setT = MR.ineqSetStr, factorT = MR.factorIntStr;
// The cross-multiplying shortcut for (u·x + p)/(x − q) rel c: u·x + p rel c(x − q), solved as if x − q > 0 → {r0, rel}
function shortcut(u, p, q, c, rel){ const k = Q.sub(Q(u), Q(c)), r0 = Q.div(Q.sub(Q.neg(Q.mul(Q(c), Q(q))), Q(p)), k); return { r0, rel: k.n > 0 ? rel : FLIP[rel] }; }
W.B9Rules = { REL, FLIP, critical, testValue, solveIneq, setT, factorT, shortcut };

/* ---------- shared formatting ---------- */
const ix = "<i>x</i>";
const frH = (a, b) => `<span class="fr"><span>${a}</span><span>${b}</span></span>`;
const relH = r => ({ ">": "&gt;", "<": "&lt;" }[r] || r);
const sgH = (s, col) => `<span style="color:${s > 0 ? col.pos : col.neg}">${s > 0 ? "+" : MI}</span>`;
const CSS9 = `.b9-t{border-collapse:collapse;font:400 14px/1.35 var(--math);margin:6px 0 2px}
.b9-t td{padding:2px 4px;text-align:center;white-space:nowrap;border-bottom:1px solid var(--line-2)}
.b9-t td.b9-l{text-align:left;padding-right:8px;color:var(--muted)} .b9-t td.b9-p{color:var(--faint);font-size:12.5px}
.b9-t tr.b9-h td{color:var(--faint);font:600 12px var(--mono);border-bottom:1px solid var(--muted)} .b9-t tr.b9-f td{font-weight:600}
.b9-cap{font:600 10.5px/1.6 var(--ui);letter-spacing:.14em;text-transform:uppercase;color:var(--faint);margin:2px 0 4px}
.b9-row{display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin:3px 0}.b9-note{font:12.5px/1.4 var(--sans);color:var(--faint);margin:4px 0}
.narrow .b9-t{font-size:12.5px}.narrow .b9-t td{padding:1px 2px}`;
function css(){ if (!document.getElementById("b9-css")) { const s = document.createElement("style"); s.id = "b9-css"; s.textContent = CSS9; document.head.appendChild(s); } }

// Sign chart as an HTML table. show: {factors, test, sign, set}
function chartH(S, show, col, fname){
  const n = S.crit.length, cell = (h, cls) => `<td${cls ? ` class="${cls}"` : ""}>${h}</td>`;
  const row = (lab, ivF, ptF, cls) => `<tr${cls ? ` class="${cls}"` : ""}>${cell(lab, "b9-l")}${S.ivs.map((iv, i) => cell(ivF(iv, i)) + (i < n ? cell(ptF(S.crit[i], i), "b9-p") : "")).join("")}</tr>`;
  let h = row(ix, () => "", c => `<span style="color:${c.out ? col.ex : col.bd}">${cT(c)}</span>`, "b9-h");
  if (show.factors) {
    const facs = [];
    [[S.N, false], [S.D, true]].forEach(([p, bot]) => {
      const { roots, rest } = Poly.ratRoots(p); let den = Q(1);
      roots.forEach(({ r, m }) => { den = Q.mul(den, Q.pow(Q(r.d), m)); const fs = MR.factorStr(r, { integer: true, html: true });
        facs.push({ lab: (bot ? "÷ " : "") + (r.n === 0 && m === 1 ? fs : `(${fs})`) + (m > 1 ? `<sup>${m}</sup>` : ""), sg: t => (m % 2 === 0 ? 1 : Math.sign(Q.sub(t, r).n)), at: Q.val(r) }); });
      const rs = Poly.scale(rest, Q.inv(den));
      if (Poly.deg(rs) >= 1 || !Q.eq(rs[0], 1)) facs.push({ lab: (bot ? "÷ " : "") + (Poly.deg(rs) >= 1 ? MR.polyStr(rs, { html: true }) : MR.qT(rs[0])), sg: t => Math.sign(Poly.eval(rs, t).n), at: null });
    });
    if (facs.length > 1) facs.forEach(f => { h += row(f.lab, iv => sgH(f.sg(iv.t), col), c => (f.at !== null && Math.abs(f.at - c.x) < 1e-9 ? "0" : "")); });
  }
  if (show.test) h += row(`test ${ix}`, iv => MR.qT(iv.t), () => "");
  if (show.sign) h += row(fname, iv => sgH(iv.s, col), c => (c.out ? `<span style="color:${col.ex}">✕</span>` : `<span style="color:${col.bd}">0</span>`), "b9-f");
  if (show.set) h += row("in set", iv => (iv.inSet ? `<span style="color:${col.pos}">✓</span>` : ""), c => `<span style="color:${c.out ? col.ex : col.bd}">${c.inSet ? "●" : "○"}</span>`);
  return `<table class="b9-t">${h}</table>${S.crit.some(c => c.out) && show.sign ? `<div class="b9-note">✕ undefined: a zero of the denominator</div>` : ""}`;
}

/* ---------- the lab: graph mode (drag zeros), solve mode (stepper), and for rational inequalities a common-mistake mode ---------- */
// Exact practice cases. Poly: L(x) rel R(x) (coefficients lowest degree first). Rational: Ln/Ld rel Rn/Rd.
const PCASES = [
  { L: [-6, -1, 1], R: [0], rel: ">" }, { L: [0, 5, 2], R: [3], rel: "≥" }, { L: [-3, 4, -1], R: [0], rel: ">" },
  { L: [4, 0, 0, 1], R: [0, 4, 1], rel: "≤" }, { L: [9, 0, 1], R: [0, 6], rel: "≤" }, { L: [5, 2, 1], R: [0], rel: ">" },
  { L: [0, 0, 0, 1], R: [0, 4], rel: "≥" }, { L: [4, 0, -5, 0, 1], R: [0], rel: "<" }
];
const RCASES = [
  { Ln: [-4, 1], Ld: [1, 1], Rn: [0], Rd: [1], rel: "<" }, { Ln: [2, 1], Ld: [-3, 1], Rn: [0], Rd: [1], rel: "≥" },
  { Ln: [3, 1], Ld: [-1, 1], Rn: [2], Rd: [1], rel: "≤" }, { Ln: [0, 1], Ld: [-2, 1], Rn: [3], Rd: [1], rel: ">" },
  { Ln: [2], Ld: [-1, 1], Rn: [1], Rd: [1, 1], rel: "≥" }, { Ln: [-6, -1, 1], Ld: [-1, 1], Rn: [0], Rd: [1], rel: "≤" },
  { Ln: [1, 1], Ld: [4, -4, 1], Rn: [0], Rd: [1], rel: ">" }
];
// Common mistake: (u·x + p)/(x − q) rel c
const MCASES = [{ u: 1, p: 3, q: 1, c: 2, rel: "≤" }, { u: 1, p: 0, q: 2, c: 3, rel: ">" }, { u: 1, p: 1, q: -2, c: 0, rel: "<" }, { u: 2, p: -1, q: -1, c: 1, rel: "≥" }, { u: 0, p: 3, q: 4, c: 1, rel: "<" }];

function ineqLab(k, RAT){
  MathKit.attach(k); css();
  const { C, F } = k, c = k.canvas(), d = c.d, host = k.dom();
  host.style.font = `14px/1.5 ${F.sans}`;
  const col = { curve: RAT ? C.cyan : C.amber, bd: RAT ? C.amber : C.cyan, ex: C.violet, pos: C.green, neg: C.pink };
  const fname = RAT ? `<i>R</i>(${ix})` : `<i>P</i>(${ix})`, fT = RAT ? "R" : "P";
  const chips = document.createElement("div"), SP = k.stepsPanel(host), tbl = document.createElement("div");
  host.insertBefore(chips, SP.el); host.appendChild(tbl);
  let mode = "graph", rel = RAT ? "≥" : ">", sa = 1, P = null, s = 0, st = null, ci = 0, mi = 0, tblLast = "", chipLast = "";
  const pts = RAT ? [{ x: 1, m: 1, kind: "n" }, { x: -2, m: 1, kind: "d" }] : [{ x: -2, m: 1, kind: "n" }, { x: 3, m: 1, kind: "n" }];
  const prev = [];
  const sync = () => { prev.length = 0; pts.forEach(p => { Object.assign(p, { y: 0, fixY: true, snap: 1, clamp: [-5, 5, 0, 0] }); prev.push(p.x); }); };
  sync();
  const count = kind => pts.filter(p => p.kind === kind).length;
  function setCount(kind, n){
    for (let i = pts.length - 1; i >= 0 && count(kind) > n; i--) if (pts[i].kind === kind) pts.splice(i, 1);
    const free = [4, -4, 0, 2, -1, 5, -5, 1, -3, 3, -2];
    while (count(kind) < n) pts.push({ x: free.find(v => !pts.some(p => p.x === v)), m: 1, kind });
    sync();
  }
  k.group("graph", () => {
    if (RAT) { k.select("top zeros", [[1, "1"], [2, "2"]], 1, v => setCount("n", +v)); k.select("bottom zeros", [[1, "1"], [2, "2"]], 1, v => setCount("d", +v)); }
    else k.select("zeros", [[1, "1"], [2, "2"], [3, "3"]], 2, v => setCount("n", +v));
    k.select("sign", [["1", "a = 1"], ["-1", `a = ${MI}1`]], "1", v => { sa = +v; });
    k.select("inequality", Object.keys(REL).map(r => [r, `${fT}(x) ${r} 0`]), rel, v => { rel = v; });
  });
  const nCases = () => (mode === "mistake" ? MCASES.length : RAT ? RCASES.length : PCASES.length);
  k.group("steps", () => {
    k.button("New problem", () => { if (mode === "mistake") mi = (mi + 1) % MCASES.length; else ci = (ci + 1) % nCases(); st.reset(); guard(); }, "btn");
    st = k.stepper(() => 5, v => { s = v; k.hint(v ? "" : "Predict each sign, then press Step"); }, { ms: 1600 });
  });
  k.drag(c, () => (mode === "graph" ? P : null), pts, i => { const p = pts[i]; if (pts.some((o, j) => j !== i && o.x === p.x)) p.x = prev[i]; prev[i] = p.x; });
  chips.addEventListener("click", e => { const b = e.target.closest("button[data-i]"); if (b) pts[+b.dataset.i].m = +b.dataset.m; });

  // the current exact problem in solve / mistake modes
  function caseData(){
    if (mode === "mistake") {
      const M = MCASES[mi], N = Poly([M.p + M.c * M.q, M.u - M.c]), D = Poly([-M.q, 1]), S = solveIneq(N, D, M.rel), sc = shortcut(M.u, M.p, M.q, M.c, M.rel);
      return { M, S, Wr: solveIneq(Poly([Q.neg(sc.r0), Q(1)]), [1], sc.rel), sc, f: x => (M.u * x + M.p) / (x - M.q) };
    }
    if (RAT) { const K = RCASES[ci], N = Poly.sub(Poly.mul(Poly(K.Ln), Poly(K.Rd)), Poly.mul(Poly(K.Rn), Poly(K.Ld))), D = Poly.mul(Poly(K.Ld), Poly(K.Rd)); return { K, S: solveIneq(N, D, K.rel) }; }
    const K = PCASES[ci]; return { K, S: solveIneq(Poly.sub(Poly(K.L), Poly(K.R)), [1], K.rel) };
  }
  function guard(){ const cd = caseData(); k.guard(mode === "mistake" ? [setT(cd.S), setT(cd.Wr)] : [setT(cd.S)]); }
  const HINT = { graph: "Drag the dots on the x-axis; tap ×1 or ×2 in the panel", solve: "Predict each sign, then press Step", mistake: "Predict each sign, then press Step" };
  const MODES = [["graph", "Graph"], ["solve", "Solve"]].concat(RAT ? [["mistake", "Common mistake"]] : []);
  function setMode(m){ mode = m; k.showGroup(m === "graph" ? "graph" : "steps"); if (st) st.reset(); if (m === "graph") k.guard([]); else guard(); k.hint(HINT[m]); }
  k.modes(MODES, mode, setMode);
  setMode(mode);
  const view = {};

  k.loop(dt => {
    c.begin();
    const pad = k.split(c, host, { side: "left", frac: 0.38, hfrac: mode === "graph" ? 0.44 : 0.5 });
    const narrow = c.w < 600, labs = [];
    let S, f, cd = null;
    if (mode === "graph") {
      const prod = kind => pts.filter(p => p.kind === kind).reduce((acc, p) => Poly.mul(acc, Poly.pow([Q(-p.x), Q(1)], p.m)), Poly([1]));
      const N = Poly.scale(prod("n"), Q(sa)), D = prod("d");
      S = solveIneq(N, D, rel); f = x => Poly.evalN(N, x) / Poly.evalN(D, x);
    } else { cd = caseData(); S = cd.S; f = cd.f || (x => Poly.evalN(S.N, x) / Poly.evalN(S.D, x)); }
    // window
    const xs = S.crit.map(q => q.x).concat(cd && cd.M ? [cd.sc.r0 ? Q.val(cd.sc.r0) : 0] : []);
    let xmin = -6, xmax = 6;
    if (mode !== "graph") { const lo = Math.min(0, ...xs) - 2.5, hi = Math.max(0, ...xs) + 2.5, mid = (lo + hi) / 2, w = Math.max(9, hi - lo); xmin = mid - w / 2; xmax = mid + w / 2; }
    let H = 8;
    if (!RAT) { let m = 2; const a = Math.max(xmin, Math.min(...xs, 0) - 1.4), b = Math.min(xmax, Math.max(...xs, 0) + 1.4); for (let i = 0; i <= 120; i++) { const v = Math.abs(f(a + (b - a) * i / 120)); if (isFinite(v)) m = Math.max(m, v); } H = Math.min(300, m * 1.25); }
    k.smooth(view, { H, xmin, xmax }, dt);
    P = k.plane(c, { xmin: view.xmin, xmax: view.xmax, ymin: -view.H, ymax: view.H, pad, xlabel: "x", ylabel: "y", xstep: narrow ? 2 : 1 });
    P.grid(); P.axes();
    const showB = mode === "graph" || s >= 3, showC = mode !== "solve" || s >= 4, showSet = mode === "graph" || (mode === "solve" ? s >= 5 : s >= 4);
    const outX = S.crit.filter(q => q.out).map(q => q.x);
    if (showB) S.crit.filter(q => q.out).forEach(q => P.vasym(q.x, col.ex, 1.6));
    if (showC) {
      if (mode !== "mistake" || s >= 4) S.ivs.forEach(iv => { const a = iv.lo ? iv.lo.x : P.xmin, b = iv.hi ? iv.hi.x : P.xmax, e = (P.xmax - P.xmin) * 2e-3; if (b - a > 2 * e) P.shade(f, cd && cd.M ? () => cd.M.c : null, Math.max(a, P.xmin) + e, Math.min(b, P.xmax) - e, k.alpha(iv.s > 0 ? col.pos : col.neg, 0.14)); });
      P.curve(f, col.curve, { breaks: outX, w: 2.8 });
      if (cd && cd.M) { P.hasym(cd.M.c, k.alpha(C.text, 0.5), 1.4); labs.push({ text: `y = ${MR.sg(cd.M.c)}`, x: P.xmax - (P.xmax - P.xmin) * 0.06, y: cd.M.c, color: C.muted, font: `13px ${F.mono}` }); }
    }
    const bar = (T, color, dy) => T.pieces.forEach(p => {
      if (p.pt) { P.dot(p.pt.x, 0, color, 6.5); return; }
      const a = p.lo ? p.lo.x : P.xmin, b = p.hi ? p.hi.x : P.xmax, y = P.Y(0) + dy;
      d.line(P.X(Math.max(a, P.xmin)), y, P.X(Math.min(b, P.xmax)), y, k.alpha(color, 0.85), 6);
      P.seg(Math.max(a, P.xmin), 0, Math.min(b, P.xmax), 0, "rgba(0,0,0,0)", 0);
    });
    if (cd && cd.M && s >= 1) { bar(cd.Wr, col.neg, 12); const p0 = Q.val(cd.sc.r0); const lx = cd.sc.rel === ">" || cd.sc.rel === "≥" ? (p0 + P.xmax) / 2 : (p0 + P.xmin) / 2; labs.push({ text: "shortcut", x: lx, y: 0, color: col.neg, prefer: "s", font: `600 12px ${F.mono}` }); }
    if (showSet) bar(S, col.pos, 0);
    if (cd && cd.M && s >= 5) { const q = cd.M.q; P.shade(() => P.ymax, () => P.ymin, P.xmin, q, k.alpha(col.ex, 0.07)); labs.push({ text: `x − ${MR.sg(q)} < 0`.replace("− −", "+ "), x: (P.xmin + q) / 2, y: P.ymax * 0.8, color: col.ex, font: `13px ${F.mono}` }); }
    if (showB) S.crit.forEach(q => {
      if (q.inSet && (mode === "graph" || showSet)) P.dot(q.x, 0, col.bd, 5.5); else P.hole(q.x, 0, q.out ? col.ex : col.bd, 5.5);
      labs.push({ text: cT(q), x: q.x, y: 0, color: q.out ? col.ex : col.bd, prefer: "n", font: `600 13px ${F.mono}` });
    });
    if (showC && mode === "graph") S.ivs.forEach(iv => { const a = Math.max(iv.lo ? iv.lo.x : P.xmin, P.xmin), b = Math.min(iv.hi ? iv.hi.x : P.xmax, P.xmax); if (b - a > 0.6) labs.push({ text: iv.s > 0 ? "+" : MI, x: (a + b) / 2, y: 0, color: iv.s > 0 ? col.pos : col.neg, prefer: iv.s > 0 ? "n" : "s", font: `700 16px ${F.mono}` }); });
    P.labels(labs);

    // panel
    let chipH = "";
    if (mode === "graph") {
      const zr = kind => pts.map((p, i) => (p.kind !== kind ? "" : `<div class="b9-row"><span class="m" style="min-width:4.4em;color:${kind === "n" ? col.bd : col.ex}">${ix} = ${MR.sg(p.x)}</span>${[1, 2].map(m => `<button type="button" class="btn-s" data-i="${i}" data-m="${m}"${m === p.m ? ` aria-pressed="true" style="color:var(--pink);border-color:var(--pink)"` : ""}>×${m}</button>`).join("")}</div>`)).join("");
      chipH = RAT ? `<div class="b9-cap">numerator zeros</div>${zr("n")}<div class="b9-cap">denominator zeros</div>${zr("d")}` : `<div class="b9-cap">zeros · drag them on the axis</div>${zr("n")}`;
    }
    if (chipH !== chipLast) { chips.innerHTML = chipH; chipLast = chipH; }
    const thtml = mode === "graph" ? `<div class="b9-cap">sign chart</div>${chartH(S, { factors: true, sign: true, set: true }, col, fname)}`
      : s >= 3 ? `<div class="b9-cap">sign chart</div>${chartH(S, { test: s >= 4, sign: s >= 4, set: mode === "solve" ? s >= 5 : s >= 4 }, col, fname)}` : "";
    if (thtml !== tblLast) { tbl.innerHTML = thtml; tblLast = thtml; }
    SP.el.style.display = mode === "graph" ? "none" : "";
    if (mode === "graph") readGraph(S); else if (mode === "solve") readSolve(cd); else readMistake(cd);
  });

  const rH = S => (Poly.deg(S.D) >= 1 ? `${frH(factorT(S.N, true), factorT(S.D, true))}` : factorT(S.N, true));
  const setH = S => `<span class="m" style="color:${col.pos}">${setT(S)}</span>`;
  const testsH = S => S.ivs.map(iv => `${fT}(${MR.qT(iv.t)}) = ${MR.qT(iv.v)} ${iv.s > 0 ? "&gt;" : "&lt;"} 0`).join(", ");
  const critH = S => (!S.crit.length ? "none" : [false, true].map(o => { const l = S.crit.filter(q => q.out === o); return l.length ? `${l.map(q => `<span style="color:${o ? col.ex : col.bd}">${ix} = ${cT(q)}</span>`).join(", ")} ${o ? "(excluded)" : REL[S.rel].eq ? "(included)" : "(not included)"}` : ""; }).filter(Boolean).join("; "));
  function readGraph(S){
    const R = REL[S.rel], ev = S.crit.filter(q => !q.out && q.m % 2 === 0), ex = S.crit.filter(q => q.out);
    const zs = S.crit.filter(q => !q.out);
    let landmark;
    if (RAT) landmark = R.eq && ex.length
      ? { hit: true, big: `${ex.map(cT).join(", ")} stays open even with ${S.rel}`, note: `${fT}(x) is undefined where the denominator is 0, so those points are never solutions. The numerator zeros fill in, because ${fT} = 0 there.` }
      : { hit: false, big: "Switch to ≥ or ≤", note: "Watch which circles fill: zeros of the numerator do, zeros of the denominator never do." };
    else landmark = ev.length
      ? { hit: true, big: `No sign change at ${ix} = ${ev.map(cT).join(", ")}`, note: `An even power is never negative, so P has the same sign on both sides. Whether the point itself belongs depends only on ${R.eq ? "≥/≤: it is included" : "> or <: here it is left out"}.` }
      : { hit: false, big: "Signs alternate across simple zeros", note: "Set a zero to ×2 and watch the sign chart: that zero no longer flips the sign." };
    k.readout({ title: `${RAT ? "Rational" : "Polynomial"} inequality`, big: `<span class="m">${rH(S)} ${relH(S.rel)} 0</span>`,
      rows: [{ lhs: "solution", v: setH(S) },
        { lhs: RAT ? "numerator zeros" : "boundary", v: zs.length ? zs.map(cT).join(", ") : "none", cls: RAT ? "c1" : "c2", lbl: R.eq ? `${fT} = 0 there: included (${S.rel})` : `${fT} = 0 there: not included (${S.rel})` },
        RAT ? { lhs: "excluded", v: ex.length ? ex.map(cT).join(", ") : "none", cls: "c4", lbl: "denominator zero: never in the set" } : null,
        { lhs: "signs", v: S.ivs.map(iv => sgH(iv.s, col)).join(" | "), lbl: "left to right" }],
      landmark, narr: RAT ? "Drag the dots, make a denominator zero ×2, and switch between > and ≥." : "Drag the zeros, flip the sign of a, and switch between > and ≥." });
  }
  function readSolve(cd){
    const S = cd.S, K = cd.K, R = REL[S.rel];
    let orig, one, oneWhy;
    if (RAT) {
      const lhs = frH(MR.polyH(Poly(K.Ln)), factorT(K.Ld, true)), rz = K.Rd.length === 1 && K.Rn.length === 1, rhs = rz ? MR.qT(K.Rn[0]) : frH(MR.polyH(Poly(K.Rn)), factorT(K.Rd, true));
      orig = `${lhs} ${relH(S.rel)} ${rhs}`;
      const zero = rz && K.Rn[0] === 0;
      one = zero ? `${lhs} ${relH(S.rel)} 0` : `${lhs} ${MI} ${rhs} ${relH(S.rel)} 0 &nbsp;⇒&nbsp; ${frH(MR.polyH(S.N), factorT(S.D, true))} ${relH(S.rel)} 0`;
      oneWhy = zero ? "Already one fraction compared with 0." : `Subtract, then write one fraction over the common denominator ${factorT(S.D, true)}. Do not multiply by it: its sign is unknown.`;
    } else {
      const rz = K.R.length === 1 && K.R[0] === 0;
      orig = `${MR.polyH(Poly(K.L))} ${relH(S.rel)} ${MR.polyH(Poly(K.R))}`;
      one = `${MR.polyH(S.N)} ${relH(S.rel)} 0`; oneWhy = rz ? "Already 0 on the right." : "Subtract the right side so the other side is 0.";
    }
    const noZ = !S.crit.length, disc = !RAT && Poly.deg(S.N) === 2 ? Q.sub(Q.mul(S.N[1], S.N[1]), Q.mul(Q(4), Q.mul(S.N[2], S.N[0]))) : null;
    const lines = [
      { tag: "solve", eq: `<span class="m">${orig}</span>`, why: "Find every real x that makes it true." },
      { tag: "one side", eq: `<span class="m">${one}</span>`, why: oneWhy },
      { tag: "factor", eq: `<span class="m">${rH(S)} ${relH(S.rel)} 0</span>`, why: noZ ? `No real zeros${disc ? `: b² − 4ac = ${MR.qT(disc)} &lt; 0` : ""}. The sign never changes.` : "Factored form shows where each factor is zero." },
      { tag: "critical", eq: `<span class="m">${critH(S)}</span>`, why: noZ ? "One interval: the whole line." : RAT ? "Zeros of the numerator and of the denominator split the line into intervals." : "The zeros split the number line into intervals." },
      { tag: "test", eq: `<span class="m">${testsH(S)}</span>`, why: "One test value per interval gives the sign on the whole interval." },
      { tag: "solution", eq: setH(S), why: `Keep the intervals where ${fT}(x) ${relH(S.rel)} 0${R.eq ? `, plus the zeros of ${RAT ? "the numerator" : fT}` : ""}${RAT ? "; never a zero of the denominator" : ""}.` }
    ];
    SP.set(lines, s);
    k.readout({ title: `Solve · problem ${ci + 1} of ${nCases()}`, big: `<span class="m">${orig}</span>`,
      rows: [{ lhs: "step", v: `${s} of 5` }, s >= 3 ? { lhs: "critical values", v: S.crit.length ? S.crit.map(cT).join(", ") : "none" } : null, s >= 5 ? { lhs: "solution", v: setH(S) } : null],
      landmark: s >= 5 ? { hit: true, big: setH(S), note: R.eq ? `Square brackets at ${RAT ? "numerator " : ""}zeros, because ${fT} = 0 satisfies ${S.rel}.` : `Parentheses at every critical value, because ${S.rel} is strict.` }
        : { hit: false, big: "Predict, then Step", note: "Before each step, say what it will show: the zeros, then the sign on each interval." },
      narr: "Step through, then New problem. Compare the shaded parts of the graph with the solution." });
  }
  function readMistake(cd){
    const { M, S, Wr, sc } = cd, num = MR.polyH(Poly([M.p, M.u])), den = factorT([-M.q, 1], true), r = relH(M.rel);
    const orig = `${frH(num, den)} ${r} ${MR.sg(M.c)}`;
    const rhs = M.c === 0 ? "0" : `${M.c === 1 ? "" : MR.sg(M.c)}(${den})`;
    const lines = [
      { tag: "solve", eq: `<span class="m">${orig}</span>`, why: "A tempting shortcut and the correct method, side by side." },
      { tag: "shortcut", eq: `<span class="m" style="color:${col.neg}">${num} ${r} ${rhs} &nbsp;⇒&nbsp; ${ix} ${relH(sc.rel)} ${MR.qT(sc.r0)}</span>`, why: `Multiplies both sides by ${den} as if it were positive. Shortcut answer: ${setT(Wr)}.` },
      { tag: "one side", eq: `<span class="m">${frH(MR.polyH(S.N), den)} ${r} 0</span>`, why: `Subtract ${M.c} and use the common denominator ${den}. Nothing is multiplied.` },
      { tag: "critical", eq: `<span class="m">${critH(S)}</span>`, why: "Numerator zero and denominator zero." },
      { tag: "sign chart", eq: `<span class="m">${testsH(S)}</span>`, why: `Correct answer: ${setT(S)}.` },
      { tag: "compare", eq: `<span class="m"><span style="color:${col.pos}">${setT(S)}</span> vs <span style="color:${col.neg}">${setT(Wr)}</span></span>`, why: `For ${ix} &lt; ${MR.sg(M.q)} the factor ${den} is negative, so multiplying by it reverses the inequality. The shortcut is right only for ${ix} &gt; ${MR.sg(M.q)}.` }
    ];
    SP.set(lines, s);
    k.readout({ title: `Common mistake · ${mi + 1} of ${MCASES.length}`, big: `<span class="m">${orig}</span>`,
      rows: [s >= 1 ? { lhs: "shortcut", v: `<span style="color:${col.neg}">${setT(Wr)}</span>`, lbl: "pink bar, below the axis" } : null,
        s >= 4 ? { lhs: "sign chart", v: setH(S), lbl: "green bar, on the axis" } : null, { lhs: "step", v: `${s} of 5` }],
      landmark: s >= 5 ? { hit: true, big: `They agree only where ${den} &gt; 0`, note: "Never multiply an inequality by an expression whose sign you do not know. Compare with 0 and use a sign chart." }
        : { hit: false, big: "Which answer is right?", note: "The graph decides: the solution is where the curve is on the correct side of the line." },
      narr: "Step to the end, then New problem. In some cases the shortcut loses solutions, in others it adds false ones." });
  }
}

L["a2-poly-ineq"] = k => ineqLab(k, false);
L["a2-rational-ineq"] = k => ineqLab(k, true);
})();
