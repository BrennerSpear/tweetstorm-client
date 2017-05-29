const prodServer = 'https://brenner-tweetstorm.herokuapp.com/'
const devServer  = 'https://7d9a52f8.ngrok.io/'

const pairs = {
  serverEndpoint: '',
  redirectURLEndpoint: 'redirect_url',
  accessTokenEndpoint: 'access_token',
  tweetEndpoint: 'post_tweet',
}

const generateEndpoints = function(server, pairs) {
  var endpoints = {}
  for(key in pairs) {
    endpoints[key] = (server + pairs[key])
  }
  return endpoints
}

const prod = generateEndpoints(prodServer, pairs)
const dev = generateEndpoints(devServer, pairs)

module.exports = __DEV__ ? dev : prod