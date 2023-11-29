const Sequelize = require('sequelize');
const database = require('../config/database');
const User = require('../models/User');

const models = [User];
const connection = new Sequelize(database);

models.forEach((model) => model.init(connection));
