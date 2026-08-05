import React from "react";

const Layers: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);

const Users: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M17 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const CheckCircle2: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const features = [
  {
    icon: Layers,
    title: "One simple board",
    body: "Three lists, drag and drop, nothing else to learn. Your whole week fits on a single screen.",
  },
  {
    icon: Users,
    title: "Built for small teams",
    body: "Assign a task, leave a comment, move on. Everyone sees the same plan without a status meeting.",
  },
  {
    icon: CheckCircle2,
    title: "Progress you can feel",
    body: "Clear checkmarks and a weekly recap so you always know what shipped and what is next.",
  },
];

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="max-w-xl">
        <span className="text-xs font-medium uppercase tracking-widest text-primary">Features</span>
        <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
          Everything you need. Nothing you don&apos;t.
        </h2>
        <p className="mt-4 text-muted-foreground">
          Stride keeps the surface small on purpose, so the tool never becomes the work.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl border border-border bg-card p-6 shadow-card transition-shadow hover:shadow-lift"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <feature.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-5 text-lg font-semibold">{feature.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
