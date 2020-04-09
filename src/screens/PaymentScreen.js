import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput, Image } from 'react-native';

class PaymentScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <Image
          source={{ uri: 'http://drive.google.com/uc?export=view&id=1fa_ZT9ot-lnnCPyHjDd0S8YAjT3pLAW-' }}
          style={{ marginTop:40, alignSelf:'center', width:200, height: 40, backgroundColor: '#fff' }}
        />
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

        <Text style={styles.title2}>Expiry date / Security code</Text>

        <View style={{ flexDirection: 'row' }}>
          <TextInput
            style={styles.input2}
            placeholder="05/2"
          />

          <TextInput
            style={styles.input2}
            placeholder="123"
          />
        </View>

        <TouchableHighlight style={styles.button}>
          <Text style={styles.signup}>クレジットカード登録</Text>
        </TouchableHighlight>

        <Text style={styles.later}>Later</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },

  title1: {
    fontSize: 16,
    color: '#3E4A59',
    marginTop: 50,
    marginLeft: 40,
    fontFamily: 'HelveticaNeue-Italic',
  },
  price: {
    fontSize: 30,
    marginLeft: 40,
    marginTop: 5,
    fontFamily: 'Times New Roman',
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
  input2: {
    fontSize: 14,
    marginLeft: 40,
    height: 48,
    marginTop: 10,
    borderColor: '#3AD29F',
    borderRadius: 4,
    borderWidth: 0.7,
    width: 100,
  },
  title2: {
    fontSize: 16,
    color: '#3E4A59',
    marginTop: 20,
    marginLeft: 40,
    fontFamily: 'HelveticaNeue-Italic',
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
    fontFamily: 'HelveticaNeue-Italic',
  },
});

export default PaymentScreen;
