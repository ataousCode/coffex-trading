import React from 'react';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import Services from '../components/sections/Services';
import VideoSection from '../components/sections/VideoSection';
import CTA from '../components/sections/CTA';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <VideoSection />
      <Services />
      <CTA />
    </div>
  );
};

export default Home;