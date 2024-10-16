import { Router } from 'express';
import { createBooking, getAllBookings, getBookingByRoomId, updateBooking, deleteBooking } from '../Controllers/bookingController.js';

const router = Router();

router.post('/create', createBooking);
router.get('/get', getAllBookings);
router.get('/:room_id', getBookingByRoomId);
router.put('/:room_id', updateBooking);
router.delete('/:room_id', deleteBooking);

export default router;
