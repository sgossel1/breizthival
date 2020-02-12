var OffreAssociation = require('../../models/relation/offreAssociation.model.js');

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
    OffreAssociation.find(function(err, offreAssociations) {
      if (err) return next(err);
      res.json(offreAssociations);
    });
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
};

exports.get = function(req, res, next) {
  OffreAssociation.findById(req.params.id, function(err, offreAssociation) {
    if (err) return next(err);
    res.json(offreAssociation);
  });
};

exports.add = function(req, res) {
  var token = getToken(req.headers);
  var offreAssociation = req.body;
  if (token) {
    if (offreAssociation.isbn && offreAssociation.title && offreAssociation.author && offreAssociation.description && offreAssociation.published_year && offreAssociation.publisher && offreAssociation.img) {
      OffreAssociation.create(offreAssociation, function(err, post) {
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
  var offreAssociation = req.body;
  if (token) {
    if (offreAssociation.isbn && offreAssociation.title && offreAssociation.author && offreAssociation.description && offreAssociation.published_year && offreAssociation.publisher && offreAssociation.img) {
      OffreAssociation.findByIdAndUpdate(req.params.id, offreAssociation, function(err, post) {
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
  OffreAssociation.findByIdAndRemove(req.params.id, req.body, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
};
