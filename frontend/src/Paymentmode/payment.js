import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

const stripePromise = loadStripe('your_public_key'); // Replace with your Stripe public key

const Payment = () => {
  const [amount, setAmount] = useState(0);
  const [cardElement, setCardElement] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const createCardElement = async () => {
      const stripe = await stripePromise;
      const elements = stripe.elements();
      const card = elements.create('card');
      card.mount('#card-element');
      setCardElement(card);

      card.on('change', (event) => {
        setError(event.error ? event.error.message : null);
      });
    };

    createCardElement();

    return () => {
      if (cardElement) {
        cardElement.unmount();
      }
    };
  }, [cardElement]);

  const handlePayment = async (e) => {
    e.preventDefault();
    setLoading(true);
    const stripe = await stripePromise;

    const { error: stripeError, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (stripeError) {
      setError(stripeError.message);
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post('http://localhost:4000/payment/charge', {
        amount: amount * 100, // Amount in cents
        currency: 'usd',
        paymentMethod: paymentMethod.id,
      });

      alert(response.data.message);
    } catch (err) {
      alert('Payment failed: ' + err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Make a Payment</h2>
      <form onSubmit={handlePayment}>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <div id="card-element"></div>
        {error && <p>{error}</p>}
        <button type="submit" disabled={loading}>
          {loading ? 'Processing...' : 'Pay with Card'}
        </button>
      </form>
    </div>
  );
};

export default Payment;
