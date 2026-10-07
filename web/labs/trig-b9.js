/* ============ Labs: Trigonometry, batch B9 (vectors, vector applications, dot product) ============ */
(function(){
const L = window.LABS;
const MI = "−";

/* ---------- DOM-free helpers (magT = MathRules.sideT; quadFix, tensions are MathRules, web/kits/subjects/trig.js) ---------- */
// Number text with a real minus: nf(-2.5) → "−2.5", nf(3) → "3", nf(1.236, 2) → "1.24".
const nf = (v, d = 1) => { let s = Math.abs(v - Math.round(v)) < 1e-9 ? String(Math.round(v)) : v.toFixed(d); if (/^-0(\.0+)?$/.test(s)) s = s.slice(1); return s.replace("-", MI); };
const vt = (v, d = 1) => `⟨${nf(v[0], d)}, ${nf(v[1], d)}⟩`;
// Exact magnitude of an integer vector: magT([−6, −8]) → "10", magT([2, 3]) → "√13", magT([2, 6]) → "2√10".
const magT = (v, MR) => MR.sideT(v[0] * v[0] + v[1] * v[1]);
const QUAD = ["on an axis", "Quadrant I", "Quadrant II", "Quadrant III", "Quadrant IV"];
const quadOf = v => v[0] > 0 && v[1] > 0 ? 1 : v[0] < 0 && v[1] > 0 ? 2 : v[0] < 0 && v[1] < 0 ? 3 : v[0] > 0 && v[1] < 0 ? 4 : 0;
// The correction tan⁻¹(b/a) needs to become the direction angle: 0, 180 or 360 (null when a = 0).
const quadFix = v => window.MathRules.dirFix(v);
// Two cables at angles al, be (degrees, from the horizontal) holding weight W: equilibrium tensions [T1, T2].
const tensions = (W, al, be) => window.MathRules.tensions(W, al, be);

/* ---------- trig-vectors ---------- */
L["trig-vectors"] = k => {
  MathKit.attach(k);
  const MR = k.MR, V = MR.V, C = k.C;
  const c = k.canvas(), host = k.dom(), SP = k.stepsPanel(host);
  let mode = "comp", P = null, par = false, sub = false, pi = 0;
  const u = { x: 4, y: 1 }, v = { x: -3, y: 4 }, dp = [];
  const PROBS = [[[-1, 2], [3, -1]], [[2, -3], [-3, 9]], [[5, 5], [1, 8]], [[-2, -1], [4, -9]], [[3, 4], [-4, -3]]];
  k.modes([["comp", "Components"], ["turn", "Your turn"], ["add", "Add"], ["scale", "Scale"]], mode, m => { mode = m; setup(); });
  let turnSt; k.group("turn", () => { turnSt = k.stepper(() => 5, () => {}); k.button("New problem", () => { pi = (pi + 1) % PROBS.length; turnSt.reset(); }, "btn ghost"); });
  k.group("add", () => { k.button("Parallelogram", e => { par = !par; e.target.textContent = par ? "Tip-to-tail" : "Parallelogram"; }, "btn ghost"); k.button("Show u − v", e => { sub = !sub; e.target.textContent = sub ? "Show u + v" : "Show u − v"; }, "btn ghost"); });
  const S = k.group("scale", () => k.params([{ key: "k", label: `<span class="c5"><i>k</i></span>`, min: -3, max: 3, step: 0.5, value: 2, fmt: x => nf(x, 1) }]));
  function setup(){
    k.showGroup(mode); dp.length = 0;
    if (mode === "comp" || mode === "scale") dp.push(v); if (mode === "add") dp.push(u, v);
    if (mode === "turn") { turnSt.reset(); }
    k.hint(mode === "comp" ? "Drag the tip of v into each quadrant. Watch when tan⁻¹(b/a) alone points the wrong way." : mode === "turn" ? "Step through: components, magnitude, tan⁻¹, quadrant, direction angle." : mode === "add" ? "Drag the tips of u and v. Toggle the parallelogram and subtraction." : "Slide k below 0 and watch the arrow turn around.");
  }
  k.drag(c, () => P, dp);
  [u, v].forEach(p => { p.snap = 1; });
  function prob(){ const [A, B] = PROBS[pi], w = [B[0] - A[0], B[1] - A[1]], th = V.dir(w), nv = V.naiveDir(w); return { A, B, w, th, nv, fix: quadFix(w) }; }
  function turnAnswers(){ const p = prob(); return [vt(p.w), nf(p.th, 1) + "°"]; }
  setup();
  k.loop(() => {
    c.begin();
    const pad = k.split(c, host, mode === "turn" ? { frac: .42 } : { off: true }), labs = [];
    const lim = mode === "comp" ? 6 : mode === "add" ? 4 : 3;
    [u, v].forEach(p => { p.clamp = [-lim, lim, -lim, lim]; });
    if (mode === "turn") {
      const p = prob(), st = turnSt.k;
      k.guard(turnAnswers());
      P = k.plane(c, Object.assign(k.fit([p.A, p.B, [0, 0]], .2), { equal: true, pad })); P.grid(); P.axes();
      const { A, B } = p;
      if (st >= 1) { P.vec(A[0], A[1], B[0], A[1], C.cyan, { dash: [5, 4], head: false }); P.vec(B[0], A[1], B[0], B[1], C.pink, { dash: [5, 4], head: false }); labs.push({ text: "a = " + nf(p.w[0]), x: (A[0] + B[0]) / 2, y: A[1], color: C.cyan }, { text: "b = " + nf(p.w[1]), x: B[0], y: (A[1] + B[1]) / 2, color: C.pink }); }
      P.vec(A[0], A[1], B[0], B[1], C.cyan, { w: 3 });
      if (st >= 3) { const m = V.mag(p.w), t = p.nv * Math.PI / 180; P.vec(A[0], A[1], A[0] + m * .6 * Math.cos(t), A[1] + m * .6 * Math.sin(t), k.alpha(C.text, .5), { dash: [3, 5] }); }
      if (st >= 5) { P.seg && P.seg(A[0], A[1], A[0] + 1.5, A[1], C.muted); const an = P.angleArc(A[0], A[1], 26, 0, p.th * Math.PI / 180, C.amber, { arrow: true }); if (an) labs.push({ text: "θ", x: an.x, y: an.y, color: C.amber }); }
      P.dot(A[0], A[1]); P.dot(B[0], B[1]);
      labs.push({ text: `P(${nf(A[0])}, ${nf(A[1])})`, x: A[0], y: A[1], color: C.text }, { text: `Q(${nf(B[0])}, ${nf(B[1])})`, x: B[0], y: B[1], color: C.text });
      SP.set([
        { tag: "components", eq: `<b>v</b> = ⟨${nf(B[0])} − ${nf(A[0]).replace(MI, "(" + MI) + (A[0] < 0 ? ")" : "")}, ${nf(B[1])} − ${nf(A[1]).replace(MI, "(" + MI) + (A[1] < 0 ? ")" : "")}⟩ = ${vt(p.w)}`, why: "terminal minus initial" },
        { tag: "magnitude", eq: `‖<b>v</b>‖ = √<span class="mk-ol">${nf(p.w[0] * p.w[0])} + ${nf(p.w[1] * p.w[1])}</span> = ${magT(p.w, MR)}`, why: "Pythagorean Theorem" },
        { tag: "calculator", eq: `tan<sup>−1</sup>(${nf(p.w[1])}/${nf(p.w[0])}) ≈ ${nf(p.nv, 2)}°`, why: "range (−90°, 90°) only" },
        { tag: "quadrant", eq: `${QUAD[quadOf(p.w)]}: add ${p.fix}°`, why: p.fix ? (p.fix === 180 ? "a < 0, so the calculator angle points the opposite way" : "a > 0, b < 0: make the angle positive") : "the calculator angle is already right" },
        { tag: "direction", eq: `<i>θ</i> ≈ ${nf(p.nv, 2)}° + ${p.fix}° ≈ ${nf(p.th, 1)}°`, why: "measured from the positive x-axis" }
      ], st - 1);
      k.readout({ title: "Your turn", big: `<b>v</b> = <span class="c2">${st >= 1 ? vt(p.w) : "⟨?, ?⟩"}</span>`, rows: [{ lhs: "‖<b>v</b>‖ =", v: st >= 2 ? magT(p.w, MR) : "?", cls: "c4" }, { lhs: "<i>θ</i> ≈", v: st >= 5 ? nf(p.th, 1) + "°" : "?", cls: "c1" }], landmark: { hit: st >= 5, big: "Quadrant fixed", note: st >= 5 ? "tan⁻¹ alone would have given " + nf(p.nv, 1) + "°." : "Reached at the last step." }, narr: "Press Step for each line, then New problem." });
    } else if (mode === "comp") {
      k.guard([]);
      P = k.plane(c, { xmin: -7, xmax: 7, ymin: -7, ymax: 7, equal: true, pad }); P.grid(); P.axes();
      const w = [v.x, v.y], m = V.mag(w);
      if (m > 0) {
        const th = V.dir(w), fx = quadFix(w);
        P.vec(0, 0, w[0], 0, C.cyan, { dash: [5, 4], head: false }); P.vec(w[0], 0, w[0], w[1], C.pink, { dash: [5, 4], head: false });
        if (fx) { const t = V.naiveDir(w) * Math.PI / 180; P.vec(0, 0, m * Math.cos(t), m * Math.sin(t), k.alpha(C.text, .45), { dash: [3, 5] }); labs.push({ text: "tan⁻¹(b/a)", x: m * .8 * Math.cos(t), y: m * .8 * Math.sin(t), color: C.muted }); }
        const an = P.angleArc(0, 0, 24, 0, th * Math.PI / 180, C.amber, { arrow: true });
        P.vec(0, 0, w[0], w[1], C.cyan, { w: 3 });
        labs.push({ text: "a = " + nf(w[0]), x: w[0] / 2, y: 0, color: C.cyan }, { text: "b = " + nf(w[1]), x: w[0], y: w[1] / 2, color: C.pink }, { text: "‖v‖ = " + magT(w, MR), x: w[0] * .55, y: w[1] * .55, color: C.violet });
        if (an) labs.push({ text: "θ", x: an.x, y: an.y, color: C.amber });
        k.readout({ title: "Components", big: `<b>v</b> = ⟨<span class="c2">${nf(w[0])}</span>, <span class="c3">${nf(w[1])}</span>⟩ = <span class="c2">${nf(w[0])}</span><b>i</b> + <span class="c3">${nf(w[1])}</span><b>j</b>`, rows: [
          { lhs: "‖<b>v</b>‖ =", v: magT(w, MR) + (Number.isInteger(m) ? "" : " ≈ " + nf(m, 2)), cls: "c4" },
          { lhs: "tan<sup>−1</sup>(<i>b</i>/<i>a</i>) ≈", v: w[0] ? nf(V.naiveDir(w), 1) + "°" : "undefined", lbl: QUAD[quadOf(w)] },
          { lhs: "<i>θ</i> ≈", v: nf(th, 1) + "°", cls: "c1", lbl: fx ? "add " + fx + "°" : w[0] ? "no fix needed" : "on the y-axis" }],
          landmark: { hit: fx === 180, big: "tan⁻¹ points the wrong way", note: "With a < 0 the calculator's angle is off by 180°." }, narr: "Try a vector in Quadrant III, then one in Quadrant IV." });
      } else k.readout({ title: "Components", big: "<b>v</b> = <b>0</b>", narr: "The zero vector has no direction. Drag the tip away from the origin." });
    } else if (mode === "add") {
      k.guard([]);
      P = k.plane(c, { xmin: -8.5, xmax: 8.5, ymin: -8.5, ymax: 8.5, equal: true, pad }); P.grid(); P.axes();
      const a = [u.x, u.y], b = sub ? [-v.x, -v.y] : [v.x, v.y], r = V.add(a, b), nm = sub ? "u − v" : "u + v";
      if (par) {
        P.vec(a[0], a[1], r[0], r[1], k.alpha(C.cyan, .6), { dash: [5, 4], head: false }); P.vec(b[0], b[1], r[0], r[1], k.alpha(C.amber, .6), { dash: [5, 4], head: false });
        if (sub) P.vec(0, 0, b[0], b[1], C.cyan, { dash: [4, 3] });
      } else { P.vec(a[0], a[1], r[0], r[1], C.cyan, sub ? { dash: [4, 3] } : {}); }
      P.vec(0, 0, v.x, v.y, sub || !par ? k.alpha(C.cyan, .4) : C.cyan); P.vec(0, 0, a[0], a[1], C.amber); P.vec(0, 0, r[0], r[1], C.green, { w: 3 });
      labs.push({ text: "u", x: a[0] * .55, y: a[1] * .55, color: C.amber }, { text: "v", x: v.x * .55, y: v.y * .55, color: C.cyan }, { text: nm, x: r[0] * .6, y: r[1] * .6, color: C.green });
      if (sub) labs.push({ text: "−v", x: (par ? b[0] : a[0] + b[0] / 2) * (par ? .55 : 1), y: (par ? b[1] : a[1] + b[1] / 2) * (par ? .55 : 1), color: C.cyan });
      const mu = V.mag(a), mv = V.mag([v.x, v.y]), mr = V.mag(r), same = mu > 0 && mv > 0 && Math.abs(a[0] * b[1] - a[1] * b[0]) < 1e-9 && V.dot(a, b) > 0;
      k.readout({ title: sub ? "Difference" : "Sum", big: `<span class="c5"><b>${sub ? "u − v" : "u + v"}</b> = ${vt(r)}</span>`, rows: [
        { lhs: "<b>u</b> =", v: vt(a), cls: "c1" }, { lhs: "<b>v</b> =", v: vt([v.x, v.y]), cls: "c2" },
        { lhs: `‖<b>${nm}</b>‖ ≈`, v: nf(mr, 2), cls: "c5", lbl: "≤ ‖u‖ + ‖v‖ ≈ " + nf(mu + mv, 2) }],
        landmark: { hit: same, big: "‖" + nm + "‖ = ‖u‖ + ‖v‖", note: "Magnitudes add only when the arrows point the same way." }, narr: par ? "The resultant is the diagonal of the parallelogram." : "Follow u, then " + (sub ? "−v" : "v") + ": the resultant runs from start to finish." });
    } else {
      k.guard([]);
      P = k.plane(c, { xmin: -10, xmax: 10, ymin: -10, ymax: 10, equal: true, pad }); P.grid(); P.axes();
      const w = [v.x, v.y], kv = V.scale(S.k, w), m = V.mag(w);
      P.vec(0, 0, kv[0], kv[1], C.green, { w: 4 }); P.vec(0, 0, w[0], w[1], C.cyan, { w: 2 });
      labs.push({ text: "v", x: w[0] * .5, y: w[1] * .5, color: C.cyan }, { text: nf(S.k) + "v", x: kv[0] * .8, y: kv[1] * .8, color: C.green });
      const th = m ? V.dir(w) : NaN;
      k.readout({ title: "Scalar multiple", big: `<span class="c5">${nf(S.k)}<b>v</b> = ${nf(S.k)}${vt(w)} = ${vt(kv)}</span>`, rows: [
        { lhs: `‖${nf(S.k)}<b>v</b>‖ = |${nf(S.k)}| ‖<b>v</b>‖ ≈`, v: nf(Math.abs(S.k) * m, 2), cls: "c4" },
        { lhs: "direction ≈", v: S.k === 0 || !m ? "none" : nf(S.k > 0 ? th : (th + 180) % 360, 1) + "°", cls: "c1", lbl: S.k < 0 ? "θ + 180°" : S.k > 0 ? "same as v" : "zero vector" }],
        landmark: { hit: S.k < 0, big: "k < 0 reverses the arrow", note: "The direction angle changes by 180°." }, narr: "Try k = −1: that is −v, used in subtraction." });
    }
    P.labels(labs);
  });
};

/* ---------- trig-vector-apps ---------- */
L["trig-vector-apps"] = k => {
  MathKit.attach(k);
  const V = k.MR.V, C = k.C, D = Math.PI / 180;
  const c = k.canvas(), host = k.dom(), SP = k.stepsPanel(host);
  let mode = "wind", pi = 0, view = { r: 500 };
  const PROBS = [[60, 300, 330, 40], [210, 450, 90, 60], [300, 250, 180, 35], [15, 520, 250, 70]];
  k.modes([["wind", "Plane & wind"], ["turn", "Your turn"], ["eq", "Equilibrium"], ["inc", "Incline"]], mode, m => { mode = m; setup(); });
  const deg = x => x + "°";
  const SW = k.group("wind", () => k.params([
    { key: "h", label: `<span class="c1">heading</span>`, min: 0, max: 355, step: 5, value: 120, fmt: deg },
    { key: "s", label: `<span class="c1">airspeed</span>`, min: 100, max: 500, step: 10, value: 400, fmt: x => x + " mph" },
    { key: "wf", label: `<span class="c2">wind from</span>`, min: 0, max: 355, step: 5, value: 200, fmt: deg },
    { key: "ws", label: `<span class="c2">wind speed</span>`, min: 0, max: 150, step: 5, value: 50, fmt: x => x + " mph" }]));
  let turnSt; k.group("turn", () => { turnSt = k.stepper(() => 6, () => {}); k.button("New problem", () => { pi = (pi + 1) % PROBS.length; turnSt.reset(); }, "btn ghost"); });
  const SE = k.group("eq", () => k.params([
    { key: "W", label: "weight", min: 50, max: 500, step: 10, value: 200, fmt: x => x + " N" },
    { key: "al", label: `<span class="c1">left angle</span>`, min: 20, max: 75, step: 5, value: 30, fmt: deg },
    { key: "be", label: `<span class="c2">right angle</span>`, min: 20, max: 75, step: 5, value: 45, fmt: deg }]));
  const SI = k.group("inc", () => k.params([
    { key: "t", label: `<span class="c4">ramp angle</span>`, min: 5, max: 60, step: 1, value: 25, fmt: deg },
    { key: "W", label: "weight", min: 10, max: 500, step: 10, value: 100, fmt: x => x + " lb" }]));
  function setup(){ k.showGroup(mode); if (mode === "turn") turnSt.reset();
    k.hint(mode === "wind" ? "Set a heading and a wind. The green ground vector is where the plane really goes." : mode === "turn" ? "" : mode === "eq" ? "Change the cable angles. Flatter cables need far more tension." : "Steepen the ramp: the part of the weight along it grows."); }
  function nav(h, s, wf, ws){ const a = V.fromPolar(s, V.fromBearing(h)), to = (wf + 180) % 360, w = V.fromPolar(ws, V.fromBearing(to)), g = V.add(a, w), gs = V.mag(g), crs = V.toBearing(V.dir(g)); let dr = crs - h; dr = ((dr + 540) % 360) - 180; return { a, w, g, gs, crs, to, dr }; }
  function drawNav(P, n, h, showG, labs){
    const north = P.ymax * .9; P.vec(0, 0, 0, north, k.alpha(C.text, .35), { dash: [3, 5] }); labs.push({ text: "N", x: 0, y: north, color: C.muted });
    P.angleArc(0, 0, 28, Math.PI / 2 - h * D, Math.PI / 2, C.violet);
    P.vec(0, 0, n.a[0], n.a[1], C.amber, { w: 3 }); P.vec(n.a[0], n.a[1], n.g[0], n.g[1], C.cyan, { w: 2.5 });
    labs.push({ text: "a", x: n.a[0] * .5, y: n.a[1] * .5, color: C.amber }, { text: "w", x: n.a[0] + n.w[0] * .5, y: n.a[1] + n.w[1] * .5, color: C.cyan });
    if (showG) { P.vec(0, 0, n.g[0], n.g[1], C.green, { w: 3 }); labs.push({ text: "g", x: n.g[0] * .45, y: n.g[1] * .45, color: C.green }); }
  }
  setup();
  k.loop(dt => {
    c.begin(); const labs = []; let P;
    const pad = k.split(c, host, mode === "turn" ? { frac: .44 } : { off: true });
    if (mode === "wind" || mode === "turn") {
      const pr = mode === "wind" ? [SW.h, SW.s, SW.wf, SW.ws] : PROBS[pi], n = nav(...pr), st = mode === "turn" ? turnSt.k : 9;
      k.smooth(view, { r: (pr[1] + pr[3]) * 1.12 }, dt);
      P = k.plane(c, { xmin: -view.r, xmax: view.r, ymin: -view.r, ymax: view.r, equal: true, pad, xlabel: "E", ylabel: "N" }); P.grid(); P.axes();
      drawNav(P, n, pr[0], st >= 4, labs);
      if (mode === "wind") {
        k.guard([]);
        k.readout({ title: "Ground velocity", big: `<span class="c5">‖<b>g</b>‖ ≈ ${nf(n.gs, 0)} mph</span>`, rows: [
          { lhs: "<b>g</b> = <b>a</b> + <b>w</b> ≈", v: vt(n.g, 1), cls: "c5" }, { lhs: "course ≈", v: nf(n.crs, 1) + "°", cls: "c5", lbl: "heading " + pr[0] + "°" },
          { lhs: "drift ≈", v: nf(Math.abs(n.dr), 1) + "°", lbl: Math.abs(n.dr) < .05 ? "" : n.dr > 0 ? "right of heading" : "left of heading" },
          { lhs: "wind blows toward", v: String(n.to).padStart(3, "0") + "°", cls: "c2" }],
          landmark: { hit: SW.ws > 0 && Math.abs(n.dr) < .05, big: "No drift", note: "Head wind or tail wind: speeds simply subtract or add." }, narr: "Set the wind from 90° to the heading: the drift is largest there." });
      } else {
        const [h, s, wf, ws] = pr, ta = V.fromBearing(h), tw = V.fromBearing(n.to);
        k.guard([nf(n.gs, 0) + " mph", nf(n.crs, 1) + "°"]);
        SP.set([
          { tag: "angles", eq: `<b>a</b>: 90° − ${h}° → ${nf(ta)}°; &nbsp;<b>w</b> toward ${String(n.to).padStart(3, "0")}°: ${nf(tw)}°`, why: "bearing → direction angle; the wind blows away from where it comes from" },
          { tag: "air", eq: `<b>a</b> = ⟨${s} cos ${nf(ta)}°, ${s} sin ${nf(ta)}°⟩ ≈ ${vt(n.a, 2)}`, why: "heading and airspeed" },
          { tag: "wind", eq: `<b>w</b> ≈ ${vt(n.w, 2)}`, why: ws + " mph in components" },
          { tag: "sum", eq: `<b>g</b> = <b>a</b> + <b>w</b> ≈ ${vt(n.g, 2)}`, why: "add the components" },
          { tag: "ground speed", eq: `‖<b>g</b>‖ ≈ ${nf(n.gs, 0)} mph`, why: "magnitude of g" },
          { tag: "course", eq: `<i>θ</i> ≈ ${nf(V.dir(n.g), 2)}° → bearing ≈ ${nf(n.crs, 1)}°`, why: "β = 90° − θ, plus 360° if negative" }
        ], st - 1);
        k.readout({ title: "Your turn", big: `heading ${h}° · ${s} mph`, rows: [{ lhs: "wind from", v: wf + "° at " + ws + " mph", cls: "c2" }, { lhs: "ground speed", v: st >= 5 ? nf(n.gs, 0) + " mph" : "?", cls: "c5" }, { lhs: "course", v: st >= 6 ? nf(n.crs, 1) + "°" : "?", cls: "c5" }],
          landmark: { hit: st >= 6, big: "Course found", note: st >= 6 ? "The wind turns the plane " + nf(Math.abs(n.dr), 1) + "° off its heading." : "Reached at the last step." }, narr: "Step, then New problem." });
      }
    } else if (mode === "eq") {
      k.guard([]);
      const W = SE.W, al = SE.al, be = SE.be, [T1, T2] = tensions(W, al, be), Hc = 1.5, A1 = [-Hc / Math.tan(al * D), Hc], A2 = [Hc / Math.tan(be * D), Hc];
      P = k.plane(c, { xmin: -5, xmax: 9.6, ymin: -3.2, ymax: 2.2, equal: true, pad }); P.grid();
      P.seg(-4.8, Hc, 4.8, Hc, C.muted); P.seg(A1[0], A1[1], 0, 0, C.text); P.seg(A2[0], A2[1], 0, 0, C.text); P.seg(0, 0, 0, -.9, C.text);
      c.d.rect(P.X(-.35), P.Y(-.9), P.X(.35) - P.X(-.35), P.Y(-1.5) - P.Y(-.9), k.alpha(C.text, .25));
      const a1 = P.vertexArc(A1, [A1[0] + 1, Hc], [0, 0], 26, C.violet), a2 = P.vertexArc(A2, [A2[0] - 1, Hc], [0, 0], 26, C.violet);
      const mx = Math.max(T1, T2, W), s1 = 1.4 / mx, u1 = [-Math.cos(al * D) * T1, Math.sin(al * D) * T1], u2 = [Math.cos(be * D) * T2, Math.sin(be * D) * T2];
      P.vec(0, 0, u1[0] * s1, u1[1] * s1, C.amber, { w: 3 }); P.vec(0, 0, u2[0] * s1, u2[1] * s1, C.cyan, { w: 3 }); P.vec(0, 0, 0, -W * s1, C.pink, { w: 3 });
      labs.push({ text: "T₁", x: u1[0] * s1 * .7, y: u1[1] * s1 * .7, color: C.amber }, { text: "T₂", x: u2[0] * s1 * .7, y: u2[1] * s1 * .7, color: C.cyan }, { text: "W", x: .25, y: -W * s1 * .8, color: C.pink });
      if (a1) labs.push({ text: "α = " + al + "°", x: a1.x, y: a1.y, color: C.violet }); if (a2) labs.push({ text: "β = " + be + "°", x: a2.x, y: a2.y, color: C.violet });
      const s2 = 3.6 / mx, o = [6.2, 1.7], p1 = [o[0], o[1] - W * s2], p2 = [p1[0] + u2[0] * s2, p1[1] + u2[1] * s2];
      P.vec(o[0], o[1], p1[0], p1[1], C.pink, { w: 2 }); P.vec(p1[0], p1[1], p2[0], p2[1], C.cyan, { w: 2 }); P.vec(p2[0], p2[1], o[0], o[1], C.amber, { w: 2 });
      labs.push({ text: "W + T₂ + T₁ = 0", x: o[0] + 1, y: p1[1] - .15, color: C.green });
      k.readout({ title: "Equilibrium", big: `<span class="c1"><b>T</b><sub>1</sub></span> + <span class="c2"><b>T</b><sub>2</sub></span> + <span class="c3"><b>W</b></span> = <b>0</b>`, rows: [
        { lhs: "<i>T</i><sub>1</sub> ≈", v: nf(T1, 1) + " N", cls: "c1" }, { lhs: "<i>T</i><sub>2</sub> ≈", v: nf(T2, 1) + " N", cls: "c2" },
        { lhs: `x: <i>T</i><sub>1</sub> cos <i>α</i> = <i>T</i><sub>2</sub> cos <i>β</i> ≈`, v: nf(T1 * Math.cos(al * D), 1) },
        { lhs: `y: <i>T</i><sub>1</sub> sin <i>α</i> + <i>T</i><sub>2</sub> sin <i>β</i> =`, v: W + " N", cls: "c3" },
        ],
        landmark: { hit: al === be, big: "Symmetric cables", note: "T₁ = T₂ = W / (2 sin α)." }, narr: "The force triangle closes: the three forces sum to zero." });
    } else {
      k.guard([]);
      const t = SI.t * D, W = SI.W, B0 = [-4, 0], top = [-4 + 8 * Math.cos(t), 8 * Math.sin(t)], R0 = [top[0], 0];
      P = k.plane(c, { xmin: -4.8, xmax: 4.8, ymin: -2.9, ymax: 7.4, equal: true, pad }); P.grid();
      P.tri(B0, R0, top, { colors: [C.muted, C.muted, C.muted], fill: k.alpha(C.text, .06) });
      const an = P.vertexArc(B0, R0, top, 30, C.violet);
      const nrm = [-Math.sin(t), Math.cos(t)], M = [-4 + 4 * Math.cos(t) + nrm[0] * .4, 4 * Math.sin(t) + nrm[1] * .4], L0 = 2.6;
      const cs = Math.cos(t), sn = Math.sin(t), cx = M[0], cy = M[1];
      const corners = [[-.5, -.4], [.5, -.4], [.5, .4], [-.5, .4]].map(([x, y]) => [cx + x * cs - y * sn, cy + x * sn + y * cs]);
      c.g.save(); c.g.fillStyle = k.alpha(C.text, .3); c.g.beginPath(); corners.forEach(([x, y], i) => i ? c.g.lineTo(P.X(x), P.Y(y)) : c.g.moveTo(P.X(x), P.Y(y))); c.g.closePath(); c.g.fill(); c.g.restore();
      const along = [-cs * L0 * sn, -sn * L0 * sn], into = [sn * L0 * cs, -cs * L0 * cs], Wt = [cx, cy - L0];
      P.vec(cx, cy, cx + along[0], cy + along[1], C.pink, { dash: [5, 4] }); P.vec(cx, cy, cx + into[0], cy + into[1], C.pink, { dash: [5, 4] });
      P.seg(cx + along[0], cy + along[1], Wt[0], Wt[1], k.alpha(C.pink, .4)); P.seg(cx + into[0], cy + into[1], Wt[0], Wt[1], k.alpha(C.pink, .4));
      P.vec(cx, cy, Wt[0], Wt[1], C.text, { w: 3 });
      const a2 = P.vertexArc([cx, cy], Wt, [cx + into[0], cy + into[1]], 34, C.violet);
      labs.push({ text: "W", x: cx + .2, y: cy - L0 * .85, color: C.text }, { text: "W sin θ", x: cx + along[0] * .9, y: cy + along[1] * .9, color: C.pink }, { text: "W cos θ", x: cx + into[0] * .9, y: cy + into[1] * .9, color: C.pink });
      if (an) labs.push({ text: "θ", x: an.x, y: an.y, color: C.violet }); if (a2) labs.push({ text: "θ", x: a2.x, y: a2.y, color: C.violet });
      k.readout({ title: "Incline", big: `<span class="c3">${W} sin ${SI.t}° ≈ ${nf(W * sn, 1)} lb</span> along`, rows: [
        { lhs: `${W} cos ${SI.t}° ≈`, v: nf(W * cs, 1) + " lb", cls: "c3", lbl: "into the ramp" },
        { lhs: "to hold it:", v: nf(W * sn, 1) + " lb", lbl: "up the slope" }],
        landmark: { hit: SI.t === 45, big: "45°: equal components", note: "sin 45° = cos 45°, so both parts are W/√2." }, narr: "The angle between W and the into-ramp part equals the ramp angle." });
    }
    P.labels(labs);
  });
};

/* ---------- trig-dot-product ---------- */
L["trig-dot-product"] = k => {
  MathKit.attach(k);
  const MR = k.MR, V = MR.V, Q = MR.Q, C = k.C, D = Math.PI / 180;
  const c = k.canvas(), host = k.dom(), SP = k.stepsPanel(host);
  let mode = "angle", P = null, pi = 0;
  const u = { x: 4, y: 3, snap: 1, clamp: [-6, 6, -6, 6] }, v = { x: 1, y: 2, snap: 1, clamp: [-6, 6, -6, 6] }, dp = [u, v];
  const PROBS = [[[1, 7], [1, 2]], [[6, -2], [1, 1]], [[-3, 4], [2, 1]], [[10, -5], [3, 4]]];
  k.modes([["angle", "Angle"], ["proj", "Project"], ["turn", "Your turn"], ["work", "Work"]], mode, m => { mode = m; setup(); });
  let turnSt; k.group("turn", () => { turnSt = k.stepper(() => 6, () => {}); k.button("New problem", () => { pi = (pi + 1) % PROBS.length; turnSt.reset(); }, "btn ghost"); });
  const SW = k.group("work", () => k.params([
    { key: "F", label: `<span class="c1">force</span>`, min: 10, max: 100, step: 5, value: 60, fmt: x => x + " N" },
    { key: "t", label: `<span class="c4">angle</span>`, min: 0, max: 90, step: 5, value: 35, fmt: x => x + "°" },
    { key: "d", label: `<span class="c2">distance</span>`, min: 5, max: 50, step: 5, value: 25, fmt: x => x + " m" }]));
  function setup(){ k.showGroup(mode); dp.length = 0; if (mode === "angle" || mode === "proj") dp.push(u, v); if (mode === "turn") turnSt.reset();
    k.hint(mode === "angle" ? "Drag u and v. Find a position where u · v = 0." : mode === "proj" ? "Drag u and v. The green shadow is the projection of u onto v." : mode === "turn" ? "" : "Raise the rope angle: less of the pull moves the sled."); }
  k.drag(c, () => P, dp);
  const qv = (q, w) => [Q.mul(q, Q(w[0])), Q.mul(q, Q(w[1]))], qvt = a => `⟨${MR.qT(a[0])}, ${MR.qT(a[1])}⟩`;
  setup();
  k.loop(() => {
    c.begin(); const labs = [];
    const pad = k.split(c, host, mode === "turn" ? { frac: .44 } : { off: true });
    if (mode === "angle" || mode === "proj") {
      k.guard([]);
      P = k.plane(c, { xmin: -7, xmax: 7, ymin: -7, ymax: 7, equal: true, pad }); P.grid(); P.axes();
      const a = [u.x, u.y], b = [v.x, v.y], d = V.dot(a, b), ma = V.mag(a), mb = V.mag(b);
      if (!ma || !mb) { P.vec(0, 0, a[0], a[1], C.amber); P.vec(0, 0, b[0], b[1], C.cyan); k.readout({ title: "Dot product", big: "<b>u</b> · <b>v</b> = " + nf(d), narr: "A zero vector has no angle. Drag both tips away from the origin." }); P.labels(labs); return; }
      if (mode === "angle") {
        const an = P.vertexArc([0, 0], a, b, 30, C.violet), th = V.angle(a, b);
        P.vec(0, 0, a[0], a[1], C.amber, { w: 3 }); P.vec(0, 0, b[0], b[1], C.cyan, { w: 3 });
        labs.push({ text: "u", x: a[0] * .6, y: a[1] * .6, color: C.amber }, { text: "v", x: b[0] * .6, y: b[1] * .6, color: C.cyan }); if (an) labs.push({ text: "θ", x: an.x, y: an.y, color: C.violet });
        const kind = d > 0 ? "acute" : d < 0 ? "obtuse" : "right";
        k.readout({ title: "Angle between", big: `<b>u</b> · <b>v</b> = ${nf(a[0])}(${nf(b[0])}) + ${nf(a[1])}(${nf(b[1])}) = <span class="c5">${nf(d)}</span>`, rows: [
          { lhs: "‖<b>u</b>‖ ‖<b>v</b>‖ =", v: magT(a, MR) + " · " + magT(b, MR) },
          { lhs: "cos <i>θ</i> = <b>u</b> · <b>v</b> / (‖<b>u</b>‖ ‖<b>v</b>‖) ≈", v: nf(d / (ma * mb), 3) },
          { lhs: "<i>θ</i> ≈", v: nf(th, 2) + "°", cls: "c4", lbl: kind + (d > 0 ? " (u · v > 0)" : d < 0 ? " (u · v < 0)" : "") }],
          landmark: { hit: d === 0, big: "u · v = 0: orthogonal", note: "The vectors meet at a right angle." }, narr: "The sign of u · v alone tells acute, right or obtuse." });
      } else {
        const kq = d / (mb * mb), w1 = V.scale(kq, b), w2 = V.sub(a, w1), s = 12 / mb;
        P.vec(-b[0] * s, -b[1] * s, b[0] * s, b[1] * s, k.alpha(C.cyan, .3), { head: false, dash: [2, 5] });
        P.vec(w1[0], w1[1], a[0], a[1], C.pink, { dash: [5, 4] }); if (V.mag(w1) > .3 && V.mag(w2) > .3) P.rightMark(w1, a, [0, 0], C.muted, 9);
        P.vec(0, 0, b[0], b[1], C.cyan, { w: 2.5 }); P.vec(0, 0, a[0], a[1], C.amber, { w: 3 }); P.vec(0, 0, w1[0], w1[1], C.green, { w: 4 });
        labs.push({ text: "u", x: a[0] * .6, y: a[1] * .6, color: C.amber }, { text: "v", x: b[0] * .75, y: b[1] * .75, color: C.cyan }, { text: "proj", x: w1[0] * .5, y: w1[1] * .5, color: C.green }, { text: "w₂", x: (w1[0] + a[0]) / 2, y: (w1[1] + a[1]) / 2, color: C.pink });
        const kQ = Q(d, V.dot(b, b));
        k.readout({ title: "Projection of u onto v", big: `<span class="c5">proj<sub><b>v</b></sub> <b>u</b> = (${nf(d)}/${nf(V.dot(b, b))})<b>v</b> = ${qvt(qv(kQ, b))}</span>`, rows: [
          { lhs: "comp<sub><b>v</b></sub> <b>u</b> = <b>u</b> · <b>v</b> / ‖<b>v</b>‖ ≈", v: nf(d / mb, 2), cls: "c5" },
          { lhs: "<b>w</b><sub>2</sub> = <b>u</b> − proj =", v: qvt([Q.sub(Q(a[0]), qv(kQ, b)[0]), Q.sub(Q(a[1]), qv(kQ, b)[1])]), cls: "c3" },
          { lhs: "<b>w</b><sub>2</sub> · <b>v</b> =", v: "0", lbl: "always orthogonal" }],
          landmark: { hit: d < 0, big: "Negative projection", note: "u · v < 0, so the shadow points against v." }, narr: "Drag u to the other side of the dotted line." });
      }
    } else if (mode === "turn") {
      const [a, b] = PROBS[pi], st = turnSt.k, d = V.dot(a, b), vv = V.dot(b, b), kq = Q(d, vv), w1 = qv(kq, b), w2 = [Q.sub(Q(a[0]), w1[0]), Q.sub(Q(a[1]), w1[1])];
      k.guard([qvt(w1), qvt(w2)]);
      const f1 = [w1[0].val ? w1[0].val() : d / vv * b[0], w1[1].val ? w1[1].val() : d / vv * b[1]];
      P = k.plane(c, Object.assign(k.fit([[0, 0], a, b, f1], .2), { equal: true, pad })); P.grid(); P.axes();
      if (st >= 4) { P.vec(0, 0, f1[0], f1[1], C.green, { w: 4 }); labs.push({ text: "w₁", x: f1[0] * .5, y: f1[1] * .5, color: C.green }); }
      if (st >= 5) { P.vec(f1[0], f1[1], a[0], a[1], C.pink, { dash: [5, 4] }); labs.push({ text: "w₂", x: (f1[0] + a[0]) / 2, y: (f1[1] + a[1]) / 2, color: C.pink }); }
      if (st >= 6) P.rightMark(f1, a, [0, 0], C.muted, 9);
      P.vec(0, 0, b[0], b[1], C.cyan, { w: 2.5 }); P.vec(0, 0, a[0], a[1], C.amber, { w: 3 });
      labs.push({ text: "u", x: a[0] * .6, y: a[1] * .6, color: C.amber }, { text: "v", x: b[0] * .7, y: b[1] * .7, color: C.cyan });
      SP.set([
        { tag: "u · v", eq: `${nf(a[0])}(${nf(b[0])}) + ${nf(a[1])}(${nf(b[1])}) = ${nf(d)}`, why: "multiply matching components and add" },
        { tag: "v · v", eq: `‖<b>v</b>‖<sup>2</sup> = ${nf(b[0] * b[0])} + ${nf(b[1] * b[1])} = ${vv}`, why: "no square root needed" },
        { tag: "scalar", eq: `${nf(d)}/${vv} = ${MR.qT(kq)}`, why: "u · v / ‖v‖²" },
        { tag: "projection", eq: `<b>w</b><sub>1</sub> = ${MR.qT(kq)}${vt(b)} = ${qvt(w1)}`, why: "parallel to v" },
        { tag: "orthogonal", eq: `<b>w</b><sub>2</sub> = ${vt(a)} − <b>w</b><sub>1</sub> = ${qvt(w2)}`, why: "what is left of u" },
        { tag: "check", eq: `<b>w</b><sub>2</sub> · <b>v</b> = ${MR.qT(Q.add(Q.mul(w2[0], Q(b[0])), Q.mul(w2[1], Q(b[1]))))}`, why: "orthogonal, as it must be" }
      ], st - 1);
      k.readout({ title: "Your turn", big: `<b>u</b> = <span class="c1">${vt(a)}</span>, <b>v</b> = <span class="c2">${vt(b)}</span>`, rows: [{ lhs: "<b>w</b><sub>1</sub> =", v: st >= 4 ? qvt(w1) : "?", cls: "c5" }, { lhs: "<b>w</b><sub>2</sub> =", v: st >= 5 ? qvt(w2) : "?", cls: "c3" }],
        landmark: { hit: st >= 6, big: "u = w₁ + w₂", note: "One part along v, one part at right angles to it." }, narr: "Step through, then New problem." });
    } else {
      k.guard([]);
      const F = SW.F, t = SW.t * D, dd = SW.d, Wk = F * dd * Math.cos(t), x1 = 1 + dd / 50 * 9, L0 = F / 100 * 4.2, s0 = [2.2, .4];
      P = k.plane(c, { xmin: -.6, xmax: 11, ymin: -1.6, ymax: 5, equal: true, pad }); P.grid();
      P.seg(-.6, 0, 11, 0, C.muted);
      c.d.rect(P.X(.4), P.Y(.8), P.X(2.2) - P.X(.4), P.Y(0) - P.Y(.8), k.alpha(C.text, .25));
      const tip = [s0[0] + L0 * Math.cos(t), s0[1] + L0 * Math.sin(t)];
      if (SW.t < 90) P.vec(s0[0], s0[1], tip[0], s0[1], C.green, { dash: [5, 4] });
      if (SW.t > 0) P.vec(tip[0], s0[1], tip[0], tip[1], C.pink, { dash: [5, 4], head: false });
      P.vec(s0[0], s0[1], tip[0], tip[1], C.amber, { w: 3 });
      const an = SW.t > 0 ? P.angleArc(s0[0], s0[1], 30, 0, t, C.violet) : null;
      P.vec(1, -.7, x1, -.7, C.cyan, { w: 2.5 });
      labs.push({ text: "F", x: (s0[0] + tip[0]) / 2, y: (s0[1] + tip[1]) / 2, color: C.amber }, { text: "d = " + dd + " m", x: (1 + x1) / 2, y: -.7, color: C.cyan });
      if (SW.t < 90) labs.push({ text: "F cos θ", x: (s0[0] + tip[0]) / 2, y: s0[1], color: C.green }); if (an) labs.push({ text: "θ", x: an.x, y: an.y, color: C.violet });
      k.readout({ title: "Work", big: `<i>W</i> = <span class="c1">${F}</span> · <span class="c2">${dd}</span> · cos ${SW.t}° ≈ <span class="c5">${nf(Wk, 1)} J</span>`, rows: [
        { lhs: "along the ground: <i>F</i> cos <i>θ</i> ≈", v: nf(F * Math.cos(t), 1) + " N", cls: "c5" },
        { lhs: "lifting: <i>F</i> sin <i>θ</i> ≈", v: nf(F * Math.sin(t), 1) + " N", cls: "c3", lbl: "does no work here" },
        { lhs: "<i>W</i> = <b>F</b> · <b>d</b> = ‖<b>F</b>‖ ‖<b>d</b>‖ cos <i>θ</i>" }],
        landmark: { hit: SW.t === 90, big: "W = 0", note: "A force perpendicular to the motion does no work." }, narr: "At 0° all of the pull does work; at 90° none of it does." });
    }
    P.labels(labs);
  });
};
})();
