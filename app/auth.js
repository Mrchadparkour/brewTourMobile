import { AsyncStorage } from "react-native";
import firebase from '../config/fireConfig';

export const USER_KEY = "auth-demo-key";

export const onSignIn = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
    AsyncStorage.setItem(USER_KEY, user.uid);
  })
};

export const onSignOut = async() => {
  try {
    await AsyncStorage.removeItem(USER_KEY);
  }catch(error) {
    console.error(error);
  }
};

export const isSignedIn = () => {
  AsyncStorage.getItem(USER_KEY).then((value) => {
    (value !== null) ? true : false;
  });
};
