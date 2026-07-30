const FEATURES = [
  {
    title: "Live pace tracking",
    desc: "See which tasks are gaining speed and which have stalled, at a glance, with no manual status updates.",
  },
  {
    title: "Checkpoint automation",
    desc: "Set rules so cards move lanes automatically the moment a condition is met — a review, an approval, a merge.",
  },
  {
    title: "Split-time reports",
    desc: "Every task keeps a timestamped history of how long it spent in each lane, so bottlenecks are easy to spot.",
  },
  {
    title: "Team relay view",
    desc: "Hand off work cleanly with a queue that shows exactly who's up next and what they're waiting on.",
  },
  {
    title: "Focus lanes",
    desc: "Mute every column except the one you're running right now, so context switching stops eating your day.",
  },
  {
    title: "Open track API",
    desc: "Pull task and timing data into your own dashboards, or push updates in from the tools you already use.",
  },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-24">
      <p className="lane-label text-cobalt">Lane 02 — Features</p>
      <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight md:text-5xl">
        BUILT FOR TEAMS THAT MEASURE MOMENTUM
      </h2>

      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-mist bg-mist md:grid-cols-3">
        {FEATURES.map((feature) => (
          <div key={feature.title} className="bg-cloud p-8">
            <div className="mb-6 h-1 w-10 rounded-full bg-cobalt" />
            <h3 className="font-display text-xl tracking-wide">
              {feature.title.toUpperCase()}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
