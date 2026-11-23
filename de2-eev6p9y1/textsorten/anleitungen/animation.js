// ---------- Animationen am Ende (ohne Ton) ----------
// fxEnd(art, thema): art = "done" (Quiz fertig) oder "perfect" (alles richtig), thema = TOPICS-id oder "all"
// „Spielbrett“ (für alle Themen gleich): Würfel, Spielkarten und Spielfiguren steigen auf /
// ein großer Würfel rollt in die Mitte und zeigt eine Sechs, Spielfiguren hüpfen im Kreis darum, dann landet der Stempel „Gewonnen!“.
const NS = "http://www.w3.org/2000/svg";
const rnd = (a, b) => a + Math.random() * (b - a);
const pickOf = a => a[Math.floor(Math.random() * a.length)];
const FX_FARBEN = ["#c8483b", "#3a86b0", "#e0b100", "#5f9a3a", "#7a62b8"];
const FX_INK = "#3b3328";

// Zeichnungen im Feld -50 … 50
const PUNKTE = { 1: [[0, 0]], 2: [[-22, -22], [22, 22]], 3: [[-22, -22], [0, 0], [22, 22]], 4: [[-22, -22], [22, -22], [-22, 22], [22, 22]],
  5: [[-22, -22], [22, -22], [0, 0], [-22, 22], [22, 22]], 6: [[-22, -24], [22, -24], [-22, 0], [22, 0], [-22, 24], [22, 24]] };
