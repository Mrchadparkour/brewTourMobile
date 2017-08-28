import React from 'react';
import {Button, StyleSheet, TextInput, ScrollView, View, Text} from 'react-native';
import { observer } from 'mobx-react';
import DisplayBreweries from './DisplayBreweries';

const DropdownText = observer(class DropdownText extends React.Component {
  render() {
    const { resArray, onSubmitLocation, brewObjList, searchValue, onChangeSearch } = this.props.store;
    return(
      <View>
        <TextInput
          style={styles.SearchBar}
          underlineColorAndroid='transparent'
          underlineText={true}
          placeholderTextColor='#ffffff'
          onFocus={() =>this.setState({placeholder:''})}
          onBlur={() => this.setState({placeholder:'Search City or State'})}
          onChangeText={val => onChangeSearch(val)}
          value={searchValue}
          returnKeyType="search"
        />
        <ScrollView>
          {
            resArray.map((el, i) => {
              return(
                <View key={el[0] + i}>
                  <Text style={styles.searchRes} onPress={() => onSubmitLocation(el[0], el[1])}>{el[0]}</Text>
                </View>
              );
            })
          }
        </ScrollView>
        <DisplayBreweries store={this.props.store} />
      </View>

    );
  }
})

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
});

export default DropdownText;
