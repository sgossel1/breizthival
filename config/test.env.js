'use strict'
const merge = require('webpack-merge');
const devEnv = require('./dev.env');
require('dotenv').config({ path: './config/test.env' });

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  ROOT_API: '"127.0.0.1:3000/api"'
})
