import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded bg-linear-to-tr from-indigo-600 to-violet-500 flex items-center justify-center font-bold text-white text-xs">
            S
          </div>
          <span className="font-bold text-slate-200 text-sm">Stride (FS)</span>
        </div>

        <p className="text-slate-500">
          © {new Date().getFullYear()} Stride Inc. Minimalist team task management.
        </p>

        <div className="flex gap-6">
          <a href="#" className="hover:text-slate-200 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-slate-200 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-slate-200 transition-colors">Contact Support</a>
        </div>

      </div>
    </footer>
  );
};