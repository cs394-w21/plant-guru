import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import PlantList from '../components/PlantList';
import SearchBar from '../components/SearchBar';
import getPlantData from '../utils/plantData';


const PlantResultsScreen = (props) => {
    const { navigation, route } = props;
    const { sunlight, allergies, size, pets, children, effort, temperature, humidity } = route.params;
    const plants = getPlantData();

    return (
      <SafeAreaView style={styles.container}>
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
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#006400',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: 20,
      width: '100%',
    }
});

export default PlantResultsScreen;
