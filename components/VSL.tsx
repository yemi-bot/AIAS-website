import React from 'react';

export const VSL: React.FC = () => {
  return (
    <section className="py-16 bg-black relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        {/* Headline */}
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
          Watch: How We Save 34+ Hours/Week
        </h2>

        {/* Video Container */}
        <div className="relative aspect-video rounded-xl overflow-hidden border border-zinc-800 shadow-2xl shadow-black/50">
          <iframe
            src="https://www.youtube-nocookie.com/embed/FuIV7-no12U?rel=0&modestbranding=1"
            title="How We Save 34+ Hours/Week"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
          {/* Overlay to block clicking YouTube title and share button */}
          <div className="absolute top-0 left-0 right-0 h-16 pointer-events-auto" />
          <div className="absolute top-0 right-0 w-16 h-24 pointer-events-auto" />
          {/* Overlay to block YouTube logo at bottom */}
          <div className="absolute bottom-0 right-0 w-24 h-12 pointer-events-auto" />
        </div>

        {/* Optional subtext */}
        <p className="text-center text-zinc-500 text-sm mt-4">
          5 min watch — see exactly how our automation works
        </p>
      </div>
    </section>
  );
};
