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
// Contact form delivery via Web3Forms (https://web3forms.com) -> info@syfinor.com.
// Paste the Access Key emailed by Web3Forms to info@syfinor.com here, then run `npm run publish:site`.
const WEB3FORMS_ACCESS_KEY = '505fafcb-8133-4e82-87a5-463e8c064825';
const CONTACT_FORM_ENDPOINT = 'https://api.web3forms.com/submit';

// Country dialling codes for the mobile number field (India first, then regions Syfinor serves).
const COUNTRY_CODES = [
  { iso: 'IN', name: 'India', code: '+91' },
  { iso: 'AE', name: 'UAE', code: '+971' },
  { iso: 'SA', name: 'Saudi Arabia', code: '+966' },
  { iso: 'QA', name: 'Qatar', code: '+974' },
  { iso: 'OM', name: 'Oman', code: '+968' },
  { iso: 'KW', name: 'Kuwait', code: '+965' },
  { iso: 'BH', name: 'Bahrain', code: '+973' },
  { iso: 'ZA', name: 'South Africa', code: '+27' },
  { iso: 'LS', name: 'Lesotho', code: '+266' },
  { iso: 'KE', name: 'Kenya', code: '+254' },
  { iso: 'NG', name: 'Nigeria', code: '+234' },
  { iso: 'GH', name: 'Ghana', code: '+233' },
  { iso: 'TZ', name: 'Tanzania', code: '+255' },
  { iso: 'UG', name: 'Uganda', code: '+256' },
  { iso: 'ZM', name: 'Zambia', code: '+260' },
  { iso: 'ZW', name: 'Zimbabwe', code: '+263' },
  { iso: 'BW', name: 'Botswana', code: '+267' },
  { iso: 'NA', name: 'Namibia', code: '+264' },
  { iso: 'SZ', name: 'Eswatini', code: '+268' },
  { iso: 'MZ', name: 'Mozambique', code: '+258' },
  { iso: 'RW', name: 'Rwanda', code: '+250' },
  { iso: 'ET', name: 'Ethiopia', code: '+251' },
  { iso: 'EG', name: 'Egypt', code: '+20' },
  { iso: 'LK', name: 'Sri Lanka', code: '+94' },
  { iso: 'BD', name: 'Bangladesh', code: '+880' },
  { iso: 'NP', name: 'Nepal', code: '+977' },
  { iso: 'SG', name: 'Singapore', code: '+65' },
  { iso: 'MY', name: 'Malaysia', code: '+60' },
  { iso: 'ID', name: 'Indonesia', code: '+62' },
  { iso: 'PH', name: 'Philippines', code: '+63' },
  { iso: 'TH', name: 'Thailand', code: '+66' },
  { iso: 'VN', name: 'Vietnam', code: '+84' },
  { iso: 'MX', name: 'Mexico', code: '+52' },
  { iso: 'CO', name: 'Colombia', code: '+57' },
  { iso: 'PE', name: 'Peru', code: '+51' },
  { iso: 'CL', name: 'Chile', code: '+56' },
  { iso: 'AR', name: 'Argentina', code: '+54' },
  { iso: 'BR', name: 'Brazil', code: '+55' },
  { iso: 'EC', name: 'Ecuador', code: '+593' },
  { iso: 'PA', name: 'Panama', code: '+507' },
  { iso: 'CR', name: 'Costa Rica', code: '+506' },
  { iso: 'GT', name: 'Guatemala', code: '+502' },
  { iso: 'DO', name: 'Dominican Republic', code: '+1' },
  { iso: 'US', name: 'USA / Canada', code: '+1' },
  { iso: 'GB', name: 'United Kingdom', code: '+44' },
  { iso: 'DE', name: 'Germany', code: '+49' },
  { iso: 'FR', name: 'France', code: '+33' },
  { iso: 'NL', name: 'Netherlands', code: '+31' },
  { iso: 'CH', name: 'Switzerland', code: '+41' },
  { iso: 'AU', name: 'Australia', code: '+61' },
  { iso: 'NZ', name: 'New Zealand', code: '+64' },
];

const SYFINOR_LINKEDIN_URL = 'https://www.linkedin.com/company/syfinor-technologies/posts/?feedView=all';

