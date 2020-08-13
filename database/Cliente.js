const Sequelize = require('sequelize');
const connection = require('../database/database');

const Cliente = connection.define('cliente', {
    nome:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    telefone1:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    telefone2:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    email:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    cpf:{
        type: Sequelize.TEXT,
        allowNull: false
    }
}); 

// Cliente.sync({force: true});

module.exports = Cliente;