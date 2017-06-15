import React from 'react'
import { StyleSheet, View, Platform, StatusBar } from 'react-native'
import { Notifications } from 'expo'
import {
  NavigationProvider,
  StackNavigation,
  TabNavigation,
  TabNavigationItem,
} from '@expo/ex-navigation'
import { FontAwesome } from '@expo/vector-icons'

import Router from './Router'

// import Alerts from '../constants/Alerts'
import Colors from '../constants/Colors'
import Sizes from '../constants/Sizes'
import Icon from '../components/Icon'
// import registerForPushNotificationsAsync
  // from '../api/registerForPushNotificationsAsync'

export default class RootNavigation extends React.Component {
  constructor() {
    super()
    this.updateRootState = this.updateRootState.bind(this)
  }

  state = {
    showTabBar: true
  }

  componentDidMount() {
    // this._notificationSubscription = this._registerForPushNotifications()
  }

  componentWillUnmount() {
    // this._notificationSubscription && this._notificationSubscription.remove()
  }

  getTabBarHeight() {
    return (this.state.showTabBar) ? 45 : 0.1
  }

  updateRootState(params) {
    console.log('updating Root state', params)
    this.setState(params)
  }

  render() {
    console.log('rendering RootNavigation')
    return (
      <View style={styles.container}>
        <NavigationProvider router={Router}>
          <TabNavigation tabBarHeight={this.getTabBarHeight()} initialTab="home">
            <TabNavigationItem
              id="home"
              renderIcon={isSelected => Icon('home', 'medium', this.color(isSelected))}>
              <StackNavigation initialRoute={
              Router.getRoute('home',
              {profileInfo: this.props.profileInfo,
               updateRootState: this.updateRootState,
               firstOpen: true})} />
            </TabNavigationItem>

            <TabNavigationItem
              id="profile"
              renderIcon={isSelected => Icon('user', 'medium', this.color(isSelected))}>
              <StackNavigation initialRoute={
              Router.getRoute('profile',
              {profileInfo: this.props.profileInfo,
               logOut: this.props.logOut})} />
            </TabNavigationItem>
          </TabNavigation>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
        </NavigationProvider>
      </View>
    )
  }

  color(isSelected) {
    return isSelected ? 'twitterBlue' : 'twitterGrey'
  }

  // _registerForPushNotifications() {
  //   // Send our push token over to our backend so we can receive notifications
  //   // You can comment the following line out if you want to stop receiving
  //   // a notification every time you open the app. Check out the source
  //   // for this function in api/registerForPushNotificationsAsync.js
  //   registerForPushNotificationsAsync()

  //   // Watch for incoming notifications
  //   this._notificationSubscription = Notifications.addListener(
  //     this._handleNotification
  //   )
  // }

  // _handleNotification = ({ origin, data }) => {
  //   this.props.navigator.showLocalAlert(
  //     `Push notification ${origin} with data: ${JSON.stringify(data)}`,
  //     Alerts.notice
  //   )
  // }
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
  selectedTab: {
    color: Colors.tabIconSelected,
  },
})
