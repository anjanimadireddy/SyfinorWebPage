import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import syfinorLogo from '../assets/images/syfinor-logo-header.png';

// base = '' on the home page, '/' on other pages (privacy, terms) so links go back to the home sections.
export default function Header({ base = '' }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const navSectionIds = ['about', 'products', 'services', 'partners', 'support', 'leadership'];

      // If user is near the top / hero section (before Mission & Vision comes into view)
      const aboutEl = document.getElementById('about');
      if (aboutEl) {
        const aboutRect = aboutEl.getBoundingClientRect();
        if (aboutRect.top > window.innerHeight * 0.45) {
          setActiveSection('');
          return;
        }
      }

      // Determine which section is currently dominant in the viewport
      let currentSection = '';
      const viewportMid = window.innerHeight * 0.35;

      for (const id of navSectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= viewportMid && rect.bottom > viewportMid) {
            currentSection = id;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Products', id: 'products' },
    { name: 'Services', id: 'services' },
    { name: 'Partners', id: 'partners' },
    { name: 'Support', id: 'support' },
    { name: 'Leadership', id: 'leadership' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 bg-white border-b border-[#EAEFF2] transition-shadow duration-200 ${
        scrolled ? 'shadow-xs border-slate-200/80' : ''
      }`}
    >
      <div className="w-full px-8 lg:px-12 xl:px-16 h-[80px] flex items-center justify-between gap-6">

        {/* Logo — Far Left */}
        <div className="flex-shrink-0 flex items-center gap-3.5 xl:gap-4">
          <a href={base || '#'} className="flex items-center" aria-label="Syfinor home">
            <img
              src={syfinorLogo}
              alt="Syfinor"
              className="h-7 sm:h-8 xl:h-9 w-auto object-contain"
            />
          </a>
        </div>

        {/* Nav links + Contact — Far Right, grouped together */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-6 2xl:gap-10">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={`${base}#${link.id}`}
                className={`group relative text-[15.5px] lg:text-[16.5px] 2xl:text-[17.2px] font-medium whitespace-nowrap transition-colors duration-200 py-1 ${
                  isActive
                    ? 'text-[#00B89F] font-semibold'
                    : 'text-[#1A2742] hover:text-[#00B89F]'
                }`}
              >
                {link.name}
                {/* Orange hover underline */}
                <span
                  className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-[#FF6B35] transition-all duration-250 group-hover:w-full"
                  aria-hidden="true"
                />
              </a>
            );
          })}

          {/* Contact Button — Pill with Teal-Cyan Gradient & Arrow */}
          <a
            href={`${base}#contact`}
            className="inline-flex items-center justify-center gap-2.5 h-[44px] px-6 sm:px-7 rounded-full text-[15px] font-medium text-white whitespace-nowrap flex-shrink-0 bg-gradient-to-r from-[#00A396] via-[#00B89F] to-[#00C9BC] hover:from-[#00B3A4] hover:via-[#00C4AA] hover:to-[#00D9CC] shadow-[0_4px_16px_rgba(0,184,159,0.30)] hover:shadow-[0_6px_22px_rgba(0,184,159,0.46)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300 ease-out"
          >
            <span>Contact</span>
            <ArrowRight className="w-4 h-4 stroke-[2.2]" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-[#1A2742] hover:bg-slate-100 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-5 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`${base}#${link.id}`}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[15px] font-medium text-[#1A2742] hover:text-[#00B89F] border-b border-slate-100/80"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href={`${base}#contact`}
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2.5 w-full text-center px-6 py-3 rounded-full text-[15px] font-medium text-white bg-gradient-to-r from-[#00A396] to-[#00C9BC] shadow-[0_3px_12px_rgba(0,184,159,0.25)] transition-all duration-300"
            >
              <span>Contact</span>
              <ArrowRight className="w-4 h-4 stroke-[2.2]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
