import React from 'react';
import HeroBanner from './HeroBanner';
import Header from '../Home/header';
import Footer from '../Home/Footer';
import Content from './Content';

function Blog() {
  return (
    <div>
      <Header />
      <HeroBanner />
      <Content />
      <Footer />
    </div>
  );
}

export default Blog;
