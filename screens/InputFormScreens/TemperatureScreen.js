import React from 'react';
import { Image, View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import TemperatureInput from '../../components/Temperature';


const TemperatureScreen = (props) => {
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

  const {sunlight} = route.params;

  return (
  <SafeAreaView>
    <TemperatureInput 
    navigation={navigation}
    sunlight={sunlight} />
  </SafeAreaView>);
};

export default TemperatureScreen;
