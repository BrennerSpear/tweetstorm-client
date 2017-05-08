import React from 'react'
import Expo from 'expo'
import { View, Text, Button, StyleSheet, Linking } from 'react-native'
import {redirectURLEndpoint, accessTokenEndpoint} from '../envConfig'

// Twitter tokens
let authToken
let secretToken

export default class LoginScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Login',
    },
  }

  componentDidMount() {
    Linking.addEventListener('url', this.handleTwitterRedirect)
  }

  handleTwitterRedirect = async (event) => {
    // console.log('event test:', event)
    if (!event.url.includes('+/redirect')) {
      return
    }

    // Parse the response query string into an object.
    const [, queryString] = event.url.split('?')
    const responseObj = queryString.split('&').reduce((map, pair) => {
      const [key, value] = pair.split('=')
      map[key] = value
      return map
    }, {})
    const verifier = responseObj.oauth_verifier
    const accessTokenURL = accessTokenEndpoint + this.toQueryString({
      oauth_verifier: verifier,
      oauth_token: authToken,
      oauth_token_secret: secretToken,
    })

    const accessTokenResult = await fetch(accessTokenURL, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    }).then(res => res.json())

    // const accessTokenResponse = accessTokenResult.accessTokenResponse
    // console.log('accessTokenResponse:', accessTokenResponse)
    // const username = accessTokenResponse.screen_name

    // const username = accessTokenResult.handle
    this.props.login(accessTokenResult)
    Expo.WebBrowser.dismissBrowser()
  }

  toQueryString(params) {
    return '?' + Object.entries(params)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&')
  }

  loginWithTwitter = async () => {
    // Call your backend to get the redirect URL, Expo will take care of redirecting the user.
    const redirectURLResult = await fetch(redirectURLEndpoint, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    })
    .then(res => res.json())
    console.log('redirectURLResult',redirectURLResult)
    authToken = redirectURLResult.token
    secretToken = redirectURLResult.secretToken
    await Expo.WebBrowser.openBrowserAsync(redirectURLResult.redirectURL)
  }

  render() {
    return (
      <View
        style={styles.container}>
        <Text style={styles.title}>Tweetstorm</Text>
        <Button title="Login to Twitter" onPress={this.loginWithTwitter} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 40,
  },
})
