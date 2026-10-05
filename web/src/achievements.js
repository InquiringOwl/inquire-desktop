/* Achievements (Main Menu → Achievements, Alt+A, route #achievements): a window over the app like Settings and My notes
   (InquireApp.modal). Two tabs: All achievements (the catalogue by category, with progress) and My Achievements (what you
   earned, newest first). Each achievement is worth Achievement Points (AP), shown as a balance in the window's header and
   on the Main Menu's Achievements slot. A toast says "Achievement unlocked" when one is earned.
   Earned + counters are per account in codex.achievements.<user> (_local with no sign-in):
     { earned: { id: time }, stats: { quizRight, quizTries, streak, bestStreak, words[], maps[], themes[], days[], games, gameBest }, seeded }
   The first check for an account awards what is already done without toasts (seeded), so nobody gets a flood after updating.
   Sources: progress (InquireApp.progress), notes and folders (InquireNotes), favourites (codex.favs.<user>), the theme
   (codex.settings), routes (field maps and glossary words seen, days studied), and events:
     inquire:quiz  { correct }   (EngLab.quiz fires it on every answer; other kits can too)
     inquire:game  { score }     (for the Games section once it exists)
   InquireAchievements = { open(tab), close(), points(), list(), record(kind, detail), check() }. Loaded after app.js. */
