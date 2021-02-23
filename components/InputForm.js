import React from "react";
import { View, StyleSheet } from "react-native";
import Allergies from './Allergies';
import CareEffort from "./CareEffort";
import Children from "./Children";
import Pets from "./Pets";
import PlantSize from './PlantSize';
import SunlightInput from './SunlightInput';

const InputForm = (props) => {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <SunlightInput />
      <Allergies />
      <PlantSize />
      <Pets />
      <Children />
      <CareEffort />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
});

export default InputForm;
