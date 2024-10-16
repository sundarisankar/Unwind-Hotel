// controllers/roomController.js
import Room from '../Models/addRoom.js';

// Add new room
export const addRoom = async (req, res) => {
  const { roomNumber, availability, cleaningStatus, price, bedType } = req.body;

  try {
    const room = new Room({ roomNumber, availability, cleaningStatus, price, bedType });
    await room.save();
    res.status(201).json({ message: 'Room successfully added' });
  } catch (error) {
    res.status(400).json({ error: 'Failed to add room' });
  }
};

// Get all rooms
export const getRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch rooms' });
  }
};

// Update room by ID
export const updateRoom = async (req, res) => {
  const { roomNumber, availability, cleaningStatus, price, bedType } = req.body;

  try {
    const room = await Room.findByIdAndUpdate(
      req.params.id,
      { roomNumber, availability, cleaningStatus, price, bedType },
      { new: true } // This option returns the modified document rather than the original.
    );

    if (!room) {
      return res.status(404).json({ error: 'Room not found' }); // Handle case where room is not found
    }

    res.status(200).json({ message: 'Room updated successfully', room });
  } catch (error) {
    res.status(400).json({ error: 'Failed to update room' });
  }
};

// Delete room by ID
export const deleteRoom = async (req, res) => {
  try {
    const room = await Room.findByIdAndDelete(req.params.id);

    if (!room) {
      return res.status(404).json({ error: 'Room not found' }); // Handle case where room is not found
    }

    res.status(200).json({ message: 'Room deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete room' });
  }
};

