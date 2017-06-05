import React from 'react';
import { View, StyleSheet, Text, Image, TouchableHighlight, Dimensions } from 'react-native';

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
    width: width * .5,
    height: 64,
    resizeMode: 'contain',
    borderColor: '#FF2020',
    borderWidth: 3,
    borderRadius: 10,

  },

});

export default Button;
