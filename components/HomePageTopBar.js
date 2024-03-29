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
  }

  newTweet() {
    this.props.updateRootState({showTabBar: false})
    this.props.navigator.push(Router.getRoute('newTweet',
      {profileInfo: this.props.profileInfo,
       updateRootState: this.props.updateRootState}
    ))
  }

  render() {
    return (
        <View style={styles.topBar}>
          {Icon('EvilIcons', 'pencil', 'mediumLarge', 'white')/*placeholder so space-between works nicely*/} 
          <Image style={styles.logo} source={require('../assets/icons/storm-logo-192.png')}/>
          {Icon('EvilIcons', 'pencil', 'mediumLarge', 'twitterBlue', null, ::this.newTweet)}
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
  },
  logo: {
    height: Sizes.icon.medium,
    width: Sizes.icon.medium
  }
})