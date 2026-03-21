const features = [
  { title: "אתר מקצועי", desc: "עיצוב נקי שמשדר אמינות ומתאים למותג שלך." },
  { title: "מותאם לנייד", desc: "חוויה מושלמת בטלפון — שם רוב הלקוחות מחפשים אותך." },
  { title: "כפתור וואטסאפ", desc: "פנייה מיידית בלי חיכוך — יותר שיחות, יותר עסקאות." },
  { title: "מבנה שמביא פניות", desc: "טקסטים, סדר מקטעים וקריאה לפעולה שמובילים לפנייה." },
];

export function SolutionSection() {
  return (
    <section
      id="solution"
      className="scroll-mt-24 border-y border-white/5 bg-white/[0.02] px-4 py-16 sm:px-6 sm:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">הפתרון: אתר שעושה את העבודה בשבילך</h2>
          <p className="mt-3 text-muted">ארבעה עמודי תווך שמכוונים למכירה — לא ל״יופי ריק״.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-surface/40 p-6 ring-0 transition hover:border-accent/30"
            >
              <div className="absolute -start-8 -top-8 h-24 w-24 rounded-full bg-accent/10 blur-2xl transition group-hover:bg-accent/20" />
              <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent/15 text-sm font-bold text-accent ring-1 ring-accent/25">
                {i + 1}
              </span>
              <h3 className="relative mt-4 text-lg font-semibold text-white">{f.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
