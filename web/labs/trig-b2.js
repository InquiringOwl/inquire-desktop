/* ============ Labs: Trigonometry, batch B2 (the six trigonometric ratios) ============ */
(function(){
const L = window.LABS;
const MI = "−";

/* ---------- DOM-free helpers: sideT, ratioExact and sixRatios are MathRules (web/kits/subjects/trig.js) ---------- */
const sixRatios = (o, a) => window.MathRules.sixRatios(o, a);
const RATIO = window.MathRules.RATIO_SIDES;   // fn → [numerator side, denominator side]

const CSS = `.tb2{font-size:15px;line-height:1.35}
.tb2 .hd{color:var(--muted);font-size:13px;margin:2px 0 8px}
.tb2 .pr{border-left:3px solid;padding:1px 0 1px 9px;margin:0 0 9px}
.tb2 .rw{display:flex;flex-wrap:wrap;align-items:center;column-gap:7px;min-height:30px}
.tb2 .nm{min-width:3.7em}
.tb2 .nm.rc{text-decoration:underline dashed;text-underline-offset:4px;text-decoration-thickness:1.5px}
.tb2 .ap{color:var(--muted);font-size:13px}
.tb2 .bar{display:inline-block;height:9px;border-radius:2px;margin-left:auto;box-sizing:border-box}
.tb2 .dim{opacity:.45}
.tb2 .fr{font-size:.92em}
.tb2 .sd{margin:2px 0 8px;min-height:22px}
.tb2 .g6{display:grid;grid-template-columns:1fr 1fr;gap:6px 10px}
.tb2 .cl{border-left:3px solid;padding:3px 0 3px 8px;min-height:24px;white-space:nowrap}
.tb2 .cl.rc{border-left-style:dashed}
.tb2 .cl.todo{color:var(--faint)}
.tb2 .cl.cur{background:rgba(255,255,255,.05)}
.tb2 .why{color:var(--muted);font-size:13px;margin-top:9px;min-height:36px}
.narrow .tb2 .pr{display:flex;flex-wrap:wrap;column-gap:16px;margin-bottom:4px}
.narrow .tb2 .rw{min-height:26px}
.narrow .tb2 .bar,.narrow .tb2 .ap,.narrow .tb2 .raw{display:none}
.narrow .tb2 .nm{min-width:0}
.tb2 .g6{font-size:17px} .narrow .tb2 .g6{font-size:15px}
.narrow .tb2 .hd{margin-bottom:4px}
.narrow .tb2 .why{min-height:0;margin-top:6px}`;

/* ================= The six ratios & special angles (F · Triangle) ================= */
L["trig-six-ratios"] = k => {
  MathKit.attach(k);
  if (!document.getElementById("trig-b2-css")) { const s = document.createElement("style"); s.id = "trig-b2-css"; s.textContent = CSS; document.head.appendChild(s); }
  const { C, F } = k, MR = k.MR, c = k.canvas(), host = k.dom();
  const tab = document.createElement("div"); tab.className = "tb2"; host.appendChild(tab);
  const FC = { sin: C.pink, csc: C.pink, cos: C.cyan, sec: C.cyan, tan: C.green, cot: C.green };
  const CLS = { sin: "c3", csc: "c3", cos: "c2", sec: "c2", tan: "c5", cot: "c5" };
  const PAIRS = [["sin", "csc"], ["cos", "sec"], ["tan", "cot"]];
  const COF = { sin: "cos", cos: "sin", tan: "cot", cot: "tan", sec: "csc", csc: "sec" };
  const FLIP = { csc: "sin", sec: "cos", cot: "tan" }, TH = "<i>θ</i>";
  let mode = "ratios", P = null, ang = 30, cur = 0, view = "A", st = null, lastTab = "";
  const B = { x: 8, y: 6, snap: 1, clamp: [1, 9, 1, 7] };
  k.drag(c, () => mode === "special" ? null : P, [B]);

  // Special triangles: sides from MR.solveTriangle (A = θ, C = 90°), exact texts from the 1 : √3 : 2 and 1 : 1 : √2 patterns.
  const SPEC = { 30: { o: "1", a: "√3", h: "2", ghost: "equilateral triangle with side 2", rad: "π/6" },
                 45: { o: "1", a: "1", h: "√2", ghost: "square with side 1", rad: "π/4" },
                 60: { o: "√3", a: "1", h: "2", ghost: "equilateral triangle with side 2", rad: "π/3" } };
  const specLines = () => {
    const S = SPEC[ang], sd = { opp: S.o, adj: S.a, hyp: S.h }, lines = [
      { tag: "sides", eq: `<span class="c3">opp</span> : <span class="c2">adj</span> : <span class="c4">hyp</span> = ${S.o} : ${S.a} : ${S.h}`, why: `Half of a ${S.ghost} (dashed).` }];
    for (const fn of ["sin", "cos", "tan", "csc", "sec", "cot"]) {
      const [n, d] = RATIO[fn], val = MR.trigExact(fn, ang, { deg: true }).text, raw = `${sd[n]}/${sd[d]}`;
      const why = `${n}/${d} = ${raw}` + (raw !== val ? ` = ${val}` : "") + (/√/.test(sd[d]) && d !== n ? " (rationalized)" : "") + (FLIP[fn] ? `, the flip of ${FLIP[fn]}` : "");
      lines.push({ tag: fn, eq: `<span class="${CLS[fn]}">${fn} ${ang}°</span> = ${val}`, why });
    }
    return lines;
  };
  const guardSpecial = () => k.guard(["sin", "cos", "tan", "csc", "sec", "cot"].map(fn => `${fn} ${ang}° = ${MR.trigExact(fn, ang, { deg: true }).text}`));

  const hints = { ratios: "Drag B. Watch each ratio and its reciprocal move in opposite directions.", special: "Pick an angle, then Step to fill the table of exact values.", cof: "Drag B, then switch which acute angle you stand at." };
  const setMode = m => { mode = m; k.showGroup(m); k.hint(hints[m]); cur = 0; if (st) st.reset(); if (m === "special") guardSpecial(); else k.guard([]); lastTab = ""; };
  k.modes([["ratios", "Ratios"], ["special", "Special"], ["cof", "Cofunction"]], mode, setMode);
  k.group("special", () => {
    k.select("Angle", [[30, "θ = 30°"], [45, "θ = 45°"], [60, "θ = 60°"]], ang, v => { ang = +v; cur = 0; if (st) st.reset(); guardSpecial(); });
    st = k.stepper(() => 7, v => cur = v, { ms: 1100 });
  });
  let viewBtn = null;
  k.group("cof", () => { viewBtn = k.button("Stand at B (90° − θ)", () => { view = view === "A" ? "B" : "A"; viewBtn.textContent = view === "A" ? "Stand at B (90° − θ)" : "Stand at A (θ)"; }, "btn ghost"); });
  setMode(mode);

  const fx = v => MR.fmtN(v, 3), degT = v => Math.abs(v - Math.round(v)) < 1e-9 ? `${Math.round(v)}°` : `≈ ${v.toFixed(2)}°`;
  const frH = (n, d) => d === "1" ? n : `<span class="fr"><span>${n}</span><span>${d}</span></span>`;
  const exH = t => { const m = /^(.*)\/(\d+)$/.exec(t); return m ? frH(m[1], m[2]) : t; };
  const bar = (fn, v, dashed) => { const w = Math.round(Math.min(v, 4) / 4 * 64) + 4; return `<span class="bar" style="width:${w}px;${dashed ? `border:1.5px dashed ${FC[fn]}` : `background:${k.alpha(FC[fn], .85)}`}"></span>`; };

  k.loop(() => {
    c.begin(); const d = c.d, labels = [];
    const pad = k.split(c, host, { side: "left", frac: 0.44, hfrac: mode === "ratios" ? 0.42 : 0.5 });
    if (mode === "special") {
      const S = SPEC[ang], t = MR.solveTriangle({ A: ang, C: 90, c: ang === 45 ? Math.SQRT2 : 2 }).tris[0], o = t.a, a = t.b;
      const A = [0, 0], Cv = [a, 0], Bv = [a, o];
      const ghost = ang === 45 ? [[0, o], A, Cv, Bv] : ang === 30 ? [[a, -o], A, Bv] : [[2 * a, 0], Bv, A];
      P = k.plane(c, Object.assign(k.fit(ghost.concat([A, Bv, Cv]), 0.2), { equal: true, pad }));
      if (cur >= 1) { const g0 = ghost[0]; if (ang === 45) { P.seg(A[0], A[1], g0[0], g0[1], C.faint, 1.6, [6, 5]); P.seg(g0[0], g0[1], Bv[0], Bv[1], C.faint, 1.6, [6, 5]); }
        else if (ang === 30) { P.seg(A[0], A[1], g0[0], g0[1], C.faint, 1.6, [6, 5]); P.seg(Cv[0], Cv[1], g0[0], g0[1], C.faint, 1.6, [6, 5]); }
        else { P.seg(Cv[0], Cv[1], g0[0], g0[1], C.faint, 1.6, [6, 5]); P.seg(g0[0], g0[1], Bv[0], Bv[1], C.faint, 1.6, [6, 5]); } }
      P.tri(A, Bv, Cv, { colors: [C.violet, C.pink, C.cyan], fill: k.alpha(C.amber, .05), w: 3 });
      const an = P.vertexArc(A, Cv, Bv, 34, C.amber); P.rightMark(Cv, A, Bv, C.muted, 12);
      const f = `600 16px ${F.math}`;
      labels.push({ text: `${ang}°`, x: an.x, y: an.y, color: C.amber, font: f },
        { text: S.a, x: a / 2, y: 0, color: C.cyan, font: f, prefer: "s" },
        { text: S.o, x: a, y: o / 2, color: C.pink, font: f, prefer: "e" },
        { text: S.h, x: a / 2, y: o / 2, color: C.violet, font: f, prefer: "nw" },
        { text: `${90 - ang}°`, x: Bv[0], y: Bv[1], color: C.muted, font: `14px ${F.math}`, prefer: "n" });
      P.labels(labels);
      const SL = specLines(), ORD = ["sin", "csc", "cos", "sec", "tan", "cot"], at = fn => SL.findIndex(l => l.tag === fn);
      const sh = `<div class="hd">${TH} = ${ang}° (${S.rad} rad) · step ${cur} of 7</div>` +
        `<div class="sd m">${cur >= 1 ? SL[0].eq : `<span class="c3">opp</span> : <span class="c2">adj</span> : <span class="c4">hyp</span> = ?`}</div>` +
        `<div class="g6">${ORD.map(fn => { const i = at(fn), on = cur >= i + 1; return `<div class="cl m${FLIP[fn] ? " rc" : ""}${on ? "" : " todo"}${cur === i + 1 ? " cur" : ""}" style="border-left-color:${FC[fn]}">${on ? SL[i].eq : `<span class="${CLS[fn]}">${fn} ${ang}°</span> = · · ·`}</div>`; }).join("")}</div>` +
        `<div class="why">${cur === 0 ? "Step to read the sides, then each ratio in turn." : SL[cur - 1].why}</div>`;
      if (sh !== lastTab) { tab.innerHTML = sh; lastTab = sh; }
      k.readout({ title: `Exact values at ${ang}°`, big: `${TH} = ${ang}° = ${S.rad}`,
        rows: [{ lhs: `<span class="c3">opp</span> : <span class="c2">adj</span> : <span class="c4">hyp</span> = ${S.o} : ${S.a} : ${S.h}`, lbl: ang === 45 ? "legs equal; hypotenuse √2 times a leg" : "short leg opposite 30°; hypotenuse twice the short leg" }],
        landmark: { hit: cur >= 7, big: cur >= 7 ? "all six exact" : `${7 - cur} to go`, note: cur >= 7 ? (ang === 45 ? "At 45° each ratio equals its cofunction, since 45° is its own complement." : `The ${90 - ang}° row is this row with sin ↔ cos, tan ↔ cot, sec ↔ csc swapped.`) : "Predict each value before you step: which two sides, which order?" },
        narr: "Then try the other angles. Compare 30° with 60° row by row." });
      return;
    }
    // Ratios and Cofunction: draggable vertex B, right angle at C, θ at A.
    P = k.plane(c, { xmin: -0.6, xmax: 9.6, ymin: -0.7, ymax: 7.5, equal: true, pad });
    P.grid();
    const o = B.y, a = B.x, A = [0, 0], Cv = [a, 0], Bv = [a, o], R = sixRatios(o, a), th = Math.atan2(o, a) * 180 / Math.PI;
    const atB = mode === "cof" && view === "B";
    // colours by role from the angle you stand at: leg BC is opposite A but adjacent to B
    const cBC = atB ? C.cyan : C.pink, cCA = atB ? C.pink : C.cyan;
    P.tri(A, Bv, Cv, { colors: [C.violet, cBC, cCA], fill: k.alpha(C.amber, .05), w: 3 });
    P.rightMark(Cv, A, Bv, C.muted, 12);
    const f = `600 15px ${F.math}`, fs = `14px ${F.math}`;
    const aA = P.vertexArc(A, Cv, Bv, 34, mode === "cof" && atB ? C.faint : C.amber);
    if (mode === "cof") { const aB = P.vertexArc(Bv, A, Cv, 30, atB ? C.amber : C.faint);
      labels.push({ text: `90° − θ ${degT(90 - th)}`, x: aB.x, y: aB.y, color: atB ? C.amber : C.muted, font: atB ? f : fs }); }
    labels.push({ text: `θ ${degT(th)}`, x: aA.x, y: aA.y, color: atB ? C.muted : C.amber, font: atB ? fs : f });
    const roleCA = atB ? "opp" : "adj", roleBC = atB ? "adj" : "opp";
    labels.push({ text: `${roleCA} ${a}`, x: a / 2, y: 0, color: cCA, font: f, prefer: "s" },
      { text: `${roleBC} ${o}`, x: a, y: o / 2, color: cBC, font: f, prefer: "e" },
      { text: `hyp ${R.hypT}`, x: a / 2, y: o / 2, color: C.violet, font: f, prefer: "nw" },
      { text: "A", x: 0, y: 0, color: C.muted, font: `13px ${F.sans}`, prefer: "sw" },
      { text: "C", x: a, y: 0, color: C.muted, font: `13px ${F.sans}`, prefer: "se" },
      { text: "B", x: a, y: o, color: C.text, font: `bold 13px ${F.sans}`, prefer: "ne" });
    d.circle(P.X(a), P.Y(o), 9, k.alpha(C.text, .18)); P.dot(a, o, C.text, 5);
    P.labels(labels);

    let html;
    const val = fn => { const r = R[fn], raw = `${r.rawN}/${r.rawD}`; const same = raw === r.exact || (r.rawD === "1" && r.exact === r.rawN); return (same ? frH(r.rawN, r.rawD) : `<span class="raw">${frH(r.rawN, r.rawD)} = </span>${exH(r.exact)}`) + ` <span class="ap">≈ ${fx(r.v)}</span>`; };
    if (mode === "ratios") {
      html = `<div class="hd">${TH} ${degT(th)} · solid: sin, cos, tan · dashed: their reciprocals</div>` + PAIRS.map(([p, q]) => `<div class="pr" style="border-color:${FC[p]}">` +
        `<div class="rw"><span class="m nm ${CLS[p]}">${p} ${TH}</span><span class="m">= ${val(p)}</span>${bar(p, R[p].v, false)}</div>` +
        `<div class="rw"><span class="m nm rc ${CLS[q]}">${q} ${TH}</span><span class="m">= ${val(q)}</span>${bar(q, R[q].v, true)}</div></div>`).join("");
    } else {
      const side = fn => atB ? "dim" : "", other = atB ? "" : "dim";
      html = `<div class="hd">${TH} ${degT(th)} · 90° − ${TH} ${degT(90 - th)} · standing at ${atB ? "B" : "A"}</div>` + PAIRS.map(([p, q]) => `<div class="pr" style="border-color:${FC[p]}">` +
        [p, q].map(fn => `<div class="rw"><span class="m ${side(fn)}"><span class="${CLS[fn]}">${fn} ${TH}</span></span><span class="m">= ${val(fn)} =</span><span class="m ${other}"><span class="${CLS[COF[fn]]}">${COF[fn]}(90° − ${TH})</span></span></div>`).join("") + `</div>`).join("");
    }
    if (html !== lastTab) { tab.innerHTML = html; lastTab = html; }

    const eq45 = a === o;
    if (mode === "ratios") k.readout({ title: "Six ratios of θ", big: `<span class="c2">adj</span> ${a}, <span class="c3">opp</span> ${o}, <span class="c4">hyp</span> ${R.hypT}`,
      rows: [{ lhs: `sin ${TH} · csc ${TH} = cos ${TH} · sec ${TH} = tan ${TH} · cot ${TH} = 1`, lbl: "each reciprocal pair multiplies to 1" },
        { lhs: `csc ${TH} &gt; 1, sec ${TH} &gt; 1`, lbl: "the hypotenuse is the longest side" }],
      landmark: { hit: eq45, big: eq45 ? `${TH} = 45°` : `tan ${TH} ≈ ${fx(R.tan.v)}`, note: eq45 ? "Equal legs: tan θ = cot θ = 1 and sec θ = csc θ, whatever the size." : "Make the legs equal and see which pairs meet." },
      narr: "Make B tall and thin: sin θ nears 1, csc θ nears 1, cot θ nears 0." });
    else k.readout({ title: "Cofunctions", big: `${TH} + (90° − ${TH}) = 90°`,
      rows: [{ lhs: atB ? `from B the leg ${o} is <span class="c2">adjacent</span>` : `from A the leg ${o} is <span class="c3">opposite</span>`, lbl: "the same leg changes role with the angle" },
        { lhs: `sin ${TH} = cos(90° − ${TH}) = ${R.sin.exact}` }],
      landmark: { hit: eq45, big: eq45 ? `${TH} = 90° − ${TH} = 45°` : `${TH} ${degT(th)}`, note: eq45 ? "45° is its own complement, so each ratio equals its cofunction." : "Each ratio of θ is the cofunction of 90° − θ." },
      narr: "Switch the angle you stand at: opposite and adjacent trade places, the hypotenuse stays." });
  });
};
})();
