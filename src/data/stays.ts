import type { Stay } from "./types";

// Austria '26 — BOOKED. Aparthotel Stacherhof in Fügen (Zillertal),
// Chalet Suite (Option 1): check-in Wed 12 Aug, check-out Wed 19 Aug
// = 7 nights, breakfast included.
//
// NOTE: the trip runs to 20 Aug, so the night of 19→20 Aug is NOT
// covered by this booking — that last night is still open (either
// extend here or take a Munich-airport hotel for the drive home).
// The booking confirmation / price lives in the encrypted Tickets
// packet, never in this file.
export const stays: Stay[] = [
  {
    id: "stay-stacherhof",
    name: "Aparthotel Stacherhof",
    category: "stay",
    region: "south",
    description:
      "Home for seven nights: a 71 m² Chalet Suite at the Stacherhof, on the sunny hillside above Fügen at the mouth of the Zillertal. Two separate bedrooms (so the kids sleep behind a door), a full kitchen, two bathrooms with walk-in showers, a living room with a fireplace and a balcony over the valley. Breakfast is a proper buffet and included every morning. Outside there's a natural swimming pond, a new playground and a ball-games lawn — which means the afternoons can end with the kids running themselves tired without anyone getting back in the car. The Spieljoch gondola is in the same village, minutes away.",
    shortDescription:
      "Our booked base — a 71 m² chalet suite above Fügen, with breakfast, a swim pond and a playground.",
    // A freely-licensed view of the Zillertal — the actual valley the
    // hotel sits in. (Not a photo of the property itself; swap in one of
    // your own once you're there.)
    image: "./images/hero/tirol-valley.jpg",
    website: "https://www.stacherhof-zillertal.at/",
    bookingLink: "https://www.stacherhof-zillertal.at/",
    address: "Albeinerweg 5, 6263 Fügen, Austria",
    coords: [47.3311, 11.8576],
    checkIn: "2026-08-12",
    checkOut: "2026-08-19",
    nights: 7,
    highlights: [
      "71 m² chalet suite: two bedrooms, kitchen, two bathrooms, living room and a valley balcony",
      "Breakfast buffet included every morning — one less thing to organise with toddlers",
      "Natural swimming pond, new playground and ball-games lawn on site",
      "Free monitored underground parking (watch the 2.20 m height limit)",
      "The Spieljoch family gondola is in Fügen itself — a five-minute hop",
      "Weekly cleaning with fresh linen, daily rubbish service, WiFi throughout"
    ],
    warnings: [
      "CONFIRMED: there is no air conditioning. The suite is on a hillside with a balcony, so the Alpine routine is the answer — shutters and curtains shut through the afternoon, windows wide open once it cools, and a clip-on fan for the kids' room. Ask reception for a fan as well.",
      "The booking ends on the morning of 19 Aug — that day you check out, spend the last Austrian morning at Lauserland and drive to a hotel in the Freising / Munich-airport area (still to book).",
      "The sauna / wellness area is 14+, so it's not an option with Gili and Tom — the swim pond and playground are the kids' territory.",
      "Underground garage height is 2.20 m — fine for the booked SUV class, but check if you end up with a roof box.",
      "It's in the Zillertal, not the Alpbachtal: Söll and Kufstein are now ~45–50 min away, while Spieljoch, Jenbach and Rattenberg are very close."
    ]
  }
];
