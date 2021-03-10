import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import PlantList from '../components/PlantList';
import SearchBar from '../components/SearchBar';
import { windowHeight, windowWidth } from '../constants/WindowSize';
import getPlantData from '../utils/plantData';


const PlantResultsScreen = (props) => {
    const { navigation, route } = props;
    const { sunlight, allergies, size, pets, children, effort, temperature, humidity } = route.params;
    const plants = getPlantData();

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.resultsContainer}>
          <PlantList
            plants={plants}
            navigation={navigation}
            sunlight={sunlight}
            allergies={allergies}
            size={size}
            pets={pets}
            children={children}
            effort={effort}
            temperature={temperature}
            humidity={humidity}
          />
          </ScrollView>
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    backgroundColor: '#ECF0F3',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    },
    resultsContainer: {
      flexGrow: 1,
      backgroundColor: '#ECF0F3',
      alignItems: 'center',
      justifyContent: 'center',
      width: windowWidth*0.9,
      flexDirection: 'row',
      flexWrap: 'wrap'
    }
});

export default PlantResultsScreen;
