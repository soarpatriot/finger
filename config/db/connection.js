
var mysql = require('mysql')
var databaseSettings = require('../database.json')

var connection = mysql.createConnection({
  host:  databaseSettings.host,
  user:  databaseSettings.user,
  password: databaseSettings.password,
  database: databaseSettings.database
})

module.exports = connection;
