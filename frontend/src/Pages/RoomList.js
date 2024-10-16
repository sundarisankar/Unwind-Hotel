import { useEffect, useState } from 'react';
import axios from 'axios';
import './RoomList.css'; // Import the CSS file for styling
import Header from './Header';
import { useNavigate } from 'react-router-dom';

const RoomList = () => {
  const [rooms, setRooms] = useState([]); // State to store room data
  const navigate = useNavigate(); // useNavigate hook for navigation

  // Fetch room data from backend
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get("http://localhost:4000/rooms");
        setRooms(response.data); // Set the rooms data from response
      } catch (error) {
        console.error('Error fetching room data:', error);
      }
    };
    fetchRooms();
  }, []); // Empty dependency array ensures this runs once when component mounts

  // Handle room click to navigate to booking form
  const handleRoomClick = (room) => {
    if (room.availability === 'Occupied') {
      alert('Booking already booked');
    } else {
      navigate('/bookingform', { state: { room }}); // Pass room data via route state
    }
  };

  // Group rooms by bed type for display
  const groupedRooms = rooms.reduce((acc, room) => {
    acc[room.bedType] = acc[room.bedType] || [];
    acc[room.bedType].push(room);
    return acc;
  }, {});

  return (
    <div className="room-list-container">
      <Header /> {/* Header component */}
      <h2>Available Rooms</h2>
      {Object.keys(groupedRooms).map((bedType) => (
        <div key={bedType} className="room-row">
          <h3>{bedType} Rooms</h3>
          <div className="room-grid">
            {groupedRooms[bedType].map((room) => (
              <div
                key={room._id}
                className={`room-box ${room.availability === 'Occupied' ? 'occupied' : 'available'}`}
                onClick={() => handleRoomClick(room)} // Navigate to booking form on click
              >
                <span className="room-number">Room #{room.roomNumber}</span>
                <div className="room-details">
                  <p><strong>Bed Type:</strong> {room.bedType}</p>
                  <p><strong>Price:</strong> ${room.price}</p>
                  <p><strong>Cleaning Status:</strong> {room.cleaningStatus}</p>
                  <p><strong>Availability:</strong> {room.availability}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoomList;
