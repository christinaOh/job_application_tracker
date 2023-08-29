const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('job-app-tracker-db', 'username', 'password', {
  host: 'localhost',
  dialect: 'sqlite'
});

module.exports = sequelize;
