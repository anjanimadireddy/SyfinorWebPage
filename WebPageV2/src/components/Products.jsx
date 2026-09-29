import React from 'react';
import {
  ShieldCheck,
  Cpu,
  Landmark,
  Shield,
  TrendingUp,
  Smartphone,
  Briefcase,
  Building2,
  LayoutGrid,
  User,
  Moon,
  BarChart3,
  CreditCard,
  Layers,
  ArrowRight
} from 'lucide-react';

export default function Products() {
  const industries = [
    { name: 'Banking & Finance', icon: Landmark },
    { name: 'Insurance', icon: Shield },
    { name: 'Capital Markets', icon: TrendingUp },
    { name: 'Fintech', icon: Smartphone },
    { name: 'Asset Management', icon: Briefcase },
    { name: 'Government & Public Sector', icon: Building2 },
  ];

  const categories = [
    { name: 'Retail Banking', icon: User },
    { name: 'Corporate Banking', icon: Briefcase },
    { name: 'Islamic Banking', icon: Moon },
    { name: 'Digital Banking', icon: Smartphone },
    { name: 'Risk Management', icon: ShieldCheck },
    { name: 'Treasury & Markets', icon: BarChart3 },
  ];

  return (
    <section
      id="products"
      className="bg-[#0E2737] text-white py-16 sm:py-20 lg:py-24 border-b border-[#164356] relative overflow-hidden group/products"
    >
      {/* 1. Subtle Outer Edge Decorations */}
      {/* Top-Left corner flowing cyan wave lines */}
      <svg
        className="absolute top-0 left-0 w-[320px] sm:w-[440px] h-[220px] sm:h-[280px] pointer-events-none opacity-25 z-0"
        viewBox="0 0 450 280"
        fill="none"
      >
        <path
          d="M0,80 C120,40 220,90 320,160 C380,200 420,240 450,280"
          stroke="#00D9D0"
          strokeWidth="1.2"
        />
        <path
          d="M0,120 C100,70 190,110 290,180 C350,220 400,250 430,280"
          stroke="#00D9D0"
          strokeWidth="0.8"
        />
        <circle cx="180" cy="95" r="2" fill="#00D9D0" />
      </svg>

      {/* Bottom-Left corner cyan wave curves */}
      <svg
        className="absolute bottom-0 left-0 w-[280px] sm:w-[380px] h-[180px] sm:h-[240px] pointer-events-none opacity-20 z-0"
        viewBox="0 0 380 240"
        fill="none"
      >
        <path
          d="M0,180 C80,140 160,110 240,70 C300,40 350,15 380,0"
          stroke="#00D9D0"
          strokeWidth="1"
        />
        <path
          d="M0,210 C70,170 150,135 225,95 C285,65 340,35 380,15"
          stroke="#00D9D0"
          strokeWidth="0.7"
        />
        <circle cx="160" cy="125" r="2" fill="#00D9D0" />
      </svg>

      {/* Bottom-Right corner flowing cyan wave lines */}
      <svg
        className="absolute bottom-0 right-0 w-[340px] sm:w-[480px] h-[220px] sm:h-[300px] pointer-events-none opacity-25 z-0"
        viewBox="0 0 480 300"
        fill="none"
      >
        <path
          d="M100,300 C200,260 300,210 380,140 C430,95 460,50 480,0"
          stroke="#00D9D0"
          strokeWidth="1.2"
        />
        <path
          d="M140,300 C230,265 320,225 395,160 C440,120 465,70 480,20"
          stroke="#00D9D0"
          strokeWidth="0.8"
        />
        <circle cx="340" cy="190" r="2" fill="#00D9D0" />
        <circle cx="430" cy="100" r="2" fill="#FF6B35" />
      </svg>

      {/* Main Container */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        {/* ========================================================================= */}
        {/* 2. SECTION HEADER & TOP-RIGHT DECORATIVE FINTECH VISUAL */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10 sm:mb-12 lg:mb-14">
          {/* Top-Left Content */}
          <div className="lg:col-span-7 xl:col-span-8 max-w-2xl">
            {/* Small Eyebrow with horizontal line */}
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[12px] font-bold tracking-[0.25em] text-[#00D9D0] uppercase select-none">
                WHAT WE BUILD
              </span>
              <div className="w-10 sm:w-14 h-[1.5px] bg-[#00D9D0]" />
            </div>

            {/* Large Two-Tone Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight leading-[1.15] mb-3.5">
              <span className="text-white block">Products built for</span>
              <span className="text-[#00D9D0] block">modern <span className="text-[#FF6B35]">banking</span></span>
            </h2>

            {/* Supporting Paragraph */}
            <p className="text-[15px] sm:text-[16px] text-[#A6C9D7] leading-relaxed font-normal max-w-xl">
              Purpose-built financial technology products for modern banking environments. Our portfolio is growing — with more solutions targeting core banking and payments on the way.
            </p>
          </div>

          {/* Top-Right Decorative Banking Tech Visual */}
          <div className="lg:col-span-5 xl:col-span-4 flex justify-center lg:justify-end">
            <div className="relative w-[300px] sm:w-[340px] h-[190px] sm:h-[210px] flex items-center justify-center select-none transition-transform duration-500 ease-out group-hover/products:scale-[1.02] hover:scale-[1.02]">
              {/* Subtle radial cyan background glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse at center, rgba(0, 217, 208, 0.18) 0%, rgba(14, 39, 55, 0) 70%)',
                }}
              />

              <svg
                viewBox="0 0 340 210"
                className="w-full h-full drop-shadow-lg"
                fill="none"
              >
                {/* Orbital ellipses */}
                <ellipse
                  cx="170"
                  cy="105"
                  rx="145"
                  ry="65"
                  stroke="#00D9D0"
                  strokeWidth="1"
                  strokeOpacity="0.35"
                  strokeDasharray="4 4"
                  transform="rotate(-10 170 105)"
                />
                <ellipse
                  cx="170"
                  cy="105"
                  rx="125"
                  ry="50"
                  stroke="#00D9D0"
                  strokeWidth="1.2"
                  strokeOpacity="0.45"
                  transform="rotate(6 170 105)"
                />

                {/* Floating Node dots on orbits */}
                <circle cx="48" cy="115" r="3.5" fill="#FF6B35" />
                <circle cx="48" cy="115" r="7" stroke="#FF6B35" strokeWidth="1" strokeOpacity="0.4" />
                <circle cx="285" cy="85" r="3.5" fill="#00D9D0" />
                <circle cx="285" cy="85" r="7" stroke="#00D9D0" strokeWidth="1" strokeOpacity="0.4" />
                <circle cx="115" cy="48" r="2.5" fill="#00D9D0" />
                <circle cx="235" cy="155" r="2.5" fill="#00D9D0" />

                {/* Central Floating Glass Tablet (Main Banking Hub) */}
                <g filter="drop-shadow(0 8px 20px rgba(0, 217, 208, 0.25))">
                  {/* Outer glowing border */}
                  <rect
                    x="130"
                    y="55"
                    width="80"
                    height="85"
                    rx="12"
                    fill="#082230"
                    stroke="#00D9D0"
                    strokeWidth="1.8"
                  />
                  {/* Subtle inner screen layer */}
                  <rect
                    x="136"
                    y="61"
                    width="68"
                    height="73"
                    rx="8"
                    fill="#0D3244"
                    stroke="#00D9D0"
                    strokeWidth="0.8"
                    strokeOpacity="0.4"
                  />
                  {/* Classical Bank Icon inside central glass screen */}
                  <g transform="translate(150, 75)" className="text-[#00D9D0]">
                    {/* Pediment roof triangle */}
                    <polygon points="20,0 38,10 2,10" fill="#00D9D0" />
                    {/* Architrave bar */}
                    <rect x="2" y="11" width="36" height="2.5" rx="0.5" fill="#00D9D0" />
                    {/* 4 Bank Columns */}
                    <rect x="5" y="15" width="4" height="15" rx="1" fill="#00D9D0" />
                    <rect x="13.5" y="15" width="4" height="15" rx="1" fill="#00D9D0" />
                    <rect x="22.5" y="15" width="4" height="15" rx="1" fill="#00D9D0" />
                    <rect x="31" y="15" width="4" height="15" rx="1" fill="#00D9D0" />
                    {/* Base steps */}
                    <rect x="2" y="31.5" width="36" height="2.5" rx="0.5" fill="#00D9D0" />
                    <rect x="0" y="34.5" width="40" height="2.5" rx="0.5" fill="#00D9D0" />
                  </g>
                </g>

                {/* Floating UI Badge 1: Top Right Security / Shield Badge */}
                <g filter="drop-shadow(0 4px 12px rgba(0, 217, 208, 0.2))">
                  <rect
                    x="232"
                    y="42"
                    width="44"
                    height="44"
                    rx="8"
                    fill="#092837"
                    stroke="#00D9D0"
                    strokeWidth="1.2"
                  />
                  {/* Shield vector inside */}
                  <path
                    d="M 254,52 L 264,56 C 264,65 258,72 254,74 C 250,72 244,65 244,56 Z"
                    fill="none"
                    stroke="#00D9D0"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M 251,62 L 253.5,64.5 L 257.5,59.5"
                    stroke="#00D9D0"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>

                {/* Floating UI Badge 2: Bottom Right Payment / Card Badge */}
                <g filter="drop-shadow(0 4px 12px rgba(0, 217, 208, 0.2))">
                  <rect
                    x="222"
                    y="125"
                    width="48"
                    height="38"
                    rx="8"
                    fill="#092837"
                    stroke="#00D9D0"
                    strokeWidth="1.2"
                  />
                  {/* Credit card vector inside */}
                  <rect
                    x="230"
                    y="133"
                    width="32"
                    height="20"
                    rx="3"
                    stroke="#00D9D0"
                    strokeWidth="1.3"
                  />
                  <line x1="230" y1="138" x2="262" y2="138" stroke="#00D9D0" strokeWidth="1.5" />
                  <rect x="234" y="144" width="6" height="4" rx="1" fill="#00D9D0" />
                </g>

                {/* Floating UI Badge 3: Bottom Left Digital Core Badge */}
                <g filter="drop-shadow(0 4px 12px rgba(0, 217, 208, 0.2))">
                  <rect
                    x="75"
                    y="120"
                    width="42"
                    height="42"
                    rx="8"
                    fill="#092837"
                    stroke="#00D9D0"
                    strokeWidth="1.2"
                  />
                  {/* Microchip / Database layer inside */}
                  <rect x="85" y="130" width="22" height="18" rx="2" stroke="#00D9D0" strokeWidth="1.3" />
                  <line x1="91" y1="135" x2="101" y2="135" stroke="#00D9D0" strokeWidth="1.2" />
                  <line x1="91" y1="139" x2="97" y2="139" stroke="#00D9D0" strokeWidth="1.2" />
                  <circle cx="101" cy="139" r="1" fill="#FF6B35" />
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 4. TWO LARGE ICE BLUE PRODUCT CARDS */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch mb-12 sm:mb-14">
          {/* --------------------------------------------------------------------- */}
          {/* LEFT CARD — SYWATCH (~58% width: lg:col-span-7) */}
          {/* --------------------------------------------------------------------- */}
          <div className="lg:col-span-7 bg-[#EAF6FF] border border-[#BCE1F5] rounded-[22px] p-6 sm:p-8 lg:p-9 text-[#0E2737] flex flex-col justify-between shadow-[0_8px_28px_rgba(6,40,55,0.14)] hover:border-[#00D9D0] hover:shadow-[0_0_10px_rgba(0,217,208,0.32),0_0_24px_rgba(0,217,208,0.20),0_8px_28px_rgba(6,40,55,0.14)] relative overflow-hidden group transition-[border-color,box-shadow] duration-300 ease-in-out">
            {/* Subtle internal gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#EAF6FF]/40 to-[#D8EDFC]/60 pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10 flex-1">
              {/* Left Column: Icon + Text + Pill Button (md:col-span-7) */}
              <div className="md:col-span-7 flex flex-col justify-between h-full">
                <div>
                  {/* Icon/Badge: Soft circular ice-blue/cyan treatment */}
                  <div className="w-14 h-14 rounded-full bg-[#D4EDFC] p-1.5 flex items-center justify-center mb-5 shadow-2xs transition-all duration-300 ease-in-out group-hover:shadow-[0_0_14px_rgba(0,217,208,0.35)]">
                    <div className="w-full h-full rounded-full bg-[#BEE5FA] p-1.5 flex items-center justify-center">
                      <div className="w-full h-full rounded-full bg-[#00D9D0] flex items-center justify-center text-[#062837] shadow-xs">
                        <ShieldCheck className="w-5 h-5 text-[#082C3D]" />
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-[28px] font-extrabold text-[#0E2737] mb-3 tracking-tight">
                    SyWatch
                  </h3>

                  {/* Description */}
                  <p className="text-[14px] sm:text-[14.5px] leading-relaxed text-[#2C5263] font-normal mb-6">
                    An on-premises infrastructure monitoring platform built specifically for Oracle FLEXCUBE (FCUBS) environments. SyWatch gives operations teams real-time visibility into database health, transaction throughput, and system alerts — without routing sensitive banking data through the cloud.
                  </p>
                </div>

                {/* Pill Button: MONITORING → */}
                <div>
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00D9D0] bg-white/80 text-[#00A39B] text-[12px] font-bold tracking-wider uppercase shadow-2xs hover:bg-[#00D9D0] hover:text-white hover:shadow-[0_0_12px_rgba(0,217,208,0.35)] transition-all duration-300 ease-in-out select-none cursor-pointer">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>MONITORING</span>
                  </span>
                </div>
              </div>

              {/* Right Column: 3D Isometric Monitoring & Server Illustration (md:col-span-5) */}
              <div className="md:col-span-5 flex items-center justify-center h-full select-none pt-4 md:pt-0">
                <div className="relative w-full max-w-[240px] md:max-w-none h-[180px] sm:h-[200px] flex items-center justify-center transition-all duration-300 ease-in-out group-hover:brightness-[1.04]">
                  <svg
                    viewBox="0 0 240 200"
                    className="w-full h-full drop-shadow-md"
                    fill="none"
                  >
                    {/* Glowing base pedestal ellipse */}
                    <ellipse
                      cx="120"
                      cy="150"
                      rx="95"
                      ry="35"
                      fill="#BFE4FA"
                      opacity="0.6"
                    />
                    <ellipse
                      cx="120"
                      cy="150"
                      rx="75"
                      ry="26"
                      fill="#00D9D0"
                      opacity="0.25"
                    />

                    {/* Left Cylindrical Server Stack */}
                    <g transform="translate(38, 88)">
                      {/* Base shadow */}
                      <ellipse cx="14" cy="48" rx="14" ry="5.5" fill="#99D3F3" opacity="0.8" />
                      {/* Cylinder 1 (Bottom) */}
                      <path d="M 0,34 L 0,44 C 0,48 28,48 28,44 L 28,34 Z" fill="#0C2F40" />
                      <ellipse cx="14" cy="34" rx="14" ry="5.5" fill="#14465E" />
                      <circle cx="9" cy="40" r="1.5" fill="#00D9D0" />
                      <circle cx="16" cy="40" r="1.5" fill="#00D9D0" />
                      {/* Cylinder 2 (Middle) */}
                      <path d="M 0,20 L 0,30 C 0,34 28,34 28,30 L 28,20 Z" fill="#0C2F40" />
                      <ellipse cx="14" cy="20" rx="14" ry="5.5" fill="#14465E" />
                      <circle cx="9" cy="26" r="1.5" fill="#00D9D0" />
                      <circle cx="16" cy="26" r="1.5" fill="#00D9D0" />
                      {/* Cylinder 3 (Top) */}
                      <path d="M 0,6 L 0,16 C 0,20 28,20 28,16 L 28,6 Z" fill="#0C2F40" />
                      <ellipse cx="14" cy="6" rx="14" ry="5.5" fill="#1D5672" />
                      <circle cx="9" cy="12" r="1.5" fill="#00D9D0" />
                      <circle cx="16" cy="12" r="1.5" fill="#00D9D0" />
                    </g>

                    {/* Right Cylindrical Server Stack */}
                    <g transform="translate(174, 82)">
                      {/* Base shadow */}
                      <ellipse cx="15" cy="54" rx="15" ry="6" fill="#99D3F3" opacity="0.8" />
                      {/* Cylinder 1 (Bottom) */}
                      <path d="M 0,40 L 0,50 C 0,54 30,54 30,50 L 30,40 Z" fill="#0C2F40" />
                      <ellipse cx="15" cy="40" rx="15" ry="6" fill="#14465E" />
                      <circle cx="10" cy="46" r="1.5" fill="#00D9D0" />
                      <circle cx="18" cy="46" r="1.5" fill="#00D9D0" />
                      {/* Cylinder 2 (Middle) */}
                      <path d="M 0,26 L 0,36 C 0,40 30,40 30,36 L 30,26 Z" fill="#0C2F40" />
                      <ellipse cx="15" cy="26" rx="15" ry="6" fill="#14465E" />
                      <circle cx="10" cy="32" r="1.5" fill="#00D9D0" />
                      <circle cx="18" cy="32" r="1.5" fill="#00D9D0" />
                      {/* Cylinder 3 (Top) */}
                      <path d="M 0,12 L 0,22 C 0,26 30,26 30,22 L 30,12 Z" fill="#0C2F40" />
                      <ellipse cx="15" cy="12" rx="15" ry="6" fill="#1D5672" />
                      <circle cx="10" cy="18" r="1.5" fill="#00D9D0" />
                      <circle cx="18" cy="18" r="1.5" fill="#00D9D0" />
                    </g>

                    {/* Center 3D Isometric Monitoring Display Screen */}
                    <g transform="translate(68, 32)">
                      {/* Monitor Stand */}
                      <path d="M 45,95 L 57,95 L 61,114 L 41,114 Z" fill="#0D3244" />
                      <ellipse cx="51" cy="114" rx="20" ry="5" fill="#072230" />

                      {/* Main Display Body */}
                      <rect
                        x="0"
                        y="0"
                        width="102"
                        height="96"
                        rx="7"
                        fill="#072230"
                        stroke="#00D9D0"
                        strokeWidth="1.5"
                      />

                      {/* Screen Display Face */}
                      <rect
                        x="5"
                        y="5"
                        width="92"
                        height="86"
                        rx="4"
                        fill="#0B2B3C"
                      />

                      {/* Top Bar on Screen */}
                      <line x1="5" y1="18" x2="97" y2="18" stroke="#00D9D0" strokeWidth="0.8" strokeOpacity="0.4" />
                      <circle cx="12" cy="11.5" r="1.5" fill="#00D9D0" />
                      <circle cx="18" cy="11.5" r="1.5" fill="#00D9D0" opacity="0.6" />
                      <circle cx="24" cy="11.5" r="1.5" fill="#00D9D0" opacity="0.4" />

                      {/* Left Side: System Metrics & Mini Bar Chart */}
                      <rect x="10" y="24" width="22" height="2" rx="1" fill="#00D9D0" opacity="0.8" />
                      <rect x="10" y="28" width="16" height="1.5" rx="0.7" fill="#78AABF" />

                      {/* Mini Bar Chart Bars */}
                      <rect x="10" y="44" width="3.5" height="12" rx="0.5" fill="#00D9D0" />
                      <rect x="15" y="38" width="3.5" height="18" rx="0.5" fill="#00D9D0" />
                      <rect x="20" y="48" width="3.5" height="8" rx="0.5" fill="#00D9D0" />
                      <rect x="25" y="41" width="3.5" height="15" rx="0.5" fill="#00D9D0" />
                      <rect x="30" y="35" width="3.5" height="21" rx="0.5" fill="#00D9D0" />

                      {/* Right Side: World Map Dot Grid Graphic */}
                      <g fill="#00D9D0" opacity="0.75">
                        <circle cx="48" cy="30" r="1.2" />
                        <circle cx="53" cy="28" r="1.2" />
                        <circle cx="58" cy="31" r="1.2" />
                        <circle cx="63" cy="29" r="1.2" />
                        <circle cx="68" cy="33" r="1.2" />
                        <circle cx="73" cy="30" r="1.2" />
                        <circle cx="78" cy="32" r="1.2" />
                        <circle cx="83" cy="31" r="1.2" />
                        <circle cx="88" cy="34" r="1.2" />

                        <circle cx="50" cy="36" r="1.2" />
                        <circle cx="55" cy="38" r="1.2" />
                        <circle cx="60" cy="35" r="1.2" />
                        <circle cx="65" cy="37" r="1.2" />
                        <circle cx="70" cy="36" r="1.2" />
                        <circle cx="75" cy="39" r="1.2" />
                        <circle cx="80" cy="37" r="1.2" />
                        <circle cx="85" cy="40" r="1.2" />

                        <circle cx="52" cy="43" r="1.2" />
                        <circle cx="57" cy="44" r="1.2" />
                        <circle cx="67" cy="43" r="1.2" />
                        <circle cx="72" cy="45" r="1.2" />
                        <circle cx="82" cy="46" r="1.2" />
                      </g>

                      {/* Lower Screen: Real-Time Wave Graph */}
                      <path
                        d="M 10,75 Q 25,62 40,72 T 70,68 T 92,72"
                        fill="none"
                        stroke="#00D9D0"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M 10,75 Q 25,62 40,72 T 70,68 T 92,72 L 92,84 L 10,84 Z"
                        fill="url(#monitorGraphGradient)"
                        opacity="0.35"
                      />
                    </g>

                    <defs>
                      <linearGradient id="monitorGraphGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#00D9D0" />
                        <stop offset="100%" stopColor="#00D9D0" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* --------------------------------------------------------------------- */}
          {/* RIGHT CARD — MORE PRODUCTS COMING SOON (~42% width: lg:col-span-5) */}
          {/* --------------------------------------------------------------------- */}
          <div className="lg:col-span-5 bg-[#EAF6FF] border border-[#BCE1F5] rounded-[22px] p-6 sm:p-8 lg:p-9 text-[#0E2737] flex flex-col justify-between shadow-[0_8px_28px_rgba(6,40,55,0.14)] hover:border-[#00D9D0] hover:shadow-[0_0_10px_rgba(0,217,208,0.32),0_0_24px_rgba(0,217,208,0.20),0_8px_28px_rgba(6,40,55,0.14)] relative overflow-hidden group transition-[border-color,box-shadow] duration-300 ease-in-out">
            {/* Subtle internal gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#EAF6FF]/30 to-[#DCEEFB]/60 pointer-events-none" />

            {/* Orbit decoration sweeping out towards the right edge */}
            <svg
              className="absolute right-[-40px] top-1/2 -translate-y-1/2 w-[240px] h-[240px] pointer-events-none select-none opacity-45"
              viewBox="0 0 240 240"
              fill="none"
            >
              <circle
                cx="160"
                cy="120"
                r="105"
                stroke="#00D9D0"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
              <circle
                cx="160"
                cy="120"
                r="75"
                stroke="#00D9D0"
                strokeWidth="1.2"
              />
              <circle cx="65" cy="85" r="3.5" fill="#00D9D0" />
              <circle cx="88" cy="145" r="3" fill="#00D9D0" />
            </svg>

            {/* Top Row: Icon + Arrow Right indicator */}
            <div className="flex items-center justify-between relative z-10 mb-5">
              {/* Icon/Badge: circular cyan/orange tech icon treatment */}
              <div className="w-14 h-14 rounded-full bg-[#D4EDFC] p-1.5 flex items-center justify-center shadow-2xs transition-all duration-300 ease-in-out group-hover:shadow-[0_0_14px_rgba(0,217,208,0.35)]">
                <div className="w-full h-full rounded-full bg-[#BEE5FA] p-1.5 flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-[#00D9D0] flex items-center justify-center text-[#062837] shadow-xs">
                    <Cpu className="w-5 h-5 text-[#082C3D]" />
                  </div>
                </div>
              </div>

              {/* Right Arrow Button on the edge as seen in reference */}
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#00D9D0] bg-white flex items-center justify-center text-[#00D9D0] shadow-xs hover:bg-[#00D9D0] hover:text-white hover:shadow-[0_0_12px_rgba(0,217,208,0.35)] transition-all duration-300 ease-in-out cursor-pointer">
                <ArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </div>
            </div>

            {/* Content Area */}
            <div className="relative z-10 flex-1 flex flex-col justify-between">
              <div>
                {/* Title */}
                <h3 className="text-2xl sm:text-[26px] font-extrabold text-[#0E2737] mb-3 tracking-tight">
                  More Products Coming Soon
                </h3>

                {/* Description */}
                <p className="text-[14px] sm:text-[14.5px] leading-relaxed text-[#2C5263] font-normal mb-6">
                  Syfinor is actively developing additional products targeting core banking operations, integration infrastructure, and intelligent automation for financial institutions.
                </p>
              </div>

              {/* Button: IN DEVELOPMENT */}
              <div>
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-[#FF6B35] bg-white/80 text-[#FF6B35] text-[12px] font-bold tracking-wider uppercase shadow-2xs hover:bg-[#FF6B35] hover:text-white hover:shadow-[0_0_12px_rgba(255,107,53,0.35)] transition-all duration-300 ease-in-out select-none cursor-pointer">
                  IN DEVELOPMENT
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 5. INDUSTRIES WE SERVE (Horizontal Compact Row) */}
        {/* ========================================================================= */}
        <div className="pt-2 sm:pt-4">
          <div className="flex flex-wrap items-center gap-y-3 gap-x-4 sm:gap-x-6 text-[13px] sm:text-[13.5px] text-[#C2DFEC]">
            {/* Left Header */}
            <div className="flex items-center gap-2.5 flex-shrink-0">
              <Landmark className="w-4.5 h-4.5 text-[#00D9D0]" />
              <span className="text-[12px] font-bold tracking-[0.2em] text-[#00D9D0] uppercase select-none">
                INDUSTRIES WE SERVE
              </span>
              <div className="w-10 sm:w-16 h-[1.5px] bg-[#00D9D0]/50 ml-1" />
            </div>

            {/* Items with cyan icons and dot separators */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-3 sm:gap-x-5">
              {industries.map((ind, idx) => {
                const Icon = ind.icon;
                return (
                  <React.Fragment key={ind.name}>
                    <div className="group/item inline-flex items-center gap-2 text-white/90 hover:text-white hover:-translate-y-[2px] transition-all duration-[250ms] ease-out cursor-default">
                      <Icon className="w-3.5 h-3.5 text-[#00D9D0] flex-shrink-0 transition-all duration-[250ms] ease-out group-hover/item:drop-shadow-[0_0_6px_rgba(0,217,208,0.85)]" />
                      <span className="font-medium whitespace-nowrap transition-colors duration-[250ms]">{ind.name}</span>
                    </div>
                    {idx < industries.length - 1 && (
                      <span className="text-[#00D9D0] text-xs opacity-70 select-none">•</span>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>

        {/* Thin Divider Between Industries and Categories */}
        <div className="w-full h-[1px] bg-[#144254] my-5 sm:my-6" />

        {/* ========================================================================= */}
        {/* 6. OUR PRODUCT CATEGORIES (Horizontal Compact Row) */}
        {/* ========================================================================= */}
        <div className="pb-2">
          <div className="flex flex-wrap items-center gap-y-3 gap-x-4 sm:gap-x-6 text-[13px] sm:text-[13.5px] text-[#C2DFEC]">
            {/* Left Header */}
            <div className="flex items-center gap-2.5 flex-shrink-0">
              <LayoutGrid className="w-4.5 h-4.5 text-[#00D9D0]" />
              <span className="text-[12px] font-bold tracking-[0.2em] text-[#00D9D0] uppercase select-none">
                OUR PRODUCT CATEGORIES
              </span>
              <div className="w-10 sm:w-16 h-[1.5px] bg-[#00D9D0]/50 ml-1" />
            </div>

            {/* Items with cyan icons and dot separators */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-3 sm:gap-x-5">
              {categories.map((cat, idx) => {
                const Icon = cat.icon;
                return (
                  <React.Fragment key={cat.name}>
                    <div className="group/cat inline-flex items-center gap-2 text-white/90 hover:text-white hover:-translate-y-[2px] transition-all duration-[250ms] ease-out cursor-default">
                      <Icon className="w-3.5 h-3.5 text-[#00D9D0] flex-shrink-0 transition-all duration-[250ms] ease-out group-hover/cat:drop-shadow-[0_0_6px_rgba(0,217,208,0.85)]" />
                      <span className="font-medium whitespace-nowrap transition-colors duration-[250ms]">{cat.name}</span>
                    </div>
                    {idx < categories.length - 1 && (
                      <span className="text-[#00D9D0] text-xs opacity-70 select-none">•</span>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
