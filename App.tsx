import React from 'react';
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

function App() {
  return (
    <div className="min-h-screen bg-black text-white antialiased selection:bg-blue-500/30">
      <BackgroundGrid />
      <Navbar />
      
      <main className="flex flex-col relative">
        <Hero />
        <SocialProof />
        <ROICalculator />
        <Features />
        <CaseStudy />
        <Process />
        <ValueStack />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;