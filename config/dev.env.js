var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_URL: '"http://shivaminyanim.dev"',
  OAUTH: {
    CLIENT_ID: '"1"',
    CLIENT_SECRET: '"7sywZAtROzR4QLLw4ZhAhjmsIygxeomTAHTEcq5D"'
  }
})
