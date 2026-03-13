const express = require('express');
const router = express.Router();
const { createFeedback, getFeedbacks } = require('../controllers/feedbackController');

router.post('/', createFeedback);
router.get('/', getFeedbacks); // Should be protected in real app

module.exports = router;
