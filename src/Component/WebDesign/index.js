import React from 'react';
import HeroBanner from './HeroBanner';
import Header from '../Home/header';
import Footer from '../Home/Footer';
import ContactForm from './ContactForm';
import HappyClients from '../Home/HappyClients';
import RecentComplete from './RecentComplete';
import WhyChoose from './WhyChoose';
import WebsiteFeatures from './WebsiteFeatures';
import MultiPlatform from './MultiPlatform';
import CardList from './CardList';
import AgileProcess from './AgileProcess';

function WebDesign() {
  return (
    <div>
      <Header />
      <HeroBanner />
      <CardList />
      <RecentComplete />
      <WebsiteFeatures />
      <AgileProcess />
      <MultiPlatform />
      <WhyChoose />
      <ContactForm />
      <HappyClients />
      <Footer />
    </div>
  );
}

export default WebDesign;
