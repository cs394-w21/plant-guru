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
  const plants_data = getPlantData();
  const { route, navigation } = props;
  const user = useContext(UserContext);
  const [plants, setPlants] = useState([]);
  // if (loading) {
  //     return <Text>Loading...</Text>
  // }
  if (user == null) {
    return (<Text style={styles.text}>Please log in</Text>);
  }
  const findFavorites = (favorites) => {
    const list = plants_data.filter(plant => favorites.includes(plant.id));
    return list;
  };
  
  useEffect(() => {
    const db = firebase.database().ref(`users/` + user.uid + `/favorites`);
    const handleData = snap => {
      if (snap.val()) setPlants(findFavorites(snap.val()));
    }
    db.on('value', handleData, error => alert(error));
    return () => { db.off('value', handleData); };
  }, []);
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.plantList}>
        {plants.length == 0 ? <Text style={styles.text}>You have not added any favorites</Text> :
          plants.map(plant => (
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
     flexGrow: 1,
      backgroundColor: '#ECF0F3',
      alignItems: 'center',
      justifyContent: 'center',
      width: windowWidth*0.9,
      flexDirection: 'row',
      flexWrap: 'wrap',
},
text: {
  color: '#7EA480',
  fontSize: 20,
  alignItems: 'center',
  textAlign: 'center',
  padding: windowWidth*0.03 
}
});

export default UserFavoriteScreen;