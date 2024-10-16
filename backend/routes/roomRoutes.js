// routes/roomRoutes.js
import express from 'express';
import { addRoom, getRooms, updateRoom, deleteRoom } from '../Controllers/roomController.js';

const router = express.Router();

// Add room
router.post('/add', addRoom);

// Get all rooms
router.get('/', getRooms);

// Update room by ID
router.put('/:id', updateRoom);

// Delete room by ID
router.delete('/:id', deleteRoom);

export default router;
