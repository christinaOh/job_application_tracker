const { Sequelize } = require('sequelize');
const config = require('./config/config.json')

const sequelize = new Sequelize('job-app-tracker-db', process.env.USERNAME, process.env.PASSWORD, {
  host: config.production.storage,
  dialect: 'sqlite'
});

module.exports = sequelize;
