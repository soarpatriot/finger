var express = require('express');
var router = express.Router();

var Area = require('../models/area.js')
/* GET home page. */
router.get('/', function(req, res, next) {
  //connection.connect();
  Area.find(90)(function(err,rows,fields){
    if(err){
      console.log('err', err);
    }
    console.log('The areas is', rows[0].id)
  
  });
  //connection.end();
  res.render('index', { title: 'Express' });
});

module.exports = router;
