//conecting app to firebase - adding database, auth, storage
import firebase from 'firebase';

//api detains
const config = {
    apiKey: "AIzaSyAxY48vuJO6gbxEMVQcx4p88s-1OQ4lL9k",
    authDomain: "drip-1d5c2.firebaseapp.com",
    databaseURL: "https://drip-1d5c2.firebaseio.com",
    projectId: "drip-1d5c2",
    storageBucket: "drip-1d5c2.appspot.com",
    messagingSenderId: "688706937662",
    appId: "1:688706937662:web:1c9c28cdefd9a112bbc26f",
    measurementId: "G-T6BBGMSHX3"
  };

firebase.initializeApp(config)
export const f = firebase;
export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();  


