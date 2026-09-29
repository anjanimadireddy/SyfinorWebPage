import React from 'react';
import {
  Zap,
  GraduationCap,
  Wrench,
  UserCheck,
  Headphones,
  CheckCircle2,
  Clock,
  Activity
} from 'lucide-react';

export default function HowWeSupportYou() {
  const supportItems = [
    {
      title: 'Onboarding & Implementation',
      description:
        'Structured deployment covering system architecture, environment configuration, platform integration, and guided rollout across every phase of the project lifecycle.',
      icon: Zap,
    },
    {
      title: 'Training & Knowledge Transfer',
      description:
        'Comprehensive programs for technical and business teams — guided workshops, documentation, and hands-on sessions to build lasting internal capability.',
      icon: GraduationCap,
    },
    {
      title: 'Technical Support',
      description:
        'Responsive assistance for integration issues, production incidents, and performance optimization — keeping your systems stable and operations continuous.',
      icon: Wrench,
    },
    {
      title: 'Dedicated Account Management',
      description:
        'Professionals who understand your technology landscape and strategic goals — reviewing performance, planning enhancements, and aligning initiatives with business objectives.',
      icon: UserCheck,
    },
    {
      title: '24/7 Operations Support',
      description:
        'Around-the-clock operational support for mission-critical banking environments — monitoring, incident resolution, and coordination for uninterrupted operations.',
      icon: Headphones,
    },
  ];

  return (
    <section id="support" className="bg-[#0D3240] text-white py-14 sm:py-16 lg:py-20 border-b border-[#144254]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="text-[12px] font-bold tracking-[0.2em] text-[#00B89F] uppercase mb-2">
            CLIENT SUPPORT
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight mb-3">
            How We Support You
          </h2>
          <p className="text-[15px] sm:text-[16.5px] text-[#A6C9D7] leading-relaxed">
            From onboarding to ongoing operations, our dedicated support teams are with you every step of the way.
          </p>
        </div>

        {/* Two-Column Grid: Support List on Left, SLA Panel on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-start">
          {/* Left Column (7 cols): 5 Stacked Support Cards */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-4.5">
            {supportItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group bg-[#EAF6FF] border border-[#C2E3F5] rounded-xl p-5 sm:p-5.5 text-[#0D3240] flex items-start gap-4 shadow-xs hover:border-[#00D9D0] hover:shadow-[0_0_8px_rgba(0,217,208,0.20),0_0_20px_rgba(0,217,208,0.12)] hover:-translate-y-0.5 transition-[border-color,box-shadow,transform] duration-300 ease-in-out"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#BCE1F5] flex items-center justify-center text-[#00B89F] flex-shrink-0 shadow-2xs mt-0.5 transition-all duration-300 ease-in-out group-hover:border-[#00D9D0] group-hover:shadow-[0_0_8px_rgba(0,217,208,0.25)]">
                    <Icon className="w-4.5 h-4.5" />
                  </div>

                  <div>
                    <h3 className="text-[16.5px] font-bold text-[#0D3240] mb-1 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[13.5px] text-[#2C5263] leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column (5 cols): Enterprise-Grade SLA Panel */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="bg-[#EAF6FF] border border-[#C2E3F5] rounded-2xl p-7 text-[#0D3240] shadow-md relative hover:border-[#00D9D0] hover:shadow-[0_0_10px_rgba(0,217,208,0.22),0_0_24px_rgba(0,217,208,0.14),0_8px_24px_rgba(6,40,55,0.10)] hover:-translate-y-0.5 transition-[border-color,box-shadow,transform] duration-300 ease-in-out">
              {/* Top Accent Indicator */}
              <div className="w-12 h-1 bg-[#00B89F] rounded-full mb-6" />

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0D3240] tracking-tight leading-tight mb-1">
                Enterprise–Grade
              </h3>
              <div className="text-xl sm:text-2xl font-extrabold text-[#00B89F] tracking-tight mb-4">
                Service Level Agreements
              </div>

              <p className="text-[13.5px] text-[#345A6C] leading-relaxed mb-7 font-normal">
                We back our commitments with clearly defined SLAs tailored to mission-critical banking operations — so you always know what to expect.
              </p>

              {/* 2x2 SLA Cards */}
              <div className="grid grid-cols-2 gap-3.5">
                {/* 99.9% */}
                <div className="bg-white border border-[#C2E3F5] rounded-xl p-4 shadow-2xs hover:border-[#00D9D0] hover:shadow-[0_0_8px_rgba(0,217,208,0.20),0_0_16px_rgba(0,217,208,0.12)] hover:-translate-y-0.5 transition-[border-color,box-shadow,transform] duration-300 ease-in-out">
                  <div className="w-7 h-7 rounded-lg bg-[#EAF6FF] flex items-center justify-center text-[#00B89F] mb-2">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div className="text-2xl font-black text-[#0D3240] tracking-tight">
                    99.9%
                  </div>
                  <div className="text-[11.5px] font-medium text-[#466C7E] mt-0.5">
                    Target Uptime SLA
                  </div>
                </div>

                {/* <4hr */}
                <div className="bg-white border border-[#C2E3F5] rounded-xl p-4 shadow-2xs hover:border-[#00D9D0] hover:shadow-[0_0_8px_rgba(0,217,208,0.20),0_0_16px_rgba(0,217,208,0.12)] hover:-translate-y-0.5 transition-[border-color,box-shadow,transform] duration-300 ease-in-out">
                  <div className="w-7 h-7 rounded-lg bg-[#FFF2EC] flex items-center justify-center text-[#FF6B35] mb-2">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="text-2xl font-black text-[#FF6B35] tracking-tight">
                    &lt;4hr
                  </div>
                  <div className="text-[11.5px] font-medium text-[#466C7E] mt-0.5">
                    Critical Response
                  </div>
                </div>

                {/* <24hr */}
                <div className="bg-white border border-[#C2E3F5] rounded-xl p-4 shadow-2xs hover:border-[#00D9D0] hover:shadow-[0_0_8px_rgba(0,217,208,0.20),0_0_16px_rgba(0,217,208,0.12)] hover:-translate-y-0.5 transition-[border-color,box-shadow,transform] duration-300 ease-in-out">
                  <div className="w-7 h-7 rounded-lg bg-[#EAF6FF] flex items-center justify-center text-[#00B89F] mb-2">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div className="text-2xl font-black text-[#0D3240] tracking-tight">
                    &lt;24hr
                  </div>
                  <div className="text-[11.5px] font-medium text-[#466C7E] mt-0.5">
                    Standard Response
                  </div>
                </div>

                {/* 24/7 */}
                <div className="bg-white border border-[#C2E3F5] rounded-xl p-4 shadow-2xs hover:border-[#00D9D0] hover:shadow-[0_0_8px_rgba(0,217,208,0.20),0_0_16px_rgba(0,217,208,0.12)] hover:-translate-y-0.5 transition-[border-color,box-shadow,transform] duration-300 ease-in-out">
                  <div className="w-7 h-7 rounded-lg bg-[#EAF6FF] flex items-center justify-center text-[#00B89F] mb-2">
                    <Headphones className="w-4 h-4" />
                  </div>
                  <div className="text-2xl font-black text-[#0D3240] tracking-tight">
                    24/7
                  </div>
                  <div className="text-[11.5px] font-medium text-[#466C7E] mt-0.5">
                    Support Coverage
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
