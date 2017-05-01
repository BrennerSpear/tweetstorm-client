import React from 'react'
import {
  Text,
  View,
  StyleSheet
} from 'react-native'

// import Icon from './Icon'
import Colors from '../constants/Colors'
import Sizes from '../constants/Sizes'

export default class Tweet extends React.Component {

  componentDidMount() {
    console.log('Tweet componentDidMount')
  }

  render() {
    console.log('rendering Tweet')
    return (
        <View style={styles.container}>
          <Text>{this.props.text} </Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {

  }
})