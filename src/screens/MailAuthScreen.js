import React from 'react';
import { StyleSheet, Image, Text, View, TouchableHighlight, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import firebase from 'firebase';


class MailAuthScreen extends React.Component {
  state = {
    email: {},
  }

  handleSubmit() {
    const actionCodeSettings = {
      url: 'https://mikroent.page.link/recup',
      handleCodeInApp: true,
      dynamicLinkDomain: 'mikroent.page.link',
    };
    firebase.auth().sendSignInLinkToEmail(this.state.email, actionCodeSettings)
      .then(() => {
        // window.localStorage.setItem('emailForSignIn', email);
        this.props.navigation.navigate('MailCheck');
      })
      .catch(() => {
        this.props.navigation.navigate('MailAuth');
      });
  }


  render() {
    return (
      <View style={styles.container}>
        <Ionicons name="md-arrow-round-back" style={styles.back} onPress={() => { this.props.navigation.navigate('Login'); }} />

        <Image
          source={{ uri: 'http://drive.google.com/uc?export=view&id=1lYBvLUP_vEmWRCenHRHc018vE98WoH8l' }}
          style={{ alignSelf: 'center', marginTop:'40%', width: 100, height: 160, backgroundColor: '#fff' }}
        />

        <TextInput
          style={styles.input}
          placeholder="Email Adress"
          value={this.state.email}
          onChangeText={(text) => { this.setState({ email: text }); }}
          autoCapitalize="none"
          autoCorrect={false}
        />

        <Text style={styles.explain}>続行することで、私は18歳以上であることを確認し、RECUPの</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.termsofuse}>サービス利用規約</Text>
          <Text style={styles.and}>と</Text>
          <Text style={styles.privacypolicy}>プライバシーポリシー</Text>
          <Text style={styles.and}>に同意します。</Text>
        </View>

        <TouchableHighlight style={styles.button} onPress={this.handleSubmit.bind(this)}>
          <Text style={styles.login}>続行</Text>
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
  input: {
    fontSize: 14,
    marginTop: 100,
    height: 48,
    width: '80%',
    alignSelf: 'center',
    borderBottomWidth: 0.7,
    borderBottomColor: '#3AD29F',
  },
  explain: {
    fontSize: 12,
    color: '#3E4A59',
    marginTop: '10%',
    alignSelf: 'center',
  },
  termsofuse: {
    fontSize: 12,
    color: '#0071FF',
    textDecorationLine: 'underline',
    marginLeft: 60,
  },
  and: {
    fontSize: 12,
    color: '#3E4A59',
  },
  privacypolicy: {
    fontSize: 12,
    color: '#0071FF',
    textDecorationLine: 'underline',
  },
  matawa: {
    fontSize: 12,
    color: '#3E4A59',
    alignSelf: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#3AD29F',
    height: 48,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    alignSelf: 'center',
    marginTop: 10,
    shadowColor: '#979797',
    shadowOffset: { widh: 0, height: 1 },
    shadowRadius: 1,
    shadowOpacity: 1,
  },
  login: {
    color: '#fff',
  },
});

export default MailAuthScreen;
