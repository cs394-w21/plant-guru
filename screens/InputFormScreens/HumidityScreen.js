import React from 'react';
import { SafeAreaView } from 'react-native';
import Humidity from '../../components/Humidity';

const HumidityScreen = (props) => {
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

  const {sunlight, temperature, size} = route.params;

  return (
  <SafeAreaView>
    <Humidity
        navigation={navigation}
        sunlight={sunlight}
        temperature={temperature}
        size={size}
    />
  </SafeAreaView>);
};

export default HumidityScreen;
