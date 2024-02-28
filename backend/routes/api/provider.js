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
    
    
    providers = {
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
  
   const user = req.params.userId;
  
      const provider = await Provider.findAll({
       
       });
  
      return res.json({
        provider
      });
    },
  
  );
  module.exports = router;