// Fragen zum Thema "1. Gewässer"
// Fragetypen:
//   mc    – Multiple Choice: options[], answer = Index der richtigen Antwort
//   tf    – Richtig/Falsch: answer = true | false
//   order – Reihenfolge: items[] in der richtigen Reihenfolge (werden gemischt angezeigt)
//   match – Zuordnen: pairs[] = [[Begriff, Erklärung], ...]
//   multi – Mehrfachauswahl: options[], answers[] = Indizes ALLER richtigen Antworten
//   gap   – Lückentext: text mit {Lücken}, extra[] = zusätzliche falsche Wörter zur Auswahl
//   label – Bild beschriften: image = Name aus IMAGES (bilder.js), markers[] = { x, y, answer }
//           (x/y im Bild mit 400 × 260 Einheiten), extra[] = zusätzliche falsche Begriffe zur Auswahl
// Die Millionenshow verwendet nur mc-Fragen (mindestens 15 im Kapitel).
// "info" wird nach dem Beantworten als Erklärung angezeigt.
// Höchstens 10 Fragen pro Thema, kein Inhalt wird doppelt abgefragt.

// Jedes Thema hat eine eigene Farbe (color) und ein Motiv (TOPIC_ICONS in bilder.js).
// Das Folien-Thema „Trinkwasser und Mensch“ ist hier in C und D aufgeteilt.
const TOPICS = [
  { id: "kreislauf", title: "A. Wasserkreislauf", color: "#e8a33d" },
  { id: "fluss", title: "B. Fließ- und stehende Gewässer", color: "#3a9e7e" },
  { id: "trinkwasser", title: "C. Trinkwasser und Kläranlage", color: "#3aa0d8" },
  { id: "flussbau", title: "D. Flüsse verändern", color: "#b5704a" },
  { id: "meer", title: "E. Das Meer", color: "#2d5fa8" },
  { id: "amphibien", title: "F. Amphibien und Fische", color: "#7aa83a" }
];

