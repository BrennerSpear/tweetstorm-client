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
  }

  goBack() {
    this.props.updateRootState({showTabBar: true})
    this.props.navigator.pop()
  }

  render() {
    return (
        <View style={styles.topView}>
          <View style={styles.topViewLeft}>
            <Image style={styles.profPicImage} source={{uri:this.props.profileInfo.profile_image_url}}/>
            <Text>@{this.props.profileInfo.handle}</Text>
          </View>
          <View style={styles.xbutton}>
          {Icon('EvilIcons', 'close', 'medium', 'twitterBlue', null, this.goBack)}
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
    resizeMode: 'contain',
    borderRadius: (Sizes.icon.medium/2)
  },
  xbutton: {
    justifyContent: 'center',
    paddingRight: 10
  },
})