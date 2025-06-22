import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="section-title">About Corbeet Safari</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <img src="https://images.unsplash.com/photo-1586016413664-864c0cc76d4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="About Us" className="img-fluid rounded" />
          </div>
          <div className="col-md-6">
            <h3>Your Ultimate Jungle Adventure Awaits</h3>
            <p>Welcome to Corbeet Safari, where adventure meets nature in its purest form. Nestled in the heart of the wilderness, our safari offers an unforgettable experience for nature lovers and adventure seekers alike.</p>
            <p>With over 15 years of experience in wildlife tourism, we pride ourselves on providing safe, ethical, and exhilarating safari experiences. Our expert guides are passionate about wildlife and dedicated to making your journey both educational and thrilling.</p>
            <div className="row mt-4">
              <div className="col-6">
                <div className="feature-box">
                  <div className="feature-icon">
                    <i className="fas fa-leaf"></i>
                  </div>
                  <h4>Eco-Friendly</h4>
                  <p>Committed to sustainable tourism and wildlife conservation.</p>
                </div>
              </div>
              <div className="col-6">
                <div className="feature-box">
                  <div className="feature-icon">
                    <i className="fas fa-award"></i>
                  </div>
                  <h4>Expert Guides</h4>
                  <p>Knowledgeable guides with years of experience in the wild.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;