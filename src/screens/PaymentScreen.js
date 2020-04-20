import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class PaymentScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Ionicons name="md-arrow-round-back" style={styles.back} onPress={() => { this.props.navigation.navigate('Submit'); }} />
        <Image
          source={{ uri: 'http://drive.google.com/uc?export=view&id=1fa_ZT9ot-lnnCPyHjDd0S8YAjT3pLAW-' }}
          style={{ alignSelf:'center', width:200, height: 40, backgroundColor: '#fff' }}
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

        <Text style={styles.title2}>Expiry date       /      Security code</Text>

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

        <TouchableHighlight style={styles.button} onPress={() => { this.props.navigation.navigate('UseNavi'); }}>
          <Text style={styles.signup}>クレジットカード登録</Text>
        </TouchableHighlight>

        <Text style={styles.later} onPress={() => { this.props.navigation.navigate('UseNavi'); }}>Later</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  back: {
    marginTop: '10%',
    marginLeft: 40,
    fontSize: 30,
    color: '#3E4A59',
    opacity: 0.5,
  },
  title1: {
    fontSize: 16,
    color: '#3E4A59',
    marginTop: '10%',
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
    width: '70%',
    height: 48,
    borderWidth: 0.7,
    borderColor: '#5D717A',
    borderRadius: 4,
  },
  input2: {
    fontSize: 14,
    marginLeft: 40,
    height: 48,
    marginTop: 10,
    borderColor: '#5D717A',
    borderRadius: 4,
    borderWidth: 0.7,
    width: 125,
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
    marginTop: 90,
    shadowColor: '#979797',
    shadowOffset: { widh: 0, height: 1 },
    shadowRadius: 1,
    shadowOpacity: 1,
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
    textDecorationLine: 'underline',
    opacity: 0.7,
  },
});

export default PaymentScreen;
