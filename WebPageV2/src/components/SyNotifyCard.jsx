import React from 'react';
import { BellRing, Mail, MessageCircle, Send, Smartphone, Landmark, CreditCard, Globe, Share2 } from 'lucide-react';

// Product card: SyNotify — centralized notification hub for the banking ecosystem.
export default function SyNotifyCard({ className = '' }) {
  const sources = [
    { label: 'Core Banking', icon: Landmark },
    { label: 'Payments', icon: CreditCard },
    { label: 'Digital Channels', icon: Globe },
  ];
  const channels = [
    { label: 'Email', icon: Mail },
    { label: 'SMS', icon: Smartphone },
    { label: 'WhatsApp', icon: MessageCircle },
    { label: 'Telegram', icon: Send },
  ];

  return (
    <div className={`bg-[#EAF6FF] border border-[#BCE1F5] rounded-[22px] p-6 sm:p-8 lg:p-9 text-[#1A2742] flex flex-col justify-between shadow-[0_8px_28px_rgba(15,26,46,0.14)] hover:border-[#00D9D0] hover:shadow-[0_0_10px_rgba(0,217,208,0.32),0_0_24px_rgba(0,217,208,0.20),0_8px_28px_rgba(15,26,46,0.14)] relative overflow-hidden group transition-[border-color,box-shadow] duration-300 ease-in-out ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#EAF6FF]/40 to-[#D8EDFC]/60 pointer-events-none" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10 flex-1">
        {/* Text */}
        <div className="md:col-span-7 flex flex-col justify-between h-full">
          <div>
            <div className="w-14 h-14 rounded-full bg-[#D4EDFC] p-1.5 flex items-center justify-center mb-5 shadow-2xs transition-all duration-300 ease-in-out group-hover:shadow-[0_0_14px_rgba(0,217,208,0.35)]">
              <div className="w-full h-full rounded-full bg-[#BEE5FA] p-1.5 flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-[#00D9D0] flex items-center justify-center shadow-xs">
                  <BellRing className="w-5 h-5 text-[#131F35]" />
                </div>
              </div>
            </div>

            <h3 className="text-2xl sm:text-[28px] font-extrabold text-[#1A2742] mb-3 tracking-tight">SyNotify</h3>

            <p className="text-[14px] sm:text-[14.5px] leading-relaxed text-[#3D5070] font-normal mb-6">
              A centralized notification platform for the banking ecosystem. SyNotify lets core banking, payments and any other system reach customers through one gateway — delivering alerts, OTPs and statements over Email, SMS, WhatsApp and Telegram, with approved templates, delivery tracking and a full audit trail.
            </p>
          </div>

          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00D9D0] bg-white/80 text-[#00A39B] text-[12px] font-bold tracking-wider uppercase shadow-2xs select-none">
              <Share2 className="w-3.5 h-3.5" />
              <span>NOTIFICATIONS</span>
            </span>
          </div>
        </div>

        {/* Illustration: systems → SyNotify hub → channels */}
        <div className="md:col-span-5 flex items-center justify-center select-none pt-2 md:pt-0" aria-hidden="true">
          <div className="relative w-full max-w-[250px] flex items-center justify-between gap-2">
            <div className="flex flex-col gap-2.5">
              {sources.map(({ label, icon: Icon }) => (
                <div key={label} title={label} className="w-9 h-9 rounded-lg bg-[#16233A] border border-[#00D9D0]/50 flex items-center justify-center text-[#00D9D0] shadow-xs">
                  <Icon className="w-4 h-4" />
                </div>
              ))}
            </div>

            <svg viewBox="0 0 40 120" className="h-[120px] w-6 flex-shrink-0" fill="none">
              <path d="M0 18 C 22 18, 18 60, 40 60 M0 60 L40 60 M0 102 C 22 102, 18 60, 40 60" stroke="#00B89F" strokeWidth="1.4" strokeDasharray="3 3" className="animate-map-dash" />
            </svg>

            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 rounded-2xl bg-[#00D9D0]/30 blur-md" />
              <div className="relative w-[68px] h-[68px] rounded-2xl bg-[#0C1828] border-[1.5px] border-[#00D9D0] flex flex-col items-center justify-center text-[#00D9D0] shadow-md">
                <BellRing className="w-6 h-6" />
                <span className="text-[8.5px] font-bold tracking-wider text-white mt-1">SyNotify</span>
              </div>
            </div>

            <svg viewBox="0 0 40 150" className="h-[150px] w-6 flex-shrink-0" fill="none">
              <path d="M0 75 C 20 75, 20 18, 40 18 M0 75 C 20 75, 20 57, 40 57 M0 75 C 20 75, 20 94, 40 94 M0 75 C 20 75, 20 132, 40 132" stroke="#FF6B35" strokeOpacity="0.8" strokeWidth="1.4" strokeDasharray="3 3" className="animate-map-dash" />
            </svg>

            <div className="flex flex-col gap-2">
              {channels.map(({ label, icon: Icon }) => (
                <div key={label} title={label} className="w-9 h-9 rounded-full bg-white border border-[#00D9D0] flex items-center justify-center text-[#00A39B] shadow-xs">
                  <Icon className="w-4 h-4" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
