//BrewButtons.js
//parent is DisplayBreweries.js

import React from 'react';
import {View,Text, StyleSheet, Button} from 'react-native';
import { observer } from 'mobx-react';
import MapModal from './MapModal';


const BrewButtons = observer( class BrewButtons extends React.Component {
  render() {
    const { brewObj } = this.props;
    const {name, description, website} = brewObj.brewery;
    const {latitude, longitude} = this.props.brewObj;
    const { addTour, toggleMap } = this.props.store;

    return(
      <View style={styles.container}>
        <MapModal brewObj={brewObj} store={this.props.store} name={name} description={description} website={website} />
        <Button onPress={ () => toggleMap(name) } style={styles.MapButton} title="Map"/>
        <Button onPress={() => addTour(brewObj) } style={styles.TourButton} title="Add to Tour"/>
      </View>
    );
  }
})

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
export default BrewButtons;
