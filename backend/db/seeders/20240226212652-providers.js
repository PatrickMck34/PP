'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // Your code here
  
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Providers', [{
      id: 1,
      Name:"Arizona Department of Juvenile Corrections",
      Address:"400 W Congress St # 156",
      Phone:"5207244751",
      zipCode:"85701",
      Approved: true,
      
domesticViolence: false,
LGBTQ: false,
crisisResources: false,
humanTrafficking: false,
military: false,
lawEnforcement: false,
elderSurvivor: false,
maleSurvivor: false,
childSurvivor: false,
confidential: false,
nonConfidential: false,
healthCenter: false,
dvProgram: false,
psychProgram: false,
callpolice: true,
advocacyProgram: true,
legalAdvice: true,
forensicExams: false,
generalHealth: false,
pregnancy: false,
housing: false,
collegeOnCampus: false,
title9: false,
tribal: false,
coalition: false,
std: false,
hivSupport: false,
immigrants: false,
blindDeaf: false,
disabled: false,
directCareCo: false,
directCareMed: false,
directCareOther: false,
substanceAbuse: false,
missingPersons: false,
specialNeeds: false,
alternativeCare: false

}, {
  id: 2,
  Name: "Arizona Children's Association",
  Address: "3716 E Columbia St",
  Phone: "8009447611",
  zipCode: "85714",
  City: "Tucson",
  State: "AZ",
  childSurvivor: true,
  psychProgram: true,
  advocacyProgram: true,
  directCareCo: true,
  Approved: true,
  
  }, {
  id: 3,
  Name: "Tucson Medical Health Center",
  Address: "5301 E Grant Rd",
  Phone: "5203275461",
  zipCode: "85712",
  forensicExams: true,
  generalHealth: true,
  pregnancy: true,
  psychProgram: true,
  advocacyProgram: true,
  alternativeCare: true,
  std: true,
  hivSupport: true,
  directCareMed: true,
  },{
id: 4,
Name:"SACASA",
Address:"1600 N Country Club Rd",
Phone:"5203271171",
zipCode:"85716",
dvProgram: true,
LGBTQ: true,
humanTrafficking: true,
military: true,
elderSurvivor: true,
childSurvivor: true,
psychProgram: true,
advocacyProgram: true,
alternativeCare: true,
housing: true,
coalition: true,
immigrants: true,
blindDeaf: true,
disabled: true,
directCareCo: true,
Approved: true,
},{
  id: 5,
Name:"Victim Resources ( U of A)",
Address:"1224 E Lowell St",
Phone:"5206215767",
zipCode:"85721",
LGBTQ: true,
military: true,
psychProgram: true,
advocacyProgram: true,
collegeOnCampus: true,
title9: true,
std: true,
hivSupport: true,
immigrants: true,
disabled: true,
Approved: true,
},{
  id: 6,
  Name:"University Medical Center",
  Address:"1625 N. Campbell Ave.",
  Phone:"5206940111",
  zipCode:"85724",
  forensicExams: true,
  generalHealth: true,
  pregnancy: true,
  psychProgram: true,
  advocacyProgram: true,
  collegeOnCampus: true,
  std: true,
  hivSupport: true,
  immigrants: true,
  blindDeaf: true,
  disabled: true,
  Approved: true,
},{
  id: 7,
  Name:"Theresa Lee Clinic",
  Address:"1493 W Commerce Ct",
  Phone:"5207243995",
  zipCode:"85745",
  generalHealth: true,
  pregnancy: true,
  std: true,
  hivSupport: true,
  Approved: true,

},{
  id: 8,
  Name:"Emerge",
  Address:"2545 E Adams St",
  Phone:"5207954266",
  zipCode:"85716",
  dvProgram: true,
  LGBTQ: true,
  humanTrafficking: true,
  lawEnforcement: true,
  advocacyProgram: true,
  housing: true,
  coalition: true,
  immigrants: true,
  directCareCo: true,
  Approved: true,
},{
  id: 9,
  Name:"SAAF- anti violence Program",
  Address:"375 S Euclid Ave Tucson",
  Phone:"5206287223",
  zipCode:"85719",
  LGBTQ: true,
  Approved: true,

}, {
  id: 10,
  Name:"Tucson Police Department",
  Address:"270 S Stone Ave",
  Phone:"5207915032",
  zipCode:"85701",
  humanTrafficking: true,
  lawEnforcement: true,
  legalAdvice: true,
  Approved: true,
},{
  id: 11,
  Name:"University of Arizona Police Department",
  Address:"1852 E 1st St, Tucson",
  Phone:"5206218273",
  zipCode:"85721",
  humanTrafficking: true,
  lawEnforcement: true,
  collegeOnCampus: true,
  title9: true,
  Approved: true,
}




], {})

  // ],{});
  // },
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Providers", null, {});
  }
//   async down (queryInterface, Sequelize) {
//     /**
//      * Add commands to revert seed here.
//      *
//      * Example:
//      * await queryInterface.bulkDelete('People', null, {});
//   */
// }

}