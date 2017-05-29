import React from 'react'
import {
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import HomePageTopBar from '../components/HomePageTopBar'
import Sizes from '../constants/Sizes'
import {serverEndpoint} from '../envConfig'

import Tweet from '../components/Tweet'
import Router from '../navigation/Router'

export default class HomeScreen extends React.Component {
    constructor(props) {
    super(props)

  }

  state = {
    tweets: []
  }

  static route = {
    navigationBar: {
      visible: false,
    },
  }

  componentDidMount() {
    console.log('HomeScreen componentDidMount')
    if(this.props.firstOpen) {
      this.props.updateRootState({showTabBar: false})
      this.props.navigator.push(Router.getRoute('newTweet',
        {profileInfo: this.props.profileInfo,
         updateRootState: this.props.updateRootState}
      ))
    }

    this.getTweets().then(tweets => {this.setState({tweets: tweets})})
  }

  async getTweets() {
    try {
      const tweetsEndpoint = serverEndpoint + `user/${this.props.profileInfo.twitter_id}/tweets`
      const response = await fetch(tweetsEndpoint, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      })
      .then(res => res.json())

      return response.tweets
    }
    catch(e) {
      console.log('get tweets error', e)
      return []
    }
  }

  renderTweets(tweets) {
    var tweetsInViews = []
    var tweets = this.state.tweets

    for(var i=0; i < tweets.length; i++) {
      tweetsInViews.push(
        <Tweet tweet={tweets[i]} key={i}/>
      )
    }

    return tweetsInViews
  }  

  render() {
    console.log('rendering HomeScreen')
    return (
      <View style={styles.container}>
        <HomePageTopBar
          profileInfo={this.props.profileInfo}
          updateRootState={this.props.updateRootState}
          navigator={this.props.navigator}/>
        <ScrollView
          style={styles.container}
          contentContainerStyle={this.props.route.getContentContainerStyle()}>
          {this.renderTweets()}
        </ScrollView>
      </View>
    )
  }

  _exampleOfLinking = () => {
    Linking.openURL(
      'https://docs.expo.io/versions/latest/guides/development-mode'
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Sizes.statusBar.paddingTop,
  },
})
