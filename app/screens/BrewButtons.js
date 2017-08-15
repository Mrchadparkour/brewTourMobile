//BrewButtons.js
//parent is DisplayBreweries.js

import React from 'react';
import {View,Text, StyleSheet, Button} from 'react-native';
import MapModal from './MapModal';


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
    const {name, description, website} = this.props.brewObj.brewery;
    const {latitude, longitude} = this.props.brewObj;

    return(
      <View style={styles.container}>
        <MapModal lat={latitude} lng={longitude} visible={this.state.modalVisible} toggleMap={this.toggleMap} name={name} description={description} website={website} />
        <Button onPress={() => this.toggleMap()} style={styles.MapButton} title="Map"/>
        <Button onPress={() => this.props.addTour(this.props.brewObj)} style={styles.TourButton} title="Add to Tour"/>
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
