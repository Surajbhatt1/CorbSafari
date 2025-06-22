import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Payment.css';

function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [bookingData, setBookingData] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (location.state?.bookingData) {
      setBookingData(location.state.bookingData);
    } else {
      // Redirect back to booking if no data
      navigate('/booking');
    }
  }, [location.state, navigate]);

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    try {
      // In a real app, you would integrate with a payment gateway here
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSuccess(true);
      
      // Redirect to success page after 2 seconds
      setTimeout(() => {
        navigate('/booking/success', { state: { bookingData } });
      }, 2000);
    } catch (error) {
      console.error('Payment failed:', error);
      alert('Payment failed. Please try again.');
      setIsProcessing(false);
    }
  };

  if (!bookingData) {
    return <div className="payment-loading">Loading payment details...</div>;
  }

  const selectedPackage = bookingData.package ? 
    {
      'morning': { name: 'Morning Safari', price: 2599 },
      'fullday': { name: 'Full Day Adventure', price: 3500 },
      'premium': { name: 'Premium Safari', price: 3349 }
    }[bookingData.package] : null;

  const totalAmount = selectedPackage ? selectedPackage.price * bookingData.guests : 0;

  return (
    <div className="payment-container">
      <div className="payment-header">
        <h1>Complete Your Booking</h1>
        <p>Review your booking details and proceed to payment</p>
      </div>


      <div className="payment-content">
        <div className="booking-summary">
          <h2>Booking Summary</h2>
          <div className="summary-details">
            <div className="summary-item">
              <span>Package:</span>
              <span>{selectedPackage?.name || 'N/A'}</span>
            </div>
            <div className="summary-item">
              <span>Date:</span>
              <span>{new Date(bookingData.date).toLocaleDateString()}</span>
            </div>
            <div className="summary-item">
              <span>Guests:</span>
              <span>{bookingData.guests}</span>
            </div>
            <div className="summary-item total">
              <span>Total Amount:</span>
              <span>₹{totalAmount.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="payment-methods">
          <h2>Select Payment Method</h2>
          <form onSubmit={handlePaymentSubmit}>
            <div className="payment-options">
              <div 
                className={`payment-option ${paymentMethod === 'creditCard' ? 'active' : ''}`}
                onClick={() => handlePaymentMethodChange('creditCard')}
              >
                <input 
                  type="radio" 
                  id="creditCard" 
                  name="paymentMethod" 
                  checked={paymentMethod === 'creditCard'}
                  onChange={() => {}} 
                />
                <label htmlFor="creditCard">Credit/Debit Card</label>
                <div className="card-icons">
                  <i className="fab fa-cc-visa"></i>
                  <i className="fab fa-cc-mastercard"></i>
                  <i className="fab fa-cc-amex"></i>
                </div>
              </div>

              <div 
                className={`payment-option ${paymentMethod === 'upi' ? 'active' : ''}`}
                onClick={() => handlePaymentMethodChange('upi')}
              >
                <input 
                  type="radio" 
                  id="upi" 
                  name="paymentMethod" 
                  checked={paymentMethod === 'upi'}
                  onChange={() => {}} 
                />
                <label htmlFor="upi">UPI</label>
                <div className="upi-icons">
                  <i className="fas fa-mobile-alt"></i>
                </div>
              </div>
              <div 
                className={`payment-option ${paymentMethod === 'netbanking' ? 'active' : ''}`}
                onClick={() => handlePaymentMethodChange('netbanking')}
              >
                <input 
                  type="radio" 
                  id="netbanking" 
                  name="paymentMethod" 
                  checked={paymentMethod === 'netbanking'}
                  onChange={() => {}} 
                />
                <label htmlFor="netbanking">Net Banking</label>
                <div className="bank-icons">
                  <i className="fas fa-university"></i>
                </div>
              </div>
            </div>

            {paymentMethod === 'creditCard' && (
              <div className="card-details">
                <div className="form-group">
                  <label htmlFor="cardNumber">Card Number</label>
                  <input 
                    type="text" 
                    id="cardNumber" 
                    placeholder="1234 5678 9012 3456"
                    required 
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="expiry">Expiry Date</label>
                    <input 
                      type="text" 
                      id="expiry" 
                      placeholder="MM/YY"
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cvv">CVV</label>
                    <input 
                      type="text" 
                      id="cvv" 
                      placeholder="123"
                      required 
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="nameOnCard">Name on Card</label>
                  <input 
                    type="text" 
                    id="nameOnCard" 
                    placeholder="John Doe"
                    required 
                  />
                </div>
              </div>
            )}

            {paymentMethod === 'upi' && (
              <div className="upi-details">
                <div className="form-group">
                  <label htmlFor="upiId">UPI ID</label>
                  <input 
                    type="text" 
                    id="upiId" 
                    placeholder="yourname@upi"
                    required 
                  />
                </div>
                <p className="upi-note">You'll be redirected to your UPI app to complete the payment</p>
              </div>
            )}

            {paymentMethod === 'netbanking' && (
              <div className="netbanking-details">
                <div className="form-group">
                  <label htmlFor="bank">Select Bank</label>
                  <select id="bank" required>
                    <option value="">Select your bank</option>
                    <option value="sbi">State Bank of India</option>
                    <option value="hdfc">HDFC Bank</option>
                    <option value="icici">ICICI Bank</option>
                    <option value="axis">Axis Bank</option>
                    <option value="other">Other Banks</option>
                  </select>
                </div>
              </div>
            )}

            <div className="terms">
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">
                I agree to the <a href="/terms">Terms & Conditions</a> and <a href="/privacy">Privacy Policy</a>
              </label>
            </div>

            <button 
              type="submit" 
              className="pay-now-btn"
              disabled={isProcessing || isSuccess}
            >
              {isProcessing ? (
                <>
                  <span className="spinner"></span>
                  Processing...
                </>
              ) : isSuccess ? (
                <>
                  <i className="fas fa-check"></i> Payment Successful!
                </>
              ) : (
                `Pay ₹${totalAmount.toLocaleString()}`
              )}
            </button>

            <p className="secure-payment">
              <i className="fas fa-lock"></i> Your payment is secure and encrypted
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Payment;