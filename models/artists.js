var db = require('../db');
var ObjectID = require('mongodb').ObjectID;

exports.all = function ( cb ) {
  db.get().collection('artists').find().toArray(function ( err, docs ) {
    cb(err, docs);
  })
};

exports.findById = function ( id, cb ) {
  db.get().collection('artists').findOne({ _id: ObjectID(id) }, function ( err, doc ) {
    cb(err, doc);
  });
};

exports.create = function ( params, cb ) {
  db.get().collection('artists').insertOne(getArtistFromParams(params), function ( err ) {
    cb(err);
  });
};

exports.update = function ( id, params, cb ) {
  db.get().collection('artists').updateOne(
    { _id: ObjectID(id) },
    getArtistFromParams(params),
    function ( err ) {
      cb(err);
    }
  )
};

exports.delete = function ( id, cb ) {
  db.get().collection('artists').deleteOne(
    { _id: ObjectID(id) },
    function ( err ) {
      cb(err)
    }
  );
};

// utils
function getArtistFromParams( params ) {
  return {
    name: params.name
  };
}