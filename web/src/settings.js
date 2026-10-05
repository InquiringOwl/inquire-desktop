/* Settings window (gear in the top bar, and the Settings button on the sign-in screen).
   A sub-window that opens in front of the app; the app behind it fogs and eases back (body.set-open).
   Sections: Appearance (12 themes), Display & comfort, Shortcuts, Account, Data & progress, About.
   Esc opens Settings (and closes it); off with Shortcuts → "Esc opens Settings" (escKey).
   Two sizes: uiScale = zoom on #app (whole interface); textSize = --ts on :root, which scaleText() multiplies into every
   px font size / line height in the stylesheets (CSSOM rewrite, only once a size other than 100% is chosen).
   Stored per computer in localStorage "codex.settings" (codex.* prefix kept for old installs). Themes only change
   surfaces (backgrounds, panels, lines, frame accent); the content colours c1–c5 keep their meaning in every theme.
   Also opens documents (the EULA, web/src/eula.js) in the same kind of window: InquireSettings.openDoc("eula"). */
(function () {
"use strict";
const KEY = "codex.settings";
const DEF = { theme: "capsuleer", uiScale: 1, textSize: 1, reduceMotion: false, playIntro: true, soundFx: true, escKey: true, invertScroll: false, noteLink: "#B49BFF" };
const load = () => {
  let o = {}; try { o = JSON.parse(localStorage.getItem(KEY) || "{}") || {}; } catch (e) {}
  if (o.uiScale == null && typeof o.textScale === "number") o.uiScale = o.textScale; // the old single "Text & interface size" was a zoom
  delete o.textScale;
  return Object.assign({}, DEF, o);
};
let S = load();
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} };
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

/* ---------- themes ----------
   bg = primary (window background), surface = secondary (panels), accent = detail (frames, glows).
   tint = second background glow. glass = translucent, blurred panels over a stronger glow. */
const THEMES = [
  { id: "capsuleer", fam: "Dark", name: "Capsuleer", bg: "#070A10", surface: "#111827", accent: "#5CC8E0", tint: "#B49BFF", note: "The original console" },
  { id: "obsidian", fam: "Dark", name: "Obsidian", bg: "#050506", surface: "#151517", accent: "#F2B84B", tint: "#8A6A22", text: "#E8E4DC", note: "Neutral black, brass trim" },
  { id: "old-growth", fam: "Nature", name: "Old Growth", bg: "#060D09", surface: "#11211A", accent: "#7BD88F", tint: "#3F7A4F", text: "#DCEBDF", note: "Deep forest canopy" },
  { id: "moss", fam: "Nature", name: "Moss & Lichen", bg: "#0B0F08", surface: "#1C2515", accent: "#B5D65A", tint: "#C9B458", text: "#E5EAD8", note: "Olive, moss and sunlit lichen" },
  { id: "abyssal", fam: "Water", name: "Abyssal", bg: "#030B14", surface: "#0B1F32", accent: "#4FC3F7", tint: "#2C5DA8", text: "#D8E8F4", note: "Open ocean at depth" },
  { id: "tidepool", fam: "Water", name: "Tidepool", bg: "#04110F", surface: "#0D2927", accent: "#5EE0C8", tint: "#3B8FA8", text: "#D6EFEA", note: "Teal shallows and sea glass" },
  { id: "ember", fam: "Earth", name: "Ember", bg: "#0F0606", surface: "#251111", accent: "#E5675B", tint: "#F2B84B", text: "#F1E0DB", note: "Banked coals, warm red" },
  { id: "canyon", fam: "Earth", name: "Canyon Clay", bg: "#120B07", surface: "#2B1B12", accent: "#E0975A", tint: "#B5653A", text: "#F1E4D7", note: "Terracotta and desert stone" },
  { id: "mist", fam: "Airy", name: "Morning Mist", bg: "#1D2734", surface: "#2C3B50", accent: "#A6D8F4", tint: "#E3EEF8", text: "#F0F4FA", muted: "#B6C3D5", faint: "#8796AC", note: "Soft blue-grey, lighter" },
  { id: "dusk", fam: "Airy", name: "Lavender Dusk", bg: "#231E31", surface: "#372F4C", accent: "#D4BBFF", tint: "#F3C6E0", text: "#F3EFFB", muted: "#C0B6D6", faint: "#9187A9", note: "Pale violet evening sky" },
  { id: "frost", fam: "Glass", name: "Frosted Glass", bg: "#0A1424", surface: "#1C2D48", accent: "#C4E8FF", tint: "#B49BFF", glow: "#5CC8E0", glass: true, note: "Clear panels over blue light" },
  { id: "aurora", fam: "Glass", name: "Aurora Glass", bg: "#06100F", surface: "#15282B", accent: "#9CF0C8", tint: "#D97AE6", glow: "#4FD1A5", glass: true, note: "Smoked glass, northern lights" }
];
const FAMS = [["Dark", "Darker tones"], ["Nature", "Nature tones"], ["Water", "Watery tones"], ["Earth", "Red & earthy tones"], ["Airy", "Lighter, airy tones"], ["Glass", "Glassy tones"]];
const VARS = ["--void", "--ink", "--panel", "--panel-2", "--panel-3", "--line", "--line-2", "--text", "--muted", "--faint", "--tint-1", "--tint-2",
  "--chrome-1", "--chrome-2", "--win-1", "--win-2", "--slot-1", "--slot-2", "--slot-h1", "--slot-h2", "--wash", "--sky", "--stage-sky", "--frame", "--blur", "--glow",
  "--node-1", "--node-2", "--node-line", "--node-line-2", "--node-text", "--orb-1", "--orb-2", "--era-1", "--era-2"];

