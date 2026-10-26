// Bilder für die Beschriftungsaufgaben (Fragetyp "label")
// Alle Bilder sind selbst gezeichnete SVGs mit viewBox 0 0 400 260.
// Die Marker-Koordinaten in questions.js beziehen sich auf diese 400 × 260 Einheiten.

const IMAGES = {
  // Stockwerke des Waldes: Baum-, Strauch-, Kraut-, Moos-, Boden- und Wurzelschicht
  stockwerke: `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Stockwerke des Waldes">
    <rect width="400" height="260" fill="#eef6fb"/>
    <g fill="#7a5532" stroke="#4e341c" stroke-width="2">
      <path d="M90 212V70h12v142z"/><path d="M296 212V90h10v122z"/><path d="M206 212V80h9v132z"/></g>
    <g fill="#6aa84f" stroke="#3b6324" stroke-width="2.2">
      <circle cx="96" cy="52" r="38"/><circle cx="66" cy="74" r="26"/><circle cx="128" cy="76" r="26"/>
      <circle cx="210" cy="50" r="30"/><circle cx="188" cy="70" r="20"/><circle cx="234" cy="70" r="20"/></g>
    <path d="M301 8L264 66h74zM301 32L254 104h94zM301 62L244 140h114z" fill="#2f7a4a" stroke="#1d4a2c" stroke-width="2.2" stroke-linejoin="round"/>
    <g fill="#8fc36a" stroke="#4d7d2c" stroke-width="2">
      <circle cx="140" cy="172" r="22"/><circle cx="164" cy="156" r="26"/><circle cx="188" cy="174" r="20"/>
      <circle cx="356" cy="176" r="20"/><circle cx="378" cy="164" r="22"/></g>
    <g stroke="#4d8a3a" stroke-width="2.2" fill="none" stroke-linecap="round">
      <path d="M24 204C24 190 30 180 40 174M30 186l-7-4M34 180l-5-6M36 190l7-2M41 182l7-4"/>
      <path d="M250 204C248 192 252 182 262 176M249 194l-7-3M251 186l-5-5M254 190l7-2M258 181l6-4"/>
      <path d="M232 204v-22M276 204v-18M334 204v-20M116 204v-16"/></g>
    <g stroke="#2f2a22" stroke-width="1.2">
      <circle cx="232" cy="180" r="5" fill="#f5d04a"/><circle cx="276" cy="184" r="5" fill="#c2577a"/>
      <circle cx="334" cy="182" r="5" fill="#ffffff"/><circle cx="116" cy="186" r="5" fill="#7a62b8"/></g>
    <path d="M0 260V212H400V260Z" fill="#9a7350"/>
    <g fill="#7cb342" stroke="#4d7d2c" stroke-width="1.5">
      ${[...Array(41).keys()].map(i => `<circle cx="${i * 10}" cy="${211 + (i % 2) * 2}" r="6"/>`).join("")}</g>
    <g stroke="#5a3a1a" stroke-width="3" fill="none" stroke-linecap="round">
      <path d="M96 216l-18 22-12 10M96 216l14 20 16 10M96 216v38"/>
      <path d="M301 216l-16 20-14 8M301 216l18 24 12 8M301 216v36"/>
      <path d="M210 216l-10 22M210 216l12 26"/></g>
    <g fill="#c9b49a"><ellipse cx="40" cy="240" rx="9" ry="5"/><ellipse cx="160" cy="246" rx="7" ry="4"/><ellipse cx="250" cy="236" rx="8" ry="5"/><ellipse cx="370" cy="244" rx="10" ry="5"/></g>
  </svg>`
};

// Motive für die Themen (viewBox 0 0 48 48, nur Linien)
const TOPIC_ICONS = {
  oekologie: `<circle cx="20" cy="20" r="13" /><path d="M30 30l12 12" /><path d="M13 25c0-7 5-12 14-12 0 9-5 13-14 12z" /><path d="M13 25l8-7" />`,
  aufgaben: `<path d="M24 5l15 6v11c0 10-7 17-15 21C16 39 9 32 9 22V11z" /><path d="M24 34V24" /><path d="M24 13l-7 11h14z" />`,
  waldtypen: `<circle cx="15" cy="18" r="9" /><path d="M15 27v14" /><path d="M34 6l-8 13h5l-7 11h20l-7-11h5z" /><path d="M34 30v11" /><path d="M5 42h38" />`,
  stockwerke: `<path d="M24 4l-8 12h16z" /><path d="M24 16v16" /><path d="M8 32a5 5 0 0 1 10 0M30 32a5 5 0 0 1 10 0" /><path d="M4 34h40" /><path d="M24 34l-6 9M24 34l6 9M24 34v10" />`,
  einfluesse: `<path d="M4 42l13-20 9 12 6-8 12 16z" /><circle cx="35" cy="12" r="5" /><path d="M35 3v2M44 12h-2M41.5 5.5l-1.5 1.5M28.5 5.5l1.5 1.5" />`,
  regenwald: `<path d="M24 44c0-12 1-21-2-30" /><path d="M22 14c-6-6-14-5-17 0M22 14c6-6 14-5 18 1M22 14c-3-4-2-9 2-11M22 14c-8 0-12 5-12 11M22 14c8 0 13 4 13 11" /><path d="M12 44c4-3 8-3 12 0s8 3 12 0" />`
};
