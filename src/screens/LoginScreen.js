import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, Image } from 'react-native';

class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <Image
          source={{ uri: 'http://drive.google.com/uc?export=view&id=1lYBvLUP_vEmWRCenHRHc018vE98WoH8l' }}
          style={{ alignSelf: 'center', marginTop:'40%', width: 100, height: 160, backgroundColor: '#fff' }}
        />

        <Text style={styles.explain}>続行することで、私は18歳以上であることを確認し、RECUPの</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.termsofuse}>サービス利用規約</Text>
          <Text style={styles.and}>と</Text>
          <Text style={styles.privacypolicy}>プライバシーポリシー</Text>
          <Text style={styles.and}>に同意します。</Text>
        </View>

        <TouchableHighlight style={styles.google} onPress={() => { this.props.navigation.navigate('MailAuth'); }}>
          <Image
            source={{ uri: 'http://drive.google.com/uc?export=view&id=1aUuy4ToKH5ucLE9E3AbdGarDKWgQnpqN' }}
            style={{ alignSelf: 'center', marginTop: 20, width:350, height:50, backgroundColor: '#fff' }}
          />
        </TouchableHighlight>

        <Text style={styles.matawa}> - または - </Text>

        <TouchableHighlight style={styles.button} onPress={() => { this.props.navigation.navigate('MailAuth'); }}>
          <Text style={styles.login}>メールアドレス認証</Text>
        </TouchableHighlight>

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
    fontSize: 12,
    color: '#3E4A59',
    marginTop: '20%',
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
    height: 50,
    width: 350,
    marginTop: 20,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    shadowColor: '#979797',
    shadowOffset: { widh: 0, height: 1 },
    shadowRadius: 1,
    shadowOpacity: 1,
  },
  login: {
    color: '#fff',
  },
});

export default LoginScreen;
