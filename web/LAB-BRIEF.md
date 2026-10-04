# Lab brief: interactive models for Pre-Algebra and Algebra I

Every topic page in Inquire opens with an interactive model ("lab"): a stage (canvas or DOM) on the left, a readout panel on the right, and a controls bar below. The style follows an "Euler's formula" explainer: a live picture of the idea, readouts that update as you drag, and one highlighted "landmark" box that explains what the current state means.

Read these before writing anything:
- `web/src/labkit.js` — the toolkit (API below).
- Examples of finished labs: `web/src/labs1.js` (`rounding`, `division` stepper, `order-ops` DOM stepper), `web/src/labs2.js` (`integers` hops, `gcf-lcm`), `web/src/labs3.js` (`percent-apps` chart, `averages` draggable points, `proportions`, `units` DOM chain). Copy their structure and visual language.
- `web/TREE-SPEC.md` — for each topic: what the lab should show and the **colour keys** (c1 amber, c2 cyan, c3 pink, c4 violet, c5 green). The page's text legend uses the same colours, so follow them exactly.

## File format
Write only your own file, `web/labs/<name>.js` (name given in your task):
```js
/* ============ Labs: <what> ============ */
(function(){
const L = window.LABS;
L["pa-two-step"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  // state + controls …
  k.loop(dt => { c.begin(); /* draw */ k.setRO(`…`); });
};
})();
```
A lab function receives the kit `k`. It may return a cleanup function (rarely needed; loops, timers and observers are stopped automatically when the page changes).

## Toolkit API (`k`)
- `k.C` colours: `amber cyan pink violet green red text muted faint line line2 panel panel2 panel3 ink`. `k.alpha(hex, a)` → rgba string. `k.F` fonts: `math mono ui sans` (use `` `16px ${F.math}` ``).
- `k.reduce` true if the user prefers reduced motion (skip or shorten animations).
- Helpers: `k.fmt(v, d)` rounds and formats with U+2212 minus; `k.gcd`, `k.lcm`, `k.M(html)` wraps in a math span, `k.frac(n, d, cls)` stacked fraction HTML, `k.words(n)`.
- `k.canvas()` → `c` with `c.g` (2D context), `c.w`, `c.h` (CSS px, update on resize), `c.begin()` (call at the start of each frame), `c.xy(pointerEvent)` → `{x, y}`, and `c.d` drawing helpers:
  `d.text(s, x, y, {font, color, align, base})` (returns width), `d.width(s, font)`, `d.line(x1,y1,x2,y2,color,w,dash)`, `d.rect(x,y,w,h,fill,stroke,lw)`, `d.rr(x,y,w,h,r,fill,stroke,lw)` rounded rect, `d.circle(x,y,r,fill,stroke,lw)`, `d.arrow(x1,y1,x2,y2,color,w)`, `d.hop(x1,x2,y,height,color,w)` arc with arrowhead, `d.pow(base, exp, x, y, {size,family,color,ecolor})` draws a power, `d.powW(...)` its width.
- `k.plot(c, {xmin,xmax,ymin,ymax,pad:{l,r,t,b},equal,xstep,ystep,xlabel,ylabel})` → `P` with `P.grid()`, `P.axes()`, `P.fn(f, color, width, from, to, dash)` (breaks at asymptotes), `P.line(x1,y1,x2,y2,color,w,dash)`, `P.point(x,y,color,r,open)`, `P.label(text,x,y,color,{dx,dy,align})`, `P.X(x)`, `P.Y(y)`, `P.inv(px,py)` → data coords, `P.clip(fn)`. Create it inside the loop each frame (it reads the current canvas size).
- `k.dom()` → a scrollable div filling the stage, for DOM-based labs (expression steppers). Useful classes: `.dom-expr` (big centred math), `.tok` with `.hot` (amber highlight) / `.new` (green), `.hist` (history lines), `.chain .fb .t .b` (fraction boxes).
- `k.loop(fn(dt, t))` animation loop. `k.every(ms, fn)` → stop function.
- Controls (added to the controls bar in order): `k.slider(labelHTML, min, max, step, value, onInput, fmtFn)` → `{el, v, set(v), setMax, setMin}`; `k.number(labelHTML, min, max, value, onChange, width)` (**integers only**; use a slider or `k.select` for decimals); `k.select(labelHTML, [[value, text], …], value, onChange)`; `k.button(label, onClick, cls)` with cls `"btn"` (primary), `"btn ghost"`, `"btn-s"` (small); `k.check(label, value, onChange)`; `k.modes([[key,label],…], active, onPick)` (mode buttons at the top-left of the stage, leave ~44 px clear at the top of your drawing for them); `k.stepper(() => count, onStep, {ms})` adds Play / Step / Reset and exposes `.k` (current step 0…count), `.reset()`; `k.hint(text)` small hint at the stage's bottom-right.
- `k.setRO(html)` sets the readout (only re-renders when the string changes, so call it every frame).

## Readout structure (match the existing labs)
```html
<div><h2>Result label</h2><div class="ro-big" style="margin-top:8px">… <span class="num c1">42</span></div></div>
<div class="ro-rows">
  <div class="row"><span class="m">…formula…</span> = <span class="v c2">3</span><span class="lbl">short explanation</span></div>
</div>
<div class="landmark hit"><div class="big">…key insight in math…</div><div class="note">One or two sentences on what this state means.</div></div>
<p class="narr">What to try next.</p>
```
Use `landmark hit` (amber border) for special states: a solution found, a special case (no solution, all reals, extraneous root, negative discriminant, vertical line, zero slope…).

## Quality bar
- The picture must teach the idea (balance scale, tiles, number line, graph with the relevant features marked), not just print numbers. At least one direct manipulation (slider, drag, stepper). Steppers for procedures (solve step by step) with Play / Step / Reset.
- **Mathematically exact.** Use exact integer/rational arithmetic where the page shows exact answers (write a tiny fraction helper if needed). Show negatives with U+2212 (`k.fmt` does this). Handle every edge case the controls allow (a = 0, division by zero, no real roots, vertical lines, identical lines, empty solution sets) with a clear message instead of NaN/Infinity.
- Readable at small sizes: the stage can be as small as ~340 × 340 px on a phone. Compute layout from `c.w`/`c.h`; never assume 1440 px. Keep labels inside the canvas.
- Animate modestly (easing toward targets, stepping), respect `k.reduce`.
- No external libraries, no network, no `alert/confirm/prompt`, no `localStorage`.

## Test (required)
From the repo root, for each of your topics:
```
CLICK=1 NODE_PATH=$(npm root -g) node tools/snap.js <topic-id>
```
It builds a private copy of the page (skipping any file with a syntax error — if yours is skipped, fix it), opens the topic, clicks the first two lab buttons, saves `/tmp/codex-snap/<topic-id>.png`, and prints console errors. **Look at every screenshot with the Read tool** and fix anything clipped, overlapping, unreadable, blank or wrong. Also test once at phone width: `W=400 H=860 CLICK=1 … node tools/snap.js <id>`. There must be no console errors from your labs. The text sections below the lab may be empty or a stub while other writers finish the content; that's expected.
