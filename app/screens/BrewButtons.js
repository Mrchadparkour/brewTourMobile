//BrewButtons.js
//parent is DisplayBreweries.js

import React from 'react';
import {View,Text, StyleSheet, Button} from 'react-native';
import MapModal from './Map';


export default class BrewButtons extends React.Component {
  constructor() {
    super();
    this.state={
      modalVisible:false,
    };
    this.toggleMap = this.toggleMap.bind(this);
  }

   toggleMap() {
    this.setState({modalVisible: !this.state.modalVisible});
  }

  render() {
    const {lat, lng, name} = this.props;
    return(
      <View style={styles.container}>
        <MapModal lat={lat} lng={lng} visible={this.state.modalVisible} toggleMap={this.toggleMap} name={name} />
        <Button onPress={() => this.toggleMap()} style={styles.MapButton} title="Map"/>
        <Button onPress={() => alert('Save the brewery!')} style={styles.TourButton} title="Add to Tour"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  MapButton: {
    backgroundColor: '#000000',
    margin: 20,
  },
  TourButton: {
    backgroundColor: '#03A9F4',
    margin: 10,
  },
});
