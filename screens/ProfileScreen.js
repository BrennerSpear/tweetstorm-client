import React from 'react'
import { ScrollView, StyleSheet, Button } from 'react-native'
import { ExpoLinksView } from '@expo/samples'

import Colors from '../constants/Colors'

export default class ProfileScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Profile',
    },
  }

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={this.props.route.getContentContainerStyle()}>

        <Button onPress={this.props.logOut} title="Log Out" color={Colors.twitterBlue}/>
        {/*<ExpoLinksView />*/}

      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
})
