// src/components/FAQ.tsx
import { useState } from 'react';

const faqs = [
  { q: "Can I cancel my subscription anytime?", a: "Yes, you can cancel directly from your dashboard with one click. There are no hidden fees or cancellation charges." },
  { q: "Do you offer discounts for startups?", a: "We offer a 50% discount for early-stage startups and verified students. Reach out to our sales team to learn more." },
  { q: "How does the free trial work?", a: "You get full access to all Pro features for 14 days. No credit card is required to start your trial." },
  { q: "Is my data secure?", a: "Absolutely. We are SOC2 Type II compliant and encrypt all data both in transit and at rest using industry-standard protocols." }
];

// Simple SVG icons for the expand/collapse button
const PlusIcon = () => (
  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
);
const MinusIcon = () => (
  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path></svg>
);

export default function FAQ() {
  // useState tracks which question is currently open. We set it to 0 so the first one is open by default.
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-black py-24 border-t border-white/5">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-white/10 rounded-xl overflow-hidden ">
              
              {/* The Button (Question) */}
              <button 
                onClick={() => setOpen(open === i ? null : i)} // If clicked, open it. If already open, close it.
                className="flex w-full justify-between items-center p-6 text-left text-white font-medium  transition"
              >
                <span>{faq.q}</span>
                <span className="ml-4 ">
                  {open === i ? <MinusIcon /> : <PlusIcon />}
                </span>
              </button>
              
              {/* The Answer (Animated Grid) */}
              <div className={`grid transition-all duration-300 ease-in-out ${open === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-gray-400 leading-relaxed">{faq.a}</p>
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}