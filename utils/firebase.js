import firebase from "firebase/app";
import "firebase/database";
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBVPMMdmnSlGokdTr0BWUwhnw0TjGp0CLk",
    authDomain: "plant-guru.firebaseapp.com",
    databaseURL: "https://plant-guru-default-rtdb.firebaseio.com",
    projectId: "plant-guru",
    storageBucket: "plant-guru.appspot.com",
    messagingSenderId: "515763802937",
    appId: "1:515763802937:web:652496b221833598f48ee8",
    measurementId: "G-664Q2YPL1E"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();

  export {db, firebase};