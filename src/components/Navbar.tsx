// src/components/Navbar.tsx

export default function Navbar() {
  return (
    // sticky top-0 keeps it at the top. backdrop-blur makes it see-through (glassmorphism)
    <nav className="sticky top-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-white font-bold text-xl">Stride</div>
        
        {/* Center Links - hidden on mobile (md:flex), visible on desktop */}
        <div className="hidden md:flex space-x-8 text-sm text-gray-300">
          <a href="#" className="hover:text-white transition">Features</a>
          <a href="#" className="hover:text-white transition">Pricing</a>
          <a href="#" className="hover:text-white transition">Docs</a>
        </div>
        
        {/* Right Side Buttons */}
        <div className="flex items-center space-x-4">
          <button className="text-sm text-gray-300 hover:text-white transition hidden md:block">
            Sign In
          </button>
          <button className="text-sm bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
            Get Started
          </button>
        </div>
        
      </div>
    </nav>
  );
}