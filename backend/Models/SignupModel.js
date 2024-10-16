import mongoose from "mongoose";

// Personal Information Schema
const bookingDetailsSchema = new mongoose.Schema({
  personalInfo: [
    {
      customerName: { type: String, required: true },
      customerAge: { type: Number, required: true },
      customerAddress: { type: String, required: true },
      customerAadharNo: { type: String, required: true },
      phone: { type: String }, // Assuming phone comes from signup details
    },
  ],
  roomNumber: { type: String, required: true },
  bookingDate: { type: Date, required: true },
  checkInDate: { type: Date, required: true },
  checkOutDate: { type: Date, required: true },
  price: { type: Number, required: true },
});

const SignupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  bookingDetails: [bookingDetailsSchema],
});
// Create the model and export it
const Signup = mongoose.model("Signup", SignupSchema);

export default Signup;
