// Bilder für die Beschriftungsaufgaben (Fragetyp "label")
// Alle Bilder sind selbst gezeichnete SVGs mit viewBox 0 0 400 260.
// Die Marker-Koordinaten in questions.js beziehen sich auf diese 400 × 260 Einheiten.

const IMAGES = {
  // Wasserkreislauf: Meer, Sonne, Wolke, Regen, Berg mit Gletscher, Boden mit Grundwasser
  kreislauf: `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Wasserkreislauf">
    <defs><marker id="kA" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
      <path d="M0 0L10 5L0 10z" fill="#2f6fb5"/></marker></defs>
    <rect width="400" height="260" fill="#e8f4fc"/>
    <circle cx="40" cy="38" r="20" fill="#ffd23f"/>
    <g stroke="#ffd23f" stroke-width="3" stroke-linecap="round">
      <path d="M40 8v-6M40 68v6M10 38h-6M70 38h6M19 17l-4-4M61 59l4 4M61 17l4-4M19 59l-4 4"/></g>
    <polygon points="245,190 330,58 415,190" fill="#a9a39a"/>
    <polygon points="311,88 330,58 349,88 340,82 330,92 320,82" fill="#ffffff"/>
    <rect x="150" y="180" width="250" height="80" fill="#c9a77c"/>
    <rect x="150" y="178" width="250" height="9" fill="#7cb860"/>
    <rect x="150" y="232" width="250" height="28" fill="#6fa8dc"/>
    <path d="M0 176H175L160 260H0z" fill="#4a90d9"/>
    <path d="M0 182q10-5 20 0t20 0 20 0 20 0 20 0 20 0 20 0 20 0" stroke="#ffffff" stroke-width="2" fill="none" opacity=".6"/>
    <path d="M290 170Q250 186 166 181" stroke="#4a90d9" stroke-width="8" fill="none" stroke-linecap="round"/>
    <g fill="#ffffff" stroke="#c8d3dc" stroke-width="2">
      <circle cx="228" cy="58" r="17"/><circle cx="250" cy="46" r="22"/><circle cx="274" cy="56" r="17"/>
      <rect x="226" y="54" width="50" height="20" rx="10" stroke="none"/></g>
    <g stroke="#4a90d9" stroke-width="3" stroke-linecap="round" stroke-dasharray="7 7">
      <path d="M228 84l-8 60M244 84l-8 60M260 84l-8 60M276 84l-8 60"/></g>
    <g stroke="#2f6fb5" stroke-width="3" fill="none" marker-end="url(#kA)">
      <path d="M50 168q-8-14 0-26t0-26 0-22"/><path d="M85 168q-8-14 0-26t0-26 0-22"/><path d="M120 168q-8-14 0-26t0-26 0-22"/>
      <path d="M130 78Q170 52 204 56" stroke-dasharray="5 5"/>
      <path d="M290 192v26"/><path d="M318 192v26"/>
      <path d="M220 246H178"/></g>
  </svg>`,

  // Fließgewässer: Quelle im Gebirge bis zur Mündung ins Meer
  fluss: `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Abschnitte eines Fließgewässers">
    <rect width="400" height="260" fill="#e8f4fc"/>
    <rect y="100" width="400" height="160" fill="#a8d38a"/>
    <polygon points="0,120 45,28 95,92 140,40 205,125 0,125" fill="#a9a39a"/>
    <polygon points="33,52 45,28 57,52 50,48 45,55 40,48" fill="#ffffff"/>
    <polygon points="128,64 140,40 152,64 146,60 140,67 134,60" fill="#ffffff"/>
    <path d="M290 260Q320 214 400 196V260z" fill="#4a90d9"/>
    <g fill="none" stroke="#4a90d9" stroke-linecap="round">
      <path d="M60 98C75 120 70 140 95 160" stroke-width="3"/>
      <path d="M95 160C120 180 150 150 200 185" stroke-width="6"/>
      <path d="M200 185C240 215 270 200 318 228" stroke-width="11"/></g>
    <circle cx="60" cy="97" r="5" fill="#4a90d9"/>
    <g fill="#4f8a3c"><circle cx="40" cy="160" r="12"/><circle cx="215" cy="140" r="11"/><circle cx="240" cy="150" r="9"/>
      <circle cx="120" cy="215" r="12"/><circle cx="350" cy="140" r="10"/><circle cx="190" cy="235" r="10"/></g>
  </svg>`,

  // Kläranlage: Haushalt → mechanische Reinigung → biologische Reinigung → Fluss, darunter Schlammbehandlung
  klaeranlage: `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Kläranlage">
    <rect width="400" height="260" fill="#f4f7f2"/>
    <path d="M345 0C368 80 322 160 350 260H400V0z" fill="#4a90d9"/>
    <path d="M370 120l12-6v12z M362 120q10-8 20 0q-10 8-20 0" fill="#2f6fb5"/>
    <g fill="#e9c891" stroke="#8a6d45" stroke-width="2">
      <rect x="12" y="68" width="30" height="26"/><rect x="46" y="74" width="24" height="20"/></g>
    <g fill="#c4553d"><polygon points="8,70 27,52 46,70"/><polygon points="43,76 58,62 73,76"/></g>
    <g stroke="#8b949c" stroke-width="7" fill="none">
      <path d="M58 94V104H92"/><path d="M168 104H202"/><path d="M302 104H348"/><path d="M250 138V168"/><path d="M220 208H190"/></g>
    <rect x="90" y="72" width="80" height="62" rx="4" fill="#b9d4ea" stroke="#5d7a93" stroke-width="2"/>
    <g stroke="#555" stroke-width="2"><path d="M128 76v54M136 76v54M144 76v54M152 76v54"/></g>
    <g fill="#8a6d45"><circle cx="108" cy="110" r="5"/><rect x="113" y="92" width="9" height="6"/><circle cx="118" cy="120" r="4"/></g>
    <rect x="200" y="68" width="102" height="70" rx="10" fill="#8fc1e3" stroke="#5d7a93" stroke-width="2"/>
    <g fill="#5bb98c"><ellipse cx="222" cy="94" rx="6" ry="3"/><ellipse cx="248" cy="118" rx="6" ry="3"/><ellipse cx="282" cy="90" rx="6" ry="3"/>
      <ellipse cx="270" cy="122" rx="5" ry="3"/><ellipse cx="232" cy="124" rx="5" ry="3"/></g>
    <g fill="none" stroke="#ffffff" stroke-width="1.5"><circle cx="238" cy="84" r="3"/><circle cx="262" cy="100" r="4"/><circle cx="214" cy="112" r="3"/><circle cx="290" cy="112" r="3"/></g>
    <ellipse cx="250" cy="208" rx="30" ry="40" fill="#a7907a" stroke="#6f5a46" stroke-width="2"/>
    <rect x="148" y="190" width="42" height="36" rx="4" fill="#d5d9dd" stroke="#6b737a" stroke-width="2"/>
    <path d="M172 194l-10 15h8l-6 14 14-18h-8l6-11z" fill="#ffd23f" stroke="#a07c00" stroke-width="1"/>
  </svg>`,

  // Veränderter und naturnaher Fluss: begradigter Abschnitt, Staumauer, Fischtreppe, Mäander, Auwald
  flussbau: `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Veränderter und naturnaher Fluss">
    <rect width="400" height="260" fill="#9ccf7a"/>
    <ellipse cx="250" cy="180" rx="150" ry="70" fill="#c3e4a8"/>
    <rect x="0" y="34" width="152" height="6" fill="#9a9a9a"/><rect x="0" y="76" width="152" height="6" fill="#9a9a9a"/>
    <rect x="0" y="40" width="152" height="36" fill="#4a90d9"/>
    <path d="M164 58C220 58 230 140 190 150S150 230 240 230S330 150 400 170" fill="none" stroke="#4a90d9" stroke-width="14"/>
    <g fill="#4a90d9" stroke="#777" stroke-width="2">
      <rect x="146" y="88" width="14" height="9"/><rect x="154" y="100" width="14" height="9"/><rect x="162" y="112" width="14" height="9"/></g>
    <rect x="150" y="26" width="14" height="64" fill="#6f6f6f"/>
    <g><g fill="#6b4a2b"><rect x="70" y="170" width="4" height="12"/><rect x="92" y="196" width="4" height="12"/><rect x="58" y="206" width="4" height="12"/>
      <rect x="112" y="226" width="4" height="12"/><rect x="356" y="222" width="4" height="12"/><rect x="290" y="232" width="4" height="12"/></g>
      <g fill="#3f7d2e"><circle cx="72" cy="166" r="11"/><circle cx="94" cy="192" r="12"/><circle cx="60" cy="202" r="10"/>
      <circle cx="114" cy="222" r="11"/><circle cx="358" cy="218" r="11"/><circle cx="292" cy="228" r="10"/></g></g>
  </svg>`,

  // Gefährdung der Meere: Ölpest, Schleppnetz, Plastik, Korallenbleiche, verbaute Küste
  meer: `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Gefährdung der Meere">
    <rect width="400" height="74" fill="#e8f4fc"/>
    <rect y="72" width="400" height="188" fill="#3f86cf"/>
    <rect y="150" width="400" height="110" fill="#2f6fb5" opacity=".5"/>
    <path d="M0 240Q50 228 100 238T200 236T300 240T400 234V260H0z" fill="#e3cf9a"/>
    <path d="M320 74L340 48H400V74z" fill="#e3cf9a"/>
    <g fill="#ffffff" stroke="#8b949c" stroke-width="1.5"><rect x="346" y="14" width="18" height="36"/><rect x="370" y="22" width="24" height="28"/></g>
    <g fill="#8fc1e3"><rect x="350" y="20" width="4" height="4"/><rect x="356" y="20" width="4" height="4"/><rect x="350" y="30" width="4" height="4"/>
      <rect x="356" y="30" width="4" height="4"/><rect x="376" y="28" width="4" height="4"/><rect x="384" y="28" width="4" height="4"/></g>
    <polygon points="28,60 124,60 114,78 38,78" fill="#8b2e24"/><rect x="96" y="46" width="16" height="14" fill="#ffffff"/>
    <ellipse cx="82" cy="92" rx="46" ry="8" fill="#1d1d1d" opacity=".85"/>
    <polygon points="186,62 228,62 222,76 192,76" fill="#e0e0e0" stroke="#777" stroke-width="1.5"/><rect x="202" y="48" width="4" height="14" fill="#777"/>
    <g stroke="#d8d8d8" stroke-width="1.5" fill="none"><path d="M220 74L250 214M196 74L232 214"/></g>
    <path d="M226 212H300L292 236H232z" fill="none" stroke="#e8e8e8" stroke-width="2"/>
    <g stroke="#e8e8e8" stroke-width="1"><path d="M240 212v24M254 212v24M268 212v24M282 212v24M228 224H296"/></g>
    <g fill="#f2a541"><rect x="146" y="132" width="16" height="7" rx="2" transform="rotate(-20 154 135)"/>
      <rect x="170" y="148" width="14" height="6" rx="2" transform="rotate(30 177 151)"/></g>
    <path d="M150 158q8-6 14 0t10 6-14 4z" fill="#ffffff" opacity=".85"/>
    <g stroke="#f4f1ea" stroke-width="5" stroke-linecap="round" fill="none">
      <path d="M60 238V206M60 220l-12-10M60 214l12-12M90 238V210M90 222l10-10M90 226l-10-8M122 240V218M122 228l8-8"/></g>
  </svg>`,

  // Metamorphose beim Frosch: Kaulquappe mit Kiemen und Ruderschwanz → erwachsener Frosch
  metamorphose: `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Metamorphose beim Frosch">
    <defs><marker id="mA" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto">
      <path d="M0 0L10 5L0 10z" fill="#857a66"/></marker></defs>
    <rect width="200" height="260" fill="#d6ecf8"/>
    <rect x="200" width="200" height="260" fill="#eef6e6"/>
    <path d="M200 205Q300 196 400 205V260H200z" fill="#a8d38a"/>
    <g transform="translate(-24 -40) scale(1.3)">
    <path d="M102 128C130 112 150 142 176 122C150 152 128 134 102 140z" fill="#6b5847"/>
    <ellipse cx="80" cy="132" rx="27" ry="19" fill="#5b4a3a"/>
    <circle cx="66" cy="126" r="4" fill="#ffffff"/><circle cx="66" cy="126" r="2" fill="#000000"/>
    <g stroke="#c4553d" stroke-width="3" stroke-linecap="round" fill="none">
      <path d="M74 116l-14-26M67 103l-10-3M64 97l1-9M70 108l7-9"/><path d="M86 115l4-28M88 102l-8-7M89 94l7-6M88 108l8-4"/></g></g>
    <path d="M98 80L108 78" stroke="#857a66" stroke-width="1.5"/>
    <path d="M214 132H252" stroke="#857a66" stroke-width="3" marker-end="url(#mA)"/>
    <ellipse cx="290" cy="172" rx="28" ry="13" fill="#4f8a3c"/>
    <ellipse cx="310" cy="160" rx="44" ry="30" fill="#6aa84f"/>
    <ellipse cx="346" cy="138" rx="25" ry="18" fill="#6aa84f"/>
    <g fill="#ffffff"><circle cx="340" cy="120" r="8"/><circle cx="358" cy="122" r="7"/></g>
    <g fill="#000000"><circle cx="341" cy="120" r="3.5"/><circle cx="359" cy="122" r="3"/></g>
    <path d="M335 166l6 26h12" stroke="#4f8a3c" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <g fill="#ffffff" opacity=".55"><ellipse cx="298" cy="148" rx="8" ry="4"/><ellipse cx="320" cy="142" rx="5" ry="3"/></g>
    <g fill="#4f8a3c" opacity=".7"><circle cx="292" cy="160" r="4"/><circle cx="315" cy="170" r="3"/></g>
  </svg>`,

  // Anpassungen an die Strömung: Fisch, flaches Tier auf dem Stein, Tier mit Saugnäpfen
  anpassung: `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Anpassungen an die Strömung">
    <defs><marker id="aA" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto">
      <path d="M0 0L10 5L0 10z" fill="#2f6fb5"/></marker></defs>
    <rect width="400" height="260" fill="#cfe7f7"/>
    <g stroke="#2f6fb5" stroke-width="3" fill="none" marker-end="url(#aA)">
      <path d="M20 38H120"/><path d="M40 62H140"/><path d="M20 86H120"/></g>
    <path d="M0 222Q100 210 200 220T400 216V260H0z" fill="#c9b28a"/>
    <ellipse cx="92" cy="226" rx="44" ry="20" fill="#9a978e"/>
    <ellipse cx="262" cy="218" rx="64" ry="28" fill="#8d8d86"/>
    <path d="M178 112Q222 84 272 112Q222 140 178 112z" fill="#8a9a5b"/>
    <polygon points="270,112 296,94 296,130" fill="#7a8a4b"/>
    <path d="M214 98l14-14 6 16z" fill="#7a8a4b"/>
    <circle cx="192" cy="109" r="4" fill="#ffffff"/><circle cx="191" cy="109" r="2" fill="#000000"/>
    <ellipse cx="92" cy="203" rx="28" ry="5" fill="#6b5233"/>
    <g stroke="#6b5233" stroke-width="2" stroke-linecap="round">
      <path d="M78 206l-6 6M92 207v7M106 206l6 6M120 202l16-6M120 204l18 0M120 206l16 6"/></g>
    <path d="M238 190C236 160 280 150 292 180" stroke="#3b2f2a" stroke-width="10" fill="none" stroke-linecap="round"/>
    <ellipse cx="238" cy="192" rx="10" ry="4" fill="#1f1814"/>
    <ellipse cx="292" cy="183" rx="9" ry="4" fill="#1f1814"/>
  </svg>`,

  // Trinkwasser: Quelle, Grundwasser und Gefahren durch Landwirtschaft und Industrie
  trinkwasser: `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Trinkwasser und Gefahren">
    <defs><marker id="tA" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto">
      <path d="M0 0L10 5L0 10z" fill="#8a6d45"/></marker></defs>
    <rect width="400" height="260" fill="#e8f4fc"/>
    <rect y="120" width="400" height="140" fill="#c9a77c"/>
    <rect y="206" width="400" height="54" fill="#6fa8dc"/>
    <path d="M0 122Q60 40 140 122z" fill="#8fbf6a"/>
    <rect y="116" width="400" height="8" fill="#7cb860"/>
    <path d="M116 100Q130 116 168 118" stroke="#4a90d9" stroke-width="4" fill="none" stroke-linecap="round"/>
    <circle cx="116" cy="100" r="5" fill="#4a90d9"/>
    <g stroke="#4f8a3c" stroke-width="3"><path d="M180 116v-10M192 116v-10M204 116v-10M216 116v-10M228 116v-10M240 116v-10M252 116v-10M264 116v-10M276 116v-10"/></g>
    <rect x="196" y="68" width="34" height="18" rx="3" fill="#c4553d"/><rect x="218" y="56" width="14" height="14" fill="#c4553d"/>
    <circle cx="204" cy="90" r="7" fill="#333"/><circle cx="228" cy="92" r="5" fill="#333"/>
    <path d="M196 78H170" stroke="#777" stroke-width="3"/>
    <g fill="#e0c040"><circle cx="172" cy="86" r="2.5"/><circle cx="180" cy="92" r="2.5"/><circle cx="168" cy="96" r="2.5"/><circle cx="178" cy="101" r="2.5"/><circle cx="186" cy="84" r="2.5"/></g>
    <g stroke="#8a6d45" stroke-width="2.5" stroke-dasharray="5 4" fill="none" marker-end="url(#tA)">
      <path d="M210 128V198"/><path d="M250 128V198"/><path d="M330 172V198"/></g>
    <rect x="300" y="72" width="64" height="46" fill="#9aa3ab"/><rect x="346" y="38" width="10" height="34" fill="#7d868e"/>
    <g fill="#d5d9dd"><rect x="308" y="82" width="10" height="10"/><rect x="324" y="82" width="10" height="10"/></g>
    <circle cx="352" cy="30" r="7" fill="#cfd3d6"/><circle cx="362" cy="22" r="8" fill="#dde0e2"/>
    <path d="M330 118V160" stroke="#6b4f2a" stroke-width="7"/>
    <ellipse cx="330" cy="166" rx="20" ry="7" fill="#6b4f2a"/>
  </svg>`,

  // Nutzung eines Flusses durch den Menschen
  nutzung: `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Nutzung eines Flusses">
    <rect width="400" height="260" fill="#a8d38a"/>
    <rect y="118" width="400" height="74" fill="#4a90d9"/>
    <polygon points="28,132 132,132 122,154 38,154" fill="#8b2e24"/>
    <g fill="#f2a541"><rect x="40" y="118" width="16" height="14"/><rect x="58" y="118" width="16" height="14"/><rect x="76" y="118" width="16" height="14"/></g>
    <rect x="100" y="112" width="22" height="20" fill="#ffffff" stroke="#777"/>
    <rect x="176" y="112" width="26" height="80" fill="#8a8a8a"/>
    <rect x="168" y="82" width="42" height="30" fill="#bfbfbf" stroke="#777"/>
    <path d="M192 86l-9 12h7l-5 11 12-14h-7l5-9z" fill="#ffd23f" stroke="#a07c00" stroke-width="1"/>
    <path d="M202 140q10 4 20 0t20 0" stroke="#ffffff" stroke-width="2" fill="none" opacity=".7"/>
    <circle cx="268" cy="150" r="7" fill="#f0c8a0"/>
    <path d="M252 158q8-10 16-4t16-4" stroke="#f0c8a0" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M248 162q10 5 20 0t20 0" stroke="#ffffff" stroke-width="2" fill="none"/>
    <path d="M318 104Q330 72 322 38H364Q356 72 368 104z" fill="#d5d9dd" stroke="#8b949c" stroke-width="2"/>
    <g fill="#ffffff" opacity=".9"><circle cx="336" cy="28" r="9"/><circle cx="350" cy="20" r="11"/><circle cx="364" cy="28" r="8"/></g>
    <path d="M343 104V124" stroke="#8b949c" stroke-width="7"/>
    <g fill="#3f7d2e"><circle cx="40" cy="220" r="11"/><circle cx="120" cy="230" r="10"/><circle cx="250" cy="225" r="11"/><circle cx="60" cy="60" r="11"/><circle cx="250" cy="70" r="10"/></g>
  </svg>`,

  // Amphibien: Froschlurch und Schwanzlurch
  lurche: `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Froschlurch und Schwanzlurch">
    <rect width="400" height="260" fill="#eef6e6"/>
    <path d="M0 160Q200 148 400 160V260H0z" fill="#a8d38a"/>
    <ellipse cx="90" cy="226" rx="74" ry="22" fill="#6fa8dc"/>
    <g transform="translate(-200 -20)">
      <ellipse cx="290" cy="172" rx="28" ry="13" fill="#4f8a3c"/>
      <ellipse cx="310" cy="160" rx="44" ry="30" fill="#6aa84f"/>
      <ellipse cx="346" cy="138" rx="25" ry="18" fill="#6aa84f"/>
      <g fill="#ffffff"><circle cx="340" cy="120" r="8"/><circle cx="358" cy="122" r="7"/></g>
      <g fill="#000000"><circle cx="341" cy="120" r="3.5"/><circle cx="359" cy="122" r="3"/></g>
      <path d="M335 166l6 26h12" stroke="#4f8a3c" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <path d="M244 164Q200 168 168 192Q205 178 244 178z" fill="#222222"/>
    <g stroke="#222222" stroke-width="6" stroke-linecap="round" fill="none">
      <path d="M262 176l-8 18M276 176l-2 18M322 176l8 18M334 174l12 16"/></g>
    <ellipse cx="290" cy="170" rx="50" ry="12" fill="#222222"/>
    <ellipse cx="345" cy="167" rx="17" ry="11" fill="#222222"/>
    <circle cx="352" cy="162" r="3" fill="#ffffff"/>
    <g fill="#f5c400"><circle cx="258" cy="166" r="4"/><circle cx="280" cy="172" r="4"/><circle cx="300" cy="164" r="4"/><circle cx="320" cy="172" r="4"/><circle cx="340" cy="164" r="3"/><circle cx="210" cy="176" r="3"/></g>
  </svg>`
};

