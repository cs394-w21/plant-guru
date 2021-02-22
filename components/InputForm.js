import React, {useState} from "react";
import { View, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import SunlightInput from './SunlightInput';

const InputForm = (props) => {
  const {navigation} = props;
  return (
    <View>
      <SunlightInput />
    </View>
  )
};

export default InputForm;
