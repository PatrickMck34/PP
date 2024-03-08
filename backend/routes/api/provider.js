const express = require("express");
const { emptyQuery } = require("pg-protocol/dist/messages");
const { Error } = require("sequelize");
const {
    Provider
} = require("../../db/models");

const router = express.Router();
const { setTokenCookie, restoreUser } = require("../../utils/auth");
const { useSelector } = require("react-redux");

db = require("../../../backend/config/database");

router.post("/", restoreUser, async (req, res) => {
    
    const {
        name,
        address,
        phone,
        zipCode,
        Users,
        domesticViolence,
        LGBTQ,
        crisisResources,
        humanTrafficking,
        military,
        police,
        maleSurvivor,
        childSurvivor,
        confidential,
        nonConfidential,
        healthCenter,
        dvProgram,
        psychProgram,
        callpolice,
        advocacyProgram,
    } = req.body;
    const provider = await Provider.create({
        name,
        address,
        phone,
        zipCode,
        Users,
        domesticViolence,
        LGBTQ,
        crisisResources,
        humanTrafficking,
        military,
        police,
        maleSurvivor,
        childSurvivor,
        confidential,
        nonConfidential,
        healthCenter,
        dvProgram,
        psychProgram,
        callpolice,
        advocacyProgram,
    });
    
    
    const providers = {
        name,
        address,
        phone,
    zipCode,
    Users,
    domesticViolence,
    LGBTQ,
    crisisResources,
    humanTrafficking,
    military,
    police,
    maleSurvivor,
    childSurvivor,
    confidential,
    nonConfidential,
    healthCenter,
    dvProgram,
    psychProgram,
    callpolice,
    advocacyProgram,
};

return res.status(201).json(providers);
});
router.get("/", async (req, res) => {
    // Parse the results from the headers
    const values = JSON.parse(req.headers['x-results']);
  
    // Create a dynamic query object based on the user input
    const query = {};
    for (const key in values) {
      if (values[key] === true) {
        query[key] = true;
      }
    }
  
    // Find all providers that match the query
    const providers = await Provider.findAll({
      where: query
    });
  
    return res.status(200).json(providers);
  });
  
  
  module.exports = router;