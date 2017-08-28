/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import ToDoApp from './ToDoApp/ToDoAppComponent';

export default class MyApp extends Component {

   render () {
    return (

      <ToDoApp />
  );
  }
  // render() {
  //   return (
  //     <View style={styles.container}>
  //       <Text style={styles.welcome}>
  //         My first React App!
  //       </Text>
  //       <Text style={styles.instructions}>
  //         To get started, edit index.android.js
  //       </Text>
  //       <Text style={styles.instructions}>
  //         Double tap R on your keyboard to reload,{'\n'}
  //         Shake or press menu button for dev menu
  //       </Text>
  //     </View>
  //   );
  // }
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

AppRegistry.registerComponent('MyApp', () => MyApp);
