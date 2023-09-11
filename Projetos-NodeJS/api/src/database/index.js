const Sequelize = require('sequelize');
const databaseConfig = require('../config/database');
const Video = require('../model/video');

const models = [Video];
const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
