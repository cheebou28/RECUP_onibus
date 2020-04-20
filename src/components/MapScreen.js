import React from 'react';
import MapView from 'react-native-maps';

class MapScreen extends React.Component {
  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 35.681236,
          longitude: 139.767125,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        }}
      >
        <MapView.Marker
          coordinate={{
            latitude: 35.681236,
            longitude: 139.767125,
          }}
        />
      </MapView>
    );
  }
}
export default MapScreen;
