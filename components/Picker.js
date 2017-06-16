import React, { Component } from 'react'
import ReactNative, { Platform, TouchableOpacity, Text, StyleSheet, ActionSheetIOS } from 'react-native'
import Icon from './Icon'
export default class Picker extends Component {
  static Item = ReactNative.Picker.Item

  handlePress() {
    const { children, onValueChange } = this.props
    const labels = children.map(child => child.props.label)
    const values = children.map(child => child.props.value)
    ActionSheetIOS.showActionSheetWithOptions(
      {
        title: 'Prefix Option',
        options: [...labels, "Cancel"],
        cancelButtonIndex: labels.length,
      },
      (index) => {
        if (index < labels.length) {
          onValueChange(values[index])
        }
      }
    )
  }

  render() {
    const { children, style } = this.props
    const labels = children.map(child => child.props.label)
    const values = children.map(child => child.props.value)
    const flatStyle = (style ? StyleSheet.flatten(style) : {})

    if (Platform.OS === 'ios') {
      const { selectedValue } = this.props
      return(
        <TouchableOpacity onPress={::this.handlePress}>
         {Icon('FontAwesome', 'gear', 'small', 'twitterGrey', styles.icon)}
        </TouchableOpacity>
      )
    }

    else {
      return(<ReactNative.Picker {...this.props} />)
    }
  }
}

const styles = StyleSheet.create({
  icon: {
    paddingRight: 10,
    paddingLeft: 10,
  }
})