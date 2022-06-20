const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('planeShop', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
