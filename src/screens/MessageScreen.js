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
          style={{ marginTop:20, width:'100%', height:'50%', backgroundColor: '#fff' }}
        />

        <TouchableHighlight style={styles.button} onPress={() => { this.props.navigation.navigate('Login'); }}>
          <Text style={styles.login}>LOGIN</Text>
        </TouchableHighlight>

        <Text style={styles.signup} onPress={() => { this.props.navigation.navigate('Submit'); }}>メンバー登録</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  explain: {
    fontSize: 16,
    color: '#3E4A59',
    marginTop: '20%',
    marginLeft: 40,
  },
  title1: {
    fontSize: 30,
    color: '#3AD29F',
    marginTop: '6%',
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
    shadowColor: '#979797',
    shadowOffset: { widh: 0, height: 1 },
    shadowRadius: 1,
    shadowOpacity: 1,
  },
  login: {
    color: '#fff',
  },
  signup: {
    fontSize: 16,
    marginTop: '5%',
    alignSelf: 'center',
    color: '#005226',
    textDecorationLine: 'underline',
  },
});

export default MessageScreen;
