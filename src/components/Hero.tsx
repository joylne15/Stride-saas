// Hero.tsx
const Hero = () => {
  return (
    <section className="pt-20 pb-16 md:pt-28 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        {/* Left text */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            Manage tasks without the chaos
          </h1>
          <p className="mt-4 max-w-lg mx-auto lg:mx-0 text-lg text-gray-600">
            TaskFlow brings your team’s work into one simple, visual space.
            Drag, drop, and get things done.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <a
              href="#pricing"
              className="px-6 py-3 rounded-lg bg-gray-900 text-white font-semibold hover:bg-gray-800 transition"
            >
              Start for free
            </a>
            <a
              href="#features"
              className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition"
            >
              See features
            </a>
          </div>
        </div>

        {/* Right: task board preview */}
        <div className="flex-1 w-full max-w-md lg:max-w-none">
          <div className="bg-white border border-gray-200 rounded-2xl shadow-xl p-4 space-y-3">
            {/* Column headers */}
            <div className="flex gap-2 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              <span className="flex-1 text-center">To Do</span>
              <span className="flex-1 text-center">In Progress</span>
              <span className="flex-1 text-center">Done</span>
            </div>
            {/* Cards grid */}
            <div className="grid grid-cols-3 gap-2">
              <div className="space-y-2">
                <div className="bg-teal-50 border border-teal-200 rounded-lg p-2 text-xs text-gray-700">
                  Design onboarding flow
                </div>
                <div className="bg-teal-50 border border-teal-200 rounded-lg p-2 text-xs text-gray-700">
                  API rate limiting
                </div>
              </div>
              <div className="space-y-2">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-2 text-xs text-gray-700">
                  Homepage redesign
                </div>
              </div>
              <div className="space-y-2">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-2 text-xs text-gray-500 line-through">
                  Fix login bug
                </div>
              </div>
            </div>
            {/* Add card placeholder */}
            <div className="pt-2 border-t border-dashed border-gray-200 text-xs text-gray-400 text-center py-1">
              + Add task
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;