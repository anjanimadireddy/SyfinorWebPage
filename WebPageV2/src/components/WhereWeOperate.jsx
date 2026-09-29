import React from 'react';
import {
  Landmark,
  Globe,
  MapPin,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';

export default function WhereWeOperate() {
  const regions = [
    {
      id: 'india',
      title: 'India — Headquarters',
      description:
        'Bangalore, Karnataka. Global delivery hub and R&D base for all Syfinor products and services.',
      icon: Landmark,
      accentColor: '#00D9D0',
      iconBg: '#E4F8F9',
      silhouette: (
        /* Subtle corporate / Bangalore tech park skyscraper architecture */
        <svg
          viewBox="0 0 160 100"
          className="w-full h-full text-[#00D9D0] opacity-25"
          fill="currentColor"
        >
          {/* Background towers */}
          <rect x="10" y="25" width="28" height="75" rx="1" opacity="0.4" />
          <rect x="25" y="10" width="34" height="90" rx="1" opacity="0.6" />
          <polygon points="25,10 42,0 59,10" opacity="0.6" />
          {/* Main glass tower */}
          <rect x="65" y="18" width="45" height="82" rx="2" opacity="0.8" />
          <polygon points="65,18 100,5 110,18" opacity="0.8" />
          {/* Window grid lines */}
          <line x1="75" y1="25" x2="75" y2="100" stroke="#FFFFFF" strokeWidth="1" opacity="0.6" />
          <line x1="88" y1="25" x2="88" y2="100" stroke="#FFFFFF" strokeWidth="1" opacity="0.6" />
          <line x1="100" y1="25" x2="100" y2="100" stroke="#FFFFFF" strokeWidth="1" opacity="0.6" />
          <line x1="65" y1="35" x2="110" y2="35" stroke="#FFFFFF" strokeWidth="1" opacity="0.6" />
          <line x1="65" y1="50" x2="110" y2="50" stroke="#FFFFFF" strokeWidth="1" opacity="0.6" />
          <line x1="65" y1="65" x2="110" y2="65" stroke="#FFFFFF" strokeWidth="1" opacity="0.6" />
          <line x1="65" y1="80" x2="110" y2="80" stroke="#FFFFFF" strokeWidth="1" opacity="0.6" />
          {/* Right tower */}
          <rect x="115" y="32" width="35" height="68" rx="1" opacity="0.5" />
          <line x1="125" y1="38" x2="125" y2="100" stroke="#FFFFFF" strokeWidth="1" opacity="0.5" />
          <line x1="138" y1="38" x2="138" y2="100" stroke="#FFFFFF" strokeWidth="1" opacity="0.5" />
        </svg>
      ),
    },
    {
      id: 'africa',
      title: 'Africa',
      description:
        'Banking transformation and FLEXCUBE implementations across multiple African financial institutions.',
      icon: Globe,
      accentColor: '#168BFF',
      iconBg: '#EAF3FF',
      silhouette: (
        /* Subtle African acacia tree & gentle savannah landscape */
        <svg
          viewBox="0 0 160 100"
          className="w-full h-full text-[#168BFF] opacity-25"
          fill="currentColor"
        >
          {/* Savannah ground curve */}
          <path
            d="M0,95 Q50,85 110,88 T160,85 L160,100 L0,100 Z"
            opacity="0.5"
          />
          <path
            d="M30,92 Q90,82 160,90 L160,100 L30,100 Z"
            opacity="0.7"
          />
          {/* Acacia tree trunk and branches */}
          <path
            d="M105,90 C104,80 101,65 96,52 C94,46 90,40 85,36 C80,33 75,32 68,30 C69,32 78,36 82,42 C85,46 87,55 92,68 C94,76 96,85 97,90 Z"
            opacity="0.9"
          />
          <path
            d="M96,52 C99,48 108,44 116,40 C114,42 108,47 103,53 Z"
            opacity="0.8"
          />
          <path
            d="M92,62 C96,58 104,54 112,50 C110,52 103,57 97,63 Z"
            opacity="0.8"
          />
          {/* Canopy umbrella layers */}
          <ellipse cx="65" cy="28" rx="26" ry="6.5" opacity="0.85" />
          <ellipse cx="88" cy="24" rx="22" ry="6" opacity="0.85" />
          <ellipse cx="112" cy="32" rx="24" ry="6" opacity="0.8" />
          <ellipse cx="120" cy="46" rx="16" ry="4.5" opacity="0.7" />
          {/* Distant small tree */}
          <path d="M28,88 L30,78 L32,88 Z" opacity="0.4" />
          <ellipse cx="30" cy="76" rx="9" ry="3.5" opacity="0.4" />
        </svg>
      ),
    },
    {
      id: 'asia',
      title: 'Asia',
      description:
        'Core banking projects and payment modernization engagements across South and Southeast Asian markets.',
      icon: Globe,
      accentColor: '#00D9D0',
      iconBg: '#E4F8F9',
      silhouette: (
        /* Subtle modern Asian skyline & iconic twin towers */
        <svg
          viewBox="0 0 160 100"
          className="w-full h-full text-[#00D9D0] opacity-25"
          fill="currentColor"
        >
          {/* Base skyline */}
          <rect x="0" y="60" width="22" height="40" opacity="0.3" />
          <rect x="24" y="45" width="25" height="55" opacity="0.4" />
          {/* Twin Towers motif */}
          {/* Tower 1 */}
          <rect x="58" y="16" width="18" height="84" rx="1" opacity="0.85" />
          <polygon points="61,16 67,2 73,16" opacity="0.9" />
          {/* Skybridge */}
          <rect x="74" y="48" width="16" height="5" opacity="0.9" />
          {/* Tower 2 */}
          <rect x="88" y="16" width="18" height="84" rx="1" opacity="0.85" />
          <polygon points="91,16 97,2 103,16" opacity="0.9" />
          {/* Tower Spire */}
          <line x1="67" y1="2" x2="67" y2="-5" stroke="currentColor" strokeWidth="1.5" />
          <line x1="97" y1="2" x2="97" y2="-5" stroke="currentColor" strokeWidth="1.5" />
          {/* Modern pagoda & adjacent glass buildings */}
          <rect x="112" y="38" width="22" height="62" opacity="0.5" />
          <polygon points="108,40 123,28 138,40" opacity="0.6" />
          <rect x="136" y="52" width="24" height="48" opacity="0.4" />
        </svg>
      ),
    },
    {
      id: 'latin-america',
      title: 'Latin America',
      description:
        'OBPM and Oracle Banking Branch (OBBRN) deployments for Latin American banks and fintechs.',
      icon: MapPin,
      accentColor: '#168BFF',
      iconBg: '#EAF3FF',
      silhouette: (
        /* Subtle Latin American mountain ridge & Corcovado landmark */
        <svg
          viewBox="0 0 160 100"
          className="w-full h-full text-[#168BFF] opacity-25"
          fill="currentColor"
        >
          {/* Distant mountain ridges */}
          <path
            d="M0,80 Q40,45 80,65 Q115,40 160,75 L160,100 L0,100 Z"
            opacity="0.3"
          />
          {/* Steep mountain peak (Corcovado shape) */}
          <path
            d="M70,95 C82,75 92,48 104,32 C108,26 114,24 118,25 C122,27 126,38 130,55 C135,72 144,88 155,95 Z"
            opacity="0.7"
          />
          {/* Iconic statue silhouette at peak */}
          {/* Body */}
          <rect x="112" y="16" width="3.5" height="10" rx="0.5" opacity="0.9" />
          {/* Outstretched arms */}
          <rect x="105" y="18" width="17.5" height="2" rx="0.5" opacity="0.9" />
          {/* Head */}
          <circle cx="113.8" cy="14.5" r="1.8" opacity="0.9" />
          {/* Foreground Sugarloaf hill */}
          <path
            d="M0,90 Q30,65 55,75 Q85,88 120,95 L120,100 L0,100 Z"
            opacity="0.5"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="global-reach"
      className="bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-100 relative overflow-hidden"
    >
      {/* 1. Subtle Outer Edge Decorations */}
      {/* Top-Right corner delicate cyan wave lines and particles */}
      <svg
        className="absolute top-0 right-0 w-[320px] sm:w-[440px] h-[220px] sm:h-[280px] pointer-events-none opacity-25 z-0"
        viewBox="0 0 450 280"
        fill="none"
      >
        <path
          d="M100,0 C180,40 260,90 340,160 C390,200 420,240 450,280"
          stroke="#00D9D0"
          strokeWidth="1.2"
        />
        <path
          d="M140,0 C210,40 290,90 370,160 C410,195 435,235 450,260"
          stroke="#00D9D0"
          strokeWidth="0.8"
        />
        <path
          d="M180,0 C250,35 320,85 390,150 C425,185 440,215 450,240"
          stroke="#00D9D0"
          strokeWidth="0.6"
        />
        <circle cx="280" cy="85" r="2" fill="#00D9D0" />
        <circle cx="390" cy="145" r="1.5" fill="#00D9D0" />
      </svg>

      {/* Bottom-Left corner delicate cyan wave lines and particles */}
      <svg
        className="absolute bottom-0 left-0 w-[300px] sm:w-[400px] h-[200px] sm:h-[260px] pointer-events-none opacity-20 z-0"
        viewBox="0 0 400 260"
        fill="none"
      >
        <path
          d="M0,180 C80,140 160,110 240,70 C300,40 350,15 400,0"
          stroke="#00D9D0"
          strokeWidth="1"
        />
        <path
          d="M0,210 C70,170 150,135 225,95 C285,65 340,35 400,15"
          stroke="#00D9D0"
          strokeWidth="0.7"
        />
        <circle cx="160" cy="125" r="2" fill="#00D9D0" />
      </svg>

      {/* Main Container */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        {/* Section Header: Left-Aligned */}
        <div className="max-w-3xl mb-10 sm:mb-12 lg:mb-14">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 sm:w-12 h-[2px] bg-[#00D9D0]" />
            <span className="text-[12px] font-bold tracking-[0.25em] text-[#00D9D0] uppercase select-none">
              GLOBAL REACH
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight leading-tight mb-3">
            <span className="text-[#1A2742]">Where We </span>
            <span className="text-[#00D9D0]">Operate</span>
          </h2>

          {/* Description (Preserved exactly) */}
          <p className="text-[15px] sm:text-[16px] text-[#4A5568] leading-relaxed font-normal">
            Syfinor's team brings hands-on delivery experience across three continents, serving banks and financial institutions in diverse regulatory environments.
          </p>
        </div>

        {/* Two-Column Composition: Left Map (57%), Right Regions (43%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-stretch">
          {/* ========================================================================= */}
          {/* LEFT: Large Dark Global Map Panel */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7 flex flex-col">
            <div
              className="w-full flex-1 rounded-[22px] border border-[#00D9D0]/35 flex flex-col justify-between overflow-hidden relative shadow-[0_12px_36px_rgba(15,26,46,0.22)]"
              style={{
                backgroundColor: '#0C1828',
              }}
            >
              {/* Subtle dark grid background behind map */}
              <div
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, #00D9D0 1px, transparent 1px), linear-gradient(to bottom, #00D9D0 1px, transparent 1px)',
                  backgroundSize: '36px 36px',
                }}
              />

              {/* Central radial glow */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse at center, rgba(0, 217, 208, 0.15) 0%, rgba(15,26,46, 0) 70%)',
                }}
              />

              {/* World Map SVG Container */}
              <div className="p-4 sm:p-6 lg:p-7 relative z-10 flex-1 flex items-center justify-center">
                <svg
                  viewBox="0 0 920 460"
                  className="w-full h-auto select-none drop-shadow-md"
                  fill="none"
                >
                  <defs>
                    {/* Uniform Cyan Dot Pattern for recognizable continents */}
                    <pattern
                      id="fintechDotMatrix"
                      x="0"
                      y="0"
                      width="7.2"
                      height="7.2"
                      patternUnits="userSpaceOnUse"
                    >
                      <circle cx="3.6" cy="3.6" r="1.45" fill="#00D9D0" opacity="0.85" />
                    </pattern>

                    {/* Mask that defines the exact recognizable world continents */}
                    <mask id="worldContinentsMask">
                      <rect width="920" height="460" fill="black" />
                      {/* Continent Shapes in solid white */}
                      <g fill="white">
                        {/* 1. North America */}
                        <path d="M 65,75 C 80,55 115,45 150,48 C 185,42 235,38 275,55 C 295,65 305,85 285,100 C 265,108 235,105 225,118 C 218,128 232,145 248,155 C 240,172 225,182 228,198 C 230,208 215,210 200,200 C 185,190 155,210 140,225 C 130,235 120,220 130,200 C 140,185 125,170 110,148 C 95,128 80,138 72,122 C 62,108 58,85 65,75 Z" />
                        {/* Greenland */}
                        <path d="M 310,35 C 330,30 350,38 345,62 C 338,78 318,82 305,72 C 295,62 300,45 310,35 Z" />

                        {/* 2. South America */}
                        <path d="M 205,235 C 230,230 260,235 275,255 C 295,275 305,302 285,325 C 265,345 250,375 240,405 C 230,410 220,395 225,370 C 220,340 205,315 200,285 C 195,260 195,245 205,235 Z" />

                        {/* 3. Europe */}
                        {/* UK & Ireland */}
                        <path d="M 415,85 C 425,80 430,95 425,110 C 420,115 410,110 412,95 Z" />
                        <path d="M 402,95 C 410,92 412,105 408,112 C 402,110 400,102 402,95 Z" />
                        {/* Mainland Europe & Scandinavia */}
                        <path d="M 445,45 C 465,35 485,45 480,75 C 475,90 460,95 450,105 C 460,115 480,110 505,115 C 515,125 510,145 495,155 C 475,160 455,150 445,160 C 440,165 448,180 445,190 C 435,185 435,170 425,165 C 415,165 405,175 395,165 C 390,155 400,145 415,140 C 425,130 435,110 445,100 C 440,85 435,60 445,45 Z" />

                        {/* 4. Africa */}
                        <path d="M 410,185 C 440,175 485,175 520,190 C 530,205 550,220 545,245 C 535,260 520,280 515,310 C 505,340 485,365 470,360 C 455,350 450,320 445,290 C 435,275 415,260 400,245 C 390,225 400,200 410,185 Z" />
                        {/* Madagascar */}
                        <path d="M 545,290 C 555,285 560,310 552,335 C 545,335 540,315 545,290 Z" />

                        {/* 5. Asia & Middle East & Russia */}
                        <path d="M 515,120 C 560,100 620,90 680,85 C 740,80 800,95 830,110 C 840,125 810,140 815,155 C 800,165 780,155 765,170 C 750,180 735,200 725,225 C 715,245 695,260 685,245 C 680,230 665,220 650,205 C 640,190 625,180 610,185 C 595,190 580,205 570,200 C 560,190 550,170 540,175 C 530,180 525,160 515,155 Z" />
                        {/* Indian Subcontinent */}
                        <path d="M 590,195 C 615,188 640,195 646,215 C 650,235 635,262 618,282 C 608,285 604,268 598,248 C 590,228 584,208 590,195 Z" />
                        {/* Sri Lanka */}
                        <circle cx="626" cy="296" r="5" />
                        {/* Southeast Asia / Indochina */}
                        <path d="M 708,215 C 730,210 740,230 735,250 C 725,265 715,280 710,270 C 705,255 700,230 708,215 Z" />
                        {/* Japan */}
                        <path d="M 810,138 C 825,128 835,148 825,172 C 815,178 810,158 810,138 Z" />
                        {/* Indonesia & Philippines */}
                        <path d="M 715,285 C 740,280 770,285 790,295 C 770,305 740,300 715,285 Z" />
                        <circle cx="765" cy="245" r="4.5" />
                        <circle cx="778" cy="265" r="4" />

                        {/* 6. Australia & New Zealand */}
                        <path d="M 750,315 C 785,300 830,305 855,330 C 865,355 845,385 815,390 C 785,395 755,375 745,350 C 740,330 745,320 750,315 Z" />
                        <circle cx="808" cy="405" r="4" />
                        <path d="M 885,375 C 895,365 905,385 895,405 C 885,410 880,395 885,375 Z" />
                      </g>
                    </mask>

                    {/* Subtle glow filter for connection arches */}
                    <filter id="cyanConnectionGlow" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#00D9D0" floodOpacity="0.8" />
                    </filter>
                  </defs>

                  {/* Ocean coordinate grid lines */}
                  <g stroke="#00D9D0" strokeWidth="0.5" strokeOpacity="0.12" strokeDasharray="3 3">
                    <line x1="0" y1="115" x2="920" y2="115" />
                    <line x1="0" y1="230" x2="920" y2="230" />
                    <line x1="0" y1="345" x2="920" y2="345" />
                    <line x1="230" y1="0" x2="230" y2="460" />
                    <line x1="460" y1="0" x2="460" y2="460" />
                    <line x1="690" y1="0" x2="690" y2="460" />
                  </g>

                  {/* Continent Dots Rendered via Mask */}
                  <rect
                    width="920"
                    height="460"
                    fill="url(#fintechDotMatrix)"
                    mask="url(#worldContinentsMask)"
                  />

                  {/* Subtle coastlines outline for sharp recognition */}
                  <g
                    stroke="#00D9D0"
                    strokeWidth="0.8"
                    strokeOpacity="0.35"
                    fill="none"
                  >
                    {/* North America */}
                    <path d="M 65,75 C 80,55 115,45 150,48 C 185,42 235,38 275,55 C 295,65 305,85 285,100 C 265,108 235,105 225,118 C 218,128 232,145 248,155 C 240,172 225,182 228,198 C 230,208 215,210 200,200 C 185,190 155,210 140,225 C 130,235 120,220 130,200 C 140,185 125,170 110,148 C 95,128 80,138 72,122 C 62,108 58,85 65,75 Z" />
                    {/* South America */}
                    <path d="M 205,235 C 230,230 260,235 275,255 C 295,275 305,302 285,325 C 265,345 250,375 240,405 C 230,410 220,395 225,370 C 220,340 205,315 200,285 C 195,260 195,245 205,235 Z" />
                    {/* Africa */}
                    <path d="M 410,185 C 440,175 485,175 520,190 C 530,205 550,220 545,245 C 535,260 520,280 515,310 C 505,340 485,365 470,360 C 455,350 450,320 445,290 C 435,275 415,260 400,245 C 390,225 400,200 410,185 Z" />
                    {/* India Subcontinent */}
                    <path d="M 590,195 C 615,188 640,195 646,215 C 650,235 635,262 618,282 C 608,285 604,268 598,248 C 590,228 584,208 590,195 Z" />
                    {/* Australia */}
                    <path d="M 750,315 C 785,300 830,305 855,330 C 865,355 845,385 815,390 C 785,395 755,375 745,350 C 740,330 745,320 750,315 Z" />
                  </g>

                  {/* Elegant Curved Cyan Arches Connecting the 4 Locations */}
                  {/* 1. Latin America (225, 270) to Africa (475, 245) */}
                  <path
                    d="M 225,270 Q 350,150 475,245"
                    stroke="#00D9D0"
                    strokeWidth="1.8"
                    className="animate-map-dash"
                    filter="url(#cyanConnectionGlow)"
                  />
                  {/* 2. Africa (475, 245) to India (618, 225) */}
                  <path
                    d="M 475,245 Q 545,155 618,225"
                    stroke="#00D9D0"
                    strokeWidth="1.8"
                    className="animate-map-dash"
                    filter="url(#cyanConnectionGlow)"
                  />
                  {/* 3. India (618, 225) to Asia (728, 220) */}
                  <path
                    d="M 618,225 Q 675,170 728,220"
                    stroke="#00D9D0"
                    strokeWidth="1.8"
                    className="animate-map-dash"
                    filter="url(#cyanConnectionGlow)"
                  />

                  {/* ======================================================= */}
                  {/* Exactly 4 Location Markers with Cyan Pin & Dark Pill */}
                  {/* ======================================================= */}

                  {/* 1. Latin America Marker (x: 225, y: 270) */}
                  <g className="select-none">
                    {/* Pulsing base glow */}
                    <circle cx="225" cy="270" r="4.5" fill="#00D9D0" />
                    <circle cx="225" cy="270" r="10" stroke="#00D9D0" strokeWidth="1.5" opacity="0.6" className="animate-ping" />
                    {/* Teardrop Location Pin */}
                    <path
                      d="M 225,268 C 219,268 214,263 214,257 C 214,249 225,238 225,238 C 225,238 236,249 236,257 C 236,263 231,268 225,268 Z"
                      fill="#00D9D0"
                      filter="drop-shadow(0 0 6px #00D9D0)"
                    />
                    <circle cx="225" cy="256" r="3" fill="#0C1828" />
                    {/* Compact Dark Label */}
                    <rect
                      x="172"
                      y="280"
                      width="106"
                      height="24"
                      rx="12"
                      fill="#0C1828"
                      stroke="#00D9D0"
                      strokeWidth="1.2"
                      filter="drop-shadow(0 4px 8px rgba(0,0,0,0.5))"
                    />
                    <text
                      x="225"
                      y="296"
                      fill="#FFFFFF"
                      fontSize="11"
                      fontWeight="bold"
                      textAnchor="middle"
                      fontFamily="system-ui, sans-serif"
                    >
                      Latin America
                    </text>
                  </g>

                  {/* 2. Africa Marker (x: 475, y: 245) */}
                  <g className="select-none">
                    {/* Pulsing base glow */}
                    <circle cx="475" cy="245" r="4.5" fill="#00D9D0" />
                    <circle cx="475" cy="245" r="10" stroke="#00D9D0" strokeWidth="1.5" opacity="0.6" className="animate-ping" />
                    {/* Teardrop Location Pin */}
                    <path
                      d="M 475,243 C 469,243 464,238 464,232 C 464,224 475,213 475,213 C 475,213 486,224 486,232 C 486,238 481,243 475,243 Z"
                      fill="#00D9D0"
                      filter="drop-shadow(0 0 6px #00D9D0)"
                    />
                    <circle cx="475" cy="231" r="3" fill="#0C1828" />
                    {/* Compact Dark Label */}
                    <rect
                      x="444"
                      y="255"
                      width="62"
                      height="24"
                      rx="12"
                      fill="#0C1828"
                      stroke="#00D9D0"
                      strokeWidth="1.2"
                      filter="drop-shadow(0 4px 8px rgba(0,0,0,0.5))"
                    />
                    <text
                      x="475"
                      y="271"
                      fill="#FFFFFF"
                      fontSize="11"
                      fontWeight="bold"
                      textAnchor="middle"
                      fontFamily="system-ui, sans-serif"
                    >
                      Africa
                    </text>
                  </g>

                  {/* 3. India Marker (x: 618, y: 225) */}
                  <g className="select-none">
                    {/* Pulsing base glow */}
                    <circle cx="618" cy="225" r="4.5" fill="#00D9D0" />
                    <circle cx="618" cy="225" r="10" stroke="#00D9D0" strokeWidth="1.5" opacity="0.6" className="animate-ping" />
                    {/* Teardrop Location Pin */}
                    <path
                      d="M 618,223 C 612,223 607,218 607,212 C 607,204 618,193 618,193 C 618,193 629,204 629,212 C 629,218 624,223 618,223 Z"
                      fill="#00D9D0"
                      filter="drop-shadow(0 0 6px #00D9D0)"
                    />
                    <circle cx="618" cy="211" r="3" fill="#0C1828" />
                    {/* Compact Dark Label */}
                    <rect
                      x="590"
                      y="235"
                      width="56"
                      height="24"
                      rx="12"
                      fill="#0C1828"
                      stroke="#00D9D0"
                      strokeWidth="1.2"
                      filter="drop-shadow(0 4px 8px rgba(0,0,0,0.5))"
                    />
                    <text
                      x="618"
                      y="251"
                      fill="#FFFFFF"
                      fontSize="11"
                      fontWeight="bold"
                      textAnchor="middle"
                      fontFamily="system-ui, sans-serif"
                    >
                      India
                    </text>
                  </g>

                  {/* 4. Asia Marker (x: 728, y: 220) */}
                  <g className="select-none">
                    {/* Pulsing base glow */}
                    <circle cx="728" cy="220" r="4.5" fill="#00D9D0" />
                    <circle cx="728" cy="220" r="10" stroke="#00D9D0" strokeWidth="1.5" opacity="0.6" className="animate-ping" />
                    {/* Teardrop Location Pin */}
                    <path
                      d="M 728,218 C 722,218 717,213 717,207 C 717,199 728,188 728,188 C 728,188 739,199 739,207 C 739,213 734,218 728,218 Z"
                      fill="#00D9D0"
                      filter="drop-shadow(0 0 6px #00D9D0)"
                    />
                    <circle cx="728" cy="206" r="3" fill="#0C1828" />
                    {/* Compact Dark Label */}
                    <rect
                      x="701"
                      y="230"
                      width="54"
                      height="24"
                      rx="12"
                      fill="#0C1828"
                      stroke="#00D9D0"
                      strokeWidth="1.2"
                      filter="drop-shadow(0 4px 8px rgba(0,0,0,0.5))"
                    />
                    <text
                      x="728"
                      y="246"
                      fill="#FFFFFF"
                      fontSize="11"
                      fontWeight="bold"
                      textAnchor="middle"
                      fontFamily="system-ui, sans-serif"
                    >
                      Asia
                    </text>
                  </g>
                </svg>
              </div>

              {/* Lower Map Area: Integrated Information Strip */}
              <div className="border-t border-[#00D9D0]/20 bg-[#0C1828]/85 px-4 sm:px-8 py-3.5 sm:py-4 flex items-center justify-around relative z-10 backdrop-blur-xs">
                {/* Metric 1: Continents */}
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#00D9D0] bg-[#00D9D0]/10 flex items-center justify-center text-[#00D9D0] shadow-[0_0_10px_rgba(0,217,208,0.2)] flex-shrink-0">
                    <Globe className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <div className="text-lg sm:text-2xl font-black text-white leading-none">
                      3
                    </div>
                    <div className="text-[11px] sm:text-[12px] text-[#8A9AB2] font-medium leading-tight mt-0.5">
                      Continents
                    </div>
                  </div>
                </div>

                {/* Thin Vertical Separator */}
                <div className="w-[1px] h-7 sm:h-8 bg-[#00D9D0]/25" />

                {/* Metric 2: Key Regions */}
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#00D9D0] bg-[#00D9D0]/10 flex items-center justify-center text-[#00D9D0] shadow-[0_0_10px_rgba(0,217,208,0.2)] flex-shrink-0">
                    <MapPin className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <div className="text-lg sm:text-2xl font-black text-white leading-none">
                      4
                    </div>
                    <div className="text-[11px] sm:text-[12px] text-[#8A9AB2] font-medium leading-tight mt-0.5">
                      Key Regions
                    </div>
                  </div>
                </div>

                {/* Thin Vertical Separator */}
                <div className="w-[1px] h-7 sm:h-8 bg-[#00D9D0]/25" />

                {/* Metric 3: Regulatory Ready */}
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#00D9D0] bg-[#00D9D0]/10 flex items-center justify-center text-[#00D9D0] shadow-[0_0_10px_rgba(0,217,208,0.2)] flex-shrink-0">
                    <ShieldCheck className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <div className="text-[13px] sm:text-[14px] font-bold text-white leading-tight">
                      Regulatory
                    </div>
                    <div className="text-[11px] sm:text-[12px] text-[#8A9AB2] font-medium leading-tight mt-0.5">
                      Ready
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* RIGHT: Four Regional Information Panels */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-3.5 sm:gap-4">
            {regions.map((region) => {
              const Icon = region.icon;
              const isCyan = region.accentColor === '#00D9D0';

              return (
                <div
                  key={region.id}
                  className="bg-[#F4FAFD] border border-[#B9DDED] rounded-xl sm:rounded-2xl p-4 sm:p-4.5 relative overflow-hidden flex items-center justify-between shadow-[0_2px_10px_rgba(15,26,46,0.03)] hover:border-[#00D9D0] hover:shadow-[0_4px_18px_rgba(0,217,208,0.12)] transition-all duration-200 group flex-1"
                >
                  {/* Narrow colored vertical accent line on LEFT edge (alternating #00D9D0 and #168BFF) */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-2xl"
                    style={{ backgroundColor: region.accentColor }}
                  />

                  {/* Subtle right-side silhouette texture */}
                  <div className="pointer-events-none absolute right-12 sm:right-14 top-0 bottom-0 w-32 sm:w-40 flex items-center justify-end overflow-hidden">
                    {region.silhouette}
                  </div>

                  {/* Left Content Area: Icon + Titles */}
                  <div className="flex items-start gap-3.5 pl-1.5 sm:pl-2 relative z-10 max-w-[80%] sm:max-w-[82%]">
                    {/* Circular Icon Container */}
                    <div
                      className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center flex-shrink-0 shadow-2xs mt-0.5 group-hover:scale-105 transition-transform duration-200"
                      style={{
                        backgroundColor: region.iconBg,
                        borderColor: isCyan ? '#00D9D0' : '#168BFF',
                        color: isCyan ? '#00D9D0' : '#168BFF',
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Regional Title and Description */}
                    <div>
                      <h3 className="text-[15.5px] sm:text-[16.5px] font-bold text-[#1A2742] leading-snug tracking-tight">
                        {region.title}
                      </h3>
                      <p className="text-[12.5px] sm:text-[13px] text-[#4A5568] leading-relaxed mt-1 font-normal">
                        {region.description}
                      </p>
                    </div>
                  </div>

                  {/* Right Arrow Indicator */}
                  <div className="relative z-10 flex-shrink-0 pr-1">
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border bg-white/90 flex items-center justify-center transition-all duration-150 shadow-2xs group-hover:translate-x-0.5 ${
                        isCyan
                          ? 'border-[#00D9D0]/60 text-[#00D9D0] group-hover:bg-[#00D9D0] group-hover:text-white'
                          : 'border-[#168BFF]/60 text-[#168BFF] group-hover:bg-[#168BFF] group-hover:text-white'
                      }`}
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
