import React, {useContext} from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import {windowWidth} from '../constants/WindowSize';
import fetchUserData from '../utils/fetchData';
import writeUserData from '../utils/writeData';
import UserContext from '../contexts/UserContext';
import { useState, useCallback, useEffect } from "react";
import { db as database} from "../utils/firebase";

const UserFavoriteScreen = (props) => {
    //to do: basically do PlantList in here, exact same functionality as PlantResultsScreen
    //also to do: add an icon for this to HomeScreen, but only if user is logged in?
    const {route, navigation} = props;
    const user = useContext(UserContext);
    const {loading, userData} = (user && user.uid)? fetchUserData(user.uid) : {loading: false, userData: null};
    const [plants, setPlants] = useState([]);
    if (loading) {
        return <Text>Loading...</Text>
    }
    useEffect(() => {
        const db = firebase.database().ref();
        const handleData = snap => {
          if (snap.val()) setPlants(fixCourses(snap.val())); //not fixCourses, of course, presumably this is where it's set
        }
        db.on('value', handleData, error => alert(error));
        return () => { db.off('value', handleData); };
      }, []);
    // const fetchPlantFavoritesData = (userID, userData) => {
    //     //const [userData, updateUserDataInternal] = useState("");
      
    //     // Use callback as to not constantly recreate function definition
    //     useEffect(() => {
    //       const db = database.ref();
    //       db.on("value", updateUserData, window.alert);
      
    //       return () => {
    //         db.off("value", updateUserData);
    //       };
    //     }, [updateUserData]);
      
    //     return {
    //       loading: !userData,
    //       userData: getUserData(userData, userID),
    //     };
    //   };
}

export default UserFavoriteScreen;