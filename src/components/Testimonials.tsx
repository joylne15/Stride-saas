// Testimonials.tsx
const testimonials = [
  {
    quote: "TaskFlow replaced three tools we were using. It's so simple our whole team adopted it in one day.",
    name: "Priya Sharma",
    role: "Ops Manager, Loomly",
    avatar: "PS",
  },
  {
    quote: "The drag-and-drop is exactly what we needed. No bloat, just pure task management.",
    name: "Marcus Lee",
    role: "Dev Lead, Threadly",
    avatar: "ML",
  },
  {
    quote: "Finally a project tool that doesn't require a tutorial. TaskFlow just makes sense.",
    name: "Eva Johansson",
    role: "Designer, Freelance",
    avatar: "EJ",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
          Loved by teams that ship
        </h2>
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="snap-center shrink-0 w-[85vw] sm:w-100 bg-gray-50 rounded-xl p-6 border border-gray-200"
            >
              <p className="text-gray-700 italic">“{t.quote}”</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-teal-100 text-teal-700 font-semibold flex items-center justify-center text-xs">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-medium text-sm text-gray-900">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;