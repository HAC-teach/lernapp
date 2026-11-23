// Dieses Lernspiel hat keine Bildaufgaben, darum sind IMAGES und REZEPT_BILDER leer.
const IMAGES = {};
const REZEPT_BILDER = {};

// Motive pro Thema (viewBox 0 0 48 48, nur Linien)
const TOPIC_ICONS = {
  // nummerierte Liste
  aufbau: `<path d="M8 8v6M8 20h5l-5 6h5M8 32h4l-2 3c3 0 3 5-1 5h-1"/><path d="M20 11h20M20 23h20M20 36h20"/>`,
  // zwei Spielkarten und ein Würfel
  karten: `<rect x="5" y="9" width="17" height="25" rx="2" transform="rotate(-10 13 21)"/><rect x="17" y="7" width="17" height="25" rx="2" transform="rotate(8 25 19)"/>
    <rect x="28" y="28" width="15" height="15" rx="3"/><circle cx="32.5" cy="32.5" r="1"/><circle cx="38.5" cy="38.5" r="1"/>`,
  // drei Kinder
  gruppe: `<circle cx="11" cy="15" r="4"/><circle cx="24" cy="11" r="4"/><circle cx="37" cy="15" r="4"/><path d="M4 34c0-9 14-9 14 0M17 30c0-9 14-9 14 0M30 34c0-9 14-9 14 0"/><path d="M4 42h40"/>`
};
