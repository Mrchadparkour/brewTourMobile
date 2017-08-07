import { AsyncStorage } from "react-native";
import firebase from '../config/fireConfig';

export const USER_KEY = "auth-demo-key";

export const onSignIn = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
    AsyncStorage.setItem(USER_KEY, user.uid).then(() => console.log('success'));
  })
};

export const onSignOut = async() => {
    await AsyncStorage.removeItem(USER_KEY).then(() => console.log('Item removed'));
};
