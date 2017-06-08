import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Dimensions from 'Dimensions';
import HeaderImage from '../components/HeaderImage';

function Header (props) {
  const { title = '' } = props;
  return (
    <View style={styles.header}>
      <View style={styles.spacer} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <HeaderImage style={styles.headerImage} />
      </View>
    </View>
  );
}

// class HeaderImage extends Component {
//   render() {
//     return (
//       <View>
//         <Image
//           source={require('./image/batsu-header.jpg')}
//           style={styles.headerImage}
//         />
//       </View>
//     );
//   }


const styles = StyleSheet.create({
  header: {
    marginTop: 20,

    height: 100,
  },
  // spacer: {
  //   height: 20,
  //   backgroundColor: 'gainsboro'
  // },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 0,
    textShadowColor: '#000000',
    // textShadowRadius: 4,

    zIndex: 5,
    position: 'absolute',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0
  },

});

export default Header;
