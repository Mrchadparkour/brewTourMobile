import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView from 'react-native-maps';

export default class Map extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: 38.8880,
      lng: -121.0162
    };
  }
  getAverage(arr) {
      return arr.sort((a,b) => b - a).slice(2, arr.length - 3).reduce((a, b) => a + b) / (arr.length-5);
  }

  componentDidMount() {
    if (this.props.lat.length > 0) {
      this.setState({
        lat: this.getAverage(this.props.lat),
        lng: this.getAverage(this.props.lat),
      });
    }

  }

  render() {

    return(
      <View style={styles.container}>
      <Text>{this.props.lat}</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: this.state.lat,
          longitude: this.state.lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
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
