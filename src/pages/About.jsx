import React from 'react';
import CompanyStory from '../components/sections/CompanyStory';
import Journey from '../components/sections/Journey';
import Team from '../components/sections/Team';
import Values from '../components/sections/Values';
import Stats from '../components/sections/Stats';
import CTA from '../components/sections/CTA';
import AboutHero from '../components/sections/AboutHero';

const About = () => {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <CompanyStory />
      <Journey />
      <Values />
      <Stats />
      <Team />
      <CTA />
    </div>
  );
};

export default About;