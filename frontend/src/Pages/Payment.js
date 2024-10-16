// Payment.js
import React from 'react';

const Payment = ({ bookingDetails }) => {
  return (
    <div>
      <h2>Payment Confirmation</h2>
      <p>Thank you for your booking!</p>
      <p>Room Number: {bookingDetails.roomNumber}</p>
      <p>Booking Date: {bookingDetails.bookingDate}</p>
      <p>Check-In Date: {bookingDetails.checkInDate}</p>
      <p>Check-Out Date: {bookingDetails.checkOutDate}</p>
      <p>Price: ${bookingDetails.price}</p>
      <p>Please complete your payment to confirm the booking.</p>
      <div className="payment-methods">
        <h3>Payment Methods</h3>
        <ul>
          <li>Credit Card</li>
          <li>Debit Card</li>
          <li>PayPal</li>
          {/* Add more payment methods if needed */}
        </ul>
      </div>
      <button onClick={() => alert('Payment Successful!')}>Complete Payment</button>
    </div>
  );
};

export default Payment;
