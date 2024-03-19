'use strict';
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
options.tableName = "Provider"
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(options, {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Name: {
        type: Sequelize.STRING
      },
      Address: {
        type: Sequelize.STRING
      },
      City: {
        type: Sequelize.STRING
      },
      State: {
        type: Sequelize.STRING
      },
      Phone: {
        type: Sequelize.STRING
      },
      zipCode: {
        type: Sequelize.STRING
      },
      Users: {
        type: Sequelize.STRING
      },
      Approved: {
        type: Sequelize.BOOLEAN
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
      lawEnforcement: {
        type: Sequelize.BOOLEAN
      },
      elderSurvivor: {
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
      legalAdvice: {
        type: Sequelize.BOOLEAN
      },
      forensicExams: {
        type: Sequelize.BOOLEAN
      },
      generalHealth: {
        type: Sequelize.BOOLEAN
      },
      pregnancy: {
        type: Sequelize.BOOLEAN
      },
      housing: {
        type: Sequelize.BOOLEAN
      },
      collegeOnCampus: {
        type: Sequelize.BOOLEAN
      },
      title9: {
        type: Sequelize.BOOLEAN
      },
      tribal: {
        type: Sequelize.BOOLEAN
      },
      coalition: {
        type: Sequelize.BOOLEAN
      },
      std: {
        type: Sequelize.BOOLEAN
      },
      hivSupport: {
        type: Sequelize.BOOLEAN
      },
      immigrants: {
        type: Sequelize.BOOLEAN
      },
      blindDeaf: {
        type: Sequelize.BOOLEAN
      },
      disabled: {
        type: Sequelize.BOOLEAN
      },
      directCareCo: {
        type: Sequelize.BOOLEAN
      },
      directCareMed: {
        type: Sequelize.BOOLEAN
      },
      directCareOther: {
        type: Sequelize.BOOLEAN
      },
      substanceAbuse: {
        type: Sequelize.BOOLEAN
      },
      missingPersons: {
        type: Sequelize.BOOLEAN
      },
      specialNeeds: {
        type: Sequelize.BOOLEAN
      },
      alternativeCare: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
       
        type: Sequelize.DATE
      },
      updatedAt: {
       
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(options);
  }
};