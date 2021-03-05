import React from 'react';
import { Image, View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import AdditionalQuestions from '../components/AdditionalQuestions';


const UserInputScreen = (props) => {
  const {navigation} = props;

  return (
  <View>
    <AdditionalQuestions navigation={navigation} />
  </View>);
};

export default UserInputScreen;
