import type { Service } from "./types";

// Austria '26 — supermarkets, fuel and family-friendly eats near the
// Alpbachtal base and along the day-trip routes. `base: "north"` =
// base-area / Inn valley west; `base: "south"` = east side. Austrian
// supermarkets close on Sundays and public holidays (incl. Aug 15) —
// stock up on Saturday. Hours are typical patterns; confirm on the day.
export const services: Service[] = [
  // ---- Supermarkets ----
  {
    id: "mpreis-brixlegg",
    name: "MPreis Brixlegg",
    category: "supermarket",
    region: "north",
    base: "north",
    description:
      "MPreis is the beloved Tyrolean supermarket chain, most branches with a 'Baguette' café-bakery attached. The Brixlegg store is the closest full shop to the Alpbachtal base — good for breakfast supplies, toddler snacks, nappies and a quick coffee.",
    shortDescription: "Closest full supermarket to the base, with a bakery-café.",
    coords: [47.4310, 11.8790],
    address: "Brixlegg, 6230, Austria",
    hours: "Mon–Fri ~07:15–19:30, Sat ~07:15–18:00, closed Sun & holidays",
    website: "https://www.mpreis.at/"
  },
  {
    id: "spar-woergl",
    name: "SPAR / EUROSPAR Wörgl",
    category: "supermarket",
    region: "south",
    base: "south",
    description:
      "A larger EUROSPAR in Wörgl on the east side — handy to stock up before or after the Söll/Kufstein day trips. Wider range than the village shops, with fresh produce, baby items and a deli counter.",
    shortDescription: "Bigger supermarket on the east side, good for a proper stock-up.",
    coords: [47.4930, 12.0630],
    address: "Wörgl, 6300, Austria",
    hours: "Mon–Fri ~07:30–19:30, Sat ~07:30–18:00, closed Sun & holidays",
    website: "https://www.spar.at/"
  },
  {
    id: "mpreis-jenbach",
    name: "MPreis Jenbach",
    category: "supermarket",
    region: "north",
    base: "north",
    description:
      "On the way to Achensee, the Zillertal and Innsbruck — a convenient MPreis to grab picnic supplies before a mountain or lake day when the huts are pricey and toddler patience is short.",
    shortDescription: "West-side MPreis, good for picnic supplies en route.",
    coords: [47.3880, 11.7770],
    address: "Jenbach, 6200, Austria",
    hours: "Mon–Fri ~07:15–19:30, Sat ~07:15–18:00, closed Sun & holidays",
    website: "https://www.mpreis.at/"
  },
  // ---- Fuel ----
  {
    id: "fuel-a12-kramsach",
    name: "Petrol station — A12 near Kramsach/Brixlegg",
    category: "gas",
    region: "north",
    base: "north",
    description:
      "The everyday fill-up near the base by the A12 junction. Diesel is common on Austrian rental SUVs — check which the Sixt car takes before the first fill. Fuel is cheaper in Austria than at the German motorway stations, so tank up this side.",
    shortDescription: "Everyday fuel stop near the base by the A12.",
    coords: [47.4360, 11.8850],
    address: "Near Kramsach/Brixlegg A12 junction, Austria",
    hours: "Daily, long hours"
  },
  {
    id: "fuel-muc-return",
    name: "Fuel before Munich Airport return",
    category: "gas",
    region: "transit",
    base: "north",
    description:
      "Fill the tank on Aug 20 before returning the Sixt car — the rental is expected back full. Use a station on the A8/near the airport before the P6 return garage; leave a buffer for the 13:00 return and the 16:30 flight.",
    shortDescription: "Top-up before the Sixt return — return the car full.",
    coords: [48.3400, 11.7600],
    address: "Near Munich Airport, Germany",
    hours: "Daily, long hours"
  },
  // ---- Restaurants ----
  {
    id: "restaurant-alpbach-gasthof",
    name: "Gasthof terrace, Alpbach village",
    category: "restaurant",
    region: "south",
    base: "south",
    description:
      "A classic Tyrolean gasthof on Alpbach's flower-decked main lane — schnitzel, Kaspressknödel soup, Kaiserschmarrn, big terraces and high chairs. Kids are welcome everywhere in Tyrol; portions are generous and a plate of Pommes keeps a toddler happy. The relaxed lunch on the slow village day.",
    shortDescription: "Classic village gasthof — schnitzel, dumplings, terrace, kid-friendly.",
    coords: [47.3990, 11.9430],
    address: "Alpbach village centre, 6236 Alpbach, Austria",
    hours: "Lunch & dinner; some kitchens close mid-afternoon"
  },
  {
    id: "restaurant-reintalersee",
    name: "Lakeside restaurant, Reintalersee (Kramsach)",
    category: "restaurant",
    region: "south",
    base: "north",
    description:
      "A lake-terrace spot by the warm Reintalersee near the base — easy for a swim-then-lunch on the Rattenberg day, with space for the kids to potter and a menu of grilled fish, salads and the usual Tyrolean staples.",
    shortDescription: "Lakeside terrace by the Reintalersee — swim then lunch.",
    coords: [47.4540, 11.8940],
    address: "Reintalersee, 6233 Kramsach, Austria",
    hours: "Daytime & dinner in summer season"
  },
  {
    id: "restaurant-hall-altstadt",
    name: "Café / restaurant, Hall in Tirol old town",
    category: "restaurant",
    region: "north",
    base: "north",
    description:
      "A terrace café on Hall's upper Stadtplatz for a relaxed lunch after Swarovski — coffee and cake, light lunches, and a car-free square where a stroller parks easily and the kids can wander safely.",
    shortDescription: "Old-town terrace café in Hall — relaxed post-Swarovski lunch.",
    coords: [47.2816, 11.5108],
    address: "Oberer Stadtplatz, 6060 Hall in Tirol, Austria",
    hours: "Daytime; café hours"
  },
  {
    id: "restaurant-kufstein-inn",
    name: "Riverside restaurant, Kufstein old town",
    category: "restaurant",
    region: "south",
    base: "south",
    description:
      "A riverside terrace in Kufstein's old town below the fortress — a natural lunch stop around the noon organ recital. Tyrolean and Italian-leaning menus (the border is close), gelato nearby for Gili, and views up to the fortress rock.",
    shortDescription: "Riverside old-town lunch under the Kufstein fortress.",
    coords: [47.5830, 12.1700],
    address: "Unterer Stadtplatz, 6330 Kufstein, Austria",
    hours: "Lunch & dinner"
  }
];

export function getService(id: string): Service | undefined {
  return services.find(s => s.id === id);
}
