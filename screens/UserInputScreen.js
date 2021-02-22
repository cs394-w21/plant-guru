import React from 'react';
import { Image, View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import InputForm from '../components/InputForm';


const UserInputScreen = (props) => {
  const {navigation} = props;

  return (
  <View>
    <InputForm navigation={navigation} />
  </View>);
};

export default UserInputScreen;
