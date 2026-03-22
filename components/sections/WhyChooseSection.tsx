import { cn } from "@/lib/cn";

const POINTS = [
  {
    title: "משלוח מהיר",
    body: "3–5 ימי עבודה מרגע האישור — בלי חודשים של המתנה.",
    Icon: IconZap,
  },
  {
    title: "מותאם לנייד",
    body: "רוב הלקוחות מגיעים מהטלפון — האתר נראה מעולה בכל מסך.",
    Icon: IconSmartphone,
  },
  {
    title: "חיבור לוואטסאפ",
    body: "פנייה בקליק אחד — פחות חיכוך, יותר שיחות אמיתיות.",
    Icon: IconMessage,
  },
  {
    title: "רב־לשוני",
    body: "עברית, ערבית ואנגלית — לפי קהל היעד שלכם.",
    Icon: IconGlobe,
  },
  {
    title: "ליווי אישי",
    body: "לא מעבירים בין מחלקות — אתם מדברים איתי ישירות.",
    Icon: IconUser,
  },
  {
    title: "מיקוד בהמרות",
    body: "מבנה וטקסטים שנועדו להביא פניות, לא רק ״לייקים״.",
    Icon: IconTarget,
  },
] as const;

export function WhyChooseSection() {
  return (
    <section id="why-choose" className="section-y scroll-mt-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="section-heading">למה SameerDev</h2>
        <p className="section-sub">שילוב של מהירות, ניסיון בשטח והבנה של עסקים קטנים בישראל.</p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {POINTS.map((p) => {
            const Icon = p.Icon;
            return (
            <div
              key={p.title}
              className={cn(
                "card-elevated bg-surface/50 p-6 hover:-translate-y-0.5 hover:border-accent/25",
              )}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/20">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function IconZap({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" strokeLinejoin="round" />
    </svg>
  );
}

function IconSmartphone({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <path d="M12 18h.01" strokeLinecap="round" />
    </svg>
  );
}

function IconMessage({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" strokeLinejoin="round" />
    </svg>
  );
}

function IconGlobe({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function IconUser({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function IconTarget({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}
