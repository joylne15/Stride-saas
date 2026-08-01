// src/components/Hero.tsx

export default function Hero() {
  return (
    // relative allows us to place the gradient inside this section
    <section className="relative overflow-hidden bg-black pt-40 pb-24 text-center">
      
      {/* The Subtle Background Glow - This is the "Vercel/Linear" look */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2  bg-purple-600/20 rounded-full blur-[150px] pointer-events-none"></div>
      
      {/* z-10 brings the text above the glow */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        
        {/* Glassmorphism Badge */}
        <div className="inline-block mb-6 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-gray-300 backdrop-blur-md">
          ✨ Stride 2.0 is now live!
        </div>

        {/* Main Headline - Notice the gradient text effect */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight 
        
        
        
        
        
        
        
        
        
        
from-white to-gray-500 bg-clip-text text-transparent">
          Plan, track, and ship with speed
        </h1>
        
        {/* Subtitle */}
        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-400">
          Stride is the minimalist task manager for fast-moving teams. No clutter, just progress.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex justify-center gap-4">
          <button className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-gray-200 transition">
            Start for Free
          </button>
          <button className="rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md hover:bg-white/10 transition">
            Book a Demo
          </button>
        </div>
        
      </div>
    </section>
  );
}