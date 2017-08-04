//BrewerySearch.js

import React from 'react';
import { Text, View, Dimensions, TextInput, StyleSheet } from 'react-native';
import MyNavScreen from './MyNavScreen';
import axios from 'axios';
import DropdownText from './DropdownText';
import Map from './map';


export default class BrewerySearch extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <View style={styles.container}>
        <DropdownText />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C9E5FF',
    height: Dimensions.get('window').height,
  }
});
