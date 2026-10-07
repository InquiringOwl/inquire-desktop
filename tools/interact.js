// Interaction test: drives the features smoke.js only loads. Fails (exit 1) on a wrong result or any page error.
//   notes: drag notes onto folders, folders into/between folders (and the cycle refusal), My order drag + Alt+↑/↓,
//          ★ first toggle, text sizes, delete + Undo, list fold / resize, video by link and by file, backup video size limit
//   menu: My notes top bar opens Notes, New note asks for a title; Assist: icon rail, slide in/out, user Chat not connected;
//   Notes box: docked left of Assist, linked notes first, delete + Undo, drag to float (also zoomed), ✕ + reopen in place, dock home;
//   note link picker icons coloured by subject group; My notes window (fog, Esc); Dictionary stars first; Achievements
//   (menu slot, window, points, toast, My Achievements, quiz streak); Settings → Shortcuts rebinding (record, use, conflict, refuse, reset); Appearance custom colours + 3 presets
//   right-click: Glossary and Dictionary definitions in the menu (dictionary answer mocked), Save to note
//   settings: Install & Relaunch in About with a fake desktop bridge (also on the sign-in screen); a theme reaches nodes/era bar
// Run: node tools/interact.js   (needs playwright, ~40 s; part of npm run check)
let chromium;
try { ({ chromium } = require('playwright')); } catch (e) { console.error('interact.js needs Playwright (see smoke.js).'); process.exit(1); }
const path = require('path'), fs = require('fs'), os = require('os');
const { desktop, R } = require('./build-web.js');
const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'codex-interact-')), file = path.join(dir, 'index.html');
fs.writeFileSync(file, desktop.replace('href="fonts/fonts.css"', `href="file://${path.join(R, 'app/fonts/fonts.css')}"`).replace(/<meta http-equiv="Content-Security-Policy"[^>]*>/, ''));
const URL0 = 'file://' + file;
const fails = [], pass = [];
const ok = (cond, name, got) => { (cond ? pass : fails).push(name + (cond ? '' : ' → got ' + JSON.stringify(got))); };
const wait = ms => new Promise(r => setTimeout(r, ms));

