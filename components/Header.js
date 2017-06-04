import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

function Header (props){
  const {title = '' } = props;
  return {
    <View style={styles.header}>
      <View style={styles.spacer} />
      <View style={styles.titleContainer}>
        <HeaderImage />
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  };
}

class HeaderImage extends Components {
  render() {
    return (
      <View>
        <Image
          source={require('./image/batsu-header.jpg')}
          style={styles.headerImage}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor
  }
  headerImage: {
    width: auto,
  }
})
