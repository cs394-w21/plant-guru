import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import AdditionalQuestions from '../../components/AdditionalQuestions';

const AdditionalQuestionsScreen = (props) => {
  const {navigation, route} = props;

  const {sunlight, temperature, size, humidity} = route.params;

  return (
  <SafeAreaView style={styles.container}>
    <AdditionalQuestions
        navigation={navigation}
        sunlight={sunlight}
        temperature={temperature}
        size={size}
        humidity={humidity}
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


export default AdditionalQuestionsScreen;
