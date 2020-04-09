import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import MapScreen from './src/screens/MapScreen';

class NavigationScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <MapScreen />

        <View style={styles.display}>
          <Text style={styles.cafename}>RATIO & C</Text>
          <Text style={styles.opentime}>営業中</Text>
          <Image
            source={{ uri: 'http://drive.google.com/uc?export=view&id=1kFmtWn8YZS3HH9xb1DwDFla_JFIJlX0i' }}
            style={{ marginLeft:10, width:50, height:50, backgroundColor: '#fff' }}
          />

          <Text style={styles.cup}>6 cup</Text>
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
    fontFamily: 'HelveticaNeue',
    fontSize: 12,
    marginLeft: 20,
    marginTop: 10,
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
});
export default NavigationScreen;
