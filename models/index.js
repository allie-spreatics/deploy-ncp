'use strict';
const Sequelize = require('sequelize');
console.log('crossenv', process.env.NODE_ENV); //prod development

// const config = require(__dirname + '/../config/config.js')['prod'];
let config;
if (process.env.NODE_ENV) {
  // npm run dev , npm start
  config = require(__dirname + '/../config/config.js')[process.env.NODE_ENV];
} else {
  // node app.js
  config = require(__dirname + '/../config/config.js')['development'];
}

console.log(config);
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Comment = require('./Comment')(sequelize, Sequelize);

module.exports = db;
