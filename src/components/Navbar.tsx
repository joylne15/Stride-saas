import { useState } from "react";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-mist/80 bg-cloud/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-cobalt" aria-hidden="true" />
          <span className="font-display text-2xl tracking-wide">STRIDE</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="lane-label text-slate transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <a href="#" className="lane-label text-slate hover:text-ink">
            Log in
          </a>
          <a
            href="#pricing"
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-cloud transition-colors hover:bg-cobalt"
          >
            Start free
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-mist md:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-5 bg-ink" />
            <span className="block h-0.5 w-5 bg-ink" />
          </div>
        </button>
      </nav>

      {open && (
        <div className="border-t border-mist bg-cloud px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="lane-label text-slate"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#pricing"
                onClick={() => setOpen(false)}
                className="inline-block rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-cloud"
              >
                Start free
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
