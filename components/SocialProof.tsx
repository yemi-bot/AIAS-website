import React from 'react';

// Using text for logos to keep it simple but styled like SVGs
const tools = [
  "OpenAI", "Gemini", "Airtable", "Make", "n8n", "Supabase", "Anthropic", "Stripe"
];

export const SocialProof: React.FC = () => {
  return (
    <section id="proof" className="py-12 border-t border-dashed border-zinc-800 bg-black">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <p className="text-center text-sm font-medium text-zinc-500 uppercase tracking-widest">
          Built with best-in-class infrastructure
        </p>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...tools, ...tools, ...tools, ...tools].map((tool, i) => (
            <div key={i} className="mx-8 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity cursor-default">
              <span className="text-xl md:text-2xl font-bold font-mono text-zinc-300">{tool}</span>
            </div>
          ))}
        </div>
        
        {/* Gradient fades on sides */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
      </div>

      <style>{`
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};