import React from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView
} from 'react-native'

import NewTweetTopBar from '../components/NewTweetTopBar'
import Icon from '../components/Icon'
import { FontAwesome } from '@expo/vector-icons'
import Colors from '../constants/Colors'
import Sizes from '../constants/Sizes'

export default class NewTweetScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {text: ''}
  }

  static route = {
    navigationBar: {
      visible: false,
    },
  }

  componentDidMount() {
    console.log('NewTweetScreen componentDidMount')
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
            onChangeText={(text) => this.setState({text})}
          />
        </ScrollView>
        

        <View style={styles.optionsBar}>
          <View style={styles.left}>
            {Icon('camera', 'small', 'twitterGrey', styles.icon)}
            {Icon('gear', 'small', 'twitterGrey', styles.icon)}
          </View>

          <View style={styles.right}>
            <Text>Button</Text>
          </View>
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
    flexDirection: 'row'
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