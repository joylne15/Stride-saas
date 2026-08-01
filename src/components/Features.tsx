// Features.tsx
const features = [
  {
    title: "Drag & drop boards",
    desc: "Move tasks between columns as work progresses. No learning curve.",
    icon: (
      <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    title: "Due dates & reminders",
    desc: "Never miss a deadline with automatic Slack and email nudges.",
    icon: (
      <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Real‑time collaboration",
    desc: "See changes instantly as your team updates tasks. Like a shared whiteboard.",
    icon: (
      <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Everything your team needs, nothing you don’t
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Simple tools that fit into your workflow, not the other way around.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feat, idx) => (
            <div key={idx} className="p-6 rounded-xl border border-gray-200 hover:shadow-md transition">
              <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center mb-4">
                {feat.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feat.title}</h3>
              <p className="text-gray-600 text-sm">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;