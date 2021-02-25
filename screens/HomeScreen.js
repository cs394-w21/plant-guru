import React from 'react';
import { Image, View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import PlantList from '../components/PlantList';
import getPlantData from '../utils/plantData';


const HomeScreen = (props) => {
    const { navigation, route } = props;
    const { sunlight, allergies, size, pets, children, effort, temperature, humidity } = route.params;
    const plants = getPlantData();
    const titleSource = 'https://res.cloudinary.com/dmxv5vtjt/image/upload/v1613604540/Plants/Screen_Shot_2021-02-17_at_5.28.37_PM_bfkeza.png';

    return (
      <SafeAreaView style={styles.container}>
          <Image resizeMode="stretch" style={styles.title} source={{uri: titleSource}} />
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
    },
    title: {
      width: 300,
      height: 100,
      borderRadius: 20,
      marginBottom: 10
    }
});

export default HomeScreen;
