import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, Linking } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

export default class App extends Component<Props> {
  render() {
    return (
      <QRCodeScanner
        ref={(node) => { this.scanner = node; }}
        onRead={this.onSuccess.bind(this)}
      />
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
