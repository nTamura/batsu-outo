import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Dimensions from 'Dimensions';

function Header (props) {
  const { title = '' } = props;
  return (
    <View style={styles.header}>
      <View style={styles.spacer} />
      <View style={styles.titleContainer}>
        <Image
          style={styles.headerImage}

        />
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
    height: 60,
    backgroundColor: 'rgb(29, 180, 213)'
  },
  headerImage: {
    uri: '../image/batsu-header.jpg',
    width: Dimensions.get('window').width,
    height: 60,
  },
  spacer: {
    height: 20,
    backgroundColor: '#E6C218'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Header;
