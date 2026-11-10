// ---------- Animationen am Ende (ohne Ton), passend zum Thema ----------
// fxEnd(art, thema): art = "done" (Runde fertig) oder "perfect" (alles richtig), thema = TOPICS-id oder "all"
// „Großbuchstaben“: Wörter steigen klein auf und springen unterwegs auf den großen Anfangsbuchstaben um /
// ein Stempel landet in der Mitte, die Nomen kreisen um ihn und fliegen dann in alle Richtungen davon.
const NS = "http://www.w3.org/2000/svg";
const rnd = (a, b) => a + Math.random() * (b - a);
const pickOf = a => a[Math.floor(Math.random() * a.length)];
const FX_FARBEN = ["#c8483b", "#2f7f9e", "#c9932a", "#5f9a3a", "#7a62b8"];
const FX_WOERTER = {
  erkennen: ["Hund", "Freude", "Mut", "Abend", "Baum", "Idee", "Schule", "Glück"],
  endungen: ["Zeitung", "Freiheit", "Freundschaft", "Ergebnis", "Häuschen", "Frühling", "Reichtum", "Sauberkeit"],
  nominal: ["Lesen", "Singen", "Neues", "Gute", "Lachen", "Tanzen", "Beste", "Spielen"]
};
FX_WOERTER.all = FX_WOERTER.erkennen.concat(FX_WOERTER.endungen, FX_WOERTER.nominal);
const FX_STEMPEL = { erkennen: "Groß-Profi!", endungen: "Groß-Profi!", nominal: "Groß-Profi!", all: "Groß-Profi!" };
const klein = w => w.charAt(0).toLowerCase() + w.slice(1);

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

function fxWort(L, text, size, color) {
  const t = L.el(L.svg, "text", { "text-anchor": "middle", "dominant-baseline": "central", "font-size": size, "font-weight": 800, fill: color,
    "font-family": "system-ui, sans-serif", stroke: "#ffffff", "stroke-width": 3, "paint-order": "stroke", opacity: 0 });
  t.textContent = text;
  return t;
}

// Fertig: Wörter steigen klein auf, auf halber Höhe springt der Anfangsbuchstabe groß
function fxDone(L, woerter) {
  for (let i = 0; i < 22; i++) {
    const w = pickOf(woerter);
    const t = fxWort(L, klein(w), rnd(22, 34) * L.k, pickOf(FX_FARBEN));
    const x = rnd(50, L.W - 50), drift = rnd(-40, 40), r = rnd(-12, 12), dur = rnd(2800, 4000), delay = rnd(0, 1600);
    t.animate([
      { transform: `translate(${x}px,${L.H + 50}px) rotate(${r}deg) scale(1)`, opacity: 0 },
      { opacity: 1, offset: .15 },
      { transform: `translate(${x + drift / 2}px,${L.H * .5}px) rotate(0deg) scale(1)`, offset: .45 },
      { transform: `translate(${x + drift / 2}px,${L.H * .47}px) rotate(0deg) scale(1.35)`, offset: .5 },
      { transform: `translate(${x + drift * .6}px,${L.H * .42}px) rotate(0deg) scale(1)`, opacity: 1, offset: .6 },
      { transform: `translate(${x + drift}px,-60px) rotate(${-r}deg) scale(1)`, opacity: 0 }
    ], { duration: dur, delay, easing: "linear", fill: "both" });
    setTimeout(() => { t.textContent = w; }, delay + dur * .48);
  }
}

// Alles richtig: Stempel, Wörterkreis, Wörter fliegen davon
function fxPerfect(L, woerter, stempel) {
  const cx = L.W / 2, cy = L.H / 2, size = Math.min(44 * L.k, (L.W - 70) / (stempel.length * .66));
  const breite = stempel.length * size * .66 + 40;
  const g = L.el(L.svg, "g", { opacity: 0 });
  L.el(g, "rect", { x: -breite / 2, y: -size, width: breite, height: size * 2, rx: 14, fill: "#ffffff", stroke: "#c8483b", "stroke-width": 6 });
  const t = L.el(g, "text", { "text-anchor": "middle", "dominant-baseline": "central", "font-size": size, "font-weight": 800, fill: "#c8483b", "font-family": "system-ui, sans-serif" });
  t.textContent = stempel;
  g.animate([
    { transform: `translate(${cx}px,${cy}px) rotate(-22deg) scale(3)`, opacity: 0 },
    { transform: `translate(${cx}px,${cy}px) rotate(-6deg) scale(1)`, opacity: 1, offset: .1 },
    { transform: `translate(${cx}px,${cy}px) rotate(-6deg) scale(1.06)`, opacity: 1, offset: .16 },
    { transform: `translate(${cx}px,${cy}px) rotate(-6deg) scale(1)`, opacity: 1, offset: .22 },
    { transform: `translate(${cx}px,${cy}px) rotate(-6deg) scale(1)`, opacity: 1, offset: .86 },
    { transform: `translate(${cx}px,${cy}px) rotate(-6deg) scale(1.3)`, opacity: 0 }
  ], { duration: 5200, easing: "ease-out", fill: "both" });

  const liste = woerter.length > 10 ? woerter.filter((_, i) => i % 3 === 0) : woerter;
  const R = Math.min(L.W * .36, L.H * .36, 300);
  liste.forEach((w, i) => {
    const wort = fxWort(L, klein(w), 24 * L.k, FX_FARBEN[i % FX_FARBEN.length]);
    setTimeout(() => { wort.textContent = w; }, 700 + 1200 + i * 120); // während des Kreisens wird der Anfangsbuchstabe groß
    const start = i / liste.length * Math.PI * 2, frames = [], STEPS = 16;
    for (let s = 0; s <= STEPS; s++) {
      const a = start + s / STEPS * Math.PI * 2;
      frames.push({ transform: `translate(${cx + Math.cos(a) * R}px,${cy + Math.sin(a) * R}px)`, opacity: s ? 1 : 0, offset: s / STEPS * .8 });
    }
    const weit = Math.max(L.W, L.H);
    frames.push({ transform: `translate(${cx + Math.cos(start) * weit}px,${cy + Math.sin(start) * weit}px)`, opacity: 0, offset: 1 });
    wort.animate(frames, { duration: 4400, delay: 700, fill: "both" });
  });
}

function fxEnd(kind, topicId) {
  const perfect = kind === "perfect";
  const L = fxLayer(perfect ? 5600 : 5800);
  if (!L) return;
  const woerter = FX_WOERTER[topicId] || FX_WOERTER.all;
  if (perfect) fxPerfect(L, woerter, FX_STEMPEL[topicId] || FX_STEMPEL.all); else fxDone(L, woerter);
}
