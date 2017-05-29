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

  componentWillUnmount() {
    Linking.removeEventListener('url', this.handleTwitterRedirect)
  }

  handleTwitterRedirect = async (event) => {
    console.log('event test:', event.url)
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

    this.props.login(accessTokenResult)
    Expo.WebBrowser.dismissBrowser()
  }

  toQueryString(params) {
    return '?' + Object.entries(params)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&')
  }

  loginWithTwitter = async () => {
    try {
      const queryString = this.toQueryString({secret: 'kepler452b', linkingUri: Expo.Constants.linkingUri})
      const redirectURLResult = await fetch((redirectURLEndpoint+queryString), {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      })
      .then(res =>res.json())
      console.log('redirectURLResult',redirectURLResult)
      authToken = redirectURLResult.token
      secretToken = redirectURLResult.secretToken
      await Expo.WebBrowser.openBrowserAsync(redirectURLResult.redirectURL)
    }
    catch(e) {
      //@TODO error message about server being down
      alert('Somethings not working')
      console.log('Error:', e)
    }
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
