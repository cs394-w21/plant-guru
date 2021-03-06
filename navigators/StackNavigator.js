import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Image, Text, TouchableOpacity} from 'react-native';
import {windowWidth} from '../constants/WindowSize';
import HomeScreen from '../screens/HomeScreen';
import AdditionalQuestionsScreen from '../screens/InputFormScreens/AdditionalQuestionsScreen';
import HumidityScreen from '../screens/InputFormScreens/HumidityScreen';
import IntroScreen from '../screens/InputFormScreens/IntroScreen';
import SizeScreen from '../screens/InputFormScreens/SizeScreen';
import SunlightScreen from '../screens/InputFormScreens/SunlightScreen';
import TemperatureScreen from '../screens/InputFormScreens/TemperatureScreen';
import PlantInfoScreen from '../screens/PlantInfoScreen';
import PlantResultsScreen from '../screens/PlantResultsScreen';
import RegisterScreen from '../screens/RegisterScreen';
import SearchScreen from '../screens/SearchScreen';
import UserFavoriteScreen from '../screens/UserFavoriteScreen';

const logo = 'https://res.cloudinary.com/dmxv5vtjt/image/upload/v1614279936/Plants/plantguru_Leaf-01_chbb3p.png';

const ImageHeader = ({navigation}) => (
    <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
    <Image
      style={{ width: windowWidth*0.5, height: windowWidth*0.1 }}
      source={{uri: logo}}
      resizeMode='contain'
    />
    </TouchableOpacity>
  )

const HomePageHeader = (props) => (
  <>
  <Text
    style={{ color: '#7EA480',
    fontSize: 25,
    alignItems: 'center',
    textAlign: 'center' }}
  >
    Welcome to
  </Text>
  <Image
    style={{ width: windowWidth*0.5, height: windowWidth*0.15}}
    source={{uri: logo}}
    resizeMode='contain'
  />
  </>
)

const Stack = createStackNavigator();

const headerStyle = {
  backgroundColor: '#ECF0F3',
  borderBottomWidth: 0,
  height: 125
};

const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='HomeScreen' component={HomeScreen} options={{headerTitle: HomePageHeader, headerTitleAlign: 'center', title: '', headerStyle: headerStyle }} />
            <Stack.Screen name='SearchScreen' component={SearchScreen} options={({navigation}) => ({headerTitle: <ImageHeader navigation={navigation} />, headerTitleAlign: 'center', title: '', headerStyle: headerStyle})} />
            <Stack.Screen name='PlantResultsScreen' component={PlantResultsScreen} options={({navigation}) => ({headerTitle: <ImageHeader navigation={navigation} />, headerTitleAlign: 'center', title: '', headerStyle: headerStyle})} />
            <Stack.Screen name='UserFavoriteScreen' component={UserFavoriteScreen} options={({navigation}) => ({headerTitle: <ImageHeader navigation={navigation} />, headerTitleAlign: 'center', title: '', headerStyle: headerStyle})} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={({navigation}) => ({headerTitle: <ImageHeader navigation={navigation} />, headerTitleAlign: 'center', title: '', headerStyle: headerStyle})} />
            <Stack.Screen name='PlantInfoScreen' component={PlantInfoScreen} options={({navigation}) => ({headerTitle: <ImageHeader navigation={navigation} />, headerTitleAlign: 'center', title: '', headerStyle: headerStyle})} />
            <Stack.Screen name='IntroScreen' component={IntroScreen} options={({navigation}) => ({headerTitle: <ImageHeader navigation={navigation} />, headerTitleAlign: 'center', title: '', headerStyle: headerStyle})} />
            <Stack.Screen name='SunlightScreen' component={SunlightScreen} options={({navigation}) => ({headerTitle: <ImageHeader navigation={navigation} />, headerTitleAlign: 'center', title: '', headerStyle: headerStyle})} />
            <Stack.Screen name='TemperatureScreen' component={TemperatureScreen} options={({navigation}) => ({headerTitle: <ImageHeader navigation={navigation} />, headerTitleAlign: 'center', title: '', headerStyle: headerStyle})} />
            <Stack.Screen name='SizeScreen' component={SizeScreen} options={({navigation}) => ({headerTitle: <ImageHeader navigation={navigation} />, headerTitleAlign: 'center', title: '', headerStyle: headerStyle})} />
            <Stack.Screen name='HumidityScreen' component={HumidityScreen} options={({navigation}) => ({headerTitle: <ImageHeader navigation={navigation} />, headerTitleAlign: 'center', title: '', headerStyle: headerStyle})} />
            <Stack.Screen name='AdditionalQuestionsScreen' component={AdditionalQuestionsScreen} options={({navigation}) => ({headerTitle: <ImageHeader navigation={navigation} />, headerTitleAlign: 'center', title: '', headerStyle: headerStyle})} />
        </Stack.Navigator>
    );
};

export default StackNavigator;
