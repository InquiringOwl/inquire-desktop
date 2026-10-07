/* ============ Labs: Trigonometry, batch B4 (angular speed, sine & cosine graphs, sinusoids) ============ */
(function(){
const L = window.LABS;
const MI = "−", PI = Math.PI, TAU = 2 * PI;

/* ---------- DOM-free helpers (kit additions: candidates for MathRules, with tests) ---------- */
// numT(v): decimal text, at most 3 places, real minus sign
const numT = (v, p = 3) => String(+(+v).toFixed(p)).replace("-", MI);
// piFmt, sinusoid, sameCurve, keyPts and sinEq are MathRules (web/kits/subjects/trig.js); B > 0 and fn sin/cos here
const piFmt = (MR, x, den) => MR.piFmt(x, den);
const sinusoid = (fn, A, B, C, D) => window.MathRules.sinusoid(fn, A, B, C, D);
const sameCurve = (f, g, lo, hi) => window.MathRules.sameCurve(f, g, lo, hi);
const keyPts = (fn, A, B, C, D) => window.MathRules.keyPts(fn, A, B, C, D);
const sinEq = (MR, fn, A, B, C, D, html) => MR.sinEq(fn, A, B, C, D, { html });
// beltPts(xa, ra, xb, rb): open-belt tangent points between circles centred (xa, 0), (xb, 0); φ = contact angle of the upper run
const beltPts = (xa, ra, xb, rb) => { const phi = Math.acos((ra - rb) / (xb - xa)), cs = Math.cos(phi), sn = Math.sin(phi);
  return { phi, ua: [xa + ra * cs, ra * sn], ub: [xb + rb * cs, rb * sn], la: [xa + ra * cs, -ra * sn], lb: [xb + rb * cs, -rb * sn] }; };

/* ======================= trig-angular-speed ======================= */
L["trig-angular-speed"] = k => {
  MathKit.attach(k);
  const { C, MR } = k, { Q } = MR, c = k.canvas(), host = k.dom(), SP = k.stepsPanel(host), SLOW = 0.25;
  const CASES = [{ n: 50, r: 12 }, { n: 1200, r: 5 }, { n: 90, r: 40 }, { n: 20, r: 25 }, { n: 160, r: 9 }];
  let mode = "spin", a1 = 0, a2 = 0, belt = 0, ci = 0, st = 0, S, B, ST;
  const wT = n => `${MR.piT(Q(n, 30))} rad/s`;   // n rpm → exact rad/s
  // belt or chain between two wheels on the x-axis; dots on the straight runs move with the belt (phase in cm)
  const drawBelt = (P, xa, ra, xb, rb, phase, col) => { const b = beltPts(xa, ra, xb, rb), len = Math.hypot(b.ub[0] - b.ua[0], b.ub[1] - b.ua[1]);
    P.seg(...b.ua, ...b.ub, col, 2.5); P.seg(...b.la, ...b.lb, col, 2.5);
    P.param(t => xa + ra * Math.cos(t), t => ra * Math.sin(t), b.phi, TAU - b.phi, col, 2.5); P.param(t => xb + rb * Math.cos(t), t => rb * Math.sin(t), -b.phi, b.phi, col, 2.5);
    for (let i = 0; i < 6; i++) { const f = (((phase / len + i / 6) % 1) + 1) % 1;
      P.point(b.ub[0] + (b.ua[0] - b.ub[0]) * f, b.ub[1] + (b.ua[1] - b.ub[1]) * f, col, 3); P.point(b.la[0] + (b.lb[0] - b.la[0]) * f, b.la[1] + (b.lb[1] - b.la[1]) * f, col, 3); }
    return b; };
  const wheel = (P, x, r, ang, col, spokes = 0) => { const d = c.d; d.circle(P.X(x), P.Y(0), P.X(r) - P.X(0), null, C.muted, 2);
    for (let i = 0; i < spokes; i++) P.seg(x, 0, x + r * Math.cos(ang + i * TAU / spokes), r * Math.sin(ang + i * TAU / spokes), k.alpha(C.muted, .5), 1);
    P.seg(x, 0, x + r * Math.cos(ang), r * Math.sin(ang), C.violet, 2); P.dot(x, 0, C.muted, 3); if (col) P.dot(x + r * Math.cos(ang), r * Math.sin(ang), col, 6); };
  const plane = (xmin, xmax, R, pad) => k.plane(c, { xmin, xmax, ymin: -R, ymax: R, equal: true, pad });
  const steps = () => { const { n, r } = CASES[ci];
    return [{ tag: "rev → rad", eq: `${n} rpm = ${n} · 2π rad/min = ${MR.piT(Q(2 * n))} rad/min`, why: "One revolution is 2π radians." },
      { tag: "per second", eq: `<span class="c1"><i>ω</i> = ${MR.piT(Q(2 * n))}/60 = ${wT(n)}</span>`, why: "A minute is 60 seconds." },
      { tag: "v = rω", eq: `<span class="c5"><i>v</i> = ${r} · ${MR.piT(Q(n, 30))} = ${MR.piT(Q(r * n, 30))} cm/s</span>`, why: "Radius times angular speed, with ω in radians." },
      { tag: "decimal", eq: `<i>v</i> ≈ ${(r * n * PI / 30).toFixed(1)} cm/s`, why: "Rounded to the nearest tenth, at the end only." }]; };
  const enter = () => { k.showGroup(mode); st = 0; if (ST) ST.reset();
    const { n, r } = CASES[ci]; k.guard(mode === "convert" ? [wT(n), `${MR.piT(Q(r * n, 30))} cm/s`] : []);
    k.hint(mode === "spin" ? "Wheels shown at ¼ speed. Make one wheel twice the other and compare the spin." : mode === "convert" ? "Step through the conversion: revolutions to radians, minutes to seconds, then v = rω." : "Pedal sprocket and rear sprocket share the chain; rear sprocket and wheel share the axle."); };
  k.modes([["spin", "Spin"], ["convert", "Convert"], ["bike", "Bike"]], mode, m => { mode = m; enter(); });
  k.group("spin", () => { S = k.params([{ key: "r1", label: `<span class="c4"><i>r</i>₁</span>`, min: 2, max: 10, step: 1, value: 4, fmt: v => v + " cm" }, { key: "r2", label: `<span class="c4"><i>r</i>₂</span>`, min: 2, max: 10, step: 1, value: 8, fmt: v => v + " cm" }, { key: "n", label: `<span class="c1">rpm</span>`, min: 10, max: 120, step: 5, value: 30, fmt: v => v + " rpm" }]); });
  k.group("convert", () => { ST = k.stepper(() => 4, j => { st = j; }); k.button("New problem", () => { ci = (ci + 1) % CASES.length; enter(); }, "btn ghost"); });
  k.group("bike", () => { B = k.params([{ key: "n", label: `<span class="c1">cadence</span>`, min: 40, max: 100, step: 5, value: 60, fmt: v => v + " rpm" }, { key: "rc", label: "pedal sprocket", min: 8, max: 12, step: 1, value: 10, fmt: v => v + " cm" }, { key: "rs", label: "rear sprocket", min: 3, max: 6, step: 1, value: 4, fmt: v => v + " cm" }, { key: "R", label: `<span class="c4">wheel</span>`, min: 30, max: 35, step: 1, value: 33, fmt: v => v + " cm" }]); });
  enter();
  k.loop(dt => { c.begin(); const lab = [];
    if (mode === "spin") { k.split(c, host, { off: true });
      const { r1, r2, n } = S, w1 = n * PI / 30, v = r1 * w1, w2 = v / r2, x2 = r1 + r2 + 3, R = Math.max(r1, r2) + 3;
      a1 += w1 * dt * SLOW; a2 += w2 * dt * SLOW; belt += v * dt * SLOW;
      const P = plane(-r1 - 2, x2 + r2 + 2, R, { l: 16, r: 16, t: 16, b: 16 });
      const b = drawBelt(P, 0, r1, x2, r2, belt, C.green); wheel(P, 0, r1, a1, C.cyan, 6); wheel(P, x2, r2, a2, C.pink, 6);
      lab.push({ text: `r₁ = ${r1}`, x: r1 * Math.cos(a1) / 2, y: r1 * Math.sin(a1) / 2, color: C.violet }, { text: `r₂ = ${r2}`, x: x2 + r2 * Math.cos(a2) / 2, y: r2 * Math.sin(a2) / 2, color: C.violet },
        { text: "v", x: (b.ua[0] + b.ub[0]) / 2, y: (b.ua[1] + b.ub[1]) / 2, color: C.green, prefer: "n" }, { text: `${n} rpm`, x: 0, y: -r1, color: C.cyan, prefer: "s" });
      const q2 = Q(n * r1, r2), whole = r1 !== r2 && (r1 % r2 === 0 || r2 % r1 === 0);
      k.readout({ title: "Two wheels, one belt", rows: [
        { lhs: `<span class="c1"><i>ω</i>₁</span> = ${n} rpm`, v: `= ${wT(n)}`, cls: "c1" },
        { lhs: `<span class="c5"><i>v</i></span> = <span class="c4"><i>r</i>₁</span><span class="c1"><i>ω</i>₁</span>`, v: `= ${MR.piT(Q(r1 * n, 30))} ≈ ${v.toFixed(1)} cm/s`, cls: "c5" },
        { lhs: `<span class="c1"><i>ω</i>₂</span> = <span class="c5"><i>v</i></span>/<span class="c4"><i>r</i>₂</span>`, v: `= ${MR.piT(Q(r1 * n, 30 * r2))} rad/s = ${MR.qT(q2)} rpm`, cls: "c1" }],
        landmark: { hit: whole, big: `<span class="c5"><i>v</i>₁ = <i>v</i>₂</span>, <span class="c1"><i>ω</i>₂ = <i>ω</i>₁ · ${r1}/${r2}</span>`, note: whole ? (r1 > r2 ? `The small wheel turns ${r1 / r2} times for each turn of the big one.` : `The big wheel turns once for every ${r2 / r1} turns of the small one.`) : "The belt gives both rims the same linear speed." },
        narr: "Set r₂ to twice r₁: the belt speed stays, the second wheel's rpm halves." });
      P.labels(lab); }
    else if (mode === "convert") { const pad = k.split(c, host, { side: "left", frac: .5, hfrac: .5 }), { n, r } = CASES[ci]; pad.b += 30, w = n * PI / 30;
      a1 += Math.min(w, 4 * PI) * dt * SLOW; SP.set(steps(), st - 1);
      const P = plane(-r * 1.5, r * 1.5, r * 1.35, pad); wheel(P, 0, r, a1, C.cyan, 6);
      const px = r * Math.cos(a1), py = r * Math.sin(a1);
      if (st >= 3) P.seg(px, py, px - .6 * r * Math.sin(a1), py + .6 * r * Math.cos(a1), C.green, 3);
      lab.push({ text: `r = ${r} cm`, x: px / 2, y: py / 2, color: C.violet }, { text: `${n} rpm`, x: 0, y: -r, color: C.cyan, prefer: "s" });
      if (st >= 2) lab.push({ text: `ω = ${wT(n)}`, x: 0, y: r * .35, color: C.amber });
      if (st >= 3) lab.push({ text: "v", x: px - .6 * r * Math.sin(a1), y: py + .6 * r * Math.cos(a1), color: C.green });
      k.readout({ title: `${n} rpm on a radius of ${r} cm`, big: st < 4 ? "Find ω in rad/s and the rim speed v." : `<span class="c1">${wT(n)}</span>, <span class="c5">${MR.piT(Q(r * n, 30))} cm/s</span>`,
        landmark: { hit: st >= 4, big: st >= 4 ? `<i>v</i> ≈ ${(r * w).toFixed(1)} cm/s` : "4 steps", note: st >= 4 ? "Exact first, decimal last." : "Press Step." }, narr: "New problem picks another turntable, fan or wheel." });
      P.labels(lab); }
    else { k.split(c, host, { off: true });
      const { n, rc, rs, R } = B, wp = n * PI / 30, vc = rc * wp, ww = vc / rs, vb = R * ww, Lc = 42;
      a1 -= wp * dt * SLOW; a2 -= ww * dt * SLOW; belt += vc * dt * SLOW;
      const P = plane(-R - 2, Lc + 19, R + 2, { l: 12, r: 12, t: 16, b: 12 });
      wheel(P, 0, R, a2, null, 8); c.d.circle(P.X(0), P.Y(0), P.X(R) - P.X(R - 2.2), null, k.alpha(C.muted, .6), P.X(2.2) - P.X(0));
      drawBelt(P, 0, rs, Lc, rc, belt, C.green); wheel(P, Lc, rc, a1, C.cyan, 0); wheel(P, 0, rs, a2, C.pink, 0);
      const cx = Lc + 17 * Math.cos(a1), cy = 17 * Math.sin(a1); P.seg(Lc, 0, cx, cy, C.amber, 4); P.dot(cx, cy, C.amber, 6);
      lab.push({ text: `${rc} cm`, x: Lc, y: rc, color: C.cyan, prefer: "n" }, { text: `${rs} cm`, x: 0, y: -rs, color: C.pink, prefer: "s" }, { text: `R = ${R} cm`, x: R * .7, y: -R * .7, color: C.violet });
      const gr = Q(rc, rs), kmh = vb * 0.036;
      k.readout({ title: "Pedals to road", rows: [
        { lhs: `<span class="c1"><i>ω</i><sub>pedal</sub></span> = ${n} rpm`, v: `= ${wT(n)}`, cls: "c1" },
        { lhs: `<span class="c5"><i>v</i><sub>chain</sub></span> = ${rc} · ${MR.piT(Q(n, 30))}`, v: `= ${MR.piT(Q(rc * n, 30))} cm/s`, cls: "c5" },
        { lhs: `<span class="c1"><i>ω</i><sub>wheel</sub></span> = <i>v</i><sub>chain</sub>/${rs}`, v: `= ${MR.piT(Q(rc * n, 30 * rs))} rad/s`, cls: "c1" },
        { lhs: `<span class="c5"><i>v</i><sub>bike</sub></span> = ${R} · <i>ω</i><sub>wheel</sub>`, v: `= ${MR.piT(Q(R * rc * n, 30 * rs))} cm/s`, cls: "c5" }],
        landmark: { hit: gr.d === 1, big: `≈ ${(vb / 100).toFixed(2)} m/s ≈ ${kmh.toFixed(1)} km/h`, note: gr.d === 1 ? `Gear ratio ${rc}/${rs} = ${gr.n}: one pedal turn is ${gr.n} wheel turns.` : `Gear ratio ${rc}/${rs} = ${MR.qT(gr)} wheel turns per pedal turn.` },
        narr: "A smaller rear sprocket is a harder gear: more speed per pedal turn." });
      P.labels(lab); } });
};

/* ======================= trig-sin-cos-graphs ======================= */
L["trig-sin-cos-graphs"] = k => {
  MathKit.attach(k);
  const { C, MR } = k, { Q } = MR, c = k.canvas(), host = k.dom(), UC = k.unitCircle(c, { snap: PI / 12, t: PI / 3 });
  const KT = [0, PI / 2, PI, 3 * PI / 2, TAU], KQ = [Q(0), Q(1, 2), Q(1), Q(3, 2), Q(2)];
  let mode = "trace", show = "both", play = false, kst = 0, kfn = "sin", S, ST, playB;
  const val = (fn, t) => Math.round(fn === "sin" ? Math.sin(t) : Math.cos(t));
  const kpT = (fn, i) => `(${MR.piT(KQ[i])}, ${String(val(fn, KT[i])).replace("-", MI)})`;
  const enter = () => { k.showGroup(mode); play = false; if (playB) playB.textContent = "Play"; kst = 0; if (ST) ST.reset();
    k.guard(mode === "keys" ? KT.map((t, i) => kpT(kfn, i)) : []);
    k.hint(mode === "trace" ? "Drag the point around the circle, or press Play." : mode === "keys" ? "Step the point a quarter turn at a time and plot each height." : "Slide s until the shifted sine lands on the cosine."); };
  k.modes([["trace", "Trace"], ["keys", "Key points"], ["compare", "Compare"]], mode, m => { mode = m; enter(); });
  k.group("trace", () => { playB = k.button("Play", () => { play = !play; playB.textContent = play ? "Pause" : "Play"; }); k.select("Graph", [["both", "sin and cos"], ["sin", "sin only"], ["cos", "cos only"]], show, v => { show = v; }); });
  k.group("keys", () => { k.select("Function", [["sin", "y = sin x"], ["cos", "y = cos x"]], kfn, v => { kfn = v; enter(); }); ST = k.stepper(() => 5, j => { kst = j; }); });
  k.group("compare", () => { S = k.params([{ key: "s", label: `<span class="c5"><i>s</i></span>`, min: -PI, max: PI, step: PI / 12, value: 0, fmt: v => piFmt(MR, v) }]); });
  enter();
  // the table of key values under the band: columns t = 0 … 2π, rows sin / cos; `fill(fn, i)` says which cells show
  const table = fill => `<table style="border-collapse:collapse;margin:4px auto;font-size:15px">` + `<tr><td class="c1" style="padding:3px 8px"><i>t</i></td>${KQ.map(q => `<td class="c1" style="padding:3px 8px;text-align:center">${MR.piT(q)}</td>`).join("")}</tr>`
    + ["sin", "cos"].filter(fn => fn === "sin" ? show !== "cos" || mode === "keys" : show !== "sin" || mode === "keys").filter(fn => mode !== "keys" || fn === kfn).map(fn => `<tr style="border-top:1px solid rgba(128,128,128,.35)"><td class="${fn === "sin" ? "c3" : "c2"}" style="padding:3px 8px">${fn} <i>t</i></td>${KT.map((t, i) => `<td style="padding:3px 8px;text-align:center">${fill(fn, i) ? String(val(fn, t)).replace("-", MI) : "·"}</td>`).join("")}</tr>`).join("") + `</table>`;
  k.loop(dt => { c.begin();
    const mb = k.stage.querySelector(".modes"), top = mb ? mb.offsetTop + mb.offsetHeight + 8 : 8, narrow = c.w < 600;
    if (mode === "compare") { const pad = k.split(c, host, { off: true }), s = S.s, g = x => Math.sin(x + s);
      const P = k.plane(c, { xmin: -TAU - .3, xmax: TAU + .3, ymin: -1.7, ymax: 1.7, xstep: narrow ? PI : PI / 2, ystep: 1, pad });
      P.grid(); P.piAxes(); P.curve(Math.sin, C.pink, { w: 2 }); P.curve(Math.cos, C.cyan, { w: 2 }); P.curve(g, k.alpha(C.green, .8), { w: 4, dash: [9, 6] });
      if (Math.abs(s) > 1e-9) c.d.arrow(P.X(0), P.Y(-1.4), P.X(-s), P.Y(-1.4), C.amber, 2);
      const lab = [{ text: "sin x", ...P.onCurve(Math.sin, .62), color: C.pink }, { text: "cos x", ...P.onCurve(Math.cos, .88), color: C.cyan }, { text: "sin(x + s)", ...P.onCurve(g, .2), color: C.green }];
      const hit = Math.abs(s - PI / 2) < 1e-9, st = piFmt(MR, Math.abs(s));
      k.readout({ title: "Shift the sine wave", big: Math.abs(s) < 1e-9 ? `<span class="m"><i>y</i> = sin <i>x</i></span>` : `<span class="m"><i>y</i> = sin(<i>x</i> ${s < 0 ? MI : "+"} <span class="c5">${st}</span>)</span>`, rows: [
        { lhs: "shift", v: Math.abs(s) < 1e-9 ? "none" : `${st} to the ${s > 0 ? "left" : "right"}`, cls: "c1" },
        Math.abs(Math.abs(s) - PI) < 1e-9 ? { lhs: `sin(<i>x</i> ± π) = −sin <i>x</i>`, lbl: "half a period flips the wave" } : null,
        Math.abs(s + PI / 2) < 1e-9 ? { lhs: `sin(<i>x</i> − π/2) = −cos <i>x</i>`, lbl: "the mirror image of cosine" } : null],
        landmark: { hit, big: `<span class="c2">cos <i>x</i></span> = <span class="c3">sin(<i>x</i> + π/2)</span>`, note: hit ? "A quarter period to the left: cosine is sine started at its peak." : "Find the shift that puts the green wave on the cosine." },
        narr: "Sine is odd (symmetric about the origin); cosine is even (symmetric about the y-axis)." });
      P.labels(lab); return; }
    // band: unit circle on the left, graph on the right, sharing one vertical scale; table panel underneath
    const avail = c.h - top - 40, u = Math.min((narrow ? .47 : .38) * c.w / 2.8, avail * (narrow ? .45 : .72) / 2.8), H = 2.8 * u, bt = top + 4, pb = c.h - bt - H;
    const ptop = bt + H + 30; host.style.cssText = `display:block;left:0;right:0;top:${ptop}px;bottom:0;width:auto;height:auto;padding:2px 10px;overflow:auto`; host.__css = "";
    if (play && mode === "trace") { let t = UC.t + dt * .9; if (t > TAU + 1e-9) t = 0; UC.set(t); }
    const tt = mode === "keys" ? KT[Math.max(0, kst - 1)] : (Math.abs(UC.t - TAU) < 1e-9 ? TAU : ((UC.t % TAU) + TAU) % TAU), x = Math.cos(tt), y = Math.sin(tt);
    const Pc = UC.plane({ l: 6, r: c.w - 6 - H, t: bt, b: pb }); UC.draw({ t: tt, axisLabels: false });
    const Pg = k.plane(c, { xmin: -.3, xmax: TAU + .3, ymin: -1.4, ymax: 1.4, xstep: PI / 2, ystep: 1, pad: { l: H + 34, r: 12, t: bt, b: pb } });
    Pg.grid(); Pg.piAxes(); const lab = [];
    if (mode === "trace") {
      const on = fn => show === "both" || show === fn;
      if (on("sin")) { Pg.curve(Math.sin, k.alpha(C.pink, .3), { w: 1.5, dash: [4, 5] }); if (tt > .01) Pg.curve(Math.sin, C.pink, { w: 3, from: 0, to: tt }); }
      if (on("cos")) { Pg.curve(Math.cos, k.alpha(C.cyan, .3), { w: 1.5, dash: [4, 5] }); if (tt > .01) Pg.curve(Math.cos, C.cyan, { w: 3, from: 0, to: tt }); }
      Pg.seg(0, 0, tt, 0, C.amber, 4);
      if (on("cos")) { Pg.seg(tt, 0, tt, x, C.cyan, 2); Pg.dot(tt, x, C.cyan, 6); }
      if (on("sin")) { Pg.seg(tt, 0, tt, y, C.pink, 2); Pg.dot(tt, y, C.pink, 6); c.d.line(Pc.X(x), Pc.Y(y), Pg.X(tt), Pg.Y(y), k.alpha(C.pink, .7), 1.2, [4, 4]); }
      lab.push({ text: "t", x: tt / 2, y: 0, color: C.amber, prefer: "s" }); if (on("sin")) lab.push({ text: "sin x", ...Pg.onCurve(Math.sin, .1), color: C.pink }); if (on("cos")) lab.push({ text: "cos x", ...Pg.onCurve(Math.cos, .9), color: C.cyan });
      const q = MR.piQ(tt, 12), pt = q ? MR.ucPoint(q) : null, key = q && (q.d <= 2), i = key ? Math.round(tt / (PI / 2)) : -1;
      host.innerHTML = table((fn, j) => KT[j] <= tt + 1e-9);
      k.readout({ title: "Unwrapping the circle", big: `<span class="m"><span class="c1"><i>t</i> = ${piFmt(MR, tt, 12)}</span></span>`, rows: [
        { lhs: `<i>P</i>(<i>t</i>)`, v: pt ? pt.text : `(${numT(x)}, ${numT(y)})` },
        { lhs: `<span class="c3">sin <i>t</i></span>`, v: pt ? pt.y.text : numT(y), cls: "c3" }, { lhs: `<span class="c2">cos <i>t</i></span>`, v: pt ? pt.x.text : numT(x), cls: "c2" }],
        landmark: { hit: key, big: key ? `key point ${i + 1} of 5` : "between key points", note: key ? ["sin 0, cos at its maximum", "sin at its maximum, cos 0", "sin 0, cos at its minimum", "sin at its minimum, cos 0", "one full period: both repeat"][i] : "Key points come every quarter turn, π/2 apart." },
        narr: "The amber arc on the circle has the same length as the amber segment on the t-axis." }); }
    else { const f = kfn === "sin" ? Math.sin : Math.cos, col = kfn === "sin" ? C.pink : C.cyan;
      if (kst >= 5) Pg.curve(f, col, { w: 3, from: 0, to: TAU });
      for (let i = 0; i < kst; i++) { Pg.dot(KT[i], val(kfn, KT[i]), col, 6); lab.push({ text: kpT(kfn, i), x: KT[i], y: val(kfn, KT[i]), color: col, font: `13px ${k.F.math}` }); }
      if (kst > 0) c.d.line(Pc.X(kfn === "sin" ? x : 0), Pc.Y(kfn === "sin" ? y : 0), Pg.X(tt), Pg.Y(kfn === "sin" ? y : 0), k.alpha(col, .6), 1.2, [4, 4]);
      host.innerHTML = table((fn, j) => j < kst);
      const pt = MR.ucPoint(KQ[Math.max(0, kst - 1)]), v = val(kfn, tt);
      k.readout({ title: "Five key points", big: kst ? `<span class="m"><i>P</i>(${MR.piT(KQ[kst - 1])}) = ${pt.text}</span>` : `Plot <span class="m"><i>y</i> = ${kfn} <i>x</i></span>: press Step to start at <span class="m"><i>t</i> = 0</span>.`,
        rows: kst ? [{ lhs: `${kfn} ${MR.piT(KQ[kst - 1])} = ${kfn === "sin" ? "y" : "x"}-coordinate`, v: String(v).replace("-", MI), cls: kfn === "sin" ? "c3" : "c2" }] : [],
        landmark: { hit: kst >= 5, big: kst >= 5 ? (kfn === "sin" ? "0, 1, 0, −1, 0" : "1, 0, −1, 0, 1") : `${kst} of 5`, note: kst >= 5 ? "Five points a quarter period apart sketch a whole period." : "Each step is a quarter turn, π/2." },
        narr: "Switch to cosine: the same five values, starting one place later." }); }
    Pg.labels(lab); });
};

/* ======================= trig-sinusoids ======================= */
L["trig-sinusoids"] = k => {
  MathKit.attach(k);
  const { C, MR } = k, { Q } = MR, c = k.canvas(), host = k.dom(), SP = k.stepsPanel(host);
  const TG = [["sin", 2, 1, 0, 1], ["cos", 3, 2, 0, 0], ["sin", 1, 2, PI / 4, 0], ["cos", -2, 1, PI / 3, 1], ["sin", 1.5, .5, -PI / 2, -1], ["sin", 3, 3, PI / 6, 0]];
  // From-graph cases: maximum (xq·π, y) and the next minimum; x as multiples of π
  const FG = [[Q(1, 6), 7, Q(2, 3), -1], [Q(1, 4), 3, Q(5, 4), -1], [Q(1, 3), 2, Q(1), -2], [Q(1, 2), -1, Q(3, 2), -5], [Q(1, 8), 4, Q(3, 8), 2]];
  let mode = "explore", fn = "sin", ti = 0, gi = 0, st = 0, S, ST, matchEls = [], view = {};
  const enter = () => { k.showGroup(mode === "graph" ? "graph" : "explore"); matchEls.forEach(e => { e.style.display = mode === "match" ? "" : "none"; }); st = 0; if (ST) ST.reset();
    if (mode === "match") ["A", "B", "C", "D"].forEach((p, i) => S.set(p, [1, 1, 0, 0][i]));
    k.guard(mode === "match" ? [sinEq(MR, ...TG[ti])] : mode === "graph" ? [fgEq()] : []);
    k.hint(mode === "explore" ? "Move one slider at a time and watch which feature changes." : mode === "match" ? "Read the grey wave's midline, height, period and start, then set the sliders." : "Read A, D, the period and the phase shift off the marked high and low points."); };
  const fgP = () => { const [mx, my, nx, ny] = FG[gi], P = Q.mul(Q(2), Q.sub(nx, mx)); return { mx, my, nx, ny, A: (my - ny) / 2, D: (my + ny) / 2, P, B: Q.div(Q(2), P) }; };
  const fgEq = () => { const g = fgP(); return sinEq(MR, "cos", g.A, Q.val(g.B), Q.val(g.mx) * PI, g.D); };
  k.modes([["explore", "Explore"], ["match", "Match"], ["graph", "From graph"]], mode, m => { mode = m; enter(); });
  k.group("explore", () => { k.select("Function", [["sin", "sin"], ["cos", "cos"]], fn, v => { fn = v; });
    S = k.params([{ key: "A", min: -4, max: 4, step: .5, value: 1, cls: "c3" }, { key: "B", min: .5, max: 4, step: .5, value: 1, cls: "c2" },
      { key: "C", min: -PI, max: PI, step: PI / 12, value: 0, cls: "c1", fmt: v => piFmt(MR, v) }, { key: "D", min: -3, max: 3, step: .5, value: 0, cls: "c4" }], (key, v) => { if (key === "A" && v === 0) S.set("A", .5); });
    matchEls = [k.button("New target", () => { ti = (ti + 1) % TG.length; enter(); }, "btn ghost"), k.button("Show answer", () => { const [f, A, B, Cc, D] = TG[ti]; fn = f; k.ctl.querySelector("select").value = f; S.set("A", A); S.set("B", B); S.set("C", Cc); S.set("D", D); }, "btn ghost")]; });
  k.group("graph", () => { ST = k.stepper(() => 5, j => { st = j; }); k.button("New graph", () => { gi = (gi + 1) % FG.length; enter(); }, "btn ghost"); });
  enter();
  k.loop(dt => { c.begin(); const narrow = c.w < 600, lab = [];
    if (mode !== "graph") { const pad = k.split(c, host, { off: true }), { A, B, D } = S, Cc = S.C, f = sinusoid(fn, A, B, Cc, D), par = fn === "cos" ? Math.cos : Math.sin, Pd = TAU / B;
      const tg = mode === "match" ? sinusoid(...TG[ti]) : null, lo = Math.min(-1.2, D - Math.abs(A), tg ? TG[ti][4] - Math.abs(TG[ti][1]) : 0) - 1.2, hi = Math.max(1.2, D + Math.abs(A), tg ? TG[ti][4] + Math.abs(TG[ti][1]) : 0) + .8;
      k.smooth(view, { ymin: lo, ymax: hi }, dt);
      const P = k.plane(c, { xmin: -PI - .2, xmax: 3 * PI + .2, ymin: view.ymin, ymax: view.ymax, xstep: narrow ? PI : PI / 2, ystep: view.ymax - view.ymin > 9 ? 2 : 1, pad });
      P.grid(); P.piAxes(); P.curve(par, k.alpha(C.green, .75), { w: 1.5, dash: [6, 5] });
      if (tg) P.curve(tg, k.alpha(C.muted, .45), { w: 8 });
      P.hasym(D, C.violet); P.curve(f, C.text, { w: 3 });
      const kp = keyPts(fn, A, B, Cc, D); kp.forEach(p => P.hole(p.x, p.y, C.text, 4.5));
      const top = kp.reduce((m, p) => (p.y > m.y + 1e-9 ? p : m), kp[0]), yb = D - Math.abs(A) - .55;
      P.seg(top.x, D, top.x, top.y, C.pink, 2.5); P.seg(Cc, yb, Cc + Pd, yb, C.cyan, 2.5); P.seg(Cc, yb - .15, Cc, yb + .15, C.cyan, 2); P.seg(Cc + Pd, yb - .15, Cc + Pd, yb + .15, C.cyan, 2);
      if (Math.abs(Cc) > 1e-9) c.d.arrow(P.X(0), P.Y(D), P.X(Cc), P.Y(D), C.amber, 2.5);
      lab.push({ text: `|A| = ${numT(Math.abs(A))}`, x: top.x, y: D + Math.abs(A) / 2, color: C.pink, prefer: "e" }, { text: `period ${piFmt(MR, Pd)}`, x: Cc + Pd / 2, y: yb, color: C.cyan, prefer: "s" },
        { text: `y = ${numT(D)}`, x: 2.6 * PI, y: D, color: C.violet, prefer: "n" }, { text: `${fn} x`, ...P.onCurve(par, .06), color: C.green });
      if (Math.abs(Cc) > 1e-9) lab.push({ text: `C = ${piFmt(MR, Cc)}`, x: Cc / 2, y: D, color: C.amber, prefer: "s" });
      const rows = [{ lhs: `amplitude |<span class="c3"><i>A</i></span>|`, v: numT(Math.abs(A)), cls: "c3" }, { lhs: `period 2π/<span class="c2"><i>B</i></span>`, v: piFmt(MR, Pd), cls: "c2" },
        { lhs: `phase shift <span class="c1"><i>C</i></span>`, v: Math.abs(Cc) < 1e-9 ? "0" : `${piFmt(MR, Math.abs(Cc))} ${Cc > 0 ? "right" : "left"}`, cls: "c1" }, { lhs: `midline, range`, v: `y = ${numT(D)}, [${numT(D - Math.abs(A))}, ${numT(D + Math.abs(A))}]`, cls: "c4" }];
      if (mode === "explore") { const other = fn === "sin" ? Math.cos : Math.sin, hit = sameCurve(f, other);
        k.readout({ title: "Your wave", big: `<span class="m" style="font-size:.86em">${sinEq(MR, fn, A, B, Cc, D, true)}</span>`, rows, landmark: { hit, big: hit ? `same graph as <i>y</i> = ${fn === "sin" ? "cos" : "sin"} <i>x</i>` : "five key points", note: hit ? "Sine and cosine are one wave, a quarter period apart." : "One period runs from x = C to x = C + 2π/B." }, narr: "Try to make this sine wave land exactly on y = cos x." }); }
      else { const [tf, tA, tB, tC, tD] = TG[ti], ok = sameCurve(f, tg), cmp = (a, b) => (Math.abs(a - b) < 1e-9 ? "✓" : a < b ? "too small" : "too big");
        k.readout({ title: "Match the grey wave", big: `<span class="m" style="font-size:.86em">${sinEq(MR, fn, A, B, Cc, D, true)}</span>`, rows: [{ lhs: "amplitude", v: cmp(Math.abs(A), Math.abs(tA)), cls: "c3" }, { lhs: "period", v: cmp(Pd, TAU / tB), cls: "c2" }, { lhs: "midline", v: cmp(D, tD), cls: "c4" }, { lhs: "shape and shift", v: ok ? "✓" : "not yet", cls: "c1" }],
          landmark: { hit: ok, big: ok ? "Matched" : `target ${ti + 1} of ${TG.length}`, note: ok ? "Same wave. Other A, C (or sin vs cos) can give it too." : "Start with D and |A|, then B, then C." }, narr: "New target gives another wave." }); }
      P.labels(lab); return; }
    // From graph
    const pad = k.split(c, host, { side: "left", frac: .44, hfrac: .46 }), g = fgP(); pad.b += 30; const mx = Q.val(g.mx) * PI, nx = Q.val(g.nx) * PI, B = Q.val(g.B), Pd = TAU / B, f = sinusoid("cos", g.A, B, mx, g.D);
    const P = k.plane(c, { xmin: -.4, xmax: Math.max(TAU, nx + Pd / 2) + .3, ymin: Math.min(g.ny, 0) - 1.6, ymax: Math.max(g.my, 0) + 1.6, xstep: narrow ? PI : PI / 2, ystep: g.my - g.ny > 6 ? 2 : 1, pad });
    P.grid(); P.piAxes(); P.curve(f, C.text, { w: 3 });
    if (st >= 1) P.seg(mx, g.D, mx, g.my, C.pink, 3);
    if (st >= 2) P.hasym(g.D, C.violet);
    if (st >= 3) { P.seg(mx, g.ny - .7, nx, g.ny - .7, C.cyan, 2.5); }
    if (st >= 4) c.d.arrow(P.X(0), P.Y(g.my + .6), P.X(mx), P.Y(g.my + .6), C.amber, 2.5);
    if (st >= 5) P.curve(f, k.alpha(C.green, .9), { w: 2, dash: [7, 5] });
    P.dot(mx, g.my, C.text, 6); P.dot(nx, g.ny, C.text, 6);
    lab.push({ text: `(${MR.piT(g.mx)}, ${numT(g.my)})`, x: mx, y: g.my, color: C.text, prefer: "ne" }, { text: `(${MR.piT(g.nx)}, ${numT(g.ny)})`, x: nx, y: g.ny, color: C.text, prefer: "se" });
    if (st >= 3) lab.push({ text: "P/2", x: (mx + nx) / 2, y: g.ny - .7, color: C.cyan, prefer: "s" });
    const pT = MR.piT(g.P), hT = MR.piT(Q.sub(g.nx, g.mx));
    SP.set([{ tag: "amplitude", eq: `<span class="c3"><i>A</i> = (${numT(g.my)} − (${numT(g.ny)}))/2 = ${numT(g.A)}</span>`, why: "Half the distance from the high to the low." },
      { tag: "midline", eq: `<span class="c4"><i>D</i> = (${numT(g.my)} + (${numT(g.ny)}))/2 = ${numT(g.D)}</span>`, why: "Halfway between the high and the low." },
      { tag: "period", eq: `<span class="c2"><i>P</i> = 2(${MR.piT(g.nx)} − ${MR.piT(g.mx)}) = 2 · ${hT} = ${pT}, &nbsp;<i>B</i> = 2π/${pT} = ${MR.qT(g.B)}</span>`, why: "A high and the next low are half a period apart." },
      { tag: "phase shift", eq: `<span class="c1"><i>C</i> = ${MR.piT(g.mx)}</span>`, why: "Cosine with A > 0 starts its period at a maximum." },
      { tag: "equation", eq: `<span class="c5">${fgEq()}</span>`, why: "Check: x = C gives A + D, the maximum." }], st - 1);
    k.readout({ title: "Equation from a graph", big: st >= 5 ? `<span class="m" style="font-size:.86em">${fgEq()}</span>` : "Write the wave as y = A cos(B(x − C)) + D.", landmark: { hit: st >= 5, big: st >= 5 ? "the dashed fit lies on the curve" : `${st} of 5 steps`, note: "A sine form also works: start a quarter period earlier." }, narr: "New graph gives another high and low." });
    P.labels(lab); });
};
})();
