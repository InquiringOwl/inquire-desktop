/* Storyboard player (categorical kit, loaded with the other kits before app.js). window.InquireDemo
   A small looping picture that shows what a lab does before the reader touches it. Concept cards use it
   (docs/subjects/LAYERS.md → "Concept blocks"). The spec is plain data so content files can hold it:
     { kind: "dots", slots: 6, lit: 5, sweep: true, big: true, ms: 420, alt: "…" }
       slots   number of dot positions in the row
       lit     dots filled (amber, c1)
       sweep   each lit dot is lit in turn and stamped 1, 2, 3 … (like the lab's Count aloud)
       big     last frame lifts the final number out as a big amber numeral
       grow    [5, 6, 7]  the count grows; a dashed cyan "n+1" dot always waits after the last lit dot (c2)
       frames  explicit [{lit, say, big, next}] when the shortcuts above are not enough
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
W.InquireDemo = { frames, slotStates };
if (typeof document === "undefined") return;

const NS = "http://www.w3.org/2000/svg";
const el = (tag, attrs, parent) => { const e = document.createElementNS(NS, tag); for (const k in attrs) e.setAttribute(k, attrs[k]); if (parent) parent.appendChild(e); return e; };
const calm = () => document.documentElement.hasAttribute("data-reduce-motion") || (W.matchMedia && W.matchMedia("(prefers-reduced-motion: reduce)").matches);

function mount(host, spec){
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