const QUESTIONS = [
  // ---------- A. Wasserkreislauf ----------
  { topic: "kreislauf", type: "mc", q: "Was liefert die Energie für die Verdunstung im Wasserkreislauf?",
    options: ["Der Wind", "Die Sonne", "Der Mond", "Die Erdwärme"], answer: 1,
    info: "Die Sonne liefert die Energie, damit Wasser verdunsten kann." },
  { topic: "kreislauf", type: "mc", q: "Was verbindet der Wasserkreislauf?",
    options: ["Nur Meere und Flüsse", "Meere, Gewässer, Böden, Gesteine, Land und Atmosphäre", "Nur Wolken und Regen", "Nur das Grundwasser"], answer: 1,
    info: "Der Wasserkreislauf verbindet Meere, Gewässer, Böden, Gesteine, Land und Atmosphäre." },
  { topic: "kreislauf", type: "gap", q: "Ergänze den Satz über die Aggregatzustände.",
    text: "Im Wasserkreislauf ist Wasser {fest} (Eis), {flüssig} oder {gasförmig} (Wasserdampf).",
    extra: ["salzig", "weich"],
    info: "Wasser wechselt zwischen fest (Eis), flüssig und gasförmig (Wasserdampf)." },
  { topic: "kreislauf", type: "label", q: "Beschrifte die Schritte des Wasserkreislaufs.", image: "kreislauf",
    markers: [
      { x: 85, y: 128, answer: "Verdunstung" },
      { x: 250, y: 44, answer: "Kondensation" },
      { x: 248, y: 118, answer: "Niederschlag" },
      { x: 304, y: 208, answer: "Versickerung" }
    ],
    extra: ["Mündung"],
    info: "Verdunstung über dem Meer → Kondensation (Wolken) → Niederschlag → Versickerung im Boden." },
  { topic: "kreislauf", type: "label", q: "Wo ist das Wasser gespeichert? Beschrifte das Bild.", image: "kreislauf",
    markers: [
      { x: 60, y: 222, answer: "Meer" },
      { x: 330, y: 76, answer: "Gletscher" },
      { x: 365, y: 246, answer: "Grundwasser" },
      { x: 210, y: 182, answer: "Fließgewässer" }
    ],
    extra: ["Wolke"],
    info: "Wasser ist in Meeren, Gletschern, Gesteinen und im Grundwasser gespeichert. Grundwasser und Fließgewässer bringen es zurück ins Meer." },

  // ---------- B. Fließ- und stehende Gewässer ----------
  { topic: "fluss", type: "label", q: "Beschrifte die Abschnitte des Fließgewässers.", image: "fluss",
    markers: [
      { x: 60, y: 97, answer: "Quelle" },
      { x: 74, y: 130, answer: "Oberlauf" },
      { x: 138, y: 167, answer: "Mittellauf" },
      { x: 256, y: 207, answer: "Unterlauf" },
      { x: 330, y: 232, answer: "Mündung" }
    ],
    extra: ["Mäander"],
    info: "Quelle → Oberlauf → Mittellauf → Unterlauf → Mündung. Flussabwärts wird der Fluss breiter." },
  { topic: "fluss", type: "match", q: "Ordne die ökologischen Begriffe richtig zu.",
    pairs: [
      ["Biodiversität", "Vielfalt des Lebens"],
      ["Biotische Faktoren", "belebte Umweltfaktoren"],
      ["Abiotische Faktoren", "unbelebte Umweltfaktoren"],
      ["Biozönose", "Lebensgemeinschaft"],
      ["Ökologische Nische", "„Beruf“ einer Art im Ökosystem"]
    ],
    info: "Diese Begriffe brauchst du, um Ökosysteme wie Gewässer zu beschreiben." },
  { topic: "fluss", type: "mc", q: "Welcher dieser Faktoren ist ein ABIOTISCHER Umweltfaktor?",
    options: ["Fressfeinde", "Symbiose", "Licht", "Konkurrenz"], answer: 2,
    info: "Abiotisch = unbelebt. Licht, Temperatur, Sauerstoff oder Strömung sind abiotische Faktoren." },
  { topic: "fluss", type: "match", q: "Wie verändern sich die Umweltfaktoren flussabwärts?",
    pairs: [
      ["Strömung", "nimmt ab"],
      ["Temperatur", "steigt"],
      ["Sauerstoffgehalt", "sinkt"],
      ["Schlammablagerungen", "nehmen zu"]
    ],
    info: "Weil sich die Bedingungen ändern, leben in den verschiedenen Abschnitten unterschiedliche Tierarten." },
  { topic: "fluss", type: "label", q: "Wie sind die Tiere an die Strömung angepasst? Beschrifte das Bild.", image: "anpassung",
    markers: [
      { x: 70, y: 62, answer: "Strömung" },
      { x: 225, y: 112, answer: "Stromlinienförmiger Körper" },
      { x: 92, y: 196, answer: "Flacher Körper" },
      { x: 238, y: 194, answer: "Saugnapf" }
    ],
    extra: ["Ruderschwanz"],
    info: "Ein stromlinienförmiger Körper hat wenig Strömungswiderstand. Mit einem flachen Körper bleibt man am Grund. Mit Saugnäpfen hält man sich an Steinen fest." },
  { topic: "fluss", type: "gap", q: "Biozönose im Fließgewässer: Ergänze.",
    text: "Die Produzenten sind die {Pflanzen}. Die {Tiere} sind Konsumenten und Destruenten.",
    extra: ["Steine"],
    info: "Produzenten sind Pflanzen. Tiere sind Konsumenten bzw. Destruenten." },
  { topic: "fluss", type: "mc", q: "Welche dieser Rollen ist KEINE der genannten ökologischen Nischen im Fließgewässer?",
    options: ["Weidegänger", "Filtrierer", "Zerkleinerer", "Bestäuber"], answer: 3,
    info: "Im Fließgewässer unterscheidet man Weidegänger, Zerkleinerer, Filtrierer und Beutegreifer." },
  { topic: "fluss", type: "mc", q: "Welches ist KEIN stehendes Gewässer?",
    options: ["Tümpel", "Weiher", "Bach", "See"], answer: 2,
    info: "Ein Bach ist ein Fließgewässer. Tümpel, Teich, Weiher, See und Stausee sind stehende Gewässer." },
  { topic: "fluss", type: "mc", q: "Welches stehende Gewässer hat der Mensch gemacht?",
    options: ["Den Stausee", "Den Tümpel", "Den Weiher", "Den See"], answer: 0,
    info: "Stehende Gewässer können natürlich oder künstlich sein. Einen Stausee baut der Mensch mit einer Staumauer." },
  { topic: "fluss", type: "tf", q: "Manche stehenden Gewässer frieren im Winter bis zum Grund zu oder trocknen im Sommer aus.",
    answer: true, info: "Richtig – deshalb gibt es dort ganz unterschiedliche Umweltfaktoren und Lebewesen." },

  // ---------- C. Trinkwasser und Kläranlage ----------
  { topic: "trinkwasser", type: "label", q: "Woher kommt das Trinkwasser und was gefährdet es? Beschrifte das Bild.", image: "trinkwasser",
    markers: [
      { x: 116, y: 100, answer: "Quelle" },
      { x: 110, y: 234, answer: "Grundwasser" },
      { x: 178, y: 92, answer: "Dünger aus der Landwirtschaft" },
      { x: 330, y: 140, answer: "Abwasser aus der Industrie" }
    ],
    extra: ["Gletscher"],
    info: "Trinkwasser kommt aus Grundwasser und Quellen. Dünger, Pflanzenschutzmittel, Keime und Abwasser können es gefährden." },
  { topic: "trinkwasser", type: "label", q: "Beschrifte die Kläranlage.", image: "klaeranlage",
    markers: [
      { x: 40, y: 82, answer: "Abwasser aus dem Haushalt" },
      { x: 112, y: 104, answer: "Mechanische Reinigung" },
      { x: 251, y: 104, answer: "Biologische Reinigung" },
      { x: 250, y: 210, answer: "Schlammbehandlung" },
      { x: 368, y: 175, answer: "Fluss" }
    ],
    extra: ["Wasserkraftwerk"],
    info: "Zuerst die mechanische, dann die biologische Reinigung. Danach fließt das Wasser in den Fluss." },
  { topic: "trinkwasser", type: "mc", q: "Was passiert bei der mechanischen Reinigung?",
    options: ["Grobe Stoffe werden herausgefiltert", "Mikroorganismen fressen den Schmutz", "Aus Schlamm wird Gas", "Das Wasser wird erhitzt"], answer: 0,
    info: "Bei der mechanischen Reinigung werden zuerst die groben Stoffe aus dem Abwasser gefiltert." },
  { topic: "trinkwasser", type: "mc", q: "Wer reinigt das Wasser bei der biologischen Reinigung?",
    options: ["Chemikalien", "Mikroorganismen", "Fische", "Siebe"], answer: 1,
    info: "Bei der biologischen Reinigung reinigen Mikroorganismen das Wasser." },
  { topic: "trinkwasser", type: "tf", q: "Aus dem Klärschlamm entsteht Gas. Damit wird Strom erzeugt.",
    answer: true, info: "Richtig – bei der Schlammbehandlung entsteht Gas, das zur Stromerzeugung genutzt wird." },
  { topic: "trinkwasser", type: "multi", q: "Was gehört zum NATURNAHEN Zustand eines Flusses? Wähle alle richtigen Antworten.",
    options: ["Hohe Wasserqualität", "Lebensraum für Lebewesen", "Transport von Stein und Sand", "Schifffahrtsweg", "Kühlwasser für Kraftwerke"], answers: [0, 1, 2],
    info: "Naturnah: hohe Wasserqualität, Lebensraum, Transport von Stein und Sand. Schifffahrt und Kühlwasser sind Nutzungen durch den Menschen." },
  { topic: "trinkwasser", type: "label", q: "Wie nutzt der Mensch den Fluss? Beschrifte das Bild.", image: "nutzung",
    markers: [
      { x: 80, y: 142, answer: "Schifffahrtsweg" },
      { x: 189, y: 97, answer: "Wasserkraftwerk" },
      { x: 268, y: 150, answer: "Freizeit (Schwimmen)" },
      { x: 343, y: 70, answer: "Kühlwasser für Kraftwerke" }
    ],
    extra: ["Kläranlage"],
    info: "Der Mensch nutzt Flüsse als Schifffahrtsweg, für Strom aus Wasserkraftwerken, in der Freizeit und als Kühlwasser." },

  // ---------- D. Flüsse verändern ----------
  { topic: "flussbau", type: "label", q: "Verbauter oder naturnaher Fluss? Beschrifte das Bild.", image: "flussbau",
    markers: [
      { x: 70, y: 58, answer: "Begradigter Fluss" },
      { x: 157, y: 40, answer: "Staumauer" },
      { x: 161, y: 104, answer: "Fischtreppe" },
      { x: 166, y: 194, answer: "Mäander (Flussschlinge)" },
      { x: 92, y: 196, answer: "Auwald" }
    ],
    extra: ["Kläranlage"],
    info: "Begradigte Flüsse und Staumauern sind Folgen der Verbauung. Fischtreppen, Mäander und Auwälder gehören zu einem naturnahen Fluss." },
  { topic: "flussbau", type: "mc", q: "Seit wann wurden viele Flüsse begradigt und verbaut?",
    options: ["Seit dem Mittelalter", "Seit dem 19. Jahrhundert", "Seit 2000", "Seit der Römerzeit"], answer: 1,
    info: "Seit dem 19. Jahrhundert wurden viele Flüsse begradigt, verbaut und reguliert." },
  { topic: "flussbau", type: "mc", q: "Was war KEIN Grund für die Begradigung der Flüsse?",
    options: ["Hochwasserschutz", "Besiedlung", "Wasserkraft", "Mehr Platz für Fische"], answer: 3,
    info: "Gründe waren Hochwasserschutz, Besiedlung und Wasserkraft. Für Fische gab es danach sogar weniger Platz." },
  { topic: "flussbau", type: "mc", q: "Warum sind Staumauern ein Problem für Fische?",
    options: ["Sie machen das Wasser zu warm", "Sie sind ein Hindernis für die Wanderung", "Sie erzeugen Lärm", "Sie färben das Wasser"], answer: 1,
    info: "Staumauern sind ein Hindernis – Fische können nicht mehr flussauf- oder flussabwärts wandern." },
  { topic: "flussbau", type: "tf", q: "Durch die Verbauung der Flüsse gibt es mehr Lebensräume und mehr Biodiversität.",
    answer: false, info: "Falsch – es gibt weniger Lebensräume und weniger Biodiversität." },
  { topic: "flussbau", type: "mc", q: "Was bedeutet Renaturierung?",
    options: ["Einen Fluss begradigen", "Einen stark veränderten Fluss wieder naturnäher gestalten", "Einen Fluss aufstauen", "Neue Kläranlagen bauen"], answer: 1,
    info: "Renaturierung = einen stark veränderten Fluss wieder naturnäher gestalten, z. B. mit Fischtreppen und Auwäldern." },
  { topic: "flussbau", type: "order", q: "Renaturierung und Hochwasser: Bringe die Folgen in die richtige Reihenfolge.",
    items: ["Mehr Raum für den Fluss", "Wasser breitet sich aus", "Hochwasser wird abgeschwächt", "Weniger Schäden"],
    info: "Mehr Raum → Wasser breitet sich aus → Hochwasser abgeschwächt → weniger Schäden." },
  { topic: "flussbau", type: "multi", q: "Welche Tiere sind typisch für eine Au? Wähle alle richtigen Antworten.",
    options: ["Eisvogel", "Biber", "Huchen", "Hai", "Koralle"], answers: [0, 1, 2],
    info: "Typische Arten einer Au sind Eisvogel, Biber und Huchen." },

  // ---------- E. Das Meer ----------
  { topic: "meer", type: "mc", q: "Warum ist die Biodiversität im Meer so hoch?",
    options: ["Es gibt viele Bereiche mit unterschiedlichen Umweltfaktoren", "Das Wasser ist überall gleich warm", "Es gibt keine Fressfeinde", "Das Wasser ist salzig"], answer: 0,
    info: "Das Meer hat viele Bereiche mit typischen abiotischen Umweltfaktoren – darum leben dort sehr viele Arten." },
  { topic: "meer", type: "mc", q: "Was ist „Beifang“?",
    options: ["Fische, die man im Supermarkt kauft", "Ungewollt gefangene Tiere", "Fische aus Fischzucht", "Futter für Fische"], answer: 1,
    info: "Beifang sind Tiere, die ungewollt mitgefangen werden." },
  { topic: "meer", type: "mc", q: "Warum sind Schleppnetze schädlich?",
    options: ["Sie sind zu teuer", "Sie töten Lebewesen am Boden und zerstören Lebensräume", "Sie fangen zu wenig Fische", "Sie verschmutzen das Wasser mit Öl"], answer: 1,
    info: "Schleppnetze werden über den Meeresboden gezogen und zerstören dort Lebewesen und Lebensräume." },
  { topic: "meer", type: "match", q: "Ordne die Verschmutzung ihrer Folge zu.",
    pairs: [
      ["Ölpest", "vergiftet Tiere und verklebt Kiemen"],
      ["Tourismus", "Verbauung von Küsten und Müll"],
      ["Plastik", "gelangt über die Nahrungskette bis zum Menschen"]
    ],
    info: "Öl, Müll und Plastik verschmutzen die Meere." },
  { topic: "meer", type: "order", q: "Korallenbleiche: Bringe die Folgen in die richtige Reihenfolge.",
    items: ["Wasser wird wärmer und verschmutzt", "Korallen sterben (Korallenbleiche)", "Lebensraum für viele Lebewesen geht verloren", "Biodiversität sinkt"],
    info: "Wärmeres Wasser und Verschmutzung lassen Korallen sterben. Damit geht Lebensraum verloren und die Biodiversität sinkt." },
  { topic: "meer", type: "label", q: "Beschrifte die Gefahren für das Meer.", image: "meer",
    markers: [
      { x: 82, y: 92, answer: "Ölpest" },
      { x: 262, y: 224, answer: "Schleppnetz" },
      { x: 160, y: 146, answer: "Plastik" },
      { x: 90, y: 214, answer: "Korallenbleiche" },
      { x: 370, y: 36, answer: "Verbauung der Küste" }
    ],
    extra: ["Fischtreppe"],
    info: "Überfischung (Schleppnetze) und Verschmutzung (Öl, Plastik, Tourismus) gefährden die Meere. Wärmeres Wasser führt zur Korallenbleiche." },

  // ---------- F. Amphibien und Fische ----------
  { topic: "amphibien", type: "mc", q: "Wie nennt man Amphibien noch?",
    options: ["Kriechtiere", "Lurche", "Weichtiere", "Krebstiere"], answer: 1,
    info: "Amphibien werden auch Lurche genannt." },
  { topic: "amphibien", type: "match", q: "Ordne die Tiere der richtigen Gruppe zu.",
    pairs: [
      ["Kröte", "Froschlurch"],
      ["Unke", "Froschlurch"],
      ["Molch", "Schwanzlurch"],
      ["Salamander", "Schwanzlurch"]
    ],
    info: "Froschlurche: Unken, Kröten, Frösche. Schwanzlurche: Molche, Salamander." },
  { topic: "amphibien", type: "label", q: "Froschlurch oder Schwanzlurch? Beschrifte das Bild.", image: "lurche",
    markers: [
      { x: 110, y: 140, answer: "Froschlurch" },
      { x: 290, y: 168, answer: "Schwanzlurch" },
      { x: 196, y: 180, answer: "Schwanz" },
      { x: 340, y: 192, answer: "4 Beine" }
    ],
    extra: ["Flosse", "Kiemen"],
    info: "Schwanzlurche (Molche, Salamander) haben 4 Beine und einen Schwanz." },
  { topic: "amphibien", type: "label", q: "Beschrifte die Entwicklung des Frosches.", image: "metamorphose",
    markers: [
      { x: 120, y: 77, answer: "Kiemen" },
      { x: 172, y: 124, answer: "Ruderschwanz" },
      { x: 78, y: 140, answer: "Larve (Kaulquappe)" },
      { x: 233, y: 114, answer: "Metamorphose" },
      { x: 305, y: 166, answer: "Erwachsenes Tier" }
    ],
    extra: ["Schuppen"],
    info: "Die Kaulquappe ist die Larve: Sie atmet mit Kiemen und hat einen Ruderschwanz. Durch die Metamorphose (Verwandlung) wird sie zum Frosch." },
  { topic: "amphibien", type: "tf", q: "Erwachsene Amphibien atmen nur mit der Lunge.",
    answer: false, info: "Falsch – erwachsene Amphibien atmen mit Lunge UND Haut." },
  { topic: "amphibien", type: "multi", q: "Wie ist die Haut von Amphibien? Wähle alle richtigen Antworten.",
    options: ["dünn", "feucht", "mit vielen Drüsen", "schuppig", "trocken"], answers: [0, 1, 2],
    info: "Die Haut von Amphibien ist dünn, feucht und hat viele Drüsen." },
  { topic: "amphibien", type: "mc", q: "Womit atmen Fische unter Wasser?",
    options: ["Mit der Lunge", "Mit Kiemen", "Nur mit der Haut", "Mit der Schwimmblase"], answer: 1,
    info: "Fische nehmen mit den Kiemen den im Wasser gelösten Sauerstoff auf." }
];
