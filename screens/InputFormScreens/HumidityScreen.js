import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import Humidity from '../../components/Humidity';
import {windowWidth} from '../../constants/WindowSize';

const HumidityScreen = (props) => {
  const {navigation, route} = props;

  const {sunlight, temperature, size} = route.params;

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.container}>
    <Humidity
        navigation={navigation}
        sunlight={sunlight}
        temperature={temperature}
        size={size}
    />
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

export default HumidityScreen;
