import express from 'express';
import { registerAdmin, loginAdmin } from '../Controllers/AdminController.js';

const router = express.Router();

// Admin registration route
router.post('/register', registerAdmin);

// Admin login route
router.post('/login', loginAdmin);

export default router;
