import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import WhatsAppWidget from '../components/WhatsAppWidget.jsx';

// Shared layout for the Privacy Policy and Terms of Use pages.
export default function LegalPage({ eyebrow, title, updated, intro, children }) {
  return (
    <div className="min-h-screen bg-white text-[#1A2742] flex flex-col font-sans antialiased relative overflow-x-clip">
      <Header base="/" />

      <section className="bg-[#0F1A2E] text-white border-b border-[#243552]">
        <div className="max-w-[900px] mx-auto px-5 sm:px-8 py-12 sm:py-16">
          <a href="/" className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#00D9D0] hover:text-white transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </a>
          <div className="text-[12px] font-bold tracking-[0.2em] text-[#00B89F] uppercase mb-2">{eyebrow}</div>
          <h1 className="text-3xl sm:text-[42px] font-extrabold tracking-tight leading-tight mb-3">{title}</h1>
          <p className="text-[14px] text-[#AAB6C8]">Last updated: {updated}</p>
        </div>
      </section>

      <main className="flex-1">
        <article className="max-w-[900px] mx-auto px-5 sm:px-8 py-10 sm:py-14 text-[15px] sm:text-[15.5px] leading-relaxed text-[#3D5070]">
          {intro && <p className="text-[16.5px] text-[#1A2742] mb-8">{intro}</p>}
          {children}
        </article>
      </main>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
}

export function Section({ n, title, children }) {
  return (
    <section className="mb-9 scroll-mt-28" id={`s${n}`}>
      <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1A2742] tracking-tight mb-3">
        <span className="text-[#00B89F] mr-2">{n}.</span>
        {title}
      </h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

export function List({ items }) {
  return (
    <ul className="space-y-2 pl-1">
      {items.map((it, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#00B89F] flex-shrink-0" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

export function ContactBox() {
  return (
    <div className="bg-[#EAF6FF] border border-[#BCE1F5] rounded-xl p-5 text-[14.5px] text-[#1A2742]">
      <p className="font-bold mb-1">Syfinor Technologies Private Limited</p>
      <p>B4-1005, BDA Chandragiri PH-2, Bidare Agrahara, Kadugodi Extension,</p>
      <p>Bangalore – 560067, Karnataka, India</p>
      <p className="mt-2">
        Email: <a href="mailto:info@syfinor.com" className="text-[#00A39B] font-semibold hover:underline">info@syfinor.com</a>
        {'  ·  '}Phone: <a href="tel:+918106752927" className="text-[#00A39B] font-semibold hover:underline">+91 81067 52927</a>
      </p>
    </div>
  );
}
