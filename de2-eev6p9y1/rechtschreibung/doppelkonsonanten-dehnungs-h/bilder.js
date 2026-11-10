// Dieses Lernspiel hat keine Beschriftungsaufgaben, darum ist IMAGES leer.
const IMAGES = {};

// Motive pro Thema (viewBox 0 0 48 48, nur Linien)
const TOPIC_ICONS = {
  // Punkt für kurzen Selbstlaut + zwei gleiche Buchstaben (ll)
  doppel: `<circle cx="9" cy="34" r="3"/><path d="M21 7v28q0 5 5 5"/><path d="M33 7v28q0 5 5 5"/>`,
  // a mit Strich für langen Selbstlaut + h
  dehnung: `<path d="M5 17h15"/><circle cx="12" cy="31" r="6"/><path d="M18 25v12"/><path d="M27 7v30"/><path d="M27 25c2-4 5-6 8-6s7 2 7 7v11"/>`
};
