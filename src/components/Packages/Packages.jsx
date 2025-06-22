import React from 'react';
import './Packages.css';
import { Link } from 'react-router-dom';

function Packages() {
  return (
    <section id="packages" className="py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="section-title">Our Safari Packages</h2>
            <p className="lead">Choose the perfect adventure for your next wildlife experience</p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="package-card">
              <div className="package-header">
                <h3>Morning Safari</h3>
              </div>
              <div className="card-body text-center">
                <div className="package-price">₹2599</div>
                <p>per person</p>
                <ul className="package-features">
                  <li>4-hour guided tour</li>
                  <li>Breakfast included</li>
                  <li>Wildlife spotting</li>
                  <li>Professional photographer</li>
                  <li>Small group size</li>
                </ul>
                <Link to="/booking" className="btn btn-primary mt-3">Book Now</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="package-card">
              <div className="package-header">
                <h3>Full Day Adventure</h3>
              </div>
              <div className="card-body text-center">
                <div className="package-price">₹3500</div>
                <p>per person</p>
                <ul className="package-features">
                  <li>8-hour guided tour</li>
                  <li>Breakfast & lunch included</li>
                  <li>Wildlife photography session</li>
                  <li>Nature walk</li>
                  <li>Bird watching</li>
                </ul>
                <Link to="/booking" className="btn btn-primary mt-3">Book Now</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="package-card">
              <div className="package-header">
                <h3>Premium Safari</h3>
              </div>
              <div className="card-body text-center">
                <div className="package-price">₹3349</div>
                <p>per person</p>
                <ul className="package-features">
                  <li>2-day safari experience</li>
                  <li>Luxury tent accommodation</li>
                  <li>All meals included</li>
                  <li>Private guide</li>
                  <li>Sunset photography session</li>
                </ul>
                <Link to="/booking" className="btn btn-primary mt-3">Book Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Packages;