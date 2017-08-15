import React from 'react';
import {Button, StyleSheet, TextInput, ScrollView, View, Text} from 'react-native';
import axios from 'axios';
import CreateTour from './CreateTour';
import DisplayBreweries from './DisplayBreweries';

export default class DropdownText extends React.Component {
  constructor() {
    super();
    this.state = {
      noBrewMessage: 'Click on the textfield to get your BrewTour started!',
      placeholder: 'Search by City or State',
      searchValue: '',
      placetype: '',
      lat: 38.8880,
      brewObjList: [],
      lng: -121.0162,
      resArray: [],
      tourArr:[]
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

  getAverage(arr) {
      return arr.sort((a,b) => b - a).slice(2, arr.length - 3).reduce((a, b) => a + b) / (arr.length-5);
  }

  handleData(res) {
    if (!res.data.data) return this.setState({noBrewMessage: "We don't have any breweries listed there..., Help us out by adding to our database in the Add Brewery page!"})
    const brewObjList = res.data.data;
    const latArr = [];
    const lngArr = [];
    brewObjList.map(brewObj => {
      latArr.push(brewObj.latitude);
      lngArr.push(brewObj.longitude);
    });
    this.setState({
      brewObjList:brewObjList,
      lat: this.getAverage(latArr),
      lng: this.getAverage(lngArr),
    });
  }

  onSubmit(name, type){
    this.setState({resArray: [], searchValue:name});
    (type === 'locality') ?
      axios.get('https://api.brewerydb.com/v2/locations?key=5d2a32cf36729810ffae82e7193a9769&locality=' + name.replace(/\W+/g, '')).then(res => {
        this.handleData(res);
      })
      :
      axios.get('https://api.brewerydb.com/v2/locations?key=5d2a32cf36729810ffae82e7193a9769&region=' + name.replace(/\W+/g, '')).then(res => {
        this.handleData(res);
      });
  }


  render() {
     let {resArray} = this.state;
    return(
      <View>
        <TextInput
          style={styles.SearchBar}
          underlineColorAndroid='transparent'
          underlineText={true}
          placeholder={this.state.placeholder}
          placeholderTextColor='#ffffff'
          onFocus={() =>this.setState({placeholder:''})}
          onBlur={() => this.setState({placeholder:'Search by City or State'})}
          onChangeText={val => this.onChange(val)}
          onSubmitEditing={(resArray.length > 0 ) ? this.onSubmit.bind(this,resArray[0][0],resArray[0][1]): console.log('No Array')}
          value={this.state.searchValue}
          returnKeyType="search"
        />
        <ScrollView>
          {resArray.map((el, i) =>
            <View key={el[0] + i}>
              <Text style={styles.searchRes} onPress={this.onSubmit.bind(this, el[0], el[1])}>{el[0]}</Text>
            </View>)}
        </ScrollView>
        <DisplayBreweries brewObjList={this.state.brewObjList} noBrewMessage={this.state.noBrewMessage} />

      </View>

    );
  }
}

const styles = StyleSheet.create({
  SearchBar : {
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: {height: 1,width: 1},
    textDecorationLine: 'none',
    padding: 3,
    borderBottomWidth: 3,
    borderBottomColor: '#4CA5FF',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 5,
  },
  searchRes : {
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: {height: 1,width: 1},
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 5,
  },
})
