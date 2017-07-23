var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_URL: '"http://shivaminyanim.dev/api"',
  OAUTH: {
    CLIENT_ID: '"1"',
    CLIENT_SECRET: '"cuAIcdSEXQkWQ1achIIp4vW8mrJPhLpHcuwIxTIc"'
  }
})
