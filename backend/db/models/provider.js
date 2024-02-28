'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Provider extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Provider.init({
    Name: DataTypes.STRING,
    Address: DataTypes.STRING,
    Phone: DataTypes.STRING,
    zipCode: DataTypes.STRING,
    Users: DataTypes.STRING,
    domesticViolence: DataTypes.BOOLEAN,
        LGBTQ: DataTypes.BOOLEAN,
        crisisResources: DataTypes.BOOLEAN,
        humanTrafficking: DataTypes.BOOLEAN,
        military: DataTypes.BOOLEAN,
        lawEnforcement: DataTypes.BOOLEAN,
        elderSurvivor: DataTypes.BOOLEAN,
        maleSurvivor: DataTypes.BOOLEAN,
        childSurvivor: DataTypes.BOOLEAN,
        confidential: DataTypes.BOOLEAN,
        nonConfidential: DataTypes.BOOLEAN,
        healthCenter: DataTypes.BOOLEAN,
        dvProgram: DataTypes.BOOLEAN,
        psychProgram: DataTypes.BOOLEAN,
        callpolice: DataTypes.BOOLEAN,
        advocacyProgram: DataTypes.BOOLEAN,
        legalAdvice: DataTypes.BOOLEAN,
        forensicExams: DataTypes.BOOLEAN,
        generalHealth: DataTypes.BOOLEAN,
        pregnancy: DataTypes.BOOLEAN,
        housing: DataTypes.BOOLEAN,
        collegeOnCampus: DataTypes.BOOLEAN,
        title9: DataTypes.BOOLEAN,
        tribal: DataTypes.BOOLEAN,
        coalition: DataTypes.BOOLEAN,
        std: DataTypes.BOOLEAN,
        hivSupport: DataTypes.BOOLEAN,
        immigrants: DataTypes.BOOLEAN,
        blindDeaf: DataTypes.BOOLEAN,
        disabled: DataTypes.BOOLEAN,
        directCareCo: DataTypes.BOOLEAN,
        directCareMed: DataTypes.BOOLEAN,
        directCareOther: DataTypes.BOOLEAN,
        substanceAbuse: DataTypes.BOOLEAN,
        missingPersons: DataTypes.BOOLEAN,
        specialNeeds: DataTypes.BOOLEAN,

        
  }, {
    sequelize,
    modelName: 'Provider',
  });
  return Provider;
};