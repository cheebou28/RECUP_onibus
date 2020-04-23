import { createAppContainer } from 'react-navigation';
import { createStackNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation-stack';

import MessageScreen from './src/screens/MessageScreen';
import LoginScreen from './src/screens/LoginScreen';
import SubmitScreen from './src/screens/SubmitScreen';
import PaymentScreen from './src/screens/PaymentScreen';
import UseNavigationScreen from './src/screens/UseNavigationScreen';
import ReturnNavigationScreen from './src/screens/ReturnNavigationScreen';
import QRcodeScreen from './src/screens/QRcodeScreen';
import MenuScreen from './src/screens/MenuScreen';

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
