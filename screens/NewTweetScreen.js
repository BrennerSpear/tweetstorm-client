import React from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Button
} from 'react-native'
import Picker from '../components/Picker'
import KeyboardSpacer from 'react-native-keyboard-spacer'

import { NavigationStyles } from '@expo/ex-navigation'

import Router from '../navigation/Router'

import NewTweetTopBar from '../components/NewTweetTopBar'
import Icon from '../components/Icon'
import Colors from '../constants/Colors'
import Sizes from '../constants/Sizes'

import SplitTweets from '../utilities/splitTweets'

import twitter from 'twitter-text'

export default class NewTweetScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      tweets: null,
      prefixOption: 'slash',
      postfixOption: true,
      charsLeft: 140,
      blank: true
    }

  }

  static route = {
    navigationBar: {
      visible: false,
    },
    styles: {
      ...NavigationStyles.SlideVertical,
    },
  }

  componentDidMount() {
    console.log('NewTweetScreen componentDidMount')
  }

  handleTextChange(text) {
    const tweets = SplitTweets.splitTweets(text, this.state.prefixOption, this.state.postfixOption)
    const charsLeft = this.calculateCharsLeft(tweets, this.state.prefixOption)
    const blank = (text === '')
    this.setState({
      text: text,
      tweets: tweets,
      charsLeft: charsLeft,
      blank: blank
    })
  }

  handlePrefixChange(prefix) {
    const tweets = SplitTweets.splitTweets(this.state.text, prefix, this.state.postfixOption)
    const charsLeft = this.calculateCharsLeft(tweets, prefix)
    const blank = (this.state.text === '')
    this.setState({
      tweets: tweets,
      charsLeft: charsLeft,
      blank: blank,
      prefixOption: prefix
    })
  }

  blankTweetPrefix(prefix) {
    return prefix === 'none' ? '' : '1/ '
  }

  calculateCharsLeft(tweetsArray, prefix) {
    var lastTweet = tweetsArray[tweetsArray.length-1] || this.blankTweetPrefix(prefix)
    console.log('lastTweet', lastTweet)
    var charsLeft = 140 - twitter.getTweetLength(lastTweet)
    console.log('charsLeft', charsLeft)
    return charsLeft
  }

  preview() {
    if(!this.state.blank) {
      this.props.navigator.push(Router.getRoute('preview', {
        tweets: this.state.tweets,
        profileInfo: this.props.profileInfo,
        updateRootState: this.props.updateRootState}))
    }
  }

  render() {
    console.log('rendering NewTweetScreen')
    return (
      <View style={styles.container}>

        <NewTweetTopBar
          profileInfo={this.props.profileInfo}
          updateRootState={this.props.updateRootState}
          navigator={this.props.navigator} />

        
        <ScrollView style={styles.mainArea} contentContainerStyle={{flex: 1}}>
          <TextInput
            style={styles.mainInput}
            placeholder="Tweetstorm away!"
            multiline = {true}
            onChangeText={::this.handleTextChange}
          />
        </ScrollView>
        

        <View style={styles.optionsBar}>
          <View style={styles.left}>
            {Icon('FontAwesome', 'camera', 'small', 'twitterGrey', styles.icon)}
            <Picker
            selectedValue={this.state.prefixOption}
            onValueChange={::this.handlePrefixChange}>
              <Picker.Item label="1/ " value="slash" />
              <Picker.Item label="1. " value="period" />
              <Picker.Item label="1 " value="space" />
              <Picker.Item label="none" value="none" />
            </Picker>
          </View>
          <View style={styles.right}>
            <Text style={styles.charsLeft}>{this.state.charsLeft}</Text>
            <Button onPress={::this.preview} title="Preview" color={Colors.twitterBlue}/>
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 15,
    // backgroundColor: 'blue'
  },
  charsLeft: {
    paddingRight: 15
  },
  icon: {
    paddingRight: 10,
    paddingLeft: 10,
  }
})