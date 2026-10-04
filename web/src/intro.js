/* Intro / sign-in screen. Plays once per launch in the desktop app (or any page opened with ?intro).
   Sequence: background fades in and drifts, neurons fire, logo fades in slowly, then the sign-in form appears.
   Background: app/intro/inq-intro.webm or .mp4 (looping, muted) when present; otherwise the still plate plus the neuron sparks drawn
   here on a canvas. The logo and form are always live elements on top, never part of the video.
   Accounts are LOCAL to this computer (PBKDF2-hashed password in localStorage). There is no server, so no password reset. */
(function () {
"use strict";
const desktop = !!window.codexDesktop;
const wanted = desktop || /[?&]intro\b/.test(location.search);
const appEl = document.getElementById("app");
const who = document.getElementById("whoami");
if (!wanted || !appEl) { if (who) who.hidden = true; return; }

const reduced = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
const ACC_KEY = "codex.accounts", REM_KEY = "codex.rememberedUser";
const ls = {
  get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} },
  del(k) { try { localStorage.removeItem(k); } catch (e) {} }
};

/* ---------- local accounts ---------- */
const canCrypto = !!(window.crypto && crypto.subtle);
const b64 = u8 => btoa(String.fromCharCode.apply(null, u8));
const unb64 = s => Uint8Array.from(atob(s), c => c.charCodeAt(0));
async function derive(pw, salt) {
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(pw), "PBKDF2", false, ["deriveBits"]);
  const bits = await crypto.subtle.deriveBits({ name: "PBKDF2", hash: "SHA-256", salt, iterations: 210000 }, key, 256);
  return b64(new Uint8Array(bits));
}
const same = (a, b) => { if (a.length !== b.length) return false; let d = 0; for (let i = 0; i < a.length; i++) d |= a.charCodeAt(i) ^ b.charCodeAt(i); return d === 0; };
const nameOk = u => /^[A-Za-z0-9_.-]{3,24}$/.test(u);
const accounts = () => ls.get(ACC_KEY, {});
async function createAccount(user, pw) {
  const all = accounts(), id = user.toLowerCase();
  if (all[id]) throw new Error("That username is taken on this computer.");
  const salt = crypto.getRandomValues(new Uint8Array(16));
  all[id] = { name: user, salt: b64(salt), hash: await derive(pw, salt), created: Date.now() };
  ls.set(ACC_KEY, all);
  return all[id].name;
}
let failures = 0;
async function checkLogin(user, pw) {
  if (failures >= 3) await new Promise(r => setTimeout(r, Math.min(failures - 2, 6) * 1000)); // slow down guessing
  const a = accounts()[user.toLowerCase()];
  const hash = await derive(pw, a ? unb64(a.salt) : new Uint8Array(16)); // same work either way
  if (!a || !same(hash, a.hash)) { failures++; throw new Error("Username or password not recognised."); }
  failures = 0;
  return a.name;
}

/* ---------- markup ---------- */
const root = document.createElement("div");
root.className = "inqi";
root.id = "inqi";
root.setAttribute("role", "dialog");
root.setAttribute("aria-modal", "true");
root.setAttribute("aria-label", "Sign in to Inquire");
root.innerHTML = `
  <div class="inqi-world" aria-hidden="true">
    <div class="inqi-plate"></div>
    <video class="inqi-video" muted loop playsinline preload="auto" tabindex="-1"></video>
    <canvas class="inqi-fx"></canvas>
  </div>
  <div class="inqi-shade" aria-hidden="true"></div>
  <div class="inqi-stage">
    <img class="inqi-logo" src="intro/inq-lockup.png" alt="Inquire">
    <form class="inqi-form" novalidate>
      <div class="inqi-tabs" role="tablist">
        <button type="button" class="inqi-tab" role="tab" id="tab-in" aria-selected="true" data-mode="in">Sign in</button>
        <button type="button" class="inqi-tab" role="tab" id="tab-up" aria-selected="false" data-mode="up">Create account</button>
      </div>
      <label class="inqi-field"><span>Username</span><input name="u" type="text" autocomplete="username" autocapitalize="off" spellcheck="false" maxlength="24" required></label>
      <label class="inqi-field"><span>Password</span><input name="p" type="password" autocomplete="current-password" required></label>
      <label class="inqi-field" data-up hidden><span>Confirm password</span><input name="p2" type="password" autocomplete="new-password"></label>
      <label class="inqi-check"><input name="r" type="checkbox"> Remember my username</label>
      <button type="submit" class="inqi-go">Sign in</button>
      <p class="inqi-msg" role="alert" aria-live="polite"></p>
      <p class="inqi-note">Accounts live on this computer only.</p>
    </form>
  </div>
  <button type="button" class="inqi-skip">Skip intro</button>`;
