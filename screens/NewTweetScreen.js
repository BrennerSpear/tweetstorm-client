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

import { MonoText } from '../components/StyledText'

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
        <View style={styles.topView}>
          <View style={styles.topViewLeft}>
            <View style={styles.profPic} />
            <View style={styles.center}>
              <Text>{this.props.profileInfo.username}</Text>
            </View>
          </View>
          <View style={styles.xbutton} />
        </View>
        <View style={styles.mainArea}>
        <Text> Main area</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 25
  },
  topView: {
    flexDirection: 'row',
    backgroundColor: 'red',
    height: 50
  },
  topViewLeft: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'green',
  },
  profPic: {
    backgroundColor: 'skyblue',
    height: 50,
    width: 50
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'powderblue', 
    width: 80,
    height: 50,
  },
  xbutton: {
    backgroundColor: 'steelblue',
    height: 50,
    width: 50
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