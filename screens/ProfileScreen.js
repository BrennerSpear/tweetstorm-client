import React from 'react'
import { ScrollView, StyleSheet, Button, View } from 'react-native'
import { ExpoLinksView } from '@expo/samples'

import Colors from '../constants/Colors'
import ProfileTopBar from '../components/ProfileTopBar'

export default class ProfileScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <ProfileTopBar />
        <ScrollView
          style={styles.container}
          contentContainerStyle={this.props.route.getContentContainerStyle()}>

          <Button onPress={this.props.logOut} title="Log Out" color={Colors.twitterBlue}/>

        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
