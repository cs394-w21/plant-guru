import React, {useState} from 'react';
import { Image, View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import SunlightInput from '../../components/Sunlight';


const SunglightScreen = (props) => {
  const {navigation} = props;

  return (
  <SafeAreaView>
    <SunlightInput navigation={navigation} />
  </SafeAreaView>);
};

export default SunglightScreen;

// sunlight={sunlight}
//     updateSunlight={updateSunlight}
//     allergies={allergies}
//     updateAllergies={updateAllergies}
//     size={size}
//     updateSize={updateSize}
//     pets={pets}
//     setPets={setPets}
//     children={children}
//     setChildren={setChildren}
//     effort={effort}
//     setEffort={setEffort}
//     temperature={temperature}
//     setTemperature={setTemperature}
//     humidity={humidity}
//     setHumidity={setHumidity}
