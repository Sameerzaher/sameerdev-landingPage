/** Pre-filled WhatsApp messages for conversion CTAs (Hebrew). */
export const CTA_WHATSAPP_MESSAGES = {
  default:
    "היי, ראיתי את האתר של SameerDev ואשמח לשמוע איך אפשר להתחיל.",
  getSite:
    "היי, אני רוצה לקבל אתר לעסק תוך 3–5 ימים. אפשר לשלוח לי פרטים?",
  sendDetails: "היי, אני רוצה לשלוח פרטים על העסק שלי ולקבל הצעה.",
  quote: "היי, אשמח לקבל הצעת מחיר לאתר.",
  afterPain:
    "היי, הזדהיתי עם מה שכתוב באתר. אשמח לשמוע איך SameerDev יכול לעזור לי.",
  portfolio: (projectTitle: string) =>
    `היי, ראיתי את הפרויקט "${projectTitle}" ואשמח לשמוע עוד.`,
} as const;
