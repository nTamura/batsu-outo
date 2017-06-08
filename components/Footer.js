import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Dimensions from 'Dimensions';
// import HeaderImage from '../components/HeaderImage';

class Footer extends Component {
  render() {
    return (
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          <Image
            style={styles.footerLogo}
            source={require('../image/gh.png')}
          />
           nTamura BatsuOuto! 2017
        </Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#FFF',
    height: 22,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',

  },
  footerText: {
    color: "#000",
    textAlign: 'center',

  },
  footerLogo:{
    height: 15,
    width: 15,



  }
});

export default Footer;
