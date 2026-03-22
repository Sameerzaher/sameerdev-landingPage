const STEPS = [
  {
    step: 1,
    title: "שולחים פרטים בוואטסאפ",
    body: "שם העסק, מה אתם מציעים ומה חשוב לכם באתר — בלי טפסים ארוכים.",
    Icon: IconChat,
  },
  {
    step: 2,
    title: "אני מתכנן ובונה",
    body: "מבנה, טקסטים מוצעים ועיצוב נקי — אתם מאשרים ואני מיישם.",
    Icon: IconLayers,
  },
  {
    step: 3,
    title: "מקבלים אתר חי",
    body: "עלייה לאוויר, חיבור לוואטסאפ והדרכה קצרה איך לעדכן בעתיד.",
    Icon: IconRocket,
  },
] as const;

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="section-y scroll-mt-24 border-y border-white/5 bg-white/[0.02]">
      <div className="mx-auto max-w-6xl">
        <h2 className="section-heading">איך זה עובד</h2>
        <p className="section-sub max-w-xl">שלושה שלבים פשוטים — בלי בלבול ובלי הפתעות.</p>
        <ol className="mt-12 grid gap-8 md:grid-cols-3">
          {STEPS.map((s) => {
            const Icon = s.Icon;
            return (
            <li
              key={s.step}
              className="card-elevated relative bg-surface/40 p-6 text-start hover:border-accent/35 md:pt-8"
            >
              <span className="absolute -top-3 start-6 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-[#06210f] ring-4 ring-background">
                {s.step}
              </span>
              <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/25">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
            </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

function IconChat({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeLinejoin="round" />
    </svg>
  );
}

function IconLayers({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="m12.83 2.18 8 3.75v8.5l-8 3.75-8-3.75v-8.5l8-3.75Z" strokeLinejoin="round" />
      <path d="M4.83 6.5 12.83 10.18 20.83 6.5" strokeLinecap="round" />
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