const hex = h => [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16));
const toHex = c => "#" + c.map(v => Math.round(Math.max(0, Math.min(255, v))).toString(16).padStart(2, "0")).join("");
const mix = (a, b, t) => { const A = hex(a), B = hex(b); return toHex(A.map((v, i) => v + (B[i] - v) * t)); };
const rgba = (h, a) => `rgba(${hex(h).join(",")},${a})`;
function themeVars(t) {
  const text = t.text || "#DDE4EF", W = "#FFFFFF", g = !!t.glass, al = g ? .5 : .92;
  const panel2 = mix(t.surface, W, .035), panel3 = mix(t.surface, W, .07);
  return {
    "--void": t.bg, "--ink": mix(t.bg, t.surface, .3), "--panel": t.surface, "--panel-2": panel2, "--panel-3": panel3,
    "--line": mix(t.surface, text, .13), "--line-2": mix(t.surface, text, .23), "--text": text,
    "--muted": t.muted || mix(text, t.bg, .38), "--faint": t.faint || mix(text, t.bg, .6),
    "--tint-1": rgba(t.glow || t.accent, g ? .34 : .11), "--tint-2": rgba(t.tint, g ? .3 : .09),
    "--chrome-1": g ? rgba(mix(t.bg, t.surface, .6), .55) : mix(t.bg, t.surface, .6), "--chrome-2": g ? rgba(mix(t.bg, t.surface, .2), .6) : mix(t.bg, t.surface, .2),
    "--win-1": rgba(panel2, al), "--win-2": rgba(mix(t.bg, t.surface, .4), al + .02),
    "--slot-1": rgba(panel3, g ? .45 : .85), "--slot-2": rgba(mix(t.bg, t.surface, .5), g ? .5 : .9),
    "--slot-h1": rgba(mix(panel3, t.accent, .14), g ? .6 : .9), "--slot-h2": rgba(mix(t.bg, t.surface, .55), g ? .6 : .95),
    "--wash": rgba(mix(t.bg, t.surface, .3), g ? .45 : .75), "--sky": mix(mix(t.bg, t.surface, .3), t.accent, .05), "--stage-sky": mix(panel2, t.accent, .05),
    "--frame": t.accent, "--blur": g ? "14px" : "0px", "--glow": rgba(t.accent, .35),
    // neutral tree nodes (locked / planned), node orbs and the era bar take the theme's surface, lightly tinted with its accent
    "--node-1": mix(mix(t.surface, text, .06), t.accent, .05), "--node-2": mix(t.bg, t.surface, .7), "--node-line": mix(mix(t.surface, text, .22), t.accent, .1),
    "--node-line-2": mix(mix(t.surface, text, .3), t.accent, .12), "--node-text": mix(text, t.surface, .3),
    "--orb-1": mix(mix(t.surface, text, .17), t.accent, .14), "--orb-2": mix(t.bg, t.surface, .35),
    "--era-1": rgba(mix(mix(t.surface, text, .05), t.accent, .1), g ? .8 : .95), "--era-2": rgba(mix(t.bg, t.surface, .6), g ? .8 : .95)
  };
}
function applyTheme(id) {
  const t = THEMES.find(x => x.id === id) || THEMES[0], st = document.documentElement.style;
  if (t.id === "capsuleer") VARS.forEach(v => st.removeProperty(v)); // default look = the stylesheet's own values
  else { const v = themeVars(t); VARS.forEach(k => st.setProperty(k, v[k])); }
  document.documentElement.dataset.theme = t.id;
  document.documentElement.toggleAttribute("data-glass", !!t.glass);
}
/* Text size: every px font size and px line height in the stylesheets becomes calc(… * var(--ts, 1)).
   Font shorthands that use var(--ui) keep their text form in the CSSOM, so the size token is rewritten in place. */
const PX = /(\d*\.?\d+)px/, scaled = new WeakSet(), tsCalc = v => `calc(${v}px * var(--ts, 1))`;
function scaleDecl(st) {
  const f = st.getPropertyValue("font");
  if (f && PX.test(f) && !f.includes("--ts"))
    st.setProperty("font", f.replace(/(\d*\.?\d+)px(?:\s*\/\s*(\d*\.?\d+)px)?/, (m, a, b) => tsCalc(a) + (b ? " / " + tsCalc(b) : "")), st.getPropertyPriority("font"));
  ["font-size", "line-height"].forEach(k => {
    const v = st.getPropertyValue(k).trim(), m = /^(\d*\.?\d+)px$/.exec(v);
    if (m) st.setProperty(k, tsCalc(m[1]), st.getPropertyPriority(k));
  });
}
function scaleRules(rules) {
  for (const r of rules) {
    if (r.style) scaleDecl(r.style);
    if (r.cssRules) scaleRules(r.cssRules);
  }
}
function scaleText() {
  for (const sh of document.styleSheets) {
    if (scaled.has(sh)) continue;
    try { scaleRules(sh.cssRules); scaled.add(sh); } catch (e) {} // cross-origin sheets (fonts) are skipped
  }
}
let textOn = false;
function applySizes() {
  const app = document.getElementById("app");
  if (app) app.style.zoom = S.uiScale === 1 ? "" : String(S.uiScale);
  if (S.textSize !== 1) textOn = true;
  if (textOn) scaleText();
  document.documentElement.style.setProperty("--ts", String(S.textSize));
}
window.addEventListener("inquire:route", () => { if (textOn) scaleText(); }); // style sheets a screen or lab adds later
const LINKCOL = [["#B49BFF", "Violet"], ["#5CC8E0", "Cyan"], ["#F2B84B", "Amber"], ["#F07CA0", "Pink"], ["#7BD88F", "Green"], ["#D97AE6", "Magenta"], ["#B5D65A", "Lime"], ["#FFFFFF", "White"]];
const hexOk = c => /^#[0-9a-f]{6}$/i.test(c);
function applyAll() {
  applyTheme(S.theme);
  document.documentElement.style.setProperty("--note-link", hexOk(S.noteLink) ? S.noteLink : DEF.noteLink);
  applySizes();
  document.documentElement.toggleAttribute("data-reduce-motion", !!S.reduceMotion);
}
applyAll();

