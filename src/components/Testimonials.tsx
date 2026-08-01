// src/components/Testimonials.tsx

const testimonials = [
  { quote: "Stride completely transformed our team's workflow. What used to take hours now takes minutes.", name: "Sarah Chen", role: "CTO, TechFlow" },
  { quote: "The UI is incredibly clean and the performance is unmatched. It's exactly what we needed.", name: "Marcus Johnson", role: "Lead Dev, Appify" },
  { quote: "We switched from a legacy provider and never looked back. The real-time updates are a game changer.", name: "Elena Rodriguez", role: "Product Manager, Nexus" },
  { quote: "Setup took less than five minutes. Our team was up and running with zero training required.", name: "David Kim", role: "Founder, StartupHub" }
];

export default function Testimonials() {
  return (
    <section className="bg-black py-24 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">Loved by fast-moving teams</h2>
        
        {/* The Carousel: flex with overflow-x-auto allows horizontal scrolling. snap-x makes it snap to cards */}
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 scrollbar-hide">
          {testimonials.map((t, i) => (
            <div key={i} className="min-w-75 snap-center rounded-2xl border border-white/1 p-8 backdrop-blur-sm hover:border-white/20 transition">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">"{t.quote}"</p>
              <div className="flex items-center">
                {/* Fake Avatar using a gradient circle */}
                <div className="h-12 w-12 rounded-full from-purple-500 to-blue-500 mr-4 flex items-center justify-center text-white font-bold">
                  {t.name.charAt(0)} {/* Gets the first letter of their name */}
                </div>
                <div>
                  <div className="text-white font-semibold">{t.name}</div>
                  <div className="text-gray-400 text-sm">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}