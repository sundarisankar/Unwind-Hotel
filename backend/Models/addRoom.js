// models/Room.js
import mongoose from 'mongoose';

// Personal Information Schema
const personalInfoSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  customerAge: { type: Number, required: true },
  customerAddress: { type: String, required: true },
  customerAadharNo: { type: String, required: true },
  phone: { type: mongoose.Schema.Types.ObjectId, ref: 'signup', required: true }
},{ _id: true }
);

// Booking Details Schema
const bookingDetailsSchema = new mongoose.Schema({
  personalInfo: [personalInfoSchema],
  bookingDate: { type: Date, default: Date.now },
  checkInDate: { type: Date, required: true },
  checkOutDate: { type: Date, required: true },
},{ _id: true });

const roomSchema = new mongoose.Schema({
  roomNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  availability: {
    type: String,
    enum: ['Available', 'Occupied'],
    required: true,
  },
  cleaningStatus: {
    type: String,
    enum: ['Cleaned', 'Dirty'],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  bedType: {
    type: String,
    enum: ['Single', 'Double', 'Deluxe', 'Family', 'Luxury', 'Executive'],
   
  },
  bookingDetails: [bookingDetailsSchema],

});

const Room = mongoose.model('addroom', roomSchema);
export default Room;
