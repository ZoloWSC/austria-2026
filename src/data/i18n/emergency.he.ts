import type { EmergencyContact, EmergencyGroup } from "../types";

type EmergencyHEItem = Partial<Pick<EmergencyContact, "label" | "value" | "detail">>;

interface EmergencyHEGroup extends Partial<Pick<EmergencyGroup, "title">> {
  items?: EmergencyHEItem[];
}

/** Indexed by group order (0..n) — items in same order as the English data. */
export const emergencyHE: EmergencyHEGroup[] = [
  {
    title: "מספרי חירום (אוסטריה)",
    items: [
      {
        label: "חירום כלל-אירופי",
        detail: "עובד מכל טלפון בכל מקום באיחוד האירופי — מחבר למשטרה/אמבולנס/כיבוי אש.",
      },
      {
        label: "אמבולנס (Rettung)",
        detail: "מקרי חירום רפואיים באוסטריה.",
      },
      {
        label: "משטרה (Polizei)",
        detail: "המשטרה האוסטרית.",
      },
      {
        label: "כיבוי אש (Feuerwehr)",
        detail: "שירותי הכבאות.",
      },
      {
        label: "חילוץ אלפיני / הררי",
        detail: "Bergrettung — למקרי חירום בהרים.",
      },
    ],
  },
  {
    title: "רפואה ליד הבסיס",
    items: [
      {
        label: "בית החולים המחוזי קופשטיין (Bezirkskrankenhaus)",
        detail:
          "Endach 27, 6330 Kufstein — בית החולים המרכזי עם חדר מיון בצד המזרחי, כ-25–30 דקות מהבסיס באלפבאכטל.",
      },
      {
        label: "כתובת בית החולים (לוויז')",
        value: "Endach 27, 6330 Kufstein",
        detail: "Bezirkskrankenhaus Kufstein.",
      },
      {
        label: "בית מרקחת (Apotheke)",
        value: "חפשו את הצלב הירוק של 'Apotheke'",
        detail:
          "בתי המרקחת מתחלפים בתורנות לילה/סוף שבוע (Bereitschaftsdienst) המתפרסמת על דלת כל בית מרקחת ובאתר apotheker.at. לייעוץ תרופתי דחוף — הצוות מצוין.",
      },
    ],
  },
  {
    title: "ילדים — אלרגיות, אנפילקסיס והרעלות",
    items: [
      {
        label: "מוקד רעלים (Vergiftungsinformationszentrale)",
        detail:
          "מרכז המידע האוסטרי לרעלים בווינה, 24/7 — התקשרו אם ילד בלע משהו שאסור לו.",
      },
      {
        label: "אם ילד זקוק לטיפול דחוף",
        value: "חייגו 144, או סעו לבית החולים בקופשטיין",
        detail:
          "לכל דבר רציני עם גילי או תום — 144 (אמבולנס) או חדר המיון בקופשטיין. למחלה קלה — רופא (Arzt) או בית מרקחת במהלך היום.",
      },
      {
        label: "תגובה אלרגית — אפיפן, ואז חייגו 144",
        value: "144",
        detail:
          "גילי אלרגית לשומשום (בגרמנית: Sesam); תום אלרגי לבננה (Banane). אנחנו נושאים שני מזרקי אפיפן. בסימן ראשון של תגובה חמורה — נפיחות, קושי בנשימה, פריחה מתפשטת, הקאות חוזרות — הזריקו את האפיפן לירך החיצונית והתקשרו מיד ל-144, גם אחרי האפיפן (אמרו 'Anaphylaxie, Kind' = אנפילקסיס, ילד). כדי לבדוק מזון לפני אכילה, שאלו 'Enthält das Sesam?' / 'Enthält das Banane?' (האם זה מכיל שומשום / בננה?).",
      },
    ],
  },
  {
    title: "רכב ודרך",
    items: [
      {
        label: "שירותי דרך ÖAMTC",
        detail:
          "שירות הגרירה המרכזי של אוסטריה (חייגו 120 באוסטריה). ברכב שכור, התקשרו קודם גם לסיקסט — טיפול בתקלות עובר דרכם.",
      },
      {
        label: "סיקסט (רכב שכור)",
        value: "בדקו בהסכם ההשכרה של סיקסט",
        detail:
          "מספר שירות הדרך/סיוע 24 שעות מודפס על חוזה ההשכרה ועל תג המפתח שתקבלו באיסוף. הזינו אותו לטלפון כבר ביום הראשון. מספר ההזמנה נמצא במדור הכרטיסים. החזרה: 20 באוגוסט, 13:00, Terminalstr. Mitte / Parkhaus P6, נמל התעופה מינכן.",
      },
    ],
  },
  {
    title: "מטיילים ישראלים",
    items: [
      {
        label: "שגרירות ישראל, וינה",
        detail:
          "Anton-Frank-Gasse 20, 1180 וינה. קו קונסולרי +43 1 476 46-587. לדרכונים אבודים או מקרי חירום הנוגעים לאזרחים ישראלים.",
      },
      {
        label: "כתובת השגרירות",
        value: "Anton-Frank-Gasse 20, 1180 Wien",
        detail: "שגרירות ישראל באוסטריה.",
      },
    ],
  },
];
