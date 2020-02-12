'use strict'
const merge = require('webpack-merge');
const prodEnv = require('./prod.env');
require('dotenv').config({ path: './config/dev.env' });

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  ROOT_API: '"http://127.0.0.1:3000/api"'
})
