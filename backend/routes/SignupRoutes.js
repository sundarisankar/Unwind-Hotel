import express from "express";
import signupController from "../Controllers/SignupController.js";
const router = express.Router();
// Register user
router.post("/signup", signupController.registerUser);

// Login user
router.post("/login", signupController.loginUser);

// Get all users
router.get("/users", signupController.getAllUsers);

// Get user by ID
router.get("/users/:id", signupController.getUserById);

// Update user by ID
router.put("/users/:id", signupController.updateUser);

// Delete user by ID
router.delete("/users/:id", signupController.deleteUser);

export default router;