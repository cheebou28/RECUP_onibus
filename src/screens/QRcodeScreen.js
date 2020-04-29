import React from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Permissions from 'expo-permissions';

class QRcodeScreen extends React.Component {
  state = {
    hasCameraPermission: null,
    scanned: false,
  };

  async componentDidMount() {
    this.getPermissionsAsync();
  }

   getPermissionsAsync = async () => {
     const { status } = await Permissions.askAsync(Permissions.CAMERA);
     this.setState({ hasCameraPermission: status === 'granted' });
   };

   handleBarCodeScanned = ({ type, data }) => {
     this.setState({ scanned: true });
     // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
     const jsondata = {};
     if (this.isJson(data) && (jsondata === JSON.parse(data)).invoice_endpoint_url) {
       this.props.globalState.getDataFromServer(jsondata.invoice_endpoint_url);
       this.props.navigation.goBack();
     } else {
       alert('This is not a valid QR code.');
     }
   };

   isJson(str) {
     try {
       JSON.parse(str);
     } catch (e) {
       return false;
     }
     return true;
   }

   render() {
     const { hasCameraPermission, scanned } = this.state;

     if (hasCameraPermission === null) {
       return <Text>No access to camera</Text>;
     }
     return (
       <View style={styles.container}>
         <Text style={styles.title}>Scan</Text>
         <Image
           source={{ uri: 'http://drive.google.com/uc?export=view&id=1kU2L0kwWvmxfxg5n9PAemGSastsb_53E' }}
           style={{ alignSelf: 'center', width:100, height:100, backgroundColor: '#fff' }}
         />
         <Text style={styles.description}>RECUPのQRコードをスキャンしてください</Text>
         <BarCodeScanner
           onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
           style={styles.barcode}
         />
         <Text style={styles.goback} onPress={() => { this.props.navigation.navigate('UseNavi'); }}>Go Back</Text>
         {scanned && <Button title="Tap to Scan Again" onPress={() => this.setState({ scanned: false })} />}
       </View>
     );
   }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    fontSize: 12,
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

export default QRcodeScreen;
