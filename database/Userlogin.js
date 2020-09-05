const Sequelize = require('sequelize');
const connection = require('../database/database');

const UserLogin = connection.define('User', {
    name: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    password: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    perfil: {
        type: Sequelize.TEXT,
        allowNull: false
    }
}); 

//  UserLogin.sync({force: true});

module.exports = UserLogin;