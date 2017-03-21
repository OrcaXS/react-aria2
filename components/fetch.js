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

// function getfromAPIAsync() {   return fetch(configUri,
// fetchOptions).then((response) => {     if (response.status !== 200) {
// console.log(`Looks like there was a problem. Status Code:
// ${response.status}`);       // return response.status;     }     // Examine
// the text in the response     response       .json()       .then((data) => {
// console.log(data);         render.text = data;         return data;   });
// }).catch((err) => {     console.log('Fetch Error :-S', err);   }); }

const configUri2 = 'http://192.168.10.226:6800/jsonrpc';

export default class Fetch extends Component {
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
      const response = await fetch(configUri2, fetchOptions);
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
    // const data = json.result;
    // console.log(response);
    // console.log(json);
    // console.log(status);
    // console.log(`${JSON.stringify(response)} + ${JSON.stringify(json)} +
    // ${status}`); this.setState(status);
    // console.log(this.state);
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

// console.log(getfromAPIAsync()); console.log(render);
