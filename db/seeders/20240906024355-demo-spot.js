'use strict';

const { Spot } = require('../models');
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await Spot.bulkCreate([
      {
        ownerId: 1,
        address: "1 Main Street",
        city: "Wasilla",
        state: "Alaska",
        country: "USA",
        lat: 11.11111,
        lng: -11.11111,
        name: "Lake Cabin",
        description: "Beautiful secluded lake cabin. The sunset view behind the mountain is one you will never forgot. If you have your fishing license this is a prime spot to catch your daily limit. The outdoor fire pit is begging for you to roast a marshmellow over it in the midnight sun. ",
        price: 72
      },
      {
        ownerId: 2,
        address: "2 Dove Dr",
        city: "Sonoma",
        state: "California",
        country: "USA",
        lat: 22.2222,
        lng: -22.2222,
        name: "Winery Getaway",
        description: "Gorgeous getaway hidden umong the grapes. Enjoy an evening stroll through the grapes with a glass of wine in hand. Stop by our showroom where one of our employees will let you sample all of our wines. You get one free glass a day, and a discount on all our bottles. Our bottles make great souvenirs!",
        price: 120
      },
      {
        ownerId: 3,
        address: "3 Lovely Ln",
        city: "Denver",
        state: "Colorado",
        country: "USA",
        lat: 33.3333,
        lng: -33.3333,
        name: "Downtown Hidden Gem",
        description: "Lovely view of the city next to multiple venues. Enjoy all Denver has to offer from this cozy apartment. There are three venues within walking distance and most nights you can find live music from more than one venue so you get options. There are also multiple restaurants and shops near by as well.",
        price: 80
      },
      {
        ownerId: 1,
        address: "187 Hollow Cover Ln",
        city: "Hollow",
        state: "Georgia",
        country: "USA",
        lat: 44.4444,
        lng: -44.4444,
        name: "Hollow Cove",
        description: "This spot is tucked away for a private getaway and its only a 10 minute walk to all downtown Hollow has to offer. If you are an early riser watching the fog over the field as the sunrises is one that will take your breathe away. Please pick a bouquet of wild flowers to enjoy during your stay!",
        price: 87
      },
      {
        ownerId: 2,
        address: "154 Catapillar Ave",
        city: "Nashville",
        state: "Tennessee",
        country: "USA",
        lat: 55.5555,
        lng: -55.5555,
        name: "Treehouse Home",
        description: "Hidden in the treetops! If you've ever wanted to stay in a built out treehouse this is your spot! Looking out the windows you can see the river flowing below. If you like hiking or riverside walks there are many options nearby!",
        price: 102
      },
      {
        ownerId: 3,
        address: "492 Seaside Ave",
        city: "Miami",
        state: "Florida",
        country: "USA",
        lat: 66.6666,
        lng: -66.6666,
        name: "Beachside Bay",
        description: "This spot is located right on the beach! This private neighboorhood gives you the feeling that the whole beach is just for you. Cant go wrong with a sandy and salty getaway!",
        price: 92
      },
      {
        ownerId: 1,
        address: "17239 Schofar Bend ",
        city: "Budapest",
        state: "Budaörs",
        country: "Hungary",
        lat: 77.7777,
        lng: -77.7777,
        name: "Beautiful Budapest",
        description: "This spot is centrally located in the city and the airport is only an hour away or less depending on traffic. There is restuarants below the apartment. Or you can enjoy the farmers market just two blocks away on sunday to cook your own meal that you can enjoy on the balcony.",
        price: 49
      },
    ], { validate: true });
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Spots';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      ownerId: { [Op.in]: [1, 2, 3] }
    }, {});
  }
};
