/* ============ Labs: Algebra II, batch 4 (conic sections, ellipses, hyperbolas) ============ */
(function(){
const L = window.LABS;
const MI = "−";
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const RAD = Math.PI / 180;

/* ---- DOM-free helpers (candidates for MathRules; see the batch report) ---- */
const MR = () => window.MathRules;
// one hint per stage: replaces the previous one (labkit's k.hint appends)
const hintOne = (k, txt) => { k.stage.querySelectorAll(".hintc").forEach(e => e.remove()); if (txt) k.hint(txt); };
// Exact √q, (v − h)², (v − h) and conic standard form: MathRules (web/kits/subjects/math.js)
const sqrtQ = q => MR().sqrtQ(q);
const rootStr = (q, html) => MR().sqrtQStr(q, html);
const sqTerm = (v, h, html) => MR().sqShiftStr(v, h, html);
const linTerm = (v, h, html) => MR().shiftStr(v, h, html);
const stdForm = (r, html) => MR().conicStdForm(r, html);
// Register the plane's tick labels as boxes so P.labels keeps clear of them (call right after P.axes()).
function tickBoxes(P, d, F, o = {}){
  const R = MR(), sx = o.xstep || R.niceStep(P.xmax - P.xmin), sy = o.ystep || R.niceStep(P.ymax - P.ymin), font = `11px ${F.mono}`;
  const ax = Math.min(Math.max(0, P.ymin), P.ymax), ay = Math.min(Math.max(0, P.xmin), P.xmax);
  const f = v => (Math.abs(v) < 1e-9 ? "0" : String(+v.toFixed(6))).replace("-", MI);
  for (let x = Math.ceil(P.xmin / sx) * sx; x <= P.xmax + 1e-9; x += sx) { if (Math.abs(x) < 1e-9) continue; const w = d.width(f(x), font), yb = Math.min(P.top + P.height + 16, P.Y(ax) + 16); P.boxes.push({ x: P.X(x) - w / 2 - 2, y: yb - 11, w: w + 4, h: 14 }); }
  for (let y = Math.ceil(P.ymin / sy) * sy; y <= P.ymax + 1e-9; y += sy) { if (Math.abs(y) < 1e-9) continue; const w = d.width(f(y), font), xr = Math.max(P.left - 6, P.X(ay) - 7); P.boxes.push({ x: xr - w - 2, y: P.Y(y) - 8, w: w + 4, h: 16 }); }
}
const ptT = (x, y) => `(${MR().qT(x)}, ${MR().qT(y)})`;
// "h ± √q" and the pair of points (h ± √q, k): MathRules (web/kits/subjects/math.js)
const pmStr = (h, q, html) => MR().pmRootStr(h, q, html);
const pairStr = (h, k, q, horiz, html) => MR().pmPairStr(h, k, q, horiz, html);
// General form Ax² + Cy² + Dx + Ey + F = 0 as HTML, coefficients wrapped in `cls`
function genEq(o, cls = "c4"){
  const T = [[o.A, "<i>x</i><sup>2</sup>"], [o.C, "<i>y</i><sup>2</sup>"], [o.D, "<i>x</i>"], [o.E, "<i>y</i>"], [o.F, ""]]; let s = "";
  T.forEach(([c, v]) => { if (!c) return; const m = Math.abs(c), num = m === 1 && v ? "" : String(m);
    s += s ? (c < 0 ? ` ${MI} ` : " + ") : c < 0 ? MI : ""; s += (num ? `<span class="${cls}">${num}</span>` : "") + v; });
  return (s || "0") + " = 0";
}
// a·(v² + bv [+ add]) group as HTML, sign-aware (first group has no leading +)
function grpH(a, v, b, add, first){
  const V = `<i>${v}</i>`, am = Math.abs(a), co = am === 1 ? "" : String(am);
  const pre = first ? (a < 0 ? MI : "") + co : (a < 0 ? ` ${MI} ` : " + ") + co;
  const inner = `${V}<sup>2</sup>` + (b ? ` ${b < 0 ? MI : "+"} ${Math.abs(b) === 1 ? "" : Math.abs(b)}${V}` : "") + (add ? ` + ${MR().qT(add)}` : "");
  return `${pre}(${inner})`;
}
const sumH = terms => terms.map((t, i) => { const R = MR(), q = R.Q(t); return i ? (q.n < 0 ? ` ${MI} ` : " + ") + R.qT(R.Q.abs(q)) : R.qT(q); }).join("");
const linH = (m, v, b) => { const R = MR(); let s = ""; if (m) s = (m === 1 ? "" : m === -1 ? MI : R.qT(m)) + `<i>${v}</i>`; if (b) s += s ? (b < 0 ? ` ${MI} ` : " + ") + Math.abs(b) : R.qT(b); return s || "0"; };

/* ---------- Conic sections: slice, classify, standard form ---------- */
L["a2-conic-sections"] = k => {
  MathKit.attach(k); const { C, F } = k, R = k.MR, Q = R.Q; const c = k.canvas(), d = c.d;
  const dom = k.dom(); dom.classList.add("mk-wrap"); dom.style.cssText = "display:none;padding-top:58px;justify-content:flex-start";
  const ask = document.createElement("div"); ask.style.cssText = "flex:1 1 100%;font:400 19px/1.5 var(--math);color:var(--text)"; dom.appendChild(ask);
  const SP = k.stepsPanel(dom);
  let mode = "slice", P1 = null, P2 = null, P3 = null, st = null, idx = 0, S = null;
  const view = {};
  // Slice: double cone, half-angle 30° (sides at 60° from horizontal), cutting plane z = z0 + x·tan φ
  const BETA = 60, T2 = 1 / 3, HR = 2.4; let phi = 35, z0 = 1.2;
  const sp = [{ x: 0, y: z0, fixX: true, clamp: [-5, 5, -2.6, 2.6] }, { x: 0, y: 0 }];
  const place = () => { sp[0].y = z0; sp[1].x = HR * Math.cos(phi * RAD); sp[1].y = z0 + HR * Math.sin(phi * RAD); };
  place();
  k.drag(c, () => (mode === "slice" ? P1 : null), sp, (i, p) => {
    if (i === 0) { z0 = Math.abs(p.y) < 0.12 ? 0 : Math.round(p.y * 20) / 20; }
    else { let a = Math.atan2(p.y - z0, Math.max(0.05, p.x)) / RAD; a = clamp(Math.round(a), 0, 85); if (Math.abs(a - BETA) <= 2) a = BETA; if (a <= 2) a = 0; phi = a; }
    place();
  });
  // Standard-form problems (integers chosen so every step stays exact and tidy)
  const PROBS = [{ A: 4, C: 9, D: -16, E: 18, F: -11 }, { A: 1, C: 1, D: -6, E: 4, F: -12 }, { A: 1, C: -4, D: -4, E: -8, F: -16 },
    { A: 0, C: 1, D: -8, E: 2, F: 17 }, { A: 25, C: 4, D: 100, E: -24, F: 36 }, { A: 1, C: 0, D: 4, E: -4, F: 16 }, { A: -9, C: 4, D: 18, E: 16, F: -29 }];
  const TYPE = { circle: "circle", ellipse: "ellipse", hyperbola: "hyperbola", parabola: "parabola" };
  function solveLines(o){
    const r = R.conic(o), cen = ptT(r.h, r.k), L2 = [], iA = `<i>A</i> = ${R.sg(o.A)}`, iC = `<i>C</i> = ${R.sg(o.C)}`;
    if (r.type === "parabola") {
      const vert = o.C === 0, v = vert ? "x" : "y", w = vert ? "y" : "x", b = vert ? o.D : o.E, m = -(vert ? o.E : o.D), add = Q.pow(Q(b, 2), 2);
      const hv = vert ? r.h : r.k, wv = vert ? r.k : r.h, p4 = Q.mul(4, r.p);
      L2.push({ tag: "classify", eq: `${iA}, ${iC}: &nbsp;<i>AC</i> = 0`, why: `Only ${v} is squared, so the graph is a parabola.` });
      L2.push({ tag: "isolate", eq: `${grpH(1, v, b, null, true).replace(/^\(|\)$/g, "")} = ${linH(m, w, -o.F)}`, why: `Keep the ${v}-terms on the left and move everything else to the right.` });
      L2.push({ tag: "complete", eq: `${grpH(1, v, b, add, true).replace(/^\(|\)$/g, "")} = ${linH(m, w, -o.F)} + ${R.qT(add)}`, why: `Half of ${R.sg(b)}, squared, is ${R.qT(add)}. Add it to both sides.` });
      L2.push({ tag: "factor", eq: `${stdForm(r, true)}`, why: `The left side is a perfect square; factor ${R.qT(p4)} out of the right side.` });
      L2.push({ tag: "read", eq: `vertex ${cen}, &nbsp;4<i>p</i> = ${R.qT(p4)}, &nbsp;<i>p</i> = ${R.qT(r.p)}`, why: `It opens ${vert ? (Q.val(r.p) > 0 ? "up" : "down") : (Q.val(r.p) > 0 ? "right" : "left")}, toward the side where ${w} can grow.` });
      void hv; void wv;
      return { r, lines: L2, cen: `vertex ${cen}`, guard: [cen, "parabola"] };
    }
    const bx = Q(o.D, o.A), by = Q(o.E, o.C), ax = Q.mul(o.A, Q.pow(Q.div(bx, 2), 2)), ay = Q.mul(o.C, Q.pow(Q.div(by, 2), 2));
    const Rr = Q.add(Q.add(-o.F, ax), ay), circ = o.A === o.C, kind = r.type;
    L2.push({ tag: "classify", eq: `${iA}, ${iC}: &nbsp;<i>AC</i> = ${R.sg(o.A * o.C)} ${o.A * o.C > 0 ? "&gt;" : "&lt;"} 0${o.A * o.C > 0 ? (circ ? ", <i>A</i> = <i>C</i>" : ", <i>A</i> ≠ <i>C</i>") : ""}`,
      why: o.A * o.C < 0 ? "Opposite signs: a hyperbola." : circ ? "Equal coefficients: a circle." : "Same signs, different coefficients: an ellipse." });
    L2.push({ tag: "group", eq: `${grpH(o.A, "x", Q.val(bx), null, true)}${grpH(o.C, "y", Q.val(by), null, false)} = ${R.qT(-o.F)}`, why: "Group the x- and y-terms, factor out A and C, and move F to the right." });
    L2.push({ tag: "complete", eq: `${grpH(o.A, "x", Q.val(bx), Q.pow(Q.div(bx, 2), 2), true)}${grpH(o.C, "y", Q.val(by), Q.pow(Q.div(by, 2), 2), false)} = ${sumH([-o.F, ax, ay])}`,
      why: `Each square added inside counts times the factor outside: ${R.sg(o.A)} · ${R.qT(Q.pow(Q.div(bx, 2), 2))} = ${R.qT(ax)} and ${R.sg(o.C)} · ${R.qT(Q.pow(Q.div(by, 2), 2))} = ${R.qT(ay)}.` });
    const co = (a, t, first) => { const m = Math.abs(a), s = m === 1 ? "" : String(m); return first ? (a < 0 ? MI : "") + s + t : (a < 0 ? ` ${MI} ` : " + ") + s + t; };
    L2.push({ tag: "factor", eq: `${co(o.A, sqTerm("x", r.h, true), true)}${co(o.C, sqTerm("y", r.k, true), false)} = ${R.qT(Rr)}`, why: "Write each group as a squared binomial." });
    if (!(circ && o.A === 1)) L2.push({ tag: "divide", eq: stdForm(r, true), why: circ ? `Divide by ${o.A} to leave r² alone.` : `Divide both sides by ${R.qT(Rr)} so the right side is 1.` });
    let read;
    if (kind === "circle") read = `centre ${cen}, &nbsp;<i>r</i> = ${rootStr(r.r2, true)}`;
    else if (kind === "ellipse") read = `centre ${cen}, &nbsp;<i>a</i> = ${rootStr(r.a2, true)}, &nbsp;<i>b</i> = ${rootStr(r.b2, true)}`;
    else read = `centre ${cen}, &nbsp;<i>a</i> = ${rootStr(r.a2, true)}, &nbsp;<i>b</i> = ${rootStr(r.b2, true)}`;
    L2.push({ tag: "read", eq: read, why: kind === "circle" ? "Every point is r from the centre." : kind === "ellipse" ? `The larger denominator is under ${r.axis === "horizontal" ? "x" : "y"}: the long axis is ${r.axis}.` : `The positive term is the ${r.axis === "horizontal" ? "x" : "y"}-term: the branches open ${r.axis === "horizontal" ? "left and right" : "up and down"}.` });
    return { r, lines: L2, cen: `centre ${cen}`, guard: [cen, TYPE[kind]] };
  }

  const ctrl = () => {
    k.ctl.innerHTML = ""; if (st) st.pause(); st = null;
    dom.style.display = mode === "std" ? "flex" : "none";
    hintOne(k, "");
    if (mode === "slice") {
      k.button("Level cut", () => { phi = 0; place(); }, "btn-s");
      k.button("Parallel to side", () => { phi = BETA; place(); }, "btn-s");
      k.button("Through the tip", () => { z0 = 0; place(); }, "btn-s");
      hintOne(k, "Drag the amber ring to tilt, the dot to slide");
      k.guard([]);
    } else if (mode === "cls") {
      S = k.params([{ key: "A", min: -4, max: 4, step: 1, value: 4, cls: "c4", fmt: v => R.sg(v) }, { key: "C", min: -9, max: 9, step: 1, value: 9, cls: "c4", fmt: v => R.sg(v) },
        { key: "D", min: -20, max: 20, step: 1, value: -16, cls: "c4", fmt: v => R.sg(v) }, { key: "E", min: -20, max: 20, step: 1, value: 18, cls: "c4", fmt: v => R.sg(v) },
        { key: "F", min: -40, max: 40, step: 1, value: -11, cls: "c4", fmt: v => R.sg(v) }]);
      const set = o => Object.keys(o).forEach(key => S.set(key, o[key]));
      k.button("Circle", () => set({ A: 1, C: 1, D: -4, E: 2, F: -11 }), "btn-s");
      k.button("Parabola", () => set({ A: 1, C: 0, D: -2, E: -4, F: 9 }), "btn-s");
      k.button("Hyperbola", () => set({ A: 1, C: -4, D: -4, E: -8, F: -16 }), "btn-s");
      k.guard([]);
    } else {
      k.button("New problem", () => { idx = (idx + 1) % PROBS.length; st.reset(); }, "btn-s");
      st = k.stepper(() => cur().lines.length, () => {});
      k.guard(cur().guard);
    }
  };
  const cur = () => solveLines(PROBS[idx]);
  k.modes([["slice", "Slice"], ["cls", "Classify"], ["std", "Standard form"]], mode, m => { mode = m; ctrl(); });
  ctrl();

  // section of the cone by the plane, in plane coordinates (u along the cut, v across it): A u² + v² + D u + F = 0
  const section = () => { const s = Math.sin(phi * RAD), co = Math.cos(phi * RAD); const A = co * co - T2 * s * s, D = -2 * T2 * z0 * s, Fv = -T2 * z0 * z0;
    const eps = 1e-9, deg = Math.abs(z0) < 1e-9; let type;
    if (deg) type = A > eps ? "point" : Math.abs(A) <= eps ? "line" : "two lines";
    else type = A > eps ? (phi === 0 ? "circle" : "ellipse") : Math.abs(A) <= eps ? "parabola" : "hyperbola";
    let roots = [];
    if (Math.abs(A) <= eps) { if (Math.abs(D) > eps) roots = [-Fv / D]; }
    else { const disc = D * D - 4 * A * Fv; if (disc >= 0) { const q = Math.sqrt(disc); roots = [(-D - q) / (2 * A), (-D + q) / (2 * A)].sort((a, b) => a - b); } }
    return { A, D, F: Fv, type, roots, e: Math.sin(phi * RAD) / Math.sin(BETA * RAD) };
  };

  function drawSlice(dt){
    const wide = c.w >= 620, X = section();
    const pad1 = wide ? { l: 12, r: c.w / 2 + 6, t: 16, b: 16 } : { l: 12, r: 12, t: 16, b: c.h * 0.5 + 4 };
    P1 = k.plane(c, { xmin: -4, xmax: 4, ymin: -2.9, ymax: 2.9, equal: true, pad: pad1 });
    const g = 1 / Math.sqrt(3), Z = Math.max(P1.ymax, -P1.ymin) + 1;
    P1.clip(() => { const gg = c.g; gg.save(); gg.fillStyle = k.alpha(C.cyan, .07); gg.beginPath(); gg.moveTo(P1.X(0), P1.Y(0)); gg.lineTo(P1.X(-Z * g), P1.Y(Z)); gg.lineTo(P1.X(Z * g), P1.Y(Z)); gg.closePath(); gg.moveTo(P1.X(0), P1.Y(0)); gg.lineTo(P1.X(-Z * g), P1.Y(-Z)); gg.lineTo(P1.X(Z * g), P1.Y(-Z)); gg.closePath(); gg.fill(); gg.restore(); });
    P1.line(0, -Z, 0, Z, k.alpha(C.muted, .5), 1, [4, 5]);
    P1.seg(-Z * g, -Z, Z * g, Z, C.muted, 1.5); P1.seg(Z * g, -Z, -Z * g, Z, C.muted, 1.5);
    const tn = Math.tan(phi * RAD), xs = 8; P1.seg(-xs, z0 - xs * tn, xs, z0 + xs * tn, C.amber, 2.5);
    const onCut = u => [u * Math.cos(phi * RAD), z0 + u * Math.sin(phi * RAD)];
    X.roots.forEach(u => { const [px, pz] = onCut(u); P1.dot(px, pz, C.pink, 5); });
    P1.point(sp[0].x, sp[0].y, C.amber, 6); P1.point(sp[1].x, sp[1].y, C.amber, 7, true);
    const t1 = "SIDE VIEW OF THE CONE"; d.text(t1, P1.left + 6, P1.top + P1.height - 8, { font: `600 11px ${F.ui}`, color: C.faint }); P1.boxes.push({ x: P1.left + 4, y: P1.top + P1.height - 22, w: d.width(t1, `600 11px ${F.ui}`) + 6, h: 18 });
    P1.labels([{ text: "cutting plane", x: sp[1].x, y: sp[1].y, color: C.amber, font: `13px ${F.sans}`, prefer: "se" }, { text: "side of cone", x: 2.6 * g, y: 2.6, color: C.muted, font: `13px ${F.sans}`, prefer: "e" }]);
    // the cut, face on
    let tc = 0, ts = 3;
    if (X.type === "ellipse" || X.type === "circle") { const uc = (X.roots[0] + X.roots[1]) / 2, half = (X.roots[1] - X.roots[0]) / 2, vm = Math.sqrt(Math.max(0, -(X.A * uc * uc + X.D * uc + X.F))); tc = uc; ts = Math.max(2, half * 1.3, vm * 1.9); }
    else if (X.type === "parabola") { const dir = X.D < 0 ? 1 : -1; tc = X.roots[0] + dir * 2.5; ts = 4.2; }
    else if (X.type === "hyperbola") { tc = (X.roots[0] + X.roots[1]) / 2; ts = Math.max(3, Math.abs(X.roots[1] - X.roots[0]) * 0.95); }
    ts = Math.min(ts, 30);
    k.smooth(view, { c: tc, s: ts }, dt);
    const pad2 = wide ? { l: c.w / 2 + 20, r: 14, t: 16, b: 26 } : { l: 30, r: 14, t: c.h * 0.5 + 12, b: 24 };
    P2 = k.plane(c, { xmin: view.c - view.s, xmax: view.c + view.s, ymin: -view.s * 0.8, ymax: view.s * 0.8, equal: true, pad: pad2, xlabel: "u", ylabel: "v" });
    P2.grid(); P2.axes(); tickBoxes(P2, d, F);
    if (X.type === "point") P2.dot(0, 0, C.cyan, 5);
    else if (X.type === "line") P2.seg(P2.xmin, 0, P2.xmax, 0, C.cyan, 2.5);
    else P2.implicit((u, v) => X.A * u * u + v * v + X.D * u + X.F, C.cyan, 2.5, 4);
    X.roots.forEach(u => P2.dot(u, 0, C.pink, 5));
    const lu = X.roots.length ? X.roots[0] : 0;
    P2.labels([{ text: X.type, x: lu, y: 0, color: C.cyan, font: `600 14px ${F.sans}`, prefer: X.type === "parabola" && X.D > 0 ? "ne" : "nw" },
      { text: "THE CUT, FACE-ON", x: P2.xmax, y: P2.ymin, color: C.faint, font: `600 11px ${F.ui}`, prefer: "nw", halo: false }]);
    // readout
    const hit = X.type === "parabola", cmp = phi < BETA ? "&lt;" : phi > BETA ? "&gt;" : "=";
    const Title = X.type[0].toUpperCase() + X.type.slice(1);
    k.readout({ title: Title + (Math.abs(z0) < 1e-9 ? " (degenerate)" : ""), big: `<span class="c1">φ = ${phi}°</span> ${cmp} 60°`,
      rows: [
        { lhs: `<span class="c1">φ</span>`, v: `${phi}°`, cls: "c1", lbl: "tilt of the cut from horizontal" },
        { lhs: "slant", v: "60°", lbl: "the cone's side (half-angle 30°)" },
        { lhs: `<span class="c4"><i>A</i></span><i>u</i><sup>2</sup> + <span class="c4"><i>C</i></span><i>v</i><sup>2</sup> + …`, v: `<span class="c4"><i>A</i> = ${R.fmtN(X.A, 3)}</span>, <span class="c4"><i>C</i> = 1</span>`, lbl: "the cut's equation: A = cos²φ − ⅓ sin²φ" },
        { lhs: "<i>e</i>", v: R.fmtN(X.e, 3), lbl: "eccentricity sin φ / sin 60°" }
      ],
      landmark: { hit, big: hit ? `φ = 60°: parallel to the side ⇒ <span class="c2">parabola</span>` : `φ ${cmp} 60° ⇒ <span class="c2">${X.type}</span>`,
        note: hit ? "The cut never closes: one open branch, and A = 0." : Math.abs(z0) < 1e-9 ? "Through the tip: a point, a line or two crossing lines." : phi < BETA ? "Flatter than the side: the cut closes into a loop, A·C > 0." : "Steeper than the side: the plane cuts both halves, two branches, A·C < 0." },
      narr: "Drag the ring to tilt, the dot to slide. Tilt snaps to 0° and 60°; slide through the tip for degenerate cuts." });
  }

  function drawClassify(){
    const o = { A: S.A, C: S.C, D: S.D, E: S.E, F: S.F }, r = R.conic(o);
    P3 = k.plane(c, { xmin: -10, xmax: 10, ymin: -8, ymax: 8, equal: true, xlabel: "x", ylabel: "y" });
    P3.grid(); P3.axes(); tickBoxes(P3, d, F);
    const G = (x, y) => o.A * x * x + o.C * y * y + o.D * x + o.E * y + o.F;
    if (r.type === "degenerate" && o.A * o.C > 0) P3.dot(Q.val(r.h), Q.val(r.k), C.cyan, 5);
    else P3.implicit(G, C.cyan, 2.5, 4);
    if (r.type === "hyperbola") r.asymptotes.forEach(a => P3.line(-20, a.b - 20 * a.m, 20, a.b + 20 * a.m, k.alpha(C.text, .35), 1.2, [5, 5]));
    const lab = [];
    const real = ["circle", "ellipse", "hyperbola", "parabola"].includes(r.type);
    if (real) { const [px, py] = r.vertex || r.center; P3.dot(px, py, C.pink, 5); lab.push({ text: `${r.type === "parabola" ? "vertex" : "centre"} ${ptT(r.h, r.k)}`, x: px, y: py, color: C.pink, font: `14px ${F.math}` }); }
    P3.labels(lab);
    const ac = o.A * o.C, hit = ac === 0 && r.type === "parabola";
    const verdict = ac > 0 ? (o.A === o.C ? "same signs, equal: circle" : "same signs: ellipse") : ac < 0 ? "opposite signs: hyperbola" : o.A === 0 && o.C === 0 ? "no squared term: a line" : "one squared variable: parabola";
    const note = { degenerate: "Completing the square leaves 0 on the right (or no second variable): the graph is a point or lines.", empty: "Completing the square leaves a sum of squares equal to a negative number: no points at all.", line: "With A = C = 0 the equation is linear." }[r.type];
    k.readout({ title: "Classify by A and C", big: genEq(o),
      rows: [
        { lhs: `<span class="c4"><i>A</i></span> · <span class="c4"><i>C</i></span>`, v: R.sg(ac), cls: "c4", lbl: verdict },
        { lhs: "graph", v: r.type, cls: "c2", lbl: note },
        real ? { lhs: r.type === "parabola" ? "vertex" : "centre", v: ptT(r.h, r.k), cls: "c3", lbl: r.type === "parabola" ? "" : "h = −D/(2A), k = −E/(2C)" } : null,
        real ? { lhs: "standard", v: `<span class="m">${stdForm(r, true)}</span>`, lbl: "after completing the square" } : null
      ],
      landmark: { hit, big: hit ? `<span class="c4"><i>A</i>·<i>C</i></span> = 0 ⇒ parabola` : `<span class="c4"><i>A</i>·<i>C</i></span> ${ac > 0 ? "&gt;" : ac < 0 ? "&lt;" : "="} 0`,
        note: hit ? "Only one variable is squared, so the curve is open on one side: the boundary between ellipses and hyperbolas." : "Only A and C decide the type. D, E and F move and resize the curve." },
      narr: "Push C through 0: ellipse, then parabola, then hyperbola." });
  }

  function drawStd(){
    const wide = c.w >= 600, sol = cur(), n = sol.lines.length, kk = st ? st.k : 0, done = kk >= n, o = PROBS[idx];
    dom.style.right = wide ? "46%" : "0";
    ask.innerHTML = `Write in standard form: <span class="m">${genEq(o, "c4")}</span>`;
    SP.set(sol.lines, kk - 1);
    k.guard(sol.guard);
    if (wide) {
      P3 = k.plane(c, { xmin: -9, xmax: 9, ymin: -8, ymax: 8, equal: true, pad: { l: c.w * 0.54 + 12, r: 14, t: 16, b: 28 }, xlabel: "x", ylabel: "y" });
      P3.grid(); P3.axes(); tickBoxes(P3, d, F);
      if (done) { const r = sol.r; P3.implicit((x, y) => o.A * x * x + o.C * y * y + o.D * x + o.E * y + o.F, C.cyan, 2.5, 4);
        const [px, py] = r.vertex || r.center; P3.dot(px, py, C.pink, 5); P3.labels([{ text: ptT(r.h, r.k), x: px, y: py, color: C.pink }]); }
    }
    k.readout({ title: "Standard form by completing the square", big: genEq(o),
      rows: [{ lhs: "step", v: `${Math.min(kk, n)} of ${n}`, lbl: kk ? sol.lines[Math.min(kk, n) - 1].tag : "press Step to begin" }],
      landmark: { hit: done, big: done ? `<span class="m c2">${stdForm(sol.r, true)}</span>` : "· · ·", note: done ? `${sol.cen[0].toUpperCase() + sol.cen.slice(1)}: read it from the numbers subtracted inside the squares.` : "Classify, group, complete the square, factor, divide, read." },
      narr: "Step through, then try New problem. Each added square is multiplied by the factor in front before it goes on the right." });
  }

  k.loop(dt => {
    c.begin();
    if (mode === "slice") drawSlice(dt); else if (mode === "cls") drawClassify(); else drawStd();
  });
};

/* ---------- Ellipses: string and pins, axes ---------- */
L["a2-ellipses"] = k => {
  MathKit.attach(k); const { C, F } = k, R = k.MR, Q = R.Q; const c = k.canvas(), d = c.d;
  let mode = "string", P = null, S = null;
  const E = { h: 0, k: 0, c: 3, a: 5, horiz: true, th: 0, drawn: 0, play: true };
  const A = { th: 0.9 };
  const pts = [];
  const bOf = (a, cc) => Math.sqrt(Math.max(0, a * a - cc * cc));
  const geo = () => { // current a, b, c, centre, orientation (both modes)
    if (mode === "string") return { a: E.a, b: bOf(E.a, E.c), c: E.c, h: E.h, k: E.k, horiz: E.horiz };
    const a = S.a, b = S.b; return { a, b, c: bOf(a, b) || 0, h: S.h, k: S.k, horiz: S.o !== "v" };
  };
  const at = (G, th) => (G.horiz ? [G.h + G.a * Math.cos(th), G.k + G.b * Math.sin(th)] : [G.h + G.b * Math.cos(th), G.k + G.a * Math.sin(th)]);
  const foci = G => (G.horiz ? [[G.h - G.c, G.k], [G.h + G.c, G.k]] : [[G.h, G.k - G.c], [G.h, G.k + G.c]]);
  const angleOf = (G, p) => Math.atan2((p.y - G.k) / (G.horiz ? G.b || 1e-6 : G.a), (p.x - G.h) / (G.horiz ? G.a : G.b || 1e-6));
  let slider = null;
  const sync = () => { const G = geo(), [f1, f2] = foci(G), q = at(G, mode === "string" ? E.th : A.th);
    if (mode === "string") { Object.assign(pts[0], { x: G.h, y: G.k }); Object.assign(pts[1], { x: f2[0], y: f2[1] }); Object.assign(pts[2], { x: f1[0], y: f1[1] }); Object.assign(pts[3], { x: q[0], y: q[1] }); }
    else Object.assign(pts[0], { x: q[0], y: q[1] }); };
  const dr = k.drag(c, () => P, pts, (i, p) => {
    if (mode === "axes") { A.th = angleOf(geo(), p); return; }
    if (i === 0) { E.h = clamp(p.x, -5, 5); E.k = clamp(p.y, -3, 3); }
    else if (i === 1 || i === 2) { const s = i === 1 ? 1 : -1, dx = s * (p.x - E.h), dy = s * (p.y - E.k);
      E.horiz = Math.abs(dx) >= Math.abs(dy); E.c = clamp(Math.round(Math.abs(E.horiz ? dx : dy) * 2) / 2, 0, 8.5);
      if (E.c >= E.a) { E.a = E.c + 0.5; slider.set(2 * E.a); } E.drawn = 0; E.th = 0; }
    else { E.th = angleOf(geo(), p); E.drawn = 2 * Math.PI; }
  });
  const build = () => {
    k.ctl.innerHTML = ""; pts.length = 0;
    if (mode === "string") {
      for (let i = 0; i < 3; i++) pts.push({ x: 0, y: 0, snap: 0.5 }); pts.push({ x: 0, y: 0 });
      slider = k.slider(`string <span class="c1">2<i>a</i></span>`, 1, 18, 1, 2 * E.a, v => { E.a = v / 2; if (E.c >= E.a) E.c = Math.max(0, E.a - 0.5); E.drawn = 0; E.th = 0; }, v => String(v));
      k.button("Redraw", () => { E.drawn = 0; E.th = 0; E.play = true; }, "btn-s");
      const pb = k.button("Pause", () => { E.play = !E.play; pb.textContent = E.play ? "Pause" : "Play"; }, "btn-s");
      hintOne(k, "Drag the pins (foci), the centre or the pencil");
    } else {
      pts.push({ x: 0, y: 0 });
      S = k.params([{ key: "a", min: 1, max: 9, step: 0.5, value: 5, cls: "c1" }, { key: "b", min: 0.5, max: 9, step: 0.5, value: 3, cls: "c2" },
        { key: "h", min: -5, max: 5, step: 0.5, value: 0, label: "<i>h</i>" }, { key: "k", min: -4, max: 4, step: 0.5, value: 0, label: "<i>k</i>" }],
        (key, v) => { if (key === "a" && S.b > v) S.set("b", v); if (key === "b" && v > S.a) S.set("b", S.a); });
      S.o = "h"; k.select("major axis", [["h", "horizontal"], ["v", "vertical"]], "h", v => { S.o = v; });
      hintOne(k, "Drag the white point around the ellipse");
    }
    k.guard([]); sync();
  };
  k.modes([["string", "String and pins"], ["axes", "Axes and foci"]], mode, m => { mode = m; build(); });
  build();

  k.loop(dt => {
    c.begin();
    const G = geo(), [f1, f2] = foci(G);
    if (mode === "string" && E.play && dr.active !== 3 && !k.reduce) { E.th += dt * 1.1; if (E.th > 2 * Math.PI) E.th -= 2 * Math.PI; E.drawn = Math.min(2 * Math.PI, Math.max(E.drawn, E.th)); }
    if (mode === "string" && k.reduce) E.drawn = 2 * Math.PI;
    sync();
    P = k.plane(c, { xmin: -10, xmax: 10, ymin: -7, ymax: 7, equal: true, xlabel: "x", ylabel: "y" });
    P.grid(); P.axes(); tickBoxes(P, d, F);
    const th = mode === "string" ? E.th : A.th, q = at(G, th);
    const vx = G.horiz ? [G.h + G.a, G.k] : [G.h, G.k + G.a], cv = G.horiz ? [G.h, G.k + G.b] : [G.h + G.b, G.k];
    const full = mode === "axes" || E.drawn >= 2 * Math.PI - 1e-6;
    P.param(t => at(G, t)[0], t => at(G, t)[1], 0, full ? 2 * Math.PI : Math.max(1e-3, E.drawn), C.text, 2.5);
    // semi-axes and the a-b-c triangle
    P.seg(G.h, G.k, vx[0], vx[1], C.amber, 2); P.seg(G.h, G.k, cv[0], cv[1], C.cyan, 2); P.seg(G.h, G.k, f2[0], f2[1], C.pink, 2);
    P.seg(cv[0], cv[1], f2[0], f2[1], k.alpha(C.amber, .8), 1.5, [5, 4]);
    // the string (or the two focal distances)
    const d1 = Math.hypot(q[0] - f1[0], q[1] - f1[1]), d2 = Math.hypot(q[0] - f2[0], q[1] - f2[1]);
    P.seg(f1[0], f1[1], q[0], q[1], k.alpha(C.amber, mode === "string" ? 1 : .6), mode === "string" ? 2 : 1.4); P.seg(q[0], q[1], f2[0], f2[1], k.alpha(C.amber, mode === "string" ? 1 : .6), mode === "string" ? 2 : 1.4);
    P.dot(f1[0], f1[1], C.pink, 6); P.dot(f2[0], f2[1], C.pink, 6); P.dot(G.h, G.k, C.muted, 4);
    if (mode === "axes") { P.dot(vx[0], vx[1], C.amber, 5); P.dot(2 * G.h - vx[0], 2 * G.k - vx[1], C.amber, 5); P.dot(cv[0], cv[1], C.cyan, 5); P.dot(2 * G.h - cv[0], 2 * G.k - cv[1], C.cyan, 5); }
    P.dot(q[0], q[1], C.text, 5.5);
    const mid = (a, b) => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
    const m1 = mid(f1, q), m2 = mid(f2, q), ma = mid(G.horiz ? [G.h, G.k] : [G.h, G.k], vx), mb = mid([G.h, G.k], cv), mh = mid(cv, f2);
    const lab = [{ text: "F₁", x: f1[0], y: f1[1], color: C.pink, prefer: "sw" }, { text: "F₂", x: f2[0], y: f2[1], color: C.pink, prefer: "se" },
      { text: `d₁ = ${R.fmtN(d1, 2)}`, x: m1[0], y: m1[1], color: C.amber, font: `13px ${F.math}` }, { text: `d₂ = ${R.fmtN(d2, 2)}`, x: m2[0], y: m2[1], color: C.amber, font: `13px ${F.math}` },
      { text: "a", x: mh[0], y: mh[1], color: C.amber, font: `italic 15px ${F.math}`, prefer: "ne" }, { text: "b", x: mb[0], y: mb[1], color: C.cyan, font: `italic 15px ${F.math}` }];
    if (G.c > 0.01) lab.push({ text: "c", x: (G.h + f2[0]) / 2, y: (G.k + f2[1]) / 2, color: C.pink, font: `italic 15px ${F.math}`, prefer: "s" });
    void ma; P.labels(lab);
    // exact numbers (a, b, c are multiples of ½ in String mode; a, b in Axes mode)
    const aQ = Q(G.a), cQ2 = mode === "string" ? Q.pow(Q(E.c), 2) : Q.sub(Q.pow(Q(S.a), 2), Q.pow(Q(S.b), 2)), bQ2 = mode === "string" ? Q.sub(Q.pow(aQ, 2), cQ2) : Q.pow(Q(S.b), 2);
    const circle = Q.zero(cQ2), aa = Q.pow(aQ, 2), cR = sqrtQ(cQ2), eH = circle ? "0" : R.radStr(Q.div(cR.s, aQ), cR.t, true);
    const r = circle ? { type: "circle", h: Q(G.h), k: Q(G.k), r2: aa } : { type: "ellipse", h: Q(G.h), k: Q(G.k), X2: G.horiz ? aa : bQ2, Y2: G.horiz ? bQ2 : aa };
    const hQ = Q(G.h), kQ = Q(G.k);
    if (mode === "string") {
      const hit = Math.abs(Math.cos(E.th)) < 0.07 && !circle;
      k.readout({ title: "String and two pins", big: `<span class="c1">d₁ + d₂</span> = ${R.fmtN(d1, 2)} + ${R.fmtN(d2, 2)} = <span class="c1">${R.qT(Q.mul(2, aQ))}</span>`,
        rows: [
          { lhs: `<span class="c1"><i>a</i></span>`, v: R.qH(aQ), cls: "c1", lbl: "half the string" },
          { lhs: `<span class="c3"><i>c</i></span>`, v: R.qH(Q(E.c)), cls: "c3", lbl: "centre to each pin" },
          { lhs: `<span class="c2"><i>b</i></span> = √<span class="mk-ol"><i>a</i><sup>2</sup> − <i>c</i><sup>2</sup></span>`, v: rootStr(bQ2, true), cls: "c2", lbl: "centre to co-vertex" },
          { lhs: `<span class="c4"><i>e</i></span> = <i>c</i>/<i>a</i>`, v: `${R.qH(Q.div(Q(E.c), aQ))} ≈ ${R.fmtN(E.c / E.a, 3)}`, cls: "c4", lbl: circle ? "pins together: a circle" : "" },
          { lhs: "", v: `<span class="m">${stdForm(r, true)}</span>` }
        ],
        landmark: { hit, big: hit ? `At a co-vertex <i>d</i>₁ = <i>d</i>₂ = <span class="c1"><i>a</i></span>` : "<i>d</i>₁ + <i>d</i>₂ = 2<i>a</i> at every point",
          note: hit ? `So the dashed triangle has legs b and c and hypotenuse a: ${R.qT(bQ2)} + ${R.qT(cQ2)} = ${R.qT(aa)}, which is b² + c² = a².` : circle ? "With both pins at the centre the string is a radius: a circle." : "The landmark lights each time the pencil passes the top or bottom of the curve." },
        narr: "Pull a pin outward: e grows. Push the pins together for a circle." });
    } else {
      const hit = circle, cH = rootStr(cQ2, true);
      const vH = pairStr(hQ, kQ, aa, G.horiz, true), cvH = pairStr(hQ, kQ, bQ2, !G.horiz, true), fH = pairStr(hQ, kQ, cQ2, G.horiz, true);
      k.readout({ title: "Ellipse from a and b", big: `<span class="m">${stdForm(r, true)}</span>`,
        rows: [
          { lhs: `<span class="c3"><i>c</i></span><sup>2</sup> = <span class="c1"><i>a</i></span><sup>2</sup> − <span class="c2"><i>b</i></span><sup>2</sup>`, v: `${R.qT(aa)} − ${R.qT(bQ2)} = ${R.qT(cQ2)}`, lbl: `c = ${cH.replace(/<[^>]+>/g, "")}` },
          { lhs: "vertices", v: vH, cls: "c1" },
          { lhs: "co-vertices", v: cvH, cls: "c2" },
          { lhs: "foci", v: circle ? `${ptT(hQ, kQ)}` : fH, cls: "c3" },
          { lhs: `<span class="c4"><i>e</i></span>`, v: `${eH}${circle ? "" : " ≈ " + R.fmtN(G.c / G.a, 3)}`, cls: "c4", lbl: `white point: d₁ + d₂ = ${R.fmtN(d1, 2)} + ${R.fmtN(d2, 2)} = ${R.qT(Q.mul(2, aQ))}` }
        ],
        landmark: { hit, big: hit ? `<span class="c1"><i>a</i></span> = <span class="c2"><i>b</i></span> ⇒ <span class="c3"><i>c</i></span> = 0` : `<span class="c3"><i>c</i></span><sup>2</sup> = ${R.qT(aa)} − ${R.qT(bQ2)} = ${R.qT(cQ2)}`,
          note: hit ? "Both foci sit at the centre: the ellipse is a circle of radius a and e = 0." : "The dashed amber side, co-vertex to focus, is always a: the hypotenuse of the b, c triangle." },
        narr: "Shrink b and e approaches 1; set b = a for a circle." });
    }
  });
};

/* ---------- Hyperbolas: rectangle, asymptotes, branches ---------- */
L["a2-hyperbolas"] = k => {
  MathKit.attach(k); const { C, F } = k, R = k.MR, Q = R.Q; const c = k.canvas(), d = c.d;
  let mode = "explore", P = null, S = null, st = null, idx = 0, cmp = false, t = 1;
  const H = { sg: 1, s: 0.8 };
  const pts = [{ x: 0, y: 0 }];
  const PROBS = [{ h: 2, k: -1, a2: 16, b2: 9, horiz: true }, { h: 0, k: 0, a2: 9, b2: 16, horiz: false }, { h: -1, k: 2, a2: 4, b2: 4, horiz: true },
    { h: 3, k: 1, a2: 16, b2: 9, horiz: false }, { h: 0, k: 0, a2: 1, b2: 9, horiz: true }];
  const geo = () => { if (mode === "explore") return { a: S.a, b: S.b, h: S.h, k: S.k, horiz: S.o !== "v" };
    const p = PROBS[idx]; return { a: Math.sqrt(p.a2), b: Math.sqrt(p.b2), h: p.h, k: p.k, horiz: p.horiz }; };
  const onBranch = G => (G.horiz ? [G.h + H.sg * G.a * Math.cosh(H.s), G.k + G.b * Math.sinh(H.s)] : [G.h + G.b * Math.sinh(H.s), G.k + H.sg * G.a * Math.cosh(H.s)]);
  k.drag(c, () => (mode === "explore" ? P : null), pts, (i, p) => { const G = geo();
    if (G.horiz) { H.sg = p.x >= G.h ? 1 : -1; H.s = clamp(Math.asinh((p.y - G.k) / G.b), -2.6, 2.6); }
    else { H.sg = p.y >= G.k ? 1 : -1; H.s = clamp(Math.asinh((p.x - G.h) / G.b), -2.6, 2.6); } });
  const restart = () => { t = 0; };
  const build = () => {
    k.ctl.innerHTML = ""; if (st) st.pause(); st = null;
    if (mode === "explore") {
      S = k.params([{ key: "a", min: 0.5, max: 6, step: 0.5, value: 4, cls: "c1" }, { key: "b", min: 0.5, max: 6, step: 0.5, value: 3, cls: "c2" },
        { key: "h", min: -4, max: 4, step: 0.5, value: 0, label: "<i>h</i>" }, { key: "k", min: -3, max: 3, step: 0.5, value: 0, label: "<i>k</i>" }], restart);
      S.o = "h"; k.select("opens", [["h", "left / right"], ["v", "up / down"]], "h", v => { S.o = v; restart(); });
      k.check("compare with ellipse", cmp, v => cmp = v);
      hintOne(k, "Drag the white point along a branch");
      k.guard([]);
    } else {
      hintOne(k, "");
      k.button("New problem", () => { idx = (idx + 1) % PROBS.length; st.reset(); }, "btn-s");
      st = k.stepper(() => 6, () => {});
      const p = PROBS[idx]; k.guard([ptT(p.h, p.k), `c = ${rootStr(Q.add(p.a2, p.b2), false)}`]);
    }
    t = 1;   // open fully drawn; parameter changes replay rectangle → asymptotes → branches
  };
  k.modes([["explore", "Explore"], ["sketch", "Sketch it"]], mode, m => { mode = m; build(); });
  build();

  k.loop(dt => {
    c.begin(); t = k.reduce ? 1 : Math.min(1, t + dt / 1.4);
    if (mode === "sketch") { const p = PROBS[idx]; k.guard([ptT(p.h, p.k), `c = ${rootStr(Q.add(p.a2, p.b2), false)}`]); }
    const G = geo(), cc = Math.hypot(G.a, G.b), m = G.horiz ? G.b / G.a : G.a / G.b;
    const hw = G.horiz ? G.a : G.b, hh = G.horiz ? G.b : G.a;   // rectangle half-width / half-height
    const f = G.horiz ? [[G.h - cc, G.k], [G.h + cc, G.k]] : [[G.h, G.k - cc], [G.h, G.k + cc]];
    const vt = G.horiz ? [[G.h - G.a, G.k], [G.h + G.a, G.k]] : [[G.h, G.k - G.a], [G.h, G.k + G.a]];
    const kk = mode === "sketch" ? (st ? st.k : 0) : 99, show = mode === "sketch" ? { cen: kk >= 1, ax: kk >= 2, rect: kk >= 3, asy: kk >= 4, br: kk >= 5, foc: kk >= 6 } : { cen: true, ax: true, rect: t > 0, asy: t > 0.35, br: t > 0.65, foc: t > 0.65 };
    P = k.plane(c, { xmin: -11, xmax: 11, ymin: -7.5, ymax: 7.5, equal: true, xlabel: "x", ylabel: "y" });
    P.grid(); P.axes(); tickBoxes(P, d, F);
    const lab = [];
    if (show.rect) { P.seg(G.h - hw, G.k - hh, G.h + hw, G.k - hh, k.alpha(C.text, .5), 1.2); P.seg(G.h + hw, G.k - hh, G.h + hw, G.k + hh, k.alpha(C.text, .5), 1.2); P.seg(G.h + hw, G.k + hh, G.h - hw, G.k + hh, k.alpha(C.text, .5), 1.2); P.seg(G.h - hw, G.k + hh, G.h - hw, G.k - hh, k.alpha(C.text, .5), 1.2); }
    if (show.asy) { const X = 30; P.line(G.h - X, G.k - m * X, G.h + X, G.k + m * X, C.violet, 1.6, [7, 5]); P.line(G.h - X, G.k + m * X, G.h + X, G.k - m * X, C.violet, 1.6, [7, 5]);
      const ex = clamp(P.xmax - 0.8 - G.h, 1, 30); lab.push({ text: "asymptote", x: G.h + ex, y: G.k + m * ex, color: C.violet, font: `13px ${F.sans}`, prefer: "sw" }); }
    if (show.foc) { P.clip(() => { const g = c.g, rp = cc * (P.width / (P.xmax - P.xmin)); g.save(); g.strokeStyle = k.alpha(C.pink, .45); g.setLineDash([3, 4]); g.lineWidth = 1.2; g.beginPath(); g.arc(P.X(G.h), P.Y(G.k), rp, 0, 2 * Math.PI); g.stroke(); g.restore(); });
      P.seg(G.h, G.k, G.h + hw, G.k + hh, C.pink, 1.6); lab.push({ text: "c", x: G.h + hw / 2, y: G.k + hh / 2, color: C.pink, font: `italic 15px ${F.math}`, prefer: "nw" }); }
    if (show.br) P.implicit(G.horiz ? (x, y) => (x - G.h) ** 2 / (G.a * G.a) - (y - G.k) ** 2 / (G.b * G.b) - 1 : (x, y) => (y - G.k) ** 2 / (G.a * G.a) - (x - G.h) ** 2 / (G.b * G.b) - 1, C.text, 2.5, 4);
    if (cmp && mode === "explore") { P.param(u => G.h + hw * Math.cos(u), u => G.k + hh * Math.sin(u), 0, 2 * Math.PI, k.alpha(C.cyan, .55), 1.5, [5, 5]);
      const ce = Math.sqrt(Math.abs(G.a * G.a - G.b * G.b)), alongX = hw >= hh; [-1, 1].forEach(s => { if (ce > 0.01) P.point(G.h + (alongX ? s * ce : 0), G.k + (alongX ? 0 : s * ce), C.cyan, 4, true); }); }
    if (show.ax) { const [v2] = [vt[1]]; P.seg(G.h, G.k, v2[0], v2[1], C.amber, 2.2); const bx = G.horiz ? [G.h, G.k + G.b] : [G.h + G.b, G.k]; P.seg(G.h, G.k, bx[0], bx[1], C.cyan, 2.2);
      lab.push({ text: "a", x: (G.h + v2[0]) / 2, y: (G.k + v2[1]) / 2, color: C.amber, font: `italic 15px ${F.math}`, prefer: "s" }, { text: "b", x: (G.h + bx[0]) / 2, y: (G.k + bx[1]) / 2, color: C.cyan, font: `italic 15px ${F.math}`, prefer: "w" });
      vt.forEach(v => P.dot(v[0], v[1], C.amber, 5)); }
    if (show.foc) { f.forEach(q => P.dot(q[0], q[1], C.pink, 6)); lab.push({ text: "F₁", x: f[0][0], y: f[0][1], color: C.pink, prefer: G.horiz ? "s" : "w" }, { text: "F₂", x: f[1][0], y: f[1][1], color: C.pink, prefer: G.horiz ? "s" : "w" }); }
    if (show.cen) P.dot(G.h, G.k, C.muted, 4);
    let d1 = 0, d2 = 0;
    if (mode === "explore" && show.br) { const q = onBranch(G); pts[0].x = q[0]; pts[0].y = q[1]; d1 = Math.hypot(q[0] - f[0][0], q[1] - f[0][1]); d2 = Math.hypot(q[0] - f[1][0], q[1] - f[1][1]);
      P.seg(f[0][0], f[0][1], q[0], q[1], k.alpha(C.amber, .7), 1.4); P.seg(f[1][0], f[1][1], q[0], q[1], k.alpha(C.amber, .7), 1.4); P.dot(q[0], q[1], C.text, 5.5);
      lab.push({ text: `d₁ = ${R.fmtN(d1, 2)}`, x: (q[0] + f[0][0]) / 2, y: (q[1] + f[0][1]) / 2, color: C.amber, font: `13px ${F.math}` }, { text: `d₂ = ${R.fmtN(d2, 2)}`, x: (q[0] + f[1][0]) / 2, y: (q[1] + f[1][1]) / 2, color: C.amber, font: `13px ${F.math}` }); }
    P.labels(lab);
    // exact numbers
    const a2 = Q.pow(Q(G.a), 2), b2 = Q.pow(Q(G.b), 2), c2 = Q.add(a2, b2), hQ = Q(G.h), kQ = Q(G.k);
    const r = { type: "hyperbola", h: hQ, k: kQ, X2: G.horiz ? a2 : Q.neg(b2), Y2: G.horiz ? Q.neg(b2) : a2 };
    const mQ = G.horiz ? Q.div(Q(G.b), Q(G.a)) : Q.div(Q(G.a), Q(G.b)), mH = Q.eq(mQ, 1) ? "" : R.qH(mQ);
    const asyH = `${linTerm("y", kQ, true)} = ±${mH}${linTerm("x", hQ, true)}`.replace(/^\((.*)\) =/, "$1 =");
    const cH = rootStr(c2, true), cR = sqrtQ(c2), eH = R.radStr(Q.div(cR.s, Q(G.a)), cR.t, true);
    const vH = pairStr(hQ, kQ, a2, G.horiz, true), fH = pairStr(hQ, kQ, c2, G.horiz, true);
    if (mode === "explore") {
      const hit = G.a === G.b, ce2 = Q.abs(Q.sub(a2, b2));
      k.readout({ title: "Hyperbola from a and b", big: `<span class="m">${stdForm(r, true)}</span>`,
        rows: [
          { lhs: `<span class="c3"><i>c</i></span><sup>2</sup> = <span class="c1"><i>a</i></span><sup>2</sup> + <span class="c2"><i>b</i></span><sup>2</sup>`, v: `${R.qT(a2)} + ${R.qT(b2)} = ${R.qT(c2)}`, lbl: `c = ${cH.replace(/<[^>]+>/g, "")}, e = c/a = ${eH.replace(/<[^>]+>/g, "")} ≈ ${R.fmtN(cc / G.a, 3)}` },
          { lhs: "vertices", v: vH, cls: "c1" }, { lhs: "foci", v: fH, cls: "c3" },
          { lhs: "asymptotes", v: `<span class="m">${asyH}</span>`, cls: "c4" },
          { lhs: "|<i>d</i>₁ − <i>d</i>₂|", v: show.br ? `|${R.fmtN(d1, 2)} − ${R.fmtN(d2, 2)}| = ${R.qT(Q.mul(2, Q(G.a)))}` : "…", cls: "c1" },
          cmp ? { lhs: "ellipse", v: `<i>c</i><sup>2</sup> = |${R.qT(a2)} − ${R.qT(b2)}| = ${R.qT(ce2)}`, cls: "c2" } : null
        ],
        landmark: { hit, big: hit ? `<span class="c1"><i>a</i></span> = <span class="c2"><i>b</i></span>: perpendicular asymptotes` : `<span class="c3"><i>c</i></span><sup>2</sup> = ${R.qT(a2)} + ${R.qT(b2)} = ${R.qT(c2)}`,
          note: hit ? "A square rectangle: asymptotes of slope ±1 at right angles, e = √2." : "The pink circle through the corners has radius c and passes through the foci." },
        narr: "Change a or b: rectangle, asymptotes, then branches. Tick the ellipse to compare." });
    } else {
      const p = PROBS[idx], dir = G.horiz ? "left and right" : "up and down", posV = G.horiz ? "x" : "y";
      const corners = `(${R.qT(Q.sub(hQ, Q(hw)))}, ${R.qT(Q.sub(kQ, Q(hh)))}) and (${R.qT(Q.add(hQ, Q(hw)))}, ${R.qT(Q.add(kQ, Q(hh)))})`;
      const lines = [
        { lhs: "1 · centre", v: ptT(hQ, kQ) },
        { lhs: "2 · a, b", v: `<i>a</i> = ${R.qT(Q(G.a))}, <i>b</i> = ${R.qT(Q(G.b))}`, lbl: `positive ${posV}-term: opens ${dir}` },
        { lhs: "3 · rectangle", v: `${R.qT(Q(2 * hw))} wide, ${R.qT(Q(2 * hh))} tall`, lbl: `corners ${corners}` },
        { lhs: "4 · asymptotes", v: `<span class="m">${asyH}</span>`, cls: "c4", lbl: "diagonals of the rectangle" },
        { lhs: "5 · branches", v: `from ${G.horiz ? `(${R.qT(Q.sub(hQ, Q(G.a)))}, ${R.qT(kQ)}) and (${R.qT(Q.add(hQ, Q(G.a)))}, ${R.qT(kQ)})` : `(${R.qT(hQ)}, ${R.qT(Q.sub(kQ, Q(G.a)))}) and (${R.qT(hQ)}, ${R.qT(Q.add(kQ, Q(G.a)))})`}`, },
        { lhs: "6 · foci", v: `<i>c</i> = ${cH}`, cls: "c3", lbl: `c² = ${p.a2} + ${p.b2} = ${R.qT(c2)}; foci ${fH.replace(/<[^>]+>/g, "")}` }
      ];
      const rows = R.reveal(lines, kk - 1).map((l, i) => l || { lhs: lines[i].lhs, v: "· · ·" });
      k.readout({ title: "Sketch it step by step", big: `<span class="m">${stdForm(r, true)}</span>`, rows,
        landmark: { hit: kk >= 6, big: kk >= 6 ? `<i>e</i> = <i>c</i>/<i>a</i> = ${eH}` : "· · ·", note: kk >= 6 ? "The foci lie beyond the vertices, so e > 1." : "Rectangle, then asymptotes, then branches." },
        narr: "Step adds one feature at a time." });
    }
  });
};
})();
