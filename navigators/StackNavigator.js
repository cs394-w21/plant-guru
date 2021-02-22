import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import PlantInfoScreen from '../screens/PlantInfoScreen';
import UserInputScreen from '../screens/UserInputScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='UserInputScreen' component={UserInputScreen} options={{headerShown: false}} />
            <Stack.Screen name='HomeScreen' component={HomeScreen} options={{headerShown: false}} />
            <Stack.Screen name='PlantInfoScreen' component={PlantInfoScreen} options={{title: ''}} />
        </Stack.Navigator>
    );
};

export default StackNavigator;
