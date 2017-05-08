import Expo from 'expo'
import React from 'react'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'
import { NavigationProvider, StackNavigation } from '@expo/ex-navigation'
import { FontAwesome } from '@expo/vector-icons'

import LoginScreen from './screens/LoginScreen'

import Router from './navigation/Router'
import cacheAssetsAsync from './utilities/cacheAssetsAsync'

console.log('top of main.js file')
class AppContainer extends React.Component {

  constructor() {
    super()
    this._logIn = this._logIn.bind(this)
  }

  state = {
    appIsReady: false,
    loggedIn: true,
    newTweet: true,
    handle: 'tweetstormerapp',
  }


  componentWillMount() {
    this._loadAssetsAsync()
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

  _logIn(params) {
    params.loggedIn = true
    console.log('params', params)
    console.log('_login function')
    this.setState(params)
  }

  _profileInfo() {
    console.log('_profileInfo function')
    return {
      handle: this.state.handle,
      token: this.state.token,
      token_secret: this.state.token_secret
    }
  }
  render() {
    console.log('rendering main')
    if (this.state.appIsReady && this.state.loggedIn) {
      return (
        <View style={styles.container}>
          <NavigationProvider router={Router}>
            <StackNavigation
              id="root"
              initialRoute={Router.getRoute('rootNavigation', {profileInfo:this._profileInfo()})}
            />
          </NavigationProvider>

          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          {Platform.OS === 'android' &&
            <View style={styles.statusBarUnderlay} />}
        </View>
      )
    } else if(this.state.appIsReady){
      return <LoginScreen login={this._logIn}/>
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
