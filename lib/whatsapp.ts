const DEFAULT_WHATSAPP_URL = "https://wa.me/972XXXXXXXXX";

export function getWhatsAppUrl(): string {
  return process.env.NEXT_PUBLIC_WHATSAPP_URL ?? DEFAULT_WHATSAPP_URL;
}
