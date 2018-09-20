import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Index from './Index';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Index></Index>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
