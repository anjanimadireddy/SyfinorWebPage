import React, { useState } from 'react';
import { Landmark, ShieldAlert, Cpu, GraduationCap } from 'lucide-react';

export default function ToolsTechnology() {
  const [activeFilter, setActiveFilter] = useState('All Services');

  const filters = [
    'All Services',
    'Core Banking',
    'Compliance',
    'Managed Support',
    'Training',
  ];

  const tools = [
    {
      id: 'flexcube',
      title: 'FLEXCUBE Implementation & Customization',
      category: 'Core Banking',
      icon: Landmark,
      description:
        'End-to-end Oracle FLEXCUBE deployment, customization, and integration. From environment setup and data migration to SOA/REST integrations and payment configurations (SWIFT MT/MX, ISO 20022, ACH, RTGS).',
      tag: 'CORE BANKING',
    },
    {
      id: 'sanction',
      title: 'Payment Sanction Screening',
      category: 'Compliance',
      icon: ShieldAlert,
      description:
        'Architecture and integration connecting Oracle Banking Payments (OBPM) with AML and sanction screening engines. Regulatory compliance for cross-border transactions with configurable rules and audit-ready reporting.',
      tag: 'COMPLIANCE',
    },
    {
      id: 'managed',
      title: 'Managed Service Support',
      category: 'Managed Support',
      icon: Cpu,
      description:
        'Ongoing managed support for live banking environments — covering incident management, L2/L3 production issue resolution, proactive health checks, patch coordination, and SLA-backed response for Oracle FLEXCUBE and OBPM systems.',
      tag: 'MANAGED SUPPORT',
    },
    {
      id: 'training',
      title: 'Training & Knowledge Transfer',
      category: 'Training',
      icon: GraduationCap,
      description:
        'Structured training programs tailored for both technical teams and business users — covering Oracle FLEXCUBE operations, customization frameworks, integration patterns, and payment processing. Delivered on-site or remotely.',
      tag: 'TRAINING',
    },
  ];

  const filteredTools =
    activeFilter === 'All Services'
      ? tools
      : tools.filter((t) => t.category === activeFilter);

  return (
    <section id="services" className="bg-white py-14 sm:py-16 lg:py-20 border-b border-slate-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-10">
          <div className="text-[12px] font-bold tracking-[0.2em] text-[#00B89F] uppercase mb-2">
            OUR PLATFORM
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0D3240] tracking-tight mb-3">
            Tools & Technology
          </h2>
          <p className="text-[15px] sm:text-[16.5px] text-[#41687A] leading-relaxed">
            From core banking implementation to managed support and team training — Syfinor covers the full service lifecycle for financial institutions running Oracle banking platforms.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-lg text-[13.5px] font-semibold transition-all duration-150 ${
                activeFilter === filter
                  ? 'bg-[#00B89F] text-white shadow-xs'
                  : 'bg-[#EAF6FF] text-[#0D3240] border border-[#CDE8F7] hover:bg-[#DDF1FB]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Four Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 xl:gap-7">
          {filteredTools.map((tool) => {
            const Icon = tool.icon;
            return (
              <div
                key={tool.id}
                className="bg-[#EAF6FF] border border-[#C2E3F5] rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:border-[#00D9D0] hover:shadow-[0_0_18px_rgba(0,217,208,0.25)] hover:-translate-y-[2px] transition-all duration-300 ease-in-out group"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-white border border-[#BCE1F5] flex items-center justify-center text-[#00B89F] shadow-2xs mb-5">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-[18px] sm:text-[19px] font-bold text-[#0D3240] mb-3 leading-snug tracking-tight">
                    {tool.title}
                  </h3>

                  <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-[#2C5263] font-normal mb-6">
                    {tool.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#D5ECF8] flex items-center">
                  <span className="text-[11.5px] font-bold text-[#00B89F] tracking-wider uppercase">
                    {tool.tag}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
