const demos = [
  {
    title: "אתר לספר",
    description: "עמוד שמביא פניות בוואטסאפ",
    gradient: "from-amber-400/25 via-orange-500/15 to-background",
    accentBar: "bg-amber-400/40",
  },
  {
    title: "אתר למאמן כושר",
    description: "עמוד שמביא פניות בוואטסאפ",
    gradient: "from-emerald-400/30 via-teal-500/20 to-background",
    accentBar: "bg-emerald-400/50",
  },
  {
    title: "אתר למורה נהיגה",
    description: "עמוד שמביא פניות בוואטסאפ",
    gradient: "from-sky-400/25 via-blue-500/15 to-background",
    accentBar: "bg-sky-400/50",
  },
] as const;

export function DemoSection() {
  return (
    <section id="demo" className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">איך זה נראה בפועל</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-muted">
          דוגמאות לסגנון אתר — נקי, ברור, עם דגש על פנייה בוואטסאפ.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {demos.map((d) => (
            <figure
              key={d.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-surface/50 shadow-card transition hover:border-white/15 hover:shadow-lg hover:shadow-black/25"
            >
              <div
                className={`relative aspect-[4/3] bg-gradient-to-br ${d.gradient} p-4 transition group-hover:brightness-[1.05]`}
              >
                <div className="flex h-full flex-col rounded-lg bg-[#0a0f1c]/92 p-3 ring-1 ring-white/10">
                  <div className="flex gap-1 border-b border-white/10 pb-2">
                    <span className="h-2 w-2 rounded-full bg-red-400/80" />
                    <span className="h-2 w-2 rounded-full bg-amber-400/80" />
                    <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
                  </div>
                  <div className={`mt-3 h-1 w-16 rounded-full ${d.accentBar}`} />
                  <div className="mt-3 flex-1 space-y-2">
                    <div className="h-2 w-2/3 rounded bg-white/20" />
                    <div className="h-2 w-full max-w-[85%] rounded bg-white/10" />
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      <div className="h-14 rounded-md bg-white/5 ring-1 ring-white/10" />
                      <div className="h-14 rounded-md bg-white/5 ring-1 ring-white/10" />
                    </div>
                    <div className="h-10 w-full rounded-md bg-white/[0.04] ring-1 ring-white/10" />
                    <div className="mx-auto mt-2 h-9 w-28 rounded-lg bg-accent/90 shadow-sm ring-1 ring-accent/30" />
                  </div>
                </div>
              </div>
              <figcaption className="border-t border-white/5 px-4 py-4 text-center">
                <span className="block text-base font-semibold text-white">{d.title}</span>
                <span className="mt-1 block text-sm text-muted">{d.description}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
