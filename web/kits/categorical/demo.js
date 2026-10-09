/* Storyboard player (categorical kit, loaded with the other kits before app.js). window.InquireDemo
   A small looping picture that shows what a lab does before the reader touches it. Concept cards use it
   (docs/subjects/LAYERS.md → "Concept blocks"). The spec is plain data so content files can hold it:
     { kind: "dots", slots: 6, lit: 5, sweep: true, big: true, ms: 420, alt: "…" }
       slots   number of dot positions in the row
       lit     dots filled (amber, c1)
       sweep   each lit dot is lit in turn and stamped 1, 2, 3 … (like the lab's Count aloud)
       big     last frame lifts the final number out as a big amber numeral
       still   (any kind) no autoplay or ↻: the page shows frame i with api.goto(i); mount() leaves the api on host._demo
       grow    [5, 6, 7]  the count grows; a dashed cyan "n+1" dot always waits after the last lit dot (c2)
       frames  explicit [{lit, say, big, next}] when the shortcuts above are not enough
     { kind: "range", from: 14, to: 22, step: 1, gaps: true, unit: "seat", alt }   a numbered row (seats, days, pages…):
       each item gets its counting number 1, 2, 3 … in turn, the total lifts out; gaps: true then marks the gaps between
       neighbours (one fewer than the items: the b − a slip). Rows over 11 items show the first 6, "…", the last 3.
     { kind: "tens", n: 47, unit: "stitches", alt }   groups of ten (ten-frames) counted 10, 20, 30 …, then the ones.
   Task visuals (Intermediate "Everyday tasks") use these so each problem gets a picture of its own situation in a few bytes.
   InquireDemo.rangeCells(spec) → [{v, n} | {dots: true}] and InquireDemo.seqFrames(spec) (DOM-free, tested)
   InquireDemo.frames(spec) → frames, InquireDemo.slotStates(frame, slots) → [{s: "off|on|say|next", n}]  (DOM-free, tested)
   InquireDemo.mount(host, spec) → {replay, stop}; InquireDemo.mountAll(root) mounts every [data-spec] inside root.
   It plays once when it scrolls into view and again on tap or on the ↻ button. With reduced motion (OS or the app's
   setting) it shows the final frame and nothing moves. Colours come from CSS variables, so themes never break it. */