/* ---------- window ---------- */
const TABS = [["look", "Appearance"], ["display", "Display & comfort"], ["keys", "Shortcuts"], ["usage", "Usage"], ["account", "Account"], ["data", "Data & progress"], ["about", "About"]];
const ov = document.createElement("div");
ov.className = "set-ov"; ov.hidden = true;
ov.innerHTML = `<div class="set-win win" role="dialog" aria-modal="true" aria-labelledby="set-title">
  <header class="set-h"><span class="dot"></span><h2 id="set-title">Settings</h2><button type="button" class="set-x" aria-label="Close settings">✕</button></header>
  <div class="set-body"><nav class="set-tabs" role="tablist" aria-label="Settings sections"></nav><section class="set-pane" tabindex="-1"></section></div>
</div>`;
document.body.appendChild(ov);
const win = ov.querySelector(".set-win"), tabsEl = ov.querySelector(".set-tabs"), pane = ov.querySelector(".set-pane"), titleEl = ov.querySelector("#set-title");
let tab = "look", lastFocus = null, mode = "settings";
TABS.forEach(([id, label]) => {
  const b = document.createElement("button");
  b.type = "button"; b.className = "set-tab"; b.setAttribute("role", "tab"); b.dataset.tab = id; b.textContent = label;
  b.onclick = () => show(id);
  tabsEl.appendChild(b);
});
function open(which) {
  mode = "settings"; win.classList.remove("is-doc"); titleEl.textContent = "Settings"; tabsEl.hidden = false;
  if (!ov.hidden) { show(which || tab); return; }
  lastFocus = document.activeElement;
  ov.hidden = false; requestAnimationFrame(() => { if (!ov.hidden) document.body.classList.add("set-open"); });
  show(which || tab);
  setTimeout(() => (tabsEl.querySelector('[aria-selected="true"]') || win).focus({ preventScroll: true }), 30);
}
function openDoc(id) {
  const d = (window.InquireDocs || {})[id]; if (!d) return;
  const was = !ov.hidden;
  if (!was) lastFocus = document.activeElement;
  mode = "doc"; win.classList.add("is-doc"); titleEl.textContent = d.title; tabsEl.hidden = true;
  pane.innerHTML = `<div class="set-doc">${d.html}</div>` + (was ? `<p class="set-row"><button type="button" class="btn-s" data-back>◀ Back to settings</button></p>` : "");
  const bk = pane.querySelector("[data-back]"); if (bk) bk.onclick = () => open("about");
  ov.hidden = false; requestAnimationFrame(() => { if (!ov.hidden) document.body.classList.add("set-open"); });
  pane.scrollTop = 0; setTimeout(() => pane.focus({ preventScroll: true }), 30);
}
function close() {
  document.body.classList.remove("set-open"); ov.hidden = true;
  if (lastFocus && document.contains(lastFocus)) try { lastFocus.focus({ preventScroll: true }); } catch (e) {}
}
ov.querySelector(".set-x").onclick = close;
ov.addEventListener("pointerdown", e => { if (e.target === ov) close(); });
document.addEventListener("keydown", e => {
  if (ov.hidden) {
    // Esc opens Settings, unless something smaller is open that Esc should close first (Assist dock, a word card) or the intro is still playing
    if (e.key !== "Escape" || !S.escKey || e.defaultPrevented || e.repeat || e.altKey || e.ctrlKey || e.metaKey) return;
    if (document.querySelector(".gl-pop, .fav-pop, .tm-menu, .nk-pick, .nr-panel, .ask-ov, .nv-pop")) return;
    const dk = document.getElementById("dk-win");
    if (dk && !dk.hidden) { if (!dk.contains(e.target)) { e.preventDefault(); const x = dk.querySelector(".dk-x"); if (x) x.click(); } return; }
    const intro = document.querySelector(".inqi");
    if (intro && !intro.hidden && !intro.classList.contains("is-form")) return;
    e.preventDefault(); e.stopPropagation(); open(); return;
  }
  if (e.key === "Escape") { e.preventDefault(); e.stopPropagation(); close(); return; }
  if (e.key === "Tab") { // keep focus inside the window
    const f = [...win.querySelectorAll('button:not([disabled]),input:not([disabled]),select,a[href],[tabindex="0"]')].filter(el => el.offsetParent);
    if (!f.length) return;
    if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
    else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
  }
  e.stopPropagation();
}, true);

function show(id) {
  tab = id;
  tabsEl.querySelectorAll(".set-tab").forEach(b => b.setAttribute("aria-selected", String(b.dataset.tab === id)));
  pane.innerHTML = ""; pane.scrollTop = 0;
  ({ look: paneLook, display: paneDisplay, keys: paneKeys, usage: paneUsage, account: paneAccount, data: paneData, about: paneAbout })[id]();
}
const h = html => { const d = document.createElement("div"); d.innerHTML = html; return d.firstElementChild; };
const msgEl = () => h(`<p class="set-msg" role="status" aria-live="polite"></p>`);
const say = (el, t, ok) => { el.textContent = t; el.classList.toggle("ok", !!ok); };

