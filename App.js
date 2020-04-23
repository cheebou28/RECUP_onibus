import { createAppContainer } from 'react-navigation';
import { createStackNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation-stack';
import firebase from 'firebase';

import MessageScreen from './src/screens/MessageScreen';
import LoginScreen from './src/screens/LoginScreen';
import SubmitScreen from './src/screens/SubmitScreen';
import PaymentScreen from './src/screens/PaymentScreen';
import UseNavigationScreen from './src/screens/UseNavigationScreen';
import ReturnNavigationScreen from './src/screens/ReturnNavigationScreen';
import QRcodeScreen from './src/screens/QRcodeScreen';
import MenuScreen from './src/screens/MenuScreen';

import ENV from './env.json';

const firebaseConfig = {
  apiKey:             ENV.FIREBASE_API_KEY,
  authDomain:         ENV.FIREBASE_AUTH_DOMAIN,
  databaseURL:        ENV.FIREBASE_DB_URL,
  projectId:          ENV.FIREBASE_PRJ_ID,
  storageBucket:      ENV.FIREBASE_STORAGE,
  messagingSenderId:  ENV.FIREBASE_SENDER_ID,
  appId:              ENV.FIREBASE_APP_ID,
  measurementId:      ENV.FIREBASE_MEASUREMENT_ID,
};
firebase.initializeApp(firebaseConfig);


const App = createStackNavigator({
  Message: { screen: MessageScreen },
  Login: { screen: LoginScreen },
  Submit: { screen: SubmitScreen },
  Payment: { screen: PaymentScreen },
  UseNavi: { screen: UseNavigationScreen },
  Menu: { screen: MenuScreen },

  ReturnNavi: { screen: ReturnNavigationScreen },
  QRcode: { screen: QRcodeScreen },
}, {
  defaultNavigationOptions: () => ({
    header: null,
  }),
});


export default createAppContainer(App);
