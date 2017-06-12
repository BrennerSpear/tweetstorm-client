import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button
} from 'react-native'

import axios from 'axios'

import {tweetEndpoint} from '../envConfig'

import Router from '../navigation/Router'

import Icon from '../components/Icon'
import Colors from '../constants/Colors'
import Sizes from '../constants/Sizes'

import PreviewTopBar from '../components/PreviewTopBar'
import TweetPreview from '../components/TweetPreview'

export default class PreviewScreen extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {}
    this.tweet = this.tweet.bind(this)
  }

  static route = {
    navigationBar: {
      visible: false,
    },
  }

  componentDidMount() {
    console.log('PreviewScreen componentDidMount')
  }

  goBack = () => {
    this.props.navigator.pop()
  }

  tweet() {
    axios.post(tweetEndpoint, {
      tweets: this.props.tweets,
      token: this.props.profileInfo.token,
      token_secret: this.props.profileInfo.token_secret
    })
    .then(response => {
      console.log('tweets sent to server')
      this.props.navigator.push(Router.getRoute('sentTweet', {
        profileInfo: this.props.profileInfo,
        updateRootState: this.props.updateRootState}))
    })
  }

  renderTweets = () => {
    var tweetsInViews = []
    var tweets = this.props.tweets
    var profileInfo = this.props.profileInfo
    console.log('above tweets')
    console.log('tweets', tweets)

    for(var i=0; i < tweets.length; i++) {
      tweetsInViews.push(
        <TweetPreview text={tweets[i]} profileInfo={profileInfo} key={i}/>
      )
    }

    return tweetsInViews
  }

  render() {
    console.log('rendering PreviewScreen')
    return (
      <View style={styles.container}>

        <PreviewTopBar />
        
        <ScrollView
          style={styles.scrollViewContainer}
          contentContainerStyle={this.props.route.getContentContainerStyle()}>
          {this.renderTweets()}
        </ScrollView>

        <View style={styles.optionsBar}>
          <Button onPress={this.goBack} title="Edit" color={Colors.twitterBlue}/>
          <Button onPress={this.tweet} title="Tweet" color={Colors.twitterBlue}/>
        </View>

      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Sizes.statusBar.paddingTop
  },
  scrollViewContainer: {
    flex: 1,
  },
  optionsBar: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopColor: Colors.twitterGrey,
    borderTopWidth: StyleSheet.hairlineWidth,
    paddingRight: 10,
    paddingLeft: 10
  }
})