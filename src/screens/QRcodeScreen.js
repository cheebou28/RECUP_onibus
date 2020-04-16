import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Permissions from 'expo-permissions';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scan</Text>
      <Text style={styles.description}>RECUPのQRコードをスキャンしてください</Text>
      <Image
        source={{ uri: 'http://drive.google.com/uc?export=view&id=1kU2L0kwWvmxfxg5n9PAemGSastsb_53E' }}
        style={{ alignSelf: 'center', width:120, height:120, backgroundColor: '#fff' }}
      />
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={styles.barcode}
      />
      <Text style={styles.goback}>Go Back</Text>
      {scanned && <Button title="Tap to Scan Again" onPress={() => setScanned(false)} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginTop: '10%',
    alignSelf: 'center',
    fontSize: 26,
  },
  barcode: {
    flex: 1,
    height: '55%',
    marginLeft:40,
    marginRight:40,
    marginTop: '3%',
    borderRadius: 20,
    ...Platform.select({
      ios: {
        borderRadius: 20,
      },
    }),
  },
  description: {
    fontSize: 16,
    marginTop: '5%',
    alignSelf: 'center',
    textDecorationLine: 'underline',
    color: '#A8A3A3',
  },
  goback: {
    marginTop: '10%',
    marginBottom: '15%',
    alignSelf: 'center',
    textDecorationLine: 'underline',
    color: '#A8A3A3',
    fontSize: 16,
  },
});
