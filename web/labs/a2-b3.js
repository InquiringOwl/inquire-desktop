/* ============ Labs: Algebra II batch B3 (synthetic division, factor & rational root theorems, sequences) ============ */
(function(){
const W = window, L = W.LABS = W.LABS || {}, MR = W.MathRules;
const { Q, Poly } = MR;
const MI = "−";

/* ---------- DOM-free helpers: now in MathRules (web/kits/subjects/math.js); still exposed as window.B3Rules ---------- */
const testOrder = MR.rootTestOrder;
// Linear factor for the zero p/q (lowest terms): "x − 3", "2x − 1", "x + 2" (text).
const linT = r => MR.factorStr(r, { integer: true });
const supT = MR.supT;
const synthDistractors = MR.synthDistractors, factorPlan = MR.factorPlan;
W.B3Rules = { testOrder, linT, synthDistractors, factorPlan };

/* ---------- shared DOM helpers ---------- */
function css(){
  if (document.getElementById("b3-css")) return;
  const s = document.createElement("style"); s.id = "b3-css";
  s.textContent = `.stage .dom.b3-dom{padding:6px 14px 10px;inset:auto}
.b3-dom.narrow{padding:4px 10px}
.b3-cap{font:12.5px/1.45 var(--sans);color:var(--faint);margin:6px 0 4px}
.b3-cap b{color:var(--muted);font-weight:500}
.b3-act{font:400 17px/1.45 var(--math);color:var(--text);margin:6px 0;min-height:1.4em}
.b3-syn table.mk-synth{margin:2px 0}
.b3-syn table.mk-synth td{color:var(--green)}
.b3-syn table.mk-synth tr:first-child td{color:var(--text)}
.b3-syn table.mk-synth tr:nth-child(2) td{color:var(--cyan)}
.b3-syn table.mk-synth td.r{color:var(--amber)}
.b3-syn.done table.mk-synth tr.b td:last-child{color:var(--pink);font-weight:600}
.b3-dom.narrow table.mk-synth{font-size:16px}
.b3-dom.narrow table.mk-synth td{padding:1px 5px;min-width:1.5em}
.b3-res{font:400 18px/1.6 var(--math);margin-top:6px}
.b3-chips{display:flex;flex-wrap:wrap;gap:4px;margin:4px 0}
.b3-chips button{font:400 16px/1.4 var(--math);color:var(--violet);background:rgba(180,155,255,.06);border:1px solid var(--violet);border-radius:4px;padding:1px 8px;cursor:pointer;min-width:2.4em}
.b3-chips button:hover{background:rgba(180,155,255,.16)}
.b3-chips button.root{color:var(--ink);background:var(--green);border-color:var(--green)}
.b3-chips button.no{color:var(--faint);border-color:var(--line-2);background:none}
.b3-chips button.sel{box-shadow:0 0 0 2px var(--text)}
.b3-chips button.ok{color:var(--ink);background:var(--green);border-color:var(--green)}
.b3-chips button.bad{color:var(--faint);border-color:var(--pink);background:none;text-decoration:line-through}
.b3-two{display:flex;flex-wrap:wrap;gap:10px 26px;align-items:flex-start}
.b3-two>div{min-width:0}
.b3-two>div+div{flex:1 1 240px}
table.b3-ld{border-collapse:collapse;font:400 18px/1.45 var(--math)}
table.b3-ld td{padding:1px 6px;text-align:right;white-space:nowrap;color:var(--muted)}
table.b3-ld td.lb{font:11px/1.2 var(--sans);color:var(--faint);text-align:left;padding-right:10px}
table.b3-ld tr.q td{color:var(--green)} table.b3-ld tr.dv td{border-bottom:1px solid var(--muted);color:var(--text)}
table.b3-ld tr.sub td{color:var(--muted)} table.b3-ld tr td.c2{color:var(--cyan)} table.b3-ld tr td.c5{color:var(--green)} table.b3-ld tr td.c3{color:var(--pink);font-weight:600}
table.b3-ld tr td.dim{color:var(--faint)}
table.b3-ld{width:auto} table.b3-ld td.lb{white-space:nowrap}
.b3-dom.narrow table.b3-ld{font-size:15px} .b3-dom.narrow table.b3-ld td{padding:1px 3px}
.b3-sig{display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;line-height:1;margin-right:.12em}
.b3-sig .lim{font-size:.62em} .b3-sig .S{font-size:1.35em}
.b3-big{font:400 24px/1.4 var(--math);margin:2px 0 4px}
.b3-dom .mk-steps{font-size:17px} .b3-dom .mk-steps .m{white-space:normal}
.b3-dom.narrow .mk-steps{font-size:15px}`;
  document.head.appendChild(s);
}
// Split the stage: the DOM panel takes the left part (wide) or the top part (narrow); returns the plot padding.
function region(k, c, dom, o = {}){
  const mb = k.stage.querySelector(".modes"), top = mb ? mb.offsetTop + mb.offsetHeight + 4 : 8;
  const wide = c.w >= (o.minWide || 600);
  if (o.full) { Object.assign(dom.style, { left: "0px", top: top + "px", width: c.w + "px", height: (c.h - top) + "px" }); dom.classList.toggle("narrow", !wide); return null; }
  if (wide) { const dw = Math.round(c.w * (o.frac || .46)); Object.assign(dom.style, { left: "0px", top: top + "px", width: dw + "px", height: (c.h - top) + "px" }); dom.classList.remove("narrow"); return { l: dw + 34, r: 16, t: top + 12, b: 30 }; }
  const dh = Math.round((c.h - top) * (o.hfrac || .5)); Object.assign(dom.style, { left: "0px", top: top + "px", width: c.w + "px", height: dh + "px" }); dom.classList.add("narrow"); return { l: 38, r: 14, t: top + dh + 10, b: 26 };
}
// Keep P.labels clear of the axis tick numbers (left of the y-axis, below the x-axis).
const tickBoxes = G => { const x0 = G.X(Math.min(Math.max(0, G.xmin), G.xmax)), y0 = G.Y(Math.min(Math.max(0, G.ymin), G.ymax)); G.boxes.push({ x: x0 - 44, y: G.top, w: 42, h: G.height }, { x: G.left, y: y0 + 5, w: G.width, h: 16 }); return G; };
const show = (el, on) => { if (el) el.style.display = on ? "" : "none"; };
const wrapOf = s => s.el.closest(".ctl");
const qT = MR.qT, qH = MR.qH, par = q => (Q(q).n < 0 ? `(${qT(q)})` : qT(q));
const pH = p => MR.polyH(p), pT = p => MR.polyT(p);
const synthSlice = (S, upto) => ({ top: S.top, mid: S.mid.map((m, i) => (i <= upto ? m : null)), bottom: S.bottom.map((b, i) => (i <= upto ? b : null)) });
// Synthetic table where sub-step s reveals: 1 = bring down, then multiply / add alternately.
function synthAt(k, S, r, s){
  const n = S.top.length - 1, col = s <= 0 ? -1 : Math.ceil((s - 1) / 2), addDone = s >= 1 && (s - 1) % 2 === 0;
  const mid = S.mid.map((m, i) => (i <= col ? m : null)), bottom = S.bottom.map((b, i) => (i < col || (i === col && addDone) ? b : null));
  const html = k.synthHTML({ top: S.top, mid, bottom }, r).replace(/<table class="mk-synth">/, `<table class="mk-synth"${col >= 0 ? ` data-col="${col}"` : ""}>`);
  return { html, col, addDone, done: s >= 2 * n + 1 };
}
const colStyle = (id, col) => (col >= 0 ? `<style>#${id} table.mk-synth td:nth-child(${col + 2}){background:rgba(242,184,75,.10)}</style>` : "");

/* =====================================================================
   a2-synthetic: stepper over the synthetic table + graph of P with (r, P(r))
   ===================================================================== */
L["a2-synthetic"] = k => {
  MathKit.attach(k); css();
  const { C, F, M } = k; const c = k.canvas(), d = c.d, dom = k.dom(); dom.classList.add("b3-dom");
  const PRE = [
    { p: [7, -4, 3, 2], r: -2, x: [-3.5, 2.5], y: [-6, 22], snap: 1 },
    { p: [-6, 5, 0, -3, 1], r: 2, x: [-2.5, 3.5], y: [-14, 10], snap: 1 },
    { p: [-16, 0, 0, 0, 1], r: -2, x: [-3, 3], y: [-20, 20], snap: 1 },
    { p: [5, -5, 1, 2], r: .5, x: [-2.5, 2], y: [-4, 12], snap: .5 },
    { p: [6, -5, -2, 1], r: 3, x: [-3, 4], y: [-12, 12], snap: 1 },
    { p: [1, -2, 0, 5, 2], r: -3, x: [-3.5, 1.5], y: [-14, 40], snap: .5 }
  ];
  let mode = "divide", pi = 0, P = Poly(PRE[0].p), r = Q(PRE[0].r), s = 0, G = null, turn = null;
  const ID = "b3s" + Math.random().toString(36).slice(2, 7);
  const steps = () => { const n = P.length - 1; return mode === "long" ? n : 2 * n + 1; };
  const st = k.stepper(steps, v => { s = v; });
  const ctlBtns = [...k.ctl.querySelectorAll("button")];
  const rS = k.slider(`<span class="c1"><i>r</i></span>`, -4, 4, .5, Q.val(r), v => setR(v), v => qT(Q(v)));
  const newB = k.button("New problem", () => newProblem(), "btn-s");
  const pt = [{ x: Q.val(r), y: 0, fixY: true, snap: .5 }];
  const drag = k.drag(c, () => G, pt, (i, p) => setR(p.x));
  function setR(v){ const pr = PRE[pi]; v = Math.max(pr.x[0], Math.min(pr.x[1], Math.round(v / pr.snap) * pr.snap)); r = Q(v); pt[0].x = v; rS.set(v); }
  function load(i, rr){ pi = i; P = Poly(PRE[i].p); setR(rr ?? PRE[i].r); st.reset(); }
  function newProblem(){
    if (mode === "turn") { let i, rv; do { i = Math.floor(Math.random() * PRE.length); const pr = PRE[i]; const opts = []; for (let v = Math.ceil(pr.x[0]); v <= Math.floor(pr.x[1]); v++) if (v !== 0) opts.push(v); if (pr.snap < 1) opts.push(.5, -.5); rv = opts[Math.floor(Math.random() * opts.length)]; } while (turn && i === turn.i && rv === turn.r); load(i, rv); makeTurn(); }
    else load((pi + 1) % PRE.length);
  }
  function makeTurn(){ const opts = synthDistractors(P, r); const right = Poly.synth(P, r).rem; const all = [{ v: right, ok: true }, ...opts]; for (let i = all.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [all[i], all[j]] = [all[j], all[i]]; } turn = { i: pi, r: Q.val(r), all, pick: -1 }; }
  dom.addEventListener("click", e => { const b = e.target.closest("button[data-i]"); if (!b || !turn || turn.pick >= 0) return; turn.pick = +b.dataset.i; });
  k.modes([["divide", "Divide"], ["long", "Long vs synthetic"], ["turn", "Your turn"]], mode, m => {
    mode = m; st.reset(); show(hintEl, m === "divide");
    ctlBtns.forEach(b => show(b, m !== "turn")); show(wrapOf(rS), m !== "turn");
    if (m === "turn") { newProblem(); k.guard([`R = ${qT(Poly.synth(P, r).rem)}`]); } else { turn = null; k.guard([]); }
  });
  k.guard([]);
  k.hint("Drag r along the x-axis"); const hintEl = k.stage.querySelector(".hintc");
  const termH = (q, e, lead) => { const a = Q.abs(q), one = a.n === 1 && a.d === 1 && e > 0; const coef = one ? "" : qH(a).replace(/^<span class="m">|<\/span>$/g, ""); const pw = e === 0 ? "" : e === 1 ? "<i>x</i>" : `<i>x</i><sup>${e}</sup>`; return (q.n < 0 ? (lead ? MI : MI + " ") : lead ? "" : "+ ") + coef + pw; };
  function longHTML(S, upto){
    const n = S.top.length - 1, cols = n + 1, td = (h, cls = "") => `<td${cls ? ` class="${cls}"` : ""}>${h}</td>`, blank = n2 => Array(n2).fill("<td></td>").join("");
    let h = `<table class="b3-ld"><tr class="q">${td("quotient", "lb")}${blank(1)}${S.bottom.slice(0, n).map((b, j) => td(j < upto ? termH(b, n - 1 - j, j === 0) : "")).join("")}</tr>`;
    h += `<tr class="dv">${td(`<i>x</i> ${r.n < 0 ? "+" : MI} ${qT(Q.abs(r))} )`, "lb")}${S.top.map((a, j) => td(termH(a, n - j, j === 0))).join("")}</tr>`;
    for (let j = 1; j <= upto; j++) {
      const cq = S.bottom[j - 1];
      h += `<tr class="sub">${td("− product", "lb")}${blank(j - 1)}${td(termH(Q.neg(cq), n - j + 1, true))}${td(termH(S.mid[j], n - j, false), "c2")}${blank(cols - j - 1)}</tr>`;
      const last = j === n;
      h += `<tr>${td(last ? "remainder" : "", "lb")}${blank(j)}${td(termH(S.bottom[j], n - j, true), last ? "c3" : "c5")}${!last ? td(termH(S.top[j + 1], n - j - 1, false), "dim") : ""}${blank(Math.max(0, cols - j - 2))}</tr>`;
    }
    return h + "</table>";
  }
  let last = "";
  k.loop(() => {
    c.begin();
    const S = Poly.synth(P, r), n = P.length - 1, R = S.rem, f = Poly.fn(P), pr = PRE[pi];
    const divT = `x ${r.n < 0 ? "+" : MI} ${qT(Q.abs(r))}`, divH = `<i>x</i> ${r.n < 0 ? "+" : MI} ${qT(Q.abs(r))}`;
    let html = "", done = false, col = -1;
    if (mode === "long") {
      region(k, c, dom, { full: true }); G = null;
      const full = s >= n; done = full;
      html = `<div class="b3-cap"><b>Long division</b> by ${M(divH)} and <b>synthetic division</b> by ${M(`<span class="c1">${qT(r)}</span>`)}: step ${s} of ${n}</div><div class="b3-two"><div>${longHTML(S, s)}</div><div class="b3-syn${full ? " done" : ""}" id="${ID}">${k.synthHTML(synthSlice(S, s ? s : -1), r)}${colStyle(ID, s ? s : -1)}<div class="b3-cap">Each carried entry (cyan) is the second term of the subtracted product with its sign changed. The bottom row repeats the leading coefficients of the long-division rows.</div></div></div>`;
    } else {
      const pad = region(k, c, dom);
      G = k.plane(c, { xmin: pr.x[0], xmax: pr.x[1], ymin: pr.y[0], ymax: pr.y[1], pad, xstep: 1, xlabel: "x", ylabel: "y" });
      G.grid(); G.axes(); tickBoxes(G);
      let showPt = false;
      if (mode === "divide") {
        const A = synthAt(k, S, r, s); done = A.done; col = A.col; showPt = done;
        const act = s === 0 ? `Write <span class="c1">${qT(r)}</span> in the box and the coefficients of <i>P</i>, with 0 for missing powers. Press Step.`
          : s === 1 ? `Bring down the leading coefficient <span class="c5">${qT(S.bottom[0])}</span>.`
          : !A.addDone ? `Multiply <span class="c5">${qT(S.bottom[col - 1])}</span> by <span class="c1">${qT(r)}</span>: <span class="c2">${qT(S.mid[col])}</span>. Write it under ${qT(S.top[col])}.`
          : col === n ? `Add the last column: ${qT(S.top[col])} + ${par(S.mid[col])} = <span class="c3">${qT(R)}</span>, the remainder.`
          : `Add the column: ${qT(S.top[col])} + ${par(S.mid[col])} = <span class="c5">${qT(S.bottom[col])}</span>.`;
        html = `<div class="b3-cap"><b>Divide</b> ${M(pH(P))} by ${M(divH)}</div><div class="b3-syn${done ? " done" : ""}" id="${ID}">${A.html}${colStyle(ID, col)}</div><div class="b3-act">${act}</div>${done ? `<div class="b3-res">${M(`<span class="c5"><i>Q</i>(<i>x</i>) = ${pH(S.q)}</span>`)}<br>${M(`<span class="c3"><i>R</i> = ${qT(R)}</span>`)}</div>` : ""}`;
      } else if (turn) {
        const picked = turn.pick >= 0, ok = picked && turn.all[turn.pick].ok; done = picked; showPt = picked;
        html = `<div class="b3-cap"><b>Your turn.</b> Divide ${M(pH(P))} by ${M(divH)} and pick the remainder.</div><div class="b3-syn${picked ? " done" : ""}" id="${ID}">${k.synthHTML(picked ? S : synthSlice(S, -1), r)}</div><div class="b3-chips">${turn.all.map((o, i) => `<button type="button" data-i="${i}" class="${picked ? (o.ok ? "ok" : i === turn.pick ? "bad" : "") : ""}">${qT(o.v)}</button>`).join("")}</div>${picked ? `<div class="b3-act">${ok ? "Right." : turn.all[turn.pick].why}</div><div class="b3-res">${M(`<span class="c5"><i>Q</i>(<i>x</i>) = ${pH(S.q)}</span>`)}, ${M(`<span class="c3"><i>R</i> = ${qT(R)}</span>`)}</div>` : `<div class="b3-cap">Work it on paper, then choose. New problem picks another.</div>`}`;
      }
      // graph: P, the dragged r, and once the remainder is known the point (r, P(r)) and P(x) − R
      const rv = Q.val(r), yv = Q.val(R);
      if (showPt) G.curve(x => f(x) - yv, k.alpha(C.green, .7), { dash: [5, 5], w: 1.8 });
      G.curve(f, C.violet, { w: 2.6 });
      G.seg(rv, 0, rv, showPt ? Math.max(G.ymin, Math.min(G.ymax, yv)) : 0, k.alpha(C.amber, .8), 1.5, [4, 4]);
      if (!showPt) G.line(rv, G.ymin, rv, G.ymax, k.alpha(C.amber, .35), 1, [3, 5]);
      G.dot(rv, 0, C.amber, drag.active >= 0 ? 7.5 : 6.5);
      const xP = pr.x[1] - .4, labs = [{ text: "P(x)", x: xP, y: Math.max(G.ymin, Math.min(G.ymax * .92, f(xP))), color: C.violet, prefer: "nw" }, { text: `r = ${qT(r)}`, x: rv, y: (G.ymax - G.ymin) * .05, color: C.amber, prefer: rv < 0 ? "nw" : "ne", font: `600 13px ${F.mono}` }];
      if (showPt) {
        if (yv >= G.ymin && yv <= G.ymax) { G.dot(rv, yv, C.pink, 6.5); labs.push({ text: `(${qT(r)}, ${qT(R)})`, x: rv, y: yv, color: C.pink, prefer: "ne" }); }
        else { const yy = yv > 0 ? G.ymax : G.ymin; d.arrow(G.X(rv), G.Y(yy) + (yv > 0 ? 24 : -24), G.X(rv), G.Y(yy) + (yv > 0 ? 2 : -2), C.pink, 2); labs.push({ text: `P(r) = ${qT(R)} off the graph`, x: rv, y: yy - (yv > 0 ? 1 : -1) * (G.ymax - G.ymin) * .1, color: C.pink }); }
        const xs = Math.min(pr.x[1] - .3, rv + 1.2); labs.push({ text: "P(x) − R", x: xs, y: f(xs) - yv, color: C.green, prefer: "se", font: `13px ${F.math}` });
      }
      G.labels(labs);
    }
    if (html !== last) { dom.innerHTML = html; last = html; }
    // readout
    const sub = S.top.map((a, j) => `${qT(a)}·(${qT(r)})${supT(n - j)}`).slice(0, 2).join(" + ");
    if (mode === "turn") {
      const picked = turn && turn.pick >= 0;
      k.readout({ title: "Your turn", big: M(`÷ (${divH})`), rows: [
        { lhs: "<i>P</i>(<i>x</i>)", v: M(pH(P)), lbl: "the dividend" },
        { lhs: `<span class="c1"><i>r</i></span>`, v: qT(r), cls: "c1", lbl: "the number in the box: the divisor is x − r" },
        { lhs: `<span class="c3"><i>R</i></span>`, v: picked ? `= ${qT(R)}` : "?", cls: "c3", lbl: picked ? `and P(${qT(r)}) = ${qT(R)} by substitution` : "bring down, multiply by r, add" }],
        landmark: { hit: picked && turn.all[turn.pick].ok, big: picked ? `${M(`<i>R</i> = <i>P</i>(${qT(r)})`)}` : "Pick a remainder", note: picked ? "The pink point on the graph sits at height R above x = r." : "The remainder will appear on the graph as the height of P at r." },
        narr: "Press New problem for another divisor. Wrong choices name the slip that produces them." });
    } else if (mode === "long") {
      k.readout({ title: "Long vs synthetic", big: M(`÷ (${divH})`), rows: [
        { lhs: "<i>P</i>(<i>x</i>)", v: M(pH(P)), lbl: "the dividend" },
        { lhs: "quotient terms", v: s ? S.bottom.slice(0, Math.min(s, n)).map(qT).join(", ") : "· · ·", cls: "c5", lbl: "leading coefficients of the long-division rows = the bottom row" },
        { lhs: `− <span class="c1"><i>r</i></span> → + <span class="c1"><i>r</i></span>`, lbl: `long division subtracts c(x ${r.n < 0 ? "+" : MI} ${qT(Q.abs(r))}); synthetic adds c·${r.n < 0 ? `(${qT(r)})` : qT(r)} instead` }],
        landmark: { hit: s >= n, big: s >= n ? M(`<span class="c3"><i>R</i> = ${qT(R)}</span> both ways`) : "Step through both", note: s >= n ? "Same quotient, same remainder. Synthetic division keeps only the coefficients that change." : "Each step adds one long-division cycle and one synthetic column." },
        narr: "Press Step to run one cycle of each method side by side." });
    } else {
      k.readout({ title: "Dividing by x − r", big: M(`÷ (${divH})`), rows: [
        { lhs: "<i>P</i>(<i>x</i>)", v: M(pH(P)), lbl: "the dividend, in descending powers" },
        { lhs: `<span class="c5"><i>Q</i>(<i>x</i>)</span>`, v: done ? M(pH(S.q)) : "· · ·", cls: "c5", lbl: `degree ${n - 1}, one less than P` },
        { lhs: `<i>P</i>(${qT(r)})`, v: done ? qT(Q(Poly.eval(P, r))) : "· · ·", cls: "c3", lbl: done ? `by substitution: ${sub} + ⋯` : "substitute to compare at the end" }],
        landmark: { hit: done, big: done ? M(`<span class="c3"><i>R</i> = ${qT(R)}</span> = <i>P</i>(<span class="c1">${qT(r)}</span>)`) : "Remainder Theorem", note: done ? (R.n === 0 ? `Remainder 0: x ${r.n < 0 ? "+" : MI} ${qT(Q.abs(r))} is a factor and ${qT(r)} is a zero of P.` : `The remainder is the height of the graph at x = r. The dashed green curve P(x) − R = (x − r)Q(x) crosses the axis at r.`) : "Step to the end of the row." },
        narr: done ? "Drag r along the x-axis: the remainder follows the curve. New problem changes P." : "Press Step to fill the table one move at a time." });
    }
  });
};

/* =====================================================================
   a2-factor-theorem: candidate chips, graph of P, deflation stepper
   ===================================================================== */
L["a2-factor-theorem"] = k => {
  MathKit.attach(k); css();
  const { C, F, M } = k; const c = k.canvas(), d = c.d, dom = k.dom(); dom.classList.add("b3-dom");
  const PRE = [
    { name: "2x³ − 3x² − 11x + 6", p: [6, -11, -3, 2], x: [-3.5, 4], y: [-22, 22] },
    { name: "x³ − 4x² + x + 6", p: [6, 1, -4, 1], x: [-2.5, 4.5], y: [-8, 10] },
    { name: "3x³ − 4x² − 17x + 6", p: [6, -17, -4, 3], x: [-3, 4], y: [-30, 24] },
    { name: "x⁴ − 2x³ − 7x² + 8x + 12", p: [12, 8, -7, -2, 1], x: [-3, 4], y: [-20, 24] },
    { name: "x⁴ − 3x³ − x² + 9x − 6", p: [-6, 9, -1, -3, 1], x: [-2.5, 3.5], y: [-8, 8] },
    { name: "x³ − x² + x − 1", p: [-1, 1, -1, 1], x: [-2.5, 2.5], y: [-8, 8] }
  ];
  let mode = "test", pi = 0, P = Poly(PRE[0].p), plan = factorPlan(P), tested = [], sel = -1, s = 0;
  const ID = "b3f" + Math.random().toString(36).slice(2, 7);
  const sel0 = k.select("polynomial", PRE.map((o, i) => [i, "P(x) = " + o.name]), 0, v => load(+v));
  const lines = () => buildLines();
  const st = k.stepper(() => lines().length - 1, v => { s = v; });
  const stBtns = [...k.ctl.querySelectorAll("button")];
  const clr = k.button("Clear tests", () => { tested = []; sel = -1; }, "btn ghost");
  function load(i){ pi = i; P = Poly(PRE[i].p); plan = factorPlan(P); tested = []; sel = -1; st.reset(); setGuard(); }
  function setGuard(){ k.guard(mode === "factor" ? [plan.factorsT] : []); }
  dom.addEventListener("click", e => { const b = e.target.closest("button[data-c]"); if (!b || mode !== "test") return; const i = +b.dataset.c; if (!tested.includes(i)) tested.push(i); sel = i; });
  k.modes([["test", "Test candidates"], ["factor", "Factor"]], mode, m => { mode = m; st.reset(); stBtns.forEach(b => show(b, m === "factor")); show(clr, m === "test"); setGuard(); });
  stBtns.forEach(b => show(b, false));
  setGuard();
  const fT = t => t.replace(/x/g, "<i>x</i>");
  const monoT = r => (r.n === 0 ? "x" : `x ${r.n > 0 ? MI : "+"} ${qT(Q.abs(r))}`);
  const monoH = r => (r.n === 0 ? "<i>x</i>" : `(<i>x</i> ${r.n > 0 ? MI : "+"} ${qH(Q.abs(r)).replace(/^<span class="m">|<\/span>$/g, "")})`);
  const rowT = (S, r) => `${qT(r)} | ${S.top.map(qT).join(",&nbsp;")} &nbsp;→&nbsp; ${S.bottom.slice(0, -1).map(qT).join(",&nbsp;")} | ${qT(S.rem)}`;
  function rootList(){ // all real zeros for the final step
    const out = plan.groups.map(g => qT(g.r) + (g.m > 1 ? ` (×${g.m})` : ""));
    if (plan.quad && !plan.quad.rat && plan.quad.R.kind !== "complex") out.push(MR.rootsStr(plan.quad.R, false));
    return out.join(", ");
  }
  function buildLines(){
    const a0 = Math.abs(Poly.primitive(P)[0]), an = Math.abs(Poly.lead(P).n);
    const L2 = [{ tag: "P(x)", eq: M(pH(P)), why: "Integer coefficients: the Rational Root Theorem applies." },
      { tag: "candidates", eq: M(`<span class="c4">${plan.cands.filter(q => q.n > 0).map(q => "±" + qT(q)).join(", ")}</span>`), why: `p divides ${a0}: ${MR.divisors(a0).join(", ")}; q divides ${an}: ${MR.divisors(an).join(", ")}.` }];
    plan.stages.forEach((sg, j) => {
      const fails = sg.fails.map(f => `${j ? "Q" : "P"}(${qT(f.c)}) = ${qT(f.v)}`).join(", ");
      L2.push({ tag: "test", eq: M(`${fails ? fails + "; &nbsp;" : ""}<span class="c5">${rowT(sg.synth, sg.root)}</span>`), why: `${fails ? "Nonzero values are not zeros. " : ""}Remainder 0 at ${qT(sg.root)}, so ${monoT(sg.root)} is a factor.` });
      L2.push({ tag: "deflate", eq: M(`${j ? `<span class="c2">${pH(sg.poly)}</span>` : "<i>P</i>(<i>x</i>)"} = ${monoH(sg.root)}(<span class="c2">${pH(sg.q)}</span>)`), why: `Factor Theorem. The quotient has degree ${Poly.deg(sg.q)}.${sg.root.d !== 1 ? ` Later, ${sg.root.d}(x − ${qT(sg.root)}) becomes ${linT(sg.root)}.` : ""}` });
    });
    const qd = plan.quad;
    if (qd) {
      const qp = qd.poly;
      if (qd.rat) { const g2 = []; qd.roots.forEach(r => { const g = g2.find(o => Q.eq(o.r, r)); if (g) g.m++; else g2.push({ r, m: 1 }); }); let K2 = Poly.lead(qp); qd.roots.forEach(r => { K2 = Q.div(K2, r.d); });
        L2.push({ tag: "quadratic", eq: M(`<span class="c2">${pH(qp)}</span> = ${K2.n === 1 && K2.d === 1 ? "" : qT(K2)}${g2.map(g => `(${fT(linT(g.r))})${g.m > 1 ? supT(g.m) : ""}`).join("")}`), why: "Factor the quadratic quotient." }); }
      else if (qd.R.kind === "complex") L2.push({ tag: "quadratic", eq: M(`<span class="c2">${pH(qp)}</span> = 0 &nbsp;⇒&nbsp; <i>x</i> = ${MR.rootsStr(qd.R, true)}`), why: `Discriminant ${qT(qd.R.D)} < 0: no real zeros, so this quadratic stays as a factor over the reals.` });
      else L2.push({ tag: "quadratic", eq: M(`<span class="c2">${pH(qp)}</span> = 0 &nbsp;⇒&nbsp; <i>x</i> = ${MR.rootsStr(qd.R, true)}`), why: "Irrational zeros: no factor with integer coefficients, so keep the quadratic." });
    }
    L2.push({ tag: "answer", eq: M(`<i>P</i>(<i>x</i>) = <span class="c5">${fT(plan.factorsT)}</span>`), why: `Real zeros: ${rootList()}.` });
    return L2;
  }
  const SP = k.stepsPanel(dom);
  let last = "";
  const head = document.createElement("div"); dom.insertBefore(head, SP.el);
  k.loop(() => {
    c.begin();
    const pr = PRE[pi], f = Poly.fn(P), pad = region(k, c, dom, { frac: .5 });
    const LN = buildLines(), order = plan.order;
    // which candidates are tested / found in this mode
    let testedC = [], roots = [], qShow = null, fin = false;
    if (mode === "test") { testedC = tested.map(i => order[i]); roots = testedC.filter(q => Poly.eval(P, q).n === 0); }
    else {
      let li = 2; for (const sg of plan.stages) { if (s >= li) { testedC.push(...sg.fails.map(f2 => f2.c), sg.root); roots.push(sg.root); } if (s >= li + 1) qShow = sg.q; li += 2; }
      if (plan.quad && s >= li) { roots.push(...plan.quad.roots); qShow = plan.quad.poly; }
      fin = s >= LN.length - 1;
    }
    // DOM
    let html;
    if (mode === "test") {
      const cur = sel >= 0 ? order[sel] : null, S = cur ? Poly.synth(P, cur) : null;
      html = `<div class="b3-cap"><b>Candidates</b> ±p/q for ${M(`<span class="c1">${pH(P)}</span>`)}: tap one to test it.</div><div class="b3-chips">${order.map((q, i) => `<button type="button" data-c="${i}" class="${tested.includes(i) ? (Poly.eval(P, q).n === 0 ? "root" : "no") : ""}${i === sel ? " sel" : ""}">${qT(q)}</button>`).join("")}</div>${S ? `<div class="b3-syn done" id="${ID}">${k.synthHTML(S, cur)}</div><div class="b3-act">${S.rem.n === 0 ? `Remainder 0: <span class="c5">${qT(cur)}</span> is a zero, and ${M(`<i>P</i>(<i>x</i>) = ${monoH(cur)}(<span class="c2">${pH(S.q)}</span>)`)}.` : `${M(`<i>P</i>(${qT(cur)}) = ${qT(S.rem)}`)} ≠ 0, so ${M(fT(monoT(cur)))} is not a factor.`}</div>` : `<div class="b3-cap">Order: integers first, smallest first. The graph shows where the zeros are likely to be.</div>`}`;
      head.innerHTML !== html && (head.innerHTML = html); SP.el.style.display = "none";
    } else {
      html = `<div class="b3-cap"><b>Factor completely</b>: step ${s} of ${LN.length - 1}</div>`;
      head.innerHTML !== html && (head.innerHTML = html); SP.el.style.display = ""; SP.set(LN, s);
    }
    // graph
    const G = k.plane(c, { xmin: pr.x[0], xmax: pr.x[1], ymin: pr.y[0], ymax: pr.y[1], pad, xstep: 1, xlabel: "x", ylabel: "y" });
    G.grid(); G.axes(); tickBoxes(G);
    if (qShow) G.curve(Poly.fn(qShow), k.alpha(C.cyan, .85), { dash: [6, 5], w: 2 });
    G.curve(f, C.amber, { w: 2.7 });
    const tick = (x, col, h = 7, w = 2) => { if (x >= G.xmin && x <= G.xmax) d.line(G.X(x), G.Y(0) - h, G.X(x), G.Y(0) + h, col, w); };
    plan.cands.forEach(q => tick(Q.val(q), k.alpha(C.violet, .85)));
    testedC.forEach(q => { if (!roots.some(r => Q.eq(r, q))) { const x = Q.val(q); if (x >= G.xmin && x <= G.xmax) d.circle(G.X(x), G.Y(0), 4.5, C.ink, C.faint, 1.5); } });
    const labs = [];
    roots.forEach(q => { G.dot(Q.val(q), 0, C.green, 6); labs.push({ text: qT(q), x: Q.val(q), y: (G.ymax - G.ymin) * .05, color: C.green, prefer: "ne", font: `600 13px ${F.mono}` }); });
    if (fin && plan.quad && !plan.quad.rat && plan.quad.R.kind !== "complex") { const R2 = plan.quad.R; R2.values.forEach(z => { const v = z.re; G.dot(v, 0, C.green, 6); labs.push({ text: R2.p.n === 0 ? (v < 0 ? MI : "") + MR.radStr(R2.s, R2.t, false) : "≈ " + MR.fmtN(v, 2), x: v, y: (G.ymax - G.ymin) * .05, color: C.green, prefer: "nw", font: `600 13px ${F.mono}` }); }); }
    const xl = pr.x[1] - .5; labs.push({ text: "P(x)", x: xl, y: Math.max(pr.y[0], Math.min(pr.y[1], f(xl))), color: C.amber, prefer: "nw" });
    if (qShow) { const xq = pr.x[0] + .6; labs.push({ text: "Q(x)", x: xq, y: Math.max(pr.y[0], Math.min(pr.y[1], Poly.evalN(qShow, xq))), color: C.cyan, prefer: "ne" }); }
    G.labels(labs);
    // readout
    const nC = plan.cands.length, off = plan.cands.filter(q => Q.val(q) < pr.x[0] || Q.val(q) > pr.x[1]).map(qT);
    if (mode === "test") {
      const cur = sel >= 0 ? order[sel] : null, hit = cur && Poly.eval(P, cur).n === 0;
      k.readout({ title: "Rational Root Theorem", big: M(`<span class="c4">±<i>p</i>/<i>q</i></span>`), rows: [
        { lhs: `<span class="c1"><i>P</i>(<i>x</i>)</span>`, v: M(pH(P)), cls: "c1" },
        { lhs: `<span class="c4">±<i>p</i>/<i>q</i></span>`, v: `${nC} candidates`, cls: "c4", lbl: `p divides the constant term, q the leading coefficient${off.length ? `; off the graph: ${off.join(", ")}` : ""}` },
        { lhs: "tested", v: `${tested.length}`, lbl: roots.length ? `zeros found: ${roots.map(qT).join(", ")}` : "no zero found yet" }],
        landmark: { hit: !!hit, big: hit ? M(`<i>P</i>(<span class="c5">${qT(cur)}</span>) = 0 ⇒ ${fT(monoT(cur))} is a factor`) : "Factor Theorem", note: hit ? "Synthetic division came out even, so the bottom row is the cyan quotient." : "A zero is a candidate whose synthetic division leaves remainder 0." },
        narr: "Tap candidates. Grey ones fail; green ones are zeros, and their ticks sit where the curve crosses the axis." });
    } else {
      k.readout({ title: "Deflate, then factor", big: M(`<span class="c1"><i>P</i></span> = (<i>x</i> − <span class="c5"><i>r</i></span>) · <span class="c2"><i>Q</i></span>`), rows: [
        { lhs: `<span class="c1"><i>P</i>(<i>x</i>)</span>`, v: M(pH(P)), cls: "c1", lbl: `degree ${Poly.deg(P)}; each zero found lowers the degree of the quotient by one` },
        { lhs: `<span class="c2"><i>Q</i>(<i>x</i>)</span>`, v: qShow ? M(pH(qShow)) : "· · ·", cls: "c2", lbl: "the polynomial still to factor (dashed cyan)" },
        { lhs: `<span class="c5">zeros</span>`, v: roots.length ? roots.map(qT).join(", ") : "· · ·", cls: "c5", lbl: "each gives a factor x − r" }],
        landmark: { hit: fin, big: fin ? "Completely factored" : "Down to a quadratic", note: fin ? "Every zero found by the Rational Root Theorem is a green tick. Any zeros left are irrational or not real." : "Test candidates until the quotient is quadratic, then factor it." },
        narr: "Press Step. Choose another polynomial to see a repeated test, irrational zeros or a quadratic with no real zeros." });
    }
  });
};

/* =====================================================================
   a2-sequences: term generator (dots + partial-sum bars) and Σ expansion
   ===================================================================== */
L["a2-sequences"] = k => {
  MathKit.attach(k); css();
  const { C, F, M } = k; const c = k.canvas(), d = c.d;
  const nH = `<span class="c2"><i>n</i></span>`, aH = i => `<span class="c1"><i>a</i><sub>${i}</sub></span>`;
  const fact = n => { let r = 1; for (let i = 2; i <= n; i++) r *= i; return r; };
  const SEQ = [
    { lab: "aₙ = 2n + 1", rec: false, f: n => Q(2 * n + 1), H: `${aH("<i>n</i>")} = 2${nH} + 1`, sub: n => `2(${n}) + 1`, lm: n => ({ hit: n === 4, big: "S₄ = 3 + 5 + 7 + 9 = 24", note: "The sum on the hero line: four odd numbers from 3." }) },
    { lab: "aₙ = n²", rec: false, f: n => Q(n * n), H: `${aH("<i>n</i>")} = ${nH}<sup>2</sup>`, sub: n => `${n}²`, lm: n => ({ hit: n === 5, big: "S₅ = 1 + 4 + 9 + 16 + 25 = 55", note: "Sum of the first five squares." }) },
    { lab: "aₙ = (−1)ⁿ(n + 1)", rec: false, f: n => Q((n % 2 ? -1 : 1) * (n + 1)), H: `${aH("<i>n</i>")} = (−1)<sup>${nH}</sup>(${nH} + 1)`, sub: n => `(−1)${supT(n)}(${n} + 1)`, lm: n => ({ hit: n % 2 === 0, big: n % 2 === 0 ? `S${subT(n)} = ${n / 2}` : "Even n: pairs", note: "(−2 + 3) + (−4 + 5) + ⋯: each pair adds 1, so after an even number of terms the sum is n/2." }) },
    { lab: "aₙ = 1/n", rec: false, f: n => Q(1, n), H: `${aH("<i>n</i>")} = <span class="fr"><span>1</span><span>${nH}</span></span>`, sub: n => `1/${n}`, lm: n => ({ hit: n >= 11, big: "S₁₁ > 3", note: "The terms shrink toward 0, yet the partial sums keep growing past every bound (slowly)." }) },
    { lab: "aₙ = (−1)ⁿ/2ⁿ", rec: false, f: n => Q(n % 2 ? -1 : 1, 2 ** n), H: `${aH("<i>n</i>")} = <span class="fr"><span>(−1)<sup><i>n</i></sup></span><span>2<sup><i>n</i></sup></span></span>`, sub: n => `(−1)${supT(n)}/2${supT(n)}`, lm: n => ({ hit: n >= 8, big: "Sₙ → −1/3", note: "The partial sums swing above and below −1/3 and close in on it." }) },
    { lab: "a₁ = 4, aₙ = 2aₙ₋₁ − 3", rec: true, a1: [Q(4)], f: (n, A) => Q.sub(Q.mul(2, A[n - 2]), 3), H: `${aH(1)} = 4, &nbsp;${aH("<i>n</i>")} = 2${aH("<i>n</i>−1")} − 3`, sub: (n, A) => `2(${qT(A[n - 2])}) − 3`, lm: n => ({ hit: n === 5, big: "4, 5, 7, 11, 19", note: "Each term doubles the one before, then subtracts 3." }) },
    { lab: "a₁ = a₂ = 1, aₙ = aₙ₋₁ + aₙ₋₂", rec: true, a1: [Q(1), Q(1)], f: (n, A) => Q.add(A[n - 2], A[n - 3]), H: `${aH(1)} = ${aH(2)} = 1, &nbsp;${aH("<i>n</i>")} = ${aH("<i>n</i>−1")} + ${aH("<i>n</i>−2")}`, sub: (n, A) => `${qT(A[n - 2])} + ${qT(A[n - 3])}`, lm: (n, A, Sn) => ({ hit: n >= 3, big: n >= 3 ? `S${subT(n)} = a${subT(n + 2)} − 1 = ${qT(Sn)}` : "Fibonacci", note: "The partial sums of the Fibonacci numbers are one less than a later Fibonacci number." }) },
    { lab: "a₁ = 1, aₙ = aₙ₋₁ + n", rec: true, a1: [Q(1)], f: (n, A) => Q.add(A[n - 2], n), H: `${aH(1)} = 1, &nbsp;${aH("<i>n</i>")} = ${aH("<i>n</i>−1")} + ${nH}`, sub: (n, A) => `${qT(A[n - 2])} + ${n}`, lm: n => ({ hit: n >= 2, big: `explicit: a${subT(n)} = ${n}(${n + 1})/2`, note: "The triangular numbers also have an explicit formula, aₙ = n(n + 1)/2." }) },
    { lab: "a₁ = 1, aₙ = n · aₙ₋₁ (n!)", rec: true, a1: [Q(1)], f: (n, A) => Q.mul(n, A[n - 2]), H: `${aH(1)} = 1, &nbsp;${aH("<i>n</i>")} = ${nH} · ${aH("<i>n</i>−1")}`, sub: (n, A) => `${n} · ${qT(A[n - 2])}`, max: 8, lm: n => ({ hit: n === 5, big: "a₅ = 5! = 120", note: "This recursion defines the factorial: n! = n · (n − 1)!." }) },
    { lab: "a₁ = 2, aₙ = ½ aₙ₋₁", rec: true, a1: [Q(2)], f: (n, A) => Q.mul(Q(1, 2), A[n - 2]), H: `${aH(1)} = 2, &nbsp;${aH("<i>n</i>")} = <span class="fr"><span>1</span><span>2</span></span>${aH("<i>n</i>−1")}`, sub: (n, A) => `½ · ${qT(A[n - 2])}`, lm: (n, A, Sn) => ({ hit: n >= 8, big: `S${subT(n)} = ${qT(Sn)}`, note: "Halving each time: the partial sums approach 4 but never reach it." }) }
  ];
  const SUMS = [
    { lab: "Σ (3k − 2), k = 1 to 6", lo: 1, hi: 6, v: "k", f: i => Q(3 * i - 2), body: `(3<i>k</i> − 2)`, sub: i => `3(${i}) − 2` },
    { lab: "Σ (i² − 2i), i = 3 to 7", lo: 3, hi: 7, v: "i", f: i => Q(i * i - 2 * i), body: `(<i>i</i><sup>2</sup> − 2<i>i</i>)`, sub: i => `${i}² − 2(${i})` },
    { lab: "Σ (−1)ᵏk, k = 1 to 5", lo: 1, hi: 5, v: "k", f: i => Q((i % 2 ? -1 : 1) * i), body: `(−1)<sup><i>k</i></sup><i>k</i>`, sub: i => `(−1)${supT(i)}(${i})` },
    { lab: "Σ 2ⁿ, n = 0 to 4", lo: 0, hi: 4, v: "n", f: i => Q(2 ** i), body: `2<sup><i>n</i></sup>`, sub: i => `2${supT(i)}` },
    { lab: "Σ k!, k = 2 to 5", lo: 2, hi: 5, v: "k", f: i => Q(fact(i)), body: `<i>k</i>!`, sub: i => `${i}!` },
    { lab: "Σ (4k − 1), k = 1 to 10", lo: 1, hi: 10, v: "k", f: i => Q(4 * i - 1), body: `(4<i>k</i> − 1)`, sub: i => `4(${i}) − 1` }
  ];
  const SUB = "₀₁₂₃₄₅₆₇₈₉", subT = n => String(n).split("").map(ch => SUB[+ch]).join("");
  let mode = "terms", si = 0, n = 5, zi = 0, s = 0;
  const view = {};
  const dom = k.dom(); dom.classList.add("b3-dom"); dom.style.display = "none";
  const seqSel = k.select("sequence", SEQ.map((o, i) => [i, o.lab]), 0, v => { si = +v; const mx = SEQ[si].max || 12; nS.setMax(mx); if (n > mx) n = mx; });
  const nS = k.slider(`<span class="c2"><i>n</i></span>`, 1, 12, 1, n, v => n = v, v => String(v));
  const sumSel = k.select("sum", SUMS.map((o, i) => [i, o.lab]), 0, v => { zi = +v; st.reset(); setGuard(); });
  const st = k.stepper(() => SUMS[zi].hi - SUMS[zi].lo + 2, v => { s = v; });
  const stBtns = [...k.ctl.querySelectorAll("button")];
  const sigH = (o, big) => `<span class="b3-sig"><span class="lim">${o.hi}</span><span class="S">Σ</span><span class="lim"><i>${o.v}</i>=${o.lo}</span></span>${o.body}`;
  const totalOf = o => MR.sigma(o.f, o.lo, o.hi);
  function setGuard(){ k.guard(mode === "sigma" ? [`= ${qT(totalOf(SUMS[zi]))}`] : []); }
  const SP = k.stepsPanel(dom); const head = document.createElement("div"); dom.insertBefore(head, SP.el);
  function setMode(m){ mode = m; const sig = m === "sigma"; show(seqSel.el.closest(".ctl"), !sig); show(wrapOf(nS), !sig); show(sumSel.el.closest(".ctl"), sig); stBtns.forEach(b => show(b, sig)); dom.style.display = sig ? "" : "none"; st.reset(); setGuard(); }
  k.modes([["terms", "Terms & partial sums"], ["sigma", "Σ expand"]], mode, setMode);
  setMode("terms");
  const termsOf = (o, N) => { const A = []; for (let i = 1; i <= N; i++) A.push(o.rec && i <= o.a1.length ? o.a1[i - 1] : o.rec ? o.f(i, A) : o.f(i)); return A; };
  const lblT = q => (q.d === 1 ? qT(q) : Math.abs(Q.val(q)) < .01 ? MR.fmtN(Q.val(q), 4) : qT(q));
  k.loop(dt => {
    c.begin();
    if (mode === "terms") {
      const o = SEQ[si], MX = o.max || 12, A = termsOf(o, MX), Ss = []; A.reduce((acc, a, i) => (Ss[i] = Q.add(acc, a)), Q(0));
      const vals = A.map(Q.val), svals = Ss.map(Q.val);
      const lo1 = Math.min(0, ...vals.slice(0, Math.max(n, 6))), hi1 = Math.max(0, ...vals.slice(0, Math.max(n, 6)));
      const lo2 = Math.min(0, ...svals.slice(0, n)), hi2 = Math.max(0, ...svals.slice(0, n));
      k.smooth(view, { a0: lo1, a1: hi1, b0: lo2, b1: hi2 }, dt);
      const mb = k.stage.querySelector(".modes"), top = mb ? mb.offsetTop + mb.offsetHeight + 8 : 10, mid = top + (c.h - top) * .5;
      const padY = (a, b) => { const sp = (b - a) || 1; return [a - sp * .14, b + sp * .2]; };
      const [y0, y1] = padY(view.a0, view.a1), [z0, z1] = padY(view.b0, view.b1);
      const T = k.plane(c, { xmin: 0, xmax: MX + .8, ymin: y0, ymax: y1, pad: { l: 52, r: 16, t: top + 6, b: c.h - mid + 16 }, xstep: 1, xlabel: "n", ylabel: "aₙ" });
      T.grid(); T.axes(); tickBoxes(T);
      for (let i = 1; i <= MX; i++) { const on = i <= n; if (vals[i - 1] >= T.ymin && vals[i - 1] <= T.ymax) { if (on) T.dot(i, vals[i - 1], C.amber, i === n ? 7 : 5); else T.point(i, vals[i - 1], k.alpha(C.amber, .25), 4); } }
      T.seg(n, T.ymin, n, T.ymax, k.alpha(C.cyan, .5), 1.2, [3, 4]);
      const B = k.plane(c, { xmin: 0, xmax: MX + .8, ymin: z0, ymax: z1, pad: { l: 52, r: 16, t: mid + 14, b: 28 }, xstep: 1, xlabel: "n", ylabel: "Sₙ", modes: false });
      B.grid(); B.axes(); tickBoxes(B);
      for (let i = 1; i <= n; i++) {
        const prev = i > 1 ? svals[i - 2] : 0, cur = svals[i - 1], bw = Math.min(26, B.width / (MX + 1) * .6), x = B.X(i) - bw / 2;
        const yA = B.Y(Math.max(B.ymin, Math.min(B.ymax, 0))), yP = B.Y(Math.max(B.ymin, Math.min(B.ymax, prev))), yC = B.Y(Math.max(B.ymin, Math.min(B.ymax, cur)));
        d.rect(x, Math.min(yA, yP), bw, Math.abs(yP - yA), k.alpha(C.pink, i === n ? .55 : .3));
        d.rect(x, Math.min(yP, yC), bw, Math.max(1.5, Math.abs(yC - yP)), k.alpha(C.amber, i === n ? .95 : .55));
      }
      const an = A[n - 1], Sn = Ss[n - 1];
      T.labels([{ text: `a${subT(n)} = ${lblT(an)}`, x: n, y: vals[n - 1], color: C.amber, prefer: "ne", font: `14px ${F.math}` }]);
      B.labels([{ text: `S${subT(n)} = ${lblT(Sn)}`, x: n, y: svals[n - 1], color: C.pink, prefer: "nw", font: `14px ${F.math}` }]);
      const first = A.slice(0, 6).map(qT).join(", ");
      const how = o.rec ? (n <= o.a1.length ? "given" : `${o.sub(n, A)} = ${qT(an)}`) : `${o.sub(n)} = ${qT(an)}`;
      const L2 = o.lm(n, A, Sn);
      k.readout({ title: o.rec ? "Recursive formula" : "Explicit formula", big: M(o.H), rows: [
        { lhs: aH(`<span class="c2">${n}</span>`), v: qH(an), cls: "c1", lbl: how },
        { lhs: `<span class="c3"><i>S</i><sub>${n}</sub></span>`, v: qH(Sn), cls: "c3", lbl: n > 1 ? `S${subT(n - 1)} + a${subT(n)} = ${qT(Ss[n - 2])} + ${qT(an)}${Sn.d !== 1 ? ` ≈ ${MR.fmtN(Q.val(Sn), 4)}` : ""}` : "S₁ = a₁" },
        { lhs: "first terms", v: first + ", …", lbl: o.rec ? "each from the term(s) before it" : "substitute n = 1, 2, 3, …" }],
        landmark: { hit: L2.hit, big: L2.big, note: L2.note },
        narr: "Move n. Top: the terms as separate dots. Bottom: each bar is the previous partial sum (pink) plus the new term (amber)." });
    } else {
      const o = SUMS[zi], N = o.hi - o.lo + 1, idx = Array.from({ length: N }, (_, j) => o.lo + j), A = idx.map(o.f), tot = totalOf(o);
      const pad = region(k, c, dom, { frac: .5, hfrac: .56 });
      const shown = Math.min(s, N), run = A.slice(0, shown).reduce((m, a) => Q.add(m, a), Q(0));
      const lines = idx.map((i, j) => { const r2 = A.slice(0, j + 1).reduce((m, a) => Q.add(m, a), Q(0)); return { tag: `term ${j + 1}`, eq: M(`<i>${o.v}</i> = <span class="c2">${i}</span>: &nbsp;${o.sub(i)} = <span class="c1">${qT(A[j])}</span>`), why: `running total ${qT(r2)}` }; });
      lines.push({ tag: "total", eq: M(`<span class="c3">= ${qT(tot)}</span>`), why: `${N} terms: ${o.hi} − ${o.lo} + 1 = ${N}.` });
      const hh = `<div class="b3-big">${M(sigH(o))}</div><div class="b3-cap">${M(`<i>${o.v}</i>`)} runs from ${o.lo} to ${o.hi}. ${s ? `Expanded: ${M(A.slice(0, shown).map(qT).map((t, j) => j ? (t.startsWith(MI) ? `(${t})` : t) : t).join(" + ") + (shown < N ? " + ⋯" : ""))}` : "Expand one term per step."}</div>`;
      if (head.innerHTML !== hh) head.innerHTML = hh;
      SP.set(lines.map((l, j) => ({ ...l })), s - 1);
      const vals = A.map(Q.val), runs = []; vals.reduce((m, v, j) => (runs[j] = m + v), 0);
      const lo = Math.min(0, ...vals, ...runs), hi = Math.max(0, ...vals, ...runs), sp = hi - lo || 1;
      const G = k.plane(c, { xmin: o.lo - .8, xmax: o.hi + 2.2, ymin: lo - sp * .1, ymax: hi + sp * .18, pad, xstep: 1 });
      G.grid(); G.axes(); tickBoxes(G);
      const bw = Math.min(24, G.width / (N + 3) * .6), labs = [];
      idx.forEach((i, j) => { if (j >= shown) { d.rect(G.X(i) - bw / 2, G.Y(0) - 1, bw, 2, k.alpha(C.amber, .3)); return; } const y0 = G.Y(0), y1 = G.Y(vals[j]); d.rect(G.X(i) - bw / 2, Math.min(y0, y1), bw, Math.max(1.5, Math.abs(y1 - y0)), k.alpha(C.amber, .8)); G.seg(i, 0, i, vals[j], "rgba(0,0,0,0)", 0); });
      const xT = o.hi + 1.4; let base = 0; G.line(o.hi + .7, G.ymin, o.hi + .7, G.ymax, k.alpha(C.muted, .6), 1, [4, 4]);
      for (let j = 0; j < shown; j++) base += vals[j];
      if (shown) { const prev = base - vals[shown - 1], y0 = G.Y(0), y1 = G.Y(base); d.rect(G.X(xT) - bw / 2, Math.min(y0, y1), bw, Math.max(1.5, Math.abs(y1 - y0)), k.alpha(C.pink, .6)); if (vals[shown - 1]) d.arrow(G.X(xT) + bw / 2 + 7, G.Y(prev), G.X(xT) + bw / 2 + 7, G.Y(base), C.amber, 2); }
      if (shown) { G.seg(xT, 0, xT, base, "rgba(0,0,0,0)", 0); if (shown) labs.push({ text: shown === N && s > N ? `Σ = ${qT(tot)}` : `running ${qT(run)}`, x: xT, y: base, color: C.pink, prefer: base >= 0 ? "nw" : "sw", font: `600 13px ${F.mono}` }); }
      if (shown) labs.push({ text: qT(A[shown - 1]), x: idx[shown - 1], y: vals[shown - 1], color: C.amber, prefer: vals[shown - 1] >= 0 ? "n" : "s", font: `13px ${F.mono}` });
      G.labels(labs);
      k.readout({ title: "Sigma notation", big: M(sigH(o)), rows: [
        { lhs: `index <i>${o.v}</i>`, v: `${o.lo} … ${o.hi}`, cls: "c2", lbl: `${N} terms: upper − lower + 1` },
        { lhs: "terms added", v: `${shown} of ${N}`, lbl: shown ? `last: ${o.sub(idx[shown - 1])}` : "press Step" },
        { lhs: `<span class="c3">running total</span>`, v: qT(run), cls: "c3", lbl: "amber bars are the terms; the stack at the right is their sum" }],
        landmark: { hit: s > N, big: s > N ? M(`${sigH(o)} <span class="c3">= ${qT(tot)}</span>`) : "Expand, then add", note: s > N ? "The stacked bar ends at the total." : "Each step substitutes one value of the index." },
        narr: "Press Step to substitute the next index value. Choose another sum to see an index starting at 0 or 3." });
    }
  });
};
})();
