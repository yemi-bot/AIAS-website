import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, TrendingUp, ChevronRight, DollarSign } from 'lucide-react';
import { SpotlightCard } from './ui/SpotlightCard';
import { Button } from './ui/Button';
import { formatCurrency } from '../utils/formatCurrency';

interface ROICalculatorProps {
  employees: number;
  setEmployees: React.Dispatch<React.SetStateAction<number>>;
  hourlyRate: number;
  setHourlyRate: React.Dispatch<React.SetStateAction<number>>;
  manualHours: number;
  setManualHours: React.Dispatch<React.SetStateAction<number>>;
  monthlyLoss: number;
  yearlySavings: number;
  suggestedPrice: number;
  paybackMonths: number;
  maintenanceFee: number;
}

export const ROICalculator: React.FC<ROICalculatorProps> = ({
  employees, setEmployees,
  hourlyRate, setHourlyRate,
  manualHours, setManualHours,
  monthlyLoss, yearlySavings,
  suggestedPrice, paybackMonths, maintenanceFee,
}) => {
  const annualCost = monthlyLoss * 12;
  const annualMaintenance = maintenanceFee * 12;
  const firstYearTotal = suggestedPrice + annualMaintenance;
  const firstYearSavings = annualCost - firstYearTotal;
  const savingsPercent = annualCost > 0 ? ((firstYearSavings / annualCost) * 100).toFixed(0) : '0';

  return (
    <section id="roi-calculator" className="py-24 relative z-10 border-t border-dashed border-zinc-800 bg-black/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
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

        {/* TOP ROW: Sliders (left) + Loss/Savings cards (right) */}
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

          {/* Outputs: Loss + Savings */}
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
          </motion.div>
        </div>

        {/* BOTTOM SECTION: Price Card + Gauge + Comparison + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 space-y-8"
        >
          {/* Price Card + Payback Gauge (2-col sub-grid) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Price Transparency Card */}
            <SpotlightCard spotlightColor="rgba(59, 130, 246, 0.15)" className="p-8">
              <div className="flex items-start justify-between mb-4">
                <p className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
                  Your Recommended Implementation Investment
                </p>
                <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <DollarSign className="w-5 h-5 text-blue-400" />
                </div>
              </div>
              <div className="flex items-center gap-4 flex-wrap">
                <p className="text-4xl md:text-5xl font-bold text-white tabular-nums">
                  {formatCurrency(suggestedPrice)}
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-900/20 border border-green-500/20 text-green-400 text-xs font-mono">
                  {paybackMonths <= 3
                    ? '3-Month Payback Guaranteed'
                    : '10:1 Value-to-Cost Ratio'}
                </div>
              </div>
              <p className="text-sm text-zinc-500 mt-3">
                One-time build fee + {formatCurrency(maintenanceFee)}/mo maintenance
              </p>
            </SpotlightCard>

            {/* Payback Gauge */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8 flex flex-col justify-center">
              <div className="flex items-center justify-between mb-5">
                <p className="text-sm font-medium text-zinc-300">Time to Full ROI</p>
                <p className="text-sm font-mono text-green-400 tabular-nums">
                  {paybackMonths > 12
                    ? '12+ months'
                    : `${paybackMonths.toFixed(1)} months`}
                </p>
              </div>

              {/* Bar track */}
              <div className="relative h-4 rounded-full bg-zinc-800 overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-green-500 to-green-400"
                  animate={{
                    width: `${Math.min((paybackMonths / 12) * 100, 100)}%`,
                  }}
                  transition={{ type: 'spring', stiffness: 80, damping: 20 }}
                />
              </div>

              {/* Month markers */}
              <div className="relative h-5 mt-2">
                <span className="absolute left-0 text-xs text-zinc-600">0</span>
                <span className="absolute text-xs text-zinc-600" style={{ left: '8.3%' }}>1</span>
                <span className="absolute text-xs text-zinc-600" style={{ left: '25%' }}>3</span>
                <span className="absolute text-xs text-zinc-600" style={{ left: '50%' }}>6</span>
                <span className="absolute right-0 text-xs text-zinc-600">12</span>
              </div>

              <p className="text-xs text-zinc-500 mt-2">
                Months until your investment is fully recovered
              </p>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 overflow-hidden">
            {/* Row 1: Current Annual Cost */}
            <div className="flex items-center justify-between p-6 border-b border-zinc-800">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-red-500/10 border border-red-500/20">
                  <TrendingDown className="w-4 h-4 text-red-400" />
                </div>
                <span className="text-zinc-300 font-medium">Current Annual Cost of Manual Labor</span>
              </div>
              <span className="text-xl font-bold text-red-400 tabular-nums">
                {formatCurrency(annualCost)}
              </span>
            </div>

            {/* Row 2: AI Implementation */}
            <div className="flex items-center justify-between p-6 border-b border-zinc-800">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-green-500/10 border border-green-500/20">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <span className="text-zinc-300 font-medium">AI Implementation (Year 1)</span>
                  <p className="text-xs text-zinc-500 mt-0.5">
                    {formatCurrency(suggestedPrice)} one-time + {formatCurrency(annualMaintenance)}/yr maintenance
                  </p>
                </div>
              </div>
              <span className="text-xl font-bold text-green-400 tabular-nums">
                {formatCurrency(firstYearTotal)}
              </span>
            </div>

            {/* Row 3: Net Savings */}
            <div className="flex items-center justify-between p-6 bg-green-500/5">
              <span className="text-white font-semibold">First-Year Net Savings</span>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-green-400 tabular-nums">
                  {formatCurrency(firstYearSavings)}
                </span>
                {Number(savingsPercent) > 0 && (
                  <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-900/20 border border-green-500/20 text-green-400 text-xs font-mono">
                    <TrendingUp className="w-3 h-3" />
                    {savingsPercent}%
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* CTA */}
          <a href="https://calendly.com/aiautomatebiz" target="_blank" rel="noopener noreferrer" className="w-full block">
            <Button variant="primary" className="w-full group text-base py-4">
              Secure This ROI — Book Audit
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </motion.div>
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
