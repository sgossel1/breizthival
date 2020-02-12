// eslint-disable-next-line no-unused-vars
var mongoose = require('mongoose');
var passport = require('passport');
require('../config/passport')(passport);
var settings = require('../config/passport-settings');
var jwt = require('jsonwebtoken');
var User = require('../models/user.model');
var Evenement = require('../models/evenement.model.js');
var Benevole = require('../models/benevole.model.js');
var Association = require('../models/association.model.js');
var crypto = require('crypto');
async = require('async');
nodemailer = require('nodemailer');

exports.login = function(req, res) {
  User.findOne({
    email: req.body.email
  }, function(err, user) {
    if (err) throw err;
    if (!user) {
      res.status(401).send({success: false, notification: true, msg: 'Authentication failed.'});
    } else {
      // check if password matches
      user.comparePassword(req.body.password, async function(err, isMatch) {
        if (isMatch && !err) {
          // if user is found and password is right create a token
          var token = jwt.sign(user.toJSON(), settings.secret);

          var result;
          if (user.role === 'evenement') {
            result = await Evenement.findOne({user_id: user._id}, function(err, evenement) {
              if (err) return err;
              return evenement;
            });
          } else if (user.role === 'benevole') {
            result = await Benevole.findOne({user_id: user._id}, function(err, evenement) {
              if (err) return err;
              return evenement;
            });
          } else if (user.role === 'association') {
            result = await Association.findOne({user_id: user._id}, function(err, evenement) {
              if (err) return err;
              return evenement;
            });
          }

          // return the information including token as JSON
          res.json({
            success: true,
            token: 'JWT ' + token,
            user: {
              _id: user._id,
              email: user.email,
              role: user.role,
              user_infos: result
            },
          });
        } else {
          res.status(401).send({success: false, notification: true, password: false, msg: 'Authentication failed.'});
        }
      });
    }
  });
};

exports.register = function(req, res) {
  if (!req.body.email || !req.body.password || !req.body.role) {
    res.status(401).send({success: false, notification: true, email: false, password: false, role: false, msg: 'Please pass email, password and role.'});
  } else {
    var newUser = new User({
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    });
    // save the user
    newUser.save(function(err) {
      if (err) {
        return res.status(401).send({success: false, notification: true, email: false, msg: 'Email already exists.'});
      }
      res.json({success: true, notification: true, msg: 'Successful created new user.'});
    });
  }
};

exports.change_password = function(req, res, next) {
  var filter = { resetPasswordToken: req.body.token };
  var update = {
      password: req.body.password,
      resetPasswordToken: '',
      resetPasswordExpires: ''
  };
  User.findOneAndUpdate(filter, update, function(err) {
    if (err) {
      return res.json({success: false, msg: err});
    }
    res.json({success: true, msg: 'Successful update user password.'});
  });
};

exports.forgot_password = function(req, res, next) {
  async.waterfall(
    [
      function(done) {
        crypto.randomBytes(20, function(err, buf) {
          var token = buf.toString('hex');
          done(err, token);
        });
      },
      function(token, done) {
        User.findOne({ 'email': req.body.email }, function(_err, user) {
          if (!user) {
            return res.send({
              error: 'No account with that email address exists.'
            });
          }
          user.resetPasswordToken = token;
          user.resetPasswordExpires = Date.now() + 3600000; // logic for expiring password

          user.save(function(err) {
            done(err, token, user);
          });
        });
      },
      function(token, user, done) {
        // Create a SMTP transporter object
        let smtpTransport = nodemailer.createTransport({
          host: process.env.CLIENT_HOST || 'mail.dylanleborgne.me',
          port: process.env.SENDGRID_PORT || 465,
          secure: true,
          auth: {
            user: process.env.SENDGRID_USERNAME || 'lookup@dylanleborgne.me',
            pass: process.env.SENDGRID_PASSWORD || ''
          },
          logger: true,
          debug: false // include SMTP traffic in the logs
        });
        smtpTransport.verify(function(error, success) {
          if (error) {
            console.log(error);
          } else {
            console.log('Server is ready to take our messages');
          }
        });

        var mailOptions = {
          to: user.email,
          from: 'lookup@dylanleborgne.me',
          subject: 'Password change request',
          text:
            'Hi ' +
            user.email +
            '\n' +
            'Please click on the following link ' +
            'http://127.0.0.1:3000/#/change_password?token=' +
            token +
            '\n\n' +
            'If you did not request this, please ignore this email and your password will remain unchanged.\n'
        };
        smtpTransport.sendMail(mailOptions, function(err) {
          res.send({ status: 'Email sent' });
          done(err, 'done');
        });
      }
    ],
    function(err) {
      if (err) return next(err);
      res.send({ err: err });
    }
  );
};

exports.infos = function(req, res, next) {
  passport.authenticate('jwt', {session: false}, (err, user, infos) => {
    if (err) throw err;
    if (infos !== undefined) {
      res.send(infos.message)
    } else {
      res.status(200).send({
        auth: true,
        _id: user._id,
        email: user.email,
        role: user.role
      });
    }
  })(req, res, next);
};

exports.update_infos = function(req, res, next) {
  var token = getToken(req.headers);
  var user = req.body;
  if (token) {
    User.findByIdAndUpdate(req.params.id, user, function(err, post) {
      if (err) return next(err);
      res.json(post);
    });
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
};

exports.update_password = function(req, res, next) {
  var token = getToken(req.headers);
  var password = req.body.password;
  console.log('password: ' + password)
  if (token) {
    User.findByIdAndUpdate(req.params.id, password, function(err, post) {
      if (err) return next(err);
      res.json(post);
    });
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
};
