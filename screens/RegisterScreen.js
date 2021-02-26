import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import RegisterForm from '../components/RegisterForm';

const RegisterScreen = ({navigation}) => {
    return(
        <SafeAreaView><RegisterForm navigation={navigation}/></SafeAreaView>
    );
};

export default RegisterScreen;