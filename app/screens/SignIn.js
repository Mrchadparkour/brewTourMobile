import React from "react";
import { View, Text, TextInput } from "react-native";
import { Card, Button} from "react-native-elements";
import firebase from "../../config/fireConfig";
import {onSignIn}  from '../auth';
import { AsyncStorage } from "react-native";

export default class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
     email: '',
     pass: '',
     showErr: []
   };
 }

  render(){
    const {navigate} = this.props.navigation;
    return(
      <View style={{ paddingVertical: 20 }}>
        <Card>
        <Text>{this.state.showErr}</Text>
          <TextInput
            placeholder='Email Address...'
            onChangeText={email => this.setState({email})}
            value={this.state.email}
          />
          <TextInput
            placeholder='Password...'
            secureTextEntry={true}
            onChangeText={pass => this.setState({pass})}
            value={this.state.pass}
          />
          <Button backgroundColor="#03A9F4" buttonStyle={{ marginTop: 20 }}
           onPress={() =>  {
             onSignIn(this.state.email, this.state.pass);
             navigate('SignedIn');
           }}
           title="Login" />
          <Button backgroundColor="transparent" textStyle={{ color: "#bcbec1" }} buttonStyle={{ marginTop: 20 }} title="Create Account" onPress={() => navigate('SignUp')} />

        </Card>
      </View>
    );
  }
}
