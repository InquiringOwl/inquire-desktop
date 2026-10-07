/* ============ Labs: Algebra II, batch B10 (log properties, exponential & log equations, exponential models) ============ */
(function(){
const L = window.LABS;
const MI = "−";

/* ---------- DOM-free helpers: exp/log equations and compound interest are in MathRules (web/kits/subjects/math.js) ---------- */
const MRx = () => window.MathRules;
const logSumEq = (b, p, q, n) => MRx().logSumEq(b, p, q, n);
const sameBaseX = (p, h1, q, h2, n) => MRx().sameBaseX(p, h1, q, h2, n);
const quadExpRoots = (b, u1, u2) => MRx().quadExpRoots(b, u1, u2);
const apy = (r, n) => MRx().apy(r, n);
const doublingTime = (r, n) => MRx().doublingTime(r, n);
const balance = (P, r, n, t) => MRx().periodBalance(P, r, n, t);

/* ---------- small formatting helpers ---------- */
const ix = "<i>x</i>", iy = "<i>y</i>";
const fr = (a, b) => `<span class="fr"><span>${a}</span><span>${b}</span></span>`;
const cl = (cls, s) => `<span class="${cls}">${s}</span>`;
const nw = s => `<span style="white-space:nowrap">${s}</span>`;
const nwS = s => `<span style="white-space:nowrap;font-size:.78em">${s}</span>`;
const strip = h => h.replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ");
const subT = s => String(s).replace(/\d/g, ch => "₀₁₂₃₄₅₆₇₈₉"[ch]);
const supS = s => String(s).replace(/[\d−-]/g, ch => ({ "−": "⁻", "-": "⁻" })[ch] || "⁰¹²³⁴⁵⁶⁷⁸⁹"[ch]);
const pmH = (s, v) => (v === 0 ? s : `${s} ${v < 0 ? MI : "+"} ${Math.abs(v)}`);
const money = v => "$" + v.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const lgH = (bt, a, cls = "c4") => (bt === "e" ? "ln" : bt === "10" ? "log" : `log<sub class="${cls}">${bt}</sub>`) + (a[0] === "(" || a[0] === "[" ? "" : " ") + a;
// steps panel: no line breaks inside a chunk between ⇒, and the current step scrolled into view
function setSteps(SP, host, ls, cur){
  SP.set(ls.map(l => Object.assign({}, l, { eq: l.eq.split(" ⇒ ").map(nw).join(" ⇒ ") })), cur);
  const el = SP.el.querySelector(".st.cur"); if (el && host.__cur !== cur) { host.__cur = cur; const lo = el.offsetTop + el.offsetHeight + 8 - host.clientHeight; if (host.scrollTop < lo) host.scrollTop = lo; else if (el.offsetTop < host.scrollTop) host.scrollTop = el.offsetTop - 4; }
}
const lgT = bt => (bt === "e" ? "ln" : bt === "10" ? "log" : "log" + subT(bt));

/* ================= Properties of logarithms (C · Steps) ================= */
const LBASES = [{ t: "2", v: 2 }, { t: "3", v: 3 }, { t: "10", v: 10 }, { t: "e", v: Math.E }];
const LQS = [[1, 2], [1, 1], [2, 1], [3, 1]];
const CBASE = [[1, 4], [1, 2], [2, 1], [3, 1], [4, 1], [5, 1], null, [7, 1], [10, 1], [16, 1]];   // null = e
L["a2-log-props"] = k => {
  MathKit.attach(k);
  const { C, F } = k, MR = k.MR, Q = MR.Q, c = k.canvas(), host = k.dom(), SP = k.stepsPanel(host);
  let mode = "steps", bi = 0, m = 3, p = 2, qi = 0, dir = "expand", cur = 0, st = null, P = null;
  let ci = 0, cbi = 0, Mv = 4, Nv = 2, pv = 2, bb = 2, Mb = 8; const view = {};
  const B = () => LBASES[bi], qQ = () => Q(LQS[qi][0], LQS[qi][1]);
  const CH = () => (B().t === "e" ? (m === 1 ? "<i>e</i>" : `<i>e</i><sup>${m}</sup>`) : String(B().v ** m));
  const CT = () => (B().t === "e" ? (m === 1 ? "e" : "e" + supS(m)) : String(B().v ** m));
  const xp = () => (p === 1 ? ix : `${ix}<sup>${p}</sup>`);
  const yq = root => { const q = qQ(); return q.d === 2 ? (root ? `√<span class="mk-ol">${iy}</span>` : `${iy}<sup>1/2</sup>`) : q.n === 1 ? iy : `${iy}<sup>${q.n}</sup>`; };
  const qc = () => { const q = qQ(); return q.d === 2 ? "½ " : q.n === 1 ? "" : q.n + " "; };
  function lines(){
    const bt = B().t, lg = a => lgH(bt, a), half = qQ().d === 2, C0 = CT(), bH = bt === "e" ? "e" : bt;
    const prob = lg(`(${CH()}${xp()}/${yq(true)})`);
    const full = `${m} + ${cl("c3", p === 1 ? "" : p + " ")}${lg(ix)} ${MI} ${cl("c3", qc())}${lg(iy)}`;
    if (dir === "expand") return [
      { tag: "problem", eq: prob, why: `Expand completely (x, y > 0).` },
      { tag: cl("c2", "quotient"), eq: `${lg(`(${CH()}${xp()})`)} ${cl("c2", MI)} ${lg(yq(false))}`, why: "Quotient rule: log of the top minus log of the bottom." + (half ? " A square root is the power 1/2." : "") },
      { tag: cl("c1", "product"), eq: `${lg(CH())} ${cl("c1", "+")} ${lg(xp())} ${MI} ${lg(yq(false))}`, why: `Product rule: the log of ${C0} times x${p === 1 ? "" : supS(p)} is a sum of two logs.` },
      { tag: cl("c3", "power"), eq: full, why: `Power rule: each exponent comes down in front. ${lgT(bt)} ${C0} = ${m} because ${bH}${supS(m)} = ${C0}.` }];
    const out = [
      { tag: "problem", eq: full, why: "Condense into a single logarithm." },
      { tag: cl("c3", "power"), eq: `${lg(CH())} + ${lg(xp())} ${MI} ${lg(yq(false))}`, why: `Power rule backward: each coefficient becomes an exponent, and ${m} = ${lgT(bt)} ${C0}.` },
      { tag: cl("c1", "product"), eq: `${lg(`(${CH()}${xp()})`)} ${MI} ${lg(yq(false))}`, why: "Product rule backward: a sum of logs is the log of the product." },
      { tag: cl("c2", "quotient"), eq: lg(`(${CH()}${xp()}/${yq(false)})`), why: "Quotient rule backward: a difference of logs is the log of the quotient." }];
    if (half) out.push({ tag: "root", eq: prob, why: "The power 1/2 is a square root." });
    return out;
  }
  const count = () => lines().length - 1;
  // which expand stage (0 one log … 3 fully expanded) the bars show
  const stage = () => (dir === "expand" ? cur : Math.max(0, 3 - cur));
  const guardSteps = () => { const ls = lines(); k.guard([strip(ls[ls.length - 1].eq)]); };
  const restart = () => { cur = 0; if (st) st.reset(); if (mode === "steps") guardSteps(); };
  const hints = { steps: "Build a log with the sliders, then Step through the rules", check: "Pick a rule and move M and N: do the two sides stay equal?", base: "Choose any base: every log is ln x divided by ln b" };
  const setMode = md => { mode = md; k.showGroup(md); k.hint(hints[md]); if (md === "steps") guardSteps(); else k.guard([]); };
  k.modes([["steps", "Expand / condense"], ["check", "Check numerically"], ["base", "Change of base"]], mode, setMode);
  let sm, sp, sq, sb;
  k.group("steps", () => {
    sb = k.select("Base", LBASES.map((b, i) => [i, "b = " + b.t]), bi, v => { bi = +v; restart(); });
    k.select("Direction", [["expand", "Expand"], ["condense", "Condense"]], dir, v => { dir = v; restart(); });
    sm = k.slider(cl("c1", "constant b<sup>m</sup>, <i>m</i>"), 1, 3, 1, m, v => { m = v; restart(); }, String);
    sp = k.slider(cl("c3", "power of <i>x</i>"), 1, 4, 1, p, v => { p = v; restart(); }, String);
    sq = k.slider(cl("c2", "power of <i>y</i>"), 0, 3, 1, qi, v => { qi = v; restart(); }, v => MR.qT(Q(LQS[v][0], LQS[v][1])));
    st = k.stepper(count, v => { cur = v; }, { ms: 1300 });
    k.button("New problem", () => { bi = Math.floor(Math.random() * 4); m = 1 + Math.floor(Math.random() * 3); p = 1 + Math.floor(Math.random() * 4); qi = Math.floor(Math.random() * 4);
      sm.set(m); sp.set(p); sq.set(qi); sb.set(bi); restart(); }, "btn ghost");
  });
  const IDS = [
    { t: "Product rule", ok: true, cls: "c1", f: (M, N, q, b) => Math.log(M * N) / b, g: (M, N, q, b) => (Math.log(M) + Math.log(N)) / b, lH: "(<i>MN</i>)", rH: lg => `${lg("<i>M</i>")} + ${lg("<i>N</i>")}` },
    { t: "Quotient rule", ok: true, cls: "c2", f: (M, N, q, b) => Math.log(M / N) / b, g: (M, N, q, b) => (Math.log(M) - Math.log(N)) / b, lH: "(<i>M</i>/<i>N</i>)", rH: lg => `${lg("<i>M</i>")} ${MI} ${lg("<i>N</i>")}` },
    { t: "Power rule", ok: true, cls: "c3", f: (M, N, q, b) => q * Math.log(M) / b, g: (M, N, q, b) => q * Math.log(M) / b, lH: "<i>M</i><sup><i>p</i></sup>", rH: lg => `<i>p</i> ${lg("<i>M</i>")}`, pw: true },
    { t: "log of a sum (false)", ok: false, cls: "c1", f: (M, N, q, b) => Math.log(M + N) / b, g: (M, N, q, b) => (Math.log(M) + Math.log(N)) / b, lH: "(<i>M</i> + <i>N</i>)", rH: lg => `${lg("<i>M</i>")} + ${lg("<i>N</i>")}` },
    { t: "quotient of logs (false)", ok: false, cls: "c2", f: (M, N) => Math.log(M) / Math.log(N), g: (M, N, q, b) => (Math.log(M) - Math.log(N)) / b, lH: null, rH: lg => `${lg("<i>M</i>")} ${MI} ${lg("<i>N</i>")}` },
    { t: "power of a log (false)", ok: false, cls: "c3", f: (M, N, q, b) => Math.pow(Math.log(M) / b, q), g: (M, N, q, b) => q * Math.log(M) / b, lH: null, rH: lg => `<i>p</i> ${lg("<i>M</i>")}`, pw: true }];
  k.group("check", () => {
    k.select("Rule", IDS.map((d, i) => [i, d.t]), ci, v => { ci = +v; });
    k.select("Base", LBASES.map((b, i) => [i, "b = " + b.t]), cbi, v => { cbi = +v; });
    k.slider("<i>M</i>", 0.1, 16, 0.1, Mv, v => { Mv = v; }, v => MR.fmtN(v, 1));
    k.slider("<i>N</i>", 0.1, 16, 0.1, Nv, v => { Nv = v; }, v => MR.fmtN(v, 1));
    k.slider("<i>p</i>", -2, 4, 0.5, pv, v => { pv = v; }, v => MR.fmtN(v, 1));
  });
  const bT = i => (CBASE[i] === null ? "e" : MR.qT(Q(CBASE[i][0], CBASE[i][1])));
  const bV = i => (CBASE[i] === null ? Math.E : CBASE[i][0] / CBASE[i][1]);
  k.group("base", () => {
    k.slider(cl("c4", "base <i>b</i>"), 0, CBASE.length - 1, 1, bb, v => { bb = v; }, bT);
    k.slider("argument <i>M</i>", 0.05, 40, 0.05, Mb, v => { Mb = Math.round(v * 20) / 20; }, v => MR.fmtN(v, 2));
  });
  setMode(mode);

  k.loop(dt => {
    c.begin(); const d = c.d, labels = [];
    if (mode === "steps") {
      const pad = k.split(c, host, { side: "left", frac: 0.5, hfrac: 0.5 });
      const ls = lines(); cur = Math.min(cur, ls.length - 1); setSteps(SP, host, ls, cur);
      const bt = B().t, q = Q.val(qQ()), lx = 2, ly = 2, top = m + p * lx, T = top - q * ly, s = stage(), lt = lgT(bt);
      const lo = Math.min(0, T) - 0.8, hi = Math.max(top, T) + 0.8, pw = c.w - pad.l - pad.r;
      P = k.plane(c, { xmin: lo, xmax: hi, ymin: 0, ymax: 3.2, pad, xstep: MR.niceStep(hi - lo, Math.max(4, Math.min(12, pw / 45))), ystep: 10, xlabel: "value" });
      P.grid(); P.axes();
      const bar = (x1, x2, y, col, w = 4) => { if (Math.abs(x2 - x1) < 1e-9) return; P.seg(x1, y, x2, y, "rgba(0,0,0,0)", 0); d.arrow(P.X(x1), P.Y(y), P.X(x2), P.Y(y), col, w); d.line(P.X(x1), P.Y(y) - 6, P.X(x1), P.Y(y) + 6, col, 2); };
      // the original single log, always on top
      bar(0, T, 2.5, C.violet);
      labels.push({ text: `${lt}(${CT()}x${p === 1 ? "" : supS(p)}/${qi === 0 ? "√y" : "y" + (q === 1 ? "" : supS(q))}) = ${MR.fmtN(T)}`, x: T / 2, y: 2.5, color: C.violet, font: `13px ${F.math}`, prefer: "n" });
      P.seg(T, 0.4, T, 2.5, k.alpha(C.violet, 0.45), 1.2, [4, 4]);
      const yP = 1.55, yN = 0.85;
      if (s === 0) { bar(0, T, yP, k.alpha(C.violet, 0.7)); labels.push({ text: "one logarithm", x: T / 2, y: yP, color: C.violet, font: `12px ${F.ui}`, prefer: "s" }); }
      else {
        if (s === 1) { bar(0, top, yP, C.amber); labels.push({ text: `${lt}(${CT()}x${p === 1 ? "" : supS(p)})`, x: top / 2, y: yP, color: C.amber, font: `13px ${F.math}`, prefer: "n" }); }
        else {
          bar(0, m, yP, C.amber); labels.push({ text: `${lt} ${CT()} = ${m}`, x: m / 2, y: yP, color: C.amber, font: `13px ${F.math}`, prefer: "n" });
          bar(m, top, yP, s === 3 ? C.pink : C.amber);
          if (s === 3) for (let i = 1; i < p; i++) d.line(P.X(m + i * lx), P.Y(yP) - 8, P.X(m + i * lx), P.Y(yP) + 8, C.pink, 2);
          labels.push({ text: s === 3 ? `${p === 1 ? "" : p + " · "}${lt} x` : `${lt} x${p === 1 ? "" : supS(p)}`, x: (m + top) / 2, y: yP, color: s === 3 ? C.pink : C.amber, font: `13px ${F.math}`, prefer: "n" });
        }
        bar(top, T, yN, s === 3 ? C.pink : C.cyan);
        if (s === 3 && q >= 2) for (let i = 1; i < q; i++) d.line(P.X(top - i * ly), P.Y(yN) - 8, P.X(top - i * ly), P.Y(yN) + 8, C.pink, 2);
        if (s === 3 && q < 1) P.seg(top, yN - 0.22, top - ly, yN - 0.22, k.alpha(C.pink, 0.5), 1.4, [4, 4]);
        labels.push({ text: s === 3 ? `${MI}${q === 1 ? "" : q < 1 ? "½ · " : q + " · "}${lt} y` : `${MI}${lt} ${qi === 0 ? "√y" : "y" + (q === 1 ? "" : supS(q))}`, x: (top + T) / 2, y: yN, color: s === 3 ? C.pink : C.cyan, font: `13px ${F.math}`, prefer: "s" });
      }
      P.labels(labels);
      const done = cur >= ls.length - 1, bH = bt === "e" ? "<i>e</i>" : bt;
      const rule = ["the problem", ...ls.slice(1).map(l => strip(l.tag) + " rule")][cur].replace("root rule", "roots as powers");
      k.readout({ title: dir === "expand" ? "Expand one logarithm" : "Condense into one logarithm", big: nw(ls[0].eq),
        rows: [{ lhs: `step ${cur} of ${ls.length - 1}`, lbl: cur ? `${rule}: each bar changes shape, its total length does not` : "the violet bar is the whole logarithm" },
          { lhs: `at ${ix} = ${bH}<sup>2</sup>, ${iy} = ${bH}<sup>2</sup>`, v: MR.fmtN(T), cls: "c4", lbl: `${lgT(bt)} x = ${lgT(bt)} y = 2, so every line has the value ${MR.fmtN(T)}` }],
        landmark: done ? { hit: true, big: dir === "expand" ? "Fully expanded" : "One logarithm", note: dir === "expand" ? "A sum and difference of simple logs: products became sums, the quotient a difference, exponents multipliers." : "Exponents first, then sums to products and the difference to a quotient." }
          : { hit: false, big: "Same value, new shape", note: "Each rule rewrites the log without changing its value. The bars below always end where the violet bar ends." },
        narr: "Change the powers or the base and Step again, or switch Direction to run the rules backward." });
    } else if (mode === "check") {
      k.split(c, host, { off: true });
      const id = IDS[ci], b = LBASES[cbi], lb = Math.log(b.v), lg = a => lgH(b.t, a);
      const fl = M => { const v = id.f(M, Nv, pv, lb); return isFinite(v) ? v : NaN; }, gr = M => { const v = id.g(M, Nv, pv, lb); return isFinite(v) ? v : NaN; };
      let lo = Infinity, hi = -Infinity; for (let i = 1; i <= 80; i++) { const M = 16 * i / 80; [fl(M), gr(M)].forEach(v => { if (isFinite(v)) { lo = Math.min(lo, Math.max(-8, v)); hi = Math.max(hi, Math.min(8, v)); } }); }
      if (!isFinite(lo)) { lo = -2; hi = 2; }
      k.smooth(view, { lo: Math.min(-1, lo) - 0.6, hi: Math.max(1, hi) + 0.8 }, dt);
      P = k.plane(c, { xmin: -0.6, xmax: 16.5, ymin: view.lo, ymax: view.hi, xstep: c.w < 520 ? 4 : 2, ystep: MR.niceStep(view.hi - view.lo, c.h < 560 ? 5 : 8), xlabel: "M", ylabel: "y" });
      P.grid(); P.axes();
      const col = C[{ c1: "amber", c2: "cyan", c3: "pink" }[id.cls]];
      P.curve(fl, col, { from: 0.02, w: 3 });
      P.curve(gr, k.alpha(C.text, 0.8), { from: 0.02, w: 2, dash: [7, 6] });
      const L0 = fl(Mv), R0 = gr(Mv), eq = isFinite(L0) && isFinite(R0) && Math.abs(L0 - R0) < 5e-4;
      if (!id.ok) MR.intersect(fl, gr, 0.05, 16).forEach(z => { P.dot(z.x, z.y, C.violet, 4.5); labels.push({ text: `M ≈ ${MR.fmtN(z.x, 2)}`, x: z.x, y: z.y, color: C.violet, font: `12px ${F.mono}` }); });
      if (isFinite(L0) && isFinite(R0) && !eq) P.seg(Mv, L0, Mv, R0, k.alpha(C.violet, 0.8), 1.6, [3, 3]);
      if (isFinite(L0)) P.dot(Mv, L0, col, 6);
      if (isFinite(R0)) P.dot(Mv, R0, C.text, 4);
      const a1 = P.onCurve(fl, 0.88, 0.05), a2 = P.onCurve(gr, 0.62, 0.05);
      if (a1) labels.push({ text: "left side", x: a1.x, y: a1.y, color: col, font: `13px ${F.ui}` });
      if (a2 && !id.ok) labels.push({ text: "right side", x: a2.x, y: a2.y, color: C.text, font: `13px ${F.ui}` });
      P.labels(labels);
      const lhs = id.lH ? lg(id.lH) : ci === 4 ? `${lg("<i>M</i>")} / ${lg("<i>N</i>")}` : `(${lg("<i>M</i>")})<sup><i>p</i></sup>`;
      const vt = v => (isFinite(v) ? MR.fmtN(v, 4) : "undefined");
      k.readout({ title: id.t, big: `${nw(`${cl(id.cls, lhs)} ${id.ok ? "=" : "≟"}`)} ${nw(id.rH(lg))}`,
        rows: [{ lhs: `<i>M</i> = ${MR.fmtN(Mv, 1)}, <i>N</i> = ${MR.fmtN(Nv, 1)}${id.pw ? `, <i>p</i> = ${MR.fmtN(pv, 1)}` : ""}`, lbl: `base ${b.t}` },
          { lhs: "left side", v: vt(L0), cls: id.cls }, { lhs: "right side", v: vt(R0), lbl: isFinite(L0 - R0) ? `difference ${MR.fmtN(L0 - R0, 4)}` : "" }],
        landmark: id.ok ? { hit: true, big: "Equal for every M, N > 0", note: "The two graphs lie on top of each other: this is an identity, proved from the laws of exponents." }
          : eq ? { hit: true, big: "Equal here, by coincidence", note: "Only at this point. Move M or N and the two sides separate, so this is not a rule." }
          : { hit: false, big: "Not an identity", note: "The graphs separate. Where they cross (violet) the sides agree only by chance." },
        narr: "Try log of a sum with N = 2: the sides agree only at M = 2, where M + N = MN." });
    } else {
      k.split(c, host, { off: true });
      const b = bV(bb), bt = bT(bb), lnb = Math.log(b), v = Math.log(Mb) / lnb, xm = Math.max(10, Mb * 1.15, b * 1.15);
      const ex = CBASE[bb] ? MR.logExact(Q(CBASE[bb][0], CBASE[bb][1]), Q(Mb)) : Mb === 1 ? Q(0) : null;
      k.smooth(view, { lo: Math.min(-3, v - 1), hi: Math.max(3, v + 1), xm }, dt);
      P = k.plane(c, { xmin: -xm * 0.06, xmax: view.xm, ymin: view.lo, ymax: view.hi, xstep: MR.niceStep(view.xm, c.w < 520 ? 5 : 10), ystep: MR.niceStep(view.hi - view.lo, c.h < 560 ? 5 : 8), xlabel: "x", ylabel: "y" });
      P.grid(); P.axes();
      P.curve(x => (x > 0 ? Math.log(x) : NaN), k.alpha(C.text, 0.55), { from: 1e-3, w: 1.8, dash: [6, 5] });
      P.curve(x => (x > 0 ? Math.log(x) / lnb : NaN), C.violet, { from: 1e-3, w: 3 });
      P.seg(Mb, 0, Mb, v, k.alpha(C.violet, 0.6), 1.3, [4, 4]); P.seg(0, v, Mb, v, k.alpha(C.violet, 0.6), 1.3, [4, 4]);
      P.dot(b, 1, k.alpha(C.violet, 0.8), 4); P.dot(Mb, v, ex ? C.green : C.violet, 6.5);
      labels.push({ text: `(${MR.fmtN(Mb, 2)}, ${ex ? MR.qT(ex) : MR.fmtN(v, 3)})`, x: Mb, y: v, color: ex ? C.green : C.violet, font: `13px ${F.mono}` },
        { text: `(${bt}, 1)`, x: b, y: 1, color: C.violet, font: `12px ${F.mono}` });
      const a1 = P.onCurve(x => Math.log(x), 0.92, 0.01), a2 = P.onCurve(x => Math.log(x) / lnb, 0.7, 0.01);
      if (a1) labels.push({ text: "ln x", x: a1.x, y: a1.y, color: C.muted, font: `italic 14px ${F.math}` });
      if (a2 && bt !== "e") labels.push({ text: `log${bt === "1/2" ? "½" : bt === "1/4" ? "¼" : subT(bt)} x`, x: a2.x, y: a2.y, color: C.violet, font: `italic 15px ${F.math}` });
      P.labels(labels);
      const bH = bt === "e" ? "<i>e</i>" : bt, lgb = a => (bt === "e" ? `ln ${a}` : `log<sub class="c4">${bt}</sub> ${a}`), Mt = MR.fmtN(Mb, 2);
      k.readout({ title: "Change of base", big: `${nw(`${lgb(Mt)} = ${fr(`ln ${Mt}`, `ln ${cl("c4", bH)}`)}`)} ${nw(`= ${fr(MR.fmtN(Math.log(Mb), 4), MR.fmtN(lnb, 4))} ${ex ? "=" : "≈"} ${ex ? MR.qT(ex) : MR.fmtN(v, 4)}`)}`,
        rows: [{ lhs: `= log ${Mt} / log ${bH}`, v: MR.fmtN(Math.log10(Mb) / Math.log10(b), 4), lbl: "common logs give the same quotient: any base works" },
          { lhs: `${lgb(ix)} = ${MR.fmtN(1 / lnb, 4)} · ln ${ix}`, lbl: "every log graph is ln x stretched by the constant 1/ln b" }],
        landmark: ex ? { hit: true, big: `${cl("c4", bH)}<sup>${MR.qT(ex)}</sup> = ${Mt} exactly`, note: `The quotient of two decimals is exactly ${MR.qT(ex)}: M is a power of the base.` }
          : { hit: false, big: "Decimal answer", note: "Move M to a power of the base, such as 8 for b = 2 or 0.25 for b = 16, for an exact value." },
        narr: "Bases below 1 flip the curve: log base 1/2 is ln x divided by a negative number." });
    }
  });
};

/* ================= Exponential & logarithmic equations (C · Steps) ================= */
const xH = h => pmH(ix, h);
const linH = (a, b) => (a === 0 ? (b < 0 ? MI + Math.abs(b) : String(b)) : pmH(`${a === 1 ? "" : a}${ix}`, b));
const factorH = v => (v === 0 ? ix : `(${pmH(ix, v)})`);
// Problem builders. Each: {eqH, L, R, Lc?, lo?, sols: [{v, t}], rej: [{v, why}], dash?, lines, ans, win}
function pSameBase(c, p, h1, q, h2, n){
  const MR = window.MathRules, Q = MR.Q, x0 = sameBaseX(p, h1, q, h2, n), xv = Q.val(x0);
  const lB = c ** p, rB = c ** q, L = x => lB ** (x + h1), R = q ? x => rB ** (x + h2) : () => c ** n;
  const eqH = `${lB}<sup>${xH(h1)}</sup> = ${q ? `${rB}<sup>${xH(h2)}</sup>` : c ** n}`, Y = L(xv);
  const a1 = p, b1 = p * h1, a2 = q, b2 = q ? q * h2 : n;
  const rw = [p > 1 ? `${lB} = ${c}${supS(p)}` : "", q > 1 ? `${rB} = ${c}${supS(q)}` : "", !q ? `${c ** n} = ${c}${supS(n)}` : ""].filter(Boolean).join(" and ");
  return { eqH, L, R, sols: [{ v: xv, t: MR.qT(x0) }], rej: [], kind: "same base",
    lines: [{ tag: "problem", eq: eqH, why: `Both sides are powers of ${c}.` },
      { tag: "same base", eq: `${c}<sup>${linH(a1, b1)}</sup> = ${c}<sup>${linH(a2, b2)}</sup>`, why: `Write ${rw}.${p > 1 || q > 1 ? " A power of a power multiplies the exponents." : ""}` },
      { tag: "exponents", eq: `${linH(a1, b1)} = ${linH(a2, b2)}`, why: "One-to-one property: equal powers of one base have equal exponents." },
      { tag: cl("c5", "solve"), eq: `${ix} = ${MR.qT(x0)}`, why: `Check: both sides equal ${MR.fmtN(Y, 4)} there.` }],
    win: { xmin: xv - 4, xmax: xv + 3, ymin: -0.14 * Y, ymax: 1.7 * Y } };
}
function pTakeLog(a, b, K){
  const MR = window.MathRules, xv = Math.log(K) / Math.log(b), L = x => a * b ** x, R = () => a * K, ex = `${ix} = ln ${K} / ln ${b}`;
  const eqH = `${a === 1 ? "" : a + " · "}${b}<sup>${ix}</sup> = ${a * K}`, ls = [{ tag: "problem", eq: eqH, why: a === 1 ? `${K} is not a power of ${b}, so take a logarithm.` : "Isolate the power before taking logs." }];
  if (a !== 1) ls.push({ tag: "isolate", eq: `${b}<sup>${ix}</sup> = ${K}`, why: `Divide both sides by ${a}. The exponent belongs to ${b} only.` });
  ls.push({ tag: "take ln", eq: `${ix} ln ${b} = ln ${K}`, why: "Take ln of both sides; the power rule brings x down." },
    { tag: cl("c5", "exact"), eq: ex, why: `Divide by ln ${b}. This is the exact answer.` },
    { tag: "decimal", eq: `${ix} ≈ ${MR.fmtN(xv, 4)}`, why: `Check: ${b} to the power ${MR.fmtN(xv, 4)} is about ${K}.` });
  return { eqH, L, R, sols: [{ v: xv, t: `ln ${K} / ln ${b} ≈ ${MR.fmtN(xv, 3)}` }], rej: [], kind: "take logs", lines: ls, ans: strip(ex),
    win: { xmin: xv - 4, xmax: xv + 2.5, ymin: -0.14 * a * K, ymax: 1.7 * a * K } };
}
function pLogSum(b, p, q, n){
  const MR = window.MathRules, z = logSumEq(b, p, q, n), lb = Math.log(b), bt = String(b), lg = a => lgH(bt, a, "");
  const L = x => (x > z.lo ? (Math.log(x + p) + Math.log(x + q)) / lb : NaN), R = () => n, Lc = x => ((x + p) * (x + q) > 0 ? Math.log((x + p) * (x + q)) / lb : NaN);
  const arg = v => pmH(ix, v), bad = z.r + Math.min(p, q), v0 = v => (v === 0 ? ix : `(${arg(v)})`);
  const eqH = `${lg(v0(p))} + ${lg(v0(q))} = ${n}`;
  const S = p + q, Ct = p * q - z.V;
  return { eqH, L, R, Lc, lo: z.lo, sols: [{ v: z.s, t: String(z.s) }], rej: [{ v: z.r, why: `${arg(Math.min(p, q))} = ${MR.sg(bad)}` }], kind: "log equation",
    lines: [{ tag: "domain", eq: `${arg(p)} > 0 and ${arg(q)} > 0 ⇒ ${ix} > ${MR.sg(z.lo)}`, why: "Every log argument must be positive." },
      { tag: "condense", eq: lg(`[${factorH(p)}${factorH(q)}]`) + ` = ${n}`, why: "Product rule: a sum of logs is the log of the product." },
      { tag: "exp form", eq: `${factorH(p)}${factorH(q)} = ${b}<sup>${n}</sup> = ${z.V}`, why: `log_${b} S = ${n} means S = ${b}^${n}.` },
      { tag: "quadratic", eq: `${pmH(pmH(`${ix}<sup>2</sup>`, 0) + (S ? ` ${S < 0 ? MI : "+"} ${Math.abs(S) === 1 ? "" : Math.abs(S)}${ix}` : ""), Ct)} = 0 ⇒ (${arg(-z.s)})(${arg(-z.r)}) = 0`, why: "Expand, bring every term to one side and factor." },
      { tag: "candidates", eq: `${ix} = ${MR.sg(z.s)} &nbsp;or&nbsp; ${ix} = ${MR.sg(z.r)}`, why: "Two candidates from the algebra." },
      { tag: cl("c3", "check"), eq: `${cl("c3", `${ix} = ${MR.sg(z.r)} rejected`)}: ${arg(Math.min(p, q))} = ${MR.sg(bad)} < 0`, why: `The log of a negative number is undefined, so ${MR.sg(z.r)} is extraneous. It solves the condensed equation only.` },
      { tag: cl("c5", "answer"), eq: `${ix} = ${MR.sg(z.s)}`, why: `Check: ${lgT(bt)}(${z.s + p}) + ${lgT(bt)}(${z.s + q}) = ${n}.` }],
    win: { xmin: Math.min(z.r, -p, -q) - 2, xmax: z.s + 3, ymin: Math.min(-3, n - 6), ymax: n + 3 } };
}
function pQuadExp(b, u1, u2, eqH0){
  const MR = window.MathRules, Q = MR.Q, isE = b === "e", bv = isE ? Math.E : b, bH = isE ? "<i>e</i>" : String(b), S = u1 + u2, Pq = u1 * u2;
  const f = x => bv ** (2 * x) - S * bv ** x + Pq, z = quadExpRoots(bv, u1, u2);
  const xt = u => (isE ? (u === 1 ? "0" : `ln ${u}`) : MR.qT(MR.logExact(Q(b), Q(u))));
  const eqH = eqH0 || `${isE ? `<i>e</i><sup>2${ix}</sup>` : `${b * b}<sup>${ix}</sup>`} ${S < 0 ? "+" : MI} ${Math.abs(S) === 1 ? "" : Math.abs(S) + " · "}${bH}<sup>${ix}</sup> ${Pq < 0 ? MI : "+"} ${Math.abs(Pq)} = 0`;
  const uq = `<i>u</i><sup>2</sup> ${S < 0 ? "+" : MI} ${Math.abs(S) === 1 ? "" : Math.abs(S)}<i>u</i> ${Pq < 0 ? MI : "+"} ${Math.abs(Pq)} = 0`;
  const sol = z.keep.map(k0 => `${ix} = ${xt(k0.u)}`).join(" &nbsp;or&nbsp; ") + (isE && z.keep.some(k0 => k0.u !== 1) ? ` ≈ ${MR.fmtN(z.keep[z.keep.length - 1].x, 3)}` : "");
  let ylo = 0; for (let i = 0; i <= 60; i++) ylo = Math.min(ylo, f(-4 + i * 0.1));
  const xs = z.keep.map(k0 => k0.x), x0 = Math.min(...xs), x1 = Math.max(...xs);
  return { eqH, L: f, R: () => 0, sols: z.keep.map(k0 => ({ v: k0.x, t: xt(k0.u) })), rej: z.drop.map(u => ({ v: null, u, why: `${bH}ˣ = ${MR.sg(u)}` })), kind: "quadratic type", qe: { bv, bH, u1, u2 }, ans: strip(sol),
    lines: [{ tag: "problem", eq: eqH, why: isE ? "e^(2x) = (eˣ)², so this is quadratic in eˣ." : `${b * b}ˣ = (${b}ˣ)², so this is quadratic in ${b}ˣ.` },
      { tag: "substitute", eq: `<i>u</i> = ${bH}<sup>${ix}</sup>: &nbsp;${uq}`, why: `Let u stand for ${isE ? "eˣ" : b + "ˣ"}.` },
      { tag: "factor", eq: `(${pmH("<i>u</i>", -u1)})(${pmH("<i>u</i>", -u2)}) = 0`, why: "Solve the quadratic in u by factoring." },
      { tag: "back", eq: `${bH}<sup>${ix}</sup> = ${u1} &nbsp;or&nbsp; ${bH}<sup>${ix}</sup> = ${MR.sg(u2)}`, why: z.drop.length ? `${isE ? "eˣ" : b + "ˣ"} is always positive, so ${isE ? "eˣ" : b + "ˣ"} = ${MR.sg(z.drop[0])} has no solution.` : "Both values are positive, so each one gives a solution." },
      { tag: cl("c5", "solve"), eq: sol, why: "Take the logarithm of each positive value." }],
    win: { xmin: x0 - 2.6, xmax: x1 + 1.8, ymin: Math.min(ylo, u2) - 1.2, ymax: Math.max(4, u1 + 1.5, -ylo * 1.2) } };
}
const WORKED = [
  ["2^(x+1) = 32", () => pSameBase(2, 1, 1, 0, 0, 5)], ["9^x = 27^(x−1)", () => pSameBase(3, 2, 0, 3, -1)],
  ["3^x = 20", () => pTakeLog(1, 3, 20)], ["5 · 2^x = 60", () => pTakeLog(5, 2, 12)],
  ["log₂ x + log₂(x − 2) = 3", () => pLogSum(2, 0, -2, 3)],
  ["e^(2x) − 3eˣ + 2 = 0", () => pQuadExp("e", 1, 2)], ["4^x − 2^(x+1) − 8 = 0", () => pQuadExp(2, 4, -2, `4<sup>${ix}</sup> ${MI} 2<sup>${ix} + 1</sup> ${MI} 8 = 0`)]];
// Your-turn pool: exact generated cases of each kind
function eqPool(){
  const out = [];
  [2, 3, 5].forEach(c => [-2, -1, 1, 2, 3].forEach(h => { for (let n = 2; c ** n <= 250; n++) if (n - h !== 0) out.push(() => pSameBase(c, 1, h, 0, 0, n)); }));
  [[2, 2, 3], [2, 3, 2], [3, 2, 1], [2, 1, 2], [3, 1, 2]].forEach(([c, p, q]) => [-1, 0, 1].forEach(h1 => [-1, 1, 2].forEach(h2 => { const x0 = sameBaseX(p, h1, q, h2); if (x0 && x0.d === 1 && Math.abs(x0.n) <= 4) out.push(() => pSameBase(c, p, h1, q, h2)); })));
  [2, 3, 5].forEach(b => [1, 2, 3, 4].forEach(a => [5, 6, 7, 10, 12, 15, 20, 30, 40].forEach(K => { if (!window.MathRules.logExact(b, K)) out.push(() => pTakeLog(a, b, K)); })));
  [2, 3].forEach(b => [1, 2, 3, 4, 5].forEach(n => { if (b ** n > 32) return; for (let p = -4; p <= 4; p++) for (let q = p + 1; q <= 4; q++) if (logSumEq(b, p, q, n)) out.push(() => pLogSum(b, p, q, n)); }));
  [2, 3].forEach(b => [1, 2].forEach(s => [-1, -2, -3].forEach(u2 => out.push(() => pQuadExp(b, b ** s, u2)))));
  return out;
}
L["a2-exp-log-eq"] = k => {
  MathKit.attach(k);
  const { C, F } = k, MR = k.MR, c = k.canvas(), host = k.dom(), SP = k.stepsPanel(host), POOL = eqPool();
  let mode = "worked", wi = 0, pr = WORKED[0][1](), cur = 0, st = null, P = null, cx = 0, snap = null, yt = null;
  const cursor = { x: 0, y: 0, fixY: true };
  const ansOf = q => q.ans || strip(q.lines[q.lines.length - 1].eq);
  const placeCursor = () => { const w = pr.win, sp = w.xmax - w.xmin; cx = w.xmin + sp * 0.15; const near = v => v !== null && Math.abs(cx - v) < sp * 0.12;
    if (pr.sols.some(s => near(s.v)) || pr.rej.some(r => near(r.v))) cx = w.xmin + sp * 0.9; snap = null; };
  let st2 = null;
  const load = q => { pr = q; cur = 0; if (st) st.reset(); if (st2) st2.reset(); placeCursor(); k.guard([ansOf(pr)]); };
  k.drag(c, () => (mode === "turn" ? P : null), [cursor], (i, pt) => {
    cx = pt.x; snap = null; if (!P) return;
    pr.sols.forEach(s => { if (Math.abs(P.X(s.v) - P.X(cx)) < 10) { cx = s.v; snap = { ok: true, s }; } });
    pr.rej.forEach(r => { if (r.v !== null && Math.abs(P.X(r.v) - P.X(cx)) < 10) { cx = r.v; snap = { ok: false, r }; } });
  });
  const hints = { worked: "Pick a problem and Step through it; watch the graph change", turn: "Drag the cursor to where the two sides meet; Step for hints" };
  const setMode = md => { mode = md; k.showGroup(md); k.hint(hints[md]); if (md === "worked") load(WORKED[wi][1]()); else load(POOL[Math.floor(Math.random() * POOL.length)]()); };
  k.modes([["worked", "Worked"], ["turn", "Your turn"]], mode, setMode);
  const count = () => pr.lines.length - 1;
  k.group("worked", () => {
    k.select("Problem", WORKED.map((w, i) => [i, w[0]]), wi, v => { wi = +v; load(WORKED[wi][1]()); });
    st = k.stepper(count, v => { cur = v; }, { ms: 1400 });
  });
  k.group("turn", () => {
    st2 = k.stepper(count, v => { cur = v; }, { ms: 1400 });
    k.button("New problem", () => load(POOL[Math.floor(Math.random() * POOL.length)]()), "btn ghost");
  });
  setMode(mode);
  const view = {};

  k.loop(dt => {
    c.begin(); const d = c.d, labels = [], q = pr, w = q.win, n = q.lines.length - 1;
    cur = Math.min(cur, n); setSteps(SP, host, q.lines, cur);
    const pad = k.split(c, host, { side: "left", frac: 0.46, hfrac: 0.46 });
    pad.l += Math.abs(w.ymax) >= 10000 ? 26 : Math.abs(w.ymax) >= 100 ? 12 : 0;
    k.smooth(view, w, dt);
    const pw = c.w - pad.l - pad.r, ph = c.h - pad.t - pad.b;
    P = k.plane(c, { xmin: view.xmin, xmax: view.xmax, ymin: view.ymin, ymax: view.ymax, pad, xstep: MR.niceStep(view.xmax - view.xmin, Math.max(4, Math.min(10, pw / 50))), ystep: MR.niceStep(view.ymax - view.ymin, Math.max(4, Math.min(8, ph / 45))), xlabel: "x", ylabel: "y" });
    P.grid(); P.axes();
    const done = cur >= n, showRej = q.lo !== undefined ? cur >= 5 : cur >= 3;
    if (q.lo !== undefined) {   // excluded domain of a log equation
      P.shade(() => P.ymax, () => P.ymin, P.xmin, Math.min(q.lo, P.xmax), k.alpha(C.pink, 0.07));
      P.seg(q.lo, P.ymin, q.lo, P.ymax, k.alpha(C.pink, 0.55), 1.3, [5, 5]);
      labels.push({ text: "outside the domain", x: (P.xmin + q.lo) / 2, y: P.ymin + (P.ymax - P.ymin) * 0.55, color: C.pink, font: `12px ${F.ui}` });
      if (cur >= 1) { P.curve(q.Lc, k.alpha(C.amber, 0.6), { w: 1.8, dash: [6, 5] });
        const a = P.onCurve(q.Lc, 0.12, P.xmin, q.rej[0].v + 0.5); if (a) labels.push({ text: "condensed", x: a.x, y: a.y, color: k.alpha(C.amber, 0.85), font: `12px ${F.ui}` }); }
    }
    if (q.qe && cur >= 3) {   // u = bˣ never reaches a negative u
      const { bv, bH, u1, u2 } = q.qe;
      P.curve(x => bv ** x, k.alpha(C.text, 0.5), { w: 1.6, dash: [5, 4] });
      P.seg(P.xmin, u1, P.xmax, u1, k.alpha(C.green, 0.7), 1.3, [3, 4]); P.seg(P.xmin, u2, P.xmax, u2, k.alpha(C.pink, 0.75), 1.3, [3, 4]);
      const a = P.onCurve(x => bv ** x, 0.9); if (a) labels.push({ text: `${bH === "<i>e</i>" ? "e" : bH}ˣ`, x: a.x, y: a.y, color: C.muted, font: `italic 14px ${F.math}` });
      labels.push({ text: `u = ${u1}`, x: P.xmin + (P.xmax - P.xmin) * 0.12, y: u1, color: C.green, font: `12px ${F.mono}`, prefer: "n" },
        { text: `u = ${MR.sg(u2)}${u2 < 0 ? " ✗" : ""}`, x: P.xmin + (P.xmax - P.xmin) * 0.12, y: u2, color: u2 < 0 ? C.pink : C.green, font: `12px ${F.mono}`, prefer: "s" });
    }
    P.curve(q.R, C.cyan, { w: 2.6 });
    P.curve(q.L, C.amber, { w: 3, from: q.lo !== undefined ? q.lo + 1e-4 : P.xmin });
    const aL = P.onCurve(q.L, 0.82, q.lo !== undefined ? q.lo + 0.05 : -Infinity), aR = P.onCurve(q.R, 0.05);
    if (aL) labels.push({ text: "left side", x: aL.x, y: aL.y, color: C.amber, font: `13px ${F.ui}` });
    if (aR) labels.push({ text: "right side", x: aR.x, y: aR.y, color: C.cyan, font: `13px ${F.ui}`, prefer: "n" });
    if (showRej) q.rej.forEach(r => { if (r.v === null) return; P.dot(r.v, q.R(r.v), C.pink, 6); labels.push({ text: `x = ${MR.sg(r.v)} ✗`, x: r.v, y: q.R(r.v), color: C.pink, font: `13px ${F.mono}` }); });
    if (done || (mode === "turn" && snap && snap.ok)) q.sols.forEach(s => { P.seg(s.v, 0, s.v, q.R(s.v), k.alpha(C.green, 0.6), 1.3, [4, 4]); P.dot(s.v, q.R(s.v), C.green, 6.5); labels.push({ text: `x = ${s.t}`, x: s.v, y: q.R(s.v), color: C.green, font: `13px ${F.mono}` }); });
    if (mode === "turn") {
      const hy = P.ymin + (P.ymax - P.ymin) * 0.06; cursor.x = cx; cursor.y = hy;
      P.seg(cx, P.ymin, cx, P.ymax, k.alpha(C.text, 0.45), 1.2, [3, 3]);
      const lv = q.L(cx), rv = q.R(cx);
      if (isFinite(lv)) P.dot(cx, lv, C.amber, 5); P.dot(cx, rv, C.cyan, 5);
      d.circle(P.X(cx), P.Y(hy), 8, k.alpha(C.text, 0.25), C.text, 2);
      labels.push({ text: `cursor ${MR.fmtN(cx, 2)}`, x: cx, y: hy, color: C.text, font: `12px ${F.mono}`, prefer: "e" });
    }
    P.labels(labels);
    const lv = q.L(cx), rv = q.R(cx), vt = v => (isFinite(v) ? MR.fmtN(v, 3) : "undefined");
    const solsH = q.sols.map(s => cl("c5", `<i>x</i> = ${s.t}`)).join(", ");
    if (mode === "worked") {
      k.readout({ title: `Solve: ${q.kind}`, big: nw(q.eqH),
        rows: [{ lhs: cl("c1", "left side"), lbl: "amber curve" }, { lhs: cl("c2", "right side"), lbl: "cyan curve: solutions are where they meet" },
          q.lo !== undefined && cur >= 1 ? { lhs: "dashed: the condensed log", lbl: "it is defined on both sides of the domain gap, so it meets y = " + q.R(0) + " twice" } : null],
        landmark: done ? { hit: true, big: solsH, note: q.qe && q.rej.length ? `u = ${MR.sg(q.qe.u2)} is rejected: a positive base to any power is positive.` : q.rej.length ? "The rejected candidate fails the domain check: it is extraneous." : "The green point is where the two graphs meet." }
          : { hit: false, big: `step ${cur} of ${n}`, note: "Each step rewrites the equation. The solution set never changes, only its form." },
        narr: "Try the log equation: watch the dashed condensed curve pick up a second, rejected crossing." });
    } else {
      const found = snap && snap.ok, bad = snap && !snap.ok;
      k.readout({ title: `Your turn: ${q.kind}`, big: nw(q.eqH),
        rows: [{ lhs: `cursor at ${MR.fmtN(cx, 3)}`, lbl: "drag the white handle along the x-axis" },
          { lhs: `${cl("c1", "left")} ${vt(lv)}, &nbsp;${cl("c2", "right")} ${vt(rv)}`, lbl: isFinite(lv) ? `gap ${MR.fmtN(lv - rv, 3)}` : "the left side is undefined here" }],
        landmark: found ? { hit: true, big: solsH, note: "The two sides are equal here and the value is in the domain. Step through to see the algebra." }
          : bad ? { hit: false, big: cl("c3", `${MR.fmtN(cx, 2)} is extraneous`), note: `It solves the condensed equation, but ${snap.r.why}: a log of a negative number is undefined.` }
          : { hit: false, big: "Find where the graphs meet", note: "Drag the cursor until the gap is 0. Step reveals the method one line at a time." },
        narr: "New problem picks a same-base, take-logs, log or quadratic-type equation." });
    }
  });
};

/* ================= Exponential growth, decay & compound interest (E · Model) ================= */
const SCN = [["savings", "Savings (monthly)"], ["c14", "Carbon-14 decay"], ["coffee", "Cooling coffee"], ["pop", "Population"]];
const NS = [[1, "1"], [2, "2"], [4, "4"], [12, "12"], [52, "52"], [365, "365"], [Infinity, "∞"]];
L["a2-exp-models"] = k => {
  MathKit.attach(k);
  const { C, F } = k, MR = k.MR, c = k.canvas();
  let mode = "model", sc = "savings", P = null, tc = 10, snapI = 0; const view = {}, view2 = {};
  const S = {}, pt = { x: 10, y: 0 };
  const hints = { model: "Drag the point along the curve to read the model at any time", compound: "Same rate, more payments: how close does n get to continuous?" };
  const showSc = () => { SCN.forEach(([key]) => (S[key] || []).forEach(el => { el.style.display = mode === "model" && key === sc ? "" : "none"; })); };
  const setMode = md => { mode = md; k.showGroup(md); k.guard([]); k.hint(hints[md]); selW.style.display = md === "model" ? "" : "none"; showSc(); };
  k.modes([["model", "Model"], ["compound", "Compounding"]], mode, setMode);
  const sel = k.select("Scenario", SCN, sc, v => { sc = v; tc = defT(); snapI = 0; showSc(); }), selW = sel.el.parentElement;
  const grab = (key, fn) => { const before = new Set(k.ctl.children); const r = fn(); S[key] = [...k.ctl.children].filter(e => !before.has(e)); return r; };
  let A = { P: 1000, r: 5, P0: 10, T0: 90, Ts: 20, kc: 0.056, N0: 20, rp: 3 };
  grab("savings", () => { k.slider(cl("c1", "principal <i>P</i>"), 100, 10000, 100, A.P, v => A.P = v, v => "$" + v.toLocaleString("en-US")); k.slider(cl("c2", "rate <i>r</i>"), 0.5, 12, 0.25, A.r, v => A.r = v, v => MR.fmtN(v, 2) + "%"); });
  grab("c14", () => { k.slider(cl("c1", "initial mass <i>N</i>₀"), 1, 100, 1, A.P0, v => A.P0 = v, v => v + " mg"); });
  grab("coffee", () => { k.slider(cl("c1", "start <i>T</i>₀"), 50, 100, 1, A.T0, v => A.T0 = v, v => v + " °C"); k.slider("room <i>T</i><sub>s</sub>", 0, 30, 1, A.Ts, v => A.Ts = v, v => v + " °C"); k.slider(cl("c2", "rate <i>k</i>"), 0.01, 0.2, 0.002, A.kc, v => A.kc = v, v => MR.fmtN(v, 3)); });
  grab("pop", () => { k.slider(cl("c1", "start <i>P</i>₀"), 1, 100, 1, A.N0, v => A.N0 = v, v => v + " thousand"); k.slider(cl("c2", "rate <i>r</i>"), 0.5, 8, 0.1, A.rp, v => A.rp = v, v => MR.fmtN(v, 1) + "%"); });
  let CP = { P: 1000, r: 5, t: 10, ni: 3 };
  k.group("compound", () => {
    k.slider(cl("c1", "principal <i>P</i>"), 100, 10000, 100, CP.P, v => CP.P = v, v => "$" + v.toLocaleString("en-US"));
    k.slider(cl("c2", "rate <i>r</i>"), 1, 25, 0.5, CP.r, v => CP.r = v, v => MR.fmtN(v, 1) + "%");
    k.slider(cl("c3", "time <i>t</i>"), 1, 30, 1, CP.t, v => CP.t = v, v => v + " yr");
    k.slider("periods <i>n</i>", 0, NS.length - 1, 1, CP.ni, v => CP.ni = v, v => NS[v][1]);
  });
  // model of the current scenario: {f, t2 (doubling / half time), tmax, unit, yH (formula), ylab, val(v), lin?}
  function model(){
    if (sc === "savings") { const r = A.r / 100, i = 1 + r / 12, t2 = doublingTime(r, 12);
      return { f: t => A.P * Math.pow(i, 12 * t), lin: t => A.P * (1 + r * t), t2, grow: true, tmax: Math.min(60, Math.max(10, 3.3 * t2)), tu: "yr", ylab: "A ($)", val: money, p0: A.P,
        yH: `<i>A</i> = ${cl("c1", A.P.toLocaleString("en-US"))}(1 + ${fr(cl("c2", MR.fmtN(r, 4)), 12)})<sup>12${cl("c3", "<i>t</i>")}</sup>`,
        tH: `${fr("ln 2", `12 ln(1 + ${MR.fmtN(r, 4)}/12)`)}`, what: "doubling time", linLbl: "simple interest P(1 + rt)" }; }
    if (sc === "c14") { const T = 5730;
      return { f: t => A.P0 * Math.pow(0.5, t / T), t2: T, grow: false, tmax: 30000, tu: "yr", ylab: "N (mg)", val: v => MR.fmtN(v, 2) + " mg", p0: A.P0,
        yH: `<i>N</i> = ${cl("c1", A.P0)}(${fr(1, 2)})<sup>${cl("c3", "<i>t</i>")}/5730</sup> = ${A.P0}<i>e</i><sup>${MI}${cl("c2", "0.000121")}<i>t</i></sup>`, tH: "5730", what: "half-life" }; }
    if (sc === "coffee") { const g = A.T0 - A.Ts, t2 = Math.LN2 / A.kc;
      return { f: t => A.Ts + g * Math.exp(-A.kc * t), t2, grow: false, tmax: Math.max(40, Math.min(240, 4.2 * t2)), tu: "min", ylab: "T (°C)", val: v => MR.fmtN(v, 1) + " °C", p0: A.T0, asym: A.Ts, gap: g,
        yH: `<i>T</i> = ${A.Ts} + ${cl("c1", g)}<i>e</i><sup>${MI}${cl("c2", MR.fmtN(A.kc, 3))}${cl("c3", "<i>t</i>")}</sup>`, tH: `${fr("ln 2", MR.fmtN(A.kc, 3))}`, what: "time for the gap to halve" }; }
    const r = A.rp / 100, t2 = Math.LN2 / r;
    return { f: t => A.N0 * Math.exp(r * t), lin: t => A.N0 * (1 + r * t), t2, grow: true, tmax: Math.min(150, Math.max(10, 3.3 * t2)), tu: "yr", ylab: "P (thousands)", val: v => MR.fmtN(v, 2) + " thousand", p0: A.N0,
      yH: `<i>P</i> = ${cl("c1", A.N0)}<i>e</i><sup>${cl("c2", MR.fmtN(r, 3))}${cl("c3", "<i>t</i>")}</sup>`, tH: `${fr("ln 2", MR.fmtN(r, 3))}`, what: "doubling time", linLbl: "linear, same first-year rate" };
  }
  const defT = () => { const M = model(); return Math.round(M.t2 * 0.6 * 100) / 100; };
  k.drag(c, () => (mode === "model" ? P : null), [pt], (i, q) => {
    const M = model(); let t = Math.max(0, Math.min(M.tmax, q.x)); snapI = 0;
    for (let j = 1; j <= 4; j++) if (P && Math.abs(P.X(j * M.t2) - P.X(t)) < 10 && j * M.t2 <= M.tmax) { t = j * M.t2; snapI = j; }
    tc = t; pt.x = t; pt.y = M.f(t);
  });
  tc = defT(); setMode(mode);

  k.loop(dt => {
    c.begin(); const d = c.d, labels = [];
    if (mode === "model") {
      const M = model(); tc = Math.min(tc, M.tmax);
      if (snapI && Math.abs(tc - snapI * M.t2) > 1e-9) snapI = 0;
      const vals = [M.f(0), M.f(M.tmax)].concat(M.lin ? [M.lin(M.tmax)] : []), yhi = Math.max(...vals) * 1.12;
      k.smooth(view, { tmax: M.tmax, yhi, ylo: sc === "coffee" ? 0 : 0 }, dt);
      const pad = { l: view.yhi >= 10000 ? 60 : view.yhi >= 1000 ? 52 : 44, r: 18, t: 16, b: 32 }, pw = c.w - pad.l - pad.r;
      P = k.plane(c, { xmin: 0, xmax: view.tmax, ymin: 0, ymax: view.yhi, pad, xstep: MR.niceStep(view.tmax, Math.max(3, Math.min(8, pw / 70))), ystep: MR.niceStep(view.yhi, c.h < 560 ? 5 : 7), xlabel: `t (${M.tu})`, ylabel: M.ylab });
      P.grid(); P.axes();
      if (M.asym !== undefined) { P.hasym(M.asym); labels.push({ text: `room ${M.asym} °C`, x: view.tmax * 0.8, y: M.asym, color: C.violet, font: `12px ${F.ui}`, prefer: "s" }); }
      if (M.lin) { P.curve(M.lin, k.alpha(C.violet, 0.8), { w: 1.8, dash: [6, 5] }); const a = P.onCurve(M.lin, 0.55); if (a) labels.push({ text: "linear", x: a.x, y: a.y, color: C.violet, font: `12px ${F.ui}`, prefer: "se" }); }
      // doubling / half-life staircase
      for (let j = 1; j <= 4; j++) { const t = j * M.t2; if (t > view.tmax) break; const y = M.f(t), on = snapI === j;
        P.seg(t, 0, t, y, k.alpha(C.green, on ? 0.95 : 0.5), on ? 2 : 1.2, [4, 4]); P.seg(0, y, t, y, k.alpha(C.green, on ? 0.95 : 0.35), on ? 2 : 1, [4, 4]); P.dot(t, y, C.green, on ? 6 : 4);
        if (j <= 2 || on) labels.push({ text: (M.grow ? `×${2 ** j}` : `×1/${2 ** j}`) + (M.gap ? " gap" : ""), x: t, y, color: C.green, font: `12px ${F.mono}`, prefer: M.grow ? "nw" : "ne" }); }
      P.curve(M.f, C.cyan, { w: 3 });
      P.dot(0, M.f(0), C.amber, 6);
      const yv = M.f(tc); pt.x = tc; pt.y = yv;
      P.seg(tc, 0, tc, yv, k.alpha(C.pink, 0.8), 1.5, [3, 3]); P.dot(tc, yv, C.pink, 7);
      labels.push({ text: `t = ${MR.fmtN(tc, sc === "c14" ? 0 : 2)}`, x: tc, y: 0, color: C.pink, font: `12px ${F.mono}`, prefer: "ne" },
        { text: M.val(yv), x: tc, y: yv, color: C.pink, font: `13px ${F.mono}`, prefer: M.grow ? "nw" : "ne" });
      P.labels(labels);
      const ratio = M.gap ? (yv - M.asym) / M.gap : yv / M.p0;
      k.readout({ title: SCN.find(s => s[0] === sc)[1], big: nw(M.yH),
        rows: [{ lhs: `${cl("c3", "<i>t</i>")} = ${MR.fmtN(tc, sc === "c14" ? 0 : 2)} ${M.tu}`, v: M.val(yv), cls: "c3", lbl: M.gap ? `gap to room ${MR.fmtN(yv - M.asym, 1)} °C, ${MR.fmtN(100 * ratio, 1)}% of the start` : `${MR.fmtN(ratio, 3)} × the start${M.lin ? `; linear model ${M.val(M.lin(tc))}` : ""}` },
          { lhs: `${cl("c5", M.what)} = ${M.tH}`, v: `${MR.fmtN(M.t2, sc === "c14" ? 0 : 2)} ${M.tu}`, cls: "c5", lbl: sc === "c14" ? `k = ln 2 / 5730 ≈ 0.000121; age from a fraction p: t = 5730 ln p / ln ½` : "set the factor equal to 2 (or ½) and take ln" }],
        landmark: snapI ? { hit: true, big: `${cl("c5", `${snapI} × ${M.what.split(" ")[0] === "time" ? "halving time" : M.what}`)}: ${M.grow ? "×" + 2 ** snapI : "×1/" + 2 ** snapI}`, note: M.gap ? `The gap to the room is ${MR.fmtN(M.gap / 2 ** snapI, 2)} °C, the start gap divided by ${2 ** snapI}.` : `Exactly ${M.grow ? 2 ** snapI : "1/" + 2 ** snapI} of the start, ${M.val(yv)}, whatever the starting amount.` }
          : { hit: false, big: `drag to a green mark`, note: `Each ${M.what} the ${M.gap ? "gap" : "amount"} ${M.grow ? "doubles" : "halves"}. The point snaps to the marks.` },
        narr: M.lin ? "Raise the rate: the exponential pulls away from the dashed linear model faster." : sc === "c14" ? "Read the age at 30% left: about 9953 years." : "Lower k: the drink cools more slowly, but always toward the room." });
    } else {
      const r = CP.r / 100, Pp = CP.P, T = CP.t, sel = NS[CP.ni][0];
      const top = Pp * Math.exp(r * T) * 1.08; k.smooth(view2, { top }, dt);
      const pad = { l: view2.top >= 10000 ? 60 : 52, r: 18, t: 16, b: 32 }, pw = c.w - pad.l - pad.r;
      P = k.plane(c, { xmin: 0, xmax: T * 1.04, ymin: Pp * 0.9, ymax: view2.top, pad, xstep: MR.niceStep(T, Math.max(3, Math.min(10, pw / 60))), ystep: MR.niceStep(view2.top - Pp * 0.9, c.h < 560 ? 5 : 7), xlabel: "t (yr)", ylabel: "A ($)" });
      P.grid(); P.axes();
      const stair = (n, col, w) => { let y = Pp, t0 = 0; const per = 1 / n, N = Math.round(n * T); if (N > 600) { P.curve(t => (t <= T ? balance(Pp, r, n, t) : NaN), col, { w, to: T }); return; }
        for (let i = 1; i <= N; i++) { const t1 = i * per, y2 = Pp * Math.pow(1 + r / n, i); P.seg(t0, y, t1, y, col, w); P.seg(t1, y, t1, y2, col, w); t0 = t1; y = y2; } };
      const show = [[1, "n = 1"], [12, "n = 12"], [365, "n = 365"], [Infinity, "continuous"]], dim = col => k.alpha(col, 0.35);
      show.forEach(([n]) => { if (n === sel) return; if (n === Infinity) P.curve(t => (t <= T ? Pp * Math.exp(r * t) : NaN), dim(C.text), { w: 1.5, to: T }); else stair(n, dim(C.text), 1.3); });
      if (sel === Infinity) P.curve(t => (t <= T ? Pp * Math.exp(r * t) : NaN), C.cyan, { w: 3, to: T }); else stair(sel, C.cyan, 2.6);
      P.dot(0, Pp, C.amber, 6); const Af = balance(Pp, r, sel, T); P.dot(T, Af, C.cyan, 6);
      labels.push({ text: money(Af), x: T, y: Af, color: C.cyan, font: `13px ${F.mono}`, prefer: "w" }, { text: `n = ${NS[CP.ni][1]}`, x: T * 0.55, y: balance(Pp, r, sel, T * 0.55), color: C.cyan, font: `13px ${F.mono}`, prefer: "nw" });
      P.labels(labels);
      const rows = show.map(([n, t]) => ({ lhs: n === sel ? cl("c2", t) : t, v: money(balance(Pp, r, n, T)), cls: n === sel ? "c2" : "", lbl: `APY ${MR.fmtN(100 * apy(r, n), 3)}%, doubles in ${MR.fmtN(doublingTime(r, n), 2)} yr` }));
      if (!show.some(s => s[0] === sel)) rows.splice(2, 0, { lhs: cl("c2", `n = ${NS[CP.ni][1]}`), v: money(Af), cls: "c2", lbl: `APY ${MR.fmtN(100 * apy(r, sel), 3)}%` });
      const gap = Pp * Math.exp(r * T) - balance(Pp, r, 365, T);
      k.readout({ title: "Compounding", big: nwS(sel === Infinity ? `<i>A</i> = ${cl("c1", Pp.toLocaleString("en-US"))}<i>e</i><sup>${cl("c2", MR.fmtN(r, 3))} · ${cl("c3", T)}</sup>` : `<i>A</i> = ${cl("c1", Pp.toLocaleString("en-US"))}(1 + ${fr(cl("c2", MR.fmtN(r, 3)), sel)})<sup>${sel} · ${cl("c3", T)}</sup>`),
        rows,
        landmark: sel === Infinity ? { hit: true, big: `n → ∞: <i>Pe</i><sup><i>rt</i></sup> = ${money(Pp * Math.exp(r * T))}`, note: `Continuous compounding is the ceiling. Daily compounding is only ${money(gap)} behind it.` }
          : { hit: false, big: `n = ${NS[CP.ni][1]}: ${money(Af)}`, note: "More payments a year earn a little more each time, with smaller and smaller gains." },
        narr: "Slide n up to ∞. Then raise the rate: the gaps between the rows grow." });
    }
  });
};
})();
