const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

const Plane = sequelize.define('plane', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  opacity: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  planeImage: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Plane;
