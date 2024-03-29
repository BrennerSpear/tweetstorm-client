import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Router from '../navigation/Router'

export default class SentTweetScreen extends React.Component {

  componentDidMount() {
    setTimeout(() => {
      this.props.updateRootState({showTabBar: true})
      this.props.navigator.immediatelyResetStack([Router.getRoute('home',
        {profileInfo: this.props.profileInfo,
         updateRootState: this.props.updateRootState,
         firstOpen: false})], 0)
    }, 1200)
  }
  
  render() {
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