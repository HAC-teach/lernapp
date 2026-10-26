// Lernkarten zum Thema "1. Gewässer" (Inhalt aus Gewässer_PPP.pptx)
// LESSONS[topicId] = Liste von Karten: { title, points: [...], tip? }
// Die Karten werden vor dem Quiz zum Durchklicken angezeigt.

const LESSONS = {
  kreislauf: [
    { title: "Was ist der Wasserkreislauf?",
      points: [
        "Der Wasserkreislauf verbindet Meere, Gewässer, Böden, Gesteine, Land und Atmosphäre.",
        "Wasser wechselt dabei zwischen drei Aggregatzuständen: fest (Eis), flüssig und gasförmig (Wasserdampf).",
        "Die Sonne liefert die Energie für die Verdunstung."
      ] },
    { title: "Die Schritte",
      points: [
        "1. Verdunstung",
        "2. Kondensation – es entstehen Wolken",
        "3. Niederschlag",
        "4. Versickerung",
        "… und dann wieder Verdunstung."
      ], tip: "Merke die Reihenfolge: Verdunstung → Kondensation → Niederschlag → Versickerung." },
    { title: "Wo ist das Wasser gespeichert?",
      points: [
        "Wasser ist in Meeren, im Grundwasser, in Gletschern und in Gesteinen gespeichert.",
        "Grundwasser und Fließgewässer führen das Wasser wieder zurück ins Meer."
      ] }
  ],

  fluss: [
    { title: "Gewässer sind Ökosysteme",
      points: [
        "Ein Gewässer ist ein Ökosystem.",
        "Fließgewässer bestehen aus verschiedenen Abschnitten:",
        "Quelle → Oberlauf → Mittellauf → Unterlauf → Mündung"
      ] },
    { title: "Ökologische Begriffe",
      points: [
        "Biodiversität = biologische Vielfalt, die Vielfalt des Lebens",
        "Biotische Umweltfaktoren = belebte Faktoren (z. B. Symbiose)",
        "Abiotische Umweltfaktoren = unbelebte Faktoren (z. B. Licht)",
        "Biozönose = Lebensgemeinschaft (alle biotischen Faktoren)",
        "Ökologische Nische = die Rolle eines Lebewesens im Ökosystem, der „Beruf“ einer Art"
      ] },
    { title: "Flussabwärts ändert sich viel",
      points: [
        "Die Strömung nimmt ab.",
        "Die Temperatur steigt.",
        "Der Sauerstoffgehalt nimmt ab.",
        "Die Schlammablagerungen nehmen zu.",
        "Darum leben in den verschiedenen Abschnitten unterschiedliche Tierarten."
      ] },
    { title: "Anpassungen der Tiere",
      points: [
        "Die Tiere sind an die Strömung und die Umweltbedingungen angepasst:",
        "Stromlinienförmiger Körper → geringerer Strömungswiderstand",
        "Flacher Körper → am Gewässergrund halten",
        "Haftorgane und Saugnäpfe → an Steinen festhalten"
      ] },
    { title: "Biozönose im Fließgewässer",
      points: [
        "Produzenten: Pflanzen",
        "Konsumenten und Destruenten: Tiere",
        "Die Tiere besetzen verschiedene ökologische Nischen: Weidegänger, Zerkleinerer, Filtrierer und Beutegreifer."
      ] },
    { title: "Stehende Gewässer",
      points: [
        "Es gibt verschiedene Arten: Tümpel, Teich, Weiher, See und Stausee.",
        "Sie können natürlich oder künstlich (vom Menschen gemacht) sein.",
        "Manche frieren im Winter bis zum Grund zu.",
        "Manche trocknen im Sommer aus.",
        "Darum gibt es verschiedene Umweltfaktoren und unterschiedliche Lebewesen."
      ] }
  ],

  trinkwasser: [
    { title: "Trinkwasser",
      points: [
        "Unser Trinkwasser kommt aus Grundwasser und Quellen.",
        "Gefahren: Dünger und Pflanzenschutzmittel aus der Landwirtschaft, Keime und Abwasser aus Industrie und Haushalt."
      ] },
    { title: "Die Kläranlage",
      points: [
        "Abwasser wird in der Kläranlage in mehreren Schritten gereinigt:",
        "1. Mechanische Reinigung: grobe Stoffe werden herausgefiltert.",
        "2. Biologische Reinigung: Mikroorganismen reinigen das Wasser. Danach fließt es in den Fluss.",
        "Schlammbehandlung: Aus dem Überschuss entsteht Gas. Damit wird Strom erzeugt."
      ] },
    { title: "Gewässer „unter Druck“",
      points: [
        "Naturnaher Zustand: hohe Wasserqualität, Lebensraum für Lebewesen, Transport von Stein und Sand flussabwärts.",
        "Nutzung durch den Menschen: Schifffahrtsweg, Strom aus Wasserkraftwerken, Freizeit (z. B. Schwimmen), Kühlwasser für Industrie und Wärmekraftwerke."
      ] },
    { title: "Veränderung von Flüssen",
      points: [
        "Seit dem 19. Jahrhundert wurden viele Flüsse begradigt, verbaut und reguliert.",
        "Dadurch gibt es weniger Flussschlingen (Mäander).",
        "Gründe: Hochwasserschutz, Besiedlung und Wasserkraft.",
        "Folgen: Staumauern sind ein Hindernis für Fische. Es gibt weniger Lebensräume und weniger Biodiversität."
      ], tip: "Auf den Folien siehst du, wie sich die Donau seit 1570 verändert hat." },
    { title: "Renaturierung",
      points: [
        "Renaturierung = einen stark veränderten Fluss wieder naturnäher gestalten.",
        "Maßnahmen: Fischtreppen bauen, Überflutungsflächen und Auwälder erhalten oder wiederherstellen."
      ] },
    { title: "Folgen der Renaturierung",
      points: [
        "Mehr Raum für den Fluss → das Wasser breitet sich aus → Hochwasser wird abgeschwächt → weniger Schäden.",
        "Bessere ökologische Qualität des Flusses: mehr Arten.",
        "Typische Arten einer Au: Eisvogel, Biber und Huchen."
      ] }
  ],

  meer: [
    { title: "Das Meer",
      points: [
        "Das Meer hat mehrere Bereiche mit typischen abiotischen Umweltfaktoren.",
        "Darum ist die Biodiversität im Lebensraum Meer hoch."
      ] },
    { title: "Gefährdung 1: Überfischung",
      points: [
        "Es wird zu viel gefischt.",
        "Beifang = Tiere, die ungewollt mitgefangen werden.",
        "Schleppnetze töten Lebewesen am Meeresboden und zerstören dort die Lebensräume."
      ] },
    { title: "Gefährdung 2: Verschmutzung",
      points: [
        "Ölpest bei Unfällen: Öl vergiftet Tiere und verklebt ihre Kiemen.",
        "Tourismus: Küsten werden verbaut, es entsteht Müll.",
        "Plastik im Wasser gelangt in die Nahrungskette – bis zum Menschen."
      ] },
    { title: "Korallenbleiche",
      points: [
        "Wärmeres Wasser und Verschmutzung lassen Korallen sterben (Korallenbleiche).",
        "Damit geht Lebensraum für viele Lebewesen verloren – die Biodiversität sinkt."
      ] }
  ],

  amphibien: [
    { title: "Amphibien (Lurche)",
      points: [
        "Froschlurche: Unken, Kröten und Frösche",
        "Schwanzlurche: Molche und Salamander"
      ] },
    { title: "Merkmale der Amphibien",
      points: [
        "Metamorphose (Verwandlung): aus der Larve (z. B. Kaulquappe beim Frosch) wird ein erwachsenes Tier.",
        "Atmung: Die Larve atmet mit Kiemen. Das erwachsene Tier atmet mit Lunge und Haut.",
        "Fortbewegung: Die Larve hat einen Ruderschwanz. Salamander und Molche haben 4 Beine und einen Schwanz.",
        "Haut: dünn, feucht und mit vielen Drüsen."
      ], tip: "Erwachsene Amphibien atmen auch über die Haut – darum ist sie immer feucht." }
  ]
};
