import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from 'cors'; // Import CORS
import signupRoutes from "./routes/SignupRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import AdminRoutes from './routes/AdminRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import roomRoutes from './routes/roomRoutes.js';


// Load environment variables
dotenv.config();
const app = express();
app.use(cors());

// Middleware
app.use(express.json()); // To parse JSON request bodies

//  Signup Routes
app.use("/signup", signupRoutes);
// Admin Routes
app.use('/admin', AdminRoutes);

// Booking Routes
app.use('/bookings', bookingRoutes);

// AddRoom Routes
app.use('/rooms', roomRoutes);

// Use the routes
app.use('/contact', contactRoutes);
// Add this line below your other route setups
// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/resort')  
.then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));
// Server setup
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));