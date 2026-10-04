/* Settings window (gear in the top bar, and the Settings button on the sign-in screen).
   A sub-window that opens in front of the app; the app behind it fogs and eases back (body.set-open).
   Sections: Appearance (12 themes), Display & comfort, Account, Data & progress, About.
   Stored per computer in localStorage "codex.settings" (codex.* prefix kept for old installs). Themes only change
   surfaces (backgrounds, panels, lines, frame accent); the content colours c1–c5 keep their meaning in every theme.
   Also opens documents (the EULA, web/src/eula.js) in the same kind of window: InquireSettings.openDoc("eula"). */
(function () {
"use strict";
const KEY = "codex.settings";
const DEF = { theme: "capsuleer", textScale: 1, reduceMotion: false, playIntro: true, soundFx: true };
const load = () => { try { return Object.assign({}, DEF, JSON.parse(localStorage.getItem(KEY) || "{}")); } catch (e) { return Object.assign({}, DEF); } };
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
  "--chrome-1", "--chrome-2", "--win-1", "--win-2", "--slot-1", "--slot-2", "--slot-h1", "--slot-h2", "--wash", "--sky", "--stage-sky", "--frame", "--blur", "--glow"];

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
    "--frame": t.accent, "--blur": g ? "14px" : "0px", "--glow": rgba(t.accent, .35)
  };
}
function applyTheme(id) {
  const t = THEMES.find(x => x.id === id) || THEMES[0], st = document.documentElement.style;
  if (t.id === "capsuleer") VARS.forEach(v => st.removeProperty(v)); // default look = the stylesheet's own values
  else { const v = themeVars(t); VARS.forEach(k => st.setProperty(k, v[k])); }
  document.documentElement.dataset.theme = t.id;
  document.documentElement.toggleAttribute("data-glass", !!t.glass);
}
function applyAll() {
  applyTheme(S.theme);
  const app = document.getElementById("app");
  if (app) app.style.zoom = S.textScale === 1 ? "" : String(S.textScale);
  document.documentElement.toggleAttribute("data-reduce-motion", !!S.reduceMotion);
}
applyAll();

/* ---------- window ---------- */
const TABS = [["look", "Appearance"], ["display", "Display & comfort"], ["account", "Account"], ["data", "Data & progress"], ["about", "About"]];
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
  if (ov.hidden) return;
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
  ({ look: paneLook, display: paneDisplay, account: paneAccount, data: paneData, about: paneAbout })[id]();
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
  pane.appendChild(wrap);
}

