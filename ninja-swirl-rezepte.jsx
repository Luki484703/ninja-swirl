import { useState } from "react";

// Nährwerte IMMER pro Portion (ca. 1/2 Behälter = ~230g) UND pro 100g
const recipes = [
  // ══════════════════════════════════════════
  // KATEGORIE: 1-ZUTAT / SIMPEL
  // ══════════════════════════════════════════
  {
    id: 101,
    kategorie: "simpel",
    sorte: "🍌 Bananen-Eis (1 Zutat)",
    typ: "1-Zutat",
    funktion: "CREAMifit / Sorbet",
    kalorien_portion: 89,
    kalorien_100g: 39,
    protein: 1.1,
    kohlenhydrate: 20,
    fett: 0.3,
    zucker_nat: 11,
    portionen: 2,
    zutaten: ["3–4 reife Bananen (~400 g)"],
    zubereitung: [
      "Bananen schälen, in Scheiben schneiden.",
      "Gleichmäßig in den Ninja Behälter (473 ml) legen und bis zum Füllstrich befüllen.",
      "Mindestens 24 Stunden einfrieren.",
      "5–10 Min. bei Raumtemperatur antauen lassen.",
      "Funktion 'CREAMifit' oder 'Sorbet' wählen. Bei Bedarf Re-spin.",
    ],
    tipp: "Je reifer die Banane, desto süßer! Braune Bananen = maximale Süße ohne jeden Zusatz.",
  },
  {
    id: 102,
    kategorie: "simpel",
    sorte: "🥭 Mango-Eis (1 Zutat)",
    typ: "1-Zutat",
    funktion: "CREAMifit / Sorbet",
    kalorien_portion: 69,
    kalorien_100g: 30,
    protein: 0.8,
    kohlenhydrate: 16,
    fett: 0.2,
    zucker_nat: 14,
    portionen: 2,
    zutaten: ["400 g TK-Mango (oder 2 frische reife Mangos, geschält & eingefroren)"],
    zubereitung: [
      "TK-Mango direkt in den Behälter füllen (keine Zwischenräume).",
      "Frische Mango: Würfeln, einfrieren, dann in den Behälter.",
      "24 Stunden einfrieren.",
      "5–10 Min. antauen lassen.",
      "'CREAMifit' oder 'Sorbet' starten. Re-spin für mehr Cremigkeit.",
    ],
    tipp: "Mangos enthalten natürlichen Fruchtzucker – perfekt ohne jede Süßung! Ein Spritzer Limette macht es noch frischer.",
  },
  {
    id: 103,
    kategorie: "simpel",
    sorte: "🍓 Erdbeer-Eis (1 Zutat)",
    typ: "1-Zutat",
    funktion: "CREAMifit / Sorbet",
    kalorien_portion: 37,
    kalorien_100g: 16,
    protein: 0.8,
    kohlenhydrate: 7,
    fett: 0.3,
    zucker_nat: 5,
    portionen: 2,
    zutaten: ["450 g TK-Erdbeeren (oder frische, eingefroren)"],
    zubereitung: [
      "Erdbeeren in den Behälter füllen.",
      "24 Stunden einfrieren (falls frisch: erst einfrieren, dann in Behälter).",
      "10 Min. antauen lassen.",
      "'CREAMifit' oder 'Sorbet' wählen.",
    ],
    tipp: "Das kalorienärmste 1-Zutaten-Eis! Erdbeeren sind nur 32 kcal/100g. Ideal für den Sommer.",
  },
  {
    id: 104,
    kategorie: "simpel",
    sorte: "🍍 Ananas-Sorbet (2 Zutaten)",
    typ: "2 Zutaten",
    funktion: "Sorbet / CREAMifit",
    kalorien_portion: 62,
    kalorien_100g: 27,
    protein: 0.5,
    kohlenhydrate: 14,
    fett: 0.1,
    zucker_nat: 12,
    portionen: 2,
    zutaten: [
      "400 g TK-Ananas",
      "Saft 1 Limette",
    ],
    zubereitung: [
      "Limettensaft über die TK-Ananas träufeln.",
      "In den Behälter füllen und 24 Stunden einfrieren.",
      "10 Min. antauen, dann 'Sorbet' oder 'CREAMifit' verarbeiten.",
    ],
    tipp: "Wie Dole Whip! Wer es weniger sauer mag, lässt die Limette weg – Ananas allein ist schon sehr süß.",
  },
  {
    id: 105,
    kategorie: "simpel",
    sorte: "🍇 Weintrauben-Sorbet (1 Zutat)",
    typ: "1-Zutat",
    funktion: "Sorbet / CREAMifit",
    kalorien_portion: 72,
    kalorien_100g: 31,
    protein: 0.7,
    kohlenhydrate: 16,
    fett: 0.2,
    zucker_nat: 14,
    portionen: 2,
    zutaten: ["400 g kernlose rote oder grüne Weintrauben (eingefroren)"],
    zubereitung: [
      "Weintrauben waschen, trocknen und auf einem Tablett einzeln einfrieren (2–3 Std.).",
      "Gefrorene Trauben in den Behälter füllen.",
      "Weitere 12 Stunden einfrieren.",
      "10 Min. antauen, 'Sorbet' oder 'CREAMifit' wählen.",
    ],
    tipp: "Überraschend süß und cremig! Rote Trauben ergeben eine schöne pinke Farbe.",
  },
  // ══════════════════════════════════════════
  // KATEGORIE: CREAMIFIT / SOFTEIS
  // ══════════════════════════════════════════
  {
    id: 1,
    kategorie: "creamifit",
    sorte: "🍓 Erdbeer-Sorbet",
    typ: "Frucht-Sorbet",
    funktion: "Sorbet / CREAMifit",
    kalorien_portion: 52,
    kalorien_100g: 23,
    protein: 1,
    kohlenhydrate: 11,
    fett: 0.2,
    zucker_nat: 0,
    portionen: 2,
    zutaten: [
      "300 g TK-Erdbeeren",
      "100 ml Wasser oder Kokoswasser (ungesüßt)",
      "1–2 TL Erythrit",
      "1 EL Zitronensaft",
      "1 Prise Salz",
    ],
    zubereitung: [
      "Alle Zutaten in den Behälter füllen. Erdbeeren 5 Min. antauen lassen.",
      "Mindestens 24 Stunden einfrieren.",
      "5–10 Min. antauen lassen.",
      "Funktion 'Sorbet' oder 'CREAMifit' starten.",
      "Bei Bedarf Re-spin für mehr Cremigkeit.",
    ],
    tipp: "Auch mit TK-Himbeeren oder TK-Mango perfekt! 2 EL Magerquark machen es cremiger.",
  },
  {
    id: 2,
    kategorie: "creamifit",
    sorte: "🍋 Zitronen-Limetten-Sorbet",
    typ: "Frucht-Sorbet",
    funktion: "Sorbet / CREAMifit",
    kalorien_portion: 38,
    kalorien_100g: 17,
    protein: 0.5,
    kohlenhydrate: 8,
    fett: 0.1,
    zucker_nat: 0,
    portionen: 2,
    zutaten: [
      "200 ml frisch gepresster Zitronensaft",
      "Saft 1 Limette",
      "150 ml Wasser",
      "3 TL Erythrit",
      "Abrieb 1 Bio-Zitrone",
      "1 Prise Salz",
    ],
    zubereitung: [
      "Alle Zutaten gut verrühren, bis Erythrit aufgelöst.",
      "In den Behälter füllen, 24 Std. einfrieren.",
      "5–10 Min. antauen.",
      "Funktion 'Sorbet' oder 'CREAMifit' wählen.",
    ],
    tipp: "Sehr erfrischend! Frische Minze als Topping macht es perfekt.",
  },
  {
    id: 3,
    kategorie: "creamifit",
    sorte: "🥭 Mango-Passionsfrucht-Swirl",
    typ: "Frucht-Sorbet",
    funktion: "Sorbet / CREAMifit",
    kalorien_portion: 61,
    kalorien_100g: 27,
    protein: 1,
    kohlenhydrate: 13,
    fett: 0.3,
    zucker_nat: 0,
    portionen: 2,
    zutaten: [
      "250 g TK-Mango",
      "Fruchtfleisch 2 Passionsfrüchte (oder 50 ml ungesüßter Passionsfrucht-Saft)",
      "80 ml Kokoswasser",
      "1 TL Erythrit",
      "1 EL Limettensaft",
    ],
    zubereitung: [
      "Mango leicht antauen, mit allen Zutaten in Behälter füllen.",
      "24 Std. einfrieren.",
      "5–10 Min. antauen, 'Sorbet' oder 'CREAMifit' starten.",
    ],
    tipp: "1 EL Magerquark extra macht es noch cremiger – kaum mehr Kalorien!",
  },
  {
    id: 4,
    kategorie: "creamifit",
    sorte: "🍑 Pfirsich-Vanille-Swirl",
    typ: "Frucht-Sorbet",
    funktion: "Sorbet / CREAMifit",
    kalorien_portion: 55,
    kalorien_100g: 24,
    protein: 1.5,
    kohlenhydrate: 10,
    fett: 0.2,
    zucker_nat: 0,
    portionen: 2,
    zutaten: [
      "250 g TK-Pfirsiche",
      "100 ml ungesüßte Mandelmilch",
      "1 TL Vanilleextrakt (zuckerfrei)",
      "2 TL Erythrit",
      "Saft ½ Zitrone",
    ],
    zubereitung: [
      "Alle Zutaten gut vermengen und in Behälter füllen.",
      "12–24 Std. einfrieren.",
      "10 Min. antauen, 'CREAMifit' oder 'Sorbet' starten.",
    ],
    tipp: "Auch wunderbar mit TK-Aprikosen.",
  },
  {
    id: 5,
    kategorie: "creamifit",
    sorte: "🫐 Blaubeer-Acai-Swirl",
    typ: "Frucht-Sorbet",
    funktion: "Sorbet / CREAMifit",
    kalorien_portion: 58,
    kalorien_100g: 25,
    protein: 2,
    kohlenhydrate: 11,
    fett: 0.5,
    zucker_nat: 0,
    portionen: 2,
    zutaten: [
      "200 g TK-Blaubeeren",
      "1 Acai-Pulver-Portion (5 g)",
      "100 ml ungesüßter Granatapfelsaft",
      "2 TL Erythrit",
      "1 TL Zitronensaft",
    ],
    zubereitung: [
      "Acai-Pulver und Erythrit in Granatapfelsaft einrühren.",
      "Mit Blaubeeren und Zitronensaft in Behälter füllen.",
      "24 Std. einfrieren.",
      "Antauen lassen, 'CREAMifit' oder 'Sorbet' wählen.",
    ],
    tipp: "Voller Antioxidantien! Mit frischen Blaubeeren als Topping servieren.",
  },
  {
    id: 6,
    kategorie: "creamifit",
    sorte: "🍵 Matcha-Kokos-Swirl",
    typ: "Andere Sorte",
    funktion: "CREAMifit",
    kalorien_portion: 62,
    kalorien_100g: 27,
    protein: 2,
    kohlenhydrate: 8,
    fett: 1.5,
    zucker_nat: 0,
    portionen: 2,
    zutaten: [
      "300 ml Kokosmilch light (ungesüßt)",
      "1,5 TL Matcha-Pulver (Foodgrade)",
      "2 TL Erythrit",
      "1 TL Vanilleextrakt",
      "1 Prise Salz",
    ],
    zubereitung: [
      "Matcha und Erythrit mit etwas Kokosmilch klümpchenfrei rühren.",
      "Restliche Zutaten hinzufügen.",
      "In Behälter füllen, 24 Std. einfrieren.",
      "10 Min. antauen, 'CREAMifit' oder 'Light Ice Cream' starten.",
    ],
    tipp: "Matcha enthält natürliches Koffein – toller Energie-Snack!",
  },
  {
    id: 7,
    kategorie: "creamifit",
    sorte: "☕ Eiskaffee-Swirl",
    typ: "Andere Sorte",
    funktion: "CREAMifit",
    kalorien_portion: 45,
    kalorien_100g: 20,
    protein: 3,
    kohlenhydrate: 4,
    fett: 0.3,
    zucker_nat: 0,
    portionen: 2,
    zutaten: [
      "250 ml starker Espresso oder Cold Brew (abgekühlt)",
      "150 ml ungesüßte Mandelmilch",
      "2 TL Erythrit",
      "1 TL Vanilleextrakt",
      "Optional: 1 Portion Vanille-Proteinpulver zuckerfrei",
    ],
    zubereitung: [
      "Kaffee vollständig abkühlen lassen.",
      "Alle Zutaten verrühren, in Behälter füllen.",
      "24 Std. einfrieren.",
      "10 Min. antauen, 'CREAMifit' oder 'Light Ice Cream' starten.",
    ],
    tipp: "Perfekt als Pre-Workout Snack – kühl und energiegeladen!",
  },
  {
    id: 13,
    kategorie: "creamifit",
    sorte: "🍒 Kirsch-Joghurt-Swirl",
    typ: "Frucht-Sorbet",
    funktion: "CREAMifit / Light Ice Cream",
    kalorien_portion: 67,
    kalorien_100g: 29,
    protein: 4,
    kohlenhydrate: 10,
    fett: 0.4,
    zucker_nat: 0,
    portionen: 2,
    zutaten: [
      "200 g TK-Kirschen (entsteint)",
      "150 g fettarmer Joghurt (0,1%)",
      "2 TL Erythrit",
      "½ TL Mandelaroma",
      "1 TL Zitronensaft",
    ],
    zubereitung: [
      "Alle Zutaten mit Stabmixer pürieren.",
      "In Behälter füllen, 24 Std. einfrieren.",
      "10 Min. antauen.",
      "'CREAMifit' oder 'Light Ice Cream' wählen.",
    ],
    tipp: "Schmeckt wie Black Forest – mit etwas Kakaopulver (1 TL) sogar noch mehr danach!",
  },
  {
    id: 14,
    kategorie: "creamifit",
    sorte: "🍉 Wassermelonen-Minz-Sorbet",
    typ: "Frucht-Sorbet",
    funktion: "Sorbet / CREAMifit",
    kalorien_portion: 41,
    kalorien_100g: 18,
    protein: 0.8,
    kohlenhydrate: 9,
    fett: 0.1,
    zucker_nat: 7,
    portionen: 2,
    zutaten: [
      "400 g Wassermelone (entkernt, gewürfelt, eingefroren)",
      "5–6 frische Minzblätter",
      "1 TL Limettensaft",
      "1 TL Erythrit (optional, Melone ist bereits süß)",
    ],
    zubereitung: [
      "Wassermelone würfeln und mindestens 4 Std. einfrieren.",
      "Mit Minze und Limettensaft in Behälter füllen.",
      "Nochmals 12–24 Std. einfrieren.",
      "10 Min. antauen, 'Sorbet' oder 'CREAMifit' starten.",
    ],
    tipp: "Das leichteste Sommereis überhaupt! Wassermelone ist zu 92% Wasser.",
  },
  // ══════════════════════════════════════════
  // KATEGORIE: PROTEIN-EIS
  // ══════════════════════════════════════════
  {
    id: 201,
    kategorie: "protein",
    sorte: "💪 Vanille-Protein-Eis",
    typ: "Protein",
    funktion: "Light Ice Cream / Ice Cream",
    kalorien_portion: 98,
    kalorien_100g: 43,
    protein: 15,
    kohlenhydrate: 7,
    fett: 1.2,
    zucker_nat: 0,
    portionen: 2,
    zutaten: [
      "200 g Magerquark (0,2% Fett)",
      "1 Portion Vanille-Proteinpulver zuckerfrei (ca. 30 g)",
      "150 ml fettarme Milch (1,5%)",
      "2 TL Erythrit",
      "1 TL Vanilleextrakt",
    ],
    zubereitung: [
      "Alle Zutaten mit Stabmixer zu einer glatten Masse mixen.",
      "In Behälter füllen, Füllstrich beachten.",
      "24 Std. einfrieren.",
      "10 Min. antauen lassen.",
      "'Light Ice Cream' oder 'Ice Cream' starten. Re-spin nach Bedarf.",
    ],
    tipp: "30 g Protein pro Behälter (= 15 g pro Portion)! Perfektes Post-Workout Dessert.",
  },
  {
    id: 202,
    kategorie: "protein",
    sorte: "🍫 Schoko-Protein-Eis",
    typ: "Protein",
    funktion: "Light Ice Cream / Ice Cream",
    kalorien_portion: 105,
    kalorien_100g: 46,
    protein: 14,
    kohlenhydrate: 9,
    fett: 2,
    zucker_nat: 0,
    portionen: 2,
    zutaten: [
      "200 g Magerquark",
      "1 Portion Schokoladen-Proteinpulver zuckerfrei (30 g)",
      "150 ml fettarme Milch",
      "1 EL Kakaopulver ungesüßt",
      "2 TL Erythrit",
      "1 Prise Salz",
    ],
    zubereitung: [
      "Kakaopulver mit etwas Milch klümpchenfrei anrühren.",
      "Restliche Zutaten hinzufügen und glatt mixen.",
      "In Behälter füllen, 24 Std. einfrieren.",
      "10 Min. antauen, 'Light Ice Cream' starten.",
    ],
    tipp: "Dunkles Kakaopulver (Dutch-process) gibt intensiveren Schoko-Geschmack!",
  },
  {
    id: 203,
    kategorie: "protein",
    sorte: "🍓 Erdbeer-Protein-Eis",
    typ: "Protein",
    funktion: "Light Ice Cream / CREAMifit",
    kalorien_portion: 92,
    kalorien_100g: 40,
    protein: 13,
    kohlenhydrate: 9,
    fett: 0.8,
    zucker_nat: 0,
    portionen: 2,
    zutaten: [
      "150 g Magerquark",
      "1 Portion Erdbeere-Proteinpulver zuckerfrei (30 g)",
      "100 g TK-Erdbeeren (püriert, aufgetaut)",
      "100 ml fettarme Milch",
      "1 TL Erythrit",
    ],
    zubereitung: [
      "TK-Erdbeeren auftauen und pürieren.",
      "Alle Zutaten mit Stabmixer glatt mixen.",
      "In Behälter füllen, 24 Std. einfrieren.",
      "10 Min. antauen, 'Light Ice Cream' oder 'CREAMifit' starten.",
    ],
    tipp: "Fruchtig und cremig! Echte Erdbeerstücke als Topping draufgeben nach dem Verarbeiten.",
  },
  {
    id: 204,
    kategorie: "protein",
    sorte: "🥜 Erdnussbutter-Protein-Eis",
    typ: "Protein",
    funktion: "Ice Cream",
    kalorien_portion: 132,
    kalorien_100g: 57,
    protein: 16,
    kohlenhydrate: 8,
    fett: 4.5,
    zucker_nat: 0,
    portionen: 2,
    zutaten: [
      "200 g Magerquark",
      "1 EL Erdnussmus naturell (ohne Zucker)",
      "1 Portion Vanilla- oder Schoko-Proteinpulver (30 g)",
      "150 ml fettarme Milch",
      "2 TL Erythrit",
      "1 Prise Salz",
    ],
    zubereitung: [
      "Erdnussmus mit etwas Milch glatt rühren.",
      "Alle Zutaten mit Stabmixer mixen.",
      "In Behälter füllen, 24 Std. einfrieren.",
      "10 Min. antauen, 'Ice Cream' starten.",
    ],
    tipp: "Für intensiveren Geschmack: 2 EL geröstete Erdnüsse nach dem Spinnen unterrühren.",
  },
  {
    id: 205,
    kategorie: "protein",
    sorte: "🍋 Zitrone-Skyr-Eis",
    typ: "Protein",
    funktion: "Light Ice Cream / Frozen Yogurt",
    kalorien_portion: 85,
    kalorien_100g: 37,
    protein: 12,
    kohlenhydrate: 7,
    fett: 0.3,
    zucker_nat: 0,
    portionen: 2,
    zutaten: [
      "300 g Skyr natur (0% Fett)",
      "Abrieb + Saft 1 Bio-Zitrone",
      "2 TL Erythrit",
      "1 TL Vanilleextrakt",
    ],
    zubereitung: [
      "Alle Zutaten gut verrühren.",
      "In Behälter füllen, 24 Std. einfrieren.",
      "10 Min. antauen.",
      "'Frozen Yogurt' oder 'Light Ice Cream' starten.",
    ],
    tipp: "Skyr hat mehr Protein als Joghurt – ca. 11g/100g! Super cremige Konsistenz.",
  },
  // ══════════════════════════════════════════
  // KATEGORIE: FROZEN YOGURT
  // ══════════════════════════════════════════
  {
    id: 301,
    kategorie: "frogurt",
    sorte: "🫐 Blaubeer-Frozen-Yogurt",
    typ: "Frozen Yogurt",
    funktion: "Frozen Yogurt",
    kalorien_portion: 78,
    kalorien_100g: 34,
    protein: 6,
    kohlenhydrate: 10,
    fett: 0.5,
    zucker_nat: 0,
    portionen: 2,
    zutaten: [
      "300 g fettarmer Joghurt (0,1% Fett)",
      "100 g TK-Blaubeeren",
      "2 TL Erythrit",
      "1 TL Zitronensaft",
      "½ TL Vanilleextrakt",
    ],
    zubereitung: [
      "Blaubeeren und Joghurt mit Stabmixer pürieren.",
      "Erythrit, Zitronensaft und Vanille einrühren.",
      "In Behälter füllen, 24 Std. einfrieren.",
      "10 Min. antauen, 'Frozen Yogurt' wählen.",
    ],
    tipp: "Mit fettarmem Skyr statt Joghurt: noch mehr Protein und cremiger!",
  },
  {
    id: 302,
    kategorie: "frogurt",
    sorte: "🍓 Erdbeer-Frozen-Yogurt",
    typ: "Frozen Yogurt",
    funktion: "Frozen Yogurt",
    kalorien_portion: 72,
    kalorien_100g: 31,
    protein: 5,
    kohlenhydrate: 10,
    fett: 0.4,
    zucker_nat: 0,
    portionen: 2,
    zutaten: [
      "250 g fettarmer Joghurt",
      "150 g TK-Erdbeeren (aufgetaut und püriert)",
      "2 TL Erythrit",
      "1 TL Vanilleextrakt",
      "1 TL Zitronensaft",
    ],
    zubereitung: [
      "Erdbeeren auftauen und pürieren.",
      "Mit Joghurt und restlichen Zutaten glatt rühren.",
      "In Behälter füllen, 24 Std. einfrieren.",
      "10 Min. antauen, 'Frozen Yogurt' wählen.",
    ],
    tipp: "Mit frischen Erdbeer-Stücken als Topping servieren – sieht toll aus!",
  },
  {
    id: 303,
    kategorie: "frogurt",
    sorte: "🥭 Mango-Kokos-Frozen-Yogurt",
    typ: "Frozen Yogurt",
    funktion: "Frozen Yogurt / CREAMifit",
    kalorien_portion: 89,
    kalorien_100g: 39,
    protein: 4,
    kohlenhydrate: 14,
    fett: 1.5,
    zucker_nat: 0,
    portionen: 2,
    zutaten: [
      "200 g fettarmer Joghurt",
      "150 g TK-Mango (püriert)",
      "50 ml Kokosmilch light",
      "2 TL Erythrit",
      "1 TL Limettensaft",
    ],
    zubereitung: [
      "Mango auftauen und pürieren.",
      "Alle Zutaten glatt rühren und in Behälter füllen.",
      "24 Std. einfrieren.",
      "10 Min. antauen, 'Frozen Yogurt' oder 'CREAMifit' wählen.",
    ],
    tipp: "Tropischer Traum! Mit Kokosraspeln als Topping servieren.",
  },
  {
    id: 304,
    kategorie: "frogurt",
    sorte: "🍑 Pfirsich-Vanille-Frozen-Yogurt",
    typ: "Frozen Yogurt",
    funktion: "Frozen Yogurt",
    kalorien_portion: 76,
    kalorien_100g: 33,
    protein: 5,
    kohlenhydrate: 11,
    fett: 0.4,
    zucker_nat: 0,
    portionen: 2,
    zutaten: [
      "250 g Skyr natur",
      "150 g TK-Pfirsiche (aufgetaut, püriert)",
      "1,5 TL Erythrit",
      "1 TL Vanilleextrakt",
    ],
    zubereitung: [
      "Pfirsiche auftauen und pürieren.",
      "Mit Skyr und Gewürzen glatt rühren.",
      "In Behälter füllen, 24 Std. einfrieren.",
      "10 Min. antauen, 'Frozen Yogurt' wählen.",
    ],
    tipp: "Skyr statt Joghurt verdoppelt den Proteingehalt bei gleichem Kaloriengehalt.",
  },
  {
    id: 305,
    kategorie: "frogurt",
    sorte: "🍫 Schoko-Skyr-Frozen-Yogurt",
    typ: "Frozen Yogurt",
    funktion: "Frozen Yogurt / Light Ice Cream",
    kalorien_portion: 88,
    kalorien_100g: 38,
    protein: 10,
    kohlenhydrate: 9,
    fett: 1,
    zucker_nat: 0,
    portionen: 2,
    zutaten: [
      "300 g Skyr natur (0% Fett)",
      "1,5 EL Kakaopulver ungesüßt",
      "3 TL Erythrit",
      "1 TL Vanilleextrakt",
      "80 ml fettarme Milch",
      "1 Prise Salz",
    ],
    zubereitung: [
      "Kakaopulver mit Milch klümpchenfrei anrühren.",
      "Alle Zutaten glatt mixen.",
      "In Behälter füllen, 24 Std. einfrieren.",
      "10 Min. antauen, 'Frozen Yogurt' oder 'Light Ice Cream' wählen.",
    ],
    tipp: "Für Schokoladen-Fans mit Figur! 10g Protein und nur 88 kcal pro Portion.",
  },
  // ══════════════════════════════════════════
  // KATEGORIE: ICE CREAM (CREMIG)
  // ══════════════════════════════════════════
  {
    id: 8,
    kategorie: "icecream",
    sorte: "🍦 Vanille-Quark-Eis",
    typ: "Milcheis",
    funktion: "Ice Cream / Light Ice Cream",
    kalorien_portion: 88,
    kalorien_100g: 38,
    protein: 8,
    kohlenhydrate: 10,
    fett: 1.5,
    zucker_nat: 0,
    portionen: 2,
    zutaten: [
      "250 g Magerquark (0,2% Fett)",
      "150 ml ungesüßte Mandelmilch",
      "2 TL Vanilleextrakt zuckerfrei",
      "3 TL Erythrit",
      "1 Prise Salz",
    ],
    zubereitung: [
      "Alle Zutaten mit Stabmixer glatt pürieren – keine Klümpchen!",
      "Masse in Behälter füllen (Füllstrich beachten).",
      "Mindestens 24 Std. einfrieren.",
      "10 Min. antauen lassen.",
      "'Ice Cream' oder 'Light Ice Cream' wählen. Re-spin nach Bedarf.",
    ],
    tipp: "Magerquark = Cremigkeit + viele Proteine. Das perfekte Basis-Rezept!",
  },
  {
    id: 9,
    kategorie: "icecream",
    sorte: "🍫 Schokoladen-Eis",
    typ: "Milcheis",
    funktion: "Ice Cream / Light Ice Cream",
    kalorien_portion: 95,
    kalorien_100g: 41,
    protein: 8,
    kohlenhydrate: 10,
    fett: 2,
    zucker_nat: 0,
    portionen: 2,
    zutaten: [
      "200 g Magerquark",
      "180 ml fettarme Milch (1,5%)",
      "2 EL Kakaopulver ungesüßt",
      "3 TL Erythrit",
      "1 TL Vanilleextrakt",
      "1 Prise Salz",
    ],
    zubereitung: [
      "Kakaopulver und Erythrit mit etwas Milch klümpchenfrei anrühren.",
      "Magerquark, restliche Milch und Vanille hinzufügen, glatt mixen.",
      "In Behälter füllen, 24 Std. einfrieren.",
      "10 Min. antauen, 'Ice Cream' wählen.",
    ],
    tipp: "Dunkles Kakaopulver (Dutch Process) gibt noch intensiveren Schokoladengeschmack!",
  },
  {
    id: 11,
    kategorie: "icecream",
    sorte: "🍵 Pistazie-Mandel-Eis",
    typ: "Milcheis",
    funktion: "Ice Cream",
    kalorien_portion: 105,
    kalorien_100g: 46,
    protein: 5,
    kohlenhydrate: 8,
    fett: 5,
    zucker_nat: 0,
    portionen: 2,
    zutaten: [
      "200 ml ungesüßte Mandelmilch",
      "150 ml fettarme Milch",
      "40 g Pistazien (geröstet, ungesalzen, fein gemahlen)",
      "3 TL Erythrit",
      "½ TL Mandelaroma zuckerfrei",
      "1 Prise Salz",
      "Optional: 1 g Xanthan für cremigere Konsistenz",
    ],
    zubereitung: [
      "Pistazien fein mahlen.",
      "Alle Zutaten verrühren, Xanthan mit Schneebesen einrühren.",
      "Behälter befüllen, 24 Std. einfrieren.",
      "10 Min. antauen, 'Ice Cream' wählen.",
    ],
    tipp: "Xanthan (1 g) macht das Eis deutlich cremiger – in Reformhäusern oder online erhältlich.",
  },
  {
    id: 15,
    kategorie: "icecream",
    sorte: "🍪 Cookies & Cream-Eis",
    typ: "Milcheis",
    funktion: "Ice Cream",
    kalorien_portion: 118,
    kalorien_100g: 51,
    protein: 9,
    kohlenhydrate: 13,
    fett: 2.5,
    zucker_nat: 0,
    portionen: 2,
    zutaten: [
      "200 g Magerquark",
      "150 ml fettarme Milch",
      "2 TL Erythrit",
      "1 TL Vanilleextrakt",
      "3–4 zuckerfreie Schokokekse (z.B. kalorienreduzierte Oreo-Alternative, grob zerbröselt)",
    ],
    zubereitung: [
      "Quark, Milch, Erythrit und Vanille glatt mixen.",
      "Keksbrösel unterheben.",
      "In Behälter füllen, 24 Std. einfrieren.",
      "10 Min. antauen, 'Ice Cream' starten.",
    ],
    tipp: "Keksbrösel erst NACH dem Spinnen unterrühren – so bleiben sie knusprig!",
  },
  {
    id: 16,
    kategorie: "icecream",
    sorte: "🌿 Minze-Schoko-Chip-Eis",
    typ: "Milcheis",
    funktion: "Ice Cream",
    kalorien_portion: 96,
    kalorien_100g: 42,
    protein: 8,
    kohlenhydrate: 9,
    fett: 2,
    zucker_nat: 0,
    portionen: 2,
    zutaten: [
      "250 g Magerquark",
      "150 ml fettarme Milch",
      "½–1 TL Pfefferminzextrakt (zuckerfrei, Vorsicht: sehr intensiv!)",
      "2 TL Erythrit",
      "10 g Zartbitterschokolade (85%+, fein gehackt) oder zuckerfreie Schokotröpfchen",
    ],
    zubereitung: [
      "Quark, Milch, Erythrit und Minzextrakt glatt mixen.",
      "In Behälter füllen, 24 Std. einfrieren.",
      "10 Min. antauen, 'Ice Cream' starten.",
      "Schoko-Chips nach dem Spinnen einmischen.",
    ],
    tipp: "Minzextrakt ist sehr intensiv – mit ¼ TL starten und nach Geschmack anpassen!",
  },
];

