import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Router from '../navigation/Router'

export default class SentTweetScreen extends React.Component {
  // static route = {
  //   navigationBar: {
  //     title: 'SentTweetScreen',
  //   },
  // }

  

  componentDidMount() {
    setTimeout(() => {
      this.props.showTabBar()
      this.props.navigator.immediatelyResetStack([Router.getRoute('home',
        {profileInfo: this.props.profileInfo,
         hideTabBar: this.props.hideTabBar,
         showTabBar: this.props.showTabBar})], 0)
    }, 1200)
  }


  render() {
    console.log('rendering SentTweetScreen')
    return (
      <View
        style={styles.container}>
        <Text style={styles.title}>Tweetstorm sent!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 40,
  },
})