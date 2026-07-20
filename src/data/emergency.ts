import type { EmergencyGroup } from "./types";

// Austria '26 — verified emergency contacts for Tyrol. 112 works
// everywhere in the EU; Austria's dedicated numbers are 133 (police),
// 122 (fire), 144 (ambulance) and 140 (alpine/mountain rescue).
export const emergencyGroups: EmergencyGroup[] = [
  {
    title: "Emergency numbers (Austria)",
    items: [
      {
        label: "Europe-wide emergency",
        value: "112",
        detail: "Works from any phone anywhere in the EU — connects to police/ambulance/fire.",
        type: "phone",
        link: "tel:112"
      },
      {
        label: "Ambulance (Rettung)",
        value: "144",
        detail: "Medical emergencies in Austria.",
        type: "phone",
        link: "tel:144"
      },
      {
        label: "Police (Polizei)",
        value: "133",
        detail: "Austrian police.",
        type: "phone",
        link: "tel:133"
      },
      {
        label: "Fire (Feuerwehr)",
        value: "122",
        detail: "Fire service.",
        type: "phone",
        link: "tel:122"
      },
      {
        label: "Alpine / mountain rescue",
        value: "140",
        detail: "Bergrettung — for emergencies in the mountains.",
        type: "phone",
        link: "tel:140"
      }
    ]
  },
  {
    title: "Medical near the base",
    items: [
      {
        label: "Bezirkskrankenhaus Kufstein (district hospital)",
        value: "+43 5372 6966-0",
        detail: "Endach 27, 6330 Kufstein — the main hospital with an emergency department on the east side, ~25–30 min from the Alpbachtal base.",
        type: "phone",
        link: "tel:+4353726966"
      },
      {
        label: "Hospital address (for the sat-nav)",
        value: "Endach 27, 6330 Kufstein",
        detail: "Bezirkskrankenhaus Kufstein.",
        type: "address",
        link: "https://www.google.com/maps/search/?api=1&query=Bezirkskrankenhaus+Kufstein+Endach+27"
      },
      {
        label: "Pharmacy (Apotheke)",
        value: "Look for the green 'Apotheke' cross",
        detail: "Pharmacies rotate a night/weekend duty roster (Bereitschaftsdienst) posted on every pharmacy door and at apotheker.at. For urgent medicine advice, staff are excellent.",
        type: "website",
        link: "https://www.apotheker.at/apothekensuche"
      }
    ]
  },
  {
    title: "Kids — allergies, anaphylaxis & poison",
    items: [
      {
        label: "Poison control (Vergiftungsinformationszentrale)",
        value: "+43 1 406 43 43",
        detail: "24/7 Austrian poison information centre in Vienna — call if a child swallows something they shouldn't.",
        type: "phone",
        link: "tel:+43140643 43"
      },
      {
        label: "If a child needs urgent care",
        value: "Call 144, or go to Kufstein hospital",
        detail: "For anything serious with Gili or Tom, 144 (ambulance) or the Kufstein emergency department. For minor illness, a GP (Arzt) or pharmacy during the day.",
        type: "phone",
        link: "tel:144"
      },
      {
        label: "Allergic reaction — EpiPen, then call 144",
        value: "144",
        detail: "Gili is allergic to SESAME (German: Sesam); Tom is allergic to BANANA (Banane). We carry two EpiPens. At the first sign of a severe reaction — swelling, trouble breathing, spreading hives, repeated vomiting — give the EpiPen into the outer thigh and call 144 immediately, even after the EpiPen (say 'Anaphylaxie, Kind' = anaphylaxis, child). To check food before eating, ask 'Enthält das Sesam?' / 'Enthält das Banane?' (does this contain sesame / banana?).",
        type: "phone",
        link: "tel:144"
      }
    ]
  },
  {
    title: "Car & roadside",
    items: [
      {
        label: "ÖAMTC roadside assistance",
        value: "120",
        detail: "Austria's main breakdown service (dial 120 in Austria). For a rental, also call Sixt first — breakdown handling goes through them.",
        type: "phone",
        link: "tel:120"
      },
      {
        label: "Sixt (rental car)",
        value: "Check your Sixt rental agreement",
        detail: "The 24h roadside/assistance number is printed on the Sixt rental contract and key-tag you get at pickup. Programme it into your phone on day one. Your booking ref is in the Tickets section. Return: Aug 20, 13:00, Terminalstr. Mitte / Parkhaus P6, Munich Airport.",
        type: "website",
        link: "https://www.sixt.com/php/contact/"
      }
    ]
  },
  {
    title: "Israeli travellers",
    items: [
      {
        label: "Embassy of Israel, Vienna",
        value: "+43 1 476 46-0",
        detail: "Anton-Frank-Gasse 20, 1180 Vienna. Consular line +43 1 476 46-587. For lost passports or emergencies affecting Israeli citizens.",
        type: "phone",
        link: "tel:+43147646 0"
      },
      {
        label: "Embassy address",
        value: "Anton-Frank-Gasse 20, 1180 Wien",
        detail: "Embassy of Israel in Austria.",
        type: "address",
        link: "https://www.google.com/maps/search/?api=1&query=Israeli+Embassy+Vienna+Anton-Frank-Gasse+20"
      }
    ]
  }
];
