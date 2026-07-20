import type { Tip } from "./types";

// Austria '26 — culture & practical tips filled from the real
// destination. severity: "warning" for things that cost money or catch
// you out (vignette, holiday closures); "critical" reserved for genuine
// safety; "info" for the rest.
export const tips: Tip[] = [
  {
    id: "allergies",
    title: "Kids' food allergies — Gili (sesame) & Tom (banana)",
    body:
      "Gili is allergic to sesame (German: Sesam) and Tom to banana (Banane). We carry two EpiPens at all times — in the day bag, never checked luggage. Helpfully, EU/Austrian law requires the 14 major allergens (sesame is one of them) to be declared, so restaurant staff can tell you what's in a dish — just ask 'Enthält das Sesam?' or 'Enthält das Banane?' ('Does this contain sesame / banana?'). Watch sesame on bread rolls, buns and Backwaren, and banana in smoothies, desserts and baby snacks. At the first sign of a severe reaction — swelling, trouble breathing, spreading hives — give the EpiPen into the outer thigh and call 144 (or 112) immediately, even after the EpiPen.",
    severity: "critical",
    icon: "alert-triangle"
  },
  {
    id: "vignette",
    title: "Buy the Austrian motorway vignette before you cross the border",
    body:
      "Austria's motorways (the A-roads, including the A12 you'll live on) require a vignette — and a German rental car does NOT come with one. The moment you cross from Bavaria into Tyrol you're liable. Buy a digital 10-day vignette (about €12.80 for a car in 2026) online at the ASFINAG shop, linked to the number plate — it's valid immediately for the 1- and 10-day options. Driving Austrian motorways without one risks an on-the-spot replacement toll of well over €120.",
    severity: "warning",
    icon: "car"
  },
  {
    id: "no-german-vignette",
    title: "No German vignette needed for the airport drive",
    body:
      "Germany has no car vignette, so the drive from Munich Airport down the A8/A93 to the Tyrolean border needs no sticker. You only need the Austrian one, from the border onward. (A few Austrian alpine passes and tunnels have their own separate tolls, but you won't need them for this itinerary.)",
    severity: "info",
    icon: "info"
  },
  {
    id: "assumption-day",
    title: "Aug 15 is a public holiday — shops shut",
    body:
      "Mariä Himmelfahrt (Assumption Day), Saturday Aug 15, is a national holiday falling mid-trip: supermarkets and most shops close, like a Sunday. Museums vary, but outdoor attractions, lifts, cafés and restaurants stay open — which is exactly why the Innsbruck zoo-and-old-town day is parked here. Stock up on groceries the day before.",
    severity: "warning",
    icon: "calendar"
  },
  {
    id: "sunday-closures",
    title: "Supermarkets close on Sundays",
    body:
      "Austrian supermarkets (MPreis, SPAR, Billa) are closed on Sundays and public holidays. Petrol-station shops and bakeries have limited Sunday hours. Do the big grocery run on Saturday so you're not caught out with two hungry toddlers on a Sunday morning.",
    severity: "warning",
    icon: "shopping-cart"
  },
  {
    id: "child-seats",
    title: "Child car seats are the law — sort them with Sixt",
    body:
      "Austria (and Germany) require children under 135 cm and under 14 to travel in an appropriate child restraint. Bringing your own well-fitted seats is often the safest and cheapest option; otherwise reserve them with the Sixt booking in advance (supply on the day isn't guaranteed). Confirm a rear-facing/toddler seat for Tom and a forward seat for Gili.",
    severity: "warning",
    icon: "shield"
  },
  {
    id: "mountain-weather",
    title: "Mountain mornings, thunderstorm afternoons",
    body:
      "August in the Alps means warm sunny mornings and a real chance of afternoon thunderstorms. Do gondolas and exposed mountain activities in the morning and keep afternoons flexible or valley-based. Even on a hot valley day it's markedly colder and windier at the top of a lift — pack a warm layer and a rain shell for everyone.",
    severity: "warning",
    icon: "cloud"
  },
  {
    id: "sun-altitude",
    title: "Alpine sun is fierce — cover the kids",
    body:
      "At altitude the UV is strong even when it feels mild. Sun hats, high-factor cream and shade breaks for Gili and Tom, especially on the lake and mountain days. Reapply after water play at Achensee and the Hexenwasser.",
    severity: "info",
    icon: "sun"
  },
  {
    id: "tipping",
    title: "Tipping: round up ~5–10%",
    body:
      "Service is included, but it's normal to round up or add about 5–10% for good service. You don't leave it on the table — tell the server the total you want to pay as you hand over cash or card (e.g. the bill is €43.50, say 'make it €47').",
    severity: "info",
    icon: "coins"
  },
  {
    id: "cash-huts",
    title: "Carry cash for huts and small spots",
    body:
      "Mountain huts (Almen), small village bakeries and some family cafés are cash-preferred or cash-only, and mobile signal can drop in the valleys. Keep some euros in the day bag — card isn't guaranteed up a mountain.",
    severity: "info",
    icon: "wallet"
  },
  {
    id: "quiet-hours",
    title: "Respect the quiet hours (Ruhezeit)",
    body:
      "Austria observes a midday quiet and a night quiet (roughly 22:00–06:00, plus a Sunday/holiday all-day calm). In a family hotel or apartment that means keeping noise down at nap-time and after bedtime — handy actually, since it lines up with the kids' own schedule.",
    severity: "info",
    icon: "moon"
  },
  {
    id: "pfand-water",
    title: "Tap water is excellent; some bottles have a deposit",
    body:
      "Austrian (and especially Tyrolean) tap water is superb alpine water — refill bottles freely rather than buying. Note Austria introduced a deposit (Pfand) on many single-use plastic and can drinks in 2025, so return those to the machine for your coins back.",
    severity: "info",
    icon: "droplet"
  },
  {
    id: "entry-documents",
    title: "Passports & EU entry for Israeli travellers",
    body:
      "Israeli passport holders enter the Schengen area (Austria/Germany) visa-free for short stays; make sure passports are valid well beyond the trip. ETIAS, the EU's pre-travel authorisation, has been repeatedly delayed — check its status close to departure and register online if it's live by August 2026. Carry travel/health insurance details; Israel has no EHIC.",
    severity: "warning",
    icon: "passport"
  },
  {
    id: "language",
    title: "A little German goes a long way",
    body:
      "English is widely understood in tourist Tyrol, but a warm 'Servus' or 'Grüß Gott' (hello) and 'Danke' opens doors. Locals greet with 'Grüß Gott' by day; 'Servus' is the friendly all-purpose hello and goodbye. The word-of-the-day cards will keep you stocked.",
    severity: "info",
    icon: "message-circle"
  }
];
