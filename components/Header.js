import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Dimensions from 'Dimensions';

function Header (props) {
  const { title = '' } = props;
  return (
    <View style={styles.header}>
      <View style={styles.spacer} />
      <View style={styles.titleContainer}>
        {/* <Image
          style={styles.headerImage}
          resizeMode="contain"
          source={require('../image/altheader.png')}
        /> */}
        <Text style={styles.title}>{title}</Text>
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

    height: 60,
  },
  // spacer: {
  //   height: 20,
  //   backgroundColor: 'gainsboro'
  // },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red'
  },
  headerImage: {
    flex: 1,
    width: Dimensions.get('window').width,
    // height: 'contain',
  },

});

export default Header;
