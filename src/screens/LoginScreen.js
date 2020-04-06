import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Welcome back!</Text>

      <TextInput
        style={styles.input1}
        placeholder="Email Adress"
      />

      <TextInput
        style={styles.input2}
        placeholder="Password"
      />

      <TouchableHighlight style={styles.button}>
        <Text style={styles.login}>LOGIN</Text>
      </TouchableHighlight>

      <Text style={styles.signup}>メンバー登録</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 40,
    color: '#3E4A59',
    marginTop: 150,
    marginLeft: 40,
  },
  input1: {
    fontSize: 14,
    marginLeft: 40,
    marginTop: 100,
    marginRight: 40,
    height: 48,
    borderWidth: 0.7,
    borderColor: '#3AD29F',
  },
  input2: {
    fontSize: 14,
    marginLeft: 40,
    marginTop: 25,
    marginRight: 40,
    height: 48,
    borderWidth: 0.7,
    borderColor: '#3AD29F',
  },
  button: {
    backgroundColor: '#3AD29F',
    height: 48,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: '75%',
    marginLeft:50,
    marginTop: 100,
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
