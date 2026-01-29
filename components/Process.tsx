import React from 'react';
import { Search, Cog, Layout } from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "Process Audit",
    description: "We find the hidden 'leaks' in your current manual workflow.",
    icon: <Search className="w-5 h-5" />
  },
  {
    number: "02",
    title: "Engine Build",
    description: "We bridge your data silos using industry-grade automation and AI.",
    icon: <Cog className="w-5 h-5" />
  },
  {
    number: "03",
    title: "Interface Delivery",
    description: "We hand you the keys to a simplified dashboard that runs your business for you.",
    icon: <Layout className="w-5 h-5" />
  }
];

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 border-t border-dashed border-zinc-800 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Our Deployment Process</h2>
          <p className="text-zinc-400">From audit to autopilot in 30 days or less.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-px bg-zinc-800 -z-0"></div>

          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 group">
              <div className="w-16 h-16 rounded-full bg-black border border-zinc-700 flex items-center justify-center mb-6 mx-auto group-hover:border-blue-500 transition-colors group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                <span className="font-mono font-bold text-zinc-300 group-hover:text-white">{step.number}</span>
              </div>
              
              <div className="bg-zinc-900/40 border border-zinc-800/60 p-6 rounded-xl text-center hover:bg-zinc-900/60 transition-colors">
                <div className="inline-flex items-center justify-center p-2 rounded-lg bg-zinc-800/50 mb-4 text-zinc-300">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};