import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Hero from './components/heero/Hero';
import About from './components/about/About';
import Packages from './components/Packages/Packages';
import Testimonials from './components/Testimonials/Testimonials';
import Gallery from './components/gallery/Gallery';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Booking from './components/booking/Booking';
import Payment from './components/payment/Payment';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
