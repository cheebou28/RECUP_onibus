import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.title1}>Payment amount</Text>
      <Text style={styles.price}>¥500</Text>

      <Text style={styles.title2}>Name on card</Text>
      <TextInput
        style={styles.input}
        placeholder="TAKU KODAIRA"
      />

      <Text style={styles.title2}>Card number</Text>
      <TextInput
        style={styles.input}
        placeholder="1234 5678 9012 3456"
      />

      <Text style={styles.title2}>Expiry date</Text>
      <TextInput
        style={styles.input}
        placeholder="05/23"
      />

      <Text style={styles.title2}>Security code</Text>
      <TextInput
        style={styles.input}
        placeholder="123"
      />


      <TouchableHighlight style={styles.button}>
        <Text style={styles.signup}>クレジットカード登録</Text>
      </TouchableHighlight>

      <Text style={styles.later}>Later</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  title1: {
    fontSize: 16,
    color: '#3E4A59',
    marginTop: 100,
    marginLeft: 40,
  },
  price: {
    fontSize: 30,
    marginLeft: 40,
    marginTop: 5,
  },
  input: {
    fontSize: 14,
    marginLeft: 40,
    marginTop: 10,
    marginRight: 40,
    height: 48,
    borderWidth: 0.7,
    borderColor: '#3AD29F',
    borderRadius: 4,
  },
  title2: {
    fontSize: 16,
    color: '#3E4A59',
    marginTop: 20,
    marginLeft: 40,
  },
  button: {
    backgroundColor: '#4EC7C4',
    height: 48,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    marginLeft:40,
    marginTop: 70,
    shadowColor: '#445EE9',
    shadowOffset: { widh: 0, height: 2 },
  },
  signup: {
    fontSize: 16,
    color: '#fff',
  },
  later: {
    fontSize: 16,
    color: '#005226',
    alignSelf: 'center',
    marginTop: 20,
  },
});
