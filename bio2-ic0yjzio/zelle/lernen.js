// Lernkarten zum Thema "2. Die Zelle" (Inhalt aus Zelle_PPP.pptx)
// LESSONS[topicId] = Liste von Karten: { title, points: [...], tip? }
// Die Karten werden vor dem Quiz zum Durchklicken angezeigt.

const LESSONS = {
  zellen: [
    { title: "Wie klein sind Zellen?",
      points: [
        "Mach mit dem Kugelschreiber einen Punkt auf deinen Finger: Der Punkt bedeckt über 1000 Hautzellen!",
        "Zellen sind so klein, dass man sie nur mit einem Mikroskop sehen kann.",
        "Der menschliche Körper besteht aus zirka 100 Billionen Zellen."
      ] },
    { title: "Alles Leben besteht aus Zellen",
      points: [
        "Alle Lebewesen sind aus kleinsten Einheiten aufgebaut, den Zellen.",
        "Zelle = kleinste lebende Einheit eines Organismus.",
        "Zellen sind mikroskopisch klein und zeigen alle Merkmale des Lebens.",
        "Mehrzeller bestehen aus vielen Zellen, Einzeller nur aus einer einzigen Zelle."
      ] },
    { title: "Kennzeichen des Lebens",
      points: [
        "Stoffwechsel",
        "Wachstum",
        "Bewegung",
        "Reizbarkeit",
        "Fortpflanzung",
        "Aufbau aus Zellen"
      ], tip: "Ein Lebewesen zeigt alle diese Kennzeichen – schon eine einzelne Zelle!" },
    { title: "Tierzelle und Pflanzenzelle",
      points: [
        "Man unterscheidet tierische und pflanzliche Zellen.",
        "Sie haben größtenteils dieselben Organellen und ähnliche Funktionen.",
        "In manchen Dingen unterscheiden sie sich."
      ] },
    { title: "Die wichtigsten Bestandteile",
      points: [
        "Zellmembran: dünnes Häutchen zur Abgrenzung der Zelle.",
        "Zellwand: stabile Wand aus Zellulose (nur bei Pflanzen!).",
        "Zellplasma: zähflüssige Grundsubstanz der Zelle. Alle Zellorganellen sind darin eingebettet.",
        "Zellpore: Austausch von Stoffen."
      ] },
    { title: "Die wichtigsten Zellorganellen",
      points: [
        "Zellorganellen sind kleine „Organe“ einer Zelle. Sie liegen im Zellplasma.",
        "Zellkern: enthält die Erbinformation (DNA) und steuert die Lebensvorgänge.",
        "Mitochondrien: die „Kraftwerke“ der Zelle – sie gewinnen Energie.",
        "Ribosomen: erzeugen Eiweiß (Proteine).",
        "Netzartige Kanäle: Transport und Verteilung von Stoffen."
      ] },
    { title: "Vakuolen und Chloroplasten",
      points: [
        "Vakuolen: gefüllt mit Zellsaft, lagern unterschiedliche Stoffe.",
        "Chloroplasten: wichtig für die Fotosynthese, enthalten den grünen Farbstoff Chlorophyll.",
        "Chloroplasten gibt es nur in pflanzlichen Zellen!"
      ] },
    { title: "Pflanzenzellen",
      points: [
        "Pflanzenzellen sind die kleinsten lebenden Einheiten aller Pflanzen.",
        "Sie haben eine große Vakuole.",
        "Sie haben Chloroplasten.",
        "Sie haben eine Zellwand."
      ], tip: "Merke: Zellwand, Chloroplasten und große Vakuole – daran erkennst du die Pflanzenzelle." },
    { title: "Einzeller",
      points: [
        "Einzeller sind Lebewesen, die nur aus einer einzigen Zelle bestehen.",
        "Sie erfüllen alle Kennzeichen des Lebens.",
        "Es gibt tierische und pflanzliche Einzeller.",
        "Sie vermehren sich ungeschlechtlich durch Zellteilung.",
        "Die Nachkommen sind Klone der Mutterzelle – Einzeller sind darum praktisch unsterblich."
      ] },
    { title: "Die Stufen des Lebens",
      points: [
        "Organellen: Bestandteile von Zellen mit spezieller Funktion, z. B. Chloroplasten.",
        "Zelle: kleinste lebensfähige Einheit von Pflanze, Tier und Mensch.",
        "Gewebe: Verband von Zellen gleicher Gestalt und Leistung.",
        "Organ: Teilsystem aus verschiedenen Geweben mit spezieller Funktion, z. B. die Lunge.",
        "Organismus: einzelnes Lebewesen, z. B. Mensch, Tier oder Pflanze.",
        "Ökosystem: Lebensgemeinschaft und Lebensraum zusammen."
      ], tip: "Vom Kleinsten zum Größten: Organellen → Zelle → Gewebe → Organ → Organismus → Ökosystem." }
  ],

  // B. Mikroskope: keine Folien mit Inhalt – übliches Schulwissen zum Lichtmikroskop
  mikroskop: [
    { title: "Das Mikroskop",
      points: [
        "Zellen sind zu klein für unsere Augen. Mit einem Mikroskop kann man sie sehen.",
        "In der Schule verwendet man ein Lichtmikroskop.",
        "Das Licht scheint von unten durch das Objekt. Linsen vergrößern das Bild."
      ] },
    { title: "Die Teile des Mikroskops (oben)",
      points: [
        "Okular: die Linse ganz oben, in die du hineinschaust.",
        "Tubus: das Rohr zwischen Okular und Objektiven.",
        "Objektivrevolver: Daran sitzen die Objektive. Durch Drehen wechselst du die Vergrößerung.",
        "Objektiv: die Linse knapp über dem Objekt.",
        "Objekttisch mit Klemmen: Hier wird der Objektträger festgemacht."
      ] },
    { title: "Die Teile des Mikroskops (unten)",
      points: [
        "Grobtrieb: großes Rad zum groben Scharfstellen.",
        "Feintrieb: kleines Rad zum genauen Scharfstellen.",
        "Blende: regelt, wie viel Licht durchkommt.",
        "Lichtquelle: beleuchtet das Objekt von unten.",
        "Stativ und Fuß: tragen das Mikroskop und machen es standfest."
      ] },
    { title: "Wie stark wird vergrößert?",
      points: [
        "Zuerst vergrößert das Objektiv, dann das Okular noch einmal.",
        "Gesamtvergrößerung = Okular × Objektiv.",
        "Beispiel: Okular 10-fach, Objektiv 40-fach → 10 × 40 = 400-fach.",
        "Das Bild steht auf dem Kopf und ist seitenverkehrt."
      ], tip: "Schiebst du den Objektträger nach links, wandert das Bild nach rechts." },
    { title: "Das Präparat",
      points: [
        "Das Objekt muss dünn und durchsichtig sein, damit Licht durchscheint.",
        "Es liegt auf einem Objektträger aus Glas.",
        "Bei einem Nasspräparat kommt ein Wassertropfen dazu.",
        "Darüber legt man ein dünnes Deckglas."
      ] },
    { title: "So mikroskopierst du richtig",
      points: [
        "1. Mikroskop mit beiden Händen tragen (Stativ und Fuß) und hinstellen.",
        "2. Licht einschalten und das kleinste Objektiv einstellen.",
        "3. Objektträger auf den Objekttisch legen und mit den Klemmen festmachen.",
        "4. Von der Seite schauen und das Objektiv mit dem Grobtrieb nahe ans Präparat bringen.",
        "5. Ins Okular schauen und mit dem Grobtrieb langsam scharf stellen.",
        "6. Mit dem Feintrieb genau scharf stellen. Erst dann stärker vergrößern."
      ], tip: "Bei starker Vergrößerung nur noch den Feintrieb verwenden!" },
    { title: "Achtung, wertvolles Gerät!",
      points: [
        "Linsen nie mit den Fingern berühren.",
        "Das Objektiv darf nie auf das Präparat stoßen.",
        "Nach dem Arbeiten: kleinstes Objektiv einstellen, Licht ausschalten, Schutzhülle darüber geben."
      ] }
  ],

  mikro: [
    { title: "Mikroorganismen",
      points: [
        "Mikroorganismen sind mikroskopisch kleine Lebewesen.",
        "Sie bestehen nur aus einer einzigen Zelle.",
        "Manche leben in Symbiose mit dem Menschen – also mit ihm zusammen, zum gegenseitigen Nutzen.",
        "Zwei Gruppen: 1) Einzeller und 2) Bakterien."
      ] },
    { title: "1) Einzeller",
      points: [
        "Beispiele für Einzeller: Pantoffeltierchen, Augentierchen und der Erreger von Malaria.",
        "Der Erreger von Malaria wird durch den Stich einer Stechmücke übertragen."
      ] },
    { title: "2) Bakterien – so sind sie gebaut",
      points: [
        "Bakterien haben keinen Zellkern. Ihr Erbmaterial (DNA) liegt im Zellplasma.",
        "Sie haben eine Zellwand – aber anders gebaut als bei Pflanzen.",
        "Von außen nach innen: Schleimhülle → Zellwand → Zellhaut → Zellplasma.",
        "Mit ihren Geißeln bewegen sie sich fort."
      ] },
    { title: "Bakterien vermehren sich schnell",
      points: [
        "Bakterien vermehren sich durch Zweiteilung.",
        "Das geht sehr schnell: ungefähr alle 20 Minuten.",
        "Bakterien können nützlich und gefährlich sein."
      ], tip: "In 1 Stunde teilt sich ein Bakterium 3-mal: 1 → 2 → 4 → 8." },
    { title: "Nützliche Bakterien",
      points: [
        "Zersetzer (Destruenten): Sie zersetzen abgestorbene Lebewesen und setzen Mineralstoffe frei. Die nehmen Pflanzen wieder auf.",
        "Sie helfen bei der Selbstreinigung von Gewässern und bei der Abwasserreinigung in Kläranlagen.",
        "Nahrungsmittel: Essig, saure Milch, Joghurt, Sauerkraut, Käse und Brot werden mit Bakterien hergestellt.",
        "Verdauung: Im Darm vieler Lebewesen (z. B. Rinder, Menschen) helfen sie bei der Verdauung von Pflanzen."
      ] },
    { title: "Gefährliche Bakterien",
      points: [
        "Krankheiten: Giftstoffe von Bakterien können Krankheiten auslösen, z. B. Lungenentzündung, Keuchhusten, Scharlach, Typhus, Pest, Cholera, Tuberkulose, Gehirnhautentzündung und Mittelohrentzündung.",
        "Karies: Bakterien im Mund fressen Speisereste. Ihre Säuren greifen die Zähne an.",
        "Pflanzenschädlinge: Sie lösen die Zellwände auf. Pflanzenteile faulen, z. B. Kartoffeln."
      ], tip: "Vor gefährlichen Bakterien muss man sich schützen." }
  ]
};
