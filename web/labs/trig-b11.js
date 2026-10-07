/* ============ Labs: Trigonometry, batch B11 (graphs of polar equations) ============ */
(function(){
const L = window.LABS;
const MI = "−", PI = Math.PI, TAU = 2 * PI;
const I = s => `<i>${s}</i>`;

/* ---------- The polar families: MathRules.polarFamily / POLAR_FAMILIES (web/kits/subjects/trig.js) ---------- */
const FAM = window.MathRules.POLAR_FAMILIES;
const polarFamily = (id, a, b, n, fmt) => window.MathRules.polarFamily(id, a, b, n, fmt);

/* ---------- trig-polar-graphs ---------- */
L["trig-polar-graphs"] = k => {
  MathKit.attach(k);
  const { C, F } = k, MR = k.MR, Q = MR.Q, c = k.canvas(), fmt = (v, d) => MR.fmtN(v, d);
  const thT = t => { const q = MR.piQ(t, 48); return q ? MR.piT(q) : fmt(t, 2); }, list = a => (a.length > 4 ? a.slice(0, 3).map(thT).concat("…") : a.map(thT)).join(", ");
  const PF = (id, a, b, n) => polarFamily(id, a, b, n, fmt);
  const TR = [["lc+", 2, 4], ["rc", 4, 1, 2], ["rs", 4, 1, 3], ["os", 4], ["lc+", 2, 2], ["sp", 0.5]].map(p => PF(...p));
  const TG = [["lc+", 1, 3], ["rs", 3, 1, 3], ["ls-", 2, 2], ["rc", 3, 1, 2], ["mc", 3], ["os", 3], ["lc+", 3, 2]];
  let mode = "trace", ti = 0, th = 0, play = true, hold = 0, fi = 2, A = 2, B = 4, N = 3, gi = 0, tm = 0, thS, playB, famS, aS, bS, nS, newB;
  const cur = () => PF(FAM[fi][0], A, B, N), tgt = () => PF(...TG[gi]);
  const lb = (text, x, y, color, prefer) => ({ text, x, y, color, prefer, font: `600 14px ${F.math}` });

  // two planes on one canvas: polar left (top on phones), rectangular r(θ) right (below)
  const lay = () => { const mb = k.stage.querySelector(".modes"), top = mb ? mb.offsetTop + mb.offsetHeight + 6 : 10, W = c.w, H = c.h;
    if (W >= 600) { const h = Math.round(W * 0.5), rh = Math.min(H - top - 50, (h - 30) * 0.75), mid = top + (H - top) / 2;
      return [{ l: 14, r: W - h, t: top, b: 10 }, { l: h + 46, r: 18, t: mid - rh / 2, b: H - mid - rh / 2 }]; }
    const ph = Math.round((H - top - 40) * 0.6); return [{ l: 14, r: 14, t: top, b: H - top - ph }, { l: 44, r: 16, t: top + ph + 16, b: 58 }]; };
  const ext = Ss => { let lo = 0, hi = 0, t1 = 0; Ss.forEach(S => { t1 = Math.max(t1, S.t1); (S.rb || S.br).forEach(f => { for (let i = 0; i <= 360; i++) { const r = f(S.t1 * i / 360); if (isFinite(r)) { lo = Math.min(lo, r); hi = Math.max(hi, r); } } }); });
    return { lo, hi, t1, R: Math.max(1, Math.ceil(Math.max(hi, -lo) * 2 - 1e-9) / 2) }; };
  const planes = E => { const [pa, pb] = lay(), P = k.polarPlane(c, { rmax: E.R, tstep: PI / 6, pad: pa }); P.polarGrid();
    const xs = E.t1 <= PI + 1e-9 ? PI / 4 : E.t1 <= TAU + 1e-9 ? PI / 2 : PI, m = 0.12 * E.R;
    const G = k.plane(c, { xmin: 0, xmax: E.t1, ymin: Math.min(-m, E.lo - m), ymax: Math.max(m, E.hi + m), xstep: xs, pad: pb }); G.grid(); G.piAxes({ xstep: xs }); return [P, G]; };
  const edge = (f, a, b) => { for (let j = 0; j < 30; j++) { const m = (a + b) / 2; if (isFinite(f(m))) a = m; else b = m; } return a; };
  const rcurve = (G, f, t1, col, o) => G.clip(() => { const g = c.g, n = 480; g.save(); g.lineWidth = o.w || 2.5; g.lineJoin = "round"; if (o.dash) g.setLineDash(o.dash);
    let pen = false, pn = null, tp = null; const to = (t, r) => [G.X(t), G.Y(r)];
    for (let i = 0; i <= n; i++) { const t = t1 * i / n, r = f(t);
      if (!isFinite(r)) { if (pen) { const e = edge(f, tp, t); g.lineTo(...to(e, f(e))); g.stroke(); } pen = false; tp = t; continue; }
      const ng = !!o.neg && r < 0, [x, y] = to(t, r);
      if (!pen) { g.strokeStyle = ng ? o.neg : col; g.beginPath(); if (tp !== null) { const e = edge(f, t, tp); g.moveTo(...to(e, f(e))); g.lineTo(x, y); } else g.moveTo(x, y); pen = true; pn = ng; }
      else if (ng !== pn) { g.lineTo(x, y); g.stroke(); g.strokeStyle = ng ? o.neg : col; g.beginPath(); g.moveTo(x, y); pn = ng; } else g.lineTo(x, y);
      if (i % 6 === 0) G.pts.push([x, y]); tp = t; }
    if (pen) g.stroke(); g.restore(); });
  const curve = (P, G, S, t1, col, o = {}) => { const e = Math.max(1e-3, t1); S.br.forEach(f => P.polarCurve(f, 0, e, col, o)); (S.rb || S.br).forEach(f => rcurve(G, f, e, col, o)); };
  const mark = (P, G, S, t, lp) => { const r = S.br[0](t), [x, y] = P.pp(r, t), ng = r < -1e-9, col = ng ? C.pink : C.violet;
    P.ray(t, C.amber, 1.4); const an = P.angleArc(0, 0, 22, 0, t, C.amber, { arrow: false }); if (t > 0.4) lp.push(lb("θ", an.x, an.y, C.amber));
    if (Math.abs(r) > 1e-6) { P.seg(0, 0, x, y, col, 3); if (Math.abs(r) > 0.3 * P.xmax) lp.push(lb("r", x / 2, y / 2, col, "n")); }
    P.dot(x, y, ng ? C.pink : C.green, 6.5); G.seg(t, 0, t, r, col, 3); G.dot(t, 0, C.amber, 4.5); G.dot(t, r, ng ? C.pink : C.green, 6.5); return r; };
  const names = (G, E, lg) => { lg.push(lb("r", 0, G.ymax, C.violet, "e"), lb("θ", E.t1, 0, C.amber, "n")); };
  const info = S => [{ lhs: `max |${I("r")}|`, v: S.top ? `${fmt(S.top.r)} at ${I("θ")} = ${list(S.top.at)}` : "none: r keeps growing", cls: "c4" }, { lhs: `${I("r")} = 0 at`, v: `${I("θ")} = ${list(S.zeros)}`, cls: "c1" }];

  const hints = { trace: "θ sweeps from 0. Both graphs trace together; pink marks r < 0, drawn on the ray opposite θ.", fam: "Pick a family and move the sliders. The readout names the curve.", match: "Choose a family and numbers so your green curve covers the dashed one." };
  const vis = () => { const id = FAM[fi][0]; bS.el.parentElement.style.display = mode !== "trace" && id[0] === "l" ? "" : "none"; nS.el.parentElement.style.display = mode !== "trace" && id[0] === "r" ? "" : "none"; newB.style.display = mode === "match" ? "" : "none"; };
  const setMode = m => { mode = m; k.showGroup(m === "trace" ? "trace" : "fam"); k.hint(hints[m]); tm = 0;
    if (m === "match") { fi = 0; A = 2; famS.set(0); aS.set(2); } vis(); k.guard(m === "match" ? [tgt().eq] : []); };
  const setPlay = p => { play = p; playB.textContent = p ? "Pause" : "Play"; };
  k.modes([["trace", "Trace"], ["fam", "Family"], ["match", "Match"]], mode, setMode);
  k.group("trace", () => { k.select("Curve", TR.map((S, i) => [i, S.eq]), ti, v => { ti = +v; th = 0; hold = 0; thS.setMax(Math.round(TR[ti].t1 / PI * 12)); setPlay(true); });
    thS = k.slider(`<span class="c1">${I("θ")}</span>`, 0, 24, 1, 0, v => { th = v * PI / 12; setPlay(false); }, v => MR.piT(Q(v, 12)));
    playB = k.button("Pause", () => { if (!play && th >= TR[ti].t1 - 1e-9) th = 0; setPlay(!play); }, "btn ghost"); });
  k.group("fam", () => { famS = k.select("Family", FAM.map((f, i) => [i, f[1]]), fi, v => { fi = +v; vis(); });
    aS = k.slider(I("a"), 0.5, 4, 0.5, A, v => A = v); bS = k.slider(I("b"), 0.5, 4, 0.5, B, v => B = v); nS = k.slider(I("n"), 2, 8, 1, N, v => N = v); });
  newB = k.button("New target", () => { gi = (gi + 1) % TG.length; k.guard([tgt().eq]); }, "btn ghost");
  setMode(mode);

  k.loop(dt => {
    c.begin(); tm += dt; const lp = [], lg = [];
    if (mode === "trace") {
      const S = TR[ti]; if (play) { if (th < S.t1) th = Math.min(S.t1, th + dt * S.t1 / 7); else if ((hold += dt) > 1.5) { th = 0; hold = 0; } thS.set(Math.round(th / PI * 12)); }
      const E = ext([S]), [P, G] = planes(E); curve(P, G, S, S.t1, k.alpha(C.green, .18), { w: 2 }); curve(P, G, S, th, C.green, { neg: C.pink });
      const r = mark(P, G, S, th, lp), ng = r < -1e-9, z = Math.abs(r) < 0.04; names(G, E, lg); P.labels(lp); G.labels(lg);
      k.readout({ title: "Trace a polar graph", big: `<span class="c5">${S.eq}</span>`,
        rows: [{ lhs: `<span class="c1">${I("θ")}</span>`, v: `${MR.piQ(th, 48) ? "" : "≈ "}${thT(th)} (${fmt(th * 180 / PI, 0)}°)`, cls: "c1" }, { lhs: `<span class="c4">${I("r")}</span>`, v: `≈ ${fmt(r, 2)}`, cls: ng ? "c3" : "c4" }].concat(info(S)),
        landmark: { hit: ng, big: ng ? `${I("r")} &lt; 0: opposite ray` : z ? `${I("r")} = 0: at the pole` : `${I("r")} &gt; 0`, note: ng ? "The point is drawn on the ray θ + π. On the right, the graph is below the θ-axis." : z ? "Where the rectangular graph crosses its axis, the polar curve passes through the pole." : "The point lies on the amber ray itself." },
        narr: "Pause, then drag θ across a zero of r and watch the point pass through the pole to the opposite ray." });
      return;
    }
    if (mode === "fam") {
      const S = cur(), E = ext([S]), [P, G] = planes(E); curve(P, G, S, S.t1, C.green, { neg: C.pink }); mark(P, G, S, (tm / 7 % 1) * S.t1, lp); names(G, E, lg); P.labels(lp); G.labels(lg);
      const hit = S.ratio === 1 || (S.petals && S.petals === 2 * N);
      k.readout({ title: "Name the curve", big: `<span class="c5">${S.eq}</span>`,
        rows: [{ lhs: "symmetric about", v: S.sym.length ? S.sym.join(", ") : "nothing (θ ≥ 0 only)" }].concat(info(S)).concat(S.ratio ? [{ lhs: `${I("a")}/${I("b")}`, v: MR.qT(Q(2 * A, 2 * B)) }] : []),
        landmark: { hit, big: S.kind, note: S.note },
        narr: S.ratio ? "Set a = b: the cardioid sits between the inner loop and the dimple." : "Compare n = 3 with n = 4: the odd rose retraces itself after π." });
      return;
    }
    const S = cur(), T = tgt(), E = ext([S, T]), [P, G] = planes(E), ok = S.eq === T.eq, same = FAM[fi][0] === TG[gi][0];
    curve(P, G, T, T.t1, k.alpha(C.text, .5), { w: 2, dash: [6, 5] }); curve(P, G, S, S.t1, C.green, { neg: C.pink }); names(G, E, lg); P.labels(lp); G.labels(lg);
    k.readout({ title: "Match the dashed curve", big: `yours: <span class="c5">${S.eq}</span>`,
      landmark: { hit: ok, big: ok ? "matched" : same ? "right family" : "not yet", note: ok ? `${T.kind[0].toUpperCase() + T.kind.slice(1)}.` : same ? "Now read the numbers off the rectangular graph: its highest value, its lowest, and how many waves fit." : "Compare the shapes first: a circle, loops, petals or a spiral?" },
      narr: `Target ${gi + 1} of ${TG.length}. The dashed graph on the right is r(θ): its peaks and zeros pin down a, b and n.` });
  });
};
})();
