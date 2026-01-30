import React, { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { BackgroundGrid } from './components/BackgroundGrid';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { SocialProof } from './components/SocialProof';
import { CaseStudy } from './components/CaseStudy';
import { ROICalculator } from './components/ROICalculator';
import { Process } from './components/Process';
import { ValueStack } from './components/ValueStack';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

const MIN_BUILD_FEE = 2500;

function App() {
  const [employees, setEmployees] = useState(5);
  const [hourlyRate, setHourlyRate] = useState(35);
  const [manualHours, setManualHours] = useState(20);

  const monthlyLoss = useMemo(
    () => employees * hourlyRate * manualHours * 4.33,
    [employees, hourlyRate, manualHours]
  );

  const yearlySavings = useMemo(() => monthlyLoss * 12 * 0.85, [monthlyLoss]);

  const suggestedPrice = useMemo(() => {
    const tenXPrice = yearlySavings / 10;
    const paybackCap = monthlyLoss * 3;
    return Math.max(MIN_BUILD_FEE, Math.min(tenXPrice, paybackCap));
  }, [yearlySavings, monthlyLoss]);

  const paybackMonths = useMemo(
    () => (monthlyLoss > 0 ? suggestedPrice / monthlyLoss : 0),
    [suggestedPrice, monthlyLoss]
  );

  const maintenanceFee = useMemo(() => suggestedPrice * 0.10, [suggestedPrice]);

  return (
    <div className="min-h-screen bg-black text-white antialiased selection:bg-blue-500/30">
      <BackgroundGrid />
      <Navbar />

      <main className="flex flex-col relative">
        <Hero />
        <SocialProof />
        <ROICalculator
          employees={employees}
          setEmployees={setEmployees}
          hourlyRate={hourlyRate}
          setHourlyRate={setHourlyRate}
          manualHours={manualHours}
          setManualHours={setManualHours}
          monthlyLoss={monthlyLoss}
          yearlySavings={yearlySavings}
          suggestedPrice={suggestedPrice}
          paybackMonths={paybackMonths}
          maintenanceFee={maintenanceFee}
        />
        <Features />
        <CaseStudy />
        <Process />
        <ValueStack suggestedPrice={suggestedPrice} />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;
