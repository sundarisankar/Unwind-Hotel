import Contact from '../Models/Contact.js';

// POST: Submit a contact form
export async function submitContactForm(req, res) {
    const { name, email, mobile, message } = req.body;
    try {
        const newContact = new Contact({ name, email, mobile, message });
        await newContact.save();
        res.status(200).json({ message: 'Contact form submitted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Error submitting contact form' });
    }
}

// GET: Retrieve all contact submissions
export async function getAllContacts(req, res) {
    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching contacts' });
    }
}
