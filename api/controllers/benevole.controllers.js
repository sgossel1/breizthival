var Benevole = require('../models/benevole.model.js');

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
    Benevole.find(function(err, benevoles) {
      if (err) return next(err);
      res.json(benevoles);
    });
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
};

exports.get = function(req, res, next) {
  Benevole.findById(req.params.id, function(err, benevole) {
    if (err) return next(err);
    res.json(benevole);
  });
};

exports.add = function(req, res) {
  var token = getToken(req.headers);
  var benevole = req.body;
  if (token) {
    Benevole.create(benevole, function(err, post) {
      if (err) return next(err);
      res.json(post);
    });
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
};

exports.update = function(req, res, next) {
  var token = getToken(req.headers);
  var benevole = req.body;
  if (token) {
    Benevole.findByIdAndUpdate(req.params.id, benevole, function(err, post) {
      if (err) return next(err);
      res.json(post);
    });
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
};

exports.delete = function(req, res, next) {
  Benevole.findByIdAndRemove(req.params.id, req.body, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
};
