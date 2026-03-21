const demos = [
  {
    title: "אתר לספר",
    description: "עמוד שמביא פניות בוואטסאפ",
    gradient: "from-amber-500/20 via-orange-600/10 to-background",
    frameRing: "ring-amber-500/20",
    accentBar: "from-amber-400 to-orange-500",
  },
  {
    title: "אתר למאמן כושר",
    description: "עמוד שמביא פניות בוואטסאפ",
    gradient: "from-emerald-500/25 via-teal-600/10 to-background",
    frameRing: "ring-emerald-500/25",
    accentBar: "from-emerald-400 to-teal-500",
  },
  {
    title: "אתר למורה נהיגה",
    description: "עמוד שמביא פניות בוואטסאפ",
    gradient: "from-sky-500/20 via-blue-600/10 to-background",
    frameRing: "ring-sky-500/25",
    accentBar: "from-sky-400 to-blue-500",
  },
] as const;

export function DemoSection() {
  return (
    <section id="demo" className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">איך זה נראה בפועל</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm text-muted sm:text-base">
          תצוגה מקדימה לסוגי עסקים — מוקאפ נקי עם דגש על פנייה בוואטסאפ.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {demos.map((d) => (
            <figure
              key={d.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface/40 shadow-card transition hover:border-white/15 hover:shadow-xl hover:shadow-black/30"
            >
              <div
                className={`relative bg-gradient-to-b ${d.gradient} p-4 pt-6 sm:p-5`}
              >
                <div
                  className={`mx-auto w-full max-w-[260px] rounded-[1.35rem] border border-white/10 bg-[#070b14] p-2 shadow-2xl ring-2 ${d.frameRing} sm:max-w-none`}
                >
                  <div className="flex items-center justify-between px-2 pb-1.5 pt-0.5">
                    <span className="h-1 w-10 rounded-full bg-white/15" />
                    <span className="text-[9px] font-medium tabular-nums text-white/35">9:41</span>
                    <span className="w-10" />
                  </div>
                  <div className="overflow-hidden rounded-[1.05rem] bg-[#0c1222] ring-1 ring-white/5">
                    <div className={`h-20 bg-gradient-to-bl ${d.accentBar} p-4 opacity-90`}>
                      <div className="h-2 w-16 rounded bg-white/35" />
                      <div className="mt-2 h-1.5 w-28 rounded bg-white/20" />
                    </div>
                    <div className="space-y-2.5 p-3">
                      <div className="h-2 w-3/4 rounded bg-white/15" />
                      <div className="h-2 w-full rounded bg-white/8" />
                      <div className="grid grid-cols-2 gap-2 pt-1">
                        <div className="aspect-[4/3] rounded-lg bg-white/[0.06] ring-1 ring-white/10" />
                        <div className="aspect-[4/3] rounded-lg bg-white/[0.06] ring-1 ring-white/10" />
                      </div>
                      <div className="mx-auto mt-2 flex h-9 w-[88%] items-center justify-center rounded-xl bg-[#25D366] text-[10px] font-bold text-[#06210f] shadow-md shadow-black/20">
                        WhatsApp
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <figcaption className="flex flex-1 flex-col border-t border-white/5 bg-surface/30 px-4 py-5 text-center">
                <span className="text-base font-semibold text-white">{d.title}</span>
                <span className="mt-2 text-sm leading-snug text-muted">{d.description}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
