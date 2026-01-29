import React from 'react';
import { SpotlightCard } from './ui/SpotlightCard';

const testimonials = [
  {
    quote: "We reduced our operational overhead by 40% in just two months. The autonomous agents handle the boring stuff, so we can focus on growth.",
    author: "Elena Rodriguez",
    role: "COO",
    company: "Vertex Tech"
  },
  {
    quote: "Implementation was surprisingly smooth. We didn't have to change our existing workflows; Automata just fit right in.",
    author: "David Chen",
    role: "Head of Product",
    company: "Nebula Systems"
  },
  {
    quote: "The ability to process unstructured data from emails and automatically update our CRM has been a game changer for our sales team.",
    author: "Sarah Jenkins",
    role: "VP Sales",
    company: "Orbit Corp"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 border-t border-dashed border-zinc-800 bg-black relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Don't take our word for it</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <SpotlightCard key={i} className="p-8 h-full bg-zinc-900/20 border-zinc-800/50">
               <div className="flex flex-col h-full">
                 <div className="mb-6 text-zinc-300 text-lg leading-relaxed italic">
                   "{t.quote}"
                 </div>
                 <div className="mt-auto flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 border border-zinc-700 flex items-center justify-center text-xs font-bold text-white">
                      {t.author.charAt(0)}
                   </div>
                   <div>
                     <div className="text-sm font-medium text-white">{t.author}</div>
                     <div className="text-xs text-zinc-500">{t.role}, {t.company}</div>
                   </div>
                 </div>
               </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};
