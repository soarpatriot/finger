
var connection = require('../config/db/connection.js')

var Area = {
  find: function(station_id){
    var sql = 'select * from areas where station_id= ?';
    console.log('info', sql);
    return function(callback){
      connection.query(sql,[station_id], callback);
    }
  }
}


module.exports = Area;

