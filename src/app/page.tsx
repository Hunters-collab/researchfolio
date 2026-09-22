import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ResearchSection from './components/ResearchSection';
import FocusSection from './components/FocusSection';
import ContactSection from './components/ContactSection';

export default function Page() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <ResearchSection />
        <FocusSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}