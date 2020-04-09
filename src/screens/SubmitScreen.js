import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput } from 'react-native';

class SubmitScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.title}>Let’s start!</Text>

        <TextInput
          style={styles.input1}
          placeholder="Email Adress"
        />

        <TextInput
          style={styles.input2}
          placeholder="Password"
        />

        <TextInput
          style={styles.input2}
          placeholder="Password again"
        />

        <TouchableHighlight style={styles.button}>
          <Text style={styles.signup}>メンバー登録</Text>
        </TouchableHighlight>

      </View>
    );
  }
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
    marginTop: 80,
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
    backgroundColor: '#4EC7C4',
    height: 48,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    marginLeft: 40,
    marginTop: 50,
    shadowColor: '#445EE9',
    shadowOffset: { widh: 0, height: 2 },
  },
  signup: {
    fontSize: 16,
    color: '#fff',
  },
});

export default SubmitScreen;
