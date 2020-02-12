'use strict'
// require('dotenv').config({ path: './config/prod.env' });

var api
if (process.env.DOCKER_ROOT_API) {
  api = process.env.DOCKER_ROOT_API
} else if (process.env.DOCKER_APP_PORT) {
  api = '"http://127.0.0.1:' + process.env.DOCKER_APP_PORT + '/api"'
} else {
   api = '"http://127.0.0.1:3000/api"'
}

module.exports = {
  NODE_ENV: '"production"',
  ROOT_API: api
}
