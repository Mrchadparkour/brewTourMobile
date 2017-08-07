//MyNavScreen.js
import React from 'react';
import { Button, Platform, ScrollView, StyleSheet, Text, Dimensions } from 'react-native';
import { onSignOut } from "../auth";

export default class MyNavScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    const { goBack } = this.props.navigation;
    return(
        <Button backgroundColor="#03A9F4" title="SIGN OUT"
        onPress={() => onSignOut().then(() => navigate("SignedOut"))} />
    );
  }
}
