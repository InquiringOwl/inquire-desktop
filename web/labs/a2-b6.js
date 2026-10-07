/* ============ Labs: Algebra II batch B6 (end behavior, zeros & multiplicity, Fundamental Theorem of Algebra) ============ */
(function(){
const W = window, L = W.LABS = W.LABS || {}, MR = W.MathRules;
const { Q, Poly, Z } = MR;
const MI = "−";

/* ---------- DOM-free helpers (exposed as window.B6Rules) ---------- */
// Linear factor (unlike MR.factorStr, the HTML form keeps a plain-text fraction) for the zero r: "x − 3", "x + 2", "x" (text; html → italic x)
const linT = (r, html) => { r = Q(r); const v = html ? "<i>x</i>" : "x"; return r.n === 0 ? v : `${v} ${r.n > 0 ? MI : "+"} ${MR.qT(Q.abs(r))}`; };
// Factored form, multiplicities, turning points, symmetry, signs and end behaviour: MathRules (web/kits/subjects/math.js)
const leadT = MR.leadStr, factoredT = MR.factoredStr, groupZeros = MR.groupZeros, turning = MR.turningPoints;
const symmetry = MR.polySymmetry, signPattern = MR.signPattern, endsT = MR.endsStr;
W.B6Rules = { linT, leadT, factoredT, groupZeros, turning, symmetry, signPattern, endsT };

const pmax = (f, lo, hi, N = 240) => { let m = 0; for (let i = 0; i <= N; i++) { const v = Math.abs(f(lo + (hi - lo) * i / N)); if (isFinite(v) && v > m) m = v; } return m; };
const clampY = (v, P) => Math.max(P.ymin, Math.min(P.ymax, v));

/* =====================================================================
   a2-poly-graphs: degree, leading coefficient, end behavior, turning points
   ===================================================================== */
L["a2-poly-graphs"] = k => {
  MathKit.attach(k);
  const { C, F } = k, c = k.canvas(), d = c.d;
  // the two shape terms for each degree: b·x^e0 + c·x^e1 (chosen so n − 1 turning points are reachable)
  const E = { 2: [1, 0], 3: [1, 0], 4: [2, 1], 5: [3, 1], 6: [4, 2] };
  const pwH = e => (e === 0 ? "" : e === 1 ? "<i>x</i>" : `<i>x</i><sup>${e}</sup>`);
  let mode = "graph", lastA = 1, zoom = false;
  const S = k.params([
    { key: "n", label: `degree <span class="c3"><i>n</i></span>`, min: 2, max: 6, step: 1, value: 4, fmt: v => String(v) },
    { key: "a", label: `<span class="c3"><i>a</i><sub><i>n</i></sub></span>`, min: -3, max: 3, step: 0.5, value: 1 },
    { key: "b", min: -6, max: 6, step: 0.5, value: 0 },
    { key: "c", min: -6, max: 6, step: 0.5, value: -2 }
  ], (key, v) => { if (key === "a" && v === 0) S.set("a", lastA > 0 ? -0.5 : 0.5); lastA = S.a; if (key === "n") relabel(); });
  const lab = key => S.ctl[key].el.parentNode.querySelector("label");
  function relabel(){ const [e0, e1] = E[S.n]; lab("b").innerHTML = `<i>b</i> · ${pwH(e0) || "1"}`; lab("c").innerHTML = `<i>c</i> · ${pwH(e1) || "1"}`; }
  relabel();
  const zb = k.button("Zoom out ×10", () => { zoom = !zoom; zb.textContent = zoom ? "Zoom back in" : "Zoom out ×10"; }, "btn-s");
  k.modes([["graph", "Graph"], ["compare", "Compare"]], mode, m => { mode = m; k.guard([]); });
  k.guard([]);
  const view = { X: 3, H: 6 };

  k.loop(dt => {
    const n = S.n, a = S.a, [e0, e1] = E[n];
    const cs = Array(n + 1).fill(0); cs[n] += a; cs[e0] += S.b; cs[e1] += S.c;
    const p = Poly(cs), f = Poly.fn(p), lead = x => a * Math.pow(x, n);
    const tps = turning(p), zs = Poly.realRoots(p), ends = Poly.ends(p), sym = symmetry(p);
    // window: local view shows the turning points; zoomed view shows the whole range so the leading term takes over
    const X = zoom ? 30 : 3;
    const local = Math.max(4, 1.5 * Math.max(Math.abs(f(0)), ...tps.filter(t => Math.abs(t.x) <= 3).map(t => Math.abs(f(t.x))), 0));
    k.smooth(view, { X }, dt, 4);
    const Hw = pmax(f, -view.X, view.X);
    k.smooth(view, { H: view.X > 3.3 ? Hw * 1.08 : Math.min(local, Math.max(Hw * 1.08, 2)) }, dt, 8);
    c.begin();
    const P = k.plane(c, { xmin: -view.X, xmax: view.X, ymin: -view.H, ymax: view.H, xlabel: "x", ylabel: "y" });
    P.grid(); P.axes();
    const showLead = mode === "compare" || view.X > 6;
    if (showLead) P.curve(lead, C.pink, { dash: [7, 5], w: 2 });
    P.curve(f, C.amber, { w: 3 });
    tps.forEach(t => P.dot(t.x, f(t.x), C.cyan, 5.5));
    // end-behaviour arrows at both edges
    const arrow = (x, s) => { const y0 = s * P.height * 0.18, y1 = s * P.height * 0.44, px = P.X(x), py = P.Y(0); d.arrow(px, py - y0, px, py - y1, C.violet, 2.5); P.seg(P.inv(px, py - y0).x, P.inv(px, py - y0).y, P.inv(px, py - y1).x, P.inv(px, py - y1).y, "rgba(0,0,0,0)", 0); };
    const xl = P.xmin + (P.xmax - P.xmin) * 0.035, xr = P.xmax - (P.xmax - P.xmin) * 0.035;
    arrow(xl, ends.left); arrow(xr, ends.right);
    const inf = s => (s > 0 ? "∞" : MI + "∞");
    const labs = [
      { text: "f → " + inf(ends.left), x: xl, y: ends.left * 0.88 * view.H, color: C.violet, prefer: ends.left > 0 ? "se" : "ne", font: `600 13px ${F.ui}` },
      { text: "f → " + inf(ends.right), x: xr, y: ends.right * 0.88 * view.H, color: C.violet, prefer: ends.right > 0 ? "sw" : "nw", font: `600 13px ${F.ui}` }
    ];
    const xa = view.X * 0.55, ya = f(xa); if (Math.abs(ya) < P.ymax) labs.push({ text: "f(x)", x: xa, y: ya, color: C.amber, prefer: "e" });
    if (showLead) { const xb = -view.X * 0.6, yb = lead(xb); labs.push({ text: MR.polyT(Poly(Array(n).fill(0).concat([a]))), x: xb, y: clampY(yb, P), color: C.pink, prefer: "e", font: `15px ${F.math}` }); }
    P.labels(labs);

    const nT = tps.length, nZ = zs.length;
    const ltH = `<span class="c3">${MR.polyH(Poly(Array(n).fill(0).concat([a])))}</span>`;
    const symRow = { lhs: "symmetry", v: sym, cls: "", lbl: sym === "even" ? "only even powers: f(−x) = f(x), mirror image in the y-axis" : sym === "odd" ? "only odd powers: f(−x) = −f(x), symmetric about the origin" : "even and odd powers mixed: no symmetry" };
    if (mode === "graph") {
      const max = nT === n - 1;
      k.readout({
        title: `Degree ${n} · ${n % 2 ? "odd" : "even"} · leading coefficient ${a > 0 ? "positive" : "negative"}`,
        big: `<span class="m"><span class="c1"><i>f</i>(<i>x</i>)</span> = ${MR.polyH(p)}</span>`,
        rows: [
          { lhs: "leading term", v: `<span class="m">${ltH}</span>`, lbl: n % 2 ? "odd power: the ends go opposite ways" : "even power: both ends go the same way" },
          { lhs: `<span class="c4">ends</span>`, v: `<span class="m">${endsT(p, true)}</span>`, cls: "c4" },
          { lhs: `<span class="c2">turning points</span>`, v: `${nT} <span class="dim">(at most ${n - 1})</span>`, cls: "c2", lbl: nT ? "x ≈ " + tps.map(t => MR.fmtN(t.x, 2)).join(", ") : "none: the graph only rises or only falls" },
          { lhs: "real zeros", v: `${nZ} <span class="dim">(at most ${n})</span>`, lbl: nZ ? "x ≈ " + zs.map(z => (z.q ? MR.qT(z.q) : MR.fmtN(z.x, 2))).join(", ") : "the graph never meets the x-axis" },
          symRow
        ],
        landmark: max
          ? { hit: true, big: `${nT} turning point${nT > 1 ? "s" : ""} = <i>n</i> − 1`, note: `The most a degree-${n} polynomial can have. Change b or c and count again: turning points disappear in pairs, the ends never move.` }
          : { hit: false, big: `${nT} of at most ${n - 1} turning points`, note: "The lower terms shape the middle of the graph. Push b to make more hills and valleys." },
        narr: "Move b and c: the middle changes, the violet ends do not. Then Zoom out to see the leading term take over."
      });
    } else {
      const Xr = Math.round(view.X), fx = Poly.eval(p, Q(Xr)), lx = Q.mul(Q(a), Q.pow(Q(Xr), n)), ratio = Q.val(fx) / Q.val(lx), hit = Math.abs(ratio - 1) < 0.01;
      k.readout({
        title: "Leading term vs the whole polynomial",
        big: `<span class="m"><span class="c1"><i>f</i>(<i>x</i>)</span> ≈ ${ltH}</span> for large |<i>x</i>|`,
        rows: [
          { lhs: `<span class="c1"><i>f</i>(${Xr})</span>`, v: MR.qT(fx), cls: "c1" },
          { lhs: `<span class="c3"><i>a</i><sub><i>n</i></sub>·${Xr}<sup>${n}</sup></span>`, v: MR.qT(lx), cls: "c3" },
          { lhs: "ratio", v: MR.fmtN(ratio, 4), lbl: `f(x) ÷ ${MR.polyT(Poly(Array(n).fill(0).concat([a])))} at the right edge, x = ${Xr}` },
          { lhs: `<span class="c4">ends</span>`, v: `<span class="m">${endsT(p, true)}</span>`, cls: "c4", lbl: "the same as the leading term's" }
        ],
        landmark: hit
          ? { hit: true, big: `ratio within 1% of 1 at <i>x</i> = ${Xr}`, note: "Far out the other terms are tiny next to the leading term, so the two curves are almost the same." }
          : { hit: false, big: `ratio ${MR.fmtN(ratio, 3)} at <i>x</i> = ${Xr}`, note: "Near the origin the lower terms still matter. Zoom out and watch the ratio approach 1." },
        narr: "The pink dashed curve is the leading term alone. Zoom out: the amber polynomial folds onto it."
      });
    }
  });
};

/* =====================================================================
   a2-zeros-mult: drag zeros, choose multiplicities, read a graph
   ===================================================================== */
L["a2-zeros-mult"] = k => {
  MathKit.attach(k);
  const { C, F } = k, c = k.canvas(), d = c.d, host = k.dom();
  host.style.font = `14px/1.5 ${F.sans}`;
  const TARGETS = [
    { a: 1, z: [[-2, 2], [1, 1]] }, { a: -1, z: [[-3, 1], [1, 2]] }, { a: 0.5, z: [[-3, 1], [1, 1], [2, 2]] },
    { a: -2, z: [[-1, 3], [2, 1]] }, { a: -0.5, z: [[-4, 1], [-1, 2], [2, 1]] }, { a: 1, z: [[-1, 2], [2, 2]] },
    { a: 2, z: [[-2, 1], [0, 1], [1, 2]] }, { a: -1, z: [[0, 3], [2, 1]] }
  ];
  const MAXDEG = 6;
  let mode = "build", lastA = 1, ti = 0, tgt = null;
  const zs = [{ x: -2, y: 0, m: 2 }, { x: 1, y: 0, m: 1 }];
  const drag = zs; // k.drag keeps this array; we mutate it in place
  const prev = zs.map(z => z.x);
  const deg = () => zs.reduce((s, z) => s + z.m, 0);
  const S = k.params([{ key: "a", label: `leading coefficient <i>a</i>`, min: -2, max: 2, step: 0.5, value: 1, cls: "c1" }],
    (key, v) => { if (v === 0) S.set("a", lastA > 0 ? -0.5 : 0.5); lastA = S.a; });
  const cnt = k.select("zeros", [[1, "1"], [2, "2"], [3, "3"], [4, "4"]], 2, v => setCount(+v));
  function setCount(nz){
    while (zs.length > nz) zs.pop();
    const free = [3, -4, 4, -3, 0, 5, -5, 2, -1];
    while (zs.length < nz && deg() < MAXDEG) { const x = free.find(v => !zs.some(z => z.x === v)); zs.push({ x, y: 0, m: 1 }); }
    cnt.set(zs.length); sync();
  }
  const sync = () => { prev.length = 0; zs.forEach(z => { z.fixY = true; z.snap = 1; z.clamp = [-5, 5, 0, 0]; prev.push(z.x); }); };
  sync();
  k.group("read", () => {
    k.button("New graph", () => { ti = (ti + 1) % TARGETS.length; loadTarget(); }, "btn-s");
    k.button("Reveal", () => { if (!tgt) return; zs.length = 0; tgt.z.forEach(([r, m]) => zs.push({ x: r, y: 0, m })); S.set("a", tgt.a); lastA = tgt.a; cnt.set(zs.length); sync(); }, "btn ghost");
  });
  function loadTarget(){
    const t = TARGETS[ti], groups = t.z.map(([r, m]) => ({ r: Q(r), m }));
    const p = Poly.scale(groups.reduce((acc, g) => Poly.mul(acc, Poly.pow([Q.neg(g.r), Q(1)], g.m)), Poly([1])), Q(t.a));
    const x0 = groups.some(g => g.r.n === 0) ? (t.z.some(([r]) => r === -1) ? 1 : -1) : 0;
    tgt = Object.assign({}, t, { groups, p, pt: [x0, Poly.eval(p, Q(x0))] });
    zs.length = 0; zs.push({ x: 0, y: 0, m: 1 }); S.set("a", 1); lastA = 1; cnt.set(1); sync();
    k.guard(["f(x) = " + factoredT(t.a, groups, false)]);
  }
  k.modes([["build", "Build"], ["read", "Read the graph"]], mode, m => { mode = m; k.showGroup(m); if (m === "read") loadTarget(); else { tgt = null; k.guard([]); } });
  k.showGroup("build"); k.guard([]);
  let P = null;
  k.drag(c, () => P, drag, i => { const z = zs[i]; if (zs.some((o, j) => j !== i && o.x === z.x)) z.x = prev[i]; prev[i] = z.x; });
  host.addEventListener("click", e => { const b = e.target.closest("button[data-i]"); if (!b || b.disabled) return; zs[+b.dataset.i].m = +b.dataset.m; });
  const view = { H: 8 };
  let lastHTML = "";

  k.loop(dt => {
    c.begin();
    const pad = k.split(c, host, { side: "left", frac: 0.3, hfrac: 0.34 });
    const a = S.a, groups = zs.map(z => ({ r: Q(z.x), m: z.m }));
    const p = Poly.scale(groups.reduce((acc, g) => Poly.mul(acc, Poly.pow([Q.neg(g.r), Q(1)], g.m)), Poly([1])), Q(a)), f = Poly.fn(p);
    const n = Poly.deg(p), y0 = Poly.eval(p, Q(0)), match = tgt && Poly.eq(p, tgt.p);
    // y window from the turning values (and the target in Read mode)
    const vals = [Math.abs(Q.val(y0)), 2];
    const addP = q => { turning(q).forEach(t => { if (Math.abs(t.x) <= 6) vals.push(Math.abs(Poly.evalN(q, t.x))); }); };
    if (tgt) { addP(tgt.p); vals.push(Math.abs(Q.val(tgt.pt[1]))); } else addP(p);
    k.smooth(view, { H: Math.max(...vals) * 1.35 }, dt);
    P = k.plane(c, { xmin: -6, xmax: 6, ymin: -view.H, ymax: view.H, pad, xstep: 1, xlabel: "x", ylabel: "y" });
    P.grid(); P.axes();
    if (tgt) P.curve(Poly.fn(tgt.p), k.alpha(C.text, 0.28), { w: 8 });
    P.curve(f, C.amber, { w: 3 });
    const labs = [];
    zs.forEach(z => {
      const s = f(z.x - 0.4) >= 0 ? 1 : -1;
      P.dot(z.x, 0, C.cyan, 7);
      if (z.m > 1) d.circle(P.X(z.x), P.Y(0), 11, null, C.pink, 1.5);
      labs.push({ text: MR.qT(z.x), x: z.x, y: 0, color: C.cyan, prefer: s > 0 ? "s" : "n", font: `600 14px ${F.mono}` });
      labs.push({ text: "×" + z.m, x: z.x, y: 0, color: C.pink, prefer: s > 0 ? "se" : "ne", font: `600 13px ${F.mono}` });
    });
    if (tgt) { const [px, py] = tgt.pt; P.dot(px, Q.val(py), C.green, 6.5); labs.push({ text: `(${px}, ${MR.qT(py)})`, x: px, y: Q.val(py), color: C.green, prefer: "e", font: `600 13px ${F.mono}` }); }
    else if (Math.abs(Q.val(y0)) < view.H) { P.dot(0, Q.val(y0), C.green, 6); labs.push({ text: `(0, ${MR.qT(y0)})`, x: 0, y: Q.val(y0), color: C.green, prefer: "e", font: `600 13px ${F.mono}` }); }
    P.labels(labs);

    // panel: one row per zero with multiplicity buttons
    const used = deg();
    const beh = m => (m % 2 === 0 ? "touches, turns back" : m >= 3 ? "crosses, flattening" : "crosses");
    let html = `<div style="font:600 11px/1.2 var(--ui);letter-spacing:.14em;text-transform:uppercase;color:var(--faint);margin:2px 0 6px">${mode === "read" ? "Match the grey graph" : "Zeros · drag them on the axis"}</div>`;
    html += zs.map((z, i) => `<div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin:3px 0"><span class="m c2" style="min-width:4.2em">x = ${MR.qT(z.x)}</span>${[1, 2, 3].map(m => `<button type="button" class="btn-s" data-i="${i}" data-m="${m}"${m === z.m ? ' aria-pressed="true" style="color:var(--pink);border-color:var(--pink)"' : ""}${used - z.m + m > MAXDEG ? " disabled" : ""}>×${m}</button>`).join("")}<span style="color:var(--pink);font-size:12.5px">${beh(z.m)}</span></div>`).join("");
    html += `<div style="color:var(--faint);font-size:12.5px;margin-top:6px">Degree ${n} (at most ${MAXDEG} here).</div>`;
    if (html !== lastHTML) { host.innerHTML = html; lastHTML = html; }

    const fH = `<span class="m"><span class="c1"><i>f</i>(<i>x</i>)</span> = ${factoredT(a, groups, true)}</span>`;
    const xs = zs.map(z => z.x).sort((u, v) => u - v), sp = signPattern(p, xs);
    if (mode === "build") {
      const ev = zs.filter(z => z.m % 2 === 0).map(z => MR.qT(z.x)), fl = zs.filter(z => z.m >= 3).map(z => MR.qT(z.x));
      k.readout({
        title: `Degree ${n} · ${zs.length} distinct zero${zs.length > 1 ? "s" : ""}`,
        big: fH,
        rows: [
          { lhs: "expanded", v: `<span class="m">${MR.polyH(p)}</span>`, cls: "c1" },
          { lhs: `<span class="c5"><i>y</i>-intercept</span>`, v: `(0, ${MR.qT(y0)})`, cls: "c5", lbl: `f(0) = ${leadT(a) === "" ? "" : leadT(a) === MI ? MI : MR.qT(a) + " · "}${zs.map(z => `(${MR.qT(-z.x)})${z.m > 1 ? MR.supT(z.m) : ""}`).join("")}` },
          { lhs: "ends", v: `<span class="m">${endsT(p, true)}</span>`, lbl: `leading term ${MR.polyT(Poly(Array(n).fill(0).concat([a])))}` },
          { lhs: "signs", v: sp.join(" | "), lbl: "left to right between the zeros: the sign flips only at odd multiplicity" }
        ],
        landmark: ev.length
          ? { hit: true, big: `Touch at ${ev.join(", ")}: no sign change`, note: "An even power is never negative, so f keeps its sign on both sides of that zero and the graph bounces off the axis." }
          : { hit: false, big: fl.length ? `Flattens through ${fl.join(", ")}` : "Every zero crosses", note: "Odd multiplicity: the factor changes sign, so the graph crosses. Try ×2 on a zero." },
        narr: "Drag the cyan zeros, choose ×1, ×2 or ×3 for each, and flip the sign of a to turn the whole graph over."
      });
    } else {
      const tn = Poly.deg(tgt.p), tz = tgt.groups.length;
      k.readout({
        title: match ? "Matched" : "Read the graph",
        big: fH,
        rows: [
          { lhs: `<span class="c5">point</span>`, v: `(${tgt.pt[0]}, ${MR.qT(tgt.pt[1])})`, cls: "c5", lbl: "use it to find a once the zeros are right" },
          { lhs: `<span class="c2">your zeros</span>`, v: zs.map(z => `${MR.qT(z.x)} ×${z.m}`).join(", "), cls: "c2", lbl: `the grey graph meets the axis ${tz} time${tz > 1 ? "s" : ""}` },
          { lhs: "your value", v: `f(${tgt.pt[0]}) = ${MR.qT(Poly.eval(p, Q(tgt.pt[0])))}`, lbl: Q.eq(Poly.eval(p, Q(tgt.pt[0])), tgt.pt[1]) ? "passes through the green point" : "not through the green point yet" }
        ],
        landmark: match
          ? { hit: true, big: `<span class="m">f(x) = ${factoredT(tgt.a, tgt.groups, false)}</span>`, note: `Degree ${tn}. Zeros and their multiplicities fix the shape; one point fixes the leading coefficient.` }
          : { hit: false, big: "Not yet", note: "Crossing means odd multiplicity, bouncing means even, and a flat crossing means 3." },
        narr: "Choose how many zeros, drag them onto the grey graph's intercepts, set each multiplicity, then set a. Reveal shows the answer."
      });
    }
  });
};

/* =====================================================================
   a2-fta: real zeros and a conjugate pair on the complex plane
   ===================================================================== */
L["a2-fta"] = k => {
  MathKit.attach(k);
  const { C, F } = k, c = k.canvas(), d = c.d;
  const real = [{ x: -1, y: 0 }], pair = { x: 2, y: 1 };
  const pts = [];
  const sync = () => { pts.length = 0; real.forEach(r => { r.fixY = true; r.snap = 0.5; r.clamp = [-3.5, 3.5, 0, 0]; pts.push(r); }); pair.snap = 0.5; pair.clamp = [-3.5, 3.5, -2.5, 2.5]; pts.push(pair); };
  sync();
  const cnt = k.select("real zeros besides the pair", [[0, "0"], [1, "1"], [2, "2"]], 1, v => { const n = +v; while (real.length > n) real.pop(); while (real.length < n) real.push({ x: real.length ? -2 : 1, y: 0 }); sync(); });
  const preset = (rs, px, py) => { real.length = 0; rs.forEach(x => real.push({ x, y: 0 })); pair.x = px; pair.y = py; cnt.set(rs.length); sync(); };
  k.button("x³ − 3x² + x + 5", () => preset([-1], 2, 1), "btn-s");
  k.button("x⁴ − 16", () => preset([-2, 2], 0, 2), "btn-s");
  k.button("x² + 1", () => preset([], 0, 1), "btn-s");
  k.hint("Drag the pink zero; its conjugate follows");
  k.guard([]);
  let PC = null;
  k.drag(c, () => PC, pts, null);
  const view = { H: 8 };

  k.loop(dt => {
    const p0 = Q(pair.x), q0 = Q(pair.y), q = Q.val(q0);
    // the pair: p ± qi above the axis; on the axis a double zero; below it, two real zeros p ± |q|
    const quad = Poly([Q.add(Q.mul(p0, p0), Q.mul(q0, Q.abs(q0))), Q.mul(-2, p0), 1]);
    const rz = real.map(r => Q(r.x));
    const P = rz.reduce((acc, r) => Poly.mul(acc, [Q.neg(r), Q(1)]), quad), f = Poly.fn(P), n = Poly.deg(P);
    const pairZ = q > 0 ? [Z(p0, q0), Z(p0, Q.neg(q0))] : [];
    const allReal = rz.concat(q < 0 ? [Q.sub(p0, Q.abs(q0)), Q.add(p0, Q.abs(q0))] : q === 0 ? [p0, p0] : []);
    const groups = groupZeros(allReal);
    const vals = [Math.abs(f(0)), 3]; turning(P).forEach(t => { if (Math.abs(t.x) <= 4) vals.push(Math.abs(f(t.x))); });
    k.smooth(view, { H: Math.min(90, Math.max(...vals) * 1.35) }, dt);
    c.begin();
    const wide = c.w >= 600, gx = wide ? c.w * 0.55 : c.w, gy = wide ? c.h : c.h * 0.52;
    const G = k.plane(c, { xmin: -4, xmax: 4, ymin: -view.H, ymax: view.H, xstep: 1, xlabel: "x", ylabel: "y", pad: wide ? { l: 40, r: c.w - gx + 14, t: 16, b: 30 } : { l: 40, r: 16, t: 16, b: c.h - gy + 18 } });
    G.grid(); G.axes();
    G.curve(f, C.amber, { w: 3 });
    const gl = [];
    groups.forEach(g => { const x = Q.val(g.r); G.dot(x, 0, C.cyan, 6.5); if (g.m > 1) d.circle(G.X(x), G.Y(0), 11, null, C.cyan, 1.5); gl.push({ text: MR.qT(g.r) + (g.m > 1 ? " ×" + g.m : ""), x, y: 0, color: C.cyan, prefer: f(x + 0.3) > 0 ? "se" : "ne", font: `600 13px ${F.mono}` }); });
    gl.push({ text: "P(x)", x: 3.4, y: clampY(f(3.4), G), color: C.amber, prefer: "w" });
    G.labels(gl);
    if (wide) d.line(gx, 14, gx, c.h - 14, k.alpha(C.text, 0.15), 1); else d.line(14, gy, c.w - 14, gy, k.alpha(C.text, 0.15), 1);
    PC = k.cplane(c, { xmin: -4, xmax: 4, ymin: -3, ymax: 3, xstep: 1, ystep: 1, pad: wide ? { l: gx + 34, r: 14, t: 16, b: 30 } : { l: 40, r: 16, t: gy + 10, b: 28 }, modes: false });
    PC.grid(); PC.axes();
    const cl = [{ text: "zeros in ℂ", x: PC.xmin, y: PC.ymax, color: C.muted, font: `13px ${F.ui}`, prefer: "se" }];
    real.forEach(r => { PC.dot(r.x, 0, C.cyan, 7); });
    if (q > 0) {
      PC.seg(pair.x, q, pair.x, -q, k.alpha(C.pink, 0.5), 1.5, [3, 3]);
      pairZ.forEach((z, i) => { const v = Z.val(z); PC.dot(v.re, v.im, C.pink, i ? 6 : 7.5); cl.push({ text: MR.zT(z), x: v.re, y: v.im, color: C.pink, prefer: i ? "se" : "ne", font: `600 14px ${F.mono}` }); });
    } else {
      const s = Math.abs(q);
      if (s > 0) { PC.seg(pair.x, q, pair.x - s, 0, k.alpha(C.pink, 0.5), 1.5, [3, 3]); PC.seg(pair.x, q, pair.x + s, 0, k.alpha(C.pink, 0.5), 1.5, [3, 3]); d.circle(PC.X(pair.x), PC.Y(q), 7, C.ink, C.pink, 2); }
      [pair.x - s, pair.x + s].forEach(x => PC.dot(x, 0, C.cyan, 7));
      if (s === 0) d.circle(PC.X(pair.x), PC.Y(0), 12, null, C.pink, 2);
    }
    groups.forEach(g => cl.push({ text: MR.qT(g.r) + (g.m > 1 ? " ×" + g.m : ""), x: Q.val(g.r), y: 0, color: C.cyan, prefer: "ne", font: `600 13px ${F.mono}` }));
    PC.labels(cl);

    // factored forms
    const pw = m => (m > 1 ? `<sup>${m}</sup>` : "");
    const realH = groups.map(g => `(${linT(g.r, true)})${pw(g.m)}`).join("");
    const cfac = z => { const re = z.re, im = z.im; if (re.n === 0) { const mag = Q.eq(Q.abs(im), 1) ? "" : MR.qT(Q.abs(im)); return `(<i>x</i> ${im.n > 0 ? MI : "+"} ${mag}<i>i</i>)`; } return `(<i>x</i> − (${MR.zT(z).replace(/i$/, "<i>i</i>")}))`; };
    const overC = (realH + pairZ.map(cfac).join("")) || "1";
    const overR = q > 0 ? (rz.length ? groupZeros(rz).map(g => `(${linT(g.r, true)})${pw(g.m)}`).join("") : "") + `(${MR.polyH(quad)})` : realH;
    const nReal = allReal.length, nNon = pairZ.length;
    k.readout({
      title: `<span class="c4">Degree ${n}</span> · ${n} complex zeros`,
      big: `<span class="m"><span class="c1"><i>P</i>(<i>x</i>)</span> = ${MR.polyH(P)}</span>`,
      rows: [
        { lhs: "over ℂ", v: `<span class="m">${overC}</span>`, lbl: `${n} linear factors, one for each zero` },
        { lhs: "over ℝ", v: `<span class="m">${overR}</span>`, lbl: q > 0 ? "the conjugate pair multiplies to a real quadratic with no real zeros" : "every zero is real, so P splits into real linear factors" },
        { lhs: `<span class="c2">real</span>`, v: `${nReal}`, cls: "c2", lbl: "counted with multiplicity: the x-intercepts of the graph" },
        { lhs: `<span class="c3">non-real</span>`, v: `${nNon}`, cls: "c3", lbl: nNon ? "a conjugate pair, invisible on the graph" : "none: the pair has landed on the real axis" }
      ],
      landmark: q === 0
        ? { hit: true, big: `Double zero at <i>x</i> = ${MR.qT(p0)}: the graph touches`, note: "The conjugate pair has met on the real axis. Drag it down to split it into two real zeros, and the graph crosses twice; lift it and the graph pulls off the axis." }
        : { hit: false, big: `${nReal} + ${nNon} = ${n}`, note: q > 0 ? "Real zeros plus non-real zeros always make the degree. Drag the pink zero down to the real axis." : "Two real zeros from the pair: the graph crosses at both. Drag the ring up to the axis to merge them." },
      narr: "Drag the cyan zeros along the real axis and the pink zero anywhere: the amber graph follows, and the total count stays equal to the degree."
    });
  });
};
})();
