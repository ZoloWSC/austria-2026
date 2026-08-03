import type { ChecklistItem } from "./types";

// Austria '26 — pre-trip bookings + toddler-in-the-Alps packing.
// done: true = already sorted; urgent: true = still open and important.
export const bookingChecklist: ChecklistItem[] = [
  {
    id: "flights",
    text: "El Al flights booked (LY351 out, LY254 back)",
    detail: "Out Aug 11 TLV 15:45 → MUC 18:50; back Aug 20 MUC 16:30 → TLV 21:15. Booking code is in the Tickets section (unlock with the family PIN).",
    done: true
  },
  {
    id: "hilton",
    text: "First night booked — Hilton Munich Airport",
    detail: "One night (Aug 11) at the airport so the kids get dinner and sleep before the drive into Tyrol. Confirmation is in the Tickets section (unlock with the family PIN).",
    done: true
  },
  {
    id: "car",
    text: "Sixt rental car booked",
    detail: "Luxury Elite SUV. Pickup Aug 12 morning (MUC Airport Center), return Aug 20 13:00 (Terminalstr. Mitte / Parkhaus P6). Booking ref is in the Tickets section (unlock with the family PIN).",
    done: true
  },
  {
    id: "hotel",
    text: "Hotel booked — Aparthotel Stacherhof, Fügen",
    detail: "Chalet Suite, 71 m², breakfast included. Check-in Wed 12 Aug, check-out Wed 19 Aug (7 nights). Confirmation is in the Tickets section.",
    done: true
  },
  {
    id: "last-night",
    text: "Sort the last night (19→20 Aug) — still open!",
    detail: "The Stacherhof booking ends on 19 Aug but we fly home on the 20th. Either extend one night in Fügen, or book near Munich Airport (which makes the 13:00 car return and 16:30 flight much calmer).",
    urgent: true
  },
  {
    id: "hotel-ac",
    text: "Call the Stacherhof about air conditioning",
    detail: "The offer never mentions AC. Ring +43 5288 62753 to ask whether the Chalet Suite has it — and if not, ask for a fan and plan on shutters-down-by-day, windows-open-at-night.",
    link: "tel:+43528862753",
    urgent: true
  },
  {
    id: "child-seats",
    text: "Sort child car seats with Sixt (or bring your own)",
    detail: "Austria requires seats for kids under 135 cm. Reserve a toddler seat for Tom and a forward seat for Gili with the Sixt booking, or bring your own — supply on the day isn't guaranteed.",
    link: "https://www.sixt.com/",
    urgent: true
  },
  {
    id: "vignette",
    text: "Buy the Austrian 10-day digital vignette",
    detail: "~€12.80 for a car (2026), linked to the number plate — buy the moment you have the rental plate, valid immediately. Needed the second you cross into Austria.",
    link: "https://shop.asfinag.at/en/",
    urgent: true
  },
  {
    id: "swarovski",
    text: "Pre-book Swarovski Kristallwelten time slot",
    detail: "Summer slots sell out — reserve a timed entry online for the Wattens crystal-worlds day.",
    link: "https://kristallwelten.swarovski.com/en"
  },
  {
    id: "passports",
    text: "Check passports valid well past Aug 2026",
    detail: "All four passports. Israeli citizens enter Schengen visa-free for short stays.",
    urgent: true
  },
  {
    id: "etias",
    text: "Check ETIAS status before departure",
    detail: "The EU's pre-travel authorisation has been delayed repeatedly — check close to the trip whether it's live for August 2026 and register online if so.",
    link: "https://travel-europe.europa.eu/etias_en"
  },
  {
    id: "insurance",
    text: "Travel & health insurance for the family",
    detail: "Israel has no EHIC — arrange private travel/health insurance and save the policy + emergency number offline.",
    urgent: true
  },
  {
    id: "checkin",
    text: "El Al online check-in (from 24h before)",
    detail: "Check in online the day before each flight; note terminal 3 (TLV) and terminal 1 (MUC).",
    link: "https://www.elal.com/"
  }
];

export const packingChecklist: ChecklistItem[] = [
  {
    id: "carrier",
    text: "Hiking baby carrier for Tom",
    detail: "Essential for the gondola-top loops (Juppi's Zauberwald, Spieljoch) and cobbled old towns where a stroller struggles."
  },
  {
    id: "stroller",
    text: "One rugged stroller",
    detail: "Fine on lake promenades and flat old towns; the carrier covers the rest."
  },
  {
    id: "warm-layers",
    text: "Warm layer + rain shell for everyone",
    detail: "It's 10–15°C colder at the top of a lift than in the valley, and August afternoons bring thunderstorms."
  },
  {
    id: "water-clothes",
    text: "Swimwear, water sandals & a full change of clothes",
    detail: "For Achensee, the Reintalersee and especially the Hexenwasser — the kids WILL come home soaked and muddy."
  },
  {
    id: "sun",
    text: "Sun hats & high-factor sun cream",
    detail: "Alpine UV is strong; reapply after water play."
  },
  {
    id: "closed-shoes",
    text: "Closed shoes for Gili (for the alpine coaster)",
    detail: "Lauser-Sauser requires closed shoes; a hair tie helps too."
  },
  {
    id: "epipens",
    text: "EpiPens ×2 — in the day bag, never checked luggage",
    detail: "For Gili's sesame allergy and Tom's banana allergy. Keep two on you at all times (one can fail or be needed twice). Check the expiry dates before you fly, and don't let them freeze or bake in a hot car.",
    urgent: true
  },
  {
    id: "allergy-card",
    text: "Allergy cards in German (for restaurants)",
    detail: "A printed/phone card to hand to staff: 'Gili hat eine schwere Sesamallergie. Tom hat eine Bananenallergie.' (Gili has a severe sesame allergy; Tom has a banana allergy.) Sesam = sesame, Banane = banana.",
    urgent: true
  },
  {
    id: "meds",
    text: "Kids' meds, antihistamine, thermometer & first-aid basics",
    detail: "Calpol/paracetamol, a kids' antihistamine (for mild allergic reactions — the EpiPen is only for severe ones), plasters, any regular meds — plus the family's insurance details."
  },
  {
    id: "cash",
    text: "Some euros in cash",
    detail: "Mountain huts and small bakeries are often cash-only, and signal drops in the valleys."
  },
  {
    id: "offline-maps",
    text: "Download offline maps of Tyrol",
    detail: "Google Maps offline area for Tyrol/Bavaria — data and signal are patchy in the mountains."
  },
  {
    id: "snacks",
    text: "Toddler snacks & refillable water bottles",
    detail: "Tyrolean tap water is superb — refill freely. Snacks keep the peace between meals."
  }
];
