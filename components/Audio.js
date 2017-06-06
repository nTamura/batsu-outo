import React from 'react';
import { View, StyleSheet, Text, Image, TouchableHighlight, Dimensions } from 'react-native';

const Sound = require('react-native-sound')

let outo_01 = new Sound('out_1.mp3', Sound.MAIN_BUNDLE, (error) => {
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



export default Audio;
