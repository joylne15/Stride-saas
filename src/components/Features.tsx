// src/components/Features.tsx
const features = [
  { title: "Lightning Fast", desc: "Optimized for speed, loading your dashboards in milliseconds." },
  { title: "Secure by Default", desc: "Enterprise-grade security baked into every line of code." },
  { title: "Seamless Integrations", desc: "Connect with Slack, GitHub, and 100+ tools in one click." },
  { title: "Real-time Updates", desc: "See changes instantly as your team updates tasks." },
  { title: "Smart Automations", desc: "Let Stride handle the busywork so you can focus on building." },
  { title: "Advanced Analytics", desc: "Track your team's velocity with beautiful, simple charts." }
];

export default function Features() {
  return (
    // py-24 means padding top and bottom. border-t adds a very faint line at the top
    <section className="bg-black py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">A platform built for speed</h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">Everything you need to streamline your workflow.</p>
        
        {/* The Grid: 1 column on mobile, 2 on tablets (md), 3 on desktops (lg) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div 
              key={i}
              className="rounded-2xl border border-white/10 bg-linear-to-b  to-transparent p-6 backdrop-blur-sm hover:border-white/20 transition"
            >
              {/* The Icon (a gradient square) */}
              <div className="mb-4 h-10 w-10 rounded-lg  from-purple-500 to-blue-500"></div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}