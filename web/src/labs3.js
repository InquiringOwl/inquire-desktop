/* ============ Labs: parts of a whole + applied ============ */
(function(){
const L = window.LABS;
const lerp = (a, b, t) => a + (b - a) * t;
const FR = (a, b, cl = "") => `<span class="m ${cl}"><span class="fr"><span>${a}</span><span>${b}</span></span></span>`;

/* ---------- ratios: tape diagram ---------- */
L["ratios"] = k => {
  const { C, F, M, gcd } = k; const c = k.canvas(); const d = c.d;
  let a = 3, b = 2, s = 4;
  k.slider(`<span class="c2"><i>a</i></span>`, 1, 8, 1, a, v => a = v);
  k.slider(`<span class="c3"><i>b</i></span>`, 1, 8, 1, b, v => b = v);
  k.slider(`<span class="c4"><i>k</i></span>`, 1, 6, 1, s, v => s = v);
  k.loop(() => {
    k.publish("first", a * s); k.publish("second", b * s); k.publish("total", (a + b) * s); k.publish("pair", 100 * a + b);   // lesson figures + Your move goals
    c.begin(); const { w, h } = c;
    const u = Math.min(64, (w - 170) / Math.max(a, b)), bh = 38, x0 = 120;
    const tape = (y, n, col, name) => { d.text(name, x0 - 14, y + bh / 2, { font: `600 13px ${F.ui}`, color: col, align: "right", base: "middle" }); for (let i = 0; i < n; i++) { d.rect(x0 + i * u, y, u - 3, bh, k.alpha(col, .35), col, 1.5); d.text(String(s), x0 + i * u + (u - 3) / 2, y + bh / 2 + 1, { font: `600 15px ${F.mono}`, color: C.text, align: "center", base: "middle" }); } d.text(`= ${n * s}`, x0 + n * u + 10, y + bh / 2, { font: `600 16px ${F.mono}`, color: col, base: "middle" }); };
    tape(50, a, C.cyan, "QUANTITY A"); tape(50 + bh + 18, b, C.pink, "QUANTITY B");
    d.text(`each box is worth k = ${s}`, x0, 50 + 2 * bh + 46, { font: `14px ${F.sans}`, color: C.violet });
    // ratio table
    const ty = 50 + 2 * bh + 80, cw = Math.min(70, (w - 150) / 7);
    d.text("×", x0 - 14, ty + 18, { font: `13px ${F.mono}`, color: C.faint, align: "right" }); d.text("A", x0 - 14, ty + 50, { font: `600 13px ${F.ui}`, color: C.cyan, align: "right" }); d.text("B", x0 - 14, ty + 82, { font: `600 13px ${F.ui}`, color: C.pink, align: "right" });
    for (let i = 1; i <= 7; i++) { const x = x0 + (i - 1) * cw + cw / 2, on = i === s; if (on) d.rect(x - cw / 2 + 2, ty, cw - 4, 96, k.alpha(C.violet, .15), C.violet); d.text(String(i), x, ty + 18, { font: `13px ${F.mono}`, color: on ? C.violet : C.faint, align: "center" }); d.text(String(a * i), x, ty + 50, { font: `600 16px ${F.mono}`, color: C.cyan, align: "center" }); d.text(String(b * i), x, ty + 82, { font: `600 16px ${F.mono}`, color: C.pink, align: "center" }); }
    // graph
    const gx = x0 + 7 * cw + 30, gw = w - gx - 20;
    if (gw > 110) { const gh = Math.min(gw, h - ty - 10 + 96), gy = ty + 96, mx = 8 * 7, sc = Math.min(gw, gh) / Math.max(a * 7, b * 7);
      d.line(gx, gy, gx + a * 7 * sc, gy, C.faint); d.line(gx, gy, gx, gy - b * 7 * sc, C.faint); d.line(gx, gy, gx + a * 7 * sc, gy - b * 7 * sc, k.alpha(C.violet, .6), 1.5);
      for (let i = 1; i <= 7; i++) d.circle(gx + a * i * sc, gy - b * i * sc, i === s ? 6 : 3.5, i === s ? C.violet : k.alpha(C.violet, .5)); void mx;
      d.text("A", gx + a * 7 * sc, gy + 14, { font: `12px ${F.mono}`, color: C.cyan, align: "right" }); d.text("B", gx - 6, gy - b * 7 * sc, { font: `12px ${F.mono}`, color: C.pink, align: "right" }); }
    const g = gcd(a, b);
    k.setRO(`<div><h2>Ratio</h2><div class="ro-big" style="margin-top:8px"><span class="c2">${a}</span> : <span class="c3">${b}</span> = <span class="c2">${a * s}</span> : <span class="c3">${b * s}</span></div></div>
      <div class="ro-rows"><div class="row">${M("simplest form")} <span class="v">${a / g} : ${b / g}</span>${g > 1 ? `<span class="lbl">divide both by gcd = ${g}</span>` : ""}</div>
      <div class="row">${M("A per 1 B")} <span class="v">${k.fmt(a / b, 3)}</span><span class="lbl">unit rate: a ÷ b</span></div>
      <div class="row">${M("B per 1 A")} <span class="v">${k.fmt(b / a, 3)}</span></div>
      <div class="row">${M("part to whole")} ${FR(a, a + b, "c2")} and ${FR(b, a + b, "c3")}<span class="lbl">A is ${k.fmt(a / (a + b) * 100, 1)}% of the total</span></div></div>
      <div class="landmark"><div class="big">${M(`<span class="fr"><span>${a}</span><span>${b}</span></span> = <span class="fr"><span>${a * s}</span><span>${b * s}</span></span>`)}</div><div class="note">Equivalent ratios lie on one straight line through the origin. That line is a proportional relationship.</div></div>`);
  });
};

/* ---------- fraction operations ---------- */
L["fraction-ops"] = k => {
  const { C, F, M, gcd, lcm } = k; const c = k.canvas(); const d = c.d;
  let n1 = 2, d1 = 3, n2 = 1, d2 = 4, op = "+";
  const s1 = k.slider(`<span class="c2"><i>a</i></span>`, 1, 9, 1, n1, v => { n1 = Math.min(v, d1); if (v > d1) s1.set(n1); });   // a numerator never shows more than its denominator
  const t1 = k.slider(`<span class="c2">/</span>`, 1, 9, 1, d1, v => { d1 = v; if (n1 > d1) { n1 = d1; s1.set(n1); } });
  k.select("op", [["+", "+"], ["-", "−"], ["*", "×"], ["/", "÷"]], op, v => op = v);
  const s2 = k.slider(`<span class="c3"><i>c</i></span>`, 1, 9, 1, n2, v => { n2 = Math.min(v, d2); if (v > d2) s2.set(n2); });
  const t2 = k.slider(`<span class="c3">/</span>`, 1, 9, 1, d2, v => { d2 = v; if (n2 > d2) { n2 = d2; s2.set(n2); } });
  const fire = (sl, v) => { sl.el.value = v; sl.el.dispatchEvent(new Event("input")); };
  k.expose({ b: v => fire(t1, v), d: v => fire(t2, v) });   // chips: "a:2,b:3,op:0,c:1,d:4" (a/b ? c/d; op 0 + 1 − 2 × 3 ÷)
  void t1; void t2;
  const simp = (p, q) => { const g = gcd(p, q) || 1; return [p / g, q / g]; };
  const mixed = (p, q) => { if (q === 1) return String(p); const wh = Math.trunc(p / q), r = Math.abs(p % q); return wh && r ? `${wh} ${r}/${q}` : null; };
  k.loop(() => {
    { const g = (x, y) => y ? g(y, x % y) : Math.abs(x); let N, D; if (op === "+") { N = n1 * d2 + n2 * d1; D = d1 * d2; } else if (op === "-") { N = n1 * d2 - n2 * d1; D = d1 * d2; } else if (op === "*") { N = n1 * n2; D = d1 * d2; } else { N = n1 * d2; D = d1 * n2; } const G = g(N, D) || 1; k.publish("num", N / G); k.publish("den", D / G); k.publish("b", d1); k.publish("d", d2); k.publish("pair", n1 * 1000 + d1 * 100 + n2 * 10 + d2); }   // lesson figures + Your move goals
    c.begin(); const { w, h } = c;
    const bx = 60, bw = (w - 110) / 2, bh = 30;
    const bar = (y, parts, shaded, col, lineCol, label, units = 1, x = bx) => { for (let u = 0; u < units; u++) { const x0 = x + u * bw; d.rect(x0, y, bw - 4, bh, k.alpha(C.panel3, .8)); for (let i = 0; i < parts; i++) { const pw = (bw - 4) / parts, idx = u * parts + i; if (idx < shaded) d.rect(x0 + i * pw, y, pw, bh, k.alpha(col, .7)); if (i) d.line(x0 + i * pw, y, x0 + i * pw, y + bh, lineCol, 1.3); } d.rect(x0, y, bw - 4, bh, null, C.muted, 1.5); } d.text(label, x, y - 8, { font: `15px ${F.math}`, color: col }); };
    let rn, rd, ro;
    if (op === "+" || op === "-") {
      const Ld = lcm(d1, d2), m1 = Ld / d1, m2 = Ld / d2;
      rn = op === "+" ? n1 * m1 + n2 * m2 : n1 * m1 - n2 * m2; rd = Ld;
      bar(34, d1, n1, C.cyan, C.muted, `${n1}/${d1}`); bar(34, d2, n2, C.pink, C.muted, `${n2}/${d2}`, 1, bx + bw + 10);
      bar(110, Ld, n1 * m1, C.cyan, C.violet, `${n1}/${d1} = ${n1 * m1}/${Ld}`); bar(110, Ld, n2 * m2, C.pink, C.violet, `${n2}/${d2} = ${n2 * m2}/${Ld}`, 1, bx + bw + 10);
      const units = Math.max(1, Math.ceil(Math.abs(rn) / rd));
      bar(190, Ld, Math.abs(rn), C.amber, C.violet, `${op === "+" ? "sum" : "difference"} = ${rn < 0 ? "−" : ""}${Math.abs(rn)}/${Ld}`, units);
      d.text(`common denominator: lcm(${d1}, ${d2}) = ${Ld}`, bx, 262, { font: `14px ${F.sans}`, color: C.violet });
      const [sn, sd] = simp(rn, rd), mx = mixed(sn, sd);
      ro = `<div class="ro-rows"><div class="row">${M(`lcm(${d1}, ${d2}) = <span class="c4">${Ld}</span>`)}<span class="lbl">least common denominator</span></div>
        <div class="row">${FR(n1, d1, "c2")} = ${FR(`${n1}×${m1}`, `${d1}×${m1}`)} = ${FR(n1 * m1, Ld, "c2")}</div>
        <div class="row">${FR(n2, d2, "c3")} = ${FR(`${n2}×${m2}`, `${d2}×${m2}`)} = ${FR(n2 * m2, Ld, "c3")}</div>
        <div class="row">${FR(`${n1 * m1} ${op === "+" ? "+" : "−"} ${n2 * m2}`, Ld)} = ${FR(rn < 0 ? "−" + Math.abs(rn) : rn, Ld, "c1")}${sd !== rd ? ` = ${FR(sn < 0 ? "−" + Math.abs(sn) : sn, sd, "c1")}` : ""}${mx ? ` = ${M(mx.replace("-", "−"))}` : ""}<span class="lbl">add or subtract numerators only; the denominator names the piece size</span></div></div>`;
    } else if (op === "*") {
      rn = n1 * n2; rd = d1 * d2;
      const S = Math.min(w - 160, h - 70), ox = 60, oy = 36, cw = S / d1, chh = S / d2;
      for (let i = 0; i < d1; i++) for (let j = 0; j < d2; j++) { const inA = i < n1, inB = j < n2; d.rect(ox + i * cw, oy + j * chh, cw - 1, chh - 1, inA && inB ? k.alpha(C.amber, .75) : inA ? k.alpha(C.cyan, .3) : inB ? k.alpha(C.pink, .3) : k.alpha(C.panel3, .8)); }
      d.rect(ox, oy, S, S, null, C.muted, 2);
      d.line(ox, oy - 12, ox + n1 * cw, oy - 12, C.cyan, 3); d.text(`${n1}/${d1}`, ox + n1 * cw / 2, oy - 18, { font: `15px ${F.math}`, color: C.cyan, align: "center" });
      d.line(ox - 12, oy, ox - 12, oy + n2 * chh, C.pink, 3); d.text(`${n2}/${d2}`, ox - 18, oy + n2 * chh / 2, { font: `15px ${F.math}`, color: C.pink, align: "right", base: "middle" });
      d.text(`${n1 * n2} of ${d1 * d2} cells overlap`, ox + S + 16, oy + 20, { font: `15px ${F.sans}`, color: C.amber });
      const [sn, sd] = simp(rn, rd);
      ro = `<div class="ro-rows"><div class="row">${FR(n1, d1, "c2")} × ${FR(n2, d2, "c3")} = ${FR(`${n1}×${n2}`, `${d1}×${d2}`)} = ${FR(rn, rd, "c1")}${sd !== rd ? " = " + FR(sn, sd, "c1") : ""}<span class="lbl">multiply straight across; no common denominator needed</span></div>
        <div class="row"><span class="lbl">Taking ${n1}/${d1} of ${n2}/${d2} gives a smaller amount, because both factors are at most 1.</span></div></div>`;
    } else {
      rn = n1 * d2; rd = d1 * n2;
      const U = w - 120, ox = 60, y = 70, X = v => ox + U * v;
      d.rect(ox, y, U, 34, k.alpha(C.panel3, .8), C.muted); d.rect(ox, y, U * n1 / d1, 34, k.alpha(C.cyan, .55)); d.text(`${n1}/${d1}`, ox, y - 8, { font: `15px ${F.math}`, color: C.cyan });
      const q = (n1 / d1) / (n2 / d2), seg = n2 / d2; let x = 0, i = 0;
      while (x < n1 / d1 - 1e-9 && i < 40) { const e = Math.min(x + seg, n1 / d1); d.rect(X(x) + 1, y + 50, X(e) - X(x) - 2, 30, k.alpha(C.pink, e - x < seg - 1e-9 ? .25 : .6), C.pink); i++; x += seg; }
      d.text(`${n2}/${d2} fits into ${n1}/${d1} ${k.fmt(q, 3)} times`, ox, y + 110, { font: `16px ${F.sans}`, color: C.amber });
      for (let t = 0; t <= 1; t += 1 / 12) d.line(X(t), y + 34, X(t), y + 40, C.faint);
      const [sn, sd] = simp(rn, rd), mx = mixed(sn, sd);
      ro = `<div class="ro-rows"><div class="row">${FR(n1, d1, "c2")} ÷ ${FR(n2, d2, "c3")} = ${FR(n1, d1, "c2")} × ${FR(d2, n2, "c3")}<span class="lbl">dividing by a fraction is multiplying by its reciprocal</span></div>
        <div class="row">= ${FR(rn, rd, "c1")}${sd !== rd ? " = " + FR(sn, sd, "c1") : ""}${mx ? " = " + M(mx) : ""}</div>
        <div class="row"><span class="lbl">The pink segments measure how many copies of ${n2}/${d2} fit in ${n1}/${d1}; a paler segment is a partial copy.</span></div></div>`;
    }
    const [sn, sd] = simp(rn, rd);
    const opS = { "+": "+", "-": "−", "*": "×", "/": "÷" }[op];
    k.setRO(`<div><h2>Result</h2><div class="ro-big" style="margin-top:8px">${FR(n1, d1, "c2")} ${opS} ${FR(n2, d2, "c3")} = ${FR(sn < 0 ? "−" + Math.abs(sn) : sn, sd, "c1")}</div><div class="narr" style="margin-top:4px">≈ ${k.fmt(rn / rd, 4)}</div></div>${ro}`);
  });
};

/* ---------- decimal operations ---------- */
L["decimal-ops"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  let mode = "mul", x = .3, y = .4, ax = .47, ay = .38;
  const box = document.createElement("div"); box.style.display = "contents"; k.ctl.appendChild(box);
  function controls(){
    box.innerHTML = ""; const hold = k.ctl; k.ctl = box; // build into box
    if (mode === "mul") { k.slider(`<span class="c2"><i>x</i></span>`, 1, 10, 1, x * 10, v => x = v / 10, v => (v / 10).toFixed(1)); k.slider(`<span class="c3"><i>y</i></span>`, 1, 10, 1, y * 10, v => y = v / 10, v => (v / 10).toFixed(1)); }
    else { k.slider(`<span class="c2"><i>x</i></span>`, 0, 100, 1, Math.round(ax * 100), v => ax = v / 100, v => (v / 100).toFixed(2)); k.slider(`<span class="c3"><i>y</i></span>`, 0, 100, 1, Math.round(ay * 100), v => ay = v / 100, v => (v / 100).toFixed(2)); }
    k.ctl = hold;
  }
  k.modes([["mul", "Multiply"], ["add", "Add"]], mode, m => { mode = m; controls(); });
  controls();
  k.loop(() => {
    k.publish("result", mode === "mul" ? Math.round(x * y * 100) / 100 : Math.round((ax + ay) * 100) / 100); k.publish("pair", mode === "mul" ? Math.round(x * 10) * 100 + Math.round(y * 10) : Math.round(ax * 100) * 1000 + Math.round(ay * 100));   // lesson figures + Your move goals
    c.begin(); const { w, h } = c;
    const nar = mode === "mul" && w < 600, ox = mode === "mul" ? 76 : 30, oy = 72;   // clear of the mode buttons; on phones the words go under the grid
    const size = Math.min(nar ? h - 200 : h - 130, nar ? w - ox - 24 : (w - ox - 30) / (mode === "add" ? 2.1 : 1.6)), cell = size / 10;
    if (mode === "mul") {
      const X = Math.round(x * 10), Y = Math.round(y * 10);
      for (let i = 0; i < 10; i++) for (let j = 0; j < 10; j++) { const a = i < X, b = j < Y; d.rect(ox + i * cell, oy + (9 - j) * cell, cell - 1, cell - 1, a && b ? k.alpha(C.amber, .8) : a ? k.alpha(C.cyan, .3) : b ? k.alpha(C.pink, .3) : k.alpha(C.panel3, .8)); }
      d.rect(ox, oy, size, size, null, C.muted, 1.5);
      d.text(`x = ${x.toFixed(1)}`, ox + X * cell / 2, oy + size + 20, { font: `15px ${F.math}`, color: C.cyan, align: "center" });
      d.text(`y = ${y.toFixed(1)}`, ox - 10, oy + size - Y * cell / 2, { font: `15px ${F.math}`, color: C.pink, align: "right", base: "middle" });
      const tx = nar ? 12 : ox + size + 30, ty = nar ? oy + size + 16 : oy;
      d.text(`${X} tenths × ${Y} tenths`, tx, ty + 30, { font: `16px ${F.sans}`, color: C.text });
      d.text(`= ${X * Y} hundredths`, tx, ty + 56, { font: `16px ${F.sans}`, color: C.amber });
      d.text(`= ${(X * Y / 100).toFixed(2)}`, tx, ty + 82, { font: `22px ${F.mono}`, color: C.amber });
      k.setRO(`<div><h2>Product</h2><div class="ro-big" style="margin-top:8px"><span class="c2">${x.toFixed(1)}</span> × <span class="c3">${y.toFixed(1)}</span> = <span class="num c1">${(X * Y / 100).toFixed(2)}</span></div></div>
        <div class="ro-rows"><div class="row">${M(`${X} × ${Y} = ${X * Y}`)}<span class="lbl">multiply as whole numbers first</span></div>
        <div class="row">${M("1 + 1 = 2 decimal places")}<span class="lbl">count the digits after the point in both factors, then place the point that many from the right</span></div></div>
        <div class="landmark${X * Y < 10 ? " hit" : ""}"><div class="big">${M(X === 10 || Y === 10 ? "× 1 changes nothing" : "product &lt; each factor")}</div><div class="note">${X === 10 || Y === 10 ? "A full row or column is one whole." : `Multiplying by a number less than 1 gives a smaller result. The overlap is part of a part.`}${X * Y < 10 ? ` Here the answer needs a placeholder zero: 0.0${X * Y}.` : ""}</div></div>`);
    } else {
      const s = Math.round(ax * 100) + Math.round(ay * 100);
      for (let gdx = 0; gdx < 2; gdx++) { const gx = ox + gdx * (size + 30); for (let i = 0; i < 10; i++) for (let j = 0; j < 10; j++) { const idx = gdx * 100 + i * 10 + j; const col = idx < Math.round(ax * 100) ? k.alpha(C.cyan, .6) : idx < s ? k.alpha(C.pink, .6) : k.alpha(C.panel3, .8); d.rect(gx + i * cell, oy + j * cell, cell - 1, cell - 1, col); } d.rect(gx, oy, size, size, null, C.muted, 1.5); d.text(gdx ? "second whole" : "first whole", gx, oy - 10, { font: `12px ${F.ui}`, color: C.faint }); }
      const A = ax.toFixed(2), B = ay.toFixed(2), S = (s / 100).toFixed(2);
      k.setRO(`<div><h2>Sum</h2><div class="ro-big" style="margin-top:8px"><span class="c2">${A}</span> + <span class="c3">${B}</span> = <span class="num c1">${S}</span></div></div>
        <div class="display" style="font-family:var(--mono);font-size:22px;line-height:1.5;text-align:right;white-space:pre">  <span class="c2">${A.padStart(5)}</span>\n+ <span class="c3">${B.padStart(5)}</span>\n<span style="border-top:1px solid var(--muted)">  <span class="c1">${S.padStart(5)}</span></span></div>
        <div class="landmark"><div class="big">${M("line up the decimal points")}</div><div class="note">Then tenths add to tenths and hundredths to hundredths. ${s >= 100 ? "Crossing 1.00 carries into the ones place." : ""}</div></div>`);
    }
  });
};

/* ---------- percents ---------- */
L["percents"] = k => {
  const { C, F, M, gcd } = k; const c = k.canvas(); const d = c.d;
  let p = 35, N = 80, dp = 35;
  k.slider(`<span class="c1"><i>p</i> %</span>`, 0, 100, 1, p, v => p = v);
  k.number(`<span class="c3">whole</span>`, 1, 1000000, N, v => N = v);
  k.loop(dt => {
    k.publish("part", p * N / 100);   // lesson figures + Your move goals
    dp = lerp(dp, p, Math.min(1, dt * 10));
    c.begin(); const { w, h } = c;
    const size = Math.min(h - 130, w * .45), cell = size / 10, ox = 40, oy = 36;
    for (let r = 0; r < 10; r++) for (let q = 0; q < 10; q++) { const idx = r * 10 + q; d.rect(ox + q * cell, oy + r * cell, cell - 1, cell - 1, idx < Math.round(dp) ? k.alpha(C.amber, .7) : k.alpha(C.panel3, .8)); }
    d.rect(ox, oy, size, size, null, C.muted, 1.5);
    d.text(`${p} of 100 squares`, ox, oy + size + 22, { font: `14px ${F.sans}`, color: C.amber });
    const bx = ox + size + 40, bw = w - bx - 30;
    if (bw > 140) {
      const by = oy + 40;
      d.rect(bx, by, bw, 36, k.alpha(C.pink, .2), C.pink, 1.5); d.rect(bx, by, bw * dp / 100, 36, k.alpha(C.cyan, .6));
      d.text(`whole = ${N.toLocaleString("en-US")}`, bx + bw, by - 10, { font: `14px ${F.mono}`, color: C.pink, align: "right" });
      d.text(`part = ${k.fmt(N * p / 100, 2)}`, bx, by + 58, { font: `600 16px ${F.mono}`, color: C.cyan });
      for (let i = 0; i <= 10; i++) { d.line(bx + bw * i / 10, by + 36, bx + bw * i / 10, by + 42, C.faint); if (i % 5 === 0) d.text(i * 10 + "%", bx + bw * i / 10, by + 90, { font: `11px ${F.mono}`, color: C.faint, align: "center" }); }
    }
    const g = gcd(p, 100) || 1, part = N * p / 100;
    k.setRO(`<div><h2>Percent</h2><div class="ro-big" style="margin-top:8px"><span class="c1">${p}%</span> of <span class="c3">${N.toLocaleString("en-US")}</span> = <span class="num c2">${k.fmt(part, 2)}</span></div></div>
      <div class="ro-rows"><div class="row">${M(`${p}% = ${FR(p, 100)}${g > 1 && p ? " = " + FR(p / g, 100 / g) : ""} = ${(p / 100).toFixed(2)}`)}<span class="lbl">per cent means per hundred</span></div>
      <div class="row">${M(`part = ${(p / 100).toFixed(2)} × ${N.toLocaleString("en-US")}`)}<span class="lbl">find the part</span></div>
      <div class="row">${M(`percent = ${FR("part", "whole")} × 100`)}<span class="lbl">${k.fmt(part, 2)} ÷ ${N.toLocaleString("en-US")} × 100 = ${p}%</span></div>
      <div class="row">${M(`whole = part ÷ ${(p / 100).toFixed(2)}`)}<span class="lbl">find the whole${p ? `: ${k.fmt(part, 2)} ÷ ${(p / 100).toFixed(2)} = ${N.toLocaleString("en-US")}` : ""}</span></div></div>
      <div class="landmark${[25, 50, 75, 10, 20].includes(p) ? " hit" : ""}"><div class="big">${M({ 25: "25% = ¼", 50: "50% = ½", 75: "75% = ¾", 10: "10% = 1/10", 20: "20% = 1/5" }[p] || "benchmarks: 10%, 25%, 50%")}</div><div class="note">${p === 10 ? "Move the decimal point one place left." : "Benchmark percents make mental estimates fast: 10% of a price is one-tenth of it."}</div></div>`);
  });
};

/* ---------- scientific notation: log ruler ---------- */
L["sci-notation"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  const OBJ = [[1.7e-15, "proton"], [1.06e-10, "hydrogen atom"], [2e-9, "DNA helix width"], [1e-7, "flu virus"], [7.5e-6, "red blood cell"], [7e-5, "human hair width"], [5e-4, "grain of sand"], [5e-3, "ant"], [1.7, "person"], [25, "blue whale"], [330, "Eiffel Tower"], [8849, "Mount Everest"], [1.2742e7, "Earth (diameter)"], [3.844e8, "Earth to Moon"], [1.3927e9, "Sun (diameter)"], [1.496e11, "Earth to Sun"], [9.461e15, "one light-year"], [9.5e20, "Milky Way (diameter)"], [8.8e26, "observable universe"]];
  let L10 = Math.log10(1.7), dL = L10;
  const sl = k.slider("size (m)", -15, 27, 0.01, L10, v => L10 = v, v => { const e = Math.floor(v); return (10 ** (v - e)).toFixed(2) + "e" + e; });
  k.select("Jump to", OBJ.map(([v, n], i) => [i, n]), 8, i => { L10 = Math.log10(OBJ[i][0]); sl.set(L10); });
  const wrap = document.createElement("div"); wrap.className = "ctl"; wrap.innerHTML = `<label for="sn-in">Convert</label><input type="text" id="sn-in" placeholder="e.g. 0.00042" style="width:130px"><button type="button" class="btn-s" id="sn-go">Go</button>`; k.ctl.appendChild(wrap);
  const go = () => { const v = parseFloat(wrap.querySelector("input").value.replace(/,/g, "").replace(/×\s*10\^?/, "e")); if (v > 0 && isFinite(v)) { L10 = Math.max(-15, Math.min(27, Math.log10(v))); sl.set(L10); } };
  wrap.querySelector("#sn-go").onclick = go; wrap.querySelector("input").addEventListener("keydown", e => { if (e.key === "Enter") go(); });
  k.hint("Drag the slider across 42 powers of ten");
  const std = (v, e) => { if (e >= 0) return Number(v.toPrecision(3)).toLocaleString("en-US", { maximumFractionDigits: 2 }); return Number(v.toPrecision(3)).toFixed(Math.min(20, -e + 2)).replace(/0+$/, "").replace(/\.$/, ""); };
  k.loop(dt => {
    k.publish("exp", Math.floor(L10 + 1e-9));   // lesson figures + Your move goals
    dL = lerp(dL, L10, Math.min(1, dt * 8));
    c.begin(); const { w, h } = c;
    const span = w < 600 ? 5 : 8, x0 = 20, x1 = w - 20, X = e => x0 + (x1 - x0) * ((e - dL) / span + .5);
    const y = h * .5;
    d.line(x0, y, x1, y, C.muted, 2);
    for (let e = Math.floor(dL - span / 2) - 1; e <= dL + span / 2 + 1; e++) {
      d.line(X(e), y - 12, X(e), y + 12, C.muted, 1.5);
      for (let m = 2; m < 10; m++) d.line(X(e + Math.log10(m)), y - 5, X(e + Math.log10(m)), y + 5, C.faint, 1);
      const wd = d.powW("10", String(e).replace("-", "−"), 15, F.mono); if (X(e) - wd / 2 >= 2 && X(e) + wd / 2 <= w - 2) d.pow("10", String(e).replace("-", "−"), X(e) - wd / 2, y + 34, { size: 15, family: F.mono, color: C.muted, ecolor: C.pink });
    }
    // objects
    let slot = 0;
    OBJ.forEach(([v, n]) => { const e = Math.log10(v), x = X(e); if (x < x0 - 10 || x > x1 + 10) return; const up = slot++ % 2 === 0; const yy = up ? y - 50 - (slot % 4 > 1 ? 34 : 0) : y + 70 + (slot % 4 > 1 ? 30 : 0);
      d.line(x, y, x, yy + (up ? 8 : -16), k.alpha(C.violet, .5), 1); d.circle(x, y, 4, C.violet); d.text(n, x, yy, { font: `13px ${F.sans}`, color: C.text, align: "center" }); });
    const mx = X(dL); d.line(mx, y - 120, mx, y + 120, k.alpha(C.amber, .8), 2); d.circle(mx, y, 7, C.amber);
    const e = Math.floor(L10 + 1e-12), cf = 10 ** (L10 - e), val = 10 ** L10;
    const near = OBJ.reduce((b, o) => Math.abs(Math.log10(o[0]) - L10) < Math.abs(Math.log10(b[0]) - L10) ? o : b);
    const ratio = val / near[0];
    d.text(`${cf.toFixed(2)} × 10`, w / 2 - 10, 44, { font: `30px ${F.math}`, color: C.cyan, align: "right" });
    d.text(String(e).replace("-", "−"), w / 2 - 8, 30, { font: `20px ${F.math}`, color: C.pink });
    d.text("m", w / 2 + 30 + String(e).length * 6, 44, { font: `24px ${F.math}`, color: C.muted });
    k.setRO(`<div><h2>Scientific notation</h2><div class="ro-big" style="margin-top:8px"><span class="c2">${cf.toFixed(2)}</span> × 10<sup class="c3">${String(e).replace("-", "−")}</sup> m</div></div>
      <div class="ro-rows"><div class="row">${M("standard form")} <span class="v" style="word-break:break-all;white-space:normal">${std(val, e)} m</span></div>
      <div class="row">${M(`1 ≤ <span class="c2"><i>c</i></span> &lt; 10`)}<span class="lbl">the coefficient has exactly one nonzero digit before the point</span></div>
      <div class="row">${M(`<span class="c3"><i>n</i></span> = ${String(e).replace("-", "−")}`)}<span class="lbl">${e >= 0 ? `move the point ${e} place${e === 1 ? "" : "s"} right to get standard form` : `move the point ${-e} place${e === -1 ? "" : "s"} left`}</span></div></div>
      <div class="landmark"><div class="big">nearest: ${near[1]}</div><div class="note">${near[1]} ≈ ${(near[0] / 10 ** Math.floor(Math.log10(near[0]))).toFixed(2)} × 10<sup>${Math.floor(Math.log10(near[0]))}</sup> m. ${Math.abs(Math.log10(ratio)) < .05 ? "You are right on it." : `Your value is about ${ratio >= 1 ? k.fmt(ratio, 2) + " times bigger" : k.fmt(1 / ratio, 2) + " times smaller"}.`}</div></div>
      <p class="narr">Each tick to the right is ten times the one before. Equal steps on this ruler are equal ratios.</p>`);
  });
};

/* ---------- proportions: double number line ---------- */
L["proportions"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  const SC = { recipe: ["cups of flour", "cookies", 3, 36, 5], map: ["cm on map", "km on ground", 2, 15, 7], fuel: ["gallons", "miles", 4, 118, 11], wage: ["hours", "dollars", 8, 148, 30] };
  let sc = "recipe", [ua, ub, a, b, cq] = SC.recipe, dx = 0;
  const na = k.number(`<span class="c2">a</span>`, 1, 1000, a, v => a = v, "76px");
  const nb = k.number(`<span class="c2">b</span>`, 1, 10000, b, v => b = v, "80px");
  const sl = k.slider(`<span class="c1">c</span>`, 1, 40, 1, cq, v => cq = v);
  k.select("Scenario", [["recipe", "Recipe"], ["map", "Map scale"], ["fuel", "Fuel economy"], ["wage", "Hourly pay"]], sc, v => { sc = v; [ua, ub, a, b, cq] = SC[v]; na.set(a); nb.set(b); sl.set(cq); });
  k.loop(dt => {
    k.publish("d", Math.round(b * cq / a * 100) / 100);   // lesson figures + Your move goals
    const x = b * cq / a; dx = lerp(dx, x, Math.min(1, dt * 8));
    c.begin(); const { w, h } = c;
    const top = Math.max(a, cq) * 1.15, x0 = 60, x1 = w - 40, X = v => x0 + (x1 - x0) * v / top;
    const y1 = h * .36, y2 = h * .62;
    d.line(x0, y1, x1, y1, C.muted, 2); d.line(x0, y2, x1, y2, C.muted, 2);
    d.text(ua.toUpperCase(), x0, y1 - 44, { font: `600 12px ${F.ui}`, color: C.cyan }); d.text(ub.toUpperCase(), x0, y2 + 58, { font: `600 12px ${F.ui}`, color: C.cyan });
    const unit = 1; void unit;
    // ticks at multiples of a/... use unit rate ticks
    const nT = Math.floor(top / a * 4); for (let i = 0; i <= nT; i++) { const v = a * i / 4; if (v > top) break; d.line(X(v), y1 - 5, X(v), y1 + 5, C.faint); d.line(X(v), y2 - 5, X(v), y2 + 5, C.faint); }
    const pair = (v1, v2, col, lab1, lab2) => { d.line(X(v1), y1, X(v1), y2, k.alpha(col, .5), 1.5, [4, 4]); d.circle(X(v1), y1, 7, col); d.circle(X(v1), y2, 7, col); d.text(lab1, X(v1), y1 - 16, { font: `600 16px ${F.mono}`, color: col, align: "center" }); d.text(lab2, X(v1), y2 + 30, { font: `600 16px ${F.mono}`, color: col, align: "center" }); };
    d.text("0", X(0), y1 - 16, { font: `13px ${F.mono}`, color: C.faint, align: "center" }); d.text("0", X(0), y2 + 30, { font: `13px ${F.mono}`, color: C.faint, align: "center" });
    pair(a, b, C.cyan, String(a), k.fmt(b, 2));
    pair(cq * dx / (x || 1), dx, C.amber, String(cq), "x = " + k.fmt(x, 2));
    k.setRO(`<div><h2>Unknown</h2><div class="ro-big" style="margin-top:8px"><span class="c1"><i>x</i></span> = <span class="num c1">${k.fmt(x, 3)}</span> <span style="font-size:.55em;color:var(--muted)">${ub}</span></div></div>
      <div class="ro-rows"><div class="row">${FR(`<span class="c2">${a}</span>`, `<span class="c2">${b}</span>`)} = ${FR(`<span class="c1">${cq}</span>`, `<span class="c1"><i>x</i></span>`)}<span class="lbl">${a} ${ua} go with ${b} ${ub}; ${cq} ${ua} go with x</span></div>
      <div class="row">${M(`${a} · <i>x</i> = ${b} · ${cq}`)}<span class="lbl">cross-multiply (both sides × ${a}x)</span></div>
      <div class="row">${M(`<i>x</i> = ${b * cq} ÷ ${a} = ${k.fmt(x, 3)}`)}</div>
      <div class="row">${M(`unit rate = ${b} ÷ ${a} = ${k.fmt(b / a, 3)}`)}<span class="lbl">${ub} per 1 ${ua.replace(/s$/, "")}; then × ${cq} gives the same x</span></div></div>
      <div class="landmark"><div class="big">${M(`<i>y</i> = ${k.fmt(b / a, 3)} <i>x</i>`)}</div><div class="note">Both number lines stretch by the same factor. Any pair lined up vertically is in the same ratio.</div></div>`);
  });
};

/* ---------- averages: draggable dot plot ---------- */
L["averages"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  const START = [3, 5, 5, 6, 8, 9, 12, 5, 7];
  let data = START.slice(), drag = -1, dm = 0, first = null;
  k.button("Add point", () => { if (data.length < 30) data.push(Math.floor(Math.random() * 15) + 2); }, "btn ghost");
  k.button("Remove", () => { if (data.length > 1) data.pop(); }, "btn ghost");
  k.button("Add outlier (20)", () => { if (data.length < 30) data.push(20); }, "btn ghost");
  k.button("Reset", () => { data = START.slice(); }, "btn ghost");
  k.hint("Drag any dot along the line");
  let geo = { X: v => v, y: 0, r: 8, x0: 0, x1: 1 };
  const layout = () => { const st = {}; return data.map(v => { st[v] = (st[v] || 0) + 1; return st[v] - 1; }); };
  c.cv.addEventListener("pointerdown", e => { const p = c.xy(e), lv = layout(); let best = -1, bd = 1e9; data.forEach((v, i) => { const x = geo.X(v), y = geo.y - 14 - lv[i] * geo.r * 2.2; const dd = Math.hypot(p.x - x, p.y - y); if (dd < bd) { bd = dd; best = i; } }); if (bd < geo.r * 2) { drag = best; c.cv.setPointerCapture(e.pointerId); } });
  c.cv.addEventListener("pointermove", e => { if (drag < 0) return; const p = c.xy(e); const v = Math.round((p.x - geo.x0) / (geo.x1 - geo.x0) * 20); data[drag] = Math.max(0, Math.min(20, v)); });
  c.cv.addEventListener("pointerup", () => drag = -1);
  c.cv.style.cursor = "pointer";
  const stats = arr => { const s = arr.slice().sort((a, b) => a - b), n = s.length, sum = s.reduce((a, b) => a + b, 0), mean = sum / n, med = n % 2 ? s[(n - 1) / 2] : (s[n / 2 - 1] + s[n / 2]) / 2; const cnt = {}; s.forEach(v => cnt[v] = (cnt[v] || 0) + 1); const mx = Math.max(...Object.values(cnt)); const modes = mx > 1 ? Object.keys(cnt).filter(k2 => cnt[k2] === mx).map(Number) : []; return { s, n, sum, mean, med, modes, mx, range: s[n - 1] - s[0] }; };
  first = stats(START);
  k.loop(dt => {
    { const s = data.slice().sort((x, y) => x - y), L = s.length; k.publish("count", L); k.publish("mean", L ? Math.round(s.reduce((u, v) => u + v, 0) / L * 100) / 100 : null); k.publish("median", !L ? null : L % 2 ? s[(L - 1) / 2] : (s[L / 2 - 1] + s[L / 2]) / 2); }   // lesson figures + Your move goals
    const S = stats(data); dm = lerp(dm || S.mean, S.mean, Math.min(1, dt * 8));
    c.begin(); const { w, h } = c;
    const x0 = 40, x1 = w - 40, y = h - 90, X = v => x0 + (x1 - x0) * v / 20, lv = layout();
    const r = Math.min(11, (y - 60) / 2.2 / Math.max(4, Math.max(...lv) + 1));
    geo = { X, y, r, x0, x1 };
    d.line(x0, y, x1, y, C.muted, 2);
    for (let v = 0; v <= 20; v++) { d.line(X(v), y - 4, X(v), y + 4, C.faint); if (v % 2 === 0 || w > 600) d.text(String(v), X(v), y + 20, { font: `12px ${F.mono}`, color: C.faint, align: "center" }); }
    data.forEach((v, i) => { const isMode = S.modes.includes(v); d.circle(X(v), y - 14 - lv[i] * r * 2.2, r, isMode ? C.pink : k.alpha(C.text, .75), i === drag ? C.amber : null, 2); });
    // median
    d.line(X(S.med), 30, X(S.med), y, C.cyan, 2, [6, 4]); d.text(`median ${k.fmt(S.med, 2)}`, X(S.med), 24, { font: `600 13px ${F.mono}`, color: C.cyan, align: "center" });
    // fulcrum
    const fx = X(dm), g = c.g; g.fillStyle = C.amber; g.beginPath(); g.moveTo(fx, y + 30); g.lineTo(fx - 14, y + 54); g.lineTo(fx + 14, y + 54); g.closePath(); g.fill();
    d.text(`mean ${k.fmt(S.mean, 2)}`, fx, y + 72, { font: `600 13px ${F.mono}`, color: C.amber, align: "center" });
    const shifted = Math.abs(S.mean - first.mean) > .01 || Math.abs(S.med - first.med) > .01;
    k.setRO(`<div><h2>Centre of the data</h2><div class="ro-big" style="margin-top:8px"><span class="m c1"><i>x̄</i></span> = <span class="num c1">${k.fmt(S.mean, 3)}</span></div></div>
      <div class="ro-rows"><div class="row">${M(`<i>x̄</i> = <span class="fr"><span>Σ<i>x</i></span><span><i>n</i></span></span> = <span class="fr"><span>${S.sum}</span><span>${S.n}</span></span>`)}<span class="lbl">mean: add the values, divide by how many; the balance point</span></div>
      <div class="row"><span class="m c2">median</span> <span class="v c2">${k.fmt(S.med, 2)}</span><span class="lbl">${S.n % 2 ? `middle value of ${S.n} sorted values (position ${(S.n + 1) / 2})` : `average of the two middle values (positions ${S.n / 2} and ${S.n / 2 + 1})`}</span></div>
      <div class="row"><span class="m c3">mode</span> <span class="v c3">${S.modes.length ? S.modes.join(", ") : "none"}</span><span class="lbl">${S.modes.length ? `most frequent, appearing ${S.mx} times` : "every value appears once"}</span></div>
      <div class="row">${M("range")} <span class="v">${S.range}</span><span class="lbl">largest minus smallest</span></div></div>
      <p class="narr" style="font-family:var(--mono);font-size:12.5px">sorted: ${S.s.join(", ")}</p>
      <div class="landmark${Math.abs(S.mean - S.med) > 1.5 ? " hit" : ""}"><div class="big">${M(`mean − median = ${k.fmt(S.mean - S.med, 2)}`)}</div><div class="note">${Math.abs(S.mean - S.med) > 1.5 ? "A big gap means the data is skewed. The mean is pulled toward the long tail; the median resists it." : shifted ? `Started at mean ${k.fmt(first.mean, 2)}, median ${first.med}.` : "Drag a dot far right, or add the outlier, and watch which measure moves more."}</div></div>`);
  });
};

/* ---------- percent applications: interest ---------- */
L["percent-apps"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  let P = 1000, r = 5, t = 10, n = 12;
  k.slider(`<span class="c1"><i>P</i></span>`, 100, 10000, 100, P, v => P = v, v => "$" + v.toLocaleString("en-US"));
  k.slider(`<span class="c4"><i>r</i></span>`, 0, 15, 0.25, r, v => r = v, v => v.toFixed(2) + "%");
  k.slider(`<i>t</i>`, 0, 40, 1, t, v => t = v, v => v + " yr");
  k.select("Compounded", [[1, "yearly"], [4, "quarterly"], [12, "monthly"], [365, "daily"]], n, v => n = +v);
  const money = v => "$" + v.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  k.loop(() => {
    k.publish("amount", Math.round(P * Math.pow(1 + r / 100 / n, n * t) * 100) / 100); k.publish("interest", Math.round((P * Math.pow(1 + r / 100 / n, n * t) - P) * 100) / 100); k.publish("simple", Math.round(P * r / 100 * t * 100) / 100);   // lesson figures + Your move goals
    c.begin(); const { w, h } = c;
    const R = r / 100, simple = y => P * (1 + R * y), comp = y => P * Math.pow(1 + R / n, n * y);
    const x0 = 70, x1 = w - 24, y0 = h - 40, y1 = 30, ymax = Math.max(comp(40), P * 1.2);
    const X = y => x0 + (x1 - x0) * y / 40, Y = v => y0 - (y0 - y1) * v / ymax;
    for (let i = 0; i <= 4; i++) { const v = ymax * i / 4; d.line(x0, Y(v), x1, Y(v), k.alpha(C.line2, .5)); d.text("$" + Math.round(v).toLocaleString("en-US"), x0 - 8, Y(v), { font: `11px ${F.mono}`, color: C.faint, align: "right", base: "middle" }); }
    for (let yv = 0; yv <= 40; yv += 5) d.text(String(yv), X(yv), y0 + 18, { font: `11px ${F.mono}`, color: C.faint, align: "center" });
    d.text("years", x1, y0 + 34, { font: `11px ${F.sans}`, color: C.faint, align: "right" });
    d.line(x0, Y(P), x1, Y(P), C.amber, 1.5, [6, 4]);
    const plot = (f, col) => { const g = c.g; g.save(); g.strokeStyle = col; g.lineWidth = 2.5; g.beginPath(); for (let i = 0; i <= 200; i++) { const yv = 40 * i / 200; i ? g.lineTo(X(yv), Y(f(yv))) : g.moveTo(X(yv), Y(f(yv))); } g.stroke(); g.restore(); };
    // area between
    const g = c.g; g.save(); g.fillStyle = k.alpha(C.pink, .12); g.beginPath(); for (let i = 0; i <= 100; i++) { const yv = t * i / 100; i ? g.lineTo(X(yv), Y(comp(yv))) : g.moveTo(X(yv), Y(comp(yv))); } for (let i = 100; i >= 0; i--) { const yv = t * i / 100; g.lineTo(X(yv), Y(simple(yv))); } g.closePath(); g.fill(); g.restore();
    plot(simple, C.cyan); plot(comp, C.pink);
    d.line(X(t), y1, X(t), y0, k.alpha(C.text, .35), 1, [3, 3]);
    d.circle(X(t), Y(simple(t)), 6, C.cyan); d.circle(X(t), Y(comp(t)), 6, C.pink);
    d.text("compound", X(40) - 4, Y(comp(40)) - 10, { font: `600 12px ${F.ui}`, color: C.pink, align: "right" });
    d.text("simple", X(40) - 4, Y(simple(40)) + 18, { font: `600 12px ${F.ui}`, color: C.cyan, align: "right" });
    const As = simple(t), Ac = comp(t), apy = Math.pow(1 + R / n, n) - 1, dbl = R > 0 ? Math.log(2) / (n * Math.log(1 + R / n)) : Infinity;
    k.setRO(`<div><h2>After ${t} years</h2><div class="ro-big" style="margin-top:8px;font-size:24px"><span class="c3">${money(Ac)}</span></div><div class="narr">compound, vs <span class="c2">${money(As)}</span> simple</div></div>
      <div class="ro-rows"><div class="row">${M(`<i>I</i> = <span class="c1"><i>P</i></span><span class="c4"><i>r</i></span><i>t</i>`)} = <span class="v c2">${money(P * R * t)}</span><span class="lbl">simple interest: the same ${money(P * R)} every year</span></div>
      <div class="row">${M(`<i>A</i> = <span class="c1"><i>P</i></span>(1 + <span class="c4"><i>r</i></span>/<i>n</i>)<sup><i>nt</i></sup>`)} = <span class="v c3">${money(Ac)}</span><span class="lbl">compound: interest earns interest, ${n} time${n > 1 ? "s" : ""} a year</span></div>
      <div class="row">${M("APY")} <span class="v">${(apy * 100).toFixed(3)}%</span><span class="lbl">the effective yearly percent increase</span></div>
      <div class="row">${M("percent change")} <span class="v">+${k.fmt((Ac - P) / P * 100, 2)}%</span><span class="lbl">(new − old) ÷ old × 100</span></div></div>
      <div class="landmark"><div class="big">doubles in ≈ ${isFinite(dbl) ? k.fmt(dbl, 1) : "∞"} years</div><div class="note">${R > 0 ? `Rule of 72: 72 ÷ ${r} ≈ ${k.fmt(72 / r, 1)} years, a quick estimate.` : "At 0% nothing grows."} The shaded gap is interest on interest.</div></div>`);
  });
};

/* ---------- real numbers: nested sets ---------- */
L["real-numbers"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  const EX = [
    ["7", "N"], ["1", "N"], ["42", "N"], ["√9", "N", "√9 = 3"], ["0", "W"], ["−3", "Z"], ["−12", "Z"], ["3/4", "Q"], ["−2.5", "Q"], ["0.333…", "Q", "= 1/3, repeating"], ["0.125", "Q", "= 1/8, terminating"],
    ["√2", "I"], ["π", "I"], ["e", "I"], ["−√5", "I"], ["0.101001…", "I", "0.1010010001…: the runs of zeros keep growing, so it never repeats"]
  ];
  let sel = 0, custom = null, pulse = 0; const hits = [];
  const wrap = document.createElement("div"); wrap.className = "ctl grow"; wrap.innerHTML = `<label for="rn-in">Classify</label><input type="text" id="rn-in" placeholder="try −8, 2/3, 0.75, √10, π" style="flex:1;min-width:120px"><button type="button" class="btn-s" id="rn-go">Place it</button>`; k.ctl.appendChild(wrap);
  const inp = wrap.querySelector("input");
  function classify(s){
    s = s.trim().replace(/−/g, "-").replace(/\s/g, "").toLowerCase(); if (!s) return null;
    let m;
    const intK = v => v > 0 ? "N" : v === 0 ? "W" : "Z";
    if (s === "pi" || s === "π" || s === "-pi" || s === "-π") return ["I", "π is irrational (proved by Lambert, 1761)."];
    if (s === "e" || s === "-e") return ["I", "e ≈ 2.71828… is irrational."];
    if ((m = s.match(/^(-?)(?:√|sqrt)\(?(\d+)\)?$/))) { const n = +m[2], r = Math.sqrt(n); if (Number.isInteger(r)) return [m[1] ? (r ? "Z" : "W") : intK(r), `√${n} = ${r}, a perfect square.`]; return ["I", `${n} is not a perfect square, so √${n} is irrational.`]; }
    if ((m = s.match(/^(-?\d+)\/(-?\d+)$/))) { const a = +m[1], b = +m[2]; if (b === 0) return ["X", "Division by zero is undefined, so this is not a real number."]; if (a % b === 0) return [intK(a / b), `${a}/${b} = ${a / b}, an integer.`]; return ["Q", `A ratio of two integers, so rational. It equals ${k.fmt(a / b, 6)}${String(a / b).length > 12 ? "…" : ""}.`]; }
    if (/^-?\d+$/.test(s)) { const v = +s; return [intK(v), v > 0 ? "A counting number." : v === 0 ? "Zero is a whole number but not a counting number (in this convention)." : "A negative integer."]; }
    if (/^-?\d*\.\d+$/.test(s)) { const v = +s; if (Number.isInteger(v)) return [intK(v), "Equal to an integer."]; const dp = s.split(".")[1].length; return ["Q", `A terminating decimal: ${s} = ${Math.round(Math.abs(v) * 10 ** dp) * Math.sign(v)}/${10 ** dp}, so rational.`]; }
    return ["X", "Enter an integer, a decimal, a fraction like 2/3, a root like √10, π or e."];
  }
  const place = () => { const r = classify(inp.value); if (r) { custom = { label: inp.value.trim(), set: r[0], why: r[1] }; sel = -1; pulse = 0; } };
  wrap.querySelector("#rn-go").onclick = place; inp.addEventListener("keydown", e => { if (e.key === "Enter") place(); });
  c.cv.addEventListener("pointerdown", e => { const p = c.xy(e); hits.forEach(hh => { if (Math.abs(p.x - hh.x) < hh.w / 2 + 6 && Math.abs(p.y - hh.y) < 14) { sel = hh.i; custom = null; } }); });
  k.expose({ pick: v => { sel = Math.max(0, Math.min(EX.length - 1, Math.round(+v) || 0)); custom = null; pulse = 0; } });   // chips: "pick:12" = EX[12]
  k.hint("Click any number to see which sets hold it");
  k.loop(dt => {
    k.publish("pick", sel); k.publish("set", sel >= 0 ? "NWZQI".indexOf(EX[sel][1]) : -1);   // lesson figures + Your move goals
    pulse += dt; c.begin(); const { w, h } = c;
    const ox = 16, oy = 16, W = w - 32, H = h - 32;
    const rq = { x: ox + 14, y: oy + 34, w: W * .64 - 14, h: H - 48 };
    const rz = { x: rq.x + 14, y: rq.y + 34, w: rq.w * .7, h: rq.h - 48 };
    const rw = { x: rz.x + 14, y: rz.y + 34, w: rz.w * .72, h: rz.h - 48 };
    const rnn = { x: rw.x + 14, y: rw.y + 34, w: rw.w - 28, h: rw.h - 48 };
    const ri = { x: ox + W * .64 + 14, y: oy + 34, w: W * .36 - 28, h: H - 48 };
    const box = (r, col, name, a = .07) => { d.rr(r.x, r.y, r.w, r.h, 10, k.alpha(col, a), col, 1.5); d.text(name, r.x + 12, r.y + 22, { font: `600 13px ${F.ui}`, color: col }); };
    d.rr(ox, oy, W, H, 12, k.alpha(C.text, .03), C.muted, 1.5); d.text("ℝ  REAL NUMBERS", ox + 12, oy + 22, { font: `600 13px ${F.ui}`, color: C.muted });
    box(rq, C.pink, "ℚ  RATIONAL"); box(rz, C.cyan, "ℤ  INTEGERS"); box(rw, C.green, "𝕎  WHOLE"); box(rnn, C.amber, "ℕ  NATURAL"); box(ri, C.violet, "IRRATIONAL");
    const areas = { N: rnn, W: rw, Z: rz, Q: rq, I: ri };
    const spot = (r, set, i, total) => { // free zone inside r excluding child
      const child = { Q: rz, Z: rw, W: rnn }[set];
      const zone = child ? { x: child.x + child.w + 6, y: r.y + 30, w: r.x + r.w - child.x - child.w - 12, h: r.h - 40 } : { x: r.x + 8, y: r.y + 32, w: r.w - 16, h: r.h - 40 };
      if (zone.w < 50) { zone.x = r.x + 8; zone.w = r.w - 16; zone.y = child ? child.y + child.h + 4 : zone.y; zone.h = r.y + r.h - zone.y - 4; }
      const cols = Math.max(1, Math.floor(zone.w / (w < 600 ? 56 : 90))), row = Math.floor(i / cols), col = i % cols;
      return { x: zone.x + (col + .5) * zone.w / cols, y: zone.y + 12 + row * Math.max(17, Math.min(30, zone.h / Math.ceil(total / cols))) };
    };
    hits.length = 0;
    const bySet = {}; EX.forEach(e => (bySet[e[1]] = bySet[e[1]] || []).push(e));
    EX.forEach((e, i) => { const list = bySet[e[1]], j = list.indexOf(e); const p = spot(areas[e[1]], e[1], j, list.length); const on = i === sel; const fs = w < 600 ? 12.5 : 17, tw = d.width(e[0], `${fs}px ${F.math}`);   // smaller labels on phones so neighbours never touch
      if (on) d.rr(p.x - tw / 2 - 6, p.y - 13, tw + 12, 26, 5, k.alpha(C.text, .12), C.text, 1.5);
      d.text(e[0], p.x, p.y + 1, { font: `${fs}px ${F.math}`, color: { N: C.amber, W: C.green, Z: C.cyan, Q: C.pink, I: C.violet }[e[1]], align: "center", base: "middle" }); hits.push({ x: p.x, y: p.y, w: tw, i }); });
    if (custom && custom.set !== "X") { const r = areas[custom.set]; const p = { x: r.x + r.w - 60, y: r.y + r.h - 24 }; const tw = d.width(custom.label, `600 18px ${F.math}`); const a = .5 + .5 * Math.sin(pulse * 4); d.rr(p.x - tw / 2 - 8, p.y - 14, tw + 16, 28, 6, k.alpha(C.amber, .25 + .2 * a), C.amber, 2); d.text(custom.label, p.x, p.y + 1, { font: `600 18px ${F.math}`, color: C.text, align: "center", base: "middle" }); }
    const cur = custom || (sel >= 0 ? { label: EX[sel][0], set: EX[sel][1], why: EX[sel][2] || "" } : null);
    const chain = { N: ["N", "W", "Z", "Q", "R"], W: ["W", "Z", "Q", "R"], Z: ["Z", "Q", "R"], Q: ["Q", "R"], I: ["I", "R"], X: [] }[cur ? cur.set : "X"];
    const names = [["N", "ℕ natural", "c1"], ["W", "𝕎 whole", "c5"], ["Z", "ℤ integer", "c2"], ["Q", "ℚ rational", "c3"], ["I", "irrational", "c4"], ["R", "ℝ real", ""]];
    const dec = !cur ? "" : cur.set === "I" ? "Its decimal never ends and never repeats." : cur.set === "X" ? "" : "Its decimal either ends or repeats forever.";
    k.setRO(`<div><h2>Selected</h2><div class="ro-big" style="margin-top:8px">${cur ? M(cur.label.replace(/-/g, "−")) : "—"}</div>${cur && cur.why ? `<div class="narr" style="margin-top:4px">${cur.why}</div>` : ""}</div>
      <div class="ro-rows">${names.map(([key, nm, cl]) => `<div class="row"><span class="m ${chain.includes(key) ? cl : ""}" style="${chain.includes(key) ? "" : "color:var(--faint)"}">${chain.includes(key) ? "✓" : "✗"} ${nm}</span></div>`).join("")}</div>
      <div class="landmark"><div class="big">${M("ℕ ⊂ 𝕎 ⊂ ℤ ⊂ ℚ ⊂ ℝ")}</div><div class="note">${dec} Rationals and irrationals together make up every point on the number line.</div></div>`);
  });
};

/* ---------- units: dimensional analysis (DOM) ---------- */
L["units"] = k => {
  const { M } = k; const dom = k.dom();
  // factor: [numVal, numUnit, denVal, denUnit]
  const P = {
    speed: { name: "Highway speed to m/s", v: 65, u: [["mi"], ["h"]], f: [[1609.344, "m", 1, "mi"], [1, "h", 3600, "s"]], out: [["m"], ["s"]], d: 2, note: "1 mile = 1,609.344 m exactly (international mile)." },
    kmh: { name: "km/h to m/s", v: 90, u: [["km"], ["h"]], f: [[1000, "m", 1, "km"], [1, "h", 3600, "s"]], out: [["m"], ["s"]], d: 2, note: "Dividing km/h by 3.6 is the shortcut this chain explains." },
    dose: { name: "Dose by body weight", v: 44, u: [["lb"], []], f: [[0.45359237, "kg", 1, "lb"], [15, "mg", 1, "kg"]], out: [["mg"], []], d: 1, note: "1 lb = 0.45359237 kg exactly. The order is 15 mg per kg of body weight." },
    flow: { name: "Gallons/min to litres/hour", v: 3, u: [["gal"], ["min"]], f: [[3.785411784, "L", 1, "gal"], [60, "min", 1, "h"]], out: [["L"], ["h"]], d: 2, note: "1 US gallon = 3.785411784 L exactly." },
    inch: { name: "Height in inches to cm", v: 70, u: [["in"], []], f: [[2.54, "cm", 1, "in"]], out: [["cm"], []], d: 2, note: "1 inch = 2.54 cm exactly, by international agreement (1959)." },
    year: { name: "Seconds in a year", v: 1, u: [["yr"], []], f: [[365.25, "d", 1, "yr"], [24, "h", 1, "d"], [60, "min", 1, "h"], [60, "s", 1, "min"]], out: [["s"], []], d: 0, note: "Uses the Julian year of 365.25 days, the astronomer's standard." }
  };
  let key = "speed", val = P.speed.v, K = 0;
  k.select("Conversion", Object.entries(P).map(([kk, p]) => [kk, p.name]), key, v => { key = v; val = P[v].v; num.set(val); st.reset(); });
  const num = k.number("value", 0, 1000000, val, v => { val = v; render(); });
  const st = k.stepper(() => cancels().length, render, { ms: 900 });
  function cancels(){
    const p = P[key], toks = [{ id: "given-n", u: p.u[0][0], pos: "n", o: 0 }];
    if (p.u[1].length) toks.push({ id: "given-d", u: p.u[1][0], pos: "d", o: 0 });
    p.f.forEach((f, i) => { toks.push({ id: i + "-n", u: f[1], pos: "n", o: i + 1 }, { id: i + "-d", u: f[3], pos: "d", o: i + 1 }); });
    const used = new Set(), out = [];
    toks.filter(t => t.o > 0).forEach(t => { const m = toks.find(q => q.o < t.o && !used.has(q.id) && q.pos !== t.pos && q.u === t.u); if (m) { used.add(m.id); used.add(t.id); out.push({ unit: t.u, a: m.id, b: t.id }); } });
    return out;
  }
  function render(){
    const p = P[key], cs = cancels(), Kc = Math.min(st.k, cs.length);
    const xs = new Set(); cs.slice(0, Kc).forEach(x => { xs.add(x.a); xs.add(x.b); });
    let result = val; p.f.forEach(f => result = result * f[0] / f[2]);
    const U = (id, u) => u ? `<span class="u${xs.has(id) ? " x" : ""}">${u}</span>` : "";
    const nf = v => v.toLocaleString("en-US", { maximumFractionDigits: 8 });
    const given = `<span class="fb given"><span class="t">${nf(val)} ${U("given-n", p.u[0][0])}</span><span class="b">${p.u[1].length ? "1 " + U("given-d", p.u[1][0]) : "1"}</span></span>`;
    const facs = p.f.map((f, i) => `<span class="op">×</span><span class="fb"><span class="t"><span class="c2">${nf(f[0])}</span> ${U(i + "-n", f[1])}</span><span class="b"><span class="c2">${nf(f[2])}</span> ${U(i + "-d", f[3])}</span></span>`).join("");
    const done = Kc >= cs.length;
    k.publish("k", Kc); k.publish("result", done ? +result.toFixed(p.d) : null);   // lesson figures + goals
    const outU = p.out[1].length ? `${p.out[0][0]}/${p.out[1][0]}` : p.out[0][0];
    dom.innerHTML = `<div class="chain">${given}${facs}<span class="op">=</span><span class="res">${done ? result.toLocaleString("en-US", { maximumFractionDigits: p.d }) + " " + outU : "?"}</span></div>
      <p style="text-align:center;color:var(--muted);margin-top:28px;font-size:14px">${done ? "Every unit except the target has cancelled." : `Cancel ${cs.length - Kc} more unit pair${cs.length - Kc === 1 ? "" : "s"}: press Step.`}</p>`;
    const nextC = cs[Kc];
    k.setRO(`<div><h2>Result</h2><div class="ro-big" style="margin-top:8px"><span class="num c1">${result.toLocaleString("en-US", { maximumFractionDigits: p.d })}</span> <span style="font-size:.6em">${outU}</span></div></div>
      <div class="ro-rows"><div class="row">${M(`<span class="fr"><span>${p.f[0][0]} ${p.f[0][1]}</span><span>${p.f[0][2]} ${p.f[0][3]}</span></span> = 1`)}<span class="lbl">each conversion factor equals 1, so multiplying by it changes the units, not the quantity</span></div>
      <div class="row"><span class="lbl">Put the unit you want to cancel in the denominator if it is on top, and on top if it is in the denominator.</span></div></div>
      <div class="landmark${done ? " hit" : ""}"><div class="big">${done ? M(`${nf(val)} ${p.u[1].length ? p.u[0][0] + "/" + p.u[1][0] : p.u[0][0]} = ${result.toLocaleString("en-US", { maximumFractionDigits: p.d })} ${outU}`) : M(`cancel ${nextC ? nextC.unit : ""}`)}</div><div class="note">${p.note}</div></div>`);
  }
  render();
};
})();
