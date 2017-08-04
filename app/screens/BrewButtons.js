//BrewButtons.js

import React from 'react';
import {View, StyleSheet, Button} from 'react-native';

export default class DisplayBreweries extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <Button style={styles.MapButton} title="Map"/>
        <Button style={styles.TourButton} title="Add to Tour"/>
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
    margin: 10,
    flex: 1,
  },
  TourButton: {
    backgroundColor: '#03A9F4',
    margin: 10,
    flex: 1,
  },
});
