/* ============ Story art: Nouns & Pronouns (inline SVG, offline) ============
   Drawn for Inquire, 480 × 180. No book covers, film stills or other artists' illustrations. */
(function(){
window.DB = window.DB || {};
const S = DB.scenes = DB.scenes || {};
const svg = body => `<svg viewBox="0 0 480 180" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">${body}</svg>`;

/* Little Women: a modest New England parlour on a December evening; four sisters by the fire, snow at the window. */
S["christmas-hearth"] = svg(`
<defs><linearGradient id="christmas-hearth-wall" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2b1c16"/><stop offset="1" stop-color="#1a110d"/></linearGradient>
<radialGradient id="christmas-hearth-glow" cx=".34" cy=".7" r=".62"><stop offset="0" stop-color="#ffb35c" stop-opacity=".55"/><stop offset=".5" stop-color="#e0702e" stop-opacity=".16"/><stop offset="1" stop-color="#e0702e" stop-opacity="0"/></radialGradient>
<linearGradient id="christmas-hearth-fire" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#fff0b0"/><stop offset=".45" stop-color="#ffa63d"/><stop offset="1" stop-color="#d9452b" stop-opacity=".2"/></linearGradient>
<linearGradient id="christmas-hearth-night" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0d1730"/><stop offset="1" stop-color="#2c3d63"/></linearGradient>
<linearGradient id="christmas-hearth-floor" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3b2516"/><stop offset="1" stop-color="#160d08"/></linearGradient></defs>
<rect width="480" height="180" fill="url(#christmas-hearth-wall)"/>
<g stroke="#3d2a20" stroke-width="1" opacity=".6">${Array.from({length:12},(_,i)=>`<line x1="${20+i*40}" y1="0" x2="${20+i*40}" y2="142"/>`).join("")}</g>
<rect x="352" y="22" width="78" height="92" fill="url(#christmas-hearth-night)"/>
<path d="M352 98 Q372 90 392 96 T430 92 V114 H352Z" fill="#dfe6f2" opacity=".85"/>
<g fill="#eef3fb">${[[360,34],[372,52],[386,30],[398,60],[410,40],[420,70],[366,76],[404,84],[380,66],[424,30],[392,46]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="1.3"/>`).join("")}</g>
<g stroke="#d8c9ad" stroke-width="2.5" fill="none"><rect x="352" y="22" width="78" height="92"/><line x1="391" y1="22" x2="391" y2="114"/><line x1="352" y1="68" x2="430" y2="68"/></g>
<rect x="346" y="112" width="90" height="6" fill="#5a4030"/>
<rect x="0" y="142" width="480" height="38" fill="url(#christmas-hearth-floor)"/><rect x="0" y="140" width="480" height="3" fill="#4d3322"/>
<g><rect x="92" y="40" width="152" height="10" fill="#6b4a33"/><rect x="100" y="50" width="136" height="92" fill="#4a3226"/>
<rect x="128" y="76" width="80" height="66" fill="#0e0806"/><path d="M128 76 Q168 60 208 76" fill="#0e0806"/>
<path d="M140 142 Q146 112 156 120 Q160 96 170 112 Q178 92 184 116 Q194 104 196 142Z" fill="url(#christmas-hearth-fire)"/>
<g fill="#2a1a10"><rect x="138" y="136" width="62" height="6" rx="3" transform="rotate(-6 169 139)"/><rect x="140" y="134" width="58" height="6" rx="3" transform="rotate(8 169 137)"/></g>
<g fill="#7a2e3a"><path d="M114 50 v16 q0 6 6 6 h6 v-8 h-4 v-14z"/><path d="M212 50 v16 q0 6 6 6 h6 v-8 h-4 v-14z"/></g>
<g fill="#9c8b5a"><rect x="156" y="28" width="5" height="12"/><rect x="176" y="30" width="5" height="10"/></g><ellipse cx="158.5" cy="25" rx="2" ry="4" fill="#ffd27a"/><ellipse cx="178.5" cy="27" rx="2" ry="4" fill="#ffd27a"/></g>
<rect width="480" height="180" fill="url(#christmas-hearth-glow)"/>
<ellipse cx="168" cy="160" rx="120" ry="12" fill="#6e2c2c" opacity=".75"/><ellipse cx="168" cy="160" rx="104" ry="8" fill="none" stroke="#b5703c" stroke-width="1.2" opacity=".6"/>
<g fill="#0c0705">
<path d="M70 160 q-6 -10 6 -14 l30 -2 q6 -14 18 -10 q8 4 2 14 l-6 10z"/><circle cx="124" cy="132" r="7"/>
<path d="M248 158 q-2 -30 10 -38 q12 -4 14 10 l2 28z"/><circle cx="262" cy="112" r="7.5"/><path d="M255 108 q7 -8 14 0" fill="#0c0705"/>
<path d="M284 158 q0 -24 10 -30 q10 -2 12 8 l0 22z"/><circle cx="296" cy="122" r="6.5"/>
<path d="M312 158 q-2 -36 12 -44 q14 -4 15 12 l1 32z"/><circle cx="326" cy="106" r="7.5"/><path d="M318 104 q8 -10 16 0 l2 8 q-10 -6 -20 0z"/></g>
<g fill="#c8a24a" opacity=".85"><rect x="40" y="128" width="18" height="16" rx="1"/><rect x="47" y="128" width="4" height="16" fill="#7a2e3a"/></g>`);

/* Jane Eyre: a window seat behind a red curtain; rain streams past onto a leafless shrubbery and a dark lawn. */
S["moor-window"] = svg(`
<defs><linearGradient id="moor-window-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4a5560"/><stop offset=".6" stop-color="#6b7884"/><stop offset="1" stop-color="#8a959c"/></linearGradient>
<linearGradient id="moor-window-room" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#140f10"/><stop offset="1" stop-color="#211819"/></linearGradient>
<linearGradient id="moor-window-curtain" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#4a0f16"/><stop offset=".45" stop-color="#8e2430"/><stop offset="1" stop-color="#3a0a10"/></linearGradient>
<linearGradient id="moor-window-lawn" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3c4a3e"/><stop offset="1" stop-color="#1e2820"/></linearGradient></defs>
<rect width="480" height="180" fill="url(#moor-window-room)"/>
<rect x="150" y="16" width="250" height="132" fill="url(#moor-window-sky)"/>
<g fill="#59646e" opacity=".85"><ellipse cx="200" cy="34" rx="60" ry="14"/><ellipse cx="300" cy="28" rx="70" ry="16"/><ellipse cx="370" cy="44" rx="50" ry="12"/></g>
<path d="M150 112 Q220 100 290 108 T400 104 V148 H150Z" fill="url(#moor-window-lawn)"/>
<g stroke="#2a2f2c" stroke-width="1.6" fill="none" stroke-linecap="round">
<path d="M186 120 v-26 M186 104 l-10 -12 M186 100 l9 -14 M186 110 l12 -6 M176 92 l-4 -6 M195 86 l3 -7"/>
<path d="M236 118 v-20 M236 106 l-8 -10 M236 102 l8 -12 M228 96 l-3 -6"/>
<path d="M338 116 v-30 M338 100 l-12 -14 M338 96 l10 -16 M338 108 l14 -8 M326 86 l-4 -7 M348 80 l2 -7 M352 100 l5 -6"/></g>
<g stroke="#c9d3da" stroke-width="1" opacity=".45">${Array.from({length:34},(_,i)=>{const x=158+(i*67)%238, y=20+(i*41)%108; return `<line x1="${x}" y1="${y}" x2="${x-5}" y2="${y+16}"/>`;}).join("")}</g>
<g stroke="#e3e9ee" stroke-width="1.2" fill="none" opacity=".35"><path d="M210 40 q2 20 -1 40"/><path d="M262 30 q-2 26 1 54"/><path d="M318 60 q2 18 0 34"/></g>
<g stroke="#2a1d18" stroke-width="5" fill="none"><rect x="150" y="16" width="250" height="132"/><line x1="275" y1="16" x2="275" y2="148"/><line x1="150" y1="82" x2="400" y2="82"/></g>
<rect x="138" y="146" width="274" height="12" fill="#3a2a20"/><rect x="138" y="158" width="274" height="22" fill="#1c1411"/>
<path d="M60 0 H178 Q156 60 170 120 Q150 150 168 180 H60Z" fill="url(#moor-window-curtain)"/>
<g stroke="#2e080d" stroke-width="2" opacity=".6" fill="none"><path d="M92 0 Q86 80 98 180"/><path d="M124 0 Q118 70 130 180"/></g>
<path d="M412 0 H480 V180 H404 Q420 120 400 70 Q414 30 412 0Z" fill="url(#moor-window-curtain)"/>
<g fill="#0b0708"><path d="M200 146 q-4 -26 8 -34 q8 -4 12 2 q14 2 18 14 l6 18z"/><circle cx="214" cy="104" r="8"/><path d="M206 100 q8 -10 16 0 v6 q-8 -4 -16 0z"/></g>
<g><path d="M226 128 l20 -6 l20 6 l-20 4z" fill="#d9c79c"/><path d="M246 122 v10" stroke="#7a6640" stroke-width="1"/></g>`);
})();
