// Lernkarten zum Thema "5. Wirbellose Tiere" (Inhalt aus Wirbellose Tiere_PPP.pptx)
// LESSONS[topicId] = Liste von Karten: { title, points: [...], tip? }
// Die Karten werden vor dem Quiz zum Durchklicken angezeigt.
// Höchstens 5 Karten pro Thema, nur das Wichtigste in kurzen Stichworten.
// „ameisen“ ist übliches Schulwissen (auf den Folien nur Verweise auf Buch und Arbeitsblatt).

const LESSONS = {
  merkmale: [
    { title: "Wirbeltiere",
      points: [
        "Innenskelett mit Wirbelsäule",
        "Säugetiere, Vögel, „Reptilien“, Amphibien, Fische"
      ] },
    { title: "Wirbellose Tiere",
      points: [
        "keine Wirbelsäule",
        "viele mit Außenskelett",
        "95–97 % aller bekannten Tierarten"
      ] },
    { title: "Gruppen der Wirbellosen",
      points: [
        "Insekten",
        "Spinnentiere",
        "Weichtiere: Schnecken, Muscheln",
        "Ringelwürmer",
        "Krebstiere"
      ] }
  ],
  insekten: [
    { title: "Körperbau",
      points: [
        "Kopf, Brust, Hinterleib",
        "Außenskelett aus Chitin",
        "6 Beine, Flügel, Fühler"
      ] },
    { title: "Facettenaugen",
      points: [
        "mehrere tausend Einzelaugen"
      ] },
    { title: "Organsysteme",
      points: [
        "offener Blutkreislauf: Blut fließt frei, ohne Blutgefäße",
        "Atmung mit Tracheen (verzweigtes Röhrensystem)",
        "Strickleiternervensystem"
      ] }
  ],
  verwandlung: [
    { title: "Unvollkommene Verwandlung",
      points: [
        "Ei → Larve → Häutungen → Imago",
        "keine Puppe",
        "z. B. Heuschrecke"
      ], tip: "Imago = das fertige Insekt." },
    { title: "Vollkommene Verwandlung",
      points: [
        "Ei → Larve → Häutungen → Puppe → Imago",
        "z. B. Schmetterling"
      ] },
    { title: "Verpuppung",
      points: [
        "Gehäuse aus Seide",
        "darin wird der Körper umgebaut",
        "Raupe → Schmetterling"
      ] }
  ],
  kaefer: [
    { title: "Merkmale der Käfer",
      points: [
        "beißend-kauende Mundwerkzeuge",
        "harte Deckflügel schützen häutige Hinterflügel"
      ] },
    { title: "Käfer als Schädlinge",
      points: [
        "vollkommene Entwicklung",
        "Larven brauchen viel Nahrung → Schaden",
        "z. B. Borkenkäfer, Kartoffelkäfer"
      ] },
    { title: "Wanzen – keine Käfer!",
      points: [
        "Fühler aus wenigen großen Gliedern",
        "Stechrüssel",
        "Flügeldecken am Ende teils durchsichtig",
        "X mit dreieckigem Schildchen"
      ] }
  ],
  bienenstaat: [
    { title: "Bestäubung und Honig",
      points: [
        "Rüssel sammelt Nektar",
        "Pollen bleiben am Körper → Bestäubung",
        "Honigmagen: Pollen + Nektar → Honig"
      ] },
    { title: "Königin",
      points: [
        "größte Biene, einziges fruchtbares Weibchen",
        "legt Eier",
        "aus der Weiselzelle, Futter: Gelée royale",
        "Hochzeitsflug mit Drohnen"
      ] },
    { title: "Arbeiterin",
      points: [
        "aus befruchteten Eiern",
        "lebt ca. 6 Wochen",
        "Putz-, Bau-, Ammen-, Wächter-, Sammelbiene"
      ] },
    { title: "Drohne",
      points: [
        "aus unbefruchteten Eiern",
        "begattet die Königin",
        "kein Stachel",
        "Drohnenschlacht: vertrieben, verhungern"
      ] }
  ],
  bienentanz: [
    { title: "Bienentanz",
      points: [
        "zeigt Futterquellen an",
        "andere tasten mit Fühlern, riechen Blütenduft"
      ] },
    { title: "Rundtanz",
      points: [
        "im Kreis",
        "Futter innerhalb von 100 m"
      ] },
    { title: "Schwänzeltanz",
      points: [
        "in Form einer 8",
        "Futter mehr als 100 m entfernt",
        "nach oben = Richtung Sonne",
        "30° nach rechts = 30° rechts von der Sonne"
      ] },
    { title: "Wildbienen",
      points: [
        "meist Einzelgänger, kleine Nester",
        "kein Honig, kein Giftstachel",
        "wichtig für Bestäubung",
        "z. B. Hummeln, Holzbienen"
      ] }
  ],
  ameisen: [
    { title: "Ameisenstaat",
      points: [
        "Königin legt Eier",
        "Arbeiterinnen: bauen, Futter holen, Brut pflegen",
        "geflügelte Männchen"
      ] },
    { title: "Leben der Ameisen",
      points: [
        "Insekten: 6 Beine, Kopf, Brust, Hinterleib",
        "Duftspur → Ameisenstraße",
        "tragen ein Vielfaches ihres Gewichts"
      ] },
    { title: "Rote Waldameise",
      points: [
        "Haufen aus Nadeln und Ästchen",
        "frisst Schädlinge → nützlich, geschützt",
        "wehrt sich mit Ameisensäure",
        "„Ameiseneier“ = meist Puppen"
      ] },
    { title: "Ameisen und Blattläuse",
      points: [
        "Blattläuse geben süßen Honigtau",
        "Ameisen beschützen die Läuse"
      ] }
  ]
};
