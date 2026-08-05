import type { ButtonHTMLAttributes, SVGProps } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline";
  className?: string;
};

function Button({ variant = "default", className = "", ...props }: ButtonProps) {
  const variantClasses =
    variant === "outline"
      ? "border border-border bg-transparent text-foreground hover:bg-accent hover:text-foreground"
      : "bg-primary text-primary-foreground hover:bg-primary/90";

  return (
    <button
      className={`inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ${variantClasses} ${className}`}
      {...props}
    />
  );
}

function Check(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

const tiers = [
  {
    name: "Solo",
    price: "$0",
    note: "for one person",
    features: ["1 board", "Unlimited tasks", "Weekly recap"],
    featured: false,
  },
  {
    name: "Team",
    price: "$9",
    note: "per user / month",
    features: ["Unlimited boards", "Comments & mentions", "Due dates", "Priority support"],
    featured: true,
  },
  {
    name: "Studio",
    price: "$19",
    note: "per user / month",
    features: ["Everything in Team", "Guest access", "Custom workflows", "Admin controls"],
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="border-y border-border bg-surface-tint/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mx-auto max-w-xl text-center">
          <span className="text-xs font-medium uppercase tracking-widest text-primary">Pricing</span>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Fair, flat, and readable</h2>
          <p className="mt-4 text-muted-foreground">
            Start free. Upgrade when your team grows. Cancel any time.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col rounded-2xl border bg-card p-7 ${
                tier.featured
                  ? "border-primary/40 shadow-lift md:-translate-y-3"
                  : "border-border shadow-card"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold">{tier.name}</h3>
                {tier.featured && (
                  <span className="rounded-full bg-primary px-2.5 py-0.5 text-[11px] text-primary-foreground">
                    Popular
                  </span>
                )}
              </div>
              <div className="mt-5 flex items-end gap-1">
                <span className="font-display text-4xl font-semibold">{tier.price}</span>
                <span className="pb-1 text-xs text-muted-foreground">{tier.note}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {tier.features.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button
                variant={tier.featured ? "default" : "outline"}
                className="mt-8 w-full rounded-full"
              >
                {tier.featured ? "Start free trial" : "Choose " + tier.name}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
