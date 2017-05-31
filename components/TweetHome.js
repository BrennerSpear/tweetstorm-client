import React from 'react'
import {
  Text,
  View,
  StyleSheet
} from 'react-native'

// import Icon from './Icon'
import Colors from '../constants/Colors'
import Sizes from '../constants/Sizes'

export default class TweetHome extends React.Component {

  componentDidMount() {
    console.log('TweetHome componentDidMount')
  }

  render() {
    console.log('rendering TweetHome')

    var tweet = this.props.tweet

    return (
        <View style={styles.container}>
          <Text>{tweet.display_text} </Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {

  }
})