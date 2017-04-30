import React from 'react'
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native'

import Icon from './Icon'

import { FontAwesome } from '@expo/vector-icons'
import Colors from '../constants/Colors'
import Sizes from '../constants/Sizes'

export default class HomePageTopBar extends React.Component {

  componentDidMount() {
    console.log('HomePageTopBar componentDidMount')
  }

  render() {
    console.log('rendering HomePageTopBar')
    return (
        <View style={styles.topView}>
          {Icon('pencil-square-o', 'medium', 'white')}
          {Icon('twitter', 'medium', 'twitterBlue')}
          {Icon('pencil-square-o', 'medium', 'twitterBlue', null, this.props.newTweet)}
        </View>
    )
  }
}

const styles = StyleSheet.create({
  topView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 10,
    paddingLeft: 10,
    height: Sizes.topBar.height,
    borderBottomColor: Colors.twitterGrey,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  topViewLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
    // backgroundColor: 'green',
  },
  profPicImage: {
    height: Sizes.icon.medium,
    width: Sizes.icon.medium,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
    resizeMode: 'contain'
  },
  xbutton: {
    justifyContent: 'center',
    paddingRight: 10,
    // backgroundColor: 'steelblue',
  },
})