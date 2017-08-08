//Profile.js
import React from 'react';
import { View, Text, Animated, ScrollView, StyleSheet, Easing } from 'react-native';
import MyNavScreen from './MyNavScreen';


export default class Profile extends React.Component {
  constructor() {
    super();
    this.animatedValue = new Animated.Value(0);
  }

  componentDidMount() {
    this.animate();
  }

  animate() {
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 4000,
        easing: Easing.liner
      }
    ).start(() => this.animate());
  }


  render () {
  const marginTop = this.animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 30, 60]
  });
  const opacity = this.animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 1, 0]
  });
  const movingMargin = this.animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 300, 0]
  });
  const textSize = this.animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [18, 32, 18]
  });
  const rotateX = this.animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['0deg', '180deg', '0deg']
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          marginTop,
          height: marginTop,
          width: marginTop,
          zIndex: 4,
          position: 'absolute',
          backgroundColor: 'red'}} />
      <Text>Hello Potatohead</Text>
    </View>
);
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 150
  }
});
