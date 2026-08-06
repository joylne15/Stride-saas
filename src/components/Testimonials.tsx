const quotes = [
  {
    quote: "We dropped two tools the week we moved to Stride. Our standups got shorter.",
    name: "Joyce D.",
    role: "Product lead, Kite Studio",
  },
  {
    quote: "It is the only board my team actually keeps up to date. That says everything.",
    name: "Levina K.",
    role: "Founder, Northbound",
  },
  {
    quote: "Simple enough for our interns, sharp enough for the engineers.",
    name: " Joyce W.",
    role: "Engineering manager, Lumen",
  },
  {
    quote: "No setup call, no templates, no training. We were planning in ten minutes.",
    name: "Joan F.",
    role: "Operations, Fieldwork",
  },
];

function QuoteCard({ quote, name, role }: (typeof quotes)[number]) {
  return (
    <figure className="w-[320px] shrink-0 rounded-2xl border border-border bg-card p-6 shadow-card">
      <blockquote className="text-sm leading-relaxed text-foreground">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-xs font-medium text-accent-foreground">
          {name.charAt(0)}
        </span>
        <span className="text-xs text-muted-foreground">
          <span className="block font-medium text-foreground">{name}</span>
          {role}
        </span>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  return (
    <section id="stories" className="overflow-hidden py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <span className="text-xs font-medium uppercase tracking-widest text-primary">Stories</span>
        <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Teams that moved on quietly</h2>
      </div>

      <div className="relative mt-12">
        <div className="flex w-max gap-5 animate-marquee hover:[animation-play-state:paused]">
          {[...quotes, ...quotes].map((quote, index) => (
            <QuoteCard key={index} {...quote} />
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-background to-transparent" />
      </div>
    </section>
  );
}
