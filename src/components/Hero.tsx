import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { size?: "sm" | "md" | "lg" };

const Button: React.FC<ButtonProps> = ({ children, className = "", size = "md", ...props }) => {
  const sizeClass =
    size === "sm" ? "px-3 py-1 text-sm" : size === "lg" ? "px-6 py-3 text-base" : "px-4 py-2";

  return (
    <button {...props} className={`inline-flex items-center justify-center rounded ${sizeClass} ${className}`}>
      {children}
    </button>
  );
};

const board = [
  {
    title: "Today",
    tasks: [
      { name: "Draft onboarding copy", tag: "Design", done: true },
      { name: "Review pull request #218", tag: "Eng", done: false },
    ],
  },
  {
    title: "In progress",
    tasks: [
      { name: "Weekly team sync notes", tag: "Ops", done: false },
      { name: "Update pricing page", tag: "Growth", done: false },
    ],
  },
  {
    title: "Done",
    tasks: [{ name: "Ship v1.2 release", tag: "Eng", done: true }],
  },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-soft-fade">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 text-center md:pt-28">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Now in open beta
        </span>

        <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold leading-[1.08] text-foreground sm:text-5xl md:text-6xl">
          Task management that stays out of your way
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Stride gives small teams one calm place to plan the week, track what is
          moving, and finish work without the noise of a heavy project tool.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button size="lg" className="rounded-full px-7">
            Start free trial
          </Button>
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground">
            See how it works
          </a>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Free for 14 days · No credit card required
        </p>

        <div className="mt-16 grid gap-4 rounded-2xl border border-border bg-card p-4 text-left shadow-lift sm:grid-cols-3 sm:p-6">
          {board.map((column) => (
            <div key={column.title} className="rounded-xl bg-muted/60 p-3">
              <div className="mb-3 flex items-center justify-between px-1">
                <span className="text-xs font-medium text-muted-foreground">{column.title}</span>
                <span className="text-xs text-muted-foreground">{column.tasks.length}</span>
              </div>
              <div className="space-y-2">
                {column.tasks.map((task) => (
                  <div
                    key={task.name}
                    className="rounded-lg border border-border bg-card p-3 shadow-card"
                  >
                    <div className="flex items-start gap-2">
                      <span
                        className={`mt-0.5 h-3.5 w-3.5 shrink-0 rounded-full border ${
                          task.done ? "border-primary bg-primary" : "border-border"
                        }`}
                      />
                      <span
                        className={`text-sm leading-snug ${
                          task.done ? "text-muted-foreground line-through" : "text-foreground"
                        }`}
                      >
                        {task.name}
                      </span>
                    </div>
                    <span className="mt-2 inline-block rounded-full bg-accent px-2 py-0.5 text-[11px] text-accent-foreground">
                      {task.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
