import React from 'react';
import { Button, Platform, StatusBar} from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import MyNavScreen from './screens/MyNavScreen';
import Home from './screens/Home';
import BrewerySearch from './screens/BrewerySearch';
import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";
import Map from './screens/map';

const headerStyle = {
  marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
};

export const SignedOut = StackNavigator({
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: "Sign Up",
      headerStyle
    }
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      title: "Sign In",
      headerStyle
    }
  }
});

export const SignedIn = DrawerNavigator(
  {
    Home: {
      path: '/',
      screen: Home,
      navigationOptions: {
        drawerLabel: "Home",
      }
    },
    BrewerySearch: {
      path: '/sent',
      screen: BrewerySearch,
      navigationOptions: {
        drawerLabel: "Search City and State",
      }
    },
    MapRes: {
      screen: Map
    },
  },
  {
    initialRouteName: 'BrewerySearch',
    contentOptions: {
      activeTintColor: '#e91e63',
      marginTop :  Platform.OS === 'ios' ? 20 : 0,
    },
  }
);

export const createRootNavigator = (signedIn = false) => {
  return StackNavigator(
    {
      SignedIn: {
        screen: SignedIn,
        navigationOptions: {
          gesturesEnabled: false
        }
      },
      SignedOut: {
        screen: SignedOut,
        navigationOptions: {
          gesturesEnabled: false
        }
      }
    },
    {
      headerMode: "none",
      mode: "modal",
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    }
  );
};
