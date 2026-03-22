export type LeadFormValues = {
  name: string;
  businessType: string;
  phone: string;
  message: string;
};

/** Message pre-filled for the visitor’s WhatsApp chat (wa.me). */
export function buildVisitorWhatsappMessage(v: LeadFormValues): string {
  const lines = [
    "היי, מילאתי את הטופס באתר — אשמח לשמוע עוד על בניית אתר:",
    "",
    `שם: ${v.name.trim()}`,
    `סוג עסק: ${v.businessType.trim()}`,
    `טלפון: ${v.phone.trim()}`,
  ];
  if (v.message.trim()) {
    lines.push(`הודעה: ${v.message.trim()}`);
  }
  return lines.join("\n");
}

/** Short notification sent to the site owner (server-side, e.g. CallMeBot). */
export function buildOwnerNotifyMessage(v: LeadFormValues): string {
  const lines = [
    "🔔 פנייה חדשה מטופס באתר SameerDev",
    "",
    `שם: ${v.name.trim()}`,
    `סוג עסק: ${v.businessType.trim()}`,
    `טלפון: ${v.phone.trim()}`,
  ];
  if (v.message.trim()) {
    lines.push(`הודעה: ${v.message.trim()}`);
  }
  return lines.join("\n");
}
