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
// Die Millionenshow verwendet nur mc-Fragen.
// "info" wird nach dem Beantworten als Erklärung angezeigt.

// Jedes Thema hat eine eigene Farbe (color) und ein Motiv (TOPIC_ICONS in bilder.js).
const TOPICS = [
  { id: "kreislauf", title: "A. Wasserkreislauf", color: "#e8a33d" },
  { id: "fluss", title: "B. Fließ- und stehende Gewässer", color: "#3a9e7e" },
  { id: "trinkwasser", title: "C. Trinkwasser und Mensch", color: "#3aa0d8" },
  { id: "meer", title: "D. Das Meer", color: "#2d5fa8" },
  { id: "amphibien", title: "E. Amphibien und Fische", color: "#7aa83a" }
];

const QUESTIONS = [
  // ---------- A. Wasserkreislauf ----------
  { topic: "kreislauf", type: "mc", q: "Was liefert die Energie für die Verdunstung im Wasserkreislauf?",
    options: ["Der Wind", "Die Sonne", "Der Mond", "Die Erdwärme"], answer: 1,
    info: "Die Sonne liefert die Energie, damit Wasser verdunsten kann." },
  { topic: "kreislauf", type: "order", q: "Bringe die Schritte des Wasserkreislaufs in die richtige Reihenfolge.",
    items: ["Verdunstung", "Kondensation (Wolken)", "Niederschlag", "Versickerung"],
    info: "Verdunstung → Kondensation (Wolken) → Niederschlag → Versickerung → und wieder Verdunstung." },
  { topic: "kreislauf", type: "gap", q: "Ergänze den Satz über die Aggregatzustände.",
    text: "Im Wasserkreislauf ist Wasser {fest} (Eis), {flüssig} oder {gasförmig} (Wasserdampf).",
    extra: ["salzig", "weich"],
    info: "Wasser wechselt zwischen fest (Eis), flüssig und gasförmig (Wasserdampf)." },
  { topic: "kreislauf", type: "tf", q: "Wasser wird auch in Gletschern, im Grundwasser und in Gesteinen gespeichert.",
    answer: true, info: "Richtig – neben den Meeren sind Grundwasser, Gletscher und Gesteine wichtige Wasserspeicher." },
  { topic: "kreislauf", type: "tf", q: "Wolken entstehen durch Versickerung.",
    answer: false, info: "Falsch – Wolken entstehen durch Kondensation von Wasserdampf." },
  { topic: "kreislauf", type: "gap", q: "Ergänze den Lückentext.",
    text: "Die {Sonne} liefert die Energie für die Verdunstung. {Grundwasser} und {Fließgewässer} führen das Wasser wieder zurück ins {Meer}.",
    extra: ["Mond", "Wolken"],
    info: "Grundwasser und Fließgewässer (Bäche, Flüsse) bringen das Wasser zurück ins Meer." },
  { topic: "kreislauf", type: "mc", q: "Was verbindet der Wasserkreislauf?",
    options: ["Nur Meere und Flüsse", "Meere, Gewässer, Böden, Gesteine, Land und Atmosphäre", "Nur Wolken und Regen", "Nur das Grundwasser"], answer: 1,
    info: "Der Wasserkreislauf verbindet Meere, Gewässer, Böden, Gesteine, Land und Atmosphäre." },

  // ---------- B. Fließ- und stehende Gewässer ----------
  { topic: "fluss", type: "order", q: "Bringe die Abschnitte eines Fließgewässers in die richtige Reihenfolge.",
    items: ["Quelle", "Oberlauf", "Mittellauf", "Unterlauf", "Mündung"],
    info: "Quelle → Oberlauf → Mittellauf → Unterlauf → Mündung." },
  { topic: "fluss", type: "match", q: "Ordne die ökologischen Begriffe richtig zu.",
    pairs: [
      ["Biodiversität", "Vielfalt des Lebens"],
      ["Biotische Faktoren", "belebte Umweltfaktoren (z. B. Symbiose)"],
      ["Abiotische Faktoren", "unbelebte Umweltfaktoren (z. B. Licht)"],
      ["Biozönose", "Lebensgemeinschaft"],
      ["Ökologische Nische", "„Beruf“ einer Art im Ökosystem"]
    ],
    info: "Diese Begriffe brauchst du, um Ökosysteme wie Gewässer zu beschreiben." },
  { topic: "fluss", type: "mc", q: "Welcher dieser Faktoren ist ein ABIOTISCHER Umweltfaktor?",
    options: ["Fressfeinde", "Symbiose", "Licht", "Konkurrenz"], answer: 2,
    info: "Abiotisch = unbelebt. Licht, Temperatur, Sauerstoff oder Strömung sind abiotische Faktoren." },
  { topic: "fluss", type: "mc", q: "Was bedeutet „ökologische Nische“?",
    options: ["Ein Versteck unter einem Stein", "Die Rolle („Beruf“) eines Lebewesens im Ökosystem", "Ein besonders kleiner Lebensraum", "Die Anzahl der Arten in einem Gewässer"], answer: 1,
    info: "Die ökologische Nische ist die Rolle, die ein Lebewesen im Ökosystem einnimmt – sozusagen sein „Beruf“." },
  { topic: "fluss", type: "gap", q: "Was passiert flussabwärts? Ergänze.",
    text: "Flussabwärts {steigt} die Temperatur und der Sauerstoffgehalt {nimmt ab}. Die Strömung wird {schwächer}.",
    extra: ["nimmt zu", "stärker"],
    info: "Flussabwärts steigt die Temperatur, der Sauerstoffgehalt nimmt ab und die Strömung nimmt ab." },
  { topic: "fluss", type: "match", q: "Wie verändern sich die Umweltfaktoren flussabwärts?",
    pairs: [
      ["Strömung", "nimmt ab"],
      ["Temperatur", "steigt"],
      ["Sauerstoffgehalt", "sinkt"],
      ["Schlammablagerungen", "nehmen zu"]
    ],
    info: "Weil sich die Bedingungen ändern, leben in den verschiedenen Abschnitten unterschiedliche Tierarten." },
  { topic: "fluss", type: "tf", q: "In allen Abschnitten eines Flusses leben die gleichen Tierarten.",
    answer: false, info: "Falsch – unterschiedliche Abschnitte haben unterschiedliche Umweltfaktoren und damit unterschiedliche Tierarten." },
  { topic: "fluss", type: "match", q: "Ordne die Anpassung ihrem Nutzen zu.",
    pairs: [
      ["Stromlinienförmiger Körper", "geringerer Strömungswiderstand"],
      ["Flacher Körper", "am Gewässergrund halten"],
      ["Haftorgane / Saugnäpfe", "Festhalten an Steinen"]
    ],
    info: "Tiere im Fließgewässer sind an die Strömung angepasst." },
  { topic: "fluss", type: "gap", q: "Biozönose im Fließgewässer: Ergänze.",
    text: "Die Produzenten sind die {Pflanzen}. Die {Tiere} sind Konsumenten und Destruenten.",
    extra: ["Steine"],
    info: "Produzenten sind Pflanzen. Tiere sind Konsumenten bzw. Destruenten." },
  { topic: "fluss", type: "mc", q: "Welche dieser Rollen ist KEINE der genannten ökologischen Nischen im Fließgewässer?",
    options: ["Weidegänger", "Filtrierer", "Zerkleinerer", "Bestäuber"], answer: 3,
    info: "Im Fließgewässer unterscheidet man Weidegänger, Zerkleinerer, Filtrierer und Beutegreifer." },
  { topic: "fluss", type: "tf", q: "Ein Gewässer ist ein Ökosystem.",
    answer: true, info: "Richtig – ein Gewässer mit seinen Lebewesen und Umweltfaktoren bildet ein Ökosystem." },
  { topic: "fluss", type: "mc", q: "Welches ist KEIN stehendes Gewässer?",
    options: ["Tümpel", "Weiher", "Bach", "Stausee"], answer: 2,
    info: "Ein Bach ist ein Fließgewässer. Tümpel, Teich, Weiher, See und Stausee sind stehende Gewässer." },
  { topic: "fluss", type: "tf", q: "Manche stehenden Gewässer frieren im Winter bis zum Grund zu oder trocknen im Sommer aus.",
    answer: true, info: "Richtig – deshalb gibt es dort ganz unterschiedliche Umweltfaktoren und Organismen." },
  { topic: "fluss", type: "tf", q: "Stehende Gewässer sind immer natürlich entstanden.",
    answer: false, info: "Falsch – sie können natürlich oder künstlich (vom Menschen, z. B. Stausee) entstanden sein." },

  // ---------- C. Trinkwasser und Mensch (Nutzung, Renaturierung) ----------
  { topic: "trinkwasser", type: "gap", q: "Trinkwasser: Ergänze den Lückentext.",
    text: "Unser Trinkwasser kommt aus {Grundwasser} und {Quellen}. Gefährlich sind {Dünger} aus der Landwirtschaft und {Abwasser} aus Industrie und Haushalt.",
    extra: ["Meerwasser", "Fischtreppen"],
    info: "Trinkwasser kommt aus Grundwasser und Quellen. Dünger, Pflanzenschutzmittel, Keime und Abwasser gefährden es." },
  { topic: "trinkwasser", type: "mc", q: "Was ist eine Gefahr für das Trinkwasser aus der Landwirtschaft?",
    options: ["Dünger und Pflanzenschutzmittel", "Fischtreppen", "Wasserkraftwerke", "Auwälder"], answer: 0,
    info: "Dünger und Pflanzenschutzmittel, aber auch Keime und Abwasser aus Industrie und Haushalt gefährden das Wasser." },
  { topic: "trinkwasser", type: "order", q: "Bringe die Reinigungsschritte in der Kläranlage in die richtige Reihenfolge.",
    items: ["Mechanische Reinigung", "Biologische Reinigung", "Wasser fließt in den Fluss"],
    info: "Zuerst werden grobe Stoffe herausgefiltert, dann reinigen Mikroorganismen das Wasser, danach kommt es in den Fluss." },
  { topic: "trinkwasser", type: "match", q: "Ordne die Schritte der Kläranlage richtig zu.",
    pairs: [
      ["Mechanische Reinigung", "grobe Stoffe werden herausgefiltert"],
      ["Biologische Reinigung", "Mikroorganismen reinigen das Wasser"],
      ["Schlammbehandlung", "es entsteht Gas zur Stromerzeugung"]
    ],
    info: "Eine Kläranlage reinigt Abwasser in mehreren Schritten." },
  { topic: "trinkwasser", type: "tf", q: "Bei der biologischen Reinigung reinigen Chemikalien das Wasser.",
    answer: false, info: "Falsch – bei der biologischen Reinigung reinigen Mikroorganismen das Wasser." },
  { topic: "trinkwasser", type: "match", q: "Naturnaher Zustand oder Nutzung durch den Menschen? Ordne zu.",
    pairs: [
      ["Hohe Wasserqualität für Organismen", "naturnaher Zustand"],
      ["Lebensraum für Organismen", "naturnaher Zustand"],
      ["Transport von Stein und Sand", "naturnaher Zustand"],
      ["Schifffahrtsweg", "Nutzung durch den Menschen"],
      ["Stromgewinnung in Wasserkraftwerken", "Nutzung durch den Menschen"],
      ["Kühlwasser für Kraftwerke", "Nutzung durch den Menschen"]
    ],
    info: "Ein Fluss hat einen naturnahen Zustand – der Mensch nutzt ihn aber auch und setzt ihn so „unter Druck“." },
  { topic: "trinkwasser", type: "tf", q: "Flusswasser wird auch als Kühlwasser für Industrie und Wärmekraftwerke genutzt.",
    answer: true, info: "Richtig – das ist eine der Nutzungen, die Gewässer „unter Druck“ setzen." },
  { topic: "trinkwasser", type: "mc", q: "Was sind Mäander?",
    options: ["Fischtreppen", "Flussschlingen", "Staumauern", "Kläranlagen"], answer: 1,
    info: "Mäander sind Flussschlingen. Durch Begradigung gibt es heute viel weniger davon." },
  { topic: "trinkwasser", type: "mc", q: "Seit wann wurden viele Flüsse begradigt und verbaut?",
    options: ["Seit dem Mittelalter", "Seit dem 19. Jahrhundert", "Seit 2000", "Seit der Römerzeit"], answer: 1,
    info: "Seit dem 19. Jahrhundert wurden viele Flüsse begradigt, verbaut und reguliert." },
  { topic: "trinkwasser", type: "mc", q: "Warum sind Staumauern ein Problem für Fische?",
    options: ["Sie machen das Wasser zu warm", "Sie sind ein Hindernis für die Wanderung", "Sie erzeugen Lärm", "Sie färben das Wasser"], answer: 1,
    info: "Staumauern sind ein Hindernis – Fische können nicht mehr flussauf- oder flussabwärts wandern." },
  { topic: "trinkwasser", type: "tf", q: "Gründe für die Flussbegradigung waren Hochwasserschutz, Besiedlung und Wasserkraft.",
    answer: true, info: "Richtig. Folgen waren aber weniger Lebensräume und weniger Biodiversität." },
  { topic: "trinkwasser", type: "mc", q: "Was bedeutet Renaturierung?",
    options: ["Einen Fluss begradigen", "Einen stark veränderten Fluss wieder naturnäher gestalten", "Einen Fluss aufstauen", "Neue Kläranlagen bauen"], answer: 1,
    info: "Renaturierung = einen stark veränderten Fluss wieder naturnäher gestalten." },
  { topic: "trinkwasser", type: "gap", q: "Maßnahmen der Renaturierung: Ergänze.",
    text: "Bei der Renaturierung werden {Fischtreppen} gebaut. {Überflutungsflächen} und {Auwälder} werden erhalten oder wiederhergestellt.",
    extra: ["Staumauern", "Kläranlagen"],
    info: "Fischtreppen bauen und Überflutungsflächen/Auwälder erhalten oder wiederherstellen." },
  { topic: "trinkwasser", type: "order", q: "Renaturierung und Hochwasser: Bringe die Folgen in die richtige Reihenfolge.",
    items: ["Mehr Raum für den Fluss", "Wasser breitet sich aus", "Hochwasser wird abgeschwächt", "Weniger Schäden"],
    info: "Mehr Raum → Wasser breitet sich aus → Hochwasser abgeschwächt → weniger Schäden." },

  // ---------- D. Das Meer ----------
  { topic: "meer", type: "tf", q: "Das Meer hat mehrere Bereiche mit typischen abiotischen Umweltfaktoren – deshalb ist die Biodiversität hoch.",
    answer: true, info: "Richtig – die vielen unterschiedlichen Lebensräume führen zu hoher Biodiversität." },
  { topic: "meer", type: "mc", q: "Was ist „Beifang“?",
    options: ["Fische, die man im Supermarkt kauft", "Ungewollt gefangene Tiere", "Fische aus Fischzucht", "Futter für Fische"], answer: 1,
    info: "Beifang sind Tiere, die ungewollt mitgefangen werden." },
  { topic: "meer", type: "mc", q: "Warum sind Schleppnetze schädlich?",
    options: ["Sie sind zu teuer", "Sie töten Lebewesen am Boden und zerstören Lebensräume", "Sie fangen zu wenig Fische", "Sie verschmutzen das Wasser mit Öl"], answer: 1,
    info: "Schleppnetze werden über den Meeresboden gezogen und zerstören dort Lebewesen und Lebensräume." },
  { topic: "meer", type: "match", q: "Ordne die Gefahr ihrer Folge zu.",
    pairs: [
      ["Ölpest", "vergiftet und verklebt Kiemen"],
      ["Tourismus", "Verbauung von Küsten und Müll"],
      ["Plastik", "gelangt über die Nahrungskette bis zum Menschen"],
      ["Überfischung", "zu viel gefischt und Beifang"]
    ],
    info: "Überfischung und Verschmutzung sind die großen Gefahren für die Meere." },
  { topic: "meer", type: "order", q: "Korallenbleiche: Bringe die Folgen in die richtige Reihenfolge.",
    items: ["Wasser wird wärmer und verschmutzt", "Korallen sterben (Korallenbleiche)", "Lebensraum für viele Organismen geht verloren", "Biodiversität sinkt"],
    info: "Erhöhte Temperatur im Wasser und Verschmutzung lassen Korallen sterben. Damit geht Lebensraum verloren und die Biodiversität sinkt." },
  { topic: "meer", type: "tf", q: "Wenn Korallen sterben, steigt die Biodiversität.",
    answer: false, info: "Falsch – viele Organismen verlieren ihren Lebensraum, die Biodiversität sinkt." },
  { topic: "meer", type: "gap", q: "Verschmutzung der Meere: Ergänze.",
    text: "Bei einer {Ölpest} werden Tiere vergiftet und ihre Kiemen verkleben. {Plastik} gelangt über die {Nahrungskette} bis zum Menschen.",
    extra: ["Fischtreppe", "Strömung"],
    info: "Öl vergiftet Tiere und verklebt Kiemen. Kleine Plastikteile werden gefressen und wandern die Nahrungskette hinauf." },

  // ---------- E. Amphibien und Fische ----------
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
  { topic: "amphibien", type: "mc", q: "Welches Tier ist ein Schwanzlurch?",
    options: ["Unke", "Kröte", "Molch", "Frosch"], answer: 2,
    info: "Molche und Salamander sind Schwanzlurche." },
  { topic: "amphibien", type: "mc", q: "Wie heißt die Verwandlung von der Larve zum erwachsenen Tier?",
    options: ["Mutation", "Metamorphose", "Fotosynthese", "Evolution"], answer: 1,
    info: "Metamorphose = Verwandlung, z. B. von der Kaulquappe zum Frosch." },
  { topic: "amphibien", type: "gap", q: "Die Entwicklung des Frosches: Ergänze.",
    text: "Die Larve des Frosches heißt {Kaulquappe}. Sie atmet mit {Kiemen}. Durch die {Metamorphose} wird sie zum Frosch, der mit {Lunge} und Haut atmet.",
    extra: ["Raupe", "Schuppen"],
    info: "Die Kaulquappe atmet mit Kiemen. Nach der Metamorphose atmet der Frosch mit Lunge und Haut." },
  { topic: "amphibien", type: "match", q: "Larve oder erwachsenes Tier? Ordne zu.",
    pairs: [
      ["Atmung mit Kiemen", "Larve"],
      ["Ruderschwanz", "Larve"],
      ["Atmung mit Lunge und Haut", "erwachsenes Tier"],
      ["4 Beine", "erwachsenes Tier"]
    ],
    info: "Larven atmen mit Kiemen und haben einen Ruderschwanz; erwachsene Tiere atmen mit Lunge und Haut." },
  { topic: "amphibien", type: "tf", q: "Die Haut von Amphibien ist dick, trocken und schuppig.",
    answer: false, info: "Falsch – sie ist dünn, feucht und hat viele Drüsen. Über die feuchte Haut atmen sie auch." },
  { topic: "amphibien", type: "tf", q: "Erwachsene Amphibien atmen auch über ihre Haut – deshalb muss sie immer feucht sein.",
    answer: true, info: "Richtig – erwachsene Amphibien atmen mit Lunge und Haut." },
  { topic: "amphibien", type: "mc", q: "Womit atmen Fische unter Wasser?",
    options: ["Mit der Lunge", "Mit Kiemen", "Nur mit der Haut", "Mit der Schwimmblase"], answer: 1,
    info: "Fische nehmen mit den Kiemen den im Wasser gelösten Sauerstoff auf." },

  // ---------- Beschriftungsaufgaben (Bilder in bilder.js) ----------
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
    info: "Wasser ist in Meeren, Gletschern und im Grundwasser gespeichert. Grundwasser und Fließgewässer bringen es zurück ins Meer." },
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
  { topic: "trinkwasser", type: "label", q: "Beschrifte die Kläranlage.", image: "klaeranlage",
    markers: [
      { x: 40, y: 82, answer: "Abwasser aus dem Haushalt" },
      { x: 112, y: 104, answer: "Mechanische Reinigung" },
      { x: 251, y: 104, answer: "Biologische Reinigung" },
      { x: 250, y: 210, answer: "Schlammbehandlung" },
      { x: 368, y: 175, answer: "Fluss" }
    ],
    extra: ["Wasserkraftwerk"],
    info: "Zuerst werden grobe Stoffe herausgefiltert, dann reinigen Mikroorganismen das Wasser. Danach fließt es in den Fluss. Aus dem Schlamm entsteht Gas für Strom." },
  { topic: "trinkwasser", type: "label", q: "Verbauter oder naturnaher Fluss? Beschrifte das Bild.", image: "flussbau",
    markers: [
      { x: 70, y: 58, answer: "Begradigter Fluss" },
      { x: 157, y: 40, answer: "Staumauer" },
      { x: 161, y: 104, answer: "Fischtreppe" },
      { x: 166, y: 194, answer: "Mäander (Flussschlinge)" },
      { x: 92, y: 196, answer: "Auwald" }
    ],
    extra: ["Kläranlage"],
    info: "Begradigte Flüsse und Staumauern sind Folgen der Verbauung. Fischtreppen, Mäander und Auwälder gehören zu einem naturnahen Fluss." },
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
  { topic: "amphibien", type: "label", q: "Beschrifte die Entwicklung des Frosches.", image: "metamorphose",
    markers: [
      { x: 120, y: 77, answer: "Kiemen" },
      { x: 172, y: 124, answer: "Ruderschwanz" },
      { x: 78, y: 140, answer: "Larve (Kaulquappe)" },
      { x: 233, y: 114, answer: "Metamorphose" },
      { x: 305, y: 166, answer: "Erwachsenes Tier" }
    ],
    extra: ["Schuppen"],
    info: "Die Kaulquappe ist die Larve: Sie atmet mit Kiemen und hat einen Ruderschwanz. Durch die Metamorphose wird sie zum erwachsenen Frosch." },
  { topic: "fluss", type: "label", q: "Wie sind die Tiere an die Strömung angepasst? Beschrifte das Bild.", image: "anpassung",
    markers: [
      { x: 70, y: 62, answer: "Strömung" },
      { x: 225, y: 112, answer: "Stromlinienförmiger Körper" },
      { x: 92, y: 196, answer: "Flacher Körper" },
      { x: 238, y: 194, answer: "Saugnapf" }
    ],
    extra: ["Ruderschwanz"],
    info: "Ein stromlinienförmiger Körper hat wenig Strömungswiderstand. Mit einem flachen Körper bleibt man am Grund. Mit Saugnäpfen hält man sich an Steinen fest." },
  { topic: "trinkwasser", type: "label", q: "Woher kommt das Trinkwasser und was gefährdet es? Beschrifte das Bild.", image: "trinkwasser",
    markers: [
      { x: 116, y: 100, answer: "Quelle" },
      { x: 110, y: 234, answer: "Grundwasser" },
      { x: 178, y: 92, answer: "Dünger aus der Landwirtschaft" },
      { x: 330, y: 140, answer: "Abwasser aus der Industrie" }
    ],
    extra: ["Gletscher"],
    info: "Trinkwasser kommt aus Grundwasser und Quellen. Dünger und Abwasser können ins Grundwasser gelangen." },
  { topic: "trinkwasser", type: "label", q: "Wie nutzt der Mensch den Fluss? Beschrifte das Bild.", image: "nutzung",
    markers: [
      { x: 80, y: 142, answer: "Schifffahrtsweg" },
      { x: 189, y: 97, answer: "Wasserkraftwerk" },
      { x: 268, y: 150, answer: "Freizeit (Schwimmen)" },
      { x: 343, y: 70, answer: "Kühlwasser für Kraftwerke" }
    ],
    extra: ["Kläranlage"],
    info: "Der Mensch nutzt Flüsse als Schifffahrtsweg, für Strom aus Wasserkraftwerken, in der Freizeit und als Kühlwasser." },
  { topic: "amphibien", type: "label", q: "Froschlurch oder Schwanzlurch? Beschrifte das Bild.", image: "lurche",
    markers: [
      { x: 110, y: 140, answer: "Froschlurch" },
      { x: 290, y: 168, answer: "Schwanzlurch" },
      { x: 196, y: 180, answer: "Schwanz" },
      { x: 340, y: 192, answer: "4 Beine" }
    ],
    extra: ["Flosse", "Kiemen"],
    info: "Froschlurche: Unken, Kröten, Frösche. Schwanzlurche (Molche, Salamander) haben 4 Beine und einen Schwanz." },

  // ---------- Mehrfachauswahl ----------
  { topic: "kreislauf", type: "multi", q: "Wo ist Wasser gespeichert? Wähle alle richtigen Antworten.",
    options: ["In Meeren", "Im Grundwasser", "In Gletschern", "In Gesteinen", "In der Sonne"], answers: [0, 1, 2, 3],
    info: "Wasser ist in Meeren, im Grundwasser, in Gletschern und in Gesteinen gespeichert." },
  { topic: "fluss", type: "multi", q: "Welche sind stehende Gewässer? Wähle alle richtigen Antworten.",
    options: ["Tümpel", "Bach", "Teich", "Weiher", "Fluss", "Stausee"], answers: [0, 2, 3, 5],
    info: "Stehende Gewässer: Tümpel, Teich, Weiher, See und Stausee. Bach und Fluss sind Fließgewässer." },
  { topic: "fluss", type: "multi", q: "Welche Faktoren sind ABIOTISCH (unbelebt)? Wähle alle richtigen Antworten.",
    options: ["Licht", "Temperatur", "Strömung", "Symbiose", "Sauerstoffgehalt"], answers: [0, 1, 2, 4],
    info: "Abiotisch = unbelebt, z. B. Licht, Temperatur, Strömung und Sauerstoff. Symbiose ist ein biotischer Faktor." },
  { topic: "trinkwasser", type: "multi", q: "Wie nutzt der Mensch Flüsse? Wähle alle richtigen Antworten.",
    options: ["Als Schifffahrtsweg", "Für Strom aus Wasserkraftwerken", "Für die Freizeit", "Als Kühlwasser", "Als Wüste"], answers: [0, 1, 2, 3],
    info: "Nutzung durch den Menschen: Schifffahrt, Stromgewinnung, Freizeit und Kühlwasser für Industrie und Wärmekraftwerke." },
  { topic: "trinkwasser", type: "multi", q: "Welche Tiere sind typisch für eine Au? Wähle alle richtigen Antworten.",
    options: ["Eisvogel", "Biber", "Huchen", "Hai", "Koralle"], answers: [0, 1, 2],
    info: "Typische Arten einer Au sind Eisvogel, Biber und Huchen." },
  { topic: "meer", type: "multi", q: "Was gefährdet die Meere? Wähle alle richtigen Antworten.",
    options: ["Überfischung", "Ölpest", "Plastik", "Verbauung der Küsten", "Fischtreppen"], answers: [0, 1, 2, 3],
    info: "Überfischung und Verschmutzung (Öl, Plastik, Tourismus) sind Gefahren für die Meere." },
  { topic: "amphibien", type: "multi", q: "Welche Tiere sind Froschlurche? Wähle alle richtigen Antworten.",
    options: ["Unke", "Kröte", "Frosch", "Molch", "Salamander"], answers: [0, 1, 2],
    info: "Froschlurche: Unken, Kröten, Frösche. Molche und Salamander sind Schwanzlurche." },
  { topic: "amphibien", type: "multi", q: "Wie ist die Haut von Amphibien? Wähle alle richtigen Antworten.",
    options: ["dünn", "feucht", "mit vielen Drüsen", "schuppig", "trocken"], answers: [0, 1, 2],
    info: "Die Haut von Amphibien ist dünn, feucht und hat viele Drüsen." }
];
