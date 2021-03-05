import React, {useState} from 'react';
import { Image, View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import SunlightInput from '../../components/Sunlight';


const SunglightScreen = (props) => {
  const {navigation} = props;

  return (
  <SafeAreaView style={styles.container}>
    <SunlightInput navigation={navigation} />
  </SafeAreaView>);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECF0F3',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  }
})

export default SunglightScreen;
