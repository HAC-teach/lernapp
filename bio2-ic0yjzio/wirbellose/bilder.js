// Bilder für die Beschriftungsaufgaben (Fragetyp "label")
// Alle Bilder sind selbst gezeichnete SVGs mit viewBox 0 0 400 260.
// Die Marker-Koordinaten in questions.js beziehen sich auf diese 400 × 260 Einheiten.

const IMAGES = {
  // Honigbiene von der Seite: Fühler, Facettenauge, Kopf, Brust, Hinterleib, Flügel, Beine
  insekt: `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Honigbiene von der Seite">
    <rect width="400" height="260" fill="#f6f8ee"/>
    <defs><clipPath id="ins-hl"><ellipse cx="290" cy="142" rx="72" ry="46"/></clipPath></defs>
    <g stroke="#3a2a1a" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path d="M164 158l-22 30-8 40-12 10"/><path d="M188 164l2 42-8 34-8 6"/><path d="M210 160l30 44 10 38 10 4"/></g>
    <path d="M196 102C230 108 268 116 300 102C292 84 252 74 214 84z" fill="#dcecf6" fill-opacity=".85" stroke="#5a7a8a" stroke-width="2"/>
    <ellipse cx="290" cy="142" rx="72" ry="46" fill="#f2c230"/>
    <g clip-path="url(#ins-hl)" fill="#4a3420">
      <rect x="252" y="90" width="16" height="110"/><rect x="284" y="90" width="16" height="110"/><rect x="316" y="90" width="16" height="110"/><rect x="346" y="90" width="20" height="110"/></g>
    <ellipse cx="290" cy="142" rx="72" ry="46" fill="none" stroke="#3a2a1a" stroke-width="2.5"/>
    <path d="M360 140l18 4-18 5z" fill="#3a2a1a"/>
    <ellipse cx="186" cy="128" rx="42" ry="38" fill="#a0723a" stroke="#3a2a1a" stroke-width="2.5"/>
    <g stroke="#7a5428" stroke-width="2" stroke-linecap="round">
      <path d="M160 108l-4-5M172 100l-2-6M186 96v-6M200 98l3-6M212 106l5-4M168 150l-3 5M184 156v6M200 154l3 5"/></g>
    <path d="M200 96C222 40 292 22 330 46C326 74 262 96 200 96z" fill="#dcecf6" fill-opacity=".85" stroke="#5a7a8a" stroke-width="2"/>
    <path d="M206 92C240 66 284 50 318 50M224 88L262 50M248 84L290 52" stroke="#8aa4b4" stroke-width="1.4" fill="none"/>
    <ellipse cx="122" cy="134" rx="28" ry="32" fill="#5a4028" stroke="#3a2a1a" stroke-width="2.5"/>
    <ellipse cx="116" cy="118" rx="12" ry="18" fill="#2a2420" stroke="#1a1410" stroke-width="1.5"/>
    <g fill="#5a5a5a">${[[112, 106], [119, 108], [113, 114], [120, 116], [112, 122], [119, 124], [114, 130]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.6"/>`).join("")}</g>
    <path d="M104 160l-6 18" stroke="#3a2a1a" stroke-width="4" stroke-linecap="round"/>
    <path d="M110 108L96 74L74 64" stroke="#3a2a1a" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  // Fliegender Käfer von oben: Deckflügel aufgeklappt, häutige Hinterflügel ausgebreitet
  kaefer: `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Fliegender Käfer von oben">
    <rect width="400" height="260" fill="#f6f8ee"/>
    <g fill="#dcecf6" fill-opacity=".85" stroke="#5a7a8a" stroke-width="2">
      <path d="M190 102C150 64 74 62 36 104C64 150 144 152 192 126z"/><path d="M210 102C250 64 326 62 364 104C336 150 256 152 208 126z"/></g>
    <g stroke="#8aa4b4" stroke-width="1.4" fill="none">
      <path d="M188 108C150 92 100 90 52 104M188 116C150 120 110 130 80 136M210 108C250 92 300 90 348 104M210 116C250 120 290 130 320 136"/></g>
    <g stroke="#2f2a22" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path d="M182 98l-26-14-12-24"/><path d="M180 114l-38 6-22 8"/>
      <path d="M218 98l26-14 12-24"/><path d="M220 114l38 6 22 8"/></g>
    <ellipse cx="200" cy="160" rx="30" ry="58" fill="#6a4a2a" stroke="#3a2614" stroke-width="2.5"/>
    <path d="M176 140h48M172 160h56M176 180h48M184 200h32" stroke="#3a2614" stroke-width="1.8"/>
    <path d="M186 136l-18 42-6 40M214 136l18 42 6 40" stroke="#2f2a22" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <g fill="#9a5a24" stroke="#4a2a10" stroke-width="2.5">
      <path d="M194 100C168 104 140 132 128 172C124 192 140 200 152 188C172 162 190 130 198 106z"/>
      <path d="M206 100C232 104 260 132 272 172C276 192 260 200 248 188C228 162 210 130 202 106z"/></g>
    <g stroke="#7a4218" stroke-width="1.4" fill="none"><path d="M186 114C168 130 152 156 144 180M214 114C232 130 248 156 256 180"/></g>
    <ellipse cx="200" cy="90" rx="24" ry="15" fill="#3a2a1a" stroke="#1f1610" stroke-width="2"/>
    <ellipse cx="200" cy="66" rx="14" ry="12" fill="#2a2018" stroke="#1f1610" stroke-width="2"/>
    <g fill="#5a5a5a"><circle cx="190" cy="62" r="3.4"/><circle cx="210" cy="62" r="3.4"/></g>
    <path d="M195 56c-1-4-2-6-5-7M205 56c1-4 2-6 5-7" stroke="#1f1610" stroke-width="3" fill="none" stroke-linecap="round"/>
    <g stroke="#2f2a22" stroke-width="3" fill="none" stroke-linecap="round">
      <path d="M192 58L176 36M208 58L224 36"/><path d="M176 36l-10-8M176 36l-12-2M176 36l-9 4M224 36l10-8M224 36l12-2M224 36l9 4"/></g>
  </svg>`
};