(function () {
"use strict";
const A = () => window.InquireApp, NS = () => window.InquireNotes;
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const user = () => (window.InquireUser ? String(window.InquireUser).toLowerCase() : "");
const key = () => "codex.achievements." + (user() || "_local");
const blank = () => ({ earned: {}, stats: { quizRight: 0, quizTries: 0, streak: 0, bestStreak: 0, words: [], maps: [], themes: [], days: [], games: 0, gameBest: 0 }, seeded: false });
function load() {
  try { const v = JSON.parse(localStorage.getItem(key()) || "null"); if (v && v.earned) { const b = blank(); return Object.assign(b, v, { stats: Object.assign(b.stats, v.stats || {}) }); } } catch (e) {}
  return blank();
}
let D = load();
const save = () => { try { localStorage.setItem(key(), JSON.stringify(D)); } catch (e) {} };
// desktop: wait for sign-in so a session before it never writes into another account's file
let ready = !window.inquireDesktop;

/* ---------- the catalogue ---------- */
const CATS = [
  ["lessons", "Lessons", "▤", "Master lessons in any subject."],
  ["fields", "Fields", "⌗", "Master every lesson in a field."],
  ["subjects", "Subjects", "◈", "Study across subjects and groups."],
  ["quizzes", "Quizzes", "✓", "Answer quiz questions in the labs’ Quiz modes."],
  ["games", "Games", "◇", "Games are coming in a later update."],
  ["study", "Notes & study", "✎", "Write, link and organise notes."],
  ["explore", "Explorer", "⌖", "Find your way around Inquire."]
];
function readJ(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } }
function facts() {
  const P = A() && A().progress ? A().progress() : { mastered: 0, bySubject: {}, byGroup: {}, fields: [] };
  const notes = NS() ? NS().list() : [], folders = NS() && NS().folders ? NS().folders() : [];
  const favs = readJ("codex.favs." + (window.InquireUser || "_local"), { items: [] });
  const st = D.stats;
  return { P, notes: notes.length, linked: notes.filter(n => n.links && n.links.length).length, folders: folders.length, favs: (favs.items || []).length,
    subjects: Object.keys(P.bySubject).length, groups: Object.keys(P.byGroup).length, fieldsDone: P.fields.filter(f => f.done >= f.total).length,
    quizRight: st.quizRight, best: st.bestStreak, words: st.words.length, maps: st.maps.length, themes: st.themes.filter(t => t !== "capsuleer").length,
    days: st.days.length, games: st.games, gameBest: st.gameBest };
}
// [id, category, name, description, points, goal, value(facts)]; soon = not reachable yet
function catalogue() {
  const L = [
    ["first-lesson", "lessons", "First Steps", "Master your first lesson.", 10, 1, f => f.P.mastered],
    ["lessons-10", "lessons", "Apprentice", "Master 10 lessons.", 25, 10, f => f.P.mastered],
    ["lessons-25", "lessons", "Journeyman", "Master 25 lessons.", 50, 25, f => f.P.mastered],
    ["lessons-50", "lessons", "Scholar", "Master 50 lessons.", 100, 50, f => f.P.mastered],
    ["lessons-100", "lessons", "Savant", "Master 100 lessons.", 200, 100, f => f.P.mastered],
    ["lessons-250", "lessons", "Polymath", "Master 250 lessons.", 500, 250, f => f.P.mastered],
    ["field-1", "fields", "Field Charted", "Master every lesson in one field.", 100, 1, f => f.fieldsDone],
    ["field-3", "fields", "Cartographer of Fields", "Master every lesson in three fields.", 300, 3, f => f.fieldsDone]
  ];
  (A() && A().progress ? A().progress().fields : []).forEach(x => L.push(["field:" + x.id, "fields", x.name + " Complete", `Master all ${x.total} ${esc(A().subjectName(x.subject))} lessons in ${x.name}.`,
    Math.max(50, Math.round(x.total * 8 / 10) * 10), x.total, f => (f.P.fields.find(y => y.id === x.id) || { done: 0 }).done, { colour: x.colour }]));
  L.push(
    ["subjects-2", "subjects", "Two Disciplines", "Master lessons in two different subjects.", 50, 2, f => f.subjects],
    ["subjects-3", "subjects", "Renaissance Mind", "Master lessons in three different subjects.", 150, 3, f => f.subjects],
    ["subjects-5", "subjects", "Universal Scholar", "Master lessons in five different subjects.", 300, 5, f => f.subjects],
    ["groups-2", "subjects", "Bridge Builder", "Master lessons in two subject groups (STEM, Arts & Humanities, Social Sciences).", 75, 2, f => f.groups],
    ["quiz-1", "quizzes", "Right Answer", "Answer a quiz question correctly.", 10, 1, f => f.quizRight],
    ["quiz-25", "quizzes", "Sharp", "Answer 25 quiz questions correctly.", 50, 25, f => f.quizRight],
    ["quiz-100", "quizzes", "Quiz Master", "Answer 100 quiz questions correctly.", 150, 100, f => f.quizRight],
    ["streak-5", "quizzes", "On a Roll", "Answer 5 quiz questions in a row correctly.", 40, 5, f => f.best],
    ["streak-10", "quizzes", "Unstoppable", "Answer 10 quiz questions in a row correctly.", 100, 10, f => f.best],
    ["streak-20", "quizzes", "Flawless", "Answer 20 quiz questions in a row correctly.", 250, 20, f => f.best],
    ["game-1", "games", "Player One", "Finish your first game.", 25, 1, f => f.games, { soon: true }],
    ["game-10", "games", "Regular Player", "Finish 10 games.", 75, 10, f => f.games, { soon: true }],
    ["game-high", "games", "High Scorer", "Score 1,000 points in one game.", 150, 1000, f => f.gameBest, { soon: true }],
    ["note-1", "study", "First Note", "Write your first note.", 10, 1, f => f.notes],
    ["notes-10", "study", "Note Taker", "Keep 10 notes.", 40, 10, f => f.notes],
    ["notes-50", "study", "Archivist", "Keep 50 notes.", 150, 50, f => f.notes],
    ["note-link", "study", "Connected", "Link a note to a subject, field or lesson.", 20, 1, f => f.linked],
    ["folders-3", "study", "Organiser", "Make three note folders.", 30, 3, f => f.folders],
    ["maps-3", "explore", "Cartographer", "Open the field maps of three subjects.", 30, 3, f => f.maps],
    ["words-10", "explore", "Wordsmith", "Look up 10 glossary words.", 30, 10, f => f.words],
    ["words-50", "explore", "Lexicon", "Look up 50 glossary words.", 100, 50, f => f.words],
    ["fav-1", "explore", "Favourite", "Star a subject or a field.", 10, 1, f => f.favs],
    ["theme-1", "explore", "Make It Yours", "Pick a new look in Settings → Appearance.", 10, 1, f => f.themes],
    ["days-7", "explore", "Regular", "Study on 7 different days.", 70, 7, f => f.days],
    ["days-30", "explore", "Devoted", "Study on 30 different days.", 300, 30, f => f.days]
  );
  return L.map(([id, cat, name, desc, pts, goal, val, o]) => Object.assign({ id, cat, name, desc, pts, goal, val }, o || {}));
}
const points = () => catalogue().reduce((t, a) => t + (D.earned[a.id] ? a.pts : 0), 0);

/* ---------- checking ---------- */
let checkT = null;
const soon = () => { clearTimeout(checkT); checkT = setTimeout(check, 250); };
function check() {
  if (!ready) return [];
  const f = facts(), fresh = [];
  catalogue().forEach(a => { if (!a.soon && !D.earned[a.id] && a.val(f) >= a.goal) { D.earned[a.id] = Date.now(); fresh.push(a); } });
  const quiet = !D.seeded; D.seeded = true;
  if (fresh.length || quiet) save();
  if (fresh.length && !quiet) { toast(fresh); window.dispatchEvent(new CustomEvent("inquire:achievements", { detail: { ids: fresh.map(a => a.id) } })); }
  if (win) draw();
  paintSlot();
  return fresh;
}
function today() { const d = new Date(); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); }
function seen() {
  if (!ready) return;
  const st = D.stats, c = A() ? A().context() : {}, add = (arr, v) => { if (v && !arr.includes(v)) { arr.push(v); return true; } return false; };
  let ch = add(st.days, today());
  if (c.view === "math" && c.subject) ch = add(st.maps, c.subject) || ch;
  if (c.gword) ch = add(st.words, c.gword) || ch;
  const th = readJ("codex.settings", {}).theme; if (th) ch = add(st.themes, th) || ch;
  if (ch) save();
  soon();
}
function record(kind, d) {
  if (!ready) return;
  const st = D.stats;
  if (kind === "quiz") { st.quizTries++; if (d && d.correct) { st.quizRight++; st.streak++; st.bestStreak = Math.max(st.bestStreak, st.streak); } else st.streak = 0; }
  else if (kind === "game") { st.games++; st.gameBest = Math.max(st.gameBest, +(d && d.score) || 0); }
  save(); soon();
}

