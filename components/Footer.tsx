import React from 'react';
import { Cpu } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-zinc-800 pt-16 pb-8 px-6 z-10 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
             <div className="p-1 rounded bg-zinc-900 border border-zinc-800">
                <Cpu className="w-4 h-4 text-white" />
             </div>
             <span className="font-semibold text-white">AI Automate Solutions</span>
          </div>
          <p className="text-zinc-500 text-sm mb-4">
            Building the Shadow Backend for your business.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-medium mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-zinc-500">
            <li><a href="#" className="hover:text-white transition-colors">Audits</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Automations</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Dashboards</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Training</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-medium mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-zinc-500">
            <li><a href="#" className="hover:text-white transition-colors">About</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-medium mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-zinc-500">
            <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-zinc-900 text-center md:text-left text-xs text-zinc-600">
        © {new Date().getFullYear()} AI Automate Solutions. All rights reserved.
      </div>
    </footer>
  );
};