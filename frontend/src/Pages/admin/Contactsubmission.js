import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Contactsubmission.css';




function ContactSubmissions() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await axios.get('http://localhost:4000/contact/contacts');
                setContacts(response.data);
            } catch (error) {
                console.error('Error fetching contact submissions', error);
            }
        };
        fetchContacts();
    }, []);

    return (
        <div className="contact-submissions-container">
            <h2 className="submissions-title">Contact Submissions</h2>
            <table className="submissions-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Message</th>
                        <th>Date Submitted</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact, index) => (
                        <tr key={index}>
                            <td>{contact.name}</td>
                            <td>{contact.email}</td>
                            <td>{contact.mobile}</td>
                            <td>{contact.message}</td>
                            <td>{new Date(contact.submittedAt).toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ContactSubmissions;
