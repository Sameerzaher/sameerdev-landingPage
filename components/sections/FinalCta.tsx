import { Button } from "@/components/Button";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function FinalCta() {
  const wa = getWhatsAppUrl();

  return (
    <section className="px-4 pb-20 pt-4 sm:px-6 sm:pb-24">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-accent/25 bg-gradient-to-br from-accent/15 via-surface/80 to-background px-6 py-14 text-center shadow-glow sm:px-12">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />
        <h2 className="relative text-2xl font-bold text-white sm:text-3xl">רוצה אתר שמביא לך לקוחות?</h2>
        <p className="relative mx-auto mt-3 max-w-lg text-muted">
          שלחו הודעה בוואטסאפ — נבין מה העסק צריך ונחזור עם הצעה ברורה.
        </p>
        <div className="relative mt-8 flex justify-center">
          <Button href={wa} target="_blank" rel="noopener noreferrer" size="lg">
            <WhatsAppIcon className="h-5 w-5" />
            דבר איתי בוואטסאפ
          </Button>
        </div>
      </div>
    </section>
  );
}
