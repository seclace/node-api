var Artists = require('../models/artists');

exports.all = function ( req, res ) {
  Artists.all(function ( err, docs ) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }

    res.send(docs);
  })
};

exports.findById = function ( req, res ) {
  Artists.findById(req.params.id, function ( err, doc ) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }

    res.send(doc);
  })
};

exports.create = function ( req, res ) {
  Artists.create(req.body, function ( err ) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }

    res.sendStatus(200);
  })
};

exports.update = function ( req, res ) {
  Artists.update(req.params.id, req.body, function ( err ) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }

    res.sendStatus(200);
  })
};

exports.delete = function ( req, res ) {
  Artists.delete(req.params.id, function ( err ) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }

    res.sendStatus(200);
  })
};