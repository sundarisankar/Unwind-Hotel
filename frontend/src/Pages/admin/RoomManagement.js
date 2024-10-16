import React, { useEffect, useState } from 'react';
import axios from 'axios';

function RoomManagement() {
  const [rooms, setRooms] = useState([]);
  const [editingRoom, setEditingRoom] = useState(null);
  const [newRoomData, setNewRoomData] = useState({
    roomNumber: '',
    availability: 'Available',
    cleaningStatus: 'Cleaned',
    price: '',
    bedType: 'Single'
  });

  // Fetch room list from backend
  const fetchRooms = async () => {
    try {
      const response = await axios.get('http://localhost:4000/rooms'); // Adjust the URL as needed
      setRooms(response.data);
    } catch (error) {
      console.error('Error fetching rooms:', error);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  // Handle editing room data
  const handleEdit = (room) => {
    setEditingRoom(room._id); // Ensure you're using the correct ID property
    setNewRoomData({
      roomNumber: room.roomNumber,
      availability: room.availability,
      cleaningStatus: room.cleaningStatus,
      price: room.price,
      bedType: room.bedType
    });
  };

  // Handle update room
  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:4000/rooms/${editingRoom}`, newRoomData);
      fetchRooms(); // Refresh room list
      setEditingRoom(null); // Reset editing state
      setNewRoomData({
        roomNumber: '',
        availability: 'Available',
        cleaningStatus: 'Cleaned',
        price: '',
        bedType: 'Single'
      }); // Reset new room data
    } catch (error) {
      console.error('Error updating room:', error);
    }
  };

  // Handle deleting room
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/rooms/${id}`);
      fetchRooms(); // Refresh room list
    } catch (error) {
      console.error('Error deleting room:', error);
    }
  };

  return (
    <div>
      <h1>Room Management System</h1>
      <table>
        <thead>
          <tr>
            <th>Room Number</th>
            <th>Availability</th>
            <th>Cleaning Status</th>
            <th>Price</th>
            <th>Bed Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room) => (
            <tr key={room._id}>
              <td>{room.roomNumber}</td>
              <td>{room.availability}</td>
              <td>{room.cleaningStatus}</td>
              <td>{room.price}</td>
              <td>{room.bedType}</td>
              <td>
                <button onClick={() => handleEdit(room)}>Edit</button>
                <button onClick={() => handleDelete(room._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingRoom && (
        <div>
          <h2>Edit Room</h2>
          <input
            type="text"
            value={newRoomData.roomNumber}
            onChange={(e) => setNewRoomData({ ...newRoomData, roomNumber: e.target.value })}
            placeholder="Room Number"
          />
          <select
            value={newRoomData.availability}
            onChange={(e) => setNewRoomData({ ...newRoomData, availability: e.target.value })}
          >
            <option value="Available">Available</option>
            <option value="Occupied">Occupied</option>
          </select>
          <select
            value={newRoomData.cleaningStatus}
            onChange={(e) => setNewRoomData({ ...newRoomData, cleaningStatus: e.target.value })}
          >
            <option value="Cleaned">Cleaned</option>
            <option value="Dirty">Dirty</option>
          </select>
          <input
            type="text"
            value={newRoomData.price}
            onChange={(e) => setNewRoomData({ ...newRoomData, price: e.target.value })}
            placeholder="Price"
          />
          <input
            type="text"
            value={newRoomData.bedType}
            onChange={(e) => setNewRoomData({ ...newRoomData, bedType: e.target.value })}
            placeholder="Bed Type"
          />
          <button onClick={handleUpdate}>Update Room</button>
        </div>
      )}
    </div>
  );
}

export default RoomManagement;
