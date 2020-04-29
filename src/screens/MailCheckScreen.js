import React from 'react';
import { StyleSheet, Image, Text, View, TouchableHighlight, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import firebase from 'firebase';
import { NavigationActions, StackActions } from 'react-navigation';

class MailCheckScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Ionicons name="md-arrow-round-back" style={styles.back} onPress={() => { this.props.navigation.navigate('MailAuth'); }} />

        <Text style={styles.title}>メールを確認する</Text>

        <Text style={styles.explain}>ご入力したメールアドレスに届いたURLを開いて認証してください。</Text>

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
    fontSize: 24,
    color: '#3E4A59',
    alignSelf: 'center',
    marginTop: '30%',
  },
  explain: {
    fontSize: 12,
    color: '#3E4A59',
    marginTop: '10%',
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#3AD29F',
    height: 48,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    alignSelf: 'center',
    marginTop: 50,
    shadowColor: '#979797',
    shadowOffset: { widh: 0, height: 1 },
    shadowRadius: 1,
    shadowOpacity: 1,
  },
  login: {
    color: '#fff',
  },
});

export default MailCheckScreen;
