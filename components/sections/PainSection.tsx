const cards = [
  {
    title: "אין לך אתר = אתה מפסיד לקוחות",
    body: "רוב הלקוחות מחפשים אותך בגוגל ובוואטסאפ. בלי נוכחות דיגיטלית — הם הולכים למתחרים.",
  },
  {
    title: "האתר לא מקצועי",
    body: "אתר ישן או לא מסודר יוצר רושם רע ומוריד אמון — גם אם השירות שלך מעולה.",
  },
  {
    title: "אין דרך קלה לפנות אליך",
    body: "טפסים ארוכים ומספרים מוסתרים מקשים על פנייה. לקוחות רוצים קליק אחד לוואטסאפ.",
  },
];

export function PainSection() {
  return (
    <section id="pain" className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">אם זה נשמע מוכר — אתה לא לבד</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted">
          שלוש בעיות שחוזרות אצל בעלי עסקים — וכל אחת מהן עולה לך בלקוחות.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="rounded-2xl border border-white/10 bg-surface/60 p-6 shadow-card backdrop-blur-sm transition hover:border-accent/25 hover:shadow-glow"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 text-red-400 ring-1 ring-red-500/20">
                !
              </div>
              <h3 className="text-lg font-semibold text-white">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{card.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
