import React from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

import Icon from './Icon'
import Colors from '../constants/Colors'
import Sizes from '../constants/Sizes'

export default class PreviewTopBar extends React.Component {

  render() {
    console.log('rendering PreviewTopBar')
    return (
        <View style={styles.topBar}>
          <Text style={styles.title}>Storm Preview</Text>
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
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})