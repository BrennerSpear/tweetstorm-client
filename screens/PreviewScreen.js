import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button
} from 'react-native'

import Router from '../navigation/Router'

import Icon from '../components/Icon'
import { FontAwesome } from '@expo/vector-icons'
import Colors from '../constants/Colors'
import Sizes from '../constants/Sizes'

export default class PreviewScreen extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {}
  }

  static route = {
    navigationBar: {
      visible: false,
    },
  }

  componentDidMount() {
    console.log('PreviewScreen componentDidMount')
  }

  goBack = () => {
    console.log('nav:', this.props.navigator)
    this.props.navigator.pop()
  };

  tweet() {
    console.log('tweeted!')
  }

  render() {
    console.log('rendering PreviewScreen')
    return (
      <View style={styles.container}>

        {/*TopBar*/}
        
        <ScrollView style={styles.mainArea} contentContainerStyle={{flex: 1}}>
          {/*tweets*/}
        </ScrollView>

        <View style={styles.optionsBar}>
          <Button onPress={this.goBack} title="Edit" color={Colors.twitterBlue}/>
          <Button onPress={this.tweet} title="Tweet" color={Colors.twitterBlue}/>
        </View>

      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Sizes.statusBar.paddingTop
  },
  mainArea: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    // backgroundColor: 'grey'
  },
  optionsBar: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopColor: Colors.twitterGrey,
    borderTopWidth: StyleSheet.hairlineWidth
  }
})