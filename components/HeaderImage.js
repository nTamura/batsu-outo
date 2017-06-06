import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Dimensions from 'Dimensions';

class HeaderImage extends React.Component {
  render() {
    return (
      <View>
        <Image
          resizeMode="contain"
          source={require('../image/batsu-header.jpg')}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({

});

export default HeaderImage;
