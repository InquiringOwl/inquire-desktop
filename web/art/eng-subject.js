/* ============ Story art: Subject & Predicate (inline SVG, offline) ============
   Original scenes drawn for Inquire, 480 × 180: whitewash-fence (The Adventures of Tom Sawyer),
   walden-pond (Walden). */
(function(){
window.DB = window.DB || {};
const S = DB.scenes = DB.scenes || {};
const svg = (id, body) => `<svg viewBox="0 0 480 180" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">${body}</svg>`;

/* Tom Sawyer: a bright Saturday morning. A long board fence, nine feet high, runs across the street;
   the first few planks are freshly whitewashed, the rest bare. A small figure in a straw hat stands
   with a long-handled brush, a bucket at his feet; a green hill rises behind the village. */
S["whitewash-fence"] = svg("wf", `
<defs><linearGradient id="wf-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4f8fc4"/><stop offset=".7" stop-color="#a9d3e6"/><stop offset="1" stop-color="#f1e7c4"/></linearGradient>
<linearGradient id="wf-hill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5f9a4a"/><stop offset="1" stop-color="#2f5c2e"/></linearGradient>
<linearGradient id="wf-wood" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9b7650"/><stop offset="1" stop-color="#5e4329"/></linearGradient>
<linearGradient id="wf-white" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fbfaf3"/><stop offset="1" stop-color="#d9d6c8"/></linearGradient>
<linearGradient id="wf-road" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c9a873"/><stop offset="1" stop-color="#8a6a3e"/></linearGradient>
<radialGradient id="wf-sun" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#fff6cf"/><stop offset="1" stop-color="#fff6cf" stop-opacity="0"/></radialGradient></defs>
<rect width="480" height="180" fill="url(#wf-sky)"/>
<circle cx="404" cy="30" r="40" fill="url(#wf-sun)"/><circle cx="404" cy="30" r="12" fill="#fff8dc"/>
<g fill="#ffffff" opacity=".75"><ellipse cx="90" cy="28" rx="34" ry="8"/><ellipse cx="116" cy="22" rx="20" ry="7"/><ellipse cx="270" cy="18" rx="28" ry="6"/></g>
<path d="M0 86 Q90 30 190 64 Q270 44 340 70 Q420 52 480 78 V120 H0Z" fill="url(#wf-hill)"/>
<g fill="#244a26"><circle cx="150" cy="58" r="9"/><circle cx="162" cy="62" r="7"/><circle cx="300" cy="58" r="8"/><circle cx="430" cy="64" r="9"/><circle cx="444" cy="68" r="7"/></g>
<g><rect x="38" y="66" width="34" height="26" fill="#d8c7a3"/><path d="M34 68 L55 52 L76 68Z" fill="#7a3f2c"/><rect x="51" y="78" width="7" height="14" fill="#5b3a26"/>
<rect x="380" y="68" width="40" height="26" fill="#e3d6b8"/><path d="M376 70 L400 54 L424 70Z" fill="#6a3a2a"/><rect x="408" y="58" width="5" height="10" fill="#6a3a2a"/><rect x="386" y="76" width="7" height="7" fill="#7aa2c0"/></g>
<rect x="0" y="146" width="480" height="34" fill="url(#wf-road)"/>
<g stroke="#a88a5a" stroke-width="1" opacity=".5"><line x1="20" y1="160" x2="70" y2="160"/><line x1="160" y1="170" x2="230" y2="170"/><line x1="330" y1="164" x2="400" y2="164"/></g>
<g>${Array.from({length:24},(_,i)=>{const x=i*20, w=i<7;return `<path d="M${x+1} 150 V${84+(i%2)*2} l9 -6 l9 6 V150Z" fill="url(#wf-${w?"white":"wood"})" stroke="${w?"#b9b5a6":"#4a331f"}" stroke-width="1"/>`;}).join("")}</g>
<rect x="0" y="100" width="480" height="5" fill="#5a3f26" opacity=".55"/><rect x="0" y="134" width="480" height="5" fill="#5a3f26" opacity=".55"/>
<rect x="0" y="100" width="140" height="5" fill="#e9e6da"/><rect x="0" y="134" width="140" height="5" fill="#e9e6da"/>
<path d="M140 92 q4 10 0 22 q-3 10 1 24" stroke="#fbfaf3" stroke-width="3" fill="none" opacity=".8"/>
<g><rect x="170" y="134" width="20" height="18" rx="2" fill="#6f7b84" stroke="#3b444b" stroke-width="1.5"/><ellipse cx="180" cy="134" rx="10" ry="3" fill="#f4f2e8"/><path d="M170 136 q10 -14 20 0" fill="none" stroke="#3b444b" stroke-width="1.2"/></g>
<g fill="#2b2118">
<path d="M214 150 l3 -24 h5 l1 24z"/><path d="M226 150 l1 -24 h5 l2 24z"/>
<path d="M212 128 q0 -26 11 -27 q11 1 11 27z" fill="#3d5f86"/>
<circle cx="223" cy="94" r="7" fill="#e2b48a"/>
<ellipse cx="223" cy="89" rx="13" ry="3.2" fill="#e8cf7a"/><path d="M216 89 q7 -11 14 0z" fill="#e8cf7a"/>
<path d="M232 110 l20 -26" stroke="#5a3e26" stroke-width="2.5"/><rect x="249" y="76" width="9" height="11" rx="1.5" transform="rotate(38 253 81)" fill="#f4f2e8" stroke="#8a7a5a" stroke-width="1"/></g>`);

/* Walden: dawn on a still pond ringed by pine and oak woods. A small shingled cabin with a brick
   chimney stands on the near shore; mist lies on the water and the far shore is mirrored in it. */
S["walden-pond"] = svg("wp", `
<defs><linearGradient id="wp-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2c3d5c"/><stop offset=".55" stop-color="#b98a8f"/><stop offset="1" stop-color="#f3c993"/></linearGradient>
<linearGradient id="wp-water" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e6bf92"/><stop offset=".35" stop-color="#7d7f93"/><stop offset="1" stop-color="#1d2c3a"/></linearGradient>
<linearGradient id="wp-mist" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#f6e6d2" stop-opacity="0"/><stop offset=".5" stop-color="#f6e6d2" stop-opacity=".45"/><stop offset="1" stop-color="#f6e6d2" stop-opacity="0"/></linearGradient>
<linearGradient id="wp-shore" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a3523"/><stop offset="1" stop-color="#121a10"/></linearGradient></defs>
<rect width="480" height="180" fill="url(#wp-sky)"/>
<circle cx="300" cy="86" r="16" fill="#ffe1a8" opacity=".9"/><circle cx="300" cy="86" r="44" fill="#ffd79a" opacity=".16"/>
<g fill="#2f3b33"><path d="M0 96 Q60 70 120 84 Q180 66 250 82 Q320 70 380 80 Q440 66 480 84 V100 H0Z"/></g>
<g fill="#1f2a22">${Array.from({length:30},(_,i)=>{const x=i*16+4, h=14+((i*7)%11);return `<path d="M${x} 99 l6 -${h} l6 ${h}z"/>`;}).join("")}</g>
<rect x="0" y="98" width="480" height="82" fill="url(#wp-water)"/>
<g fill="#1f2a22" opacity=".35">${Array.from({length:30},(_,i)=>{const x=i*16+4, h=10+((i*7)%9);return `<path d="M${x} 99 l6 ${h} l6 -${h}z"/>`;}).join("")}</g>
<ellipse cx="300" cy="116" rx="6" ry="16" fill="#ffe1a8" opacity=".35"/>
<rect x="0" y="100" width="480" height="14" fill="url(#wp-mist)"/>
<g stroke="#f3dcc0" stroke-width="1" opacity=".35"><line x1="40" y1="128" x2="120" y2="128"/><line x1="200" y1="138" x2="300" y2="138"/><line x1="340" y1="124" x2="420" y2="124"/></g>
<path d="M0 150 Q60 136 130 142 Q170 146 200 160 Q120 170 0 172Z" fill="url(#wp-shore)"/>
<path d="M0 180 V160 Q120 156 220 166 Q300 170 480 168 V180Z" fill="#0f150d"/>
<g><rect x="62" y="122" width="44" height="26" fill="#6b5236" stroke="#3a2a1a" stroke-width="1"/>
<path d="M58 124 L84 106 L110 124Z" fill="#4b3a2a" stroke="#2a1f14" stroke-width="1"/>
<rect x="94" y="104" width="7" height="14" fill="#8a4a36"/><path d="M97 102 q-6 -8 2 -14 q8 -6 2 -14" stroke="#d8cfc3" stroke-width="2.4" fill="none" opacity=".55"/>
<rect x="70" y="130" width="8" height="8" fill="#f2c27a" opacity=".85"/><rect x="86" y="132" width="10" height="16" fill="#3a2a1a"/>
<g stroke="#5a4630" stroke-width=".8" opacity=".7"><line x1="62" y1="130" x2="106" y2="130"/><line x1="62" y1="138" x2="106" y2="138"/></g></g>
<g fill="#16200f"><path d="M24 152 l9 -34 l9 34z"/><path d="M140 146 l8 -30 l8 30z"/><path d="M152 148 l6 -22 l6 22z"/></g>
<path d="M330 150 q12 -6 22 0" stroke="#0f150d" stroke-width="3" fill="none"/><circle cx="352" cy="148" r="2.5" fill="#0f150d"/>`);
})();
