import React from 'react'
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native'

import Router from '../navigation/Router'

import Icon from './Icon'
import Colors from '../constants/Colors'
import Sizes from '../constants/Sizes'

export default class HomePageTopBar extends React.Component {
    constructor() {
    super()
    this.newTweet = this.newTweet.bind(this)
  }

  componentDidMount() {
    console.log('HomePageTopBar componentDidMount')
  }

  newTweet() {
    this.props.updateRootState({showTabBar: false})
    this.props.navigator.push(Router.getRoute('newTweet',
      {profileInfo: this.props.profileInfo,
       updateRootState: this.props.updateRootState}
    ))
  }

  render() {
    console.log('rendering HomePageTopBar')
    return (
        <View style={styles.topBar}>
          {Icon('pencil-square-o', 'medium', 'white')}
          {Icon('twitter', 'medium', 'twitterBlue')}
          {Icon('pencil-square-o', 'medium', 'twitterBlue', null, this.newTweet)}
        </View>
    )
  }
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 10,
    paddingLeft: 10,
    height: Sizes.topBar.height,
    borderBottomColor: Colors.twitterGrey,
    borderBottomWidth: StyleSheet.hairlineWidth
  }
})