// Motive für die Themen (viewBox 0 0 48 48, nur Linien)
const TOPIC_ICONS = {
  merkmale: `<path d="M8 38h28c4 0 6-3 6-6" /><path d="M10 38c-2-12 4-22 14-22s14 6 14 12-5 9-10 9-8-3-8-7 3-5 5-5 4 2 4 4" /><path d="M38 28l3-8M41 31l5-6" />`,
  insekten: `<circle cx="11" cy="24" r="5" /><ellipse cx="22" cy="24" rx="6" ry="5" /><ellipse cx="37" cy="24" rx="9" ry="6" /><path d="M8 20l-4-8M10 19l-2-9" /><path d="M18 29l-4 10M22 29v11M26 29l4 10M18 19l-4-10M22 19V8M26 19l4-10" />`,
  verwandlung: `<path d="M24 14v24" /><path d="M24 18C18 6 6 8 8 18c1 6 8 8 16 4z" /><path d="M24 18c6-12 18-10 16 0-1 6-8 8-16 4z" /><path d="M24 24c-6 2-12 6-10 12 2 4 8 2 10-4M24 24c6 2 12 6 10 12-2 4-8 2-10-4" /><path d="M24 14l-4-8M24 14l4-8" />`,
  kaefer: `<ellipse cx="24" cy="28" rx="11" ry="14" /><path d="M24 14v28" /><circle cx="24" cy="11" r="4" /><path d="M22 8l-4-5M26 8l4-5" /><path d="M13 22l-8-4M13 29H4M14 36l-7 5M35 22l8-4M35 29h9M34 36l7 5" />`,
  bienenstaat: `<path d="M16 6l8 5v9l-8 5-8-5v-9z" /><path d="M32 6l8 5v9l-8 5-8-5v-9z" /><path d="M24 20l8 5v9l-8 5-8-5v-9z" /><path d="M8 34l8-5M40 34l-8-5" />`,
  bienentanz: `<circle cx="20" cy="15" r="8" /><circle cx="20" cy="31" r="8" /><path d="M20 34V12M17 15l3-3 3 3" /><circle cx="39" cy="9" r="4" /><path d="M39 2v1.5M46 9h-1.5M33 9h-1.5" />`,
  ameisen: `<circle cx="10" cy="22" r="5" /><ellipse cx="21" cy="24" rx="5" ry="4" /><ellipse cx="35" cy="25" rx="9" ry="7" /><path d="M8 17l-2-7-4-2M12 17l2-7 4-2" /><path d="M18 27l-6 8-2 6M21 28l1 8-2 6M24 27l6 8 3 6" />`
};
