// AddRoom.js
import { useState } from 'react';
import axios from 'axios';
import './Addroom.css';  // Import the CSS file

const AddRoom = () => {
  const [formData, setFormData] = useState({
    roomNumber: '',
    availability: 'Available',
    cleaningStatus: 'Cleaned',
    price: '',
    bedType: 'Single',
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/rooms/add", formData);
      setSuccessMessage('Room successfully added!');
    } catch (error) {
      alert('Failed to add room');
    }
  };

  return (
    <div className="add-room-container">
      {successMessage ? (
        <div className="add-room-success">
          <p>{successMessage}</p>
          <button onClick={() => setSuccessMessage('')}>OK</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="add-room-form">
          <h2 className="add-room-title">Add Room</h2>
          <div className="add-room-form-group">
            <label>Room Number:</label>
            <input
              type="number"
              name="roomNumber"
              value={formData.roomNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="add-room-form-group">
            <label>Availability:</label>
            <select name="availability" value={formData.availability} onChange={handleChange}>
              <option value="Available">Available</option>
              <option value="Occupied">Occupied</option>
            </select>
          </div>

          <div className="add-room-form-group">
            <label>Cleaning Status:</label>
            <select name="cleaningStatus" value={formData.cleaningStatus} onChange={handleChange}>
              <option value="Cleaned">Cleaned</option>
              <option value="Dirty">Dirty</option>
            </select>
          </div>

          <div className="add-room-form-group">
            <label>Price:</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>

          <div className="add-room-form-group">
            <label>Bed Type:</label>
            <select name="bedType" value={formData.bedType} onChange={handleChange}>
              <option value="Single">Single</option>
              <option value="Double">Double</option>
              <option value="Deluxe">Deluxe</option>
              <option value="Family">Family</option>
              <option value="Luxury">Luxury</option>
              <option value="Executive">Executive</option>
            </select>
          </div>

          <button type="submit" className="add-room-submit">Add Room</button>
        </form>
      )}
    </div>
  );
};

export default AddRoom;
