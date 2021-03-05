import React from 'react';
import { Image, View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import SizeInput from '../../components/PlantSize';


const SizeScreen = (props) => {
  const {navigation, route} = props;

  const {sunlight, temperature} = route.params;

  return (
  <SafeAreaView style={styles.container}>
    <SizeInput 
    navigation={navigation}
    sunlight={sunlight}
    temperature={temperature} />
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


export default SizeScreen;
