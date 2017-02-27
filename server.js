var express = require('express');
var bodyParser = require('body-parser');
var artistsController = require('./controllers/artists');

var request = require('request');
var Promise = require('bluebird');
var fetch = require('isomorphic-fetch');

var app = express();
app.use(require('express-json-promise')());
var db = require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

url = 'http://nl.1xbet.com/LiveFeed/Get1x2_Zip?' +
  'count=50&' +
  'tf=1440&' +
  'afterDays=2&' +
  'mode=4&' +
  'subGames=107577107&' +
  'country=1';

app.get('/', function ( req, res ) {
  var data = fetch(url)
    .then(function ( response ) {
      if ( response.status >= 400 ) {
        throw new Error("Bad response from server");
      }
      return response;
    });

  res.json(data);
});

app.get('/artists', artistsController.all);

app.get('/artists/:id', artistsController.findById);

app.post('/artists', artistsController.create);

app.put('/artists/:id', artistsController.update);

app.delete('/artists/:id', artistsController.delete);

db.connect('mongodb://localhost:27017/node-api', function ( err ) {
  if ( err ) {
    return console.log('Connection refused :(');
  }
  app.listen(3000, function () {
    console.log('Api start listening on port: 3000');
  });
});
