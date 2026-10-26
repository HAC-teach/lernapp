// Lernkarten zum Thema "2. Die Zelle" (Inhalt aus Zelle_PPP.pptx)
// LESSONS[topicId] = Liste von Karten: { title, points: [...], tip? }
// Die Karten werden vor dem Quiz zum Durchklicken angezeigt.
// Höchstens 5 Karten pro Thema, nur das Wichtigste in kurzen Stichworten.

const LESSONS = {
  zellen: [
    { title: "Winzig klein",
      points: [
        "Kugelschreiberpunkt auf dem Finger = über 1000 Hautzellen",
        "nur mit dem Mikroskop sichtbar",
        "Mensch: ca. 100 Billionen Zellen"
      ] },
    { title: "Die Zelle",
      points: [
        "kleinste lebende Einheit",
        "alle Lebewesen bestehen aus Zellen",
        "Mehrzeller: viele Zellen · Einzeller: 1 Zelle"
      ] },
    { title: "Kennzeichen des Lebens",
      points: [
        "Stoffwechsel · Wachstum · Bewegung",
        "Reizbarkeit · Fortpflanzung",
        "Aufbau aus Zellen"
      ], tip: "Schon eine einzelne Zelle zeigt alle Kennzeichen." },
    { title: "Einzeller",
      points: [
        "tierische und pflanzliche Einzeller",
        "Vermehrung: Zellteilung (ungeschlechtlich)",
        "Nachkommen = Klone → „praktisch unsterblich“"
      ] },
    { title: "Stufen des Lebens",
      points: [
        "Organellen → Zelle → Gewebe → Organ → Organismus → Ökosystem",
        "Gewebe: gleiche Zellen, gleiche Leistung",
        "Organ: verschiedene Gewebe, z. B. Lunge",
        "Ökosystem: Lebensgemeinschaft + Lebensraum"
      ] }
  ],

  zellbau: [
    { title: "Tier- und Pflanzenzelle",
      points: [
        "meist gleiche Organellen, ähnliche Aufgaben",
        "nur die Pflanzenzelle hat: Zellwand, Chloroplasten, große Vakuole"
      ] },
    { title: "Hülle und Inneres",
      points: [
        "Zellmembran: dünnes Häutchen, grenzt ab",
        "Zellwand: stabil, aus Zellulose",
        "Zellplasma: zähflüssig, Organellen liegen darin",
        "Zellpore: Stoffaustausch"
      ] },
    { title: "Zellorganellen",
      points: [
        "= kleine „Organe“ der Zelle",
        "Zellkern: Erbinformation (DNA), steuert die Zelle",
        "Mitochondrien: gewinnen Energie („Kraftwerke“)",
        "Ribosomen: bauen Eiweiß",
        "netzartige Kanäle: Transport"
      ] },
    { title: "Typisch Pflanzenzelle",
      points: [
        "Chloroplasten: Fotosynthese, grünes Chlorophyll",
        "Vakuole: Zellsaft, lagert Stoffe"
      ], tip: "Zellwand, Chloroplasten, große Vakuole – daran erkennst du die Pflanzenzelle." }
  ],

  // C. Mikroskope: keine Folien mit Inhalt – übliches Schulwissen zum Lichtmikroskop
  mikroskop: [
    { title: "Das Lichtmikroskop",
      points: [
        "macht Zellen sichtbar",
        "Licht scheint von unten durch das Objekt",
        "Linsen vergrößern das Bild"
      ] },
    { title: "Die Teile",
      points: [
        "Okular: hier schaust du hinein",
        "Objektivrevolver mit Objektiven",
        "Objekttisch mit Klemmen",
        "Grobtrieb, Feintrieb: scharf stellen",
        "Blende: regelt das Licht · Lichtquelle unten"
      ] },
    { title: "Vergrößerung",
      points: [
        "Okular × Objektiv",
        "z. B. 10 × 40 = 400-fach",
        "Bild steht auf dem Kopf und ist seitenverkehrt"
      ], tip: "Schiebst du den Objektträger nach links, wandert das Bild nach rechts." },
    { title: "Das Präparat",
      points: [
        "dünn und durchsichtig",
        "Objektträger + Wassertropfen + Deckglas"
      ] },
    { title: "Richtig mikroskopieren",
      points: [
        "mit beiden Händen tragen",
        "mit dem kleinsten Objektiv beginnen",
        "von der Seite schauen, Objektiv nahe ans Präparat",
        "erst Grobtrieb, dann Feintrieb",
        "Linsen nicht berühren · danach Licht aus, Schutzhülle drauf"
      ] }
  ],

  mikro: [
    { title: "Mikroorganismen",
      points: [
        "winzige Lebewesen aus 1 Zelle",
        "manche leben in Symbiose mit dem Menschen",
        "2 Gruppen: Einzeller und Bakterien"
      ] },
    { title: "Einzeller",
      points: [
        "z. B. Pantoffeltierchen, Augentierchen",
        "Malaria-Erreger: übertragen durch Stechmücken"
      ] },
    { title: "Bau der Bakterien",
      points: [
        "kein Zellkern: DNA frei im Zellplasma",
        "außen → innen: Schleimhülle → Zellwand → Zellhaut → Zellplasma",
        "Zellwand anders als bei Pflanzen",
        "Geißeln: Fortbewegung"
      ] },
    { title: "Vermehrung",
      points: [
        "Zweiteilung",
        "ca. alle 20 Minuten"
      ], tip: "In 1 Stunde: 1 → 2 → 4 → 8 Bakterien." }
  ],

  bakterien: [
    { title: "Nützliche Bakterien",
      points: [
        "Zersetzer: bauen Totes ab → Mineralstoffe für Pflanzen",
        "reinigen Gewässer und Abwasser (Kläranlage)",
        "Lebensmittel: Essig, Joghurt, Sauerkraut, Käse, Brot",
        "Darm: helfen bei der Verdauung"
      ] },
    { title: "Gefährliche Bakterien",
      points: [
        "Giftstoffe → Krankheiten: Scharlach, Keuchhusten, Tuberkulose, Cholera …",
        "Karies: Säuren greifen die Zähne an",
        "Pflanzenschädlinge: lösen Zellwände auf → Fäulnis"
      ], tip: "Bakterien können nützlich UND gefährlich sein." }
  ]
};
