var Evenement = require('../models/evenement.model.js');

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
    Evenement.find(function(err, evenements) {
      if (err) return next(err);
      res.json(evenements);
    });
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
};

exports.get = function(req, res, next) {
  Evenement.findById(req.params.id, function(err, evenement) {
    if (err) return next(err);
    res.json(evenement);
  });
};

exports.add = function(req, res) {
  var token = getToken(req.headers);
  var evenement = req.body;
  if (token) {
    Evenement.create(evenement, function(err, post) {
      if (err) return next(err);
      res.json(post);
    });
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
};

exports.update = function(req, res, next) {
  var token = getToken(req.headers);
  var evenement = req.body;
  if (token) {
      Evenement.findByIdAndUpdate(req.params.id, evenement, function(err, post) {
        if (err) return next(err);
        res.json(post);
      });
    } else {
      return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
};

exports.delete = function(req, res, next) {
  Evenement.findByIdAndRemove(req.params.id, req.body, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
};
