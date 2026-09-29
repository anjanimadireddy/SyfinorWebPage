import React, { useState, useEffect } from 'react';
import { Calendar, Globe, Headphones } from 'lucide-react';
import CapabilityMarquee from './CapabilityMarquee.jsx';
import bgOrbital from '../assets/images/fintech_orbital_bg_1789974515600.jpg';
import bgWaves from '../assets/images/fintech_light_waves_1789974484503.jpg';
import bgNetwork from '../assets/images/fintech_network_bg_1789974532922.jpg';

export default function Hero() {
  const backgroundImages = [
    { id: 'orbital', src: bgOrbital, alt: 'Orbital Tech Background' },
    { id: 'waves', src: bgWaves, alt: 'Flowing Wave Streams Background' },
    { id: 'network', src: bgNetwork, alt: 'Financial Network Mesh Background' },
  ];
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [backgroundImages.length]);

  return (
    <section
      id="hero"
      className="relative bg-[#0F1A2E] text-white overflow-hidden border-b border-[#243552] box-border w-full flex flex-col justify-between h-[calc(100vh-80px)] min-h-[calc(100vh-80px)]"
      style={{ boxSizing: 'border-box' }}
    >
      {/* Background Slideshow */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        {backgroundImages.map((bg, idx) => (
          <div
            key={bg.id}
            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              idx === currentBgIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${bg.src})`, backgroundPosition: 'center center' }}
            aria-hidden="true"
          />
        ))}
        <div className="absolute inset-0 bg-[#0F1A2E]/80 backdrop-blur-[0.5px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1A2E] via-transparent to-[#0F1A2E]/50" />
      </div>

      {/* Ambient glowing accents */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#00B89F]/10 rounded-full blur-3xl pointer-events-none z-[1]" />
      <div className="absolute top-1/2 -right-24 w-96 h-96 bg-[#00B89F]/5 rounded-full blur-3xl pointer-events-none z-[1]" />

      {/* Main content — centered max-width container */}
      <div className="w-full max-w-[1440px] mx-auto px-8 lg:px-14 xl:px-16 relative z-10 flex-1 flex items-center pt-2 sm:pt-4 md:pt-5 pb-6 sm:pb-8 md:pb-10 box-border">
        <div className="w-full grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(360px,480px)] gap-10 lg:gap-16 xl:gap-20 items-center">

          {/* Left Column */}
          <div className="space-y-3 sm:space-y-4">

            {/* Eyebrow label + underline */}
            <div className="space-y-1">
              <div className="text-[12.5px] sm:text-[13px] font-bold tracking-[0.2em] text-[#00B89F] uppercase">
                INTELLIGENT FINANCIAL SOLUTIONS
              </div>
              <div className="flex items-center gap-0" aria-hidden="true">
                <div
                  className="h-[2px] rounded-full"
                  style={{
                    width: 'clamp(140px, 18vw, 220px)',
                    background: 'linear-gradient(90deg, #00B89F 0%, #00D9D0 85%, transparent 100%)',
                    boxShadow: '0 0 6px rgba(0,217,208,0.55)',
                  }}
                />
                <div
                  className="rounded-full flex-shrink-0"
                  style={{
                    width: '7px',
                    height: '7px',
                    marginLeft: '2px',
                    background: '#00D9D0',
                    boxShadow: '0 0 8px rgba(0,217,208,0.9), 0 0 3px rgba(0,217,208,1)',
                  }}
                />
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-[40px] sm:text-[53px] lg:text-[60px] xl:text-[64px] font-extrabold leading-[1.08] tracking-tight">
              <span className="text-white block">Powering Smarter</span>
              <span className="block">
                <span className="text-[#00D9D0]">Financial </span>
                <span className="text-[#FF6B35]">Decisions</span>
              </span>
            </h1>

            {/* Description */}
            <p className="text-[15.5px] sm:text-[16.5px] lg:text-[17.5px] text-[#AAB6C8] leading-relaxed max-w-2xl font-normal">
              Syfinor delivers cutting-edge banking technology and consulting services — empowering institutions to navigate complexity with confidence, speed, and precision.
            </p>

            {/* Oracle Partner */}
            <div className="pt-2 sm:pt-3">
              <div className="flex flex-wrap items-center gap-3.5 sm:gap-4.5">
                <div className="flex items-center gap-3 sm:gap-3.5 flex-shrink-0">
                  <img
                    src="/oracle-logo.svg"
                    alt="Oracle"
                    className="h-4.5 sm:h-5 w-auto object-contain flex-shrink-0"
                  />
                  <div className="w-[1px] h-4.5 sm:h-5 bg-[#3B667A] flex-shrink-0" />
                  <span className="text-[14.5px] sm:text-[15.5px] font-bold text-white tracking-normal flex-shrink-0">
                    Partner
                  </span>
                </div>
                <div className="text-[12px] sm:text-[13px] text-[#AAB6C8] leading-[1.35] font-normal">
                  <div>Delivering technology solutions</div>
                  <div>powered by Oracle FLEXCUBE</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column — Statistics Card */}
          <div className="flex justify-center md:justify-end">
            <div className="relative flex items-center justify-center w-full max-w-[340px] sm:max-w-[350px]">

              {/* Orbit decoration */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[490px] h-[490px] sm:w-[550px] sm:h-[550px] pointer-events-none select-none z-0 overflow-visible flex items-center justify-center"
                aria-hidden="true"
              >
                <div className="absolute w-64 h-64 rounded-full bg-[#00D9D0]/8 blur-3xl pointer-events-none" />
                <div className="absolute w-40 h-40 rounded-full bg-[#FF6B35]/5 blur-2xl pointer-events-none" />
                <svg viewBox="0 0 600 600" className="w-full h-full overflow-visible" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <filter id="node-cyan-glow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                    </filter>
                    <filter id="node-orange-glow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="2.5" result="blur" />
                      <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                    </filter>
                  </defs>
                  <g className="animate-orbit-slow">
                    <circle cx="300" cy="300" r="255" fill="none" stroke="#00D9D0" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="6 8" />
                    <circle cx="300" cy="300" r="255" fill="none" stroke="#00D9D0" strokeWidth="1.8" strokeOpacity="0.45" strokeDasharray="75 450" />
                    <circle cx="300" cy="300" r="255" fill="none" stroke="#FF6B35" strokeWidth="2" strokeOpacity="0.65" strokeDasharray="32 550" strokeDashoffset="180" />
                    <circle cx="555" cy="300" r="7" fill="#00D9D0" fillOpacity="0.2" />
                    <circle cx="555" cy="300" r="3.5" fill="#00D9D0" filter="url(#node-cyan-glow)" />
                    <circle cx="120" cy="120" r="2.5" fill="#00D9D0" fillOpacity="0.75" />
                    <circle cx="300" cy="45" r="6" fill="#FF6B35" fillOpacity="0.25" />
                    <circle cx="300" cy="45" r="3" fill="#FF6B35" filter="url(#node-orange-glow)" />
                    <circle cx="480" cy="480" r="2.5" fill="#00D9D0" fillOpacity="0.6" />
                  </g>
                  <g className="animate-orbit-reverse">
                    <ellipse cx="300" cy="300" rx="215" ry="190" fill="none" stroke="#00D9D0" strokeWidth="1.2" strokeOpacity="0.22" strokeDasharray="140 24 36 24" />
                    <ellipse cx="300" cy="300" rx="215" ry="190" fill="none" stroke="#FF6B35" strokeWidth="1.6" strokeOpacity="0.55" strokeDasharray="28 480" strokeDashoffset="80" />
                    <circle cx="515" cy="300" r="3.5" fill="#00D9D0" filter="url(#node-cyan-glow)" />
                    <circle cx="515" cy="300" r="6.5" fill="#00D9D0" fillOpacity="0.2" />
                    <circle cx="85" cy="300" r="2.5" fill="#00D9D0" fillOpacity="0.65" />
                    <circle cx="300" cy="110" r="3" fill="#FF6B35" filter="url(#node-orange-glow)" />
                    <circle cx="300" cy="110" r="6" fill="#FF6B35" fillOpacity="0.2" />
                    <circle cx="148" cy="434" r="2.5" fill="#00D9D0" fillOpacity="0.8" />
                  </g>
                  <g className="animate-orbit-medium">
                    <circle cx="300" cy="300" r="165" fill="none" stroke="#00D9D0" strokeWidth="0.9" strokeOpacity="0.18" strokeDasharray="5 7" />
                    <circle cx="300" cy="300" r="165" fill="none" stroke="#00D9D0" strokeWidth="1.6" strokeOpacity="0.5" strokeDasharray="50 320" strokeDashoffset="40" />
                    <circle cx="300" cy="135" r="3" fill="#00D9D0" filter="url(#node-cyan-glow)" />
                    <circle cx="465" cy="300" r="2.5" fill="#FF6B35" filter="url(#node-orange-glow)" />
                    <circle cx="183" cy="417" r="2" fill="#00D9D0" fillOpacity="0.6" />
                  </g>
                  <g stroke="#00D9D0" strokeWidth="0.75" strokeOpacity="0.16" strokeDasharray="3 4">
                    <line x1="300" y1="45" x2="300" y2="110" />
                    <line x1="465" y1="300" x2="515" y2="300" />
                    <line x1="148" y1="434" x2="183" y2="417" />
                  </g>
                </svg>
              </div>

              {/* Stats Card */}
              <div className="relative z-10 bg-[#EAF6FF] rounded-2xl p-5 sm:p-6 border border-[#C5E5F6] shadow-[0_12px_36px_rgba(0,0,0,0.28)] text-[#1A2742] w-full">
                <div className="space-y-4.5 sm:space-y-5">

                  {/* Stat 1 */}
                  <div className="flex items-start gap-3.5 sm:gap-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white border border-[#BCE1F5] flex items-center justify-center flex-shrink-0 text-[#00B89F] shadow-2xs">
                      <Calendar className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <div className="text-3xl sm:text-4xl font-extrabold text-[#1A2742] tracking-tight leading-none">15+</div>
                      <div className="text-[13px] sm:text-[14px] font-medium text-[#4A5568] mt-1.5 leading-snug">Years of Banking Tech Experience</div>
                    </div>
                  </div>

                  <div className="border-t border-[#D5ECF8]" />

                  {/* Stat 2 */}
                  <div className="flex items-start gap-3.5 sm:gap-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white border border-[#BCE1F5] flex items-center justify-center flex-shrink-0 text-[#00B89F] shadow-2xs">
                      <Globe className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <div className="text-3xl sm:text-4xl font-extrabold text-[#1A2742] tracking-tight leading-none">3+</div>
                      <div className="text-[13px] sm:text-[14px] font-medium text-[#4A5568] mt-1.5 leading-snug">Continents Served</div>
                    </div>
                  </div>

                  <div className="border-t border-[#D5ECF8]" />

                  {/* Stat 3 */}
                  <div className="flex items-start gap-3.5 sm:gap-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white border border-[#BCE1F5] flex items-center justify-center flex-shrink-0 text-[#FF6B35] shadow-2xs">
                      <Headphones className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <div className="text-3xl sm:text-4xl font-extrabold text-[#1A2742] tracking-tight leading-none">24/7</div>
                      <div className="text-[13px] sm:text-[14px] font-medium text-[#4A5568] mt-1.5 leading-snug">Operational Support Coverage</div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Capability Marquee — full hero width, centered with own max-width */}
      <div className="w-full flex-shrink-0 mb-6">
        <div style={{ width: '94%', maxWidth: '1600px', margin: '0 auto' }}>
          <CapabilityMarquee />
        </div>
      </div>

    </section>
  );
}
