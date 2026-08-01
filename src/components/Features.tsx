import React from 'react';

const featureList = [
  {
    title: 'Instant Task Board',
    description: 'Create, organize, and drag tasks into simple columns without complicated setup or workflows.',
    icon: (
      <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
      </svg>
    ),
  },
  {
    title: 'Real-time Team Sync',
    description: 'See live updates when team members complete tasks, add comments, or shift deadlines.',
    icon: (
      <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Minimal Distractions',
    description: 'Clean dark UI designed to keep your focus strictly on what matters most—shipping your work.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-slate-900 text-slate-100 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Designed for Speed and Clarity
          </h2>
          <p className="mt-4 text-slate-400 text-lg">
            Everything your team needs to stay productive, without the bloat of traditional software.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featureList.map((item, index) => (
            <div 
              key={index} 
              className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1 shadow-lg group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-6 group-hover:border-indigo-500/40 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};