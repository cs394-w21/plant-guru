import React from 'react';
import { Image, View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import SizeInput from '../../components/PlantSize';


const SizeScreen = (props) => {
  const {navigation, route} = props;

  // const {
  //   sunlight,
  //   updateSunlight,
  //   allergies,
  //   updateAllergies,
  //   size,
  //   updateSize,
  //   pets,
  //   setPets,
  //   children,
  //   setChildren,
  //   effort,
  //   setEffort,
  //   temperature,
  //   setTemperature,
  //   humidity,
  //   setHumidity
  // } = route.params;

  const {sunlight, temperature} = route.params;

  return (
  <SafeAreaView>
    <SizeInput 
    navigation={navigation}
    sunlight={sunlight}
    temperature={temperature} />
  </SafeAreaView>);
};

export default SizeScreen;
