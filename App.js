import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import getPlantData from './utils/plantData';
import PlantList from './components/PlantList';

export default function App() {
  const plants = getPlantData();
  return (
    <View style={styles.container}>
      <PlantList plants={plants}></PlantList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    
  },
});
