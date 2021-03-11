import React from 'react';
import { Image, View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import SizeInput from '../../components/PlantSize';
import {windowWidth} from '../../constants/WindowSize';


const SizeScreen = (props) => {
  const {navigation, route} = props;

  const {sunlight, temperature} = route.params;

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.container}>
      <SizeInput 
        navigation={navigation}
        sunlight={sunlight}
        temperature={temperature} />
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
    paddingLeft: windowWidth*0.05,
    flexDirection: 'column',
    flexWrap: 'wrap',
    flex: 1,
    justifyContent: 'flex-start'
  }
})


export default SizeScreen;