/* Appearance */
function swatch(t) {
  return `<span class="set-sw${t.glass ? " set-glass" : ""}" style="--p:${t.bg};--s:${t.surface};--d:${t.accent};--t:${t.glow || t.tint}" aria-hidden="true">
    <i class="set-swp"></i><i class="set-sws"></i><i class="set-swd"></i></span>`;
}
function paneLook() {
  const wrap = h(`<div><p class="set-lede">Pick the colours of the console. Each square shows the theme's <b>primary</b> (background), <b>secondary</b> (panels) and <b>detail</b> (frames and glow) colours. Topic colours stay the same in every theme so diagrams keep their meaning.</p></div>`);
  FAMS.forEach(([fam, label]) => {
    const g = h(`<div class="set-thfam"><h3>${label}</h3><div class="set-thgrid" role="radiogroup" aria-label="${label}"></div></div>`);
    THEMES.filter(t => t.fam === fam).forEach(t => {
      const b = h(`<button type="button" class="set-th" role="radio" aria-checked="${S.theme === t.id}" data-id="${t.id}">
        ${swatch(t)}<span class="set-thname">${esc(t.name)}</span><span class="set-thnote">${esc(t.note)}</span>
        <span class="set-thchips"><i style="background:${t.bg}" title="Primary ${t.bg}"></i><i style="background:${t.surface}" title="Secondary ${t.surface}"></i><i style="background:${t.accent}" title="Detail ${t.accent}"></i></span></button>`);
      b.onclick = () => { S.theme = t.id; save(); applyTheme(t.id); wrap.querySelectorAll(".set-th").forEach(x => x.setAttribute("aria-checked", String(x.dataset.id === t.id))); };
      g.querySelector(".set-thgrid").appendChild(b);
    });
    wrap.appendChild(g);
  });
  // colour of linked words in notes (links to other notes and back to lessons)
  const lc = h(`<div class="set-thfam"><h3>Note links</h3><div class="set-item set-lcitem"><div><p>Colour of linked words in your notes: links to other notes and quotes linked back to a lesson.
      <span class="set-lcdemo">Example: see <a class="nlink" tabindex="-1">my fractions note</a>.</span></p></div>
    <div class="set-lc" role="radiogroup" aria-label="Note link colour">${LINKCOL.map(([c, n]) => `<button type="button" role="radio" class="set-lcs" data-c="${c}" aria-checked="${S.noteLink.toLowerCase() === c.toLowerCase()}" title="${n}" aria-label="${n}" style="--c:${c}"></button>`).join("")}
      <label class="set-lcs set-lcpick" title="Any colour" aria-label="Any colour"><input type="color" value="${hexOk(S.noteLink) ? S.noteLink : DEF.noteLink}"></label></div></div></div>`);
  const mark = () => lc.querySelectorAll(".set-lcs[data-c]").forEach(b => b.setAttribute("aria-checked", String(b.dataset.c.toLowerCase() === S.noteLink.toLowerCase())));
  lc.querySelectorAll(".set-lcs[data-c]").forEach(b => b.onclick = () => { S.noteLink = b.dataset.c; save(); applyAll(); mark(); lc.querySelector('input[type="color"]').value = S.noteLink; });
  const pick = lc.querySelector('input[type="color"]');
  pick.oninput = () => { S.noteLink = pick.value; applyAll(); mark(); };
  pick.onchange = () => { S.noteLink = pick.value; save(); };
  wrap.appendChild(lc);
  pane.appendChild(wrap);
}

/* Display & comfort */
function fader(key, label, desc, min, max, step, marks) {
  const v = S[key], pct = x => Math.round(x * 100) + "%";
  return `<div class="set-item set-faditem" data-fader="${key}"><div><h3>${label}</h3><p>${desc}</p></div>
    <div class="set-fader">
      <div class="set-fadrow"><button type="button" class="set-fstep" data-d="-1" aria-label="Smaller ${label.toLowerCase()}">−</button>
        <div class="set-frange"><input type="range" min="${min}" max="${max}" step="${step}" value="${v}" aria-label="${label}" aria-valuetext="${pct(v)}" style="--f:${(v - min) / (max - min) * 100}%;--n:${Math.round((max - min) / step)}">
          <div class="set-fmarks" aria-hidden="true">${marks.map(m => `<span style="left:${(m - min) / (max - min) * 100}%">${pct(m)}</span>`).join("")}</div></div>
        <button type="button" class="set-fstep" data-d="1" aria-label="Larger ${label.toLowerCase()}">+</button>
        <output class="set-fval">${pct(v)}</output>
        <button type="button" class="set-freset" title="Back to 100%"${v === 1 ? " disabled" : ""}>Reset</button></div>
    </div></div>`;
}
function paneDisplay() {
  const w = h(`<div>
    ${fader("textSize", "Text size", "Only the words: headings, pages, menus and labels. Layout and diagrams keep their size.", .8, 1.5, .05, [.8, 1, 1.25, 1.5])}
    ${fader("uiScale", "Interface size", "Scales the whole console: panels, buttons, trees and labs, with their text.", .75, 1.4, .05, [.75, 1, 1.2, 1.4])}
    <div class="set-item"><div><h3>Reduce motion</h3><p>Turns off animations and slides, and shows the sign-in screen without its intro.</p></div>
      <label class="set-tog"><input type="checkbox" data-k="reduceMotion"${S.reduceMotion ? " checked" : ""}><span></span></label></div>
    <div class="set-item"><div><h3>Play the intro on launch</h3><p>The neuron storm and logo before the sign-in form. Off: the form appears at once.</p></div>
      <label class="set-tog"><input type="checkbox" data-k="playIntro"${S.playIntro ? " checked" : ""}><span></span></label></div>
    <div class="set-item"><div><h3>Sound effects</h3><p>The unlock sound when you sign in.</p></div>
      <label class="set-tog"><input type="checkbox" data-k="soundFx"${S.soundFx ? " checked" : ""}><span></span></label></div>
  </div>`);
  w.querySelectorAll("[data-fader]").forEach(row => {
    const key = row.dataset.fader, r = row.querySelector("input"), out = row.querySelector("output"), rs = row.querySelector(".set-freset");
    const min = +r.min, max = +r.max, step = +r.step;
    const set = (v, commit) => {
      v = Math.round(Math.min(max, Math.max(min, v)) / step) * step; v = Math.round(v * 100) / 100;
      r.value = v; r.style.setProperty("--f", (v - min) / (max - min) * 100 + "%");
      out.textContent = Math.round(v * 100) + "%"; r.setAttribute("aria-valuetext", out.textContent); rs.disabled = v === 1;
      S[key] = v; applySizes(); if (commit) save();
    };
    r.oninput = () => set(+r.value, false);
    r.onchange = () => set(+r.value, true);
    row.querySelectorAll(".set-fstep").forEach(b => b.onclick = () => set(S[key] + step * +b.dataset.d, true));
    rs.onclick = () => set(1, true);
  });
  w.querySelectorAll(".set-tog input").forEach(i => i.onchange = () => { S[i.dataset.k] = i.checked; save(); applyAll(); });
  pane.appendChild(w);
}

