import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native'

class NamePicker extends Component {

   state = {user: ''}

   updateUser = (user) => {
      this.setState({ user: user })
   }

   render() {
      return (
         <View>
            <Picker
              selectedValue = {this.state.user}
              onValueChange = {this.updateUser}
            >
               <Picker.Item
                style={styles.pickScroll}
                label = "Outo" value = "Outo" />
               <Picker.Item
                 style={styles.pickScroll}
                 label = "Matsumoto" value = "Matsumoto" />
               <Picker.Item
                 style={styles.pickScroll}
                 label = "Hamada" value = "Hamada" />
               <Picker.Item
                 style={styles.pickScroll}
                 label = "Yamazaki" value = "Yamazaki" />
               <Picker.Item
                 style={styles.pickScroll}
                 label = "Endo" value = "Endo" />
               <Picker.Item
                 style={styles.pickScroll}
                 label = "Tanaka" value = "Tanaka" />
               <Picker.Item
                 style={styles.pickScroll}
                 label = "Zenin" value = "Zenin" />
            </Picker>
            <Text style = {styles.pickName}>{this.state.user}</Text>
         </View>
      )
   }
}
export default NamePicker

const styles = StyleSheet.create({
  pickScroll: {
    color: 'white',

  },

 pickName: {
  fontSize: 30,
  alignSelf: 'center',
  color: 'white',
  backgroundColor: 0,
  fontWeight: 'bold',
 }
})
