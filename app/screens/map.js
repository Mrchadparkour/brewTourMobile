import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView from 'react-native-maps';

export default class Map extends React.Component {
  constructor() {
    super();

    this.state = {
      region : {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    };
  }

  render() {
    return(
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={this.state.region}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 500,
    margin: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
