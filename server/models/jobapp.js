'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class JobApp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
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
  return JobApp;
};