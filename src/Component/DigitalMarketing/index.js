import React from "react";
import Header from "../Home/header";
import Footer from "../Home/Footer";
import HeroBanner from "./HeroBanner";
import MyComponent from "./ContactForm";
import WebsiteFeatures from "./WebsiteFeatures";

function DigitalMarketing() {
  return (
    <div>
      <Header />
      <HeroBanner />
      <WebsiteFeatures />
      <MyComponent />
      <Footer />
    </div>
  );
}

export default DigitalMarketing;
