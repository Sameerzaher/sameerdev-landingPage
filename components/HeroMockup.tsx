export function HeroMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[380px]" aria-hidden>
      <div className="absolute -inset-8 rounded-full bg-accent/10 blur-3xl" />
      <div
        dir="ltr"
        className="relative rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-slate-800/95 to-slate-950/95 p-3 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.65)] ring-1 ring-white/10"
      >
        <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center px-2 pb-2 pt-1">
          <span className="h-1.5 w-10 justify-self-start rounded-full bg-white/20" />
          <div className="h-[18px] w-[72px] shrink-0 rounded-full bg-black/80 ring-1 ring-white/10" />
          <div className="flex items-center justify-end gap-1.5 justify-self-end">
            <span className="text-[10px] font-medium tabular-nums text-white/40">9:41</span>
            <span className="flex gap-1">
              <span className="h-2 w-2 rounded-full bg-white/25" />
              <span className="h-2 w-2 rounded-full bg-white/25" />
            </span>
          </div>
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
