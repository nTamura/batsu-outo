import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Dimensions from 'Dimensions';

class HeaderImage extends Component {
  render() {
    return (
      <View>
        <Image
          style={styles.headerImage}
          source={require('../image/batsu-header.jpg')}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  headerImage: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: 100,
    position: 'relative',
    zIndex: 2,
  },
});

export default HeaderImage;
