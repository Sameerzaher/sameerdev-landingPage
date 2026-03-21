import { cn } from "@/lib/cn";

const audience = [
  { title: "ספרים", icon: ScissorsIcon },
  { title: "מאמנים אישיים", icon: DumbbellIcon },
  { title: "מורי נהיגה", icon: CarIcon },
  { title: "עסקים מקומיים", icon: StoreIcon },
] as const;

const cardDescription = "עסקים שרוצים יותר לקוחות עם נוכחות דיגיטלית מקצועית";

export function AudienceSection() {
  return (
    <section id="audience" className="scroll-mt-24 border-y border-white/5 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">למי זה מתאים</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-muted sm:text-base">
          פתרון מהיר ופשוט לעסקים שרוצים יותר פניות בלי להסתבך
        </p>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {audience.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className={cn(
                  "rounded-2xl border border-white/10 bg-surface/60 p-5 shadow-card backdrop-blur-sm transition",
                  "hover:border-accent/20 hover:shadow-lg hover:shadow-black/25 sm:p-6",
                )}
              >
                <div className="flex gap-4">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-accent ring-1 ring-white/10"
                    aria-hidden
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 text-start">
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{cardDescription}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ScissorsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M20 4 8.12 15.88M14.47 14.48 20 20M8.12 8.12 12 12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DumbbellIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M6.5 6.5h3v11h-3a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2Z" strokeLinejoin="round" />
      <path d="M14.5 6.5h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-3v-11Z" strokeLinejoin="round" />
      <path d="M9.5 12h5" strokeLinecap="round" />
    </svg>
  );
}

function CarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path
        d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L18 9h-2l-1.5-3h-7L6 9H4c-1.1 0-2 .9-2 2v4c0 .6.4 1 1 1h2"
        strokeLinejoin="round"
      />
      <circle cx="7" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  );
}

function StoreIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7Z" strokeLinejoin="round" />
      <path d="M6 22V10h12v12" strokeLinejoin="round" />
      <path d="M6 12h12" strokeLinecap="round" />
    </svg>
  );
}
