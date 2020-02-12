var Site = require('../models/site.model.js');

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
    Site.find(function(err, sites) {
      if (err) return next(err);
      res.json(sites);
    });
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
};

exports.get = function(req, res, next) {
  Site.findById(req.params.id, function(err, site) {
    if (err) return next(err);
    res.json(site);
  });
};

exports.add = function(req, res) {
  var token = getToken(req.headers);
  var site = req.body;
  if (token) {
      Site.create(site, function(err, post) {
        if (err) return next(err);
        res.json(post);
      });
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
};

exports.update = function(req, res, next) {
  var token = getToken(req.headers);
  var site = req.body;
  if (token) {
    Site.findByIdAndUpdate(req.params.id, site, function(err, post) {
      if (err) return next(err);
      res.json(post);
    });
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
};

exports.delete = function(req, res, next) {
  Site.findByIdAndRemove(req.params.id, req.body, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
};
