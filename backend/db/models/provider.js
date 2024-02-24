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
        police: DataTypes.BOOLEAN,
        maleSurvivor: DataTypes.BOOLEAN,
        childSurvivor: DataTypes.BOOLEAN,
        confidential: DataTypes.BOOLEAN,
        nonConfidential: DataTypes.BOOLEAN,
        healthCenter: DataTypes.BOOLEAN,
        dvProgram: DataTypes.BOOLEAN,
        psychProgram: DataTypes.BOOLEAN,
        callpolice: DataTypes.BOOLEAN,
        advocacyProgram: DataTypes.BOOLEAN,
        
  }, {
    sequelize,
    modelName: 'Provider',
  });
  return Provider;
};