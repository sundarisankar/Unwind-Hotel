import React, { useState } from 'react';

function RoomBookingForm() {
  const [booking, setBooking] = useState({
    room_id: '',
    customer_name: '',
    customer_age: '',
    customer_address: '',
    customer_mobileNo: '',
    customer_aadharno: '',
  });

  const handleChange = (e) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you'd send a request to your backend to save the booking
    console.log('Booking data:', booking);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Room ID:
        <input type="text" name="room_id" value={booking.room_id} onChange={handleChange} required />
      </label>

      <label>
        Customer Name:
        <input type="text" name="customer_name" value={booking.customer_name} onChange={handleChange} required />
      </label>

      <label>
        Customer Age:
        <input type="number" name="customer_age" value={booking.customer_age} onChange={handleChange} required />
      </label>

      <label>
        Customer Address:
        <input type="text" name="customer_address" value={booking.customer_address} onChange={handleChange} required />
      </label>

      <label>
        Customer Mobile No:
        <input type="tel" name="customer_mobileNo" value={booking.customer_mobileNo} onChange={handleChange} required />
      </label>

      <label>
        Customer Aadhar No:
        <input type="text" name="customer_aadharno" value={booking.customer_aadharno} onChange={handleChange} required />
      </label>

      <button type="submit">Book Room</button>
    </form>
  );
}

export default RoomBookingForm;
