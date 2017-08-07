//Profile.js
import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import MyNavScreen from './MyNavScreen';


export default class Profile extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <ScrollView contentContainerStyle={styles.Profile}>
        <MyNavScreen banner={'Home Screen'} navigation={this.props.navigation}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  Profile: {
    display: 'flex',
    justifyContent: 'space-between',
  },
})
