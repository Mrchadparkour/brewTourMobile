//DisplayBreweries.js
import React from 'react';
import {ScrollView, Dimensions, StyleSheet, Image, Text, View} from 'react-native';
import MapView from 'react-native-maps';
import BrewButtons from './BrewButtons';

export default class DisplayBreweries extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return ((this.props.brewObjList.length === 0) ? <Text> Try Searching for  a City or State to get your BrewTour started</Text> :
    <View>
      <ScrollView contentContainerStyle={styles.container}>
      {this.props.brewObjList.map((brewObj, i) =>
        <View style={styles.card} key={brewObj + i}>
          <Image style={styles.breweryLogo} source={{uri: (brewObj.brewery.images) ? brewObj.brewery.images.icon : 'https://facebook.github.io/react/img/logo_og.png'}} />
          <View style={styles.CardDisplay}>
            <Text>{brewObj.brewery.name}</Text>
            <Text>{brewObj.streetAddress}</Text>
            <BrewButtons lat={brewObj.latitude} lng={brewObj.longitude}/>
          </View>
        </View>)}
      </ScrollView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  CardDisplay: {
    display: 'flex',
    flexDirection: 'column'
  },
  card: {
    backgroundColor:'white',
    margin: 10,
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 200,
  },
  name: {
    flex: 1,
  },
  contentContainer: {
    backgroundColor: '#5CB1FF',
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: 1,
  },
  breweryLogo: {
    width: 100,
    height: 100,
    margin: 5,
  },
});