(function(){
const W = typeof window !== "undefined" ? window : globalThis;

function frames(spec){
  if (spec.frames) return spec.frames.map(f => ({ lit: f.lit | 0, say: f.say | 0, big: f.big == null ? null : f.big, next: !!f.next }));
  const out = [];
  if (spec.grow) { spec.grow.forEach(n => out.push({ lit: n | 0, say: 0, big: null, next: true })); return out; }
  const lit = spec.lit | 0;
  if (spec.sweep) { out.push({ lit, say: 0, big: null, next: false }); for (let i = 1; i <= lit; i++) out.push({ lit, say: i, big: null, next: false }); }
  else out.push({ lit, say: 0, big: null, next: !!spec.next });
  if (spec.big) out.push({ lit, say: lit, big: lit, next: false });
  return out;
}
function slotStates(f, slots){
  const out = [];
  for (let i = 1; i <= slots; i++) {
    if (i <= f.lit) out.push({ s: f.say === i ? "say" : "on", n: f.say >= i ? String(i) : "" });
    else if (i === f.lit + 1 && f.next) out.push({ s: "next", n: "n+1" });
    else out.push({ s: "off", n: "" });
  }
  return out;
}
const plural = (u, n) => !u ? "" : n === 1 ? u : /(s|x|ch|sh)$/.test(u) ? u + "es" : /[^aeiou]y$/.test(u) ? u.slice(0, -1) + "ies" : u + "s";
function rangeCells(spec){
  const step = spec.step || 1, vals = [];
  for (let v = spec.from; step > 0 ? v <= spec.to : v >= spec.to; v += step) vals.push(v);
  const cells = vals.map((v, i) => ({ v, n: i + 1 }));
  return cells.length > 11 ? [...cells.slice(0, 6), { dots: true }, ...cells.slice(-3)] : cells;
}
// One frame = {say: how many shown items carry their number, big: total or null, gaps: bool} (range) or {tens, ones, big} (tens)
function seqFrames(spec){
  const out = [];
  if (spec.kind === "range") {
    const cells = rangeCells(spec), shown = cells.filter(c => !c.dots).length, total = Math.round((spec.to - spec.from) / (spec.step || 1)) + 1;
    for (let i = 0; i <= shown; i++) out.push({ say: i, big: null, gaps: false });
    out.push({ say: shown, big: total, gaps: false });
    if (spec.gaps) out.push({ say: shown, big: total, gaps: true });
  } else if (spec.kind === "tens") {
    const T = Math.floor(spec.n / 10), O = spec.n % 10;
    for (let i = 0; i <= T; i++) out.push({ tens: i, ones: 0, big: null });
    for (let j = 1; j <= O; j++) out.push({ tens: T, ones: j, big: null });
    out.push({ tens: T, ones: O, big: spec.n });
  }
  return out;
}
W.InquireDemo = { frames, slotStates, rangeCells, seqFrames, plural };
if (typeof document === "undefined") return;

const NS = "http://www.w3.org/2000/svg";
const el = (tag, attrs, parent) => { const e = document.createElementNS(NS, tag); for (const k in attrs) e.setAttribute(k, attrs[k]); if (parent) parent.appendChild(e); return e; };
const calm = () => document.documentElement.hasAttribute("data-reduce-motion") || (W.matchMedia && W.matchMedia("(prefers-reduced-motion: reduce)").matches);

// Plays frames on a host: once when scrolled into view, again on tap or ↻; final frame only under reduced motion.
function player(host, svg, n, show, spec){
  let timer = null, played = false;
  const stop = () => { clearTimeout(timer); timer = null; };
  const ms = spec.ms || 420;
  const play = () => {
    stop(); played = true;
    if (calm() || n < 2) { show(n - 1); return; }
    let i = 0; show(0);
    const step = () => { i++; if (i >= n || !host.isConnected) return; show(i); timer = setTimeout(step, i >= n - 2 ? ms * 2.2 : ms); };
    timer = setTimeout(step, ms);
  };
  const goto = i => { stop(); played = true; show(Math.max(0, Math.min(n - 1, i))); };
  if (spec.still) { show(0); return { replay: () => {}, stop, goto }; }   // still: the page steps it with goto(i) (Concept "count it together")
  show(calm() ? n - 1 : 0);
  if (!calm()) {
    const btn = document.createElement("button"); btn.type = "button"; btn.className = "dm-replay"; btn.setAttribute("aria-label", "Replay the animation"); btn.textContent = "↻";
    btn.addEventListener("click", play); host.appendChild(btn);
    svg.addEventListener("click", play);
    if (W.IntersectionObserver) {
      const io = new IntersectionObserver(es => { if (es.some(e => e.isIntersecting) && !played) { play(); io.disconnect(); } }, { threshold: 0.5 });
      io.observe(host);
    } else play();
  }
  return { replay: play, stop, goto };
}
function mountRange(host, spec){
  const cells = rangeCells(spec), fr = seqFrames(spec), CW = 36, GAP = 8, H = 70, X0 = 4;
  const total = Math.round((spec.to - spec.from) / (spec.step || 1)) + 1, width = X0 + cells.length * (CW + GAP) + 132;
  host.textContent = "";
  const svg = el("svg", { viewBox: `0 0 ${width} ${H}`, role: "img", "aria-label": spec.alt || "Animation", preserveAspectRatio: "xMinYMid meet" }, host);
  const parts = cells.map((c, i) => {
    const x = X0 + i * (CW + GAP);
    if (c.dots) { el("text", { class: "dq-dots", x: x + CW / 2, y: 26 }, svg).textContent = "…"; return null; }
    const r = el("rect", { class: "dq-cell", x, y: 10, width: CW, height: 26, rx: 4, "data-s": "off" }, svg);
    el("text", { class: "dq-v", x: x + CW / 2, y: 24 }, svg).textContent = String(c.v);
    const n = el("text", { class: "dq-n", x: x + CW / 2, y: 54 }, svg);
    return { r, n, c, x };
  });
  const gaps = [];
  cells.forEach((c, i) => { const nx = cells[i + 1]; if (c.dots || !nx || nx.dots) return;
    const x = X0 + i * (CW + GAP) + CW + GAP / 2; gaps.push(el("path", { class: "dq-gap", d: `M${x - 3} 6 L${x} 2 L${x + 3} 6 M${x} 2 V40`, opacity: 0 }, svg)); });
  const bx = X0 + cells.length * (CW + GAP) + 6;
  const big = el("text", { class: "dm-big dq-big", x: bx, y: 34, opacity: 0 }, svg), cap = el("text", { class: "dq-cap", x: bx + 2, y: 54, opacity: 0 }, svg);
  const shown = parts.filter(Boolean);
  const show = i => { const f = fr[i];
    shown.forEach((p, j) => { const on = j < f.say; p.r.setAttribute("data-s", f.gaps ? "dim" : on ? (j === f.say - 1 && f.big == null ? "say" : "on") : "off"); p.n.textContent = on && !f.gaps ? String(p.c.n) : ""; });
    gaps.forEach(g => g.setAttribute("opacity", f.gaps ? 1 : 0));
    big.textContent = f.big == null ? "" : String(f.gaps ? total - 1 : f.big); big.setAttribute("opacity", f.big == null ? 0 : 1); big.setAttribute("data-k", f.gaps ? "gap" : "n");
    cap.textContent = f.big == null ? "" : f.gaps ? `gaps, not ${plural(spec.unit || "item", 2)}` : plural(spec.unit || "item", total); cap.setAttribute("opacity", f.big == null ? 0 : 1); };
  return player(host, svg, fr.length, show, spec);
}
function mountTens(host, spec){
  const fr = seqFrames(spec), T = Math.floor(spec.n / 10), O = spec.n % 10, D = 9, GW = 5 * D + 10, H = 70, X0 = 4;
  const width = X0 + T * (GW + 8) + Math.max(O, 1) * 0 + (O ? Math.ceil(O / 2) * D + 14 : 0) + 120;
  host.textContent = "";
  const svg = el("svg", { viewBox: `0 0 ${width} ${H}`, role: "img", "aria-label": spec.alt || "Animation", preserveAspectRatio: "xMinYMid meet" }, host);
  const groups = [];
  for (let g = 0; g < T; g++) { const gx = X0 + g * (GW + 8), dots = [];
    el("rect", { class: "dq-frame", x: gx, y: 8, width: GW, height: 2 * D + 10, rx: 3 }, svg);
    for (let k = 0; k < 10; k++) dots.push(el("circle", { class: "dm-c dq-d", cx: gx + 5 + D / 2 + (k % 5) * D, cy: 13 + D / 2 + Math.floor(k / 5) * D, r: 3.4, "data-s": "off" }, svg));
    const lab = el("text", { class: "dq-n", x: gx + GW / 2, y: 54 }, svg); groups.push({ dots, lab, v: (g + 1) * 10 }); }
  const ox = X0 + T * (GW + 8) + 4, ones = [];
  for (let j = 0; j < O; j++) ones.push(el("circle", { class: "dm-c dq-d", cx: ox + D / 2 + Math.floor(j / 2) * D, cy: 13 + D / 2 + (j % 2) * D, r: 3.4, "data-s": "off" }, svg));
  const olab = el("text", { class: "dq-n", x: ox + Math.ceil(O / 2) * D / 2, y: 54 }, svg);
  const bx = ox + (O ? Math.ceil(O / 2) * D + 14 : 4);
  const big = el("text", { class: "dm-big dq-big", x: bx, y: 34, opacity: 0 }, svg), cap = el("text", { class: "dq-cap", x: bx + 2, y: 54, opacity: 0 }, svg);
  const show = i => { const f = fr[i];
    groups.forEach((g, k) => { const on = k < f.tens; g.dots.forEach(d => d.setAttribute("data-s", on ? (k === f.tens - 1 && !f.ones && f.big == null ? "say" : "on") : "off")); g.lab.textContent = on ? String(g.v) : ""; });
    ones.forEach((d, j) => d.setAttribute("data-s", j < f.ones ? (j === f.ones - 1 && f.big == null ? "say" : "on") : "off"));
    olab.textContent = f.ones ? `+${f.ones}` : "";
    big.textContent = f.big == null ? "" : String(f.big); big.setAttribute("opacity", f.big == null ? 0 : 1);
    cap.textContent = f.big == null ? "" : `${T} ten${T === 1 ? "" : "s"} + ${O} ${plural(spec.unit || "one", 2)}`.replace(/ \+ 0 \w+$/, ""); cap.setAttribute("opacity", f.big == null ? 0 : 1); };
  return player(host, svg, fr.length, show, spec);
}
function mount(host, spec){
  const api = spec.kind === "range" ? mountRange(host, spec) : spec.kind === "tens" ? mountTens(host, spec) : mountDots(host, spec);
  host._demo = api; return api;
}
function mountDots(host, spec){
  const slots = spec.slots || 6, fr = frames(spec), P = 36, R = 15, H = 44;
  const hasBig = fr.some(f => f.big != null), width = Math.max(slots, 8) * P + 4;   // same width for every row, so dots match across cards
  host.textContent = "";
  const svg = el("svg", { viewBox: `0 0 ${width} ${H}`, role: "img", "aria-label": spec.alt || "Animation", preserveAspectRatio: "xMinYMid meet" }, host);
  const cells = [];
  for (let i = 0; i < slots; i++) {
    const cx = 2 + P / 2 + i * P, cy = H / 2;
    const c = el("circle", { class: "dm-c", cx, cy, r: R, "data-s": "off" }, svg);
    const t = el("text", { class: "dm-n", x: cx, y: cy + 1 }, svg);
    cells.push({ c, t });
  }
  const big = hasBig ? el("text", { class: "dm-big", x: width - 4, y: H / 2 + 14, "text-anchor": "end", opacity: 0 }, svg) : null;
  const show = f => {
    slotStates(f, slots).forEach((st, i) => { cells[i].c.setAttribute("data-s", st.s); cells[i].t.textContent = st.n; cells[i].t.setAttribute("data-k", st.s === "next" ? "next" : "num"); });
    if (big) { big.textContent = f.big == null ? "" : String(f.big); big.setAttribute("opacity", f.big == null ? 0 : 1); }
  };
  let timer = null, played = false;
  const stop = () => { clearTimeout(timer); timer = null; };
  const last = () => fr[fr.length - 1];
  let btn = null;
  const play = () => {
    stop(); played = true;
    if (calm() || fr.length < 2) { show(last()); return; }
    let i = 0; show(fr[0]);
    const step = () => { i++; if (i >= fr.length || !host.isConnected) return; show(fr[i]); timer = setTimeout(step, i === fr.length - 1 ? (spec.ms || 420) * 1.4 : (spec.ms || 420)); };
    timer = setTimeout(step, spec.ms || 420);
  };
  show(calm() ? last() : fr[0]);
  if (!calm()) {
    btn = document.createElement("button"); btn.type = "button"; btn.className = "dm-replay"; btn.setAttribute("aria-label", "Replay the animation"); btn.textContent = "↻";
    btn.addEventListener("click", play); host.appendChild(btn);
    svg.addEventListener("click", play);
    if (W.IntersectionObserver) {
      const io = new IntersectionObserver(es => { if (es.some(e => e.isIntersecting) && !played) { play(); io.disconnect(); } }, { threshold: 0.6 });
      io.observe(host);
    } else play();
  }
  return { replay: play, stop };
}
function mountAll(root){
  const out = [];
  root.querySelectorAll("[data-spec]").forEach(h => { try { out.push(mount(h, JSON.parse(h.getAttribute("data-spec")))); } catch (e) { console.error("InquireDemo", e); } });
  return out;
}
W.InquireDemo.mount = mount; W.InquireDemo.mountAll = mountAll;
})();