/* Usage */
function paneUsage() {
  const w = h(`<div>
    <p class="set-lede">How the mouse wheel and trackpad move things.</p>
    <div class="set-item"><div><h3>Invert scroll direction</h3><p>Off: Inquire scrolls the way your computer is set. On: the wheel or trackpad scrolls the other way (down ⇄ up) in pages, lists, the glossary and when panning skill trees. Try it in the box below.</p></div>
      <label class="set-tog"><input type="checkbox" data-k="invertScroll"${S.invertScroll ? " checked" : ""}><span></span></label></div>
    <div class="set-scrolltry" tabindex="0" aria-label="Scroll test area">${Array.from({ length: 12 }, (_, i) => `<p>Line ${i + 1}: try scrolling here.</p>`).join("")}</div>
  </div>`);
  w.querySelector('[data-k="invertScroll"]').onchange = e => { S.invertScroll = e.target.checked; save(); };
  // Oxford Dictionaries API keys for right-click → Dictionary. Kept in their own key (not in settings backups).
  let dk = {}; try { dk = JSON.parse(localStorage.getItem("codex.dictkeys") || "{}") || {}; } catch (e) {}
  const ox = h(`<div class="set-form set-ox">
    <h3>Oxford dictionary</h3>
    <p class="set-small">Right-click a selected word → <b>Dictionary</b> shows its definition here in the app. With an Oxford Dictionaries API app ID and key it uses Oxford; without one it uses a free dictionary built from Wiktionary. Get keys at developer.oxforddictionaries.com (a free sandbox trial or a paid plan). They are kept only on this computer.</p>
    <label><span>App ID</span><input data-x="appId" autocomplete="off" spellcheck="false" value="${esc(dk.appId || "")}"></label>
    <label><span>App key</span><input data-x="appKey" type="password" autocomplete="off" spellcheck="false" value="${esc(dk.appKey || "")}"></label>
    <div class="set-row"><button type="button" class="btn-s" data-a="oxsave">Save</button><button type="button" class="btn-s" data-a="oxclear">Remove keys</button><span class="set-msg" role="status"></span></div></div>`);
  const oxm = ox.querySelector(".set-msg");
  ox.querySelector('[data-a="oxsave"]').onclick = () => { const v = { appId: ox.querySelector('[data-x="appId"]').value.trim(), appKey: ox.querySelector('[data-x="appKey"]').value.trim() };
    try { localStorage.setItem("codex.dictkeys", JSON.stringify(v)); } catch (e) {} say(oxm, v.appId && v.appKey ? "Saved. Dictionary uses Oxford." : "Saved. Both are needed for Oxford.", true); };
  ox.querySelector('[data-a="oxclear"]').onclick = () => { try { localStorage.removeItem("codex.dictkeys"); } catch (e) {} ox.querySelectorAll("input").forEach(i => i.value = ""); say(oxm, "Removed. Dictionary uses the free dictionary.", true); };
  w.appendChild(ox);
  pane.appendChild(w);
}

/* Invert scroll: every wheel event is swapped for a copy with deltaY reversed. Handlers that take the wheel themselves
   (tree panning, labs) get the copy; if none of them cancels it, the nearest scrollable box is scrolled by hand. */
const synthWheel = new WeakSet();
function scrollBox(el, dx, dy) {
  for (let n = el instanceof Element ? el : null; n && n !== document.documentElement; n = n.parentElement) {
    const cs = getComputedStyle(n);
    const canY = dy && /(auto|scroll|overlay)/.test(cs.overflowY) && n.scrollHeight > n.clientHeight + 1 && (dy < 0 ? n.scrollTop > 0 : n.scrollTop + n.clientHeight < n.scrollHeight - 1);
    const canX = dx && /(auto|scroll|overlay)/.test(cs.overflowX) && n.scrollWidth > n.clientWidth + 1 && (dx < 0 ? n.scrollLeft > 0 : n.scrollLeft + n.clientWidth < n.scrollWidth - 1);
    if (canY || canX) { n.scrollBy({ top: canY ? dy : 0, left: canX ? dx : 0 }); return; }
  }
  (document.scrollingElement || document.documentElement).scrollBy({ top: dy, left: dx });
}
window.addEventListener("wheel", e => {
  if (!S.invertScroll || synthWheel.has(e) || e.ctrlKey || !e.deltaY) return; // ctrl+wheel = pinch zoom, left alone
  e.preventDefault(); e.stopImmediatePropagation();
  const c = new WheelEvent("wheel", { bubbles: true, cancelable: true, composed: true, view: window,
    deltaX: e.deltaX, deltaY: -e.deltaY, deltaZ: e.deltaZ, deltaMode: e.deltaMode, clientX: e.clientX, clientY: e.clientY, screenX: e.screenX, screenY: e.screenY,
    shiftKey: e.shiftKey, altKey: e.altKey, metaKey: e.metaKey, ctrlKey: e.ctrlKey, buttons: e.buttons });
  synthWheel.add(c);
  e.target.dispatchEvent(c);
  if (c.defaultPrevented) return;
  const unit = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? window.innerHeight * .9 : 1;
  let dx = e.deltaX * unit, dy = -e.deltaY * unit;
  if (e.shiftKey && !e.deltaX) { dx = dy; dy = 0; } // shift + wheel scrolls sideways
  scrollBox(e.target, dx, dy);
}, { capture: true, passive: false });

