import React from 'react'
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native'

import { FontAwesome } from '@expo/vector-icons'

export default class NewTweetTopBar extends React.Component {

  componentDidMount() {
    console.log('NewTweetTopBar componentDidMount')
  }

  _renderIcon(name, size, color) {
    return (
      <FontAwesome
        name={name}
        size={size}
        color={color}
        onPress={this.props.exit}
      />
    )
  }

  render() {
    console.log('rendering NewTweetTopBar')
    return (
        <View style={styles.topView}>
          <View style={styles.topViewLeft}>
            <Image style={styles.profPicImage} source={require('../assets/icons/notification-icon.png')}/>
            <Text>@{this.props.profileInfo.username}</Text>
          </View>
          <View style={styles.xbutton}>
          {this._renderIcon('times', iconSize, iconColor)}
          </View>

        </View>
    )
  }
}

const iconSize = 32
const iconColor ='#58AEF0'

const styles = StyleSheet.create({
  topView: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    height: 50
  },
  topViewLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
    // backgroundColor: 'green',
  },
  profPicImage: {
    height: iconSize,
    width: iconSize,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
    resizeMode: 'contain'
  },
  xbutton: {
    justifyContent: 'center',
    paddingRight: 10,
    // backgroundColor: 'steelblue',
  },
})