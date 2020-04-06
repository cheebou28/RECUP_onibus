import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

class MessageScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.explain}>Login or Signup to your account</Text>

        <Text style={styles.title1}>Live your life smarter</Text>
        <Text style={styles.title2}>with us</Text>

        <Text style={styles.illust}>イメージ画像</Text>

        <TouchableHighlight style={styles.button}>
          <Text style={styles.login}>LOGIN</Text>
        </TouchableHighlight>

        <Text style={styles.signup}>メンバー登録</Text>
      </View>
    );
  }
}

const styles = StyleSheet.creat({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  explain: {
    fontSize: 16,
    color: '#3E4A59',
    marginTop: 100,
    marginLeft: 40,
  },
  title1: {
    fontSize: 30,
    color: '#3AD29F',
    marginTop: 20,
    marginLeft: 40,
  },
  title2: {
    fontSize: 30,
    color: '#3AD29F',
    marginLeft: 40,
  },
  button: {
    backgroundColor: '#3AD29F',
    height: 48,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: '75%',
    marginLeft:50,
    marginTop: 450,
    shadowColor: '#445EE9',
    shadowOffset: { widh: 0, height: 2 },
  },
  login: {
    color: '#fff',
  },
  signup: {
    fontSize: 16,
    marginTop: 25,
    marginLeft: 160,
    color: '#005226',
  },
  illust: {
  },
});

export default MessageScreen;
