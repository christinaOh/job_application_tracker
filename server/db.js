const { Sequelize } = require('sequelize');
const config = require('./config/config.json')

const sequelize = new Sequelize('job-app-tracker-db', 'username', 'password', {
  host: config.development.storage,
  dialect: 'sqlite'
});

module.exports = sequelize;
