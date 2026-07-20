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
    text: "Book the hotel — still open!",
    detail: "8 nights in the Alpbachtal / Inn valley (Aug 12–20). Filter for air conditioning + a family room/apartment big enough for 2 adults + 2 kids. See the Stays section for candidates.",
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
    id: "meds",
    text: "Kids' meds, thermometer & first-aid basics",
    detail: "Calpol/paracetamol, plasters, any regular meds — plus the family's insurance details."
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
