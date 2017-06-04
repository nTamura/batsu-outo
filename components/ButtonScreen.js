import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';




class ButtonScreen extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      button: []
    }
    this.playOuto = this.playOuto.bind(this)
  }

  playOuto(id){
    getOuto(id)
    .then(cycleOuto)
  }
  }

  // needs main button
  // component to pick which sound file to play, dropdown for now
