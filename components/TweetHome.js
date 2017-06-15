import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking
} from 'react-native'

import Icon from './Icon'
import Colors from '../constants/Colors'
import Sizes from '../constants/Sizes'


export default class TweetHome extends React.Component {

  componentDidMount() {
    console.log('TweetHome componentDidMount')
  }

  onPress(url) {
    const deepLink = ('twitter://status?id=' + url.split('status/')[1])
    Linking.openURL(deepLink)
  }


  render() {
    console.log('rendering TweetHome')

    var tweet = this.props.tweet

    return (
      <TouchableOpacity onPress={() => this.onPress(tweet.url)}>
        <View style={styles.container}>
          <View style={styles.profPicContainer}>
          <Image style={styles.profPicImage} source={{uri:'https://pbs.twimg.com/profile_images/846572389001416704/ie1Bbnq6_bigger.jpg'}}/>
          </View>
          <View style={styles.textContainer}>
            <View style={styles.headerContainer}>
              <Text style={styles.name}>Brenner</Text>
              <Text style={styles.screenName}>{'  @' + tweet.screen_name}</Text>
            </View>
            <View style={styles.tweetContentContainer}>
              <Text style={styles.tweetContent}>{tweet.display_text} </Text>
            </View>
            <View style={styles.iconsContainer}>
              <View style={styles.iconContainer}>{Icon('comment-o', 'tiny', 'twitterLightGrey', styles.icon)}</View>
              <View style={styles.iconContainer}>{Icon('retweet', 'tiny', 'twitterLightGrey', styles.icon)}</View>
              <View style={styles.iconContainer}>{Icon('heart-o', 'tiny', 'twitterLightGrey', styles.icon)}</View>
              <View style={styles.iconContainer}>{Icon('envelope-o', 'tiny', 'twitterLightGrey', styles.icon)}</View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
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
    color: 'black',
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