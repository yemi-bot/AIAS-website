import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled ? 'bg-black/80 backdrop-blur-md border-zinc-800' : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 group-hover:border-zinc-700 transition-colors">
            <Cpu className="w-5 h-5 text-white" />
          </div>
          <span className="font-semibold text-white tracking-tight">AI Automate Solutions</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center">
          <a href="https://calendly.com/aiautomatebiz" target="_blank" rel="noopener noreferrer" className="text-sm text-black px-4 py-2 rounded-md bg-white hover:bg-zinc-200 transition-all font-medium">
            Book Your Automation Audit
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-zinc-400 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-black border-b border-zinc-800 p-6 flex flex-col gap-4 animate-in slide-in-from-top-4">
          <a href="https://calendly.com/aiautomatebiz" target="_blank" rel="noopener noreferrer" className="w-full text-center text-black py-3 rounded bg-white font-medium block" onClick={() => setMobileMenuOpen(false)}>Book Your Automation Audit</a>
        </div>
      )}
    </nav>
  );
};