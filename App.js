import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Alert } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import Button from './components/Button';
import Picker from './components/Picker';
import BackgroundImage from './components/Background';
import Audio from 'react-native-sound';

export default class App extends Component {
  //  something output audio file..
  //  put whole function in here for each one? for now output outo_01 for each
  //
  // switch(condition) {
  //   case = "Matsumoto":
  //   audio = 'out_01.mp3'
  //   break;
  //
  //   case "Hamada":
  //       code block
  //       break;
  //   case "Yamazaki":
  //       code block
  //       break;
  //   case "Endo":
  //       code block
  //       break;
  //   case "Tanaka":
  //       code block
  //       break;
  //   case "Zenin":
  //       code block
  //       break;
  //   default:
  //       outo_01.mp3
  //       // play default above sound
  //
  //
  //
  // let value = this.value;
  // const Rank = React.createClass({
  //   render: function() {
  //
  // switch (this.props.value) {
  //   case "Matsumoto":
  //   Audio('./out_1.mp3', Audio.MAIN_BUNDLE)
  //   break;
  //
  //   case "Matsumoto":
  //   Audio('./out_1.mp3', Audio.MAIN_BUNDLE
  //   break;
  //   default:
  //     throw new Error('error');
  // }
  //
  // return ProductPage;



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
        <BackgroundImage>
        <View style={styles.body}>
          <View style={styles.comp}>
            <Header title="" />
          </View>

          {/* <View style={styles.comp}>
          </View> */}

          <View style={styles.comp}>
            {/* <Picker style={styles.list}/> */}
            <Button onPress={this.onPress} />
          </View>

          <View style={styles.comp}>
            <Footer />
          </View>

        </View>
        </BackgroundImage>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 2,
    position: 'relative',
  },
  backgroundImage: {
    marginTop: 20,
    flex: 1,
    zIndex: 0,
    resizeMode: 'cover',
    position: 'absolute'
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
