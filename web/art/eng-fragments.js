/* ============ Story art: Fragments (inline SVG, offline) ============
   Original scene drawn for Inquire, 480 × 180: bleak-fog (Dickens, Bleak House). */
(function(){
window.DB = window.DB || {};
const S = DB.scenes = DB.scenes || {};
const svg = (id, body) => `<svg viewBox="0 0 480 180" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">${body}</svg>`;

/* Bleak House: November in London. Fog fills a street; the Gothic hall of Lincoln's Inn looms as a grey
   silhouette with pinnacles and one lit window; gas lamps burn as smudges of orange; the road is mud,
   with cart ruts; small figures with umbrellas and a horse and cart are swallowed by the fog. */
S["bleak-fog"] = svg("bf", `
<defs><linearGradient id="bf-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a3a33"/><stop offset=".55" stop-color="#5c5a4c"/><stop offset="1" stop-color="#6e6a58"/></linearGradient>
<linearGradient id="bf-mud" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4a4234"/><stop offset="1" stop-color="#231e17"/></linearGradient>
<radialGradient id="bf-lamp" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#f2b84b" stop-opacity=".75"/><stop offset=".4" stop-color="#e09a3a" stop-opacity=".25"/><stop offset="1" stop-color="#e09a3a" stop-opacity="0"/></radialGradient>
<linearGradient id="bf-fog" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9a957c" stop-opacity="0"/><stop offset=".6" stop-color="#9a957c" stop-opacity=".45"/><stop offset="1" stop-color="#8a8570" stop-opacity=".2"/></linearGradient></defs>
<rect width="480" height="180" fill="url(#bf-sky)"/>
<g fill="#4c4a40" opacity=".55"><rect x="0" y="70" width="60" height="70"/><rect x="58" y="84" width="40" height="56"/><path d="M400 140V76l18-12 18 12v64z"/><rect x="436" y="88" width="44" height="52"/></g>
<g fill="#36352e" opacity=".85">
<path d="M150 140V78h14V60l5-12 5 12v18h70V60l5-12 5 12v18h14v62z"/>
<path d="M192 78l26-24 26 24z"/>
<rect x="166" y="96" width="8" height="18" rx="4" fill="#2a2924"/><rect x="232" y="96" width="8" height="18" rx="4" fill="#2a2924"/>
<path d="M212 92a6 6 0 0 1 12 0v22h-12z" fill="#f2b84b" opacity=".55"/>
<path d="M290 140V96h50v44z"/><path d="M286 96l29-18 29 18z"/>
<path d="M118 140v-30h26v30z"/></g>
<g fill="#2a2924" opacity=".7"><rect x="196" y="120" width="44" height="20"/></g>
<rect y="60" width="480" height="90" fill="url(#bf-fog)"/>
<path d="M0 140h480v40H0z" fill="url(#bf-mud)"/>
<g stroke="#2b251c" stroke-width="2" fill="none" opacity=".7"><path d="M150 180c40-14 120-30 200-36"/><path d="M190 180c40-12 110-26 180-34"/><path d="M0 152c80 4 160 2 240-4"/></g>
<g fill="#6a6047" opacity=".5"><ellipse cx="90" cy="160" rx="22" ry="3"/><ellipse cx="300" cy="168" rx="30" ry="3"/><ellipse cx="420" cy="156" rx="18" ry="2.5"/></g>
<g><circle cx="104" cy="96" r="30" fill="url(#bf-lamp)"/><circle cx="372" cy="100" r="26" fill="url(#bf-lamp)"/><circle cx="452" cy="104" r="16" fill="url(#bf-lamp)" opacity=".7"/>
<g stroke="#1e1d19" stroke-width="2"><path d="M104 100v42M372 104v38M452 106v34"/></g>
<g fill="#f6c766"><path d="M100 92h8l-1 8h-6z"/><path d="M368 96h8l-1 8h-6z"/><path d="M449 100h6l-1 6h-4z" opacity=".7"/></g></g>
<g fill="#1c1b17">
<path d="M60 146l3-20h8l3 20z"/><circle cx="67" cy="122" r="4"/><path d="M52 118q15-12 30 0z"/><path d="M67 118v-3" stroke="#1c1b17" stroke-width="1.2"/>
<path d="M136 150l2-16h6l2 16z" opacity=".8"/><circle cx="141" cy="131" r="3" opacity=".8"/><path d="M130 128q11-9 22 0z" opacity=".8"/>
<path d="M262 132h40l4 8h-48z" opacity=".75"/><circle cx="268" cy="142" r="6" fill="none" stroke="#1c1b17" stroke-width="2" opacity=".75"/><circle cx="296" cy="142" r="6" fill="none" stroke="#1c1b17" stroke-width="2" opacity=".75"/>
<path d="M306 134c6-6 14-8 22-6l6-6 3 2-3 6c2 4 1 9-2 12h-4l-1-6h-14l-1 6h-4z" opacity=".75"/></g>
<rect width="480" height="180" fill="#a8a28a" opacity=".12"/>
<g fill="#b8b29a" opacity=".18"><ellipse cx="120" cy="80" rx="140" ry="16"/><ellipse cx="380" cy="120" rx="160" ry="14"/><ellipse cx="260" cy="60" rx="120" ry="10"/></g>`);
})();
