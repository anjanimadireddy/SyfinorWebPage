import React, { useState } from 'react';
import {
  Send,
  User,
  Mail,
  Building,
  ChevronDown,
  MapPin,
  Phone,
  Clock,
  Globe,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

// Official Syfinor Technologies company URLs
const SYFINOR_LINKEDIN_URL = 'https://www.linkedin.com/company/syfinor-technologies/posts/?feedView=all';

export default function ReachUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organization: '',
    enquiryType: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.firstName) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        organization: '',
        enquiryType: '',
        message: '',
      });
    }, 4000);
  };

  const contactCards = [
    {
      title: 'OFFICE ADDRESS',
      icon: MapPin,
      content: (
        <div className="text-[13px] text-[#3D5070] leading-relaxed">
          <p className="font-semibold text-[#1A2742]">Syfinor Technologies Private Limited</p>
          <p>B4-1005, BDA Chandragiri PH-2,</p>
          <p>Bidare Agrahara, Kadugodi Extension,</p>
          <p>Bangalore – 560067, Karnataka, India</p>
        </div>
      ),
    },
    {
      title: 'PHONE',
      icon: Phone,
      href: 'tel:+918106752927',
      ariaLabel: 'Call Syfinor at +91 81067 52927',
      content: (
        <span className="text-[14px] font-bold text-[#1A2742] group-hover:text-[#00A39B] transition-colors">
          +91 81067 52927
        </span>
      ),
    },
    {
      title: 'EMAIL',
      icon: Mail,
      href: 'mailto:info@syfinor.com',
      ariaLabel: 'Email Syfinor at info@syfinor.com',
      content: (
        <span className="text-[14px] font-bold text-[#1A2742] group-hover:text-[#00A39B] transition-colors">
          info@syfinor.com
        </span>
      ),
    },
    {
      title: 'BUSINESS HOURS',
      icon: Clock,
      content: (
        <p className="text-[13.5px] text-[#3D5070] font-semibold">
          Monday – Sunday: 9:00 AM – 10:00 PM IST
        </p>
      ),
    },
    {
      title: 'CONNECT ONLINE',
      icon: Globe,
      href: SYFINOR_LINKEDIN_URL,
      target: '_blank',
      rel: 'noopener noreferrer',
      ariaLabel: 'Syfinor Technologies LinkedIn',
      content: (
        <span className="text-[13.5px] font-semibold text-[#00A39B] group-hover:underline group-hover:text-[#008982] transition-colors">
          LinkedIn
        </span>
      ),
    },
  ];

  return (
    <section
      id="contact"
      className="bg-[#0F1A2E] text-white py-16 sm:py-20 lg:py-24 border-b border-[#243552] relative overflow-hidden"
    >
      {/* Subtle edge technical wave lines */}
      <div className="absolute top-0 left-0 w-80 h-80 pointer-events-none opacity-25">
        <svg viewBox="0 0 320 320" fill="none" className="w-full h-full">
          <path
            d="M-50 40 C 60 40, 100 130, 200 140 C 260 145, 300 90, 340 70"
            stroke="#00D9D0"
            strokeWidth="1.2"
            strokeDasharray="4 4"
          />
          <path
            d="M-40 100 C 70 95, 120 180, 220 200 C 280 210, 310 180, 360 190"
            stroke="#00D9D0"
            strokeWidth="0.8"
          />
          <circle cx="200" cy="140" r="3" fill="#00D9D0" />
          <circle cx="70" cy="95" r="2" fill="#00D9D0" />
        </svg>
      </div>

      <div className="absolute bottom-0 right-0 w-80 h-80 pointer-events-none opacity-25">
        <svg viewBox="0 0 320 320" fill="none" className="w-full h-full">
          <path
            d="M0 240 C 80 220, 140 300, 240 260 C 290 240, 330 270, 380 250"
            stroke="#00D9D0"
            strokeWidth="1.2"
            strokeDasharray="4 4"
          />
          <path
            d="M40 310 C 120 280, 180 340, 270 310 C 310 295, 340 330, 380 315"
            stroke="#00D9D0"
            strokeWidth="0.8"
          />
          <circle cx="240" cy="260" r="3" fill="#00D9D0" />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="text-[12px] font-bold tracking-[0.2em] text-[#00D9D0] uppercase mb-2">
            GET IN TOUCH
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight mb-3">
            Reach Us
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#AAB6C8] leading-relaxed">
            Have a project in mind or want to explore how Syfinor can help your organization? We'd love to hear from you.
          </p>
        </div>

        {/* Two-Column Grid: Form on Left, Contact Details on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-start">
          {/* Left Column (7 cols): Contact Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-[#EAF6FF] border border-[#BCE1F5] rounded-2xl sm:rounded-[22px] p-6 sm:p-8 lg:p-9 text-[#1A2742] shadow-[0_8px_28px_rgba(15,26,46,0.14)] hover:border-[#00D9D0] hover:shadow-[0_0_10px_rgba(0,217,208,0.22),0_0_24px_rgba(0,217,208,0.12),0_8px_28px_rgba(15,26,46,0.14)] hover:-translate-y-0.5 transition-[border-color,box-shadow,transform] duration-300 ease-in-out">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#BCE1F5] flex items-center justify-center text-[#00A39B] shadow-2xs flex-shrink-0">
                  <Send className="w-4.5 h-4.5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#1A2742] tracking-tight">
                  Send Us a Message
                </h3>
              </div>

              {submitted ? (
                <div className="bg-white border border-[#BCE1F5] rounded-xl p-8 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-[#00A39B] mx-auto animate-bounce" />
                  <h4 className="text-xl font-bold text-[#1A2742]">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-[14px] text-[#355A6B] max-w-md mx-auto">
                    Thank you for reaching out to Syfinor. A banking solutions director will review your inquiry and follow up promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* First Name & Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12.5px] font-semibold text-[#1A2742] mb-1.5">
                        First Name
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="text"
                          required
                          placeholder="John"
                          value={formData.firstName}
                          onChange={(e) =>
                            setFormData({ ...formData, firstName: e.target.value })
                          }
                          className="w-full bg-white border border-[#BFDFEE] rounded-lg pl-9.5 pr-3.5 py-2.5 text-[14px] text-[#1A2742] placeholder-slate-400 focus:outline-none focus:border-[#00D9D0] focus:ring-1 focus:ring-[#00D9D0] focus:shadow-[0_0_8px_rgba(0,217,208,0.25)] transition-all duration-200"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[12.5px] font-semibold text-[#1A2742] mb-1.5">
                        Last Name
                      </label>
                      <input
                        type="text"
                        placeholder="Smith"
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                        className="w-full bg-white border border-[#BFDFEE] rounded-lg px-3.5 py-2.5 text-[14px] text-[#1A2742] placeholder-slate-400 focus:outline-none focus:border-[#00D9D0] focus:ring-1 focus:ring-[#00D9D0] focus:shadow-[0_0_8px_rgba(0,217,208,0.25)] transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Work Email */}
                  <div>
                    <label className="block text-[12.5px] font-semibold text-[#1A2742] mb-1.5">
                      Work Email
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full bg-white border border-[#BFDFEE] rounded-lg pl-9.5 pr-3.5 py-2.5 text-[14px] text-[#1A2742] placeholder-slate-400 focus:outline-none focus:border-[#00D9D0] focus:ring-1 focus:ring-[#00D9D0] focus:shadow-[0_0_8px_rgba(0,217,208,0.25)] transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Organization */}
                  <div>
                    <label className="block text-[12.5px] font-semibold text-[#1A2742] mb-1.5">
                      Organization
                    </label>
                    <div className="relative">
                      <Building className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="text"
                        placeholder="Your Company Name"
                        value={formData.organization}
                        onChange={(e) =>
                          setFormData({ ...formData, organization: e.target.value })
                        }
                        className="w-full bg-white border border-[#BFDFEE] rounded-lg pl-9.5 pr-3.5 py-2.5 text-[14px] text-[#1A2742] placeholder-slate-400 focus:outline-none focus:border-[#00D9D0] focus:ring-1 focus:ring-[#00D9D0] focus:shadow-[0_0_8px_rgba(0,217,208,0.25)] transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Enquiry Type */}
                  <div>
                    <label className="block text-[12.5px] font-semibold text-[#1A2742] mb-1.5">
                      Enquiry Type
                    </label>
                    <div className="relative">
                      <select
                        value={formData.enquiryType}
                        onChange={(e) =>
                          setFormData({ ...formData, enquiryType: e.target.value })
                        }
                        className="w-full bg-white border border-[#BFDFEE] rounded-lg px-3.5 py-2.5 text-[14px] text-[#1A2742] focus:outline-none focus:border-[#00D9D0] focus:ring-1 focus:ring-[#00D9D0] focus:shadow-[0_0_8px_rgba(0,217,208,0.25)] transition-all duration-200 appearance-none cursor-pointer"
                      >
                        <option value="">Select an option...</option>
                        <option value="Oracle FLEXCUBE Implementation">
                          Oracle FLEXCUBE Implementation
                        </option>
                        <option value="SyWatch Infrastructure Monitoring">
                          SyWatch Infrastructure Monitoring
                        </option>
                        <option value="Payment Sanction Screening (OBPM)">
                          Payment Sanction Screening (OBPM)
                        </option>
                        <option value="Managed Service Support">
                          Managed Service Support
                        </option>
                        <option value="Training & Knowledge Transfer">
                          Training & Knowledge Transfer
                        </option>
                        <option value="General Strategic Inquiry">
                          General Strategic Inquiry
                        </option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[12.5px] font-semibold text-[#1A2742] mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us how we can help..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full bg-white border border-[#BFDFEE] rounded-lg px-3.5 py-2.5 text-[14px] text-[#1A2742] placeholder-slate-400 focus:outline-none focus:border-[#00D9D0] focus:ring-1 focus:ring-[#00D9D0] focus:shadow-[0_0_8px_rgba(0,217,208,0.25)] transition-all duration-200 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full mt-2 py-3 px-6 rounded-lg bg-[#00A39B] hover:bg-[#008f88] text-white font-bold text-[14px] flex items-center justify-center gap-2 shadow-sm hover:shadow-[0_0_16px_rgba(0,217,208,0.40)] hover:-translate-y-0.5 active:scale-[0.99] transition-all duration-300 ease-in-out cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message →</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column (5 cols): Stacked Contact Information Cards */}
          <div className="lg:col-span-5 space-y-3.5">
            {contactCards.map((card, idx) => {
              const Icon = card.icon;
              const cardInner = (
                <>
                  <div className="flex items-start gap-3.5">
                    <div className="w-9.5 h-9.5 rounded-xl bg-white border border-[#BCE1F5] flex items-center justify-center text-[#00A39B] flex-shrink-0 shadow-2xs mt-0.5 transition-all duration-300 ease-in-out group-hover:border-[#00D9D0] group-hover:shadow-[0_0_8px_rgba(0,217,208,0.25)]">
                      <Icon className="w-4.5 h-4.5" />
                    </div>

                    <div>
                      <div className="text-[11px] font-bold tracking-wider text-[#00A39B] uppercase mb-1">
                        {card.title}
                      </div>
                      {card.content}
                    </div>
                  </div>

                  <div className="text-[#00A39B] opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex-shrink-0 pt-1">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </>
              );

              const cardClasses =
                "bg-[#EAF6FF] border border-[#BCE1F5] rounded-xl sm:rounded-2xl p-4.5 sm:p-5 text-[#1A2742] flex items-start justify-between gap-3.5 shadow-[0_4px_16px_rgba(15,26,46,0.06)] hover:border-[#00D9D0] hover:shadow-[0_0_8px_rgba(0,217,208,0.20),0_0_20px_rgba(0,217,208,0.10)] hover:-translate-y-0.5 transition-[border-color,box-shadow,transform] duration-300 ease-in-out group";

              if (card.href) {
                return (
                  <a
                    key={idx}
                    href={card.href}
                    target={card.target}
                    rel={card.rel}
                    aria-label={card.ariaLabel}
                    className={`${cardClasses} cursor-pointer block`}
                  >
                    {cardInner}
                  </a>
                );
              }

              return (
                <div key={idx} className={cardClasses}>
                  {cardInner}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}


