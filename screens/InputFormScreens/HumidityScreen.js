import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Humidity from '../../components/Humidity';

const HumidityScreen = (props) => {
  const {navigation, route} = props;

  const {sunlight, temperature, size} = route.params;

  return (
  <SafeAreaView style={styles.container}>
    <Humidity
        navigation={navigation}
        sunlight={sunlight}
        temperature={temperature}
        size={size}
    />
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

export default HumidityScreen;
