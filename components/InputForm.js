import React, {useState} from "react";
import { View, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import SunlightInput from './SunlightInput';
import Allergies from './Allergies';
import PlantSize from './PlantSize';

const InputForm = (props) => {
  const {navigation} = props;
  return (
    <View>
      <SunlightInput />
      <Allergies />
      <PlantSize />
    </View>
  )
};

export default InputForm;
