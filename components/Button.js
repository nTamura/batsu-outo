import React from 'react';
import { View, StyleSheet, Text, Image, TouchableHighlight, Dimensions } from 'react-native';
import Audio from 'react-native-sound'
let width = Dimensions.get("window").width;

const Audio = require('react-native-sound')

let outo_01 = new Audio('out_1.mp3', Audio.MAIN_BUNDLE, (error) => {
  if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // loaded successfully
    console.log('duration in seconds: ' + outo_01.getDuration() + 'number of channels: ' + outo_01.getNumberOfChannels());
  });

  // Play the sound with an onEnd callback
  outo_01.play((success) => {
    if (success) {
      console.log('successfully finished playing');
    } else {
      console.log('playback failed due to audio decoding errors');
    }
  });


class Button extends React.Component {
  render() {
  return (
    <View style={styles.buttonContainer}>
      <TouchableHighlight
        onPress={() => { this.props.onPress() }}>
        <Image
          style={styles.button}
          source={require('../image/outoBtn.png')}
        />
      </TouchableHighlight>
    </View>

  );
  }
}

const styles = StyleSheet.create({
  buttonContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  button: {
    backgroundColor: '#FAFAFA',
    width: width * .5,
    height: 64,
    resizeMode: 'contain',
    borderColor: '#FF2020',
    borderWidth: 3,
    borderRadius: 10,

  },

});

export default Button;
