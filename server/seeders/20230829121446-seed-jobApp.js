'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('JobApps', [{
      jobTitle: 'Software Engineer',
      company: 'Pinterest',
      location: 'Remote',
      jobPosting: 'https://www.pinterestcareers.com/job-search-results/?primary_category=University',
      appliedOn: '2023-08-11',
      status: 'Awaiting Response',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    }, {
      jobTitle: 'Fullstack Software Engineer',
      company: 'University of British Columbia',
      location: 'Vancouver, BC',
      jobPosting: 'https://students.ubc.ca/career',
      appliedOn: '2023-08-15',
      status: 'Awaiting Response',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    }, {
      jobTitle: 'Associate Software Engineer',
      company: 'TD',
      location: 'Remote',
      jobPosting: 'https://jobs.td.com/en-CA/',
      appliedOn: '2023-08-21',
      status: 'Rejected',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
