import Signup from "../Models/SignupModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const signupController = {
  // Create new user
  async registerUser(req, res) {
    const { name, email, phone, password } = req.body;
    try {
      // Check if the user already exists
      const existingUser = await Signup.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }
      // Hash the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      // Create new user
      const newUser = new Signup({
        name,
        email,
        phone,
        password: hashedPassword,
      });
      console.log("newUser", newUser);
      await newUser.save();

      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      res.status(500).json({ error: "Error registering user" });
    }
  },
  // User login
  async loginUser(req, res) {
    const { email, password } = req.body;
    try {
      const user = await Signup.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "User not found" });
      }
      // Check password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Wrong Password" });
      }
      // Generate JWT token
      const token = jwt.sign(
        { id: user._id, email: user.email },
        "your_jwt_secret",
        {
          expiresIn: "1h",
        }
      );

      // Include user details in the response
      res.status(200).json({
        message: "Login successful",
        token,
        userId: user._id, // return userId
        userName: user.name, // return userName
        email: user.email, // return email
      });
    } catch (error) {
      res.status(500).json({ error: "Error logging in" });
    }
  },
  // Get all users
  async getAllUsers(req, res) {
    try {
      const users = await Signup.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: "Error fetching users" });
    }
  },
  // Get a single user by ID
  async getUserById(req, res) {
    const { id } = req.params;
    try {
      const user = await Signup.findById(id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: "Error fetching user" });
    }
  },

  async updateUser(req, res) {
    const userId = req.params.id; // ID from the URL
  const { bookingDetails } = req.body; // Booking details from the request body

  try {
    // Find the user by ID and update their booking details
    const user = await Signup
    .findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Push the new booking to the user's bookingDetails array
    user.bookingDetails.push(...bookingDetails);

    // Save the updated user
    await user.save();

    res.status(200).json({ message: 'Booking updated successfully', user });
  } catch (error) {
    console.error('Error updating booking:', error);
    res.status(500).json({ message: 'Server error while updating booking' });
  }
  },

  // Delete user by ID
  async deleteUser(req, res) {
    const { id } = req.params;
    try {
      const deletedUser = await Signup.findByIdAndDelete(id);
      if (!deletedUser) {
        return res.status(404).json({ message: "User not found" });
      }

      res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Error deleting user" });
    }
  },
};
export default signupController;
