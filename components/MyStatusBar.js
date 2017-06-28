import React from 'react'
import {
  StyleSheet,
  View,
  StatusBar,
  Platform,
} from 'react-native';

export default class MyStatusBar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.statusBar}>
          <StatusBar backgroundColor="#5E8D48" barStyle="light-content" />
        </View>
        <View style={styles.appBar} />
      </View>
    );
  }
}

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 50 : 0;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
    backgroundColor: "#5E8D48"
  },
  appBar: {
    backgroundColor:'#79B45D',
    height: APPBAR_HEIGHT,
  },
  content: {
    flex: 1,
    backgroundColor: '#33373B',
  },
});