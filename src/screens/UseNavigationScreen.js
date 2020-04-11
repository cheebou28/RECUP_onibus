import React from 'react';
import { View, StyleSheet, Text, Image, TouchableHighlight } from 'react-native';
import MapScreen from './MapScreen';

class UseNavigationScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <MapScreen />

        <View style={styles.display}>
          <Text style={styles.cafename}>RATIO & C</Text>
          <Text style={styles.opentime}>営業中</Text>

          <View style={{ flexDirection: 'row' }}>
            <Image
              source={{ uri: 'http://drive.google.com/uc?export=view&id=1kFmtWn8YZS3HH9xb1DwDFla_JFIJlX0i' }}
              style={{ marginLeft:10, marginTop:20, width:50, height:50, backgroundColor: '#fff' }}
            />
            <Text style={styles.cup}>6 cup</Text>
            <Image
              source={{ uri: 'http://drive.google.com/uc?export=view&id=1kFmtWn8YZS3HH9xb1DwDFla_JFIJlX0i' }}
              style={{ marginLeft:35, marginTop:20, width:50, height:50, backgroundColor: '#fff' }}
            />
            <Text style={styles.distance}>0.2 KM</Text>
          </View>
          <TouchableHighlight style={styles.button}>
            <Text style={styles.use}>Use       　　　　　　　　         →</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  display: {
    height: 250,
    width: 350,
    marginLeft: 35,
    marginTop: 600,
    position: 'absolute',
    backgroundColor: '#fff',
    borderRadius: 4,
  },
  cafename: {
    marginTop: 30,
    marginLeft: 20,
    fontSize: 20,
    fontFamily: 'HelveticaNeue-Light',
  },
  opentime: {
    fontFamily: 'HelveticaNeue-Light',
    fontSize: 12,
    marginLeft: 20,
    marginTop: 10,
  },
  cup: {
    marginTop: 40,
  },
  distance: {
    marginTop: 40,
  },
  use: {
    color: '#fff',
    fontSize: 18,
  },
  button: {
    backgroundColor: '#FF8888',
    height: 55,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: '88%',
    marginLeft:20,
    marginTop: 10,
    shadowColor: '#445EE9',
    shadowOffset: { widh: 0, height: 2 },
  },
});
export default UseNavigationScreen;
