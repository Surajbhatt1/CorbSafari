import React from 'react';
import './Testimonials.css';

function Testimonials() {
  return (
    <section id="testimonials" className="py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="section-title">What Our Visitors Say</h2>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="testimonial text-center">
              <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Visitor 1" />
              <h4>Sarah Johnson</h4>
              <div className="text-warning mb-3">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p>"An absolutely incredible experience! The guides were knowledgeable and we saw so much wildlife. The morning safari was the highlight of our trip!"</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="testimonial text-center">
              <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Visitor 2" />
              <h4>Michael Chen</h4>
              <div className="text-warning mb-3">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <p>"The premium safari package was worth every penny. The luxury tents were amazing and having a private guide made all the difference. We'll be back!"</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="testimonial text-center">
              <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Visitor 3" />
              <h4>Emily Rodriguez</h4>
              <div className="text-warning mb-3">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p>"As a wildlife photographer, I'm always looking for the best experiences. Corbeet Safari delivered beyond my expectations. The golden hour lighting was perfect!"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;