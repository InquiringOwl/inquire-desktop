// Inquire desktop shell: serves the app from a private codex:// scheme and keeps itself up to date.
// Source code, installers and update files all live in the public repo InquiringOwl/inquire-desktop.
const { app, BrowserWindow, protocol, net, ipcMain, shell, Menu, dialog } = require('electron');
const path = require('path');
const fs = require('fs');
const { pathToFileURL } = require('url');
const log = require('electron-log');
const { MacUpdater } = require('./updater-mac');

const OWNER = 'InquiringOwl';
const RELEASES_REPO = 'inquire-desktop';
const APP_DIR = path.join(__dirname, 'app');
const CHECK_EVERY_MS = 4 * 60 * 60 * 1000; // every 4 hours while Inquire is open
const IS_MAC = process.platform === 'darwin';

// The app used to be called Codex. Keep using its old data folder (saved progress lives there) when it exists.
try { const old = path.join(app.getPath('appData'), 'Codex'); if (fs.existsSync(old)) app.setPath('userData', old); } catch (e) { /* first run: default folder */ }

protocol.registerSchemesAsPrivileged([
  { scheme: 'codex', privileges: { standard: true, secure: true, supportFetchAPI: true, corsEnabled: true, stream: true } }
]);

let win = null;
let updateState = { status: 'idle' };
let interactive = false; // true while a Help → Check for Updates… request is pending

function send(state) {
  updateState = { ...updateState, ...state };
  if (win && !win.isDestroyed()) win.webContents.send('update:status', updateState);
}
function tell(message, detail, buttons) {
  if (!win || win.isDestroyed()) return Promise.resolve({ response: 0 });
  return dialog.showMessageBox(win, { type: 'info', message, detail, buttons: buttons || ['OK'], defaultId: 0, cancelId: buttons ? buttons.length - 1 : 0 });
}

function createWindow() {
  win = new BrowserWindow({
    width: 1480, height: 940, minWidth: 900, minHeight: 620,
    backgroundColor: '#070A10', title: 'Inquire',
    titleBarStyle: IS_MAC ? 'hiddenInset' : 'default',
    webPreferences: { preload: path.join(__dirname, 'preload.js'), contextIsolation: true, nodeIntegration: false, sandbox: true }
  });
  win.loadURL('codex://app/index.html');
  win.webContents.setWindowOpenHandler(({ url }) => { if (/^https?:/.test(url)) shell.openExternal(url); return { action: 'deny' }; });
  win.webContents.on('will-navigate', (e, url) => { if (!url.startsWith('codex://')) { e.preventDefault(); if (/^https?:/.test(url)) shell.openExternal(url); } });
  win.webContents.on('did-finish-load', () => send({}));
}

/* ---------------- automatic updates ---------------- */
let mac = null, autoUpdater = null;

