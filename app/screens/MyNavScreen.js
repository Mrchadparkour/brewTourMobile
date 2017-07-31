import React from 'react';
import { Button, Platform, ScrollView, StyleSheet, Text } from 'react-native';
import { onSignOut } from "../auth";

export default class MyNavScreen extends React.Component {
  constructor() {
    super();
  }

  render() {
    console.info('yes');
    const { navigate } = this.props.navigation;
    const { goBack } = this.props.navigation;
    return(
      <ScrollView>
        <Text>{this.props.banner}</Text>
        <Button
          onPress={() => navigate('DrawerOpen')}
          title="Open drawer"
        />
        <Button onPress={() => goBack(null)} title="Go back" />
        <Button backgroundColor="#03A9F4" title="SIGN OUT"
        onPress={() => onSignOut().then(() => navigate("SignedOut"))}
/>
      </ScrollView>
    );
  }
}
