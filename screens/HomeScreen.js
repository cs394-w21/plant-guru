import React from 'react';
import { Image, View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import PlantList from '../components/PlantList';
import getPlantData from '../utils/plantData';


const HomeScreen = ({ navigation }) => {
    const plants = getPlantData();
    const titleSource = 'https://res.cloudinary.com/dmxv5vtjt/image/upload/v1613604540/Plants/Screen_Shot_2021-02-17_at_5.28.37_PM_bfkeza.png';

    return (
      <SafeAreaView style={styles.container}>
          <Image resizeMode="contain" style={styles.title} source={{uri: titleSource}} />
          <PlantList plants={plants} navigation={navigation} />
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
    }
});

export default HomeScreen;
