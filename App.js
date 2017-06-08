import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Alert } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import Button from './components/Button';
import Picker from './components/Picker';
import Audio from 'react-native-sound';


export default class App extends Component {
  // switch(Picker.Item) {
  //     case "Matsumoto":
  //       // onPress()
  //       // something output audio file.. put whole function in here for each one?
  //         break;
  //     case "Hamada":
  //         code block
  //         break;
  //     case "Yamazaki":
  //         code block
  //         break;
  //     case "Endo":
  //         code block
  //         break;
  //     case "Tanaka":
  //         code block
  //         break;
  //     case "Zenin":
  //         code block
  //         break;
  //     default:
  //         outo_01.mp3
  //         // play default above sound
  //
  //
  onPress = () => {
    let outo_1 = new Audio('./out_1.mp3', Audio.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      // loaded successfully
      console.log('duration in seconds: ' + outo_1.getDuration() + 'number of channels: ' + outo_1.getNumberOfChannels());

      outo_1.play((success) => {
        console.log(success)
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
        }
      });
    });
  };


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <View style={styles.comp}>
            <Header title="Batsu OUTO!" />
          </View>

          <View style={styles.comp}>
          </View>

          <View style={styles.comp}>
            <Picker style={styles.list}/>
            <Button onPress={this.onPress} />
          </View>

          <View style={styles.comp}>
            <Footer />
          </View>

        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF0000',
  },
  body: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  comp: {
    // alignContent: 'center',
  },
  list: {
    color: 'white'
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
