import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import configUri from './config';


const fetchOptions = {
  method: 'post',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'text/plain; charset=utf-8',
  },
  body: JSON.stringify({ jsonrpc: '2.0', id: 'qwer', method: 'aria2.getOption' }),
};

// function getfromAPIAsync() {
//   return fetch(configUri, fetchOptions).then((response) => {
//     if (response.status !== 200) {
//       console.log(`Looks like there was a problem. Status Code: ${response.status}`);
//       // return response.status;
//     }
//     // Examine the text in the response
//     response
//       .json()
//       .then((data) => {
//         console.log(data);
//         render.text = data;
//         return data;
//       });
//   }).catch((err) => {
//     console.log('Fetch Error :-S', err);
//   });
// }

export default class Fetch extends Component {
  constructor() {
    super();
    this.state = {
      data: '',
      status: '?',
    };
  }

  componentDidMount() {
    this
      .fetchData()
      .done();
  }

  async fetchData() {
    // const response = await fetch(configUri, fetchOptions);
    const response = await fetch('https://api.github.com/repos/facebook/react-native');
    this.setState({status: response.status});
    const json = await response.json();
    const status = json.id;
    // const data = json.result;
    console.log(response);
    console.log(json);
    console.log(status);
    // console.log(`${JSON.stringify(response)} + ${JSON.stringify(json)} + ${status}`);
    // this.setState(status);
    console.log(this.state);
  }

  render() {
    return (
      <Text> Status code : {this.state.status} </Text>
    );
  }
}

// console.log(getfromAPIAsync()); console.log(render);
