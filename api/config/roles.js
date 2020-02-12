
var passport = require('passport');
require('../config/passport')(passport);
var User = require('../models/user.model');

exports.roleAuthorization = function(roles) {
  return function(req, res, next) {
    passport.authenticate('jwt', {session: false}, (err, user, infos) => {
      if (err) throw err;
      if (infos !== undefined) {
        res.send(infos.message)
      } else {
        return User.findById(user._id, function(err, foundUser) {
          if (err) {
            res.status(422).json({error: 'No user found.'});
            return next(err);
          }
          if (roles.indexOf(foundUser.role) > -1) {
            return next();
          }
          res.status(401).json({error: 'You are not authorized to view this content'});
          return next('Unauthorized');
        });
      }
    })(req, res, next);
  };
};
