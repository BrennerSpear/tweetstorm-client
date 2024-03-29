import Expo from 'expo'
import React from 'react'
import Sentry from 'sentry-expo'
Sentry.config('https://51c4658a4b8c4b8489574be3462b6c80@sentry.io/173167').install();

import { Platform, StatusBar, StyleSheet, View, AsyncStorage, Text} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import Sizes from './constants/Sizes'
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
    'color': '#14171a'
  }
}
setCustomText(customTextProps)


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
    this.loadUserAysnc()
    this._loadAssetsAsync()
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
      //console.log('user loaded')
    }

  }

  async _loadAssetsAsync() {
    try {
      await cacheAssetsAsync({
        images: [require('./assets/icons/storm-logo-192.png')],
      })
    } catch (e) {
      console.warn(
        'There was an error caching assets (see: main.js), perhaps due to a ' +
          'network timeout, so we skipped caching. Reload the app to try again.'
      )
      console.log(e.message)
    } finally {
      this.setState({ appIsReady: true })
      
    }
  }

  async logIn(params) {
    if(!params.error) {
      try {
        params.loggedIn = true
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
      name: this.state.name,
      token: this.state.token,
      token_secret: this.state.token_secret,
      twitter_id: this.state.twitter_id,
      profile_image_url: this.state.profile_image_url
    }
  }
  render() {
    if (this.state.appIsReady && this.state.loggedIn) {
      return (
        <View style={styles.container}>
          <RootNavigation profileInfo={this.profileInfo()} logOut={this.logOut}/>
          <View style={styles.statusBar}/>
        </View>
      )
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
    paddingTop: Sizes.statusBar.marginTop,
  },
  statusBar: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: Sizes.statusBar.marginTop,
      backgroundColor: 'white',
  },
})

Expo.registerRootComponent(AppContainer)
