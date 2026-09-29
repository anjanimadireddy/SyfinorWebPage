import React from 'react';

export default function SyfinorLogo({ light = false, className = '' }) {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Syfinor geometric emblem */}
      <div className="relative w-7 h-7 flex items-center justify-center flex-shrink-0">
        <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
          {/* Outer curved geometric nodes in brand teal */}
          <path
            d="M8 8C8 5.79086 9.79086 4 12 4H18C21.3137 4 24 6.68629 24 10C24 13.3137 21.3137 16 18 16H14C10.6863 16 8 18.6863 8 22C8 25.3137 10.6863 28 14 28H20C22.2091 28 24 26.2091 24 24"
            stroke="#00B89F"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          {/* Center core pulse dots */}
          <circle cx="16" cy="16" r="2.2" fill="#00B89F" />
          <circle cx="8" cy="8" r="2" fill="#00B89F" />
          <circle cx="24" cy="24" r="2" fill="#00B89F" />
        </svg>
      </div>

      <span
        className={`text-[21px] font-extrabold tracking-tight font-sans transition-colors ${
          light ? 'text-white' : 'text-[#1A2742]'
        }`}
      >
        Syfinor
      </span>
    </div>
  );
}
