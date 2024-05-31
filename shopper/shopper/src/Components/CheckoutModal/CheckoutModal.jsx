import React from 'react';
import './CheckoutModal.css'

const CheckoutModal = ({ isOpen, onClose }) => {
    const handleSubmit = (event) => {
      event.preventDefault();
      
    };
  
    return isOpen ? (
      <div className="modal-overlay">
        <div className="modal-content">
          <h2>Enter Credit Card Information</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Card Number" required />
            <input type="text" placeholder="Expiration Date (MM/YY)" pattern="\d{2}/\d{2}" title="Format: MM/YY" required />
            <input type="text" placeholder="CVV" maxLength="3" required />
            <button type="submit" className="pay-now">Pay Now</button>
          </form>
          <button className="modal-close" onClick={onClose}>Close</button>
        </div>
      </div>
    ) : null;
  };
  
  export default CheckoutModal;