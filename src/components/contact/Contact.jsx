import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="section-title">Contact Us</h2>
            <p className="lead">Ready for your next adventure? Get in touch with us!</p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-5">
            <div className="contact-info">
              <h4>Contact Information</h4>
              <p><i className="fas fa-map-marker-alt"></i> 123 Jungle Trail, Corbeet Forest, India</p>
              <p><i className="fas fa-phone"></i> +91 8087262006</p>
              <p><i className="fas fa-envelope"></i> info@corbeetsafari.com</p>
              <p className="whatsapp-link">
                <a href="https://wa.me/8087262006" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-whatsapp"></i> Chat on WhatsApp
                </a>
              </p>
              <p><i className="fas fa-clock"></i> Open daily from 6:00 AM to 8:00 PM</p>
            </div>
            <div className="social-links mt-4">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          <div className="col-lg-7">
            <form>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input type="text" className="form-control" placeholder="Your Name" required />
                </div>
                <div className="col-md-6 mb-3">
                  <input type="email" className="form-control" placeholder="Your Email" required />
                </div>
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Subject" />
              </div>
              <div className="mb-3">
                <select className="form-select" required>
                  <option value="" disabled selected>Select Package</option>
                  <option value="morning">Morning Safari</option>
                  <option value="fullday">Full Day Adventure</option>
                  <option value="premium">Premium Safari</option>
                  <option value="custom">Custom Package</option>
                </select>
              </div>
              <div className="mb-3">
                <textarea className="form-control" rows="5" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;