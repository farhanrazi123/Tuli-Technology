import React from 'react';
import HeroBanner from './HeroBanner';
import Header from '../Home/header';
import Footer from '../Home/Footer';
import ContactForm from './Contact';

function Contact() {
  return (
    <div>
      <Header />
      <HeroBanner />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Contact;
