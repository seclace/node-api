var express = require('express');
var bodyParser = require('body-parser');
var artistsController = require('./controllers/artists');

var app = express();
var db = require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function ( req, res ) {
  res.send('Hello api!');
});

app.get('/artists', artistsController.all);

app.get('/artists/:id', artistsController.findById);

app.post('/artists', artistsController.create);

app.put('/artists/:id', artistsController.update);

app.delete('/artists/:id', artistsController.delete);

db.connect('mongodb://localhost:27017/node-api', function ( err ) {
  if (err) {
    return console.log('Connection refused :(');
  }
  app.listen(3000, function () {
    console.log('Api start listening on port: 3000');
  });
});
