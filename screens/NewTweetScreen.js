import React from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView
} from 'react-native'
import KeyboardSpacer from 'react-native-keyboard-spacer'

import NewTweetTopBar from '../components/NewTweetTopBar'
import Icon from '../components/Icon'
import { FontAwesome } from '@expo/vector-icons'
import Colors from '../constants/Colors'
import Sizes from '../constants/Sizes'

import SplitTweets from '../utilities/splitTweets'

export default class NewTweetScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      tweets: null,
      prefixOption: 'slash',
      charsLeft: 137,
      errorMsg:'',
      errors:false
    }

    this.handleChange = this.handleChange.bind(this)
  }

  static route = {
    navigationBar: {
      visible: false,
    },
  }

  componentDidMount() {
    console.log('NewTweetScreen componentDidMount')
  }

  handleErrors() {
    if(this.state.tweetBody === '') {
      this.setState({errorMsg: "You didn't write anything"})
      return true
    }
    return false
  }

  handleChange(e) {
    const text = e.text
    const tweets = SplitTweets.splitTweets(text, this.state.prefixOption)
    const charsLeft = this.calculateCharsLeft(tweets)
    this.setState({
      text: text,
      tweets: tweets,
      charsLeft: charsLeft
    })
    console.log(tweets)
  }

  calculateCharsLeft(tweetsArray) {
    var lastTweet = tweetsArray[tweetsArray.length-1] || '1/ '
    var charsLeft = 140 - lastTweet.length
    return charsLeft
  }

  render() {
    console.log('rendering NewTweetScreen')
    return (
      <View style={styles.container}>

        <NewTweetTopBar profileInfo={this.props.profileInfo} exit={this.props.exit} />

        
        <ScrollView style={styles.mainArea} contentContainerStyle={{flex: 1}}>
          <TextInput
            style={styles.mainInput}
            placeholder="Tweetstorm away!"
            multiline = {true}
            onChangeText={(text) => this.handleChange({text})}
          />
        </ScrollView>
        

        <View style={styles.optionsBar}>
          <View style={styles.left}>
            {Icon('camera', 'small', 'twitterGrey', styles.icon)}
            {Icon('gear', 'small', 'twitterGrey', styles.icon)}
          </View>

          <View style={styles.right}>
            <Text>{this.state.charsLeft}</Text>
            <Text>Button</Text>
          </View>
        </View>

        <KeyboardSpacer/>

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
  mainArea: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    // backgroundColor: 'grey'
  },
  mainInput: {
    flex: 1,
    fontSize: 20,
    // backgroundColor: 'grey'
  },
  optionsBar: {
    height: 50,
    flexDirection: 'row',
    borderTopColor: Colors.twitterGrey,
    borderTopWidth: StyleSheet.hairlineWidth
  },
  left: {
    flex: 8,
    flexDirection: 'row',
    alignItems: 'center'
  },
  right: {
    // flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 15,
    // backgroundColor: 'blue'
  },
  icon: {
    paddingRight: 10,
    paddingLeft: 10,
  }
})