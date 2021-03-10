import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import AdditionalQuestions from '../../components/AdditionalQuestions';
import {windowWidth} from '../../constants/WindowSize';

const AdditionalQuestionsScreen = (props) => {
  const {navigation, route} = props;

  const {sunlight, temperature, size, humidity} = route.params;

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.container}>
    <AdditionalQuestions
        navigation={navigation}
        sunlight={sunlight}
        temperature={temperature}
        size={size}
        humidity={humidity}
    />
    </ScrollView>
  </SafeAreaView>);
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#ECF0F3',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
  },
  container: {
    width: windowWidth,
    padding: windowWidth*0.1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center'
  }
})


export default AdditionalQuestionsScreen;
