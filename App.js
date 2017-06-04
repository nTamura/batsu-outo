import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import ButtonScreen from './components/ButtonScreen';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title="Batsu OUTO!" />
        <ButtonScreen />
        <Text>Gaki no tsukai OUTO button</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
