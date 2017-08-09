//Map.js
//Parent is BrewButons.js

//Need to add in Marker in map
import React from 'react';
import { View, Modal, TouchableHighlight, StyleSheet, Text } from 'react-native';
import MapView from 'react-native-maps';

export default class Profile extends React.Component {
  render() {
    const {lat, lng, visible, name} = this.props;
    const region = {
      latitude: lat,
      longitude: lng,
      latitudeDelta: 0.0052,
      longitudeDelta: 0.0210,
    }
    const latlng = {
        latitude: lat,
        longitude: lng
      }
    return(
      <View>
        <Modal
             animationType={"slide"}
             transparent={true}
             visible={this.props.visible}
             onRequestClose={() => {alert("Modal has been closed.")}}
        >
          <View style={styles.container}>
            <MapView
              style={styles.map}
              region={region}
            >
            <MapView.Marker
              coordinate={latlng}
              title={name}
            />
            </MapView>
          </View>
          <TouchableHighlight onPress={() => this.props.toggleMap()}>
                 <Text>Hide Modal</Text>
          </TouchableHighlight>
      </Modal>
     </View>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 60,

    backgroundColor: 'rgba(255, 255, 255, .5)',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    height: 500,
    width: 300,
  },
});
