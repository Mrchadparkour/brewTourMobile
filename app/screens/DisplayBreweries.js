import React from 'react';
import {ScrollView, Dimensions, StyleSheet, Image, Text, View} from 'react-native';

export default class DisplayBreweries extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.brewObjList[1].brewery);
    return(
      <ScrollView contentContainerStyle={styles.container}>
      {this.props.brewObjList.map((brewObj, i) =>
        <View style={styles.card} key={brewObj + i}>
          <Image style={styles.breweryLogo} source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} />
          <Text>{brewObj.brewery.name}</Text>
        </View>)}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 200,
    borderColor: '#000000',
  },
  name: {
    flex: 1,
  },
  contentContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: 1,
  },
  breweryLogo: {
    width: 100,
    height: 100,
    margin: 5,

  }
});
