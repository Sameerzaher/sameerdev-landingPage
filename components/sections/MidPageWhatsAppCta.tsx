import { Button } from "@/components/Button";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { getWhatsappLink } from "@/lib/whatsapp";

export function MidPageWhatsAppCta() {
  return (
    <section
      className="border-y border-white/5 bg-white/[0.02] px-4 py-10 sm:px-6 sm:py-12"
      aria-label="יצירת קשר בוואטסאפ"
    >
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
        <Button
          href={getWhatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          size="lg"
          className="w-full sm:w-auto"
        >
          <WhatsAppIcon className="h-5 w-5" />
          רוצה אתר כזה? דבר איתי
        </Button>
      </div>
    </section>
  );
}
