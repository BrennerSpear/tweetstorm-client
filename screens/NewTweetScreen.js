import React from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'

import NewTweetTopBar from '../components/NewTweetTopBar'
import { FontAwesome } from '@expo/vector-icons'

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

        <View style={styles.mainArea}>
          <TextInput
            style={styles.mainInput}
            placeholder="Tweetstorm away!"
            multiline = {true}
            onChangeText={(text) => this.setState({text})}
          />
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 16
  },
  mainArea: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    // backgroundColor: '#fff'
  },
  mainInput: {
    flex: 1,
    fontSize: 20
  }
})