import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Image, View, StyleSheet} from 'react-native';
import PlantResultsScreen from '../screens/PlantResultsScreen';
import PlantInfoScreen from '../screens/PlantInfoScreen';
import UserInputScreen from '../screens/UserInputScreen';
import RegisterScreen from '../screens/RegisterScreen';
import SearchScreen from '../screens/SearchScreen';
import HomeScreen from '../screens/HomeScreen';

const logo = 'https://res.cloudinary.com/dmxv5vtjt/image/upload/v1614279936/Plants/plantguru_Leaf-01_chbb3p.png';

const ImageHeader = (props) => (
    <Image
      style={{ width: 200, height: 50 }}
      source={{uri: logo}}
      resizeMode='contain'
    />
  )

const Stack = createStackNavigator();



const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='HomeScreen' component={HomeScreen} options={{headerTitle: ImageHeader, headerTitleAlign: 'center', title: '', headerStyle: {
            backgroundColor: '#ECF0F3',
          }}} />
            <Stack.Screen name='SearchScreen' component={SearchScreen} options={{headerTitle: ImageHeader, headerTitleAlign: 'center', title: ''}} />
            <Stack.Screen name='PlantResultsScreen' component={PlantResultsScreen} options={{headerTitle: ImageHeader, headerTitleAlign: 'center', title: ''}} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{headerTitle: ImageHeader, headerTitleAlign: 'center', title: ''}} />
            <Stack.Screen name='UserInputScreen' component={UserInputScreen} options={{headerTitle: ImageHeader, headerTitleAlign: 'center', title: '', headerLeft: null}} />
            <Stack.Screen name='PlantInfoScreen' component={PlantInfoScreen} options={{headerTitle: ImageHeader, headerTitleAlign: 'center', title: ''}} />
        </Stack.Navigator>
    );
};

export default StackNavigator;