document.body.appendChild(root);
appEl.inert = true;
if (who) who.hidden = true;

const $ = s => root.querySelector(s);
const form = $(".inqi-form"), msg = $(".inqi-msg"), go = $(".inqi-go");
const inU = form.elements.u, inP = form.elements.p, inP2 = form.elements.p2, inR = form.elements.r;
let mode = "in", done = false, fxStop = null;

/* ---------- sequence ---------- */
const timers = [];
const at = (ms, fn) => timers.push(setTimeout(fn, ms));
function showForm() {
  root.classList.add("is-bg", "is-logo", "is-form");
  setTimeout(() => (inU.value ? inP : inU).focus({ preventScroll: true }), reduced ? 0 : 900);
}
function play() {
  if (reduced) { root.classList.add("is-fast"); showForm(); startFx(); return; }
  at(150, () => root.classList.add("is-bg"));
  at(900, startFx);
  at(2600, () => root.classList.add("is-logo"));
  at(6400, showForm);
}
function skip() {
  if (root.classList.contains("is-form")) return;
  timers.forEach(clearTimeout);
  root.classList.add("is-fast");
  showForm(); startFx();
  setTimeout(() => root.classList.remove("is-fast"), 60);
}
$(".inqi-skip").addEventListener("click", skip);
document.addEventListener("keydown", e => { if (!done && !root.hidden && !root.classList.contains("is-form") && e.key !== "Tab") skip(); });
root.addEventListener("pointerdown", e => { if (!e.target.closest(".inqi-form,.inqi-skip")) skip(); });

/* ---------- form ---------- */
function setMode(m) {
  mode = m;
  root.querySelectorAll(".inqi-tab").forEach(t => t.setAttribute("aria-selected", String(t.dataset.mode === m)));
  form.querySelectorAll("[data-up]").forEach(el => { el.hidden = m !== "up"; });
  inP2.required = m === "up";
  inP.autocomplete = m === "up" ? "new-password" : "current-password";
  go.textContent = m === "up" ? "Create account" : "Sign in";
  setMsg("");
  inU.focus({ preventScroll: true });
}
root.querySelectorAll(".inqi-tab").forEach(t => t.addEventListener("click", () => setMode(t.dataset.mode)));
function setMsg(t, ok) { msg.textContent = t; msg.classList.toggle("ok", !!ok); [inU, inP, inP2].forEach(i => i.removeAttribute("aria-invalid")); }
function bad(input, t) { setMsg(t); input.setAttribute("aria-invalid", "true"); input.focus(); return false; }
function validate() {
  const u = inU.value.trim();
  if (!u) return bad(inU, "Enter your username.");
  if (mode === "up" && !nameOk(u)) return bad(inU, "Use 3–24 letters, numbers, dots, dashes or underscores.");
  if (!inP.value) return bad(inP, "Enter your password.");
  if (mode === "up") {
    if (inP.value.length < 8) return bad(inP, "Use at least 8 characters for the password.");
    if (inP.value !== inP2.value) return bad(inP2, "The two passwords do not match.");
  }
  return true;
}
form.addEventListener("submit", async e => {
  e.preventDefault();
  if (!canCrypto) return setMsg("This window cannot protect passwords, so accounts are unavailable.");
  if (!validate()) return;
  go.disabled = true;
  try {
    const u = inU.value.trim();
    const name = mode === "up" ? await createAccount(u, inP.value) : await checkLogin(u, inP.value);
    if (inR.checked) ls.set(REM_KEY, name); else ls.del(REM_KEY);
    inP.value = inP2.value = "";
    enter(name);
  } catch (err) {
    setMsg(err.message || "Something went wrong. Try again.");
    inP.select();
  } finally { go.disabled = false; }
});

