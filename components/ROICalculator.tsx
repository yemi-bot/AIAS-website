import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, TrendingUp, ChevronRight } from 'lucide-react';
import { SpotlightCard } from './ui/SpotlightCard';
import { Button } from './ui/Button';

const formatCurrency = (value: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);

export const ROICalculator: React.FC = () => {
  const [employees, setEmployees] = useState(5);
  const [hourlyRate, setHourlyRate] = useState(35);
  const [manualHours, setManualHours] = useState(20);

  const monthlyLoss = useMemo(
    () => employees * hourlyRate * manualHours * 4.33,
    [employees, hourlyRate, manualHours]
  );

  const yearlySavings = useMemo(() => monthlyLoss * 12 * 0.85, [monthlyLoss]);

  return (
    <section id="roi-calculator" className="py-24 relative z-10 border-t border-dashed border-zinc-800 bg-black/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:text-center max-w-3xl mx-auto"
        >
          <h2 className="text-sm font-mono text-blue-400 mb-4 tracking-wider uppercase">ROI Calculator</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Calculate Your Hidden <br />
            <span className="text-zinc-500">Payroll Leak</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Inputs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-8"
          >
            {/* Employees slider */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-medium text-zinc-300">Number of Employees</label>
                <span className="text-lg font-bold text-white tabular-nums">{employees}</span>
              </div>
              <input
                type="range"
                min={1}
                max={50}
                value={employees}
                onChange={(e) => setEmployees(Number(e.target.value))}
                className="roi-slider w-full"
              />
              <div className="flex justify-between text-xs text-zinc-600 mt-1">
                <span>1</span>
                <span>50</span>
              </div>
            </div>

            {/* Hourly Rate slider */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-medium text-zinc-300">Average Hourly Rate</label>
                <span className="text-lg font-bold text-white tabular-nums">${hourlyRate}</span>
              </div>
              <input
                type="range"
                min={15}
                max={150}
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                className="roi-slider w-full"
              />
              <div className="flex justify-between text-xs text-zinc-600 mt-1">
                <span>$15</span>
                <span>$150</span>
              </div>
            </div>

            {/* Manual Hours slider */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-medium text-zinc-300">Hours/Week on Manual Tasks</label>
                <span className="text-lg font-bold text-white tabular-nums">{manualHours}h</span>
              </div>
              <input
                type="range"
                min={5}
                max={40}
                value={manualHours}
                onChange={(e) => setManualHours(Number(e.target.value))}
                className="roi-slider w-full"
              />
              <div className="flex justify-between text-xs text-zinc-600 mt-1">
                <span>5h</span>
                <span>40h</span>
              </div>
            </div>
          </motion.div>

          {/* Outputs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <SpotlightCard spotlightColor="rgba(239, 68, 68, 0.15)" className="p-8 flex-1">
              <div className="flex items-start justify-between mb-4">
                <p className="text-sm font-medium text-zinc-400 uppercase tracking-wider">Monthly Loss to Human Latency</p>
                <div className="p-2 rounded-lg bg-red-500/10 border border-red-500/20">
                  <TrendingDown className="w-5 h-5 text-red-400" />
                </div>
              </div>
              <p className="text-4xl md:text-5xl font-bold text-red-400 tabular-nums">
                {formatCurrency(monthlyLoss)}
              </p>
              <p className="text-sm text-zinc-500 mt-2">Lost every month to manual workflows</p>
            </SpotlightCard>

            <SpotlightCard spotlightColor="rgba(34, 197, 94, 0.15)" className="p-8 flex-1">
              <div className="flex items-start justify-between mb-4">
                <p className="text-sm font-medium text-zinc-400 uppercase tracking-wider">Projected Yearly Savings with AI</p>
                <div className="p-2 rounded-lg bg-green-500/10 border border-green-500/20">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                </div>
              </div>
              <p className="text-4xl md:text-5xl font-bold text-green-400 tabular-nums">
                {formatCurrency(yearlySavings)}
              </p>
              <p className="text-sm text-zinc-500 mt-2">Reclaimed annually at 85% automation efficiency</p>
            </SpotlightCard>

            <a href="https://calendly.com/aiautomatebiz" target="_blank" rel="noopener noreferrer" className="w-full">
              <Button variant="primary" className="w-full group">
                Book Your Automation Audit
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </motion.div>
        </div>
      </div>

      <style>{`
        .roi-slider {
          -webkit-appearance: none;
          appearance: none;
          height: 6px;
          border-radius: 3px;
          background: #27272a;
          outline: none;
          cursor: pointer;
        }
        .roi-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: white;
          border: 2px solid #3f3f46;
          cursor: pointer;
          transition: box-shadow 0.2s;
        }
        .roi-slider::-webkit-slider-thumb:hover {
          box-shadow: 0 0 0 6px rgba(255, 255, 255, 0.1);
        }
        .roi-slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: white;
          border: 2px solid #3f3f46;
          cursor: pointer;
        }
      `}</style>
    </section>
  );
};
