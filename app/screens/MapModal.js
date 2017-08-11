//Map.js
//Parent is BrewButons.js

//Need to add in Marker in map
import React from 'react';
import { View, Modal, Button, TouchableHighlight, StyleSheet, Linking, Text } from 'react-native';
import MapView from 'react-native-maps';

export default class MapModal extends React.Component {
  render() {
    const {lat, lng, visible, name, description, website} = this.props;
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
      <View style={styles.ModalBackground}>
        <Modal
             animationType={"slide"}
             transparent={true}
             visible={this.props.visible}
             onRequestClose={() => {alert("Modal has been closed.")}}
        >
          <TouchableHighlight style={styles.HideModal} onPress={() => this.props.toggleMap()}>
                 <Text>Hide Modal</Text>
          </TouchableHighlight>
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
                <View style={styles.RedCircle}>
                  <Text style={styles.PlusSign}>+Tour</Text>
                </View>
            <View style={styles.BreweryDescription}>
              <Text style={styles.heading}>{name}</Text>
              <Text style={styles.description}>{description}</Text>
              <View style={styles.buttonFormat}>
                <Button color='#F9BF3B' style={styles.websiteButton} title="Check out their website" onPress={() => Linking.openURL(website)} />
                <Button color='#F9BF3B' style={styles.navigateButton} title="Take me There!" onPress={() => alert('click')} />
              </View>
            </View>
          </View>
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
    backgroundColor:'rgba(0, 0, 0, 0.5)',
    padding:60,
  },
  map: {
    height: 500,
    width: 300,
    marginRight: 60,
    marginLeft: 60,
    flex:1,
    zIndex: -1,
    borderRadius: 10,

  },
  BreweryDescription : {
    flex:1,
    backgroundColor: '#19B5FE',
    width: 300,
    zIndex: 10,
  },
  RedCircle: {
    borderRadius: 50,
    backgroundColor: '#F5AB35',
    height: 60,
    right: 80,
    position:'absolute',
    width: 60,
    opacity:5,
    zIndex: 11,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  PlusSign: {
    color: 'white',
    fontSize: 20,
    fontWeight:'bold',
    zIndex: 12,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  buttonFormat: {
    position:'absolute',
    bottom: 0,
    width: 300,
  },
  description: {
    color: 'white',
  },
  HideModal: {
    zIndex: 20,
  }
});