function enter(name) {
  done = true;
  setMsg("Welcome, " + name + ".", true);
  window.InquireUser = name;
  if (who) { who.textContent = name + " · sign out"; who.hidden = false; who.setAttribute("aria-label", "Signed in as " + name + ". Sign out"); }
  root.classList.add("is-leaving");
  appEl.inert = false;
  setTimeout(() => { root.hidden = true; if (fxStop) fxStop(); const v = $(".inqi-video"); try { v.pause(); } catch (e) {} const view = document.getElementById("view"); if (view) view.focus({ preventScroll: true }); }, 950);
  window.dispatchEvent(new CustomEvent("inquire:signed-in", { detail: { user: name } }));
}
if (who) who.addEventListener("click", () => {
  delete window.InquireUser; who.hidden = true; ls.del(REM_KEY);
  appEl.inert = true; root.hidden = false; root.classList.remove("is-leaving");
  setMode("in"); inU.value = ""; inR.checked = false; done = false;
  const v = $(".inqi-video"); try { if (root.classList.contains("has-video")) v.play(); } catch (e) {}
  startFx(); inU.focus();
});

/* ---------- background video (optional) ---------- */
// Drop app/intro/inq-intro.webm and/or inq-intro.mp4 into the app and it is used automatically; with neither file the still plate + sparks play.
(function tryVideo() {
  if (reduced) return; // reduced motion: keep the still plate
  const v = $(".inqi-video"); let missing = 0;
  const kinds = [["inq-intro.webm", "video/webm"], ["inq-intro.mp4", "video/mp4"]];
  kinds.forEach(([file, type]) => {
    const s = document.createElement("source"); s.type = type; s.src = "intro/" + file;
    s.addEventListener("error", () => { if (++missing === kinds.length) root.classList.remove("has-video"); });
    v.appendChild(s);
  });
  v.addEventListener("canplay", () => { root.classList.add("has-video"); if (fxStop) fxStop(); v.play().catch(() => {}); }, { once: true });
  v.load();
})();

/* ---------- neuron sparks (used while there is no video) ---------- */
// Positions are in the 1672×941 source image; the plate is drawn "cover", so they are mapped the same way.
const IW = 1672, IH = 941;
const NODES = [[100, 322], [215, 415], [205, 385], [385, 235], [330, 215], [60, 290], [250, 150], [470, 175], [150, 520], [520, 640],
  [620, 700], [870, 705], [1250, 650], [1330, 520], [1385, 598], [1497, 688], [1545, 645], [1600, 720], [1450, 470], [1620, 420]];
