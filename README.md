# Inquire (desktop)

Inquire is a knowledge console that maps subjects as skill trees. v1 holds the Mathematics dictionary with the full Arithmetic tree (30 interactive topics).

- **Repo (public):** `InquiringOwl/inquire-desktop` holds the source code and, under Releases, the installers and update files. Installed copies of Inquire check it at launch and every 4 hours.

## Project layout

| Path | What it is |
| --- | --- |
| `web/src/` | App code: `style.css`, `data.js` (tree + fields), `labkit.js`, `labs1-3.js` (interactive models), `app.js` (menus, sidebar, tree, topic pages) |
| `web/content/<field>/` | Topic content, one file per topic (`ARITH["id"] = {…}`). Format in `web/CONTENT-BRIEF.md` |
| `checks/<field>/` | Saved sympy math checks, one per topic |
| `tools/build-web.js` | Builds `app/index.html` (desktop) and `dist-web/codex.html` (claude.ai artifact) |
| `tools/validate.js`, `tools/mathcheck.py`, `tools/smoke.js` | Structure validator, math checks, headless smoke test (`npm run check` runs all after a build) |
| `tools/release.js` | `npm run release -- patch "note"`: checks, bumps, commits, tags, pushes |
| `.github/workflows/check.yml` | Runs the checks on every push; the release workflow runs them first |
| `CLAUDE.md` | Working brief for Claude sessions |
| `app/` | What the desktop app loads, including bundled fonts (works offline) |
| `main.js`, `preload.js` | Electron shell, `codex://` scheme, menus, update wiring |
| `updater-mac.js` | Mac self-updater for builds without an Apple Developer ID |
| `.github/workflows/release.yml` | Builds Mac, Windows and Linux on a version tag and publishes a release |

## One-time GitHub setup

1. On github.com, create **`inquire-desktop`** as a **Public** repository. Leave it empty (no README).
2. Push this folder (Terminal):
   ```
   cd ~/Documents/codex-desktop
   git init -b main
   git add .
   git commit -m "Inquire 1.0.0"
   git remote add origin https://github.com/InquiringOwl/inquire-desktop.git
   git push -u origin main
   git tag v1.0.0
   git push origin v1.0.0
   ```
   Login: username `InquiringOwl`, password = your personal access token (the same kind you used for Corpus).
3. Watch the build under the **Actions** tab (about 15 minutes). When it's done, Releases shows v1.0.0.

## First install on a Mac

1. From `github.com/InquiringOwl/inquire-desktop/releases`, download `Inquire-1.0.0-arm64.dmg` (Apple Silicon) or `Inquire-1.0.0-x64.dmg` (Intel).
2. Open it and drag **Inquire** into **Applications**.
3. The app is not signed with an Apple Developer ID, so clear the download flag once in Terminal:
   ```
   xattr -cr /Applications/Inquire.app
   ```
4. Open Inquire from Applications. From now on it updates itself.

Windows: run `Inquire-Setup-1.0.0.exe` (SmartScreen: More info › Run anyway). Linux: `Inquire-1.0.0.AppImage`.

## Shipping an update

1. Change `version` in `package.json` (e.g. `1.0.1`).
2. In Terminal:
   ```
   cd ~/Documents/codex-desktop
   git add .
   git commit -m "Inquire 1.0.1"
   git push
   git tag v1.0.1
   git push origin v1.0.1
   ```
3. GitHub Actions builds it and publishes the release.
4. Each running copy of Inquire finds it within 4 hours (or right away with **Inquire › Check for Updates…**), downloads it, and shows **Install & Relaunch**.

The tag must match the version in `package.json`. If a build fails, fix it and bump the version rather than re-running an old tag.

## How updates work

- **Mac (ad-hoc signed):** `updater-mac.js` reads the latest release of this repo, picks the zip for the Mac's chip from `latest-mac.yml`, checks its sha512, unzips it with `ditto`, and after Inquire quits swaps the new `Inquire.app` into place and reopens it. If macOS blocks the swap (System Settings › Privacy & Security › App Management), the old app is restored and the new one is left in Downloads with a banner saying so. Allowing Inquire under App Management avoids this.
- **Windows and Linux:** `electron-updater` installs updates on restart.
- If you get an Apple Developer ID later: add the `MAC_CERT_*` / `APPLE_*` secrets and remove `"identity": null` from `package.json`.

## Working on it locally (optional)

`npm install` then `npm start`. If npm 11 blocks Electron's install script: `npm install-scripts approve electron` then `npm rebuild electron` (same fix as Corpus).
