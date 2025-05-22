// backend/config/database.js
const config = require('./index');

module.exports = {
  development: {
    url: process.env.DB_URL || config.dbFile,
    dialect: process.env.DB_URL ? "postgres" : "sqlite",
    seederStorage: "sequelize",
    logQueryParameters: true,
    typeValidation: true,
    dialectOptions: process.env.DB_URL ? {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    } : {}
  },
  production: {
    url: process.env.DB_URL,
    dialect: 'postgres',
    seederStorage: 'sequelize',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
    define: {
      schema: process.env.SCHEMA
    }
  }
};