let edges = null;
function buildEdges(rng) {
  const E = [];
  NODES.forEach((a, i) => {
    NODES.map((b, j) => ({ j, d: Math.hypot(a[0] - b[0], a[1] - b[1]) })).filter(o => o.j !== i && o.d < 420).sort((p, q) => p.d - q.d).slice(0, 2).forEach(o => {
      if (E.some(e => (e.a === i && e.b === o.j) || (e.a === o.j && e.b === i))) return;
      const b = NODES[o.j], mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2, nx = -(b[1] - a[1]), ny = b[0] - a[0], k = (rng() - .5) * .5;
      E.push({ a: i, b: o.j, cx: mx + nx * k, cy: my + ny * k });
    });
  });
  return E;
}
function startFx() {
  if (fxStop || reduced || root.classList.contains("has-video")) return;
  const cv = $(".inqi-fx"), cx = cv.getContext("2d");
  let W = 0, H = 0, dpr = 1, raf = 0, last = 0, next = 0, alive = true;
  const fires = [], sigs = [];
  const rnd = () => Math.random();
  if (!edges) edges = buildEdges(rnd);
  const size = () => { dpr = Math.min(window.devicePixelRatio || 1, 2); W = cv.clientWidth; H = cv.clientHeight; cv.width = W * dpr; cv.height = H * dpr; };
  size(); addEventListener("resize", size);
  const map = (x, y) => { const s = Math.max(W / IW, H / IH); return [x * s + (W - IW * s) / 2, y * s + (H - IH * s) / 2, s]; };
  const bez = (e, t) => { const a = NODES[e.a], b = NODES[e.b], u = 1 - t; return [u * u * a[0] + 2 * u * t * e.cx + t * t * b[0], u * u * a[1] + 2 * u * t * e.cy + t * t * b[1]]; };
  function fire(i, amp, now) { fires.push({ i, t0: now, dur: 1300 + rnd() * 700, amp }); }
  function spawn(now) {
    const i = Math.floor(rnd() * NODES.length);
    fire(i, .5 + rnd() * .4, now);
    const out = edges.filter(e => e.a === i || e.b === i).sort(() => rnd() - .5).slice(0, 1 + (rnd() < .4));
    out.forEach(e => sigs.push({ e, fwd: e.a === i, t0: now + 120, dur: 900 + rnd() * 900, hit: false }));
  }
  function frame(now) {
    if (!alive) return;
    raf = requestAnimationFrame(frame);
    if (document.hidden) { last = now; return; }
    if (now >= next) { spawn(now); next = now + 380 + rnd() * 1100; }
    cx.setTransform(dpr, 0, 0, dpr, 0, 0); cx.clearRect(0, 0, W, H);
    cx.globalCompositeOperation = "lighter"; cx.lineCap = "round";
    for (let k = sigs.length - 1; k >= 0; k--) {
      const s = sigs[k], p = (now - s.t0) / s.dur;
      if (p < 0) continue;
      if (p >= 1) { if (!s.hit) fire(s.fwd ? s.e.b : s.e.a, .45, now); sigs.splice(k, 1); continue; }
      const t1 = s.fwd ? p : 1 - p, tail = s.fwd ? Math.max(0, p - .22) : Math.min(1, 1 - p + .22);
      const env = Math.sin(Math.PI * p);
      cx.beginPath();
      for (let n = 0; n <= 10; n++) { const t = tail + (t1 - tail) * n / 10, q = bez(s.e, t), m = map(q[0], q[1]); n ? cx.lineTo(m[0], m[1]) : cx.moveTo(m[0], m[1]); }
      const sc = map(0, 0)[2];
      cx.strokeStyle = `rgba(160,235,255,${.55 * env})`; cx.lineWidth = Math.max(1, 1.5 * sc); cx.shadowColor = "rgba(92,200,224,.9)"; cx.shadowBlur = 8 * sc; cx.stroke();
    }
    cx.shadowBlur = 0;
    for (let k = fires.length - 1; k >= 0; k--) {
      const f = fires[k], p = (now - f.t0) / f.dur;
      if (p >= 1) { fires.splice(k, 1); continue; }
      const env = p < .18 ? p / .18 : Math.pow(1 - (p - .18) / .82, 1.6);
      const m = map(NODES[f.i][0], NODES[f.i][1]), r = (26 + 30 * env) * m[2] * 1.4;
      const g = cx.createRadialGradient(m[0], m[1], 0, m[0], m[1], r);
      g.addColorStop(0, `rgba(230,250,255,${.7 * f.amp * env})`); g.addColorStop(.25, `rgba(110,215,245,${.4 * f.amp * env})`); g.addColorStop(1, "rgba(60,150,220,0)");
      cx.fillStyle = g; cx.beginPath(); cx.arc(m[0], m[1], r, 0, 7); cx.fill();
    }
  }
  raf = requestAnimationFrame(t => { last = t; next = t + 300; frame(t); });
  fxStop = () => { alive = false; cancelAnimationFrame(raf); removeEventListener("resize", size); cx.clearRect(0, 0, W, H); fxStop = null; };
}

/* ---------- go ---------- */
const remembered = ls.get(REM_KEY, "");
if (remembered) { inU.value = remembered; inR.checked = true; }
window.InquireIntro = { skip, isOpen: () => !done };
play();
})();
