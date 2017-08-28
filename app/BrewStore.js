import { computed, observable, action, extendObservable } from 'mobx';
import axios from 'axios';
import React from 'react';
import { View, Text } from 'react-native';


export class BrewStore {
  constructor() {
    extendObservable(this, {
      message: 'Click on the textfield to get your Brewtour started!',
      searchValue: '',
      lat: 38.8880,
      lng: -121.0162,
      brewObjList: [],
      resArray: [],
      tourArr: [],
      selectedModal: '',

      onChangeSearch: action((val) =>{
        this.brewObjList = [];
        let newArr = [];
        axios.get('https://maps.googleapis.com/maps/api/place/autocomplete/json?input='+ val +'&types=(regions)&language=en&key=AIzaSyAVcxtAqyP326_Tko9j23Aqv8VIQREELcI').then(res => {
          res.data.predictions.map(obj => {
            let cityOrState = obj.types[0] === 'locality' || obj.types[0] === 'administrative_area_level_1';
            if (cityOrState) newArr.push([obj.structured_formatting.main_text, obj.types[0]]);
            this.resArray = newArr;
          });
        }).catch(err => console.log(err));
          this.searchValue = val;
        }),

      onSubmitLocation: action((name, type) => {
        this.resArray = [];
        this.searchValue = name;
        let placeType = (type === 'locality') ? 'locality' : 'region';
        axios.get('https://api.brewerydb.com/v2/locations?key=5d2a32cf36729810ffae82e7193a9769&'+ placeType + '=' + name.replace(/\W+/g, ''))
        .then(res => this.handleRes(res.data.data));
      }),

      handleRes: action(data => {
        if (!data) this.message = "We dont have any Breweries listed in this area";
        let latArr = [];
        let lngArr = [];
        data.map(brewObj => {
          latArr.push(brewObj.latitude);
          lngArr.push(brewObj.longitude);
        });
        this.brewObjList = data;
        this.lat = this.getAverage(latArr);
        this.lng = this.getAverage(lngArr);
      }),

      toggleMap: action((modalId) => {this.selectedModal = modalId }),
      addTour: action(tour => this.tourArr.push(tour)),
      getAverage: action((arr) => arr.sort((a,b) => b - a).slice(2, arr.length - 3).reduce((a, b) => a + b) / (arr.length-5)),
    })
  }
}

export default new BrewStore();
