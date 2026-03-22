"use client";

import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { trackEvent } from "@/lib/analytics";
import { getWhatsappLink } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  return (
    <a
      href={getWhatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 start-5 z-[45] flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] text-sm font-semibold text-[#06210f] shadow-[0_8px_32px_-4px_rgba(0,0,0,0.5),0_0_0_1px_rgba(0,0,0,0.08)] ring-1 ring-white/20 transition hover:brightness-110 hover:shadow-[0_12px_40px_-4px_rgba(37,211,102,0.35)] active:scale-[0.98] sm:bottom-6 sm:start-6"
      aria-label="פתח שיחת וואטסאפ"
      onClick={() => trackEvent("whatsapp_click", { label: "floating_button" })}
    >
      <WhatsAppIcon className="h-5 w-5 shrink-0" />
      וואטסאפ
    </a>
  );
}
