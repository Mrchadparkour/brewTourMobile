import React from "react";
import { View, Text, TextInput } from "react-native";
import { Card, Button} from "react-native-elements";
import { auth, db } from "../../config/fireConfig";
import {USER_KEY} from '../auth.js';
import { AsyncStorage } from "react-native";

export default class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
     email: '',
     pass: '',
     displayName:'',
     passConf:'',
     showErr: []
   };
 }

 onSignUp() {
   if (this.validateForm()) {
     auth.createUserWithEmailAndPassword(this.state.email, this.state.pass).then(user => {
       db.ref().child('users').child(user.uid).set({
         email: user.email,
         displayName: this.state.displayName,
         profileImg:""
       })
       db.goOffline();
       this.props.navigation.navigate('SignedIn');

     }).catch(err => this.setState(showErr: err.message));
   }
 }

 validateForm() {
   return(
    this.state.email.length > 0 &&
    this.state.displayName.length > 0 &&
    this.state.pass.length >= 6 &&
    this.state.pass === this.state.passConf
  );
 }

  render(){
    const {navigate} = this.props.navigation;
    return(
      <View style={{ paddingVertical: 20 }}>
        <Card>
        <Text>{this.state.showErr}</Text>
          <TextInput
            placeholder='Name...'
            onChangeText={displayName => this.setState({displayName})}
            value={this.state.displayName}
          />
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
          <TextInput
            placeholder='Confirm Password...'
            secureTextEntry={true}
            onChangeText={passConf => this.setState({passConf})}
            value={this.state.passConf}
          />
          <Button backgroundColor="#03A9F4" buttonStyle={{ marginTop: 20 }} onPress={() => this.onSignUp()} title="Create Account" />
          <Button backgroundColor="transparent" textStyle={{ color: "#bcbec1" }} buttonStyle={{ marginTop: 20 }} onPress={() => navigate('SignIn')} title="Login" />

        </Card>
      </View>
    );
  }
}
