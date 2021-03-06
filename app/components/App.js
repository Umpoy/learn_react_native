import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Stopwatch from './stopwatch';

export default class App extends Component {
  render() {
    return (
      <View className="container" style={styles.container}>
        <Text className="title" style={styles.title}>Stopwatch</Text>
        <Stopwatch />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20
  }
})
