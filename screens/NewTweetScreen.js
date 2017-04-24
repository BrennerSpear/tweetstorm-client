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
    console.log('rendering NewTweetScreen')
    return (
      <View style={styles.container}>

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
  mainArea: {
    flex: 1,
    backgroundColor: 'grey'
  }
})


   /*     {<Text style={styles.middle}>
        This is where a textbox will go
        {this.props.profileInfo.username}
        </Text>} */