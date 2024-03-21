const express = require("express");
const { emptyQuery } = require("pg-protocol/dist/messages");
const { Error } = require("sequelize");
const {
  Provider
} = require("../../db/models");

const router = express.Router();
const { setTokenCookie, restoreUser } = require("../../utils/auth");
const { useSelector } = require("react-redux");


db = require("../../config/database");

router.post("/new", async (req, res) => {

  const {
    Name,
    Users,
    Address,
    City,
    State,
    Phone,
    zipCode,
    Approved,
    domesticViolence,
    LGBTQ,
    crisisResources,
    humanTrafficking,
    military,
    lawEnforcement,
    elderSurvivor,
    childSurvivor,
    confidential,
    nonConfidential,
    healthCenter,
    dvProgram,
    psychProgram,
    callpolice,
    advocacyProgram,
    legalAdvice,
    forensicExams,
    generalHealth,
    pregnancy,
    housing,
    collegeOnCampus,
    title9,
    tribal,
    coalition,
    std,
    hivSupport,
    immigrants,
    blindDeaf,
    disabled,
    directCareCo,
    directCareMed,
    directCareOther,
    substanceAbuse,
    missingPersons,
    specialNeeds,
    alternativeCare,
  } = req.body;
  const provider = await Provider.create({
    Name,
    Users,
    Address,
    City,
    State,
    Phone,
    zipCode,
    Approved,
    domesticViolence,
    LGBTQ,
    crisisResources,
    humanTrafficking,
    military,
    lawEnforcement,
    elderSurvivor,
    childSurvivor,
    confidential,
    nonConfidential,
    healthCenter,
    dvProgram,
    psychProgram,
    callpolice,
    advocacyProgram,
    legalAdvice,
    forensicExams,
    generalHealth,
    pregnancy,
    housing,
    collegeOnCampus,
    title9,
    tribal,
    coalition,
    std,
    hivSupport,
    immigrants,
    blindDeaf,
    disabled,
    directCareCo,
    directCareMed,
    directCareOther,
    substanceAbuse,
    missingPersons,
    specialNeeds,
    alternativeCare,
  });
  await provider.save();

  const providers = {
    Name,
    Address,
    City,
    State,
    Phone,
    zipCode,

    Approved,
    domesticViolence,
    LGBTQ,
    crisisResources,
    humanTrafficking,
    military,
    lawEnforcement,
    elderSurvivor,

    childSurvivor,
    confidential,
    nonConfidential,
    healthCenter,
    dvProgram,
    psychProgram,
    callpolice,
    advocacyProgram,
    legalAdvice,
    forensicExams,
    generalHealth,
    pregnancy,
    housing,
    collegeOnCampus,
    title9,
    tribal,
    coalition,
    std,
    hivSupport,
    immigrants,
    blindDeaf,
    disabled,
    directCareCo,
    directCareMed,
    directCareOther,
    substanceAbuse,
    missingPersons,
    specialNeeds,
    alternativeCare,
  };

  return res.status(201).json(providers);
});
router.put("/:providerId", restoreUser, async (req, res) => {

  const {
    id,
    Name,
    Address,
    City,
    State,
    Phone,
    zipCode,

    Approved,
    domesticViolence,
    LGBTQ,
    crisisResources,
    humanTrafficking,
    military,
    lawEnforcement,
    elderSurvivor,
    childSurvivor,
    confidential,
    nonConfidential,
    healthCenter,
    dvProgram,
    psychProgram,
    callpolice,
    advocacyProgram,
    legalAdvice,
    forensicExams,
    generalHealth,
    pregnancy,
    housing,
    collegeOnCampus,
    title9,
    tribal,
    coalition,
    std,
    hivSupport,
    immigrants,
    blindDeaf,
    disabled,
    directCareCo,
    directCareMed,
    directCareOther,
    substanceAbuse,
    missingPersons,
    specialNeeds,
    alternativeCare,
  } = req.body;
  const provider = await Provider.findByPk(id)
  await provider.update({
    Name: Name,
    Address: Address,
    City: City,
    State: State,
    Phone: Phone,
    zipCode: zipCode,
    Approved: Approved,
    domesticViolence: domesticViolence,
    LGBTQ: LGBTQ,
    crisisResources: crisisResources,
    humanTrafficking: humanTrafficking,
    military: military,
    lawEnforcement: lawEnforcement,
    elderSurvivor: elderSurvivor,
    childSurvivor: childSurvivor,
    confidential: confidential,
    nonConfidential: nonConfidential,
    healthCenter: healthCenter,
    dvProgram: dvProgram,
    psychProgram: psychProgram,
    callpolice: callpolice,
    advocacyProgram: advocacyProgram,
    legalAdvice: legalAdvice,
    forensicExams: forensicExams,
    generalHealth: generalHealth,
    pregnancy: pregnancy,
    housing: housing,
    collegeOnCampus: collegeOnCampus,
    title9: title9,
    tribal: tribal,
    coalition: coalition,
    std: std,
    hivSupport: hivSupport,
    immigrants: immigrants,
    blindDeaf: blindDeaf,
    disabled: disabled,
    directCareCo: directCareCo,
    directCareMed: directCareMed,
    directCareOther: directCareOther,
    substanceAbuse: substanceAbuse,
    missingPersons: missingPersons,
    specialNeeds: specialNeeds,
    alternativeCare: alternativeCare,
  });



  provider.save()
  return res.status(201).json(provider);
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

router.get("/all", async (req, res) => {

  const providers = await Provider.findAll();

  return res.status(200).json(providers);
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id

  await Provider.destroy({
    where: {
      id: id,
    },
  });

  return res.json({ message: "Successfully Deleted", statusCode: 200 });
});

module.exports = router;