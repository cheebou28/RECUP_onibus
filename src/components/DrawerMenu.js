import React from 'react';
import { View, StyleSheet, Text, Image, TouchableHighlight, TouchableOpacity } from 'react-native';

class DrawerMenu extends React.Component {
  navigateToScreen = (route) => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={this.navigateToScreen('Home', { isStatusBarHidden: false })}
        >
          <Text style={styles.menuItemText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={this.navigateToScreen('Chat', { isStatusBarHidden: false })}
        >
          <Text style={styles.menuItemText}>Chat</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default DrawerMenu;
