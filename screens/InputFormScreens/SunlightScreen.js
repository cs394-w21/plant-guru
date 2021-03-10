import React, {useState} from 'react';
import { Image, View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Directions } from 'react-native-gesture-handler';
import SunlightInput from '../../components/Sunlight';
import { windowWidth } from '../../constants/WindowSize';


const SunglightScreen = (props) => {
  const {navigation} = props;

  return (
  <SafeAreaView style={styles.mainContainer}>
    <ScrollView contentContainerStyle={styles.container}>
    <SunlightInput navigation={navigation} />
    </ScrollView>
  </SafeAreaView>);
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#ECF0F3',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
  },
  container: {
    width: windowWidth*0.9,
    alignItems: 'center',
    padding: windowWidth*0.1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    flex: 1,
  }
})

export default SunglightScreen;
