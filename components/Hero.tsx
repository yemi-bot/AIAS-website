import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { ChevronRight } from 'lucide-react';

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
        We build custom AI automation engines that replace manual human workflows. Reclaim 34+ hours a week and eliminate 'Human Latency' in 14 days.
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
      </motion.div>
    </section>
  );
};