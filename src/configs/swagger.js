const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.1",
    info: {
      title: "COVID-19 Registration Data Recording System",
      version: "v1",
    },
  },
  apis: ["./src/controllers/*.js"], // files containing annotations as above
};

module.exports = swaggerJsdoc(options);