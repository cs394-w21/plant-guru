import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import StackNavigator from './navigators/StackNavigator';


export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
