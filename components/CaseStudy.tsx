import React from 'react';
import { ArrowDown, Clock, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

export const CaseStudy: React.FC = () => {
  return (
    <section id="case-study" className="py-24 border-t border-dashed border-zinc-800 bg-zinc-950/50 relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-zinc-900/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          {/* Left Side: The Text */}
          <div className="flex-1 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-900/20 border border-green-500/20 text-green-400 text-xs font-mono mb-6">
                CASE STUDY: ACQUISITION FIRM
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                The "40-to-6" Benchmark
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                A high-growth acquisition firm was losing 40 hours every week to manual data entry and client dispatching.
              </p>
            </div>

            <div className="pl-6 border-l-2 border-zinc-800 space-y-4">
              <h3 className="text-xl font-semibold text-white">The Result</h3>
              <p className="text-zinc-400">
                We deployed a bespoke automation workflow that reduced their weekly input to just 6 hours. That is an <span className="text-white font-medium">85% efficiency gain</span>, allowing them to 5x their volume without adding headcount.
              </p>
            </div>
          </div>

          {/* Right Side: The Visual Metric */}
          <div className="flex-1 w-full">
            <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8 md:p-12 overflow-hidden group">
              {/* Highlight effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="flex items-center justify-between mb-8">
                <div className="text-sm font-mono text-zinc-500 uppercase tracking-wider">Weekly Manual Hours</div>
                <Clock className="text-zinc-600 w-5 h-5" />
              </div>

              <div className="flex items-baseline gap-4">
                <span className="text-7xl md:text-8xl font-bold text-zinc-700 line-through decoration-red-500/50 decoration-4">40h</span>
                <ArrowDown className="w-8 h-8 text-zinc-500 animate-bounce" />
                <span className="text-7xl md:text-8xl font-bold text-white">6h</span>
              </div>

              <div className="mt-8 pt-8 border-t border-zinc-800 flex items-center gap-4">
                 <div className="flex items-center gap-2 text-green-400 bg-green-400/10 px-3 py-1.5 rounded-md border border-green-400/20">
                    <TrendingUp size={16} />
                    <span className="font-semibold text-sm">85% Efficiency Gain</span>
                 </div>
                 <span className="text-zinc-500 text-sm">Volume increased 5x</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};