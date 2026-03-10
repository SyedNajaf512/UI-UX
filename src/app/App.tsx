import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FeaturedPrograms } from './components/FeaturedPrograms';
import { AboutSection } from './components/AboutSection';
import { StatisticsSection } from './components/StatisticsSection';
import { NewsEventsSection } from './components/NewsEventsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturedPrograms />
        <AboutSection />
        <StatisticsSection />
        <NewsEventsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
