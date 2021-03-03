import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Image } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import HumidityScreen from '../screens/InputFormScreens/HumidityScreen';
import SizeScreen from '../screens/InputFormScreens/SizeScreen';
import SunlightScreen from '../screens/InputFormScreens/SunlightScreen';
import TemperatureScreen from '../screens/InputFormScreens/TemperatureScreen';
import PlantInfoScreen from '../screens/PlantInfoScreen';
import PlantResultsScreen from '../screens/PlantResultsScreen';
import RegisterScreen from '../screens/RegisterScreen';
import SearchScreen from '../screens/SearchScreen';
import UserInputScreen from '../screens/UserInputScreen';


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
            borderBottomWidth: 0,
            height: 200
          }}} />
            <Stack.Screen name='SearchScreen' component={SearchScreen} options={{headerTitle: ImageHeader, headerTitleAlign: 'center', title: ''}} />
            <Stack.Screen name='PlantResultsScreen' component={PlantResultsScreen} options={{headerTitle: ImageHeader, headerTitleAlign: 'center', title: ''}} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{headerTitle: ImageHeader, headerTitleAlign: 'center', title: ''}} />
            <Stack.Screen name='UserInputScreen' component={UserInputScreen} options={{headerTitle: ImageHeader, headerTitleAlign: 'center', title: '', headerLeft: null}} />
            <Stack.Screen name='PlantInfoScreen' component={PlantInfoScreen} options={{headerTitle: ImageHeader, headerTitleAlign: 'center', title: ''}} />
            <Stack.Screen name='SunlightScreen' component={SunlightScreen} options={{headerTitle: ImageHeader, headerTitleAlign: 'center', title: ''}} />
            <Stack.Screen name='TemperatureScreen' component={TemperatureScreen} options={{headerTitle: ImageHeader, headerTitleAlign: 'center', title: ''}} />
            <Stack.Screen name='SizeScreen' component={SizeScreen} options={{headerTitle: ImageHeader, headerTitleAlign: 'center', title: ''}} />
            <Stack.Screen name='HumidityScreen' component={HumidityScreen} options={{headerTitle: ImageHeader, headerTitleAlign: 'center', title: ''}} />
        </Stack.Navigator>
    );
};

export default StackNavigator;
