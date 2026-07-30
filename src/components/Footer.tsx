const COLUMNS = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Changelog", "Roadmap"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Blog"],
  },
  {
    title: "Resources",
    links: ["Docs", "API", "Support"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-mist bg-ink text-cloud">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-cobalt" />
              <span className="font-display text-2xl tracking-wide">
                STRIDE
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-ink-muted">
              A task tracker for teams who measure progress in momentum, not
              meetings.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="lane-label text-ink-muted">{col.title}</h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-cloud/80 transition-colors hover:text-cobalt"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-ink-muted md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Stride. All rights reserved.</span>
          <span className="font-mono-stat">Built for pace, not pressure.</span>
        </div>
      </div>
    </footer>
  );
}
