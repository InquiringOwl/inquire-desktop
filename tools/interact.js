// Interaction test: drives the features smoke.js only loads. Fails (exit 1) on a wrong result or any page error.
//   notes: drag notes onto folders, folders into/between folders (and the cycle refusal), My order drag + Alt+↑/↓,
//          ★ first toggle, text sizes, delete + Undo, list fold / resize, video by link and by file, backup video size limit
//   menu: My notes top bar opens Notes, New note asks for a title; Assist: linked notes first, slide in/out, delete + Undo
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
  await p.route('https://api.dictionaryapi.dev/**', r => r.fulfill({ status: 200, contentType: 'application/json', headers: { 'access-control-allow-origin': '*' },
    body: JSON.stringify([{ word: 'variable', phonetic: '/v/', meanings: [{ partOfSpeech: 'noun', definitions: [{ definition: 'Something whose value may change.' }] }], sourceUrls: ['https://en.wiktionary.org/wiki/variable'] }]) }));
  await p.goto(URL0 + '#menu'); await wait(800);

  /* ---------- menu ---------- */
  ok(await p.$eval('.hello h1', e => e.textContent) === 'Main Menu', 'menu heading is Main Menu');
  ok(!(await p.$('#chk')), 'menu has no Check for updates button');
  await p.click('.mnotes-h h2'); await wait(300); ok(await p.evaluate(() => location.hash) === '#notes', 'My notes top bar opens Notes');
  await p.evaluate(() => { location.hash = 'menu'; }); await wait(400);
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
    ok(/value may change/.test(await p.$eval('.tm-def', e => e.textContent).catch(() => '')), 'Dictionary definition shows in the menu');
    await p.click('.tm-menu [data-a=save]'); await wait(300);
    await p.click('.nk-list button >> text=Note C'); await wait(300);
    ok(await p.evaluate(() => /value may change/.test(InquireNotes.list().find(n => n.title === 'Note C').html)), 'Save to note adds the definition to the picked note');
  }

  /* ---------- Assist: linked notes first, slide, delete + Undo ---------- */
  await p.evaluate(() => InquireNotes.create({ title: 'Linked lesson note', links: ['t:pa-variables'] }));
  await p.click('.dk-tab'); await wait(200); await p.click('.dk-tabs [data-t=notes]'); await wait(500);
  ok(await p.$eval('.dk-win', e => getComputedStyle(e).transform === 'none'), 'Assist slides out of the side');
  ok((await p.$$eval('.dk-nit b', es => es.map(e => e.textContent)))[0] === 'Linked lesson note', 'Assist lists linked notes first');
  await p.click('.dk-nit >> nth=0'); await wait(200); const d0 = await count();
  await p.click('.dk-nbar [data-a=del]'); await wait(200); ok(await count() === d0 - 1, 'Assist Delete removes the note');
  await p.click('.tm-toast button'); await wait(300); ok(await count() === d0, 'Assist Undo restores it');
  await p.click('.dk-tab'); await wait(500); ok(await p.$eval('.dk-win', e => e.hidden), 'Assist slides back in');

  /* ---------- theme reaches field-map nodes ---------- */
  await p.evaluate(() => localStorage.setItem('codex.settings', JSON.stringify({ theme: 'ember' }))); await p.reload(); await wait(800);
  await p.evaluate(() => { location.hash = 'field-map'; }); await wait(800);
  const era = await p.$eval('.era', e => getComputedStyle(e).backgroundImage);
  ok(!/28, 42, 68/.test(era), 'era bar follows the theme', era);

  ok(!errs.length, 'no page errors', errs);
  await b.close();
  fails.forEach(f => console.log('FAIL ' + f));
  console.log(`Interaction test: ${pass.length} passed, ${fails.length} failed`);
  process.exit(fails.length ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
