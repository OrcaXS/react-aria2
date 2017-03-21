import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import configUri from '../config';
import Fetch from './fetch';

const fetchListOptions = {
  method: 'post',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Accept-charset': 'utf-8',
  },
  body: JSON.stringify({ jsonrpc: '2.0', id: 'qwer', method: 'system.listMethods' }),
};

class MainList extends Component {
  constructor() {
    super();
    this.state = {
      data: '',
      error: '',
      numActive: '',
      numStopped: '',
      numWaiting: '',
    };
  }

  componentDidMount() {
    this
      .fetchList()
      .done();
  }

  async fetchList() {
    try {
      const response = await fetch(configUri, fetchListOptions);
      const json = await response.json();
      this.setState({ status: response.status });
      if ((response.status) !== 200) {
        throw new Error(`Returned ${response.status}`);
      }
    } catch (e) {
      this.setState({ error: `${e.name}: ${e.message}` });
    }
  }
}

export default MainList;
