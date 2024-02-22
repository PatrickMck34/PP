"use strict";
let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}
const bcrypt = require("bcryptjs");
options.tableName = "Users";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // options.schema = process.env.NODE_ENV
    // options.tableName = 'Users'
    return queryInterface.bulkInsert(
      options,
      [
        {
          username: "Demo-lition",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          username: "FakeUser1",
          hashedPassword: bcrypt.hashSync("password2"),
        },
        {
          username: "DemoUser",
          hashedPassword: bcrypt.hashSync("123456"),
        },
        {
          username: "FakeUser2",
          hashedPassword: bcrypt.hashSync("password3"),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;

    return queryInterface.bulkDelete(
      options,
      {
        username: { [Op.in]: ["Demo-lition", "FakeUser1", "FakeUser2"] },
      },
      {}
    );
  },
};
