import type { Winery } from "./types";

// Austria '26 — Tyrol is beer-and-schnaps country, not wine country, so
// this repurposes the "winery" slot as local DRINK EXPERIENCES: a
// valley brewery, a fruit-schnaps distillery culture, and a coffee
// roaster. `appellation` is used as a style label. Only places
// plausibly open to visitors are listed — confirm tour times/booking
// before going, and note kids can come along but tastings are adults-only.
export const wineries: Winery[] = [
  {
    id: "zillertal-bier",
    name: "Zillertal Bier (BrauKunstHaus)",
    region: "south",
    appellation: "Brewery — Zell am Ziller, Zillertal",
    description:
      "One of Austria's oldest private breweries, brewing in Zell am Ziller since 1500. The modern BrauKunstHaus visitor centre tells the story of Zillertal beer with a shop and tasting room; the classic Zillertal Weissbier and Gauder Bock are the local pints you'll see on every menu. A fun rainy-afternoon stop on the Zillertal day — kids welcome to look around, tasting for the adults.",
    website: "https://www.zillertal-bier.at/",
    address: "Bräuweg 18, 6280 Zell am Ziller, Austria",
    coords: [47.2320, 11.8850],
    bookingNote:
      "Check BrauKunstHaus visitor-centre and tour hours before going — tours/tastings may need booking.",
    image: "./images/winery-zillertal-bier.jpg"
  },
  {
    id: "tyrol-schnaps",
    name: "Tyrolean Edelbrand distillery",
    region: "south",
    appellation: "Obstbrand (fruit-schnaps) distillery",
    description:
      "Tyrol's farms turn their orchard fruit into Edelbrände — clear, potent fruit schnaps (Marille/apricot, Zwetschke/plum, Vogelbeer/rowan, Williams pear). Several small family Schnapsbrennereien around the Alpbachtal and Zillertal open their cellars for tastings and sales. A very Tyrolean end to a day — the digestif that closes a big mountain dinner. Strictly adults, of course.",
    bookingNote:
      "Small family operations — ring ahead. Ask the hotel to point you to a nearby Schnapsbrennerei open for tastings.",
    address: "Alpbachtal / Zillertal area, Tyrol, Austria",
    coords: [47.4200, 11.9200],
    image: "./images/winery-tyrol-schnaps.jpg"
  },
  {
    id: "tyrol-coffee-roaster",
    name: "Tyrolean coffee roastery (Kaffeerösterei)",
    region: "north",
    appellation: "Coffee roaster & café",
    description:
      "Austria's coffee-house culture reaches deep into Tyrol, and small-batch roasteries in the Inn valley (around Innsbruck and Hall) serve the real Wiener Melange and Verlängerter alongside cake. A gentle, kid-friendly stop between old-town wanders — the non-alcoholic 'tasting' the whole family can enjoy, with cocoa and Skiwasser for the little ones.",
    address: "Innsbruck / Hall in Tirol area, Tyrol, Austria",
    coords: [47.2686, 11.3933],
    bookingNote: "No booking needed — just a good café stop between old-town sights.",
    image: "./images/winery-tyrol-coffee-roaster.jpg"
  }
];

export const wineriesByRegion = (r: "north" | "south") =>
  wineries.filter(w => w.region === r);
