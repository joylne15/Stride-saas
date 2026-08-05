import React from "react";

// Lightweight local Accordion replacement to avoid missing module error.
type PropsWithChildren = { children?: React.ReactNode } & Record<string, any>;
export const Accordion: React.FC<PropsWithChildren & { type?: string; collapsible?: boolean }> = ({ children, ...props }) => (
  <div {...props}>{children}</div>
);
export const AccordionItem: React.FC<PropsWithChildren & { value?: string }> = ({ children, ...props }) => (
  <details {...props} className={props.className}>
    {children}
  </details>
);
export const AccordionTrigger: React.FC<PropsWithChildren> = ({ children, ...props }) => (
  <summary {...props}>{children}</summary>
);
export const AccordionContent: React.FC<PropsWithChildren> = ({ children, ...props }) => (
  <div {...props}>{children}</div>
);

const faqs = [
  {
    q: "Is Stride really free to start?",
    a: "Yes. The Solo plan is free forever for one person, and every paid plan includes a 14-day trial with no card required.",
  },
  {
    q: "Can I import from Trello or Asana?",
    a: "You can paste a list of tasks or upload a CSV, and Stride will turn each row into a card on your board.",
  },
  {
    q: "How many people can join a board?",
    a: "Up to 20 members per board on Team, and unlimited members on Studio with guest access for clients.",
  },
  {
    q: "Do you have a mobile app?",
    a: "Stride works in any mobile browser today, and native iOS and Android apps are in beta for Team customers.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="border-t border-border bg-surface-tint/50">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-widest text-primary">FAQ</span>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Questions, answered</h2>
        </div>

        <Accordion type="single" collapsible className="mt-10 w-full">
          {faqs.map((faq) => (
            <AccordionItem key={faq.q} value={faq.q} className="border-border">
              <AccordionTrigger className="text-left text-base font-medium">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
