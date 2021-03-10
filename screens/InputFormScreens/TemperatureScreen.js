import React from 'react';
import { Image, View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import TemperatureInput from '../../components/Temperature';
import {windowWidth} from '../../constants/WindowSize';


const TemperatureScreen = (props) => {
  const {navigation, route} = props;

  const {sunlight} = route.params;

  return (
  <SafeAreaView style={styles.mainContainer}>
    <View style={styles.container}>
    <TemperatureInput 
    navigation={navigation}
    sunlight={sunlight} />
    </View>
  </SafeAreaView>);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECF0F3',
    alignItems: 'center',
    width: '90%',
    paddingTop: windowWidth*0.1,
    marginLeft: '5%'
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#ECF0F3',
    alignItems: 'center',
  }
})

export default TemperatureScreen;
