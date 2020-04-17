import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class SubmitScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Ionicons name="md-arrow-round-back" style={styles.back} onPress={() => { this.props.navigation.navigate('Message'); }} />
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

        <TouchableHighlight style={styles.button} onPress={() => { this.props.navigation.navigate('Payment'); }}>
          <Text style={styles.signup}>メンバー登録</Text>
        </TouchableHighlight>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },

  title: {
    fontSize: 40,
    color: '#3E4A59',
    marginTop: '20%',
    marginLeft: 40,
  },
  back: {
    marginTop: '10%',
    marginLeft: 40,
    fontSize: 30,
    color: '#3E4A59',
    opacity: 0.5,
  },
  input1: {
    fontSize: 14,
    marginLeft: 40,
    marginTop: 80,
    marginRight: 40,
    height: 48,
    borderBottomWidth: 0.7,
    borderBottomColor: '#3AD29F',
  },
  input2: {
    fontSize: 14,
    marginLeft: 40,
    marginTop: 25,
    marginRight: 40,
    height: 48,
    borderBottomWidth: 0.7,
    borderBottomColor: '#3AD29F',
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
    shadowColor: '#979797',
    shadowOffset: { widh: 0, height: 1 },
    shadowRadius: 1,
    shadowOpacity: 1,
  },
  signup: {
    fontSize: 16,
    color: '#fff',
  },
});

export default SubmitScreen;
