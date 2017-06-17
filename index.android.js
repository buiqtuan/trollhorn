/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Button,
  NativeModules
} from 'react-native';

const moduleTest = NativeModules.ModuleTest;

export default class trollhorn extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title='Make Toast' onPress={() => {moduleTest.showToast('Awesome', moduleTest.SHORT)}} backgroundColor='blue' color='grey'></Button>
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
  }
});

AppRegistry.registerComponent('trollhorn', () => trollhorn);
