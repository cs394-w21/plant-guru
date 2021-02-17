import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import getPlantData from './utils/plantData';
import PlantList from './components/PlantList';

export default function App() {
  const plants = getPlantData();
  const titleSource = 'https://res.cloudinary.com/dmxv5vtjt/image/upload/v1613604540/Plants/Screen_Shot_2021-02-17_at_5.28.37_PM_bfkeza.png';
  return (
    <View style={styles.container}>
      <Image resizeMode="contain" style={styles.title} source={{uri: titleSource}} />
      <PlantList plants={plants}></PlantList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#006400',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20
  },
  title: {
    width: 300,
    height: 100
  }
});
