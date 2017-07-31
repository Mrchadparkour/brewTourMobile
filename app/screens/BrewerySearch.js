import React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
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
      <View>
        <DropdownText />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
});
