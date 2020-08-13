const Sequelize = require('sequelize');

const sequelize = new Sequelize('xxxxx', 'xxxx', 'xxxx', {
    host: 'xxxx',
    dialect: 'xxxxx'
  });

module.exports = sequelize;