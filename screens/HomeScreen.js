import Expo from 'expo'
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
  ActivityIndicator,
  StatusBar
} from 'react-native'

import HomePageTopBar from '../components/HomePageTopBar'
import Sizes from '../constants/Sizes'
import Icon from '../components/Icon'
import {serverEndpoint} from '../envConfig'

import TweetHome from '../components/TweetHome'
import Router from '../navigation/Router'

export default class HomeScreen extends React.Component {
    constructor(props) {
    super(props)

  }
  
  state = {
    tweets: [],
    screenReady: false
  }

  static route = {
    navigationBar: {
      visible: false,
    },
  }

  componentDidMount() {
    if(this.props.firstOpen) {
      this.props.updateRootState({showTabBar: false})
      this.props.navigator.push(Router.getRoute('newTweet',
        {profileInfo: this.props.profileInfo,
         updateRootState: this.props.updateRootState}
      ))
    }

    this.getTweets().then(tweets => {this.setState({tweets: tweets, screenReady: true})})
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
    if(this.state.screenReady) {
      var tweetsInViews = []
      var tweets = this.state.tweets

      for(var i=0; i < tweets.length; i++) {
        tweetsInViews.push(
          <TweetHome
            tweet={tweets[i]}
            key={i}
            profileInfo={this.props.profileInfo}
          />
        )
      }

      return tweetsInViews
    }
    else {
      return <ActivityIndicator size='large' style={styles.activityIndicator}/>
    }
  }  

  render() {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" animated={true}/>}
        <HomePageTopBar
          profileInfo={this.props.profileInfo}
          updateRootState={this.props.updateRootState}
          navigator={this.props.navigator}/>
        <ScrollView
          style={styles.scrollViewContainer}
          contentContainerStyle={this.props.route.getContentContainerStyle()}>
          {this.renderTweets()}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContainer: {
    flex: 1
  },
  activityIndicator: {
    marginTop: 10
  }
})
