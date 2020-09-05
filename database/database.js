const Sequelize = require('sequelize');

const sequelize = new Sequelize('xxx', 'xxx', 'xxx', {
    host: 'xxxx',
    dialect: 'mysql'
  });

module.exports = sequelize;