import React, {useContext} from 'react';
import { Text, Image, ScrollView, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import {windowWidth, windowHeight} from '../constants/WindowSize';
import fetchUserData from '../utils/fetchData';
import UserContext from '../contexts/UserContext';
import { useState, useCallback, useEffect } from "react";
import {firebase} from "../utils/firebase";
import getPlantData from '../utils/plantData';
import Plant from "../components/Plant";


const UserFavoriteScreen = (props) => {
    //to do: basically do PlantList in here, exact same functionality as PlantResultsScreen
    //also to do: add an icon for this to HomeScreen, but only if user is logged in?
    const plants_data = getPlantData();
    const {route, navigation} = props;
    const user = useContext(UserContext);
    //const {loading, userData} = fetchUserData(user.uid);
    //const {loading, userData} = (user && user.uid)? {loading: loading1, userData: userData1} : {loading: false, userData: null};
    const [plants, setPlants] = useState([]);
    // if (loading) {
    //     return <Text>Loading...</Text>
    // }
    if (user == null) {
      return (<Text>Please log in</Text>);//TODO: make this look nicer; maybe redirect to login screen
    }
    const filteredPlants = () => {
      return plants_data.filter(plant => plants.includes(plant.id));
    }
    const list = filteredPlants();
    console.log(user.uid)
    useEffect(() => {
      //QvigR1WIdcQkmmqKtHnoB40ZSMo1
        const db = firebase.database().ref(`users/`+user.uid+`/favorites`); //TODO: user user.uid instead
        const handleData = snap => {
          if (snap.val()) setPlants(snap.val());
        }
        db.on('value', handleData, error => alert(error));
        return () => { db.off('value', handleData); };
      }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.plantList}>
        {list.map(plant => (
          <Plant plant={plant} key={plant.id} navigation={navigation} />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECF0F3',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%', 
  },
  plantList: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    // alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth,
    height: windowHeight,
},
});

export default UserFavoriteScreen;