// the Main Menu's Achievements slot (drawn by app.js, which loads first)
function paintSlot() {
  const el = document.getElementById("achslot"); if (!el) return;
  const L = catalogue(), got = L.filter(a => D.earned[a.id]).length, tag = el.querySelector(".ach-tag"), n = el.querySelector(".ach-n");
  if (tag) tag.textContent = "◆ " + points().toLocaleString("en-US") + " AP";
  if (n) n.textContent = got + " of " + L.filter(a => !a.soon).length + " earned.";
}
/* ---------- toast ---------- */
let tbox = null;
function toast(list) {
  if (!tbox) { tbox = document.createElement("div"); tbox.className = "ach-toasts"; tbox.setAttribute("aria-live", "polite"); document.body.appendChild(tbox); }
  const many = list.length > 3, items = many ? [{ name: list.length + " achievements", pts: list.reduce((t, a) => t + a.pts, 0), cat: "lessons" }] : list;
  items.forEach((a, i) => {
    const t = document.createElement("button"); t.type = "button"; t.className = "ach-toast win";
    t.innerHTML = `<span class="ach-medal sm">${(CATS.find(c => c[0] === a.cat) || CATS[0])[2]}</span><span><small>Achievement unlocked</small><b>${esc(a.name)}</b></span><span class="ach-ap">+${a.pts} AP</span>`;
    t.onclick = () => { t.remove(); open("mine"); };
    setTimeout(() => tbox.appendChild(t), i * 350);
    setTimeout(() => { t.classList.add("out"); setTimeout(() => t.remove(), 400); }, 6000 + i * 350);
  });
}

