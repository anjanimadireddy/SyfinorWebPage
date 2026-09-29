import React from 'react';
import OracleBadge from './OracleBadge.jsx';
import { Globe, Linkedin } from 'lucide-react';
import syfinorLogoWhite from '../assets/images/syfinor-logo-white.png';

export default function Footer() {
  return (
    <footer className="bg-[#092530] text-white pt-12 pb-8 border-t border-[#123E4F]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Top Tier: Logo, Mission, Partner Badge, Social Icons */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-10 border-b border-[#144355]">
          {/* Logo & Brief Tagline */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <img
              src={syfinorLogoWhite}
              alt="Syfinor"
              className="h-10 sm:h-11 w-auto object-contain flex-shrink-0"
            />
            <div className="hidden sm:block w-[1px] h-6 bg-[#1D4E62]" />
            <p className="text-[12.5px] text-[#86AEBF] max-w-sm">
              Intelligent financial solutions for forward-thinking organizations. Empowering decisions, accelerating growth.
            </p>
          </div>

          {/* Center Oracle Badge */}
          <div className="flex items-center">
            <OracleBadge />
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2.5">
            <a
              href="https://www.linkedin.com/company/syfinor-technologies/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-[#0D3240] border border-[#1C485A] flex items-center justify-center text-[#86AEBF] hover:text-[#00B89F] hover:border-[#00B89F] transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-lg bg-[#0D3240] border border-[#1C485A] flex items-center justify-center text-[#86AEBF] hover:text-[#00B89F] hover:border-[#00B89F] transition-all"
              aria-label="Website"
            >
              <Globe className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Middle Tier: Horizontal Categorized Links (as seen in screenshot) */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[13px] border-b border-[#144355]">
          {/* COMPANY */}
          <div className="flex items-center gap-6">
            <span className="text-[11px] font-bold text-[#00B89F] uppercase tracking-wider">
              COMPANY
            </span>
            <div className="flex items-center gap-4 text-[#8FB5C5]">
              <a href="#about" className="hover:text-white transition-colors">
                Mission & Vision
              </a>
              <a href="#global-reach" className="hover:text-white transition-colors">
                Global Reach
              </a>
              <a href="#leadership" className="hover:text-white transition-colors">
                Leadership
              </a>
            </div>
          </div>

          {/* PLATFORM */}
          <div className="flex items-center gap-6">
            <span className="text-[11px] font-bold text-[#00B89F] uppercase tracking-wider">
              PLATFORM
            </span>
            <div className="flex items-center gap-4 text-[#8FB5C5]">
              <a href="#products" className="hover:text-white transition-colors">
                Products
              </a>
              <a href="#services" className="hover:text-white transition-colors">
                Services
              </a>
              <a href="#support" className="hover:text-white transition-colors">
                Support
              </a>
            </div>
          </div>

          {/* LEGAL */}
          <div className="flex items-center gap-6">
            <span className="text-[11px] font-bold text-[#00B89F] uppercase tracking-wider">
              LEGAL
            </span>
            <div className="flex items-center gap-4 text-[#8FB5C5]">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookie Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Compliance
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Copyright & Tagline */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[12px] text-[#7198A9]">
          <p>© {new Date().getFullYear()} Syfinor Technologies Private Limited. All rights reserved.</p>
          <p className="mt-2 sm:mt-0 font-medium text-[#00B89F]/80">
            | Crafted with precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
