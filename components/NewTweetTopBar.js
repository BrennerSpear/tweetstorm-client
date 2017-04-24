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

  _renderIcon(name, size) {
    return (
      <FontAwesome
        name={name}
        size={size}
        color='#58AEF0'
        onPress={this.props.exit}
      />
    )
  }

  render() {
    console.log('rendering NewTweetTopBar')
    return (
        <View style={styles.topView}>

          <View style={styles.topViewLeft}>
            <View style={styles.profPicContainer}>
              <Image style={styles.profPicImage} source={require('../assets/icons/notification-icon.png')}/>
            </View>

            <View style={styles.center}>
              <Text>@{this.props.profileInfo.username}</Text>
            </View>
          </View>

          <View style={styles.xbutton}>
          {this._renderIcon('times', iconSize)}
          </View>

        </View>
    )
  }
}

const iconSize = 32

const styles = StyleSheet.create({
  topView: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    height: 50
  },
  topViewLeft: {
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: 'green',
  },
  profPicContainer: {
    // backgroundColor: 'skyblue',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  profPicImage: {
    height: iconSize,
    width: iconSize,
    resizeMode: 'contain'
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: 'powderblue', 
    // width: 80,
    // height: 50,
  },
  xbutton: {
    justifyContent: 'center',
    paddingRight: 10,
    // backgroundColor: 'steelblue',
    // height: 50,
    // width: 50
  },
})