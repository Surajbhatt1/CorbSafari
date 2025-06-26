import React from 'react';
import './Hero.css';
import About from '../about/About';
import Gallery from '../Gallery/Gallery';
import Package from '../Packages/Packages';
import Testimonials from'../Testimonials/Testimonials';
import Contact from '../contact/Contact';

function Hero() {
  return (
   <>
   <section id="home" className="hero">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Discover the Wild Beauty</h1>
            <p>Experience the thrill of a lifetime with our exclusive jungle safari adventures</p>
            <a href="#packages" className="btn btn-primary btn-lg">Explore Packages</a>
          </div>
        </div>
      </div>
    
    </section>

    <About/>
    <Package/>
    <Gallery/>
    <Testimonials/>
    <Contact/>



    
    </>
  );
}

export default Hero;