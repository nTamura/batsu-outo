import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Alert } from 'react-native';
import Header from './components/Header';
// import ButtonScreen from './components/ButtonScreen';

const onButtonPress = () => {
  Alert.alert('Harrooo');
};


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pressStatus: false };
  }
  _onHideUnderlay(){
    this.setState({ pressStatus: false });
  }
  _onShowUnderlay(){
    this.setState({ pressStatus: true });
    }

  render() {
    return (
      <View style={styles.container}>
        <Header title="Batsu OUTO!" />

        <Text>Gaki no tsukai OUTO button</Text>
        <TouchableHighlight
          activeOpacity={1}
          style={this.state.pressStatus ? styles.buttonPress : styles.button }
          onHideUnderlay={this._onHideUnderlay.bind(this)}
          onShowUnderlay={this._onShowUnderlay.bind(this)}
        >
          <Text style={ this.state.pressStatus ? styles.batsuPress : styles.batsu }>{this.props.text}
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  
  batsu: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: "#006"
  },
  batsuPress: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: "#FFF"
  }



});
