import React from 'react';
import { motion } from 'framer-motion';
import { Check, ChevronRight } from 'lucide-react';
import { Button } from './ui/Button';
import { formatCurrency } from '../utils/formatCurrency';

interface ValueStackProps {
  suggestedPrice: number;
}

const valueItems = [
  { name: 'Workflow Architecture Audit', value: '$1,500' },
  { name: 'Custom AI Agent Build (Done-For-You)', value: '$4,500' },
  { name: 'Full CRM/Tech-Stack Integration', value: '$2,500' },
  { name: '30-Day Technical Management', value: '$2,000' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

export const ValueStack: React.FC<ValueStackProps> = ({ suggestedPrice }) => {
  return (
    <section className="py-24 relative z-10 border-t border-dashed border-zinc-800 bg-black/50">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-sm font-mono text-blue-400 mb-4 tracking-wider uppercase">The Offer</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            The Payroll-Zero Implementation
          </h3>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8 md:p-12"
        >
          {/* Value items */}
          <div className="space-y-6 mb-10">
            {valueItems.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="flex items-center justify-between gap-4 pb-6 border-b border-zinc-800 last:border-0 last:pb-0"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 p-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                    <Check className="w-4 h-4 text-green-400" />
                  </div>
                  <span className="text-white font-medium">{item.name}</span>
                </div>
                <span className="text-zinc-400 font-mono text-sm whitespace-nowrap">{item.value} value</span>
              </motion.div>
            ))}
          </div>

          {/* Price anchoring */}
          <motion.div variants={itemVariants} className="border-t border-zinc-700 pt-8 space-y-4 text-center">
            <div>
              <span className="text-sm text-zinc-500 uppercase tracking-wider">Total Value</span>
              <p className="text-2xl font-bold text-zinc-500 line-through decoration-red-500/50 mt-1">$10,500</p>
            </div>
            <div>
              <span className="text-sm text-zinc-500 uppercase tracking-wider">Your Investment</span>
              <p className="text-5xl md:text-6xl font-bold text-white mt-1">{formatCurrency(suggestedPrice)}</p>
            </div>
            {10500 - suggestedPrice > 0 && (
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium">
                You save {formatCurrency(10500 - suggestedPrice)}
              </div>
            )}
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="mt-10 text-center">
            <a href="https://calendly.com/aiautomatebiz" target="_blank" rel="noopener noreferrer">
              <Button variant="primary" className="group text-base py-4 px-10 h-auto">
                Book Your Automation Audit
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
