import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Notifications } from 'expo'
import {
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
    this._exitNewTweet = this._exitNewTweet.bind(this)
    this._startNewTweet = this._startNewTweet.bind(this)
  }

  state = {
    newTweet: true
  }

  componentDidMount() {
    // this._notificationSubscription = this._registerForPushNotifications()
  }

  componentWillUnmount() {
    // this._notificationSubscription && this._notificationSubscription.remove()
  }

  _exitNewTweet() {
    this.setState({newTweet: false})
  }

  _startNewTweet() {
    this.setState({newTweet: true})
  }

  render() {
    if(this.state.newTweet) {
      return (
        <StackNavigation
          id='newTweet'
          initialRoute={
            Router.getRoute('newTweet',
            {profileInfo: this.props.profileInfo,
             exit: this._exitNewTweet})}
        />
      )
    }
    else {
      return (
        <TabNavigation tabBarHeight={56} initialTab="home">
          <TabNavigationItem
            id="home"
            renderIcon={isSelected => Icon('home', 'medium', this._color(isSelected))}>
            <StackNavigation initialRoute={
            Router.getRoute('home',
            {profileInfo: this.props.profileInfo,
             newTweet: this._startNewTweet})} />
          </TabNavigationItem>

          <TabNavigationItem
            id="links"
            renderIcon={isSelected => Icon('book', 'medium', this._color(isSelected))}>
            <StackNavigation initialRoute={
            Router.getRoute('links',
            {profileInfo: this.props.profileInfo})} />
          </TabNavigationItem>
        </TabNavigation>
      )
    }
  }

  _color(isSelected) {
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
  selectedTab: {
    color: Colors.tabIconSelected,
  },
})
