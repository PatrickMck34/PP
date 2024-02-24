'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Providers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Name: {
        type: Sequelize.STRING
      },
      domesticViolence: {
        type: Sequelize.BOOLEAN
      },
      LGBTQ: {
        type: Sequelize.BOOLEAN
      },
      crisisResources: {
        type: Sequelize.BOOLEAN
      },
      humanTrafficking: {
        type: Sequelize.BOOLEAN
      },
      military: {
        type: Sequelize.BOOLEAN
      },
      police: {
        type: Sequelize.BOOLEAN
      },
      maleSurvivor: {
        type: Sequelize.BOOLEAN
      },
      childSurvivor: {
        type: Sequelize.BOOLEAN
      },
      confidential: {
        type: Sequelize.BOOLEAN
      },
      nonConfidential: {
        type: Sequelize.BOOLEAN
      },
      healthCenter: {
        type: Sequelize.BOOLEAN
      },
      dvProgram: {
        type: Sequelize.BOOLEAN
      },
      psychProgram: {
        type: Sequelize.BOOLEAN
      },
      callpolice: {
        type: Sequelize.BOOLEAN
      },
      advocacyProgram: {
        type: Sequelize.BOOLEAN
      },
      Phone: {
        type: Sequelize.STRING
      },
      zipCode: {
        type: Sequelize.STRING
      },
      Address: {
        type: Sequelize.STRING
      },
      Users: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Providers');
  }
};