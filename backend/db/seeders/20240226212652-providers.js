'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Provider', [{
      Name: "Arizona Department of Juvenile Corrections",
      Address: "400 W Congress St # 156, Tucson, AZ",
      Phone: "5207244751",
      zipCode: "85701",
   
      domesticViolence: false,
          LGBTQ: false,
          crisisResources: DataTypes.BOOLEAN,
          humanTrafficking: DataTypes.BOOLEAN,
          military: DataTypes.BOOLEAN,
          police: true,
          maleSurvivor: DataTypes.BOOLEAN,
          childSurvivor: DataTypes.BOOLEAN,
          confidential: DataTypes.BOOLEAN,
          nonConfidential: DataTypes.BOOLEAN,
          healthCenter: DataTypes.BOOLEAN,
          dvProgram: DataTypes.BOOLEAN,
          psychProgram: DataTypes.BOOLEAN,
          callpolice: DataTypes.BOOLEAN,
          advocacyProgram: true,
          
    }]);
  },
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
  */}
  }
