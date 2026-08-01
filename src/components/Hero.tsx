import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24 bg-slate-950 text-slate-100">
      {/* Background glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-87.5 bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-800/50 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
          Task Management Simplified
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
          Keep your team in sync without the <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-violet-400">clutter</span>.
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Stride strips away complex setups and overwhelming menus. Manage tasks, assign work, and track team progress in seconds.
        </p>

        {/* CTA Section */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl shadow-lg shadow-indigo-600/30 transition-all hover:scale-[1.02]">
            Get Started Free
          </button>
          <button className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-semibold rounded-xl transition-colors">
            See How It Works
          </button>
        </div>

        {/* Mock Task Management Visual Preview */}
        <div className="mt-14 relative mx-auto max-w-4xl rounded-2xl border border-slate-800 bg-slate-900/90 p-4 sm:p-6 shadow-2xl shadow-indigo-950/40 text-left">
          {/* Mock Window Controls */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-xs font-mono text-slate-500">stride.app/board</span>
            </div>
            <span className="text-xs text-indigo-400 bg-indigo-950/60 px-2.5 py-1 rounded-md border border-indigo-800/40 font-medium">
              Sprint #12 Active
            </span>
          </div>

          {/* Kanban Board Columns Simulation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Column 1: To Do */}
            <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
              <div className="flex items-center justify-between mb-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                <span>To Do (2)</span>
                <span className="text-slate-600">+</span>
              </div>
              <div className="space-y-2">
                <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 hover:border-slate-700 transition-colors">
                  <span className="text-xs text-indigo-400 font-mono">#TSK-104</span>
                  <p className="text-sm font-medium text-slate-200 mt-1">Design new dashboard layout</p>
                </div>
                <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 hover:border-slate-700 transition-colors">
                  <span className="text-xs text-indigo-400 font-mono">#TSK-105</span>
                  <p className="text-sm font-medium text-slate-200 mt-1">Update Stripe API keys</p>
                </div>
              </div>
            </div>

            {/* Column 2: In Progress */}
            <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
              <div className="flex items-center justify-between mb-3 text-xs font-semibold text-amber-400 uppercase tracking-wider">
                <span>In Progress (1)</span>
                <span className="text-slate-600">+</span>
              </div>
              <div className="p-3 bg-slate-900 rounded-lg border border-slate-700 shadow-md">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-amber-400 font-mono">#TSK-102</span>
                  <span className="text-[10px] bg-amber-950/80 text-amber-300 px-2 py-0.5 rounded border border-amber-800/50">High Priority</span>
                </div>
                <p className="text-sm font-medium text-white mt-1">Build React components</p>
                <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                  <span className="text-slate-500">Assignee: Joyce</span>
                  <span className="text-indigo-400">Due Today</span>
                </div>
              </div>
            </div>

            {/* Column 3: Done */}
            <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
              <div className="flex items-center justify-between mb-3 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                <span>Completed (2)</span>
                <span className="text-slate-600">+</span>
              </div>
              <div className="space-y-2 opacity-80">
                <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                  <span className="text-xs text-emerald-400 font-mono line-through">#TSK-100</span>
                  <p className="text-sm font-medium text-slate-400 line-through mt-1">Setup Tailwind CSS</p>
                </div>
                <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                  <span className="text-xs text-emerald-400 font-mono line-through">#TSK-101</span>
                  <p className="text-sm font-medium text-slate-400 line-through mt-1">Initialize Vite project</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};