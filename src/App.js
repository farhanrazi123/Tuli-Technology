import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import WebDesign from './Component/WebDesign';
import Blog from './Component/Blog';
import Contact from './Component/Contact';
import DigitalMarketing from './Component/DigitalMarketing';

function App() {
  return (
    <Router>
      <div>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/web-design" element={<WebDesign />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
