import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import firebase from 'firebase';

class LoginScreen extends React.Component {
  state = {
    email:'',
    password:'',
  }

  handleSubmit() {

  }


  render() {
    return (
      <View style={styles.container}>
        <Ionicons name="md-arrow-round-back" style={styles.back} onPress={() => { this.props.navigation.navigate('Message'); }} />

        <Text style={styles.title}>Welcome back!</Text>

        <TextInput
          style={styles.input1}
          placeholder="Email Adress"
          value={this.state.email}
          onChangeText={(text) => { this.setState({ email: text }); }}
          autoCapitalize="none"
          autoCorrect={false}
        />

        <TextInput
          style={styles.input2}
          placeholder="Password"
          value={this.state.password}
          onChangeText={(text) => { this.setState({ password: text }); }}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
        />

        <TouchableHighlight style={styles.button} onPress={this.handleSubmit.bind(this)}>
          <Text style={styles.login}>LOGIN</Text>
        </TouchableHighlight>

        <Text style={styles.signup} onPress={() => { this.props.navigation.navigate('Submit'); }}>メンバー登録</Text>
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
  title: {
    fontSize: 40,
    color: '#3E4A59',
    marginTop: '15%',
    marginLeft: 40,
  },
  input1: {
    fontSize: 14,
    marginTop: 100,
    height: 48,
    width: '80%',
    alignSelf: 'center',
    borderBottomWidth: 0.7,
    borderBottomColor: '#3AD29F',
  },
  input2: {
    fontSize: 14,
    marginTop: 25,
    height: 48,
    width: '80%',
    alignSelf: 'center',
    borderBottomWidth: 0.7,
    borderBottomColor: '#3AD29F',
  },
  button: {
    backgroundColor: '#3AD29F',
    height: 48,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    alignSelf: 'center',
    marginTop: 100,
    shadowColor: '#445EE9',
    shadowOffset: { widh: 0, height: 2 },
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
    opacity: 0.5,
  },
  illust: {
  },
});

export default LoginScreen;
