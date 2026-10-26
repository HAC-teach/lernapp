// Logo „Lernspiele“ mit Fach-Etikett – gemeinsam für alle Seiten.
// Verwendung: <span data-marke="bio"></span> … <script src="../marke.js"></script>
// Neues Fach: in FACH eintragen (Farbe + Symbol im 48×48-Raster, weiße Linien).
const FACH = {
  "":  { name: "", color: "#2f2a22", glyph: `<path d="M14 25l7 7 13-15" />` },
  bio: { name: "Biologie", color: "#3f9a6f", soft: "#e3f4ea", glyph: `<path d="M14 34C14 20 22 12 36 12c0 14-8 22-22 22z" /><path d="M14 34l12-12" />` },
  de:  { name: "Deutsch", color: "#c8483b", soft: "#fbe6e1",
         glyph: `<text x="24" y="32" text-anchor="middle" font-size="22" font-weight="800" fill="#fff" stroke="none" font-family="Georgia, serif">Aa</text>` },
  ma:  { name: "Mathematik", color: "#3d6fc4", soft: "#e3ebf8", glyph: `<path d="M12 17h12M18 11v12M26 33h12" />` }
};

function marke(id) {
  const f = FACH[id] || FACH[""];
  return `<span class="marke" style="--mk:${f.color};--mk2:${f.soft || "#eee"}">
    <svg viewBox="0 0 48 48" aria-hidden="true"><rect x="2" y="2" width="44" height="44" rx="13" fill="${f.color}" />
      <g fill="none" stroke="#fff" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round">${f.glyph}</g></svg>
    <span><b>Lernspiele</b>${f.name ? `<i>${f.name}</i>` : ""}</span></span>`;
}

document.head.insertAdjacentHTML("beforeend", `<style>
  .marke { display: inline-flex; align-items: center; gap: .55em; line-height: 1.1; color: #2f2a22; }
  .marke svg { width: 2.3em; height: 2.3em; flex: none; }
  .marke b { display: block; font-size: 1.3em; font-weight: 800; letter-spacing: -.02em; }
  .marke i { display: inline-block; margin-top: .2em; font-style: normal; font-size: .75em; font-weight: 700;
    color: var(--mk); background: var(--mk2); border-radius: 99px; padding: 0 .75em; }
</style>`);
document.querySelectorAll("[data-marke]").forEach(el => { el.innerHTML = marke(el.dataset.marke); });
