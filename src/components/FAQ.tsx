import React, { useState } from 'react';

const faqs = [
  {
    question: "How is Stride different from Trello or Linear?",
    answer: "Stride focuses strictly on minimalism. There are no bloated settings menus or complex configuration steps. You open the board, type your task, assign it, and ship."
  },
  {
    question: "Can I invite team members on the Free plan?",
    answer: "Yes! The free Starter plan allows up to 3 active projects with unlimited tasks so you can collaborate easily."
  },
  {
    question: "Does Stride support dark mode?",
    answer: "Stride is built dark-first by design to reduce eye strain during deep development and design sessions."
  },
  {
    question: "Is there a credit card required for the trial?",
    answer: "No credit card is required to sign up for our 14-day Pro team trial."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-slate-950 text-slate-100 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-slate-400 text-lg">
            Got questions? We've got answers.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-left p-5 flex items-center justify-between font-semibold text-slate-200 hover:text-white"
                >
                  <span>{faq.question}</span>
                  <svg 
                    className={`w-5 h-5 text-indigo-400 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-slate-400 border-t border-slate-800/50 pt-3 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};