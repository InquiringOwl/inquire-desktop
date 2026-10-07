/* ============ Labs: Algebra II, batch B1 (transformations, function operations, inverses) ============ */
(function(){
const L = window.LABS;
const MI = "−";

/* ---------- DOM-free helpers: sameGraph and the exact real sets RS now live in MathRules (web/kits/subjects/math.js) ---------- */
const sameGraph = (f, g, lo, hi, n) => window.MathRules.sameGraph(f, g, lo, hi, n);
const RS = window.MathRules.RS;
/* Function family for operations and composition: {kind, p} with kind lin1 = x + p, lin2 = 2x + p, quad = x² + p,
   sqrt = √(x + p), recip = 1/(x + p). Exact domains (RS sets) of f, f∘g and of g(x) ≥ c / g(x) ≠ c. */
const FAM = (() => {
  const R = () => window.MathRules;
  const fn = ({ kind, p }) => kind === "lin1" ? x => x + p : kind === "lin2" ? x => 2 * x + p : kind === "quad" ? x => x * x + p
    : kind === "sqrt" ? x => (x + p >= 0 ? Math.sqrt(x + p) : NaN) : x => (x + p === 0 ? NaN : 1 / (x + p));
  const poly = ({ kind, p }) => kind === "lin1" ? [p, 1] : kind === "lin2" ? [p, 2] : kind === "quad" ? [p, 0, 1] : null;
  const dom = ({ kind, p }) => kind === "sqrt" ? RS.ge(RS.ep(-p)) : kind === "recip" ? RS.ne(RS.ep(-p)) : RS.ALL();
  // {x in dom g : g(x) ≥ c} (ge) or {x in dom g : g(x) ≠ c} (ne), c an integer
  function pre(g, ge, c){
    const Q = R().Q, q = g.p; let S;
    if (g.kind === "lin1" || g.kind === "lin2") { const e = RS.ep(Q(c - q, g.kind === "lin1" ? 1 : 2)); S = ge ? RS.ge(e) : RS.ne(e); }
    else if (g.kind === "quad") { const s = c - q;
      if (ge) S = s <= 0 ? RS.ALL() : [{ lo: null, hi: RS.root(s, -1), hc: true }, { lo: RS.root(s, 1), hi: null, lc: true }];
      else S = s < 0 ? RS.ALL() : s === 0 ? RS.ne(RS.ep(0)) : RS.ne(RS.root(s, -1), RS.root(s, 1)); }
    else if (g.kind === "sqrt") S = ge ? (c <= 0 ? RS.ALL() : RS.ge(RS.ep(c * c - q))) : (c < 0 ? RS.ALL() : RS.ne(RS.ep(c * c - q)));
    else { const b = RS.ep(-q);
      if (ge) S = c === 0 ? RS.ge(b, true) : c > 0 ? [{ lo: b, hi: RS.ep(Q.sub(Q(1, c), q)), lc: false, hc: true }] : [{ lo: null, hi: RS.ep(Q.sub(Q(1, c), q)), hc: true }, { lo: b, hi: null, lc: false }];
      else S = c === 0 ? RS.ALL() : RS.ne(RS.ep(Q.sub(Q(1, c), q))); }
    return RS.and(dom(g), S);
  }
  const domComp = (f, g) => (f.kind === "sqrt" ? pre(g, true, -f.p) : f.kind === "recip" ? pre(g, false, -f.p) : dom(g));
  const domOp = (f, g, op) => { const D = RS.and(dom(f), dom(g)); return op === "÷" ? RS.and(D, pre(g, false, 0)) : D; };
  // exact value at a rational x (Q), or null when undefined or irrational
  function exact({ kind, p }, x){
    const Q = R().Q; x = Q(x);
    if (kind === "lin1") return Q.add(x, p); if (kind === "lin2") return Q.add(Q.mul(2, x), p); if (kind === "quad") return Q.add(Q.mul(x, x), p);
    const u = Q.add(x, p);
    if (kind === "recip") return u.n === 0 ? null : Q.inv(u);
    if (u.n < 0) return null; const rn = Math.round(Math.sqrt(u.n)), rd = Math.round(Math.sqrt(u.d));
    return rn * rn === u.n && rd * rd === u.d ? Q(rn, rd) : null;
  }
  return { fn, poly, dom, pre, domComp, domOp, exact };
})();

/* ---------- shared drawing helpers ---------- */
// Steps panel beside (wide) or below (narrow) the graph; returns the plot padding to leave for it.
function split(c, dom, on){
  if (!on) { if (dom.style.display !== "none") { dom.style.display = "none"; dom.__css = ""; } return { r: 16, b: 30 }; }
  const wide = c.w >= 640, sw = Math.round(c.w * 0.44), sh = Math.round(c.h * 0.44);
  const css = wide ? `display:block;left:auto;right:0;top:0;bottom:0;width:${sw}px;padding:58px 14px 14px 4px` : `display:block;top:auto;left:0;right:0;bottom:0;height:${sh}px;padding:6px 10px 10px`;
  if (dom.__css !== css) { dom.style.cssText = css; dom.__css = css; }
  return wide ? { r: sw + 8, b: 30 } : { r: 14, b: sh + 24 };
}
// A point of y = f(x) inside the window, searched outward from the fraction `at` of [lo, hi].
function onCurve(P, f, at = 0.85, lo = -Infinity, hi = Infinity){
  lo = Math.max(lo, P.xmin); hi = Math.min(hi, P.xmax); const my = (P.ymax - P.ymin) * 0.08;
  for (let i = 0; i <= 60; i++) { const s = (i % 2 ? -1 : 1) * Math.ceil(i / 2) / 60, x = lo + (hi - lo) * Math.min(1, Math.max(0, at + s)), y = f(x);
    if (isFinite(y) && y > P.ymin + my && y < P.ymax - my) return { x, y }; }
  return null;
}
// Keep P.labels clear of the axis tick labels and axis names drawn by P.axes().
function axisBoxes(P, sx, sy){
  const ax = Math.min(Math.max(0, P.ymin), P.ymax), ay = Math.min(Math.max(0, P.xmin), P.xmax), Y0 = P.Y(ax), X0 = P.X(ay);
  for (let x = Math.ceil(P.xmin / sx - 1e-9) * sx; x <= P.xmax + 1e-9; x += sx) if (Math.abs(x) > 1e-9) P.boxes.push({ x: P.X(x) - 10, y: Math.min(P.top + P.height + 16, Y0 + 16) - 12, w: 20, h: 15 });
  for (let y = Math.ceil(P.ymin / sy - 1e-9) * sy; y <= P.ymax + 1e-9; y += sy) if (Math.abs(y) > 1e-9) P.boxes.push({ x: Math.max(P.left - 6, X0 - 7) - 20, y: P.Y(y) - 8, w: 21, h: 16 });
  P.boxes.push({ x: P.left + P.width - 14, y: Y0 - 26, w: 14, h: 20 }, { x: X0 + 6, y: P.top - 2, w: 14, h: 20 });
}
const nowrap = s => `<span style="white-space:nowrap;font-size:25px">${s}</span>`;
const inWin = (P, x, y) => isFinite(x) && isFinite(y) && x >= P.xmin && x <= P.xmax && y >= P.ymin && y <= P.ymax;
// Arrow in math coordinates: clipped segment (recorded for label avoidance) + head when the end is visible.
function arrowM(k, c, P, x1, y1, x2, y2, color, w = 2){
  P.seg(x1, y1, x2, y2, color, w);
  if (!inWin(P, x2, y2)) return;
  const X1 = P.X(x1), Y1 = P.Y(y1), X2 = P.X(x2), Y2 = P.Y(y2), L0 = Math.hypot(X2 - X1, Y2 - Y1); if (L0 < 10) return;
  c.d.arrow(X2 - (X2 - X1) / L0 * 2, Y2 - (Y2 - Y1) / L0 * 2, X2, Y2, color, w);
}
const ixh = "<i>x</i>";
const ol = s => `√<span class="mk-ol">${s}</span>`;
const frH = (a, b) => `<span class="fr"><span>${a}</span><span>${b}</span></span>`;
const plusH = (s, p) => (p === 0 ? s : `${s} ${p < 0 ? "−" : "+"} ${Math.abs(p)}`);

/* ================= Transformations of functions (A · Transform) ================= */
const PARENTS = {
  sqrt: { t: "√x", f: x => (x >= 0 ? Math.sqrt(x) : NaN), keys: [[0, 0], [1, 1], [4, 2]], rad: "√" },
  sq: { t: "x²", f: x => x * x, keys: [[-1, 1], [0, 0], [1, 1]] },
  abs: { t: "|x|", f: Math.abs, keys: [[-1, 1], [0, 0], [1, 1]] },
  cube: { t: "x³", f: x => x * x * x, keys: [[-1, -1], [0, 0], [1, 1]] },
  cbrt: { t: "∛x", f: Math.cbrt, keys: [[-1, -1], [0, 0], [1, 1]], rad: "∛" },
  rec: { t: "1/x", f: x => (x === 0 ? NaN : 1 / x), keys: [[-1, -1], [1, 1], [2, 0.5]], asym: true },
  x: { t: "x", f: x => x, keys: [[-1, -1], [0, 0], [1, 1]] }
};
L["a2-transformations"] = k => {
  MathKit.attach(k);
  const { C, F } = k, MR = k.MR, Q = MR.Q, c = k.canvas(), dom = k.dom(); dom.style.display = "none";
  const SP = k.stepsPanel(dom);
  const AV = [-3, -2, -1.5, -1, -0.5, 0.5, 1, 1.5, 2, 3], BV = [-4, -3, -2, -1, -0.5, 0.5, 1, 2, 3, 4];
  const ID = { a: 1, b: 1, h: 0, k: 0 };
  let mode = "explore", pk = "sqrt", T = { a: -1, b: -2, h: 4, k: 3 }, tgt = null, st = null, stage = 0, P = null;
  const qh = q => RS.qh(Q(q)), qt = q => MR.qT(Q(q));
  const cf = a => (a === 1 ? "" : a === -1 ? MI : qh(a));
  // HTML of a·f(b(x − h)) + k
  function tH(key, S){
    const { a, b, h } = S, core = h === 0 ? ixh : plusH(ixh, -h);
    const inner = b === 1 ? core : b === -1 ? (h === 0 ? `${MI}${ixh}` : `${MI}(${core})`) : `${qh(b)}${h === 0 ? ixh : `(${core})`}`;
    const bare = inner === ixh; let body;
    if (key === "x") body = a === 1 ? inner : `${cf(a)}${bare ? ixh : `(${inner})`}`;
    else if (key === "sq" || key === "cube") body = `${cf(a)}${bare ? ixh : `(${inner})`}<sup>${key === "sq" ? 2 : 3}</sup>`;
    else if (key === "abs") body = `${cf(a)}|${inner}|`;
    else if (key === "sqrt" || key === "cbrt") body = `${cf(a)}${PARENTS[key].rad}<span class="mk-ol">${inner}</span>`;
    else body = Number.isInteger(a) ? `${a < 0 ? MI : ""}${frH(Math.abs(a), inner)}` : `${qh(a)} · ${frH(1, inner)}`;
    return S.k === 0 ? body : `${body} ${S.k < 0 ? "−" : "+"} ${Math.abs(S.k)}`;
  }
  const img = ([x, y], S) => [Q.add(Q.div(Q(x), Q(S.b)), Q(S.h)), Q.add(Q.mul(Q(S.a), Q(y)), Q(S.k))];
  const ptT = ([x, y]) => `(${qt(x)}, ${qt(y)})`;
  function domRange(key, S){
    const H = MR.sg(S.h), K = MR.sg(S.k), R = `(${MI}∞, ∞)`, up = `[${K}, ∞)`, dn = `(${MI}∞, ${K}]`;
    if (key === "sqrt") return [S.b > 0 ? `[${H}, ∞)` : `(${MI}∞, ${H}]`, S.a > 0 ? up : dn];
    if (key === "sq" || key === "abs") return [R, S.a > 0 ? up : dn];
    if (key === "rec") return [`(${MI}∞, ${H}) ∪ (${H}, ∞)`, `(${MI}∞, ${K}) ∪ (${K}, ∞)`];
    return [R, R];
  }
  function draw(key, S, color, o = {}){
    const f = MR.transform(PARENTS[key].f, S);
    const from = key === "sqrt" && S.b > 0 ? Math.max(S.h, P.xmin) : P.xmin, to = key === "sqrt" && S.b < 0 ? Math.min(S.h, P.xmax) : P.xmax;
    if (to > from) P.curve(f, color, { from, to, breaks: PARENTS[key].asym ? [S.h] : [], dash: o.dash, w: o.w });
    return f;
  }
  function newTarget(){
    const pick = a => a[Math.floor(Math.random() * a.length)], g = MR.transform(PARENTS[pk].f, T);
    for (let i = 0; i < 200; i++) {
      const t = { a: pick([-2, -1, -0.5, 0.5, 2, 3]), b: pick(pk === "x" ? [1] : [-1, 1, 1, 2, 0.5]), h: pick([-4, -3, -2, -1, 1, 2, 3, 4]), k: pick([-3, -2, -1, 0, 1, 2, 3]) };
      if (!sameGraph(MR.transform(PARENTS[pk].f, t), g, -7, 7)) { tgt = t; break; }
    }
    k.guard([`a = ${MR.fmtN(tgt.a)}`, `b = ${MR.fmtN(tgt.b)}`, `h = ${MR.sg(tgt.h)}`, `k = ${MR.sg(tgt.k)}`]);
  }
  function build(){
    if (st) st.pause(); st = null; k.ctl.innerHTML = "";
    k.select("Parent", Object.entries(PARENTS).map(([key, p]) => [key, "f(x) = " + p.t]), pk, v => { pk = v; if (mode === "match") newTarget(); });
    k.slider(`<span class="c3"><i>a</i></span>`, 0, AV.length - 1, 1, AV.indexOf(T.a), v => T.a = AV[v], v => MR.fmtN(AV[v]));
    k.slider(`<span class="c4"><i>b</i></span>`, 0, BV.length - 1, 1, BV.indexOf(T.b), v => T.b = BV[v], v => MR.fmtN(BV[v]));
    k.slider(`<span class="c1"><i>h</i></span>`, -5, 5, 1, T.h, v => T.h = v, v => MR.sg(v));
    k.slider(`<span class="c2"><i>k</i></span>`, -4, 4, 1, T.k, v => T.k = v, v => MR.sg(v));
    if (mode === "match") { k.button("New target", newTarget, "btn"); newTarget(); }
    else k.guard([]);
    if (mode === "order") { stage = 0; st = k.stepper(() => 4, v => stage = v, { ms: 1300 }); }
  }
  k.modes([["explore", "Explore"], ["match", "Match"], ["order", "Order"]], mode, m => { mode = m; build(); });
  build();

  k.loop(() => {
    c.begin(); const d = c.d, par = PARENTS[pk], lay = split(c, dom, mode === "order");
    const xs = c.w - lay.r < 420 ? 2 : 1, ys = c.h - lay.b < 360 ? 2 : 1;
    P = k.plane(c, { xmin: -7, xmax: 7, ymin: -6, ymax: 6, xstep: xs, ystep: ys, xlabel: "x", ylabel: "y", pad: { l: 30, r: lay.r, t: 16, b: lay.b } });
    P.grid(); P.axes(); axisBoxes(P, xs, ys);
    const S = mode === "order" ? [ID, { ...ID, b: T.b }, { ...ID, b: T.b, h: T.h }, { ...T, k: 0 }, T][stage] : T;
    const prev = mode === "order" && stage > 0 ? [ID, { ...ID, b: T.b }, { ...ID, b: T.b, h: T.h }, { ...T, k: 0 }][stage - 1] : ID;
    if (par.asym) { P.vasym(S.h, k.alpha(C.text, 0.3)); P.hasym(S.k, k.alpha(C.text, 0.3)); }
    let tf = null;
    if (mode === "match" && tgt) tf = draw(pk, tgt, k.alpha(C.pink, 0.28), { w: 10 });
    const f0 = draw(pk, ID, C.green, { dash: [6, 5], w: 2 });
    if (mode === "order" && stage > 1) draw(pk, prev, k.alpha(C.text, 0.45), { dash: [3, 4], w: 1.5 });
    const g = draw(pk, S, C.text, { w: 3 });
    const labels = [];
    if (mode !== "match") par.keys.forEach(pt => {
      const [X, Y] = img(pt, S), [x0, y0] = img(pt, prev), xv = Q.val(X), yv = Q.val(Y);
      if (inWin(P, Q.val(x0), Q.val(y0)) && inWin(P, xv, yv) && (Q.val(x0) !== xv || Q.val(y0) !== yv)) arrowM(k, c, P, Q.val(x0), Q.val(y0), xv, yv, k.alpha(C.text, 0.4), 1.4);
      P.dot(pt[0], pt[1], C.green, 4); P.dot(xv, yv, C.text, 5.5);
      labels.push({ text: ptT([X, Y]), x: xv, y: yv, color: C.text, font: `12px ${F.mono}` });
    });
    // h and k markers on the axes
    P.seg(S.h, -0.3, S.h, 0.3, C.amber, 3); P.seg(-0.3, S.k, 0.3, S.k, C.cyan, 3);
    labels.push({ text: "h", x: S.h, y: 0, color: C.amber, font: `italic 15px ${F.math}`, prefer: "s" }, { text: "k", x: 0, y: S.k, color: C.cyan, font: `italic 15px ${F.math}`, prefer: "w" });
    const a0 = onCurve(P, f0, 0.82), a1 = onCurve(P, g, 0.18);
    if (a0) labels.push({ text: "f(x) = " + par.t, x: a0.x, y: a0.y, color: C.green, font: `italic 14px ${F.math}` });
    if (a1) labels.push({ text: "g", x: a1.x, y: a1.y, color: C.text, font: `italic 16px ${F.math}` });
    if (tf) { const at = onCurve(P, tf, 0.6); if (at) labels.push({ text: "target", x: at.x, y: at.y, color: C.pink, font: `12px ${F.ui}` }); }
    P.labels(labels);

    const [Dm, Rg] = domRange(pk, S);
    const keyRows = par.keys.map(pt => ({ lhs: `${ptT(pt)} → ${ptT(img(pt, S))}`, lbl: "" }));
    if (mode === "explore") {
      const a2 = g(T.h + 1) - T.k, alt = MR.transform(par.f, { a: a2, b: 1, h: T.h, k: T.k });
      const eqv = T.b !== 1 && isFinite(a2) && sameGraph(g, alt, -7, 7);
      const ratA = Math.abs(a2 * 12 - Math.round(a2 * 12)) < 1e-9, a2H = ratA ? qh(Math.round(a2 * 12) / 12) : `${a2 < 0 ? MI : ""}${Math.abs(T.a) === 1 ? "" : qh(Math.abs(T.a))}${par.rad || "√"}<span class="mk-ol">${MR.fmtN(Math.abs(T.b))}</span>`;
      const note = !eqv ? "" : pk === "x" ? "For a line, every horizontal stretch is also a vertical one: a·b(x − h) + k has slope ab."
        : T.b === -1 && Math.abs(a2 - T.a) < 1e-9 ? "The parent is symmetric about the y-axis, so reflecting it in the y-axis changes nothing."
        : T.b === -1 ? "The parent is odd, f(−x) = −f(x): reflecting in the y-axis looks the same as reflecting in the x-axis."
        : ratA ? `A horizontal change and a vertical change give the same graph: ${tH(pk, T)} = ${tH(pk, { ...T, b: 1, a: a2 })}.`
        : `${par.rad}(${MR.fmtN(T.b)}x) = ${par.rad}${MR.fmtN(T.b)} · ${par.rad}x, so this horizontal compression is a vertical stretch in disguise.`;
      k.readout({ title: "Transform the parent", big: `<i>g</i>(<i>x</i>) = ${tH(pk, T)}`,
        rows: [...keyRows, { lhs: "domain", v: Dm, cls: "c1" }, { lhs: "range", v: Rg, cls: "c2" }],
        landmark: eqv ? { hit: true, big: `<span class="c4"><i>b</i> = ${MR.fmtN(T.b)}</span> acts like <span class="c3"><i>a</i> = ${a2H}</span>`, note }
          : { hit: false, big: `(<i>x</i>, <i>y</i>) → (<i>x</i>/<span class="c4"><i>b</i></span> + <span class="c1"><i>h</i></span>, <span class="c3"><i>a</i></span><i>y</i> + <span class="c2"><i>k</i></span>)`, note: "Inside changes (b, h) act on x and look backwards; outside changes (a, k) act on y and do what they look like." },
        narr: "Try b = −1 on x², or b = 4 with a = 0.5 on √x: some changes cancel. Then try Match." });
    } else if (mode === "match") {
      let sum = 0, n = 0, miss = 0;
      for (let i = 0; i <= 140; i++) { const x = -7 + i / 10, u = g(x), v = tf(x); if (isFinite(u) !== isFinite(v)) miss++; else if (isFinite(u)) { sum += Math.min(6, Math.abs(u - v)); n++; } }
      const ok = sameGraph(g, tf, -7, 7), err = (n ? sum / n : 6) + miss * 0.05;
      const near = ok ? "matched" : err < 0.35 ? "very close" : err < 1.2 ? "getting close" : "far";
      k.readout({ title: "Match the target", big: `<i>g</i>(<i>x</i>) = ${tH(pk, T)}`,
        rows: [{ lhs: "closeness", v: near, cls: ok ? "c5" : "" }, { lhs: "domain", v: Dm, cls: "c1" }, { lhs: "range", v: Rg, cls: "c2" }],
        landmark: ok ? { hit: true, big: `Matched: <span class="c3"><i>a</i> = ${MR.fmtN(T.a)}</span>, <span class="c4"><i>b</i> = ${MR.fmtN(T.b)}</span>, <span class="c1"><i>h</i> = ${MR.sg(T.h)}</span>, <span class="c2"><i>k</i> = ${MR.sg(T.k)}</span>`, note: "Your graph lies on the target everywhere in the window." }
          : { hit: false, big: "Line up one landmark first", note: "Find the target's vertex, endpoint or centre to fix h and k, then use the steepness and direction for a and b." },
        narr: "New target picks another curve for the same parent. Change the parent for a new family." });
    } else {
      const why = [
        `Start from the parent and its key points.`,
        T.b === 1 ? `<i>b</i> = 1: no horizontal change.` : `The input ${MR.fmtN(T.b)}<i>x</i> reaches an old input when <i>x</i> is divided by ${MR.fmtN(T.b)}${Math.abs(T.b) > 1 ? ": a compression" : ": a stretch"}${T.b < 0 ? ", with a reflection in the y-axis" : ""}.`,
        T.h === 0 ? `<i>h</i> = 0: no horizontal shift.` : `<i>x</i> − ${MR.sg(T.h)} must equal the old input, so every point moves ${T.h > 0 ? "right" : "left"} ${Math.abs(T.h)}. The sign inside looks backwards.`,
        T.a === 1 ? `<i>a</i> = 1: heights unchanged.` : `Every <i>y</i> is multiplied by ${MR.fmtN(T.a)}${T.a < 0 ? ", which also reflects in the x-axis" : ""}.`,
        T.k === 0 ? `<i>k</i> = 0: no vertical shift.` : `Every <i>y</i> ${T.k > 0 ? "increases" : "decreases"} by ${Math.abs(T.k)}.`
      ];
      const tags = ["parent", "b", "h", "a", "k"], stages = [ID, { ...ID, b: T.b }, { ...ID, b: T.b, h: T.h }, { ...T, k: 0 }, T];
      SP.set(stages.map((s, i) => ({ tag: tags[i], eq: `<i>y</i> = ${tH(pk, s)}`, why: why[i] })), stage);
      const horiz = (stage === 1 && T.b !== 1) || (stage === 2 && T.h !== 0);
      k.readout({ title: "One move at a time", big: `<i>y</i> = ${tH(pk, S)}`, rows: keyRows,
        landmark: { hit: horiz, big: stage === 2 ? `<i>x</i> − <span class="c1"><i>h</i></span> = 0 at <i>x</i> = <span class="c1"><i>h</i></span>` : `<i>x</i> → <i>x</i>/<span class="c4"><i>b</i></span>`, note: horiz ? "Inside moves act on the input, so they undo what they look like: subtracting h moves right, multiplying by b squeezes." : "Order: b, then h inside; a, then k outside." },
        narr: "Press Step to apply the moves in order. Change a slider to plan a different chain." });
    }
  });
};

/* ================= Function operations & composition (C + graph) ================= */
const KINDS = [["lin1", "x + p"], ["lin2", "2x + p"], ["quad", "x² + p"], ["sqrt", "√(x + p)"], ["recip", "1/(x + p)"]];
L["a2-func-ops"] = k => {
  MathKit.attach(k);
  const { C, F } = k, MR = k.MR, Q = MR.Q, c = k.canvas(), dom = k.dom(); dom.style.display = "none";
  const SP = k.stepsPanel(dom);
  let mode = "combine", Fn = { kind: "sqrt", p: -1 }, Gn = { kind: "quad", p: -4 }, op = "+", gf = false, P = null, st = null, cur = 0;
  let prob = { f: { kind: "sqrt", p: -1 }, g: { kind: "quad", p: -4 }, a: 3 };
  const X0 = { x: 3, y: 0, fixY: true, snap: 0.25 };
  k.drag(c, () => (mode === "steps" ? null : P), [X0]);
  // HTML of the function `kind, p` applied to an inner expression u = {h, plain, num, sum, frac, rad}
  function fH(f, u = { h: ixh, plain: true }){
    const { kind, p } = f;
    if (kind === "lin1") return plusH(u.h, p);
    if (kind === "lin2") return plusH(u.plain ? `2${u.h}` : u.rad ? `2${u.h}` : u.num || u.frac ? `2 · ${u.h}` : `2(${u.h})`, p);
    if (kind === "quad") return plusH(u.plain ? `${u.h}<sup>2</sup>` : `(${u.h})<sup>2</sup>`, p);
    if (kind === "sqrt") return ol(plusH(u.h, p));
    return frH(1, plusH(u.h, p));
  }
  const innerOf = g => ({ h: fH(g), sum: g.p !== 0 && g.kind !== "sqrt" && g.kind !== "recip", frac: g.kind === "recip", rad: g.kind === "sqrt", plain: g.kind === "lin1" && g.p === 0 });
  const numU = a => ({ h: a < 0 ? `(${MR.sg(a)})` : String(a), num: true, plain: a >= 0 });
  // simplified (f∘g)(x)
  function compH(f, g){
    const pf = FAM.poly(f), pg = FAM.poly(g);
    if (pf && pg) return MR.polyH(MR.Poly.compose(MR.Poly(pf), MR.Poly(pg)));
    if (f.kind === "quad" && g.kind === "sqrt") return MR.polyH(MR.Poly([g.p + f.p, 1]));
    if (f.kind === "recip" && g.kind === "recip") { const den = MR.Poly([1 + f.p * g.p, f.p]), num = MR.polyH(MR.Poly([g.p, 1])); return MR.Poly.deg(den) === 0 && Q.eq(den[0], 1) ? num : frH(num, MR.polyH(den)); }
    if ((f.kind === "lin1" || f.kind === "lin2") && g.kind === "recip") { const m = f.kind === "lin1" ? 1 : 2; return frH(MR.polyH(MR.Poly([m + f.p * g.p, f.p])), plusH(ixh, g.p)); }
    if ((f.kind === "sqrt" || f.kind === "recip") && pg) { const s = MR.polyH(MR.Poly.add(MR.Poly(pg), MR.Poly([f.p]))); return f.kind === "sqrt" ? ol(s) : frH(1, s); }
    return fH(f, innerOf(g));
  }
  function opH(f, g, o){
    const pf = FAM.poly(f), pg = FAM.poly(g), A = fH(f), B = fH(g), wrap = (s, fn) => (FAM.poly(fn) && fn.p !== 0 ? `(${s})` : s);
    if (o === "÷") return frH(A, B);
    if (pf && pg) { const a = MR.Poly(pf), b = MR.Poly(pg); return MR.polyH(o === "+" ? MR.Poly.add(a, b) : o === "−" ? MR.Poly.sub(a, b) : MR.Poly.mul(a, b)); }
    if (o === "+") return `${A} + ${B}`; if (o === "−") return `${A} − ${wrap(B, g)}`;
    return `${wrap(A, f)}${f.kind === "recip" || g.kind === "recip" ? " · " : ""}${wrap(B, g)}`;
  }
  const valH = (f, x) => { const e = FAM.exact(f, Q(x)); if (e) return RS.qh(e); const u = Q.add(Q(x), f.p);
    if (f.kind === "sqrt" && u.d === 1 && u.n > 0) { const [m, r] = MR.sqrtParts(u.n); return `${m > 1 ? m : ""}${ol(r)}`; } const v = FAM.fn(f)(x); return isFinite(v) ? "≈ " + MR.fmtN(v, 3) : "undefined"; };
  const opFn = (a, b, o) => (o === "+" ? a + b : o === "−" ? a - b : o === "·" ? a * b : b === 0 ? NaN : a / b);
  const opQ = (a, b, o) => (o === "+" ? Q.add(a, b) : o === "−" ? Q.sub(a, b) : o === "·" ? Q.mul(a, b) : b.n === 0 ? null : Q.div(a, b));
  function newProblem(first){
    if (first) { prob = { f: { kind: "sqrt", p: -1 }, g: { kind: "quad", p: -4 }, a: 3 }; }
    else for (let i = 0; i < 4000; i++) {
      const r = n => Math.floor(Math.random() * n), ks = KINDS.map(q => q[0]);
      const f = { kind: ks[r(5)], p: r(9) - 4 }, g = { kind: ks[r(5)], p: r(9) - 4 }, a = r(9) - 3;
      if (f.kind === g.kind || (FAM.poly(f) && FAM.poly(g) && Math.random() < 0.6)) continue;
      const u = FAM.exact(g, Q(a)); if (!u || !RS.has(FAM.domComp(f, g), a)) continue;
      const v = FAM.exact(f, u); if (!v || u.d !== 1 || v.d !== 1) continue;
      prob = { f, g, a }; break;
    }
    const u = FAM.exact(prob.g, Q(prob.a)), v = FAM.exact(prob.f, u);
    k.guard([`(f ∘ g)(${MR.sg(prob.a)}) = f(${MR.qT(u)}) = ${MR.qT(v)}`]);
    cur = 0; if (st) st.reset();
  }
  function build(){
    if (st) st.pause(); st = null; k.ctl.innerHTML = "";
    if (mode === "steps") { k.button("New problem", () => newProblem(false), "btn"); st = k.stepper(() => 4, v => cur = v, { ms: 1400 }); newProblem(true); return; }
    k.select(`<span class="c1"><i>f</i>(<i>x</i>)</span>`, KINDS, Fn.kind, v => Fn.kind = v);
    k.slider(`<span class="c1"><i>p</i></span>`, -4, 4, 1, Fn.p, v => Fn.p = v, v => MR.sg(v));
    k.select(`<span class="c2"><i>g</i>(<i>x</i>)</span>`, KINDS, Gn.kind, v => Gn.kind = v);
    k.slider(`<span class="c2"><i>q</i></span>`, -4, 4, 1, Gn.p, v => Gn.p = v, v => MR.sg(v));
    if (mode === "combine") k.select("Operation", [["+", "f + g"], ["−", "f − g"], ["·", "f · g"], ["÷", "f ÷ g"]], op, v => op = v);
    else k.check("show g ∘ f", gf, v => gf = v);
    k.guard([]);
  }
  k.modes([["combine", "Combine"], ["compose", "Compose"], ["steps", "Steps"]], mode, m => { mode = m; build(); });
  build();
  // violet bands on the x-axis over a set D
  const band = D => D.forEach(p => { const a = p.lo ? Math.max(p.lo.v, P.xmin) : P.xmin, b = p.hi ? Math.min(p.hi.v, P.xmax) : P.xmax; if (b >= a) { P.line(a, 0, b, 0, k.alpha(C.violet, 0.75), 5); if (p.lo && p.lo.v >= P.xmin) c.d.circle(P.X(p.lo.v), P.Y(0), 4, p.lc ? C.violet : C.ink, C.violet, 2); if (p.hi && p.hi.v <= P.xmax) c.d.circle(P.X(p.hi.v), P.Y(0), 4, p.hc ? C.violet : C.ink, C.violet, 2); } });
  const brk = f => (f.kind === "recip" ? [-f.p] : []);
  const curveF = (f, color, o = {}) => { const fn = FAM.fn(f); P.curve(fn, color, { breaks: brk(f), w: o.w, dash: o.dash, from: f.kind === "sqrt" ? Math.max(P.xmin, -f.p) : undefined }); return fn; };

  k.loop(() => {
    c.begin(); const d = c.d, lay = split(c, dom, mode === "steps");
    const f = mode === "steps" ? prob.f : Fn, g = mode === "steps" ? prob.g : Gn, ff = FAM.fn(f), gg = FAM.fn(g);
    const xs = c.w - lay.r < 420 ? 2 : 1, ys = c.h - lay.b < 360 ? 2 : 1;
    P = k.plane(c, { xmin: -6, xmax: 6, ymin: -6, ymax: 6, xstep: xs, ystep: ys, xlabel: "x", ylabel: "y", pad: { l: 30, r: lay.r, t: 16, b: lay.b } });
    P.grid(); P.axes(); axisBoxes(P, xs, ys);
    const labels = [], lab = (fn, at, text, color) => { const q = onCurve(P, fn, at); if (q) labels.push({ text, x: q.x, y: q.y, color, font: `italic 15px ${F.math}` }); };
    if (mode === "combine") {
      const D = FAM.domOp(f, g, op), r = x => (RS.has(D, x) ? opFn(ff(x), gg(x), op) : NaN);
      band(D); curveF(f, C.amber, { w: 2 }); curveF(g, C.cyan, { w: 2 });
      const bk = [...brk(f), ...brk(g)]; if (op === "÷") FAM.pre(g, false, 0).forEach(p => { if (p.hi) bk.push(p.hi.v); });
      P.curve(r, C.pink, { w: 3.2, breaks: bk });
      const x0 = X0.x, a = ff(x0), b = gg(x0), y = r(x0);
      P.line(x0, P.ymin, x0, P.ymax, k.alpha(C.text, 0.25), 1, [3, 4]);
      if (isFinite(a)) P.seg(x0, 0, x0, a, C.amber, 4);
      if (isFinite(b)) { if (op === "+" || op === "−") { if (isFinite(a)) P.seg(x0, a, x0, op === "+" ? a + b : a - b, C.cyan, 4); } else P.seg(x0 + 0.12, 0, x0 + 0.12, b, C.cyan, 4); }
      if (isFinite(y)) P.dot(x0, y, C.pink, 6);
      d.circle(P.X(x0), P.Y(0), 7, C.text, C.ink, 2);
      lab(ff, 0.9, "f", C.amber); lab(gg, 0.1, "g", C.cyan); lab(r, 0.7, `f ${op} g`, C.pink);
      P.labels(labels);
      const inD = RS.has(D, x0), why = !RS.has(FAM.dom(f), x0) ? `f is undefined at ${MR.fmtN(x0)}.` : !RS.has(FAM.dom(g), x0) ? `g is undefined at ${MR.fmtN(x0)}.` : `g(${MR.fmtN(x0)}) = 0, and division by zero is undefined.`;
      const ea = FAM.exact(f, Q(x0)), eb = FAM.exact(g, Q(x0)), ey = ea && eb ? opQ(ea, eb, op) : null;
      const yH = ey ? RS.qh(ey) : isFinite(y) ? "≈ " + MR.fmtN(y, 3) : "undefined";
      k.readout({ title: `Combine: <i>f</i> ${op} <i>g</i>`, big: nowrap(`(<i>f</i> ${op} <i>g</i>)(<i>x</i>) = ${opH(f, g, op)}`),
        rows: [{ lhs: `<span class="c1"><i>f</i>(<i>x</i>) = ${fH(f)}</span>` }, { lhs: `<span class="c2"><i>g</i>(<i>x</i>) = ${fH(g)}</span>` },
          { lhs: `<span class="c1">${valH(f, x0)}</span> ${op} <span class="c2">${valH(g, x0)}</span>`, v: yH, cls: "c3", lbl: `f(x) ${op} g(x) at x = ${MR.fmtN(x0)}` },
          { lhs: `<span class="c4"><i>D</i> = ${RS.str(D, true)}</span>`, lbl: op === "÷" ? "both domains, minus the zeros of g" : "where f and g are both defined" }],
        landmark: inD ? { hit: false, big: `(<i>f</i> ${op} <i>g</i>)(${MR.fmtN(x0)}) ${yH[0] === "≈" ? "" : "= "}${yH}`, note: op === "+" || op === "−" ? "The pink height is the amber height with the cyan one stacked on it (added or taken away)." : "Each pink value is made from the two values directly above or below it." }
          : { hit: true, big: `<i>x</i> = ${MR.fmtN(x0)} is not in the domain`, note: why },
        narr: "Drag the white handle along the x-axis. Try ÷ and park the handle on a zero of g." });
    } else if (mode === "compose") {
      const D1 = FAM.domComp(f, g), D2 = FAM.domComp(g, f), fg = x => (RS.has(D1, x) ? ff(gg(x)) : NaN), gfn = x => (RS.has(D2, x) ? gg(ff(x)) : NaN);
      band(D1); P.line(P.xmin, P.xmin, P.xmax, P.xmax, k.alpha(C.text, 0.3), 1.2, [5, 5]);
      curveF(f, C.amber, { w: 2 }); curveF(g, C.cyan, { w: 2 });
      const bk = D1.flatMap(p => [p.lo, p.hi]).filter(Boolean).map(e => e.v);
      if (gf) P.curve(gfn, k.alpha(C.pink, 0.7), { w: 2, dash: [7, 5], breaks: D2.flatMap(p => [p.lo, p.hi]).filter(Boolean).map(e => e.v) });
      P.curve(fg, C.pink, { w: 3.2, breaks: bk });
      const x0 = X0.x, u = gg(x0), inG = isFinite(u), inF = inG && RS.has(FAM.dom(f), u), v = inF ? ff(u) : NaN;
      if (inG) { arrowM(k, c, P, x0, 0, x0, u, C.cyan, 2); arrowM(k, c, P, x0, u, u, u, k.alpha(C.text, 0.5), 1.5); }
      if (inF) { arrowM(k, c, P, u, u, u, v, C.amber, 2); arrowM(k, c, P, u, v, x0, v, C.pink, 2); P.dot(x0, v, C.pink, 6); }
      d.circle(P.X(x0), P.Y(0), 7, C.text, C.ink, 2);
      lab(ff, 0.9, "f", C.amber); lab(gg, 0.08, "g", C.cyan); lab(fg, 0.62, "f ∘ g", C.pink); if (gf) lab(gfn, 0.3, "g ∘ f", C.pink);
      labels.push({ text: "y = x", x: P.xmax * 0.8, y: P.xmax * 0.8, color: C.muted, font: `italic 13px ${F.math}` });
      P.labels(labels);
      const uH = valH(g, x0), vH = inF ? (FAM.exact(g, Q(x0)) && FAM.exact(f, FAM.exact(g, Q(x0))) ? RS.qh(FAM.exact(f, FAM.exact(g, Q(x0)))) : "≈ " + MR.fmtN(v, 3)) : "undefined";
      k.readout({ title: "Compose: <i>x</i> → <i>g</i>(<i>x</i>) → <i>f</i>(<i>g</i>(<i>x</i>))", big: nowrap(`(<i>f</i> ∘ <i>g</i>)(<i>x</i>) = ${compH(f, g)}`),
        rows: [{ lhs: `<span class="c2"><i>g</i>(${MR.fmtN(x0)})</span> = ${uH}`, lbl: "inner first" }, { lhs: `<span class="c3"><i>f</i>(<i>g</i>(${MR.fmtN(x0)}))</span> = ${vH}`, lbl: "then the outer function" },
          { lhs: `<span class="c4"><i>D</i><sub><i>f</i>∘<i>g</i></sub> = ${RS.str(D1, true)}</span>` },
          { lhs: `(<i>g</i> ∘ <i>f</i>)(<i>x</i>) = ${compH(g, f)}`, lbl: `domain ${RS.str(D2, false)}` }],
        landmark: inG && !inF ? { hit: true, big: `<i>g</i>(${MR.fmtN(x0)}) = ${uH} is not in the domain of <i>f</i>`, note: "x gets through g, but f cannot accept g's output, so x is left out of the domain of f ∘ g." }
          : !inG ? { hit: false, big: `${MR.fmtN(x0)} is not in the domain of <i>g</i>`, note: "The chain breaks at the first machine." }
          : { hit: false, big: `<i>f</i>(<i>g</i>(${MR.fmtN(x0)})) = ${vH}, &nbsp;<i>g</i>(<i>f</i>(${MR.fmtN(x0)})) = ${isFinite(gfn(x0)) ? "≈ " + MR.fmtN(gfn(x0), 3) : "undefined"}`, note: "Up to g, across to y = x (output becomes input), then to f. The other order usually gives a different number." },
        narr: "Drag x. Find a place where g works but f rejects g's output. Tick g ∘ f to compare orders." });
    } else {
      const { a } = prob, u = FAM.exact(g, Q(a)), v = FAM.exact(f, u), D = FAM.domComp(f, g);
      const cond = []; if (g.kind === "sqrt") cond.push(`<i>x</i> ≥ ${MR.sg(-g.p)} for <i>g</i>`); if (g.kind === "recip") cond.push(`<i>x</i> ≠ ${MR.sg(-g.p)} for <i>g</i>`);
      if (f.kind === "sqrt") cond.push(`${fH(g)} ≥ ${MR.sg(-f.p)} for <i>f</i>`); if (f.kind === "recip") cond.push(`${fH(g)} ≠ ${MR.sg(-f.p)} for <i>f</i>`);
      const sub = fH(f, innerOf(g)), simp = compH(f, g);
      SP.set([
        { tag: "inside", eq: `<span class="c2"><i>g</i>(${MR.sg(a)}) = ${fH(g, numU(a))} = ${RS.qh(u)}</span>`, why: "Evaluate the inner function first." },
        { tag: "outside", eq: `<span class="c3">(<i>f</i> ∘ <i>g</i>)(${MR.sg(a)}) = <i>f</i>(${RS.qh(u)}) = ${RS.qh(v)}</span>`, why: "Put g(a) into f." },
        { tag: "substitute", eq: `<i>f</i>(<i>g</i>(<i>x</i>)) = ${sub}`, why: "Replace every x in f by the whole expression g(x)." },
        { tag: "simplify", eq: `<span class="c3">(<i>f</i> ∘ <i>g</i>)(<i>x</i>) = ${simp}</span>`, why: simp === sub ? "Nothing combines further." : "Combine like terms; the domain does not change." },
        { tag: "domain", eq: `<span class="c4"><i>D</i> = ${RS.str(D, true)}</span>`, why: cond.length ? "Need " + cond.join(" and ") + "." : "Both functions accept every real number." }
      ], cur);
      curveF(f, C.amber, { w: 2 }); curveF(g, C.cyan, { w: 2 });
      if (cur >= 4) band(D);
      if (cur >= 3) P.curve(x => (RS.has(D, x) ? ff(gg(x)) : NaN), C.pink, { w: 3, breaks: D.flatMap(p => [p.lo, p.hi]).filter(Boolean).map(e => e.v) });
      if (cur >= 0) P.line(a, P.ymin, a, P.ymax, k.alpha(C.text, 0.25), 1, [3, 4]);
      if (cur >= 0) P.dot(a, Q.val(u), C.cyan, 5.5); if (cur >= 1) P.dot(a, Q.val(v), C.pink, 6);
      lab(ff, 0.9, "f", C.amber); lab(gg, 0.1, "g", C.cyan); P.labels(labels);
      k.readout({ title: "Compose step by step", big: nowrap(`<span class="c1"><i>f</i>(<i>x</i>) = ${fH(f)}</span>`), 
        rows: [{ lhs: `<span class="c2"><i>g</i>(<i>x</i>) = ${fH(g)}</span>` }, { lhs: `find (<i>f</i> ∘ <i>g</i>)(${MR.sg(a)})`, lbl: "a value: inside out" }, { lhs: `find (<i>f</i> ∘ <i>g</i>)(<i>x</i>) and its domain`, lbl: "a formula: substitute, simplify, then restrict" }],
        landmark: { hit: cur >= 4, big: cur >= 4 ? `<span class="c4"><i>D</i> = ${RS.str(D, true)}</span>` : `step ${cur + 1} of 5`, note: cur >= 4 ? "The domain comes from both functions: x must work in g, and g(x) must work in f." : "Press Step to reveal the next line." },
        narr: "New problem draws another pair from the family. Predict each line before you reveal it." });
    }
  });
};

/* ================= Inverse functions (D · Plane) ================= */
const FR = (a, b) => frH(a, b);
const INV = {
  lin: { t: "2x − 3", f: x => 2 * x - 3, g: x => (x + 3) / 2, a0: 1, fH: `2${ixh} − 3`, gH: FR(`${ixh} + 3`, 2), gT: "(x + 3)/2", D: "(−∞, ∞)", R: "(−∞, ∞)",
    steps: [[`<i>y</i> = 2<i>x</i> − 3`, "Write y for f(x)."], [`<i>x</i> = 2<i>y</i> − 3`, "Interchange x and y: each point (a, b) becomes (b, a)."], [`<i>x</i> + 3 = 2<i>y</i>`, "Add 3 to both sides."], ["(<i>x</i> + 3)/2", "Divide by 2."], ["<i>f</i>(<i>f</i><sup>−1</sup>(<i>x</i>)) = 2 · (<i>x</i> + 3)/2 − 3 = <i>x</i>", "The composition gives x back."]] },
  cube: { t: "x³ + 1", f: x => x * x * x + 1, g: x => Math.cbrt(x - 1), a0: 1, fH: `${ixh}<sup>3</sup> + 1`, gH: `∛<span class="mk-ol">${ixh} − 1</span>`, gT: "∛(x − 1)", D: "(−∞, ∞)", R: "(−∞, ∞)",
    steps: [[`<i>y</i> = <i>x</i><sup>3</sup> + 1`, "Write y for f(x)."], [`<i>x</i> = <i>y</i><sup>3</sup> + 1`, "Interchange x and y."], [`<i>y</i><sup>3</sup> = <i>x</i> − 1`, "Isolate the cube."], ["∛(<i>x</i> − 1)", "Take the cube root; every real number has exactly one."], ["<i>f</i>(<i>f</i><sup>−1</sup>(<i>x</i>)) = (∛(<i>x</i> − 1))<sup>3</sup> + 1 = <i>x</i>", "Cubing undoes the cube root."]] },
  sq: { t: "x²", f: x => x * x, g: Math.sqrt, lo: 0, a0: 1.5, fH: `${ixh}<sup>2</sup>`, gH: ol(ixh), gT: "√x", D: "[0, ∞)", R: "[0, ∞)", Dfull: "(−∞, ∞)",
    steps: [[`<i>y</i> = <i>x</i><sup>2</sup>, <i>x</i> ≥ 0`, "Restrict the domain so f is one-to-one."], [`<i>x</i> = <i>y</i><sup>2</sup>, <i>y</i> ≥ 0`, "Interchange x and y, restriction included."], [`<i>y</i> = ±√<span class="mk-ol"><i>x</i></span>`, "Square root of both sides gives two signs."], ["√<i>x</i>", "Keep the + sign, because y ≥ 0."], ["<i>f</i><sup>−1</sup>(<i>f</i>(<i>x</i>)) = √<span class=\"mk-ol\"><i>x</i><sup>2</sup></span> = |<i>x</i>| = <i>x</i> for <i>x</i> ≥ 0", "Without the restriction this fails at negative x."]] },
  sqs: { t: "(x − 2)² + 1", f: x => (x - 2) * (x - 2) + 1, g: x => 2 + Math.sqrt(x - 1), lo: 2, a0: 3, fH: `(${ixh} − 2)<sup>2</sup> + 1`, gH: `2 + ${ol(`${ixh} − 1`)}`, gT: "2 + √(x − 1)", D: "[2, ∞)", R: "[1, ∞)", Dfull: "(−∞, ∞)",
    steps: [[`<i>y</i> = (<i>x</i> − 2)<sup>2</sup> + 1, <i>x</i> ≥ 2`, "Keep the right half of the parabola."], [`<i>x</i> = (<i>y</i> − 2)<sup>2</sup> + 1, <i>y</i> ≥ 2`, "Interchange x and y."], [`<i>y</i> − 2 = √<span class="mk-ol"><i>x</i> − 1</span>`, "Subtract 1 and take the root; y − 2 ≥ 0, so only the + root."], ["2 + √(<i>x</i> − 1)", "Add 2."], ["<i>f</i>(<i>f</i><sup>−1</sup>(<i>x</i>)) = (√<span class=\"mk-ol\"><i>x</i> − 1</span>)<sup>2</sup> + 1 = <i>x</i>", "Valid for x ≥ 1, the range of f."]] },
  abs: { t: "|x| − 1", f: x => Math.abs(x) - 1, g: x => x + 1, lo: 0, a0: 2, fH: `|${ixh}| − 1`, gH: `${ixh} + 1`, gT: "x + 1", D: "[0, ∞)", R: "[−1, ∞)", Dfull: "(−∞, ∞)",
    steps: [[`<i>y</i> = |<i>x</i>| − 1 = <i>x</i> − 1, <i>x</i> ≥ 0`, "On x ≥ 0 the absolute value bars drop."], [`<i>x</i> = <i>y</i> − 1, <i>y</i> ≥ 0`, "Interchange x and y."], [`<i>y</i> = <i>x</i> + 1`, "Add 1."], ["<i>x</i> + 1, <i>x</i> ≥ −1", "The domain of the inverse is the range of f."], ["<i>f</i>(<i>f</i><sup>−1</sup>(<i>x</i>)) = |<i>x</i> + 1| − 1 = <i>x</i> for <i>x</i> ≥ −1", "Both compositions give x on the right domains."]] },
  root: { t: "√(x + 4)", f: x => (x >= -4 ? Math.sqrt(x + 4) : NaN), g: x => x * x - 4, lo: -4, a0: 0, fH: ol(`${ixh} + 4`), gH: `${ixh}<sup>2</sup> − 4, ${ixh} ≥ 0`, gT: "x² − 4", D: "[−4, ∞)", R: "[0, ∞)",
    steps: [[`<i>y</i> = √<span class="mk-ol"><i>x</i> + 4</span>`, "Domain x ≥ −4, range y ≥ 0."], [`<i>x</i> = √<span class="mk-ol"><i>y</i> + 4</span>, <i>x</i> ≥ 0`, "Interchange x and y; the new x is an old output, so x ≥ 0."], [`<i>x</i><sup>2</sup> = <i>y</i> + 4`, "Square both sides."], ["<i>x</i><sup>2</sup> − 4, <i>x</i> ≥ 0", "Subtract 4 and keep the restriction."], ["<i>f</i>(<i>f</i><sup>−1</sup>(<i>x</i>)) = √<span class=\"mk-ol\"><i>x</i><sup>2</sup></span> = <i>x</i> for <i>x</i> ≥ 0", "Without x ≥ 0 the inverse would not be one-to-one."]] },
  rat: { t: "(x + 1)/(x − 2)", f: x => (x === 2 ? NaN : (x + 1) / (x - 2)), g: x => (x === 1 ? NaN : (2 * x + 1) / (x - 1)), va: 2, ha: 1, a0: 3, fH: FR(`${ixh} + 1`, `${ixh} − 2`), gH: FR(`2${ixh} + 1`, `${ixh} − 1`), gT: "(2x + 1)/(x − 1)", D: "(−∞, 2) ∪ (2, ∞)", R: "(−∞, 1) ∪ (1, ∞)",
    steps: [[`<i>y</i> = (<i>x</i> + 1)/(<i>x</i> − 2)`, "Write y for f(x); x ≠ 2."], [`<i>x</i> = (<i>y</i> + 1)/(<i>y</i> − 2)`, "Interchange x and y."], [`<i>y</i>(<i>x</i> − 1) = 2<i>x</i> + 1`, "Multiply by y − 2 to get xy − 2x = y + 1, collect the y-terms and factor out y."], ["(2<i>x</i> + 1)/(<i>x</i> − 1)", "Divide by x − 1."], ["<i>f</i>(<i>f</i><sup>−1</sup>(<i>x</i>)) = 3<i>x</i>/3 = <i>x</i>", "Simplify the compound fraction by multiplying through by x − 1."]] }
};
L["a2-inverses"] = k => {
  MathKit.attach(k);
  const { C, F } = k, MR = k.MR, c = k.canvas(), dom = k.dom(); dom.style.display = "none";
  const SP = k.stepsPanel(dom);
  let mode = "mirror", fk = "lin", restrict = true, P = null, st = null, cur = 0, sweep = null, maxHits = 0;
  const A = { x: 1, y: -1, snap: 0.05 }, Hc = { x: 5.4, y: 2, fixX: true, snap: 0.25 };
  const fam = () => INV[fk], one = () => fam().lo === undefined || restrict || fk === "root";
  const lo = () => { const q = fam(); return q.lo !== undefined && (restrict || fk === "root") ? q.lo : -Infinity; };
  k.drag(c, () => (mode === "mirror" ? P : null), [A], () => {
    const q = fam(); let x = Math.max(A.x, lo(), P.xmin); if (q.va !== undefined && Math.abs(x - q.va) < 0.15) x = q.va + (x < q.va ? -0.15 : 0.15);
    for (let i = 0; i < 40 && !inWin(P, x, q.f(x)); i++) x += (q.a0 - x) * 0.15;
    A.x = +x.toFixed(2); A.y = q.f(A.x);
  });
  k.drag(c, () => (mode === "test" ? P : null), [Hc], () => { sweep = null; });
  const setA = () => { const q = fam(); A.x = q.a0; A.y = q.f(A.x); maxHits = 0; };
  function build(){
    if (st) st.pause(); st = null; if (sweep) sweep = null; k.ctl.innerHTML = "";
    const opts = Object.entries(INV).map(([key, q]) => [key, "f(x) = " + q.t]);
    k.select("Function", opts, fk, v => { fk = v; setA(); build(); });
    if (mode === "steps") { st = k.stepper(() => 5, v => cur = v, { ms: 1400 }); cur = 0; }
    else {
      if (mode === "test") k.button("Sweep", () => { maxHits = 0; sweep = P ? P.ymin : -6; }, "btn");
      if (fam().lo !== undefined && fk !== "root") k.check("restrict the domain", restrict, v => { restrict = v; setA(); });
    }
    guard();
  }
  const guard = () => k.guard(mode === "steps" ? [`f⁻¹(x) = ${fam().steps[3][0].replace(/<[^>]+>/g, "")}`] : []);
  k.modes([["mirror", "Mirror"], ["test", "Line test"], ["steps", "Steps"]], mode, m => { mode = m; build(); });
  setA(); build();
  // the graph of f reflected in y = x, as parametric pieces (t, f(t)) → (f(t), t) kept inside a generous window
  function reflect(q, from, color, dash){
    const N = 400, a = Math.max(from, P.xmin - 6), b = P.xmax + 6; let run = [];
    const flush = () => { if (run.length > 1) { const r0 = run[0], r1 = run[run.length - 1]; P.param(t => q.f(t), t => t, r0, r1, color, 2.5, dash); } run = []; };
    for (let i = 0; i <= N; i++) { const t = a + (b - a) * i / N, y = q.f(t); if (isFinite(y) && Math.abs(y) < 40 && !(q.va !== undefined && Math.abs(t - q.va) < 0.02)) run.push(t); else flush(); }
    flush();
  }

  k.loop(dt => {
    c.begin(); const d = c.d, q = fam(), lay = split(c, dom, mode === "steps");
    const xs = c.w - lay.r < 420 ? 2 : 1;
    P = k.plane(c, { xmin: -6, xmax: 6, ymin: -6, ymax: 6, equal: true, xstep: xs, ystep: 1, xlabel: "x", ylabel: "y", pad: { l: 30, r: lay.r, t: 16, b: lay.b } });
    P.grid(); P.axes(); axisBoxes(P, xs, 1);
    const L0 = lo(), labels = [];
    const fx = x => (x < L0 - 1e-9 ? NaN : q.f(x));
    Hc.x = P.xmax - 0.6;
    P.line(P.xmin, P.xmin, P.xmax, P.xmax, C.violet, 1.6, [7, 5]);
    if (q.lo !== undefined && fk !== "root" && L0 > -Infinity) P.curve(q.f, k.alpha(C.amber, 0.3), { to: q.lo, w: 2, dash: [4, 4] });
    P.curve(fx, C.amber, { from: Math.max(P.xmin, L0), breaks: q.va !== undefined ? [q.va] : [], w: 3 });
    const fa = onCurve(P, fx, 0.88, L0);
    if (fa) labels.push({ text: "f", x: fa.x, y: fa.y, color: C.amber, font: `italic 16px ${F.math}` });
    labels.push({ text: "y = x", x: P.xmax * 0.86, y: P.xmax * 0.86, color: C.violet, font: `italic 14px ${F.math}` });
    if (mode === "mirror") {
      reflect(q, L0, C.cyan, one() ? null : [6, 5]);
      const ga = onCurve(P, x => (one() ? q.g(x) : NaN), 0.12);
      if (one() && ga) labels.push({ text: "f⁻¹", x: ga.x, y: ga.y, color: C.cyan, font: `italic 16px ${F.math}` });
      const a = A.x, b = q.f(a);
      if (isFinite(b)) {
        P.seg(a, b, b, a, k.alpha(C.text, 0.6), 1.5, [5, 4]);
        const m = (a + b) / 2; P.dot(m, m, C.violet, 4);
        if (Math.abs(a - b) > 0.3 && inWin(P, m, m)) { const X = P.X(m), Y = P.Y(m), s = 7, ux = Math.SQRT1_2, sgn = a > b ? 1 : -1;
          d.line(X + sgn * ux * s, Y + sgn * ux * s, X + sgn * ux * s + ux * s, Y + sgn * ux * s - ux * s, k.alpha(C.text, 0.6), 1); d.line(X + ux * s, Y - ux * s, X + sgn * ux * s + ux * s, Y + sgn * ux * s - ux * s, k.alpha(C.text, 0.6), 1); }
        P.dot(a, b, C.amber, 7); P.dot(b, a, C.cyan, 6);
        labels.push({ text: `(${MR.fmtN(a, 2)}, ${MR.fmtN(b, 2)})`, x: a, y: b, color: C.amber, font: `13px ${F.mono}` }, { text: `(${MR.fmtN(b, 2)}, ${MR.fmtN(a, 2)})`, x: b, y: a, color: C.cyan, font: `13px ${F.mono}` });
      }
      if (!one()) { const t = (q.lo || 0) - 2; labels.push({ text: "reflection: not a function", x: q.f(t), y: t, color: C.cyan, font: `12px ${F.ui}` }); }
      P.labels(labels);
      const fixed = isFinite(b) && Math.abs(a - b) < 0.06;
      k.readout({ title: one() ? "Reflect in y = x" : "Not one-to-one", big: nowrap(`<span class="c1"><i>f</i>(<i>x</i>) = ${q.fH}</span>${one() ? "" : " on " + q.Dfull}`),
        rows: [one() ? { lhs: `<span class="c2"><i>f</i><sup>−1</sup>(<i>x</i>) = ${q.gH}</span>` } : null, { lhs: `<span class="c1"><i>f</i>(${MR.fmtN(a, 2)}) = ${MR.fmtN(b, 3)}</span>`, v: one() ? `⇔ <i>f</i><sup>−1</sup>(${MR.fmtN(b, 3)}) = ${MR.fmtN(a, 2)}` : "", cls: "c2", lbl: "(a, b) on f is (b, a) on the inverse" },
          { lhs: `domain of <i>f</i> = ${one() ? q.D : q.Dfull}`, lbl: one() ? "= range of f⁻¹" : "" }, { lhs: `range of <i>f</i> = ${q.R}`, lbl: one() ? "= domain of f⁻¹" : "" }],
        landmark: !one() ? { hit: false, big: "The mirror image is not a function", note: "Two inputs share each output, so the reflection fails the vertical line test. Tick restrict the domain." }
          : { hit: fixed, big: fixed ? `<i>f</i>(${MR.fmtN(a, 2)}) ≈ ${MR.fmtN(a, 2)}: on the mirror line` : "Midpoint on y = x, segment perpendicular to it", note: fixed ? "A point with f(a) = a is its own reflection: f and f⁻¹ cross on y = x." : "Swapping coordinates reflects every point in y = x. Find where f meets the line." },
        narr: "Drag the amber point along f. Try x² with and without the restriction." });
    } else if (mode === "test") {
      if (sweep !== null) { sweep += dt * 2.4; Hc.y = Math.round(sweep * 4) / 4; if (sweep > P.ymax) { sweep = null; } }
      const cH = Hc.y, a0 = Math.max(P.xmin, L0), hits = MR.zeros(x => fx(x) - cH, a0, P.xmax, 900).filter(x => !(q.va !== undefined && Math.abs(x - q.va) < 1e-3) && x >= L0 - 1e-9);
      maxHits = Math.max(maxHits, hits.length);
      P.seg(P.xmin, cH, P.xmax, cH, C.pink, 2.2);
      hits.forEach(x => P.dot(x, cH, C.pink, 6));
      d.rr(P.X(Hc.x) - 9, P.Y(cH) - 9, 18, 18, 4, C.ink, C.pink, 2);
      labels.push({ text: `y = ${MR.fmtN(cH, 2)}: ${hits.length} hit${hits.length === 1 ? "" : "s"}`, x: P.xmin + 0.3, y: cH, color: C.pink, font: `13px ${F.ui}`, prefer: "ne" });
      P.labels(labels);
      const fail = hits.length >= 2;
      k.readout({ title: "Horizontal line test", big: `<span class="c1"><i>f</i>(<i>x</i>) = ${q.fH}</span>${q.lo !== undefined && L0 > -Infinity ? `, <i>x</i> ≥ ${MR.sg(q.lo)}` : ""}`,
        rows: [{ lhs: `<span class="c3"><i>y</i> = ${MR.fmtN(cH, 2)}</span>`, v: `${hits.length} intersection${hits.length === 1 ? "" : "s"}`, lbl: hits.length ? "at x ≈ " + hits.map(x => MR.fmtN(x, 2)).join(", ") : "this output is not in the range" },
          { lhs: "most hits so far", v: String(maxHits), lbl: maxHits >= 2 ? "fails the test: not one-to-one" : "no line has hit twice yet" }],
        landmark: fail ? { hit: true, big: `<i>f</i>(${MR.fmtN(hits[0], 2)}) = <i>f</i>(${MR.fmtN(hits[1], 2)}) = ${MR.fmtN(cH, 2)}`, note: "Two inputs give the same output, so f has no inverse on this domain. Restrict the domain to keep one side." }
          : { hit: false, big: one() ? "One-to-one on this domain" : "Keep sweeping", note: one() ? "Every horizontal line meets the graph at most once, so each output comes from exactly one input." : "Drag the pink handle up and down, or press Sweep." },
        narr: "Untick restrict the domain on x², (x − 2)² + 1 or |x| − 1 and sweep again." });
    } else {
      const lines = [...q.steps.slice(0, 3).map(([eq, why], i) => ({ tag: ["write", "swap", "solve"][i], eq, why })),
        { tag: "inverse", eq: `<span class="c2">f⁻¹(<i>x</i>) = ${q.steps[3][0]}</span>`, why: q.steps[3][1] },
        { tag: "domain", eq: `<span class="c2">D = ${q.R}</span>, &nbsp;<span class="c1">R = ${q.D}</span>`, why: "The domain and range of f trade places." },
        { tag: "verify", eq: q.steps[4][0], why: q.steps[4][1] }];
      SP.set(lines, cur);
      if (cur >= 3) { reflect(q, L0, C.cyan); const ga = onCurve(P, q.g, 0.15); if (ga) labels.push({ text: "f⁻¹", x: ga.x, y: ga.y, color: C.cyan, font: `italic 16px ${F.math}` }); }
      P.labels(labels);
      k.readout({ title: "Find the inverse", big: `<span class="c1"><i>f</i>(<i>x</i>) = ${q.fH}</span>${q.lo !== undefined && fk !== "root" ? `, <i>x</i> ≥ ${MR.sg(q.lo)}` : ""}`,
        rows: [{ lhs: `domain of <i>f</i> = ${q.D}` }, { lhs: `range of <i>f</i> = ${q.R}` }],
        landmark: { hit: cur >= 5, big: cur >= 5 ? "Verified: both compositions give <i>x</i>" : `step ${cur + 1} of 6`, note: cur >= 5 ? "The cyan graph is the amber one reflected in y = x." : "Swap x and y, then solve for y. Press Step for each line." },
        narr: "Choose another function above. Predict the inverse before the fourth step." });
    }
  });
};
})();
