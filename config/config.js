'use strict'
require('dotenv').config({ path: './config/mongo.env' });

var MONGO_HOST
if (process.env.DOCKER_MONGO_HOST) {
  MONGO_HOST = process.env.DOCKER_MONGO_HOST
} else {
   MONGO_HOST = process.env.MONGO_HOST
}

var MONGO_PORT = process.env.MONGO_PORT;
var MONGO_DATABASE = process.env.MONGO_DATABASE;
var MONGO_USERNAME = process.env.MONGO_USERNAME;
var MONGO_PASSWORD = process.env.MONGO_PASSWORD;
var MONGO_URI = 'mongodb://' + MONGO_USERNAME + ':' + MONGO_PASSWORD + '@' + MONGO_HOST + ':' + MONGO_PORT + '/' + MONGO_DATABASE;

// console.log('MONGO_HOST: ' + MONGO_HOST);
// console.log('MONGO_PORT: ' + MONGO_PORT);
// console.log('MONGO_DATABASE: ' + MONGO_DATABASE);
// console.log('MONGO_USERNAME: ' + MONGO_USERNAME);
// console.log('MONGO_PASSWORD: ' + MONGO_PASSWORD);
// console.log('MONGO_URI:' + MONGO_URI);

module.exports = {
  MONGO_URI: MONGO_URI,
}
