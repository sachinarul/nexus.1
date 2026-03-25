const { Contact } = require('../models');

exports.submitContact = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;
        const contact = await Contact.create({
            name,
            email,
            subject,
            message
        });
        res.status(201).json({ message: 'Contact form submitted successfully', contact });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.findAll();
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
