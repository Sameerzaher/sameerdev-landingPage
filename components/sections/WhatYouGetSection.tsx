import { cn } from "@/lib/cn";

const ITEMS = [
  { text: "עיצוב מותאם לעסק שלך", Icon: IconPalette },
  { text: "אתר מותאם למובייל", Icon: IconMobile },
  { text: "כפתור וואטסאפ לפניות", Icon: IconWhatsApp },
  { text: "טופס יצירת קשר", Icon: IconForm },
  { text: "חיבור לדומיין", Icon: IconDomain },
  { text: "עלייה לאוויר במהירות", Icon: IconRocket },
] as const;

export function WhatYouGetSection() {
  return (
    <section id="what-you-get" className="section-y scroll-mt-24 border-t border-white/5">
      <div className="mx-auto max-w-4xl">
        <h2 className="section-heading">מה מקבלים?</h2>
        <p className="section-sub max-w-xl">
          יש גם פתרונות התחלתיים לעסקים קטנים —{" "}
          <span className="font-medium text-slate-300">אתרים החל מ־₪1,500</span> (חבילת Basic).
        </p>
        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {ITEMS.map(({ text, Icon }) => (
            <li
              key={text}
              className={cn(
                "flex items-start gap-3 rounded-xl border border-white/10 bg-surface/40 p-4 text-start shadow-card",
                "transition hover:border-accent/25",
              )}
            >
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent ring-1 ring-accent/20"
                aria-hidden
              >
                <Icon className="h-5 w-5" />
              </span>
              <span className="pt-1.5 text-sm font-medium leading-snug text-slate-100 sm:text-base">{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function IconPalette({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" strokeLinejoin="round" />
      <path d="M12 12v10" strokeLinecap="round" />
    </svg>
  );
}

function IconMobile({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <path d="M12 18h.01" strokeLinecap="round" />
    </svg>
  );
}

function IconWhatsApp({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function IconForm({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeLinejoin="round" />
      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" strokeLinecap="round" />
    </svg>
  );
}

function IconDomain({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function IconRocket({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" strokeLinejoin="round" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" strokeLinejoin="round" />
    </svg>
  );
}
