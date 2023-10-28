import React from 'react';
import Header from './header';
import HeroBanner from './HeroBanner';
import AboutUs from './AboutUs';
import Project from './project';
import BusinessApproach from './BusinessApproach';
import WebDesignSection from './WebDesignSection';
import HappyClients from './HappyClients';
import Footer from './Footer';

function Home() {
  return (
    <div>
      <Header />
      <HeroBanner />
      <AboutUs />
      <Project />
      <BusinessApproach />
      <WebDesignSection />
      <HappyClients />
      <Footer />
    </div>
  );
}

export default Home;
