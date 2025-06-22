import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Booking.css';

function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    package: '',
    date: '',
    guests: 1,
    specialRequests: ''
  });

  const packages = [
    { id: 'morning', name: 'Morning Safari', price: 2599 },
    { id: 'fullday', name: 'Full Day Adventure', price: 3500 },
    { id: 'premium', name: 'Premium Safari', price: 3349 }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to payment page with form data
    navigate('/payment', { state: { bookingData: formData } });
  };

  return (
    <div className="booking-container">
      <div className="booking-header">
        <h1>Book Your Safari Adventure</h1>
        <p>Fill out the form below to reserve your spot for an unforgettable wildlife experience</p>
      </div>

      <div className="booking-content">
        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+91 1234567890"
              />
            </div>
          </div>


          <div className="form-row">
            <div className="form-group">
              <label htmlFor="package">Select Package *</label>
              <select
                id="package"
                name="package"
                value={formData.package}
                onChange={handleChange}
                required
              >
                <option value="">Choose a package</option>
                {packages.map((pkg) => (
                  <option key={pkg.id} value={pkg.id}>
                    {pkg.name} (₹{pkg.price})
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="date">Preferred Date *</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
          </div>


          <div className="form-row">
            <div className="form-group">
              <label htmlFor="guests">Number of Guests *</label>
              <input
                type="number"
                id="guests"
                name="guests"
                min="1"
                max="20"
                value={formData.guests}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="specialRequests">Special Requests</label>
              <input
                type="text"
                id="specialRequests"
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                placeholder="Any special requirements?"
              />
            </div>
          </div>


          <div className="form-group">
            <button type="submit" className="submit-btn">
              Book Now
            </button>
          </div>
        </form>

        <div className="booking-info">
          <h3>Need Help?</h3>
          <p>Our safari experts are here to help you plan your perfect adventure.</p>
          <div className="contact-info">
            <p><i className="fas fa-phone"></i> +91 98765 43210</p>
            <p><i className="fas fa-envelope"></i> bookings@safaripark.com</p>
            <p><i className="fas fa-clock"></i> 7 Days a Week, 8:00 AM - 8:00 PM</p>
          </div>
          <div className="why-book">
            <h4>Why Book With Us?</h4>
            <ul>
              <li>Best Price Guarantee</li>
              <li>24/7 Customer Support</li>
              <li>Expert Safari Guides</li>
              <li>Flexible Cancellation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
