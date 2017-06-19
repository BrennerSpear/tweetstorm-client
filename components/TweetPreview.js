import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native'

import Icon from './Icon'
import Colors from '../constants/Colors'
import Sizes from '../constants/Sizes'

export default class TweetPreview extends React.Component {

  componentDidMount() {
  }

  render() {
    const text = this.props.text
    const handle = this.props.profileInfo.handle
    const name = this.props.profileInfo.name
    const profile_image_url = this.props.profileInfo.profile_image_url

    return (
      <View style={styles.container}>
        <View style={styles.profPicContainer}>
        <Image style={styles.profPicImage} source={{uri:profile_image_url}}/>
        </View>
        <View style={styles.textContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.screenName}>{'  @' + handle}</Text>
          </View>
          <View style={styles.tweetContentContainer}>
            <Text style={styles.tweetContent}>{text} </Text>
          </View>
          <View style={styles.iconsContainer}>
            <View style={styles.iconContainer}>{Icon('FontAwesome', 'comment-o', 'tiny', 'twitterLightGrey', styles.icon)}</View>
            <View style={styles.iconContainer}>{Icon('EvilIcons', 'retweet', 'small', 'twitterLightGrey', styles.icon)}</View>
            <View style={styles.iconContainer}>{Icon('FontAwesome', 'heart-o', 'tiny', 'twitterLightGrey', styles.icon)}</View>
            <View style={styles.iconContainer}>{Icon('FontAwesome', 'envelope-o', 'tiny', 'twitterLightGrey', styles.icon)}</View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderStyle: 'solid',
    borderBottomColor: Colors.twitterBorderGrey,
    borderBottomWidth: StyleSheet.hairlineWidth,
    padding: 10,
    // margin: 5
  },

  profPicContainer: {
    marginRight: 10,
    marginTop: 3
  },

  textContainer: {
    flex: 1,
  },

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  tweetContentContainer: {
  },

  tweetContent: {
    fontSize: 18,
  },

  iconsContainer: {
    marginTop: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },

  icon: {

  },

  screenName: {
    color: Colors.twitterHandleGrey,
    fontSize: 16
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold'
  },


  profPicImage: {
    height: Sizes.icon.large,
    width: Sizes.icon.large,
    marginLeft: 1,
    marginRight: 1,
    marginTop: 1,
    marginBottom: 1,
    resizeMode: 'contain',
    borderRadius: (Sizes.icon.large/2)
  },
})