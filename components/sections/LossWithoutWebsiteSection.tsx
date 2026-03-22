export function LossWithoutWebsiteSection() {
  return (
    <section
      className="scroll-mt-24 border-t border-white/5 px-4 py-14 sm:px-6 sm:py-16"
      aria-labelledby="loss-heading"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 id="loss-heading" className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          מה קורה אם אין לך אתר?
        </h2>
        <div className="mt-6 space-y-4 text-pretty text-base leading-relaxed text-muted sm:text-lg">
          <p>לקוחות לא מבינים בדיוק מה אתה מציע,</p>
          <p>קשה לשלוח להם מידע מסודר,</p>
          <p className="font-medium text-slate-300">
            ובמקרים רבים הם פשוט עוברים למתחרה שכן נראה מקצועי יותר.
          </p>
        </div>
      </div>
    </section>
  );
}
