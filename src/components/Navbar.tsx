import React, { useState } from 'react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-linear-to-tr from-indigo-600 to-violet-500 flex items-center justify-center font-bold text-white shadow-md shadow-indigo-500/20">
            S
          </div>
          <span className="font-extrabold text-xl tracking-tight bg-clip-text text-transparent bg-linear-to-r from-white via-slate-200 to-slate-400">
            Stride<span className="text-indigo-400 font-medium text-sm ml-1">Flow Stack</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#testimonials" className="hover:text-white transition-colors">Reviews</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            Sign In
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg shadow-indigo-600/30 transition-all hover:scale-[1.02]">
            Start Free Trial
          </button>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-400 hover:text-white focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3 text-sm">
          <a href="#features" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-300 hover:text-white">Features</a>
          <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-300 hover:text-white">Pricing</a>
          <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-300 hover:text-white">Reviews</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-300 hover:text-white">FAQ</a>
          <div className="pt-4 border-t border-slate-800 flex flex-col gap-2">
            <button className="w-full text-center py-2 text-slate-300 font-medium">Sign In</button>
            <button className="w-full text-center py-2 text-white bg-indigo-600 rounded-lg font-medium">Start Free Trial</button>
          </div>
        </div>
      )}
    </header>
  );
};