import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import configUri from '../config';

const fetchOptions = {
  method: 'post',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Accept-charset': 'utf-8',
  },
  body: JSON.stringify({ jsonrpc: '2.0', id: 'qwer', method: 'system.listMethods' }),
};


class Fetch extends Component {
  constructor() {
    super();
    this.state = {
      data: '...',
      status: '...',
      error: '...',
    };
  }

  componentDidMount() {
    this
      .fetchData()
      .done();
  }

  async fetchData() {
    try {
      const response = await fetch(configUri, fetchOptions);
      const json = await response.json();
      this.setState({ status: response.status });
      if (response.status !== 200) {
        throw new Error(`Returned ${response.status}`);
      }
      this.setState({ data: json.result });
      // const status = json.id;
      console.log(json);
    } catch (e) {
      this.setState({ error: `${e.name}: ${e.message}` });
      console.log(e.message);
    }
  }

  render() {
    return (
      <View>
        <Text>
          Status code : {this.state.status}
        </Text>
        <Text>
          Error : {this.state.error}
        </Text>
        <Text>
          Data: {this.state.data}
        </Text>
      </View>
    );
  }
}

export { fetchOptions, Fetch };