/* Shortcuts */
function paneKeys() {
  const k = s => `<kbd class="set-kbd">${s}</kbd>`;
  const rows = [
    [k("Esc"), "Open Settings from anywhere in the console. Press it again to close Settings. If the Assist window or a word card is open, Esc closes that first."],
    [k("←") + k("→"), "On the Main Menu, move the display box to the previous or next subject."],
    [k("Enter"), "Open the focused node in a skill tree, or the first word in a glossary search."],
    [k("Tab"), "Move between buttons and fields; inside Settings, focus stays in the window."]
  ];
  const w = h(`<div>
    <p class="set-lede">Keys that work throughout Inquire.</p>
    <div class="set-item"><div><h3>Esc opens Settings</h3><p>Off: Esc only closes windows, and Settings opens from the Settings button.</p></div>
      <label class="set-tog"><input type="checkbox" data-k="escKey"${S.escKey ? " checked" : ""}><span></span></label></div>
    <dl class="set-keys">${rows.map(([key, d]) => `<div><dt>${key}</dt><dd>${d}</dd></div>`).join("")}</dl>
  </div>`);
  w.querySelector('[data-k="escKey"]').onchange = e => { S.escKey = e.target.checked; save(); };
  pane.appendChild(w);
}

/* Account (local accounts from intro.js) */
function paneAccount() {
  const A = window.InquireAccounts, user = window.InquireUser;
  if (!A) { pane.appendChild(h(`<div><p class="set-lede">Accounts belong to the desktop app. In this preview there is no sign-in.</p></div>`)); return; }
  if (!user) { pane.appendChild(h(`<div><p class="set-lede">Nobody is signed in yet. Sign in or create an account on the sign-in screen, then come back here to manage it.</p></div>`)); return; }
  const w = h(`<div>
    <p class="set-lede">Signed in as <b>${esc(A.displayName())}</b> (username ${esc(user)}). Accounts live on this computer only, so there is no password reset: keep your password somewhere safe.</p>
    <form class="set-form" data-f="nm" novalidate><h3>Name</h3><p>What Inquire and its assistant call you.</p>
      <label>Name<input type="text" name="n" maxlength="40" autocomplete="name" value="${esc(A.displayName())}"></label>
      <button type="submit" class="btn-s">Save name</button></form>
    <form class="set-form" data-f="pw" novalidate><h3>Change password</h3>
      <label>Current password<input type="password" name="a" autocomplete="current-password"></label>
      <label>New password<input type="password" name="b" autocomplete="new-password"></label>
      <label>Confirm new password<input type="password" name="c" autocomplete="new-password"></label>
      <button type="submit" class="btn-s">Change password</button></form>
    <div class="set-item"><div><h3>Sign out</h3><p>Returns to the sign-in screen.</p></div><button type="button" class="btn-s" data-a="out">Sign out</button></div>
    <form class="set-form danger" data-f="del" novalidate><h3>Delete this account</h3>
      <p>Removes the account from this computer, together with its progress and notes. Export a backup first (Data &amp; progress) if you may want them later.</p>
      <label>Type your username to confirm<input type="text" name="u" autocomplete="off" spellcheck="false"></label>
      <label>Password<input type="password" name="p" autocomplete="current-password"></label>
      <button type="submit" class="btn-s set-warn">Delete account</button></form>
  </div>`);
  const m = msgEl(); w.appendChild(m);
  const fnm = w.querySelector('[data-f="nm"]');
  fnm.onsubmit = e => { e.preventDefault(); try { A.rename(fnm.elements.n.value); say(m, "Name saved.", true); w.querySelector(".set-lede b").textContent = A.displayName(); } catch (err) { say(m, err.message); } };
  const fpw = w.querySelector('[data-f="pw"]');
  fpw.onsubmit = async e => {
    e.preventDefault(); const { a, b, c } = fpw.elements;
    if (b.value.length < 8) return say(m, "Use at least 8 characters for the new password.");
    if (b.value !== c.value) return say(m, "The two new passwords do not match.");
    try { await A.changePassword(a.value, b.value); fpw.reset(); say(m, "Password changed.", true); } catch (err) { say(m, err.message); }
  };
  w.querySelector('[data-a="out"]').onclick = () => { close(); A.signOut(); };
  const fd = w.querySelector('[data-f="del"]');
  fd.onsubmit = async e => {
    e.preventDefault();
    if (fd.elements.u.value.trim().toLowerCase() !== user.toLowerCase()) return say(m, "The username does not match.");
    try { await A.remove(fd.elements.p.value); close(); } catch (err) { say(m, err.message); }
  };
  pane.appendChild(w);
}

