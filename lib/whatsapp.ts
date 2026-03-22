import { CTA_WHATSAPP_MESSAGES } from "@/lib/cta-presets";

const DEFAULT_PHONE = "972XXXXXXXXX";

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
  const text = encodeURIComponent(message ?? CTA_WHATSAPP_MESSAGES.default);
  return `https://wa.me/${resolvePhone()}?text=${text}`;
}
