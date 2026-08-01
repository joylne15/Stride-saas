// Pricing.tsx
const plans = [
  {
    name: "Free",
    price: "$0",
    desc: "For individuals and small projects.",
    features: ["Up to 3 boards", "5 team members", "Basic integrations"],
  },
  {
    name: "Team",
    price: "$8",
    period: "/user/month",
    desc: "For growing teams that need more power.",
    features: ["Unlimited boards", "Priority support", "Advanced permissions", "Custom fields"],
    highlighted: true,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Simple, fair pricing</h2>
          <p className="mt-4 text-lg text-gray-600">Start for free, upgrade when you need to.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 border ${
                plan.highlighted
                  ? "border-teal-500 bg-white shadow-lg ring-1 ring-teal-200"
                  : "border-gray-200 bg-white"
              }`}
            >
              <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
              <p className="mt-1 text-sm text-gray-500">{plan.desc}</p>
              <div className="mt-4 flex items-baseline">
                <span className="text-3xl font-extrabold text-gray-900">{plan.price}</span>
                {plan.period && <span className="ml-1 text-gray-500">{plan.period}</span>}
              </div>
              <ul className="mt-6 space-y-2">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-teal-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>
              <button className="mt-8 w-full py-2.5 rounded-lg bg-gray-900 text-white text-sm font-semibold hover:bg-gray-800 transition">
                {plan.name === "Free" ? "Get started" : "Try Team free"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;