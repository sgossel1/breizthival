var AssociationEvenement = require('../../models/relation/associationEvenement.model.js');

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
    AssociationEvenement.find(function(err, associationEvenements) {
      if (err) return next(err);
      res.json(associationEvenements);
    });
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
};

exports.get = function(req, res, next) {
  AssociationEvenement.findById(req.params.id, function(err, associationEvenement) {
    if (err) return next(err);
    res.json(associationEvenement);
  });
};

exports.add = function(req, res) {
  var token = getToken(req.headers);
  var associationEvenement = req.body;
  if (token) {
    if (associationEvenement.isbn && associationEvenement.title && associationEvenement.author && associationEvenement.description && associationEvenement.published_year && associationEvenement.publisher && associationEvenement.img) {
      AssociationEvenement.create(associationEvenement, function(err, post) {
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
  var associationEvenement = req.body;
  if (token) {
    if (associationEvenement.isbn && associationEvenement.title && associationEvenement.author && associationEvenement.description && associationEvenement.published_year && associationEvenement.publisher && associationEvenement.img) {
      AssociationEvenement.findByIdAndUpdate(req.params.id, associationEvenement, function(err, post) {
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
  AssociationEvenement.findByIdAndRemove(req.params.id, req.body, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
};
