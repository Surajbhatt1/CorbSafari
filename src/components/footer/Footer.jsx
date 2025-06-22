import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0">
            <h5>About Corbeet Safari</h5>
            <p>Providing unforgettable wildlife experiences while promoting conservation and sustainable tourism in the heart of nature.</p>
          </div>
          <div className="col-md-4 mb-4 mb-md-0">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-white">Home</a></li>
              <li><a href="#about" className="text-white">About Us</a></li>
              <li><a href="#packages" className="text-white">Packages</a></li>
              <li><a href="#gallery" className="text-white">Gallery</a></li>
              <li><a href="#contact" className="text-white">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Newsletter</h5>
            <p>Subscribe to our newsletter for the latest updates and special offers.</p>
            <div className="input-group mb-3">
              <input type="email" className="form-control" placeholder="Your Email" />
              <button className="btn btn-primary" type="button">Subscribe</button>
            </div>
          </div>
        </div>
        <hr className="mt-4 mb-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
        <div className="row">
          <div className="col-12 text-center">
            <p className="mb-0">&copy; 2025 Corbeet Safari. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;