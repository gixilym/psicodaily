import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAoF0-vIpojzgvfnPIIDaS5iKlPoFzNGZE",
  authDomain: "psicodaily-48afc.firebaseapp.com",
  projectId: "psicodaily-48afc",
  storageBucket: "psicodaily-48afc.appspot.com",
  messagingSenderId: "274767819936",
  appId: "1:274767819936:web:960dbfb30049839a4d45c5",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

//IOS: 274767819936-mnu4to09sl8o7b0mdg7ckcs8v6aq4765.apps.googleusercontent.com
//Android: 274767819936-bbbh2u6gp295m5sdpv2675emi8kit18k.apps.googleusercontent.com
