import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import PlantInfoScreen from '../screens/PlantInfoScreen';


const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
            <Stack.Screen name='PlantInfoScreen' component={PlantInfoScreen} />
        </Stack.Navigator>
    );
};

export default StackNavigator;