/* Data & progress */
/* Backups (format 3): { app: "Inquire", kind: "progress-backup", version: 3, data: { progress, notes, folders, images, favs, settings, groups } }.
   progress, notes, note folders, photos (data URLs, only those the notes use) and favourites are the signed-in account's.
   Restoring replaces progress and settings, merges notes and folders by id (a note with the same id is replaced; others are
   kept, so nothing written since is lost) and restores the photos under their own ids. Format 1 and 2 files still load. */
const K = () => window.InquireKeys || { progress: () => "codex.mastered", notes: () => "codex.notes._local" };
const readJ = (k, d) => { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } };
function paneData() {
  const n = readJ(K().progress(), []).length, nn = readJ(K().notes(), []).length;
  const w = h(`<div>
    <p class="set-lede">Saved on this computer${window.InquireUser ? ` for <b>${esc(window.InquireUser)}</b>` : ""}: <b>${n}</b> topic${n === 1 ? "" : "s"} mastered and <b>${nn}</b> note${nn === 1 ? "" : "s"}.</p>
    <div class="set-item"><div><h3>Back up</h3><p>Saves your mastered topics, notes (with their folders, photos, code boxes, music charts and videos up to 25 MB), favourites and settings to one file. Never passwords. Bigger video files stay on this computer only: the backup tells you which.</p></div><button type="button" class="btn-s" data-a="exp">Export…</button></div>
    <div class="set-item"><div><h3>Restore a backup</h3><p>Loads a file made with Export, on this or another computer. Replaces progress and settings; adds the backup's notes, folders and photos to yours.</p></div><label class="btn-s set-file">Import…<input type="file" accept=".json,application/json" hidden></label></div>
    <div class="set-item"><div><h3>Reset progress</h3><p>Clears every mastered topic. This cannot be undone without a backup.</p></div><button type="button" class="btn-s set-warn" data-a="reset">Reset…</button></div>
  </div>`);
  const m = msgEl(); w.appendChild(m);
  const favKey = () => "codex.favs." + (window.InquireUser || "_local");
  w.querySelector('[data-a="exp"]').onclick = async e => {
    const btn = e.currentTarget; btn.disabled = true; btn.textContent = "Saving…";
    const NS = window.InquireNotes, notes = readJ(K().notes(), []);
    let images = {}, skipped = []; try { if (NS) ({ map: images, skipped } = await NS.exportMedia(NS.list())); } catch (err) {}
    const data = { progress: readJ(K().progress(), []), notes, folders: NS ? NS.readFolders() : [], images, favs: readJ(favKey(), null), settings: readJ("codex.settings", {}), groups: readJ("codex.groups", null) };
    btn.disabled = false; btn.textContent = "Export…";
    const blob = new Blob([JSON.stringify({ app: "Inquire", kind: "progress-backup", version: 3, saved: new Date().toISOString(), account: window.InquireUser || null, data })], { type: "application/json" });
    const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "inquire-backup-" + new Date().toISOString().slice(0, 10) + ".json";
    document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
    const np = Object.keys(images).length;
    say(m, `Backup saved: ${data.progress.length} topics, ${notes.length} notes${np ? `, ${np} photo${np === 1 ? "" : "s"} and video${np === 1 ? "" : "s"}` : ""}.`
      + (skipped.length ? ` Not included (over 25 MB): ${skipped.length === 1 ? "a video" : skipped.length + " videos"} in ${[...new Set(skipped.map(x => "“" + x.note + "”"))].join(", ")} (${skipped.map(x => x.mb + " MB").join(", ")}). Keep those video files somewhere safe yourself.` : ""), !skipped.length);
    m.classList.toggle("warn", skipped.length > 0);
  };
  w.querySelector('input[type="file"]').onchange = async e => {
    const f = e.target.files[0]; if (!f) return;
    try {
      const j = JSON.parse(await f.text());
      if (!j || j.app !== "Inquire" || !j.data) throw new Error();
      const d = j.data, prog = d.progress || d["codex.mastered"] || [], notes = d.notes || [], set = d.settings || d["codex.settings"], grp = d.groups || d["codex.groups"];
      if (!Array.isArray(prog) || !Array.isArray(notes)) throw new Error();
      localStorage.setItem(K().progress(), JSON.stringify(prog.filter(x => typeof x === "string")));
      const mine = readJ(K().notes(), []), ids = new Set(notes.map(x => x && x.id));
      const safe = notes.filter(x => x && x.id && typeof x.body === "string").map(x => (typeof x.html === "string" && window.InquireNotes ? Object.assign({}, x, { html: InquireNotes.sanitize(x.html) }) : x)); // never trust markup from a file
      const merged = mine.filter(x => !ids.has(x.id)).concat(safe);
      localStorage.setItem(K().notes(), JSON.stringify(merged));
      if (set && typeof set === "object") localStorage.setItem("codex.settings", JSON.stringify(set));
      if (grp) localStorage.setItem("codex.groups", JSON.stringify(grp));
      const NS = window.InquireNotes; let np = 0;
      if (NS && Array.isArray(d.folders)) { const have = NS.readFolders(), ids = new Set(have.map(f => f.id)); NS.writeFolders(have.concat(d.folders.filter(f => f && f.id && f.name && !ids.has(f.id)))); }
      if (NS && d.images && typeof d.images === "object") np = await NS.importImages(d.images);
      if (d.favs && Array.isArray(d.favs.items)) localStorage.setItem(favKey(), JSON.stringify(d.favs));
      S = load(); applyAll(); progressChanged(); window.dispatchEvent(new CustomEvent("inquire:notes-changed"));
      show("data"); say(pane.querySelector(".set-msg") || m, `Backup restored: ${prog.length} topics, ${notes.length} notes${np ? `, ${np} photo${np === 1 ? "" : "s"}` : ""}.`, true);
    } catch (err) { say(m, "That file is not an Inquire backup."); }
    e.target.value = "";
  };
  const rb = w.querySelector('[data-a="reset"]'); let armed = 0;
  rb.onclick = () => {
    if (!armed) { armed = setTimeout(() => { armed = 0; rb.textContent = "Reset…"; }, 4000); rb.textContent = "Click again to reset"; return; }
    clearTimeout(armed); armed = 0;
    localStorage.setItem(K().progress(), "[]"); progressChanged(); show("data"); say(pane.querySelector(".set-msg"), "Progress reset.", true);
  };
  pane.appendChild(w);
}
const progressChanged = () => window.dispatchEvent(new CustomEvent("inquire:progress-changed"));

