import firebase from "firebase/app";
import "firebase/database";
import 'firebase/auth';

//REPLACE THE FOLLOWING WITH ACTUAL CREDENTIALS FROM YOUR FIREBASE PROJECT
const firebaseConfig = {
    apiKey: "abcd",
    authDomain: "abcd.firebaseapp.com",
    databaseURL: "https://abcd-default-rtdb.firebaseio.com",
    projectId: "abcd",
    storageBucket: "abcd.appspot.com",
    messagingSenderId: "1234",
    appId: "1:234:web:567",
    measurementId: "G-1234"
  };

  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();

  export {db, firebase};