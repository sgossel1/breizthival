var Association = require('../models/association.model.js');

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
    Association.find(function(err, associations) {
      if (err) return next(err);
      res.json(associations);
    });
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
};

exports.get = function(req, res, next) {
  Association.findById(req.params.id, function(err, association) {
    if (err) return next(err);
    res.json(association);
  });
};

exports.add = function(req, res) {
  var token = getToken(req.headers);
  var association = req.body;
  if (token) {
    Association.create(association, function(err, post) {
      if (err) return next(err);
      res.json(post);
    });
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
};

exports.update = function(req, res, next) {
  var token = getToken(req.headers);
  var association = req.body;
  if (token) {
    Association.findByIdAndUpdate(req.params.id, association, function(err, post) {
      if (err) return next(err);
      res.json(post);
    });
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
};

exports.delete = function(req, res, next) {
  Association.findByIdAndRemove(req.params.id, req.body, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
};
