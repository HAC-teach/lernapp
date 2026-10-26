// Lernkarten zum Thema "4. Ökosystem Wald" (Inhalt aus Der Wald_PPP.pptx)
// LESSONS[topicId] = Liste von Karten: { title, points: [...], tip? }
// Die Karten werden vor dem Quiz zum Durchklicken angezeigt.
// Höchstens 5 Karten pro Thema, nur das Wichtigste in kurzen Stichworten.

const LESSONS = {
  oekologie: [
    { title: "Ökologie",
      points: [
        "Wissenschaft von den Umweltfaktoren",
        "Lebensräume wie Wald, Wiese, Meer = Ökosysteme"
      ] },
    { title: "Belebt oder unbelebt?",
      points: [
        "belebt (mit Lebewesen): Tiere, Pflanzen, Pilze",
        "unbelebt (ohne Lebewesen): Wasser, Licht, Temperatur",
        "beide beeinflussen sich: Wasser + Licht → Pflanzen"
      ] },
    { title: "Grundbegriffe",
      points: [
        "Biotop: unbelebte Umwelt, Lebensraum",
        "Biozönose: Lebensgemeinschaft (alle Lebewesen)",
        "Ökosystem: Biotop + Biozönose"
      ], tip: "Ökosystem = unbelebte Umwelt + Lebensgemeinschaft." },
    { title: "Nahrungskette",
      points: [
        "ein Lebewesen wird vom nächsten gefressen",
        "Pflanze → Pflanzenfresser → Fleischfresser",
        "viele Nahrungsketten = Nahrungsnetz"
      ], tip: "Der Pfeil → bedeutet „wird gefressen von“." },
    { title: "Erzeuger, Verbraucher, Zersetzer",
      points: [
        "Erzeuger (Produzenten): stellen Nährstoffe selbst her – Pflanzen (Fotosynthese)",
        "Verbraucher (Konsumenten): fressen lebende Lebewesen",
        "Zersetzer (Destruenten): fressen tote Lebewesen – z. B. Schimmelpilze"
      ] }
  ],
  aufgaben: [
    { title: "Lebensraum und Luft",
      points: [
        "Lebensraum für Tiere, Pflanzen, Pilze",
        "Pflanzen erzeugen Sauerstoff (Fotosynthese)",
        "Blätter und Nadeln filtern Staub und Ruß"
      ], tip: "6 Aufgaben: Lebensraum, Luft, Wasser, Schutz, Holz, Erholung." },
    { title: "Wasserspeicher",
      points: [
        "Moos, Humus und Wurzeln speichern Wasser",
        "→ kein Hochwasser",
        "Waldboden reinigt Wasser → Trinkwasser"
      ] },
    { title: "Schutz",
      points: [
        "Wurzeln: Schutz vor Lawinen, Steinschlag, Muren",
        "Blätter dämpfen Schall, bremsen Wind",
        "Wald gibt Schatten"
      ] },
    { title: "Holz und Erholung",
      points: [
        "Holz: Brennholz, Bauholz, Papier, Musikinstrumente",
        "Erholung: Urlaub, Wandern",
        "keinen Lärm machen, keinen Abfall liegen lassen"
      ] }
  ],
  waldtypen: [
    { title: "Typen von Wäldern",
      points: [
        "Laubwald: nur Laubbäume",
        "Nadelwald: nur Nadelbäume",
        "Mischwald: Laub- und Nadelbäume",
        "Name nennt oft die häufigsten Arten, z. B. Rotbuchen-Tannenwald"
      ] },
    { title: "Urwald und Forst",
      points: [
        "Urwald: vom Menschen kaum beeinflusst",
        "Forst: vom Menschen gepflanzt und bewirtschaftet",
        "naturnah: gefällte Bäume immer wieder nachpflanzen"
      ] },
    { title: "Monokultur",
      points: [
        "nur eine Pflanzenart – im Wald meist Fichte",
        "Vorteil: Bäume gleich alt → leichte, billige Ernte"
      ] },
    { title: "Nachteile von Monokulturen",
      points: [
        "weniger Lebensraum für Pflanzen, Tiere, Pilze",
        "Schädlinge vermehren sich massenhaft (Borkenkäfer)",
        "mehr Insektenvernichtungsmittel",
        "Stürme entwurzeln Bäume (Windwurf)",
        "wenig Schutz vor Lawinen und Muren"
      ] }
  ],
  stockwerke: [
    { title: "Stockwerke des Waldes",
      points: [
        "Baumschicht (ganz oben)",
        "Strauchschicht",
        "Krautschicht",
        "Moosschicht",
        "Boden- und Wurzelschicht (ganz unten)"
      ], tip: "Viele Mischwälder haben diese Stockwerke." },
    { title: "Nahrungskreislauf im Wald",
      points: [
        "Produzenten (Erzeuger): Bäume, Sträucher",
        "Konsumenten (Verbraucher): fressen andere",
        "Destruenten (Zersetzer): Pilze, Regenwürmer"
      ] },
    { title: "Wer frisst wen?",
      points: [
        "Erstverbraucher: Eichhörnchen",
        "Zweitverbraucher: Marder",
        "Endverbraucher: Uhu"
      ], tip: "Baum → Eichhörnchen → Marder → Uhu (→ = wird gefressen von)." }
  ],
  einfluesse: [
    { title: "Klima in Österreich (Sommer)",
      points: [
        "Westen: kühl und feucht (Atlantik)",
        "Osten: heiß und trocken (kontinental)",
        "Süden: warm und feucht (Mittelmeer)"
      ] },
    { title: "Berge",
      points: [
        "je höher, desto kälter",
        "Schnee bleibt oben länger",
        "Nordseite der Alpen: mehr Regen",
        "Südseite: mehr Sonne"
      ] },
    { title: "Boden",
      points: [
        "entsteht aus Gestein und Resten von Lebewesen",
        "Reste werden von Zersetzern abgebaut",
        "andere Bodenart → andere Pflanzen"
      ] },
    { title: "Mensch",
      points: [
        "Wälder gerodet, Pestizide und Herbizide, Böden gepflügt",
        "Platz für Landwirtschaft und Siedlungen",
        "Kulturlandschaft: vom Menschen verändert",
        "Naturlandschaft: nicht vom Menschen beeinflusst – verschwindet"
      ] }
  ],
  regenwald: [
    { title: "Tropischer Regenwald",
      points: [
        "sehr artenreich",
        "das ganze Jahr warm und feucht",
        "keine Jahreszeiten → keine Jahresringe",
        "viele Stockwerke"
      ] },
    { title: "Brettwurzeln",
      points: [
        "dünne Bodenschicht",
        "Wurzeln verzweigen sich nicht im Boden",
        "→ breite Brettwurzeln halten den Baum"
      ] },
    { title: "Gefahr durch den Menschen",
      points: [
        "Abholzung → Lebensraum geht verloren",
        "Landwirtschaft",
        "Monokulturen, z. B. Bananen, Ölpalmen"
      ] }
  ]
};
