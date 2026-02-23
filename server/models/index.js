const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import models
db.User = require('./User')(sequelize, Sequelize.DataTypes);
db.Feedback = require('./Feedback')(sequelize, Sequelize.DataTypes);
db.Contact = require('./Contact')(sequelize, Sequelize.DataTypes);

// Define associations here if any
// db.User.hasMany(db.Feedback);
// db.Feedback.belongsTo(db.User);

module.exports = db;