function setupUpdates() {
  if (IS_MAC) {
    mac = new MacUpdater({ app, net, owner: OWNER, repo: RELEASES_REPO, log, notify: s => {
      send(s);
      if (!interactive) return;
      if (s.status === 'current') { interactive = false; tell('Inquire is up to date', `You have version ${app.getVersion()}.`); }
      else if (s.status === 'downloading' && s.percent === 0) tell(`Inquire ${s.version} is downloading`, 'A banner appears when it is ready to install. You can keep working.');
      else if (s.status === 'ready') { interactive = false; tell(`Inquire ${s.version} is ready`, 'Choose Install & Relaunch in the banner, or it waits until you do.'); }
      else if (s.status === 'error') { interactive = false; tell('Could not update Inquire', s.message || 'Check your internet connection and try again.'); }
    } });
    const r = mac.lastResult();
    if (r && r.ok) setTimeout(() => send({ status: 'installed', version: r.version }), 1500);
    if (r && !r.ok) setTimeout(() => send({ status: 'blocked', version: r.version, fallback: r.fallback }), 1500);
  } else {
    autoUpdater = require('electron-updater').autoUpdater;
    autoUpdater.logger = log;
    autoUpdater.autoDownload = true;
    autoUpdater.autoInstallOnAppQuit = true;
    autoUpdater.on('checking-for-update', () => send({ status: 'checking' }));
    autoUpdater.on('update-available', i => { send({ status: 'downloading', version: i.version, percent: 0 }); if (interactive) { interactive = false; tell(`Inquire ${i.version} is downloading`, 'It installs when you restart. You can keep working.'); } });
    autoUpdater.on('update-not-available', () => { send({ status: 'current' }); if (interactive) { interactive = false; tell('Inquire is up to date', `You have version ${app.getVersion()}.`); } });
    autoUpdater.on('download-progress', p => send({ status: 'downloading', percent: Math.round(p.percent) }));
    autoUpdater.on('update-downloaded', i => send({ status: 'ready', version: i.version }));
    autoUpdater.on('error', err => { log.warn('autoUpdater error', err); send({ status: 'error', message: String(err && err.message || err) }); if (interactive) { interactive = false; tell('Could not check for updates', 'Check your internet connection and try again.'); } });
  }
  const check = (fromMenu) => {
    if (fromMenu) interactive = true;
    if (!app.isPackaged) { if (fromMenu) tell('Updates are checked in installed copies only', 'This copy was started with npm start.'); interactive = false; return; }
    if (mac) mac.check(); else autoUpdater.checkForUpdates().catch(e => log.warn(e));
  };
  if (app.isPackaged) { setTimeout(() => check(false), 4000); setInterval(() => check(false), CHECK_EVERY_MS); }
  return check;
}

/* ---------------- app lifecycle ---------------- */
app.whenReady().then(() => {
  protocol.handle('codex', req => {
    const u = new URL(req.url);
    const rel = decodeURIComponent(u.pathname).replace(/^\/+/, '') || 'index.html';
    const file = path.normalize(path.join(APP_DIR, rel));
    if (!file.startsWith(APP_DIR)) return new Response('Not found', { status: 404 });
    return net.fetch(pathToFileURL(file).toString(), { headers: req.headers }); // headers carry Range requests, which the intro video needs
  });
  const check = setupUpdates();
  ipcMain.handle('update:check', () => { check(true); return updateState; });
  ipcMain.handle('update:install', () => {
    if (updateState.status !== 'ready') return false;
    if (mac) return mac.install();
    autoUpdater.quitAndInstall(); return true;
  });
  ipcMain.handle('update:reveal', () => { if (updateState.fallback) shell.showItemInFolder(updateState.fallback); });
  ipcMain.handle('app:version', () => app.getVersion());

  Menu.setApplicationMenu(Menu.buildFromTemplate([
    ...(IS_MAC ? [{ label: 'Inquire', submenu: [
      { role: 'about' },
      { label: 'Check for Updates…', click: () => check(true) },
      { type: 'separator' }, { role: 'hide' }, { role: 'hideOthers' }, { role: 'unhide' }, { type: 'separator' }, { role: 'quit' }
    ] }] : [{ label: 'File', submenu: [{ role: 'quit' }] }]),
    { role: 'editMenu' },
    { label: 'View', submenu: [{ role: 'reload' }, { role: 'togglefullscreen' }, { type: 'separator' }, { role: 'resetZoom' }, { role: 'zoomIn' }, { role: 'zoomOut' }, ...(app.isPackaged ? [] : [{ role: 'toggleDevTools' }])] },
    { role: 'windowMenu' },
    { label: 'Help', submenu: [
      { label: 'Check for Updates…', click: () => check(true) },
      { label: 'Release notes', click: () => shell.openExternal(`https://github.com/${OWNER}/${RELEASES_REPO}/releases`) }
    ] }
  ]));
  createWindow();
  app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
});
app.on('window-all-closed', () => { if (!IS_MAC) app.quit(); });
