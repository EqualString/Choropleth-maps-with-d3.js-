var express = require('express');
var router = express.Router();
console.log('ha?');
/** Server rute **/

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/', function(req, res){
  res.render('izlaznost.html');
  
});

router.get('/izlaznost', function(req, res){
  res.render('izlaznost.html');
});

router.get('/EPP', function(req, res){
  res.render('EPP.html');
});

router.get('/S&D', function(req, res){
  res.render('S&D.html');
});

router.get('/ALDE', function(req, res){
  res.render('ALDE.html');
});

router.get('/zajedno', function(req, res){
  res.render('zajedno.html');
});

module.exports = router;