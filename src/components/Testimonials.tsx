const TESTIMONIALS = [
  {
    quote:
      "We used to lose two days a week to status meetings. Now the lanes just tell us where everything stands.",
    name: "Priya Nair",
    role: "Engineering Lead, Fenway Labs",
  },
  {
    quote:
      "The split-time reports found a bottleneck in our review stage we'd been guessing about for months.",
    name: "Marcus Webb",
    role: "Product Manager, Northline",
  },
  {
    quote:
      "Simple enough that our whole design team adopted it in a single afternoon, no onboarding call needed.",
    name: "Elena Cho",
    role: "Design Director, Verano",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-6 py-24">
      <p className="lane-label text-cobalt">Lane 04 — Testimonials</p>
      <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight md:text-5xl">
        TEAMS THAT PICKED UP THE PACE
      </h2>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col justify-between rounded-2xl border border-mist bg-white p-8"
          >
            <blockquote className="text-lg leading-relaxed text-ink">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-8">
              <div className="font-semibold text-ink">{t.name}</div>
              <div className="text-sm text-slate">{t.role}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
