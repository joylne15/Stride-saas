const PLANS = [
  {
    name: "Solo",
    price: "0",
    tagline: "For a single runner finding their pace.",
    features: ["Up to 3 lanes", "1 team member", "7-day task history", "Basic reports"],
    highlighted: false,
  },
  {
    name: "Team",
    price: "18",
    tagline: "For teams who need everyone in sync.",
    features: [
      "Unlimited lanes",
      "Up to 20 team members",
      "Full split-time history",
      "Checkpoint automations",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    name: "Studio",
    price: "42",
    tagline: "For orgs running multiple tracks at once.",
    features: [
      "Everything in Team",
      "Unlimited members",
      "Open track API access",
      "SSO & audit logs",
      "Dedicated onboarding",
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-ink py-24 text-cloud">
      <div className="mx-auto max-w-6xl px-6">
        <p className="lane-label text-amber">Lane 03 — Pricing</p>
        <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight md:text-5xl">
          PICK YOUR PACE
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-2xl border p-8 ${
                plan.highlighted
                  ? "border-cobalt bg-graphite"
                  : "border-white/10 bg-graphite/40"
              }`}
            >
              {plan.highlighted && (
                <span className="lane-label mb-4 inline-block w-fit rounded-full bg-cobalt px-3 py-1 text-white">
                  Most popular
                </span>
              )}
              <h3 className="font-display text-2xl tracking-wide">
                {plan.name.toUpperCase()}
              </h3>
              <p className="mt-2 text-sm text-ink-muted">{plan.tagline}</p>

              <div className="mt-6 flex items-baseline gap-1 font-mono-stat">
                <span className="text-4xl font-medium">${plan.price}</span>
                <span className="text-sm text-ink-muted">/month</span>
              </div>

              <ul className="mt-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cobalt" />
                    <span className="text-ink-muted">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`mt-8 rounded-full px-5 py-3 text-center text-sm font-semibold transition-colors ${
                  plan.highlighted
                    ? "bg-cobalt text-white hover:bg-cobalt-dim"
                    : "border border-white/20 text-cloud hover:border-white/50"
                }`}
              >
                Get started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
