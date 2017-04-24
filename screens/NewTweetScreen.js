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

import NewTweetTopBar from '../components/NewTweetTopBar'
import { FontAwesome } from '@expo/vector-icons'

export default class NewTweetScreen extends React.Component {
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
          <Text> Main area</Text>
        </View>

      </View>
    )
  }
}

const iconSize = 32

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 16
  },
  mainArea: {
    flex: 1,
    backgroundColor: 'grey'
  }
})