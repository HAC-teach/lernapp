// Dieses Lernspiel hat keine Beschriftungsaufgaben, darum ist IMAGES leer.
const IMAGES = {};

// Motive pro Thema (viewBox 0 0 48 48, nur Linien)
const TOPIC_ICONS = {
  // Sprechblase mit Rufzeichen
  imperativ: `<path d="M8 10h32a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H22l-9 8v-8H8a3 3 0 0 1-3-3V13a3 3 0 0 1 3-3z"/><path d="M24 16v10"/><path d="M24 30.5v.5"/>`,
  // Waage: freiwillig oder unfreiwillig
  modalverben: `<path d="M24 7v34"/><path d="M15 41h18"/><path d="M9 13h30"/><path d="M9 13l-6 15h12z"/><path d="M39 13l-6 15h12z"/><path d="M3 28a6 6 0 0 0 12 0"/><path d="M33 28a6 6 0 0 0 12 0"/>`
};
