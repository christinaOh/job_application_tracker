const { Model, DataTypes } = require('sequelize');
const sequelize = require('./db');

class JobApp extends Model {}

JobApp.init({
  jobTitle: DataTypes.STRING,
  company: DataTypes.STRING,
  location: DataTypes.STRING,
  jobPosting: DataTypes.STRING,
  appliedOn: DataTypes.DATEONLY,
  status: {
    type: DataTypes.STRING,
    validate: {
      isIn: {
        args: [['Awaiting Response', 'Rejected', 'Invited for Interview']],
        msg: "Status must be one of Awaiting Response, Rejected or Invited for Interview"
      }
    }
  }
}, {
  sequelize,
  modelName: 'JobApp',
});

module.exports = JobApp;