// Motive pro Thema (viewBox 0 0 48 48, nur Linien in der Themenfarbe) für Kacheln und Überschriften
const TOPIC_ICONS = {
  kreislauf: `<path d="M14 30a9 9 0 0 1 1-18 12 12 0 0 1 23 3 7.5 7.5 0 0 1-1 15z" /><path d="M18 36l-2 6M26 36l-2 6M34 36l-2 6" />`,
  fluss: `<path d="M6 16c6-5 10 5 16 0s10 5 16 0 8 3 10 2" /><path d="M6 26c6-5 10 5 16 0s10 5 16 0 8 3 10 2" /><path d="M6 36c6-5 10 5 16 0s10 5 16 0 8 3 10 2" />`,
  trinkwasser: `<path d="M24 6C18 16 12 22 12 30a12 12 0 0 0 24 0c0-8-6-14-12-24z" /><path d="M18 31a6 6 0 0 0 6 6" />`,
  flussbau: `<path d="M8 6c16 2 18 10 8 15s-6 13 10 15 14 6 14 6" /><path d="M30 6v7h6v7h6" />`,
  meer: `<path d="M8 22c5 0 8-8 14-8s7 6 10 6" /><path d="M4 34c4 0 6-3 10-3s6 3 10 3 6-3 10-3 6 3 10 3" /><path d="M30 10l4-3 1 4" />`,
  amphibien: `<circle cx="16" cy="14" r="5" /><circle cx="32" cy="14" r="5" /><path d="M8 26c0-8 32-8 32 0 0 9-8 14-16 14S8 35 8 26z" /><path d="M17 29q7 5 14 0" />`
};
