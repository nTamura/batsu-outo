import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Dimensions from 'Dimensions';
// import HeaderImage from '../components/HeaderImage';

class Footer extends Component {
  render() {
    return (
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          nTamura BatsuOuto! 2017
        </Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#FF0000',
  },
  footerText: {
    color: "#FFF",
    textAlign: 'center',
  },
});

export default Footer;
