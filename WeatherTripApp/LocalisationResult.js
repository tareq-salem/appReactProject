import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import LocalisationSearch from './LocalisationSearch';
import LocalisationDetail from './LocalisationDetail';
import { MapView, Marker } from 'expo';

export default class LocalisationResult extends React.Component {
  static navigationOptions = {
    title: 'Résultats',
  };

  render() {
    let position = this.props.navigation.getParam('position');
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;

    return (
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: lat,
            longitude: lon,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
          >
          <MapView.Marker
            coordinate={{
              latitude: lat,
              longitude: lon,
            }}
          />
        </MapView>
        
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
