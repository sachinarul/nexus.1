const { Feedback } = require('../models');

exports.createFeedback = async (req, res) => {
    try {
        const { message, rating, userId, name, email } = req.body;
        const feedback = await Feedback.create({
            message,
            rating,
            userId,
            name,
            email
        });
        res.status(201).json(feedback);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getFeedbacks = async (req, res) => {
    try {
        const feedbacks = await Feedback.findAll();
        res.json(feedbacks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
