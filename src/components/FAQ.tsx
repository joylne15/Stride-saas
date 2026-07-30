import { useState } from "react";

const FAQS = [
  {
    q: "Do I need to migrate my existing boards?",
    a: "No. Stride imports directly from CSV or from most common task-tracking tools in a single step, and keeps your original creation dates intact.",
  },
  {
    q: "Can I customize the lanes?",
    a: "Yes — lanes, checkpoints, and automation rules are fully editable per project. The default four-lane layout is just a starting point.",
  },
  {
    q: "Is there a limit on tasks per lane?",
    a: "No. Every plan, including Solo, has unlimited tasks. Paid tiers add more lanes, members, and history depth.",
  },
  {
    q: "What happens if I cancel?",
    a: "You keep read-only access to your task history for 90 days after cancellation, and can export everything to CSV at any time.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-cloud py-24">
      <div className="mx-auto max-w-3xl px-6">
        <p className="lane-label text-cobalt">Lane 05 — FAQ</p>
        <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
          QUESTIONS BEFORE YOU START
        </h2>

        <div className="mt-12 divide-y divide-mist border-y border-mist">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-6 text-left"
                >
                  <span className="font-semibold text-ink">{item.q}</span>
                  <span
                    className={`shrink-0 text-xl text-cobalt transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <p className="pb-6 text-sm leading-relaxed text-slate">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
