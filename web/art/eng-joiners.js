/* ============ Story art: Prepositions & Conjunctions ============
   Original inline-SVG scenes drawn for Inquire (480 × 180). No covers, stills or other artists' designs. */
(function(){
window.DB = window.DB || {};
const S = DB.scenes = DB.scenes || {};
const svg = body => `<svg viewBox="0 0 480 180" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">${body}</svg>`;

/* Emma: Hartfield, a comfortable Regency house in morning light, a gravel sweep, shrubbery and a figure with a parasol. */
S["emma-hartfield"] = svg(`
<defs><linearGradient id="emma-hartfield-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7fa6c9"/><stop offset=".6" stop-color="#d9c6a6"/><stop offset="1" stop-color="#f0d7a8"/></linearGradient>
<linearGradient id="emma-hartfield-lawn" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5f7d45"/><stop offset="1" stop-color="#2c3d22"/></linearGradient>
<linearGradient id="emma-hartfield-wall" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#e7d6b8"/><stop offset="1" stop-color="#c7b090"/></linearGradient>
<radialGradient id="emma-hartfield-sun" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#fff3cf" stop-opacity=".9"/><stop offset="1" stop-color="#fff3cf" stop-opacity="0"/></radialGradient></defs>
<rect width="480" height="180" fill="url(#emma-hartfield-sky)"/>
<circle cx="70" cy="46" r="46" fill="url(#emma-hartfield-sun)"/><circle cx="70" cy="46" r="11" fill="#fff6dc"/>
<g fill="#f6efe2" opacity=".75"><ellipse cx="160" cy="30" rx="34" ry="7"/><ellipse cx="186" cy="25" rx="20" ry="6"/><ellipse cx="400" cy="38" rx="40" ry="7"/></g>
<path d="M0 118 Q80 100 160 112 T320 106 T480 110 V180 H0Z" fill="#7d9a5c" opacity=".7"/>
<g fill="#3e5a32"><ellipse cx="96" cy="104" rx="30" ry="24"/><ellipse cx="128" cy="96" rx="22" ry="22"/><ellipse cx="404" cy="98" rx="30" ry="26"/><ellipse cx="438" cy="104" rx="24" ry="20"/></g>
<g><rect x="168" y="50" width="160" height="72" fill="url(#emma-hartfield-wall)"/>
<path d="M160 52 L248 26 L336 52Z" fill="#6b4a3e"/><rect x="160" y="50" width="176" height="5" fill="#d9c7a8"/>
<rect x="196" y="18" width="10" height="20" fill="#8a5f4c"/><rect x="290" y="18" width="10" height="20" fill="#8a5f4c"/>
<g fill="#3d4a5a" stroke="#f4ead6" stroke-width="1.5">${[184, 214, 268, 298].map(x => `<rect x="${x}" y="62" width="16" height="20"/><rect x="${x}" y="92" width="16" height="22"/>`).join("")}<rect x="240" y="62" width="16" height="20"/></g>
<g stroke="#f4ead6" stroke-width=".8">${[184, 214, 240, 268, 298].map(x => `<line x1="${x + 8}" y1="62" x2="${x + 8}" y2="82"/><line x1="${x}" y1="72" x2="${x + 16}" y2="72"/>`).join("")}</g>
<rect x="238" y="92" width="20" height="30" fill="#4a2f28"/><path d="M234 92 Q248 80 262 92Z" fill="#efe3cb"/>
<rect x="230" y="120" width="36" height="4" fill="#b9a586"/></g>
<rect x="0" y="122" width="480" height="58" fill="url(#emma-hartfield-lawn)"/>
<path d="M232 124 Q236 150 196 180 H300 Q262 150 264 124Z" fill="#cdb894"/>
<g fill="#2f4526"><ellipse cx="180" cy="124" rx="14" ry="8"/><ellipse cx="316" cy="124" rx="14" ry="8"/></g>
<g><path d="M352 172 L356 140 Q362 132 368 140 L374 172Z" fill="#f2ede4"/><rect x="358" y="128" width="8" height="12" rx="3" fill="#f2ede4"/>
<circle cx="362" cy="123" r="5" fill="#e9caa8"/><path d="M357 121 Q362 114 367 121Z" fill="#6a4630"/>
<path d="M368 136 L382 112" stroke="#5a4636" stroke-width="1.2"/><path d="M368 112 Q382 96 398 112Z" fill="#d97a8a"/></g>
<g fill="#22331c" opacity=".55"><ellipse cx="365" cy="174" rx="18" ry="3"/></g>`);

/* Lincoln's Second Inaugural, 4 March 1865: the domed Capitol, a crowd below the east front, flags, a sky clearing after rain. */
S["inaugural"] = svg(`
<defs><linearGradient id="inaugural-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3b4658"/><stop offset=".55" stop-color="#8d96a3"/><stop offset="1" stop-color="#d8cfbd"/></linearGradient>
<radialGradient id="inaugural-break" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#fff2c8" stop-opacity=".85"/><stop offset="1" stop-color="#fff2c8" stop-opacity="0"/></radialGradient>
<linearGradient id="inaugural-stone" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#e9e4da"/><stop offset="1" stop-color="#b9b3a7"/></linearGradient>
<linearGradient id="inaugural-ground" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4b4a44"/><stop offset="1" stop-color="#1e1d1b"/></linearGradient></defs>
<rect width="480" height="180" fill="url(#inaugural-sky)"/>
<ellipse cx="300" cy="34" rx="90" ry="40" fill="url(#inaugural-break)"/>
<g fill="#4c5566" opacity=".8"><ellipse cx="80" cy="26" rx="70" ry="14"/><ellipse cx="150" cy="16" rx="50" ry="10"/><ellipse cx="420" cy="22" rx="70" ry="13"/></g>
<g fill="url(#inaugural-stone)">
<rect x="70" y="96" width="340" height="44"/>
<rect x="196" y="84" width="88" height="14"/><path d="M196 84 L240 70 L284 84Z"/>
<rect x="212" y="54" width="56" height="30"/><rect x="206" y="50" width="68" height="6"/>
<path d="M216 50 Q216 18 240 14 Q264 18 264 50Z"/>
<rect x="232" y="6" width="16" height="10"/><path d="M232 6 Q240 -2 248 6Z"/></g>
<g stroke="#9c968a" stroke-width="1.2">${Array.from({length: 9}, (_, i) => `<line x1="${218 + i * 6}" y1="56" x2="${218 + i * 6}" y2="82"/>`).join("")}${Array.from({length: 10}, (_, i) => `<line x1="${200 + i * 9}" y1="98" x2="${200 + i * 9}" y2="128"/>`).join("")}</g>
<g stroke="#a39d91" stroke-width=".8" fill="none"><path d="M220 40 Q240 34 260 40"/><path d="M218 30 Q240 22 262 30"/></g>
<path d="M240 4 V-2" stroke="#6e6a60" stroke-width="2"/>
<g fill="#5d6270">${[86, 116, 146, 316, 346, 376].map(x => `<rect x="${x}" y="106" width="10" height="16"/>`).join("")}</g>
<rect x="160" y="128" width="160" height="10" fill="#8f8a7e"/><rect x="226" y="122" width="28" height="6" fill="#6e2e33"/>
<g><rect x="138" y="76" width="2" height="22" fill="#3a3a3a"/><path d="M140 76 h18 v11 h-18z" fill="#c8434b"/><path d="M140 76 h8 v6 h-8z" fill="#2c3f73"/>
<rect x="340" y="76" width="2" height="22" fill="#3a3a3a"/><path d="M342 76 h18 v11 h-18z" fill="#c8434b"/><path d="M342 76 h8 v6 h-8z" fill="#2c3f73"/>
<g stroke="#f3eee6" stroke-width="1"><line x1="148" y1="84" x2="158" y2="84"/><line x1="350" y1="84" x2="360" y2="84"/></g></g>
<rect x="0" y="138" width="480" height="42" fill="url(#inaugural-ground)"/>
<g fill="#151513">${Array.from({length: 60}, (_, i) => { const x = 4 + i * 8, y = 146 + (i * 7) % 9; return `<circle cx="${x}" cy="${y}" r="3.2"/><rect x="${x - 3.5}" y="${y + 2}" width="7" height="12" rx="2"/>`; }).join("")}</g>
<g fill="#0c0c0b">${Array.from({length: 22}, (_, i) => { const x = 10 + i * 22, y = 158 + (i * 5) % 7; return `<rect x="${x - 4}" y="${y - 10}" width="8" height="3"/><rect x="${x - 2.5}" y="${y - 13}" width="5" height="4"/><circle cx="${x}" cy="${y - 4}" r="3.6"/><rect x="${x - 4.5}" y="${y}" width="9" height="16" rx="2"/>`; }).join("")}</g>
<g fill="#cfd5dc" opacity=".25">${Array.from({length: 14}, (_, i) => `<rect x="${i * 36 + 6}" y="${(i * 13) % 60}" width="1" height="10"/>`).join("")}</g>`);
})();