const fxWuerfel = n => `<rect x="-44" y="-44" width="88" height="88" rx="16" fill="#ffffff" stroke="${FX_INK}" stroke-width="5"/>` +
  PUNKTE[n].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="8" fill="${FX_INK}"/>`).join("");
const fxFigur = c => `<circle cx="0" cy="-28" r="16" fill="${c}" stroke="${FX_INK}" stroke-width="4"/>` +
  `<path d="M-10 -12h20l12 46h-44z" fill="${c}" stroke="${FX_INK}" stroke-width="4" stroke-linejoin="round"/><path d="M-30 34h60" stroke="${FX_INK}" stroke-width="6" stroke-linecap="round"/>`;
const fxKarte = c => `<rect x="-30" y="-44" width="60" height="88" rx="8" fill="#ffffff" stroke="${FX_INK}" stroke-width="4"/>` +
  `<path d="M0 -20l16 20-16 20-16-20z" fill="${c}"/><circle cx="-18" cy="-32" r="5" fill="${c}"/><circle cx="18" cy="32" r="5" fill="${c}"/>`;

function fxLayer(ms) {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return null;
  document.querySelectorAll(".fx").forEach(e => e.remove());
  const W = innerWidth, H = innerHeight;
  const svg = document.createElementNS(NS, "svg");
  svg.setAttribute("class", "fx"); svg.setAttribute("viewBox", `0 0 ${W} ${H}`); svg.setAttribute("aria-hidden", "true");
  document.body.appendChild(svg);
  setTimeout(() => svg.remove(), ms);
  const el = (parent, tag, attrs) => { const e = document.createElementNS(NS, tag); for (const k in attrs) e.setAttribute(k, attrs[k]); parent.appendChild(e); return e; };
  return { svg, W, H, k: Math.min(1.6, Math.max(1, W / 420)), el };
}

// Zeichnung als bewegliche Gruppe; px = Größe in Pixeln (Zeichnung ist 100 breit)
function fxTeil(L, inhalt, px) {
  const g = L.el(L.svg, "g", { opacity: 0 });
  const innen = L.el(g, "g", { transform: `scale(${px / 100})` });
  innen.innerHTML = inhalt;
  return g;
}
const fxZufall = () => {
  const r = Math.random();
  return r < .35 ? fxWuerfel(1 + Math.floor(Math.random() * 6)) : r < .7 ? fxFigur(pickOf(FX_FARBEN)) : fxKarte(pickOf(FX_FARBEN));
};

// Fertig: Würfel, Karten und Figuren steigen auf und drehen sich
function fxDone(L) {
  for (let i = 0; i < 22; i++) {
    const g = fxTeil(L, fxZufall(), rnd(36, 56) * L.k);
    const x = rnd(40, L.W - 40), drift = rnd(-60, 60), r = rnd(-40, 40), dur = rnd(2800, 4200);
    g.animate([
      { transform: `translate(${x}px,${L.H + 60}px) rotate(${r}deg)`, opacity: 0 },
      { opacity: 1, offset: .15 },
      { opacity: 1, offset: .75 },
      { transform: `translate(${x + drift}px,-70px) rotate(${-r}deg)`, opacity: 0 }
    ], { duration: dur, delay: rnd(0, 1600), easing: "ease-out", fill: "both" });
  }
}

// Alles richtig: Würfel rollt in die Mitte (zeigt am Ende 6), Figuren hüpfen im Kreis, Stempel „Gewonnen!“
function fxPerfect(L) {
  const cx = L.W / 2, cy = L.H * .55, size = Math.min(110 * L.k, L.W * .3);
  // rollender Würfel: wechselt die Augenzahl, bis er liegen bleibt
  const wuerfel = fxTeil(L, fxWuerfel(1), size);
  const innen = wuerfel.firstChild;
  const folge = [3, 5, 2, 4, 1, 6];
  folge.forEach((n, i) => setTimeout(() => { innen.innerHTML = fxWuerfel(n); }, 150 + i * 170));
  wuerfel.animate([
    { transform: `translate(-80px,${cy}px) rotate(-360deg)`, opacity: 1 },
    { transform: `translate(${cx}px,${cy}px) rotate(0deg)`, opacity: 1, offset: .2 },
    { transform: `translate(${cx}px,${cy}px) rotate(0deg)`, opacity: 1, offset: .9 },
    { transform: `translate(${cx}px,${cy}px) rotate(0deg)`, opacity: 0 }
  ], { duration: 5600, easing: "ease-out", fill: "both" });

  // Figuren hüpfen im Kreis um den Würfel
  const R = Math.min(L.W * .38, L.H * .3, 260);
  FX_FARBEN.concat(FX_FARBEN).forEach((c, i, alle) => {
    const g = fxTeil(L, fxFigur(c), 46 * L.k);
    const start = i / alle.length * Math.PI * 2, frames = [], STEPS = 20;
    for (let s = 0; s <= STEPS; s++) {
      const a = start + s / STEPS * Math.PI * 2, hop = s % 2 ? -22 : 0;
      frames.push({ transform: `translate(${cx + Math.cos(a) * R}px,${cy + Math.sin(a) * R * .8 + hop}px)`, opacity: s ? 1 : 0, offset: s / STEPS * .85 });
    }
    frames.push({ transform: `translate(${cx + Math.cos(start) * R * 3}px,${cy + Math.sin(start) * R * 3}px)`, opacity: 0, offset: 1 });
    g.animate(frames, { duration: 4200, delay: 900, fill: "both" });
  });

  // Stempel
  const text = "Gewonnen!";
  const fs = Math.min(44 * L.k, (L.W - 70) / (text.length * .66));
  const breite = text.length * fs * .66 + 40, sy = L.H * .2;
  const g = L.el(L.svg, "g", { opacity: 0 });
  L.el(g, "rect", { x: -breite / 2, y: -fs, width: breite, height: fs * 2, rx: 14, fill: "#ffffff", stroke: "#c8483b", "stroke-width": 6 });
  const t = L.el(g, "text", { "text-anchor": "middle", "dominant-baseline": "central", "font-size": fs, "font-weight": 800, fill: "#c8483b", "font-family": "system-ui, sans-serif" });
  t.textContent = text;
  g.animate([
    { transform: `translate(${cx}px,${sy}px) rotate(-22deg) scale(3)`, opacity: 0 },
    { transform: `translate(${cx}px,${sy}px) rotate(-6deg) scale(1)`, opacity: 1, offset: .12 },
    { transform: `translate(${cx}px,${sy}px) rotate(-6deg) scale(1.06)`, opacity: 1, offset: .2 },
    { transform: `translate(${cx}px,${sy}px) rotate(-6deg) scale(1)`, opacity: 1, offset: .28 },
    { transform: `translate(${cx}px,${sy}px) rotate(-6deg) scale(1)`, opacity: 1, offset: .85 },
    { transform: `translate(${cx}px,${sy}px) rotate(-6deg) scale(1.3)`, opacity: 0 }
  ], { duration: 4000, delay: 1300, easing: "ease-out", fill: "both" });
}

function fxEnd(kind) {
  const perfect = kind === "perfect";
  const L = fxLayer(perfect ? 6000 : 6000);
  if (!L) return;
  if (perfect) fxPerfect(L); else fxDone(L);
}
