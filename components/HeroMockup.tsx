export function HeroMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[380px]" aria-hidden>
      <div className="absolute -inset-8 rounded-full bg-accent/10 blur-3xl" />
      <div className="relative rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-slate-800/90 to-slate-900/90 p-3 shadow-card ring-1 ring-white/10">
        <div className="flex items-center justify-between px-3 pb-2 pt-1">
          <span className="h-1 w-12 rounded-full bg-white/20" />
          <span className="text-[10px] font-medium text-white/40">9:41</span>
          <span className="flex gap-1">
            <span className="h-2 w-2 rounded-full bg-white/25" />
            <span className="h-2 w-2 rounded-full bg-white/25" />
          </span>
        </div>
        <div className="overflow-hidden rounded-[2rem] bg-[#0d1428] ring-1 ring-white/5">
          <div className="h-28 bg-gradient-to-br from-accent/30 via-emerald-500/10 to-transparent px-4 pb-3 pt-6">
            <div className="h-2 w-20 rounded bg-white/30" />
            <div className="mt-3 h-2 w-32 rounded bg-white/15" />
          </div>
          <div className="space-y-3 px-4 py-4">
            <div className="flex gap-3">
              <div className="h-14 flex-1 rounded-xl bg-white/5 ring-1 ring-white/10" />
              <div className="h-14 flex-1 rounded-xl bg-white/5 ring-1 ring-white/10" />
            </div>
            <div className="h-24 rounded-xl bg-white/[0.04] ring-1 ring-white/10" />
            <div className="flex items-center justify-center rounded-xl bg-accent py-3 text-sm font-bold text-[#06210f] shadow-glow">
              WhatsApp
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
