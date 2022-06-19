const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('planeShop', 'root', 'Stssms10', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
