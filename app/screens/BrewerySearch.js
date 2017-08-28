//BrewerySearch.js

import React from 'react';
import { Text, View, Dimensions, TextInput, StyleSheet } from 'react-native';
import MyNavScreen from './MyNavScreen';
import { observer } from 'mobx-react';
import axios from 'axios';
import DropdownText from './DropdownText';
import BrewStore from '../BrewStore';

const BrewerySearch = observer(class BrewerySearch extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <DropdownText store={ BrewStore }/>
      </View>
    );
  }
})


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    display: 'flex',
    height: Dimensions.get('window').height,
  }
});

export default BrewerySearch;
