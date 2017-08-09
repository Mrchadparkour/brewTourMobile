//BrewerySearch.js

import React from 'react';
import { Text, View, Dimensions, TextInput, StyleSheet } from 'react-native';
import MyNavScreen from './MyNavScreen';
import axios from 'axios';
import DropdownText from './DropdownText';

export default class BrewerySearch extends React.Component {
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
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'space-between',
    height: Dimensions.get('window').height,
  }
});
