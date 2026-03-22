/** Pre-filled WhatsApp messages for conversion CTAs (Hebrew). */
export const CTA_WHATSAPP_MESSAGES = {
  default:
    "היי, ראיתי את האתר של SameerDev ואשמח לשמוע איך אפשר להתחיל.",
  /** Short, low-pressure — floating button & header. */
  quickHello:
    "היי, הגעתי מהאתר של SameerDev. אשמח לשאלה קצרה על בניית אתר לעסק — בלי התחייבות.",
  getSite:
    "היי, אני רוצה לקבל אתר לעסק תוך 3–5 ימים. אפשר לשלוח לי פרטים?",
  sendDetails: "היי, אני רוצה לשלוח פרטים על העסק שלי ולקבל הצעה.",
  quote: "היי, אשמח לקבל הצעת מחיר לאתר.",
  afterPain:
    "היי, הזדהיתי עם מה שכתוב באתר. אשמח לשמוע איך SameerDev יכול לעזור לי.",
  /** Softer “is this for me?” — pairs with secondary CTA. */
  softFit:
    "היי, רוצה לשמוע בקצרה אם בניית אתר כזה מתאימה לעסק שלי לפני שמתחייבים.",
  portfolio: (projectTitle: string) =>
    `היי, ראיתי את הפרויקט "${projectTitle}" ואשמח לשמוע עוד.`,
} as const;
