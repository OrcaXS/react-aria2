import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from './fetch';
import Aria2WS from './ws';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>
          Hello World
        </Text>
        <Fetch />
        <Aria2WS />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
