import React from 'react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 border-t border-dashed border-zinc-800 bg-black relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        {/* Large quotation mark */}
        <div className="flex justify-center mb-8">
          <svg
            className="w-16 h-16 text-zinc-700"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        {/* Quote text */}
        <blockquote className="text-center">
          <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-white leading-relaxed mb-8">
            We went from 40 hours of manual work every week down to just 6. That's 34 hours back—and we scaled our volume 5x without hiring a single new person.
          </p>
        </blockquote>

        {/* Attribution */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-12 h-0.5 bg-zinc-700 mb-4"></div>
          <p className="text-lg text-zinc-400 font-medium">Operations Director</p>
          <p className="text-sm text-zinc-500">Acquisition Firm</p>
        </div>

        {/* Subtle stats reinforcement */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-center">
          <div className="px-4">
            <div className="text-2xl font-bold text-white">85%</div>
            <div className="text-xs text-zinc-500 uppercase tracking-wider">Time Saved</div>
          </div>
          <div className="px-4">
            <div className="text-2xl font-bold text-white">5x</div>
            <div className="text-xs text-zinc-500 uppercase tracking-wider">Volume Increase</div>
          </div>
          <div className="px-4">
            <div className="text-2xl font-bold text-white">0</div>
            <div className="text-xs text-zinc-500 uppercase tracking-wider">New Hires Needed</div>
          </div>
        </div>
      </div>
    </section>
  );
};
