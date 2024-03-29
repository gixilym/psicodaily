import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyCQXCyANbIWRQWURrY-T-qz9wip4187MDo",
  authDomain: "psicodaily-8c4ba.firebaseapp.com",
  projectId: "psicodaily-8c4ba",
  storageBucket: "psicodaily-8c4ba.appspot.com",
  messagingSenderId: "682899102315",
  appId: "1:682899102315:web:9c48bb90a80974b973af2e",
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export { auth };

//ID Web - 1052137670730-942e4tktt96ujhr8mmlc8mhg9frsdr21.apps.googleusercontent.com
//IOS - 1052137670730-h0nec1jrv3vefc7v19htgampdq2c169p.apps.googleusercontent.com
