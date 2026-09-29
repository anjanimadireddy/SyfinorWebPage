import React from 'react';
import oracleLogo from '../assets/images/oracle-logo.svg';

export default function OracleBadge({ className = '', variant = 'standard' }) {
  return (
    <div
      className={`inline-flex flex-wrap sm:flex-nowrap items-center gap-2.5 sm:gap-3 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-lg bg-[#0F1A2E]/60 border border-[#00D9D0]/20 hover:border-[#00D9D0]/35 transition-colors shadow-[0_0_12px_rgba(0,217,208,0.06)] select-none ${className}`}
      aria-label="Oracle Partner - Delivering technology solutions powered by Oracle FLEXCUBE"
    >
      {/* Official Oracle SVG Asset directly on dark background */}
      <img
        src={oracleLogo}
        alt="Oracle"
        className="h-3.5 sm:h-4 w-auto object-contain shrink-0"
        referrerPolicy="no-referrer"
      />

      {/* Subtle Vertical Divider */}
      <div className="hidden sm:block w-[1px] h-5 sm:h-6 bg-[#00D9D0]/25 shrink-0" />

      {/* Horizontal Partnership Lockup: Oracle Partner and Description */}
      <div className="flex flex-col xl:flex-row xl:items-center gap-0.5 xl:gap-2 text-left justify-center min-w-0">
        <span className="text-[11.5px] sm:text-[12px] font-semibold text-white tracking-wide whitespace-nowrap leading-tight">
          Oracle Partner
        </span>
        <span className="hidden xl:inline text-[#00D9D0]/35 select-none">•</span>
        <span className="text-[9.5px] sm:text-[10px] text-[#8A9AB2] leading-tight whitespace-normal">
          Delivering technology solutions powered by Oracle FLEXCUBE
        </span>
      </div>
    </div>
  );
}