/* Display & comfort */
function paneDisplay() {
  const sizes = [[.9, "Small"], [1, "Standard"], [1.1, "Large"], [1.25, "Larger"]];
  const w = h(`<div>
    <div class="set-item"><div><h3>Text & interface size</h3><p>Scales everything in the console, labs included.</p></div>
      <div class="set-seg" role="radiogroup" aria-label="Text size">${sizes.map(([v, l]) => `<button type="button" role="radio" aria-checked="${S.textScale === v}" data-v="${v}">${l}</button>`).join("")}</div></div>
    <div class="set-item"><div><h3>Reduce motion</h3><p>Turns off animations and slides, and shows the sign-in screen without its intro.</p></div>
      <label class="set-tog"><input type="checkbox" data-k="reduceMotion"${S.reduceMotion ? " checked" : ""}><span></span></label></div>
    <div class="set-item"><div><h3>Play the intro on launch</h3><p>The neuron storm and logo before the sign-in form. Off: the form appears at once.</p></div>
      <label class="set-tog"><input type="checkbox" data-k="playIntro"${S.playIntro ? " checked" : ""}><span></span></label></div>
    <div class="set-item"><div><h3>Sound effects</h3><p>The unlock sound when you sign in.</p></div>
      <label class="set-tog"><input type="checkbox" data-k="soundFx"${S.soundFx ? " checked" : ""}><span></span></label></div>
  </div>`);
  w.querySelectorAll(".set-seg button").forEach(b => b.onclick = () => {
    S.textScale = +b.dataset.v; save(); applyAll();
    w.querySelectorAll(".set-seg button").forEach(x => x.setAttribute("aria-checked", String(x === b)));
  });
  w.querySelectorAll(".set-tog input").forEach(i => i.onchange = () => { S[i.dataset.k] = i.checked; save(); applyAll(); });
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
/* Backups (format 2): { app: "Inquire", kind: "progress-backup", version: 2, data: { progress, notes, settings, groups } }.
   progress and notes are the signed-in account's. Restoring replaces progress and settings, and merges notes (a note with the
   same id is replaced; others are kept), so nothing written since is lost. Format 1 files (data["codex.mastered"]) still load. */
const K = () => window.InquireKeys || { progress: () => "codex.mastered", notes: () => "codex.notes._local" };
const readJ = (k, d) => { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } };
function paneData() {
  const n = readJ(K().progress(), []).length, nn = readJ(K().notes(), []).length;
  const w = h(`<div>
    <p class="set-lede">Saved on this computer${window.InquireUser ? ` for <b>${esc(window.InquireUser)}</b>` : ""}: <b>${n}</b> topic${n === 1 ? "" : "s"} mastered and <b>${nn}</b> note${nn === 1 ? "" : "s"}.</p>
    <div class="set-item"><div><h3>Back up</h3><p>Saves your mastered topics, notes and settings to a file (never passwords).</p></div><button type="button" class="btn-s" data-a="exp">Export…</button></div>
    <div class="set-item"><div><h3>Restore a backup</h3><p>Loads a file made with Export. Replaces progress and settings; adds the backup's notes to yours.</p></div><label class="btn-s set-file">Import…<input type="file" accept=".json,application/json" hidden></label></div>
    <div class="set-item"><div><h3>Reset progress</h3><p>Clears every mastered topic. This cannot be undone without a backup.</p></div><button type="button" class="btn-s set-warn" data-a="reset">Reset…</button></div>
  </div>`);
  const m = msgEl(); w.appendChild(m);
  w.querySelector('[data-a="exp"]').onclick = () => {
    const data = { progress: readJ(K().progress(), []), notes: readJ(K().notes(), []), settings: readJ("codex.settings", {}), groups: readJ("codex.groups", null) };
    const blob = new Blob([JSON.stringify({ app: "Inquire", kind: "progress-backup", version: 2, saved: new Date().toISOString(), account: window.InquireUser || null, data }, null, 2)], { type: "application/json" });
    const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "inquire-backup-" + new Date().toISOString().slice(0, 10) + ".json";
    document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
    say(m, "Backup saved.", true);
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
      const merged = mine.filter(x => !ids.has(x.id)).concat(notes.filter(x => x && x.id && typeof x.body === "string"));
      localStorage.setItem(K().notes(), JSON.stringify(merged));
      if (set && typeof set === "object") localStorage.setItem("codex.settings", JSON.stringify(set));
      if (grp) localStorage.setItem("codex.groups", JSON.stringify(grp));
      S = load(); applyAll(); progressChanged(); window.dispatchEvent(new CustomEvent("inquire:notes-changed"));
      show("data"); say(pane.querySelector(".set-msg") || m, `Backup restored: ${prog.length} topics, ${notes.length} notes.`, true);
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
    ${D ? `<div class="set-item"><div><h3>Updates</h3><p>Inquire checks at launch and every 4 hours.</p></div><button type="button" class="btn-s" data-a="upd">Check now</button></div>` : ""}
    <div class="set-item"><div><h3>End-user licence agreement</h3><p>The terms for using Inquire.</p></div><button type="button" class="btn-s" data-a="eula">Read</button></div>
    <div class="set-item"><div><h3>Source &amp; release notes</h3><p>github.com/InquiringOwl/inquire-desktop</p></div><a class="btn-s" href="https://github.com/InquiringOwl/inquire-desktop/releases" target="_blank" rel="noopener">Open ↗</a></div>
    <p class="set-small">Fonts: STIX Two Text, IBM Plex Sans &amp; Mono, Saira Semi Condensed (SIL Open Font License). Story passages are public domain.</p>
  </div>`);
  if (D) {
    D.version().then(v => { const el = w.querySelector(".set-ver"); if (el) el.textContent = "v" + v; }).catch(() => {});
    w.querySelector('[data-a="upd"]').onclick = e => { e.target.textContent = "Checking…"; D.checkForUpdates(); setTimeout(() => { e.target.textContent = "Check now"; }, 2500); };
  }
  w.querySelector('[data-a="eula"]').onclick = () => openDoc("eula");
  pane.appendChild(w);
}

/* top-bar gear */
const gear = document.getElementById("gear");
if (gear) gear.onclick = () => open();
window.InquireSettings = { open, openDoc, close, get: () => Object.assign({}, S), themes: THEMES };
})();
