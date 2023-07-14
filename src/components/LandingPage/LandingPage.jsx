import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import Services from '../Services/Services';
import Team from '../Team/Team';
import Footer from '../Footer/Footer';

function LandingPage() {
  return (
    <div>
      <HeroSection />
      <Services />
      <Team />
      <Footer />
    </div>
  );
}

export default LandingPage;
