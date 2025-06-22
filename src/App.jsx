import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Hero from './components/heero/Hero';
import About from './components/about/About';
import Package from './components/Packages/Packages';
import Gallery from './components/Gallery/Gallery';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Booking from './components/booking/Booking';
import Payment from './components/payment/Payment';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Route for Booking Page */}
        <Route path="/booking" element={<Booking />} />
        <Route path="/payment" element={<Payment />} />

        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Package />
            <Gallery />
            <Testimonials />
            <Contact />
            <Footer />
          </>
        } />
      </Routes>
    </>
  );
}

export default App;
