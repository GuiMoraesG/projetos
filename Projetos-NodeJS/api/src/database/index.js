const Sequelize = require('sequelize');
const databaseConfig = require('../config/database');

const models = [];
const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
