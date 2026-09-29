import React from 'react';
import {
  Layers,
  SlidersHorizontal,
  Link2,
  Headphones,
  ArrowRight
} from 'lucide-react';
import oracleLogo from '../assets/images/oracle-logo.svg';
import bankingImg from '../assets/images/banking_building_1789978997623.jpg';
import laptopImg from '../assets/images/laptop_code_1789979016798.jpg';
import networkImg from '../assets/images/global_network_1789979029531.jpg';
import supportImg from '../assets/images/support_headset_1789979043585.jpg';

export default function OraclePartnership() {
  const capabilities = {
    flexcube: {
      id: 'flexcube',
      title: 'Oracle FLEXCUBE',
      description: 'Proven core banking platform for modern financial institutions.',
      icon: Layers,
      image: bankingImg,
    },
    implementation: {
      id: 'implementation',
      title: 'Implementation & Customization',
      description: 'Tailored solutions to meet unique business needs.',
      icon: SlidersHorizontal,
      image: laptopImg,
    },
    integration: {
      id: 'integration',
      title: 'Integration',
      description: 'Seamless connectivity with existing systems and channels.',
      icon: Link2,
      image: networkImg,
    },
    support: {
      id: 'support',
      title: 'Managed Support',
      description: 'Reliable, proactive support for uninterrupted operations.',
      icon: Headphones,
      image: supportImg,
    },
  };

  const renderCapabilityCard = (item, side = 'left') => {
    const Icon = item.icon;
    return (
      <div
        key={item.id}
        className="relative group w-full bg-[#08222E]/85 backdrop-blur-md border border-[#00D9D0]/30 hover:border-[#00D9D0]/70 rounded-2xl p-5 sm:p-6 transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.45)] hover:shadow-[0_0_25px_rgba(0,217,208,0.2)] overflow-hidden"
      >
        {/* Angled corner accent matching enterprise reference */}
        <div
          className={`absolute top-0 ${
            side === 'left' ? 'left-0' : 'right-0'
          } w-8 h-8 pointer-events-none opacity-40`}
          style={{
            background:
              side === 'left'
                ? 'linear-gradient(135deg, #00D9D0 0%, transparent 50%)'
                : 'linear-gradient(225deg, #00D9D0 0%, transparent 50%)',
          }}
        />

        {/* Right side background image with smooth dark gradient overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-[46%] sm:w-[42%] pointer-events-none overflow-hidden rounded-r-2xl">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover object-center opacity-65 group-hover:scale-105 group-hover:opacity-85 transition-all duration-500 ease-out"
            referrerPolicy="no-referrer"
          />
          {/* Subtle multi-stop gradient mask so text remains pristine and readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#08222E] via-[#08222E]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08222E]/70 via-transparent to-[#08222E]/40" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col justify-center min-h-[105px] max-w-[72%] sm:max-w-[65%]">
          <div className="flex items-start gap-3.5">
            {/* Cyan circular outlined icon container */}
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#00D9D0] bg-[#00D9D0]/10 flex items-center justify-center text-[#00D9D0] shadow-[0_0_14px_rgba(0,217,208,0.25)] flex-shrink-0 mt-0.5 group-hover:scale-105 transition-transform duration-200">
              <Icon className="w-5 h-5" />
            </div>

            <div>
              <h3 className="text-[16px] sm:text-[17.5px] font-bold text-white leading-snug tracking-tight">
                {item.title}
              </h3>
              <p className="text-[12.5px] sm:text-[13px] text-[#B8CAD3] leading-relaxed mt-1 font-normal">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="partners"
      className="bg-[#0E2737] text-white py-16 sm:py-20 lg:py-24 border-b border-[#144254] relative overflow-hidden"
    >
      {/* 1. Subtle Background Decorations */}
      {/* Central radial glow behind the Oracle center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(0,217,208,0.12) 0%, rgba(14,39,55,0) 70%)',
        }}
      />

      {/* Sparse subtle glowing nodes in the deep background */}
      <div className="absolute top-28 left-[10%] w-1.5 h-1.5 rounded-full bg-[#00D9D0] shadow-[0_0_10px_#00D9D0] opacity-50 pointer-events-none" />
      <div className="absolute top-44 right-[12%] w-1.5 h-1.5 rounded-full bg-[#00D9D0] shadow-[0_0_10px_#00D9D0] opacity-40 pointer-events-none" />
      <div className="absolute bottom-36 left-[8%] w-1 h-1 rounded-full bg-[#FF6B35] shadow-[0_0_8px_#FF6B35] opacity-60 pointer-events-none" />
      <div className="absolute bottom-40 right-[15%] w-1 h-1 rounded-full bg-[#FF6B35] shadow-[0_0_8px_#FF6B35] opacity-60 pointer-events-none" />

      {/* Bottom-left flowing cyan waves */}
      <svg
        className="absolute bottom-0 left-0 w-[380px] sm:w-[500px] h-[220px] sm:h-[300px] pointer-events-none opacity-20 z-0"
        viewBox="0 0 500 300"
        fill="none"
      >
        <path
          d="M-50,300 C80,280 180,220 240,150 C300,80 380,40 500,20"
          stroke="#00D9D0"
          strokeWidth="1"
        />
        <path
          d="M-50,300 C70,260 170,200 230,130 C290,60 370,30 500,10"
          stroke="#00D9D0"
          strokeWidth="0.8"
        />
        <path
          d="M-50,300 C60,240 160,180 220,110 C280,40 360,20 500,0"
          stroke="#00D9D0"
          strokeWidth="0.6"
        />
        <path
          d="M-50,300 C90,290 190,240 250,170 C310,100 390,50 500,30"
          stroke="#00D9D0"
          strokeWidth="0.7"
        />
      </svg>

      {/* Bottom-right flowing cyan waves */}
      <svg
        className="absolute bottom-0 right-0 w-[380px] sm:w-[500px] h-[220px] sm:h-[300px] pointer-events-none opacity-20 z-0"
        viewBox="0 0 500 300"
        fill="none"
      >
        <path
          d="M550,300 C420,280 320,220 260,150 C200,80 120,40 0,20"
          stroke="#00D9D0"
          strokeWidth="1"
        />
        <path
          d="M550,300 C430,260 330,200 270,130 C210,60 130,30 0,10"
          stroke="#00D9D0"
          strokeWidth="0.8"
        />
        <path
          d="M550,300 C440,240 340,180 280,110 C220,40 140,20 0,0"
          stroke="#00D9D0"
          strokeWidth="0.6"
        />
        <path
          d="M550,300 C410,290 310,240 250,170 C190,100 110,50 0,30"
          stroke="#00D9D0"
          strokeWidth="0.7"
        />
      </svg>

      {/* 2. Main Content Container */}
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          {/* Eyebrow with horizontal cyan lines and dots */}
          <div className="inline-flex items-center justify-center gap-3 mb-3">
            <div className="w-10 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#00D9D0]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#00D9D0] shadow-[0_0_6px_#00D9D0]" />
            <span className="text-[11.5px] sm:text-[12.5px] font-bold tracking-[0.25em] text-[#00D9D0] uppercase select-none">
              ORACLE PARTNERSHIP
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#00D9D0] shadow-[0_0_6px_#00D9D0]" />
            <div className="w-10 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#00D9D0]" />
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-[1.18] tracking-tight mb-4">
            <span className="text-white block">Powering Banking Innovation</span>
            <span className="text-[#00D9D0] block">with Oracle <span className="text-[#FF6B35]">Technology</span></span>
          </h2>

          {/* Existing Oracle partnership description */}
          <p className="text-[15px] sm:text-[16px] text-[#B8CAD3] leading-relaxed max-w-2xl mx-auto font-normal">
            Syfinor delivers technology solutions and services around Oracle banking platforms, helping financial institutions implement, integrate, customize and support their core banking environments.
          </p>
        </div>

        {/* 3. Main Ecosystem Area */}
        {/* Desktop View (lg and above): 4 Connected Panels around the Orbital Center */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-6 xl:gap-8 items-center relative">
          {/* LEFT COLUMN: Top-Left (Oracle FLEXCUBE) and Bottom-Left (Integration) */}
          <div className="lg:col-span-4 flex flex-col gap-10 xl:gap-14 relative z-10">
            {renderCapabilityCard(capabilities.flexcube, 'left')}
            {renderCapabilityCard(capabilities.integration, 'left')}
          </div>

          {/* CENTER COLUMN: Central Oracle Technology Hub with Concentric Orbital System */}
          <div className="lg:col-span-4 flex items-center justify-center relative min-h-[420px] xl:min-h-[460px]">
            {/* Central Orbital Rings and Connector SVG */}
            <div className="relative w-[380px] h-[380px] xl:w-[420px] xl:h-[420px] flex items-center justify-center">
              {/* Outer connector lines SVG that bridges the panels to the orbital rings */}
              <svg
                className="absolute -inset-16 w-[calc(100%+128px)] h-[calc(100%+128px)] pointer-events-none z-0"
                viewBox="0 0 540 540"
                fill="none"
              >
                {/* Connector Top-Left (from FLEXCUBE) */}
                <path
                  d="M 10 135 L 120 135 L 175 190"
                  stroke="#00D9D0"
                  strokeWidth="1.5"
                  strokeOpacity="0.8"
                  filter="drop-shadow(0 0 4px rgba(0,217,208,0.5))"
                />
                <circle cx="10" cy="135" r="3.5" fill="#00D9D0" />
                <circle cx="175" cy="190" r="3.5" fill="#00D9D0" />

                {/* Connector Bottom-Left (from Integration) */}
                <path
                  d="M 10 405 L 120 405 L 175 350"
                  stroke="#00D9D0"
                  strokeWidth="1.5"
                  strokeOpacity="0.8"
                  filter="drop-shadow(0 0 4px rgba(0,217,208,0.5))"
                />
                <circle cx="10" cy="405" r="3.5" fill="#00D9D0" />
                <circle cx="175" cy="350" r="3.5" fill="#00D9D0" />

                {/* Connector Top-Right (from Implementation & Customization) */}
                <path
                  d="M 530 135 L 420 135 L 365 190"
                  stroke="#00D9D0"
                  strokeWidth="1.5"
                  strokeOpacity="0.8"
                  filter="drop-shadow(0 0 4px rgba(0,217,208,0.5))"
                />
                <circle cx="530" cy="135" r="3.5" fill="#00D9D0" />
                <circle cx="365" cy="190" r="3.5" fill="#00D9D0" />

                {/* Connector Bottom-Right (from Managed Support) */}
                <path
                  d="M 530 405 L 420 405 L 365 350"
                  stroke="#00D9D0"
                  strokeWidth="1.5"
                  strokeOpacity="0.8"
                  filter="drop-shadow(0 0 4px rgba(0,217,208,0.5))"
                />
                <circle cx="530" cy="405" r="3.5" fill="#00D9D0" />
                <circle cx="365" cy="350" r="3.5" fill="#00D9D0" />
              </svg>

              {/* Orbital Ring 1: Outer cyan ring with nodes */}
              <div className="absolute inset-0 rounded-full border border-[#00D9D0]/30 animate-oracle-orbit pointer-events-none">
                {/* Small cyan nodes on outer ring */}
                <div className="absolute top-1/2 -left-1 w-2.5 h-2.5 rounded-full bg-[#00D9D0] shadow-[0_0_8px_#00D9D0] -translate-y-1/2" />
                <div className="absolute top-1/2 -right-1 w-2.5 h-2.5 rounded-full bg-[#00D9D0] shadow-[0_0_8px_#00D9D0] -translate-y-1/2" />
                {/* Small orange node */}
                <div className="absolute top-[18%] right-[14%] w-2 h-2 rounded-full bg-[#FF6B35] shadow-[0_0_8px_#FF6B35]" />
              </div>

              {/* Orbital Ring 2: Middle dotted circular path */}
              <div className="absolute inset-7 rounded-full border border-[#00D9D0]/25 border-dashed animate-oracle-orbit-reverse pointer-events-none">
                <div className="absolute bottom-[20%] left-[16%] w-2 h-2 rounded-full bg-[#00D9D0] shadow-[0_0_6px_#00D9D0]" />
                <div className="absolute top-[22%] left-[20%] w-1.5 h-1.5 rounded-full bg-[#FF6B35] shadow-[0_0_6px_#FF6B35]" />
              </div>

              {/* Orbital Ring 3: Inner solid/segmented ring */}
              <div className="absolute inset-14 rounded-full border border-[#00D9D0]/35 pointer-events-none shadow-[0_0_20px_rgba(0,217,208,0.15)]" />

              {/* Circular Oracle Technology Hub Centerpiece */}
              <div className="relative z-10 w-44 h-44 xl:w-48 xl:h-48 rounded-full bg-[#081E2B] border-2 border-[#00D9D0] flex flex-col items-center justify-center p-6 text-center shadow-[0_0_35px_rgba(0,217,208,0.3),inset_0_0_20px_rgba(0,217,208,0.2)]">
                {/* Official Oracle SVG Asset */}
                <img
                  src={oracleLogo}
                  alt="Oracle"
                  className="oracle-logo w-28 xl:w-32 h-auto select-none"
                />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Top-Right (Implementation & Customization) and Bottom-Right (Managed Support) */}
          <div className="lg:col-span-4 flex flex-col gap-10 xl:gap-14 relative z-10">
            {renderCapabilityCard(capabilities.implementation, 'right')}
            {renderCapabilityCard(capabilities.support, 'right')}
          </div>
        </div>

        {/* Mobile & Tablet Responsive View: Centerpiece on top, stacked capability panels below */}
        <div className="lg:hidden flex flex-col items-center gap-8">
          {/* Circular Oracle Centerpiece for mobile/tablet */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center my-4">
            {/* Outer orbital rings */}
            <div className="absolute inset-0 rounded-full border border-[#00D9D0]/30 animate-oracle-orbit pointer-events-none">
              <div className="absolute top-1/2 -left-1 w-2.5 h-2.5 rounded-full bg-[#00D9D0] shadow-[0_0_8px_#00D9D0] -translate-y-1/2" />
              <div className="absolute top-[18%] right-[14%] w-2 h-2 rounded-full bg-[#FF6B35] shadow-[0_0_8px_#FF6B35]" />
            </div>
            <div className="absolute inset-5 rounded-full border border-[#00D9D0]/25 border-dashed pointer-events-none" />

            {/* Centerpiece circle */}
            <div className="relative z-10 w-40 h-40 sm:w-44 sm:h-44 rounded-full bg-[#081E2B] border-2 border-[#00D9D0] flex flex-col items-center justify-center p-5 text-center shadow-[0_0_30px_rgba(0,217,208,0.3)]">
              <img
                src={oracleLogo}
                alt="Oracle"
                className="oracle-logo w-26 sm:w-28 h-auto select-none"
              />
            </div>
          </div>

          {/* Vertically stacked cards */}
          <div className="w-full max-w-xl flex flex-col gap-5">
            {renderCapabilityCard(capabilities.flexcube, 'left')}
            {renderCapabilityCard(capabilities.implementation, 'right')}
            {renderCapabilityCard(capabilities.integration, 'left')}
            {renderCapabilityCard(capabilities.support, 'right')}
          </div>
        </div>

        {/* 4. Bottom CTA and Oracle Partner Area */}
        <div className="mt-14 sm:mt-18 lg:mt-20 flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 relative z-10">
          {/* Left decorative line with cyan node */}
          <div className="hidden lg:flex items-center gap-2">
            <div className="w-20 xl:w-28 h-[1px] bg-gradient-to-r from-transparent to-[#00D9D0]/70" />
            <div className="w-2 h-2 rounded-full bg-[#00D9D0] shadow-[0_0_8px_#00D9D0]" />
          </div>

          {/* Left CTA Pill Button */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-2.5 rounded-full border border-[#00D9D0] bg-[#092230]/70 text-[#00D9D0] text-[13.5px] sm:text-[14px] font-semibold tracking-wide hover:bg-[#00D9D0]/15 hover:shadow-[0_0_20px_rgba(0,217,208,0.35)] transition-all duration-200 active:scale-95 shadow-sm"
          >
            <span>Explore Our Oracle Expertise</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Vertical Divider */}
          <div className="hidden md:block w-[1.5px] h-8 bg-[#00D9D0]/30" />

          {/* Right Oracle Partner Brand Info directly on #0E2737 */}
          <div className="flex items-center gap-3.5">
            <img
              src={oracleLogo}
              alt="Oracle"
              className="h-5 sm:h-6 w-auto select-none"
            />
            <div className="flex flex-col text-left">
              <span className="text-[13px] sm:text-[14px] font-bold text-white leading-tight tracking-tight">
                Oracle Partner
              </span>
              <span className="text-[11px] sm:text-[11.5px] text-[#A3BFCC] leading-tight mt-0.5">
                Delivering technology solutions powered by Oracle FLEXCUBE
              </span>
            </div>
          </div>

          {/* Right decorative line with cyan node */}
          <div className="hidden lg:flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#00D9D0] shadow-[0_0_8px_#00D9D0]" />
            <div className="w-20 xl:w-28 h-[1px] bg-gradient-to-l from-transparent to-[#00D9D0]/70" />
          </div>
        </div>

        {/* 5. Bottom Capability Navigation Line */}
        <div className="mt-8 sm:mt-10 flex items-center justify-center gap-3 sm:gap-4 text-[12px] sm:text-[13px] text-[#8EAAB8] font-medium tracking-wide">
          <div className="w-10 sm:w-20 h-[1px] bg-gradient-to-r from-transparent to-[#00D9D0]/40" />
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 select-none">
            <span className="text-[#C3D6E0] hover:text-white transition-colors">Oracle FLEXCUBE</span>
            <span className="text-[#00D9D0] font-bold text-[10px]">•</span>
            <span className="text-[#C3D6E0] hover:text-white transition-colors">Implementation & Customization</span>
            <span className="text-[#00D9D0] font-bold text-[10px]">•</span>
            <span className="text-[#C3D6E0] hover:text-white transition-colors">Integration</span>
            <span className="text-[#00D9D0] font-bold text-[10px]">•</span>
            <span className="text-[#C3D6E0] hover:text-white transition-colors">Managed Support</span>
          </div>
          <div className="w-10 sm:w-20 h-[1px] bg-gradient-to-l from-transparent to-[#00D9D0]/40" />
        </div>
      </div>
    </section>
  );
}
