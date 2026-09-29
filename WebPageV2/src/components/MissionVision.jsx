import React from 'react';
import telescopeIcon from '../assets/images/telescope.png';

export default function MissionVision() {
  return (
    <section id="about" className="relative bg-white pt-10 sm:pt-12 lg:pt-14 pb-14 sm:pb-16 lg:pb-20 overflow-hidden">
      {/* Subtle decorative wireframe globe on the right */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[420px] h-[420px] pointer-events-none opacity-25 select-none hidden lg:block translate-x-16">
        <svg viewBox="0 0 400 400" className="w-full h-full" fill="none">
          <circle cx="200" cy="200" r="160" stroke="#00B89F" strokeWidth="1.2" />
          <ellipse cx="200" cy="200" rx="160" ry="60" stroke="#00B89F" strokeWidth="1" strokeDasharray="3 3" />
          <ellipse cx="200" cy="200" rx="160" ry="110" stroke="#00B89F" strokeWidth="1" />
          <ellipse cx="200" cy="200" rx="60" ry="160" stroke="#00B89F" strokeWidth="1" strokeDasharray="3 3" />
          <ellipse cx="200" cy="200" rx="110" ry="160" stroke="#00B89F" strokeWidth="1" />
          <line x1="40" y1="200" x2="360" y2="200" stroke="#00B89F" strokeWidth="1.2" />
          <line x1="200" y1="40" x2="200" y2="360" stroke="#00B89F" strokeWidth="1.2" />
          <circle cx="200" cy="200" r="4" fill="#00B89F" />
          <circle cx="260" cy="150" r="3" fill="#00B89F" />
          <circle cx="150" cy="280" r="3" fill="#00B89F" />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        {/* Section Heading */}
        <div className="max-w-3xl mb-8 sm:mb-10">
          <div className="text-[12px] font-bold tracking-[0.2em] text-[#00B89F] uppercase mb-2">
            WHO WE ARE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0D3240] tracking-tight mb-3">
            Our Mission &amp; Vision
          </h2>
          <p className="text-[15px] sm:text-[16.5px] text-[#41687A] leading-relaxed">
            Driven by purpose, guided by innovation — our mission and vision define how we serve clients and shape the future of finance.
          </p>
        </div>

        {/* Two side-by-side cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 xl:gap-10">

          {/* Card 1: Our Mission */}
          <div className="bg-[#EAF6FF] border border-[#C2E3F5] rounded-2xl p-7 sm:p-9 lg:p-10 xl:p-11 relative shadow-xs hover:border-[#00D9D0] hover:shadow-[0_0_18px_rgba(0,217,208,0.25)] hover:-translate-y-[2px] transition-all duration-300 ease-in-out">

            {/* Mission icon: flat target with dart arrow */}
            <div className="w-12 h-12 rounded-xl bg-white border border-[#BCE1F5] flex items-center justify-center shadow-2xs mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-7 h-7" aria-hidden="true">
                {/* Outer ring — red stroke, no fill */}
                <circle cx="15" cy="17" r="12" fill="none" stroke="#E53E3E" strokeWidth="2.2" />
                {/* Middle white ring (gap) */}
                <circle cx="15" cy="17" r="8" fill="white" />
                {/* Middle red ring */}
                <circle cx="15" cy="17" r="8" fill="none" stroke="#E53E3E" strokeWidth="2.2" />
                {/* Inner white fill */}
                <circle cx="15" cy="17" r="4.2" fill="white" />
                {/* Inner red filled bull's-eye */}
                <circle cx="15" cy="17" r="4.2" fill="#E53E3E" />
                {/* White center dot */}
                <circle cx="15" cy="17" r="1.6" fill="white" />
                {/* Dart shaft — comes from upper-right toward center */}
                <line x1="26" y1="5" x2="16.2" y2="15.8" stroke="#2D3748" strokeWidth="1.8" strokeLinecap="round" />
                {/* Arrowhead tip at target */}
                <polygon points="15.4,16.6 17.2,14.4 18.4,16.2" fill="#2D3748" />
                {/* Dart tail fletching */}
                <line x1="26" y1="5" x2="28.5" y2="3.5" stroke="#E53E3E" strokeWidth="1.6" strokeLinecap="round" />
                <line x1="26" y1="5" x2="27.5" y2="7.5" stroke="#E53E3E" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </div>

            <h3 className="text-2xl sm:text-[26px] font-bold text-[#0D3240] mb-3.5 tracking-tight">
              Our Mission
            </h3>
            <p className="text-[15px] sm:text-[15.5px] leading-relaxed text-[#2C5263] font-normal">
              At Syfinor, our mission is to simplify banking operations through intelligent technology. We build purpose-driven products and deliver round-the-clock services that eliminate manual complexity, automate critical workflows, and empower financial institutions to focus on what matters most — serving their customers with speed, accuracy, and confidence.
            </p>
          </div>

          {/* Card 2: Our Vision */}
          <div className="bg-[#EAF6FF] border border-[#C2E3F5] rounded-2xl p-7 sm:p-9 lg:p-10 xl:p-11 relative shadow-xs hover:border-[#00D9D0] hover:shadow-[0_0_18px_rgba(0,217,208,0.25)] hover:-translate-y-[2px] transition-all duration-300 ease-in-out">

            {/* Vision icon: telescope.png */}
            <div className="w-12 h-12 rounded-xl bg-white border border-[#BCE1F5] flex items-center justify-center shadow-2xs mb-6 overflow-hidden">
              <img src={telescopeIcon} alt="Telescope" className="w-full h-full object-contain scale-[2.2]" />
            </div>

            <h3 className="text-2xl sm:text-[26px] font-bold text-[#0D3240] mb-3.5 tracking-tight">
              Our Vision
            </h3>
            <p className="text-[15px] sm:text-[15.5px] leading-relaxed text-[#2C5263] font-normal">
              To be the most trusted technology partner for banks and financial institutions worldwide — delivering innovative, scalable solutions that transform how banking works; making every process simpler, every operation smarter, and every institution more resilient for the future.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
