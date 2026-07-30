const CHECKPOINTS = ["Backlog", "Doing", "Review", "Done"];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink text-cloud">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(54,84,255,0.25),transparent_55%)]" />

      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-20 md:pt-28">
        <p className="lane-label text-amber">Lane 01 — Overview</p>

        <h1 className="mt-6 max-w-3xl font-display text-6xl leading-[0.95] md:text-8xl">
          KEEP EVERY TASK
          <br />
          MOVING FORWARD
        </h1>

        <p className="mt-6 max-w-xl text-lg text-ink-muted">
          Stride is the task tracker built for teams who hate stalled work.
          Every card has a pace. Every lane shows momentum. Nothing sits
          still long enough to go cold.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#pricing"
            className="rounded-full bg-cobalt px-7 py-3 font-semibold text-white transition-colors hover:bg-cobalt-dim"
          >
            Start free trial
          </a>
          <a
            href="#features"
            className="rounded-full border border-white/20 px-7 py-3 font-semibold text-cloud transition-colors hover:border-white/50"
          >
            See how it works
          </a>
        </div>

        {/* Signature element: animated split line across task stages */}
        <div className="mt-20">
          <div className="relative">
            <div className="h-px w-full bg-white/15" />
            <div className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 animate-[stride-marker_3.5s_ease-in-out_infinite] rounded-full bg-amber shadow-[0_0_16px_2px_rgba(255,182,39,0.6)]" />

            <div className="mt-0 flex justify-between">
              {CHECKPOINTS.map((label, i) => (
                <div
                  key={label}
                  className="flex -translate-y-1/2 flex-col items-center gap-3"
                >
                  <span className="h-2.5 w-2.5 rounded-full border-2 border-white/30 bg-ink" />
                  <span className="lane-label text-ink-muted">
                    {String(i + 1).padStart(2, "0")} / {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <style>{`
            @keyframes stride-marker {
              0% { left: 0%; }
              45% { left: 100%; }
              50% { left: 100%; }
              95% { left: 0%; }
              100% { left: 0%; }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
