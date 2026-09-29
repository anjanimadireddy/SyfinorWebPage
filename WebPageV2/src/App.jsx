import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import MissionVision from './components/MissionVision.jsx';
import Products from './components/Products.jsx';
import ToolsTechnology from './components/ToolsTechnology.jsx';
import OraclePartnership from './components/OraclePartnership.jsx';
import WhereWeOperate from './components/WhereWeOperate.jsx';
import HowWeSupportYou from './components/HowWeSupportYou.jsx';
import DirectorsHistory from './components/DirectorsHistory.jsx';
import ReachUs from './components/ReachUs.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppWidget from './components/WhatsAppWidget.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#1A2742] flex flex-col selection:bg-[#00B89F] selection:text-white font-sans antialiased relative overflow-x-clip">
      {/* 1. Header */}
      <Header />

      {/* 2. Section 1 — Hero */}
      <Hero />

      {/* 3. Section 2 — Our Mission & Vision */}
      <MissionVision />

      {/* 4. Section 3 — Our Products */}
      <Products />

      {/* 5. Section 4 — Tools & Technology */}
      <ToolsTechnology />

      {/* 6. Section 5 — Oracle Partnership */}
      <OraclePartnership />

      {/* 7. Section 6 — Where We Operate */}
      <WhereWeOperate />

      {/* 8. Section 7 — How We Support You */}
      <HowWeSupportYou />

      {/* 9. Section 8 — Directors & History */}
      <DirectorsHistory />

      {/* 10. Section 9 — Reach Us */}
      <ReachUs />

      {/* 11. Footer */}
      <Footer />

      {/* 12. Floating WhatsApp Widget */}
      <WhatsAppWidget />
    </div>
  );
}
