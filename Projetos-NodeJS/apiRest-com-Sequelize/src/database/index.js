const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Address = require('../models/Address');

const connection = new Sequelize(dbConfig);
const models = [User, Address];

models.forEach((model => model.init(connection)));

Address.associate(connection.models);

module.exports = connection;
