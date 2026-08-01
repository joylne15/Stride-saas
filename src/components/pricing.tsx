// src/components/Pricing.tsx

// A tiny SVG checkmark icon so we don't need external icon libraries
const CheckIcon = () => (
  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
);

const pricingTiers = [
  { 
    name: "Hobby", price: "$0", desc: "For individuals trying out Stride.", 
    features: ["Up to 3 projects", "Community support", "1GB Storage", "Basic analytics"] 
  },
  { 
    name: "Pro", price: "$29", desc: "For professional teams scaling fast.", 
    features: ["Unlimited projects", "Priority support", "100GB Storage", "Advanced analytics", "Smart Automations"], 
    featured: true // This triggers the purple highlight!
  },
  { 
    name: "Enterprise", price: "Custom", desc: "For large organizations.", 
    features: ["Everything in Pro", "Dedicated manager", "Unlimited Storage", "SSO & SAML", "99.99% Uptime SLA"] 
  }
];

export default function Pricing() {
  return (
    <section className="bg-black py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">Simple, transparent pricing</h2>
        <p className="text-gray-400 text-center mb-16">Start free. Upgrade when you need to.</p>
        
        {/* items-start makes sure all columns align at the top nicely */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {pricingTiers.map((tier, i) => (
            <div key={i} className={`relative rounded-2xl p-8 border ${tier.featured ? 'border-purple-500/50 bg-purple-500/5' : 'border-white/10'} backdrop-blur-sm`}>
              
              {/* The badge for the popular tier */}
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-linear-to-r from-purple-500 to-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}
              
              <h3 className="text-xl font-semibold text-white">{tier.name}</h3>
              <p className="text-gray-400 text-sm mt-2 h-10">{tier.desc}</p>
              
              <div className="my-6">
                <span className="text-5xl font-extrabold text-white">{tier.price}</span>
                {tier.price !== "Custom" && <span className="text-gray-400">/mo</span>}
              </div>
              
              <button className={`w-full py-3 rounded-lg font-semibold text-sm transition ${tier.featured ? 'bg-white text-black hover:bg-gray-200' : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'}`}>
                {tier.price === "Custom" ? "Contact Sales" : "Get Started"}
              </button>
              
              <ul className="mt-8 space-y-4">
                {tier.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start text-gray-300 text-sm">
                    <span className="mr-3 mt-0.5"><CheckIcon /></span>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}