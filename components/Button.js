import React from 'react';
import { View, StyleSheet, Text, Image, TouchableHighlight, Dimensions } from 'react-native';
import Audio from 'react-native-sound'
let width = Dimensions.get("window").width;

class Button extends React.Component {
  render() {
  return (
    <View style={styles.buttonContainer}>
      <TouchableHighlight
        onPress={() => { this.props.onPress() }}>
        <Image
          style={styles.button}
          source={require('../image/outoBtn.png')}
        />
      </TouchableHighlight>
    </View>

  );
  }
}

const styles = StyleSheet.create({
  buttonContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  button: {
    backgroundColor: '#FAFAFA',
    width: width * .6,
    height: 64,
    resizeMode: 'contain',
    borderColor: '#FFC700',
    borderWidth: 4,
    borderRadius: 10,

  },

});

export default Button;
