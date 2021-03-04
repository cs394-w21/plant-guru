import React from 'react';
import { SafeAreaView } from 'react-native';
import AdditionalQuestions from '../../components/AdditionalQuestions';

const AdditionalQuestionsScreen = (props) => {
  const {navigation, route} = props;

  const {sunlight, temperature, size, humidity} = route.params;

  return (
  <SafeAreaView>
    <AdditionalQuestions
        navigation={navigation}
        sunlight={sunlight}
        temperature={temperature}
        size={size}
        humidity={humidity}
    />
  </SafeAreaView>);
};

export default AdditionalQuestionsScreen;
