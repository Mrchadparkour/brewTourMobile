import React from "react";
import { createRootNavigator } from "./router";
import {View, Text, AsyncStorage} from 'react-native';
import { USER_KEY } from './auth.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      auth: false
    };
  }

  _loadInitialState = async () => {
    try {
      const value = await AsyncStorage.getItem(USER_KEY);
      (value !== null) ? this.setState({loaded: true, auth: true})
      : this.setState({loaded:true});
    }catch(error) {console.error(error);}
  }

  componentWillMount() {
    this._loadInitialState().done();
  }

  render() {
    if (this.state.loaded) {
      const Layout = createRootNavigator(this.state.auth);
      return <Layout />;
    } else {
      return <View><Text>Loading</Text></View>
    }
  }
}
