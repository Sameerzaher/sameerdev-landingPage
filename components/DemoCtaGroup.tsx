import { Button } from "@/components/Button";
import { cn } from "@/lib/cn";

export type DemoCtaGroupProps = {
  /** קישור לדמו חי — חייב להתחיל ב־http(s) כדי שהכפתור הראשון יוצג */
  demoUrl: string;
  whatsappHref: string;
  className?: string;
};

/**
 * זוג CTA לכרטיסי דמו: צפייה בדמו (חיצוני) + וואטסאפ.
 * בלי קישור חי — מוצג רק כפתור הוואטסאפ (מלא רוחב).
 */
export function DemoCtaGroup({ demoUrl, whatsappHref, className }: DemoCtaGroupProps) {
  const hasLiveDemo = /^https?:\/\//i.test(demoUrl);

  return (
    <div
      className={cn(
        "flex w-full flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3",
        className,
      )}
    >
      {hasLiveDemo ? (
        <Button
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          variant="outline"
          size="md"
          className="w-full border-2 border-white/18 font-semibold text-slate-100 transition hover:border-accent/45 hover:bg-white/[0.07] sm:min-w-0 sm:flex-1"
          aria-label="צפה בדוגמה חיה — נפתח בלשונית חדשה"
        >
          צפה בדוגמה
        </Button>
      ) : null}
      <Button
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        variant="primary"
        size="md"
        className={cn(
          "w-full font-semibold shadow-glow ring-2 ring-accent/35 transition hover:brightness-110 hover:ring-accent/50",
          hasLiveDemo && "sm:min-w-0 sm:flex-1",
        )}
      >
        אני רוצה כזה
      </Button>
    </div>
  );
}
