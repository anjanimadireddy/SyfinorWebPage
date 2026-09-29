import React, { useState } from 'react';
import { Cpu, ArrowRight, ChevronDown, Landmark, Bug, Sparkles } from 'lucide-react';

// "More Products Coming Soon" card. Clicking IN DEVELOPMENT (or the arrow) reveals the products in the pipeline.
const pipeline = [
  {
    name: 'SyFiS',
    tagline: 'Intelligent Core Banking',
    icon: Landmark,
    description:
      'A modern, microservices-based core banking platform with built-in maker-checker controls, multi-entity operations and configurable, metadata-driven screens — featuring SyFi, an embedded AI assistant for bank users.',
    tags: ['Core Banking', 'AI Assistant'],
  },
  {
    name: 'SyBugs',
    tagline: 'Client Support & Issue Tracking',
    icon: Bug,
    description:
      'A secure project and issue-tracking portal where clients and Syfinor teams log, triage and follow production issues, change requests and deliverables — with role-based client access and shared dashboards.',
    tags: ['Support Portal', 'Issue Tracking'],
  },
];

export default function ComingSoonProducts({ className = '' }) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((v) => !v);

  return (
    <div className={`bg-[#EAF6FF] border border-[#BCE1F5] rounded-[22px] p-6 sm:p-8 lg:p-9 text-[#1A2742] shadow-[0_8px_28px_rgba(15,26,46,0.14)] hover:border-[#00D9D0] hover:shadow-[0_0_10px_rgba(0,217,208,0.32),0_0_24px_rgba(0,217,208,0.20),0_8px_28px_rgba(15,26,46,0.14)] relative overflow-hidden group transition-[border-color,box-shadow] duration-300 ease-in-out ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#EAF6FF]/30 to-[#DCEEFB]/60 pointer-events-none" />
      <svg className="absolute right-[-40px] top-0 w-[240px] h-[240px] pointer-events-none select-none opacity-45" viewBox="0 0 240 240" fill="none" aria-hidden="true">
        <circle cx="160" cy="120" r="105" stroke="#00D9D0" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="160" cy="120" r="75" stroke="#00D9D0" strokeWidth="1.2" />
        <circle cx="65" cy="85" r="3.5" fill="#00D9D0" />
        <circle cx="88" cy="145" r="3" fill="#00D9D0" />
      </svg>

      <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
        <div className="w-14 h-14 flex-shrink-0 rounded-full bg-[#D4EDFC] p-1.5 flex items-center justify-center shadow-2xs transition-all duration-300 ease-in-out group-hover:shadow-[0_0_14px_rgba(0,217,208,0.35)]">
          <div className="w-full h-full rounded-full bg-[#BEE5FA] p-1.5 flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-[#00D9D0] flex items-center justify-center shadow-xs">
              <Cpu className="w-5 h-5 text-[#131F35]" />
            </div>
          </div>
        </div>

        <div className="flex-1">
          <h3 className="text-2xl sm:text-[26px] font-extrabold text-[#1A2742] mb-2 tracking-tight">More Products Coming Soon</h3>
          <p className="text-[14px] sm:text-[14.5px] leading-relaxed text-[#3D5070] font-normal max-w-3xl">
            Syfinor is actively developing additional products targeting core banking operations, integration infrastructure, and intelligent automation for financial institutions.
          </p>
        </div>

        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            type="button"
            onClick={toggle}
            aria-expanded={open}
            aria-controls="products-in-development"
            className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-[#FF6B35] text-[12px] font-bold tracking-wider uppercase shadow-2xs transition-all duration-300 ease-in-out cursor-pointer ${
              open ? 'bg-[#FF6B35] text-white shadow-[0_0_12px_rgba(255,107,53,0.35)]' : 'bg-white/80 text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white hover:shadow-[0_0_12px_rgba(255,107,53,0.35)]'
            }`}
          >
            IN DEVELOPMENT
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
          </button>
          <button
            type="button"
            onClick={toggle}
            aria-label={open ? 'Hide products in development' : 'Show products in development'}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#00D9D0] bg-white flex items-center justify-center text-[#00D9D0] shadow-xs hover:bg-[#00D9D0] hover:text-white hover:shadow-[0_0_12px_rgba(0,217,208,0.35)] transition-all duration-300 ease-in-out cursor-pointer"
          >
            <ArrowRight className={`w-4 h-4 sm:w-4.5 sm:h-4.5 transition-transform duration-300 ${open ? 'rotate-90' : ''}`} />
          </button>
        </div>
      </div>

      {/* Products in development — revealed on click */}
      <div
        id="products-in-development"
        className={`relative z-10 grid transition-[grid-template-rows,opacity,margin] duration-500 ease-in-out ${open ? 'grid-rows-[1fr] opacity-100 mt-7' : 'grid-rows-[0fr] opacity-0 mt-0'}`}
        aria-hidden={!open}
      >
        <div className="overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-6 border-t border-[#C9E6F5]">
            {pipeline.map(({ name, tagline, icon: Icon, description, tags }) => (
              <div key={name} className="bg-white/85 border border-[#C9E6F5] rounded-2xl p-5 sm:p-6 flex gap-4 hover:border-[#FF6B35]/60 transition-colors duration-300">
                <div className="w-11 h-11 flex-shrink-0 rounded-xl bg-[#16233A] border border-[#00D9D0]/50 flex items-center justify-center text-[#00D9D0]">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1 mb-1.5">
                    <h4 className="text-[19px] font-extrabold text-[#1A2742] tracking-tight">{name}</h4>
                    <span className="text-[12.5px] font-semibold text-[#00A39B]">{tagline}</span>
                  </div>
                  <p className="text-[13.5px] leading-relaxed text-[#3D5070] mb-3">{description}</p>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((t) => (
                      <span key={t} className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#FFF1EB] text-[#E4571F] text-[11px] font-bold tracking-wide uppercase">
                        <Sparkles className="w-3 h-3" />
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
