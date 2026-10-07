/* ============ Labs: Trigonometry, batch B1 (angles in standard position, radians, unit circle) ============ */
(function(){
const L = window.LABS;
const MI = "−", PI = Math.PI, TAU = 2 * PI, D2R = PI / 180;

/* ---------- DOM-free helpers (reduceDeg and ucPoint are MathRules, web/kits/subjects/trig.js) ---------- */
// reduceDeg(θ) → {r, k}: the coterminal angle r in [0°, 360°) and the integer k with r = θ + 360k
const reduceDeg = th => window.MathRules.reduceDeg(th);
// numT(v, p): decimal text with at most p places and a real minus sign
const numT = (v, p = 4) => String(+(+v).toFixed(p)).replace("-", MI);
const dmsT = (d, m, s) => `${d}° ${m}′ ${s}″`;
// dmsCase(i): the i-th DMS drill, exact: θ = d + T/3600 with T a multiple of 9, so the decimal ends within 4 places
// and the minutes T/60 within 2; even i asks decimal → DMS, odd i asks DMS → decimal
const dmsCase = i => { const d = 7 + (i * 37 + 58) % 166, T = 9 * (1 + (i * 151 + 23) % 399); return { d, T, m: Math.floor(T / 60), s: T % 60, dec: d + T / 3600, toDms: i % 2 === 0 }; };
// ucPoint(MR, q): exact terminal point of t = qπ on the unit circle, {x, y, text: "(−√3/2, 1/2)", html}
const ucPoint = (MR, q) => MR.ucPoint(q);
const ROMAN = ["", "I", "II", "III", "IV"], AXIS = { "+x": "positive x-axis", "+y": "positive y-axis", "−x": "negative x-axis", "−y": "negative y-axis" };

/* ======================= trig-angles ======================= */
L["trig-angles"] = k => {
  MathKit.attach(k);
  const { C, F } = k, MR = k.MR, c = k.canvas(), dom = k.dom(); dom.style.display = "none";
  const ask = document.createElement("div"); ask.className = "mk-ask"; ask.style.cssText = "margin:4px 0 8px;font-size:15px;line-height:1.45"; dom.appendChild(ask);
  const SP = k.stepsPanel(dom);
  let mode = "rotate", P = null, drag = false;
  const RO = { th: 135, div: 1 / 15 };
  const CT = { list: [1030, -765, 845, -1000, 1200, -480, 940, -615], i: 0, s: 0, disp: { v: 1030 } };
  const DM = { i: 0, s: 0 };
  const quadText = d => { const q = MR.quadrant(d, { deg: true }); return q ? `Quadrant ${ROMAN[q]}` : `quadrantal (${AXIS[MR.axisOf(d, { deg: true })]})`; };
  const ct = () => { const th = CT.list[CT.i % CT.list.length], { r, k: kk } = reduceDeg(th); return { th, r, n: Math.abs(kk), sg: th >= 360 ? 1 : -1 }; };
  const ctLines = () => { const { th, r, n, sg } = ct(), out = [];
    for (let i = 1; i <= n; i++) { const a = th - sg * 360 * (i - 1), b = th - sg * 360 * i;
      out.push({ tag: `turn ${i}`, eq: `${MR.degT(a)} ${sg > 0 ? MI : "+"} 360° = ${MR.degT(b)}`, why: i === n ? "Now in [0°, 360°)." : "Still outside [0°, 360°): one more turn." }); }
    out.push({ tag: "answer", eq: `${MR.degT(th)} = ${MR.degT(r)} ${sg > 0 ? "+" : MI} ${n} · 360°`, why: `${quadText(r)}. Every angle ${MR.degT(r)} + 360°k has this terminal side.` });
    return out; };
  const dmLines = () => { const p = dmsCase(DM.i), D = numT(p.dec), f = numT(p.T / 3600);
    if (p.toDms) return [
      { tag: "split", eq: `${D}° = ${p.d}° + ${f}°`, why: "Keep the whole degrees; convert only the decimal part." },
      { tag: "minutes", eq: `${f} × 60 = ${numT(p.T / 60, 2)}′ → ${p.m}′`, why: "1° = 60′. The whole number is the minutes." },
      { tag: "seconds", eq: `${numT(p.s / 60, 2)} × 60 = ${p.s}″`, why: "1′ = 60″. The leftover part of a minute becomes seconds." },
      { tag: "answer", eq: `${D}° = ${dmsT(p.d, p.m, p.s)}` }];
    return [
      { tag: "seconds", eq: `${p.m}′ ${p.s}″ = ${p.m} × 60″ + ${p.s}″ = ${p.T}″`, why: "Put the minutes and seconds into one unit first." },
      { tag: "degrees", eq: `${p.T}″ ÷ 3600 = ${f}°`, why: "1° = 60 × 60″ = 3600″." },
      { tag: "answer", eq: `${dmsT(p.d, p.m, p.s)} = ${p.d}° + ${f}° = ${D}°` }]; };

  // pointer: drag the terminal side; the angle unwraps continuously, so it can pass ±360°
  const move = e => { const q = c.xy(e), m = P.inv(q.x, q.y), a = Math.atan2(m.y, m.x) / D2R; let v = a + 360 * Math.round((RO.th - a) / 360);
    v = Math.round(v * RO.div) / RO.div; RO.th = Math.max(-1080, Math.min(1080, +v.toFixed(9))); };
  c.cv.addEventListener("pointerdown", e => { if (mode !== "rotate" || !P) return; const q = c.xy(e), m = P.inv(q.x, q.y); if (Math.hypot(m.x, m.y) < .15) return; drag = true; c.cv.setPointerCapture(e.pointerId); move(e); e.preventDefault(); });
  c.cv.addEventListener("pointermove", e => { if (drag) move(e); });
  const up = () => { drag = false; }; c.cv.addEventListener("pointerup", up); c.cv.addEventListener("pointercancel", up); c.cv.style.touchAction = "none";

  k.group("rotate", () => {
    k.select("Snap", [["15", "15°"], ["1", "1°"], ["60", "1′"]], "15", v => { RO.div = v === "15" ? 1 / 15 : +v; RO.th = Math.round(RO.th * RO.div) / RO.div; });
    k.button("+360°", () => { RO.th = Math.min(1080, RO.th + 360); }, "btn ghost");
    k.button(MI + "360°", () => { RO.th = Math.max(-1080, RO.th - 360); }, "btn ghost");
  });
  const stCT = k.group("cot", () => { const s = k.stepper(() => ct().n + 1, v => { CT.s = v; if (v) k.hint(""); }); k.button("New angle", () => { s.pause(); CT.i++; CT.s = 0; s.k = 0; CT.disp.v = ct().th; build(); }, "btn ghost"); return s; });
  const stDM = k.group("dms", () => { const s = k.stepper(() => dmLines().length, v => { DM.s = v; if (v) k.hint(""); }); k.button("New", () => { s.pause(); DM.i++; DM.s = 0; s.k = 0; build(); }, "btn ghost"); return s; });

  function build(){
    k.showGroup(mode);
    if (mode === "rotate") { k.guard([]); k.hint("Drag the terminal side around, past a full turn and back. +360° adds a revolution without moving it."); }
    if (mode === "cot") { const { th } = ct(); ask.innerHTML = `Find the angle in <span class="m">[0°, 360°)</span> that is coterminal with <span class="m c1"><i>θ</i> = ${MR.degT(th)}</span>.`; k.guard([MR.degT(ct().r)]); k.hint("Step removes one full turn of 360° at a time."); }
    if (mode === "dms") { const p = dmsCase(DM.i); ask.innerHTML = p.toDms ? `Write <span class="m c1">${numT(p.dec)}°</span> in degrees, minutes and seconds.` : `Write <span class="m c1">${dmsT(p.d, p.m, p.s)}</span> in decimal degrees.`; k.guard([p.toDms ? dmsT(p.d, p.m, p.s) : numT(p.dec) + "°"]); k.hint("Step through the conversion; the rulers zoom into one degree and one minute."); }
  }
  k.modes([["rotate", "Rotate"], ["cot", "Coterminal"], ["dms", "DMS"]], mode, m => { mode = m; stCT.pause(); stDM.pause(); build(); });
  build();

  // one rotation: initial side, whole turns (violet spiral), the rest (amber), terminal side
  const turn = (th) => { const s = P.X(1) - P.X(0), rpx = Math.min(26, s * .2), rev = Math.trunc(th / 360), sp = th >= 0 ? 10 : -10, t = th * D2R;
    P.seg(0, 0, 1.25, 0, C.cyan, 3);
    if (rev) P.angleArc(0, 0, rpx, 0, rev * TAU, C.violet, { spiral: sp, arrow: false, w: 2.5 });
    const a = P.angleArc(0, 0, rpx + Math.abs(rev) * 10, rev * TAU, t, C.amber, { spiral: sp, w: 2.5 });
    P.vec(0, 0, 1.25 * Math.cos(t), 1.25 * Math.sin(t), C.pink, { w: 3 });
    return a; };
  const shadeQ = th => { const q = MR.quadrant(th, { deg: true }); if (!q) return 0; const sx = q === 1 || q === 4 ? 1 : -1, sy = q <= 2 ? 1 : -1, d = c.d;
    const x0 = sx > 0 ? P.X(0) : P.left, x1 = sx > 0 ? P.left + P.width : P.X(0), y0 = sy > 0 ? P.top : P.Y(0), y1 = sy > 0 ? P.Y(0) : P.top + P.height;
    d.rect(x0, y0, x1 - x0, y1 - y0, k.alpha(C.pink, .08)); return q; };
  const quadLabels = lit => [1, 2, 3, 4].map(q => ({ text: ROMAN[q], x: (q === 1 || q === 4 ? 1 : -1) * 1.15, y: (q <= 2 ? 1 : -1) * 1.15, color: q === lit ? C.pink : C.faint, font: `${q === lit ? "bold " : ""}15px ${F.ui}` }));

  k.loop(dt => {
    c.begin(); const d = c.d;
    if (mode === "rotate" || mode === "cot") {
      const pad = mode === "rotate" ? k.split(c, dom, { off: true }) : k.split(c, dom, { frac: .44, hfrac: .42 });
      P = k.plane(c, { xmin: -1.5, xmax: 1.5, ymin: -1.5, ymax: 1.5, equal: true, pad, xstep: .5 });
      let th, lab;
      if (mode === "rotate") th = RO.th;
      else { const o = ct(); const target = o.th - o.sg * 360 * Math.min(CT.s, o.n); k.smooth(CT.disp, { v: target }, dt, 4); th = Math.abs(CT.disp.v - target) < .5 ? target : CT.disp.v; }
      const lit = shadeQ(th); P.grid(); P.axes(false);
      const a = turn(th);
      lab = mode === "rotate" ? `θ = ${MR.degT(th)}` : `${MR.degT(Math.round(th))}`;
      P.labels([{ text: lab, x: a.x, y: a.y, color: C.amber, font: `bold 14px ${F.math}` },
        { text: "initial side", x: 1.2, y: 0, color: C.cyan, font: `13px ${F.ui}` },
        { text: "terminal side", x: 1.25 * Math.cos(th * D2R), y: 1.25 * Math.sin(th * D2R), color: C.pink, font: `13px ${F.ui}` }, ...quadLabels(lit)]);
      if (mode === "rotate") { const { r, k: kk } = reduceDeg(th), n = -kk, ms = MR.dms(th);
        k.readout({ title: "Angle in standard position", big: `<span class="m c1"><i>θ</i> = ${MR.degT(th)}</span>`,
          rows: [{ lhs: "DMS", v: ms.text, cls: "c1" }, { lhs: "direction", v: th > 0 ? "counterclockwise" : th < 0 ? "clockwise" : "no turn" },
            { lhs: "full revolutions", v: String(Math.abs(Math.trunc(th / 360))), cls: "c4" }, { lhs: "coterminal in [0°, 360°)", v: MR.degT(r) }, { lhs: "terminal side", v: quadText(th), cls: "c3" }],
          landmark: { hit: Math.abs(th) >= 360, big: Math.abs(th) >= 360 ? `${MR.degT(th)} = ${MR.degT(r)} ${n > 0 ? "+" : MI} ${Math.abs(n)} · 360°` : "Past one full turn?", note: Math.abs(th) >= 360 ? `Same terminal side as ${MR.degT(r)}: the two are coterminal.` : "Keep turning past 360° (or press +360°): the terminal side comes back to the same place." },
          narr: "Try a negative angle: drag clockwise from the positive x-axis." });
      } else { const o = ct(), done = CT.s >= o.n + 1; SP.set(ctLines(), CT.s - 1);
        k.readout({ title: "Coterminal angles", big: `<span class="m"><span class="c1">${MR.degT(o.th)}</span> + <span class="c4">360°<i>k</i></span></span>`,
          rows: [{ lhs: "turns removed", v: String(Math.min(CT.s, o.n)), cls: "c4" }, { lhs: "direction", v: o.sg > 0 ? "subtract 360°" : "add 360°" }],
          landmark: { hit: done, big: done ? `${MR.degT(o.r)}, ${quadText(o.r)}` : "in [0°, 360°)?", note: done ? "The terminal side never moved; only the number of turns changed." : "The pink terminal side stays put while the turns unwind." },
          narr: "New angle gives another one; negative angles add 360° instead." }); }
    } else {
      P = null; const pad = k.split(c, dom, { frac: .44, hfrac: .46 }), p = dmsCase(DM.i), lines = dmLines(); SP.set(lines, DM.s - 1);
      const showM = !p.toDms || DM.s >= 2, showS = !p.toDms || DM.s >= 3;
      const x0 = pad.l - 14, x1 = c.w - pad.r - 14, y0 = pad.t + 6, y1 = c.h - pad.b, w = x1 - x0;
      const ruler = (y, title, lo, hi, unit, val, show, color) => {
        d.text(title, x0, y - 30, { font: `13px ${F.ui}`, color: C.muted });
        if (show) d.rect(x0, y - 9, w * val / 60, 18, k.alpha(color, .22));
        d.line(x0, y, x1, y, C.muted, 1.5);
        for (let i = 0; i <= 60; i++) { const x = x0 + w * i / 60, h = i % 10 === 0 ? 9 : i % 5 === 0 ? 6 : 3; d.line(x, y - h, x, y + h, i % 5 ? C.faint : C.muted, 1);
          if (i % 10 === 0 && i && i < 60) d.text(`${i}${unit}`, x, y + 22, { font: `11px ${F.mono}`, color: C.faint, align: "center" }); }
        d.text(lo, x0, y + 22, { font: `bold 12px ${F.mono}`, color: C.text, align: "center" }); d.text(hi, x1, y + 22, { font: `bold 12px ${F.mono}`, color: C.text, align: "center" });
        if (show) { const x = x0 + w * val / 60; d.line(x, y - 14, x, y + 14, color, 3); } };
      const ya = y0 + (y1 - y0) * .3, yb = y0 + (y1 - y0) * .74;
      ruler(ya, "one degree = 60 minutes", `${p.d}°`, `${p.d + 1}°`, "′", p.T / 60, showM, C.amber);
      if (showM) { const xa = x0 + w * p.m / 60, xb = x0 + w * (p.m + 1) / 60; d.line(xa, ya + 12, x0, yb - 38, k.alpha(C.amber, .5), 1, [4, 4]); d.line(xb, ya + 12, x1, yb - 38, k.alpha(C.amber, .5), 1, [4, 4]); }
      ruler(yb, "one minute = 60 seconds", showM ? `${p.m}′` : "?′", showM ? `${p.m + 1}′` : "?′", "″", p.s, showS, C.pink);
      const done = DM.s >= lines.length;
      k.readout({ title: "Degrees, minutes, seconds", rows: [{ lhs: "1° = 60′", v: "" }, { lhs: "1′ = 60″", v: "" }, { lhs: "1° = 3600″", v: "" }],
        landmark: { hit: done, big: done ? (p.toDms ? dmsT(p.d, p.m, p.s) : numT(p.dec) + "°") : "Step to convert", note: done ? "The same angle in both notations." : "Only the part after the whole degrees changes form." },
        narr: "New gives another angle; the drill alternates the two directions." });
    }
  });
};

/* ======================= trig-radians ======================= */
L["trig-radians"] = k => {
  MathKit.attach(k);
  const { C, F } = k, MR = k.MR, Q = MR.Q, c = k.canvas(), dom = k.dom(); dom.style.display = "none";
  const ask = document.createElement("div"); ask.style.cssText = "margin:4px 0 8px;font-size:15px;line-height:1.45"; dom.appendChild(ask);
  const SP = k.stepsPanel(dom);
  let mode = "wrap", P = null, drag = false;
  const W = { r: 3, s: 0, p: { v: 0 } };
  const CV = { list: [{ deg: 135 }, { q: Q(5, 3) }, { deg: 210 }, { q: Q(-3, 4) }, { deg: -45 }, { q: Q(7, 6) }, { deg: 20 }, { q: Q(11, 12) }, { deg: 480 }, { q: Q(5, 2) }, { deg: 330 }, { q: Q(2, 9) }], i: 0, s: 0 };
  const AS = { r: 3, n: 10, one: false };   // θ = nπ/12 or 1 rad
  const cv = () => { const o = CV.list[CV.i % CV.list.length]; if (o.deg !== undefined) return { toRad: true, deg: o.deg, q: MR.degQ(o.deg) }; return { toRad: false, q: o.q, deg: MR.qDeg(o.q) }; };
  const cvLines = () => { const o = cv(), qT = MR.piT(o.q);
    if (o.toRad) { const g = MR.gcd ? MR.gcd(Math.abs(o.deg), 180) : 1;
      return [{ tag: "multiply", eq: `${MR.degT(o.deg)} · π/180° = ${String(o.deg).replace("-", MI)}π/180`, why: "Multiply by π/180°: the degree signs cancel." },
        { tag: "reduce", eq: `${String(o.deg).replace("-", MI)}/180 = ${MR.qT(o.q)}`, why: `Divide top and bottom by ${g}.` },
        { tag: "answer", eq: `${MR.degT(o.deg)} = ${qT}`, why: "Keep π in the answer: it is exact." }]; }
    return [{ tag: "multiply", eq: `${qT} · 180°/π`, why: "Multiply by 180°/π: the π cancels." },
      { tag: "simplify", eq: `${String(o.q.n).replace("-", MI)} · 180°/${o.q.d} = ${String(o.q.n * 180).replace("-", MI)}°/${o.q.d}`, why: "" },
      { tag: "answer", eq: `${qT} = ${MR.degT(o.deg)}` }]; };
  const asT = () => AS.one ? 1 : AS.n * PI / 12;

  const move = e => { const q = c.xy(e), m = P.inv(q.x, q.y); let a = Math.atan2(m.y, m.x); if (a < 0) a += TAU; const cur = asT();
    if (Math.abs(a - cur) > PI) a = cur > PI ? TAU : 0;
    if (Math.abs(a - 1) < .045) { AS.one = true; return; } AS.one = false; AS.n = Math.max(1, Math.min(24, Math.round(a / (PI / 12)))); };
  c.cv.addEventListener("pointerdown", e => { if (mode !== "arc" || !P) return; drag = true; c.cv.setPointerCapture(e.pointerId); move(e); e.preventDefault(); });
  c.cv.addEventListener("pointermove", e => { if (drag) move(e); });
  const up = () => { drag = false; }; c.cv.addEventListener("pointerup", up); c.cv.addEventListener("pointercancel", up); c.cv.style.touchAction = "none";

  const stW = k.group("wrap", () => { k.slider(`<span class="c4"><i>r</i></span>`, 1, 4, .5, W.r, v => { W.r = v; }); return k.stepper(() => 7, v => { W.s = v; }, { ms: 1100 }); });
  const stC = k.group("convert", () => { const s = k.stepper(() => 3, v => { CV.s = v; if (v) k.hint(""); }); k.button("New", () => { s.pause(); CV.i++; CV.s = 0; s.k = 0; build(); }, "btn ghost"); return s; });
  k.group("arc", () => { k.slider(`<span class="c4"><i>r</i></span>`, 1, 5, .5, AS.r, v => { AS.r = v; }); k.button("1 radian", () => { AS.one = true; }, "btn ghost"); });

  function build(){
    k.showGroup(mode);
    if (mode === "wrap") { k.guard([]); k.hint("Step lays one radius-length piece of string along the circle. Change r: the count stays the same."); }
    if (mode === "convert") { const o = cv(); ask.innerHTML = o.toRad ? `Convert <span class="m c1">${MR.degT(o.deg)}</span> to radians, exactly.` : `Convert <span class="m c1">${MR.piT(o.q)}</span> radians to degrees.`;
      k.guard([o.toRad ? MR.piT(o.q) : MR.degT(o.deg)]); k.hint("Step through the conversion; the dashed half turn is π rad = 180°."); }
    if (mode === "arc") { k.guard([]); k.hint("Drag the end of the arc (it snaps to π/12 and to 1 rad); the slider changes r."); }
  }
  k.modes([["wrap", "Wrap"], ["convert", "Convert"], ["arc", "Arc & sector"]], mode, m => { mode = m; stW.pause(); stC.pause(); build(); });
  build();

  k.loop(dt => {
    c.begin(); const d = c.d;
    if (mode === "wrap") {
      const pad = k.split(c, dom, { off: true }); P = k.plane(c, { xmin: -5, xmax: 5, ymin: -5, ymax: 5, equal: true, pad, xstep: 1 });
      P.grid(); P.axes(); const r = W.r, sc = P.X(1) - P.X(0), tgt = Math.min(W.s, 6); k.smooth(W.p, { v: tgt }, dt, 2.2); if (Math.abs(W.p.v - tgt) < .004) W.p.v = tgt; const p = W.p.v;
      d.circle(P.X(0), P.Y(0), r * sc, null, k.alpha(C.violet, .55), 1.5);
      const labs = [];
      for (let j = 0; j < 6; j++) { if (p <= j) break; const a1 = Math.min(p, j + 1); P.angleArc(0, 0, r * sc, j, a1, j % 2 ? C.pink : k.alpha(C.pink, .55), { w: 6, arrow: false, spiral: 0 });
        if (a1 >= j + 1 - 1e-6) labs.push({ text: String(j + 1), x: 1.16 * r * Math.cos(j + .5), y: 1.16 * r * Math.sin(j + .5), color: C.pink, font: `bold 14px ${F.math}` }); }
      for (let j = 0; j <= Math.floor(p + 1e-9) && j <= 6; j++) P.seg(.9 * r * Math.cos(j), .9 * r * Math.sin(j), 1.1 * r * Math.cos(j), 1.1 * r * Math.sin(j), C.text, 1.5);
      const f = p - Math.floor(p + 1e-9), ex = r * Math.cos(p), ey = r * Math.sin(p);
      if (f > 1e-3 && f < 1 - 1e-3) P.seg(ex, ey, ex - (1 - f) * r * Math.sin(p), ey + (1 - f) * r * Math.cos(p), C.pink, 6);
      P.seg(0, 0, r, 0, C.violet, 2); P.seg(0, 0, ex, ey, C.violet, 2);
      if (W.s >= 7) { const a = P.angleArc(0, 0, r * sc, 6, TAU, C.green, { w: 6, arrow: false, spiral: 0, dash: [5, 4] }); labs.push({ text: "≈ 0.28", x: 1.2 * r * Math.cos(6.14), y: 1.2 * r * Math.sin(6.14), color: C.green, font: `bold 14px ${F.math}` }); }
      const am = p > .05 ? P.angleArc(0, 0, Math.min(36, r * sc * .3), 0, p, C.amber, { w: 2.5 }) : null;
      if (am) labs.push({ text: `${numT(p, 2)} rad`, x: am.x, y: am.y, color: C.amber, font: `bold 13px ${F.math}` });
      labs.push({ text: "r", x: r / 2, y: 0, color: C.violet, font: `italic bold 15px ${F.math}` });
      P.labels(labs);
      const n = Math.min(W.s, 6), done = W.s >= 7;
      k.readout({ title: "Wrap radii around the circle", big: `<span class="m"><span class="c3">${n}</span> radii = <span class="c1">${n} rad</span> ≈ ${numT(n * 180 / PI, 2)}°</span>`,
        rows: [{ lhs: "r", v: numT(W.r), cls: "c4" }, { lhs: "arc laid  s = " + n + "r", v: numT(n * W.r), cls: "c3" }, { lhs: "circumference 2πr", v: "≈ " + numT(TAU * W.r, 2) }],
        landmark: { hit: done, big: done ? "2π ≈ 6.28 radii" : "How many radii fit?", note: done ? "Six radii and a gap of about 0.28 of a radius: a full turn is 2π rad = 360°, so π rad = 180°." : "Step until the circle is full." },
        narr: "Change r and step again: the count does not depend on the size of the circle." });
    } else if (mode === "convert") {
      const pad = k.split(c, dom, { frac: .44, hfrac: .42 }); P = k.plane(c, { xmin: -1.55, xmax: 1.55, ymin: -1.55, ymax: 1.55, equal: true, pad, xstep: .5 });
      const o = cv(), t = MR.Q.val(o.q) * PI, sc = P.X(1) - P.X(0), lines = cvLines(), done = CV.s >= 3; SP.set(lines, CV.s - 1);
      P.grid(); P.axes(false); d.circle(P.X(0), P.Y(0), sc, null, k.alpha(C.violet, .55), 1.5);
      P.angleArc(0, 0, 1.3 * sc, 0, PI, C.faint, { dash: [5, 5], arrow: false, spiral: 0, w: 1.5 });
      P.angleArc(0, 0, sc, 0, t, C.pink, { w: 4, arrow: false, spiral: 0 });
      const a = P.angleArc(0, 0, Math.min(34, sc * .3), 0, t, C.amber, { w: 2.5 });
      P.seg(0, 0, 1, 0, C.violet, 2); P.seg(0, 0, Math.cos(t), Math.sin(t), C.violet, 2);
      const given = o.toRad ? MR.degT(o.deg) : MR.piT(o.q);
      P.labels([{ text: done ? `${MR.degT(o.deg)} = ${MR.piT(o.q)}` : given, x: a.x, y: a.y, color: C.amber, font: `bold 14px ${F.math}` },
        { text: "π rad = 180°", x: 0, y: 1.3, color: C.muted, font: `13px ${F.math}` }]);
      k.readout({ title: o.toRad ? "Degrees → radians" : "Radians → degrees", big: `<span class="m">π rad = 180°</span>`,
        rows: [{ lhs: "× π/180°", v: "", lbl: "degrees → radians" }, { lhs: "× 180°/π", v: "", lbl: "radians → degrees" }],
        landmark: { hit: done, big: done ? `${MR.degT(o.deg)} = ${MR.piT(o.q)}` : "Step to convert", note: done ? `${numT(Math.abs(MR.Q.val(o.q)), 4)} of a half turn.` : "Compare the angle with the dashed half turn." },
        narr: "New gives another angle; the problems alternate directions." });
    } else {
      const pad = k.split(c, dom, { off: true }); P = k.plane(c, { xmin: -5.6, xmax: 5.6, ymin: -5.6, ymax: 5.6, equal: true, pad, xstep: 1 });
      const r = AS.r, t = asT(), sc = P.X(1) - P.X(0), ex = r * Math.cos(t), ey = r * Math.sin(t);
      P.grid(); P.axes(); d.circle(P.X(0), P.Y(0), r * sc, null, k.alpha(C.violet, .35), 1.2);
      P.angleArc(0, 0, r * sc, 0, t, C.pink, { w: 5, arrow: false, spiral: 0, fill: k.alpha(C.green, .2) });
      const a = P.angleArc(0, 0, Math.min(30, r * sc * .3), 0, t, C.amber, { w: 2.5 });
      P.seg(0, 0, r, 0, C.violet, 2.5); P.seg(0, 0, ex, ey, C.violet, 2.5); P.dot(ex, ey, C.text, 6);
      const rQ = Q(Math.round(r * 2), 2), sv = r * t, Av = r * r * t / 2;
      const thT = AS.one ? "1" : MR.piT(Q(AS.n, 12)), sT = AS.one ? MR.qT(rQ) : MR.piT(Q.mul(rQ, Q(AS.n, 12))), AT = AS.one ? MR.qT(Q.mul(Q(1, 2), Q.mul(rQ, rQ))) : MR.piT(Q.mul(Q(1, 2), Q.mul(Q.mul(rQ, rQ), Q(AS.n, 12))));
      P.labels([{ text: "θ", x: a.x, y: a.y, color: C.amber, font: `italic bold 15px ${F.math}` },
        { text: `s ≈ ${numT(sv, 2)}`, x: 1.12 * r * Math.cos(t / 2), y: 1.12 * r * Math.sin(t / 2), color: C.pink, font: `bold 14px ${F.math}` },
        { text: `A ≈ ${numT(Av, 2)}`, x: .58 * r * Math.cos(t / 2), y: .58 * r * Math.sin(t / 2), color: C.green, font: `bold 14px ${F.math}` },
        { text: `r = ${numT(r)}`, x: ex / 2, y: ey / 2, color: C.violet, font: `bold 14px ${F.math}` }]);
      k.readout({ title: "Arc length and sector area", big: `<span class="m"><span class="c1"><i>θ</i> = ${thT}</span> rad ≈ ${numT(t / D2R, 2)}°</span>`,
        rows: [{ lhs: `<span class="c3"><i>s</i></span> = <i>rθ</i>`, v: `${sT} ≈ ${numT(sv, 2)}`, cls: "c3" }, { lhs: `<span class="c5"><i>A</i></span> = ½<i>r</i><sup>2</sup><i>θ</i>`, v: `${AT} ≈ ${numT(Av, 2)}`, cls: "c5" }],
        landmark: { hit: AS.one, big: AS.one ? `<span class="m"><i>θ</i> = 1 rad: <i>s</i> = <i>r</i> = ${numT(r)}</span>` : "Find 1 radian", note: AS.one ? "The arc is exactly one radius long, about 57.3°." : "Drag to about 57° (or press 1 radian): the arc equals the radius." },
        narr: "Double r: s doubles but A grows four times." });
    }
  });
};

/* ======================= trig-unit-circle ======================= */
L["trig-unit-circle"] = k => {
  MathKit.attach(k);
  const { C, F } = k, MR = k.MR, Q = MR.Q, c = k.canvas(), dom = k.dom(); dom.style.display = "none";
  const SP = k.stepsPanel(dom);
  const S12 = PI / 12; let mode = "explore", snapOn = true, P = null;
  const QZ = { list: [Q(5, 4), Q(2, 3), Q(11, 6), Q(3, 2), Q(7, 6), Q(1, 4), Q(5, 3), Q(1), Q(3, 4), Q(4, 3), Q(1, 6), Q(7, 4)], i: 0, checked: false, right: false, score: 0, tries: 0 };
  const BD = { s: 0 };
  const UC = k.unitCircle(c, { snap: 0, t: PI / 6, onMove: t => { if (snapOn || mode !== "explore") UC.set(Math.round(t / S12) * S12); if (mode === "quiz") QZ.checked = false; } });
  const qOf = t => { const n = Math.round(t / S12); return Math.abs(t - n * S12) < 1e-9 ? Q(n, 12) : null; };
  const GROUPS = [[Q(1, 6)], [Q(1, 4)], [Q(1, 3)], [Q(5, 6), Q(3, 4), Q(2, 3)], [Q(7, 6), Q(5, 4), Q(4, 3)], [Q(11, 6), Q(7, 4), Q(5, 3)], [Q(0), Q(1, 2), Q(1), Q(3, 2)]];
  const WHY = ["30-60-90 triangle with hypotenuse 1: the leg opposite 30° is 1/2, the other leg √3/2.", "45-45-90 triangle with hypotenuse 1: both legs are 1/√2 = √2/2.", "The same 30-60-90 triangle with its legs swapped: x = 1/2, y = √3/2.",
    "Reflect across the y-axis: P(π − t) = (−x, y).", "Reflect through the origin: P(π + t) = (−x, −y).", "Reflect across the x-axis: P(2π − t) = (x, −y).", "On the axes one coordinate is 0 and the other is ±1."];
  const TAGS = ["π/6", "π/4", "π/3", "QII", "QIII", "QIV", "axes"];
  const bdLines = () => GROUPS.map((g, i) => ({ tag: TAGS[i], eq: g.map(q => `P(${MR.piT(q)}) = ${ucPoint(MR, q).text}`).join("<br>"), why: WHY[i] }));
  const quiz = () => { const q = QZ.list[QZ.i % QZ.list.length]; return { q, a2p: QZ.i % 2 === 0, pt: ucPoint(MR, q) }; };

  k.group("explore", () => { k.check("Snap to π/12", true, v => { snapOn = v; }); });
  const stB = k.group("build", () => k.stepper(() => 7, v => { BD.s = v; if (v) k.hint(""); }, { ms: 1200 }));
  k.group("quiz", () => {
    k.button("Check", () => { const z = quiz(), q = qOf(UC.t); QZ.right = !!q && Q.eq(MR.normQ(q), z.q); if (!QZ.checked) { QZ.tries++; if (QZ.right) QZ.score++; } QZ.checked = true; });
    k.button("New", () => { QZ.i++; QZ.checked = false; UC.set(0); build(); }, "btn ghost");
  });
  function build(){
    k.showGroup(mode);
    if (mode === "explore") { k.guard([]); k.hint("Drag the point around the circle. Its x-coordinate is cos t and its y-coordinate is sin t."); }
    if (mode === "build") { k.guard([ucPoint(MR, Q(1, 6)).text]); k.hint("Step: three first-quadrant points from the special triangles, then reflect them into the other quadrants."); }
    if (mode === "quiz") { const z = quiz(); k.guard([z.a2p ? z.pt.text : MR.piT(z.q)]); k.hint("Drag P to the place asked for, then press Check."); }
  }
  k.modes([["explore", "Explore"], ["build", "Build"], ["quiz", "Quiz"]], mode, m => { mode = m; stB.pause(); if (m === "quiz") { QZ.checked = false; UC.set(0); } build(); });
  build();

  const circle = () => { const d = c.d; P.grid(); P.axes(); d.circle(P.X(0), P.Y(0), P.X(1) - P.X(0), null, k.alpha(C.violet, .7), 1.5); };
  k.loop(() => {
    c.begin();
    if (mode === "explore") {
      P = UC.plane(k.split(c, dom, { off: true })); const { x, y } = UC.draw({}), t = UC.t, q = snapOn ? qOf(t) : null, tn = ((t % TAU) + TAU) % TAU;
      const cx = q ? MR.trigExact("cos", q) : null, sy = q ? MR.trigExact("sin", q) : null, tn2 = q ? MR.trigExact("tan", q) : null;
      const ptT = q ? `(${cx.text}, ${sy.text})` : `(${numT(x, 3)}, ${numT(y, 3)})`;
      P.labels([{ text: "cos t", x: x / 2, y: 0, color: C.cyan, font: `bold 13px ${F.math}` }, { text: "sin t", x, y: y / 2, color: C.pink, font: `bold 13px ${F.math}` },
        { text: "t", x: .36 * Math.cos(tn / 2), y: .36 * Math.sin(tn / 2), color: C.amber, font: `italic bold 15px ${F.math}` }, { text: ptT, x, y, color: C.text, font: `bold 14px ${F.math}` }]);
      const n = q ? q.n * 12 / q.d : 0, special = !!q && (n % 2 === 0 || n % 3 === 0), qq = q ? MR.quadrant(q) : 0;
      const tT = q ? `${MR.piT(q)} = ${MR.degT(MR.qDeg(q))}` : `${numT(t, 4)} ≈ ${numT(t / D2R, 2)}°`;
      const where = !q ? "" : qq ? `Quadrant ${ROMAN[qq]}${qq > 1 ? `, mirror of P(${MR.piT(MR.refAngle(q))})` : ""}` : `on the ${AXIS[MR.axisOf(q)]}`;
      k.readout({ title: "The terminal point P(t)", big: `<span class="m"><i>P</i>(<span class="c1"><i>t</i></span>) = (<span class="c2">${q ? cx.text : numT(x, 4)}</span>, <span class="c3">${q ? sy.text : numT(y, 4)}</span>)</span>`,
        rows: [{ lhs: `<span class="c1"><i>t</i></span>`, v: tT, cls: "c1" }, q && !Q.eq(q, MR.normQ(q)) ? { lhs: "same point as", v: MR.piT(MR.normQ(q)) } : null,
          { lhs: "cos <i>t</i> = <i>x</i>", v: q ? cx.text : numT(x, 4), cls: "c2" }, { lhs: "sin <i>t</i> = <i>y</i>", v: q ? sy.text : numT(y, 4), cls: "c3" },
          { lhs: "tan <i>t</i> = <i>y</i>/<i>x</i>", v: q ? tn2.text : Math.abs(x) < 1e-9 ? "undefined" : numT(y / x, 4), cls: "c5" }, { lhs: "sin² <i>t</i> + cos² <i>t</i>", v: "1", cls: "c4" }],
        landmark: { hit: special, big: special ? `P(${MR.piT(q)}) = ${ptT}` : "Special point?", note: special ? where : "Stop at a multiple of π/6 or π/4 for a point with a short exact form." },
        narr: "Go past 2π or below 0: the same points come back." });
    } else if (mode === "build") {
      P = UC.plane(k.split(c, dom, { frac: .5, hfrac: .38 })); circle(); SP.set(bdLines(), BD.s - 1);
      const labs = [], cur = BD.s - 1;
      GROUPS.slice(0, BD.s).forEach((g, gi) => g.forEach(q => { const t = MR.Q.val(q) * PI, x = Math.cos(t), y = Math.sin(t);
        if (gi === cur && gi >= 3 && gi <= 5) { const r0 = MR.refAngle(q), t0 = MR.Q.val(r0) * PI; P.seg(Math.cos(t0), Math.sin(t0), x, y, k.alpha(C.text, .45), 1.2, [4, 4]); }
        P.dot(x, y, gi === cur ? C.green : C.text, gi === cur ? 6.5 : 5); labs.push({ text: MR.piT(q), x: 1.17 * x, y: 1.17 * y, color: gi === cur ? C.green : C.muted, font: `${gi === cur ? "bold " : ""}13px ${F.math}` }); }));
      if (cur >= 0 && cur <= 2) { const t = MR.Q.val(GROUPS[cur][0]) * PI, x = Math.cos(t), y = Math.sin(t), e = ucPoint(MR, GROUPS[cur][0]);
        P.seg(0, 0, x, 0, C.cyan, 3); P.seg(x, 0, x, y, C.pink, 3); P.seg(0, 0, x, y, C.violet, 2.5); P.rightMark([x, 0], [0, 0], [x, y]);
        labs.push({ text: e.x.text, x: x / 2, y: -.08, color: C.cyan, font: `bold 13px ${F.math}` }, { text: e.y.text, x: x + .1, y: y / 2, color: C.pink, font: `bold 13px ${F.math}` }, { text: "1", x: x / 2 - .06, y: y / 2 + .06, color: C.violet, font: `bold 13px ${F.math}` }); }
      P.labels(labs);
      const found = GROUPS.slice(0, BD.s).reduce((s, g) => s + g.length, 0), done = BD.s >= 7;
      k.readout({ title: "Build the unit circle", rows: [{ lhs: "points found", v: `${found} of 16`, cls: "c5" }],
        landmark: { hit: done, big: done ? "16 special points" : "Step to build", note: done ? "Every coordinate is 0, ±1/2, ±√2/2, ±√3/2 or ±1; the quadrant decides the signs." : "Three triangles, three reflections, four axis points." },
        narr: "Then try the Quiz: find points without the table." });
    } else {
      P = UC.plane(k.split(c, dom, { off: true })); const z = quiz();
      UC.draw({ proj: false });
      if (QZ.checked) { const t = MR.Q.val(z.q) * PI; P.dot(Math.cos(t), Math.sin(t), C.green, 7);
        P.labels([{ text: `P(${MR.piT(z.q)}) = ${z.pt.text}`, x: Math.cos(t), y: Math.sin(t), color: C.green, font: `bold 14px ${F.math}` }]); }
      const q = qOf(UC.t), at = q ? MR.piT(MR.normQ(q)) : "";
      const ans = z.a2p ? `P(${MR.piT(z.q)}) = ${z.pt.text}` : `t = ${MR.piT(z.q)} (${MR.degT(MR.qDeg(z.q))})`;
      k.readout({ title: z.a2p ? "Angle → point" : "Point → angle",
        big: z.a2p ? `<span class="m">Drag <i>P</i> to <span class="c1"><i>t</i> = ${MR.piT(z.q)}</span></span>` : `<span class="m">Drag <i>P</i> to (<span class="c2">${z.pt.x.text}</span>, <span class="c3">${z.pt.y.text}</span>)</span>`,
        rows: [{ lhs: "score", v: `${QZ.score} / ${QZ.tries}`, cls: "c5" }],
        landmark: { hit: QZ.checked && QZ.right, big: QZ.checked ? (QZ.right ? "Right" : "Not there yet") : (z.a2p ? "Where is the point?" : "Which t in [0, 2π)?"), note: QZ.checked ? (QZ.right ? ans : `You are at t = ${at}. The green point is ${ans}.`) : "Press Check when P is in place." },
        narr: "New gives the next question; they alternate angle → point and point → angle." });
    }
  });
};
})();
