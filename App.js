import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux';
import Main from './src/components/MainComponent';


export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}