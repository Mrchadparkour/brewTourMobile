import { AsyncStorage } from "react-native";
import {firebase} from '../config/fireConfig';

export const USER_KEY = "auth-demo-key";

export const onSignIn = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
    AsyncStorage.setItem(USER_KEY, user.uid);
  }).catch(err => err.message);

};

export const onSignOut = () => AsyncStorage.removeItem(USER_KEY);

export const isSignedIn = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(USER_KEY)
      .then(res => {
        if (res !== null) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(err => reject(err));
  });
};
