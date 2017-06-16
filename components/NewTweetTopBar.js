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

export default class NewTweetTopBar extends React.Component {
  constructor() {
    super()
    this.goBack = this.goBack.bind(this)
  }

  componentDidMount() {
    console.log('NewTweetTopBar componentDidMount')
  }

  goBack() {
    this.props.updateRootState({showTabBar: true})
    this.props.navigator.pop()
  }

  render() {
    console.log('rendering NewTweetTopBar')
    return (
        <View style={styles.topView}>
          <View style={styles.topViewLeft}>
            <Image style={styles.profPicImage} source={{uri:'https://pbs.twimg.com/profile_images/846572389001416704/ie1Bbnq6_bigger.jpg'}}/>
            <Text>@{this.props.profileInfo.handle}</Text>
          </View>
          <View style={styles.xbutton}>
          {Icon('FontAwesome', 'times', 'medium', 'twitterBlue', null, this.goBack)}
          </View>

        </View>
    )
  }
}

const styles = StyleSheet.create({
  topView: {
    flexDirection: 'row',
    height: Sizes.topBar.height
  },
  topViewLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
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
    paddingRight: 10
  },
})