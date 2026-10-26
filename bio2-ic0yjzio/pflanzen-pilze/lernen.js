// Lernkarten zum Thema "1. Pflanzen und Pilze" (Inhalt aus PPP_Pflanzen.pptx und PPP_Pilze.pptx)
// LESSONS[topicId] = Liste von Karten: { title, points: [...], tip? }
// Die Karten werden vor dem Quiz zum Durchklicken angezeigt.
// Höchstens 5 Karten pro Thema, nur das Wichtigste in kurzen Stichworten.

const LESSONS = {
  baeume: [
    { title: "Teile und Aufgaben",
      points: [
        "Bäume = Blütenpflanzen",
        "Wurzel: verankert, nimmt Wasser + Mineralsalze auf",
        "Stamm: gibt Halt, leitet Wasser nach oben",
        "Blätter: Fotosynthese",
        "Blüten: Fortpflanzung · Früchte: verbreiten Samen"
      ] },
    { title: "Die Wurzelspitze",
      points: [
        "Wurzelhaare: nehmen Wasser + Mineralsalze auf",
        "Wachstumszone: Wurzel wächst in die Länge",
        "Wurzelhaube: schützt beim Wachsen"
      ] },
    { title: "Das Holz",
      points: [
        "innen → außen: Kernholz → Splintholz → Kambium → Rinde",
        "Kambium = Wachstumsschicht (neues Holz)",
        "Rinde = Bast + Borke (ganz außen)"
      ] },
    { title: "Jahresringe",
      points: [
        "1 Ring pro Jahr",
        "hell = Frühholz · dunkel = Spätholz",
        "gutes Jahr → breiter Ring",
        "Trockenheit, Schatten, Schädlinge → schmaler Ring",
        "keine Jahreszeiten (Tropen) → keine Ringe"
      ], tip: "Zähl die Ringe – dann weißt du, wie alt der Baum ist." },
    { title: "Der Transpirationssog",
      points: [
        "Transpiration: Wasser wird als Wasserdampf abgegeben",
        "Sog = „saugen“",
        "zieht Wasser von der Wurzel bis in die Krone"
      ], tip: "Wie beim Trinken mit einem Strohhalm." }
  ],

  laub: [
    { title: "Das Blatt",
      points: [
        "Fotosynthese mit grünem Chlorophyll",
        "Blattadern: leiten Wasser + Nährstoffe",
        "Blattfläche, Blattrand, Blattstiel, Blattgrund",
        "einfach oder zusammengesetzt (Fiederblättchen)"
      ] },
    { title: "Laubbäume bestimmen",
      points: [
        "an Blättern und Früchten",
        "Blattform: eiförmig, herzförmig, gelappt, gefiedert, gefingert",
        "Blattrand: gesägt, gezähnt, ganzrandig, gebuchtet",
        "Blattstellung: wechselständig, gegenständig, quirlständig, grundständig"
      ] },
    { title: "Welcher Baum ist das?",
      points: [
        "Sommer-Linde: herzförmig",
        "Rotbuche: eiförmig, ganzrandig · Hainbuche: eiförmig, scharf gesägt",
        "Stiel-Eiche: gebuchtet · Spitz-Ahorn: gelappt",
        "Rosskastanie: gefingert",
        "Robinie: gefiedert, glatt · Esche: gefiedert, gesägt"
      ] },
    { title: "Laubbäume im Jahreslauf",
      points: [
        "Frühling: Reservestoffe aktiv, Wachstum beginnt",
        "Sommer: Blätter voll, Früchte nach der Bestäubung",
        "Herbst: Chlorophyll abgebaut → gelb, rot, orange",
        "Winter: ohne Blätter wenig Verdunstung, Schutz vor Frost",
        "Tropen: keine Jahreszeiten; große, dicke Blätter mit Tropfspitze"
      ], tip: "Das Laub am Boden ist Wärmeschutz und Versteck für kleine Tiere." },
    { title: "Blüten",
      points: [
        "männlich: Staubblätter · weiblich: Fruchtblätter",
        "zwittrig: beides in einer Blüte",
        "einhäusig: männliche und weibliche Blüten auf einer Pflanze",
        "zweihäusig: pro Pflanze nur männliche ODER weibliche Blüten"
      ] }
  ],

  nadel: [
    { title: "Angepasst an Kälte und Trockenheit",
      points: [
        "Problem im Winter: wenig Wasser bei den Wurzeln",
        "Nadeln = schmale, spitze Blätter → wenig Verdunstung",
        "Wachsschicht schützt die Nadeln",
        "Nadeln bleiben → Fotosynthese auch im Winter"
      ] },
    { title: "Nacktsamer",
      points: [
        "Nadelbäume: Samenanlagen liegen offen am Zapfen",
        "Bedecktsamer: Samenanlagen im Fruchtknoten"
      ] },
    { title: "Zapfen",
      points: [
        "entstehen aus weiblichen Blütenständen",
        "Wind trägt Pollen der männlichen Blüten",
        "Kontakt = Bestäubung",
        "Verschmelzen = Befruchtung"
      ] }
  ],

  sporen: [
    { title: "Sporenpflanzen",
      points: [
        "Moose und Farne",
        "älter als die Dinosaurier",
        "keine Blüten, keine Samen, keine Früchte",
        "Vermehrung mit Sporen"
      ] },
    { title: "Sporen",
      points: [
        "kleine „Körnchen“ aus Sporenbehältern",
        "feste Hülle → überstehen Kälte und Trockenheit"
      ] },
    { title: "Moose",
      points: [
        "Pionierpflanzen: wachsen als erste an einem Ort",
        "keine Wurzeln, nur Wurzelhaare",
        "nehmen am ganzen Körper Wasser auf, brauchen wenig Licht",
        "speichern Regen wie ein Schwamm, geben ihn langsam ab"
      ] },
    { title: "Farne",
      points: [
        "Wurzel, Spross, Blatt – aber keine Blüten",
        "Blätter = Farnwedel, junge Wedel eingerollt",
        "Blattnerven leiten Wasser und Nährstoffe",
        "Sporenbehälter an der Unterseite der Wedel"
      ] },
    { title: "Generationswechsel beim Farn",
      points: [
        "Farnpflanze → Sporen (ungeschlechtlich)",
        "Spore → Vorkeim",
        "Vorkeim → Eizelle + Schwärmer (geschlechtlich)",
        "Befruchtung → neue Farnpflanze"
      ] }
  ],

  pilze: [
    { title: "Was sind Pilze?",
      points: [
        "kein Chlorophyll → keine Fotosynthese",
        "zersetzen organische Stoffe außen, nehmen sie dann auf",
        "weder Pflanze noch Tier: eigenes Reich"
      ] },
    { title: "Der Hallimasch",
      points: [
        "größtes Lebewesen: Oregon (USA), entdeckt 2000",
        "ca. 2 400 Jahre alt",
        "900 Hektar (1 260 Fußballfelder), ca. 1 m tief",
        "leuchtet: Biolumineszenz"
      ] },
    { title: "Aufbau",
      points: [
        "Mycel = Fadengeflecht im Boden (Hauptteil)",
        "Hyphe = einzelner Pilzfaden",
        "„Schwammerl“ = Sporenkörper: Hut, Lamellen, Ring, Stiel"
      ], tip: "Schimmelige Marmelade wegwerfen: Das Mycel ist auch dort, wo man nichts sieht." },
    { title: "Vom Pilz zum Pilz",
      points: [
        "Lamellen bilden „+“- und „–“-Sporen",
        "Sporen → Hyphen",
        "Hyphen verschmelzen → neues Mycel",
        "Mycel → junger Sporenträger"
      ] },
    { title: "Sporen verbreiten",
      points: [
        "Wind, Regentropfen, Berührung oder Druck",
        "Aasgeruch lockt Tiere an",
        "die Form des Pilzes verrät den Weg"
      ] }
  ],

  pilzleben: [
    { title: "Drei Arten der Ernährung",
      points: [
        "Destruenten: zersetzen Totes → Nährstoffe (Champignon, Schimmelpilze)",
        "Parasiten: schädigen einen Wirt (Fußpilz, Hallimasch)",
        "Symbionten: beide haben Vorteile (Steinpilz, Eierschwammerl, Fliegenpilz)"
      ] },
    { title: "Mykorrhiza",
      points: [
        "Symbiose von Pilz und Baumwurzel",
        "Pilz bekommt Nährstoffe vom Baum",
        "Baum bekommt Wasser + Mineralsalze vom Pilz"
      ] },
    { title: "Flechten",
      points: [
        "Pilz + Alge (Symbiose)",
        "Pilz: Schutz vor Austrocknung und UV",
        "Alge: Nahrung durch Fotosynthese"
      ] },
    { title: "Pilzvergiftung",
      points: [
        "Verwechslung, z. B. Steinpilz ↔ Gallenröhrling",
        "nach 6–48 h: Durchfall, Erbrechen, Blutdruckabfall",
        "später: Leber- und Nierenversagen",
        "Ruhe bewahren, Vergiftungsinformationszentrale, Krankenhaus",
        "keine Milch, kein Alkohol · Reste aufheben"
      ] },
    { title: "Regeln beim Sammeln",
      points: [
        "nur Pilze sammeln, die du sicher kennst",
        "herausdrehen oder abschneiden → Mycel bleibt heil",
        "luftig im Korb, nicht im Plastiksack",
        "rasch verarbeiten"
      ] }
  ]
};
