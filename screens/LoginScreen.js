import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default class LoginScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Login',
    },
  };

  render() {
    return (
      <View
        style={styles.container}>
        <Text style={styles.title}>Example: Twitter login</Text>
        <Button title="Login to Twitter" onPress={this.props.login} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 40,
  },
});
