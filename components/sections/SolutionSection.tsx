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
      className="section-y scroll-mt-24 border-y border-white/5 bg-white/[0.02]"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="section-heading">הפתרון: אתר שעושה את העבודה בשבילך</h2>
        <p className="section-sub">ארבעה יתרונות שמכוונים למכירה — לא ל״יופי ריק״.</p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="card-elevated group relative overflow-hidden bg-surface/40 p-6 hover:-translate-y-0.5 hover:border-accent/30"
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
