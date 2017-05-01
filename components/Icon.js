import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import Colors from '../constants/Colors'
import Sizes from '../constants/Sizes'

export default function(name, size, color, style, onPress) {
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
