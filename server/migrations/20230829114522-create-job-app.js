'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('JobApps', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      jobTitle: {
        type: Sequelize.STRING
      },
      company: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      jobPosting: {
        type: Sequelize.STRING
      },
      appliedOn: {
        type: Sequelize.DATEONLY
      },
      status: {
        type: Sequelize.STRING,
        validate: {
          isIn: {
            args: [['Awaiting Response', 'Rejected', 'Invited for Interview']],
            msg: "Status must be one of Awaiting Response, Rejected or Invited for Interview"
          }
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('JobApps');
  }
};