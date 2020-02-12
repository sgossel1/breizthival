var Offre = require('../models/offre.model.js');

getToken = function(headers) {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(' ');
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};

exports.list = function(req, res) {
  var token = getToken(req.headers);
  if (token) {
    Offre.find(function(err, offres) {
      if (err) return next(err);
      res.json(offres);
    });
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
};

exports.get = function(req, res, next) {
  Offre.findById(req.params.id, function(err, offre) {
    if (err) return next(err);
    res.json(offre);
  });
};

exports.add = function(req, res) {
  var token = getToken(req.headers);
  var offre = req.body;
  if (token) {
    Offre.create(offre, function(err, post) {
      if (err) return next(err);
      res.json(post);
    });
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
};

exports.update = function(req, res, next) {
  var token = getToken(req.headers);
  var offre = req.body;
  if (token) {
    Offre.findByIdAndUpdate(req.params.id, offre, function(err, post) {
      if (err) return next(err);
      res.json(post);
    });
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
};

exports.delete = function(req, res, next) {
  Offre.findByIdAndRemove(req.params.id, req.body, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
};
