import React from 'react'
import { FontAwesome, EvilIcons } from '@expo/vector-icons'
import Colors from '../constants/Colors'
import Sizes from '../constants/Sizes'

export default function(iconType, name, size, color, style, onPress) {

  switch (iconType) {
    case 'FontAwesome':
      return (
      <FontAwesome
        name={name}
        size={Sizes.icon[size]}
        color={Colors[color]}
        style={style}
        onPress={onPress}
      />
      )
    case 'EvilIcons':
      return (
      <EvilIcons
        name={name}
        size={Sizes.icon[size]}
        color={Colors[color]}
        style={style}
        onPress={onPress}
      />
      )
    default:
      return (
      <FontAwesome
        name={name}
        size={Sizes.icon[size]}
        color={Colors[color]}
        style={style}
        onPress={onPress}
      />
      )
  }
}
