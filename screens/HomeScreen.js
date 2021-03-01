import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import PlantList from '../components/PlantList';
import SearchBar from '../components/SearchBar';
import getPlantData from '../utils/plantData';


const HomeScreen = (props) => {
    const { navigation, route } = props;
    const { sunlight, allergies, size, pets, children, effort, temperature, humidity } = route.params;
    const plants = getPlantData();
    const [query, setQuery] = useState('');

    return (
      <SafeAreaView style={styles.container}>
          <SearchBar query={query} setQuery={setQuery} />
          <PlantList
            query={query}
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

export default HomeScreen;
