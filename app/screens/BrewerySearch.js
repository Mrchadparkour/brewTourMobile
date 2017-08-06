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
        <MyNavScreen navigation={this.props.navigation}/>
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
