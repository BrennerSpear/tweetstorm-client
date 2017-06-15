import Expo from 'expo'
import React from 'react'
import Sentry from 'sentry-expo';
Sentry.config('https://51c4658a4b8c4b8489574be3462b6c80@sentry.io/173167').install();

import { Platform, StatusBar, StyleSheet, View, AsyncStorage} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

import LoginScreen from './screens/LoginScreen'

import RootNavigation from './navigation/RootNavigation'

import Router from './navigation/Router'
import cacheAssetsAsync from './utilities/cacheAssetsAsync'

import {
  setCustomView,
  setCustomTextInput,
  setCustomText,
  setCustomImage,
  setCustomTouchableOpacity
} from 'react-native-global-props';

const customTextProps = {
  style: {
    'fontFamily': Platform.OS === 'ios' ? 'HelveticaNeue' : 'Roboto',
  }
}
setCustomText(customTextProps)


console.log('top of main.js file')
class AppContainer extends React.Component {

  constructor() {
    super()
    this.logIn = this.logIn.bind(this)
    this.logOut = this.logOut.bind(this)
  }

  state = {
    appIsReady: false,
    loggedIn: false
  }

  componentWillMount() {
    this._loadAssetsAsync()
    this.loadUserAysnc()
  }

  async loadUserAysnc() {
    try {
      var twitterData = await AsyncStorage.getItem('twitterData')
      twitterData = JSON.parse(twitterData)
      if(twitterData) {
        this.setState(twitterData)
      }
    }
    catch(e) {
      console.log(e.message)
    }
    finally {
      console.log('user loaded')
    }

  }

  async _loadAssetsAsync() {
    try {
      await cacheAssetsAsync({
        images: [require('./assets/images/expo-wordmark.png')],
        fonts: [
          FontAwesome.font,
          { 'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf') },
        ],
      })
    } catch (e) {
      console.warn(
        'There was an error caching assets (see: main.js), perhaps due to a ' +
          'network timeout, so we skipped caching. Reload the app to try again.'
      )
      console.log(e.message)
    } finally {
      console.log('app is ready')
      this.setState({ appIsReady: true })
      
    }
  }

  async logIn(params) {
    if(!params.error) {
      try {
        params.loggedIn = true
        console.log('_login function')
        this.setState(params)
        var twitterData = JSON.stringify(params)
        await AsyncStorage.setItem('twitterData', twitterData)
      }
      catch (e) {
        console.log('Error:', e.message)
      }
    }
  }

  async logOut() {
    try {
      var newState = {}
      var state = this.state
      for(var key in state) {newState[key] = null}
      newState.appIsReady = true
      newState.loggedIn = false
      this.setState(newState)
      await AsyncStorage.setItem('twitterData', JSON.stringify(null))
    }
    catch(e) {
      console.log(e.message)
    }
    finally {
      console.log('logged out')
    }
  }

  profileInfo() {
    return {
      handle: this.state.handle,
      token: this.state.token,
      token_secret: this.state.token_secret,
      twitter_id: this.state.twitter_id
    }
  }
  render() {
    console.log('rendering main')
    if (this.state.appIsReady && this.state.loggedIn) {
      return <RootNavigation profileInfo={this.profileInfo()} logOut={this.logOut}/>
    } else if(this.state.appIsReady){
      return <LoginScreen login={this.logIn}/>
    } else {
      return <Expo.AppLoading />
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
})

Expo.registerRootComponent(AppContainer)
