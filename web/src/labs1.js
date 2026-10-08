/* ============ Labs: Number sense + four operations ============ */
(function(){
const L = window.LABS;
const lerp = (a, b, t) => a + (b - a) * t;

/* ---------- counting: ten-frames ---------- */
L["counting"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  let n = 17, shown = 0, acc = 0, say = -1, sayT = 0, playing = false;
  const s = k.slider(`<i>n</i>`, 0, 40, 1, n, v => { n = v; say = -1; playing = false; pb.textContent = "Count aloud"; });
  k.button("+1 (successor)", () => { if (n < 40) { n++; s.set(n); } }, "btn ghost");
  const pb = k.button("Count aloud", () => { playing = !playing; say = playing ? 0 : -1; sayT = 0; pb.textContent = playing ? "Stop" : "Count aloud"; });
  k.hint("Each frame holds ten");
  const rest = () => { say = -1; playing = false; pb.textContent = "Count aloud"; };
  k.expose({   // the Concept tab's "Try it" chips
    set: v => { n = Math.max(0, Math.min(40, Math.round(+v) || 0)); s.set(n); rest(); },
    plus: () => { if (n < 40) { n++; s.set(n); } rest(); },
    play: () => { playing = true; say = 0; sayT = 0; pb.textContent = "Stop"; }
  });
  k.loop(dt => {
    acc += dt; if (acc > 0.05) { acc = 0; if (shown < n) shown++; else if (shown > n) shown--; }
    if (playing) { sayT += dt; if (sayT > (k.reduce ? 0.2 : 0.55)) { sayT = 0; say++; if (say > n) { playing = false; pb.textContent = "Count aloud"; } } }
    c.begin(); const { w, h } = c;
    const cols = w > 720 ? 4 : 2, rows = 4 / cols;
    const cell = Math.min((w - 60) / (cols * 5 + (cols - 1) * 1.2), (h - 150) / (rows * 2 + (rows - 1) * 1.4));
    const fw = cell * 5, fh = cell * 2, gx = cell * 1.2, gy = cell * 1.4;
    const tw = cols * fw + (cols - 1) * gx, th = rows * fh + (rows - 1) * gy;
    const ox = (w - tw) / 2, oy = 70 + (h - 150 - th) / 2;
    for (let f = 0; f < 4; f++) {
      const fx = ox + (f % cols) * (fw + gx), fy = oy + Math.floor(f / cols) * (fh + gy);
      d.rr(fx - 4, fy - 4, fw + 8, fh + 8, 6, k.alpha(C.panel3, .6), C.line2, 1);
      for (let i = 0; i < 10; i++) {
        const idx = f * 10 + i + 1;
        const x = fx + (i % 5 + .5) * cell, y = fy + (Math.floor(i / 5) + .5) * cell;
        d.rect(fx + (i % 5) * cell, fy + Math.floor(i / 5) * cell, cell, cell, null, k.alpha(C.line2, .7));
        if (idx <= shown) {
          const isSay = playing && idx === say;
          d.circle(x, y, cell * .34, isSay ? "#FFE3A3" : C.amber);
          if (isSay) d.circle(x, y, cell * .46, null, C.amber, 2);
          if (playing && idx <= say) d.text(String(idx), x, y + 1, { font: `600 ${Math.max(10, cell * .28)}px ${F.mono}`, color: C.ink, align: "center", base: "middle" });
        } else if (idx === n + 1) {
          g2(c.g, () => { c.g.setLineDash([4, 3]); d.circle(x, y, cell * .34, null, C.cyan, 2); });
          d.text("n+1", x, y + 1, { font: `italic ${Math.max(10, cell * .26)}px ${F.math}`, color: C.cyan, align: "center", base: "middle" });
        }
      }
      if (shown >= (f + 1) * 10) d.text("10", fx + fw + 2, fy - 8, { font: `600 13px ${F.mono}`, color: C.amber, align: "right" });
    }
    const big = playing && say >= 1 ? String(say) : String(n);
    d.text(big, w / 2, 48, { font: `400 40px ${F.math}`, color: playing ? "#FFE3A3" : C.amber, align: "center" });
    d.text(playing ? "counting…" : "dots", w / 2 + d.width(big, `40px ${F.math}`) / 2 + 10, 46, { font: `13px ${F.sans}`, color: C.muted });
  });
  function g2(g, fn){ g.save(); fn(); g.restore(); }
  const upd = () => {
    const t = Math.floor(n / 10), o = n % 10;
    const lm = n === 0 ? `<div class="big">${M("0")}</div><div class="note">Nothing counted yet. Zero is the count of an empty set.</div>`
      : o === 0 ? `<div class="big">${M(`${n} = ${t} × 10`)}</div><div class="note">${t} full frame${t > 1 ? "s" : ""}. The ones digit resets to 0.</div>`
      : `<div class="big" style="color:var(--muted)">Next ten at ${M(String((t + 1) * 10))}</div><div class="note">${10 - o} more dot${10 - o > 1 ? "s" : ""} fill this frame.</div>`;
    k.setRO(`<div><h2>Count</h2><div class="ro-big" style="margin-top:8px"><span class="m c1"><i>n</i></span> = <span class="num c1">${n}</span></div></div>
      <div class="ro-rows">
        <div class="row">${M(`${n} = `)}<span class="v">${t} ten${t === 1 ? "" : "s"} + ${o} one${o === 1 ? "" : "s"}</span><span class="lbl">full frames count by tens, the rest by ones</span></div>
        <div class="row"><span class="m c2"><i>n</i> + 1</span> = <span class="v c2">${n + 1}</span><span class="lbl">the successor, shown as the dashed dot</span></div>
        <div class="row">${M("in words")} <span class="v">${k.words(n)}</span></div>
      </div><div class="landmark${o === 0 && n ? " hit" : ""}">${lm}</div>
      <p class="narr">Press Count aloud to tag each dot with one number. The last number said is the size of the group.</p>`);
  };
  k.loop(upd);
};

/* ---------- place value: base-ten blocks ---------- */
L["place-value"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  let n = 2354;
  const s = k.slider("number", 0, 9999, 1, n, v => n = v, v => v.toLocaleString("en-US"));
  [["+1",1],["+10",10],["+100",100],["+1000",1000],["−1",-1],["−10",-10]].forEach(([t, v]) => k.button(t, () => { n = Math.max(0, Math.min(9999, n + v)); s.set(n); }, "btn-s"));
  const cols = [ ["Thousands", C.violet, 1000], ["Hundreds", C.pink, 100], ["Tens", C.cyan, 10], ["Ones", C.amber, 1] ];
  k.loop(() => {
    c.begin(); const { w, h } = c;
    const dg = [Math.floor(n / 1000), Math.floor(n / 100) % 10, Math.floor(n / 10) % 10, n % 10];
    const cw = w / 4;
    const u = Math.max(2, Math.min(cw / 16, (h - 140) / 15.5));
    cols.forEach(([name, col, pv], i) => {
      const x0 = i * cw, cx = x0 + cw / 2, top = 56;
      if (i) d.line(x0, 20, x0, h - 20, k.alpha(C.line2, .6), 1);
      d.text(name.toUpperCase(), cx, 26, { font: `600 12px ${F.ui}`, color: col, align: "center" });
      d.text(String(dg[i]), cx, h - 26, { font: `400 34px ${F.math}`, color: col, align: "center" });
      d.text("× " + pv.toLocaleString("en-US"), cx, h - 8, { font: `12px ${F.mono}`, color: C.faint, align: "center" });
      const m = dg[i];
      if (pv === 1) { for (let j = 0; j < m; j++) { const x = cx - 1.5 * u * 1.3 + (j % 3) * u * 1.3, y = top + 8 + Math.floor(j / 3) * u * 1.3; d.rect(x, y, u, u, k.alpha(col, .85), col); } }
      if (pv === 10) { const gap = u * .35, tot = m * u + (m - 1) * gap; for (let j = 0; j < m; j++) { const x = cx - tot / 2 + j * (u + gap); for (let q = 0; q < 10; q++) d.rect(x, top + 8 + q * u, u, u, k.alpha(col, .8), k.alpha("#0B1019", .6)); } }
      if (pv >= 100) {
        const off = u * .9, size = 10 * u;
        const x00 = cx - size / 2 - (m - 1) * off / 2 + (pv === 1000 ? -size * .15 : 0);
        for (let j = 0; j < m; j++) {
          const x = x00 + j * off, y = top + 8 + j * off;
          if (pv === 100) { d.rect(x, y, size, size, k.alpha(col, .78), col); for (let q = 1; q < 10; q++) { d.line(x + q * u, y, x + q * u, y + size, k.alpha("#0B1019", .45)); d.line(x, y + q * u, x + size, y + q * u, k.alpha("#0B1019", .45)); } }
          else {
            const dep = size * .35, g = c.g;
            g.fillStyle = k.alpha(col, .55); g.beginPath(); g.moveTo(x, y + dep); g.lineTo(x + dep, y); g.lineTo(x + dep + size, y); g.lineTo(x + size, y + dep); g.closePath(); g.fill();
            g.fillStyle = k.alpha(col, .4); g.beginPath(); g.moveTo(x + size, y + dep); g.lineTo(x + dep + size, y); g.lineTo(x + dep + size, y + size); g.lineTo(x + size, y + dep + size); g.closePath(); g.fill();
            d.rect(x, y + dep, size, size, k.alpha(col, .8), col);
            for (let q = 1; q < 10; q++) { d.line(x + q * u, y + dep, x + q * u, y + dep + size, k.alpha("#0B1019", .35)); d.line(x, y + dep + q * u, x + size, y + dep + q * u, k.alpha("#0B1019", .35)); }
          }
        }
      }
    });
    const dgs = String(n).padStart(4, "0");
    const nz = dg.map((v, i) => [v, [1000,100,10,1][i], ["c4","c3","c2","c1"][i], 3 - i]).filter(x => x[0]);
    const exp = nz.length ? nz.map(([v, p, cl]) => `<span class="${cl}">${v} × ${p.toLocaleString("en-US")}</span>`).join(" + ") : "0";
    const pw = nz.length ? nz.map(([v, p, cl, e]) => `<span class="${cl}">${v} × 10<sup>${e}</sup></span>`).join(" + ") : "0";
    const withComma = [...String(n)].map((ch, i, arr) => `<span class="${["c1","c2","c3","c4"][arr.length - 1 - i]}">${ch}</span>${arr.length === 4 && i === 0 ? "," : ""}`).join("");
    void dgs;
    k.setRO(`<div><h2>Number</h2><div class="ro-big" style="margin-top:8px">${M(withComma)}</div><div class="narr" style="margin-top:4px">${k.words(n)}</div></div>
      <div class="ro-rows"><div class="row">${M(exp)}<span class="lbl">expanded form: digit × place value</span></div>
      <div class="row">${M(pw)}<span class="lbl">each place is ten times the place to its right</span></div></div>
      <div class="landmark"><div class="big">${M(`10 ones = 1 ten, 10 tens = 1 hundred`)}</div><div class="note">Press +1 at ${M("…9")} and watch ten ones regroup into a new rod.</div></div>
      <p class="narr">The same digit is worth more the further left it sits. ${dg[2] ? `The ${dg[2]} in the tens place is worth ${dg[2] * 10}.` : ""}</p>`);
  });
};

/* ---------- number line: comparing ---------- */
L["number-line"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  let a = 7, b = 12, da = 7, db = 12;
  const sa = k.slider(`<span class="c2"><i>a</i></span>`, 0, 20, 1, a, v => a = v);
  const sb = k.slider(`<span class="c3"><i>b</i></span>`, 0, 20, 1, b, v => b = v);
  k.button("Swap", () => { [a, b] = [b, a]; sa.set(a); sb.set(b); }, "btn ghost");
  k.button("Random", () => { a = Math.floor(Math.random() * 21); b = Math.floor(Math.random() * 21); sa.set(a); sb.set(b); }, "btn ghost");
  k.loop(dt => {
    da = lerp(da, a, Math.min(1, dt * 10)); db = lerp(db, b, Math.min(1, dt * 10));
    c.begin(); const { w, h } = c;
    const x0 = 40, x1 = w - 40, y = h * .62, X = v => x0 + (x1 - x0) * v / 20;
    d.line(x0 - 14, y, x1 + 14, y, C.muted, 2);
    d.arrow(x1, y, x1 + 18, y, C.muted, 2);
    for (let i = 0; i <= 20; i++) { d.line(X(i), y - (i % 5 ? 6 : 10), X(i), y + (i % 5 ? 6 : 10), i % 5 ? C.faint : C.muted, 1.5); if (w > 560 || i % 2 === 0) d.text(String(i), X(i), y + 30, { font: `13px ${F.mono}`, color: C.faint, align: "center" }); }
    // distance bracket
    const ya = y - 70;
    if (Math.abs(da - db) > .05) { d.line(X(da), ya, X(db), ya, C.violet, 2); d.line(X(da), ya - 6, X(da), ya + 6, C.violet, 2); d.line(X(db), ya - 6, X(db), ya + 6, C.violet, 2);
      d.text(`|a − b| = ${Math.abs(a - b)}`, (X(da) + X(db)) / 2, ya - 12, { font: `italic 16px ${F.math}`, color: C.violet, align: "center" }); }
    const pt = (v, col, lbl, up) => { d.line(X(v), y, X(v), y - 34, k.alpha(col, .6), 1.5, [3, 3]); d.circle(X(v), y, 9, col); d.text(lbl, X(v), up ? y - 42 : y + 56, { font: `italic 18px ${F.math}`, color: col, align: "center" }); };
    pt(da, C.cyan, "a", true); pt(db, C.pink, "b", false);
    const sym = a < b ? "<" : a > b ? ">" : "=";
    d.text(`${a}  ${sym}  ${b}`, w / 2, 58, { font: `400 40px ${F.math}`, color: C.amber, align: "center" });
    d.text("smaller  ←", x0, h - 16, { font: `12px ${F.ui}`, color: C.faint }); d.text("→  larger", x1, h - 16, { font: `12px ${F.ui}`, color: C.faint, align: "right" });
    const sym2 = a < b ? "&lt;" : a > b ? "&gt;" : "=";
    const say = a < b ? `${a} is less than ${b}` : a > b ? `${a} is greater than ${b}` : `${a} equals ${b}`;
    k.setRO(`<div><h2>Comparison</h2><div class="ro-big" style="margin-top:8px"><span class="c2">${a}</span> <span class="c1">${sym2}</span> <span class="c3">${b}</span></div><div class="narr" style="margin-top:4px">${say}.</div></div>
      <div class="ro-rows"><div class="row"><span class="m c4">|<i>a</i> − <i>b</i>|</span> = <span class="v c4">${Math.abs(a - b)}</span><span class="lbl">distance between the points, always zero or positive</span></div>
      <div class="row">${M(`<i>b</i> − <i>a</i>`)} = <span class="v">${(b - a).toString().replace("-", "−")}</span><span class="lbl">positive means b is to the right of a</span></div>
      <div class="row">${M("midpoint")} = <span class="v">${(a + b) / 2}</span><span class="lbl">halfway between a and b: (a + b) ÷ 2</span></div></div>
      <div class="landmark${a === b ? " hit" : ""}"><div class="big">${a === b ? M("<i>a</i> = <i>b</i>") : M(`${Math.min(a,b)} &lt; ${Math.max(a,b)}`)}</div><div class="note">${a === b ? "Same point. The distance is 0." : "The symbol opens toward the larger number. Further right on the line means larger."}</div></div>`);
  });
};

/* ---------- rounding ---------- */
L["rounding"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  let x = 347, place = 10, dx = 347;
  k.slider(`<span class="c1"><i>x</i></span>`, 0, 999, 1, x, v => x = v);
  k.select("Round to", [[10, "nearest ten"], [100, "nearest hundred"]], 10, v => place = +v);
  k.loop(dt => {
    dx = lerp(dx, x, Math.min(1, dt * 12));
    c.begin(); const { w, h } = c;
    const lo = Math.floor(x / place) * place, hi = lo + place, mid = lo + place / 2;
    const r = x - lo >= place / 2 ? hi : lo;
    const x0 = 60, x1 = w - 60, y = h * .55, X = v => x0 + (x1 - x0) * (v - lo) / place;
    d.line(x0 - 30, y, x1 + 30, y, C.muted, 2);
    const step = place / 10;
    for (let i = 0; i <= 10; i++) { const v = lo + i * step; d.line(X(v), y - 6, X(v), y + 6, C.faint, 1.5); if (i && i < 10 && (w > 520 || i % 2 === 0)) d.text(String(v), X(v), y + 24, { font: `12px ${F.mono}`, color: C.faint, align: "center" }); }
    d.line(X(lo), y - 22, X(lo), y + 22, C.cyan, 3); d.text(String(lo), X(lo), y + 44, { font: `600 18px ${F.mono}`, color: C.cyan, align: "center" });
    d.line(X(hi), y - 22, X(hi), y + 22, C.pink, 3); d.text(String(hi), X(hi), y + 44, { font: `600 18px ${F.mono}`, color: C.pink, align: "center" });
    d.line(X(mid), y - 60, X(mid), y + 12, C.violet, 1.5, [5, 4]); d.text(`halfway ${mid}`, X(mid), y - 66, { font: `13px ${F.sans}`, color: C.violet, align: "center" });
    const px = X(Math.max(lo, Math.min(hi, dx)));
    d.circle(px, y, 9, C.amber); d.text(String(x), px, y - 22, { font: `600 18px ${F.mono}`, color: C.amber, align: "center" });
    d.hop(px, X(r), y - 2, 70, k.alpha(r === hi ? C.pink : C.cyan, .9), 2.5);
    // overview
    const oy = h - 30; d.line(x0, oy, x1, oy, C.line2, 6); const O = v => x0 + (x1 - x0) * v / 1000;
    d.rect(O(lo), oy - 5, Math.max(3, O(hi) - O(lo)), 10, k.alpha(C.amber, .5)); d.text("0", x0, oy + 18, { font: `11px ${F.mono}`, color: C.faint, align: "center" }); d.text("1000", x1, oy + 18, { font: `11px ${F.mono}`, color: C.faint, align: "center" });
    d.text(`${x} ≈ ${r}`, w / 2, 50, { font: `400 36px ${F.math}`, color: C.text, align: "center" });
    const digit = place === 10 ? x % 10 : Math.floor(x / 10) % 10;
    const exact = x - lo === place / 2;
    k.setRO(`<div><h2>Rounded value</h2><div class="ro-big" style="margin-top:8px"><span class="c1">${x}</span> ≈ <span class="${r === hi ? "c3" : "c2"}">${r}</span></div></div>
      <div class="ro-rows"><div class="row">${M("lower")} <span class="v c2">${lo}</span> ${M("upper")} <span class="v c3">${hi}</span><span class="lbl">the two multiples of ${place} on either side</span></div>
      <div class="row">${M("halfway")} <span class="v c4">${mid}</span></div>
      <div class="row">${M("deciding digit")} <span class="v">${digit}</span><span class="lbl">the digit just right of the ${place === 10 ? "tens" : "hundreds"} place</span></div>
      <div class="row">${M("error")} <span class="v">${Math.abs(x - r)}</span><span class="lbl">how far the rounded value is from x</span></div></div>
      <div class="landmark${exact ? " hit" : ""}"><div class="big">${exact ? M(`${x} is exactly halfway`) : M(`${digit} ${digit >= 5 ? "≥" : "&lt;"} 5 → round ${digit >= 5 ? "up" : "down"}`)}</div><div class="note">${exact ? "Round-half-up sends it to the upper value. Banks and statistics software sometimes round half to even instead." : "Digits 5 to 9 round up. Digits 0 to 4 round down."}</div></div>`);
  });
};

/* ---------- column addition / subtraction engine ---------- */
function columnLab(k, op){
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  let A = op === "+" ? 4786 : 5203, B = op === "+" ? 3579 : 1867, plan;
  function build(){
    if (op === "−" && B > A) [A, B] = [B, A];
    const n = Math.max(String(A).length, String(B).length) + (op === "+" ? 1 : 0);
    const a = String(A).padStart(n, "0").split("").reverse().map(Number), b = String(B).padStart(n, "0").split("").reverse().map(Number);
    const steps = [];
    if (op === "+") {
      let carry = 0; const carries = Array(n + 1).fill(0), res = Array(n).fill(null);
      const cols = Math.max(String(A).length, String(B).length);
      for (let i = 0; i < cols; i++) { const s = a[i] + b[i] + carry; res[i] = s % 10; const cin = carry; carry = Math.floor(s / 10); carries[i + 1] = carry; steps.push({ i, cin, s, digit: s % 10, cout: carry }); }
      if (carry) steps.push({ i: cols, final: true, digit: carry });
      plan = { n, a, b, steps, carries };
    } else {
      const top = a.slice(); const hist = a.map(v => [{ v, at: -1 }]);
      const cols = String(A).length;
      for (let i = 0; i < cols; i++) {
        const note = [];
        if (top[i] < b[i]) {
          let j = i + 1; while (top[j] === 0) j++;
          top[j] -= 1; hist[j].push({ v: top[j], at: i }); note.push(`borrow 1 from the ${place(j)} place`);
          for (let q = j - 1; q > i; q--) { top[q] = 9; hist[q].push({ v: 9, at: i }); }
          top[i] += 10; hist[i].push({ v: top[i], at: i });
        }
        steps.push({ i, t: top[i], b: b[i], digit: top[i] - b[i], note });
      }
      plan = { n: cols, a, b, steps, hist };
    }
  }
  const place = i => ["ones","tens","hundreds","thousands","ten-thousands","hundred-thousands"][i] || "10^" + i;
  build();
  const na = k.number(`<span class="c2"><i>a</i></span>`, 0, 999999, A, v => { A = v; build(); st.reset(); });
  const nb = k.number(`<span class="c3"><i>b</i></span>`, 0, 999999, B, v => { B = v; build(); na.set(A); nb.set(B); st.reset(); });
  const st = k.stepper(() => plan.steps.length, () => {}, { ms: 1100 });
  k.button("New numbers", () => { A = 1000 + Math.floor(Math.random() * 9000); B = 100 + Math.floor(Math.random() * 9000); build(); na.set(A); nb.set(B); st.reset(); }, "btn ghost");
  k.loop(() => {
    c.begin(); const { w, h } = c; const K = st.k;
    const ncol = op === "+" ? plan.n : plan.n;
    const cw = Math.min(64, (w - 120) / (ncol + 1)), fs = Math.round(cw * .72);
    const right = w / 2 + (ncol * cw) / 2, colX = i => right - (i + .5) * cw;
    const yC = 90, yA = yC + fs * 1.25, yB = yA + fs * 1.25, yL = yB + fs * .45, yS = yL + fs * 1.2;
    const cur = K < plan.steps.length ? plan.steps[K].i : -1;
    for (let i = 0; i < ncol; i++) {
      if (i === cur) d.rect(colX(i) - cw / 2, yC - fs * 1.4, cw, yS - yC + fs * 1.8, k.alpha(C.amber, .1), k.alpha(C.amber, .4));
      d.text((10 ** i).toLocaleString("en-US") + "s", colX(i), 32, { font: `600 ${Math.max(9, Math.min(12, cw * .22))}px ${F.mono}`, color: C.faint, align: "center" });
    }
    const lenA = String(A).length, lenB = String(B).length;
    if (op === "+") {
      for (let i = 0; i < lenA; i++) d.text(String(plan.a[i]), colX(i), yA, { font: `${fs}px ${F.mono}`, color: C.cyan, align: "center" });
      for (let i = 0; i < lenB; i++) d.text(String(plan.b[i]), colX(i), yB, { font: `${fs}px ${F.mono}`, color: C.pink, align: "center" });
      plan.steps.forEach((s, j) => { if (j < K) { d.text(String(s.digit), colX(s.i), yS, { font: `${fs}px ${F.mono}`, color: C.green, align: "center" }); if (!s.final && s.cout) d.text("1", colX(s.i + 1), yC, { font: `${Math.round(fs * .6)}px ${F.mono}`, color: C.amber, align: "center" }); } });
    } else {
      for (let i = 0; i < lenA; i++) {
        const hs = plan.hist[i].filter(x => x.at < K);
        const lastV = hs[hs.length - 1].v;
        d.text(String(plan.a[i]), colX(i), yA, { font: `${fs}px ${F.mono}`, color: hs.length > 1 ? C.faint : C.cyan, align: "center" });
        if (hs.length > 1) { d.line(colX(i) - fs * .35, yA - fs * .3, colX(i) + fs * .35, yA - fs * .3, C.pink, 2); hs.slice(1).forEach((x, q) => { const yy = yA - fs * (0.95 + q * .62); const isLast = q === hs.length - 2; d.text(String(x.v), colX(i), yy, { font: `${Math.round(fs * .58)}px ${F.mono}`, color: isLast ? C.amber : C.faint, align: "center" }); if (!isLast) d.line(colX(i) - fs * .3, yy - fs * .18, colX(i) + fs * .3, yy - fs * .18, C.pink, 1.5); }); }
        void lastV;
      }
      for (let i = 0; i < lenB; i++) d.text(String(plan.b[i]), colX(i), yB, { font: `${fs}px ${F.mono}`, color: C.pink, align: "center" });
      const lastNZ = (() => { let m = 0; plan.steps.forEach(s => { if (s.digit) m = s.i; }); return m; })();
      plan.steps.forEach((s, j) => { if (j < K && !(K >= plan.steps.length && s.i > lastNZ)) d.text(String(s.digit), colX(s.i), yS, { font: `${fs}px ${F.mono}`, color: C.green, align: "center" }); });
    }
    d.text(op, right - (ncol + .6) * cw, yB, { font: `${fs}px ${F.mono}`, color: C.text, align: "center" });
    d.line(right - (ncol + 1.1) * cw, yL, right + 6, yL, C.text, 2);
    // narration
    let narr, lm;
    if (K >= plan.steps.length) { const res = op === "+" ? A + B : A - B; narr = `Done. ${op === "+" ? "Every column added, carries included." : "Every column subtracted."}`; lm = `<div class="big">${M(`<span class="c2">${A.toLocaleString("en-US")}</span> ${op} <span class="c3">${B.toLocaleString("en-US")}</span> = <span class="c5">${res.toLocaleString("en-US")}</span>`)}</div><div class="note">Check: ${op === "+" ? `${res.toLocaleString("en-US")} − ${B.toLocaleString("en-US")} = ${A.toLocaleString("en-US")}` : `${res.toLocaleString("en-US")} + ${B.toLocaleString("en-US")} = ${A.toLocaleString("en-US")}`}</div>`; }
    else {
      const s = plan.steps[K];
      if (op === "+") { if (s.final) { narr = `Write the last carry, 1, in the ${place(s.i)} place.`; lm = `<div class="big">${M(`carry → <span class="c1">1</span>`)}</div><div class="note">Nothing left to add it to, so it becomes a new leading digit.</div>`; }
        else { narr = `Next: the ${place(s.i)} column.`; lm = `<div class="big">${M(`<span class="c2">${plan.a[s.i]}</span> + <span class="c3">${plan.b[s.i]}</span>${s.cin ? ` + <span class="c1">${s.cin}</span>` : ""} = ${s.s}`)}</div><div class="note">${s.s >= 10 ? `Write <b>${s.digit}</b>, carry <b>1</b> ten into the ${place(s.i + 1)} column.` : `Write ${s.digit}. No carry.`}</div>`; } }
      else { narr = `Next: the ${place(s.i)} column.`; lm = `<div class="big">${M(`<span class="c1">${s.t}</span> − <span class="c3">${s.b}</span> = ${s.digit}`)}</div><div class="note">${s.note.length ? `${plan.a[s.i]} is smaller than ${s.b}, so ${s.note[0]}. The top digit becomes ${s.t}.` : `No regrouping needed.`}</div>`; }
    }
    k.setRO(`<div><h2>${op === "+" ? "Sum" : "Difference"}</h2><div class="ro-big" style="margin-top:8px">${M(`<span class="c2"><i>a</i></span> ${op} <span class="c3"><i>b</i></span>`)} = <span class="num c5">${K >= plan.steps.length ? (op === "+" ? A + B : A - B).toLocaleString("en-US") : "?"}</span></div></div>
      <div class="ro-rows"><div class="row">${M("step")} <span class="v">${Math.min(K + 1, plan.steps.length)} of ${plan.steps.length}</span><span class="lbl">work right to left, one place value at a time</span></div></div>
      <div class="landmark${K < plan.steps.length && ((op === "+" && plan.steps[K].s >= 10) || (op === "−" && plan.steps[K].note.length)) ? " hit" : ""}">${lm}</div><p class="narr">${narr} Press Step to continue.</p>`);
  });
}
L["addition"] = k => columnLab(k, "+");
L["subtraction"] = k => columnLab(k, "−");

/* ---------- multiplication: area model ---------- */
L["multiplication"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  let a = 23, b = 14, da = 23, db = 14, grid = true;
  k.slider(`<span class="c2"><i>a</i></span>`, 1, 99, 1, a, v => a = v);
  k.slider(`<span class="c3"><i>b</i></span>`, 1, 99, 1, b, v => b = v);
  k.check("Unit squares", true, v => grid = v);
  const split = n => n >= 10 && n % 10 ? [n - n % 10, n % 10] : [n];
  k.loop(dt => {
    da = lerp(da, a, Math.min(1, dt * 8)); db = lerp(db, b, Math.min(1, dt * 8));
    c.begin(); const { w, h } = c;
    const sc = Math.min((w - 110) / Math.max(da, 1), (h - 100) / Math.max(db, 1));
    const ox = 70, oy = 54;
    const pa = split(a), pb = split(b);
    const fa = da / a, fb = db / b;
    let x = ox; const shades = [.55, .38, .38, .22];
    pa.forEach((wa, i) => { let y = oy; pb.forEach((hb, j) => {
      const W = wa * sc * fa, H = hb * sc * fb;
      d.rect(x, y, W, H, k.alpha(C.amber, shades[i + j * 1 + (i && j ? 1 : 0)] || .3), C.amber, 1.5);
      if (grid && sc > 3.2) { c.g.save(); c.g.strokeStyle = k.alpha("#0B1019", .35); c.g.lineWidth = 1; c.g.beginPath(); for (let q = 1; q < wa; q++) { c.g.moveTo(x + q * sc * fa, y); c.g.lineTo(x + q * sc * fa, y + H); } for (let q = 1; q < hb; q++) { c.g.moveTo(x, y + q * sc * fb); c.g.lineTo(x + W, y + q * sc * fb); } c.g.stroke(); c.g.restore(); }
      if (W > 34 && H > 22) d.text(`${wa}×${hb}=${wa * hb}`, x + W / 2, y + H / 2, { font: `600 ${Math.min(18, Math.max(11, W / 7))}px ${F.mono}`, color: "#FFF3D6", align: "center", base: "middle" });
      y += H; }); x += wa * sc * fa; });
    x = ox; pa.forEach(wa => { const W = wa * sc * fa; d.line(x + 2, oy - 14, x + W - 2, oy - 14, C.cyan, 2); d.text(String(wa), x + W / 2, oy - 22, { font: `600 15px ${F.mono}`, color: C.cyan, align: "center" }); x += W; });
    let y = oy; pb.forEach(hb => { const H = hb * sc * fb; d.line(ox - 14, y + 2, ox - 14, y + H - 2, C.pink, 2); d.text(String(hb), ox - 22, y + H / 2, { font: `600 15px ${F.mono}`, color: C.pink, align: "right", base: "middle" }); y += H; });
    const parts = []; pa.forEach(x1 => pb.forEach(y1 => parts.push([x1, y1])));
    const prodRows = split(b).length > 1 ? `<div class="row">${M(`${a} × ${pb[1]}`)} = <span class="v c1">${a * pb[1]}</span></div><div class="row">${M(`${a} × ${pb[0]}`)} = <span class="v c1">${a * pb[0]}</span><span class="lbl">standard algorithm: one row per digit of b, shifted one place</span></div>` : "";
    k.setRO(`<div><h2>Product</h2><div class="ro-big" style="margin-top:8px"><span class="c2">${a}</span> × <span class="c3">${b}</span> = <span class="num c5">${(a * b).toLocaleString("en-US")}</span></div></div>
      <div class="ro-rows">${parts.map(([p, q]) => `<div class="row">${M(`<span class="c2">${p}</span> × <span class="c3">${q}</span>`)} = <span class="v c1">${p * q}</span></div>`).join("")}
      <div class="row">${M("sum of parts")} = <span class="v c5">${parts.map(([p, q]) => p * q).join(" + ")} = ${a * b}</span><span class="lbl">the distributive law: split each factor by place value</span></div>${prodRows}</div>
      <div class="landmark"><div class="big">${M(`<i>a</i> × <i>b</i> = area`)}</div><div class="note">A rectangle ${a} units wide and ${b} tall holds ${a * b} unit squares.</div></div>`);
  });
};

/* ---------- division: long division stepper ---------- */
L["division"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  let A = 1357, B = 6, plan;
  function build(){
    const dg = String(A).split("").map(Number); let rem = 0, started = false; const steps = [];
    for (let i = 0; i < dg.length; i++) { const cur = rem * 10 + dg[i]; if (!started && cur < B && i < dg.length - 1) { rem = cur; continue; } started = true; const q = Math.floor(cur / B), prod = q * B, r = cur - prod; steps.push({ i, cur, q, prod, r, last: i === dg.length - 1, next: dg[i + 1] }); rem = r; }
    const phases = []; steps.forEach((s, j) => { phases.push([j, 0], [j, 1], [j, 2]); if (!s.last) phases.push([j, 3]); });
    plan = { dg, steps, phases, q: Math.floor(A / B), r: A % B };
  }
  build();
  k.number(`<span class="c2">dividend</span>`, 1, 99999, A, v => { A = v; build(); st.reset(); });
  k.number(`<span class="c3">divisor</span>`, 1, 99, B, v => { B = v; build(); st.reset(); }, "70px");
  const st = k.stepper(() => plan.phases.length, () => {}, { ms: 900 });
  k.loop(() => {
    c.begin(); const { w, h } = c; const K = st.k; const n = plan.dg.length;
    const rows = 2 + plan.steps.length * 2;
    const ch = Math.min(38, (h - 40) / (rows + 1.2)), fs = Math.round(ch * .78), cw = fs * .62;
    const bw = String(B).length * cw + 20;
    const x0 = (w - (n * cw + bw)) / 2 + bw, yQ = 20 + ch, yD = yQ + ch * 1.1;
    const colX = i => x0 + (i + .5) * cw;
    const txt = (s, col, y, color) => { const str = String(s); for (let q = 0; q < str.length; q++) d.text(str[q], colX(col - str.length + 1 + q), y, { font: `${fs}px ${F.mono}`, color, align: "center" }); };
    // bracket
    d.text(String(B), x0 - 14, yD, { font: `${fs}px ${F.mono}`, color: C.pink, align: "right" });
    c.g.save(); c.g.strokeStyle = C.text; c.g.lineWidth = 2; c.g.beginPath(); c.g.moveTo(x0 - 6, yD + ch * .25); c.g.quadraticCurveTo(x0 + 4, yD - ch * .3, x0 - 4, yD - ch * .82); c.g.lineTo(x0 + n * cw + 8, yD - ch * .82); c.g.stroke(); c.g.restore();
    plan.dg.forEach((v, i) => d.text(String(v), colX(i), yD, { font: `${fs}px ${F.mono}`, color: C.cyan, align: "center" }));
    const done = K >= plan.phases.length;
    const [cj, cp] = done ? [plan.steps.length, 0] : plan.phases[K];
    let y = yD;
    plan.steps.forEach((s, j) => {
      const vis = p => j < cj || (j === cj && p <= cp);
      if (vis(0)) d.text(String(s.q), colX(s.i), yQ, { font: `${fs}px ${F.mono}`, color: C.amber, align: "center" });
      if (vis(1)) { y += ch; txt(s.prod, s.i, y, C.text); d.text("−", colX(s.i - String(s.prod).length) , y, { font: `${fs}px ${F.mono}`, color: C.faint, align: "center" }); }
      if (vis(2)) { d.line(colX(s.i - String(s.cur).length + 1) - cw / 2, y + ch * .28, colX(s.i) + cw / 2, y + ch * .28, C.text, 1.5); y += ch; txt(s.r, s.i, y, s.last ? C.violet : C.text); }
      if (vis(3)) { d.text(String(s.next), colX(s.i + 1), y, { font: `${fs}px ${F.mono}`, color: C.cyan, align: "center" }); d.arrow(colX(s.i + 1), yD + 6, colX(s.i + 1), y - ch * .8, k.alpha(C.cyan, .45), 1.5); }
      if (j === cj && !done) { const top = cp === 0 ? yD : y; void top; }
    });
    let lm, narr;
    if (done) { lm = `<div class="big">${M(`<span class="c2">${A}</span> = <span class="c3">${B}</span> × <span class="c1">${plan.q}</span> + <span class="c4">${plan.r}</span>`)}</div><div class="note">The division algorithm: dividend = divisor × quotient + remainder, with 0 ≤ r &lt; ${B}.</div>`; narr = "Finished. Multiply back to check."; }
    else { const s = plan.steps[cj];
      lm = [
        `<div class="big">${M(`${s.cur} ÷ <span class="c3">${B}</span> → <span class="c1">${s.q}</span>`)}</div><div class="note"><b>Divide.</b> How many ${B}s fit in ${s.cur}? ${s.q}, since ${B} × ${s.q + 1} = ${B * (s.q + 1)} is too big.</div>`,
        `<div class="big">${M(`<span class="c1">${s.q}</span> × <span class="c3">${B}</span> = ${s.prod}`)}</div><div class="note"><b>Multiply.</b> Write the product under ${s.cur}.</div>`,
        `<div class="big">${M(`${s.cur} − ${s.prod} = ${s.r}`)}</div><div class="note"><b>Subtract.</b> The difference must be less than ${B}, or the quotient digit was too small.</div>`,
        `<div class="big">${M(`bring down ${s.next} → ${s.r * 10 + s.next}`)}</div><div class="note"><b>Bring down</b> the next digit of the dividend and repeat.</div>`][cp];
      narr = "Divide, multiply, subtract, bring down. Repeat until no digits remain."; }
    k.setRO(`<div><h2>Quotient</h2><div class="ro-big" style="margin-top:8px"><span class="c2">${A}</span> ÷ <span class="c3">${B}</span> = ${done ? `<span class="num c1">${plan.q}</span> <span style="font-size:.6em">R</span> <span class="num c4">${plan.r}</span>` : "?"}</div></div>
      <div class="ro-rows"><div class="row">${M("as a mixed number")} <span class="v">${done ? (plan.r ? `${plan.q} ${plan.r}/${B}` : plan.q) : "…"}</span></div>
      <div class="row">${M("as a decimal")} <span class="v">${done ? k.fmt(A / B, 4) : "…"}</span><span class="lbl">rounded to 4 places</span></div></div>
      <div class="landmark${done ? " hit" : ""}">${lm}</div><p class="narr">${narr}</p>`);
  });
};

/* ---------- properties ---------- */
L["properties"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  let mode = "comm", a = 3, b = 5, cc = 4, rot = 0, rotT = 0, grp = 0, grpT = 0;
  k.modes([["comm", "Commutative"], ["assoc", "Associative"], ["dist", "Distributive"]], mode, m => mode = m);
  k.slider(`<span class="c2"><i>a</i></span>`, 1, 9, 1, a, v => a = v);
  k.slider(`<span class="c3"><i>b</i></span>`, 1, 9, 1, b, v => b = v);
  k.slider(`<span class="c4"><i>c</i></span>`, 1, 9, 1, cc, v => cc = v);
  k.button("Rearrange", () => { rotT = 1 - rotT; grpT = 1 - grpT; });
  k.loop(dt => {
    rot = lerp(rot, rotT, Math.min(1, dt * 5)); grp = lerp(grp, grpT, Math.min(1, dt * 5));
    c.begin(); const { w, h } = c; const cx = w / 2, cy = h / 2 + 20, g = c.g;
    let ro;
    if (mode === "comm") {
      const cell = Math.min(34, (Math.min(w, h) - 140) / 9);
      g.save(); g.translate(cx, cy); g.rotate(rot * Math.PI / 2);
      for (let i = 0; i < a; i++) for (let j = 0; j < b; j++) d.circle((j - (b - 1) / 2) * cell, (i - (a - 1) / 2) * cell, cell * .34, C.amber);
      g.strokeStyle = C.cyan; g.lineWidth = 2; g.beginPath(); g.moveTo(-(b / 2) * cell - 12, -(a / 2) * cell); g.lineTo(-(b / 2) * cell - 12, (a / 2) * cell); g.stroke();
      g.strokeStyle = C.pink; g.beginPath(); g.moveTo(-(b / 2) * cell, -(a / 2) * cell - 12); g.lineTo((b / 2) * cell, -(a / 2) * cell - 12); g.stroke();
      g.restore();
      const rows = rotT ? b : a, cols = rotT ? a : b;
      d.text(`${rows} rows of ${cols}`, cx, 50, { font: `24px ${F.math}`, color: C.text, align: "center" });
      ro = `<div><h2>Commutative law</h2><div class="ro-big" style="margin-top:8px"><span class="c2">${a}</span> × <span class="c3">${b}</span> = <span class="c3">${b}</span> × <span class="c2">${a}</span> = ${a * b}</div></div>
       <div class="ro-rows"><div class="row">${M("<i>a</i> + <i>b</i> = <i>b</i> + <i>a</i>")}<span class="lbl">order does not change a sum</span></div><div class="row">${M("<i>a</i> × <i>b</i> = <i>b</i> × <i>a</i>")}<span class="lbl">rotating the array does not change how many dots</span></div></div>
       <div class="landmark"><div class="big">${M(`${a} − ${b} ≠ ${b} − ${a}`)}</div><div class="note">Subtraction and division are not commutative: ${a} − ${b} = ${a - b < 0 ? "−" + (b - a) : a - b}, but ${b} − ${a} = ${b - a < 0 ? "−" + (a - b) : b - a}.</div></div>`;
    } else if (mode === "assoc") {
      const unit = Math.min(28, (w - 120) / (a + b + cc)), bh = 30, tot = (a + b + cc) * unit, x0 = cx - tot / 2, y = cy - 10;
      const seg = (x, n, col) => { for (let i = 0; i < n; i++) d.rect(x + i * unit, y, unit - 2, bh, k.alpha(col, .8), col); };
      const gap = 18;
      const gA = x0 - gap / 2, gB = x0 + a * unit + gap * grp - gap / 2, gC = x0 + (a + b) * unit + gap / 2;
      seg(gA, a, C.cyan); seg(gB, b, C.pink); seg(gC, cc, C.violet);
      const brk = (x1, x2, yy, col) => { d.line(x1, yy, x2, yy, col, 2); d.line(x1, yy, x1, yy + 8, col, 2); d.line(x2, yy, x2, yy + 8, col, 2); };
      const L1 = grp < .5;
      if (L1) brk(gA, gB + b * unit - 2, y - 16, C.amber); else brk(gB, gC + cc * unit - 2, y - 16, C.amber);
      brk(gA - 4, gC + cc * unit + 2, y + bh + 20, C.muted);
      d.text(L1 ? `(${a} + ${b}) + ${cc}` : `${a} + (${b} + ${cc})`, cx, 60, { font: `28px ${F.math}`, color: C.text, align: "center" });
      d.text(`= ${L1 ? a + b : a} + ${L1 ? cc : b + cc} = ${a + b + cc}`, cx, y + bh + 56, { font: `20px ${F.math}`, color: C.muted, align: "center" });
      ro = `<div><h2>Associative law</h2><div class="ro-big" style="margin-top:8px">(<span class="c2">${a}</span> + <span class="c3">${b}</span>) + <span class="c4">${cc}</span> = <span class="c2">${a}</span> + (<span class="c3">${b}</span> + <span class="c4">${cc}</span>)</div></div>
       <div class="ro-rows"><div class="row">${M(`(${a} + ${b}) + ${cc} = ${a + b} + ${cc} = ${a + b + cc}`)}</div><div class="row">${M(`${a} + (${b} + ${cc}) = ${a} + ${b + cc} = ${a + b + cc}`)}</div>
       <div class="row">${M(`(${a} × ${b}) × ${cc} = ${a} × (${b} × ${cc}) = ${a * b * cc}`)}<span class="lbl">the same law holds for multiplication</span></div></div>
       <div class="landmark"><div class="big">${M(`(${a + b + cc} − ${b}) − ${cc} ≠ ${a + b + cc} − (${b} − ${cc})`)}</div><div class="note">Subtraction is not associative: the left side is ${a + b + cc - b - cc}, the right side is ${a + b + cc - (b - cc)}.</div></div>`;
    } else {
      const sc = Math.min((w - 140) / (b + cc), (h - 150) / a), W1 = b * sc, W2 = cc * sc, H = a * sc;
      const x0 = cx - (W1 + W2) / 2, y0 = cy - H / 2 + 10, sp = 10 * grp;
      d.rect(x0 - sp / 2, y0, W1, H, k.alpha(C.pink, .35), C.pink, 2); d.rect(x0 + W1 + sp / 2, y0, W2, H, k.alpha(C.violet, .35), C.violet, 2);
      for (let i = 1; i < b; i++) d.line(x0 - sp / 2 + i * sc, y0, x0 - sp / 2 + i * sc, y0 + H, k.alpha(C.pink, .3)); for (let i = 1; i < cc; i++) d.line(x0 + W1 + sp / 2 + i * sc, y0, x0 + W1 + sp / 2 + i * sc, y0 + H, k.alpha(C.violet, .3));
      for (let i = 1; i < a; i++) d.line(x0 - sp / 2, y0 + i * sc, x0 + W1 + W2 + sp / 2, y0 + i * sc, k.alpha("#FFFFFF", .12));
      d.text(`${a}×${b}=${a * b}`, x0 - sp / 2 + W1 / 2, y0 + H / 2, { font: `600 16px ${F.mono}`, color: C.text, align: "center", base: "middle" });
      if (W2 > 44) d.text(`${a}×${cc}=${a * cc}`, x0 + W1 + sp / 2 + W2 / 2, y0 + H / 2, { font: `600 16px ${F.mono}`, color: C.text, align: "center", base: "middle" });
      d.text(String(a), x0 - sp / 2 - 14, y0 + H / 2, { font: `600 16px ${F.mono}`, color: C.cyan, align: "right", base: "middle" });
      d.text(String(b), x0 - sp / 2 + W1 / 2, y0 - 12, { font: `600 16px ${F.mono}`, color: C.pink, align: "center" }); d.text(String(cc), x0 + W1 + sp / 2 + W2 / 2, y0 - 12, { font: `600 16px ${F.mono}`, color: C.violet, align: "center" });
      d.text(grp < .5 ? `${a} × (${b} + ${cc})` : `${a}×${b} + ${a}×${cc}`, cx, 44, { font: `26px ${F.math}`, color: C.text, align: "center" });
      ro = `<div><h2>Distributive law</h2><div class="ro-big" style="margin-top:8px"><span class="c2">${a}</span>(<span class="c3">${b}</span> + <span class="c4">${cc}</span>) = <span class="c2">${a}</span>·<span class="c3">${b}</span> + <span class="c2">${a}</span>·<span class="c4">${cc}</span></div></div>
       <div class="ro-rows"><div class="row">${M(`${a} × ${b + cc}`)} = <span class="v">${a * (b + cc)}</span><span class="lbl">the whole rectangle</span></div><div class="row">${M(`${a * b} + ${a * cc}`)} = <span class="v">${a * b + a * cc}</span><span class="lbl">the two pieces</span></div></div>
       <div class="landmark"><div class="big">${M("<i>a</i> + 0 = <i>a</i>,  <i>a</i> × 1 = <i>a</i>")}</div><div class="note">Identities: adding 0 or multiplying by 1 changes nothing. Inverses: <i>a</i> + (−<i>a</i>) = 0 and <i>a</i> × (1/<i>a</i>) = 1 for <i>a</i> ≠ 0.</div></div>`;
    }
    k.setRO(ro + `<p class="narr">Press Rearrange to animate the regrouping. The total never changes.</p>`);
  });
};

/* ---------- order of operations: expression stepper (DOM) ---------- */
L["order-ops"] = k => {
  const { M } = k; const dom = k.dom();
  const presets = ["3 + 4 × 2", "(3 + 4) × 2", "20 − 12 ÷ 4 × 2", "8 ÷ 2 × (2 + 2)", "48 ÷ (6 − 2) + 3 × 5", "2 × (3 + 5)^2 − 10", "7 − 2 − 1", "5 + 2 × (9 − 3^2) + 6 ÷ 3"];
  let src = presets[0], states = [];
  function tokenize(s){
    s = s.replace(/×/g, "*").replace(/÷/g, "/").replace(/−/g, "-").replace(/\s+/g, "");
    const t = []; let i = 0;
    while (i < s.length) {
      const ch = s[i];
      if (/[0-9.]/.test(ch) || (ch === "-" && (t.length === 0 || ["+","-","*","/","^","("].includes(t[t.length - 1]))) && /[0-9.]/.test(s[i + 1] || "")) { let j = i + 1; while (j < s.length && /[0-9.]/.test(s[j])) j++; t.push(parseFloat(s.slice(i, j))); i = j; }
      else if ("+-*/^()".includes(ch)) { t.push(ch); i++; }
      else throw new Error("Unexpected " + ch);
    }
    return t;
  }
  const num = x => typeof x === "number";
  function one(t){
    // find innermost parens
    let open = -1;
    for (let i = 0; i < t.length; i++) { if (t[i] === "(") open = i; if (t[i] === ")") { if (open < 0) throw new Error("Unmatched )"); const inner = t.slice(open + 1, i); if (inner.length === 1 && num(inner[0])) return { t: [...t.slice(0, open), inner[0], ...t.slice(i + 1)], hot: [open, i], res: open, rule: "P", say: "Remove parentheses around a single number" }; return op(t, open + 1, i); } }
    if (t.includes("(")) throw new Error("Unmatched (");
    return op(t, 0, t.length);
  }
  function op(t, s, e){
    let idx = -1, rule;
    for (let i = e - 1; i >= s; i--) if (t[i] === "^") { idx = i; rule = "E"; break; }
    if (idx < 0) for (let i = s; i < e; i++) if (t[i] === "*" || t[i] === "/") { idx = i; rule = "MD"; break; }
    if (idx < 0) for (let i = s; i < e; i++) if (t[i] === "+" || t[i] === "-") { idx = i; rule = "AS"; break; }
    if (idx < 0) throw new Error("Nothing to evaluate");
    const A = t[idx - 1], B = t[idx + 1]; if (!num(A) || !num(B)) throw new Error("Malformed expression");
    const r = { "+": A + B, "-": A - B, "*": A * B, "/": A / B, "^": Math.pow(A, B) }[t[idx]];
    const say = { E: "Exponents come before multiplication and addition", MD: "Multiply or divide, working left to right", AS: "Add or subtract, working left to right" }[rule];
    return { t: [...t.slice(0, idx - 1), Math.round(r * 1e9) / 1e9, ...t.slice(idx + 2)], hot: [idx - 1, idx + 1], res: idx - 1, rule, say: s > 0 ? "Inside parentheses first. " + say : say };
  }
  function build(){
    states = []; let t = tokenize(src), guard = 0;
    states.push({ t, hot: null });
    while (!(t.length === 1 && num(t[0])) && guard++ < 60) { const s = one(t); states[states.length - 1].hot = s.hot; states[states.length - 1].rule = s.rule; states[states.length - 1].say = s.say; states.push({ t: s.t, fresh: s.res }); t = s.t; }
  }
  function naive(){ // left to right, ignoring precedence but honouring parentheses
    const ev = t => { let st = []; for (let i = 0; i < t.length; i++) { if (t[i] === "(") { let dep = 1, j = i + 1; while (dep) { if (t[j] === "(") dep++; if (t[j] === ")") dep--; j++; } st.push(ev(t.slice(i + 1, j - 1))); i = j - 1; } else st.push(t[i]); } let v = st[0]; for (let i = 1; i < st.length; i += 2) { const B = st[i + 1]; v = { "+": v + B, "-": v - B, "*": v * B, "/": v / B, "^": Math.pow(v, B) }[st[i]]; } return v; };
    return ev(tokenize(src));
  }
  const show = x => num(x) ? String(x).replace("-", "−") : { "*": "×", "/": "÷", "-": "−", "+": "+", "^": "^", "(": "(", ")": ")" }[x];
  function html(st, hotOn){
    let out = "", t = st.t;
    for (let i = 0; i < t.length; i++) {
      const hot = hotOn && st.hot && i >= st.hot[0] && i <= st.hot[1];
      const fresh = st.fresh === i;
      if (t[i] === "^") { out += `<sup class="tok${hot ? " hot" : ""}">${show(t[i + 1])}</sup>`; i++; continue; }
      if (t[i + 1] === "^" && hot === false && hotOn && st.hot && i + 2 >= st.hot[0] && i + 2 <= st.hot[1]) {}
      out += `<span class="tok${hot ? " hot" : ""}${fresh ? " new" : ""}">${show(t[i])}</span>${["+","-","*","/"].includes(t[i]) ? "" : ""} `;
    }
    return out.replace(/ <sup/g, "<sup");
  }
  let err = "";
  try { build(); } catch(e){ err = e.message; }
  const sel = k.select("Expression", presets.map(p => [p, p.replace(/\*/g, "×").replace(/\^2/g, "²")]), src, v => { src = v; txt.value = v; try { build(); err = ""; } catch(e){ err = e.message; } st.reset(); });
  void sel;
  const wrap = document.createElement("div"); wrap.className = "ctl grow"; wrap.innerHTML = `<label for="oo-in">Your own</label><input type="text" id="oo-in" style="flex:1;min-width:120px" value="${src}"><button type="button" class="btn-s" id="oo-go">Load</button>`; k.ctl.appendChild(wrap);
  const txt = wrap.querySelector("input");
  const load = () => { src = txt.value; try { build(); err = ""; } catch(e){ err = e.message; states = []; } st.reset(); };
  wrap.querySelector("#oo-go").onclick = load; txt.addEventListener("keydown", e => { if (e.key === "Enter") load(); });
  const st = k.stepper(() => states.length ? (states.length - 1) * 2 : 0, render, { ms: 900 });
  function render(){
    if (err || !states.length) { dom.innerHTML = `<div class="dom-expr" style="color:var(--pink);font-size:20px">Could not read that expression: ${err}. Use numbers, + − × ÷ ^ and parentheses.</div>`; k.setRO(`<div><h2>Result</h2></div>`); return; }
    const K = st.k, si = Math.floor(K / 2), phase = K % 2;
    const cur = states[Math.min(si, states.length - 1)];
    const done = si >= states.length - 1;
    const hist = states.slice(0, si).map(s => `<div>= ${html(s, false)}</div>`).join("");
    dom.innerHTML = `<div class="dom-expr">${done ? "" : ""}${html(done ? states[states.length - 1] : cur, phase === 1 || true)}</div><div class="hist">${hist}</div>`;
    if (!done && phase === 0) dom.querySelectorAll(".tok.hot").forEach(e => e.classList.remove("hot"));
    const res = states[states.length - 1].t[0], nv = Math.round(naive() * 1e9) / 1e9;
    const rules = [["P", "Parentheses (grouping)"], ["E", "Exponents"], ["MD", "Multiply & divide, left to right"], ["AS", "Add & subtract, left to right"]];
    const active = done ? null : cur.rule;
    k.setRO(`<div><h2>Result</h2><div class="ro-big" style="margin-top:8px">= <span class="num c5">${done ? String(res).replace("-", "−") : "?"}</span></div></div>
      <div class="ro-rows">${rules.map(([r, t]) => `<div class="row"><span class="m ${active === r ? "c1" : ""}" style="${active === r ? "" : "color:var(--faint)"}">${r === "MD" ? "×÷" : r === "AS" ? "+−" : r === "P" ? "( )" : "x<sup>n</sup>"}</span> <span class="v" style="font-family:var(--sans);${active === r ? "color:var(--amber)" : "color:var(--faint)"}">${t}</span></div>`).join("")}</div>
      <div class="landmark${nv !== res && done ? " hit" : ""}">${done ? `<div class="big">${M(nv === res ? "Same either way" : `Left to right gives ${String(nv).replace("-", "−")}`)}</div><div class="note">${nv === res ? "This expression happens to give the same answer read straight across. The rules still decide it." : `Ignoring the order of operations gives ${String(nv).replace("-", "−")} instead of ${String(res).replace("-", "−")}. The convention exists so everyone gets one answer.`}</div>` : `<div class="big">${M(phase === 0 ? "Find the next operation" : "Evaluate the highlighted part")}</div><div class="note">${cur.say}.</div>`}</div>
      <p class="narr">Each Step either picks the next operation or evaluates it.</p>`);
    if (phase === 1 && !done) { dom.querySelector(".dom-expr").innerHTML = html(cur, true); }
  }
  render();
};
})();
