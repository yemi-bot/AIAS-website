import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { ChevronRight, Play, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-6 max-w-7xl mx-auto flex flex-col items-center text-center z-10">
      {/* Badge */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-300 mb-8 hover:border-zinc-700 transition-colors cursor-default"
      >
        <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
        The Payroll-Zero Revenue Engine
      </motion.div>

      {/* Hook - Main Headline */}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60"
      >
        Scale Your Output, <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Not Your Payroll.</span>
      </motion.h1>

      {/* Promise of Value */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed"
      >
        We build custom AI automation engines that replace manual human workflows. Reclaim 40+ hours a week and eliminate 'Human Latency' in 14 days.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
      >
        <a href="https://calendly.com/aiautomatebiz" target="_blank" rel="noopener noreferrer">
          <Button variant="primary" className="group">
            Book Your Automation Audit
            <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </a>
        <a href="#roi-calculator">
          <Button variant="secondary" className="group">
            <Play className="w-4 h-4 mr-2" />
            Watch How It Works
            <span className="ml-2 text-xs text-zinc-500">(10-Min VSL)</span>
          </Button>
        </a>
      </motion.div>

      {/* Visual Tech Representation (Abstract Dashboard Mockup) */}
      <motion.div 
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="mt-20 relative w-full max-w-5xl aspect-[16/9] bg-zinc-900 rounded-lg border border-zinc-800/50 shadow-2xl overflow-hidden group"
      >
        {/* Glow behind the dashboard */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
        
        {/* Dashboard Content Mockup */}
        <div className="relative h-full w-full bg-black/90 backdrop-blur-sm p-6 flex flex-col">
           {/* Fake Header */}
           <div className="flex items-center gap-4 border-b border-zinc-800 pb-4 mb-6">
             <div className="flex gap-2">
               <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
               <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
               <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
             </div>
             <div className="h-4 w-64 bg-zinc-800 rounded-full"></div>
             <div className="ml-auto h-8 w-24 bg-blue-500/10 border border-blue-500/20 rounded flex items-center justify-center text-xs text-blue-400 font-mono">
               Status: ACTIVE
             </div>
           </div>
           
           {/* Fake Grid Content */}
           <div className="grid grid-cols-3 gap-6 h-full">
             <div className="col-span-2 space-y-4">
               {/* Main Graph Area */}
               <div className="h-48 w-full bg-zinc-900/50 rounded border border-zinc-800 relative overflow-hidden flex items-end p-4 gap-2">
                  <div className="w-full h-[30%] bg-zinc-800 rounded-t"></div>
                  <div className="w-full h-[45%] bg-zinc-800 rounded-t"></div>
                  <div className="w-full h-[40%] bg-zinc-800 rounded-t"></div>
                  <div className="w-full h-[60%] bg-zinc-800 rounded-t"></div>
                  <div className="w-full h-[75%] bg-blue-500/50 rounded-t relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/50 to-transparent"></div>
                  </div>
                  <div className="absolute top-4 left-4 text-xs text-zinc-500 font-mono">Tasks Automated / Hr</div>
               </div>
               
               <div className="grid grid-cols-2 gap-4">
                 <div className="h-24 w-full bg-zinc-900/50 rounded border border-zinc-800 p-4">
                    <div className="h-2 w-12 bg-zinc-700 rounded mb-2"></div>
                    <div className="h-6 w-20 bg-zinc-800 rounded"></div>
                 </div>
                 <div className="h-24 w-full bg-zinc-900/50 rounded border border-zinc-800 p-4">
                    <div className="h-2 w-12 bg-zinc-700 rounded mb-2"></div>
                    <div className="h-6 w-20 bg-zinc-800 rounded"></div>
                 </div>
               </div>
             </div>
             
             <div className="col-span-1 space-y-4">
                <div className="h-full w-full bg-zinc-900/50 rounded border border-zinc-800 flex flex-col p-4 gap-3">
                   <div className="text-xs text-zinc-500 font-mono mb-2">LIVE FEED</div>
                   {[1,2,3,4,5,6].map(i => (
                     <div key={i} className="flex items-center gap-3 border-b border-zinc-800/50 pb-2 last:border-0">
                       <div className="w-6 h-6 rounded bg-zinc-800 flex items-center justify-center">
                         <Zap size={12} className="text-yellow-500" />
                       </div>
                       <div className="flex flex-col gap-1">
                         <div className="h-1.5 w-16 bg-zinc-700 rounded"></div>
                         <div className="h-1.5 w-10 bg-zinc-800 rounded"></div>
                       </div>
                     </div>
                   ))}
                </div>
             </div>
           </div>
        </div>
      </motion.div>
    </section>
  );
};