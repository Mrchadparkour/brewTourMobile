//Map.js

//Need to add in Marker in map
import React from 'react';
import { View, Modal, TouchableHighlight, StyleSheet, Text } from 'react-native';
import MapView from 'react-native-maps';

export default class Profile extends React.Component {
  render() {
    const {lat, lng, visible} = this.props;
    const region = {
      latitude: lat,
      longitude: lng,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
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
            />
          </View>
          <TouchableHighlight>
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
