import express from 'express';
import { submitContactForm, getAllContacts } from '../Controllers/contactController.js';

const router = express.Router();

// Route to submit contact form
router.post('/contact', submitContactForm);

// Route to get all contact submissions
router.get('/contacts', getAllContacts);

export default router;
