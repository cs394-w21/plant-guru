import React, {useContext} from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import {windowWidth} from '../constants/WindowSize';
import fetchUserData from '../utils/fetchData';
import writeUserData from '../utils/writeData';
import UserContext from '../contexts/UserContext';
import { useState, useCallback, useEffect } from "react";
import {firebase} from "../utils/firebase";

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
        const db = firebase.database().ref('users/MAJv5Qmlh3c5qqy1yYWs4p5OvgT2/favorites');
        const handleData = snap => {
          if (snap.val()) setPlants(snap.val()); //not fixCourses, of course, presumably this is where it's set
        }
        db.on('value', handleData, error => alert(error));
        return () => { db.off('value', handleData); };
      }, []);
    return <Text>{plants[0]}</Text>
}

export default UserFavoriteScreen;