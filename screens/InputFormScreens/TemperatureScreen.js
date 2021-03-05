import React from 'react';
import { Image, View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import TemperatureInput from '../../components/Temperature';


const TemperatureScreen = (props) => {
  const {navigation, route} = props;

  const {sunlight} = route.params;

  return (
  <SafeAreaView style={styles.container}>
    <TemperatureInput 
    navigation={navigation}
    sunlight={sunlight} />
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

export default TemperatureScreen;
