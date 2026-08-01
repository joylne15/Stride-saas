// Navbar.tsx
const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-teal-500 flex items-center justify-center text-white font-bold text-sm">
            T
          </div>
          <span className="text-xl font-semibold text-gray-900">TaskFlow</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <a href="#features" className="hover:text-teal-600 transition-colors">Features</a>
          <a href="#pricing" className="hover:text-teal-600 transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-teal-600 transition-colors">FAQ</a>
        </div>
        <a
          href="#pricing"
          className="hidden md:inline-flex px-4 py-2 rounded-lg bg-gray-900 text-white text-sm font-semibold hover:bg-gray-800 transition"
        >
          Try free
        </a>
      </div>
    </nav>
  );
};

export default Navbar;