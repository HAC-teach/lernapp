// Lernkarten zum Thema "1. Gewässer" (Inhalt aus Gewässer_PPP.pptx)
// LESSONS[topicId] = Liste von Karten: { title, points: [...], tip? }
// Die Karten werden vor dem Quiz zum Durchklicken angezeigt.
// Höchstens 5 Karten pro Thema, nur das Wichtigste in kurzen Stichworten.

const LESSONS = {
  kreislauf: [
    { title: "Der Wasserkreislauf",
      points: [
        "verbindet Meere, Gewässer, Böden, Gesteine, Land und Atmosphäre",
        "3 Zustände: fest (Eis) · flüssig · gasförmig (Wasserdampf)",
        "Energie für die Verdunstung: Sonne"
      ] },
    { title: "Die 4 Schritte",
      points: [
        "Verdunstung",
        "Kondensation → Wolken",
        "Niederschlag",
        "Versickerung"
      ], tip: "Verdunstung → Kondensation → Niederschlag → Versickerung → und wieder von vorn." },
    { title: "Wasserspeicher",
      points: [
        "Meere, Grundwasser, Gletscher, Gesteine",
        "zurück ins Meer: über Grundwasser und Fließgewässer"
      ] }
  ],

  fluss: [
    { title: "Fließgewässer",
      points: [
        "Gewässer = Ökosystem",
        "Quelle → Oberlauf → Mittellauf → Unterlauf → Mündung"
      ] },
    { title: "Wichtige Begriffe",
      points: [
        "Biodiversität = Vielfalt des Lebens",
        "biotisch = belebt (z. B. Symbiose)",
        "abiotisch = unbelebt (z. B. Licht)",
        "Biozönose = Lebensgemeinschaft",
        "ökologische Nische = „Beruf“ einer Art"
      ] },
    { title: "Flussabwärts",
      points: [
        "Strömung nimmt ab",
        "Temperatur steigt",
        "Sauerstoff nimmt ab",
        "Schlamm nimmt zu",
        "→ in jedem Abschnitt andere Tierarten"
      ] },
    { title: "Leben in der Strömung",
      points: [
        "stromlinienförmig → wenig Strömungswiderstand",
        "flacher Körper → bleibt am Grund",
        "Haftorgane, Saugnäpfe → halten an Steinen",
        "Produzenten: Pflanzen · Konsumenten und Destruenten: Tiere",
        "Nischen: Weidegänger, Zerkleinerer, Filtrierer, Beutegreifer"
      ] },
    { title: "Stehende Gewässer",
      points: [
        "Tümpel, Teich, Weiher, See, Stausee",
        "natürlich oder künstlich",
        "manche frieren im Winter bis zum Grund zu",
        "manche trocknen im Sommer aus"
      ] }
  ],

  trinkwasser: [
    { title: "Trinkwasser",
      points: [
        "kommt aus Grundwasser und Quellen",
        "Gefahr aus der Landwirtschaft: Dünger, Pflanzenschutzmittel",
        "Gefahr aus Industrie und Haushalt: Keime, Abwasser"
      ] },
    { title: "Die Kläranlage",
      points: [
        "1. mechanisch: grobe Stoffe herausfiltern",
        "2. biologisch: Mikroorganismen reinigen das Wasser",
        "→ sauberes Wasser fließt in den Fluss",
        "Schlamm → Gas → Strom"
      ] },
    { title: "Flüsse „unter Druck“",
      points: [
        "naturnah: hohe Wasserqualität, Lebensraum, Transport von Stein und Sand",
        "Nutzung: Schifffahrt, Wasserkraft, Freizeit, Kühlwasser"
      ] }
  ],

  flussbau: [
    { title: "Flüsse werden verbaut",
      points: [
        "seit dem 19. Jahrhundert: begradigt, verbaut, reguliert",
        "weniger Mäander (Flussschlingen)",
        "Gründe: Hochwasserschutz, Besiedlung, Wasserkraft"
      ], tip: "Auf den Folien siehst du, wie sich die Donau seit 1570 verändert hat." },
    { title: "Folgen der Verbauung",
      points: [
        "Staumauern = Hindernis für Fische",
        "weniger Lebensräume",
        "weniger Biodiversität"
      ] },
    { title: "Renaturierung",
      points: [
        "= Fluss wieder naturnäher machen",
        "Fischtreppen bauen",
        "Überflutungsflächen und Auwälder erhalten oder zurückholen"
      ] },
    { title: "Was bringt das?",
      points: [
        "mehr Raum → Wasser breitet sich aus → Hochwasser schwächer → weniger Schäden",
        "mehr Arten",
        "typisch für die Au: Eisvogel, Biber, Huchen"
      ] }
  ],

  meer: [
    { title: "Lebensraum Meer",
      points: [
        "viele Bereiche mit eigenen abiotischen Faktoren",
        "→ hohe Biodiversität"
      ] },
    { title: "Überfischung",
      points: [
        "zu viel gefischt",
        "Beifang = ungewollt mitgefangene Tiere",
        "Schleppnetze zerstören den Meeresboden"
      ] },
    { title: "Verschmutzung",
      points: [
        "Ölpest: vergiftet Tiere, verklebt Kiemen",
        "Tourismus: verbaute Küsten, Müll",
        "Plastik → Nahrungskette → Mensch"
      ] },
    { title: "Korallenbleiche",
      points: [
        "wärmeres Wasser + Verschmutzung → Korallen sterben",
        "→ Lebensraum weg → Biodiversität sinkt"
      ] }
  ],

  amphibien: [
    { title: "Amphibien (Lurche)",
      points: [
        "Froschlurche: Unken, Kröten, Frösche",
        "Schwanzlurche: Molche, Salamander (4 Beine + Schwanz)"
      ] },
    { title: "Metamorphose",
      points: [
        "= Verwandlung: Larve → erwachsenes Tier",
        "Larve beim Frosch: Kaulquappe",
        "Larve: Kiemen, Ruderschwanz",
        "erwachsen: Lunge + Haut"
      ] },
    { title: "Die Haut",
      points: [
        "dünn, feucht, viele Drüsen",
        "erwachsene Tiere atmen auch über die Haut"
      ] }
  ]
};