/* About */
function paneAbout() {
  const D = window.inquireDesktop;
  const w = h(`<div>
    <p class="set-lede"><b>Inquire</b> <span class="set-ver">${D ? "" : "web preview"}</span>: a knowledge console that maps each subject as a skill tree.</p>
    ${D ? `<div class="set-item set-upd"><div><h3>Updates</h3><p class="set-upd-msg">Inquire checks at launch and every 4 hours.</p></div><div class="set-upd-btns"></div></div>` : ""}
    <div class="set-item"><div><h3>End-user licence agreement</h3><p>The terms for using Inquire.</p></div><button type="button" class="btn-s" data-a="eula">Read</button></div>
    <div class="set-item"><div><h3>Source &amp; release notes</h3><p>github.com/InquiringOwl/inquire-desktop</p></div><a class="btn-s" href="https://github.com/InquiringOwl/inquire-desktop/releases" target="_blank" rel="noopener">Open ↗</a></div>
    <p class="set-small">Fonts: STIX Two Text, IBM Plex Sans &amp; Mono, Saira Semi Condensed (SIL Open Font License). Story passages are public domain.</p>
  </div>`);
  if (D) {
    D.version().then(v => { const el = w.querySelector(".set-ver"); if (el) el.textContent = "v" + v; }).catch(() => {});
    drawUpd(w.querySelector(".set-upd"));
  }
  w.querySelector('[data-a="eula"]').onclick = () => openDoc("eula");
  pane.appendChild(w);
}

/* Updates: live status in About, with Install & Relaunch once a download is ready (works from the sign-in screen too) */
let UPD = { status: "idle" };
const UPD_IDLE = "Inquire checks at launch and every 4 hours.";
function drawUpd(box) {
  const D = window.inquireDesktop; if (!box || !D) return;
  const s = UPD, v = s.version ? esc(s.version) : "", msg = box.querySelector(".set-upd-msg"), btns = box.querySelector(".set-upd-btns");
  const check = `<button type="button" class="btn-s" data-u="check">Check now</button>`;
  let m = UPD_IDLE, b = check;
  if (s.status === "checking") { m = "Checking for updates…"; b = `<button type="button" class="btn-s" disabled>Checking…</button>`; }
  else if (s.status === "current") m = "Inquire is up to date.";
  else if (s.status === "downloading") { m = `Downloading Inquire ${v}… ${s.percent || 0}%`; b = ""; }
  else if (s.status === "ready") { m = `Inquire ${v} is downloaded and ready to install.`; b = `<button type="button" class="btn good" data-u="go">Install &amp; Relaunch</button>`; }
  else if (s.status === "installing") { m = `Installing Inquire ${v}…`; b = ""; }
  else if (s.status === "installed") m = `Updated to Inquire ${v}.`;
  else if (s.status === "blocked") { m = `macOS blocked the update. Inquire ${v} is in your Downloads folder: drag it into Applications and replace the old copy.`; b = `<button type="button" class="btn-s" data-u="rev">Show in Finder</button>`; }
  else if (s.status === "error" && s.message) m = "Update problem: " + esc(s.message);
  msg.innerHTML = m; btns.innerHTML = b;
  box.classList.toggle("is-ready", s.status === "ready");
  const c = btns.querySelector('[data-u="check"]'); if (c) c.onclick = () => { UPD = { status: "checking" }; drawUpd(box); Promise.resolve(D.checkForUpdates()).catch(() => {}); setTimeout(() => { if (UPD.status === "checking" && D.updateState) D.updateState().then(st => { if (st && UPD.status === "checking") { UPD = Object.assign({}, st, st.status === "checking" ? { status: "idle" } : {}); drawUpd(pane.querySelector(".set-upd")); } }).catch(() => {}); }, 20000); };
  const g = btns.querySelector('[data-u="go"]'); if (g) g.onclick = () => { g.disabled = true; g.textContent = "Relaunching…"; D.installUpdate(); };
  const r = btns.querySelector('[data-u="rev"]'); if (r) r.onclick = () => D.revealUpdate();
}
function updTab() { // a dot on the About tab while an update waits to be installed
  const t = tabsEl.querySelector('[data-tab="about"]'); if (t) t.classList.toggle("has-upd", UPD.status === "ready");
}
if (window.inquireDesktop) {
  const D = window.inquireDesktop;
  D.onUpdate(s => { UPD = Object.assign({}, s); updTab(); if (!ov.hidden) drawUpd(pane.querySelector(".set-upd")); });
  if (D.updateState) D.updateState().then(s => { if (s && UPD.status === "idle") { UPD = Object.assign({}, s); updTab(); } }).catch(() => {});
}

/* top-bar gear */
const gear = document.getElementById("gear");
if (gear) gear.onclick = () => open();
window.InquireSettings = { open, openDoc, close, get: () => Object.assign({}, S), themes: THEMES };
})();
