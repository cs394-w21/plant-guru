import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import RegisterForm from '../components/RegisterForm';

const RegisterScreen = ({navigation}) => {
    return(
        <RegisterForm navigation={navigation}/>
    );
};

export default RegisterScreen;