/* ---------- window ---------- */
let win = null, tab = "all", cat = "all";
const fmt = n => n.toLocaleString("en-US");
const when = t => new Date(t).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
function open(t) {
  if (t) tab = t === "mine" ? "mine" : "all";
  if (!A() || !A().modal) return;
  if (win && !win.closed) { draw(); return win; }
  check();
  win = A().modal("achievements", { title: "Achievements", cls: "mw-ach" });
  win.cleanup.push(() => { win = null; });
  win.head.innerHTML = `<span class="ach-bal" title="Achievement Points: earned by completing achievements"><span class="ach-coin" aria-hidden="true">◆</span><b class="num"></b><small>AP</small></span>
    <button type="button" class="btn-s ach-mine" aria-pressed="false">★ My Achievements</button>`;
  win.head.querySelector(".ach-mine").onclick = () => { tab = tab === "mine" ? "all" : "mine"; draw(); };
  win.body.addEventListener("click", e => {
    const b = e.target.closest("[data-tab],[data-cat]"); if (!b) return;
    if (b.dataset.tab) tab = b.dataset.tab; else cat = b.dataset.cat;
    draw();
  });
  draw();
  return win;
}
function draw() {
  if (!win || win.closed) return;
  const L = catalogue(), f = facts(), pts = points(), got = L.filter(a => D.earned[a.id]), total = L.filter(a => !a.soon).length;
  win.head.querySelector(".ach-bal b").textContent = fmt(pts);
  const mb = win.head.querySelector(".ach-mine"); mb.setAttribute("aria-pressed", String(tab === "mine")); mb.textContent = tab === "mine" ? "◀ All achievements" : "★ My Achievements";
  const card = a => {
    const v = Math.min(a.goal, a.val(f)), done = !!D.earned[a.id], c = CATS.find(x => x[0] === a.cat);
    return `<article class="ach-card${done ? " done" : ""}${a.soon ? " soon" : ""}"${a.colour ? ` style="--ac:${a.colour}"` : ""}>
      <span class="ach-medal">${done ? "✓" : c[2]}</span>
      <div class="ach-txt"><h3>${esc(a.name)}</h3><p>${a.desc}</p>
        ${done ? `<span class="ach-when">Earned ${when(D.earned[a.id])}</span>` : a.soon ? `<span class="ach-when">Coming with Games</span>`
          : `<span class="ach-bar" role="progressbar" aria-valuemin="0" aria-valuemax="${a.goal}" aria-valuenow="${v}"><i style="width:${(v / a.goal * 100).toFixed(1)}%"></i></span><span class="ach-prog num">${fmt(v)} / ${fmt(a.goal)}</span>`}</div>
      <span class="ach-pts num">${a.pts}<small>AP</small></span></article>`;
  };
  const tabs = `<div class="ach-tabs" role="tablist"><button type="button" role="tab" data-tab="all" aria-selected="${tab === "all"}">All achievements</button><button type="button" role="tab" data-tab="mine" aria-selected="${tab === "mine"}">My Achievements <span class="num">${got.length}</span></button>
    <span class="ach-sum"><span class="ach-bar big"><i style="width:${(got.length / Math.max(1, total) * 100).toFixed(1)}%"></i></span><span class="num">${got.length} / ${total}</span> earned</span></div>`;
  let body;
  if (tab === "mine") {
    const st = D.stats, rows = got.sort((a, b) => D.earned[b.id] - D.earned[a.id]);
    body = `<div class="ach-stats">${[[fmt(pts), "Achievement Points"], [fmt(got.length), "Achievements earned"], [fmt(f.P.mastered), "Lessons mastered"], [fmt(f.fieldsDone), "Fields complete"], [fmt(st.quizRight), "Quiz answers right"], [fmt(st.bestStreak), "Best quiz streak"], [fmt(f.days), "Days studied"]]
        .map(([n, l]) => `<div><b class="num">${n}</b><span>${l}</span></div>`).join("")}</div>`
      + (rows.length ? `<div class="ach-grid">${rows.map(card).join("")}</div>`
        : `<p class="ach-empty">Nothing earned yet. Master a lesson, answer a quiz question or write a note to earn your first Achievement Points.</p>`);
  } else {
    const chips = `<div class="ach-cats" role="group" aria-label="Category">${[["all", "All", "◎"]].concat(CATS).map(([id, nm, ic]) => { const n = id === "all" ? L : L.filter(a => a.cat === id);
      return `<button type="button" class="gl-chip sm" data-cat="${id}" aria-pressed="${cat === id}"><span class="g">${ic}</span>${esc(nm)}<span class="n">${n.filter(a => D.earned[a.id]).length}/${n.length}</span></button>`; }).join("")}</div>`;
    body = chips + CATS.filter(c => cat === "all" || c[0] === cat).map(([id, nm, ic, line]) => {
      const list = L.filter(a => a.cat === id).sort((a, b) => (!!D.earned[b.id] - !!D.earned[a.id]) || 0);
      return `<section class="ach-sec"><div class="ach-sh"><span class="ach-sic">${ic}</span><h3>${esc(nm)}</h3><span class="ln">${esc(line)}</span></div><div class="ach-grid">${list.map(card).join("")}</div></section>`;
    }).join("");
  }
  const sc = win.body.querySelector(".ach-scroll"), y = sc ? sc.scrollTop : 0;
  win.body.innerHTML = tabs + `<div class="ach-scroll">${body}</div>`;
  if (sc) win.body.querySelector(".ach-scroll").scrollTop = y;
}

/* ---------- wiring ---------- */
window.addEventListener("inquire:route", seen);
window.addEventListener("inquire:mastered", soon);
window.addEventListener("inquire:progress-changed", () => { D = load(); soon(); }); // a restored backup may carry achievements
window.addEventListener("inquire:notes-changed", soon);
window.addEventListener("inquire:quiz", e => record("quiz", e.detail));
window.addEventListener("inquire:game", e => record("game", e.detail));
window.addEventListener("storage", e => { if (e.key && /^codex\.(favs|settings|notefolders)/.test(e.key)) soon(); });
window.addEventListener("click", e => { if (e.target.closest && e.target.closest(".fav, .set-theme, .set-th, [data-theme]")) setTimeout(seen, 50); }, true);
window.addEventListener("inquire:signed-in", () => { ready = true; D = load(); if (win) win.close(); seen(); });
window.InquireAchievements = { open, close: () => win && win.close(), points, list: () => catalogue().map(a => ({ id: a.id, cat: a.cat, name: a.name, pts: a.pts, goal: a.goal, earned: D.earned[a.id] || 0, soon: !!a.soon })), record, check };
window.addEventListener("inquire:route", paintSlot);
paintSlot();
if (ready) setTimeout(seen, 0);
})();
