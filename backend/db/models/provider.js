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
    id: {
      type:DataTypes.INTEGER,
      primaryKey: true,
    },
    Name:{
      type: DataTypes.STRING,
    },
    Address: {
      type: DataTypes.STRING
    },
    Phone: {
      type: DataTypes.STRING
    },
    zipCode: {
      type: DataTypes.STRING
    },
    Users: {
      type: DataTypes.STRING
    },
    domesticViolence: {
      type: DataTypes.BOOLEAN
    },
    LGBTQ: {
      type: DataTypes.BOOLEAN
    },
    crisisResources: {
      type: DataTypes.BOOLEAN
    },
    humanTrafficking: {
      type: DataTypes.BOOLEAN
    },
    military: {
      type: DataTypes.BOOLEAN
    },
    lawEnforcement: {
      type: DataTypes.BOOLEAN
    },
    elderSurvivor: {
      type: DataTypes.BOOLEAN
    },
    maleSurvivor: {
      type: DataTypes.BOOLEAN
    },
    childSurvivor: {
      type: DataTypes.BOOLEAN
    },
    confidential: {
      type: DataTypes.BOOLEAN
    },
    nonConfidential: {
      type: DataTypes.BOOLEAN
    },
    healthCenter: {
      type: DataTypes.BOOLEAN
    },
    dvProgram: {
      type: DataTypes.BOOLEAN
    },
    psychProgram: {
      type: DataTypes.BOOLEAN
    },
    callpolice: {
      type: DataTypes.BOOLEAN
    },
    advocacyProgram: {
      type: DataTypes.BOOLEAN
    },
    legalAdvice: {
      type: DataTypes.BOOLEAN
    },
    forensicExams: {
      type: DataTypes.BOOLEAN
    },
    generalHealth: {
      type: DataTypes.BOOLEAN
    },
    pregnancy: {
      type: DataTypes.BOOLEAN
    },
    housing: {
      type: DataTypes.BOOLEAN
    },
    collegeOnCampus: {
      type: DataTypes.BOOLEAN
    },
    title9: {
      type: DataTypes.BOOLEAN
    },
    tribal: {
      type: DataTypes.BOOLEAN
    },
    coalition: {
      type: DataTypes.BOOLEAN
    },
    std: {
      type: DataTypes.BOOLEAN
    },
    hivSupport: {
      type: DataTypes.BOOLEAN
    },
    immigrants: {
      type: DataTypes.BOOLEAN
    },
    blindDeaf: {
      type: DataTypes.BOOLEAN
    },
    disabled: {
      type: DataTypes.BOOLEAN
    },
    directCareCo: {
      type: DataTypes.BOOLEAN
    },
    directCareMed: {
      type: DataTypes.BOOLEAN
    },
    directCareOther: {
      type: DataTypes.BOOLEAN
    },
    substanceAbuse: {
      type: DataTypes.BOOLEAN
    },
    missingPersons: {
      type: DataTypes.BOOLEAN
    },
    specialNeeds: {
      type: DataTypes.BOOLEAN
    },
    alternativeCare: {
      type: DataTypes.BOOLEAN
    }
        
  }, {
    sequelize,
    modelName: 'Provider',
  });
  return Provider;
};