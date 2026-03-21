import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { getWhatsappLink } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  return (
    <a
      href={getWhatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] text-sm font-semibold text-[#06210f] shadow-lg shadow-black/40 ring-1 ring-black/10 transition hover:brightness-110 active:scale-[0.98] sm:bottom-6 sm:right-6"
      aria-label="פתח שיחת וואטסאפ"
    >
      <WhatsAppIcon className="h-5 w-5 shrink-0" />
      וואטסאפ
    </a>
  );
}
