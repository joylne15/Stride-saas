import React from 'react';

const reviews = [
  {
    quote: "Stride replaced three separate tools for our sprint planning. It's ridiculously fast and clutter-free.",
    author: "Alex Morgan",
    role: "Lead Frontend Engineer",
    company: "Apex Labs"
  },
  {
    quote: "Finally a task manager that doesn't feel like a full-time job to maintain. My team picked it up instantly.",
    author: "Sarah Chen",
    role: "Product Designer",
    company: "Velocty"
  },
  {
    quote: "The interface is so clean and responsive. Exactly what modern tech teams need to stay in flow.",
    author: "David K.",
    role: "Engineering Manager",
    company: "StackFlow"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-slate-900 text-slate-100 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Loved by Developers & Product Teams
          </h2>
          <p className="mt-4 text-slate-400 text-lg">
            Here is what builders are saying about using Stride every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, index) => (
            <div key={index} className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
              <p className="text-slate-300 text-sm leading-relaxed italic">
                "{rev.quote}"
              </p>
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-linear-to-tr from-indigo-500 to-violet-500 flex items-center justify-center font-bold text-xs text-white">
                  {rev.author[0]}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{rev.author}</h4>
                  <p className="text-xs text-slate-500">{rev.role} • {rev.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};