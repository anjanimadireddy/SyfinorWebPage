import React, { useState } from 'react';
import { Calendar, ExternalLink, CheckCircle, X } from 'lucide-react';
import maheshPhoto from '../assets/images/MaheshVemani.png';
import venkataPhoto from '../assets/images/VenkataAnjaniPhoto.jpg';

export default function DirectorsHistory() {
  const [selectedLeader, setSelectedLeader] = useState(null);

  const leaders = [
    {
      id: 'mahesh',
      photo: maheshPhoto,
      photoPosition: '46% 22%',
      name: 'Mahesh Vemani',
      role: 'MANAGING DIRECTOR',
      bio: 'A banking technology program leader with 15+ years of experience delivering large-scale transformation initiatives for financial institutions across Africa, Latin America, and Asia. His leadership at Syfinor spans complex implementation programs, multidisciplinary team coordination, and enterprise banking and payment modernization projects.',
      dateText: 'Est. 2026',
      credentials: [
        '15+ Years Banking Technology Program Leadership',
        'Large-scale Core Banking Transformations across Africa, LatAm, & Asia',
        'Multi-regional Enterprise Integration & Modernization Programs',
        'High-reliability Financial Services Strategy & Execution',
      ],
    },
    {
      id: 'venkata',
      photo: venkataPhoto,
      photoPosition: '50% 25%',
      name: 'Venkata Anjani Kumar Madireddy',
      role: 'DIRECTOR',
      bio: 'A seasoned Oracle FLEXCUBE specialist with 15+ years of experience across Africa, USA, Latin America, and Asia. Previously at Oracle Financial Services Software and Sophos Solutions. Deep expertise in Oracle Databases, Java, PL/SQL, SOAP/REST integrations, data migrations, and regulatory payment frameworks including ACH, RTGS, SWIFT MT/MX, and ISO 20022.',
      dateText: 'Joined 2026',
      credentials: [
        'Former Oracle Financial Services Software (OFSS) Specialist',
        'Expertise: Oracle Databases, Java, PL/SQL, SOAP/REST Integrations',
        'Regulatory Payment Frameworks: ACH, RTGS, SWIFT MT/MX, and ISO 20022',
        'FLEXCUBE Core Banking Migration & Production Architecture',
      ],
    },
  ];

  return (
    <section id="leadership" className="bg-white py-14 sm:py-16 lg:py-20 border-b border-slate-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="text-[12px] font-bold tracking-[0.2em] text-[#00B89F] uppercase mb-2">
            LEADERSHIP
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0D3240] tracking-tight mb-3">
            Directors & History
          </h2>
          <p className="text-[15px] sm:text-[16.5px] text-[#41687A] leading-relaxed">
            Our leadership team brings deep industry expertise and a shared vision to drive Syfinor's growth and long-term success.
          </p>
        </div>

        {/* Two Reference Matched Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {leaders.map((leader) => (
            <div
              key={leader.id}
              className="bg-[#EDF7FD] border border-[#C2E3F5] rounded-2xl p-6 sm:p-8 lg:p-9 flex flex-col justify-between hover:border-[#00B89F]/50 transition-all duration-200"
            >
              <div className="flex flex-col flex-grow">
                {/* Upper row: Portrait & Title */}
                <div className="flex items-center gap-4 sm:gap-5 mb-5 sm:mb-6">
                  <div className="w-19 h-19 sm:w-21 sm:h-21 lg:w-22 lg:h-22 rounded-2xl overflow-hidden flex-shrink-0 border-2 border-white shadow-xs bg-slate-200">
                    <img
                      src={leader.photo}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: leader.photoPosition }}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-[23px] lg:text-[24px] font-bold text-[#0D3240] leading-snug tracking-tight">
                      {leader.name}
                    </h3>
                    <div className="text-[11.5px] sm:text-[12px] font-bold text-[#00B89F] tracking-[0.14em] uppercase mt-1">
                      {leader.role}
                    </div>
                  </div>
                </div>

                {/* Biography */}
                <p className="text-[14px] sm:text-[14.5px] leading-relaxed text-[#2C5263] font-normal mb-6 flex-grow">
                  {leader.bio}
                </p>
              </div>

              {/* Card Footer: Date on left, Key Credentials on right */}
              <div className="pt-4 border-t border-[#CCE8F7] flex items-center justify-between text-[12.5px] sm:text-[13px] mt-auto">
                <div className="flex items-center gap-1.5 text-[#3D6475] font-medium">
                  <Calendar className="w-4 h-4 text-[#00B89F]" strokeWidth={2} />
                  <span>{leader.dateText}</span>
                </div>

                <button
                  onClick={() => setSelectedLeader(leader)}
                  className="inline-flex items-center gap-1.5 text-[#00B89F] hover:text-[#009b85] font-semibold transition-colors cursor-pointer"
                >
                  <span>Key Credentials</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#00B89F]" strokeWidth={2.2} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Credentials Modal Dialog */}
      {selectedLeader && (
        <div className="fixed inset-0 z-50 bg-[#0D3240]/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95">
            <button
              onClick={() => setSelectedLeader(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-[#0D3240] hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-xl overflow-hidden border border-slate-200 flex-shrink-0">
                <img
                  src={selectedLeader.photo}
                  alt={selectedLeader.name}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: selectedLeader.photoPosition }}
                />
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#0D3240]">
                  {selectedLeader.name}
                </h4>
                <p className="text-xs font-bold text-[#00B89F] uppercase tracking-wider mt-0.5">
                  {selectedLeader.role}
                </p>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-4 mb-4">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Verified Credentials & Domain Mastery
              </h5>
              <div className="space-y-2.5">
                {selectedLeader.credentials.map((cred, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-[13.5px] text-[#2C5263]">
                    <CheckCircle className="w-4 h-4 text-[#00B89F] flex-shrink-0 mt-0.5" />
                    <span>{cred}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => setSelectedLeader(null)}
              className="w-full py-2.5 bg-[#00B89F] hover:bg-[#00a38c] text-white font-semibold rounded-lg text-sm transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
