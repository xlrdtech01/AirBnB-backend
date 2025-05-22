'use strict';
const { ReviewImage } = require('../models');
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await ReviewImage.bulkCreate([
      {
        reviewId: 1,
        url: 'https://cdn.pixabay.com/photo/2024/07/01/04/28/mountain-8864325_1280.jpg',
      },
      {
        reviewId: 2,
        url: 'https://cdn.pixabay.com/photo/2023/07/25/18/32/vineyard-8149655_1280.jpg',
      },
      {
        reviewId: 3,
        url: 'https://cdn.pixabay.com/photo/2024/05/14/16/48/street-8761638_1280.png',
      },
    ], { validate: true })
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'ReviewImages';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      reviewId: { [Op.in]: [1, 2, 3] }
    }, {});
  }
};
