const Sequelize = require("sequelize");
const config = require("./index");

// var dbUrl = config.DB_URL;
var dbUrl = "postgres://itbxslym:wOk2-id0gBdoBdPrPI2p8p-WawvIrRM2@rosie.db.elephantsql.com/itbxslym";
let sequelize;
const db = {};

sequelize = new Sequelize(dbUrl,{
  host: 'localhost',
  dialect: 'postgres'
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.sequelize.sync();

module.exports = db;