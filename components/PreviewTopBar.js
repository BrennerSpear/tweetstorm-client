import React from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'

import Icon from './Icon'
import Colors from '../constants/Colors'
import Sizes from '../constants/Sizes'

export default class PreviewTopBar extends React.Component {

  componentDidMount() {
    console.log('PreviewTopBar componentDidMount')
  }

  render() {
    console.log('rendering PreviewTopBar')
    return (
        <View style={styles.topBar}>
          {Icon('twitter', 'medium', 'twitterBlue')}
        </View>
    )
  }
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: Sizes.topBar.height,
    borderBottomColor: Colors.twitterGrey,
    borderBottomWidth: StyleSheet.hairlineWidth
  }
})