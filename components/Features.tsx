import React from 'react';
import { SpotlightCard } from './ui/SpotlightCard';
import { Database, MousePointerClick, LayoutDashboard } from 'lucide-react';

const pillars = [
  {
    title: "The Shadow Backend",
    description: "We connect your existing tools (Airtable, CRM, Email, Cloud Storage) to handle data entry and file routing autonomously.",
    icon: <Database className="w-6 h-6 text-blue-400" />
  },
  {
    title: "One-Click Operations",
    description: "We replace complex manual workflows with 'One-Click' triggers. If a human has to do it twice, a bot should do it forever.",
    icon: <MousePointerClick className="w-6 h-6 text-purple-400" />
  },
  {
    title: "Executive Dashboards",
    description: "No more looking at code. We build clean, high-performance interfaces where you manage your entire automated engine from one screen.",
    icon: <LayoutDashboard className="w-6 h-6 text-green-400" />
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 relative z-10 border-t border-dashed border-zinc-800 bg-black/50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Core Value Proposition - Efficiency Delta */}
        <div className="mb-20 md:text-center max-w-4xl mx-auto">
          <h2 className="text-sm font-mono text-blue-400 mb-4 tracking-wider uppercase">The Efficiency Delta</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            We don't just "suggest" AI tools. <br/>
            <span className="text-zinc-500">We architect a custom Shadow Backend.</span>
          </h3>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto">
             Our target is a minimum <span className="text-white font-semibold">75% reduction in Human Latency</span> within your first 30 days of deployment.
          </p>
        </div>

        {/* The Three Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((feature, idx) => (
            <SpotlightCard key={idx} className="h-full p-8 flex flex-col">
              <div className="mb-6 inline-flex p-3 rounded-lg bg-zinc-900/80 border border-zinc-800 w-fit">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-zinc-400 leading-relaxed">
                {feature.description}
              </p>
              
              {/* Decorative lines at bottom of card */}
              <div className="mt-auto pt-8 flex items-center gap-2 opacity-30">
                 <div className="h-1 w-1 rounded-full bg-zinc-500"></div>
                 <div className="h-px w-full bg-zinc-800"></div>
              </div>
            </SpotlightCard>
          ))}
        </div>

      </div>
    </section>
  );
};