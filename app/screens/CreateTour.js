//CreateTour.js
//Parent is DisplayBreweries

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class CreateTour extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return(
        <View style={styles.TourList}>
            {this.props.tourArr.map((brewObj, i) => <Text key={brewObj.id}>{brewObj.brewery.name}</Text>)}
        </View>

      );
    }
}

const styles = StyleSheet.create({
  TourList: {
    height: 230,
    backgroundColor: 'red',
    opacity: 3,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
});
