import type { Stay } from "./types";

// Austria '26 — NOT BOOKED YET. Three candidate bases for the 8 Tyrol nights,
// chosen for the family's two must-haves: air conditioning (genuinely
// rare in the Tyrolean Alps — most hotels rely on cool mountain nights)
// and big family rooms / apartments for two small kids. Every entry
// carries a "confirm AC in your room category" warning because AC in
// this region is often only in some categories, or absent entirely.
// Verify the exact address, price and AC before booking.
export const stays: Stay[] = [
  {
    id: "stay-alpbacherhof",
    name: "Das Alpbacherhof (candidate)",
    category: "stay",
    region: "south",
    description:
      "A four-star family and wellness hotel in the heart of Alpbach — Austria's prettiest village and only ~20 min from every east-side day trip. Family rooms and suites, a big indoor/outdoor pool and spa, and a kids' programme make it an easy soft-landing with toddlers. As with most Tyrolean hotels, air conditioning is not guaranteed in every room, so this is a candidate to confirm.",
    shortDescription: "4★ family & wellness hotel in Alpbach village, with pool and spa.",
    image: "./images/stay-alpbacherhof.jpg",
    website: "https://www.alpbacherhof.at/en/",
    bookingLink: "https://www.alpbacherhof.at/en/",
    address: "Alpbach 236, 6236 Alpbach, Austria",
    coords: [47.3995, 11.9435],
    checkIn: "2026-08-12",
    checkOut: "2026-08-20",
    nights: 8,
    highlights: [
      "In Alpbach village — central to Lauser-Sauser, Juppi's Zauberwald and Zillertal day trips",
      "Family rooms and suites sized for a family of four",
      "Indoor/outdoor pool and spa — a good rainy-afternoon fallback",
      "Half-board options mean one less dinner logistics headache with tired kids"
    ],
    warnings: [
      "NOT BOOKED YET — candidate. Confirm availability for the exact dates.",
      "Air conditioning is not standard in Tyrol — confirm AC is included in your specific room category before booking.",
      "Village-elevation hotel; a valley-floor stay may be a touch warmer but closer to the motorway."
    ]
  },
  {
    id: "stay-kramsach-aparthotel",
    name: "Aparthotel / Landhaus near Reintalersee, Kramsach (candidate)",
    category: "stay",
    region: "south",
    description:
      "A self-catering apartment base on the valley floor at Kramsach, beside the warm Reintalersee swimming lake and right by the A12 for fast day trips in both directions. Apartments give you a separate bedroom for the kids, a kitchen for toddler meals and a washing machine — the practical choice for a family of four. Valley-floor apartments in this area are also among the more likely to actually offer air conditioning.",
    shortDescription: "Self-catering family apartment by the Reintalersee, on the valley floor.",
    image: "./images/stay-kramsach-aparthotel.jpg",
    website: "https://www.alpbachtal.at/en/search-and-book/accommodation",
    bookingLink: "https://www.alpbachtal.at/en/search-and-book/accommodation",
    address: "Kramsach (Reintalersee), 6233 Kramsach, Austria",
    coords: [47.4530, 11.8930],
    checkIn: "2026-08-12",
    checkOut: "2026-08-20",
    nights: 8,
    highlights: [
      "Apartment layout — separate kids' bedroom, kitchen and washing machine",
      "Walking distance to the Reintalersee, Tyrol's warmest swimming lake",
      "Right by the A12 — quick to Innsbruck (west) and Kufstein/Söll (east)",
      "Valley-floor location: the best odds of finding real air conditioning"
    ],
    warnings: [
      "NOT BOOKED YET — candidate. Filter the Alpbachtal booking portal for 'air conditioning' and an apartment sized for 2 adults + 2 kids.",
      "Confirm AC on the specific unit — even here it is not universal.",
      "Self-catering means no hotel restaurant on-site; plan dinners or pick a place near a gasthof."
    ]
  },
  {
    id: "stay-innsbruck-ac-hotel",
    name: "Air-conditioned hotel near Innsbruck / Inn valley (candidate)",
    category: "stay",
    region: "north",
    description:
      "A fallback if a genuinely air-conditioned room proves hard to find in the Alpbachtal itself: a modern hotel on the Inn valley floor toward Innsbruck, where larger business-and-leisure hotels are far more likely to have real AC. It shifts the base a little west, lengthening the east-side drives (Söll, Kufstein) slightly, but guarantees a cool room for the kids on a hot August night.",
    shortDescription: "Valley-floor fallback toward Innsbruck — best odds of real AC.",
    image: "./images/stay-innsbruck-ac-hotel.jpg",
    website: "https://www.innsbruck.info/en/accommodation.html",
    bookingLink: "https://www.innsbruck.info/en/accommodation.html",
    address: "Inn valley near Innsbruck, Tyrol, Austria",
    coords: [47.2830, 11.4200],
    checkIn: "2026-08-12",
    checkOut: "2026-08-20",
    nights: 8,
    highlights: [
      "Modern valley-floor hotels here are the most likely to have genuine air conditioning",
      "Family rooms / connecting rooms common in this class of hotel",
      "Closest of the three to the west-side sights (Innsbruck, Alpenzoo, Swarovski, Achensee)",
      "Easy motorway access keeps every day trip on the A12"
    ],
    warnings: [
      "NOT BOOKED YET — candidate, and a compromise: it lengthens the east-side drives (Söll, Kufstein) by ~20–30 min.",
      "Still confirm AC explicitly — filter for it and read the room description.",
      "A valley-floor location is warmer than the villages; AC matters more here, not less."
    ]
  }
];