const kategorien = [
  { id: "alle", label: "Alle", emoji: "🍦" },
  { id: "simpel", label: "1–2 Zutaten", emoji: "🌿" },
  { id: "creamifit", label: "CREAMifit", emoji: "🍃" },
  { id: "protein", label: "Protein-Eis", emoji: "💪" },
  { id: "frogurt", label: "Frozen Yogurt", emoji: "🥄" },
  { id: "icecream", label: "Ice Cream", emoji: "🍨" },
];

const katFarben = {
  simpel:    { bg: "#fff3e0", accent: "#e65100", badge: "#fff8f0" },
  creamifit: { bg: "#e8f5e9", accent: "#2e7d32", badge: "#f0fbf1" },
  protein:   { bg: "#e3f2fd", accent: "#1565c0", badge: "#f0f7ff" },
  frogurt:   { bg: "#fce4ec", accent: "#880e4f", badge: "#fff0f5" },
  icecream:  { bg: "#ede7f6", accent: "#4527a0", badge: "#f5f0ff" },
};

const katLabel = {
  simpel: "1–2 Zutaten",
  creamifit: "CREAMifit",
  protein: "Protein-Eis",
  frogurt: "Frozen Yogurt",
  icecream: "Ice Cream",
};

export default function App() {
  const [aktiv, setAktiv] = useState("alle");
  const [offen, setOffen] = useState(null);
  const [naehrtab, setNaehrtab] = useState("portion");

  const gefiltert = aktiv === "alle" ? recipes : recipes.filter((r) => r.kategorie === aktiv);

  return (
    <div style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", background: "#f5f5f3", minHeight: "100vh", paddingBottom: 40 }}>
      {/* HEADER */}
      <div style={{
        background: "linear-gradient(135deg, #1b5e20 0%, #2e7d32 45%, #43a047 80%, #66bb6a 100%)",
        padding: "28px 20px 20px",
        textAlign: "center",
      }}>
        <div style={{ fontSize: 38, marginBottom: 4 }}>🍦</div>
        <h1 style={{ color: "#fff", fontSize: 19, fontWeight: 800, margin: "0 0 4px", letterSpacing: 0.3 }}>
          Ninja Swirl CREAMi
        </h1>
        <p style={{ color: "#c8e6c9", fontSize: 12, margin: "0 0 2px" }}>
          Kalorienarm · Zuckerarm · Zuckerfrei
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 12, marginTop: 10, flexWrap: "wrap" }}>
          {[["🧊","Sorbets"],["💪","Protein"],["🥄","FroYo"],["🌿","Simpel"]].map(([e,l]) => (
            <span key={l} style={{ background: "rgba(255,255,255,0.18)", color: "#fff", borderRadius: 20, padding: "3px 10px", fontSize: 11, fontWeight: 600 }}>
              {e} {l}
            </span>
          ))}
        </div>
      </div>

      {/* NÄHRWERTE-TOGGLE */}
      <div style={{ display: "flex", justifyContent: "center", gap: 0, padding: "12px 16px 0" }}>
        <div style={{ display: "flex", background: "#e0e0e0", borderRadius: 20, padding: 2 }}>
          {[["portion","Pro Portion"],["100g","Pro 100 g"]].map(([id,label]) => (
            <button key={id} onClick={() => setNaehrtab(id)} style={{
              padding: "6px 14px", borderRadius: 18, border: "none",
              background: naehrtab === id ? "#2e7d32" : "transparent",
              color: naehrtab === id ? "#fff" : "#555",
              fontWeight: naehrtab === id ? 700 : 400,
              fontSize: 12, cursor: "pointer", transition: "all 0.15s",
            }}>{label}</button>
          ))}
        </div>
      </div>

      {/* FILTER */}
      <div style={{ display: "flex", gap: 6, padding: "10px 12px 0", flexWrap: "wrap", justifyContent: "center" }}>
        {kategorien.map((k) => (
          <button key={k.id} onClick={() => { setAktiv(k.id); setOffen(null); }} style={{
            padding: "7px 13px", borderRadius: 20, border: "none",
            background: aktiv === k.id ? "#2e7d32" : "#fff",
            color: aktiv === k.id ? "#fff" : "#444",
            fontWeight: aktiv === k.id ? 700 : 400,
            fontSize: 12, cursor: "pointer",
            boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
          }}>
            {k.emoji} {k.label}
          </button>
        ))}
      </div>

      {/* REZEPT-LISTE */}
      <div style={{ padding: "12px 10px 0", maxWidth: 580, margin: "0 auto" }}>
        {gefiltert.map((r) => {
          const farbe = katFarben[r.kategorie];
          const istOffen = offen === r.id;
          const kal = naehrtab === "portion" ? r.kalorien_portion : r.kalorien_100g;
          const suffix = naehrtab === "portion" ? "" : "";

          return (
            <div key={r.id} style={{
              background: "#fff",
              borderRadius: 14,
              marginBottom: 10,
              boxShadow: istOffen ? "0 4px 18px rgba(0,0,0,0.13)" : "0 1px 6px rgba(0,0,0,0.08)",
              overflow: "hidden",
              border: istOffen ? `1.5px solid ${farbe.accent}33` : "1.5px solid transparent",
            }}>
              {/* KARTEN-HEADER */}
              <button onClick={() => setOffen(istOffen ? null : r.id)} style={{
                width: "100%", background: "none", border: "none",
                padding: "13px 14px", cursor: "pointer", textAlign: "left",
                display: "flex", alignItems: "center", gap: 10,
              }}>
                <span style={{ fontSize: 26, lineHeight: 1 }}>{r.sorte.split(" ")[0]}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 700, fontSize: 14, color: "#1a1a1a", lineHeight: 1.3 }}>
                    {r.sorte.substring(r.sorte.indexOf(" ") + 1)}
                  </div>
                  <div style={{ fontSize: 11, color: "#777", marginTop: 3, display: "flex", alignItems: "center", gap: 5, flexWrap: "wrap" }}>
                    <span style={{
                      background: farbe.bg, color: farbe.accent,
                      borderRadius: 10, padding: "1px 7px", fontWeight: 700, fontSize: 10,
                    }}>{katLabel[r.kategorie]}</span>
                    <span>{r.funktion}</span>
                  </div>
                </div>
                <div style={{ textAlign: "center", minWidth: 44 }}>
                  <div style={{ fontWeight: 800, fontSize: 18, color: "#2e7d32", lineHeight: 1 }}>{kal}</div>
                  <div style={{ fontSize: 9, color: "#888" }}>kcal{naehrtab === "100g" ? "/100g" : "/Port."}</div>
                </div>
                <span style={{ color: "#bbb", fontSize: 14 }}>{istOffen ? "▲" : "▼"}</span>
              </button>

              {/* NÄHRWERT-CHIPS */}
              <div style={{ display: "flex", gap: 5, padding: "0 14px 11px", borderTop: "1px solid #f2f2f2", paddingTop: 9 }}>
                {[
                  { label: "Protein", val: r.protein, col: "#1565c0" },
                  { label: "Carbs", val: r.kohlenhydrate, col: "#e65100" },
                  { label: "Fett", val: r.fett, col: "#6a1b9a" },
                  { label: "Zucker", val: r.zucker_nat, col: r.zucker_nat === 0 ? "#2e7d32" : "#c62828" },
                ].map((n) => (
                  <div key={n.label} style={{
                    flex: 1, background: "#f8f8f8", borderRadius: 8,
                    padding: "5px 2px", textAlign: "center",
                  }}>
                    <div style={{ fontWeight: 700, fontSize: 13, color: n.col }}>{n.val}g</div>
                    <div style={{ fontSize: 9, color: "#999" }}>{n.label}</div>
                  </div>
                ))}
              </div>

              {/* AUFKLAPP-INHALT */}
              {istOffen && (
                <div style={{ padding: "0 14px 16px", borderTop: "1px solid #f0f0f0" }}>

                  {/* Zutaten */}
                  <div style={{ marginTop: 14, marginBottom: 14 }}>
                    <div style={{ fontWeight: 700, fontSize: 11, color: farbe.accent, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>
                      Zutaten · {r.portionen} Portionen
                    </div>
                    {r.zutaten.map((z, i) => (
                      <div key={i} style={{ display: "flex", gap: 8, marginBottom: 5, fontSize: 13.5 }}>
                        <span style={{ color: farbe.accent, fontSize: 14, lineHeight: 1.1, flexShrink: 0 }}>●</span>
                        <span style={{ color: "#333", lineHeight: 1.4 }}>{z}</span>
                      </div>
                    ))}
                  </div>

                  {/* Zubereitung */}
                  <div style={{ marginBottom: 14 }}>
                    <div style={{ fontWeight: 700, fontSize: 11, color: "#1565c0", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>
                      Zubereitung
                    </div>
                    {r.zubereitung.map((s, i) => (
                      <div key={i} style={{ display: "flex", gap: 10, marginBottom: 8, fontSize: 13.5 }}>
                        <span style={{
                          minWidth: 21, height: 21, background: "#1565c0", color: "#fff",
                          borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                          fontWeight: 800, fontSize: 10, flexShrink: 0,
                        }}>{i + 1}</span>
                        <span style={{ color: "#444", lineHeight: 1.5 }}>{s}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tipp */}
                  <div style={{
                    background: "#fffde7", border: "1px solid #fdd835",
                    borderRadius: 8, padding: "9px 12px", fontSize: 12.5, color: "#555",
                    marginBottom: 12,
                  }}>
                    <span style={{ fontWeight: 700, color: "#f57f17" }}>💡 Tipp: </span>{r.tipp}
                  </div>

                  {/* Nährwerttabelle */}
                  <div style={{ background: farbe.badge, borderRadius: 8, padding: "10px 12px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                      <div style={{ fontWeight: 700, fontSize: 11, color: farbe.accent, textTransform: "uppercase", letterSpacing: 0.8 }}>
                        Nährwerte
                      </div>
                      <div style={{ display: "flex", gap: 0, background: "#e0e0e0", borderRadius: 12, padding: 2 }}>
                        {[["portion","Portion"],["100g","100 g"]].map(([id,label]) => (
                          <button key={id} onClick={() => setNaehrtab(id)} style={{
                            padding: "3px 8px", borderRadius: 10, border: "none",
                            background: naehrtab === id ? farbe.accent : "transparent",
                            color: naehrtab === id ? "#fff" : "#666",
                            fontSize: 10, fontWeight: 600, cursor: "pointer",
                          }}>{label}</button>
                        ))}
                      </div>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5px 12px", fontSize: 12.5 }}>
                      <span style={{ color: "#666" }}>🔥 Kalorien</span>
                      <span style={{ fontWeight: 700 }}>{naehrtab === "portion" ? r.kalorien_portion : r.kalorien_100g} kcal</span>
                      <span style={{ color: "#666" }}>💪 Protein</span>
                      <span style={{ fontWeight: 700 }}>{r.protein} g</span>
                      <span style={{ color: "#666" }}>🌾 Kohlenhydrate</span>
                      <span style={{ fontWeight: 700 }}>{r.kohlenhydrate} g</span>
                      <span style={{ color: "#666" }}>🫒 Fett</span>
                      <span style={{ fontWeight: 700 }}>{r.fett} g</span>
                      <span style={{ color: "#666" }}>🍬 Zucker ges.</span>
                      <span style={{ fontWeight: 700, color: r.zucker_nat === 0 ? "#2e7d32" : "#c62828" }}>
                        {r.zucker_nat} g {r.zucker_nat === 0 ? "✓" : ""}
                      </span>
                    </div>
                    {r.zucker_nat > 0 && (
                      <div style={{ fontSize: 10, color: "#999", marginTop: 5 }}>
                        * Natürlicher Fruchtzucker – kein zugesetzter Zucker
                      </div>
                    )}
                    <div style={{ fontSize: 10, color: "#aaa", marginTop: 5 }}>
                      {naehrtab === "portion" ? "Angaben pro Portion (½ Behälter, ca. 230 g)" : "Angaben pro 100 g"}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* FOOTER */}
      <div style={{ padding: "16px 12px 0", maxWidth: 560, margin: "0 auto" }}>
        <div style={{
          background: "#e8f5e9", borderRadius: 10, padding: "12px 14px",
          fontSize: 11.5, color: "#555", lineHeight: 1.7,
        }}>
          <strong>⚠️ Hinweise:</strong> Behälter immer mind. <strong>24 Std.</strong> einfrieren · Vor dem Verarbeiten <strong>5–10 Min.</strong> antauen · Nährwerte sind Richtwerte (je nach Marke können Werte leicht abweichen) · Zuckerersatz-Angaben nach Geschmack anpassen
        </div>
      </div>
    </div>
  );
}
