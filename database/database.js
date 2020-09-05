const Sequelize = require('sequelize');

const sequelize = new Sequelize('sistemamax', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
  });

module.exports = sequelize;