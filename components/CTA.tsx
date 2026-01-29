import React from 'react';
import { Button } from './ui/Button';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section className="py-32 border-t border-dashed border-zinc-800 bg-black relative overflow-hidden z-10">
      
      {/* Background Beam Effect for CTA */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8">
           <CheckCircle2 size={16} />
           <span>Risk Reversal Guarantee</span>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          We Build Your First <br/>
          <span className="text-white">Automation for Free.</span>
        </h2>
        
        <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          We’ll build your highest-impact Proof of Concept (PoC) with zero money down. If you don't see the immediate ROI and time saved, you don't pay.
        </p>
        
        <div className="flex flex-col items-center gap-6">
          <a href="https://calendly.com/aiautomatebiz" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button variant="primary" className="w-full sm:w-auto text-base py-4 px-10 h-auto">
              Claim Your Free Proof-of-Concept
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </a>
          
          <p className="text-sm text-zinc-500 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
            Schedule a 15-minute "Efficiency Audit" to see how many hours we can buy back.
          </p>
        </div>
      </div>
    </section>
  );
};