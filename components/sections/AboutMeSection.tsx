const POINTS = [
  "פיתוח מהיר תוך ימים",
  "תקשורת ישירה ופשוטה",
  "התאמה לעסקים קטנים בישראל",
] as const;

export function AboutMeSection() {
  return (
    <section id="about" className="section-y scroll-mt-24 border-t border-white/5">
      <div className="mx-auto max-w-3xl">
        <h2 className="section-heading">מי עומד מאחורי SameerDev?</h2>
        <div className="mt-10 flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:gap-10">
          <div
            className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-accent/20 to-surface/80 text-2xl font-bold text-accent ring-1 ring-accent/20"
            aria-hidden
          >
            SD
          </div>
          <div className="text-start">
            <p className="text-pretty text-base leading-relaxed text-slate-200 sm:text-lg">
              אני Sameer, מפתח Full Stack שעובד עם עסקים קטנים ובינוניים. אני מתמקד בבניית אתרים פשוטים,
              מהירים וברורים שמביאים פניות — בלי סיבוכים ובלי תהליכים ארוכים.
            </p>
            <p className="mt-4 text-pretty text-sm leading-relaxed text-muted sm:text-base">
              עבדתי עם עסקים בתחומים שונים והתמקדתי במה שבאמת מביא תוצאה — פניות מלקוחות.
            </p>
            <p className="mt-3 text-pretty text-sm font-medium leading-relaxed text-slate-300 sm:text-base">
              מדברים איתי ישירות — לא עם מוקד, לא מערכת אוטומטית ולא ״מנהלת לקוחות״ של צד שלישי.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm text-muted sm:text-base">
              {POINTS.map((line) => (
                <li key={line} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  <span className="text-slate-200">{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
