import React from 'react';
import {Button, StyleSheet, AsyncStorage, TextInput, ScrollView, View, Text} from 'react-native';
import axios from 'axios';
import Map from './map';

export default class DropdownText extends React.Component {
  constructor() {
    super();
    this.state = {
      searchValue: '',
      placetype: '',
      latArr: [],
      brewObjList: [],
      lngArr: [],
      resArray: []
    };
  }

  onChange(val){
    let newArray = []
    axios.get('https://maps.googleapis.com/maps/api/place/autocomplete/json?input='+ val +'&types=(regions)&language=en&key=AIzaSyAVcxtAqyP326_Tko9j23Aqv8VIQREELcI').then(res => {
      res.data.predictions.map(obj => {
        let cityOrState = obj.types[0] === 'locality' || obj.types[0] === 'administrative_area_level_1';
        if (cityOrState) newArray.push([obj.structured_formatting.main_text, obj.types[0]]);
      });
      this.setState({resArray: newArray});
    }).catch(err => this.setState({showErr: 'something is wrong'}));
      this.setState({searchValue: val});
  }

  handleData(res) {
    const brewObjList = res.data.data;
    const latArr = [];
    const lngArr = [];
    brewObjList.map(brewObj => {
      latArr.push(brewObj.latitude);
      lngArr.push(brewObj.longitude);
    });
    this.setState({
      brewObjList:brewObjList,
      latArr: latArr,
      lngArr: lngArr,
    });
  }

  onSubmit(name, type){
    this.setState({resArray: [], searchValue: name});
    (type === 'locality') ?
      axios.get('https://api.brewerydb.com/v2/locations?key=5d2a32cf36729810ffae82e7193a9769&locality=' + name).then(res => {
        this.handleData(res);
      })
      :
      axios.get('https://api.brewerydb.com/v2/locations?key=5d2a32cf36729810ffae82e7193a9769&region=' + name).then(res => {
        this.handleData(res);
      });
  }

  render() {
    return(
      <View>
      <Text>{this.state.placetype}</Text>
        <TextInput
          placeholder="Search by City or State"
          onChangeText={val => this.onChange(val)}
          value={this.state.searchValue}
          returnKeyType="search"
        />
        <ScrollView style={styles.dropper}>
          {this.state.resArray.map((el, i) =>
            <View key={el[0] + i}>
              <Text onPress={this.onSubmit.bind(this, el[0], el[1])}>{el[0]}</Text>
            </View>)}
          <ScrollView horizontal={true}>
            {this.state.brewObjList.map((brewObj, i) =>
              <View style={styles.card} key={brewObj + i}>
                <Text>{brewObj.brewery.name}</Text>
              </View>)}
          </ScrollView>
        </ScrollView>
        <View>
          <Map lat={this.state.latArr} lng={this.state.lngArr} brewObjList={this.state.brewObjList} />
        </View>
      </View>

    );
  }
}
const styles = StyleSheet.create({
  dropper: {
    minHeight: 100,
  },
  card:{
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 4,
    margin: 2,
    height:100,
    width: 75,
  }
});
