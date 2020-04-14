import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, Image } from 'react-native';

class MessageScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.explain}>Login or Signup to your account</Text>
        <Text style={styles.title1}>Live your life smarter</Text>
        <Text style={styles.title2}>with us</Text>

        <Image
          source={{ uri: 'http://drive.google.com/uc?export=view&id=1fOnVsYgNWoMGMCXk2YwmTeUDTi8h29jc' }}
          style={{ marginLeft:40, marginTop:20, width:'100%', height:400, backgroundColor: '#fff' }}
        />

        <TouchableHighlight style={styles.button}>
          <Text style={styles.login}>LOGIN</Text>
        </TouchableHighlight>

        <Text style={styles.signup}>メンバー登録</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  explain: {
    fontSize: 16,
    color: '#3E4A59',
    marginTop: 60,
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
    width: '80%',
    marginLeft:40,
    marginTop: 30,
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
});

export default MessageScreen;
