import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class BackgroundImage extends Component {

    render() {
        return (
            <Image
              source={require('../image/w1.png')}
              style={styles.backgroundImage}
            >

                    {this.props.children}

            </Image>
        )
    }
}


const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    }
});

export default BackgroundImage;
