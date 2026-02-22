import React, { useState } from 'react';
import HeroSection from '@/components/landing/HeroSection';
import LogoScroll from '@/components/landing/LogoScroll';
import CaseStudiesSection from '@/components/landing/CaseStudiesSection';

import TypeformSection from '@/components/landing/TypeformSection';

import AboutUsSection from '@/components/landing/AboutUsSection';
import OfferSection from '@/components/landing/OfferSection';
import SlackProofSection from '@/components/landing/SlackProofSection';
import Footer from '@/components/landing/Footer';
import BookingModal from '@/components/landing/BookingModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookCall = () => {
    const typeformSection = document.getElementById('typeform-section');
    if (typeformSection) {
      typeformSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f7fb] relative">
      <div 
        className="fixed inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
      <div className="relative z-10">
        <HeroSection onBookCall={handleBookCall} />
        <LogoScroll />
        <CaseStudiesSection onBookCall={handleBookCall} />
        <SlackProofSection />
        <div id="typeform-section">
          <TypeformSection />
        </div>
        <AboutUsSection />
        <OfferSection onBookCall={handleBookCall} />
        <Footer />
      </div>
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}