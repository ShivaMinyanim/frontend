var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_URL: '"http://shivaminyanim.dev"',
  OAUTH: {
    CLIENT_ID: '"1"',
    CLIENT_SECRET: '"IXHZlbbJFAnKgCnMAMgjIj5U9WyXDxziX51f1ssI"'
  }
})
