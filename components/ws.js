import React, { Component } from 'react';
import { AppRegistry, ListView, StyleSheet, Text, View } from 'react-native';
import configUri from '../config';
// import { fetchOptions } from './fetch';

const ws = new WebSocket('ws://192.168.10.226:6800/jsonrpc');
const fetchOptions = {
  method: 'post',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Accept-charset': 'utf-8',
  },
  body: JSON.stringify({ jsonrpc: '2.0', id: 'qwer', method: 'system.listMethods' }),
};

class Aria2WS extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
      ]),
    };
  }

  componentDidMount() {
    this.startws();
  }

  startws() {
    ws.onopen = () => {
      // connection opened
      ws.send(fetchOptions.body); // send a message
      console.log('ws.onopen');
    };

    ws.onmessage = (e) => {
      // a message was received
      console.log(e.data);
    };

    ws.onerror = (e) => {
      // an error occurred
      console.log(e.message);
    };

    ws.onclose = (e) => {
      // connection closed
      console.log(e.code, e.reason);
    };
  }

  render() {
    return (
      <View>
        <Text>
          Aria2WebSocket
        </Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={rowData => <Text>{rowData}</Text>}
        />
      </View>
    );
  }
}

export default Aria2WS;
