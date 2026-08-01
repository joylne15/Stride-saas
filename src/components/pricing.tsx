import React from 'react';

const plans = [
  {
    name: 'Starter',
    price: '$0',
    period: 'Forever free',
    description: 'Perfect for individuals and small personal side-projects.',
    features: ['Up to 3 Projects', 'Unlimited Tasks', 'Basic Task Filtering', 'Community Support'],
    isPopular: false,
    cta: 'Get Started',
  },
  {
    name: 'Pro Team',
    price: '$12',
    period: 'per user / month',
    description: 'Ideal for fast-moving startups and active development teams.',
    features: ['Unlimited Projects', 'Real-time Team Sync', 'Priority Task Tagging', 'Activity Audit Logs', 'Direct Integrations'],
    isPopular: true,
    cta: 'Start 14-Day Free Trial',
  },
  {
    name: 'Enterprise',
    price: '$29',
    period: 'per user / month',
    description: 'For growing organizations needing higher control and support.',
    features: ['Custom Workflows', 'Dedicated Success Manager', 'SSO & Advanced Security', 'Custom SLAs'],
    isPopular: false,
    cta: 'Contact Sales',
  },
];

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-slate-950 text-slate-100 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Transparent Pricing for Every Team
          </h2>
          <p className="mt-4 text-slate-400 text-lg">
            Start for free and scale as your product grows.
          </p>
        </div>

        {/* 3-Tier Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col justify-between p-8 rounded-2xl border ${
                plan.isPopular
                  ? 'bg-slate-900 border-indigo-500 shadow-2xl shadow-indigo-600/20'
                  : 'bg-slate-950 border-slate-800'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                <p className="text-xs text-slate-400 mt-1">{plan.description}</p>
                
                <div className="my-6">
                  <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                  <span className="text-slate-400 text-xs ml-2">{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8 text-sm text-slate-300">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-indigo-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`w-full py-3 rounded-xl font-semibold text-sm transition-all ${
                  plan.isPopular
                    ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};