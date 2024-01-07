const Sequelize = require('sequelize');
const database = require('../config/database');
const User = require('../models/User');

const modelss = [User];
const connection = new Sequelize(database);

modelss.forEach((model) => model.init(connection));
