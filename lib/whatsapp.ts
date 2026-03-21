const DEFAULT_PHONE = "972XXXXXXXXX";

const DEFAULT_MESSAGE = "היי, ראיתי את האתר שלך ואני רוצה לשמוע עוד";

function resolvePhone(): string {
  const fromEnv = process.env.NEXT_PUBLIC_WHATSAPP_PHONE?.replace(/\D/g, "");
  if (fromEnv) return fromEnv;

  const url = process.env.NEXT_PUBLIC_WHATSAPP_URL;
  if (url) {
    try {
      const path = new URL(url).pathname.replace(/^\//, "").split("?")[0];
      if (/^\d+$/.test(path)) return path;
    } catch {
      /* ignore */
    }
  }

  return DEFAULT_PHONE;
}

/**
 * Builds a WhatsApp click-to-chat URL with an optional pre-filled message (UTF-8 encoded).
 */
export function getWhatsappLink(message?: string): string {
  const text = encodeURIComponent(message ?? DEFAULT_MESSAGE);
  return `https://wa.me/${resolvePhone()}?text=${text}`;
}
