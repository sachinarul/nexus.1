const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./models');

// Routes
const authRoutes = require('./routes/authRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');
const contactRoutes = require('./routes/contactRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database Synchronization
db.sequelize.sync({ force: false }) // Set force: true to drop tables on restart (DEV only)
    .then(() => {
        console.log('Database synced successfully.');
    })
    .catch((err) => {
        console.error('Failed to sync database:', err.message);
    });

// Routes
app.use('/api/auth', authRoutes); // /api/auth/register, /api/auth/login
app.use('/api/feedback', feedbackRoutes); // /api/feedback
app.use('/api/contact', contactRoutes); // /api/contact

// Root Route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Noble Nexus API' });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
