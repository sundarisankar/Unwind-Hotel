import Booking from '../Models/Booking.js';

// Create a new booking
export const createBooking = async (req, res) => {
  const newBooking = new Booking(req.body);
  await newBooking.save();
  res.status(201).json(newBooking);
};

// Get all bookings
export const getAllBookings = async (req, res) => {
  const bookings = await Booking.find();
  res.status(200).json(bookings);
};

// Get booking by Room ID
export const getBookingByRoomId = async (req, res) => {
  const booking = await Booking.findOne({ room_id: req.params.room_id });
  if (!booking) return res.status(404).json({ msg: 'Booking not found' });
  res.status(200).json(booking);
};

// Update booking
export const updateBooking = async (req, res) => {
  const updatedBooking = await Booking.findOneAndUpdate(
    { room_id: req.params.room_id },
    req.body,
    { new: true }
  );
  if (!updatedBooking) return res.status(404).json({ msg: 'Booking not found' });
  res.status(200).json(updatedBooking);
};

// Delete booking
export const deleteBooking = async (req, res) => {
  const deletedBooking = await Booking.findOneAndDelete({ room_id: req.params.room_id });
  if (!deletedBooking) return res.status(404).json({ msg: 'Booking not found' });
  res.status(200).json({ msg: 'Booking removed' });
};
