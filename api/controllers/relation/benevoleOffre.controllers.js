var BenevoleOffre = require('../../models/relation/benevoleOffre.model.js');

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
    BenevoleOffre.find(function(err, benevoleOffres) {
      if (err) return next(err);
      res.json(benevoleOffres);
    });
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
};

exports.get = function(req, res, next) {
  BenevoleOffre.findById(req.params.id, function(err, benevoleOffre) {
    if (err) return next(err);
    res.json(benevoleOffre);
  });
};

exports.add = function(req, res) {
  var token = getToken(req.headers);
  var benevoleOffre = req.body;
  if (token) {
    if (benevoleOffre.isbn && benevoleOffre.title && benevoleOffre.author && benevoleOffre.description && benevoleOffre.published_year && benevoleOffre.publisher && benevoleOffre.img) {
      BenevoleOffre.create(benevoleOffre, function(err, post) {
        if (err) return next(err);
        res.json(post);
      });
    } else {
      return res.status(403).send({success: false, notification: true, msg: 'Un ou plusieurs champ(s) sont vide(s).'});
    }
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
};

exports.update = function(req, res, next) {
  var token = getToken(req.headers);
  var benevoleOffre = req.body;
  if (token) {
    if (benevoleOffre.isbn && benevoleOffre.title && benevoleOffre.author && benevoleOffre.description && benevoleOffre.published_year && benevoleOffre.publisher && benevoleOffre.img) {
      BenevoleOffre.findByIdAndUpdate(req.params.id, benevoleOffre, function(err, post) {
        if (err) return next(err);
        res.json(post);
      });
    } else {
        return res.status(403).send({success: false, notification: true, msg: 'Un ou plusieurs champ(s) sont vide(s).'});
      }
    } else {
      return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
};

exports.delete = function(req, res, next) {
  BenevoleOffre.findByIdAndRemove(req.params.id, req.body, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
};
