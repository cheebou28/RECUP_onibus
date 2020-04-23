import React from 'react';
import { View, StyleSheet, Text, Image, TouchableHighlight } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class MenuScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Ionicons name="md-arrow-round-back" style={styles.back} onPress={() => { this.props.navigation.navigate('UseNavi'); }} />
        <Image
          source={{ uri: 'http://drive.google.com/uc?export=view&id=1kU2L0kwWvmxfxg5n9PAemGSastsb_53E' }}
          style={{ marginLeft: 10, width:120, height:120, backgroundColor: '#fff' }}
        />

        <TouchableHighlight onPress={() => { this.props.navigation.navigate('UseNavi'); }} underlayColor="C7OF66">
          <View style={{ flexDirection: 'row' }}>
            <Ionicons name="md-contact" style={styles.setting} />
            <Text style={styles.settingText}>会員情報</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => { this.props.navigation.navigate('UseNavi'); }} underlayColor="C7OF66">
          <View style={{ flexDirection: 'row' }}>
            <Ionicons name="ios-settings" style={styles.setting} />
            <Text style={styles.settingText}>設定</Text>
          </View>
        </TouchableHighlight>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
  setting: {
    marginTop: '5%',
    marginLeft: '10%',
    fontSize: 35,
  },
  settingText: {
    marginTop: '8%',
    marginLeft: 10,
    fontSize: 16,
  },
  back: {
    marginTop: '10%',
    marginLeft: 40,
    fontSize: 30,
    color: '#3E4A59',
    opacity: 0.5,
  },
});

export default MenuScreen;