export default function ReachUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryIso: 'IN',
    mobile: '',
    organization: '',
    enquiryType: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [honey, setHoney] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.firstName || sending) return;
    // Honeypot: real visitors never fill this hidden field; bots usually do.
    if (honey) {
      setSubmitted(true);
      return;
    }
    setSending(true);
    setError('');
    const fullName = `${formData.firstName} ${formData.lastName}`.trim();
    const country = COUNTRY_CODES.find((c) => c.iso === formData.countryIso) || COUNTRY_CODES[0];
    const mobileFull = `${country.code} ${formData.mobile.replace(/[^\d]/g, '')}`;
    try {
      const res = await fetch(CONTACT_FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Website enquiry: ${formData.enquiryType || 'General'} - ${fullName}`,
          from_name: 'Syfinor Website',
          replyto: formData.email,
          Name: fullName,
          Email: formData.email,
          Mobile: `${mobileFull} (${country.name})`,
          Organization: formData.organization || '-',
          'Enquiry Type': formData.enquiryType || 'General',
          Message: formData.message || '-',
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data.success !== true) {
        throw new Error(data.message || `HTTP ${res.status}`);
      }
      setSubmitted(true);
      setFormData({ firstName: '', lastName: '', email: '', countryIso: 'IN', mobile: '', organization: '', enquiryType: '', message: '' });
      setTimeout(() => setSubmitted(false), 8000);
    } catch (err) {
      console.error('Contact form failed:', err);
      setError('Sorry, your message could not be sent right now. Please email us at info@syfinor.com or call +91 81067 52927.');
    } finally {
      setSending(false);
    }
  };

  const contactCards = [
    {
      title: 'OFFICE ADDRESSES',
      icon: MapPin,
      content: (
        <div className="text-[13px] text-[#3D5070] leading-relaxed">
          <p className="font-semibold text-[#1A2742]">Syfinor Technologies Private Limited</p>
          <p className="mt-2 text-[11.5px] font-bold tracking-wider text-[#00A39B] uppercase">Bangalore</p>
          <p>B4-1005, BDA Chandragiri PH-2,</p>
          <p>Bidare Agrahara, Kadugodi Extension,</p>
          <p>Bangalore – 560067, Karnataka, India</p>
          <p className="mt-2.5 text-[11.5px] font-bold tracking-wider text-[#00A39B] uppercase">Hyderabad</p>
          <p>8GW9+PRM, Vaishali Nagar Rd,</p>
          <p>Vaishali Nagar, Champapet,</p>
          <p>Hyderabad – 500079, Telangana, India</p>
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
                  {/* Honeypot field (hidden from people) */}
                  <input
                    type="text"
                    name="_honey"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honey}
                    onChange={(e) => setHoney(e.target.value)}
                    className="hidden"
                    aria-hidden="true"
                  />
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

                  {/* Mobile Number with country code */}
                  <div>
                    <label className="block text-[12.5px] font-semibold text-[#1A2742] mb-1.5">
                      Mobile Number
                    </label>
                    <div className="flex gap-2">
                      <div className="relative w-[46%] sm:w-[38%] flex-shrink-0">
                        <select
                          aria-label="Country code"
                          value={formData.countryIso}
                          onChange={(e) => setFormData({ ...formData, countryIso: e.target.value })}
                          className="w-full bg-white border border-[#BFDFEE] rounded-lg pl-3 pr-8 py-2.5 text-[14px] text-[#1A2742] focus:outline-none focus:border-[#00D9D0] focus:ring-1 focus:ring-[#00D9D0] focus:shadow-[0_0_8px_rgba(0,217,208,0.25)] transition-all duration-200 appearance-none cursor-pointer"
                        >
                          {COUNTRY_CODES.map((c) => (
                            <option key={c.iso} value={c.iso}>
                              {c.code} {c.name}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                      <div className="relative flex-1">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="tel"
                          required
                          inputMode="tel"
                          autoComplete="tel-national"
                          placeholder="98765 43210"
                          pattern="[0-9 \-]{6,16}"
                          title="Enter 6–15 digits, without the country code"
                          value={formData.mobile}
                          onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                          className="w-full bg-white border border-[#BFDFEE] rounded-lg pl-9.5 pr-3.5 py-2.5 text-[14px] text-[#1A2742] placeholder-slate-400 focus:outline-none focus:border-[#00D9D0] focus:ring-1 focus:ring-[#00D9D0] focus:shadow-[0_0_8px_rgba(0,217,208,0.25)] transition-all duration-200"
                        />
                      </div>
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
                        <option value="Oracle FLEXCUBE Customization">Oracle FLEXCUBE Customization</option>
                        <option value="Oracle FLEXCUBE Managed Services">Oracle FLEXCUBE Managed Services</option>
                        <option value="Oracle FLEXCUBE Training">Oracle FLEXCUBE Training</option>
                        <option value="Oracle FLEXCUBE Implementation">Oracle FLEXCUBE Implementation</option>
                        <option value="Oracle FLEXCUBE Resource Orchestration">Oracle FLEXCUBE Resource Orchestration</option>
                        <option value="In-House Products (SyWatch, SyNotify, SyFiS)">In-House Products (SyWatch, SyNotify, SyFiS)</option>
                        <option value="Sanction Screening Services">Sanction Screening Services</option>
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
                      required
                      placeholder="Tell us how we can help..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full bg-white border border-[#BFDFEE] rounded-lg px-3.5 py-2.5 text-[14px] text-[#1A2742] placeholder-slate-400 focus:outline-none focus:border-[#00D9D0] focus:ring-1 focus:ring-[#00D9D0] focus:shadow-[0_0_8px_rgba(0,217,208,0.25)] transition-all duration-200 resize-none"
                    />
                  </div>

                  {error && (
                    <p role="alert" className="text-[13px] text-[#C2410C] bg-[#FFF1EB] border border-[#FFD2BF] rounded-lg px-3.5 py-2.5">
                      {error}
                    </p>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full mt-2 py-3 px-6 rounded-lg bg-[#00A39B] hover:bg-[#008f88] text-white font-bold text-[14px] flex items-center justify-center gap-2 shadow-sm hover:shadow-[0_0_16px_rgba(0,217,208,0.40)] hover:-translate-y-0.5 active:scale-[0.99] transition-all duration-300 ease-in-out cursor-pointer disabled:opacity-70 disabled:cursor-wait disabled:hover:translate-y-0"
                  >
                    <Send className="w-4 h-4" />
                    <span>{sending ? 'Sending…' : 'Send Message →'}</span>
                  </button>

                  <p className="text-[12px] text-[#56657A] text-center leading-relaxed">
                    By submitting this form, you agree to our{' '}
                    <a href="/privacy/" target="_blank" rel="noopener" className="text-[#00A39B] font-semibold underline underline-offset-2 hover:text-[#00B89F]">
                      Privacy Policy
                    </a>
                    .
                  </p>
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


