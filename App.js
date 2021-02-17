import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import getPlantData from './utils/plantData';

export default function App() {
  const plants = getPlantData();
  return (
    <View style={styles.container}>
      <Text>{plants.length>0 ? plants[2]['Plant name'] : 'Loading...'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
