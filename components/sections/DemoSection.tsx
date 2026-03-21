const demos = [
  { label: "דוגמה 1", gradient: "from-emerald-400/30 via-cyan-500/20 to-background" },
  { label: "דוגמה 2", gradient: "from-violet-400/25 via-fuchsia-500/15 to-background" },
  { label: "דוגמה 3", gradient: "from-amber-400/25 via-orange-500/15 to-background" },
];

export function DemoSection() {
  return (
    <section id="demo" className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">איך זה נראה בפועל</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-muted">
          כאן יוצגו צילומי מסך מאתרים אמיתיים — בינתיים תצוגה מקדימה בסגנון מינימליסטי.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {demos.map((d) => (
            <figure
              key={d.label}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-surface/50 shadow-card"
            >
              <div
                className={`relative aspect-[4/3] bg-gradient-to-br ${d.gradient} p-4 transition group-hover:brightness-110`}
              >
                <div className="flex h-full flex-col rounded-lg bg-[#0a0f1c]/90 p-3 ring-1 ring-white/10">
                  <div className="flex gap-1 border-b border-white/10 pb-2">
                    <span className="h-2 w-2 rounded-full bg-red-400/80" />
                    <span className="h-2 w-2 rounded-full bg-amber-400/80" />
                    <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
                  </div>
                  <div className="mt-3 flex-1 space-y-2">
                    <div className="h-2 w-1/3 rounded bg-white/20" />
                    <div className="h-2 w-2/3 rounded bg-white/10" />
                    <div className="mt-4 h-16 rounded-md bg-white/5" />
                    <div className="h-8 w-24 rounded-md bg-accent/80" />
                  </div>
                </div>
              </div>
              <figcaption className="border-t border-white/5 px-4 py-3 text-center text-sm text-muted">
                {d.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
