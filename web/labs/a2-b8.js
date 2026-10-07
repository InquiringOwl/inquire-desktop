/* ============ Labs: Algebra II, batch B8 (exponential functions, logarithms, radical functions) ============ */
(function(){
const L = window.LABS;
const MI = "−";

/* ---------- DOM-free helpers: e, exact log points and drills, radical equations are in MathRules (web/kits/subjects/math.js) ---------- */
const compoundE = n => window.MathRules.compoundE(n);
const eDigits = (v, dec) => window.MathRules.eDigits(v, dec);
const logPoints = (b, lo, hi) => window.MathRules.logPoints(b, lo, hi);
const logCases = () => window.MathRules.logCases();
const radicalEq = (a, b) => window.MathRules.radicalEq(a, b);

/* ---------- small drawing helpers ---------- */
// A point of y = f(x) inside the window: the plane kit's P.onCurve (same search).
const onCurve = (P, f, at, lo, hi) => P.onCurve(f, at, lo, hi);
const ix = "<i>x</i>", iy = "<i>y</i>";
const fr = (a, b) => `<span class="fr"><span>${a}</span><span>${b}</span></span>`;
const ol = s => `√<span class="mk-ol">${s}</span>`;
const cl = (cls, s) => `<span class="${cls}">${s}</span>`;
const nw = s => `<span style="white-space:nowrap">${s}</span>`;
const pm = (s, v) => (v === 0 ? s : `${s} ${v < 0 ? MI : "+"} ${Math.abs(v)}`);

/* ================= Exponential functions & e (A + E) ================= */
const EB = [[1, 4], [1, 3], [1, 2], [2, 3], [3, 2], [2, 1], null, [3, 1], [4, 1]];   // null = e
const EAV = [-3, -2, -1, -0.5, 0.5, 1, 2, 3];
L["a2-exp-func"] = k => {
  MathKit.attach(k);
  const { C, F } = k, MR = k.MR, Q = MR.Q, c = k.canvas();
  let mode = "graph", bi = 5, ai = 5, h = 0, kv = 0, tn = 0, P = null; const view = {};
  const isE = () => EB[bi] === null, bQ = () => Q(EB[bi][0], EB[bi][1]), bv = () => (isE() ? Math.E : Q.val(bQ()));
  const bT = i => (EB[i] === null ? "e" : MR.qT(Q(EB[i][0], EB[i][1])));
  const n = () => Math.max(1, Math.round(10 ** tn));
  const hints = { graph: "Move b through 1/4 … 4, then press b = e", e: "Slide n: more compounding periods, same 100% rate" };
  const setMode = m => { mode = m; k.showGroup(m); k.guard([]); k.hint(hints[m]); };
  k.modes([["graph", "Graph"], ["e", "Find e"]], mode, setMode);
  let sb, sa, sh, sk, sn;
  k.group("graph", () => {
    sb = k.slider(cl("c1", "<i>b</i>"), 0, EB.length - 1, 1, bi, v => bi = v, bT);
    sa = k.slider("<i>a</i>", 0, EAV.length - 1, 1, ai, v => ai = v, v => MR.fmtN(EAV[v]));
    sh = k.slider("<i>h</i>", -4, 4, 1, h, v => h = v, MR.sg);
    sk = k.slider("<i>k</i>", -4, 4, 1, kv, v => kv = v, MR.sg);
    k.button("b = e", () => { bi = 6; sb.set(6); }, "btn-s");
    k.button("Parent", () => { ai = 5; h = 0; kv = 0; sa.set(5); sh.set(0); sk.set(0); }, "btn-s");
  });
  k.group("e", () => {
    sn = k.slider("<i>n</i>", 0, 6, 0.05, tn, v => tn = v, () => n().toLocaleString("en-US"));
    [["n = 1", 1], ["12", 12], ["365", 365], ["10⁶", 1e6]].forEach(([t, v]) => k.button(t, () => { tn = Math.log10(v); sn.set(tn); }, "btn-s"));
  });
  setMode(mode);
  // HTML of a · b^(x − h) + k
  const fH = () => { const a = EAV[ai], bt = isE() ? "<i>e</i>" : EB[bi][1] === 1 ? bT(bi) : `(${bT(bi)})`;
    return pm(`${a === 1 ? "" : a === -1 ? MI : MR.fmtN(a) + " · "}${cl("c1", bt)}<sup>${pm(ix, -h)}</sup>`, kv); };
  // exact (rational base) or approximate value of the transformed function at x
  const val = x => { const a = EAV[ai]; if (isE()) return { t: "≈ " + MR.fmtN(a * Math.exp(x - h) + kv, 3), v: a * Math.exp(x - h) + kv };
    const q = Q.add(Q.mul(Q(a), Q.pow(bQ(), x - h)), Q(kv)); return { t: MR.qT(q), v: Q.val(q), q }; };

  k.loop(dt => {
    c.begin(); const d = c.d, labels = [];
    if (mode === "graph") {
      const a = EAV[ai], b = bv(), f = x => a * Math.pow(b, x - h) + kv;
      k.smooth(view, a > 0 ? { lo: kv - 3, hi: kv + 9 } : { lo: kv - 9, hi: kv + 3 }, dt);
      const xs = c.w < 520 ? 2 : 1;
      P = k.plane(c, { xmin: -6, xmax: 6, ymin: view.lo, ymax: view.hi, xstep: xs, ystep: c.h < 560 ? 2 : 1, xlabel: "x", ylabel: "y" });
      P.grid(); P.axes();
      P.curve(x => Math.pow(b, x), k.alpha(C.amber, 0.55), { w: 1.8, dash: [6, 5] });
      P.hasym(kv);
      P.curve(f, C.cyan, { w: 3 });
      // tangent at the anchor (h, a + k): slope a·ln b = (height above y = k) × ln b
      const m = a * Math.log(b), hit = isE(), tc = hit ? C.pink : k.alpha(C.pink, 0.5);
      P.seg(h - 1.3, a + kv - 1.3 * m, h + 1.3, a + kv + 1.3 * m, tc, hit ? 2.4 : 1.6, hit ? null : [4, 4]);
      [[-1, 1 / b], [0, 1], [1, b]].forEach(([x0, y0], i) => { P.dot(x0, y0, k.alpha(C.amber, 0.7), 3.5);
        const X = x0 + h, V = val(X); P.dot(X, V.v, C.cyan, i === 1 ? 6 : 5);
        labels.push({ text: `(${MR.sg(X)}, ${V.t.replace("≈ ", "")})`, x: X, y: V.v, color: C.cyan, font: `12px ${F.mono}` }); });
      const pa = onCurve(P, x => Math.pow(b, x), b > 1 ? 0.9 : 0.1), ca = onCurve(P, f, (a > 0) === (b > 1) ? 0.75 : 0.25);
      if (pa) labels.push({ text: `${bT(bi)}ˣ`, x: pa.x, y: pa.y, color: C.amber, font: `italic 15px ${F.math}` });
      if (ca) labels.push({ text: "f", x: ca.x, y: ca.y, color: C.cyan, font: `italic 17px ${F.math}` });
      labels.push({ text: `y = ${MR.sg(kv)}`, x: (b > 1) === (a > 0) ? -5 : 5, y: kv, color: C.violet, font: `italic 14px ${F.math}`, prefer: a > 0 ? "s" : "n" });
      if (hit) labels.push({ text: "slope = height", x: h + 1.1, y: a + kv + 1.1 * m, color: C.pink, font: `12px ${F.ui}` });
      P.labels(labels);
      const up = (b > 1) === (a > 0), y0 = val(0);
      k.readout({ title: "Exponential function", big: nw(`<span class="c2"><i>f</i>(${ix}) = ${fH()}</span>`),
        rows: [{ lhs: `asymptote ${cl("c4", `${iy} = ${MR.sg(kv)}`)}`, lbl: `as ${ix} → ${b > 1 ? MI : ""}∞, f(x) → ${MR.sg(kv)}` },
          { lhs: `domain (${MI}∞, ∞), range ${a > 0 ? `(${MR.sg(kv)}, ∞)` : `(${MI}∞, ${MR.sg(kv)})`}`, lbl: a > 0 ? "a > 0: every output is above the asymptote" : "a < 0: every output is below the asymptote" },
          { lhs: `<i>f</i>(0) = ${y0.q ? MR.qH(y0.q) : y0.t}`, lbl: up ? "increasing" : "decreasing" },
          { lhs: "slope ÷ height above asymptote", v: MR.fmtN(Math.log(b), 3), cls: "c3", lbl: "the same at every point of the curve" }],
        landmark: hit ? { hit: true, big: `${cl("c3", "<i>b</i> = <i>e</i>")}: slope = height`, note: "For base e the steepness at every point equals the height above the asymptote; at (h, a + k) the pink tangent has slope a. No other base does this." }
          : { hit: false, big: `step 1 in ${ix}: height × ${cl("c1", bT(bi))}`, note: `Equal steps in x multiply the distance from y = ${MR.sg(kv)} by b. ${b > 1 ? "b > 1: growth" : "0 < b < 1: decay"}.` },
        narr: "Press b = e to see the pink tangent match. Then change a, h and k: the asymptote moves only with k." });
    } else {
      const N = n(), v = compoundE(N), dg = eDigits(v);
      P = k.plane(c, { xmin: 0, xmax: 1, ymin: 0.85, ymax: 3.05, xstep: 0.25, ystep: 0.5, xlabel: "t (years)", ylabel: "balance", pad: { b: 48 } });
      P.grid(); P.axes();
      P.hasym(Math.E, C.pink);
      P.curve(t => Math.exp(t), C.cyan, { w: 2 });
      if (N <= 400) { let y = 1; for (let i = 0; i < N; i++) { const y2 = y * (1 + 1 / N); P.seg(i / N, y, (i + 1) / N, y, C.amber, 2.4); P.seg((i + 1) / N, y, (i + 1) / N, y2, C.amber, 2.4); y = y2; } }
      else P.curve(t => compoundE(N) ** t, C.amber, { w: 2.4 });
      P.dot(1, v, C.amber, 6);
      labels.push({ text: "e ≈ 2.71828", x: 0.12, y: Math.E, color: C.pink, font: `14px ${F.math}`, prefer: "n" },
        { text: "eᵗ", x: 0.55, y: Math.exp(0.55), color: C.cyan, font: `italic 15px ${F.math}`, prefer: "nw" },
        { text: MR.fmtN(v, 5), x: 1, y: v, color: C.amber, font: `13px ${F.mono}`, prefer: "w" });
      if (N <= 6) labels.push({ text: `× ${MR.qT(Q(N + 1, N))}`, x: 1 / N, y: 1 + 0.5 / N, color: C.amber, font: `12px ${F.mono}`, prefer: "e" });
      P.labels(labels);
      const hit = dg.decimals >= 5, shown = `<span class="c3">${dg.text.slice(0, dg.chars)}</span>${dg.text.slice(dg.chars)}…`;
      k.readout({ title: "Compounding toward e", big: nw(`<i>A</i> = ${shown}`),
        rows: [{ lhs: `<i>A</i> = (1 + ${fr(1, cl("c1", "<i>n</i>"))})<sup><i>n</i></sup>, &nbsp;<i>n</i> = ${N.toLocaleString("en-US")}`, lbl: N === 1 ? "paid once: 100% interest" : `${N} payments of 1/${N.toLocaleString("en-US")} of the balance` },
          { lhs: "factor per period", v: N <= 1000 ? `1 + 1/${N}` : MR.fmtN(1 + 1 / N, 7), cls: "c1", lbl: N <= 4 ? `exact total ${MR.qT(Q((N + 1) ** N, N ** N))}` : "" },
          { lhs: `${cl("c3", "<i>e</i>")} − total`, v: MR.fmtN(Math.E - v, 7), lbl: `${dg.decimals} decimal${dg.decimals === 1 ? "" : "s"} agree with e` }],
        landmark: hit ? { hit: true, big: `${cl("c3", "<i>e</i>")} = 2.718281828…`, note: "Five decimals of e. More periods still add a little, but the total never passes e: this limit is continuous growth, eᵗ at t = 1." }
          : { hit: false, big: "more periods, smaller gains", note: "Each extra payment adds less. The total levels off below the pink line." },
        narr: "Compare n = 12 and n = 365. Push n to 10⁶ for five correct decimals." });
    }
  });
};

/* ================= Logarithmic functions (D · Plane) ================= */
const LB = [{ t: "2", q: [2, 1] }, { t: "3", q: [3, 1] }, { t: "4", q: [4, 1] }, { t: "10", q: [10, 1] }, { t: "e", q: null }, { t: "1/2", q: [1, 2] }];
L["a2-logs"] = k => {
  MathKit.attach(k);
  const { C, F } = k, MR = k.MR, Q = MR.Q, c = k.canvas(), host = k.dom(), SP = k.stepsPanel(host);
  let mode = "mirror", bi = 0, P = null, exact = null, ci = 0, dir = 0, tA = 0, cur = 0, st = null, ev = null;
  const A = { x: 3, y: 0 };
  const B = () => LB[bi], bv = () => (B().q ? B().q[0] / B().q[1] : Math.E), lg = x => Math.log(x) / Math.log(bv());
  const logH = (bt, xh) => (bt === "e" ? `ln ${xh}` : `log<sub class="c1">${bt}</sub> ${xh}`);
  const subT = s => s === "1/2" ? "½" : s.replace(/\d/g, ch => "₀₁₂₃₄₅₆₇₈₉"[ch]);
  const logT = bt => (bt === "e" ? "ln x" : `log${subT(bt)} x`);
  const xQT = x => (x.isQ ? MR.qT(x) : x.t);
  // exact snap points of the current base inside [lo, hi]: {x (Q or {t, v}), y (Q), v}
  const snaps = (lo, hi) => (B().q ? logPoints(Q(B().q[0], B().q[1]), lo, hi).map(p => ({ x: p.x, y: p.y, v: Q.val(p.x) }))
    : [-3, -2, -1, 0, 1, 2, 3].map(m => ({ x: { t: m === 0 ? "1" : m === 1 ? "e" : `e${MR.supT(String(m).replace(MI, "-"))}`, v: Math.exp(m) }, y: Q(m), v: Math.exp(m) })).filter(p => p.v >= lo && p.v <= hi));
  function place(xr){
    if (!P) return; const b = bv(), e1 = b ** (P.ymin + 0.3), e2 = b ** (P.ymax - 0.3);
    let x = Math.max(Math.max(0.02, Math.min(e1, e2)), Math.min(Math.min(P.xmax - 0.1, Math.max(e1, e2)), xr)); exact = null;
    for (const s of snaps(0, P.xmax)) if (Math.abs(P.X(s.v) - P.X(x)) < 9 && Math.abs(P.Y(s.y.n / s.y.d) - P.Y(lg(x))) < 30) { x = s.v; exact = s; break; }
    A.x = x; A.y = lg(x);
  }
  k.drag(c, () => (mode === "mirror" ? P : null), [A], (i, p) => place(p.x));
  const resetA = () => { A.x = bi === 1 ? 5 : 3; A.y = lg(A.x); exact = null; };
  // Convert: exponential ↔ log form, (b, x) with y = logExact(b, x)
  const CV = [[[2, 1], [8, 1]], [[3, 1], [1, 9]], [[10, 1], [1, 1000]], [[4, 1], [8, 1]], ["e", 2], [[5, 1], [1, 1]], [[7, 1], [7, 1]], [[1, 2], [16, 1]]].map(([b, x]) => {
    if (b === "e") return { bt: "e", bH: "<i>e</i>", xt: "e²", xH: "<i>e</i><sup>2</sup>", yt: "2", bv: Math.E, xv: Math.E ** 2, yv: 2 };
    const bq = Q(b[0], b[1]), xq = Q(x[0], x[1]), y = MR.logExact(bq, xq), dec = bq.n === 10 && xq.n === 1;
    return { bt: MR.qT(bq), bH: MR.qT(bq), xt: dec ? String(Q.val(xq)) : MR.qT(xq), xH: dec ? String(Q.val(xq)) : MR.qT(xq), yt: MR.qT(y), bv: Q.val(bq), xv: Q.val(xq), yv: Q.val(y) };
  });
  // Evaluate: drill problems (rational cases plus four natural logs)
  const CASES = logCases(), ECASES = [
    { xH: ol("<i>e</i>"), xt: "√e", rw: "<i>e</i><sup>1/2</sup>", why: "A square root is the power 1/2.", y: Q(1, 2) },
    { xH: fr(1, "<i>e</i><sup>2</sup>"), xt: "1/e²", rw: `<i>e</i><sup>${MI}2</sup>`, why: "1/eⁿ = e⁻ⁿ.", y: Q(-2) },
    { xH: "<i>e</i><sup>5</sup>", xt: "e⁵", rw: "<i>e</i><sup>5</sup>", why: "The argument is already a power of e.", y: Q(5) },
    { xH: `∛<span class="mk-ol"><i>e</i></span>`, xt: "∛e", rw: "<i>e</i><sup>1/3</sup>", why: "A cube root is the power 1/3.", y: Q(1, 3) }];
  function newProblem(){
    if (Math.random() < 0.2) { const e = ECASES[Math.floor(Math.random() * ECASES.length)]; ev = Object.assign({ e: true, bt: "e", bv: Math.E, xv: Math.exp(Q.val(e.y)) }, e); }
    else { const s = CASES[Math.floor(Math.random() * CASES.length)], xH = s.q > 0 ? String(s.c ** s.q) : s.c === 10 ? (10 ** s.q).toFixed(-s.q) : fr(1, s.c ** -s.q);
      ev = Object.assign({ e: false, bt: String(s.b), bv: s.b, xv: Q.val(s.x), xH, xt: s.q > 0 ? String(s.c ** s.q) : s.c === 10 ? (10 ** s.q).toFixed(-s.q) : `1/${s.c ** -s.q}` }, s); }
    if (st) st.reset(); cur = 0; k.guard([`y = ${MR.qT(ev.y)}`]);
  }
  const hints = { mirror: "Drag the pink point along the log curve", convert: "Flip between the two forms of the same fact", evaluate: "Step through: rewrite, match bases, solve" };
  const setMode = m => { mode = m; k.showGroup(m); k.hint(hints[m]); if (m === "evaluate") { if (!ev) newProblem(); else k.guard([`y = ${MR.qT(ev.y)}`]); } else k.guard([]); };
  k.modes([["mirror", "Mirror"], ["convert", "Convert"], ["evaluate", "Evaluate"]], mode, setMode);
  k.group("mirror", () => k.select("Base", LB.map((b, i) => [i, "b = " + b.t]), bi, v => { bi = +v; resetA(); }));
  k.group("convert", () => { k.button("Flip form", () => { dir = 1 - dir; }, "btn"); k.button("Next", () => { ci = (ci + 1) % CV.length; }, "btn ghost"); });
  k.group("evaluate", () => { st = k.stepper(() => 4, v => cur = v, { ms: 1300 }); k.button("New problem", newProblem, "btn ghost"); });
  resetA(); setMode(mode);

  k.loop(dt => {
    c.begin(); const d = c.d, labels = [];
    if (mode === "mirror") {
      k.split(c, host, { off: true });
      const b = bv(), bt = B().t;
      P = k.plane(c, { xmin: -4, xmax: 9, ymin: -4, ymax: 7, equal: true, xstep: c.w < 520 ? 2 : 1, ystep: c.h < 560 ? 2 : 1, xlabel: "x", ylabel: "y" });
      P.grid(); P.axes();
      if (A.y < P.ymin || A.y > P.ymax || A.x > P.xmax) place(A.x);
      P.seg(P.xmin, P.xmin, P.xmax, P.xmax, C.violet, 1.6, [7, 5]);
      P.vasym(0, k.alpha(C.text, 0.3));
      P.curve(x => b ** x, C.amber, { w: 2.6 });
      P.curve(x => (x > 0 ? lg(x) : NaN), C.cyan, { from: 0.001, w: 3 });
      const X = A.x, Y = A.y;
      P.seg(X, Y, Y, X, k.alpha(C.text, 0.55), 1.4, [5, 4]); P.dot((X + Y) / 2, (X + Y) / 2, C.violet, 3.5);
      P.dot(1, 0, C.cyan, 4); P.dot(b, 1, C.cyan, 4); P.dot(0, 1, C.amber, 4); P.dot(1, b, C.amber, 4);
      P.dot(X, Y, C.pink, 7); P.dot(Y, X, C.amber, 6);
      const xt = exact ? xQT(exact.x) : MR.fmtN(X, 2), yt = exact ? MR.qT(exact.y) : MR.fmtN(Y, 2);
      labels.push({ text: `(${xt}, ${yt})`, x: X, y: Y, color: C.pink, font: `13px ${F.mono}` }, { text: `(${yt}, ${xt})`, x: Y, y: X, color: C.amber, font: `13px ${F.mono}` });
      const la = onCurve(P, x => (x > 0 ? lg(x) : NaN), 0.92, 0.01), ea = onCurve(P, x => b ** x, b > 1 ? 0.55 : 0.2);
      if (la) labels.push({ text: `y = ${logT(bt)}`, x: la.x, y: la.y, color: C.cyan, font: `italic 15px ${F.math}` });
      if (ea) labels.push({ text: `y = ${bt}ˣ`, x: ea.x, y: ea.y, color: C.amber, font: `italic 15px ${F.math}` });
      labels.push({ text: "y = x", x: P.xmax - 1, y: P.xmax - 1, color: C.violet, font: `italic 14px ${F.math}` });
      P.labels(labels);
      const bH = bt === "e" ? "<i>e</i>" : bt, eq = exact ? "=" : "≈";
      k.readout({ title: "Inverse of an exponential", big: `${nw(`${logH(bt, cl("c3", xt))} ${eq} ${cl("c2", yt)} &nbsp;⇔`)}<br>${nw(`${cl("c1", bH)}<sup class="c2">${yt}</sup> ${eq} ${cl("c3", xt)}`)}`,
        rows: [{ lhs: `(${cl("c3", xt)}, ${cl("c2", yt)}) on the log, (${cl("c2", yt)}, ${cl("c3", xt)}) on ${cl("c1", bH)}<sup>${ix}</sup>`, lbl: "the coordinates swap: a reflection in y = x" },
          { lhs: `log: domain (0, ∞), range (${MI}∞, ∞)`, lbl: "the exponential has these swapped; x = 0 is the log's asymptote" },
          { lhs: `${logH(bt, "1")} = 0, &nbsp;${logH(bt, bH)} = 1`, lbl: "every log graph passes through (1, 0) and (b, 1)" }],
        landmark: exact ? { hit: true, big: `${cl("c1", bH)}<sup class="c2">${yt}</sup> = ${cl("c3", xt)} exactly`, note: `So ${bt === "e" ? "ln" : "log base " + bt} of ${xt} is exactly ${yt}: the logarithm is the exponent.` }
          : { hit: false, big: "Find an exact logarithm", note: `Drag toward a power of ${bt}: the point snaps where ${bt === "e" ? "ln" : "log"} x is a rational number.` },
        narr: "Try base 1/2: both curves fall, and they still mirror each other in y = x." });
    } else if (mode === "convert") {
      k.split(c, host, { off: true });
      const p = CV[ci]; tA = k.reduce ? dir : tA + (dir - tA) * Math.min(1, dt * 5); const t = tA * tA * (3 - 2 * tA);
      const mb = k.stage.querySelector(".modes"), top = (mb ? mb.offsetTop + mb.offsetHeight : 0) + 24;
      const fs = Math.max(26, Math.min(52, c.w / 11)), sm = Math.round(fs * 0.62), base = top + fs * 1.4;
      const fn = s => `${s}px ${F.math}`, W = (s, z) => d.width(s, fn(z));
      const lw = W("log", fs), bw = W(p.bt, sm), xw = W(p.xt, fs), ew = W(" = ", fs), yw = W(p.yt, fs), Bw = W(p.bt, fs), Yw = W(p.yt, sm);
      const L0 = (c.w - (lw + bw + fs * 0.25 + xw + ew + yw)) / 2, E0 = (c.w - (Bw + Yw + 3 + ew + xw)) / 2;
      const lerp = (u, v) => u + (v - u) * t;
      const logPos = { b: [L0 + lw + 1, base + fs * 0.3, sm], x: [L0 + lw + bw + fs * 0.25, base, fs], eq: [L0 + lw + bw + fs * 0.25 + xw, base], y: [L0 + lw + bw + fs * 0.25 + xw + ew, base, fs] };
      const expPos = { b: [E0, base, fs], y: [E0 + Bw + 3, base - fs * 0.42, sm], eq: [E0 + Bw + Yw + 3, base], x: [E0 + Bw + Yw + 3 + ew, base, fs] };
      const tok = (s, key, color) => { const a = logPos[key], e = expPos[key], z = Math.round(lerp(a[2], e[2])), x = lerp(a[0], e[0]), y = lerp(a[1], e[1]); d.text(s, x, y, { font: fn(z), color }); return [x + W(s, z) / 2, y]; };
      if (t < 0.98) d.text("log", L0, base, { font: fn(fs), color: k.alpha(C.text, 1 - t) });
      const pb = tok(p.bt, "b", C.amber), px = tok(p.xt, "x", C.pink), py = tok(p.yt, "y", C.cyan); tok(" = ", "eq", C.text);
      const cap = `600 11px ${F.ui}`, cy = base + fs * 0.95;
      const capA = t < 0.5 ? "ARGUMENT" : "RESULT", capY = t < 0.5 ? "LOG" : "EXPONENT", wc = s => d.width(s, cap);
      const crowd = Math.abs(pb[0] - px[0]) < (wc("BASE") + wc(capA)) / 2 + 8;
      d.text("BASE", pb[0], cy + (crowd ? 15 : 0), { font: cap, color: C.amber, align: "center" });
      d.text(capA, px[0], cy, { font: cap, color: C.pink, align: "center" });
      d.text(capY, py[0], Math.min(base - fs * 0.95, py[1] - fs * 0.7), { font: cap, color: C.cyan, align: "center" });
      const say = dir ? `${p.bt} to the power ${p.yt} is ${p.xt}` : `log base ${p.bt} of ${p.xt} is ${p.yt}`;
      d.text(say, c.w / 2, cy + 38, { font: `15px ${F.sans}`, color: C.muted, align: "center" });
      const xmax = Math.max(4, p.xv * 1.25, p.bv * 1.3), ylo = Math.min(-2, p.yv - 1), yhi = Math.max(2, p.yv + 1);
      P = k.plane(c, { xmin: -xmax * 0.08, xmax, ymin: ylo, ymax: yhi, pad: { l: 40, r: 16, t: cy + 62, b: 30 }, xlabel: "x", ylabel: "y" });
      P.grid(); P.axes();
      P.curve(x => (x > 0 ? Math.log(x) / Math.log(p.bv) : NaN), C.cyan, { from: xmax * 1e-4, w: 2.6 });
      P.seg(p.xv, 0, p.xv, p.yv, k.alpha(C.pink, 0.8), 1.5, [4, 4]); P.seg(0, p.yv, p.xv, p.yv, k.alpha(C.cyan, 0.8), 1.5, [4, 4]); P.dot(p.xv, p.yv, C.pink, 6);
      labels.push({ text: `(${p.xt}, ${p.yt})`, x: p.xv, y: p.yv, color: C.pink, font: `13px ${F.mono}` });
      const la = onCurve(P, x => (x > 0 ? Math.log(x) / Math.log(p.bv) : NaN), 0.85, 0.01); if (la) labels.push({ text: `y = ${logT(p.bt)}`, x: la.x, y: la.y, color: C.cyan, font: `italic 14px ${F.math}` });
      P.labels(labels);
      k.readout({ title: "Two forms, one fact", big: `${nw(`${logH(p.bt, cl("c3", p.xH))} = ${cl("c2", p.yt)} &nbsp;⇔`)}<br>${nw(`${cl("c1", p.bH)}<sup class="c2">${p.yt}</sup> = ${cl("c3", p.xH)}`)}`,
        rows: [{ lhs: `base ${cl("c1", p.bH)}`, lbl: "stays the base in both forms" }, { lhs: `log ${cl("c2", p.yt)}`, lbl: "becomes the exponent" }, { lhs: `argument ${cl("c3", p.xH)}`, lbl: "becomes the result of the power" }],
        landmark: { hit: dir === 1 && t > 0.97, big: dir ? "The logarithm is the exponent" : "Press Flip form", note: dir ? `The cyan ${p.yt} moved up into the exponent; the pink ${p.xt} moved to the other side.` : "Watch where each coloured piece goes." },
        narr: "Next shows a negative, a fractional and a zero logarithm, and base 1/2." });
    } else {
      const pad = k.split(c, host, { side: "left", frac: 0.5, hfrac: 0.5 });
      const p = ev, bt = p.bt, bH = bt === "e" ? "<i>e</i>" : bt, ans = MR.qT(p.y), Lh = logH(bt, cl("c3", p.xH));
      const lines = p.e ? [
        { tag: "problem", eq: `${Lh} = ${cl("c2", iy)}`, why: "ln means base e. Call the unknown exponent y." },
        { tag: "exp form", eq: `${cl("c1", "<i>e</i>")}<sup class="c2"><i>y</i></sup> = ${cl("c3", p.xH)}`, why: "log_b x = y means bʸ = x." },
        { tag: "same base", eq: `<i>e</i><sup><i>y</i></sup> = ${p.rw}`, why: p.why },
        { tag: "solve", eq: `<i>y</i> = ${ans}`, why: "Exponential functions are one-to-one, so the exponents are equal." },
        { tag: "check", eq: `${Lh} = ${ans}`, why: `e to the power ${ans} is ${p.xt}.` }]
        : [{ tag: "problem", eq: `${Lh} = ${cl("c2", iy)}`, why: "Call the unknown exponent y." },
        { tag: "exp form", eq: `${cl("c1", bH)}<sup class="c2"><i>y</i></sup> = ${cl("c3", p.xH)}`, why: "log_b x = y means bʸ = x." },
        { tag: "same base", eq: p.p === 1 ? `${p.c}<sup><i>y</i></sup> = ${p.c}<sup>${MR.sg(p.q)}</sup>` : `(${p.c}<sup>${p.p}</sup>)<sup><i>y</i></sup> = ${p.c}<sup>${MR.sg(p.q)}</sup> ⇒ ${p.c}<sup>${p.p}<i>y</i></sup> = ${p.c}<sup>${MR.sg(p.q)}</sup>`,
          why: p.p === 1 ? `Write ${p.xt} as a power of ${p.c}.` : `Write ${p.b} and ${p.xt} as powers of ${p.c}.` },
        { tag: "solve", eq: p.p === 1 ? `<i>y</i> = ${ans}` : `${p.p}<i>y</i> = ${MR.sg(p.q)} ⇒ <i>y</i> = ${ans}`, why: "Exponential functions are one-to-one, so the exponents are equal." },
        { tag: "check", eq: `${Lh} = ${ans}`, why: `${p.b} to the power ${ans} is ${p.xt}.` }];
      SP.set(lines, cur);
      const xmax = Math.max(4, p.xv * 1.25, p.bv * 1.2), yv = Q.val(p.y);
      const ylo = Math.min(-2, yv - 1), yhi = Math.max(2, yv + 1), pw = c.w - pad.l - pad.r;
      P = k.plane(c, { xmin: -xmax * 0.08, xmax, ymin: ylo, ymax: yhi, pad, xstep: MR.niceStep(xmax, Math.max(3, Math.min(8, pw / 55))), ystep: MR.niceStep(yhi - ylo, 6), xlabel: "x", ylabel: "y" });
      P.grid(); P.axes();
      P.curve(x => (x > 0 ? Math.log(x) / Math.log(p.bv) : NaN), C.cyan, { from: xmax * 1e-4, w: 2.6 });
      P.seg(p.xv, P.ymin, p.xv, P.ymax, k.alpha(C.pink, 0.5), 1.4, [4, 4]);
      labels.push({ text: `x = ${p.xt}`, x: p.xv, y: P.ymin + (P.ymax - P.ymin) * 0.1, color: C.pink, font: `13px ${F.mono}` });
      if (cur >= 3) { P.seg(0, yv, p.xv, yv, k.alpha(C.cyan, 0.8), 1.5, [4, 4]); P.dot(p.xv, yv, C.green, 6); labels.push({ text: `(${p.xt}, ${ans})`, x: p.xv, y: yv, color: C.green, font: `13px ${F.mono}` }); }
      P.labels(labels);
      k.readout({ title: "Evaluate exactly", big: nw(`${Lh} = ${cur >= 3 ? cl("c2", ans) : "?"}`),
        rows: [{ lhs: `base ${cl("c1", bH)}, argument ${cl("c3", p.xH)}`, lbl: bt === "e" ? "natural log: base e" : `common base ${p.c}` }],
        landmark: { hit: cur >= 4, big: cur >= 4 ? `${cl("c1", bH)}<sup class="c2">${ans}</sup> = ${cl("c3", p.xH)}` : `step ${cur + 1} of 5`, note: cur >= 4 ? "The point lies on the log curve: the exact value checks." : "Rewrite as a power, match the bases, set the exponents equal." },
        narr: "New problem picks another base. Predict the answer before the fourth step." });
    }
  });
};

/* ================= Radical functions (A · Transform) ================= */
const RAV = [-3, -2, -1, -0.5, 0.5, 1, 2, 3], RBV = [-2, -1, -0.5, 0.5, 1, 2];
L["a2-radical-func"] = k => {
  MathKit.attach(k);
  const { C, F } = k, MR = k.MR, c = k.canvas(), host = k.dom(), SP = k.stepsPanel(host);
  let mode = "graph", n = 2, ai = 6, bi = 4, h = 3, kv = 1, ghost = false, ra = 3, rb = -3, cur = 0, st = null, P = null;
  const T = () => ({ a: RAV[ai], b: RBV[bi], h, k: kv });
  const root = x => (n === 2 ? (x >= 0 ? Math.sqrt(x) : NaN) : Math.cbrt(x));
  const R = () => radicalEq(ra, rb);
  const solT = () => { const s = R().sol; return s.length ? `{${s.map(q => q.t).join(", ")}}` : "∅"; };
  const guardI = () => k.guard([`solution set ${solT()}`]);
  const hints = { graph: "Move h, k, a and b; watch the violet domain", intersect: "Step: square, solve the quadratic, then check each root" };
  const setMode = m => { mode = m; k.showGroup(m); k.hint(hints[m]); if (m === "intersect") { if (st) st.reset(); cur = 0; guardI(); } else k.guard([]); };
  k.modes([["graph", "Graph"], ["intersect", "Intersect"]], mode, setMode);
  k.group("graph", () => {
    k.select("Index", [[2, "square root √"], [3, "cube root ∛"]], n, v => n = +v);
    k.slider(cl("c3", "<i>a</i>"), 0, RAV.length - 1, 1, ai, v => ai = v, v => MR.fmtN(RAV[v]));
    k.slider("<i>b</i>", 0, RBV.length - 1, 1, bi, v => bi = v, v => MR.fmtN(RBV[v]));
    k.slider(cl("c1", "<i>h</i>"), -5, 5, 1, h, v => h = v, MR.sg);
    k.slider(cl("c2", "<i>k</i>"), -4, 4, 1, kv, v => kv = v, MR.sg);
    k.check("show the power it undoes", ghost, v => ghost = v);
  });
  k.group("intersect", () => {
    st = k.stepper(() => 4, v => cur = v, { ms: 1400 });
    const re = () => { if (st) st.reset(); cur = 0; guardI(); };
    k.slider("<i>a</i>", -4, 6, 1, ra, v => { ra = v; re(); }, MR.sg);
    k.slider("<i>b</i>", -5, 4, 1, rb, v => { rb = v; re(); }, MR.sg);
  });
  setMode(mode);
  // HTML of a·ⁿ√(b(x − h)) + k
  const fH = S => { const rad = n === 2 ? "√" : "∛", core = S.h ? `${ix} ${S.h > 0 ? MI : "+"} ${cl("c1", Math.abs(S.h))}` : ix;
    const inner = S.b === 1 ? core : S.b === -1 ? (S.h ? `${MI}(${core})` : `${MI}${ix}`) : `${MR.fmtN(S.b)}${S.h ? `(${core})` : ix}`;
    const a = S.a === 1 ? "" : S.a === -1 ? MI : MR.fmtN(S.a);
    return `${cl("c3", a)}${rad}<span class="mk-ol">${inner}</span>${S.k ? ` ${S.k < 0 ? MI : "+"} ${cl("c2", Math.abs(S.k))}` : ""}`; };

  k.loop(() => {
    c.begin(); const labels = [];
    if (mode === "graph") {
      k.split(c, host, { off: true });
      const S = T(), f = MR.transform(root, S), xs = c.w < 520 ? 2 : 1;
      P = k.plane(c, { xmin: -8, xmax: 8, ymin: -6, ymax: 6, xstep: xs, ystep: c.h < 560 ? 2 : 1, xlabel: "x", ylabel: "y" });
      P.grid(); P.axes();
      // domain on the x-axis
      const lo = n === 3 || S.b < 0 ? P.xmin : S.h, hi = n === 3 || S.b > 0 ? P.xmax : S.h;
      P.seg(lo, 0, hi, 0, k.alpha(C.violet, 0.55), 7);
      if (n === 2) P.dot(S.h, 0, C.violet, 5);
      if (ghost) { P.seg(P.xmin, P.xmin, P.xmax, P.xmax, k.alpha(C.text, 0.25), 1.2, [6, 5]);
        P.curve(x => (n === 2 ? x * x : x * x * x), k.alpha(C.green, 0.45), { from: n === 2 ? 0 : P.xmin, w: 2, dash: [3, 4] });
        const ga = onCurve(P, x => x ** n, 0.62, n === 2 ? 0 : -Infinity); if (ga) labels.push({ text: n === 2 ? "x², x ≥ 0" : "x³", x: ga.x, y: ga.y, color: C.green, font: `italic 13px ${F.math}` }); }
      P.curve(root, C.green, { from: n === 2 ? 0 : P.xmin, w: 2, dash: [6, 5] });
      P.curve(f, C.text, { from: n === 2 && S.b > 0 ? S.h : P.xmin, to: n === 2 && S.b < 0 ? S.h : P.xmax, w: 3 });
      const keys = n === 2 ? [[0, 0], [1, 1], [4, 2]] : [[-1, -1], [0, 0], [1, 1]];
      keys.forEach(pt => { const [X, Y] = MR.transformPoint(pt, S); P.dot(pt[0], pt[1], C.green, 3.5); P.dot(X, Y, C.text, 5);
        labels.push({ text: `(${MR.fmtN(X, 2)}, ${MR.fmtN(Y, 2)})`, x: X, y: Y, color: C.text, font: `12px ${F.mono}` }); });
      P.seg(S.h, -0.3, S.h, 0.3, C.amber, 3); P.seg(-0.3, S.k, 0.3, S.k, C.cyan, 3);
      labels.push({ text: "h", x: S.h, y: 0, color: C.amber, font: `italic 15px ${F.math}`, prefer: "s" }, { text: "k", x: 0, y: S.k, color: C.cyan, font: `italic 15px ${F.math}`, prefer: "w" });
      const pa = onCurve(P, root, 0.9, n === 2 ? 0 : -Infinity); if (pa) labels.push({ text: n === 2 ? "√x" : "∛x", x: pa.x, y: pa.y, color: C.green, font: `italic 15px ${F.math}` });
      P.labels(labels);
      const H = MR.sg(S.h), K = MR.sg(S.k), dom = n === 3 ? `(${MI}∞, ∞)` : S.b > 0 ? `[${H}, ∞)` : `(${MI}∞, ${H}]`, rng = n === 3 ? `(${MI}∞, ∞)` : S.a > 0 ? `[${K}, ∞)` : `(${MI}∞, ${K}]`;
      const id = S.a === 1 && S.b === 1 && S.h === 0 && S.k === 0, flip = n === 2 && S.b < 0;
      k.readout({ title: n === 2 ? "Square-root function" : "Cube-root function", big: nw(`<i>f</i>(${ix}) = ${fH(S)}`),
        rows: [{ lhs: `domain ${cl("c4", dom)}`, lbl: n === 2 ? `radicand ${S.b === 1 ? "" : MR.fmtN(S.b)}${S.h ? `${S.b === 1 ? "" : "("}x ${S.h > 0 ? MI : "+"} ${Math.abs(S.h)}${S.b === 1 ? "" : ")"}` : "x"} ≥ 0` : "odd index: every real number has a cube root" },
          { lhs: `range ${rng}`, lbl: n === 2 ? (S.a > 0 ? "a > 0: outputs at or above k" : "a < 0: outputs at or below k") : "odd index: all outputs" },
          { lhs: `${n === 2 ? "endpoint" : "centre"} (${cl("c1", H)}, ${cl("c2", K)})`, lbl: "where the parent's (0, 0) lands" },
          { lhs: "(x, y) → (x/b + h, ay + k)", lbl: "each green parent point moves to a white one" }],
        landmark: flip ? { hit: true, big: `<i>b</i> < 0: domain ${cl("c4", dom)}`, note: "A negative b reflects the graph in the vertical line x = h, so the square root now runs to the left." }
          : ghost && id ? { hit: true, big: `${n === 2 ? "√x undoes x² on x ≥ 0" : "∛x undoes x³"}`, note: "The parent is the dotted power curve reflected in y = x: a root function is an inverse." }
          : { hit: false, big: n === 2 ? "Even index: radicand ≥ 0" : "Odd index: no restriction", note: n === 2 ? "Make b negative to flip the domain, or tick the box to see √x as the inverse of x²." : "Switch to the square root to see the domain shrink to a half-line." },
        narr: "Change the index to 3: the domain bar covers the whole axis." });
    } else {
      const pad = k.split(c, host, { side: "left", frac: 0.5, hfrac: 0.5 }), r = R(), a = ra, b = rb;
      P = k.plane(c, { xmin: -7, xmax: 9, ymin: -6, ymax: 6, xstep: c.w < 900 ? 2 : 1, ystep: 2, pad, xlabel: "x", ylabel: "y" });
      P.grid(); P.axes();
      const sq = x => (x + a >= 0 ? Math.sqrt(x + a) : NaN);
      P.curve(sq, C.green, { from: Math.max(P.xmin, -a), w: 3 });
      P.curve(x => x + b, C.cyan, { w: 2.4 });
      if (cur >= 1) P.curve(x => -sq(x), k.alpha(C.pink, 0.8), { from: Math.max(P.xmin, -a), w: 2.2, dash: [6, 5] });
      const la = onCurve(P, sq, 0.85, -a), lb = onCurve(P, x => x + b, 0.12);
      if (la) labels.push({ text: `y = √(x ${a < 0 ? MI : "+"} ${Math.abs(a)})`, x: la.x, y: la.y, color: C.green, font: `italic 14px ${F.math}` });
      if (lb) labels.push({ text: `y = x ${b < 0 ? MI : "+"} ${Math.abs(b)}`, x: lb.x, y: lb.y, color: C.cyan, font: `italic 14px ${F.math}` });
      if (cur >= 1) { const lc = onCurve(P, x => -sq(x), 0.8, -a); if (lc) labels.push({ text: "−√ (from squaring)", x: lc.x, y: lc.y, color: C.pink, font: `12px ${F.ui}` }); }
      if (cur >= 2) r.cands.forEach(q => { const good = cur >= 3 && q.ok, bad = cur >= 3 && !q.ok;
        P.dot(q.v, q.rhs, good ? C.green : bad ? C.pink : C.text, good ? 7 : 6);
        labels.push({ text: `x = ${q.t}${bad ? " extraneous" : ""}`, x: q.v, y: q.rhs, color: good ? C.green : bad ? C.pink : C.text, font: `12px ${F.mono}` }); });
      P.labels(labels);
      const B = MR.sg(2 * b - 1), Cc = MR.sg(b * b - a), quad = `${ix}<sup>2</sup> ${2 * b - 1 < 0 ? MI : "+"} ${Math.abs(2 * b - 1) === 1 ? "" : Math.abs(2 * b - 1)}${ix} ${b * b - a < 0 ? MI : "+"} ${Math.abs(b * b - a)} = 0`;
      const chk = r.cands.map(q => `${q.t}: √ = ${MR.fmtN(q.lhs, 3)}, right side ${MR.fmtN(q.rhs, 3)} ${q.ok ? "✓" : "✗"}`).join("<br>");
      SP.set([{ tag: "equation", eq: `√<span class="mk-ol">${pm(ix, a)}</span> = ${pm(ix, b)}`, why: `Need x ≥ ${MR.sg(-a)} for the root, and the right side cannot be negative.` },
        { tag: "square", eq: `${pm(ix, a)} = (${pm(ix, b)})<sup>2</sup>`, why: "Squaring also keeps points of −√, the dashed pink branch." },
        { tag: "solve", eq: r.D < 0 ? `${quad}: no real roots` : `${quad} ⇒ ${ix} = ${r.cands.map(q => q.t).join(" or ")}`, why: `Discriminant ${r.D}${r.D < 0 ? " < 0: the line misses both branches." : "."}` },
        { tag: "check", eq: r.D < 0 ? "nothing to check" : chk, why: "A candidate stays only if √ equals the right side; one on the pink branch is extraneous." },
        { tag: "answer", eq: `solution set ${solT()}`, why: r.sol.length ? "Where the green curve and the line really meet." : "The graphs never meet." }], cur);
      const ext = cur >= 3 && r.cands.some(q => !q.ok);
      k.readout({ title: "Solve by graphing", big: nw(`√<span class="mk-ol">${pm(ix, a)}</span> = ${pm(ix, b)}`),
        rows: [{ lhs: `${cl("c5", "green")}: y = √(x ${a < 0 ? MI : "+"} ${Math.abs(a)})`, lbl: "left side" }, { lhs: `${cl("c2", "cyan")}: y = ${pm("x", b).replace("-", MI)}`, lbl: "right side" }],
        landmark: ext ? { hit: true, big: `${cl("c3", "extraneous")}: ${r.cands.find(q => !q.ok).t}`, note: "This root solves the squared equation only: the line meets the pink −√ branch there, not the square-root curve." }
          : { hit: false, big: cur >= 4 ? `solution set ${solT()}` : `step ${cur + 1} of 5`, note: cur >= 4 ? (r.D < 0 ? "No intersection, no solution." : "Every candidate checked.") : "Squaring can add a root. Watch which branch each candidate is on." },
        narr: "Try a = 3, b = −3, then a = b for two genuine solutions." });
    }
  });
};
})();
