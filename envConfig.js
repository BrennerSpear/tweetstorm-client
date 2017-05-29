const prodServer = 'https://brenner-tweetstorm.herokuapp.com/'
const devServer  = 'https://7d9a52f8.ngrok.io/'

const production = {
  redirectURLEndpoint: `${prodServer}redirect_url`,
  accessTokenEndpoint: `${prodServer}access_token`,
  tweetEndpoint: `${prodServer}post_tweet`,
}

const local = {
  redirectURLEndpoint: `${devServer}redirect_url`,
  accessTokenEndpoint: `${devServer}access_token`,
  tweetEndpoint: `${devServer}post_tweet`,
}

module.exports = __DEV__ ? local : production