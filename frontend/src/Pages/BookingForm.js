import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './BookingForm.css';

const BookingForm = ({ onClose }) => {
  const location = useLocation();
  const [customerName, setCustomerName] = useState('');
  const [customerAge, setCustomerAge] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customerAadharNo, setCustomerAadharNo] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [additionalMembers, setAdditionalMembers] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');
  const signupid = localStorage.getItem("id");

  const { room } = location.state;

  const handleAddMember = () => {
    setAdditionalMembers([
      ...additionalMembers,
      {
        memberName: '',
        memberAge: '',
        memberAadharNo: '',
        sameAddress: true,
        memberAddress: customerAddress,
      },
    ]);
  };

  const handleMemberChange = (index, field, value) => {
    const updatedMembers = additionalMembers.map((member, i) =>
      i === index ? { ...member, [field]: value } : member
    );
    setAdditionalMembers(updatedMembers);
  };

  const handleBooking = async () => {
    const bookingDetails = {
      personalInfo: [
        {
          customerName,
          customerAge,
          customerAddress,
          customerAadharNo,
          phone: signupid.phone,
        },
        ...additionalMembers.map((member) => ({
          customerName: member.memberName,
          customerAge: member.memberAge,
          customerAddress: member.sameAddress ? customerAddress : member.memberAddress,
          customerAadharNo: member.memberAadharNo,
        })),
      ],
      roomNumber: room.roomNumber,
      bookingDate,
      checkInDate,
      checkOutDate,
      price: room.price,
      paymentMethod,
    };

    try {
      const response = await axios.put(
        `http://localhost:4000/signup/users/${signupid}`,
        { bookingDetails: [bookingDetails] }
      );

      if (response.status === 200) {
        alert('Booking updated successfully');
      }
    } catch (error) {
      console.error("Error updating booking:", error);
      alert('Error updating booking, please try again.');
    }
  };

  return (
    <div className="booking-form-wrapper">
      <h2>Booking for Room #{room.roomNumber}</h2>
      <p>Bed Type: {room.bedType}</p>
      <p>Price: ${room.price}</p>
      <form>
        <div className="input-group">
          <label htmlFor="customerName">Name</label>
          <input
            type="text"
            id="customerName"
            placeholder="Enter your name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="customerAge">Age</label>
          <input
            type="number"
            id="customerAge"
            placeholder="Enter your age"
            value={customerAge}
            onChange={(e) => setCustomerAge(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="customerAddress">Address</label>
          <input
            type="text"
            id="customerAddress"
            placeholder="Enter your address"
            value={customerAddress}
            onChange={(e) => setCustomerAddress(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="customerAadharNo">Aadhar Number</label>
          <input
            type="text"
            id="customerAadharNo"
            placeholder="Enter your Aadhar number"
            value={customerAadharNo}
            onChange={(e) => setCustomerAadharNo(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="bookingDate">Booking Date</label>
          <input
            type="date"
            id="bookingDate"
            value={bookingDate}
            onChange={(e) => setBookingDate(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="checkInDate">Check-In Date</label>
          <input
            type="date"
            id="checkInDate"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="checkOutDate">Check-Out Date</label>
          <input
            type="date"
            id="checkOutDate"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
            required
          />
        </div>

        <h3>Add Additional Members</h3>
        {additionalMembers.map((member, index) => (
          <div key={index} className="member-group">
            <div className="input-group">
              <label htmlFor={`memberName-${index}`}>Member Name</label>
              <input
                type="text"
                id={`memberName-${index}`}
                placeholder="Enter member's name"
                value={member.memberName}
                onChange={(e) =>
                  handleMemberChange(index, 'memberName', e.target.value)
                }
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor={`memberAge-${index}`}>Member Age</label>
              <input
                type="number"
                id={`memberAge-${index}`}
                placeholder="Enter member's age"
                value={member.memberAge}
                onChange={(e) =>
                  handleMemberChange(index, 'memberAge', e.target.value)
                }
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor={`memberAadharNo-${index}`}>Aadhar Number</label>
              <input
                type="text"
                id={`memberAadharNo-${index}`}
                placeholder="Enter member's Aadhar number"
                value={member.memberAadharNo}
                onChange={(e) =>
                  handleMemberChange(index, 'memberAadharNo', e.target.value)
                }
                required
              />
            </div>

            <div className="input-group">
              <label>
                <input
                  type="checkbox"
                  checked={member.sameAddress}
                  onChange={(e) =>
                    handleMemberChange(index, 'sameAddress', e.target.checked)
                  }
                />
                Same Address as Main Customer
              </label>
            </div>

            {!member.sameAddress && (
              <div className="input-group">
                <label htmlFor={`memberAddress-${index}`}>Member Address</label>
                <input
                  type="text"
                  id={`memberAddress-${index}`}
                  placeholder="Enter member's address"
                  value={member.memberAddress}
                  onChange={(e) =>
                    handleMemberChange(index, 'memberAddress', e.target.value)
                  }
                />
              </div>
            )}
          </div>
        ))}

        <div className="button-container">
          <button type="button" onClick={handleAddMember}>
            Add Member
          </button>
        </div>

        <h3>Select Payment Method</h3>
        <div className="input-group">
          <label>
            <input
              type="radio"
              value="Credit Card"
              checked={paymentMethod === 'Credit Card'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Credit Card
          </label>
          <label>
            <input
              type="radio"
              value="Debit Card"
              checked={paymentMethod === 'Debit Card'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Debit Card
          </label>
          <label>
            <input
              type="radio"
              value="PayPal"
              checked={paymentMethod === 'PayPal'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            PayPal
          </label>
        </div>

        <div className="button-container">
          <button type="button" onClick={handleBooking}>
            Submit Booking
          </button>
          <button type="button" onClick={onClose}>
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
