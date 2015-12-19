/* 
|------------------------------------------|
| Vizualizacija EU Parlamentarnih izbora   |
|         - Server controller -            |
|------------------------------------------|
| @author:  Egredžija Alen                 |
| @version: 1.3 (12.6.2014)                |
| @website: http://aquafeed.cleverapps.io  |
|------------------------------------------|
*/

//Dopunski nodejs moduli
var express = require('express');
var app = express();

//Konfiguracija porta za aplikaciju (local & Heroku)
var server_port = process.env.PORT || 8080 ;

//Konfiguracija engine-a
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
app.set('views', __dirname + '/public');

/** Server rute **/

app.get('/', function(req, res){
  res.render('izlaznost.html');
});

app.get('/izlaznost', function(req, res){
  res.render('izlaznost.html');
});

app.get('/EPP', function(req, res){
  res.render('EPP.html');
});

app.get('/S&D', function(req, res){
  res.render('S&D.html');
});

app.get('/ALDE', function(req, res){
  res.render('ALDE.html');
});

app.get('/zajedno', function(req, res){
  res.render('zajedno.html');
});

//Konfiguracija servera
var server = app.listen(server_port, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log('app @ :http://localhost:8080/');
});

app.use(express.static(__dirname + '/public'));//Koristi sve iz folder 'public'