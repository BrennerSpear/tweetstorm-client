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
    console.log('Tweet componentDidMount')
  }

  render() {
    console.log('rendering TweetHome')

    var text = this.props.text
    var handle = this.props.profileInfo.handle

    return (
      <View style={styles.container}>
        <View style={styles.profPicContainer}>
        <Image style={styles.profPicImage} source={{uri:'https://pbs.twimg.com/profile_images/846572389001416704/ie1Bbnq6_bigger.jpg'}}/>
        </View>
        <View style={styles.textContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.name}>Brenner</Text>
            <Text style={styles.screenName}>{'  @' + handle}</Text>
          </View>
          <View style={styles.tweetContentContainer}>
            <Text style={styles.tweetContent}>{text} </Text>
          </View>
          <View style={styles.iconsContainer}>
            {Icon('arrow-left', 'tiny', 'twitterLightGrey', styles.icon)}
            {Icon('refresh', 'tiny', 'twitterLightGrey', styles.icon)}
            {Icon('heart', 'tiny', 'twitterLightGrey', styles.icon)}
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

  icon: {
    marginRight: 70
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
    borderRadius: 5
  },
})