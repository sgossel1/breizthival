var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var config = require('./config/config');

// Database Connect
mongoose.Promise = require('bluebird');
mongoose.connect(config.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  promiseLibrary: require('bluebird')
});
mongoose.connection.on('connected', function() {
  console.log('Mongoose default connection is open to ', config.MONGO_URI);
});
mongoose.connection.on('error', function(err) {
  console.log('Mongoose default connection has occured '+err+' error');
});
mongoose.connection.on('disconnected', function() {
  console.log('Mongoose default connection is disconnected');
});
process.on('SIGINT', function() {
  mongoose.connection.close(function() {
    console.log('Mongoose default connection is disconnected due to application termination');
    process.exit(0);
  });
});

// App config
var association = require('./api/routes/association.route');
var benevole = require('./api/routes/benevole.route');
var evenement = require('./api/routes/evenement.route');
var offre = require('./api/routes/offre.route');
var site = require('./api/routes/site.route');
var user = require('./api/routes/user.route');
var associationEvenement = require('./api/routes/relation/associationEvenement.route');
var benevoleOffre = require('./api/routes/relation/benevoleOffre.route');
var offreAssociation = require('./api/routes/relation/offreAssociation.route');

var app = express();

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: 'false', limit: '50mb'}));
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/', express.static(path.join(__dirname, 'dist')));
app.get('/api', function(req, res) {
  res.send('API Rest Ok');
});
app.use('/api/association', association);
app.use('/api/benevole', benevole);
app.use('/api/evenement', evenement);
app.use('/api/offre', offre);
app.use('/api/site', site);
app.use('/api/user', user);
app.use('/api/associationEvenement', associationEvenement);
app.use('/api/benevoleOffre', benevoleOffre);
app.use('/api/offreAssociation', offreAssociation);

app.use(function(req, res, next) { // catch 404 and forward to error handler
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// restful api error handler
app.use(function(err, req, res, next) {
  console.log(err);

  if (req.app.get('env') !== 'development') {
      delete err.stack;
  }

  res.status(err.statusCode || 500).json(err);
});

module.exports = app;