(async () => {
  const b = await chromium.launch();
  const errs = [];
  const page = async (init) => { const p = await b.newPage({ viewport: { width: 1440, height: 900 } }); p.on('pageerror', e => errs.push(e.message)); if (init) await p.addInitScript(init); return p; };

  /* ---------- settings: Install & Relaunch (fake desktop bridge; the intro shows, so this is the sign-in screen) ---------- */
  {
    const p = await page(() => { let cb = null; window.__upd = s => cb && cb(s); window.__inst = 0;
      window.inquireDesktop = { platform: 'darwin', onUpdate: f => { cb = f; }, checkForUpdates: async () => {}, updateState: async () => ({ status: 'ready', version: '9.9.9' }), installUpdate: async () => { window.__inst++; }, revealUpdate: async () => {}, version: async () => '1.0.0' }; });
    await p.goto(URL0 + '#menu'); await wait(900);
    ok(!!(await p.$('#inqi')), 'sign-in screen is up');
    await p.evaluate(() => InquireSettings.open('about')); await wait(300);
    ok(await p.$eval('.set-tab[data-tab=about]', e => e.classList.contains('has-upd')), 'About tab shows the update dot');
    await p.click('.set-upd [data-u=go]'); ok(await p.evaluate(() => window.__inst) === 1, 'Install & Relaunch calls installUpdate');
    await p.evaluate(() => __upd({ status: 'downloading', version: '9.9.9', percent: 40 }));
    ok(/40%/.test(await p.$eval('.set-upd-msg', e => e.textContent)), 'update progress shows in Settings');
    await p.close();
  }

  const p = await page();
  await p.route('https://en.wiktionary.org/api/rest_v1/page/definition/**', r => r.fulfill({ status: 200, contentType: 'application/json', headers: { 'access-control-allow-origin': '*' },
    body: JSON.stringify({ en: [{ partOfSpeech: 'Noun', language: 'English', definitions: [{ definition: '<span>Something whose <a href="/wiki/value">value</a> may change.</span>' }] }] }) }));
  await p.goto(URL0 + '#menu'); await wait(800);

  /* ---------- menu ---------- */
  ok(await p.$eval('.hello h1', e => e.textContent) === 'Main Menu', 'menu heading is Main Menu');
  ok(!(await p.$('#chk')), 'menu has no Check for updates button');
  await p.click('.mnotes-h h2'); await wait(400);
  ok(!!(await p.$('.mw-ov[data-mw=notes] .nb')) && await p.evaluate(() => document.body.classList.contains('mw-open')), 'My notes top bar opens the My notes window (app fogs)');
  ok(await p.evaluate(() => location.hash) === '#menu', 'the screen behind My notes stays the Main Menu');
  ok(/saved on this computer/i.test(await p.$eval('.mw-ov[data-mw=notes] .mw-sub', e => e.textContent).catch(() => '')), 'My notes says where notes are saved');
  await p.keyboard.press('Escape'); await wait(400); ok(!(await p.$('.mw-ov')) && !(await p.evaluate(() => document.body.classList.contains('mw-open'))), 'Esc closes My notes');
  await p.click('.mnotes-new'); await wait(300);
  ok(await p.evaluate(() => document.body.classList.contains('ask-open')), 'New note opens the title dialog');
  await p.keyboard.type('Physics revision'); await p.keyboard.press('Enter'); await wait(500);
  ok(await p.$eval('.nb-title', e => e.value).catch(() => null) === 'Physics revision', 'dialog title makes the note', await p.$eval('.nb-title', e => e.value).catch(() => null));

  /* ---------- notes: folders and order ---------- */
  await p.evaluate(() => { const N = InquireNotes; ['A', 'B', 'C'].forEach((t, i) => { const n = N.create({ title: 'Note ' + t }); N.update(n.id, { updated: Date.now() + i, quiet: true }); }); ['Alpha', 'Beta', 'Gamma'].forEach(f => N.addFolder(f)); });
  await p.evaluate(() => { location.hash = 'menu'; }); await wait(200); await p.evaluate(() => { location.hash = 'notes'; }); await wait(500);
  const names = () => p.$$eval('.nb-fd.user', es => es.map(e => e.querySelector('.nb-fnm').textContent + getComputedStyle(e).getPropertyValue('--d')));
  const fd = n => p.locator('.nb-fd.user', { hasText: n });
  await fd('Beta').dragTo(fd('Alpha')); await wait(150);
  ok(JSON.stringify(await names()) === '["Alpha0","Beta1","Gamma0"]', 'folder dropped into a folder', await names());
  await fd('Gamma').dragTo(fd('Alpha'), { targetPosition: { x: 30, y: 2 } }); await wait(150);
  ok(JSON.stringify(await names()) === '["Gamma0","Alpha0","Beta1"]', 'folder dropped above a folder', await names());
  await fd('Alpha').dragTo(fd('Beta')); await wait(150);
  ok(JSON.stringify(await names()) === '["Gamma0","Alpha0","Beta1"]', 'folder cannot go into its own subfolder', await names());
  await p.locator('.nb-it', { hasText: 'Note A' }).dragTo(fd('Beta')); await wait(150);
  ok(await p.evaluate(() => InquireNotes.list().find(n => n.title === 'Note A').folder === InquireNotes.folders().find(f => f.name === 'Beta').id), 'note dropped onto a folder');
  const order = () => p.$$eval('.nb-it .nb-t', es => es.map(e => e.textContent.replace('★', '')));
  const before = await order(), last = before[before.length - 1];
  await p.locator('.nb-it', { hasText: last }).dragTo(p.locator('.nb-it').first(), { targetPosition: { x: 40, y: 3 } }); await wait(150);
  ok((await order())[0] === last, 'note dragged to the top of My order', await order());
  await p.locator('.nb-it', { hasText: last }).focus(); await p.keyboard.press('Alt+ArrowDown'); await wait(100);
  ok((await order())[1] === last, 'Alt+↓ moves a note down', await order());
  // ★ first
  await p.evaluate(() => { const n = InquireNotes.list().find(x => x.title === 'Note B'); InquireNotes.update(n.id, { fav: true, quiet: true }); }); await p.evaluate(() => { location.hash = 'menu'; }); await wait(200); await p.evaluate(() => { location.hash = 'notes'; }); await wait(400);
  ok((await order())[0] === 'Note B', 'favourite on top with ★ first', await order());
  await p.click('.nb-favtop'); await wait(100);
  ok((await order())[0] !== 'Note B', '★ first off: favourite follows My order', await order());
  await p.click('.nb-favtop');

  /* ---------- notes: text size, fold, resize ---------- */
  await p.locator('.nb-it', { hasText: 'Note C' }).click(); await wait(200);
  await p.click('.nb-rich'); await p.keyboard.type('Hello big world');
  const selWord = w => p.evaluate(w => { const ed = document.querySelector('.nb-rich'); const tw = document.createTreeWalker(ed, NodeFilter.SHOW_TEXT); let n; while ((n = tw.nextNode())) { const i = n.textContent.indexOf(w); if (i >= 0) { const r = document.createRange(); r.setStart(n, i); r.setEnd(n, i + w.length); getSelection().removeAllRanges(); getSelection().addRange(r); return true; } } return false; }, w);
  await selWord('big'); await p.click('.nr-sz-xl'); await p.click('.nr-sz-l');
  ok(/<span data-s="l">big<\/span>/.test(await p.$eval('.nb-rich', e => e.innerHTML)), 'text size applies and replaces the old size', await p.$eval('.nb-rich', e => e.innerHTML));
  const lw = () => p.$eval('.nb-list', e => e.offsetWidth);
  const rz = await p.locator('.nb-rz').boundingBox(); await p.mouse.move(rz.x + 5, rz.y + 200); await p.mouse.down(); await p.mouse.move(rz.x + 85, rz.y + 200, { steps: 4 }); await p.mouse.up();
  ok(Math.abs(await lw() - 350) < 4, 'list resizes by dragging', await lw());
  await p.click('.nb-fold[data-p=f]'); await wait(450); ok(await p.$eval('.nb-folders', e => e.offsetWidth) === 0, 'folders fold away');
  await p.click('.nb-fold[data-p=f]'); await p.dblclick('.nb-rz'); await wait(450);

  /* ---------- notes: video ---------- */
  await p.click('.nr-vid'); await p.fill('.nv-form input', 'https://youtu.be/dQw4w9WgXcQ?t=42'); await p.click('.nv-form button'); await wait(200);
  ok(/youtube-nocookie\.com\/embed\/dQw4w9WgXcQ.*start=42/.test(await p.$eval('.nw[data-w=video] iframe', e => e.src).catch(() => '')), 'YouTube link becomes an embed');
  await p.evaluate(() => InquireNotes.editorFor(document.querySelector('.nb-rich')).addFiles([new File([new Uint8Array(2000)], 'clip.mp4', { type: 'video/mp4' })])); await wait(700);
  ok(/^blob:/.test(await p.$eval('.nw[data-w=video] video', e => e.src).catch(() => '')), 'video file plays from storage');
  const big = await p.evaluate(async () => { const api = InquireNotes.editorFor(document.querySelector('.nb-rich')); await api.addFiles([new File([new Uint8Array(26 * 1048576)], 'big.mp4', { type: 'video/mp4' })]); await new Promise(r => setTimeout(r, 700)); const r = await InquireNotes.exportMedia(); return { n: Object.keys(r.map).length, skipped: r.skipped.length }; });
  ok(big.skipped === 1 && big.n >= 1, 'backup leaves out videos over 25 MB and says so', big);

  /* ---------- notes: delete + Undo ---------- */
  const count = () => p.evaluate(() => InquireNotes.list().length);
  const n0 = await count();
  await p.click('.nb-bar [data-a=del]'); await wait(200);
  ok(await count() === n0 - 1 && !!(await p.$('.tm-toast')), 'Delete removes at once and offers Undo');
  await p.click('.tm-toast button'); await wait(200);
  ok(await count() === n0 && /^blob:/.test(await p.evaluate(async () => { const n = InquireNotes.list().find(x => x.title === 'Note C'); const id = (n.html.match(/&quot;vid&quot;:&quot;([a-z0-9]+)/) || [])[1]; return id ? (await InquireNotes.imageURL(id)) || '' : ''; })), 'Undo brings the note back with its video');

  /* ---------- right-click definitions + Save to note (in a lesson) ---------- */
  await p.evaluate(() => { location.hash = 'pa-variables'; }); await wait(900);
  const pt = await p.evaluate(() => { const tw = document.createTreeWalker(document.querySelector('.topic'), NodeFilter.SHOW_TEXT); let n; while ((n = tw.nextNode())) { const i = n.textContent.search(/\bvariable\b/); if (i >= 0 && n.parentElement.offsetParent) { n.parentElement.scrollIntoView({ block: 'center' }); const r = document.createRange(); r.setStart(n, i); r.setEnd(n, i + 8); getSelection().removeAllRanges(); getSelection().addRange(r); const b = r.getBoundingClientRect(); return { x: b.x + 5, y: b.y + 5 }; } } return null; });
  ok(!!pt, 'found a glossary word on a lesson');
  if (pt) {
    await p.mouse.click(pt.x, pt.y, { button: 'right' }); await wait(200);
    await p.click('.tm-menu [data-a=define]'); await wait(150);
    ok(/letter or symbol/i.test(await p.$eval('.tm-def', e => e.textContent).catch(() => '')), 'Glossary definition shows in the menu');
    await p.click('.tm-menu [data-a=dict]'); await wait(500);
    ok(/value may change/.test(await p.$eval('.tm-def', e => e.textContent).catch(() => '')), 'Dictionary (Wiktionary) definition shows in the menu');
    ok(/Wiktionary/.test(await p.$eval('.tm-def .tm-src', e => e.textContent).catch(() => '')), 'Dictionary names Wiktionary as the source');
    await p.click('.tm-menu [data-a=save]'); await wait(300);
    await p.click('.nk-list button >> text=Note C'); await wait(300);
    ok(await p.evaluate(() => /value may change/.test(InquireNotes.list().find(n => n.title === 'Note C').html)), 'Save to note adds the definition to the picked note');
  }

  /* ---------- Assist: linked notes first, slide, delete + Undo ---------- */
  await p.evaluate(() => InquireNotes.create({ title: 'Linked lesson note', links: ['t:pa-variables'] }));
  await p.click('.dk-rail [data-go=ai]'); await wait(500);
  ok(await p.$eval('.dk-win', e => getComputedStyle(e).transform === 'none'), 'Assist slides out of the side');
  ok(await p.$eval('.dk', e => e.classList.contains('rail-off')), 'the icon rail steps aside while Assist is open');
  ok(/Assist/i.test(await p.$eval('#dk-win .dk-title', e => e.textContent)), 'Assist title at the top left of the window');
  await p.click('.dk-tabs [data-t=chat]'); await wait(150);
  ok(await p.$eval('.dk-cask textarea', e => e.disabled), 'user Chat says not connected without a chat server');
  await p.click('#dk-win .dk-ic[data-go=notes]'); await wait(500);
  const nbox = () => p.$eval('#dk-notes', e => { const r = e.getBoundingClientRect(); return { x: Math.round(r.x), y: Math.round(r.y), w: r.width, hidden: e.hidden, docked: e.classList.contains('docked') }; });
  const dwr = await p.$eval('#dk-win', e => e.getBoundingClientRect().x), dn0 = await nbox();
  ok(!dn0.hidden && dn0.docked && dn0.x + dn0.w <= dwr, 'Notes box opens docked, left of Assist', JSON.stringify(dn0));
  ok((await p.$$eval('#dk-notes .dk-nit b', es => es.map(e => e.textContent)))[0] === 'Linked lesson note', 'Notes box lists linked notes first');
  await p.click('#dk-notes .dk-nit >> nth=0'); await wait(200); const d0 = await count();
  await p.click('#dk-notes .dk-nbar [data-a=del]'); await wait(200); ok(await count() === d0 - 1, 'Notes box Delete removes the note');
  await p.click('.tm-toast button'); await wait(300); ok(await count() === d0, 'Notes box Undo restores it');
  await p.click('#dk-win .dk-x'); await wait(500); ok(await p.$eval('.dk-win', e => e.hidden), 'Assist slides back in');
  // drag the Notes box out, close it, reopen at the same spot, then dock it home
  const dhb = await p.$eval('.dkn-h .dk-title', e => { const r = e.getBoundingClientRect(); return { x: r.x + 20, y: r.y + 6 }; });
  const dn0b = await nbox(); ok(dn0b.docked && dn0b.x > dn0.x, 'docked Notes moves to the corner when Assist closes');
  await p.mouse.move(dhb.x, dhb.y); await p.mouse.down(); await p.mouse.move(dhb.x - 200, dhb.y - 150, { steps: 6 }); await p.mouse.up(); await wait(100);
  const dn1 = await nbox();
  ok(!dn1.docked && Math.abs(dn1.x - (dn0b.x - 200)) <= 2 && Math.abs(dn1.y - (dn0b.y - 150)) <= 2, 'Notes box detaches and follows a drag', JSON.stringify([dn0b, dn1]));
  ok(!(await p.$eval('.dk', e => e.classList.contains('rail-off'))), 'icon rail is back while Notes floats');
  await p.click('.dkn-x'); await wait(400); ok((await nbox()).hidden, 'Notes ✕ closes the box');
  await p.click('.dk-rail [data-go=notes]'); await wait(400); const dn2 = await nbox();
  ok(!dn2.hidden && dn2.x === dn1.x && dn2.y === dn1.y, 'Notes icon reopens it where it was', JSON.stringify([dn1, dn2]));
  await p.click('.dkn-home'); await wait(500); const dn3 = await nbox(); ok(dn3.docked && dn3.x > dn1.x, 'Dock button sends Notes home to the bottom right');
  await p.evaluate(() => { document.getElementById('app').style.zoom = '1.25'; }); await wait(100);
  const dhz = await p.$eval('.dkn-h .dk-title', e => { const r = e.getBoundingClientRect(); return { x: r.x + 20, y: r.y + 6 }; });
  const dnz = await nbox(); await p.mouse.move(dhz.x, dhz.y); await p.mouse.down(); await p.mouse.move(dhz.x - 100, dhz.y - 80, { steps: 5 }); await p.mouse.up(); await wait(100);
  const dnz2 = await nbox(); ok(Math.abs(dnz2.x - (dnz.x - 100)) <= 3 && Math.abs(dnz2.y - (dnz.y - 80)) <= 3, 'Notes drag follows the pointer at 125 % interface size', JSON.stringify([dnz, dnz2]));
  await p.evaluate(() => { document.getElementById('app').style.zoom = ''; InquireDock.dockNotes(); InquireDock.notes(false); });
  await p.evaluate(() => { location.hash = 'notes'; }); await wait(500);
  await p.click('.nb-it >> nth=0'); await wait(250); await p.click('.nb-ladd'); await wait(300);
  const icol = await p.$$eval('.nk-pick .nk-it', es => es.map(e => [e.textContent.trim(), getComputedStyle(e.querySelector('.nk-ic')).color]));
  const colOf = re => (icol.find(([t]) => re.test(t)) || [])[1];
  ok(colOf(/^.?English\s*Subject/) === 'rgb(217, 122, 230)' && colOf(/^.?MathematicsSubject|Mathematics\s*Subject/) === 'rgb(92, 200, 224)' && colOf(/Grammar.*field/) === 'rgb(217, 122, 230)', 'link picker icons use the subject group colour', JSON.stringify(icol.slice(0, 4)));
  await p.keyboard.press('Escape'); await wait(100);


  /* ---------- Dictionary: starred subjects first in their group ---------- */
  await p.evaluate(() => InquireApp.closeWin()); await wait(300);
  await p.evaluate(() => { location.hash = 'dict'; }); await wait(600);
  const hum = () => p.$$eval('section.subj-group[aria-label="Arts & Humanities"] .slot h3', es => es.map(e => e.textContent));
  const h0 = await hum();
  const tgt = (await p.$$eval('section.subj-group[aria-label="Arts & Humanities"] .slot-wrap', ws => ws.map(w => w.querySelector('h3').textContent))).pop();
  await p.click(`section.subj-group[aria-label="Arts & Humanities"] .slot-wrap:has(h3:text-is("${tgt}")) .fav`); await wait(300);
  ok((await hum())[0] === tgt, 'a starred subject moves to the front of its group', JSON.stringify([h0, await hum()]));
  await p.click(`section.subj-group[aria-label="Arts & Humanities"] .slot-wrap:has(h3:text-is("${tgt}")) .fav`); await wait(300);
  ok(JSON.stringify(await hum()) === JSON.stringify(h0), 'un-starring puts it back in order');

  /* ---------- Achievements ---------- */
  await p.evaluate(() => { location.hash = 'menu'; }); await wait(600);
  ok(/AP/.test(await p.$eval('#achslot .ach-tag', e => e.textContent).catch(() => '')), 'Main Menu has an Achievements slot with the AP balance');
  await p.click('#achslot'); await wait(500);
  ok(!!(await p.$('.mw-ov[data-mw=achievements] .ach-card')) && await p.evaluate(() => document.body.classList.contains('mw-open')), 'Achievements opens as a window over the app');
  ok(await p.$$eval('.ach-sec', es => es.length) >= 6, 'catalogue shows every category');
  const ap0 = await p.evaluate(() => InquireAchievements.points());
  ok(ap0 > 0 && (await p.$eval('.ach-bal b', e => e.textContent)) === ap0.toLocaleString('en-US'), 'notes already earned points, shown in the balance', ap0);
  await p.click('.ach-mine'); await wait(200);
  ok(await p.$eval('[data-tab=mine]', e => e.getAttribute('aria-selected')) === 'true' && /First Note/.test(await p.$eval('.ach-scroll', e => e.textContent)), 'My Achievements lists what was earned');
  await p.keyboard.press('Escape'); await wait(400);
  await p.evaluate(() => { location.hash = 'pa-variables'; }); await wait(700);
  if (!(await p.evaluate(() => InquireAchievements.list().find(a => a.id === 'first-lesson').earned))) {
    await p.click('#mast'); await wait(700);
    ok(/First Steps/.test(await p.$eval('.ach-toasts', e => e.textContent).catch(() => '')), 'mastering a lesson shows an Achievement unlocked toast');
    ok(await p.evaluate(() => InquireAchievements.points()) === ap0 + 10, 'and adds its points');
  }
  await p.evaluate(() => { for (let i = 0; i < 5; i++) window.dispatchEvent(new CustomEvent('inquire:quiz', { detail: { correct: true } })); }); await wait(500);
  ok(await p.evaluate(() => !!InquireAchievements.list().find(a => a.id === 'streak-5').earned), 'five right quiz answers in a row earn On a Roll');

  /* ---------- Settings: rebind a shortcut ---------- */
  await p.evaluate(() => InquireSettings.open('keys')); await wait(300);
  await p.click('.set-bk[data-k=notes]'); await wait(100); await p.keyboard.press('Alt+KeyK'); await wait(150);
  ok(await p.evaluate(() => JSON.parse(localStorage.getItem('codex.settings')).keys.notes) === 'Alt+KeyK', 'a new shortcut is recorded and saved');
  await p.keyboard.press('Escape'); await wait(300);
  await p.keyboard.press('Alt+KeyK'); await wait(400); ok(!!(await p.$('.mw-ov[data-mw=notes]')), 'the new shortcut opens My notes');
  await p.keyboard.press('Alt+KeyK'); await wait(400); ok(!(await p.$('.mw-ov:not(.out)')), 'and closes it again');
  await p.keyboard.press('Alt+KeyN'); await wait(300); ok(!(await p.$('.mw-ov:not(.out)')), 'the old shortcut no longer does');
  await p.keyboard.press('Alt+KeyA'); await wait(400); ok(!!(await p.$('.mw-ov[data-mw=achievements]')), 'Alt+A opens Achievements'); await p.keyboard.press('Escape'); await wait(300);
  await p.evaluate(() => InquireSettings.open('keys')); await wait(300);
  await p.click('.set-bk[data-k=achievements]'); await wait(100); await p.keyboard.press('Alt+KeyK'); await wait(150);
  ok(await p.evaluate(() => JSON.parse(localStorage.getItem('codex.settings')).keys.notes) === '' && /now off/.test(await p.$eval('.set-pane .set-msg', e => e.textContent)), 'taking a used combo turns the other action off and says so');
  await p.click('.set-bk[data-k=menu]'); await wait(100); await p.keyboard.press('KeyQ'); await wait(150);
  ok(/types a letter/.test(await p.$eval('.set-pane .set-msg', e => e.textContent)), 'a bare letter is refused');
  await p.click('[data-a=kreset]'); await wait(150);
  ok(await p.evaluate(() => Object.keys(JSON.parse(localStorage.getItem('codex.settings')).keys).length) === 0, 'Reset all restores the defaults');
  await p.keyboard.press('Escape'); await wait(300);

  /* ---------- Settings → Appearance: your colours + presets ---------- */
  await p.evaluate(() => InquireSettings.open('look')); await wait(300);
  const vv = k => p.evaluate(k => getComputedStyle(document.documentElement).getPropertyValue(k).trim().toLowerCase(), k);
  await p.fill('.set-hex[data-h=bg]', '#102030'); await p.fill('.set-hex[data-h=accent]', 'f2b84b'); await wait(150);
  ok(await vv('--void') === '#102030' && await vv('--frame') === '#f2b84b', 'typing colours changes the console at once');
  ok(await p.evaluate(() => JSON.parse(localStorage.getItem('codex.settings')).theme) === 'custom', 'and is kept as the Custom look');
  await p.fill('.set-cname', 'Night Brass'); await p.click('[data-save="1"]'); await wait(300);
  const st = () => p.evaluate(() => JSON.parse(localStorage.getItem('codex.settings')));
  ok((await st()).presets[1].name === 'Night Brass' && (await st()).theme === 'preset-2', 'Save to Preset 2 stores the look and uses it');
  ok(/Night Brass/.test(await p.$eval('.set-presets', e => e.textContent)) && !!(await p.$('.set-presets .set-th[data-id=preset-2] .set-sw')), 'the preset shows as a theme card with its colour square');
  await p.click('.set-th[data-id=ember]'); await wait(150); ok(await vv('--frame') !== '#f2b84b', 'a built-in theme still applies');
  await p.click('.set-th[data-id=preset-2]'); await wait(150); ok(await vv('--void') === '#102030', 'clicking the preset brings the look back');
  await p.click('[data-save="1"]'); await wait(100); ok(/Replace\?/.test(await p.$eval('[data-save="1"]', e => e.textContent)), 'saving over a preset asks first');
  await p.click('[data-del="1"]'); await p.click('[data-del="1"]'); await wait(300);
  ok((await st()).presets[1] === null && (await st()).theme === 'custom', 'deleting the preset in use falls back to the Custom look');
  await p.evaluate(() => InquireSettings.close());

  /* ---------- theme reaches field-map nodes ---------- */
  await p.evaluate(() => localStorage.setItem('codex.settings', JSON.stringify({ theme: 'ember' }))); await p.reload(); await wait(800);
  await p.evaluate(() => { location.hash = 'field-map'; }); await wait(800);
  const era = await p.$eval('.era', e => getComputedStyle(e).backgroundImage);
  ok(!/28, 42, 68/.test(era), 'era bar follows the theme', era);

  /* ---------- lab kit: draggable points (mouse + keyboard, curve-glued) and scrubbable numbers ---------- */
  {
    const q = await page(); await q.goto(URL0 + '#menu'); await wait(500);
    await q.addScriptTag({ path: path.join(R, 'tests/fixtures/_kit-demo-lab.js') });
    await q.evaluate(() => { location.hash = 'a1-slope-forms'; }); await wait(900);
    const kd = () => q.evaluate(() => window.__kd);
    const at = (x, y) => q.evaluate(([x, y]) => { const P = window.__kdP, r = document.querySelector('.stage canvas').getBoundingClientRect(); return [r.left + P.X(x), r.top + P.Y(y)]; }, [x, y]);
    let [px, py] = await at(1, 1); const [tx, ty] = await at(3, 4);
    await q.mouse.move(px, py); await q.mouse.down(); await q.mouse.move(tx, ty, { steps: 6 }); await q.mouse.up(); await wait(100);
    ok(JSON.stringify((await kd()).A) === '[3,4]', 'drag: a free point follows the mouse and snaps to 0.5', (await kd()).A);
    [px, py] = await at(2, 6); const [ux, uy] = await at(-1, 10);
    await q.mouse.move(px, py); await q.mouse.down(); await q.mouse.move(ux, uy, { steps: 6 }); await q.mouse.up(); await wait(100);
    let B = (await kd()).B; ok(Math.abs(B[0] + 1) < 0.06 && Math.abs(B[1] - (B[0] * B[0] + 2)) < 1e-6, 'drag: a curve-glued point slides along y = ax² + b', B);
    await q.focus('.stage canvas'); await q.keyboard.press('ArrowRight'); await wait(60);
    ok((await kd()).A[0] === 3.5, 'keyboard: arrow moves the focused point one snap step', (await kd()).A);
    await q.keyboard.press('Tab'); await q.keyboard.press('ArrowRight'); await wait(60); const B2 = (await kd()).B;
    ok(B2[0] > B[0] && Math.abs(B2[1] - (B2[0] * B2[0] + 2)) < 1e-6, 'keyboard: Tab to the next point, arrows keep it on the curve', B2);
    await q.$eval('.eqline', e => e.scrollIntoView({ block: 'center' })); await wait(100);
    const kv = await q.$('.eqline .kv[data-kv="a"]'); const r = await kv.boundingBox();
    await q.mouse.move(r.x + r.width / 2, r.y + r.height / 2); await q.mouse.down(); await q.mouse.move(r.x + r.width / 2 + 31, r.y + r.height / 2, { steps: 5 }); await q.mouse.up(); await wait(120);
    ok((await kd()).a === 3.5, 'scrub: dragging a number 31 px right adds 5 steps of 0.5', (await kd()).a);
    const B3 = (await kd()).B; ok(Math.abs(B3[1] - (3.5 * B3[0] * B3[0] + 2)) < 1e-6, 'scrub: changing a moves the curve-glued point with the curve', B3);
    const r2 = await (await q.$('.eqline .kv[data-kv="b"]')).boundingBox(); await q.mouse.click(r2.x + r2.width / 2, r2.y + r2.height / 2); await wait(80);
    ok(!!(await q.$('.kv-edit')), 'click: a number opens a typing box');
    await q.keyboard.type('x'); await q.keyboard.press('Enter'); await wait(60);
    ok(!!(await q.$('.kv-edit.bad')) && (await kd()).b === 2, 'typing junk is refused and keeps the value');
    await q.fill('.kv-edit', '-7/2'); await q.keyboard.press('Enter'); await wait(120);
    ok((await kd()).b === -3 && !(await q.$('.kv-edit')), 'typing −7/2 sets b (−3.5 snapped to its step of 1)', (await kd()).b);
    await q.focus('.eqline .kv[data-kv="b"]'); await q.keyboard.press('ArrowUp'); await q.keyboard.press('ArrowUp'); await wait(120);
    ok((await kd()).b === -1, 'keyboard: ↑ on a focused number steps it (focus survives the re-render)', (await kd()).b);
    ok(await q.evaluate(() => document.activeElement && document.activeElement.dataset.kv === 'b'), 'focus stays on the number after re-render');
    ok(/x2 − 1$/.test(await q.$eval('.eqline', e => e.textContent.replace(/\s+/g, ' ').trim())), 'S.term puts the sign outside the number (y = 3.5x² − 1)', await q.$eval('.eqline', e => e.textContent));
    await q.close();
  }

  ok(!errs.length, 'no page errors', errs);
  await b.close();
  fails.forEach(f => console.log('FAIL ' + f));
  console.log(`Interaction test: ${pass.length} passed, ${fails.length} failed`);
  process.exit(fails.length ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
