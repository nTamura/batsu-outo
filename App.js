import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Alert } from 'react-native';
import Header from './components/Header';
import Button from './components/Button';
// import ButtonScreen from './components/ButtonScreen';

const onPress = () => {
  Alert.alert('Harrooo');
};



export default class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { playOuto: false };
  // }
  // onPlay = () {
  //   this.setState({
  //     console.log('playyyy')
  //   })
  // }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <View style={styles.comp}>
            <Header title="Batsu OUTO!" />
          </View>

          <View style={styles.comp}>
            <Button />
          </View>

          <View style={styles.comp}>
            <View style={styles.footer}>
              <Text style={styles.footerText}>Footer</Text>
            </View>
          </View>

        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  body: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  comp: {
    // alignContent: 'center',

  },
  footer: {
    backgroundColor: '#FF0000',
  },
  footerText: {
    color: "#FFF",
    textAlign: 'center',
  },


  batsu: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: "#006"
  },
  batsuPress: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: "#FFF"
  },




});
